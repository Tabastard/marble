'use strict';
/* ======================================================================
   EFFECT STUDIO: the shared interface for scrub-able effect studies.
   An effect page links studio.css, loads this file inside <body>, defines its effect and calls Studio.run({...}).
   The contract is in ../BUILDER.md. Effects never edit this file: a fix here reaches every effect.

   Everything declared at the top level is meant for effects to use, so an effect must not redeclare these names:
     math   $ D2R clamp sat lerp smooth ease norm3 cross dot3 mulberry hash2 persp lookAt mul4 inv4 hex2lin heatC heatI gp sp
     GL     canvas gl HDR shader program use L u1 ui u2 u3 u4 um bindTex tex2 mkfbo hdrTex buildNoise lathe meshVAO triVAO groundMesh
     GLSL   FH VS_TRI G_COMMON (ss and the heat ramp)
     state  S (the settings, edited in place) ON (which phases are on) cam F (render targets) Stage Studio isPhone fail
   ====================================================================== */

/* the page's interface, built before anything else so the canvas exists for GL */
document.body.insertAdjacentHTML('afterbegin',`
<canvas id="gl"></canvas>
<div id="panel" class="pane">
  <div class="grip" id="gPanel" title="Drag to move, double-click to dock"></div>
  <div id="ptabs"><button id="bTL" title="Timeline effects">Timeline</button><div class="div"></div></div>
  <div id="pbody"><div id="idx"></div><div id="page"></div></div>
  <div id="prow">
    <select id="pSel" title="Presets: choosing one loads it"></select>
    <input id="pName" type="text" placeholder="Name, then Enter" hidden>
    <button class="ib" data-i="save" id="pSave" title="Save preset"></button>
    <button class="ib" data-i="trash" id="pDel" title="Delete selected preset"></button>
    <button class="ib" data-i="export" id="pExp" title="Export settings as JSON"></button>
    <button class="ib" data-i="import" id="pImp" title="Import settings from JSON"></button>
    <button class="ib" data-i="copy" id="pCopy" title="Copy settings JSON"></button>
    <button class="ib mob" data-i="close" id="bSheetX" title="Close settings"></button>
    <input id="pFile" type="file" accept=".json,application/json" hidden>
  </div>
</div>
<div id="rail" class="pane">
  <button class="ib mob" data-i="sliders" id="bSettings" title="Settings"></button>
</div>
<button class="ib" data-i="stats" id="bStats" title="Performance stats"></button>
<div id="flyCam" class="pane fly" hidden><span id="cams" style="display:flex;flex-direction:column;gap:1px"></span></div>
<div id="tl" class="pane">
  <div class="grip" id="gTl" title="Drag to move, double-click to dock"></div>
  <div id="tlBody">
    <div id="rows"></div>
    <div id="gut"><div id="clock" title="Where the playhead is, out of the whole timeline (seconds)"></div></div>
    <div id="track"><div id="ruler"></div><div id="lanes"></div><div id="head"><i></i></div><div id="tip" hidden></div></div>
  </div>
</div>
<div id="act" class="pane">
  <button id="bGo"></button>
  <button class="ib" data-i="play" id="bNP" title="Play / pause (P)" aria-label="Play or pause"></button>
  <button class="tb" id="bSpeed" title="Playback speed: click to cycle 1×, ½×, ¼×">1×</button>
  <button class="ib" data-i="camera" id="bCam" title="Camera views" aria-label="Camera views"></button>
  <button class="ib" data-i="size" id="bSize" aria-expanded="false"></button>
  <div id="sizeOut"><input id="size" type="range" min="0" max="1" step="0.01"><output id="sizeV" for="size"></output></div>
</div>
<div id="stats" class="pane" hidden></div>
<div id="notes" class="pane" hidden></div>
<button id="restore" class="ib" data-i="eye" title="Show UI (H or Esc)"></button>
<div id="sheet" hidden>
  <img id="sheetImg" alt="Contact sheet">
  <div class="pane" style="position:static;padding:3px"><button class="ib" data-i="export" id="sheetSave" title="Save as PNG"></button><button class="ib" data-i="close" id="sheetClose" title="Close (Esc)"></button></div>
</div>
<div id="err" hidden></div>`);

/* ======================================================================
   MATH
   ====================================================================== */
const $=s=>document.querySelector(s);
const D2R=Math.PI/180;
const clamp=(x,a,b)=>Math.min(Math.max(x,a),b),sat=x=>clamp(x,0,1),lerp=(a,b,u)=>a+(b-a)*u;
const smooth=(a,b,x)=>{const t=sat((x-a)/(b-a));return t*t*(3-2*t)},ease=t=>t*t*(3-2*t);
const norm3=v=>{const l=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]};
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const dot3=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function hash2(a,b){let h=Math.imul(a|0,374761393)^Math.imul(b|0,668265263);h=Math.imul(h^h>>>13,1274126177);return((h^h>>>16)>>>0)/4294967296}
function persp(fovy,asp,n,f){const t=1/Math.tan(fovy/2),o=new Float32Array(16);o[0]=t/asp;o[5]=t;o[10]=(f+n)/(n-f);o[11]=-1;o[14]=2*f*n/(n-f);return o}
function lookAt(e,c,u){const z=norm3([e[0]-c[0],e[1]-c[1],e[2]-c[2]]),x=norm3(cross(u,z)),y=cross(z,x);
  return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot3(x,e),-dot3(y,e),-dot3(z,e),1])}
function mul4(a,b){const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)o[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];return o}
function inv4(a){
  const a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];
  const b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,
        b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;
  const det=1/(b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06),o=new Float32Array(16);
  o[0]=(a11*b11-a12*b10+a13*b09)*det;o[1]=(a02*b10-a01*b11-a03*b09)*det;o[2]=(a31*b05-a32*b04+a33*b03)*det;o[3]=(a22*b04-a21*b05-a23*b03)*det;
  o[4]=(a12*b08-a10*b11-a13*b07)*det;o[5]=(a00*b11-a02*b08+a03*b07)*det;o[6]=(a32*b02-a30*b05-a33*b01)*det;o[7]=(a20*b05-a22*b02+a23*b01)*det;
  o[8]=(a10*b10-a11*b08+a13*b06)*det;o[9]=(a01*b08-a00*b10-a03*b06)*det;o[10]=(a30*b04-a31*b02+a33*b00)*det;o[11]=(a21*b02-a20*b04-a23*b00)*det;
  o[12]=(a11*b07-a10*b09-a12*b06)*det;o[13]=(a00*b09-a01*b07+a02*b06)*det;o[14]=(a31*b01-a30*b03-a32*b00)*det;o[15]=(a20*b03-a21*b01+a22*b00)*det;
  return o}
function fail(msg){const e=$('#err');e.hidden=false;e.textContent+=msg+'\n\n';console.error(msg)}
const hex2lin=h=>{const n=parseInt(h.slice(1),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255].map(v=>Math.pow(v,2.2))};
function heatC(t){t=Math.max(t,0);let c=[0,0,0];const mx=(b,u)=>{c=[lerp(c[0],b[0],u),lerp(c[1],b[1],u),lerp(c[2],b[2],u)]};
  mx([.55,.035,0],sat(t/.2));mx([1,.27,.03],sat((t-.2)/.25));mx([1,.7,.2],sat((t-.45)/.25));mx([1,.97,.82],sat((t-.7)/.3));return c}
const heatI=t=>t*t*9+t*.6;

/* settings: S holds them and is only ever edited in place, so an effect may keep a reference; gp/sp read and write a dotted path */
const S={},ON={};
const gp=p=>p.split('.').reduce((o,k)=>o[k],S);
const sp=(p,v)=>{const ks=p.split('.'),l=ks.pop();ks.reduce((o,k)=>o[k],S)[l]=v};

/* ======================================================================
   GL KIT
   ====================================================================== */
const canvas=$('#gl');
const gl=canvas.getContext('webgl2',{antialias:false,alpha:false,depth:false,powerPreference:'high-performance'});
if(!gl)fail('WebGL2 is not available in this browser.');
let HDR=!!gl.getExtension('EXT_color_buffer_float')||!!gl.getExtension('EXT_color_buffer_half_float');
gl.getExtension('OES_texture_float_linear');
function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);
  if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))fail('Shader compile error:\n'+gl.getShaderInfoLog(s)+'\n'+src.split('\n').map((l,i)=>(i+1)+': '+l).join('\n').slice(0,6000));
  return s}
function program(vs,fs,name){const p=gl.createProgram();gl.attachShader(p,shader(gl.VERTEX_SHADER,vs));gl.attachShader(p,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(p);
  if(!gl.getProgramParameter(p,gl.LINK_STATUS))fail('Link error ('+name+'): '+gl.getProgramInfoLog(p));
  const u={},n=gl.getProgramParameter(p,gl.ACTIVE_UNIFORMS);
  for(let i=0;i<n;i++){const inf=gl.getActiveUniform(p,i);u[inf.name.replace(/\[0\]$/,'')]=gl.getUniformLocation(p,inf.name)}
  return{p,u}}

let cur=null;
const use=p=>{cur=p;gl.useProgram(p.p)};
const L=n=>cur.u[n]||null;
const u1=(n,v)=>gl.uniform1f(L(n),v),ui=(n,v)=>gl.uniform1i(L(n),v),u2=(n,v)=>gl.uniform2f(L(n),v[0],v[1]),
      u3=(n,v)=>gl.uniform3f(L(n),v[0],v[1],v[2]),u4=(n,v)=>gl.uniform4f(L(n),v[0],v[1],v[2],v[3]),um=(n,m)=>gl.uniformMatrix4fv(L(n),false,m);
const bindTex=(unit,target,t)=>{gl.activeTexture(gl.TEXTURE0+unit);gl.bindTexture(target,t)};
function tex2(w,h,ifmt,fmt,type,filt){const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,ifmt,w,h,0,fmt,type,null);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,filt);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,filt);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);return t}
function mkfbo(c,d){const f=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,f);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,c,0);
  if(d)gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,d,0);return f}
const hdrTex=(w,h)=>HDR?tex2(w,h,gl.RGBA16F,gl.RGBA,gl.HALF_FLOAT,gl.LINEAR):tex2(w,h,gl.RGBA8,gl.RGBA,gl.UNSIGNED_BYTE,gl.LINEAR);

/* tiling 3D noise: R = Perlin-Worley billow, G = Worley detail, B/A = smooth value fbm */
function buildNoise(N){
  const rnd=mulberry(90210);
  const tab=(f,c)=>{const a=new Float32Array(f*f*f*c);for(let i=0;i<a.length;i++)a[i]=rnd();return a};
  const wf=[3,6,12,8,16],vf=[4,8,16,5,10,20],WT=wf.map(f=>tab(f,3)),VT=vf.map(f=>tab(f,1));
  const worley=(k,x,y,z)=>{const f=wf[k],t=WT[k],px=x*f,py=y*f,pz=z*f,ix=Math.floor(px),iy=Math.floor(py),iz=Math.floor(pz);let m=9;
    for(let dz=-1;dz<=1;dz++)for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
      const cx=ix+dx,cy=iy+dy,cz=iz+dz,i=((((cz%f)+f)%f*f+((cy%f)+f)%f)*f+((cx%f)+f)%f)*3;
      const ox=cx+t[i]-px,oy=cy+t[i+1]-py,oz=cz+t[i+2]-pz,d=ox*ox+oy*oy+oz*oz;if(d<m)m=d}
    return 1-Math.min(Math.sqrt(m),1)};
  const vnoise=(k,x,y,z)=>{const f=vf[k],t=VT[k],px=x*f,py=y*f,pz=z*f,ix=Math.floor(px),iy=Math.floor(py),iz=Math.floor(pz);
    let fx=px-ix,fy=py-iy,fz=pz-iz;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);fz=fz*fz*(3-2*fz);
    const x0=ix%f,x1=(ix+1)%f,y0=iy%f,y1=(iy+1)%f,z0=iz%f,z1=(iz+1)%f,g=(a,b,c)=>t[(c*f+b)*f+a];
    return lerp(lerp(lerp(g(x0,y0,z0),g(x1,y0,z0),fx),lerp(g(x0,y1,z0),g(x1,y1,z0),fx),fy),lerp(lerp(g(x0,y0,z1),g(x1,y0,z1),fx),lerp(g(x0,y1,z1),g(x1,y1,z1),fx),fy),fz)};
  const n3=N*N*N,Fd=new Float32Array(n3*4),mn=[9,9,9,9],mx=[-9,-9,-9,-9];let i=0;
  for(let z=0;z<N;z++)for(let y=0;y<N;y++)for(let x=0;x<N;x++){
    const u=(x+.5)/N,v=(y+.5)/N,w=(z+.5)/N;
    const wl=worley(0,u,v,w)*.58+worley(1,u,v,w)*.29+worley(2,u,v,w)*.13;
    const pv=vnoise(0,u,v,w)*.55+vnoise(1,u,v,w)*.3+vnoise(2,u,v,w)*.15;
    const c=[wl*.72+pv*.28,worley(3,u,v,w)*.62+worley(4,u,v,w)*.38,pv,vnoise(3,u,v,w)*.55+vnoise(4,u,v,w)*.3+vnoise(5,u,v,w)*.15];
    for(let k=0;k<4;k++){Fd[i+k]=c[k];if(c[k]<mn[k])mn[k]=c[k];if(c[k]>mx[k])mx[k]=c[k]}
    i+=4}
  const data=new Uint8Array(n3*4),NBIN=2048,cdf=[0,1].map(()=>new Float32Array(NBIN));
  for(let k=0;k<2;k++){const h=cdf[k];for(let j=k;j<n3*4;j+=4)h[Math.min(NBIN-1,Math.floor((Fd[j]-mn[k])/(mx[k]-mn[k])*NBIN))]++;
    let acc=0;for(let b=0;b<NBIN;b++){acc+=h[b];h[b]=acc/n3}}
  for(let j=0;j<n3*4;j++){const k=j&3;let v=sat((Fd[j]-mn[k])/(mx[k]-mn[k]));
    if(k<2)v=lerp(v,cdf[k][Math.min(NBIN-1,Math.floor(v*NBIN))],k===0?.8:.6);
    data[j]=Math.round(255*v)}
  const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_3D,t);
  gl.texImage3D(gl.TEXTURE_3D,0,gl.RGBA8,N,N,N,0,gl.RGBA,gl.UNSIGNED_BYTE,data);
  gl.generateMipmap(gl.TEXTURE_3D);
  gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_WRAP_S,gl.REPEAT);gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_WRAP_T,gl.REPEAT);gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_WRAP_R,gl.REPEAT);
  return t}

/* geometry */
function lathe(out,prof,sides,part){
  for(let i=0;i<prof.length-1;i++){const[r0,y0]=prof[i],[r1,y1]=prof[i+1],dy=y1-y0,dr=r1-r0,nl=Math.hypot(dy,dr)||1,ny=-dr/nl,nr=dy/nl;
    for(let s=0;s<sides;s++){const a0=s/sides*6.2832,a1=(s+1)/sides*6.2832,c0=Math.cos(a0),s0=Math.sin(a0),c1=Math.cos(a1),s1=Math.sin(a1);
      const A=[r0*c0,y0,r0*s0,c0*nr,ny,s0*nr,part],B=[r0*c1,y0,r0*s1,c1*nr,ny,s1*nr,part],C=[r1*c1,y1,r1*s1,c1*nr,ny,s1*nr,part],D=[r1*c0,y1,r1*s0,c0*nr,ny,s0*nr,part];
      out.push(...A,...B,...C,...A,...C,...D)}}}
function meshVAO(verts,instBuf){
  const vao=gl.createVertexArray();gl.bindVertexArray(vao);
  const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(verts),gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,3,gl.FLOAT,false,28,0);
  gl.enableVertexAttribArray(1);gl.vertexAttribPointer(1,3,gl.FLOAT,false,28,12);
  gl.enableVertexAttribArray(2);gl.vertexAttribPointer(2,1,gl.FLOAT,false,28,24);
  if(instBuf){gl.bindBuffer(gl.ARRAY_BUFFER,instBuf);
    gl.enableVertexAttribArray(3);gl.vertexAttribPointer(3,4,gl.FLOAT,false,32,0);gl.vertexAttribDivisor(3,1);
    gl.enableVertexAttribArray(4);gl.vertexAttribPointer(4,4,gl.FLOAT,false,32,16);gl.vertexAttribDivisor(4,1)}
  gl.bindVertexArray(null);return{vao,n:verts.length/7}}

/* a round ground plane, dense near the middle and 20 km across: aPos (location 0) is x,z */
const groundMesh=(()=>{const NR=160,NS=96,pos=new Float32Array((NR+1)*NS*2),idx=new Uint16Array(NR*NS*6);let p=0,q=0;
  for(let i=0;i<=NR;i++){const r=20000*Math.pow(i/NR,3.2);for(let s=0;s<NS;s++){const a=s/NS*6.2832;pos[p++]=Math.cos(a)*r;pos[p++]=Math.sin(a)*r}}
  for(let i=0;i<NR;i++)for(let s=0;s<NS;s++){const a=i*NS+s,b=i*NS+(s+1)%NS,c=a+NS,d=b+NS;idx[q++]=a;idx[q++]=c;idx[q++]=b;idx[q++]=b;idx[q++]=c;idx[q++]=d}
  const vao=gl.createVertexArray();gl.bindVertexArray(vao);
  const vb=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vb);gl.bufferData(gl.ARRAY_BUFFER,pos,gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
  const ib=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,idx,gl.STATIC_DRAW);
  gl.bindVertexArray(null);return{vao,n:idx.length}})();
const triVAO=gl.createVertexArray();

/* ======================================================================
   STAGE: sky, sun, a plain ground, render targets, volume composite, bloom and tone mapping.
   Shared by every effect so they all sit in the same world and read the same way.
   ====================================================================== */
const FH='#version 300 es\nprecision highp float;precision highp int;precision highp sampler2D;precision highp sampler3D;\n';
const G_COMMON=`
float ss(float a,float b,float x){float t=clamp((x-a)/(b-a),0.,1.);return t*t*(3.-2.*t);}
vec3 heat(float t){
  t=max(t,0.);
  vec3 c=mix(vec3(0.),vec3(.55,.035,0.),clamp(t/.2,0.,1.));
  c=mix(c,vec3(1.,.27,.03),clamp((t-.2)/.25,0.,1.));
  c=mix(c,vec3(1.,.70,.20),clamp((t-.45)/.25,0.,1.));
  c=mix(c,vec3(1.,.97,.82),clamp((t-.7)/.3,0.,1.));
  return c*(t*t*9.+t*.6);
}`;

const VS_TRI=`#version 300 es
precision highp float;
out vec2 vUv;
void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUv=p;gl_Position=vec4(p*2.-1.,0.,1.);}`;

const FS_SKY=FH+`
in vec2 vUv;out vec4 o;
uniform mat4 uInvVP;uniform vec3 uCam,uSkyZen,uSkyHor,uSunGlow,uTrueSun,uSunDisc;uniform float uNight;
${G_COMMON}
float h31(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
void main(){
  vec4 w=uInvVP*vec4(vUv*2.-1.,1.,1.);vec3 rd=normalize(w.xyz/w.w-uCam);
  float h=max(rd.y,0.);
  vec3 c=mix(uSkyHor,uSkyZen,1.-exp(-h*3.4));
  float sd=max(dot(rd,uTrueSun),0.);
  c+=uSunGlow*(pow(sd,5.)*.22+pow(sd,40.)*.45+pow(sd,500.)*1.2);
  c+=uSunDisc*ss(.99962,.9998,sd);
  if(uNight>.01&&rd.y>0.){vec3 g=rd*240.;vec3 f=fract(g)-.5;float hh=h31(floor(g));
    c+=vec3(.8,.9,1.)*step(.9965,hh)*ss(.3,0.,length(f))*uNight*(.3+hh*.9);}
  o=vec4(c,1.);
}`;

const FS_COMP=FH+`
in vec2 vUv;out vec4 o;uniform sampler2D uScene,uVol;uniform vec2 uVolPx;
void main(){
  vec3 s=texture(uScene,vUv).rgb;
  vec4 v=.25*(texture(uVol,vUv+uVolPx*vec2(.5,.5))+texture(uVol,vUv+uVolPx*vec2(-.5,.5))+texture(uVol,vUv+uVolPx*vec2(.5,-.5))+texture(uVol,vUv+uVolPx*vec2(-.5,-.5)));
  o=vec4(s*v.a+v.rgb,1.);
}`;

const FS_DOWN=FH+`
in vec2 vUv;out vec4 o;uniform sampler2D uTex;uniform vec2 uPx;uniform float uPre;
void main(){
  vec3 c=.25*(texture(uTex,vUv+uPx*vec2(1.,1.)).rgb+texture(uTex,vUv+uPx*vec2(-1.,1.)).rgb+texture(uTex,vUv+uPx*vec2(1.,-1.)).rgb+texture(uTex,vUv+uPx*vec2(-1.,-1.)).rgb);
  if(uPre>.5){c=min(c,vec3(80.));float l=max(c.r,max(c.g,c.b));c=c*(max(l-.9,0.)/(l+1e-4))+c*.015;}
  o=vec4(c,1.);
}`;
const FS_UP=FH+`
in vec2 vUv;out vec4 o;uniform sampler2D uTex;uniform vec2 uPx;
void main(){
  vec3 c=texture(uTex,vUv).rgb*4.;
  c+=(texture(uTex,vUv+uPx*vec2(1.,0.)).rgb+texture(uTex,vUv+uPx*vec2(-1.,0.)).rgb+texture(uTex,vUv+uPx*vec2(0.,1.)).rgb+texture(uTex,vUv+uPx*vec2(0.,-1.)).rgb)*2.;
  c+=texture(uTex,vUv+uPx).rgb+texture(uTex,vUv-uPx).rgb+texture(uTex,vUv+uPx*vec2(1.,-1.)).rgb+texture(uTex,vUv+uPx*vec2(-1.,1.)).rgb;
  o=vec4(c/16.,1.);
}`;
const FS_FINAL=FH+`
in vec2 vUv;out vec4 o;uniform sampler2D uTex,uBloom;uniform vec4 uPost;uniform float uTime;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
void main(){
  vec3 c=texture(uTex,vUv).rgb+texture(uBloom,vUv).rgb*uPost.y;
  c=c*uPost.x+vec3(1.,.96,.88)*uPost.z;
  vec2 q=vUv-.5;c*=1.-dot(q,q)*.5;
  c=pow(aces(c),vec3(1./2.2));
  vec2 g=gl_FragCoord.xy+fract(uTime*7.31)*913.;
  c+=(fract(sin(dot(g,vec2(12.9898,78.233)))*43758.5453)-.5)*uPost.w*.03;
  o=vec4(c,1.);
}`;

const SKY=[ // sun elevation, zenith, horizon, sun colour, sun intensity, halo
  [-18,[.004,.006,.014],[.010,.013,.024],[1,.4,.2],0,[0,0,0]],
  [-6,[.030,.040,.110],[.25,.13,.11],[1,.35,.15],0,[.45,.18,.07]],
  [0,[.10,.15,.36],[.95,.48,.22],[1,.42,.16],.9,[1.2,.5,.15]],
  [6,[.14,.26,.58],[.95,.68,.42],[1,.62,.34],2.2,[1.1,.6,.25]],
  [20,[.15,.34,.78],[.62,.74,.90],[1,.88,.72],3,[.6,.5,.35]],
  [90,[.13,.32,.80],[.55,.70,.92],[1,.97,.9],3.4,[.4,.4,.35]]];
function sunState(){
  const el=S.g?.sunElev??16,e=el*D2R,az=(S.g?.sunAz??159)*D2R,dir=[Math.cos(e)*Math.cos(az),Math.sin(e),Math.cos(e)*Math.sin(az)];
  let i=0;while(i<SKY.length-2&&el>SKY[i+1][0])i++;
  const u=sat((el-SKY[i][0])/(SKY[i+1][0]-SKY[i][0])),V=j=>[0,1,2].map(c=>lerp(SKY[i][j][c],SKY[i+1][j][c],u));
  const zen=V(1),hor=V(2),sc=V(3),glow=V(5),sI=lerp(SKY[i][4],SKY[i+1][4],u);
  let ldir=dir,lcol=sc.map(v=>v*sI);
  if(el<-6){const mI=sat((-el-6)/8)*.05;ldir=norm3([-.45,.72,.52]);lcol=[.45*mI,.6*mI,mI]}
  const b=sI*Math.max(dir[1],0)*.3;
  return{dir,ldir,lcol,zen,hor,glow,disc:sc.map(v=>v*45*sat((el+1.5)/3)),night:sat((-el-2)/10),
    ambTop:[0,1,2].map(c=>zen[c]*.85+hor[c]*.3),ambBot:[hor[0]*.22+.33*b,hor[1]*.22+.25*b,hor[2]*.22+.155*b]}}

/* the plain ground. An effect shapes and marks it with a GLSL hook: uniforms plus either or both of
     float fxHeight(vec2 xz)    the height of the land there (a crater, a mound); flat is 0
     void  fxGround(vec3 p,vec3 n,inout vec3 alb,inout vec3 emit,inout float shade)
                                 p is the world position, n the normal; tint or darken alb (scorch, frost), add light to emit (glow, fire),
                                 lower shade for shadow. ss(), heat(), vn() and fbm2() are there to use; uT is the time.
   The hook holds only uniforms and functions. Its uniforms are set in the set() callback, which runs once the program is bound. */
const G_NOISE2=`
float h21(vec2 p){uvec2 q=uvec2(ivec2(floor(p)));q*=uvec2(1597334673u,3812015801u);uint n=(q.x^q.y)*1597334673u;return float(n)*(1./4294967295.);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}
float fbm2(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*vn(p);p=p*2.03+17.3;a*=.5;}return s;}`;
const groundHook=h=>(/float\s+fxHeight\s*\(/.test(h)?'':'float fxHeight(vec2 p){return 0.;}\n')+h+
  (/void\s+fxGround\s*\(/.test(h)?'':'\nvoid fxGround(vec3 p,vec3 n,inout vec3 alb,inout vec3 emit,inout float shade){}');
const groundVS=h=>FH+`
layout(location=0) in vec2 aPos;
uniform mat4 uVP;uniform float uT;
${G_COMMON}${G_NOISE2}
${groundHook(h)}
out vec3 vW;
void main(){vW=vec3(aPos.x,fxHeight(aPos),aPos.y);gl_Position=uVP*vec4(vW,1.);}`;
const groundFS=h=>FH+`
in vec3 vW;out vec4 o;
uniform vec3 uSunDir,uSunCol,uAmbTop,uAmbBot,uFogCol,uCam,uLtPos,uLtCol;uniform float uFogK,uT,uLtR;uniform vec2 uSeed2;
${G_COMMON}${G_NOISE2}
${groundHook(h)}
void main(){
  vec3 p=vW;const float e=.75;
  vec3 n=normalize(vec3(fxHeight(p.xz-vec2(e,0.))-fxHeight(p.xz+vec2(e,0.)),2.*e,fxHeight(p.xz-vec2(0.,e))-fxHeight(p.xz+vec2(0.,e))));
  float cd=length(p-uCam),fN=1.-ss(250.,1400.,cd),fF=1.-ss(40.,300.,cd);
  float nA=fbm2(p.xz*.0035+uSeed2),nB=fbm2(p.xz*.028+uSeed2.yx),nC=vn(p.xz*.37),nD=vn(p.xz*2.9);
  vec3 alb=mix(vec3(.215,.16,.098),vec3(.33,.262,.165),nA);
  alb=mix(alb,vec3(.17,.20,.085),ss(.46,.72,nB)*.6);
  alb*=mix(1.,.70+.60*nC,fN);alb*=mix(1.,.84+.32*nD,fF);
  vec3 emit=vec3(0.);float shade=1.;
  fxGround(p,n,alb,emit,shade);
  vec3 col=alb*(uSunCol*max(dot(n,uSunDir),0.)*shade+mix(uAmbBot,uAmbTop,.5+.5*n.y));
  vec3 lv=uLtPos-p;float d2=max(dot(lv,lv),1e-4);
  col+=alb*uLtCol/(1.+d2/max(uLtR*uLtR,1e-3))*(max(dot(n,lv*inversesqrt(d2)),0.)*.65+.35);
  col+=emit;
  col=mix(col,uFogCol,1.-exp(-cd*uFogK));
  o=vec4(col,1.);
}`;

/* ======================================================================
   THE MARBLE (optional): the effect plays inside the 1st Choice glass sphere, floating in space.
   An effect turns it on with Studio.run({marble:{radius:()=>metres, glass:{glsl,set}}}) and loads ../studio/marble-glass.js
   before studio.js. Effects that leave it off draw exactly as before.
   The land stays at y=0. The sphere's centre sits above it, so the land meets the glass at `ground` (-0.27) of the radius,
   as in the glass kit. Inside: the sky. Outside: space and stars. Below the land: the cut-away earth and the lava.
   The glass hook marks the glass from inside:
     void fxGlass(vec3 n,inout float soot,inout vec3 heat)   n: unit direction from the centre to a point on the glass;
                                                             soot darkens it (0 clear, 1 dark), heat is light it gives off.
   ====================================================================== */
let MARB=null;
const G_MARBLE=`
uniform vec4 uMarbleC,uMarbleG; // centre, radius; land height, disc radius at the land, lava height, polar angle of the land line
vec2 marbleHit(vec3 ro,vec3 rd){vec3 oc=ro-uMarbleC.xyz;float b=dot(oc,rd),c=dot(oc,oc)-uMarbleC.w*uMarbleC.w,h=b*b-c;if(h<=0.)return vec2(1e9,-1e9);h=sqrt(h);return vec2(-b-h,-b+h);}
bool marbleOff(vec3 p){return length(p.xz-uMarbleC.xz)>uMarbleG.y;}`;
const glassHook=h=>(/void\s+fxGlass\s*\(/.test(h)?h:h+'\nvoid fxGlass(vec3 n,inout float soot,inout vec3 heat){}');
/* the sky painted on the inside of the glass: horizon colour at the land line, zenith at the top, the sun seen through it */
const FS_MSKY=h=>FH+`
in vec2 vUv;out vec4 o;
uniform mat4 uInvVP;uniform vec3 uCam,uSkyZen,uSkyHor,uSunGlow,uTrueSun,uSunDisc;uniform float uT;
${G_COMMON}${G_NOISE2}${G_MARBLE}
${glassHook(h)}
void main(){
  vec4 w=uInvVP*vec4(vUv*2.-1.,1.,1.);vec3 rd=normalize(w.xyz/w.w-uCam);
  vec2 hh=marbleHit(uCam,rd);if(hh.x>hh.y||hh.y<0.){o=vec4(0.,0.,0.,1.);return;}
  vec3 P=uCam+rd*hh.y,n=(P-uMarbleC.xyz)/uMarbleC.w;
  float u=clamp((P.y-uMarbleG.x)/(uMarbleC.y+uMarbleC.w-uMarbleG.x),0.,1.);
  vec3 c=mix(uSkyHor,uSkyZen,1.-exp(-u*2.6));
  float sd=max(dot(rd,uTrueSun),0.);
  c+=uSunGlow*(pow(sd,5.)*.22+pow(sd,40.)*.45+pow(sd,500.)*1.2);
  c+=uSunDisc*ss(.99962,.9998,sd);
  float soot=0.;vec3 heat=vec3(0.);fxGlass(n,soot,heat);
  o=vec4(c*exp(-1.3*max(soot,0.))+heat,1.);
}`;
/* the cut-away earth on the glass below the land line, and the lava at the bottom; writes its depth so the world sorts against it */
const FS_MLAYERS=FH+`
in vec2 vUv;out vec4 o;
uniform mat4 uInvVP,uVP;uniform vec3 uCam,uSunDir,uSunCol,uAmbTop;uniform float uT;
${G_COMMON}${G_NOISE2}${G_MARBLE}
void main(){
  vec4 w=uInvVP*vec4(vUv*2.-1.,1.,1.);vec3 rd=normalize(w.xyz/w.w-uCam);
  vec2 hh=marbleHit(uCam,rd);if(hh.x>hh.y||hh.y<0.)discard;
  vec3 P=uCam+rd*max(hh.x,0.);if(P.y>=uMarbleG.x)discard;
  float R=uMarbleC.w;vec3 q=(P-uMarbleC.xyz)/R,n=q;
  float G=(uMarbleG.x-uMarbleC.y)/R,LV=(uMarbleG.z-uMarbleC.y)/R;
  float a=atan(q.z,q.x);
  float y=q.y+.012*sin(a*7.+q.y*3.)+.012*(vn(vec2(a*6.,q.y*20.))-.5);
  float u=(G-y)/(G-LV);
  vec3 c=u<.12?vec3(.23,.15,.09):u<.42?vec3(.44,.29,.17):u<.74?vec3(.36,.33,.30):vec3(.19,.17,.17);
  c*=.9+.1*vn(q.xz*37.+q.y*23.)+.08*vn(q.xz*9.-q.y*11.);
  c*=.62*(.62+.45*max(dot(n,uSunDir),0.)*length(uSunCol)/3.+.15*(1.-abs(n.y)))+.06*uAmbTop;
  c+=vec3(.5,.12,.02)*ss(LV+.2,LV+.01,y)*2.2;
  if(y<LV)c=mix(vec3(.95,.3,.05),vec3(1.,.55,.18),vn(q.xz*5.+vec2(uT*.12,-uT*.08)+q.y*3.))*1.9;
  vec4 cp=uVP*vec4(P,1.);gl_FragDepth=clamp(cp.z/cp.w*.5+.5,0.,1.);
  o=vec4(c,1.);
}`;
/* the last pass in a marble: inside the glass as FS_FINAL; outside, only the bloom and the flash, added over space */
const FS_FINAL_M=FH+`
in vec2 vUv;out vec4 o;uniform sampler2D uTex,uBloom;uniform vec4 uPost;uniform float uTime,uPxA;uniform mat4 uInvVP;uniform vec3 uCam;
${G_MARBLE}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
void main(){
  vec4 w=uInvVP*vec4(vUv*2.-1.,1.,1.);vec3 rd=normalize(w.xyz/w.w-uCam),oc=uCam-uMarbleC.xyz;
  float b=dot(oc,rd),m=sqrt(max(dot(oc,oc)-b*b,0.))-uMarbleC.w,a=b<0.?clamp(.5-m/(max(-b,1.)*uPxA),0.,1.):0.;
  vec3 bl=texture(uBloom,vUv).rgb*uPost.y,fl=vec3(1.,.96,.88)*uPost.z;
  vec2 q=vUv-.5;float vg=1.-dot(q,q)*.5;
  vec3 ci=((texture(uTex,vUv).rgb+bl)*uPost.x+fl)*vg;ci=pow(aces(ci),vec3(1./2.2));
  vec2 g=gl_FragCoord.xy+fract(uTime*7.31)*913.;
  ci+=(fract(sin(dot(g,vec2(12.9898,78.233)))*43758.5453)-.5)*uPost.w*.03;
  vec3 co=pow(aces((bl*uPost.x+fl)*vg),vec3(1./2.2));
  o=vec4(mix(co,ci,a),a);
}`;
/* the glass from inside, on the near side: soot dims what is behind it, heat glows */
const FS_MFRONT=h=>FH+`
in vec2 vUv;out vec4 o;
uniform mat4 uInvVP;uniform vec3 uCam,uSunDir;uniform float uT;
${G_COMMON}${G_NOISE2}${G_MARBLE}
${glassHook(h)}
void main(){
  vec4 w=uInvVP*vec4(vUv*2.-1.,1.,1.);vec3 rd=normalize(w.xyz/w.w-uCam);
  vec2 hh=marbleHit(uCam,rd);if(hh.x>hh.y||hh.y<0.)discard;
  vec3 P=uCam+rd*max(hh.x,0.),n=(P-uMarbleC.xyz)/uMarbleC.w;
  float soot=0.;vec3 heat=vec3(0.);fxGlass(n,soot,heat);
  if(soot<=0.&&dot(heat,heat)<=0.)discard;
  float T=exp(-1.3*max(soot,0.)/max(dot(n,-rd),.3));
  vec3 lit=vec3(.07,.055,.045)*(.35+.65*max(dot(n,uSunDir),0.));
  o=vec4(lit*(1.-T)+(1.-exp(-max(heat,vec3(0.)))),T);
}`;
const MARBLE_CAMS=[ // the views of a marble: frame the sphere (h is ignored)
  ['Free',(h,sa)=>{const M=MARB;cam.ty=M.C[1];cam.dist=2.65*M.R;cam.el=.3;cam.az=sa-1.0}],
  ['Side',(h,sa)=>{const M=MARB;cam.ty=M.C[1];cam.dist=2.6*M.R;cam.el=.03;cam.az=sa-1.13}],
  ['Close',(h,sa)=>{const M=MARB;cam.ty=M.C[1]+.3*M.R;cam.dist=1.75*M.R;cam.el=.2;cam.az=sa+1.4}],
  ['Above',(h,sa)=>{const M=MARB;cam.ty=M.C[1];cam.dist=3*M.R;cam.el=1.05;cam.az=sa-.7}],
  ['Below',(h,sa)=>{const M=MARB;cam.ty=M.C[1];cam.dist=3*M.R;cam.el=-.8;cam.az=sa-1.0}],
  ['Orbit',(h,sa)=>{const M=MARB;cam.ty=M.C[1];cam.dist=2.65*M.R;cam.el=.2;cam.az=sa-1.13;cam.auto=true}]];
/* the sphere's place this frame, from the effect's radius */
function marbleGeom(){const m=MARB,R=Math.max(+m.fx.radius()||1,1),g=m.fx.ground??-.27,l=m.fx.lava??-.71;
  Object.assign(m,{R,ground:g,lava:l,C:[0,-g*R,0],disc:R*Math.sqrt(1-g*g),lavaY:(l-g)*R,thG:Math.acos(g)})}

const groundFSM=h=>groundFS(h).replace('uniform vec2 uSeed2;','uniform vec2 uSeed2;'+G_MARBLE).replace('vec3 p=vW;','vec3 p=vW;if(marbleOff(p))discard;');

/* render targets: F.W x F.H, F.depth, F.scene (HDR colour + depth), F.bloom, and any extra target an effect asks for by name */
const F={W:0,H:0,bloom:[]};
const Stage=(()=>{
  let P=null,PM=null,LV=null,LS=null,LT=0;const G={},XT={},RES=['W','H','depth','scene','bloom'];
  const mprogs=()=>PM||(PM={sky:program(VS_TRI,FS_MSKY(MARB.fx.glass?.glsl||''),'marble sky'),layers:program(VS_TRI,FS_MLAYERS,'marble layers'),
    fin:program(VS_TRI,FS_FINAL_M,'marble final'),front:program(VS_TRI,FS_MFRONT(MARB.fx.glass?.glsl||''),'marble glass')});
  /* the sphere's uniforms (G_MARBLE) on the program in use, for an effect's own shaders */
  function marbleSet(){if(!MARB)return;const M=MARB;u4('uMarbleC',[M.C[0],M.C[1],M.C[2],M.R]);u4('uMarbleG',[0,M.disc,M.lavaY,M.thG])}
  const glassSet=()=>{u1('uT',LT);if(MARB.fx.glass?.set)MARB.fx.glass.set()};
  function marbleKitFrame(){return{camera:{view:LV.V,proj:LV.P},sphere:{center:MARB.C,radius:MARB.R,ground:MARB.ground,lava:MARB.lava},w:F.W,h:F.H,time:LT,from:null,to:null,sun:LS.ldir}}
  const progs=()=>P||(P={sky:program(VS_TRI,FS_SKY,'sky'),comp:program(VS_TRI,FS_COMP,'composite'),down:program(VS_TRI,FS_DOWN,'bloom down'),up:program(VS_TRI,FS_UP,'bloom up'),fin:program(VS_TRI,FS_FINAL,'final')});
  const del=o=>{if(o){gl.deleteTexture(o.tex);gl.deleteFramebuffer(o.fbo)}};
  function make(W,H){
    del(F.scene);F.bloom.forEach(del);F.bloom=[];if(F.depth)gl.deleteTexture(F.depth);
    F.W=W;F.H=H;
    F.depth=tex2(W,H,gl.DEPTH_COMPONENT24,gl.DEPTH_COMPONENT,gl.UNSIGNED_INT,gl.NEAREST);
    F.scene={tex:hdrTex(W,H),w:W,h:H};F.scene.fbo=mkfbo(F.scene.tex,F.depth);
    if(HDR&&gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE){HDR=false;return make(W,H)}
    let w=W,h=H;
    for(let i=0;i<6;i++){w=Math.max(2,w>>1);h=Math.max(2,h>>1);const b={tex:hdrTex(w,h),w,h};b.fbo=mkfbo(b.tex);F.bloom.push(b)}
    gl.bindFramebuffer(gl.FRAMEBUFFER,null)}
  /* call first in every frame: sizes the canvas and targets to the window times scale; true when they were remade */
  function ensure(scale=1){
    if(MARB)marbleGeom();
    const W=Math.max(64,Math.round(canvas.clientWidth*scale)),H=Math.max(64,Math.round(canvas.clientHeight*scale));
    if(W===F.W&&H===F.H)return false;
    canvas.width=W;canvas.height=H;make(W,H);for(const n in XT)XT[n].key='';return true}
  /* an extra target, kept at F size times scale and remade when that changes: {tex,fbo,w,h}, also at F[name].
     depth:true shares the scene's depth (full size only); ldr:true makes it 8-bit */
  function target(name,o={}){
    if(RES.includes(name))fail('Stage.target: "'+name+'" is the stage\'s own target');
    const sc=o.scale??1,w=Math.max(8,Math.round(F.W*sc)),h=Math.max(8,Math.round(F.H*sc)),key=[w,h,!!o.depth,!!o.ldr,HDR].join(),x=XT[name]||(XT[name]={key:''});
    if(x.key!==key){del(F[name]);const tex=o.ldr?tex2(w,h,gl.RGBA8,gl.RGBA,gl.UNSIGNED_BYTE,gl.LINEAR):hdrTex(w,h);
      F[name]={tex,w,h,fbo:mkfbo(tex,o.depth&&sc===1?F.depth:null)};x.key=key;gl.bindFramebuffer(gl.FRAMEBUFFER,null)}
    return F[name]}
  /* the camera this frame. shake, in metres, jitters the eye and aim the way a blast arriving does */
  function view(o={}){
    const eye=camPos(),tgt=[cam.tx,cam.ty,cam.tz],amp=o.shake||0;
    if(amp>0){const t=o.t??Studio.t,sd=(S.seed|0)%100,nz=(f,p)=>Math.sin(t*f+p)*.6+Math.sin(t*f*2.3+p*1.7)*.4;
      const sx=nz(31,sd)*amp,sy=nz(37,sd+2)*amp,sz=nz(29,sd+5)*amp;
      eye[0]+=sx*1.2;eye[1]=MARB?eye[1]+sy*1.2:Math.max(eye[1]+sy*1.2,1.2);eye[2]+=sz*1.2;const dd=cam.dist*.012;tgt[0]+=sz*dd;tgt[1]+=sx*dd;tgt[2]+=sy*dd}
    const V=lookAt(eye,tgt,[0,1,0]),Pm=persp(cam.fov*D2R,F.W/F.H,1,60000),VP=mul4(Pm,V);
    return{eye,tgt,V,P:Pm,VP,IVP:inv4(VP),px:F.H/(2*Math.tan(cam.fov*D2R/2))}}
  function sky(IVP,eye,sn){const p=progs();use(p.sky);um('uInvVP',IVP);u3('uCam',eye);u3('uSkyZen',sn.zen);u3('uSkyHor',sn.hor);u3('uSunGlow',sn.glow);u3('uTrueSun',sn.dir);u3('uSunDisc',sn.disc);u1('uNight',sn.night);
    gl.bindVertexArray(triVAO);gl.drawArrays(gl.TRIANGLES,0,3)}
  /* binds F.scene, clears its depth, draws the sky and turns depth testing on, ready for the ground and the effect */
  function begin(v,sn,t){gl.bindFramebuffer(gl.FRAMEBUFFER,F.scene.fbo);gl.viewport(0,0,F.W,F.H);
    gl.disable(gl.BLEND);gl.disable(gl.CULL_FACE);gl.disable(gl.DEPTH_TEST);gl.depthMask(true);gl.clearDepth(1);gl.clear(gl.DEPTH_BUFFER_BIT);gl.depthMask(false);
    if(MARB){marbleBegin(v,sn,t);return}
    sky(v.IVP,v.eye,sn);
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.depthMask(true)}
  /* in a marble: the sky inside the glass (black outside it, where space goes later), then the cut-away earth and lava with their depth */
  function marbleBegin(v,sn,t){LV=v;LS=sn;LT=t??Studio.t;const p=mprogs();
    use(p.sky);um('uInvVP',v.IVP);u3('uCam',v.eye);u3('uSkyZen',sn.zen);u3('uSkyHor',sn.hor);u3('uSunGlow',sn.glow);u3('uTrueSun',sn.dir);u3('uSunDisc',sn.disc);marbleSet();glassSet();
    gl.bindVertexArray(triVAO);gl.drawArrays(gl.TRIANGLES,0,3);
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.depthMask(true);
    use(p.layers);um('uInvVP',v.IVP);um('uVP',v.VP);u3('uCam',v.eye);u3('uSunDir',sn.ldir);u3('uSunCol',sn.lcol);u3('uAmbTop',sn.ambTop);u1('uT',LT);marbleSet();
    gl.bindVertexArray(triVAO);gl.drawArrays(gl.TRIANGLES,0,3)}
  /* the plain ground, shaped and marked by the effect's hook {glsl, set()}; light {pos,col,r} is one point light on it */
  function ground(v,sn,t,o={}){
    const h=o.glsl||'',p=G[h]||(G[h]=program(groundVS(h),MARB?groundFSM(h):groundFS(h),'ground'));
    use(p);if(MARB)marbleSet();um('uVP',v.VP);u3('uCam',v.eye);u1('uT',t);
    u3('uSunDir',sn.ldir);u3('uSunCol',sn.lcol);u3('uAmbTop',sn.ambTop);u3('uAmbBot',sn.ambBot);u3('uFogCol',sn.hor);u1('uFogK',o.fog??.00011);
    u2('uSeed2',[hash2(S.seed|0,1)*90,hash2(S.seed|0,2)*90]);
    const lt=o.light;u3('uLtPos',lt?.pos||[0,1,0]);u3('uLtCol',lt?.col||[0,0,0]);u1('uLtR',lt?.r||1);
    if(o.set)o.set();
    gl.bindVertexArray(groundMesh.vao);gl.drawElements(gl.TRIANGLES,groundMesh.n,gl.UNSIGNED_SHORT,0)}
  /* lays a volume target (rgb: light it adds, a: how much of the scene still shows through) over the scene into F.comp,
     which shares the scene's depth, so particles drawn next still sort against the land. Returns F.comp, still bound */
  function composite(vol){const c=target('comp',{depth:true}),p=progs();
    gl.bindFramebuffer(gl.FRAMEBUFFER,c.fbo);gl.viewport(0,0,F.W,F.H);gl.disable(gl.DEPTH_TEST);gl.disable(gl.BLEND);
    use(p.comp);bindTex(0,gl.TEXTURE_2D,F.scene.tex);ui('uScene',0);bindTex(1,gl.TEXTURE_2D,vol.tex);ui('uVol',1);u2('uVolPx',[1/vol.w,1/vol.h]);
    gl.bindVertexArray(triVAO);gl.drawArrays(gl.TRIANGLES,0,3);return c}
  /* the last step: bloom from src, then exposure, flash white-out, vignette, filmic curve and grain, onto the screen.
     exposure 1, bloom 1, flash 0 (1 is a strong white-out), grain .5 are the plain values */
  function post(src,o={}){const p=progs();
    gl.disable(gl.DEPTH_TEST);gl.disable(gl.BLEND);gl.depthMask(false);
    gl.bindVertexArray(triVAO);use(p.down);ui('uTex',0);
    let s=src,sw=F.W,sh=F.H;
    for(let i=0;i<F.bloom.length;i++){const b=F.bloom[i];gl.bindFramebuffer(gl.FRAMEBUFFER,b.fbo);gl.viewport(0,0,b.w,b.h);
      bindTex(0,gl.TEXTURE_2D,s);u2('uPx',[1/sw,1/sh]);u1('uPre',i===0?1:0);gl.drawArrays(gl.TRIANGLES,0,3);s=b.tex;sw=b.w;sh=b.h}
    gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE);use(p.up);ui('uTex',0);
    for(let i=F.bloom.length-2;i>=0;i--){const b=F.bloom[i],c=F.bloom[i+1];gl.bindFramebuffer(gl.FRAMEBUFFER,b.fbo);gl.viewport(0,0,b.w,b.h);
      bindTex(0,gl.TEXTURE_2D,c.tex);u2('uPx',[1/c.w,1/c.h]);gl.drawArrays(gl.TRIANGLES,0,3)}
    gl.disable(gl.BLEND);
    gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.viewport(0,0,F.W,F.H);
    if(MARB&&LV){marblePost(src,o);return}
    use(p.fin);bindTex(0,gl.TEXTURE_2D,src);ui('uTex',0);bindTex(1,gl.TEXTURE_2D,F.bloom[0].tex);ui('uBloom',1);
    u4('uPost',[(o.exposure??1)*.62,(o.bloom??1)*.16,(o.flash||0)*1.7,o.grain??.5]);u1('uTime',o.time??(Studio.playing?Studio.t:0));
    gl.drawArrays(gl.TRIANGLES,0,3)}
  /* in a marble: space and the halo from the glass kit, the frame inside the glass over it, soot and heat on the near glass, then the glass */
  function marblePost(src,o){const p=mprogs(),fr=marbleKitFrame();
    MARB.kit.drawBackdrop(fr);
    gl.bindVertexArray(triVAO);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
    use(p.fin);bindTex(0,gl.TEXTURE_2D,src);ui('uTex',0);bindTex(1,gl.TEXTURE_2D,F.bloom[0].tex);ui('uBloom',1);
    u4('uPost',[(o.exposure??1)*.62,(o.bloom??1)*.16,(o.flash||0)*1.7,o.grain??.5]);u1('uTime',o.time??(Studio.playing?Studio.t:0));
    um('uInvVP',LV.IVP);u3('uCam',LV.eye);u1('uPxA',2*Math.tan(cam.fov*D2R/2)/F.H);marbleSet();
    gl.drawArrays(gl.TRIANGLES,0,3);
    gl.blendFunc(gl.ONE,gl.SRC_ALPHA);use(p.front);um('uInvVP',LV.IVP);u3('uCam',LV.eye);u3('uSunDir',LS.ldir);marbleSet();glassSet();
    gl.drawArrays(gl.TRIANGLES,0,3);
    gl.disable(gl.BLEND);gl.bindVertexArray(null);
    MARB.kit.draw(fr)}
  return{ensure,target,view,sun:sunState,sky,begin,ground,composite,post,marbleSet,get marble(){return MARB}}})();

/* ======================================================================
   CAMERA: orbit about a target point; the studio's controls move it, an effect only reads it
   ====================================================================== */

const cam={tx:0,ty:170,tz:0,dist:1350,az:2.6,el:-.1,fov:50,auto:false};
function camPos(){if(MARB)return marbleEye();const ce=Math.cos(cam.el);return[cam.tx+cam.dist*ce*Math.cos(cam.az),Math.max(cam.ty+cam.dist*Math.sin(cam.el),1.5),cam.tz+cam.dist*ce*Math.sin(cam.az)]}

/* in a marble the camera goes all the way round, but stays outside the glass */
function marbleEye(){const ce=Math.cos(cam.el),M=MARB,e=[cam.tx+cam.dist*ce*Math.cos(cam.az),cam.ty+cam.dist*Math.sin(cam.el),cam.tz+cam.dist*ce*Math.sin(cam.az)];
  const v=[e[0]-M.C[0],e[1]-M.C[1],e[2]-M.C[2]],l=Math.hypot(...v),m=M.R*1.15;
  return l>=m?e:[M.C[0]+v[0]/(l||1)*m,M.C[1]+v[1]/(l||1)*m,M.C[2]+v[2]/(l||1)*m]}

const isPhone=()=>matchMedia('(max-width:760px)').matches;

/* ======================================================================
   THE STUDIO: panel, timeline, loop, playhead, transport, camera controls, presets, contact sheet, frame loop.
   Studio.run(FX) hands it the effect; Studio.t, .playing, .idle, .frame and .total read where it stands.
   ====================================================================== */
const Studio=(()=>{
let FX=null,PH=[],NAME={},SHORT={},COL={},UI=[],DEF={},CAMS=[];
let simT=0,speed=1,total=50,frameNo=0,simPlaying=false,idle=true;
const el=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e};
const canHover=()=>matchMedia('(hover:hover)').matches&&!isPhone();
const IC={
  reset:'<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5"/><path d="M4.5 4.5v4.2h4.2"/>',
  replay:'<path d="M19.5 12a7.5 7.5 0 1 1-2.4-5.5"/><path d="M19.5 4.5v4.2h-4.2"/><path d="M10.3 9.2v5.6l4.4-2.8z"/>',
  size:'<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="2.8"/>',
  camera:'<rect x="3" y="7" width="12" height="10" rx="2"/><path d="M15 10.5l6-3v9l-6-3z"/>',
  sheet:'<rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M9 6v12M15 6v12"/>',
  record:'<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
  notes:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.3"/>',
  stats:'<path d="M5 19v-6M10 19V9M15 19v-8M20 19V5"/>',
  eye:'<path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
  hide:'<path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/><path d="M4 4l16 16"/>',
  full:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',
  unfull:'<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>',
  play:'<path d="M7.5 4.5v15l11.5-7.5z"/>',
  pause:'<path d="M8 5v14M16 5v14"/>',
  save:'<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13M10 11v5M14 11v5"/>',
  export:'<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M4.5 19.5h15"/>',
  import:'<path d="M12 15V4M7.5 8.5L12 4l4.5 4.5M4.5 19.5h15"/>',
  copy:'<rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5v-3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3"/>',
  solo:'<path d="M15.6 8.4c-.6-1.3-1.9-2-3.5-2-2 0-3.4 1.1-3.4 2.7 0 3.6 7.2 1.7 7.2 5.6 0 1.7-1.5 2.9-3.7 2.9-1.8 0-3.2-.8-3.9-2.2"/>',
  more:'<circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="19" cy="12" r="1.3" fill="currentColor"/>',
  loop:'<path d="M17 4.5l3 3-3 3"/><path d="M20 7.5H8.5a4.5 4.5 0 0 0-4.5 4.5"/><path d="M7 19.5l-3-3 3-3"/><path d="M4 16.5h11.5a4.5 4.5 0 0 0 4.5-4.5"/>',
  sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>'};
const icon=(n,sz)=>'<svg viewBox="0 0 24 24" width="'+(sz||16)+'" height="'+(sz||16)+'" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>';
const setIcon=(b,n)=>{if(b._ic!==n){b._ic=n;b.innerHTML=icon(n)}};
document.querySelectorAll('[data-i]').forEach(b=>setIcon(b,b.dataset.i));

/* ---------- settings: section index + one page at a time ---------- */
const CT={},IDX=[],TG=[];let PT=[],curSec=0,partTimer=0,PBAR=null;
const secIndex=p=>UI.findIndex(g=>g.phase===p),curPhase=()=>UI[curSec].phase;
/* which phases are on, kept in ON (edited in place, so an effect may hold it) */
function refreshOn(){for(const n of PH)ON[n]=!!(S[n]&&S[n].on)}
const totalTime=()=>Math.max(...PH.map(n=>S[n].start+S[n].dur))+(FX.tail??1.5);
/* a setting moved: the effect hears which one, then the timeline follows */
function changed(path){
  refreshOn();if(FX.changed)FX.changed(path);
  layoutTL();
}
function tog(ic,path,title,cls){const b=el('button','tg'+(cls?' '+cls:''));b.innerHTML=icon(ic,13);b.title=title;b._p=path;
  b.onclick=e=>{e.stopPropagation();sp(path,!gp(path));changed(path)};return b}
function syncPhases(){refreshOn();for(const b of TG.concat(PT))b.classList.toggle('on',!!gp(b._p));
  UI.forEach((g,i)=>{if(g.phase)IDX[i].classList.toggle('off',!ON[g.phase])})}
function ctl(c){
  const[path,label,a,b,st,tip]=c,pct=v=>Math.round(clamp((v-a)/(b-a),0,1)*100),row=el('div','row'),l=el('span','cl');l.textContent=label;l.title=tip||label;row.append(l);
  if(a==='color'||a==='num'){const i=el('input');i.type=a==='color'?'color':'number';if(a==='num'){i.style.flex='1';i.style.textAlign='left'}
    const sync=()=>{i.value=gp(path)};i[a==='color'?'oninput':'onchange']=()=>{sp(path,a==='color'?i.value:(+i.value||0));changed(path)};sync();CT[path]=sync;row.append(i)}
  else{const lv=el('div','lv'),f=el('i','f'),nm=el('span'),n=el('b','num');nm.textContent=label;lv.title=tip||label;lv.dataset.path=path;lv.tabIndex=0;lv.setAttribute('role','slider');lv.setAttribute('aria-label',label);lv.append(f,nm,n);
    const frac=()=>clamp((+gp(path)-a)/(b-a),0,1),snap=v=>+clamp(a+Math.round((v-a)/st)*st,a,b).toFixed(6);
    const sync=()=>{const q=frac();lv.style.setProperty('--v',q*100+'%');n.textContent=Math.round(q*100);lv.setAttribute('aria-valuenow',Math.round(q*100))};
    const setF=q=>{sp(path,snap(a+clamp(q,0,1)*(b-a)));sync();changed(path)};
    const at=e=>{const r=lv.getBoundingClientRect();setF((e.clientX-r.left)/r.width)};
    lv.onpointerdown=e=>{if(e.button||e.target.tagName==='INPUT')return;e.preventDefault();lv.focus({preventScroll:true});lv.setPointerCapture(e.pointerId);lv.classList.add('drag');at(e);
      lv.onpointermove=at;lv.onpointerup=lv.onpointercancel=()=>{lv.classList.remove('drag');lv.onpointermove=lv.onpointerup=lv.onpointercancel=null}};
    lv.onkeydown=e=>{const k={ArrowLeft:-1,ArrowDown:-1,ArrowRight:1,ArrowUp:1}[e.key];if(!k||e.target!==lv)return;e.preventDefault();e.stopPropagation();setF(frac()+k*(e.shiftKey?.1:.01))};
    /* double-click to type a number from 0 to 100 */
    lv.ondblclick=()=>{if(lv.querySelector('input'))return;const i=el('input');i.type='number';i.min=0;i.max=100;i.step=1;i.value=Math.round(frac()*100);n.replaceWith(i);i.focus();i.select();let over=false;
      const done=keep=>{if(over)return;over=true;if(keep)setF(clamp(+i.value||0,0,100)/100);i.replaceWith(n);sync();lv.focus({preventScroll:true})};
      i.onkeydown=e=>{e.stopPropagation();if(e.key==='Enter')done(true);else if(e.key==='Escape')done(false)};i.onblur=()=>done(true)};
    sync();CT[path]=sync;return lv}
  return row}
let lastPh=null;
function buildIndex(){const ix=$('#idx'),tb=$('#ptabs');UI.forEach((g,i)=>{const b=el('button');b.textContent=g.phase?SHORT[g.phase]:g.name;b.title=g.phase?NAME[g.phase]:(g.full||g.name);
  b.onclick=()=>selectSection(i);IDX.push(b);
  if(g.phase){b.className='ph';b.style.setProperty('--c',COL[g.phase]);ix.append(b)}else{tb.append(b);if(g.sep)tb.append(el('div','div'))}});
  $('#bTL').onclick=()=>showSection(lastPh??UI.findIndex(g=>g.phase))}
function selectSection(i){const n=UI[i].phase;if(n){const p=S[n];simT=sat((p.start+p.dur/2)/total)*total;simPlaying=false;idle=false}showSection(i)}
function showSection(i){
  curSec=i;const g=UI[i],pg=$('#page');pg.innerHTML='';for(const k in CT)delete CT[k];PT=[];
  IDX.forEach((b,j)=>b.classList.toggle('on',j===i));if(g.phase)lastPh=i;panelEl.classList.toggle('gen',!g.phase);$('#bTL').classList.toggle('on',!!g.phase);
  const hd=el('div');hd.id='phd';const nm=el('span');nm.textContent=g.phase?NAME[g.phase]:(g.full||g.name);hd.append(nm);PBAR=null;
  let bar=null;
  if(g.phase){const n=g.phase,lab=el('span'),num=el('b','num');bar=el('div','lv pt');lab.textContent='Timeline';bar.append(el('i','f'),lab,num);bar.style.setProperty('--c',COL[n]);bar.title='Scrub through '+NAME[n].toLowerCase();PBAR={el:bar,num,n,txt:''};
    const to=e=>{const r=bar.getBoundingClientRect(),p=S[n];simT=clamp(p.start+sat((e.clientX-r.left)/r.width)*p.dur,0,total);simPlaying=false;idle=false};
    bar.onpointerdown=e=>{if(e.button)return;e.preventDefault();bar.setPointerCapture(e.pointerId);bar.classList.add('drag');to(e);bar.onpointermove=to;bar.onpointerup=bar.onpointercancel=()=>{bar.classList.remove('drag');bar.onpointermove=bar.onpointerup=bar.onpointercancel=null}};
    const pl=el('button','tg');pl.title='Play '+NAME[n].toLowerCase()+' on repeat';pl.innerHTML=icon('play',13);pl._ic='play';pl.onclick=()=>soloPlay(n);PBAR.play=pl;hd.append(pl)}
  pg.append(hd);if(bar)pg.append(bar);for(const c of g.c)pg.append(ctl(c));
  if(isPhone())IDX[i].scrollIntoView({inline:'center',block:'nearest'});
  layoutTL();
}
function refreshUI(){showSection(curSec);if(FX.size){const v=+gp(FX.size.key);$('#size').value=v;$('#sizeV').textContent=v.toFixed(2)}}
function rebuildAll(){refreshOn();if(FX.rebuild)FX.rebuild();refreshUI()}

/* ---------- timeline: ruler scrubs, bands move and resize ---------- */
const tlEl=$('#tl'),track=$('#track'),ruler=$('#ruler'),lanesEl=$('#lanes'),gut=$('#gut'),headEl=$('#head'),headPill=$('#head i'),tipEl=$('#tip'),TLB={},GUT={},ROW={};
let tlFreeze=0,scrubbing=false,bandDrag=false,hoverTL=false;
const tscale=()=>tlFreeze||total;
function buildTL(){
  PH.forEach((n,i)=>{
    const b=el('div','band');b.style.background=COL[n];b.style.setProperty('--i',i);b.dataset.p=n;b.title=NAME[n];lanesEl.append(b);TLB[n]=b;
    const g=el('div','gl');g.style.setProperty('--i',i);const nm=el('span');nm.textContent=SHORT[n];nm.title=NAME[n]+' settings';nm.onclick=()=>selectSection(secIndex(n));
    const a=tog('eye',n+'.on','Phase on / off'),mk=el('i','mk');mk.style.setProperty('--c',COL[n]);TG.push(a);g.append(a,mk,nm);gut.append(g);GUT[n]=g;
    const rw=el('div','rw');rw.style.setProperty('--i',i);$('#rows').append(rw);ROW[n]=rw});}
function layoutTL(){
  total=totalTime();const tt=tscale(),sel=curPhase();
  for(const n of PH){const p=S[n],b=TLB[n];b.style.left=(p.start/tt*100)+'%';b.style.width=(p.dur/tt*100)+'%';b.classList.toggle('sel',sel===n);ROW[n].classList.toggle('sel',sel===n);GUT[n].classList.toggle('sel',sel===n)}
  syncPhases();for(const n of PH){TLB[n].classList.toggle('off',!ON[n]);GUT[n].classList.toggle('off',!ON[n])}
  if(LOOP.bEnd||LOOP.b>total)LOOP.b=total;LOOP.a=Math.min(LOOP.a,Math.max(LOOP.b-.1,0));
  loopEl.style.left=(LOOP.a/tt*100)+'%';loopEl.style.width=((LOOP.b-LOOP.a)/tt*100)+'%';
  tlEl.style.setProperty('--step',100/(tt*2)+'%');
}
function showTip(txt,frac){tipEl.hidden=false;tipEl.textContent=txt;const W=track.clientWidth,w=tipEl.offsetWidth;tipEl.style.left=clamp(frac*W-w/2,0,Math.max(W-w,0))+'px'}
let grabOff=0,pillPress=null;
function scrubTo(e){const r=track.getBoundingClientRect();simT=sat((e.clientX-grabOff-r.left)/r.width)*tscale();simPlaying=false;idle=false}
const onPill=e=>{const r=headPill.getBoundingClientRect();return!isPhone()&&e.clientX>=r.left-2&&e.clientX<=r.right+2&&e.clientY>=r.top-2&&e.clientY<=r.bottom+2};
/* loop: a span of the timeline that play repeats; its ends snap to effect edges */
/* the loop is in use only once a bracket has moved in from its end; at full length play runs once and stops */
const LOOP={a:0,b:0,bEnd:true,get on(){return this.a>1e-6||!this.bEnd}},loopEl=el('div');loopEl.id='loop';
const lpA=el('div','lp a'),lpB=el('div','lp b');lpA.title=lpB.title='Drag to loop a shorter stretch, double-click to send back';
lpA.innerHTML='<svg viewBox="0 0 8 12" width="6" height="9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 2L2.5 6l3 4"/></svg>';
lpB.innerHTML='<svg viewBox="0 0 8 12" width="6" height="9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2l3 4-3 4"/></svg>';
loopEl.append(el('div','fr'),lpA,lpB);track.append(loopEl);
const loopMin=()=>Math.max(.1,26*tscale()/Math.max(track.clientWidth,1));
const timeAt=x=>{const r=track.getBoundingClientRect();return sat((x-r.left)/r.width)*tscale()};
function snapLoop(t){const px=tscale()/Math.max(track.clientWidth,1),edges=[0,total];for(const n of PH)if(ON[n])edges.push(S[n].start,S[n].start+S[n].dur);
  let best=t,d=6*px;for(const e of edges)if(Math.abs(e-t)<d){d=Math.abs(e-t);best=e}return best===t?Math.round(t*20)/20:best}
/* an effect's own play button: repeats just that effect, and the loop goes back to how it was once playback stops */
let SOLO=null,SOLO_SAVED=null;
function soloPlay(n){if(SOLO===n&&simPlaying){simPlaying=false;return}
  if(!SOLO)SOLO_SAVED={a:LOOP.a,b:LOOP.b,bEnd:LOOP.bEnd};SOLO=n;const p=S[n];LOOP.a=Math.min(p.start,Math.max(total-.1,0));LOOP.b=Math.min(p.start+p.dur,total);LOOP.bEnd=LOOP.b>=total;
  simT=LOOP.a;simPlaying=true;idle=false;layoutTL()}
function endSolo(keep){if(!SOLO)return;if(!keep)Object.assign(LOOP,SOLO_SAVED);SOLO=null;layoutTL()}
let loopDrag=false;
for(const [h,end] of [[lpA,'a'],[lpB,'b']])h.addEventListener('pointerdown',e=>{if(e.button)return;e.stopPropagation();e.preventDefault();h.setPointerCapture(e.pointerId);loopDrag=true;loopEl.classList.add('drag');endSolo(true);
  h.onpointermove=ev=>{const t=snapLoop(timeAt(ev.clientX));if(end==='a')LOOP.a=clamp(t,0,LOOP.b-loopMin());else{LOOP.b=clamp(t,LOOP.a+loopMin(),total);LOOP.bEnd=LOOP.b>=total-1e-6}layoutTL()};
  h.onpointerup=h.onpointercancel=()=>{h.onpointermove=h.onpointerup=h.onpointercancel=null;loopDrag=false;loopEl.classList.remove('drag')}});
lpA.ondblclick=()=>{endSolo(true);LOOP.a=0;layoutTL()};lpB.ondblclick=()=>{endSolo(true);LOOP.bEnd=true;layoutTL()};
let marking=null;
track.addEventListener('pointerdown',e=>{if(e.target.closest('.band')&&!isPhone())return;track.setPointerCapture(e.pointerId);
  if(e.shiftKey&&!isPhone()){endSolo(true);marking=snapLoop(timeAt(e.clientX));return}
  grabOff=0;if(onPill(e)){pillPress=e.clientX;grabOff=e.clientX-headEl.getBoundingClientRect().left;return}scrubbing=true;scrubTo(e)});
track.addEventListener('pointermove',e=>{if(pillPress!=null&&Math.abs(e.clientX-pillPress)>2){pillPress=null;scrubbing=true}if(scrubbing)scrubTo(e);
  else if(marking!=null){const t=snapLoop(timeAt(e.clientX));if(Math.abs(t-marking)<loopMin())return;LOOP.a=Math.min(t,marking);LOOP.b=Math.max(t,marking);LOOP.bEnd=LOOP.b>=total-1e-6;loopDrag=true;layoutTL()}});
const endScrub=()=>{scrubbing=false;marking=null;loopDrag=false;pillPress=null;grabOff=0};
/* a click on the pill plays or pauses; a press that moves drags it instead */
track.addEventListener('pointerup',e=>{if(pillPress!=null)togglePlay();endScrub();pillHover()});
/* the pill reacts to the pointer; checked every frame too, since the pill moves under a still pointer while playing */
let tlPtr=null;const pillHover=()=>{const on=!!tlPtr&&(pillPress!=null||onPill(tlPtr));headEl.classList.toggle('hov',on&&pillPress==null&&!scrubbing);headEl.classList.toggle('act',pillPress!=null||(scrubbing&&grabOff!==0));track.classList.toggle('onpill',on||grabOff!==0);track.classList.toggle('held',pillPress!=null||grabOff!==0)};
track.addEventListener('pointermove',e=>{tlPtr={clientX:e.clientX,clientY:e.clientY};pillHover()});track.addEventListener('pointerleave',()=>{if(!scrubbing&&pillPress==null){tlPtr=null;pillHover()}});
track.addEventListener('pointerdown',()=>pillHover());track.addEventListener('pointercancel',endScrub);
let hotN=null;
function setHot(n){if(n===hotN)return;if(hotN){ROW[hotN].classList.remove('hot');GUT[hotN].classList.remove('hot')}hotN=n;if(n){ROW[n].classList.add('hot');GUT[n].classList.add('hot')}}
tlEl.addEventListener('pointerenter',()=>{hoverTL=true});tlEl.addEventListener('pointerleave',()=>{hoverTL=false;setHot(null)});
tlEl.addEventListener('pointermove',e=>{if(isPhone())return;const r=$('#rows').getBoundingClientRect(),lh=parseFloat(getComputedStyle(tlEl).getPropertyValue('--lh'))||14,i=Math.floor((e.clientY-r.top)/lh);
  setHot(e.clientX>=r.left&&e.clientX<=r.right&&i>=0&&i<PH.length?PH[i]:null)});
const edgeOf=(b,x)=>{const r=b.getBoundingClientRect(),w=Math.min(6,r.width/3),lx=x-r.left;return lx<w?'l':lx>r.width-w?'r':'m'};
lanesEl.addEventListener('pointermove',e=>{const b=e.target.closest('.band');if(b&&!bandDrag&&!isPhone())b.style.cursor=edgeOf(b,e.clientX)==='m'?'grab':'ew-resize'});
lanesEl.addEventListener('pointerdown',e=>{
  const b=e.target.closest('.band');if(!b||isPhone())return;
  const n=b.dataset.p,p=S[n],mode=edgeOf(b,e.clientX),s0=p.start,d0=p.dur,x0=e.clientX,W=track.clientWidth,snap=v=>Math.round(v*20)/20;let moved=false;
  if(secIndex(n)!==curSec)showSection(secIndex(n));
  tlFreeze=total;bandDrag=true;b.setPointerCapture(e.pointerId);
  b.onpointermove=ev=>{
    if(Math.abs(ev.clientX-x0)>2)moved=true;if(!moved)return;
    const dt=(ev.clientX-x0)/W*tlFreeze;
    if(mode==='m')p.start=snap(clamp(s0+dt,0,120));
    else if(mode==='l'){const ns=snap(clamp(s0+dt,0,s0+d0-.1));p.start=ns;p.dur=+(d0-(ns-s0)).toFixed(3)}
    else p.dur=snap(Math.max(.1,d0+dt));
    if(CT[n+'.start'])CT[n+'.start']();if(CT[n+'.dur'])CT[n+'.dur']();
    layoutTL();showTip(NAME[n]+'  '+p.start.toFixed(2)+' – '+(p.start+p.dur).toFixed(2)+' s',(p.start+p.dur/2)/tlFreeze)};
  b.onpointerup=b.onpointercancel=()=>{b.onpointermove=b.onpointerup=b.onpointercancel=null;tlFreeze=0;bandDrag=false;tipEl.hidden=true;if(moved)changed(n+'.start');else layoutTL()};
});

/* ---------- transport ---------- */
let minFps=0,fpsAcc={n:0,t:0},lowTrack=false;
function go(){endSolo();simT=0;simPlaying=true;idle=false;minFps=Infinity;fpsAcc={n:0,t:0};lowTrack=true}
function resetSim(){simT=0;simPlaying=false;idle=true}
function togglePlay(){if(LOOP.on&&!simPlaying&&(simT<LOOP.a||simT>=LOOP.b)){simT=LOOP.a;simPlaying=true;idle=false;return}
  if(simT>=total){go();return}simPlaying=!simPlaying;idle=false}
$('#bGo').onclick=go;$('#bNP').onclick=togglePlay;
const SPEEDS=[[1,'1×'],[.5,'½×'],[.25,'¼×']];let speedI=0;
$('#bSpeed').onclick=()=>{speedI=(speedI+1)%SPEEDS.length;speed=SPEEDS[speedI][0];$('#bSpeed').textContent=SPEEDS[speedI][1];$('#bSpeed').classList.toggle('on',speedI!==0)};
/* the size slider beside the action button: it hands the effect one number from 0 to 1 */
function setSize(v){sp(FX.size.key,v);FX.size.apply(v);rebuildAll()}
$('#size').oninput=e=>setSize(+e.target.value);

/* camera views: the effect gives a rough height h for its effect (metres); each view frames that height */
const DEFAULT_CAMS=[
  ['Free',(h,sa)=>{cam.ty=.3*h;cam.dist=2.6*h+160;cam.el=.3;cam.az=sa-1.0}],
  ['Wide',(h,sa)=>{cam.ty=.45*h;cam.dist=2.35*h+130;cam.el=Math.asin((14-cam.ty)/cam.dist);cam.az=sa-1.13}],
  ['Close',(h,sa)=>{cam.ty=.5*h;cam.dist=.85*h+50;cam.el=Math.asin((5-cam.ty)/cam.dist);cam.az=sa+1.4;cam.fov=66}],
  ['Aerial',(h,sa)=>{cam.ty=.2*h;cam.dist=3*h+140;cam.el=.62;cam.az=sa-.7}],
  ['Orbit',(h,sa)=>{cam.ty=.42*h;cam.dist=2.6*h+140;cam.el=.07;cam.az=sa-1.13;cam.auto=true}]];
function camPreset(n){if(!CAMS[n])return;
  const h=FX.height?FX.height():300,sa=(S.g?.sunAz??159)*D2R;cam.tx=cam.tz=0;cam.auto=false;cam.fov=50;CAMS[n][1](h,sa);
  document.querySelectorAll('#cams button').forEach(b=>b.classList.toggle('on',+b.dataset.c===n))}

/* ---------- rail: flyouts, panels, hide UI, fullscreen ---------- */
const flys=[[$('#bCam'),$('#flyCam')]];let flyTimer=0,flyHold=false;
function closeMenus(except){for(const[b,f]of flys)if(f!==except){f.hidden=true;b.classList.remove('on')}}
function closeFlys(except){closeMenus(except);showSize(false)}
function openFly(b,f){closeFlys(f);const r=b.getBoundingClientRect();f.hidden=false;b.classList.add('on');
  const fw=f.offsetWidth,fh=f.offsetHeight,below=r.bottom+6+fh<=innerHeight-4;
  f.style.left=clamp(r.left-5,4,innerWidth-fw-4)+'px';f.style.top=clamp(below?r.bottom+6:r.top-6-fh,4,innerHeight-fh-4)+'px'}
for(const[b,f]of flys){
  const leave=()=>{clearTimeout(flyTimer);flyTimer=setTimeout(()=>{if(!flyHold)closeMenus()},350)};
  b.onclick=()=>{if(f.hidden||canHover())openFly(b,f);else closeFlys()};
  b.addEventListener('mouseenter',()=>{clearTimeout(flyTimer);if(canHover())openFly(b,f)});b.addEventListener('mouseleave',leave);
  f.addEventListener('mouseenter',()=>clearTimeout(flyTimer));f.addEventListener('mouseleave',leave);
  f.addEventListener('pointerdown',()=>{flyHold=true})}
addEventListener('pointerup',()=>{flyHold=false});
const toggleNotes=()=>{const n=$('#notes');n.hidden=!n.hidden};
const toggleUI=()=>{document.body.classList.toggle('noui');closeFlys()};
$('#restore').onclick=toggleUI;
$('#bStats').onclick=()=>{const s=$('#stats');s.hidden=!s.hidden;$('#bStats').classList.toggle('on',!s.hidden)};
$('#bSettings').onclick=()=>{$('#bSettings').classList.toggle('on',document.body.classList.toggle('sheet'));closeFlys()};
$('#bSheetX').onclick=()=>{document.body.classList.remove('sheet');$('#bSettings').classList.remove('on')};
const fsRoot=document.documentElement,fsOK=!!(fsRoot.requestFullscreen&&document.exitFullscreen);
function toggleFull(){if(!fsOK)return;if(document.fullscreenElement)document.exitFullscreen();else{const p=fsRoot.requestFullscreen();if(p&&p.catch)p.catch(()=>{})}}
document.addEventListener('click',e=>{const a=document.activeElement;if(e.target.closest('button')&&a&&a.tagName==='BUTTON')a.blur()});
addEventListener('keydown',e=>{
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)&&e.target.type!=='range')return;
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  const k=e.key.toLowerCase();
  if(k===' '){e.preventDefault();go()}
  else if(k>='1'&&k<='9'&&+k<=CAMS.length)camPreset(+k-1);
  else if('wasdqe'.includes(k)&&k.length===1){FLY.add(k);stopAuto()}
  else if(k==='n')toggleNotes();
  else if(k==='h')toggleUI();
  else if(k==='r')resetSim();
  else if(k==='p')togglePlay();
  else if(k==='c')contactSheet();
  else if(k==='f')toggleFull();
  else if(k==='escape'){
    if(!$('#sheet').hidden)$('#sheet').hidden=true;
    else if(document.body.classList.contains('noui'))toggleUI();
    else if(!$('#notes').hidden)toggleNotes();
    else closeFlys()}
});

/* ---------- movable panes: positions persist; the rail rides the panel's edge until dragged off ---------- */
/* one layout for every effect, so the panes stay where you put them when you open another */
const LKEY='fxstudio.layout.v1',panelEl=$('#panel'),railEl=$('#rail'),actEl=$('#act');
let LAY={panelBox:null,tlBox:null,actBox:null};try{Object.assign(LAY,JSON.parse(localStorage.getItem(LKEY)||'{}'))}catch(e){}
for(const k of['tl','tlH','tlL','tlR'])delete LAY[k];
const saveLay=()=>{try{localStorage.setItem(LKEY,JSON.stringify(LAY))}catch(e){}};
function placeRail(){const dock=!isPhone();if(dock===railEl.classList.contains('docked'))return;
  railEl.classList.toggle('docked',dock);if(dock)panelEl.insertBefore(railEl,$('#pbody'));else document.body.append(railEl);
}
/* each pane is one box in window coordinates; edges resting against the window follow it when the window changes size */
const PANE_GAP=8,EDGE_SNAP=12,PN_MINW=300,PN_MINH=220,TL_CHROME=42,TL_MINLH=11,TL_MINW=360,TL_MINH=()=>TL_CHROME+TL_MINLH*PH.length,TL_H=156;
function follow(b,W,H,shown){
  const near=g=>g>=-1&&g<=PANE_GAP+1,h=b.h??shown,dw=W-b.vw,dh=H-b.vh,L=near(b.x),R=near(b.vw-b.x-b.w),T=near(b.y),B=near(b.vh-b.y-h);
  if(R){if(L)b.w+=dw;else b.x+=dw}
  if(B){if(!T)b.y+=dh;else if(b.h!=null)b.h+=dh}
  b.vw=W;b.vh=H;return b}
function panelStart(W,H){const b={x:LAY.panel?.x??PANE_GAP,y:LAY.panel?.y??PANE_GAP,w:LAY.pw??320,h:LAY.ph??null,vw:W,vh:H};delete LAY.panel;delete LAY.pw;delete LAY.ph;return b}
const tlStart=(W,H)=>({x:PANE_GAP,y:H-TL_H-PANE_GAP,w:W-PANE_GAP*2,h:TL_H,vw:W,vh:H});
/* the action button keeps one spot; its size slider opens toward whichever side has room */
let actDrag=false,actDragged=false;
function placeAct(){
  const W=innerWidth,H=innerHeight,shown=actEl.offsetWidth>0,w=shown?actEl.offsetWidth-$('#sizeOut').offsetWidth:LAY.actBox?.w,h=shown?actEl.offsetHeight:LAY.actBox?.h;
  if(w==null)return;
  const b=LAY.actBox||(LAY.actBox=isPhone()?{x:W-w-PANE_GAP,y:H-h-128,vw:W,vh:H}:{x:404,y:PANE_GAP,vw:W,vh:H});
  b.w=w;b.h=h;follow(b,W,H,h);
  const x=clamp(b.x,0,Math.max(W-w,0)),y=clamp(b.y,0,Math.max(H-h,0)),rightRoom=W-PANE_GAP-x-w,leftRoom=x-PANE_GAP;
  if(!actDrag)actEl.classList.toggle('flip',rightRoom<176&&leftRoom>rightRoom);
  const flip=actEl.classList.contains('flip');actEl.style.setProperty('--yw',clamp(flip?leftRoom:rightRoom,96,176)+'px');
  actEl.style.left=flip?'auto':x+'px';actEl.style.right=flip?(W-x-w)+'px':'auto';actEl.style.top=y+'px'}
function showSize(on){actEl.classList.toggle('open',on);$('#bSize').classList.toggle('on',on);$('#bSize').setAttribute('aria-expanded',on)}
function applyLayout(){
  placeRail();placeAct();
  if(isPhone()){for(const e of[panelEl,railEl,tlEl])e.style.left=e.style.top=e.style.right=e.style.bottom=e.style.zIndex='';panelEl.style.width=panelEl.style.height=panelEl.style.maxHeight='';tlEl.style.width=tlEl.style.height='';tlEl.style.removeProperty('--lh');tlEl.style.removeProperty('--bh');return}
  const W=innerWidth,H=innerHeight;
  const p=follow(LAY.panelBox||(LAY.panelBox=panelStart(W,H)),W,H,panelEl.offsetHeight),pw=clamp(p.w,Math.min(PN_MINW,W),W);
  panelEl.style.width=pw+'px';panelEl.style.height=p.h==null?'':clamp(p.h,Math.min(PN_MINH,H),H)+'px';panelEl.style.maxHeight=p.h==null?'':'none';
  panelEl.style.left=clamp(p.x,0,W-pw)+'px';panelEl.style.top=clamp(p.y,0,Math.max(H-panelEl.offsetHeight,0))+'px';
  const b=follow(LAY.tlBox||(LAY.tlBox=tlStart(W,H)),W,H,tlEl.offsetHeight),tw=clamp(b.w,Math.min(TL_MINW,W),W),th=clamp(b.h,Math.min(TL_MINH(),H),H);
  tlEl.style.left=clamp(b.x,0,W-tw)+'px';tlEl.style.top=clamp(b.y,0,H-th)+'px';tlEl.style.width=tw+'px';tlEl.style.height=th+'px';tlEl.style.right=tlEl.style.bottom='auto';
  /* rows share the height exactly, so resizing moves them smoothly rather than in whole-pixel steps that make the lower rows jump */
  const lh=Math.max((th-TL_CHROME)/PH.length,TL_MINLH);tlEl.style.setProperty('--lh',lh+'px');tlEl.style.setProperty('--bh',(lh-4)+'px');
}
const raise=box=>{panelEl.style.zIndex=box===panelEl?3:2;tlEl.style.zIndex=box===tlEl?3:2};
function dragger(grip,box,set,done,filter){
  grip.addEventListener('pointerdown',e=>{if(filter&&!filter(e))return;e.preventDefault();closeFlys();grip.setPointerCapture(e.pointerId);raise(box);const o=box.getBoundingClientRect(),x0=e.clientX,y0=e.clientY;
    grip.onpointermove=ev=>{set(o.left+ev.clientX-x0,o.top+ev.clientY-y0);applyLayout()};
    grip.onpointerup=grip.onpointercancel=()=>{grip.onpointermove=grip.onpointerup=grip.onpointercancel=null;done();applyLayout();saveLay()}})}
function resizer(h,fn,box){h.addEventListener('pointerdown',e=>{if(e.button)return;e.preventDefault();e.stopPropagation();closeFlys();h.setPointerCapture(e.pointerId);h.classList.add('on');raise(box);
    const r=box.getBoundingClientRect(),x0=e.clientX,y0=e.clientY,o={l:r.left,w:r.width,h:r.height,t:r.top};
    h.onpointermove=ev=>{fn(o,ev.clientX-x0,ev.clientY-y0);applyLayout()};
    h.onpointerup=h.onpointercancel=()=>{h.onpointermove=h.onpointerup=h.onpointercancel=null;h.classList.remove('on');applyLayout();saveLay()}})}
const snapEdge=(p,w,h)=>{if(p.x<28)p.x=8;else if(p.x+w>innerWidth-28)p.x=innerWidth-w-8;if(p.y<28)p.y=8;else if(p.y+h>innerHeight-28)p.y=Math.max(innerHeight-h-8,8)};
const snapTo=(v,e)=>Math.abs(v-e)<EDGE_SNAP?e:v;
/* one behaviour for every pane: move by the strip, resize by any edge or corner, double-click the strip to dock */
function paneControls(box,key,minW,minHf,grip){
  let moved=false;const minH0=()=>typeof minHf==='function'?minHf():minHf;
  const move=(x,y)=>{moved=true;const b=LAY[key];b.w=box.offsetWidth;if(b.h!=null)b.h=box.offsetHeight;b.x=clamp(x,0,Math.max(innerWidth-b.w,0));b.y=clamp(y,0,Math.max(innerHeight-box.offsetHeight,0))};
  const drop=()=>{if(!moved)return;moved=false;const b=LAY[key];snapEdge(b,b.w,box.offsetHeight);b.x=Math.max(b.x,0);b.y=Math.max(b.y,0)};
  dragger(grip,box,move,drop,e=>e.button===0);
  grip.addEventListener('dblclick',()=>{LAY[key]=null;applyLayout();saveLay()});
  for(const d of['n','s','e','w','nw','ne','sw','se']){const h=el('div','rz '+d);box.append(h);
    resizer(h,(o,dx,dy)=>{const W=innerWidth,H=innerHeight,tall=/[ns]/.test(d),minH=minH0();let l=o.l,t=o.t,r=o.l+o.w,b=o.t+o.h;
      if(d.includes('w'))l=clamp(snapTo(l+dx,PANE_GAP),0,r-minW);
      if(d.includes('e'))r=clamp(snapTo(r+dx,W-PANE_GAP),l+minW,W);
      if(d.includes('n'))t=clamp(snapTo(t+dy,PANE_GAP),0,b-minH);
      if(d.includes('s'))b=clamp(snapTo(b+dy,H-PANE_GAP),t+minH,H);
      Object.assign(LAY[key],{x:l,w:r-l},tall?{y:t,h:b-t}:{})},box)}
  return{move,drop}}
const panelMove=paneControls(panelEl,'panelBox',PN_MINW,PN_MINH,$('#gPanel'));
dragger(railEl,panelEl,panelMove.move,panelMove.drop,e=>e.button===0&&e.target===railEl&&railEl.classList.contains('docked'));
/* the action button: a press that travels moves it, a press that stays is a click */
actEl.addEventListener('pointerdown',e=>{
  if(e.button||e.target.closest('#sizeOut'))return;
  const b=LAY.actBox,r=actEl.getBoundingClientRect(),sx=actEl.classList.contains('flip')?r.right-b.w:r.left,sy=r.top,x0=e.clientX,y0=e.clientY,id=e.pointerId;actDragged=false;
  const move=ev=>{if(ev.pointerId!==id)return;const dx=ev.clientX-x0,dy=ev.clientY-y0;
    if(!actDrag){if(Math.hypot(dx,dy)<4)return;actDrag=actDragged=true;actEl.setPointerCapture(id);actEl.classList.add('drag');closeFlys()}
    b.x=clamp(sx+dx,0,Math.max(innerWidth-b.w,0));b.y=clamp(sy+dy,0,Math.max(innerHeight-b.h,0));placeAct()};
  const up=ev=>{if(ev.pointerId!==id)return;removeEventListener('pointermove',move);removeEventListener('pointerup',up);removeEventListener('pointercancel',up);
    if(!actDrag)return;actDrag=false;actEl.classList.remove('drag');snapEdge(b,b.w,b.h);b.x=Math.max(b.x,0);b.y=Math.max(b.y,0);placeAct();saveLay()};
  addEventListener('pointermove',move);addEventListener('pointerup',up);addEventListener('pointercancel',up)});
actEl.addEventListener('click',e=>{if(actDragged){actDragged=false;e.stopPropagation();e.preventDefault()}},true);
let sizeTimer=0,sizeHold=false;
const sizeLeave=()=>{clearTimeout(sizeTimer);sizeTimer=setTimeout(()=>{if(!sizeHold)showSize(false)},350)};
$('#bSize').addEventListener('mouseenter',()=>{clearTimeout(sizeTimer);if(canHover()&&!actDrag)showSize(true)});
$('#bSize').onclick=()=>showSize(canHover()||!actEl.classList.contains('open'));
actEl.addEventListener('mouseenter',()=>clearTimeout(sizeTimer));actEl.addEventListener('mouseleave',()=>{if(canHover())sizeLeave()});
$('#size').addEventListener('pointerdown',()=>{sizeHold=true});
addEventListener('pointerup',()=>{if(!sizeHold)return;sizeHold=false;if(canHover()&&!actEl.matches(':hover'))sizeLeave()});
addEventListener('resize',applyLayout);

/* ---------- camera: the controls of a 3D program; the eye still slides along the ground rather than going under it ---------- */
const ptrs=new Map();let pinch=0,pinchMid=null,panning=false;
const stopAuto=()=>{if(cam.auto){cam.auto=false;document.querySelectorAll('#cams button').forEach(b=>b.classList.remove('on'))}};
function camBasis(){const e=camPos(),T=[cam.tx,cam.ty,cam.tz],f=norm3([T[0]-e[0],T[1]-e[1],T[2]-e[2]]),r=norm3(cross(f,[0,1,0])),u=cross(r,f);return{e,T,f,r,u}}
function camRay(cx,cy){const{e,T,f,r,u}=camBasis(),th=Math.tan(cam.fov*D2R/2),W=canvas.clientWidth,H=canvas.clientHeight,x=(cx/W*2-1)*th*W/H,y=(1-cy/H*2)*th;
  return{e,T,f,d:norm3([f[0]+r[0]*x+u[0]*y,f[1]+r[1]*x+u[1]*y,f[2]+r[2]*x+u[2]*y])}}
const setT=(x,y,z)=>{cam.tx=x;cam.ty=MARB?y:Math.max(y,0);cam.tz=z};
/* pan: the point under the pointer stays under it */
function camPan(dx,dy){const{r,u}=camBasis(),k=2*cam.dist*Math.tan(cam.fov*D2R/2)/canvas.clientHeight;
  setT(cam.tx-r[0]*dx*k+u[0]*dy*k,cam.ty-r[1]*dx*k+u[1]*dy*k,cam.tz-r[2]*dx*k+u[2]*dy*k)}
/* zoom toward whatever is under the pointer; very close in, it pushes forward instead of stopping */
function camZoom(cx,cy,f){const{e,T,f:fw,d}=camRay(cx,cy),de=dot3([T[0]-e[0],T[1]-e[1],T[2]-e[2]],fw),q=de/Math.max(dot3(d,fw),.05),P=[e[0]+d[0]*q,e[1]+d[1]*q,e[2]+d[2]*q];
  if(MARB){const nd=clamp(cam.dist*f,MARB.R*.3,40000),g=nd/cam.dist;setT(P[0]+(T[0]-P[0])*g,P[1]+(T[1]-P[1])*g,P[2]+(T[2]-P[2])*g);cam.dist=nd;return}
  if(cam.dist*f<8){const step=cam.dist*(1-f)*4;setT(cam.tx+d[0]*step,cam.ty+d[1]*step,cam.tz+d[2]*step);return}
  const nd=clamp(cam.dist*f,8,40000),g=nd/cam.dist;setT(P[0]+(T[0]-P[0])*g,P[1]+(T[1]-P[1])*g,P[2]+(T[2]-P[2])*g);cam.dist=nd}
/* double-click the ground: orbit around that spot from here on */
function camPivot(cx,cy){const{e,d}=camRay(cx,cy);if(d[1]>-1e-3)return;const q=-e[1]/d[1],h=[e[0]+d[0]*q,0,e[2]+d[2]*q],v=[e[0]-h[0],e[1]-h[1],e[2]-h[2]],l=Math.hypot(...v);
  if(MARB&&Math.hypot(h[0]-MARB.C[0],h[2]-MARB.C[2])>MARB.disc)return;
  setT(h[0],0,h[2]);cam.dist=l;cam.el=Math.asin(clamp(v[1]/l,-1,1));cam.az=Math.atan2(v[2],v[0]);stopAuto()}
canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});panning=e.shiftKey||e.button===2||e.button===1;pinch=0;pinchMid=null;closeFlys()});
canvas.addEventListener('pointermove',e=>{
  const p=ptrs.get(e.pointerId);if(!p)return;const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;stopAuto();
  if(ptrs.size>=2){const[a,b]=[...ptrs.values()],d=Math.hypot(a.x-b.x,a.y-b.y),m={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
    if(pinch>0&&d>0){camZoom(m.x,m.y,pinch/d);camPan(m.x-pinchMid.x,m.y-pinchMid.y)}pinch=d;pinchMid=m;return}
  if(panning)camPan(dx,dy);else{cam.az+=dx*.005;cam.el=clamp(cam.el+dy*.004,-1.55,1.55)}});
const endPtr=e=>{ptrs.delete(e.pointerId);pinch=0;pinchMid=null};
canvas.addEventListener('pointerup',endPtr);canvas.addEventListener('pointercancel',endPtr);
canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('dblclick',e=>camPivot(e.clientX,e.clientY));
canvas.addEventListener('wheel',e=>{e.preventDefault();stopAuto();camZoom(e.clientX,e.clientY,Math.exp(e.deltaY*(e.ctrlKey?.01:.0012)))},{passive:false});
/* W A S D move, Q E go down and up; hold shift to go faster */
const FLY=new Set();let flyFast=false;
addEventListener('keyup',e=>{FLY.delete(e.key.toLowerCase());flyFast=e.shiftKey});addEventListener('keydown',e=>{flyFast=e.shiftKey});addEventListener('blur',()=>FLY.clear());
function flyStep(dt){if(!FLY.size)return;const{f,r}=camBasis(),h=norm3([f[0],0,f[2]]),v=cam.dist*.7*dt*(flyFast?3:1),k=c=>FLY.has(c)?1:0,
  fw=k('w')-k('s'),rt=k('d')-k('a'),up=k('e')-k('q');
  setT(cam.tx+(h[0]*fw+r[0]*rt)*v,cam.ty+up*v,cam.tz+(h[2]*fw+r[2]*rt)*v)}

/* ---------- presets + JSON ---------- */
/* presets are kept per effect */
let PKEY='';
/* a loaded file keeps only the settings this effect knows, with the right types; the rest come from its defaults */
function mergeSettings(src){const out=JSON.parse(JSON.stringify(DEF));
  const rec=(d,s)=>{for(const k in d){if(s==null||!(k in s))continue;if(d[k]&&typeof d[k]==='object')rec(d[k],s[k]);else if(typeof s[k]===typeof d[k])d[k]=s[k]}};
  rec(out,src);return out}
function setS(o){for(const k of Object.keys(S))delete S[k];Object.assign(S,o)}
const loadStore=()=>{try{return JSON.parse(localStorage.getItem(PKEY)||'{}')}catch(e){return{}}};
const saveStore=o=>{try{localStorage.setItem(PKEY,JSON.stringify(o))}catch(e){}};
function fillPresets(sel){const st=loadStore(),s=$('#pSel');s.innerHTML='';const o=el('option');o.textContent='Presets';o.value='';s.append(o);
  for(const n of Object.keys(st).sort()){const p=el('option');p.textContent=n;p.value=n;s.append(p)}s.value=sel||''}
function applySettings(obj){setS(mergeSettings(obj));rebuildAll()}
function download(name,blob){const a=el('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
function flashBtn(b){b.classList.add('on');setTimeout(()=>b.classList.remove('on'),900)}
const nameIn=$('#pName'),endName=()=>{nameIn.hidden=true;$('#pSel').hidden=false};
function commitSave(){const n=nameIn.value.trim();endName();if(!n)return;const st=loadStore();st[n]=S;saveStore(st);fillPresets(n);flashBtn($('#pSave'))}
$('#pSave').onclick=()=>{if(!nameIn.hidden){commitSave();return}nameIn.value=$('#pSel').value;nameIn.hidden=false;$('#pSel').hidden=true;nameIn.focus()};
nameIn.onkeydown=e=>{if(e.key==='Enter')commitSave();else if(e.key==='Escape')endName()};
$('#pSel').onchange=()=>{const st=loadStore(),n=$('#pSel').value;if(st[n])applySettings(st[n])};
$('#pDel').onclick=()=>{const st=loadStore(),n=$('#pSel').value;if(n in st){delete st[n];saveStore(st);fillPresets()}};
$('#pExp').onclick=()=>download(FX.id+'-settings.json',new Blob([JSON.stringify(S,null,2)],{type:'application/json'}));
$('#pImp').onclick=()=>$('#pFile').click();
$('#pFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{applySettings(JSON.parse(await f.text()))}catch(err){alert('Could not read that JSON file.')}e.target.value=''};
$('#pCopy').onclick=async()=>{const txt=JSON.stringify(S,null,2);
  try{await navigator.clipboard.writeText(txt)}catch(e){const ta=el('textarea');ta.value=txt;document.body.append(ta);ta.select();document.execCommand('copy');ta.remove()}
  flashBtn($('#pCopy'))};

/* ---------- contact sheet: every frame is a function of time, so the seven frames render directly at their moments ---------- */
let sheetCanvas=null;
const draw=t=>{refreshOn();FX.render(t);frameNo++};
function contactSheet(){
  const wasAuto=cam.auto,wasPlaying=simPlaying,wasIdle=idle;
  cam.auto=false;simPlaying=false;idle=false;
  /* the effect may choose its seven moments ({t,label,note}); otherwise they spread evenly over the timeline */
  const shots=FX.sheet?FX.sheet():[...Array(7)].map((_,i)=>{const t=(total-(FX.tail??1.5))*(i+.5)/7;return{t,label:t.toFixed(1)+' s'}});
  draw(simT);
  const tw=400,th=Math.round(tw*canvas.height/canvas.width),pad=10,hdr=30,lab=24;
  const c=el('canvas');c.width=pad+(tw+pad)*shots.length;c.height=hdr+th+lab+pad;
  const x=c.getContext('2d');x.fillStyle='#0c0c0e';x.fillRect(0,0,c.width,c.height);
  x.fillStyle='#d8d6d0';x.font='14px system-ui,sans-serif';x.textBaseline='middle';
  x.fillText(FX.title,pad,hdr/2+2);
  x.font='12px ui-monospace,Menlo,monospace';x.fillStyle='#8f8b82';x.textAlign='right';
  x.fillText((FX.size?FX.size.label.toLowerCase()+' '+(+gp(FX.size.key)).toFixed(2)+' · ':'')+'seed '+S.seed+' · '+canvas.width+'×'+canvas.height+(FX.sheetInfo?' · '+FX.sheetInfo():''),c.width-pad,hdr/2+2);
  shots.forEach((s,i)=>{draw(s.t);const px=pad+i*(tw+pad);x.drawImage(canvas,px,hdr,tw,th);
    x.textAlign='left';x.fillStyle='#e8e8e8';x.fillText(s.label,px,hdr+th+lab/2+2);
    if(s.note){x.textAlign='right';x.fillStyle='#8f8b82';x.fillText(s.note,px+tw,hdr+th+lab/2+2)}});
  cam.auto=wasAuto;simPlaying=wasPlaying;idle=wasIdle;draw(simT);
  sheetCanvas=c;$('#sheetImg').src=c.toDataURL('image/png');$('#sheet').hidden=false;
}
$('#sheetClose').onclick=()=>{$('#sheet').hidden=true};
$('#sheetSave').onclick=()=>{if(sheetCanvas)sheetCanvas.toBlob(b=>download(FX.id+'-contact-sheet-seed'+S.seed+'.png',b),'image/png')};

/* ---------- record a detonation to a video file ---------- */
let rec=null,recChunks=[],recAuto=false;

/* ======================================================================
   MAIN LOOP
   ====================================================================== */
let clockTxt='',last=performance.now(),fpsE=60,msE=16.7,hudT=0;
function frame(now){
  const dt=Math.min((now-last)/1000,.25);last=now;
  if(dt>0){msE=lerp(msE,dt*1000,.08);fpsE=1000/msE}
  if(cam.auto)cam.az+=dt*.07;
  flyStep(dt);
  if(simPlaying){
    const ts=S.g?.timeScale??1;
    simT+=dt*ts*speed;
    if(lowTrack&&simT>(FX.busyFrom?FX.busyFrom():0)){fpsAcc.n++;fpsAcc.t+=dt;if(fpsAcc.t>=.5){minFps=Math.min(minFps,fpsAcc.n/fpsAcc.t);fpsAcc={n:0,t:0}}}
    if(LOOP.on&&!rec&&simT>=LOOP.b&&simT-dt*ts*speed<LOOP.b){const len=LOOP.b-LOOP.a;simT=len>.05?LOOP.a+(simT-LOOP.b)%len:LOOP.a}
    if(simT>=total){simT=total;simPlaying=false;lowTrack=false;if(rec&&recAuto)setTimeout(()=>rec&&rec.stop(),250)}
  }
  try{draw(simT)}catch(e){fail('Render error: '+e.message+'\n'+e.stack);return}
  const tt=tscale();headEl.style.left=(simT/tt*100)+'%';{const W=track.clientWidth,x=simT/tt*W,h=headPill.offsetWidth/2;headEl.style.setProperty('--hx',(Math.max(0,h-x)-Math.max(0,x+h-W))+'px')}
  {const c=simT.toFixed(1)+' '+total.toFixed(1);if(c!==clockTxt){clockTxt=c;$('#clock').innerHTML=simT.toFixed(1)+'<i>/ '+total.toFixed(1)+'</i>'}}
  if(tlPtr)pillHover();
  if(!bandDrag)tipEl.hidden=true;
  if(SOLO&&!simPlaying)endSolo();
  if(PBAR){const ic=SOLO===PBAR.n&&simPlaying?'pause':'play';if(PBAR.play._ic!==ic){PBAR.play._ic=ic;PBAR.play.innerHTML=icon(ic,13);PBAR.play.classList.toggle('on',ic==='pause')}const p=S[PBAR.n],f=(simT-p.start)/Math.max(p.dur,1e-3);PBAR.el.style.setProperty('--v',sat(f)*100+'%');const tx=clamp(simT-p.start,0,p.dur).toFixed(1)+' / '+p.dur.toFixed(1);if(tx!==PBAR.txt){PBAR.txt=tx;PBAR.num.textContent=tx}PBAR.el.classList.toggle('out',idle||f<0||f>1);PBAR.el.classList.toggle('off',!ON[PBAR.n])}
  if(now-hudT>120){hudT=now;
    setIcon($('#bNP'),simPlaying?'pause':'play');
    for(const n of PH)GUT[n].classList.toggle('act',!idle&&ON[n]&&simT>=S[n].start&&simT<S[n].start+S[n].dur);
    if(!$('#stats').hidden)$('#stats').textContent=fpsE.toFixed(0)+' fps · '+msE.toFixed(1)+' ms\nlowest last run  '+(minFps>0&&isFinite(minFps)?minFps.toFixed(0)+' fps':'–')+
      '\nrender  '+F.W+'×'+F.H+(FX.stats?'\n'+FX.stats():'')+(HDR?'':'\nLDR fallback');
  }
  requestAnimationFrame(frame);
}

/* the controls, written once for every effect; an effect's own notes come before them */
const controlsNote=()=>`<h4>Controls</h4><p>The camera works like a 3D program: drag to orbit, right-drag, shift-drag or drag with two fingers to pan, and scroll or pinch to zoom toward whatever is under the pointer. Double-click the ground to orbit around that spot. W, A, S and D move the camera, Q and E lower and raise it, and shift makes it faster. Space or the ${FX.action} button starts it from the top, P or the play button beside it plays or pauses, the 1× button cycles the playback speed, R resets, 1–${CAMS.length} pick a camera (1 is ${CAMS[0][0]}, where it starts), C makes a contact sheet, N opens these notes, H hides the interface, F toggles fullscreen.</p>
<p>On the timeline, drag along the top to scrub, or drag the white pill; click the pill to play or pause. The box in the corner shows where the playhead is, out of the whole timeline, in seconds. Drag a band to move it and drag either end to change its length. The frame along the top sets a loop: drag either handle inward and play repeats just the stretch between them, while ${FX.action} still starts from the top. Double-click a handle to send it back to its end. Shift-drag along the top to place both at once. The handles snap to the edges of the phases.</p>
<p>Each phase's settings page has its own Timeline bar under its name, in the phase's colour: dragging along it scrubs through just that phase, and the play button beside the name repeats just that phase until you pause. Each setting is a bar: drag anywhere along it, or use the arrow keys once it has been clicked (shift for bigger steps). The number inside runs from 0 at the left end to 100 at the right; double-click a bar to type one. Saved settings and presets hold the real values. Drag the strip along the top of the timeline or the settings panel to move it, drag any edge or corner to resize it, and double-click the strip to dock it again. Drag the ${FX.action} button to move it${FX.size?'; the '+FX.size.label.toLowerCase()+' icon beside it slides out the '+FX.size.label.toLowerCase()+' slider':''}. The faint icon in the top right corner shows performance stats.</p>`;

/* ---------- run: an effect hands over its tables and functions (see ../BUILDER.md) ---------- */
function run(fx){
  FX=fx;
  for(const k of['id','title','action','phases','defaults','render'])if(fx[k]==null){fail('Studio.run: the effect has no "'+k+'".');return}
  PH=fx.phases.map(p=>p.id);for(const p of fx.phases){NAME[p.id]=p.name;SHORT[p.id]=p.short||p.name;COL[p.id]=p.color}
  for(const n of PH)if(!fx.defaults[n]||!('on' in fx.defaults[n])||!('start' in fx.defaults[n])||!('dur' in fx.defaults[n])){fail('Studio.run: defaults.'+n+' needs on, start and dur.');return}
  DEF=JSON.parse(JSON.stringify(fx.defaults));if(!('seed' in DEF))DEF.seed=1;if(fx.size&&!(fx.size.key in DEF))DEF[fx.size.key]=fx.size.value??.5;
  setS(JSON.parse(JSON.stringify(DEF)));
  /* every phase gets a page, and every phase page starts with its duration */
  const pages=fx.pages||[];for(const n of PH)if(!pages.some(g=>g.phase===n))pages.push({phase:n,c:[]});
  UI=pages.map(g=>g.phase?{...g,c:[[g.phase+'.dur','Duration',.1,120,.05,'Duration (s)'],...(g.c||[])]}:g);
  if(fx.marble){if(!window.MarbleGlass){fail('Studio.run: a marble needs ../studio/marble-glass.js loaded before studio.js.');return}
    MARB={fx:fx.marble,kit:MarbleGlass.create(gl)};marbleGeom()}
  CAMS=fx.cameras||(fx.marble?MARBLE_CAMS:DEFAULT_CAMS);
  $('#cams').innerHTML=CAMS.map((c,i)=>'<button class="tb" data-c="'+i+'">'+(i+1)+' · '+c[0]+'</button>').join('');
  document.querySelectorAll('#cams button').forEach(b=>b.onclick=()=>camPreset(+b.dataset.c));
  $('#bCam').title='Camera views (1–'+CAMS.length+')';
  PKEY='fxstudio.'+fx.id+'.presets.v1';
  document.title=fx.title+' · Effect Studio';
  const go_=$('#bGo');go_.textContent=fx.action;go_.title=fx.action+' (Space): play from the top';if(fx.actionColor)actEl.style.setProperty('--go',fx.actionColor);
  if(fx.size){$('#bSize').setAttribute('aria-label',fx.size.label);$('#bSize').title=fx.size.label;$('#size').setAttribute('aria-label',fx.size.label);fx.size.apply(+gp(fx.size.key))}
  else actEl.classList.add('nosize');
  $('#notes').innerHTML=(fx.notes||'<h3>'+fx.title+'</h3>')+controlsNote();
  if(isPhone()&&fx.phone)fx.phone(S);
  refreshOn();if(fx.init)fx.init();
  buildIndex();buildTL();fillPresets();rebuildAll();camPreset(0);applyLayout();
  paneControls(tlEl,'tlBox',TL_MINW,TL_MINH,$('#gTl'));
  /* for tests and the check tool */
  window.STUDIO={get S(){return S},get t(){return simT},get playing(){return simPlaying},get total(){return total},cam,camPreset,camRay,camPos,fly:flyStep,loop:LOOP,go,
    render:t=>draw(t),showSection,setTime:t=>{simT=t;simPlaying=false;idle=false},contactSheet,phases:PH,
    /* renders time t and reads the canvas back in the same task, so it works in a hidden or headless page: mean and spread of brightness */
    snap(t){draw(t);const W=48,H=Math.max(8,Math.round(48*canvas.height/canvas.width)),c=document.createElement('canvas');c.width=W;c.height=H;
      const x=c.getContext('2d');x.drawImage(canvas,0,0,W,H);const d=x.getImageData(0,0,W,H).data;let s=0,s2=0,n=W*H;
      for(let i=0;i<d.length;i+=4){const l=(d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722)/255;s+=l;s2+=l*l}const m=s/n;return{mean:+m.toFixed(4),spread:+Math.sqrt(Math.max(s2/n-m*m,0)).toFixed(4),hash:Array.from(d).reduce((h,v)=>(h*31+v)>>>0,7)}}};
  requestAnimationFrame(frame);
}

return{run,get t(){return simT},get playing(){return simPlaying},get idle(){return idle},get frame(){return frameNo},get total(){return total}};
})();
