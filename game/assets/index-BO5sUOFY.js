(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,M=1031,N=1033,P=33776,F=33777,I=33778,L=33779,R=35840,ee=35841,te=35842,ne=35843,re=36196,ie=37492,z=37496,ae=37488,oe=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,ve=37817,ye=37818,be=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,ke=36286,B=2300,Ae=2301,je=2302,Me=2303,V=2400,Ne=2401,Pe=2402,Fe=3200,Ie=3201,Le=`srgb`,Re=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=35048,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Qe(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function $e(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,Qe(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function lt(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*ot}function Ct(e){return e*st}function wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:Qe(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kt(e,t){if(t.constructor===Float32Array)return e;let n=Ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function At(e,t){if(t.constructor===Float32Array)return e;let n=Ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var jt={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:lt,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:At,denormalize:kt},H=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Qe(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new U,Pt=new Mt,Ft=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new Ft,Lt=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:Re,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Re]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=qe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return Qe(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Qe(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new U,Xt=class e extends rt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ct(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Qe(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Xt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new U,an=new nn,on=new U(0,0,0),sn=new U(1,1,1),cn=new U,ln=new U,un=new U,dn=new nn,fn=new Mt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-lt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Qe(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hn=0,gn=new U,_n=new Mt,vn=new nn,yn=new U,bn=new U,xn=new U,Sn=new Mt,Cn=new U(1,0,0),wn=new U(0,1,0),Tn=new U(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new pn,r=new Mt,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new Ft}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?($e(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):$e(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new U(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ut(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&Qe(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Qe(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Qe(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=Pn[e.toLowerCase()];return n===void 0?Qe(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Bt.workingToColorSpace(Rn.copy(this),e),Math.round(lt(Rn.r*255,0,255))*65536+Math.round(lt(Rn.g*255,0,255))*256+Math.round(lt(Rn.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,r=Rn.g,i=Rn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Le){Bt.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,r=Rn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=pt(Fn.h,In.h,t),r=pt(Fn.s,In.s,t),i=pt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new W;W.NAMES=Pn;var zn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U,Kn=new U,qn=new U,Jn=new U,Yn=new U,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new U,new U,new U,new U,new U,new U,new U,new U],nr=new U,rr=new er,ir=new U,ar=new U,or=new U,sr=new U,cr=new U,lr=new U,ur=new U,dr=new U,fr=new U,pr=new U;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=gr();function gr(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function _r(e){Math.abs(e)>65504&&Qe(`DataUtils.toHalfFloat(): Value out of range.`),e=lt(e,-65504,65504),hr.floatView[0]=e;let t=hr.uint32View[0],n=t>>23&511;return hr.baseTable[n]+((t&8388607)>>hr.shiftTable[n])}function vr(e){let t=e>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[t]+(e&1023)]+hr.exponentTable[t],hr.floatView[0]}var yr=class{static toHalfFloat(e){return _r(e)}static fromHalfFloat(e){return vr(e)}},br=new U,xr=new H,Sr=0,Cr=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=_,this.version=0,this._normalizationScale=e===void 0?void 0:Ot(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?kt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.array):Math.round(e*t)}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new er,Or=new U,kr=new U,Ar=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new nn,Nr=new An,Pr=new U,Fr=new er,Ir=new er,Lr=new U,Rr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ft().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Qe(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)$e(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)$e(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let l=new U,u=new U,d=new U,f=new H,p=new H,m=new H,h=new U,g=new U;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new U,b=new U,x=new U,S=new U;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return Qe(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=He,this.updateRanges=[],this.version=0,this.uuid=ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Br(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Br(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Br(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=ct()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Vr=new U,Hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Ot(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Xe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?kt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.data.array):Math.round(e*t)}},Ur=new U,Wr=new U,Gr=new Ft,Kr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ur.subVectors(n,t).cross(Wr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ur),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gr.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qr=0,Jr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Qe(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Kr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xr,Zr=new U,Qr=new U,$r=new U,ei=new H,ti=new H,ni=new nn,ri=new U,ii=new U,ai=new U,oi=new H,si=new H,ci=new H,li=class extends An{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type=`Sprite`,Xr===void 0){Xr=new Rr;let e=new zr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute(`position`,new Hr(e,3,0,!1)),Xr.setAttribute(`uv`,new Hr(e,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Qr.setFromMatrixScale(this.matrixWorld),ni.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-$r.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ui(ri.set(-.5,-.5,0),$r,a,Qr,r,i),ui(ii.set(.5,-.5,0),$r,a,Qr,r,i),ui(ai.set(.5,.5,0),$r,a,Qr,r,i),oi.set(0,0),si.set(1,0),ci.set(1,1);let o=e.ray.intersectTriangle(ri,ii,ai,!1,Zr);if(o===null&&(ui(ii.set(-.5,.5,0),$r,a,Qr,r,i),si.set(0,1),o=e.ray.intersectTriangle(ri,ai,ii,!1,Zr),o===null))return;let s=e.ray.origin.distanceTo(Zr);s<e.near||s>e.far||t.push({distance:s,point:Zr.clone(),uv:$n.getInterpolation(Zr,ri,ii,ai,oi,si,ci,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ui(e,t,n,r,i,a){ei.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ti.copy(ei):(ti.x=a*ei.x-i*ei.y,ti.y=i*ei.x+a*ei.y),e.copy(t),e.x+=ti.x,e.y+=ti.y,e.applyMatrix4(ni)}var di=new U,fi=new U,pi=new U,mi=new U,hi=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fi.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pi),o=mi.dot(this.direction),s=-mi.dot(pi),c=mi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fi).addScaledVector(pi,d),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,ne=j-P*N,re=M-F*N,ie=ne*te-re*ee,z=L*re-R*ne,ae=ee*R-te*L;if(r){if(ie<0||z<0||ae<0)return null}else if((ie<0||z<0||ae<0)&&(ie>0||z>0||ae>0))return null;let oe=ie+z+ae;if(oe===0)return null;let se=I*(ie*D+z*A+ae*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=new nn,vi=new hi,yi=new Ar,bi=new U,xi=new U,Si=new U,Ci=new U,wi=new U,Ti=new U,Ei=new U,Di=new U,Oi=class extends An{constructor(e=new Rr,t=new gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wi.fromBufferAttribute(s,e),a?Ti.addScaledVector(wi,r):Ti.addScaledVector(wi.sub(t),r))}t.add(Ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(i),vi.copy(e.ray).recast(e.near),yi.containsPoint(vi.origin)===!1&&(vi.intersectSphere(yi,bi)===null||vi.origin.distanceToSquared(bi)>(e.far-e.near)**2)||(_i.copy(i).invert(),vi.copy(e.ray).applyMatrix4(_i),(n.boundingBox===null||vi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ai(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ai(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ai(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ai(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ki(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Di.copy(s),Di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Di);return l<n.near||l>n.far?null:{distance:l,point:Di.clone(),object:e}}function Ai(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xi),e.getVertexPosition(c,Si),e.getVertexPosition(l,Ci);let u=ki(e,t,n,r,xi,Si,Ci,Ei);if(u){let e=new U;$n.getBarycoord(Ei,xi,Si,Ci,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};$n.getNormal(xi,Si,Ci,t.normal),u.face=t,u.barycoord=e}return u}var ji=class extends Xt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mi=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new nn,Pi=new nn,Fi=[],Ii=new er,Li=new nn,Ri=new Oi,zi=new Ar,Bi=class extends Oi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Ii.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Ii)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),zi.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),e.ray.intersectsSphere(zi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ni),Pi.multiplyMatrices(n,Ni),Ri.matrixWorld=Pi,Ri.raycast(e,Fi);for(let e=0,n=Fi.length;e<n;e++){let n=Fi[e];n.instanceId=i,n.object=this,t.push(n)}Fi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new Ar,Hi=new H(.5,.5),Ui=new U,Wi=class{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,i=new Kr,a=new Kr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476+Hi.distanceTo(e.center),Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ui.x=r.normal.x>0?e.max.x:e.min.x,Ui.y=r.normal.y>0?e.max.y:e.min.y,Ui.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ui)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gi=new nn,Ki=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Gi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Wi),n[e].setFromProjectionMatrix(Gi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Wi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},qi=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ji=new U,Yi=new U,Xi=new nn,Zi=new hi,Qi=new Ar,$i=new U,ea=new U,ta=class extends An{constructor(e=new Rr,t=new qi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ji.fromBufferAttribute(t,e-1),Yi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ji.distanceTo(Yi);e.setAttribute(`lineDistance`,new Er(n,1))}else Qe(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Qi.radius+=i,e.ray.intersectsSphere(Qi)===!1)return;Xi.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=na(this,e,Zi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=na(this,e,Zi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=na(this,e,Zi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=na(this,e,Zi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ji.fromBufferAttribute(s,i),Yi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ji,Yi,$i,ea)>r)return;$i.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo($i);if(!(c<t.near||c>t.far))return{distance:c,point:ea.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ra=new U,ia=new U,aa=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ra.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ra.distanceTo(ia);e.setAttribute(`lineDistance`,new Er(n,1))}else Qe(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},oa=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sa=new nn,ca=new hi,la=new Ar,ua=new U,da=class extends An{constructor(e=new Rr,t=new oa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),la.radius+=i,e.ray.intersectsSphere(la)===!1)return;sa.copy(r).invert(),ca.copy(e.ray).applyMatrix4(sa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ua.fromBufferAttribute(l,n),fa(ua,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ua.fromBufferAttribute(l,a),fa(ua,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function fa(e,t,n,r,i,a,o){let s=ca.distanceSqToPoint(e);if(s<n){let n=new U;ca.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pa=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ma=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends Xt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ga=class extends ha{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},va=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ya=class e extends Rr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Er(o,3)),this.setAttribute(`normal`,new Er(s,3)),this.setAttribute(`uv`,new Er(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ba=class e extends Rr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xa=class e extends ba{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class e extends Rr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Er(i,3)),this.setAttribute(`normal`,new Er(i.slice(),3)),this.setAttribute(`uv`,new Er(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ca=class e extends Sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},wa=class e extends Sa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ta=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ea=class e extends Rr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Er(s,3)),this.setAttribute(`normal`,new Er(c,3)),this.setAttribute(`uv`,new Er(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Da=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Oa=class e extends Rr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ka(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ja(i))i.isRenderTargetTexture?(Qe(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ja(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Aa(e){let t={};for(let n=0;n<e.length;n++){let r=ka(e[n]);for(let e in r)t[e]=r[e]}return t}function ja(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ma(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Na(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Pa={clone:ka,merge:Aa},Fa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ia=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,La=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fa,this.fragmentShader=Ia,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ka(e.uniforms),this.uniformsGroups=Ma(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ft().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ra=class extends La{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},za=class extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ba=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Fe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ha(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ua(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Wa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ga=class extends Wa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V,endingEnd:V}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case Pe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case Pe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ka=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},qa=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ja=class extends Wa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Za(n,t,g,y,r);i[p]=Ya(x,o,_,b,m)}return i}};function Ya(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Xa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Za(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ya(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Xa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Qa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ua(e.settings)&&(n.settings={inTangents:Ha(e.settings.inTangents,Array),outTangents:Ha(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case B:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case je:t=this.InterpolantFactoryMethodSmooth;break;case Me:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Qe(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return B;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return je;case this.InterpolantFactoryMethodBezier:return Me}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ua(this.settings)&&($a(this.settings.inTangents,e),$a(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ua(this.settings)&&(eo(this.settings.inTangents,e),eo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&($e(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){$e(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){$e(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){$e(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===je,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ua(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function $a(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function eo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Qa.prototype.ValueTypeName=``,Qa.prototype.TimeBufferType=Float32Array,Qa.prototype.ValueBufferType=Float32Array,Qa.prototype.DefaultInterpolation=Ae;var to=class extends Qa{constructor(e,t,n){super(e,t,n)}};to.prototype.ValueTypeName=`bool`,to.prototype.ValueBufferType=Array,to.prototype.DefaultInterpolation=B,to.prototype.InterpolantFactoryMethodLinear=void 0,to.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}};no.prototype.ValueTypeName=`color`;var ro=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}};ro.prototype.ValueTypeName=`number`;var io=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ao=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName=`quaternion`,ao.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Qa{constructor(e,t,n){super(e,t,n)}};oo.prototype.ValueTypeName=`string`,oo.prototype.ValueBufferType=Array,oo.prototype.DefaultInterpolation=B,oo.prototype.InterpolantFactoryMethodLinear=void 0,oo.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}};so.prototype.ValueTypeName=`vector`;var co=class extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lo=class extends co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uo=new nn,fo=new U,po=new U,mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(fo),po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(po),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ho=new U,go=new Mt,_o=new U,vo=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,go,_o),_o.x===1&&_o.y===1&&_o.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,go,_o.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ho,go,_o),_o.x===1&&_o.y===1&&_o.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,go,_o.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yo=new U,bo=new H,xo=new H,So=class extends vo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yo.x,yo.y).multiplyScalar(-e/yo.z),yo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yo.x,yo.y).multiplyScalar(-e/yo.z)}getViewSize(e,t){return this.getViewBounds(e,bo,xo),t.subVectors(xo,bo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Co=class extends mo{constructor(){super(new So(90,1,.5,500)),this.isPointLightShadow=!0}},wo=class extends co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Co}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},To=class extends vo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eo=class extends mo{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Eo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oo=-90,ko=1,Ao=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new So(Oo,ko,e,t);r.layers=this.layers,this.add(r);let i=new So(Oo,ko,e,t);i.layers=this.layers,this.add(i);let a=new So(Oo,ko,e,t);a.layers=this.layers,this.add(a);let o=new So(Oo,ko,e,t);o.layers=this.layers,this.add(o);let s=new So(Oo,ko,e,t);s.layers=this.layers,this.add(s);let c=new So(Oo,ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jo=class extends So{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Mo=`\\[\\]\\.:\\/`,No=RegExp(`[\\[\\]\\.:\\/]`,`g`),Po=`[^\\[\\]\\.:\\/]`,Fo=`[^`+Mo.replace(`\\.`,``)+`]`,Io=`((?:WC+[\\/:])*)`.replace(`WC`,Po),Lo=`(WCOD+)?`.replace(`WCOD`,Fo),Ro=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Po),zo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Po),Bo=RegExp(`^`+Io+Lo+Ro+zo+`$`),Vo=[`material`,`materials`,`bones`,`map`],Ho=class{constructor(e,t,n){let r=n||Uo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Uo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(No,``)}static parseTrackName(e){let t=Bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Vo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qe(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){$e(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){$e(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){$e(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){$e(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){$e(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){$e(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){$e(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;$e(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){$e(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){$e(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Uo.Composite=Ho,Uo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Uo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Uo.prototype.GetterByBindingType=[Uo.prototype._getValue_direct,Uo.prototype._getValue_array,Uo.prototype._getValue_arrayElement,Uo.prototype._getValue_toArray],Uo.prototype.SetterByBindingTypeAndVersioning=[[Uo.prototype._setValue_direct,Uo.prototype._setValue_direct_setNeedsUpdate,Uo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_array,Uo.prototype._setValue_array_setNeedsUpdate,Uo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_arrayElement,Uo.prototype._setValue_arrayElement_setNeedsUpdate,Uo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_fromArray,Uo.prototype._setValue_fromArray_setNeedsUpdate,Uo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wo=new nn,Go=class{constructor(e,t,n=0,r=1/0){this.ray=new hi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wo),this}intersectObject(e,t=!0,n=[]){return qo(e,this,n,t),n.sort(Ko),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)qo(e[r],this,n,t);return n.sort(Ko),n}};function Ko(e,t){return e.distance-t.distance}function qo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)qo(r[e],t,n,!0)}}var Jo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=lt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Yo=class extends rt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xo(e,t,n,r){let i=Zo(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ee:case ne:return Math.max(e,16)*Math.max(t,8)/4;case R:case te:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case z:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zo(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?Qe(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Qo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $o(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var es={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ts={basic:{uniforms:Aa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:es.meshbasic_vert,fragmentShader:es.meshbasic_frag},lambert:{uniforms:Aa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:es.meshlambert_vert,fragmentShader:es.meshlambert_frag},phong:{uniforms:Aa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:es.meshphong_vert,fragmentShader:es.meshphong_frag},standard:{uniforms:Aa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:es.meshphysical_vert,fragmentShader:es.meshphysical_frag},toon:{uniforms:Aa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new W(0)}}]),vertexShader:es.meshtoon_vert,fragmentShader:es.meshtoon_frag},matcap:{uniforms:Aa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:es.meshmatcap_vert,fragmentShader:es.meshmatcap_frag},points:{uniforms:Aa([G.points,G.fog]),vertexShader:es.points_vert,fragmentShader:es.points_frag},dashed:{uniforms:Aa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:es.linedashed_vert,fragmentShader:es.linedashed_frag},depth:{uniforms:Aa([G.common,G.displacementmap]),vertexShader:es.depth_vert,fragmentShader:es.depth_frag},normal:{uniforms:Aa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:es.meshnormal_vert,fragmentShader:es.meshnormal_frag},sprite:{uniforms:Aa([G.sprite,G.fog]),vertexShader:es.sprite_vert,fragmentShader:es.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:es.background_vert,fragmentShader:es.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:es.backgroundCube_vert,fragmentShader:es.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:es.cube_vert,fragmentShader:es.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:es.equirect_vert,fragmentShader:es.equirect_frag},distance:{uniforms:Aa([G.common,G.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:es.distance_vert,fragmentShader:es.distance_frag},shadow:{uniforms:Aa([G.lights,G.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:es.shadow_vert,fragmentShader:es.shadow_frag}};ts.physical={uniforms:Aa([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:es.meshphysical_vert,fragmentShader:es.meshphysical_frag};var ns={r:0,b:0,g:0},rs=new nn,is=new Ft;is.set(-1,0,0,0,1,0,0,0,1);function as(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Oi(new va(1,1,1),new La({name:`BackgroundCubeMaterial`,uniforms:ka(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(is),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Oi(new Ta(2,2),new La({name:`BackgroundMaterial`,uniforms:ka(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ns,Na(e)),n.buffers.color.setClear(ns.r,ns.g,ns.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function os(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ss(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function cs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Qe(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Qe(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&Qe(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ls(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Kr,s=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var us=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new va(5,5,5),i=new La({name:`CubemapFromEquirect`,uniforms:ka(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Oi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ds=256,fs=3,ps=20,ms=256,hs=16,gs=3,_s=new U,vs=new W,ys=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ao(1,10,null),this._boxMesh=new Oi(new va(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_s}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(vs));let h=new Ao(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Es(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ts(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ds,Et(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ds:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=bs(e,!1,!1),n=Math.log2(e)-fs;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Es()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ts()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ss(),this._integrationMaterial=Cs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/hs);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-gs)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ms*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ws());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function bs(e,t,n){return new us(e,{minFilter:u,generateMipmaps:t,type:v,colorSpace:Re,depthBuffer:n})}function xs(e,t,n){return new La({name:e,uniforms:t,vertexShader:es.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ss(){return xs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ms}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cs(){return xs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hs}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ws(){return xs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ps}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ts(){return xs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Es(){return xs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ds(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new us(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ys(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ys(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Os(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ks(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Tr:wr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function As(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function js(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:$e(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ms(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ns(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ps={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Fs(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Rr;u.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let d=new Ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Oi(u,d),p=new To(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,y=null,b=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,S=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ha(t,n),a===!0&&(l.format=O,l.type=x)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Bt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ps[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Is=new Xt,Ls=new ha(1,1),Rs=new ga(1),zs=new en,Bs=new tn,Vs=new pa,Hs=[],Us=[],Ws=new Float32Array(16),Gs=new Float32Array(9),Ks=new Float32Array(4);function qs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Hs[i];if(a===void 0&&(a=new Float32Array(i),Hs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Js(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ys(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Xs(e,t){let n=Us[t];n===void 0&&(n=new Int32Array(t),Us[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Js(n,t))return;e.uniform2fv(this.addr,t),Ys(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Js(n,t))return;e.uniform3fv(this.addr,t),Ys(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Js(n,t))return;e.uniform4fv(this.addr,t),Ys(n,t)}}function tc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Js(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ys(n,t)}else{if(Js(n,r))return;Ks.set(r),e.uniformMatrix2fv(this.addr,!1,Ks),Ys(n,r)}}function nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Js(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ys(n,t)}else{if(Js(n,r))return;Gs.set(r),e.uniformMatrix3fv(this.addr,!1,Gs),Ys(n,r)}}function rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Js(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ys(n,t)}else{if(Js(n,r))return;Ws.set(r),e.uniformMatrix4fv(this.addr,!1,Ws),Ys(n,r)}}function ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Js(n,t))return;e.uniform2iv(this.addr,t),Ys(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Js(n,t))return;e.uniform3iv(this.addr,t),Ys(n,t)}}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Js(n,t))return;e.uniform4iv(this.addr,t),Ys(n,t)}}function cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Js(n,t))return;e.uniform2uiv(this.addr,t),Ys(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Js(n,t))return;e.uniform3uiv(this.addr,t),Ys(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Js(n,t))return;e.uniform4uiv(this.addr,t),Ys(n,t)}}function fc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?fc(Ls):Is,n.setTexture2D(t||a,i)}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Bs,i)}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?fc(Rs):Vs,n.setTextureCube(t||a,i)}function gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||zs,i)}function _c(e){switch(e){case 5126:return Zs;case 35664:return Qs;case 35665:return $s;case 35666:return ec;case 35674:return tc;case 35675:return nc;case 35676:return rc;case 5124:case 35670:return ic;case 35667:case 35671:return ac;case 35668:case 35672:return oc;case 35669:case 35673:return sc;case 5125:return cc;case 36294:return lc;case 36295:return uc;case 36296:return dc;case 35678:case 36198:case 36298:case 36306:case 35682:return pc;case 35679:case 36299:case 36307:return mc;case 35680:case 36300:case 36308:case 36293:return hc;case 36289:case 36303:case 36311:case 36292:return gc}}function vc(e,t){e.uniform1fv(this.addr,t)}function yc(e,t){let n=qs(t,this.size,2);e.uniform2fv(this.addr,n)}function bc(e,t){let n=qs(t,this.size,3);e.uniform3fv(this.addr,n)}function xc(e,t){let n=qs(t,this.size,4);e.uniform4fv(this.addr,n)}function Sc(e,t){let n=qs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cc(e,t){let n=qs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wc(e,t){let n=qs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tc(e,t){e.uniform1iv(this.addr,t)}function Ec(e,t){e.uniform2iv(this.addr,t)}function Dc(e,t){e.uniform3iv(this.addr,t)}function Oc(e,t){e.uniform4iv(this.addr,t)}function kc(e,t){e.uniform1uiv(this.addr,t)}function Ac(e,t){e.uniform2uiv(this.addr,t)}function jc(e,t){e.uniform3uiv(this.addr,t)}function Mc(e,t){e.uniform4uiv(this.addr,t)}function Nc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fc(Ls):Is;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Bs,a[e])}function Fc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?fc(Rs):Vs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ic(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||zs,a[e])}function Lc(e){switch(e){case 5126:return vc;case 35664:return yc;case 35665:return bc;case 35666:return xc;case 35674:return Sc;case 35675:return Cc;case 35676:return wc;case 5124:case 35670:return Tc;case 35667:case 35671:return Ec;case 35668:case 35672:return Dc;case 35669:case 35673:return Oc;case 5125:return kc;case 36294:return Ac;case 36295:return jc;case 36296:return Mc;case 35678:case 36198:case 36298:case 36306:case 35682:return Nc;case 35679:case 36299:case 36307:return Pc;case 35680:case 36300:case 36308:case 36293:return Fc;case 36289:case 36303:case 36311:case 36292:return Ic}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_c(t.type)}},zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lc(t.type)}},Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Hc(e,t){e.seq.push(t),e.map[t.id]=t}function Uc(e,t,n){let r=e.name,i=r.length;for(Vc.lastIndex=0;;){let a=Vc.exec(r),o=Vc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hc(n,l===void 0?new Rc(s,e,t):new zc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bc(s),Hc(n,e)),n=e}}}var Wc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Uc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kc=37297,qc=0;function Jc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yc=new Ft;function Xc(e){Bt._getMatrix(Yc,Bt.workingColorSpace,e);let t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return Qe(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jc(e.getShaderSource(t),r)}return i}function Qc(e,t){let n=Xc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var $c={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function el(e,t){let n=$c[t];return n===void 0?(Qe(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var tl=new U;function nl(){return Bt.getLuminanceCoefficients(tl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${tl.x.toFixed(4)}, ${tl.y.toFixed(4)}, ${tl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function rl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ol).join(`
`)}function il(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function al(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ol(e){return e!==``}function sl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ll=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(e){return e.replace(ll,dl)}function dl(e,t){let n=es[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ul(n)}var fl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(e){return e.replace(fl,ml)}function ml(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function hl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var gl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function _l(e){return gl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var vl={302:`ENVMAP_MODE_REFRACTION`};function yl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:vl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var bl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function xl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:bl[e.combine]||`ENVMAP_BLENDING_NONE`}function Sl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=_l(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=yl(n),d=xl(n),f=rl(n),p=il(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ol).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ol).join(`
`),g.length>0&&(g+=`
`)):(h=[hl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ol).join(`
`),g=[hl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:es.tonemapping_pars_fragment,n.toneMapping===0?``:el(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,es.colorspace_pars_fragment,Qc(`linearToOutputTexel`,n.outputColorSpace),nl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ol).join(`
`)),o=ul(o),o=sl(o,n),o=cl(o,n),s=ul(s),s=sl(s,n),s=cl(s,n),o=pl(o),s=pl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Gc(i,i.VERTEX_SHADER,v),x=Gc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Zc(i,b,`vertex`),n=Zc(i,x,`fragment`);$e(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Qe(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Wc(i,m),w=al(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Kc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Cl=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tl(e),t.set(e,n)),n}},Tl=class{constructor(e){this.id=Cl++,this.code=e,this.usedTimes=0}};function El(e){return e===1030||e===37490||e===36285}function Dl(e,t,n,r,i,a){let o=new mn,s=new wl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&Qe(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ts[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,L=I&&b.isPMREMTexture===!0,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,ne=!!i.normalMap,re=!!i.displacementMap,ie=!!i.emissiveMap,z=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.diffuseRoughness>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=oe&&!!i.anisotropyMap,he=se&&!!i.clearcoatMap,ge=se&&!!i.clearcoatNormalMap,_e=se&&!!i.clearcoatRoughnessMap,ve=ce&&!!i.diffuseRoughnessMap,ye=de&&!!i.iridescenceMap,be=de&&!!i.iridescenceThicknessMap,xe=fe&&!!i.sheenColorMap,Se=fe&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=pe&&!!i.transmissionMap,De=pe&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,B=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=e.toneMapping);let V=L?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ne={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:L,envMapMaxLod:L?V.length-1:null,envMapSize:L?V[0].width:null,aoMap:R,lightMap:ee,bumpMap:te,normalMap:ne,displacementMap:re,emissiveMap:ie,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&El(i.normalMap.format),metalnessMap:z,roughnessMap:ae,anisotropy:oe,anisotropyMap:me,clearcoat:se,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,diffuseRoughness:ce,diffuseRoughnessMap:ve,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:fe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:pe,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:B,alphaHash:Ae,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:R&&p(i.aoMap.channel),lightMapUv:ee&&p(i.lightMap.channel),bumpMapUv:te&&p(i.bumpMap.channel),normalMapUv:ne&&p(i.normalMap.channel),displacementMapUv:re&&p(i.displacementMap.channel),emissiveMapUv:ie&&p(i.emissiveMap.channel),metalnessMapUv:z&&p(i.metalnessMap.channel),roughnessMapUv:ae&&p(i.roughnessMap.channel),anisotropyMapUv:me&&p(i.anisotropyMap.channel),clearcoatMapUv:he&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ye&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(i.sheenRoughnessMap.channel),specularMapUv:Ce&&p(i.specularMap.channel),specularColorMapUv:we&&p(i.specularColorMap.channel),specularIntensityMapUv:Te&&p(i.specularIntensityMap.channel),transmissionMapUv:Ee&&p(i.transmissionMap.channel),thicknessMapUv:De&&p(i.thicknessMap.channel),alphaMapUv:ke&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ne||oe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||ke),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ts[t];n=Pa.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Sl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ol(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Al(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||kl),r.length>1&&r.sort(t||Al),i.length>1&&i.sort(t||Al)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ml(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new jl,e.set(t,[i])):n>=r.length?(i=new jl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new W};break;case`SpotLight`:n={position:new U,direction:new U,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Pl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Fl=0;function Il(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ll(e){let t=new Nl,n=Pl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Il);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Fl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Rl(e){let t=new Ll(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function zl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Rl(e),t.set(n,[a])):r>=i.length?(a=new Rl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hl=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ul=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Wl=new nn,Gl=new U,Kl=new U;function ql(e,t,n){let r=new Wi,i=new H,o=new H,s=new Zt,l=new Ba,u=new Va,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new La({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Bl,fragmentShader:Vl}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Rr;y.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Oi(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(Qe(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){Qe(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){Qe(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:j,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ha(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new us(i.x),p.map.depthTexture=new ga(i.x,g)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new ha(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Gl),Kl.copy(e.position),Kl.add(Hl[t]),e.up.copy(Ul[t]),e.lookAt(Kl),e.updateMatrixWorld(),n.makeTranslation(-Gl.x,-Gl.y,-Gl.z),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Wl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:j,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Jl(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new Zt().fromArray(R),ne=new Zt().fromArray(ee);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ie={};ie[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),z(e.CULL_FACE),de(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ae(e.BLEND),g=!1);else if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$e(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:$e(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:$e(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:$e(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?ae(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?ae(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function _e(t){t?z(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ye(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ie[t]),i.type=t,i.texture=n)}function be(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function B(){try{e.texImage3D(...arguments)}catch(e){$e(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function V(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Pe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:B,pixelStorei:je,getParameter:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:Me,viewport:V,reset:Fe}}function Yl(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function D(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Qe(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Qe(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Qe(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Qe(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ze:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function N(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Qe(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function L(e){ee(e.target)}function R(e){te(e.target)}function ee(e){e.removeEventListener(`dispose`,L),I(e),re(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function te(e){e.removeEventListener(`dispose`,R),I(e),z(e)}function ne(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?te(t):ee(t))}C.clear(),b.clear()}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ie(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ie(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function z(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ee(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&Qe(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,n){let r=f.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)Qe(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Qe(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function pe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?Ce(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ge={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&Qe(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,L),F(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ue(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ie(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=D(n.image,!1,p.maxTextureSize);t=Pe(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=M(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=P(n,t);if(n.isDepthTexture)u=N(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Xo(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else Qe(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?Qe(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Xo(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Fe(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);k(n)&&n.mipmapsAutoUpdate===!0&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Bt.getPrimaries(Bt.workingColorSpace),s=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=D(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Pe(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=M(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=P(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=N(n.format===O,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?Qe(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Fe(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}k(n)&&n.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=M(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),V(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Me(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=N(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=M(a.internalFormat,o,s,a.normalized,a.colorSpace);V(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?me(n.depthTexture,0):de(n.depthTexture,0);let s=a.__webglTexture,c=Me(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)V(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)V(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,R),F(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&V(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=M(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n)?A(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),k(i)&&A(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n)?A(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&De(t)}function B(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Ae=[];function je(t){if(t.samples>0){if(V(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Ae.length=0,Ae.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ae.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function V(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Qe(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):$e(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=V,this.dispose=ne}function Xl(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ql=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new La({vertexShader:Zl,fragmentShader:Ql,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oi(new Ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new $l,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new H,k=null,A=null,j=new So;j.viewport=new Zt;let M=new So;M.viewport=new Zt;let N=[j,M],P=new jo,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getHandSpace()};function L(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Qe(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Qe(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $t(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new ha(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $t(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;te(P,i);for(let e=0;e<a.length;e++)te(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,P,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new So,o.layers.enable(n),o.viewport=new Zt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new _a,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let z=new Qo;z.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},tu=new nn,nu=new Ft;nu.set(-1,0,0,0,1,0,0,0,1);function ru(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Na(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(tu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(nu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function iu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?Qe(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):Qe(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var au=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ou=null;function su(){return ou===null&&(ou=new ji(au,16,16,j,v),ou.name=`DFG_LUT`,ou.minFilter=c,ou.magFilter=c,ou.wrapS=r,ou.wrapT=r,ou.generateMipmaps=!1,ou.needsUpdate=!0),ou}var cu=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([N,M,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,j=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,ee=null,te=null,ne=null;this._outputColorSpace=Le;let re=0,ie=0,z=null,ae=-1,oe=null,se=new Zt,ce=new Zt,le=null,ue=new W(0),de=0,fe=t.width,pe=t.height,me=1,he=null,ge=null,_e=new Zt(0,0,fe,pe),ve=new Zt(0,0,fe,pe),ye=!1,be=new Wi,xe=new Ki,Se=!1,Ce=!1,we=new nn,Te=new U,Ee=new Zt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return z===null?me:1}let B=n;function Ae(e,n){return t.getContext(e,n)}let je,Me,V,Ne,Pe,Fe,Ie,Re,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,et,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),B===null){let t=`webgl2`;if(B=Ae(t,e),B===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e(`WebGLRenderer: `+e.message),e}function ot(){je=new Os(B),je.init(),rt=new Xl(B,je),Me=new cs(B,je,e,rt),V=new Jl(B,je),Me.reversedDepthBuffer&&p&&V.buffers.depth.setReversed(!0),ee=B.createFramebuffer(),te=B.createFramebuffer(),ne=B.createFramebuffer(),Ne=new js(B),Pe=new Ol,Fe=new Yl(B,je,V,Pe,Me,rt,Ne),Ie=new Ds(I),Re=new $o(B),it=new os(B,Re),ze=new ks(B,Re,Ne,it),Be=new Ns(B,ze,Re,it,Ne),Ze=new Ms(B,Me,Fe),Ke=new ls(Pe),Ve=new Dl(I,Ie,je,Me,it,Ke),He=new ru(I,Pe),Ue=new Ml,Ge=new zl(je),Ye=new as(I,Ie,V,Be,_,s),qe=new ql(I,Be,Me),at=new iu(B,Ne,Me,V),et=new ss(B,je,Ne),nt=new As(B,je,Ne),Ne.programs=Ve.programs,I.capabilities=Me,I.extensions=je,I.properties=Pe,I.renderLists=Ue,I.shadowMap=qe,I.state=V,I.info=Ne}S!==1009&&(F=new Fs(S,t.width,t.height,o,r,i));let st=new eu(I,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){st.isPresenting?Qe(`WebGLRenderer: Can't change size while VR device is presenting.`):(fe=e,pe=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)$e(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Qe(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),V.viewport(se.copy(_e).multiplyScalar(ke()).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(ce.copy(ve).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=C.has(t)}if(e){let e=z.texture.type,t=w.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Ye.dispose(),Ue.dispose(),Ge.dispose(),Fe.dispose(),Pe.dispose(),Ie.dispose(),Be.dispose(),ze.dispose(),it.dispose(),at.dispose(),Ve.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),L=!0}function lt(){Xe(`WebGLRenderer: Context Restored.`),L=!1;let e=Ne.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;ot(),Ne.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function ut(e){$e(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),Pe.remove(e)}function pt(e){let t=Pe.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Re.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*ke()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=Pe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),Se===!0&&Ke.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),k=Ge.get(n),k.init(t),P.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),R!==null&&R.updateLights(k.state.lightsArray),Ce=this.localClippingEnabled,Se=Ke.init(this.clippingPlanes,Ce),Se===!0&&Ke.setGlobalState(this.clippingPlanes,t),R!==null&&qe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),k=P.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Pe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Qo;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){$e(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=F!==null&&(z===null||n)&&F.begin(I,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,z),k=Ge.get(e,P.length),k.init(t),k.state.textureUnits=Fe.getTextureUnits(),P.push(k),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?xe.setFromArrayCamera(t):be.setFromProjectionMatrix(we,We,t.reversedDepth),Ce=this.localClippingEnabled,Se=Ke.init(this.clippingPlanes,Ce),O=Ue.get(e,j.length),O.init(),j.push(O),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,I.sortObjects)}bt(e,t,0,I.sortObjects),O.finish(),R!==null&&R.updateLights(k.state.lightsArray),I.sortObjects===!0&&O.sort(he,ge),Oe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Oe&&Ye.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ke.beginShadows();let i=k.state.shadowsArray;if(qe.render(i,e,t),Se===!0&&Ke.endShadows(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Oe&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(O,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Oe&&Ye.render(e),xt(O,e,t)}z!==null&&ie===0&&(Fe.updateMultisampleRenderTarget(z),Fe.updateRenderTargetMipmap(z)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),it.resetDefaultState(),ae=-1,oe=null,P.pop(),P.length>0?(k=P[P.length-1],Fe.setTextureUnits(k.state.textureUnits),Se===!0&&Ke.setGlobalState(I.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,R!==null&&R.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?xe:be;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let i=Be.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ee.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?xe:be;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ee.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ee.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ee.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Se===!0&&Ke.setGlobalState(I.clippingPlanes,n),r&&V.viewport(se.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),l=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ue),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),Oe&&Ye.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Se===!0&&Ke.setGlobalState(I.clippingPlanes,r),Ct(e,n,r),Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,l),I.setClearColor(ue,de),p!==void 0&&(r.viewport=p),I.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function Tt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Et(e,t,n){t.isScene!==!0&&(t=De);let r=Pe.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ve.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),kt(e,s),r.needsLights=H(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Tt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Dt(e,t,n,r,i){let a=Pe.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Et(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=Pe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=De),Fe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Pe.get(r),y=k.state.lights;if(Se===!0&&(Ce===!0||e!==oe)){let t=e===oe&&r.id===ae;Ke.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Tt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Dt(r,t,i,s,h):Et(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(V.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ae&&(ae=r.id,w=!0),C||oe!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(B,`projectionMatrix`,e.projectionMatrix),E.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(B,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&E.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(B,`sunShadowMap`,y.state.sunShadowMap,Fe),y.state.directionalShadowMap.length>0&&E.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Fe),y.state.spotShadowMap.length>0&&E.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Fe),y.state.pointShadowMap.length>0&&E.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Fe)),i.isSkinnedMesh){E.setOptional(B,i,`bindMatrix`),E.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(B,`boneTexture`,e.boneTexture,Fe))}i.isBatchedMesh&&(E.setOptional(B,i,`batchingTexture`),E.setValue(B,`batchingTexture`,i._matricesTexture,Fe),E.setOptional(B,i,`batchingIdTexture`),E.setValue(B,`batchingIdTexture`,i._indirectTexture,Fe),E.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(B,`batchingColorTexture`,i._colorsTexture,Fe));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ze.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=su()),w){if(E.setValue(B,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&jt(O,T),a&&r.fog===!0&&He.refreshFogUniforms(O,a),He.refreshMaterialUniforms(O,r,me,pe,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Wc.upload(B,Ot(v),O,Fe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wc.upload(B,Ot(v),O,Fe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(B,`center`,i.center),E.setValue(B,`modelViewMatrix`,i.modelViewMatrix),E.setValue(B,`normalMatrix`,i.normalMatrix),E.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,S),at.bind(n,S)}}return S}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function H(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=Pe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Pe.get(e.texture).__webglTexture=t,Pe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Pe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=Pe.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,V.viewport(se),V.scissor(ce),V.setScissorTest(le),ae=-1;return}if(o.__webglFramebuffer===void 0)Fe.setupRenderTarget(e);else if(o.__hasExternalTextures)Fe.rebindTextures(e,Pe.get(e.texture).__webglTexture,Pe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Pe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Fe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Pe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Fe.useMultisampledRTT(e)===!1?Pe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(_e).multiplyScalar(me).floor(),ce.copy(ve).multiplyScalar(me).floor(),le=ye;if(n!==0&&(r=ee),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(se),V.scissor(ce),V.setScissorTest(le),i){let r=Pe.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Pe.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Pe.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function Mt(e){let t=Pe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Me.textureFormatReadable(e.format),t.__typeReadable=Me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){$e(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){$e(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){$e(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=z===null?null:Pe.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=z===null?null:Pe.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await tt(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Fe.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Fe.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Fe.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Fe.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Pe.get(e),r=Pe.get(t),h=Pe.get(n.__renderTarget),g=Pe.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Pe.has(e)){let n=Pe.get(e),r=Pe.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,te),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){Pe.get(e).__webglFramebuffer===void 0&&Fe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Fe.setTextureCube(e,0):e.isData3DTexture?Fe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Fe.setTexture2DArray(e,0):Fe.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){re=0,ie=0,z=null,V.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},lu={type:`change`},uu={type:`start`},du={type:`end`},fu=new hi,pu=new Kr,mu=Math.cos(70*jt.DEG2RAD),hu=new U,gu=2*Math.PI,_u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vu=1e-6,yu=class extends Yo{constructor(n,r=null){super(n,r),this.state=_u.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Mt,this._lastTargetPosition=new U,this._quat=new Mt().setFromUnitVectors(n.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jo,this._sphericalDelta=new Jo,this._scale=1,this._panOffset=new U,this._rotateStart=new H,this._rotateEnd=new H,this._rotateDelta=new H,this._panStart=new H,this._panEnd=new H,this._panDelta=new H,this._dollyStart=new H,this._dollyEnd=new H,this._dollyDelta=new H,this._dollyDirection=new U,this._mouse=new H,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xu.bind(this),this._onPointerDown=bu.bind(this),this._onPointerUp=Su.bind(this),this._onContextMenu=ku.bind(this),this._onMouseWheel=Tu.bind(this),this._onKeyDown=Eu.bind(this),this._onTouchStart=Du.bind(this),this._onTouchMove=Ou.bind(this),this._onMouseDown=Cu.bind(this),this._onMouseMove=wu.bind(this),this._interceptControlDown=Au.bind(this),this._interceptControlUp=ju.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=_u.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lu),this.update(),this.state=_u.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hu.copy(t).sub(this.target),hu.applyQuaternion(this._quat),this._spherical.setFromVector3(hu),this.autoRotate&&this.state===_u.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gu:n>Math.PI&&(n-=gu),r<-Math.PI?r+=gu:r>Math.PI&&(r-=gu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(hu.setFromSpherical(this._spherical),hu.applyQuaternion(this._quatInverse),t.copy(this.target).add(hu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=hu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new U(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new U(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=hu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(fu.origin.copy(this.object.position),fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fu.direction))<mu?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),fu.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vu||this._lastTargetPosition.distanceToSquared(this.target)>vu?(this.dispatchEvent(lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?gu/60/60*this.autoRotateSpeed:gu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hu.setFromMatrixColumn(t,0),hu.multiplyScalar(-e),this._panOffset.add(hu)}_panUp(e,t){this.screenSpacePanning===!0?hu.setFromMatrixColumn(t,1):(hu.setFromMatrixColumn(t,0),hu.crossVectors(this.object.up,hu)),hu.multiplyScalar(e),this._panOffset.add(hu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;hu.copy(r).sub(this.target);let i=hu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gu*this._rotateDelta.x/t.clientHeight),this._rotateUp(gu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gu*this._rotateDelta.x/t.clientHeight),this._rotateUp(gu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new H,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function bu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function xu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Su(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(du),this.state=_u.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Cu(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=_u.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_u.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_u.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_u.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_u.PAN}break;default:this.state=_u.NONE}this.state!==_u.NONE&&this.dispatchEvent(uu)}function wu(e){switch(this.state){case _u.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case _u.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case _u.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Tu(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===_u.NONE&&(e.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(du))}function Eu(e){this.enabled!==!1&&this._handleKeyDown(e)}function Du(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1){this.state=_u.NONE;break}this._handleTouchStartRotate(e),this.state=_u.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1){this.state=_u.NONE;break}this._handleTouchStartPan(e),this.state=_u.TOUCH_PAN;break;default:this.state=_u.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=_u.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=_u.TOUCH_DOLLY_ROTATE;break;default:this.state=_u.NONE}break;default:this.state=_u.NONE}this.state!==_u.NONE&&this.dispatchEvent(uu)}function Ou(e){switch(this._trackPointer(e),this.state){case _u.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case _u.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case _u.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case _u.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=_u.NONE}}function ku(e){this.enabled!==!1&&e.preventDefault()}function Au(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function ju(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Mu(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var K=(e,t,n,r,i)=>({value:e,min:t,max:n,about:r,step:i}),Nu=(e,t,n,r,i)=>({p:e,min:t,max:n,about:r,step:i}),Pu={lightning:{name:`Lightning`,parts:{"Starting fires":{toolFire:K(.75,0,1,`Chance a bolt you send lights the plants it hits, on damp ground`),toolFireDry:K(.25,0,1,`Added to that chance on bone-dry ground`),toolFuel:K(.15,0,1,`Plant cover a bolt you send needs before anything can catch`),stormFire:K(.08,0,1,`Chance a storm's bolt lights the plants it hits, on damp ground`),stormFireDry:K(.5,0,1,`Added to that chance on bone-dry ground`),stormFuel:K(.4,0,1,`Plant cover a storm's bolt needs before anything can catch`),igniteStrength:K(.55,.1,1,`How hard the fire starts (0.5 and over makes a tired fire fresh again)`)},"Splitting boulders":{rockReach:K(.008,0,.06,`How near a boulder the bolt must land to split it, beyond the boulder itself`),rockMin:K(.006,0,.04,`Boulders smaller than this are left whole`),rockPieces:K(2,1,6,`Pieces a split boulder breaks into, at least`,1),rockPiecesMore:K(2,0,6,`Up to this many more pieces, by chance (2 means 0 or 1 more)`,1),pieceSize:K(.45,.1,.9,`Size of the smallest piece, as a share of the boulder`),pieceSizeMore:K(.15,0,.5,`Up to this much bigger, by chance`),pieceSpread:K(.75,0,3,`How far the pieces land from the middle, in boulder sizes`)},"Scorch mark":{scorchTool:K(1,0,4,`Size of the black star under a bolt you send`),scorchStorm:K(.8,0,4,`Size of the black star under a storm's bolt`),scorchRays:K(5,0,14,`Rays of the star, at least`,1),scorchRaysMore:K(4,0,10,`Up to this many more rays, by chance (4 means 0 to 3 more)`,1),scorchLen:K(3,0,20,`Length of the shortest ray, in patches`),scorchLenMore:K(5,0,20,`Up to this much longer, by chance`),scorchBurn:K(.6,0,1,`Share of the plants burnt off where the mark is blackest`),glow:K(.6,0,1.2,`How hot the struck ground glows`)},"Animals and fish":{scare:K(.012,0,.2,`Animals this near a bolt on land run; a bird right by it falls`),fishKillTool:K(.06,0,.3,`Fish this near a bolt you send into water are killed`),fishKillStorm:K(.045,0,.3,`Fish this near a storm's bolt into water are killed`)},Storms:{STORM_RATE:Nu(`STORM_RATE`,0,.5,`Thunderstorms that boil up a second, in warm humid air with the sun high`),STORM_RAIN:Nu(`STORM_RAIN`,0,10,`How much harder a storm rains than an ordinary cloud`),ZAP:Nu(`ZAP`,0,8,`Bolts a second from a storm at its height`),stormLife:K(30,5,120,`Seconds the shortest storm lasts`),stormLifeMore:K(15,0,60,`Up to this many more seconds, by chance`),strikeReach:K(.075,.01,.3,`How far from the storm's middle its bolts land`),treeHeight:K(.03,0,.2,`How much taller trees stand than bare ground, when a bolt picks the highest point`),rumbleTool:K(.1,0,.6,`How hard the globe trembles at a bolt you send`),rumbleStorm:K(.06,0,.6,`How hard it trembles at a storm's bolt`)}}},fire:{name:`Fire`,parts:{Burning:{FIRE_BURN:Nu(`FIRE_BURN`,.1,6,`How fast a burning patch is spent, per second`),flare:K(3,0,12,`How fast a patch that has caught flares up to full flame, per second`),charRate:K(1.3,0,4,`How black the ground is left for the plants burnt off it`),spentFuel:K(.04,0,.5,`A patch with less plant cover than this has burnt out`),FIRE_LAST:Nu(`FIRE_LAST`,1,60,`Seconds a fire takes to tire, in mild weather`)},Spreading:{FIRE_THROW:Nu(`FIRE_THROW`,0,40,`Times a second a burning patch throws fire nearby`),FIRE_TAKE:Nu(`FIRE_TAKE`,0,3,`Chance a throw lights the patch it lands on, before fuel, dryness and weather`),throwNear:K(1,.5,6,`Shortest throw, in patches`),throwMore:K(1.3,0,8,`Up to this much further, by chance`),spreadFuel:K(.2,0,1,`Plant cover a patch needs for a throw to light it`),spreadStrength:K(.35,.05,.49,`How hard a patch lit by a throw starts`),windPush:K(.8,0,4,`How much likelier a throw straight downwind is to take`),upwind:K(.45,0,1,`How readily fire throws across the wind (against it, only now and then)`),damp:K(.75,0,1,`How well fire takes on damp ground, as a share of dry ground`)},Catching:{catchFuel:K(.12,0,1,`Plant cover a patch needs to be set alight at all`),minTemp:K(2,-20,30,`Ground colder than this (deg C) will not burn`),scorchBlock:K(.3,0,1,`Ground blacker than this will not burn again until it fades`)},Weather:{weatherBase:K(.72,0,2,`How well fire runs on a cold damp day`),weatherSun:K(.36,0,2,`Added in a hot sun (30 deg C)`),weatherDry:K(.24,0,2,`Added in dry air`)}}},asteroid:{name:`Asteroid`,parts:{Crater:{craterFast:K(2.6,1,8,`Width of the hole a rock blasts at standard speed, in rock sizes`),craterSpeed:K(.6,0,2,`How much wider a faster rock digs (the power its speed is raised to)`),craterSlow:K(1.3,.5,4,`Width of the dent the slowest rock leaves, in rock sizes`),craterMax:K(.2,.05,.6,`No crater is wider than this`),depthSlow:K(.18,0,1,`Depth of a slow dent, as a share of its width`),depthMore:K(.22,0,1,`Added for a fast rock`),digLeast:K(.3,0,1,`On a slope, at least this share of the depth is dug everywhere in the hole`),digMost:K(3,1,10,`On a peak, never more than this many depths are taken off`)},"Thrown-out ground":{thrownOut:K(.667,0,1.5,`Share of what is dug that lands round the hole`),rim:K(.2,0,1,`How much of it piles up as the rim`),blanket:K(.05,0,.5,`How much spreads as a thinning blanket beyond`),downhill:K(.6,0,3,`How much more lands on the downhill side`)},"Heat, fire and water":{scorchSlow:K(.6,0,2,`Plants burnt off round a slow rock, at the middle`),scorchMore:K(1.2,0,3,`Added for a fast rock`),glowSlow:K(.4,0,1.2,`How hot the crater floor glows`),glowMore:K(.9,0,2,`Added for a fast rock`),fireChance:K(.6,0,1,`Chance each spot round the scorched edge is set alight by a fast rock`),fireTo:K(2.6,1.3,6,`How far out those fires start, in crater widths`),splashSlow:K(.3,0,1,`Share of the water under a slow rock flung into the air`),splashMore:K(.6,0,1,`Added for a fast rock`),waveMax:K(.05,0,.2,`Height of the biggest wave a strike on water sends out`)},"Boulders and the rock itself":{burstSpeed:K(1.4,.25,4,`A rock slower than this stays whole in its crater; a faster one bursts`),pieces:K(2,0,8,`Fragments a burst rock leaves round the rim, at least`,1),piecesMore:K(3,0,8,`Up to this many more, by chance (3 means 0 to 2 more)`,1),pieceSize:K(.2,.05,.8,`Size of the smallest fragment, as a share of the rock`),pieceSizeMore:K(.2,0,.8,`Up to this much bigger, by chance`),throwReach:K(2.6,1,8,`Boulders this near are thrown outward, in crater widths`),throwSlow:K(.3,0,2,`How hard they are thrown`),throwMore:K(.5,0,2,`Added for a fast rock`)},Timing:{fallTime:K(1.15,.3,5,`Seconds a rock at standard speed takes to come down`),slowMo:K(.55,.05,3,`Seconds of slow motion after the strike`)}}},volcano:{name:`Volcano`,parts:{"Stages of an eruption":{swellEnd:K(4,.5,20,`Seconds the ground goes on swelling`),lavaFrom:K(2.5,0,20,`Seconds in when lava starts to well up (it takes 2 more to reach full flow)`),blastFrom:K(5.5,0,30,`Seconds in when it turns explosive and throws bombs`),swellRumble:K(.12,0,.6,`How hard the globe trembles while the ground swells, per level`)},"Cone and crater":{tephra:K(.9,0,5,`Ash and cinders thrown out, in patch-heights a second at full power`),repose:K(.58,.2,1.2,`How steep the cone's flanks stand, as a share of the steepest stable slope`),craterBase:K(.016,.005,.06,`Width of the crater on a first eruption`),craterGrow:K(.005,0,.03,`How much wider it gets with each eruption (times the square root of the count)`),craterDeep:K(.85,.1,1.5,`Depth of the crater, as a share of its width`)},Bombs:{bombRate:K(6,0,40,`Bombs thrown a second, at the standard rate`),bombReach:K(.16,.02,.8,`How far beyond the cone the furthest bombs land`),bombFire:K(.65,0,1,`Chance a bomb lights the plants where it lands`),bombScorch:K(.4,0,1,`Share of the plants burnt off where a bomb lands`),bombRock:K(.2,0,1,`Chance a bomb cools into a small black rock where it fell`),bombRockSize:K(1.6,.5,6,`Size of that rock, in bomb sizes`)},"Hot boulders (great volcano)":{boulderNear:K(.3,.05,.9,`Nearest a hot boulder lands`),boulderFar:K(.55,0,.9,`Up to this much further, by chance`),boulderCrater:K(3,1,10,`Width of the crater it knocks, in boulder sizes`),boulderDepth:K(.9,0,4,`Depth of that crater, in boulder sizes`),boulderFire:K(.35,0,1,`Chance each spot in a ring round it is set alight`),boulderRumble:K(.25,0,1,`How hard the globe trembles when one lands`)},"Heat round the vent":{ventScorch:K(1.2,0,6,`How fast plants near the vent are burnt off, per second`),ventGlow:K(1.3,0,2.2,`How hot the ground round the vent glows`)},"Level 1: vent (first eruption)":{ventLava:K(.6,0,6,`How much lava it pours, against the standard rate`),ventStiff:K(1,.2,10,`How stiff its lava is: stiffer lava piles up thick and cools slowly`),ventBombs:K(.4,0,6,`How many glowing bombs it throws, against the standard rate`),ventReach:K(.6,.2,4,`How far its bombs fly, against the standard reach`),ventBoulders:K(0,0,6,`Hot boulders flung right across the globe, per second`),ventRise:K(.01,0,.1,`How fast the ground swells before it breaks, height per second`),ventLast:K(12,4,90,`Seconds its shortest eruption lasts (up to 6 more, by chance)`)},"Level 2: cone (2nd and 3rd)":{coneLava:K(1,0,6,`How much lava it pours, against the standard rate`),coneStiff:K(1.4,.2,10,`How stiff its lava is: stiffer lava piles up thick and cools slowly`),coneBombs:K(1,0,6,`How many glowing bombs it throws, against the standard rate`),coneReach:K(1,.2,4,`How far its bombs fly, against the standard reach`),coneBoulders:K(0,0,6,`Hot boulders flung right across the globe, per second`),coneRise:K(.014,0,.1,`How fast the ground swells before it breaks, height per second`),coneLast:K(15,4,90,`Seconds its shortest eruption lasts (up to 6 more, by chance)`)},"Level 3: volcano (4th to 6th)":{volcanoLava:K(1.6,0,6,`How much lava it pours, against the standard rate`),volcanoStiff:K(2.4,.2,10,`How stiff its lava is: stiffer lava piles up thick and cools slowly`),volcanoBombs:K(1.3,0,6,`How many glowing bombs it throws, against the standard rate`),volcanoReach:K(1.3,.2,4,`How far its bombs fly, against the standard reach`),volcanoBoulders:K(0,0,6,`Hot boulders flung right across the globe, per second`),volcanoRise:K(.018,0,.1,`How fast the ground swells before it breaks, height per second`),volcanoLast:K(18,4,90,`Seconds its shortest eruption lasts (up to 6 more, by chance)`)},"Level 4: great volcano (7th on)":{greatLava:K(2.2,0,6,`How much lava it pours, against the standard rate`),greatStiff:K(3.6,.2,10,`How stiff its lava is: stiffer lava piles up thick and cools slowly`),greatBombs:K(1.5,0,6,`How many glowing bombs it throws, against the standard rate`),greatReach:K(1.5,.2,4,`How far its bombs fly, against the standard reach`),greatBoulders:K(.9,0,6,`Hot boulders flung right across the globe, per second`),greatRise:K(.022,0,.1,`How fast the ground swells before it breaks, height per second`),greatLast:K(22,4,90,`Seconds its shortest eruption lasts (up to 6 more, by chance)`)}}},lava:{name:`Lava`,parts:{Flowing:{LAVA_RATE:Nu(`LAVA_RATE`,0,.3,`Lava welling up in an erupting crater, depth per second`),LAVA_YIELD:Nu(`LAVA_YIELD`,0,2e-4,`Stiffness: a layer moves a way only where it drops more than this divided by its depth`),flowRate:K(7,.5,30,`How fast lava that can move does move`),skin:K(.0012,0,.01,`A layer thinner than this stays where it is`),stopHeat:K(.1,0,1,`Lava cooler than this has crusted over and stops (1 is fresh from the vent)`),coreWell:K(.035,0,.3,`Lava welling up where the land is dug down to the core, depth per second`)},"Cooling and setting":{LAVA_COOL:Nu(`LAVA_COOL`,0,.3,`How fast lava loses its heat, per second`),edgeCool:K(2,0,10,`How much faster a lone patch cools than one in the middle of a flow`),waterCool:K(5,1,30,`How many times faster it cools and sets in water`),setHot:K(3e-4,0,.01,`How fast hot lava turns to rock, depth per second`),setCrusted:K(.02,0,.3,`Added once it has crusted`)},"What it does to the land":{fireChance:K(.6,0,6,`Times a second a hot patch tries to light the plants beside it`),fireHeat:K(.45,0,1,`Lava cooler than this no longer starts fires`),burnPlants:K(3,0,20,`How fast plants under lava are burnt off, per second`),meltSnow:K(.2,0,2,`How fast snow under lava melts, depth per second`),boilWater:K(.03,0,.5,`How fast water under lava boils off, depth per second`)}}},nuke:{name:`Nuke`,parts:{"How big (for a bomb of size 1)":{crater:K(.05,.01,.3,`Width of the crater`),fireball:K(.05,.01,.4,`Width of the fireball: everything inside is gone`),blast:K(.13,.02,.6,`Width of the blast: trees flattened, animals killed`),heat:K(.2,.02,.9,`Width of the heat: plants scorched and set alight`),frontSpeed:K(.55,.05,3,`How fast the shockwave runs out`)},Crater:{craterDepth:K(.35,0,1.5,`Depth of the crater, as a share of its width`),rim:K(.22,0,1,`How much of what is thrown out piles up as the rim`),thrownOut:K(.667,0,1.5,`Share of what is dug that lands round the hole`),glass:K(.95,0,1,`How much of the crater floor is fused to green glass`)},"Heat and blast":{boil:K(.85,0,1,`Share of the water inside the fireball boiled away`),scorch:K(.3,0,1,`Share of the plants burnt off at the edge of the fireball, fading outward`),fireEdge:K(.15,0,1,`Chance a spot at the edge of the heat is set alight`),fireMore:K(.75,0,1,`Added to that chance toward the fireball`),flatten:K(.7,0,1,`Share of the plants the shockwave blows flat`),rockThrow:K(.6,0,3,`How hard the shockwave throws boulders`),rumble:K(1,0,2,`How hard the globe is jolted`)},"Fallout and winter":{fallout:K(.5,0,2,`Fallout laid down round ground zero at once`),cloudTime:K(45,3,120,`Seconds the cloud's dust keeps settling as it drifts`),cloudDrift:K(.012,0,.1,`How fast the cloud drifts downwind`),falloutRate:K(.06,0,.5,`Fallout settling under the cloud, per second at first`),falloutFade:K(18,2,90,`Seconds for that to thin by e`),dust:K(.6,0,2,`Dust sent up into the dome`),dustCool:K(10,0,40,`Deg C a full veil of dust takes off the climate`),dustYears:K(4,.2,40,`Years for the veil to thin by e`)}}},algae:{name:`Algae`,parts:{"When it blooms":{feedFrom:K(.8,0,1,`Nutrients in the water (0 to 1) above which algae start to take hold`),feedFull:K(.95,0,1,`Nutrients at which the bloom is as thick as it gets`),warmFrom:K(21,0,35,`Water must be warmer than this, on average over the years (deg C)`),warmFull:K(28,0,40,`Warmth at which the bloom is as thick as it gets`)},"How fast":{grow:K(1.5,0,10,`How fast a bloom thickens where it can, per year`),spread:K(.6,0,5,`How readily it spreads from thick scum next to it, per year`),die:K(1,0,10,`How fast it clears once the water cools or is no longer over-fed, per year`),eat:K(3,0,10,`How fast a full bloom uses up the surplus nutrients that feed it, per year (so it burns itself out)`)},"What it does":{shade:K(.4,0,1,`Share of the light a full bloom keeps from the reef and kelp below`),choke:K(.5,0,6,`Energy a fish under a full bloom loses a year, short of air`),chokeFrom:K(.3,0,1,`A bloom thinner than this does the fish no harm`),tellAt:K(.06,.01,.5,`Share of all the water under bloom at which the game says so`)}}},shower:{name:`Meteor shower`,parts:{"The shower":{count:K(14,1,24,`Rocks in a shower of size 1 (it scales with the size)`,1),seconds:K(5,.5,20,`Seconds the rocks keep coming`),spread:K(.2,.03,.6,`How wide a stretch of land a shower of size 1 falls over`),every:K(300,0,2e3,`Years between showers that come by themselves, on average (0 for never)`,1)},"The rocks":{sizeMin:K(.35,.2,2,`Size of the smallest rock (1 is a standard asteroid)`),sizeMore:K(.45,0,2,`Up to this much bigger, by chance`),speedMin:K(2,.25,4,`Speed of the slowest rock`),speedMore:K(1.5,0,3.75,`Up to this much faster, by chance`)}}},antimatter:{name:`Antimatter`,parts:{"The ball that is deleted":{radius:K(.09,.02,.4,`Radius of the ball, for a bomb of size 1`),lift:K(.35,0,.95,`How far above the ground the middle of the ball sits, as a share of its radius (0 leaves a pit as deep as it is wide)`)},"Round it":{flee:K(2.5,1,8,`Animals this many radii away run for it`),rumble:K(.8,0,2,`How hard the globe is jolted`)}}},laser:{name:`Laser`,parts:{"The beam":{width:K(.012,.004,.06,`Half the width of the trench, for a beam of size 1`),cut:K(.06,0,.5,`How fast it cuts down into the ground, depth per second`),boil:K(.08,0,1,`How fast it boils off water under it, depth per second`)},"What it leaves":{glass:K(.9,0,1,`How much of the trench floor is fused to green glass`),glow:K(1.1,0,2.2,`How hot the trench glows`),fireChance:K(4,0,30,`Times a second each spot along the edge of the trench is set alight`),fireReach:K(2.2,1,6,`How far out from the trench those fires start, in trench widths`)}}},tornado:{name:`Tornado`,parts:{"The funnel":{radius:K(.03,.008,.15,`Half the width of the path it rips, for a tornado of size 1`),speed:K(.05,0,.3,`How fast it travels, globe radii a second`),wander:K(1.2,0,5,`How much it weaves either side of the wind`),life:K(16,3,90,`Seconds the shortest tornado lasts`),lifeMore:K(8,0,60,`Up to this many more seconds, by chance`),fromStorm:K(.004,0,.2,`Chance a second that a thunderstorm at its height puts one down`)},"What it does":{}}},fissure:{name:`Fissure`,parts:{"The crack":{length:K(.3,.08,1.2,`How long a crack of size 1 runs, when it is not dragged out by hand`),width:K(.016,.004,.06,`Half its width at the middle, for size 1`),scorch:K(2.2,1,6,`How far out the ground beside it is torn and scorched bare, in crack widths`),depth:K(.1,.01,.5,`How deep it goes at the middle, for size 1`),jag:K(.012,0,.06,`How far it staggers from side to side at each step`),seconds:K(2.5,.3,15,`Seconds it takes to tear open from the middle to both ends`)},"What it does":{lava:K(.004,0,.05,`Depth of lava that wells up along the bottom`),glow:K(.6,0,2,`How hot the walls glow`),rumble:K(.4,0,1.5,`How hard the globe shakes while it opens`)}}},locust:{name:`Locusts`,parts:{"The swarm":{radius:K(.08,.02,.3,`Half the width of a swarm at full strength`),speed:K(.05,0,.2,`How fast it moves to the next green ground, globe radii a second`),seconds:K(70,5,400,`The longest a swarm lasts, in seconds`),every:K(400,0,3e3,`Years between swarms that come by themselves, in a warm green world (0 for never)`,1)},Feeding:{eat:K(1.2,0,8,`How fast it strips the plants under it, share a second at the middle`),bare:K(.12,0,.5,`Plant cover it has eaten down to this is taken to the bare ground, roots and all`),grow:K(.25,0,1,`How fast it gathers strength on full plant cover, a second`),starve:K(.035,0,.5,`How fast it dwindles with nothing to eat, a second`)},"What stops it":{coldBelow:K(8,-10,30,`Country colder than this on average over the years (deg C) kills it off`),cold:K(.2,0,2,`How fast the cold thins it, a second`),rain:K(.06,0,2,`How fast hard rain thins it, a second`),birdToll:K(.004,0,.1,`How fast each insect-eater feeding in it thins it, a second`)}}},gamma:{name:`Gamma-ray burst`,parts:{"The burst":{elevation:K(.3,.05,1.4,`How high above the horizon it comes from, in radians (low casts long shadows)`),plantKill:K(.9,0,1,`Share of the plants killed on ground that faces it`),waterShield:K(.012,0,.2,`Water this deep keeps what is under it safe`),aurora:K(25,0,120,`Seconds the aurora lasts afterwards`)}}},hurricane:{name:`Hurricane`,parts:{"The storm":{seconds:K(40,8,180,`Seconds it lasts`),eye:K(.12,0,.5,`Radius of the calm eye in the middle of the globe`),wring:K(.8,0,1,`Share of the water in the air that falls as rain over its life`)},"What it does":{bolts:K(1.2,0,10,`Lightning bolts a second`),douse:K(2,0,10,`Times a second its rain puts out each burning patch`),surge:K(.05,0,.15,`Height of the waves it drives across the lake every few seconds, which run up over the low shores`)}}},crack:{name:`Glass crack`,parts:{"The leak":{leak:K(.03,0,.5,`Share of the water the globe is meant to hold that each crack lets out a year`),leakMax:K(.85,0,.99,`The most that can leak away, as a share`),mend:K(.05,0,1,`How fast the water comes back once every crack is sealed, share a year`)},"The cold":{cool:K(2,0,15,`Deg C each crack takes off the whole climate`),frostReach:K(.35,.05,1.2,`How far in from the crack the frost ends up reaching`),frostGrow:K(.012,0,.2,`How fast the frost creeps in, globe radii a second`),frost:K(.002,0,.02,`Depth of frost laid down beside the crack`),kill:K(.3,0,5,`How fast plants under the frost die, share a second`)}}},hole:{name:`Black hole`,parts:{"The hole":{radius:K(.18,.04,.6,`How far its pull reaches, for size 1`),seconds:K(8,1,60,`Seconds before it evaporates`)},"What it pulls in":{dig:K(.05,0,.5,`How fast it takes the ground under it, depth a second at the middle`),suck:K(1.5,0,10,`How fast it takes water within reach, share a second at the middle`),strip:K(2,0,10,`How fast it takes plants within reach, share a second at the middle`),rumble:K(.15,0,1,`How hard the globe trembles while it feeds`)}}},oil:{name:`Oil`,parts:{"The gusher":{rise:K(2.5,0,15,`Seconds the oil takes to come up the bore from its pocket deep underground, before it gushes`),seconds:K(12,1,90,`Seconds the well gushes`),gush:K(.004,0,.05,`Oil it throws out, depth a second over the ground round the well`)},"The slick":{spread:K(6,0,30,`How fast oil runs downhill and spreads over water`),skin:K(2e-4,2e-5,.005,`A layer thinner than this stops running and spreading (it is still oil)`),film:K(3e-5,5e-6,.001,`The thinnest film that still counts as oil: it burns, and harms what is under and in it`),soak:K(3e-5,0,.001,`How fast oil lying on dry ground soaks into it, depth a second`),soakFull:K(6e-4,1e-4,.01,`Depth of oil that soaks a patch of ground through: it is stained black, nothing grows, and it will burn`),kill:K(1,0,10,`How fast oil kills the plants or the reef and kelp under it, share a second`),choke:K(2.5,0,10,`Energy a fish or a duck in an oil slick loses a year`),years:K(12,.5,100,`Years oil takes to weather away`)},Burning:{burn:K(2e-4,0,.02,`Depth of oil a burning patch uses up a second (a thin slick is about 0.0005 deep)`),catch:K(1,0,1,`Chance that fire thrown onto oil takes (it does not depend on the weather)`)}}},forces:{name:`Interactions`,parts:{"Wind on fire":{embers:K(2,0,20,`Times a second a burning patch in a full gale has its fire thrown along the wind (a tornado is a full gale)`),emberReach:K(.06,.01,.3,`How far the wind carries it`),whirlFire:K(6,0,30,`Seconds a tornado that has crossed a fire goes on carrying it, as a fire whirl`)},"How strong each wind is":{stormWind:K(.38,0,1.5,`A hurricane's wind, against a tornado's`),holeWind:K(.6,0,1.5,`A black hole's pull, against a tornado's wind`),blastWind:K(1,0,3,`The blast of a strike or a bomb at its middle, against a tornado`),blastSeconds:K(.8,.1,5,`Seconds a blast goes on blowing`)},"Wind on oil and locusts":{oilPush:K(.6,0,5,`How fast a full gale drives an oil slick along, share a second`),swarmPush:K(.08,0,.5,`How fast a full gale carries a locust swarm along, globe radii a second`),swarmBlow:K(.4,0,5,`How fast a full gale thins a swarm, a second`)},"Wind on the land, boulders and animals":{plantStrip:K(2.5,0,20,`How fast a full gale strips plants, share a second (it goes as the cube of the wind: a quarter gale takes a sixty-fourth)`),spray:K(.02,0,.3,`Water a whirl lifts off a lake as spray, depth a second`),rockLift:K(.03,0,.08,`The biggest boulder a full gale can lift (half a gale lifts none)`),rockGrab:K(1.5,0,10,`Times a second it tries each boulder it could lift`),rockFling:K(.35,0,1.5,`How hard it throws a boulder`),drag:K(.3,0,1.5,`How fast a pull drags boulders and animals in, globe radii a second`),grab:K(1.5,0,10,`Times a second a whirl catches each animal under it`),kill:K(.3,0,1,`Share of the animals a whirl catches that die; the rest are set down further along its way`),birdDown:K(.12,0,2,`Chance a second that a full gale brings down a bird in the air`)},"Heat, wet and cold":{fleeHeat:K(3,1,10,`Animals on the ground run from something hot when within this many times its reach`),heatLight:K(6,0,60,`Times a second something hot (the laser, an erupting vent) tries to light what is round it, plants or oil`),rainTool:K(3,0,10,`Times a second the Rain tool puts out each burning patch under it`),coldSnuff:K(1,0,10,`Times a second the cold by a cracked glass puts out each burning patch in its reach`),swarmHeat:K(1,0,10,`How fast something hot thins a locust swarm over it, a second`)}}}},q={};for(let[e,t]of Object.entries(Pu)){q[e]={};for(let n of Object.values(t.parts))for(let[t,r]of Object.entries(n))r.p||(q[e][t]=r.value)}var Fu=Math.round(Number(globalThis.GLOBE_GRID??{}.GLOBE_GRID)),J=Fu>=48&&Fu<=512?Fu:336,Y=J*J,X=2/(J-1),Iu=2/63,Lu=Iu/X,Ru=(J-1)/335,zu=.68,Bu=.6,Vu=(e,t)=>{let n={name:e};for(let e of[`lava`,`bombs`,`reach`,`stiff`,`rise`,`boulders`,`last`])Object.defineProperty(n,e,{enumerable:!0,get:()=>q.volcano[t+e[0].toUpperCase()+e.slice(1)]});return n},Hu=[null,Vu(`vent`,`vent`),Vu(`cone`,`cone`),Vu(`volcano`,`volcano`),Vu(`great volcano`,`great`)],Uu=e=>e<=1?1:e<=3?2:e<=6?3:4,Wu=2.2,Gu=.54,Z={DT:1/80,SEASON_AMP:9,LAPSE:55,ALBEDO:4,T_MIN:-22,T_MID:14,T_MAX:48,KE:.02,KT:.06,KSUB:5e-4,KI:.3,SOILCAP:.014,BCAP:.012,C0:.05,TAU:7.35,RH0:.5,KC:14,DRIZZLE:.2,ORO:1.5,LIFT:1.8,SHADOW:.85,COAST:.5,KM:.02,KF:.004,KG:1.5,ICE_CAP:.07,ICE_TALUS:1.7*X,KD:2,WSHOW:.004,W_DRY:.1,W_WET:6,KW:.25,DROWN:.03,SEA_MIN:.012,SEA_GROW:1.2,SEA_SPREAD:1,SEA_DIE:.6,SEA_DRIFT:.6,SEA_LIGHT:.06,NU_TAU:8,NU_SHORE:8,GROW:.8,STORM_RATE:.02,STORM_RAIN:3,ZAP:1.1,LAVA_RATE:.03,LAVA_COOL:.025,LAVA_YIELD:18e-6,FIRE_BURN:1.4,FIRE_THROW:10,FIRE_TAKE:.9,FIRE_LAST:13,SPREAD:.4,DIE:.5,TALUS:1.26*X,FC:.75,KB:1,Q_TAU:.4,Q_CUT:.35,KS:3e-4,SHAPE_YEARS:150,SHAPE_RAIN:.006,BANK:.62*X,NU_RIVER:24,RIVER_SEED:.5},Ku=[-1,1,-J,J,-J-1,-J+1,J-1,J+1],qu=[-1,1,-J,J],Ju=[3,.95,1.7,.57].map(e=>Math.max(2,Math.round(e*Lu))),Yu=.012,Xu=1/12,Q=(e,t,n)=>{let r=(n-e)/(t-e);return r=r<0?0:r>1?1:r,r*r*(3-2*r)};function Zu(e,t){let n=q.asteroid,r=Math.min(n.craterMax,Math.max(e*n.craterSlow,e*n.craterFast*t**+n.craterSpeed));return{R:r,depth:r*(n.depthSlow+n.depthMore*Q(0,2.5,t))}}function Qu(e){let t=e**.6,n=q.nuke;return{Rc:n.crater*e**.4,Rf:n.fireball*t,Rb:n.blast*t,Rh:n.heat*e**.7}}var $u=e=>q.antimatter.radius*Math.sqrt(e),ed=(e,t)=>q.nuke.frontSpeed*Math.max(0,e)**.7*t**.25;function td(e){let t=new Float32Array(4096);for(let n=0;n<4096;n++)t[n]=e()*2-1;let n=(e,n)=>t[(e*73856093^n*19349663)&4095],r=(e,t)=>{let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=n(r,i),u=n(r+1,i),d=n(r,i+1),f=n(r+1,i+1);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c};return{noise:r,fbm:(e,t,n)=>{let i=0,a=.5,o=1,s=0;for(let c=0;c<n;c++)i+=a*r(e*o,t*o),s+=a,a*=.5,o*=2.03;return i/s}}}function nd(e,t){let n=2*t+1,r=new Float32Array(n*n);for(let i=-t;i<=t;i++)for(let a=-t;a<=t;a++){let o=a*a+i*i;r[(i+t)*n+a+t]=o>t*t?0:Math.exp(-o/(2*e*e))}return{w:r,R:t,span:n}}function rd(e,t,n){let r=(t+1)/X,i=(n+1)/X;r=r<0?0:r>J-1.001?J-1.001:r,i=i<0?0:i>J-1.001?J-1.001:i;let a=r|0,o=i|0,s=r-a,c=i-o,l=o*J+a;return(e[l]*(1-s)+e[l+1]*s)*(1-c)+(e[l+J]*(1-s)+e[l+J+1]*s)*c}function id(e,t,n){let r=t-e.x,i=n-e.z,a=Math.hypot(r,i);if(e.kind===`storm`)return a<e.eye||a<1e-6?0:(id.x=-i/a,id.z=r/a,e.power*(.35+.65*Math.exp(-(a-e.eye)/.25)));if(a>=e.R)return 0;let o=a/e.R,s=a>1e-6;if(e.kind===`whirl`)id.x=s?-i/a:1,id.z=s?r/a:0;else{let t=e.kind===`in`?-1:1;id.x=s?t*r/a:0,id.z=s?t*i/a:0}return e.power*(1-o*o)}id.x=0,id.z=0;var ad=class{_winds(){let e=[],t=q.forces;for(let t of this.twisters)t.power>0&&e.push({kind:`whirl`,x:t.x,z:t.z,R:t.r*1.6,power:t.power,src:t,ux:Math.cos(t.ang),uz:Math.sin(t.ang)});this.hurricane&&this.hurricane.power>0&&e.push({kind:`storm`,x:0,z:0,eye:q.hurricane.eye,power:t.stormWind*this.hurricane.power,src:this.hurricane});for(let n of this.holes)e.push({kind:`in`,x:n.x,z:n.z,R:n.R,power:t.holeWind*Math.min(1,n.t/1.2)});for(let t of this.gusts)e.push({kind:t.kind,x:t.x,z:t.z,R:t.R,power:t.power*(1-t.t/t.life),brief:!0});return e}_wets(){let e=[];for(let t of this.clouds)t.rain>.03&&e.push({x:t.rx,z:t.rz,R2:.0081,power:Math.min(3,t.rain*15)});return this.hurricane&&e.push({x:0,z:0,R2:9,power:q.hurricane.douse*this.hurricane.power}),this.toolCloud.on>0&&e.push({x:this.toolCloud.x,z:this.toolCloud.z,R2:.0036,power:q.forces.rainTool}),e}_heats(){let e=[];this.laser&&e.push({x:this.laser.x,z:this.laser.z,R:q.laser.width*this.laser.size*q.laser.fireReach});for(let t of this.vents)t.power>.2&&e.push({x:t.x,z:t.z,R:.04});return e}_colds(){let e=[],t=q.crack;for(let n of this.cracks)e.push({x:n.x,z:n.z,R:Math.min(t.frostReach,.04+t.frostGrow*n.t),power:1});return e}_gust(e,t,n,r,i=`out`){this.gusts.length>12&&this.gusts.shift(),this.gusts.push({x:e,z:t,R:n,power:r*q.forces.blastWind,kind:i,t:0,life:q.forces.blastSeconds})}_blowLand(e,t){let{V:n,Q:r,W:i,act:a,cx:o,cz:s,list:c,nAct:l}=this,u=q.forces,d=0;for(let f of e){if(f.kind===`storm`){let e=f.src;e.tick=(e.tick+1)%6;for(let i=e.tick;i<l;i+=6){let e=c[i],a=id(f,o[e],s[e]);if(a<=0)continue;let l=n[e]*Math.min(1,u.plantStrip*a*a*a*t*6);n[e]-=l,r[e]+=l*Z.BCAP}continue}if(f.kind!==`whirl`)continue;let e=this.index(f.x,f.z),p=e%J,m=e/J|0,h=Math.ceil(f.R/X);for(let e=-h;e<=h;e++){let c=m+e;if(!(c<1||c>=J-1))for(let e=-h;e<=h;e++){let l=p+e;if(l<1||l>=J-1)continue;let m=c*J+l;if(!a[m])continue;let h=id(f,o[m],s[m]);if(h<=0)continue;let g=n[m]*Math.min(1,u.plantStrip*h*h*h*t);if(n[m]-=g,r[m]+=g*Z.BCAP,i[m]>Z.WSHOW){let e=Math.min(i[m]*.5,u.spray*h*t);i[m]-=e,d+=e}}}}this.vap+=d}_blowRocks(e,t){let{H:n,rocks:r,rng:i}=this,a=q.forces;for(let o of r)if(!(o.gone||o.fly))for(let r of e){let e=id(r,o.x,o.z);if(!(e<=0)){if(r.kind===`in`){let i=r.x-o.x,s=r.z-o.z,c=Math.hypot(i,s);if(c<.015){o.gone=!0,this.rockWait=0;break}let l=Math.min(c,a.drag*(.3+e)*t);o.x+=i/c*l,o.z+=s/c*l,o.i=this.index(o.x,o.z),o.y=n[o.i]+.2*o.r}else if(e>.5&&o.r<=a.rockLift*e&&o.y+.3*o.r*o.sy>n[o.i]&&i()<a.rockGrab*e*t){let t=Math.atan2(id.z,id.x)-.37,n=a.rockFling*e*(.6+.8*i());o.fly=!0,this.thrown++,o.vx=Math.cos(t)*n,o.vz=Math.sin(t)*n,o.vy=n*(.9+.6*i());break}}}}_react(e){for(let t=this.gusts.length-1;t>=0;t--)(this.gusts[t].t+=e)>=this.gusts[t].life&&this.gusts.splice(t,1);let t=this._winds().filter(e=>!e.brief);t.length&&(this._blowLand(t,e),this._blowRocks(t,e),this.fauna.blown(t,e));let n=this._heats(),r=this._colds();if((n.length||r.length)&&this.fauna.shun(n,r),!n.length)return;let i=this.rng,a=q.forces.heatLight*e;for(let e of n)for(let t=a;t>0&&!(t<1&&i()>t);t--){let t=i()*6.283,n=Math.sqrt(i())*e.R;this._ignite(this.index(e.x+Math.cos(t)*n,e.z+Math.sin(t)*n),.6)}}},od=()=>Ru*Ru,sd=56,cd={minnow:{name:`minnows`,medium:`water`,max:280,life:5,meta:1.2,breed:1.5,litter:1,food:`sea`,speed:.04,arrive:{wait:0,group:10,text:`Minnows have found the water.`},gone:`The last minnows have died out.`},bigfish:{name:`big fish`,medium:`water`,max:30,life:12,meta:.6,graze:.35,breed:.5,litter:1,speed:.05,prey:{minnow:1},gain:.6,rest:.12,sight:.14,hunt:14,arrive:{wait:5,group:4,text:`Bigger fish have moved into the deep water to hunt the minnows.`},gone:`The big fish are gone from the deep water.`},pike:{name:`pike`,medium:`water`,max:4,life:40,meta:.3,breed:.15,litter:1,speed:.05,prey:{bigfish:1,heron:.15,duck:.2,frog:.3},gain:1,rest:.6,sight:.18,hunt:3,arrive:{wait:8,group:2,text:`Pike have appeared in the deep lake. Nothing in it is safe now.`},gone:`The last pike has died. The big fish have the lake to themselves again.`},rabbit:{name:`rabbits`,medium:`land`,max:260,life:4,meta:1.2,breed:.6,litter:2,food:`plants`,bite:.7,speed:.02,arrive:{wait:0,group:10,text:`Rabbits have found the globe.`},gone:`The last rabbits have died out.`},fox:{name:`foxes`,medium:`land`,max:30,life:8,meta:.8,breed:1,litter:2,speed:.025,prey:{rabbit:1},gain:.8,rest:.15,sight:.15,hunt:8,arrive:{wait:5,group:2,text:`Foxes have followed the rabbits here.`},gone:`The foxes are gone. Nothing hunts the rabbits on the ground now.`},songbird:{name:`songbirds`,medium:`trees`,max:90,life:4,meta:1,breed:.8,litter:2,food:`insects`,speed:.08,arrive:{wait:1,group:8,text:`Songbirds have come to nest in the forests.`},gone:`The forests have fallen silent: the last songbirds are gone.`},heron:{name:`herons`,medium:`shore`,max:16,life:10,meta:.8,breed:.6,litter:1,speed:.012,prey:{minnow:1,frog:.8},gain:.5,rest:.05,sight:.08,hunt:12,arrive:{wait:3,group:3,text:`Herons are wading the shallows, fishing.`},gone:`The herons have gone.`},hawk:{name:`hawks`,medium:`sky`,max:10,life:20,meta:.5,breed:.5,litter:1,speed:.05,prey:{songbird:1,rabbit:1,minnow:.5,duck:.4},gain:.7,rest:.3,sight:.3,hunt:8,arrive:{wait:8,group:3,text:`Hawks are circling high under the glass.`},gone:`The hawks are gone from the sky.`},frog:{name:`frogs`,medium:`marsh`,max:110,life:4,meta:1,breed:1.4,litter:3,food:`insects`,speed:.012,prey:{dragonfly:1},gain:.35,rest:.05,sight:.03,hunt:6,arrive:{wait:1,group:8,text:`Frogs have turned up in the shallows.`},gone:`The shallows have fallen silent: the last frogs are gone.`},dragonfly:{name:`dragonflies`,medium:`reeds`,max:120,life:1.5,meta:1.3,breed:2.5,litter:2,food:`insects`,speed:.09,arrive:{wait:.3,group:10,text:`Dragonflies are darting over the water.`},gone:`The dragonflies are gone from the water.`},duck:{name:`ducks`,medium:`surface`,max:30,life:9,meta:.9,breed:.35,litter:3,food:`sea`,speed:.018,arrive:{wait:2,group:4,text:`Ducks have settled on the lake.`},gone:`The ducks have gone from the lake.`}},ld=Object.keys(cd),ud={trees:!0,shore:!0,sky:!0},dd=class{constructor(e){this.w=e,this.M=sd,this.ins=new Float32Array(3136),this.cell=new Uint16Array(J*J);for(let e=0;e<J*J;e++)this.cell[e]=((e/J|0)*sd/J|0)*sd+(e%J*sd/J|0);this.smp=new Int32Array(12544).fill(-1),this.cellOn=new Uint8Array(3136);for(let t=0;t<3136;t++){let n=t%sd,r=t/sd|0;for(let i=0;i<4;i++){let a=-1+(n+.25+.5*(i&1))/sd*2,o=-1+(r+.25+.5*(i>>1))/sd*2,s=e.index(a,o);e.act[s]&&a*a+o*o<.97&&(this.smp[t*4+i]=s,this.cellOn[t]=1)}}this.reset()}reset(){this.pop={},this.last={},this.lastGone={},this.ready={};for(let e of ld)this.pop[e]=[],this.last[e]=this.lastGone[e]=-99,this.ready[e]=0;this.ins.fill(0),this.insMean=0,this.room=0,this.kills=[],this.falling=[],this.sinking=[],this.floating=[],this.clock=0,this.bank=0,this.fireHawk=!1,this.notes={},this.tally={eaten:{},born:{},died:{}}}count(e){return this.pop[e].length}_make(e,t,n,r=1,i=0){let a=this.w.rng;return{k:e,x:t,z:n,tx:t,tz:n,hx:t,hz:n,e:r,age:i,wait:a(),dir:a()*6.283,ph:a(),rest:0,run:0,fear:0,tgt:null,dead:!1}}_note(e,t,n=25){let r=this.w;r.quiet||r.year-(this.notes[e]??-99)<n||(this.notes[e]=r.year,r.events.push({type:e,text:t}))}step(e){let t=this.w;this.clock+=e*12,this._insects(e),this.room=Math.min(cd.minnow.max,t.stats.seaRich/(14*od()));for(let t of ld)this._live(t,e);this.pop.minnow.length>0&&t.rng()<e*.7&&(t.fishRuns=(t.fishRuns|0)+t._stock()),t.quiet||this._arrive(e),this.kills.length>64&&this.kills.splice(0,this.kills.length-64),this.falling.length>40&&this.falling.splice(0,this.falling.length-40),this.sinking.length>60&&this.sinking.splice(0,this.sinking.length-60),this.floating.length>60&&this.floating.splice(0,this.floating.length-60)}_insects(e){let{V:t,T:n,Mavg:r}=this.w,i=this.ins,a=this.smp,o=0,s=0;for(let c=0;c<3136;c++){if(!this.cellOn[c])continue;let l=0,u=0,d=0,f=0;for(let e=c*4;e<c*4+4;e++){let i=a[e];i<0||(l+=t[i],u+=n[i],d+=r[i],f++)}l/=f,u/=f,d/=f;let p=l*Q(2,14,u)*(1-.8*Q(32,42,u))*(.35+.65*Q(.1,.5,d)),m=i[c];m<p?m+=(4*m*(p-m)+.05*p)*e:m-=3*(m-p)*e,i[c]=m<0?0:m,o+=m,s++}this.insMean=s?o/s:0}insectsAt(e){return this.ins[this.cell[e]]}_live(e,t){let n=this.w,r=cd[e],i=this.pop[e],{W:a,A:o,V:s,Q:c,T:l,S:u,Tavg:d,heat:f,L:p,fire:m}=n,h=n.rng,g=e===`minnow`&&i.length>this.room*1.25,_=Math.max(1,Math.round(t/Z.DT)),v=t/_;for(let y=i.length-1;y>=0;y--){let b=i[y],x=n.index(b.x,b.z);b.age+=t,b.rest>0&&(b.rest-=t);let S=r.meta*(g?1.6:1),C=!1,w=!1,T=l[x],E=n.fall[x];if(E>.03&&(S+=1.2*E),f[x]>.8||p[x]>.002)C=!0;else if(r.medium===`water`){let t=a[x];t<.004?C=!0:t<.015&&(S+=3),T>36&&(S+=2),u[x]>.002&&(S+=t<.05?1.5:.4);let r=n.algae[x];r>q.algae.chokeFrom&&(S+=q.algae.choke*r),n.oil[x]>q.oil.film&&(S+=q.oil.choke),e===`bigfish`?(t<.03&&(S+=1),d[x]>27&&(S+=.6)):e===`pike`&&(t<.05&&(S+=1),d[x]>28&&(S+=.6))}else r.medium===`land`?(m[x]>.3&&(C=!0),(T<-18||T>44)&&(S+=2),a[x]>.02&&(S+=4)):r.medium===`marsh`?(m[x]>.3&&(C=!0),T<2?S*=.25:T>40&&(S+=2),(a[x]>.05||a[x]<.001&&n.Mavg[x]<.25)&&(S+=2)):r.medium===`reeds`?(m[x]>.2&&(C=!0),T<6?S*=.2:T>42&&(S+=2)):r.medium===`surface`?(a[x]<Z.WSHOW&&(S+=2),n.oil[x]>q.oil.film&&(S+=q.oil.choke),u[x]>.002&&(S+=1.2),(T<-14||T>42)&&(S+=2)):(m[x]>.2&&r.medium!==`sky`&&(C=!0),(T<(e===`hawk`?-22:e===`heron`?-15:-12)||T>(e===`songbird`?41:45))&&(S+=2.5,w=!0));if(r.food===`sea`)for(let e=0;e<_;e++){let e=n.index(b.x+(h()-.5)*.07,b.z+(h()-.5)*.07),t=o[e]-.03;if(t>0&&a[e]>Z.SEA_MIN){let n=Math.min(t,.3*v*t/(t+.2));o[e]-=n*od(),b.e+=n*15}}else if(r.food===`plants`){let e=s[x];if(e>0&&a[x]<Z.WSHOW){let n=Math.min(e,r.bite*t);s[x]=e-n*od(),c[x]+=n*od()*Z.BCAP,b.e+=n*5}}else if(r.food===`insects`){let i=this.cell[x],o=this.ins[i]-.03;if(o>0){let e=3*t*o/(o+.25);this.ins[i]-=e*.08,b.e+=e}e===`songbird`&&(a[x]<Z.WSHOW&&(b.e+=.5*s[x]*t),s[x]<.03&&a[x]<Z.WSHOW&&u[x]<.001&&h()<t*.4&&n.seedAt(b.x,b.z,.05,.4)),e===`dragonfly`&&a[x]>Z.WSHOW&&a[x]<.05?b.e+=1.3*t*Q(6,16,T):e===`frog`&&a[x]>.001&&a[x]<.03&&(b.e+=.5*t*Q(4,14,T)),r.prey&&this._hunt(b,r,t)}else this._hunt(b,r,t);if(r.graze)for(let e=0;e<_;e++){let e=n.index(b.x+(h()-.5)*.07,b.z+(h()-.5)*.07),t=o[e]-.05;if(t>0&&a[e]>Z.SEA_MIN){let n=Math.min(t,.1*v*t/(t+.2));o[e]-=n*od(),b.e+=Math.min(n*15,r.graze*v)}}if(b.e-=S*t,e===`minnow`?b.e<1.3&&h()<t&&n._runRiver(b)&&(n.fishRuns=(n.fishRuns|0)+1):e===`heron`&&h()<t*.3&&this._eggs(b,x),i.length===1&&r.prey&&b.e>1.2&&!n.quiet&&h()<t*.15&&i.push(this._make(e,b.x,b.z,1,r.life*.2)),b.e>1.6&&i.length>=2&&h()<t*r.breed*(1-Math.min(.85,2*E))&&this._room(e,b,x)){b.e-=.8;for(let t=0;t<r.litter&&i.length<r.max;t++){let t=this._make(e,b.x+(h()-.5)*.01,b.z+(h()-.5)*.01,.6);t.dir=b.dir,e===`rabbit`||e===`fox`?this._home(t,b):e===`duck`&&(t.mom=b),i.push(t),this.tally.born[e]=(this.tally.born[e]|0)+1}}if(C||b.e<0||b.age>r.life*(.8+.4*b.ph)){let t=e+(C?`:place`:b.e<0?`:hunger`:`:age`);this.tally.died[t]=(this.tally.died[t]|0)+1,this._die(e,y,b,C||b.e<0&&w,x)}else b.e>2&&(b.e=2)}}_home(e,t){let n=this.w,r=n.rng,i=e.k===`fox`;if(e.hx=t.hx,e.hz=t.hz,!(this._near(e.k,t.hx,t.hz,i?.0225:.0036)<(i?2:6)))for(let a=0;a<8;a++){let a=r()*6.283,o=.1+r()*.2,s=t.hx+Math.cos(a)*o,c=t.hz+Math.sin(a)*o;if(s*s+c*c>.8)continue;let l=n.index(s,c);if(!(n.W[l]>Z.WSHOW||n.slope[l]>.04||!i&&n.V[l]<.2)&&!(this._near(e.k,s,c,i?.0225:.0036)>=(i?1:3))&&!(i&&this._near(`rabbit`,s,c,.0225)<4)){e.hx=e.tx=s,e.hz=e.tz=c;return}}}_room(e,t,n){let r=cd[e],i=this.pop[e];return i.length>=r.max?!1:e===`songbird`?this.insectsAt(n)>.2&&this._near(`songbird`,t.x,t.z,.0064)<6:e===`fox`?this._near(`fox`,t.hx,t.hz,.04)<3:e===`rabbit`?this._near(`rabbit`,t.x,t.z,.0036)<10:e===`frog`?this.w.W[n]>.001&&this.w.W[n]<.03&&this._near(`frog`,t.x,t.z,.0016)<8:e===`dragonfly`?this.w.W[n]>Z.WSHOW&&this._near(`dragonfly`,t.x,t.z,.0036)<10:e===`duck`?this.w.A[n]>.08&&this._near(`duck`,t.x,t.z,.01)<8:e!==`minnow`||i.length<this.room||this.w.A[n]>.25&&this._near(`minnow`,t.x,t.z,.01)<4}_near(e,t,n,r){let i=0;for(let a of this.pop[e])(a.x-t)**2+(a.z-n)**2<r&&i++;return i}_die(e,t,n,r,i){let a=this.pop[e];a[t]=a[a.length-1],a.pop(),n.dead=!0;let o=this.w;cd[e].medium===`water`&&o.act[i]&&(o.Nu[i]=Math.min(1,o.Nu[i]+.01*(e===`minnow`?1:4))),r&&ud[cd[e].medium]&&this.falling.push({k:e,x:n.fl?n.fl.x:n.x,z:n.fl?n.fl.z:n.z,y0:n.fl?.y,t:0}),cd[e].medium===`water`&&this.sinking.length<20&&this.sinking.push({k:e,x:n.x,z:n.z,dir:n.dir,t:0}),this._gone(e)}_gone(e){let t=this.w;this.pop[e].length||t.quiet||(t.year-this.lastGone[e]>30&&t.events.push({type:`gone-`+e,text:cd[e].gone}),this.lastGone[e]=t.year)}cover(e){let t=this.w,n=t.index(e.x,e.z);switch(e.k){case`minnow`:return .8*Q(.2,.6,t.A[n])*(t.W[n]<.06?1:.4);case`bigfish`:return .15+.4*Q(.2,.6,t.A[n]);case`rabbit`:{let r=(e.x-e.hx)**2+(e.z-e.hz)**2<6e-4?.8:0;return Math.max(r,.6*Q(.6,.9,t.V[n]))}case`songbird`:return .85*Q(.45,.75,t.V[n]);case`heron`:return .6;case`frog`:return t.W[n]>.001&&t.W[n]<.02?.7:.3;case`dragonfly`:return .55;case`duck`:return t.W[n]<.02?.55:.15;default:return 0}}_hunt(e,t,n){if(e.e>1.5||e.rest>0){e.tgt=null;return}let r=t.sight*t.sight,i=e.tgt=this._spot(e,t,r);if(!i)return;i.fear=1.5;let a=this.w.rng,o=this.pop[i.k].length,s=.25*(i.k===`minnow`?Math.max(20,this.room):cd[i.k].max),c=o>=s?1:(o/s)**2;if(a()<1-Math.exp(-n*t.hunt*t.prey[i.k]*c*(1-this.cover(i)))){this._eat(i),e.e+=t.gain,e.rest=t.rest*(.7+.6*a()),e.tgt=null,e.tx=i.x,e.tz=i.z,this.kills.push({k:e.k,prey:i.k,x:i.x,z:i.z,a:e});let n=e.k+`>`+i.k;this.tally.eaten[n]=(this.tally.eaten[n]|0)+1,e.k===`pike`&&i.k===`heron`&&this._note(`pikeheron`,`A pike has taken a heron off the surface of the lake!`,40)}}_spot(e,t,n){let r=null,i=n;for(let n in t.prey){let a=t.prey[n];for(let t of this.pop[n]){let n=((t.x-e.x)**2+(t.z-e.z)**2)/a;n>=i||(n/=1.05-this.cover(t),n<i&&(i=n,r=t))}}return r}_eat(e){let t=this.pop[e.k],n=t.indexOf(e);n<0||(t[n]=t[t.length-1],t.pop(),e.dead=!0,this._gone(e.k))}_eggs(e,t){let n=this.w;if(!(n.W[t]<.02||n.A[t]<.12||this.pop.minnow.length<10||this._near(`minnow`,e.x,e.z,.012)>0)&&!(n.rng()>.15)){for(let t=0;t<3;t++)this.pop.minnow.push(this._make(`minnow`,e.x,e.z,1));this._note(`eggs`,`A heron has carried fish eggs to new water. Minnows are hatching there.`,30)}}_arrive(e){let t=this.w,n=t.rng;for(let r of ld){let i=cd[r];if(this.pop[r].length){this.ready[r]=0;continue}if(this.ready[r]=this._enough(r)?this.ready[r]+e:Math.max(0,this.ready[r]-e*2),this.ready[r]<i.arrive.wait||n()>e*.25)continue;let a=this._site(r);if(a<0)continue;let o=t.cx[a],s=t.cz[a],c=i.medium===`land`||i.medium===`trees`?.06:.01;for(let e=0;e<i.arrive.group;e++){let e=this._make(r,o+(n()-.5)*c,s+(n()-.5)*c,1,n()*i.life*.3);(i.medium===`water`||i.medium===`shore`)&&(e.x=e.tx=e.hx=o,e.z=e.tz=e.hz=s),this.pop[r].push(e)}t.year-this.last[r]>30&&t.events.push({type:`arrive-`+r,text:i.arrive.text}),this.last[r]=t.year}}_enough(e){let t=this.w,n=this.pop;switch(e){case`minnow`:return this.room>=10;case`rabbit`:return t.stats.meanV>.25;case`songbird`:return this.insMean>.08&&t.stats.meanV>.3;case`bigfish`:return n.minnow.length>=50;case`heron`:return n.minnow.length>=30;case`fox`:return n.rabbit.length>=70;case`hawk`:return n.rabbit.length+n.songbird.length>=80;case`pike`:return n.bigfish.length>=10;case`frog`:case`dragonfly`:return this.insMean>.08&&t.stats.lakeFrac>.01;case`duck`:return this.room>=15}return!1}_site(e){let t=this.w,n=t.rng,{W:r,A:i,V:a}=t,o=(e,r=40)=>{let i=-1,a=0;for(let o=0;o<r;o++){let r=t.list[n()*t.nAct|0],o=t.cx[r],s=t.cz[r];if(o*o+s*s>.8)continue;let c=e(r);c>a&&(a=c,i=r)}return i},s=(e,r,i=30)=>{let a=this.pop[e];for(let e=0;e<i&&a.length;e++){let e=a[n()*a.length|0];for(let i=0;i<12;i++){let i=n()*6.283,a=n()*.1,o=e.x+Math.cos(i)*a,s=e.z+Math.sin(i)*a;if(o*o+s*s>.85)continue;let c=t.index(o,s);if(r(c,o,s))return c}}return-1};switch(e){case`minnow`:return o(e=>r[e]>.02&&i[e]>.15?i[e]:0);case`rabbit`:return o(e=>r[e]<Z.WSHOW&&a[e]>.3?a[e]:0,30);case`songbird`:return o(e=>r[e]<Z.WSHOW&&a[e]>.6&&this.insectsAt(e)>.12?a[e]+this.insectsAt(e):0);case`bigfish`:return s(`minnow`,e=>r[e]>.05);case`heron`:return s(`minnow`,e=>r[e]>Z.WSHOW&&r[e]<.04);case`fox`:return s(`rabbit`,e=>r[e]<Z.WSHOW&&t.slope[e]<.04);case`hawk`:return s(this.pop.rabbit.length>=this.pop.songbird.length?`rabbit`:`songbird`,e=>r[e]<Z.WSHOW);case`pike`:return s(`bigfish`,(e,t,n)=>r[e]>.08&&this.deep(t,n)>.5);case`frog`:return o(e=>r[e]>.001&&r[e]<.02&&this.insectsAt(e)>.04?1+this.insectsAt(e):0,80);case`dragonfly`:return o(e=>r[e]>Z.WSHOW&&r[e]<.05&&this.insectsAt(e)>.04?1+this.insectsAt(e):0,80);case`duck`:return o(e=>r[e]>.01&&i[e]>.12?i[e]+(r[e]<.06?.5:0):0)}return-1}deep(e,t){let n=this.w,r=0;for(let i=0;i<16;i++){let a=i*.3927,o=i&1?.06:.14;n.W[n.index(e+Math.cos(a)*o,t+Math.sin(a)*o)]>.08&&r++}return r/16}frame(e){this.bank+=this.clock-e,this.clock=0;let t=e;this.bank>0?(t+=this.bank,this.bank=0):this.bank<-.3&&(this.bank=-.3),t>1&&(t=1);for(let e of ld){let n=cd[e];for(let r of this.pop[e])r.wait-=t,r.fear>0&&(r.fear-=t),n.medium===`water`?this._swim(r,n,t):n.medium===`land`?this._walk(r,n,t):n.medium===`marsh`?this._hop(r,n,t):n.medium===`reeds`?this._dart(r,n,t):n.medium===`surface`?this._paddle(r,n,t):this._fly(r,n,t)}this._fireHawk(e)}_go(e,t,n,r){let i=e.tx-e.x,a=e.tz-e.z,o=Math.hypot(i,a);if(o<r)return!0;let s=Math.min(o,t*n);return e.x+=i/o*s,e.z+=a/o*s,e.dir=Math.atan2(i,a),!1}_choose(e,t,n,r,i,a=6){let o=this.w.rng,s=-1e9,c=e.x,l=e.z;for(let u=0;u<a;u++){let a=o()*6.283,u=t+o()*(n-t),d=e.x+Math.cos(a)*u,f=e.z+Math.sin(a)*u;if(d*d+f*f>r)continue;let p=i(this.w.index(d,f),d,f);p>s&&(s=p,c=d,l=f)}return e.tx=c,e.tz=l,s}_swim(e,t,n){let r=this.w,{A:i,W:a,heat:o}=r,s=r.rng,c=e.k;if(e.tgt&&!e.tgt.dead){e.tx=e.tgt.x,e.tz=e.tgt.z,this._go(e,t.speed*1.6,n,.004);return}let l=e.fear>0;(e.wait<=0||this._go(e,t.speed*(l?1.5:1),n,.008))&&(this._choose(e,.03,.12,.93,e=>{let t=a[e];if(t<(c===`minnow`?.02:c===`bigfish`?.03:.05))return-5;let n=-o[e]*5-r.algae[e]*2+s()*.35;return n+=c===`minnow`?i[e]*(l?4:2)+Math.min(t,.08)*3-(t>.08?(t-.08)*4:0):c===`bigfish`?Math.min(t,.15)*6+i[e]*.5-Math.max(0,r.Tavg[e]-24)*.1:Math.min(t,.25)*8,n})<=-4&&(e.tx=e.x,e.tz=e.z),e.wait=1+s()*2)}_walk(e,t,n){let r=this.w,{V:i,W:a,heat:o,fire:s,slope:c}=r,l=r.rng;if(r.fireList.length&&!(e.run>0)){let t=r.index(e.x,e.z);(s[t]>0||s[t-3]>0||s[t+3]>0||s[t-3*J]>0||s[t+3*J]>0)&&(e.wait=0,e.run=2.5)}if(e.run>0&&(e.run-=n),e.k===`fox`&&e.tgt&&!e.tgt.dead)e.tx=e.tgt.x,e.tz=e.tgt.z,this._go(e,t.speed*2.5,n,.004);else if(e.k===`rabbit`&&e.fear>0&&!(e.run>0))e.tx=e.hx,e.tz=e.hz,this._go(e,t.speed*3,n,.004);else if(e.wait<=0||this._go(e,t.speed*(e.run>0?3.5:1),n,.01)){let t=e.k===`fox`?.25:.12,n=e.k===`fox`&&e.e<1.2&&!e.tgt&&l()<.5;if(n){let t=this.pop.rabbit,n=null,r=9;for(let i=0;i<12&&t.length;i++){let i=t[l()*t.length|0],a=(i.x-e.x)**2+(i.z-e.z)**2;a<r&&(r=a,n=i)}if(n){e.tx=e.hx=n.x+(l()-.5)*.04,e.tz=e.hz=n.z+(l()-.5)*.04,e.wait=3;return}}this._choose(e,.02,n?.2:.055,.9,(r,u,d)=>{let f=-(a[r]>Z.WSHOW?5:0)-c[r]*10-o[r]*5-s[r]*12+l()*.25;return f+=e.k===`rabbit`?i[r]:l()*.3,!(e.run>0)&&!n&&(u-e.hx)**2+(d-e.hz)**2>t*t&&--f,f}),e.wait=1.5+l()*2.5,(e.run>0||n)&&(e.hx=e.tx,e.hz=e.tz)}}_fly(e,t,n){let r=this.w,{V:i,W:a,A:o,fire:s}=r,c=r.rng,l=e.k;if(e.run>0&&(e.run-=n),l===`hawk`){if(e.tgt&&!e.tgt.dead){e.tx=e.tgt.x,e.tz=e.tgt.z,this._go(e,.12,n,.004);return}(e.wait<=0||this._go(e,t.speed*(e.run>0?3:1),n,.01))&&(this._choose(e,.08,.25,.6,e=>{let t=i[e];return(a[e]>Z.WSHOW?.5*o[e]:t>.2&&t<.65?1:.3)+c()*.5}),e.wait=3+c()*3);return}if(l===`songbird`){let r=e.fear>0;(e.wait<=0||r&&e.wait>.3||this._go(e,t.speed*(r||e.run>0?2:1),n,.006))&&(this._choose(e,r?.01:.03,r?.05:.14,.85,e=>i[e]*(r?4:2)+this.insectsAt(e)-+(a[e]>Z.WSHOW)-s[e]*10+c()*.3),e.wait=r?.3:.8+c()*1.5);return}let u=e.fly;if(e.wait<=0||this._go(e,u?.12:t.speed,n,.004)){e.fly=!1;let t=e=>{let t=a[e];return s[e]>0?-9:t>Z.WSHOW&&t<.04?2+o[e]*2+c()*.3:t>=.04?-2:-.3+c()*.2};(this._choose(e,.01,.05,.85,t)<1.6||e.e<.5||e.run>0)&&this._choose(e,.1,.5,.85,t,14)>1.6&&(e.fly=!0),e.wait=e.fly?6:2+c()*3}}_hop(e,t,n){let r=this.w,{W:i,V:a,T:o,fire:s,heat:c,Mavg:l}=r,u=r.rng;e.run>0&&(e.run-=n);let d=e.fear>0||e.run>0;if(!(o[r.index(e.x,e.z)]<2&&!d)){if(e.sit>0&&!d)e.sit-=n;else if(e.wait<=0||this._go(e,t.speed*(d?4:1),n,.003)){let t=e=>{let t=i[e];return s[e]>0||c[e]>.5?-9:(t>.001&&t<.02?2:t<=.001?.2+l[e]:t<.05?d?2.5:.6:-3)+.6*a[e]+this.insectsAt(e)+u()*.4};this._choose(e,.004,.03,.88,t)<1.5&&!d&&this._choose(e,.04,.2,.88,t,10),e.sit=d?0:2+u()*6,e.wait=6}}}_dart(e,t,n){let r=this.w,{W:i,T:a,fire:o}=r,s=r.rng;if(a[r.index(e.x,e.z)]<6)return;let c=e.fear>0||e.run>0;e.run>0&&(e.run-=n),e.sit>0&&!c?e.sit-=n:(e.wait<=0||this._go(e,t.speed*(c?1.6:1),n,.004))&&(this._choose(e,.015,.09,.88,e=>{let t=i[e];return o[e]>0?-9:(t>Z.WSHOW&&t<.05?2:t>=.05?.4:.8)+this.insectsAt(e)*1.5+s()*.8}),e.sit=.4+s()*1.6,e.wait=3)}_paddle(e,t,n){let r=this.w,{W:i,A:a,S:o,heat:s}=r,c=r.rng,l=e.mom;if(l&&!l.dead&&e.age<.5){let r=.006*(1+(e.ph*3|0));e.tx=l.x-Math.sin(l.dir)*r,e.tz=l.z-Math.cos(l.dir)*r,this._go(e,t.speed*1.6,n,.002);return}e.run>0&&(e.run-=n);let u=e.fear>0||e.run>0;e.sit>0&&!u?e.sit-=n:(e.wait<=0||this._go(e,t.speed*(u?2.5:1),n,.006))&&(this._choose(e,.02,.1,.9,e=>{let t=i[e];return t<.006?-5:a[e]*2.5+(t<.06?1:.2)-s[e]*5-(o[e]>.002)+c()*.5})<=-4&&(e.tx=e.x,e.tz=e.z),e.sit=u?0:c()*3,e.wait=4+c()*4)}_fireHawk(e){let t=this.w;if(!t.fireList.length){this.fireHawk=!1;return}let n=this.pop.hawk;if(this.fireHawk||!n.length||t.rng()>e*.02)return;let r=t.fireList[t.rng()*t.fireList.length|0],i=t.rng()*6.283,a=.07+t.rng()*.07,o=t.cx[r]+Math.cos(i)*a,s=t.cz[r]+Math.sin(i)*a;if(o*o+s*s>.85||!t._ignite(t.index(o,s),.5))return;this.fireHawk=!0;let c=n[t.rng()*n.length|0];c.tx=o,c.tz=s,this.kills.push({k:`hawk`,prey:`fire`,x:o,z:s,a:c}),t.events.push({type:`firehawk`,text:`A hawk has carried a burning stick ahead of the fire and dropped it, to flush out prey.`})}strike(e,t,n,r){let i=this.w;i.rng;for(let a of ld){let o=cd[a],s=this.pop[a];for(let c=s.length-1;c>=0;c--){let l=s[c],u=Math.hypot(l.x-e,l.z-t);if(o.medium===`water`){if(!r||u>n*1.6)continue;let e=i.index(l.x,l.z);i.act[e]&&(i.Nu[e]=Math.min(1,i.Nu[e]+.3)),this._die(a,c,l,!1,e);continue}if(ud[o.medium]&&u<n*2){this._die(a,c,l,!0,i.index(l.x,l.z));continue}if(o.medium===`surface`&&r&&u<n*1.6){this._die(a,c,l,!1,i.index(l.x,l.z));continue}if(u>n*(ud[o.medium]?6:2.5))continue;let d=(l.x-e)/(u||1),f=(l.z-t)/(u||1),p=l.x+d*.22,m=l.z+f*.22,h=Math.hypot(p,m);h>.85&&(p*=.85/h,m*=.85/h),l.tx=p,l.tz=m,l.tgt=null,l.wait=4,l.run=4,ud[o.medium]&&(l.fly=!0)}}this.falling.length>3&&this._note(`fall`,`The blast has knocked birds out of the sky.`,5)}nuke(e,t,n,r,i){let a=this.w,o=0;for(let s of ld){let c=cd[s],l=this.pop[s],u=ud[c.medium];for(let d=l.length-1;d>=0;d--){let f=l[d],p=Math.hypot(f.x-e,f.z-t);if(c.medium===`water`?p<n*1.5:p<r*(u?1.3:1)){this._die(s,d,f,u,a.index(f.x,f.z)),o++;continue}if(c.medium===`water`||p>i*2.5)continue;let m=(f.x-e)/(p||1),h=(f.z-t)/(p||1),g=f.x+m*.3,_=f.z+h*.3,v=Math.hypot(g,_);v>.85&&(g*=.85/v,_*=.85/v),f.tx=g,f.tz=_,f.tgt=null,f.wait=6,f.run=6,u&&(f.fly=!0)}}return o}lightning(e,t,n){let r=this.w,i=0;for(let a of ld){let o=cd[a].medium,s=o===`water`;if(!s&&o!==`surface`&&o!==`marsh`)continue;let c=this.pop[a];for(let o=c.length-1;o>=0;o--){let l=c[o];if(Math.hypot(l.x-e,l.z-t)>(s?n:n*.5))continue;let u=r.index(l.x,l.z);!s&&r.W[u]<.001||(c[o]=c[c.length-1],c.pop(),l.dead=!0,i++,r.act[u]&&(r.Nu[u]=Math.min(1,r.Nu[u]+.01*(a===`minnow`?1:4))),s&&this.floating.length<40&&this.floating.push({k:a,x:l.x,z:l.z,dir:l.dir,t:0,ph:r.rng()}),this._gone(a))}}return i}blown(e,t){let n=this.w,r=n.rng,i=q.forces;for(let a of ld){let o=cd[a],s=this.pop[a],c=ud[o.medium],l=o.medium===`water`;for(let u=s.length-1;u>=0;u--){let d=s[u];for(let f of e){if(l&&f.kind!==`in`)continue;let e=id(f,d.x,d.z);if(e<=0)continue;if(f.kind===`in`){let n=f.x-d.x,r=f.z-d.z,o=Math.hypot(n,r);if(o<.012){s[u]=s[s.length-1],s.pop(),d.dead=!0,this._gone(a);break}let c=Math.min(o,i.drag*(.3+e)*t);d.x+=n/o*c,d.z+=r/o*c,d.tx=d.x,d.tz=d.z,d.tgt=null,d.dir=Math.atan2(-n,-r);continue}if(c&&r()<i.birdDown*e*t){this._die(a,u,d,!0,n.index(d.x,d.z));break}if(f.kind!==`whirl`||e<.4||r()>i.grab*e*t)continue;if(r()<i.kill){this._die(a,u,d,!0,n.index(d.x,d.z));break}let p=.08+r()*.14,m=(r()-.5)*.1,h=d.x+f.ux*p-f.uz*m,g=d.z+f.uz*p+f.ux*m,_=Math.hypot(h,g);_>.85&&(h*=.85/_,g*=.85/_),d.x=d.tx=h,d.z=d.tz=g,o.medium===`land`&&(d.hx=h,d.hz=g),d.tgt=null,d.wait=0,d.run=3;break}}}}shun(e,t){let n=q.forces;for(let r of ld){let i=cd[r].medium;if(i!==`water`&&i!==`surface`)for(let a of this.pop[r]){if(a.run>0)continue;let r=0,o=0;for(let t of e){let e=a.x-t.x,i=a.z-t.z,s=Math.hypot(e,i);s<t.R*n.fleeHeat&&s>1e-6&&(r+=e/s,o+=i/s)}for(let e of t){let t=a.x-e.x,n=a.z-e.z,i=Math.hypot(t,n);i<e.R&&i>1e-6&&(r+=t/i,o+=n/i)}let s=Math.hypot(r,o);if(s<1e-6)continue;let c=a.x+r/s*.18,l=a.z+o/s*.18,u=Math.hypot(c,l);u>.85&&(c*=.85/u,l*=.85/u),a.tx=c,a.tz=l,a.tgt=null,a.wait=3,a.run=3,ud[i]&&(a.fly=!0)}}}feast(e,t,n,r){let i=this.w;for(let r=0;r<9;r++){let a=i.index(e+(r%3-1)*n*.7,t+((r/3|0)-1)*n*.7);this.cellOn[this.cell[a]]&&(this.ins[this.cell[a]]=1)}let a=0;for(let i of ld)if(cd[i].food===`insects`)for(let o of this.pop[i])(o.x-e)**2+(o.z-t)**2>n*n||(a++,o.e=Math.min(2,o.e+1.5*r));return a}gamma(e,t){let n=this.w,r=0;for(let i of ld){let a=cd[i],o=this.pop[i],s=a.medium;for(let a=o.length-1;a>=0;a--){let c=o[a],l=n.index(c.x,c.z);e[l]&&(s===`water`&&n.W[l]>t||s===`marsh`&&n.W[l]>.004||i===`rabbit`&&(c.x-c.hx)**2+(c.z-c.hz)**2<6e-4||(this._die(i,a,c,!!ud[s],l),r++))}}return r}shake(){let e=this.w.rng;for(let t of ld){let n=cd[t].medium;if(n!==`water`)for(let r of this.pop[t])if(r.wait=0,n===`land`){r.x+=(e()-.5)*.2,r.z+=(e()-.5)*.2;let t=Math.hypot(r.x,r.z);t>.9&&(r.x*=.9/t,r.z*=.9/t)}else r.run=3}}},fd=new Float64Array(12),pd=new Float64Array(12);for(let e=0;e<12;e++){let t=e*.5236,n=(e&1?7:12)*X;fd[e]=Math.cos(t)*n,pd[e]=Math.sin(t)*n}var md=class{_rain(e){let t=Z,n=this.wref*t.C0*Math.exp(Math.min(6,(this.airT-15)/t.TAU));this.cap=n;let r=this.rh=this.vap/n,i=0;r>t.RH0&&(i=this.vap*t.KC*Math.min(3,(r-t.RH0)/(1-t.RH0))*e),i>this.vap*.6&&(i=this.vap*.6);let a=this.vap-n;a<0&&(a=0),a>i&&(a=i),this.vap-=i,this.rainRate+=(i/e/this.wref-this.rainRate)*Math.min(1,e*6);let o=this.clouds,s=0;for(let t of o){t.lead+=t.v*e/Xu;let n=this.windX,r=this.windZ,i=t.x+n*t.lead-r*t.off,a=t.z+r*t.lead+n*t.off;if(i*n+a*r>.8||i*i+a*a>.8){let e=this.wind+Math.PI+(this.rng()-.5)*2.7,o=Math.cos(e)*.8-t.x,s=Math.sin(e)*.8-t.z;t.lead=o*n+s*r,t.off=-o*r+s*n,i=t.x+n*t.lead-r*t.off,a=t.z+r*t.lead+n*t.off}t.rx=i,t.rz=a,t.ri=this.index(t.rx,t.rz),t.share=t.power*(this.act[t.ri]?this.rainK[t.ri]:0),s+=t.share}let c=s>.05?(i-a)*(1-t.DRIZZLE):0;this.drizzle=(i-c)/this.nAct;for(let t of o){if(t.rain=0,c<=0||t.share<=0)continue;let n=c*t.share/s;t.snow=this.T[this.index(t.x,t.z)]<.5,t.rain=n/e/this.wref,this._precip(t.ri,n,this.kCloud)}}_climate(){let{G:e,W:t,act:n,rainK:r,coast:i,cx:a,cz:o,windX:s,windZ:c}=this,l=Z,u=this.climRow,d=Math.min(J-1,u+14);this.climRow=d>=J-1?1:d;let f=-s*X,p=-c*X;for(let s=Math.max(1,u);s<d;s++)for(let c=s*J+1,u=c+J-2;c<u;c++){if(!n[c])continue;let s=a[c],u=o[c],d=e[c],m=(d-e[this.index(s+4*f,u+4*p)])/(4*X),h=0;for(let t=6;t<=42;t+=3){let r=this.index(s+t*f,u+t*p);if(!n[r])break;let i=(e[r]-d-.01)*(1-t/60);i>h&&(h=i)}let g=1+l.ORO*(d>.1?d-.1:0);g*=m>0?1+l.LIFT*(m>1?1:m):1-.5*(m<-1?1:-m),g*=1-l.SHADOW*Q(.01,.09,h);let _=0;for(let e=0;e<12;e++)t[this.index(s+fd[e],u+pd[e])]>.012&&_++;let v=i[c]=_/12;r[c]=g*(1+l.COAST*v)}}_precip(e,t,n){if(t<=0)return;let{act:r,T:i,W:a,S:o,rainK:s,rained:c}=this,{w:l,R:u,span:d}=n,f=e%J,p=e/J|0,m=0;for(let e=-u;e<=u;e++){let t=p+e;if(!(t<1||t>=J-1))for(let n=-u;n<=u;n++){let i=f+n;if(i<1||i>=J-1)continue;let a=t*J+i;r[a]&&(m+=l[(e+u)*d+n+u]*s[a])}}if(m<=0){this.vap+=t;return}let h=t/m;for(let e=-u;e<=u;e++){let t=p+e;if(!(t<1||t>=J-1))for(let n=-u;n<=u;n++){let p=f+n;if(p<1||p>=J-1)continue;let m=t*J+p;if(!r[m])continue;let g=h*l[(e+u)*d+n+u]*s[m];c[m]+=g,i[m]<.5?o[m]+=g:a[m]+=g}}}_flow(e=this.list,t=this.nAct,n=e,r=t){let{W:i,G:a,act:o,tmp:s}=this;s.fill(0);for(let n=0;n<t;n++){let t=e[n],r=i[t];if(r<=1e-7)continue;let c=a[t]+r,l=o[t-1]?c-a[t-1]-i[t-1]:0,u=o[t+1]?c-a[t+1]-i[t+1]:0,d=o[t-J]?c-a[t-J]-i[t-J]:0,f=o[t+J]?c-a[t+J]-i[t+J]:0;l<0&&(l=0),u<0&&(u=0),d<0&&(d=0),f<0&&(f=0);let p=l+u+d+f;if(p<=0)continue;let m=l>u?l:u;d>m&&(m=d),f>m&&(m=f);let h=m*.5;h>r&&(h=r),h*=.5;let g=h/p;s[t]-=h,s[t-1]+=l*g,s[t+1]+=u*g,s[t-J]+=d*g,s[t+J]+=f*g}for(let e=0;e<r;e++){let t=n[e];i[t]+=s[t]}}_runs(){let{W:e,runR:t,runD:n}=this;t[Y-1]=n[Y-1]=0;for(let r=Y-2;r>=0;r--)if(e[r]>.012){let e=t[r+1],i=r+J<Y?n[r+J]:0;t[r]=e<250?e+1:250,n[r]=i<250?i+1:250}else t[r]=n[r]=0}_level(e){let{W:t,G:n,tmp:r,runR:i,runD:a,list:o,nAct:s}=this,c=e*J,l=!1;for(let u=0;u<s;u++){let s=o[u],d=t[s];if(d<=.012)continue;let f=n[s]+d,p=i[s-e]>e?f-n[s-e]-t[s-e]:0,m=i[s]>e?f-n[s+e]-t[s+e]:0,h=s>=c&&a[s-c]>e?f-n[s-c]-t[s-c]:0,g=a[s]>e?f-n[s+c]-t[s+c]:0;p<0&&(p=0),m<0&&(m=0),h<0&&(h=0),g<0&&(g=0);let _=p+m+h+g;if(_<=1e-6)continue;let v=p>m?p:m;h>v&&(v=h),g>v&&(v=g);let y=v*.5;y>d-.012&&(y=d-Yu),y*=.5;let b=y/_;l||=(r.fill(0),!0),r[s]-=y,p>0&&(r[s-e]+=p*b),m>0&&(r[s+e]+=m*b),h>0&&(r[s-c]+=h*b),g>0&&(r[s+c]+=g*b)}if(l)for(let e=0;e<s;e++)t[o[e]]+=r[o[e]]}_sea(e){let{W:t,S:n,V:r,A:i,Nu:a,Tavg:o,heat:s,act:c,tmp:l,list:u,nAct:d}=this,f=Z,p=Ju[3],m=p*J,h=Math.min(.2,.1*e/(f.DT*2)),g=Math.min(1,e/f.NU_TAU);for(let e=0;e<d;e++){let n=u[e];if(t[n]<=f.SEA_MIN){l[n]=0;continue}let r=0,i=0;t[n-p]>f.SEA_MIN&&(r+=a[n-p],i++),t[n+p]>f.SEA_MIN&&(r+=a[n+p],i++),t[n-m]>f.SEA_MIN&&(r+=a[n-m],i++),t[n+m]>f.SEA_MIN&&(r+=a[n+m],i++),l[n]=i?h*(r/i-a[n]):0}let _=f.SEA_DRIFT*Math.min(.2,this.stats.seaA),v=this.algae,y=q.algae,b=0,x=0,S=0,C=0;for(let c=0;c<d;c++){let d=u[c],h=t[d],w=i[d];if(h<=f.SEA_MIN){w>0&&(i[d]=w>.02?w*(1-Math.min(1,3*e)):0),a[d]>0&&(a[d]=0),v[d]=0;continue}let T=0;t[d-1]<=f.SEA_MIN&&(T+=r[d-1]),t[d+1]<=f.SEA_MIN&&(T+=r[d+1]),t[d-J]<=f.SEA_MIN&&(T+=r[d-J]),t[d+J]<=f.SEA_MIN&&(T+=r[d+J]),(T>0||t[d-p]<=f.SEA_MIN||t[d+p]<=f.SEA_MIN)&&(t[d-p]<=f.SEA_MIN&&(T+=r[d-p]),t[d+p]<=f.SEA_MIN&&(T+=r[d+p]),t[d-m]<=f.SEA_MIN&&(T+=r[d-m]||0),t[d+m]<=f.SEA_MIN&&(T+=r[d+m]||0));let E=s[d],D=a[d]+l[d]+(f.NU_SHORE*Ru*.125*T+2*(E>1?1:E))*e;D-=D*g,a[d]=D=D<0?0:D>1?1:D;let O=o[d],k=v[d],A=n[d]>.002?0:Q(y.feedFrom,y.feedFull,D)*Q(y.warmFrom,y.warmFull,O);if(k<A){let t=Math.max(v[d-p],v[d+p],v[d-m],v[d+m]);k+=(y.grow*(A-k)+y.spread*(t>k?t-k:0)*A)*e}else k>0&&(k-=y.die*(k-A)*e);v[d]=k=k<.002?0:k>1?1:k,C+=k,k>0&&D>y.feedFrom&&(a[d]=D=Math.max(y.feedFrom*.95,D-y.eat*k*e));let j=(n[d]>.002?.3:1)*(.2+.8*Math.exp(-h/f.SEA_LIGHT))*(1-y.shade*k)*((.12+.88*Q(-3,8,O))*(1-.9*Q(29,35,O)))*(.3+.7*D);if(w<j){let t=.25*((i[d-p]||0)+(i[d+p]||0)+(i[d-m]||0)+(i[d+m]||0));w+=(f.SEA_GROW*w*(j-w)+(f.SEA_SPREAD*(t>w?t-w:0)+_)*j)*e}else w-=f.SEA_DIE*(w-j)*e,w<.002&&(w=0);i[d]=w,b+=w,w>.1&&(S+=w-.1),x++}let w=this.stats;w.seaA=x?b/x:0,w.seaFrac=x/d,w.seaSum=b,w.seaRich=S,w.algae=x?C/x:0,this.quiet||(!this.flags.bloom&&w.algae>y.tellAt?(this.flags.bloom=!0,this.events.push({type:`bloom`,text:`An algal bloom is spreading over the warm water. It shades the reef and kelp below, and the fish under it are running short of air.`})):this.flags.bloom&&w.algae<y.tellAt*.3&&(this.flags.bloom=!1,this.events.push({type:`clear`,text:`The algal bloom has cleared.`})))}_runRiver(e){let{W:t,A:n,flux:r,rcv:i,act:a}=this,o=this.rng,s=-1;for(let n=0;n<8&&s<0;n++){let n=this.index(e.x+(o()-.5)*.1,e.z+(o()-.5)*.1);a[n]&&t[n]<Z.SEA_MIN&&r[n]>Z.Q_CUT&&(s=n)}if(s<0)return!1;let c=0;for(let e=0;e<3e3&&t[s]<=.03;e++)if(t[s]<Z.SEA_MIN&&c++,s=i[s],s<0)return!1;if(c<5||n[s]<.03)return!1;let l=this.cx[s],u=this.cz[s];return(l-e.x)**2+(u-e.z)**2<.0036||l*l+u*u>.9?!1:(e.x=e.tx=l,e.z=e.tz=u,e.wait=0,!0)}_stock(){let{W:e,A:t,rcv:n}=this,r=this.fish,i=this.rng,a=-1;for(let n=0;n<30&&a<0;n++){let n=this.list[i()*this.nAct|0];if(e[n]<=.03||t[n]<.12)continue;let o=this.cx[n],s=this.cz[n];if(o*o+s*s>.9)continue;let c=!1;for(let e of r)if((e.x-o)**2+(e.z-s)**2<.01){c=!0;break}c||(a=n)}if(a<0)return 0;let o=a,s=0;for(let t=0;t<3e3;t++){if(o=n[o],o<0)return 0;if(e[o]<Z.SEA_MIN)s++;else if(s>=5&&e[o]>.03)break}if(s<5||e[o]<=.03)return 0;let c=this.cx[o],l=this.cz[o],u=0;for(let e of r)if(!((e.x-c)**2+(e.z-l)**2>.02)&&(e.x=e.tx=this.cx[a]+(i()-.5)*.01,e.z=e.tz=this.cz[a]+(i()-.5)*.01,e.wait=0,++u>=3))break;return u}_seep(e){let{Q:t,V:n,act:r,list:i,nAct:a}=this,o=Math.min(.2,Z.KD*e*Lu*Lu);for(let e=0;e<a;e++){let a=i[e],s=Z.SOILCAP*(.6+.8*n[a]);for(let e=0;e<2;e++){let i=e?a+J:a+1;if(!r[i])continue;let c=Z.SOILCAP*(.6+.8*n[i]),l=o*(t[a]/s-t[i]/c)*(s<c?s:c);t[a]-=l,t[i]+=l}}}_glaciers(e){let{S:t,G:n,W:r,act:i,tmp:a,list:o,nAct:s}=this,c=Math.min(.25,Z.KG*e),l=Z.ICE_TALUS;a.fill(0);let u=!1;for(let e=0;e<s;e++){let s=o[e],d=t[s];if(d<.003)continue;let f=n[s]+r[s]+d,p=i[s-1]?f-n[s-1]-r[s-1]-t[s-1]:0,m=i[s+1]?f-n[s+1]-r[s+1]-t[s+1]:0,h=i[s-J]?f-n[s-J]-r[s-J]-t[s-J]:0,g=i[s+J]?f-n[s+J]-r[s+J]-t[s+J]:0;p<0&&(p=0),m<0&&(m=0),h<0&&(h=0),g<0&&(g=0);let _=p+m+h+g;if(_<=.002)continue;let v=p>m?p:m;h>v&&(v=h),g>v&&(v=g);let y=d/.02,b=Math.min(d-.003,v*.5)*Math.min(1,c*(y<1?y:y*y));if(v>l){let e=Math.min(d-.003-b,(v-l)*.25);e>0&&(b+=e)}let x=b/_;a[s]-=b,a[s-1]+=p*x,a[s+1]+=m*x,a[s-J]+=h*x,a[s+J]+=g*x,u=!0}if(u)for(let e=0;e<s;e++)t[o[e]]+=a[o[e]]}_thermal(e,t=.11,n=this.list,r=this.nAct,i=n,a=r){let{H:o,act:s,tmp:c,slope:l}=this,u=e*1.4142;c.fill(0);for(let i=0;i<r;i++){let r=n[i],a=o[r],d=0;for(let n=0;n<8;n++){let i=r+Ku[n];if(!s[i])continue;let l=a-o[i],f=n<4?e:u;if(n<4&&l>d&&(d=l),l>f){let e=(l-f)*t;c[r]-=e,c[i]+=e}}l[r]=d*Lu}for(let e=0;e<a;e++){let t=i[e];o[t]+=c[t]}}_waves(e){let{W:t,G:n,S:r,V:i,Q:a,act:o,cx:s,cz:c,wave:l}=this;l.fill(0);let u=this._floodList||=[];for(let d=this.waves.length-1;d>=0;d--){let f=this.waves[d];f.t+=e;let p=f.rf;f.rf=f.R*1.1+.45*f.t;let m=f.A*Math.sqrt(f.R/Math.max(f.R,f.rf))*Math.exp(-f.t*.3);if(m<.0015||f.rf>1.8){this.waves.splice(d,1);continue}let h=f.lam,g=f.rf+1.5*h,_=f.Lw+m*.8,v=this.index(f.x,f.z),y=v%J,b=v/J|0,x=Math.ceil(g/X),S=Math.max(1,y-x),C=Math.min(J-2,y+x),w=Math.max(1,b-x),T=Math.min(J-2,b+x),E=0,D=0,O=0;u.length=0;for(let e=w;e<=T;e++)for(let i=S;i<=C;i++){let a=e*J+i;if(!o[a])continue;let d=Math.hypot(s[a]-f.x,c[a]-f.z),g=(d-f.rf)/h;if(!(g<-1.5||g>1.5)){if(t[a]>Z.WSHOW){if(Math.abs(n[a]+t[a]-f.Lw)>.03)continue;O++,l[a]+=m*Math.cos(3.1416*g)*Math.exp(-g*g*1.2)*(1-Q(5e-4,.002,r[a])),g<0&&t[a]>.02&&(D+=t[a])}else if(d>=p&&d<f.rf&&r[a]<8e-4&&n[a]<_){for(let e=0;e<8;e++)if(t[a+Ku[e]]>Z.WSHOW){let e=Math.min(.04,(_-n[a])*.7);u.push(a,e),E+=e;break}}}}if(!O){this.waves.splice(d,1);continue}if(E<=0||D<=0)continue;let k=Math.min(E,D*.35),A=k/D,j=k/E;for(let e=w;e<=T;e++)for(let r=S;r<=C;r++){let i=e*J+r;if(!o[i]||t[i]<=.02)continue;let a=(Math.hypot(s[i]-f.x,c[i]-f.z)-f.rf)/h;a<-1.5||a>=0||Math.abs(n[i]+t[i]-f.Lw)>.03||(t[i]-=t[i]*A)}for(let e=0;e<u.length;e+=2){let n=u[e],r=u[e+1]*j;t[n]+=r;let o=i[n]*.5*Q(.004,.02,r);i[n]-=o,a[n]+=o*Z.BCAP}}}},hd=class{_net(){let{G:e,W:t,list:n,nAct:r,rcv:i,ord:a,deg:o,zs:s}=this;for(let i=0;i<r;i++){let r=n[i];s[r]=e[r]+t[r],o[r]=0}let c=+!!this.netOK;for(let e=0;e<r;e++){let t=n[e],r=s[t],a=-1,o=1e-7,l=r-s[t-1];l>o&&(o=l,a=t-1),l=r-s[t+1],l>o&&(o=l,a=t+1),l=r-s[t-J],l>o&&(o=l,a=t-J),l=r-s[t+J],l>o&&(o=l,a=t+J),l=(r-s[t-J-1])*.7071,l>o&&(o=l,a=t-J-1),l=(r-s[t-J+1])*.7071,l>o&&(o=l,a=t-J+1),l=(r-s[t+J-1])*.7071,l>o&&(o=l,a=t+J-1),l=(r-s[t+J+1])*.7071,l>o&&(o=l,a=t+J+1);let u=i[t];if(c&&u>=0&&u!==a){let e=u-t;l=r-s[u],e!==1&&e!==-1&&e!==J&&e!==-J&&(l*=.7071),l>1e-7&&o<l*1.4+5e-4&&(a=u)}i[t]=a}let{stamp:l,que:u,fHeap:d,fKey:f}=this,p=u.length,m=this.stampN|0;m>2e9&&(l.fill(0),m=0),m+=3-m%3;let h=m;for(let e=0;e<r;e++){let r=n[e];if(i[r]>=0||t[r]>.03)continue;let a=l[r];if(a>h&&a%3!=0)continue;m+=3;let o=s[r]+.003,c=0,g=0,_=s[r],v=-1,y=r;for(;;){l[y]=m+1,u[g++]=y;for(let e=0;e<8;e++){let t=y+Ku[e],n=s[t],r=l[t];if(r===m||r===m+1||n>90||c>=d.length)continue;r>h&&r%3!=0||(l[t]=m);let i=c++;for(;i>0;){let e=i-1>>1;if(f[e]<=n)break;d[i]=d[e],f[i]=f[e],i=e}d[i]=t,f[i]=n}for(y=-1;c>0&&g<p;){let e=d[0],t=f[0],n=d[--c],r=f[c],a=0;for(;;){let e=a*2+1;if(e>=c||(e+1<c&&f[e+1]<f[e]&&e++,f[e]>=r))break;d[a]=d[e],f[a]=f[e],a=e}if(d[a]=n,f[a]=r,l[e]!==m+1){if(t<_-1e-6){let t=e,n=!1;for(let e=0;e<3e3&&t>=0;e++){if(l[t]===m+1){n=!0;break}t=i[t]}if(!n){v=e;break}}else{if(t>o)break;_=t}y=e;break}}if(y<0)break}if(v<0)continue;let b=0;for(let e=0;e<8;e++){let t=v+Ku[e];l[t]===m+1&&(l[t]=m+2,i[t]=v,u[b++]=t)}for(let e=0;e<b;e++){let t=u[e];for(let e=0;e<8;e++){let n=t+Ku[e];l[n]===m+1&&(l[n]=m+2,i[n]=t,u[b++]=n)}}}this.stampN=m+3;for(let e=0;e<r;e++){let t=i[n[e]];t>=0&&o[t]++}let g=0;for(let e=0;e<r;e++)o[n[e]]===0&&(a[g++]=n[e]);for(let e=0;e<g;e++){let t=i[a[e]];t>=0&&--o[t]===0&&(a[g++]=t)}if(g<r){for(let e=0;e<r&&g<r;e++){let t=n[e];if(o[t]===0)continue;let r=i[t],s=!1;for(let e=0;e<6e3&&r>=0;e++){if(r===t){s=!0;break}r=i[r]}if(!s)continue;let c=i[t];for(i[t]=-1,this.netCuts=(this.netCuts|0)+1;c>=0&&--o[c]===0;)a[g++]=c,c=i[c]}for(let e=0;e<r&&g<r;e++){let t=n[e];o[t]>0&&a.indexOf(t,0)<0&&(i[t]=-1,a[g++]=t)}}this.netOK=!0}_drain(e){let t=Z,{G:n,W:r,Q:i,V:a,T:o,Nu:s,rcv:c,ord:l,fl:u,flux:d,mouths:f,wash:p,seedl:m,nAct:h}=this,g=t.KI*e,_=Math.min(.5,t.KB*e),v=Math.min(1,e/t.Q_TAU),y=1/e,b=Math.max(t.WSHOW,.1*e),x=0;this.adrift>0?(u.set(this.carry),this.carry.fill(0),this.adrift=0):u.fill(0),p.fill(0),m.fill(0);let S=t.RIVER_SEED*e,C=0;for(let e=0;e<h;e++){let h=l[e],w=r[h],T=u[h],E=T,D=p[h],O=w>t.SEA_MIN;if(o[h]>-1){let e=t.SOILCAP*(.6+.8*a[h]),n=i[h];if(w>0&&n<e){let t=e-n;t>w&&(t=w),t>g&&(t=g),w-=t,n+=t}let r=e*t.FC;if(n>r){if(w<t.WSHOW&&o[h]>0){let e=(n-r)*_;n-=e,T+=e}}else if(T>0){let e=r-n;e>T&&(e=T),e>g&&(e=g),T-=e,n+=e}i[h]=n}let k=c[h],A=0;if(k>=0){let e=n[h]+w-n[k]-r[k],c=w+T;if(A=T+(e>0?e*.5:e),A>c&&(A=c),A<0&&(A=0),r[h]=c-A,u[k]+=A,O){if(D>0&&t.NU_RIVER>0){let e=s[h]<1?(1-s[h])/t.NU_RIVER:0;e>D*.5&&(e=D*.5),s[h]+=e*t.NU_RIVER,C+=e,p[k]+=D-e}}else if(A>0){let e=a[h],n=E>0?A<E?A/E*D:D:0;p[k]+=n+(A>E?(A-E)*(.2+.8*e):0);let r=E>0?m[h]/E:0;if(e<.03&&r>.05&&o[h]>2&&d[h]>t.Q_CUT){let n=S*r;n>.03-e&&(n=.03-e),n*t.BCAP>i[h]*.5&&(n=i[h]*.5/t.BCAP),a[h]=e+n,i[h]-=n*t.BCAP}let s=r*.92;m[k]+=A*(e>s?e:s)}}else D>0&&O&&t.NU_RIVER>0&&(C+=this._feed(h,D)),T>b?(r[h]=w,u[h]=T,f[x++]=h):r[h]=w+T;d[h]+=(A*y-d[h])*v}this.fed+=(C*y-this.fed)*Math.min(1,e/2),this.fillK=y*v;for(let e=0;e<x;e++){let t=f[e];this._pour(t,u[t])||this._fill(t,u[t])}}_feed(e,t){let{W:n,Nu:r,act:i}=this,{w:a,R:o,span:s}=this._brush(5),c=e%J,l=e/J|0,u=0,d=0;for(let e=0;e<2;e++){if(e&&u<=0)return 0;let f=e?t*Z.NU_RIVER/u:0;for(let t=-o;t<=o;t++){let p=l+t;if(!(p<1||p>=J-1))for(let l=-o;l<=o;l++){let m=c+l;if(m<1||m>=J-1)continue;let h=p*J+m;if(!i[h]||n[h]<=Z.SEA_MIN)continue;let g=a[(t+o)*s+l+o];if(e){let e=f*g;e>1-r[h]&&(e=1-r[h]),r[h]+=e,d+=e}else u+=g}}}return d/Z.NU_RIVER}_pour(e,t){let{G:n,W:r,act:i}=this;if(r[e]<.012)return!1;let{w:a,R:o,span:s}=this._brush(5),c=e%J,l=e/J|0,u=n[e]+r[e],d=0;for(let e=0;e<2;e++){if(e&&t>d*8e-4)return!1;let f=e?t/d:0;for(let t=-o;t<=o;t++){let p=l+t;if(!(p<1||p>=J-1))for(let l=-o;l<=o;l++){let m=c+l;if(m<1||m>=J-1)continue;let h=p*J+m;if(!i[h]||r[h]<=.001)continue;let g=n[h]+r[h]-u;if(g>.003||g<-.003)continue;let _=a[(t+o)*s+l+o];e?r[h]+=f*_:d+=_}}}return!0}_fill(e,t){let{G:n,W:r,act:i,stamp:a,carry:o}=this,s=this.fHeap,c=this.fKey,l=this.fPool,u=this.fZ,d=l.length,f=this.stampN=(this.stampN|0)+1,p=this.rcv,m=0,h=0,g=n[e]+r[e],_=t,v=-1,y=e,b=g;for(a[e]=f;;){l[h]=y,u[h++]=b;for(let e=0;e<8;e++){let t=y+Ku[e];if(!i[t]||a[t]===f||m>=s.length)continue;a[t]=f;let o=n[t]+r[t],l=m++;for(;l>0;){let e=l-1>>1;if(c[e]<=o)break;s[l]=s[e],c[l]=c[e],l=e}s[l]=t,c[l]=o}if(m===0||h>=d)break;y=s[0];let e=c[0],t=s[--m],o=c[m],x=0;for(;;){let e=x*2+1;if(e>=m||(e+1<m&&c[e+1]<c[e]&&e++,c[e]>=o))break;s[x]=s[e],c[x]=c[e],x=e}if(s[x]=t,c[x]=o,e<g-1e-6){let t=p[y],n=!1;for(let e=0;e<400&&t>=0;e++){if(a[t]===f){n=!0;break}t=p[t]}if(!n){v=y;break}let i=g-e;if(_<=i){r[y]+=_,_=0;break}_-=i,b=e;continue}let S=h*(e-g);if(_<=S)break;_-=S,b=g=e}v>=0?(o[v]+=_,this.adrift+=_):g+=_/h;for(let e=0;e<h;e++)r[l[e]]+=g-u[e]}_carve(e){let t=Z,{H:n,G:r,W:i,B:a,flux:o,rcv:s,ord:c,act:l,fl:u,nAct:d}=this;u.fill(0);let f=X*1.4142,p=t.KS*e;for(let e=0;e<d;e++){let d=c[e],m=o[d]-t.Q_CUT,h=u[d];if(h<=0&&m<=0)continue;let g=s[d];if(g<0||i[d]>.01){if(h>0){let e=g<0?h:h*.3,t=(i[d]-.003)*.5;e>t&&(e=t>0?t:0),n[d]+=e,h-=e,g>=0?u[g]+=h:h>0&&this._silt(d,h)}}else{if(m>0){let e=r[d]-r[g];if(e>0){let r=g-d,i=p*Math.sqrt(m)*(e/(r===1||r===-1||r===J||r===-J?X:f));i*=1-.7*a[d],i>e*.2&&(i=e*.2);let o=n[d]-=i;h+=i;for(let e=0;e<8;e++){let r=d+Ku[e];if(!l[r])continue;let a=n[r]-o-(e<4?t.BANK:t.BANK*1.4142);if(a>0){let e=a<i?a:i;n[r]-=e,h+=e}}}}u[g]+=h}}}_silt(e,t){let{H:n,W:r,act:i}=this,{w:a,R:o,span:s}=this._brush(5),c=e%J,l=e/J|0,u=0;for(let d=0;d<2;d++){if(d&&u<=0){n[e]+=Math.min(t,5e-4);return}let f=d?t/u:0;for(let e=-o;e<=o;e++){let t=l+e;if(!(t<1||t>=J-1))for(let l=-o;l<=o;l++){let p=c+l;if(p<1||p>=J-1)continue;let m=t*J+p;if(!i[m]||r[m]<=.012)continue;let h=a[(e+o)*s+l+o];if(d){let e=f*h,t=(r[m]-.006)*.25;n[m]+=e<t?e:t}else u+=h}}}}_fillPits(e){let{H:t,G:n,W:r,act:i,list:a,nAct:o}=this,s=this.ord,c=this.tmp,l=this.deg,u=0,d=(e,t)=>{let n=u++;for(;n>0;){let e=n-1>>1;if(c[e]<=t)break;s[n]=s[e],c[n]=c[e],n=e}s[n]=e,c[n]=t},f=()=>{let e=s[0],t=s[--u],n=c[u],r=0;for(;;){let e=r*2+1;if(e>=u||(e+1<u&&c[e+1]<c[e]&&e++,c[e]>=n))break;s[r]=s[e],c[r]=c[e],r=e}return s[r]=t,c[r]=n,e},p=-1;for(let e=0;e<o;e++){let t=a[e];l[t]=0,(p<0||n[t]<n[p])&&(p=t)}let m=new Float32Array(Y);for(let e=0;e<o;e++){let t=a[e];r[t]>0&&(m[t]=n[t],l[t]=1,d(t,n[t]))}for(u===0&&(m[p]=n[p],l[p]=1,d(p,n[p]));u>0;){let e=f(),t=m[e];for(let r=0;r<8;r++){let a=e+Ku[r];if(!i[a]||l[a])continue;l[a]=1;let o=t+(r<4?2e-5:28e-6);m[a]=n[a]>o?n[a]:o,d(a,m[a])}}for(let i=0;i<o;i++){let o=a[i],s=m[o]-n[o];s>0&&r[o]<=0&&(t[o]+=s<e?s:e)}this.refreshGround()}_shape(e){let{G:t,W:n,flux:r,rcv:i,ord:a,fl:o,list:s,nAct:c}=this,l=()=>{for(let r=0;r<c;r++){let i=s[r];n[i]=t[i]<e?e-t[i]:0}};l(),this._fillPits(.012);let u=Z.SHAPE_YEARS/30;for(let e=0;e<30;e++){l(),this.netOK=!1,this._net();for(let e=0;e<c;e++)o[s[e]]=n[s[e]]>0?0:Z.SHAPE_RAIN;for(let e=0;e<c;e++){let t=a[e],n=i[t];r[t]=o[t],n>=0&&(o[n]+=o[t])}this._carve(u),e%3==2&&this._thermal(Z.TALUS),this.refreshGround()}l(),this._fillPits(.012),r.fill(0),n.fill(0),this.netOK=!1}},gd=class{_makeRocks(e){let t=Mu(e*131+71),n=this.rocks=[],{H:r,slope:i,coreTop:a}=this;for(let e=0;n.length<560&&e<2e4;e++){let e=t()*6.283,o=.86*Math.sqrt(t()),s=Math.cos(e)*o,c=Math.sin(e)*o,l=this.index(s,c),u=Math.min(1,i[l]/.03+Math.max(0,r[l])/.3);if(t()>.3+.7*u)continue;let d=1+(t()*t()*7|0),f=t()<.12?.04+t()*.03:.014+t()*.022,p=t();for(let e=0;e<d&&n.length<560;e++){let i=e===0?f:f*(.3+.5*t()),o=e===0?0:(f+i)*(.5+t()*.9),l=t()*6.283,u=s+Math.cos(l)*o,d=c+Math.sin(l)*o,m=.62+t()*.3,h=.85+t()*.45,g=.85+t()*.45,_=p<.5?1.3+t()*2.5:p<.8?-.1+t()*.75:-.35-t()*.2,v=t()*6.283,y=(t()-.5)*.7,b=(t()-.5)*.7,x=t()*3|0,S=t();if(u*u+d*d>.8)continue;let C=this.index(u,d),w=r[C]-_*i*m;w-i<a[C]&&(w=a[C]+i+.01),w>r[C]+.5*i*m||n.push({x:u,z:d,i:C,y:w,r:i,sx:h,sy:m,sz:g,yaw:v,tilt:y,roll:b,kind:x,shade:S,melt:0,gone:!1,fresh:!1})}}this.rockWait=0,this._rockMask()}_rockMask(){let{H:e,act:t,rockMask:n}=this;n.fill(0);for(let r of this.rocks){if(r.gone||r.y+r.r*r.sy*.5<e[r.i])continue;let i=Math.max(1,Math.round(r.r*.9/X)),a=r.i%J,o=r.i/J|0;for(let e=-i;e<=i;e++)for(let r=-i;r<=i;r++){if(r*r+e*e>i*i)continue;let s=(o+e)*J+a+r;t[s]&&(n[s]=1)}}}_thrownRocks(e){let{H:t}=this,n=0;for(let r of this.rocks){if(!r.fly)continue;if(r.vy-=1.6*e,r.x+=r.vx*e,r.z+=r.vz*e,r.y+=r.vy*e,r.x*r.x+r.z*r.z>.8){let e=Math.hypot(r.x,r.z);r.x*=.89/e,r.z*=.89/e,r.vx*=-.3,r.vz*=-.3}r.i=this.index(r.x,r.z);let i=t[r.i]+.3*r.r*r.sy;r.y<i&&r.vy<0&&(r.y=i,r.vy*=-.35,r.vx*=.55,r.vz*=.55,Math.abs(r.vy)<.05)?(r.fly=!1,r.vx=r.vz=r.vy=0,r.y=t[r.i]-.2*r.r*r.sy,this.rockWait=0):n++}this.thrown=n}_rocks(e){let{H:t,L:n,B:r,heat:i,act:a}=this,o=this.rng;(this.rockWait-=e)<=0&&(this.rockWait=.5,this._rockMask());for(let s of this.rocks){if(s.fly)continue;let c=s.i;if(s.gone){r[c]>.6&&n[c]<=0&&i[c]<.3&&o()<e*.03&&(s.gone=!1,s.fresh=!0,s.melt=0,s.y=t[c]-(.1+o()*1.5)*s.r*s.sy);continue}let l=.55*s.r*s.sy,u=t[c];s.y-l>u&&(s.y=Math.max(u+l,s.y-.5*e));let d=n[c]>.003&&s.y+l>u-.004;if(d||i[c]>.9){let t=Math.min(1-s.melt,e/(2.5+60*s.r));if(s.melt+=t,d){let e=Math.ceil(s.r/X),r=c%J,i=c/J|0;for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++){if(c*c+o*o>e*e)continue;let l=(i+o)*J+r+c;a[l]&&(n[l]+=t*.45*s.r,this.LT[l]=Math.max(this.LT[l],.8),this._lavaAt(l))}}s.melt>=1&&(s.gone=!0)}else s.melt>0&&(s.r*=1-.85*s.melt*s.melt,s.melt=0,s.r<.006&&(s.gone=!0))}}_crackRocks(e,t,n){let r=this.rng,i=q.lightning,a=0;for(let o of this.rocks){if(o.gone||o.fly||o.r<i.rockMin||Math.hypot(o.x-e,o.z-t)>n+o.r)continue;o.gone=!0,a++;let s=i.rockPieces+(r()*i.rockPiecesMore|0),c=r()*6.283;for(let e=0;e<s;e++){let t=c+e*6.283/s+(r()-.5)*.6;this._dropRock(o.x+Math.cos(t)*o.r*i.pieceSpread,o.z+Math.sin(t)*o.r*i.pieceSpread,o.r*(i.pieceSize+i.pieceSizeMore*r()))}}return a}_dropRock(e,t,n){if(e*e+t*t>.8)return;let r=this.index(e,t);if(!this.act[r])return;let i=this.rocks,a=this.rng,o=i.find(e=>e.gone);if(!o){if(i.length>=590)return;i.push(o={})}let s=.7+a()*.25;Object.assign(o,{x:e,z:t,i:r,y:this.H[r]-.3*n*s,r:n,sx:.9+a()*.3,sy:s,sz:.9+a()*.3,yaw:a()*6.283,tilt:(a()-.5)*.9,roll:(a()-.5)*.9,kind:a()*3|0,shade:.05+.1*a(),melt:0,gone:!1,fresh:!0})}_settle(e,t,n,r,i,a){let o=a??Math.ceil(i*2.4/X)+Math.round(14*Lu),s=this.index(n,r),c=s%J,l=s/J|0,u=Math.max(1,c-o),d=Math.min(J-2,c+o),f=Math.max(1,l-o),p=Math.min(J-2,l+o),{act:m,near:h,rim:g}=this,_=0,v=0;for(let e=f-1;e<=p+1;e++)for(let t=u-1;t<=d+1;t++){let n=e*J+t;m[n]&&(g[v++]=n,e>=f&&e<=p&&t>=u&&t<=d&&(h[_++]=n))}let y=Math.max(1,Math.min(4,Math.round(t*60)));for(let t=0;t<y;t++)this._thermal(e,.11,h,_,g,v);this.refreshGround();for(let e=0;e<3*y;e++)this._flow(h,_,g,v);this._flow(),this._runs(),this._level(Ju[0]),this.netOK=!1}},_d=class{_ignite(e,t=.5){let{V:n,W:r,S:i,T:a,L:o,fire:s,act:c}=this,l=this.oil[e]>q.oil.film||this.soak[e]>.3;return!c[e]||s[e]>0||!l&&(n[e]<q.fire.catchFuel||r[e]>Z.WSHOW||this.char[e]>q.fire.scorchBlock)||i[e]>5e-4||a[e]<q.fire.minTemp||o[e]>0||this.fireList.length>=9e3?!1:(t>=.5&&(this.fireAge=0),this.fireList.length||(this.fireAge=0,this.burntArea=0,this.events.push({type:`fire`,text:`Fire has broken out. It will spread through the plants until it runs out of them, or rain puts it out.`})),s[e]=t,this.fireList.push(e),!0)}_fire(e){let{V:t,Q:n,W:r,S:i,T:a,L:o,fire:s,char:c,act:l,Mavg:u,cx:d,cz:f,windX:p,windZ:m}=this,h=this.rng,g=q.fire,_=this.oil,v=this.soak,y=q.oil.film,b=this.fireList;this.fireAge+=e;let x=e*Ru,S=this._wets(),C=this._colds(),w=this._winds(),T=q.forces,E=g.weatherBase+g.weatherSun*Q(5,30,this.airT)+g.weatherDry*Q(.8,.45,this.rh),D=Math.exp(-this.fireAge/(Z.FIRE_LAST*E*E*E)),O=0;for(let a=0;a<b.length;a++){let k=b[a],A=!1;for(let t of S){let n=d[k]-t.x,r=f[k]-t.z;if(n*n+r*r<t.R2&&h()<e*t.power){A=!0;break}}if(A&&_[k]>y&&(A=!1),!A){for(let t of C)if(Math.hypot(d[k]-t.x,f[k]-t.z)<t.R&&h()<e*t.power*T.coldSnuff){A=!0;break}}let j=_[k]>y||v[k]>.3;if(_[k]>0?_[k]=Math.max(0,_[k]-q.oil.burn*e):v[k]>0&&(v[k]=Math.max(0,v[k]-.3*e)),A||!j&&(r[k]>Z.WSHOW||t[k]<g.spentFuel)||i[k]>5e-4||o[k]>0){s[k]=0,!j&&t[k]<g.spentFuel&&this.burntArea++;continue}let M=Math.min(t[k],(Z.FIRE_BURN+s[k])*x);t[k]-=M,n[k]+=M*Z.BCAP,c[k]=Math.min(1,c[k]+M*g.charRate),s[k]=Math.min(1,s[k]+x*g.flare),b[O++]=k;for(let t of w){let n=id(t,d[k],f[k]);if(!(n<=0||h()>T.embers*n*e)){if(t.kind===`whirl`){let e=h()*6.2832,n=t.R*(.6+h()*1.6);this._ignite(this.index(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n),.5),t.src&&(t.src.aflame=T.whirlFire)}else{let e=T.emberReach*(.4+h()*1.2);this._ignite(this.index(d[k]+id.x*e,f[k]+id.z*e),.5)}}}if(h()<Z.FIRE_THROW*x){let e=h()*6.2832,n=g.throwNear+h()*g.throwMore,r=Math.cos(e),i=Math.sin(e),a=r*p+i*m;if(a<0&&h()>g.upwind+.55*(1+a))continue;let o=k+Math.round(i*n)*J+Math.round(r*n),c=_[o]>y||v[o]>.3;if(o<0||o>=Y||s[o]>0||!l[o]||t[o]<g.spreadFuel&&!c)continue;let d=g.damp+(1-g.damp)*Q(.75,.35,u[o]);h()<(c?q.oil.catch:Z.FIRE_TAKE*D*(.5+.5*t[o])*d*E)*(1+g.windPush*Math.max(0,a))&&this._ignite(o,g.spreadStrength)}}b.length=O,!O&&this.fireAge>2&&this.events.push({type:`fireout`,text:this.burntArea>1500?`The fire has burnt itself out. A great scar of black ground is left behind.`:`The fire has gone out.`})}},vd=class{_lava(e){let{L:t,LT:n,G:r,H:i,W:a,S:o,V:s,Q:c,B:l,act:u,tmp:d,lavaIn:f,lavaHeat:p}=this,m=Z,h=q.lava,g=Math.min(.5*Ru,e*h.flowRate*Lu),_=this.steam,v=this.lavaBox;if(!v){this.lavaAny=!1;return}let y=Math.max(1,v.x0-1),b=Math.min(J-2,v.x1+1),x=Math.max(1,v.z0-1),S=Math.min(J-2,v.z1+1),C=J,w=-1,T=J,E=-1;for(let e=x-1;e<=S+1;e++){let t=e*J+y-1,n=e*J+b+2;d.fill(0,t,n),f.fill(0,t,n),p.fill(0,t,n)}let D=!1;for(let v=x;v<=S;v++)for(let x=y;x<=b;x++){let y=v*J+x,b=t[y];if(b<=0||!u[y])continue;if(D=!0,x<C&&(C=x),x>w&&(w=x),v<T&&(T=v),v>E&&(E=v),s[y]>0){let t=Math.min(s[y],h.burnPlants*e);s[y]-=t,c[y]+=t*m.BCAP}if(o[y]>0){let t=Math.min(o[y],h.meltSnow*e);o[y]-=t,a[y]+=t}let S=1;if(a[y]>0){let t=Math.min(a[y],h.boilWater*e);a[y]-=t,this.vap+=t,S=h.waterCool,_.length<14&&this.rng()<.3&&_.push(y)}let O=(t[y-1]>0)+(t[y+1]>0)+(t[y-J]>0)+(t[y+J]>0),k=n[y]-e*m.LAVA_COOL*(1+h.edgeCool*(1-O/4))*S/(.6+.4*this.lavaStiff);k<0&&(k=0),n[y]=k;let A=e*(h.setHot+h.setCrusted*Q(.35,.05,k))*S;if(A>b&&(A=b),b-=A,i[y]+=A,l[y]=1,t[y]=b,k>h.fireHeat&&b>.003&&this.rng()<e*h.fireChance){let e=y+Ku[this.rng()*8|0];u[e]&&t[e]<=0&&s[e]>.3&&this._ignite(e,.4)}if(b<h.skin||k<h.stopHeat)continue;let j=r[y]+b,M=u[y-1]?j-r[y-1]-t[y-1]:0,N=u[y+1]?j-r[y+1]-t[y+1]:0,P=u[y-J]?j-r[y-J]-t[y-J]:0,F=u[y+J]?j-r[y+J]-t[y+J]:0,I=m.LAVA_YIELD*this.lavaStiff/b/Ru;M-=I,N-=I,P-=I,F-=I,M<0&&(M=0),N<0&&(N=0),P<0&&(P=0),F<0&&(F=0);let L=M>N?M:N;if(P>L&&(L=P),F>L&&(L=F),L<=0)continue;let R=h.skin;M*=M,N*=N,P*=P,F*=F;let ee=M+N+P+F,te=Math.min(b-R,L*.5)*g*Q(.1,.4,k);if(te<=0)continue;let ne=te/ee;d[y]-=te;let re=M*ne,ie=N*ne,z=P*ne,ae=F*ne;d[y-1]+=re,f[y-1]+=re,p[y-1]+=re*k,d[y+1]+=ie,f[y+1]+=ie,p[y+1]+=ie*k,d[y-J]+=z,f[y-J]+=z,p[y-J]+=z*k,d[y+J]+=ae,f[y+J]+=ae,p[y+J]+=ae*k}if(D){for(let e=x-1;e<=S+1;e++)for(let r=e*J+y-1,i=e*J+b+1;r<=i;r++){if(d[r]===0)continue;let e=t[r]+(d[r]-f[r]);t[r]+=d[r],t[r]<0&&(t[r]=0),f[r]>0&&t[r]>0&&(n[r]=(Math.max(0,e)*n[r]+p[r])/t[r])}this.refreshGround(),this.lavaBox={x0:C-1,x1:w+1,z0:T-1,z1:E+1}}else this.lavaBox=null;this.lavaAny=D}_lavaAt(e){let t=e%J,n=e/J|0,r=this.lavaBox;r?(t<r.x0&&(r.x0=t),t>r.x1&&(r.x1=t),n<r.z0&&(r.z0=n),n>r.z1&&(r.z1=n)):this.lavaBox={x0:t,x1:t,z0:n,z1:n},this.lavaAny=!0}_erupt(e,t){let n=this.cx[e],r=this.cz[e];for(let e of this.eruptions)if((e.x-n)**2+(e.z-r)**2<.006){e.t<5&&(e.t=5);return}let i=null,a=.07*.07;for(let e of this.volcanoes){let t=(e.x-n)**2+(e.z-r)**2;t<a&&(a=t,i=e)}let o=!!i;i||this.volcanoes.push(i={x:n,z:r,i:e,n:0});let s=Uu(i.n);i.n++;let c=Uu(i.n);({x:n,z:r,i:e}=i);let l=Hu[c],u={i:e,x:n,z:r,t:l.last+this.rng()*6,age:0,vo:i,level:c,settle:0,bombs:0,boulders:0};this._coneRing(u),this.eruptions.push(u),c>s&&o?this.events.push({type:`volcano`,text:{2:`The vent has built itself a cone. It throws glowing bombs that can set the forest alight.`,3:`It has grown into a real volcano. Its lava is thicker now and piles up deep.`,4:`It has become a great volcano. It flings hot boulders right across the globe.`}[c]}):t||this.events.push({type:`eruption`,text:o?`The ${l.name} is waking up (eruption ${i.n}). The ground swells first, then the lava comes.`:`The ground is swelling. A vent will open here: first lava, then glowing bombs. Each eruption makes it bigger.`})}_coneRing(e){let{cx:t,cz:n,act:r}=this,i=e.vo.n,a=q.volcano.craterBase+q.volcano.craterGrow*Math.sqrt(i),o=a*1.7,s=a*.9,c=o+3*s,l=Math.ceil(c/X),u=e.i%J,d=e.i/J|0,f=[],p=[],m=[],h=[],g=[],_=0;for(let i=-l;i<=l;i++)for(let v=-l;v<=l;v++){let l=u+v,y=d+i;if(l<1||l>=J-1||y<1||y>=J-1)continue;let b=y*J+l;if(!r[b])continue;let x=Math.hypot(t[b]-e.x,n[b]-e.z);if(!(x>c)){if(x<a)m.push(b),h.push(x/a);else{let e=Math.exp(-(((x-o)/s)**2));f.push(b),p.push(e),_+=e}Math.abs(x-a*1.2)<X*.75&&g.push(b)}}for(let e=0;e<p.length;e++)p[e]/=_;Object.assign(e,{rc:a,rb:o,reach:c,cells:f,wts:p,crater:m,craterD:h,rim:g})}_cone(e,t,n,r,i){let{H:a,L:o}=this,{cells:s,wts:c,crater:l,craterD:u,rim:d,rc:f}=e,p=q.volcano;if(t<=0&&n<=0)return;let m=p.tephra*t*i*Ru*Ru;if(d.length){let e=0;for(let t of d)e+=a[t];e/=d.length;let t=e-p.craterDeep*f;for(let e=0;e<l.length;e++){let n=l[e],r=u[e],o=t+p.craterDeep*f*Math.max(0,(r-.25)/.75);if(a[n]>o){let e=Math.min(a[n]-o,.5*i+.002);a[n]-=e,m+=e}}}for(let e=0;e<s.length;e++)a[s[e]]+=m*c[e];for(e.settle+=i,e.settle>=.1&&(this._settle(Z.TALUS*p.repose,e.settle,e.x,e.z,e.reach,Math.ceil(e.reach/X)+3),e.settle=0),e.bombs+=i*p.bombRate*n;e.bombs>=1;)--e.bombs,this._bomb(e,Math.max(t,.5));for(e.boulders+=i*r;e.boulders>=1;)--e.boulders,this._bomb(e,1,!0)}_openCrater(e){let{H:t,L:n}=this,{crater:r,craterD:i,rim:a,rc:o,cells:s,wts:c}=e;if(!a.length)return;let l=0;for(let e of a)l+=t[e];l/=a.length;let u=q.volcano.craterDeep,d=l-u*o,f=0;for(let t of s)Math.hypot(this.cx[t]-e.x,this.cz[t]-e.z)<.05&&(n[t]=0);for(let e=0;e<r.length;e++){let a=r[e];n[a]=0;let s=d+u*o*Math.max(0,(i[e]-.25)/.75);t[a]>s&&(f+=t[a]-s,t[a]=s)}for(let e=0;e<s.length;e++)t[s[e]]+=f*c[e];this.refreshGround(),this.netOK=!1}_bomb(e,t,n=!1){if(this.bombs.length>=80)return;let r=this.rng,i=r()*6.283,a=Hu[e.level],o=q.volcano,s=n?o.boulderNear+o.boulderFar*r():(e.rb*1.4+r()**.7*o.bombReach*(.6+.4*t))*a.reach,c=n?1.9+.8*r():.9+.7*r(),l=this.H[e.i]+this.L[e.i]+.01;this.bombs.push({x:e.x,y:l,z:e.z,vx:Math.cos(i)*s/c,vz:Math.sin(i)*s/c,vy:Bu*c/2+.05,r:n?.012+.01*r():.003+.005*r(),t:0,big:n})}_bombsFly(e){let{H:t,G:n,W:r,V:i,Q:a,heat:o,act:s}=this,c=this.rng,l=q.volcano;for(let t=this.bombs.length-1;t>=0;t--){let u=this.bombs[t];if(u.vy-=Bu*e,u.x+=u.vx*e,u.y+=u.vy*e,u.z+=u.vz*e,u.t+=e,u.x*u.x+u.z*u.z>.93||u.t>6){this.bombs.splice(t,1);continue}let d=this.index(u.x,u.z),f=n[d]+Math.max(0,r[d]);if(u.y>f)continue;this.bombs.splice(t,1);let p=s[d]&&r[d]>Z.WSHOW;if(this.bombHits.length>60&&this.bombHits.shift(),this.bombHits.push({x:u.x,y:f,z:u.z,wet:p,r:u.r,big:!!u.big}),s[d]){if(u.big)this._boulderHit(u,d,p);else if(p)this.vap+=2e-4;else{o[d]<.9&&(o[d]=.9),this.hot=!0;for(let e of[0,-1,1,-J,J]){let t=d+e;if(!s[t])continue;let n=i[t]*l.bombScorch;i[t]-=n,a[t]+=n*Z.BCAP,this.char[t]=Math.min(1,this.char[t]+n)}i[d+2]>.25&&c()<l.bombFire&&this._ignite(d+2,.55),c()<l.bombRock&&this._dropRock(u.x,u.z,u.r*l.bombRockSize)}}}}_boulderHit(e,t,n){let{H:r,V:i,Q:a,heat:o,act:s,cx:c,cz:l}=this,u=q.volcano,d=e.r*u.boulderCrater,f=e.r*u.boulderDepth;if(this.rumble=Math.max(this.rumble,u.boulderRumble),n){this.vap+=.002;return}let p=Math.ceil(d*2.2/X),m=t%J,h=t/J|0;for(let t=-p;t<=p;t++)for(let n=-p;n<=p;n++){let p=m+n,g=h+t;if(p<1||p>=J-1||g<1||g>=J-1)continue;let _=g*J+p;if(!s[_])continue;let v=Math.hypot(c[_]-e.x,l[_]-e.z)/d;if(v>2.2)continue;r[_]+=v<1?-f*(1-v*v):f*.35*Math.exp(-((v-1.15)**2)/.12),v<1.3&&o[_]<1&&(o[_]=1);let y=i[_]*Math.min(1,1.2*Math.exp(-(v*v)/2));i[_]-=y,a[_]+=y*Z.BCAP,this.char[_]=Math.min(1,this.char[_]+y),v>1.1&&v<2.1&&i[_]>.25&&this.rng()<u.boulderFire&&this._ignite(_,.55)}this.hot=!0,this._settle(Z.TALUS*1.5,.05,e.x,e.z,d,p+3),this._dropRock(e.x,e.z,e.r*.8)}_startEruption(){let e=this.volcanoes;if(e.length&&this.rng()<.75){let t=0;for(let n of e)t+=n.n;let n=this.rng()*t;for(let t of e)if(!((n-=t.n)>0)){if(this.W[t.i]>Z.WSHOW)break;this.plume={x:t.x,z:t.z,t:6},this.events.push({type:`eruption`,text:t.n>1?`The old volcano is stirring again.`:`The volcano is stirring again.`});return}}for(let e=0;e<40;e++){let e=this.list[this.rng()*this.nAct|0];if(!(Math.hypot(this.cx[e],this.cz[e])>.7||this.W[e]>Z.WSHOW)){this.plume={x:this.cx[e],z:this.cz[e],t:6},this.events.push({type:`eruption`,text:`The core is stirring. An eruption has begun.`});return}}}volcanoAt(e,t){let n=this.index(e,t);if(!this.act[n])return!1;for(let n of this.eruptions)if((n.x-e)**2+(n.z-t)**2<.07*.07)return n.t<5&&(n.t=5),!0;return this.heat[n]<1.2&&(this.heat[n]=1.2),this.hot=!0,this._erupt(n,!1),!0}},yd=class{_storms(e){let t=this.clouds,n=this.rng;if(this.boltNotes)for(let t in this.boltNotes)this.boltNotes[t]-=e;let r=0;for(let e of t)e.storm&&r++;let i=Q(12,26,this.airT),a=Q(.5,.75,this.rh),o=Z.STORM_RATE*i*a*(.25+.75*this.daylight);if(r<2&&!this.quiet&&n()<o*e){let e=-1,t=-1;for(let r=0;r<10;r++){let r=this.list[n()*this.nAct|0];if(Math.hypot(this.cx[r],this.cz[r])>.65||this.W[r]>Z.WSHOW)continue;let i=this.H[r]*3+this.rainK[r]*.4+n()*.2;i>t&&(t=i,e=r)}e>=0&&this.stormAt(this.cx[e],this.cz[e],!0)}for(let r of t)if(!(!r.storm||r.grow<.6))for(r.zap+=e*Z.ZAP*r.grow*(.5+n()),n()<q.tornado.fromStorm*e&&this.tornadoAt(r.x,r.z,.7+n()*.6,!0);r.zap>=1;)--r.zap,this._strike(r)}stormAt(e,t,n=!1){let r=this.rng;this.clouds.push({id:this._cid=(this._cid||0)+1,x:e,z:t,v:.015+r()*.015,drift:(r()-.5)*.01,ang:this.wind,age:0,life:q.lightning.stormLife+r()*q.lightning.stormLifeMore,ph:r()*6.283,k:.3,seed:r(),lead:0,off:0,rx:e,rz:t,ri:this.index(e,t),share:0,fade:0,power:0,rain:0,snow:!1,hold:0,storm:!0,grow:0,zap:0}),this.events.push({type:`storm`,text:n?`A thunderstorm is building over the high ground.`:`A thunderstorm is building.`})}_strike(e){let{H:t,W:n,V:r,act:i,rng:a}=this,o=-1,s=-9,c=0,l=0;for(let u=0;u<5;u++){let u=a()*6.283,d=Math.sqrt(a())*q.lightning.strikeReach,f=e.x+Math.cos(u)*d,p=e.z+Math.sin(u)*d;if(f*f+p*p>.85)continue;let m=this.index(f,p);if(!i[m])continue;let h=t[m]+(r[m]>.3?q.lightning.treeHeight:0)+Math.max(0,n[m]);h>s&&(s=h,o=m,c=f,l=p)}o>=0&&this._bolt(c,l,e.x,e.z,!1)}lightningAt(e,t){if(e*e+t*t>.85||!this.act[this.index(e,t)])return!1;let n=this.rng;return this._bolt(e,t,e+(n()-.5)*.06,t+(n()-.5)*.06,!0),!0}_bolt(e,t,n,r,i){let{W:a,V:o,Mavg:s,act:c,heat:l,rng:u}=this,d=q.lightning,f=this.index(e,t);if(!c[f])return;let p=a[f]>Z.WSHOW;if(this.bolts.length>12&&this.bolts.shift(),this.bolts.push({x:e,z:t,y:this.G[f]+Math.max(0,a[f]),cx:n,cz:r,wet:p}),this.rumble=Math.max(this.rumble,i?d.rumbleTool:d.rumbleStorm),p){let n=this.fauna.lightning(e,t,i?d.fishKillTool:d.fishKillStorm);if(this.vap+=3e-4,n&&this._boltNote(`fish`,`Lightning has struck the water. Stunned fish float up to the surface.`),this.oil[f]>q.oil.film){for(let e of[0,1,-1,J,-J])this._ignite(f+e,.6);this.fireList.length&&this._boltNote(`oil`,`Lightning has set the oil slick alight. The lake is burning.`)}return}this.fauna.strike(e,t,d.scare,!1);let m=Q(.6,.3,s[f]);if((o[f]>(i?d.toolFuel:d.stormFuel)||this.oil[f]>q.oil.film||this.soak[f]>.3)&&u()<(i?d.toolFire+d.toolFireDry*m:d.stormFire+d.stormFireDry*m)){let e=this.fireList.length;for(let e of[0,1,-1,J,-J])this._ignite(f+e,d.igniteStrength);!e&&this.fireList.length&&this._boltNote(`fire`,`Lightning has struck the forest and started a fire.`)}this._crackRocks(e,t,d.rockReach)&&this._boltNote(`rock`,`Lightning has split a boulder.`),this._scorchMark(f,i?d.scorchTool:d.scorchStorm),l[f]<d.glow&&(l[f]=d.glow),this.hot=!0}_boltNote(e,t,n=8){let r=this.boltNotes||={};(r[e]||0)>0||(r[e]=n,this.events.push({type:`lightning-`+e,text:t}))}_scorchMark(e,t){let{V:n,Q:r,char:i,act:a,rng:o}=this,s=q.lightning,c=(e,t)=>{if(e<0||e>=Y||!a[e])return;t>i[e]&&(i[e]=t);let o=n[e]*s.scorchBurn*t;n[e]-=o,r[e]+=o*Z.BCAP};for(let t of[0,1,-1,J,-J])c(e+t,1);let l=s.scorchRays+(o()*s.scorchRaysMore|0);for(let n=0;n<l;n++){let r=(n+o()*.7)*(6.283/l),i=e%J,a=e/J|0,u=(s.scorchLen+o()*s.scorchLenMore)*t*Ru;for(let e=1;e<=u;e++)r+=(o()-.5)*.9,i+=Math.cos(r),a+=Math.sin(r),c(Math.round(a)*J+Math.round(i),.95-.45*e/u)}}hurricaneAt(){if(this.hurricane)return!1;let e=q.hurricane,t=this.vap*e.wring;return this.vap-=t,this.storm+=t,this.stormRate=this.storm/e.seconds,this.hurricane={t:0,life:e.seconds,power:0,spin:this.rng()*6.283,zap:0,tick:0},this.events.push({type:`hurricane`,text:`A hurricane is winding up to fill the dome. Rain will fall on everything, the wind will strip the land, and only the eye in the middle will be calm.`}),!0}_hurricane(e){let t=this.hurricane,n=q.hurricane,r=this.rng,i=this.W;if(t.t+=e,t.t>=t.life){this.hurricane=null,this.events.push({type:`hurricane-out`,text:`The hurricane has blown itself out.`});return}let a=t.power=Math.max(0,Math.min(1,t.t/5,(t.life-t.t)/6));if(t.swell=(t.swell||0)+e*a,t.swell>3.5&&n.surge>0&&this.waves.length<3){t.swell=0;let e=this.index(this.basin.x,this.basin.z);i[e]>.02&&this.waves.push({x:this.basin.x,z:this.basin.z,R:.06,t:0,rf:.066,A:n.surge*a,lam:.09,Lw:this.G[e]+i[e]})}for(t.zap+=e*n.bolts*a;t.zap>=1;){--t.zap;let e=r()*6.283,i=n.eye+r()*(.85-n.eye);this._bolt(Math.cos(e)*i,Math.sin(e)*i,Math.cos(e)*i,Math.sin(e)*i,!1)}this.rumble=Math.max(this.rumble,.05*a)}tornadoAt(e,t,n=1,r=!1){if(this.twisters.length>=2||e*e+t*t>.8)return!1;let i=q.tornado,a=this.rng;return this.twisters.push({x:e,z:t,r:i.radius*Math.sqrt(n),size:n,t:0,life:i.life+a()*i.lifeMore,ang:Math.atan2(this.windZ,this.windX)+(a()-.5),ph:a()*6.283,power:0}),this.events.push({type:`tornado`,text:r?`The thunderstorm has put down a tornado.`:`A tornado has touched down. It goes with the wind, ripping up what it crosses.`}),!0}_twisters(e){let t=this.rng,n=q.tornado;for(let r=this.twisters.length-1;r>=0;r--){let i=this.twisters[r];i.t+=e;let a=Math.atan2(this.windZ,this.windX)-i.ang;if(a-=Math.round(a/6.283185)*6.283185,i.ang+=(a*.6+Math.sin(i.t*.9+i.ph)*n.wander)*e,i.x+=Math.cos(i.ang)*n.speed*e,i.z+=Math.sin(i.ang)*n.speed*e,i.t>=i.life||i.x*i.x+i.z*i.z>.8){this.twisters.splice(r,1),this.events.push({type:`tornado-out`,text:`The tornado has blown itself out.`});continue}let o=i.power=Math.max(0,Math.min(1,i.t/1.5,(i.life-i.t)/2.5)),s=i.r*(.5+.5*o);if(i.aflame>0&&(i.aflame-=e,t()<q.forces.embers*2*o*e)){let e=t()*6.283,n=s*(.8+t()*2.6);this._ignite(this.index(i.x+Math.cos(e)*n,i.z+Math.sin(e)*n),.55)}this.rumble=Math.max(this.rumble,.04*o)}}},bd=class{nukeAt(e,t,n=1){if(this.nukes.length>=3||e*e+t*t>.81)return!1;let r=this.index(e,t);if(!this.act[r])return!1;let i=Math.min(3.2,Math.max(.35,n)),a=Math.sqrt(Math.max(.05,.93-e*e-t*t));return this.nukes.push({x:e,z:t,top:a,y0:this.G[r]+Math.max(0,this.W[r]),k:i,t:0}),!0}_nukes(e){for(let t=this.nukes.length-1;t>=0;t--){let n=this.nukes[t];n.t+=e,n.t>=2.2&&(this.nukes.splice(t,1),n.anti?this._annihilate(n):this._detonate(n))}for(let t=this.blasts.length-1;t>=0;t--){let n=this.blasts[t],r=n.t;n.t+=e;let i=n.Rb*1.6,a=Math.min(i,ed(r,n.k)),o=Math.min(i,ed(n.t,n.k));if(o>a&&this._shockRing(n,a,o),n.t>2&&n.t<q.nuke.cloudTime){n.cx+=this.windX*q.nuke.cloudDrift*e,n.cz+=this.windZ*q.nuke.cloudDrift*e;let t=Math.hypot(n.cx,n.cz);t>.8&&(n.cx*=.8/t,n.cz*=.8/t),n.fallClock+=e,n.fallClock>.25&&(this._fallout(n,n.fallClock),n.fallClock=0)}!n.told1&&n.t>7&&(n.told1=!0,this.events.push({type:`nuke`,text:`Fallout is drifting downwind from the cloud and settling on the land. Plants there will struggle, and animals breed less, for decades.`})),!n.told2&&n.t>18&&this.dust>.12&&(n.told2=!0,this.events.push({type:`nuke`,text:`Dust has spread across the top of the glass and is dimming the sun. A nuclear winter is setting in: it will be colder for a few years.`})),n.t>60&&this.blasts.splice(t,1)}}_detonate(e){let{H:t,W:n,S:r,V:i,Q:a,heat:o,act:s,cx:c,cz:l,char:u,glassy:d,fall:f,rocks:p}=this,{x:m,z:h,k:g}=e,{Rc:_,Rf:v,Rb:y,Rh:b}=Qu(g),x=this.rng,S=q.nuke,C=this.index(m,h),w=s[C]&&n[C]>Z.WSHOW,T=this.G[C]+n[C],E=C%J,D=C/J|0,O=(e,t)=>{let n=Math.ceil(e/X);for(let r=-n;r<=n;r++){let i=D+r;if(!(i<1||i>=J-1))for(let r=-n;r<=n;r++){let n=E+r;if(n<1||n>=J-1)continue;let a=i*J+n;if(!s[a])continue;let o=Math.hypot(c[a]-m,l[a]-h);o<=e&&t(a,o)}}},k=S.craterDepth*_,A=0,j=0;for(let e=0;e<6.283;e+=.2){let n=this.index(m+Math.cos(e)*_,h+Math.sin(e)*_);s[n]&&(A+=t[n],j++)}let M=j?Math.min(t[C],A/j):t[C],N=0,P=0,F=[];if(O(_*2.8,(e,n)=>{let r=n/_;if(r<1){let n=1-r*r,i=Math.max(-.8,t[e]-3*k*Math.sqrt(n),Math.min(t[e]-.3*k*n,M-k*n));N+=t[e]-i,t[e]=i}else{let t=S.rim*Math.exp(-((r-1.1)**2)/.06)+.05*Math.exp(-(r-1.25)/.5);F.push(e,t),P+=t}d[e]=Math.max(d[e],S.glass*Q(1.15,.6,r))}),P>0){let e=S.thrownOut*N/P;for(let n=0;n<F.length;n+=2)t[F[n]]+=e*F[n+1]}let I=0,L=this.wtot*.03;O(b,(e,t)=>{let s=Q(b,v,t);if(t<v){if(a[e]+=i[e]*Z.BCAP,i[e]=0,u[e]=1,o[e]=Math.max(o[e],1.15*(1-t/v*.75)),n[e]+=r[e],r[e]=0,n[e]>0&&I<L){let t=Math.min(L-I,n[e]*S.boil);n[e]-=t,I+=t}return}let c=r[e]*s;r[e]-=c,n[e]+=c;let l=i[e]*S.scorch*s;i[e]-=l,a[e]+=l*Z.BCAP,!(e%J+(e/J|0)&1)&&x()<S.fireEdge+S.fireMore*s&&this._ignite(e,.75)||(u[e]=Math.max(u[e],.25*s))}),this.vap+=I,this.hot=!0,O(y*1.3,(e,t)=>{f[e]=Math.min(1,f[e]+S.fallout*Math.sqrt(g)*Math.exp(-(t*t)/(.5*y*y)))}),this.dust=Math.min(1.5,this.dust+S.dust*g);for(let e of p)!e.gone&&Math.hypot(e.x-m,e.z-h)<_*1.2&&(e.gone=!0);this.rockWait=0;let R=this.fauna.nuke(m,h,v,y,b);this._gust(m,h,y*1.6,1.5),w&&this.waves.push({x:m,z:h,R:_,t:0,rf:_*1.1,A:Math.min(.06,.4*_),lam:Math.max(.05,_*1.2),Lw:T}),this._settle(Z.TALUS*2,.07,m,h,_),this.shock=.55,this.rumble=Math.max(this.rumble,S.rumble),this.blasts.push({x:m,z:h,y:this.G[C]+Math.max(0,n[C]),k:g,t:0,cx:m,cz:h,fallClock:0,Rc:_,Rf:v,Rb:y,Rh:b,wet:w,dead:R});let ee=g<.8?`A small nuclear bomb has gone off`:g<1.8?`A nuclear bomb has gone off`:`A huge nuclear bomb has gone off`;this.events.push({type:`nuke`,text:`${ee}. The flash sets the land alight, the blast flattens the forest round it, and a mushroom cloud climbs to the top of the glass.`})}_shockRing(e,t,n){let{V:r,Q:i,act:a,cx:o,cz:s,rocks:c}=this,l=this.index(e.x,e.z),u=l%J,d=l/J|0,f=Math.ceil(n/X);for(let c=-f;c<=f;c++){let l=d+c;if(!(l<1||l>=J-1))for(let c=-f;c<=f;c++){let d=u+c;if(d<1||d>=J-1)continue;let f=l*J+d;if(!a[f]||r[f]<=0)continue;let p=Math.hypot(o[f]-e.x,s[f]-e.z);if(p<t||p>=n)continue;let m=p<e.Rb*.5?1:Q(e.Rb*1.6,e.Rb*.5,p),h=r[f]*m*q.nuke.flatten;r[f]-=h,i[f]+=h*Z.BCAP}}let p=this.rng;for(let r of c){if(r.gone||r.fly)continue;let i=Math.hypot(r.x-e.x,r.z-e.z);if(i<t||i>=n||i>e.Rb)continue;let a=(r.x-e.x)/(i||1),o=(r.z-e.z)/(i||1),s=q.nuke.rockThrow*(1-i/e.Rb)*(.7+.6*p())*Math.min(1,.02/r.r);r.fly=!0,this.thrown++,r.vx=a*s,r.vz=o*s,r.vy=s*(.5+.5*p())}}_fallout(e,t){let{fall:n,act:r,cx:i,cz:a}=this,o=(.05+.0035*e.t)*e.k**.3,s=q.nuke.falloutRate*e.k*Math.exp(-e.t/q.nuke.falloutFade)*t,c=this.index(e.cx,e.cz),l=c%J,u=c/J|0,d=Math.ceil(2.5*o/X),f=2*o*o;for(let t=-d;t<=d;t++){let o=u+t;if(!(o<1||o>=J-1))for(let t=-d;t<=d;t++){let c=l+t;if(c<1||c>=J-1)continue;let u=o*J+c;if(!r[u])continue;let d=i[u]-e.cx,p=a[u]-e.cz,m=s*Math.exp(-(d*d+p*p)/f);m>1e-4&&(n[u]=Math.min(1,n[u]+m))}}}holeAt(e,t,n=1){if(this.holes.length>=2||e*e+t*t>.8)return!1;let r=this.index(e,t);if(!this.act[r])return!1;let i=q.hole;return this.holes.push({x:e,z:t,y:this.G[r]+Math.max(0,this.W[r])+.02,R:i.radius*Math.sqrt(n),size:n,t:0,life:i.seconds,ate:0}),this.events.push({type:`hole`,text:`A mini black hole has dropped into the globe. It is pulling in the ground, the water and everything near it.`}),!0}_holes(e){let{H:t,W:n,S:r,V:i,Q:a,L:o,act:s,cx:c,cz:l,rocks:u}=this,d=q.hole;for(let a=this.holes.length-1;a>=0;a--){let u=this.holes[a];u.t+=e;let f=this.index(u.x,u.z);if(u.t>=u.life){this.holes.splice(a,1),this.vap+=u.ate,this.voids.length>3&&this.voids.shift(),this.voids.push({x:u.x,y:u.y,z:u.z,R:.03*Math.sqrt(u.size),t:0,flash:!0}),this.shock=.55,this.rumble=Math.max(this.rumble,.6),this.refreshGround(),this.netOK=!1,this.rockWait=0,this.events.push({type:`hole-out`,text:`The black hole has evaporated in a flash. It has left a deep pit where it fed.`});continue}let p=Math.min(1,u.t/1.2),m=f%J,h=f/J|0,g=Math.ceil(u.R/X);for(let a=-g;a<=g;a++){let f=h+a;if(!(f<1||f>=J-1))for(let a=-g;a<=g;a++){let h=m+a;if(h<1||h>=J-1)continue;let g=f*J+h;if(!s[g])continue;let _=Math.hypot(c[g]-u.x,l[g]-u.z)/u.R;if(_>=1)continue;let v=(1-_)*(1-_)*p;t[g]=Math.max(-.8,t[g]-d.dig*u.size*v*(1-_)*e);let y=(n[g]+r[g])*Math.min(1,d.suck*v*e),b=n[g]+r[g]>0?y/(n[g]+r[g]):0;n[g]-=n[g]*b,r[g]-=r[g]*b;let x=i[g]*Math.min(1,d.strip*v*e);i[g]-=x,u.ate+=y+x*Z.BCAP,o[g]>0&&(o[g]*=1-Math.min(1,d.suck*v*e)),this.oil[g]>0&&(this.oil[g]*=1-Math.min(1,d.suck*v*e))}}this.rumble=Math.max(this.rumble,d.rumble*p),this.hot=!0}}showerAt(e,t,n=1,r=!1){if(this.showers.length>=2||e*e+t*t>.9)return!1;let i=q.shower,a=Math.max(1,Math.round(i.count*n));return this.showers.push({x:e,z:t,R:i.spread*Math.sqrt(n),left:a,clock:0,gap:i.seconds/a}),this.events.push({type:`shower`,text:r?`A meteor shower is coming down on the globe.`:`A meteor shower is on its way.`}),!0}_showers(e){let t=this.rng,n=q.shower;for(let r=this.showers.length-1;r>=0;r--){let i=this.showers[r];for(i.clock+=e;i.left>0&&i.clock>=i.gap;){i.clock-=i.gap,i.left--;let e=t()*6.283,r=Math.sqrt(t())*i.R;this.launch(i.x+Math.cos(e)*r,i.z+Math.sin(e)*r,n.sizeMin+t()*n.sizeMore,n.speedMin+t()*n.speedMore,!0)}i.left<=0&&this.showers.splice(r,1)}}antimatterAt(e,t,n=1){if(this.nukes.length>=3||e*e+t*t>.81)return!1;let r=this.index(e,t);if(!this.act[r])return!1;let i=Math.min(3.2,Math.max(.35,n)),a=Math.sqrt(Math.max(.05,.93-e*e-t*t));return this.nukes.push({x:e,z:t,top:a,y0:this.G[r]+Math.max(0,this.W[r]),k:i,t:0,anti:!0}),!0}_annihilate(e){let{H:t,W:n,S:r,V:i,L:a,heat:o,fire:s,char:c,act:l,cx:u,cz:d,rocks:f}=this,p=q.antimatter,{x:m,z:h,k:g}=e,_=$u(g),v=this.index(m,h),y=v%J,b=v/J|0,x=Math.ceil(_/X),S=t[v]+_*p.lift,C=0;for(let e=-x;e<=x;e++){let f=b+e;if(!(f<1||f>=J-1))for(let e=-x;e<=x;e++){let p=y+e;if(p<1||p>=J-1)continue;let g=f*J+p;if(!l[g])continue;let v=(u[g]-m)**2+(d[g]-h)**2;if(v>=_*_)continue;let b=S-Math.sqrt(_*_-v);t[g]<=b&&t[g]+n[g]+r[g]<=b||(t[g]>b&&(t[g]=Math.max(-.8,b)),C+=n[g]+r[g]+i[g]*Z.BCAP,n[g]=r[g]=i[g]=a[g]=o[g]=s[g]=c[g]=0)}}this.vap+=C;for(let e of f)!e.gone&&(e.x-m)**2+(e.z-h)**2+(e.y-S)**2<_*_&&(e.gone=!0);this.rockWait=0;let w=this.fauna.nuke(m,h,_/1.5,_,_*p.flee/2.5);this._gust(m,h,_*2.5,1,`in`),this.refreshGround(),this.netOK=!1,this.shock=.55,this.rumble=Math.max(this.rumble,p.rumble),this.voids.length>3&&this.voids.shift(),this.voids.push({x:m,y:S,z:h,R:_,t:0}),this.events.push({type:`antimatter`,text:`An antimatter bomb has gone off. A ball of the world is simply gone${w?`, and everything that lived in it`:``}: no fire, no dust, only a clean round pit.`})}laserAt(e,t,n,r=1){if(e*e+t*t>.9)return!1;let i=this.index(e,t);if(!this.act[i])return!1;let{H:a,W:o,S:s,V:c,Q:l,heat:u,glassy:d,char:f,act:p,cx:m,cz:h,rng:g,rocks:_}=this,v=q.laser,y=v.width*r,b=y*v.fireReach,x=i%J,S=i/J|0,C=Math.ceil(b/X),w=0;for(let r=-C;r<=C;r++){let i=S+r;if(!(i<1||i>=J-1))for(let r=-C;r<=C;r++){let _=x+r;if(_<1||_>=J-1)continue;let b=i*J+_;if(!p[b])continue;let S=Math.hypot(m[b]-e,h[b]-t)/y;if(!(S>v.fireReach)){if(S<1){let e=1-S*S;a[b]=Math.max(-.8,a[b]-v.cut*e*n),u[b]<v.glow*(.4+.6*e)&&(u[b]=v.glow*(.4+.6*e)),d[b]<v.glass*e&&(d[b]=v.glass*e),l[b]+=c[b]*Z.BCAP,c[b]=0,f[b]=1,o[b]+=s[b],s[b]=0;let t=Math.min(o[b],v.boil*n);o[b]-=t,w+=t}else f[b]<.3&&(f[b]=.3*(1-(S-1)/(v.fireReach-1))),c[b]>.2&&g()<v.fireChance*n&&this._ignite(b,.6)}}}this.vap+=w,this.hot=!0;for(let n of _)!n.gone&&Math.hypot(n.x-e,n.z-t)<y+n.r*.5&&(n.gone=!0,this.rockWait=0);return this.fauna.nuke(e,t,y/1.5,y,y*1.6),this.rumble=Math.max(this.rumble,.03),this.laser={x:e,y:this.G[i]+Math.max(0,o[i]),z:t,size:r,t:.15,wet:o[i]>Z.WSHOW},this._boltNote(`laser`,`A beam from above the glass is cutting a trench through the land. Its floor is fused to glass, and fires start along both sides.`,90),!0}launch(e,t,n=1,r=1,i=!1){if(this.meteors.length>=(i?24:6)||e*e+t*t>.9)return!1;let a=Math.min(.07,Math.max(i?.006:.012,.03*n)),o=Math.min(4,Math.max(.25,r)),s=this.rng,c=s()*6.283,l=.5+s()*.6,u=3.4,d=this.index(e,t);return this.meteors.push({x:e,z:t,y:this.G[d]+Math.max(0,this.W[d]),r:a,v:o,fx:e+Math.cos(c)*Math.cos(l)*u,fy:Math.sin(l)*u,fz:t+Math.sin(c)*Math.cos(l)*u,t:0,dur:q.asteroid.fallTime/Math.sqrt(o),spin:s()*6.283,...i&&{shower:!0}}),!0}_impact(e){let{H:t,W:n,S:r,V:i,Q:a,heat:o,act:s,cx:c,cz:l,rocks:u}=this,{x:d,z:f,r:p,v:m}=e,h=q.asteroid,{R:g,depth:_}=Zu(p,m),v=Q(.8,2.5,m),y=this.index(d,f),b=s[y]&&n[y]>Z.WSHOW,x=b&&r[y]>8e-4,S=b&&r[y]>.004,C=this.G[y]+n[y],w=Math.ceil(g*3.2/X),T=y%J,E=y/J|0,D=0,O=0,k=this.wtot*.02,A=0,j=0;for(let e=0;e<6.283;e+=.2){let n=this.index(d+Math.cos(e)*g,f+Math.sin(e)*g);s[n]&&(A+=t[n],j++)}let M=j?Math.min(t[y],A/j):t[y],N=0,P=0,F=[];for(let e=-w;e<=w;e++){let n=E+e;if(!(n<1||n>=J-1))for(let e=-w;e<=w;e++){let r=T+e;if(r<1||r>=J-1)continue;let i=n*J+r;if(!s[i])continue;let a=Math.hypot(c[i]-d,l[i]-f)/g;if(!(a>3.2)){if(a<1){let e=1-a*a,n=M-_*e,r=t[i]-h.digLeast*_*e,o=t[i]-h.digMost*_*Math.sqrt(e),s=Math.max(-.8,o,Math.min(r,n));N+=t[i]-s,t[i]=s}else{let e=Math.min(2,Math.max(0,(M-t[i])/(.5*g))),n=(h.rim*Math.exp(-((a-1.12)**2)/.09)+h.blanket*Math.exp(-(a-1.3)/.6))*(1+h.downhill*e);F.push(i,n),P+=n}}}}if(P>0){let e=h.thrownOut*N/P;for(let n=0;n<F.length;n+=2)t[F[n]]+=e*F[n+1]}for(let e=-w;e<=w;e++){let t=E+e;if(!(t<1||t>=J-1))for(let e=-w;e<=w;e++){let u=T+e;if(u<1||u>=J-1)continue;let p=t*J+u;if(!s[p])continue;let m=Math.hypot(c[p]-d,l[p]-f)/g;if(m>3.2)continue;let _=Math.exp(-(m*m)/2.4),y=i[p]*Math.min(1,_*(h.scorchSlow+h.scorchMore*v));i[p]-=y,a[p]+=y*Z.BCAP,O+=y;let b=n[p]>Z.WSHOW?x&&m<1.3?r[p]:r[p]*Math.min(1,.3*_*v):r[p]*Math.min(1,_*(.7+.5*v));if(r[p]-=b,n[p]+=b,m<1.1&&v>.05&&(o[p]=Math.max(o[p],Math.min(1.2,(h.glowSlow+h.glowMore*v)*(1-.6*m)))),n[p]>0&&m<1.7&&D<k){let e=Math.min(k-D,n[p]*(h.splashSlow+h.splashMore*v)*Math.exp(-(m*m)/1.4));n[p]-=e,D+=e}}}if(this.vap+=D,v>.05&&(this.hot=!0),v>.3){let e=Math.ceil(g*h.fireTo/X);for(let t=-e;t<=e;t+=2)for(let n=-e;n<=e;n+=2){let e=(E+t)*J+T+n;if(e<0||e>=Y||!s[e])continue;let r=Math.hypot(n,t)*X/g;r>1.2&&r<h.fireTo&&i[e]>.25&&this.rng()<h.fireChance*v&&this._ignite(e,.6)}}let I=this.rng,L=m<h.burstSpeed;for(let e of u){if(e.gone)continue;let n=Math.hypot(e.x-d,e.z-f);if(n<g*(.5+.5*v)&&v>.3)e.gone=!0;else if(n<g*h.throwReach&&v>.2&&e.y+.3*e.r*e.sy>t[e.i]){let t=(e.x-d)/(n||1),r=(e.z-f)/(n||1),i=(h.throwSlow+h.throwMore*v)*(1-n/(g*h.throwReach))*(1+.5*I())*Math.min(1,.02/e.r);e.fly=!0,this.thrown++,e.vx=t*i,e.vz=r*i,e.vy=i*(.8+.6*I())}}if(x){let e=7+(I()*5|0);for(let t=0;t<e;t++){let i=(t+I()*.6)*(6.283/e),a=g*(2+I()*2.5);for(let e=g*1.1;e<a;e+=X*.5){i+=(I()-.5)*.2;let t=d+Math.cos(i)*e,a=f+Math.sin(i)*e;if(t*t+a*a>.9)break;let o=this.index(t,a);if(!s[o]||n[o]<=Z.WSHOW)break;r[o]>8e-4&&(this.crack[o]=1)}}if(S){let e=4+(I()*4|0);for(let t=0;t<e;t++){let e=I()*6.283,t=g*(1.3+I()*.45),i=d+Math.cos(e)*t,a=f+Math.sin(e)*t;if(i*i+a*a>.8)continue;let o=this.index(i,a);!s[o]||n[o]<=Z.WSHOW||r[o]<.004||(this.chunks.length>=40&&this.chunks.shift(),this.chunks.push({x:i,z:a,i:o,r:Math.min(.035,g*(.2+.25*I())),yaw:I()*6.283,tilt:(I()-.5)*1.4,roll:(I()-.5)*1.4,shade:I(),life:1}))}}}this.fauna.strike(d,f,g,b),this._gust(d,f,g*4,v),e.shower||(this.shock=h.slowMo),b&&this.waves.push({x:d,z:f,R:g,t:0,rf:g*1.1,A:Math.min(h.waveMax,.25*g+.3*_)*(x?.4:1),lam:Math.max(.05,g*1.1),Lw:C});let R=(e,n,r,i)=>{if(e*e+n*n>.8)return;let a=this.index(e,n);if(!s[a])return;let o=u.find(e=>e.gone);if(!o){if(u.length>=590)return;u.push(o={})}let c=.7+I()*.25;Object.assign(o,{x:e,z:n,i:a,y:t[a]-i*r*c,r,sx:.9+I()*.3,sy:c,sz:.9+I()*.3,yaw:I()*6.283,tilt:(I()-.5)*.9,roll:(I()-.5)*.9,kind:I()*3|0,shade:I(),melt:0,gone:!1,fresh:!0})};if(L)R(d,f,p*(.85-.25*Q(.5,1.4,m)),.35+.4*Q(.25,1.4,m));else{let e=h.pieces+(I()*h.piecesMore|0);for(let t=0;t<e;t++){let e=I()*6.283,t=g*(1+I()*.8);R(d+Math.cos(e)*t,f+Math.sin(e)*t,p*(h.pieceSize+I()*h.pieceSizeMore),.3+I()*.4)}}this.rockWait=0,this._settle(Z.TALUS*2,.07,d,f,g),this.impacts.push({x:d,z:f,y:this.G[y]+Math.max(0,n[y]),r:p,v:m,R:g,wet:b,ice:x,splash:D,fast:v});let ee=x?`An asteroid has smashed through the ice. Shards fly, cracks run out across the lake, and the hole steams until it freezes over again.`:b?`An asteroid has struck the water. Steam and spray go up, and a wave runs out to the shore and over the low ground.`:L?`An asteroid has landed. It lies where it fell, half buried in its own crater.`:v>.6?`An asteroid has struck. The ground is scorched for a way round the crater, and the floor still glows.`:`An asteroid has struck and burst. Fragments lie round the crater.`;e.shower||this.events.push({type:`impact`,text:ee})}},xd=class{crackAt(e,t){if(Math.hypot(e,t)<.05)return!1;let n=Math.atan2(t,e);for(let e=0;e<this.cracks.length;e++){let t=this.cracks[e].ang-n;if(t-=Math.round(t/6.283185)*6.283185,Math.abs(t)<.35)return this.cracks.splice(e,1),this.events.push({type:`sealed`,text:this.cracks.length?`That crack is sealed. The glass is still cracked elsewhere.`:`The crack is sealed. The water will come back, slowly, and the frost will melt.`}),!0}return this.cracks.length>=3?!1:(this.cracks.push({ang:n,x:Math.cos(n)*.97,z:Math.sin(n)*.97,t:0,clock:0,seed:this.rng()*1e6|0}),this.rumble=Math.max(this.rumble,.5),this.events.push({type:`crack`,text:`The glass has cracked. Water is leaking out of the world, the cold is coming in, and frost is spreading from the crack. Click by the crack to seal it.`}),!0)}_cracks(e){let{S:t,V:n,Q:r,act:i,cx:a,cz:o}=this,s=q.crack;for(let c of this.cracks){if(c.t+=e,(c.clock+=e)<.2)continue;let l=c.clock;c.clock=0;let u=Math.min(s.frostReach,.04+s.frostGrow*c.t),d=this.index(c.x,c.z),f=d%J,p=d/J|0,m=Math.ceil(u/X);for(let e=-m;e<=m;e++){let d=p+e;if(!(d<1||d>=J-1))for(let e=-m;e<=m;e++){let p=f+e;if(p<1||p>=J-1)continue;let m=d*J+p;if(!i[m])continue;let h=Math.hypot(a[m]-c.x,o[m]-c.z)/u;if(h>=1)continue;let g=1-h,_=s.frost*g-t[m];_>0&&this.vap>_&&(t[m]+=_,this.vap-=_);let v=n[m]*Math.min(1,s.kill*g*l);n[m]-=v,r[m]+=v*Z.BCAP}}}}oilAt(e,t){let n=q.oil;if(this.gushers.filter(e=>e.t<n.rise+n.seconds).length>=2||e*e+t*t>.8)return!1;let r=this.index(e,t);if(!this.act[r])return!1;this.gushers.length>=3&&this.gushers.shift();let i=this.G[r]+Math.max(0,this.W[r]);return this.gushers.push({x:e,z:t,y:i,deep:i-.32,t:0}),this.events.push({type:`oil`,text:`The drill has struck a pocket of oil deep underground. It is coming up the bore, and will gush out black over the ground, run downhill, and spread as a slick on any water it reaches.`}),!0}_oilAt(e){let t=e%J,n=e/J|0,r=this.oilBox;r?(t<r.x0&&(r.x0=t),t>r.x1&&(r.x1=t),n<r.z0&&(r.z0=n),n>r.z1&&(r.z1=n)):this.oilBox={x0:t,x1:t,z0:n,z1:n}}_oil(e){let{oil:t,soak:n,G:r,W:i,V:a,Q:o,A:s,act:c,cx:l,cz:u,tmp:d}=this,f=q.oil;for(let n of this.gushers){n.t+=e;let r=n.t-f.rise;if(r<0||r>=f.seconds)continue;let i=this.index(n.x,n.z),a=i%J,o=i/J|0,s=Math.max(1,Math.ceil(.02/X));for(let r=-s;r<=s;r++)for(let i=-s;i<=s;i++){let s=(o+r)*J+a+i;s<0||s>=Y||!c[s]||Math.hypot(l[s]-n.x,u[s]-n.z)>.02||(t[s]+=f.gush*e,this._oilAt(s))}}let p=this.oilBox;if(!p)return;let m=Math.max(1,p.x0-1),h=Math.min(J-2,p.x1+1),g=Math.max(1,p.z0-1),_=Math.min(J-2,p.z1+1);for(let e=g-1;e<=_+1;e++)d.fill(0,e*J+m-1,e*J+h+2);let v=Math.min(.2,f.spread*e*.25),y=e/(f.years*12),b=this._winds(),x=q.forces.oilPush*e,S=J,C=-1,w=J,T=-1;for(let p=g;p<=_;p++)for(let g=m;g<=h;g++){let m=p*J+g,h=t[m],_=n[m];if(h<=0&&_<=0||!c[m])continue;h-=h*y,h<1e-6&&(h=0),_-=_*y*.5,_<.01&&h<=0&&(_=0);let E=i[m]<=Z.WSHOW;if(E&&h>0){let t=Math.min(h,f.soak*e);h-=t,_=Math.min(1,_+t/f.soakFull)}if(t[m]=h,n[m]=_,h<=0&&_<=0)continue;g<S&&(S=g),g>C&&(C=g),p<w&&(w=p),p>T&&(T=p);let D=h>f.film?1:E?_:0;if(D>.05){if(!E)s[m]-=s[m]*Math.min(1,f.kill*e);else{let t=a[m]*Math.min(1,f.kill*D*e);a[m]-=t,o[m]+=t*Z.BCAP}}if(h<=f.skin)continue;let O=r[m]+Math.max(0,i[m])+h,k=h-f.skin;for(let e of b){let t=id(e,l[m],u[m]);if(t<=0)continue;let n=m+(Math.abs(id.x)>Math.abs(id.z)?id.x>0?1:-1:id.z>0?J:-J);if(!c[n])continue;let r=k*Math.min(.5,x*t);d[m]-=r,d[n]+=r}for(let e of qu){let n=m+e;if(!c[n])continue;let a=O-(r[n]+Math.max(0,i[n])+t[n]);if(a<=0)continue;let o=Math.min(k*.25,a*.5)*v*4;d[m]-=o,d[n]+=o}}if(C<0)this.oilBox=null;else{for(let e=g-1;e<=_+1;e++)for(let n=e*J+m-1,r=e*J+h+1;n<=r;n++)d[n]!==0&&(t[n]=Math.max(0,t[n]+d[n]),d[n]=0);this.oilBox={x0:S-1,x1:C+1,z0:w-1,z1:T+1}}}fissureAt(e,t,n,r,i=1){if(this.rifts.length>=2||e*e+t*t>.85)return!1;let a=q.fissure,o=this.rng;r>0||(r=a.length*i,n=o()*6.283),r=Math.min(1.2,Math.max(.08,r));let s=X*1.5,c=Math.ceil(r/2/s),l=[];for(let e=0,t=0;e<=2*c;e++)t=(t+(o()-.5)*2*a.jag)*.85,l.push(t);return this.rifts.push({x:e,z:t,ang:n,n:c,step:s,offs:l,t:0,done:0,size:i}),this.events.push({type:`fissure`,text:`The ground is tearing open. Lava glows at the bottom of the crack, and whatever stood on its line has fallen in.`}),!0}_rifts(e){let t=q.fissure;for(let n=this.rifts.length-1;n>=0;n--){let r=this.rifts[n];r.t+=e;let i=Math.min(r.n,Math.round(r.t/t.seconds*r.n));r.tips=[];for(let e=r.done;e<=i;e++)this._crack(r,r.n+e),e&&this._crack(r,r.n-e);r.done=i+1,this.rumble=Math.max(this.rumble,t.rumble),this.hot=!0,i>=r.n&&(this.rifts.splice(n,1),this.refreshGround(),this.netOK=!1,this.rockWait=0)}}_crack(e,t){let{H:n,V:r,Q:i,L:a,heat:o,char:s,act:c,cx:l,cz:u,rocks:d}=this,f=q.fissure,p=(t-e.n)*e.step,m=Math.cos(e.ang),h=Math.sin(e.ang),g=e.x+m*p-h*e.offs[t],_=e.z+h*p+m*e.offs[t];if(g*g+_*_>.9)return;let v=1-.6*(Math.abs(t-e.n)/e.n),y=Math.max(X*1.5,f.width*e.size*v),b=f.depth*e.size*v,x=Math.min(1,e.step/y);e.tips.push(g,_,y);let S=this.index(g,_),C=S%J,w=S/J|0,T=Math.ceil(y*f.scorch/X);for(let e=-T;e<=T;e++){let t=w+e;if(!(t<1||t>=J-1))for(let e=-T;e<=T;e++){let d=C+e;if(d<1||d>=J-1)continue;let p=t*J+d;if(!c[p])continue;let m=Math.hypot(l[p]-g,u[p]-_)/y;if(m>=1){if(m<f.scorch){let e=1-(m-1)/(f.scorch-1);i[p]+=r[p]*e*Z.BCAP,r[p]-=r[p]*e,s[p]<.7*e&&(s[p]=.7*e)}}else n[p]=Math.max(-.8,n[p]-b*(1-m*m)*1.4*x),i[p]+=r[p]*Z.BCAP,r[p]=0,o[p]<f.glow*(1-m)&&(o[p]=f.glow*(1-m)),m<Math.max(.4,.75*X/y)&&f.lava>0&&(a[p]+=f.lava*v*x,this.LT[p]=1,this._lavaAt(p))}}for(let e of d)!e.gone&&Math.hypot(e.x-g,e.z-_)<y&&(e.gone=!0);this.fauna.nuke(g,_,y/1.5,y,y*2.5)}locustsAt(e,t,n=1,r=!1){return this.swarms.length>=2||e*e+t*t>.8?!1:(this.swarms.push({x:e,z:t,n:Math.min(1.5,.5*n),t:0,tx:e,tz:t,wait:0}),this.events.push({type:`locusts`,text:r?`A swarm of locusts has gathered. It will strip the land bare, field by field, until cold, rain or hunger ends it.`:`A swarm of locusts has settled. It will strip the land bare, field by field.`}),!0)}_swarms(e){let{V:t,Q:n,W:r,fire:i,act:a,cx:o,cz:s,rng:c}=this,l=q.locust,u=q.forces;for(let d=this.swarms.length-1;d>=0;d--){let f=this.swarms[d];f.t+=e;let p=l.radius*Math.sqrt(Math.max(.05,f.n));if((f.wait-=e)<=0){f.wait=2;let e=-1;for(let n=0;n<10;n++){let n=c()*6.283,a=p*(.8+c()*2.5),o=f.x+Math.cos(n)*a,s=f.z+Math.sin(n)*a;if(o*o+s*s>.8)continue;let l=this.index(o,s),u=(r[l]>Z.WSHOW||i[l]>0?-1:t[l])+c()*.2;u>e&&(e=u,f.tx=o,f.tz=s)}}let m=f.tx-f.x,h=f.tz-f.z,g=Math.hypot(m,h);if(g>1e-4){let t=Math.min(g,l.speed*e);f.x+=m/g*t,f.z+=h/g*t}let _=this.index(f.x,f.z),v=_%J,y=_/J|0,b=Math.ceil(p/X),x=0,S=0;for(let i=-b;i<=b;i++){let c=y+i;if(!(c<1||c>=J-1))for(let i=-b;i<=b;i++){let u=v+i;if(u<1||u>=J-1)continue;let d=c*J+u;if(!a[d]||r[d]>Z.WSHOW)continue;let m=Math.hypot(o[d]-f.x,s[d]-f.z)/p;if(m>=1)continue;x+=t[d],S++;let h=t[d]*Math.min(1,l.eat*(1-m*m)*e);m<.85&&t[d]-h<l.bare&&(h=t[d]),t[d]-=h,n[d]+=h*Z.BCAP}}let C=S?x/S:0,w=!1,T=0;for(let e of this._wets())(e.x-f.x)**2+(e.z-f.z)**2<e.R2+.002&&(w=!0);for(let t of this._winds()){let n=id(t,f.x,f.z);n<=0||(f.x+=id.x*u.swarmPush*n*e,f.z+=id.z*u.swarmPush*n*e,T+=u.swarmBlow*n)}for(let e of this._colds())Math.hypot(e.x-f.x,e.z-f.z)<e.R&&(T+=l.cold*e.power);for(let e of this._heats())Math.hypot(e.x-f.x,e.z-f.z)<e.R+p&&(T+=u.swarmHeat);let E=Math.hypot(f.x,f.z);E>.88&&(f.x*=.88/E,f.z*=.88/E);let D=this.fauna.feast(f.x,f.z,p,e),O=this.Tavg[_]<l.coldBelow;if(f.n+=(l.grow*C-l.starve-(O?l.cold:0)-(w?l.rain:0)-(i[_]>0?.5:0)-D*l.birdToll-T)*e,f.n>1.5&&(f.n=1.5),f.n<=.05||f.t>l.seconds){this.swarms.splice(d,1);let e=f.t>l.seconds?`The locusts have moved on.`:O?`The cold has killed the locusts.`:w?`The rain has beaten the locusts down.`:C<.15?`The locusts have eaten everything in reach and starved.`:`The locusts are gone.`;this.events.push({type:`locusts-gone`,text:f.t>6?`${e} The ground they crossed is stripped bare, and what lived on it will go hungry.`:e})}}}gammaAt(e,t){if(this.gammas.length)return!1;let n=Math.hypot(e,t);if(n<.02)return!1;let{H:r,W:i,V:a,Q:o,char:s,cx:c,cz:l,list:u,nAct:d,lit:f}=this,p=q.gamma,m=e/n,h=t/n,g=m*Math.cos(p.elevation),_=Math.sin(p.elevation),v=h*Math.cos(p.elevation),y=X*2,b=Math.ceil(.8/y),x=0;f.fill(0);for(let e=0;e<d;e++){let t=u[e],n=r[t]+Math.max(0,i[t])+.004,d=!0;for(let e=1;e<=b;e++){let i=c[t]+g*y*e,a=l[t]+v*y*e,o=n+_*y*e;if(i*i+a*a>.97||o>.6)break;if(r[this.index(i,a)]>o){d=!1;break}}if(!d||(f[t]=1,x++,i[t]>p.waterShield))continue;let m=a[t]*p.plantKill;a[t]-=m,o[t]+=m*Z.BCAP,m>.05&&s[t]<.22&&(s[t]=.22)}let S=this.fauna.gamma(f,p.waterShield);return this.gammas.push({ux:m,uz:h,t:0,exposed:x/d,dead:S}),this.shock=.55,this.rumble=Math.max(this.rumble,.3),this.events.push({type:`gamma`,text:`A gamma-ray burst has swept the globe from one side. What faced it in the open is dead; what was under water, in the shadow of high ground or down a burrow lives. The sky is glowing.`}),!0}},Sd=class{rainAt(e,t,n,r=1){let i=this.wref*.0055*n*r*r,a=Math.min(i,this.vap*(1-Math.exp(-n*1.5)));this.vap-=a;let o=this.index(e,t);this._precip(o,a,this._brush(1.65*Lu*r));let s=this.toolCloud;return s.x=e,s.z=t,s.on=1,s.snow=this.T[o]<.5,s.size=r,s.strength=a/i,s.strength}clearAt(e,t,n,r=1){let{W:i,Q:a,S:o}=this,s=0;this._around(e,t,.065*r,(e,t)=>{let r=.02*t*n,c=Math.min(i[e],r);i[e]-=c,s+=c,c=Math.min(a[e],r*.6),a[e]-=c,s+=c,c=Math.min(o[e],r),o[e]-=c,s+=c}),this.vap+=s;for(let n of this.clouds)(n.x-e)**2+(n.z-t)**2<.028*r*r&&(n.hold=4);return s}seedAt(e,t,n,r=1){let{V:i,Q:a,W:o,S:s}=this,c=this.A;this._around(e,t,.045*r,(e,t)=>{if(o[e]>Z.SEA_MIN){c[e]<.6&&(c[e]=Math.min(.6,c[e]+.45*t*n));return}if(o[e]>Z.WSHOW||s[e]>.01)return;let r=Math.min(1-i[e],.45*t*n);if(r<=0)return;let l=r*Z.BCAP,u=Math.min(l,a[e]*.5);if(a[e]-=u,l-=u,l>0){let e=Math.min(l,this.vap*.01);this.vap-=e,l-=e}i[e]+=r-l/Z.BCAP})}raiseAt(e,t,n,r=1,i=1){let{H:a,heat:o,scap:s}=this,c=r<1?.07:.16;this._around(e,t,.05*i,(e,t)=>{let i=Math.min(.4,s[e]*.95);a[e]<i&&(a[e]=Math.min(i,a[e]+c*t*n*r)),o[e]=Math.min(2.2,o[e]+.4*t*n*r)}),this.hot=!0;let l=this.index(e,t);this.act[l]&&o[l]>1&&this._erupt(l,r<1),this._settle(Z.TALUS*1.5,n,e,t,.05*i)}sinkAt(e,t,n,r=1){let{H:i,heat:a}=this;this._around(e,t,.07*r,(e,t)=>{i[e]=Math.max(-.8,i[e]-.2*t*n),(this.coreTop[e]<-8||i[e]>this.coreTop[e])&&(a[e]*=1-Math.min(1,t*n))}),this._settle(Z.TALUS*3,n,e,t,.07*r)}},Cd=class{constructor(e=1){let t=()=>new Float32Array(Y);this.H=t(),this.G=t(),this.W=t(),this.S=t(),this.Q=t(),this.V=t(),this.T=t(),this.Tavg=t(),this.Mavg=t(),this.heat=t(),this.fire=t(),this.char=t(),this.wave=t(),this.crack=t(),this.fall=t(),this.glassy=t(),this.flux=t(),this.slope=t(),this.level=t(),this.tmp=t(),this.fl=t(),this.act=new Uint8Array(Y),this.cx=t(),this.cz=t(),this.scap=t(),this.A=t(),this.Nu=t(),this.algae=t(),this.lit=new Uint8Array(Y),this.oil=t(),this.soak=t(),this.L=t(),this.LT=t(),this.lavaIn=t(),this.lavaHeat=t(),this.B=t(),this.coreTop=t(),this.nearest=new Int32Array(Y);let n=[];for(let e=0;e<Y;e++){let t=-1+e%J*X,r=-1+(e/J|0)*X;this.cx[e]=t,this.cz[e]=r;let i=t*t+r*r;this.scap[e]=Math.sqrt(Math.max(0,1-i)),this.coreTop[e]=i<.2916?-1+Math.sqrt(Gu*Gu-i):-9,i<.985&&(this.act[e]=1,n.push(e))}this.list=Int32Array.from(n),this.nAct=n.length,this.overCore=Int32Array.from(n.filter(e=>this.coreTop[e]>-8));for(let e=0;e<Y;e++){if(this.act[e]){this.nearest[e]=e;continue}let t=this.cx[e],n=this.cz[e],r=.99/Math.hypot(t,n),i=this.index(t*r,n*r);for(;!this.act[i];)r-=.01,i=this.index(t*r,n*r);this.nearest[e]=i}this.kCloud=nd(3.4*Lu,Math.round(6.1*Lu)),this.brushes=new Map,this.near=new Int32Array(Y),this.rim=new Int32Array(Y),this.rockMask=new Uint8Array(Y),this.runR=new Uint8Array(Y),this.runD=new Uint8Array(Y),this.rcv=new Int32Array(Y).fill(-1),this.ord=new Int32Array(this.nAct),this.deg=new Uint8Array(Y),this.zs=new Float32Array(Y).fill(99),this.stamp=new Int32Array(Y),this.carry=t(),this.wash=t(),this.rainK=t().fill(1),this.coast=t(),this.rained=t(),this.climRow=0,this.seedl=t(),this.adrift=0,this.que=new Int32Array(300),this.fHeap=new Int32Array(4096),this.fKey=new Float32Array(4096),this.fPool=new Int32Array(400),this.fZ=new Float32Array(400),this.mouths=new Int32Array(this.nAct),this.fauna=new dd(this),this.reset(e)}get fish(){return this.fauna.pop.minnow}get grazers(){return this.fauna.pop.rabbit}index(e,t){let n=Math.round((e+1)/X),r=Math.round((t+1)/X);return n=n<0?0:n>J-1?J-1:n,r=r<0?0:r>J-1?J-1:r,r*J+n}sunTemp(){let e=this.sun;return e>=0?Z.T_MID+e*(Z.T_MAX-Z.T_MID):Z.T_MID+e*(Z.T_MID-Z.T_MIN)}waterTarget(){let e=this.water;return this.wref*(e>=0?Z.W_WET**+e:Z.W_DRY**+-e)}reset(e){this.seed=e;let t=this.rng=Mu(e*7919+13),n=td(t),{H:r,G:i,W:a,S:o,Q:s,V:c,heat:l,flux:u,act:d}=this;o.fill(0),a.fill(0),l.fill(0),u.fill(0),c.fill(0),s.fill(0),this.fire.fill(0),this.char.fill(0),this.fall.fill(0),this.glassy.fill(0),this.algae.fill(0),this.fireList=[],this.fireAge=0,this.burntArea=0,this.L.fill(0),this.B.fill(0),this.LT.fill(0),this.A.fill(0),this.Nu.fill(0),this.carry.fill(0),this.adrift=0,this.year=0,this.sun=0,this.water=0,this.season=0,this.wobble=0,this.ph1=t()*6.28,this.ph2=t()*6.28,this.iceFrac=0,this.airT=Z.T_MID,this.Tsea=Z.T_MID,this.rh=.6,this.cap=1,this.vap=0,this.storm=0,this.stormRate=0,this.quake=0,this.drizzle=0,this.rainRate=0,this.clouds=[],this.fauna.reset(),this.vents=[],this.eruptions=[],this.volcanoes=[],this.bombs=[],this.bombHits=[],this.lavaStiff=1,this.bolts=[],this.daylight=1,this.rumble=0,this.meteors=[],this.showers=[],this.gusts=[],this.twisters=[],this.rifts=[],this.swarms=[],this.gammas=[],this.lit.fill(0),this.oil.fill(0),this.soak.fill(0),this.oilBox=null,this.gushers=[],this.hurricane=null,this.cracks=[],this.leak=0,this.holes=[],this.voids=[],this.laser=null,this.impacts=[],this.shock=0,this.nukes=[],this.blasts=[],this.dust=0,this.thrown=0,this.waves=[],this.chunks=[],this.steam=[],this.lavaAny=!1,this.hot=!1,this.lavaBox=null,this.breachNote=0,this.flags={dry:!1,bare:!1,frozen:!1,sea:!1,empty:!1,warm:!1,fed:!1,bloom:!1},this.fed=0,this.plume=null,this.toolCloud={x:0,z:0,on:0},this.events=[],this.quiet=!0,this.stats={meanV:0,lakeFrac:0,iceFrac:0,meanT:Z.T_MID,seaA:0,seaFrac:0,seaRich:0,seaSum:1,algae:0},this.budget={lake:0,soil:0,plant:0,ice:0,air:0};let f=t()*Math.PI*2,p=t()<.5?1:-1,m=(e,t)=>({x:Math.cos(e)*t,z:Math.sin(e)*t}),h=[{...m(f,.42),h:.28,v:.02},{...m(f+p*(.5+t()*.3),.5+t()*.15),h:.2,v:.013},{...m(f-p*(.6+t()*.5),.3+t()*.35),h:.16,v:.01},{...m(f+p*(1.4+t()*.6),.2+t()*.5),h:.13,v:.008},{...m(f-p*(1.5+t()*.6),.45+t()*.3),h:.11,v:.007}],g=f+Math.PI+(t()-.5)*.8,_=m(g,.68),v=[];for(let e=0;e<4;e++)v.push({...m(g+(e%2?1:-1)*(1+t()*1.3),.15+t()*.55),h:.07+t()*.03,v:.006+t()*.005});let y=[];for(let e=0;e<12;e++)y.push({...m(t()*6.283,.1+t()*.72),h:.04+t()*.045,v:.004+t()*.008});let b=t()<.5?{...m(f+(t()-.5)*.5,.3+t()*.12),h:.1+t()*.05,v:.06+t()*.04}:null;b&&(h[0].h=.18),this.mountain={x:h[0].x,z:h[0].z},this.basin=_,this.massif=b,this.wind=t()*6.283,this.windX=Math.cos(this.wind),this.windZ=Math.sin(this.wind),this.rainK.fill(1),this.coast.fill(0),this.climRow=0;let x=(e,t,n)=>e.h*Math.exp(-((t-e.x)**2+(n-e.z)**2)/e.v);for(let e=0;e<Y;e++){let t=this.nearest[e],i=this.cx[t],a=this.cz[t],o=n.fbm(i*4.6+7,a*4.6+3,5),s=.55+.5*(1-Math.abs(n.fbm(i*8.5+31,a*8.5+17,3))*2),c=.042+.065*o-.31*Math.exp(-((i-_.x)**2+(a-_.z)**2)/.13);for(let e of h)c+=x(e,i,a)*s;for(let e of y)c+=x(e,i,a);if(b){let e=((i-b.x)**2+(a-b.z)**2)/b.v;c+=b.h*Math.exp(-e*e)*(.9+.2*o)}for(let e of v)c-=x(e,i,a);r[e]=c}for(let e=0;e<12;e++)this._thermal(Z.TALUS);this.refreshGround();for(let e=0;e<24;e++)this._climate();let S=-.02;this._shape(S);for(let e=0;e<this.nAct;e++){let t=this.list[e],r=i[t]>=S;r||(a[t]=S-i[t],this.A[t]=.3,this.Nu[t]=.4);let o=r&&i[t]<.26?Math.max(0,Math.min(1,.45+.9*n.fbm(this.cx[t]*11+50,this.cz[t]*11+9,3))):0;c[t]=o;let l=Z.SOILCAP*(.6+.8*o);s[t]=r?l*.5:l,this.Mavg[t]=r?.5:1,this.T[t]=this.Tavg[t]=Z.T_MID-Z.LAPSE*Math.max(0,i[t])}this._makeRocks(e);let C=0;for(let e=0;e<this.nAct;e++){let t=this.list[e];C+=a[t]+s[t]+c[t]*Z.BCAP}this.vap=C*.03,this.wtot=C+this.vap,this.wref=this.wtot,this.stepN=0,this.netOK=!1,this._net();for(let e=0;e<200;e++)this.step(Z.DT*2),this.realtime(Z.DT*24,!0);this.year=0,this.quiet=!1,this.events.length=0,this.flags.bare=this.stats.meanV<.004,this.computeLevel()}refreshGround(){let{H:e,G:t,scap:n,list:r,nAct:i}=this;for(let a=0;a<i;a++){let i=r[a],o=n[i]-.002,s=e[i];t[i]=s<-o?-o:s>o?o:s}}step(e){let t=Z,{G:n,W:r,S:i,Q:a,V:o,T:s,Tavg:c,Mavg:l,B:u,coast:d,list:f,nAct:p}=this;this.refreshGround(),this.year+=e;let m=this.year,h=Math.sin(2*Math.PI*m);this.season=h,this.wobble=2.2*Math.sin(2*Math.PI*m/173+this.ph1)+1.3*Math.sin(2*Math.PI*m/47+this.ph2),this.dust>0&&(this.dust=this.dust<.005?0:this.dust*Math.exp(-e/q.nuke.dustYears));let g=this.sunTemp()+this.wobble-t.ALBEDO*this.iceFrac-q.nuke.dustCool*Math.min(1.2,this.dust)-q.crack.cool*this.cracks.length;this.airT+=(g-this.airT)*Math.min(1,e/1.2);let _=g+t.SEASON_AMP*h;this.Tsea=_;let v=this.rh,y=v>=.98?.02:1-v,b=this.drizzle;this.drizzle=0;let x=1,S=0;this.cracks.length?this.leak=Math.min(q.crack.leakMax,this.leak+q.crack.leak*this.cracks.length*e):this.leak>0&&(this.leak=Math.max(0,this.leak-q.crack.mend*e));let C=this.waterTarget()*(1-this.leak)-this.wtot;if(C>1e-4*this.wref){let n=C*Math.min(1,e*t.KW);this.vap+=n,this.wtot+=n}else if(C<-1e-4*this.wref){let n=this.budget.lake+this.vap;n>0&&(x=1+C*Math.min(1,e*t.KW)/n,x<.5&&(x=.5),S=this.vap*(1-x),this.vap-=S)}let w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=this.fauna.ins,P=this.fauna.cell;for(let m=0;m<p;m++){let p=f[m],g=n[p],v=r[p],C=i[p],F=a[p],I=o[p];x<1&&v>0&&(S+=v*(1-x),v*=x);let L=_-t.LAPSE*(g>0?g:0);L-=.5*t.SEASON_AMP*h*(v>.02?1:d[p]),C>8e-4&&(L-=1.5),s[p]=L,this.char[p]>0&&(this.char[p]=this.char[p]<.01?0:this.char[p]*(1-e*.12)),this.crack[p]>0&&(this.crack[p]=this.crack[p]<.02?0:this.crack[p]*(1-e*.4));let R=this.fall[p];R>0&&(this.fall[p]=R<.004?0:R*(1-e*.07)),this.glassy[p]>0&&(this.glassy[p]=this.glassy[p]<.02?0:this.glassy[p]*(1-e*.012));let ee=c[p]+=(L-c[p])*e*.5;if(b>0&&(L<.5?C+=b:v+=b),L<0){if(v>0){let n=Math.min(.05,-.003*L);if(C<n){let r=t.KF*-L*e;r>v&&(r=v),r>n-C&&(r=n-C),v-=r,C+=r}}}else if(C>0){let n=t.KM*L*e;n>C&&(n=C),C-=n,v+=n}if(C>t.ICE_CAP){let n=.5*(C-t.ICE_CAP)*e;C-=n,v+=n}let te=t.SOILCAP*(.6+.8*I);if(F>te&&(v+=F-te,F=te),v>0&&L>-1){let n=t.KI*e;n>v&&(n=v),n>te-F&&(n=te-F),v-=n,F+=n}let ne=L>-12?Math.min(5,Math.exp((L-15)/20)):.05;if(v>0){let n=t.KE*ne*y*e*(1+3*Math.exp(-v/.008));C>0&&(n*=Math.exp(-C/.003)),n>v&&(n=v),v-=n,w+=n}if(C>0){let n=t.KSUB*y*e;n>C&&(n=C),C-=n,w+=n}let re=F/te;if(L>0&&F>0){let n=t.KT*Math.sqrt(ne)*y*(.35+.65*I)*re*e;n>F&&(n=F),F-=n,w+=n,re=F/te}let ie=l[p]+=(re-l[p])*e*.4,z=v>t.WSHOW,ae=v>t.DROWN,oe=0;if(!ae){oe=Q(-9,5,ee)*(1-.8*Q(33,45,ee))*(.72+.28*Q(12,24,ee))*Q(.06,.42,ie)*(1-.7*Q(.03,.045,this.slope[p])),v>.01&&(oe*=1-Q(.01,t.DROWN,v)),C>.004&&(oe*=.4),R>.02&&(oe*=1-.7*Q(.02,.4,R)),this.glassy[p]>.05&&(oe*=1-.9*this.glassy[p]);let n=u[p];n>0&&(oe*=1-.85*n,u[p]=n<.01?0:n*(1-e/40))}if(I>0||oe>0){let n;if(I<oe){let r=.25*(o[p-1]+o[p+1]+o[p-J]+o[p+J]);n=(t.GROW*(.8+.4*N[P[p]])*I*(oe-I)+t.SPREAD*Lu*(r>I?r-I:0)*oe)*e,n*t.BCAP>F*.5&&(n=F*.5/t.BCAP),F-=n*t.BCAP}else n=-t.DIE*(I-oe)*e,ae&&(n*=2),F-=n*t.BCAP;I+=n,I<.003&&n<0&&(F+=I*t.BCAP,I=0)}r[p]=v,i[p]=C,a[p]=F,o[p]=I,T+=v,E+=F,D+=I*t.BCAP,O+=C,C>8e-4&&k++,z?A++:(j++,M+=I)}this.vap+=w,this.wtot-=S,this.iceFrac+=(k/p-this.iceFrac)*Math.min(1,e*2);let F=this.stats;F.meanV=j?M/j:0,F.lakeFrac=A/p,F.iceFrac=k/p,F.meanT=_;let I=this.budget;I.lake=T+this.adrift,I.soil=E,I.plant=D,I.ice=O,I.air=this.vap+this.storm,this._rain(e);let L=(this.stepN=(this.stepN|0)+1)&3,R=!(L&1);R&&(L!==0&&this.netOK||this._net(),this._drain(e*2)),this._flow(),this._flow();let ee=(this.stepN>>1&1)*2;this._runs(),this._level(Ju[ee]),this._level(Ju[ee+1]),R||(this._seep(e*2),this._glaciers(e*2),this._sea(e*2),L===1?this._thermal(t.TALUS,Math.min(.11,.08*e/t.DT)):this._carve(e*4)),this.fauna.step(e);for(let n=this.chunks.length-1;n>=0;n--){let r=this.chunks[n];((r.life-=e/3)<=0||this.S[r.i]<.002||this.W[r.i]<=t.WSHOW)&&this.chunks.splice(n,1)}if(!this.quiet&&!this.plume&&this.rng()<e/400&&this._startEruption(),!this.quiet&&q.shower.every>0&&this.rng()<e/q.shower.every){let e=f[this.rng()*p|0];this.cx[e]**2+this.cz[e]**2<.5&&this.showerAt(this.cx[e],this.cz[e],.6+this.rng()*.8,!0)}if(!this.quiet&&q.locust.every>0&&this.airT>18&&this.stats.meanV>.5&&this.rng()<e/q.locust.every){let e=f[this.rng()*p|0];this.cx[e]**2+this.cz[e]**2<.5&&o[e]>.5&&this.locustsAt(this.cx[e],this.cz[e],1,!0)}this._notice()}_notice(){if(this.quiet)return;let e=this.flags,t=this.budget,n=this.stats,r=t.lake/this.wtot,i=t.ice/this.wtot;if(!e.dry&&r<.02&&i<.05){e.dry=!0;let n=t.air>.5*this.wtot;this.events.push({type:`dry`,text:n?`The lakes have boiled away. All the water is in the air now; cool the sun and it will rain back.`:`The lakes have gone. The globe holds too little water to fill them; turn the water up and they will return.`})}else e.dry&&r>.2&&(e.dry=!1,this.events.push({type:`wet`,text:`The rains are back and the lakes are filling.`}));!e.bare&&n.meanV<.004?(e.bare=!0,this.events.push({type:`bare`,text:`Nothing green is left. The land will stay bare until you seed it.`})):e.bare&&n.meanV>.05&&(e.bare=!1),!e.sea&&n.lakeFrac>.8?(e.sea=!0,this.events.push({type:`sea`,text:`The sea has covered most of the land. Life in it gathers in sunlit shallows and off green shores.`})):e.sea&&n.lakeFrac<.6&&(e.sea=!1,this.events.push({type:`land`,text:`The sea is falling back and the land is showing again.`})),!e.empty&&n.seaFrac>.05&&n.seaSum<.5?(e.empty=!0,this.events.push({type:`empty`,text:`Nothing lives in the water. Scatter seeds on it to start the sea growing.`})):e.empty&&n.seaA>.02&&(e.empty=!1),!e.fed&&this.fed>25&&n.seaFrac>.03&&n.seaA>.02?(e.fed=!0,this.events.push({type:`fed`,text:`Rivers are carrying food off the land into the water. Life gathers at their mouths.`})):e.fed&&this.fed<5&&(e.fed=!1),!e.warm&&this.airT>31.5&&n.seaFrac>.03&&n.seaA>.01?(e.warm=!0,this.events.push({type:`warm`,text:`The water is too warm. Reefs and kelp are dying back.`})):e.warm&&this.airT<28&&(e.warm=!1),!e.frozen&&this.iceFrac>.7?(e.frozen=!0,this.events.push({type:`frozen`,text:`The globe has frozen over. The lake is still liquid under the ice.`})):e.frozen&&this.iceFrac<.3&&(e.frozen=!1,this.events.push({type:`thaw`,text:`The ice is retreating.`}))}beat(e){this.shock>0&&(this.shock-=e);let t=1;for(let e of this.meteors)e.t>.84&&!e.shower&&(t=.3);for(let e of this.nukes)e.t>2.2-.45&&(t=.3);return this.shock>0&&(t=Math.min(t,.3+.7*Math.max(0,1-this.shock/.55))),t}realtime(e,t){if(!(e>0))return;for(let t=this.meteors.length-1;t>=0;t--){let n=this.meteors[t];n.t+=e/n.dur,n.t>=1&&(this.meteors.splice(t,1),this._impact(n))}this.thrown>0&&this._thrownRocks(e),this.bombs.length&&this._bombsFly(e),this.waves.length&&this._waves(e),(this.nukes.length||this.blasts.length)&&this._nukes(e),this.showers.length&&this._showers(e),this._react(e),this.twisters.length&&this._twisters(e),this.hurricane&&this._hurricane(e),this.cracks.length&&this._cracks(e),this.holes.length&&this._holes(e),(this.oilBox||this.gushers.length)&&this._oil(e),this.rifts.length&&this._rifts(e),this.swarms.length&&this._swarms(e);for(let t=this.gammas.length-1;t>=0;t--)(this.gammas[t].t+=e)>q.gamma.aurora+2&&this.gammas.splice(t,1);for(let t=this.voids.length-1;t>=0;t--)(this.voids[t].t+=e)>1.4&&this.voids.splice(t,1);if(this.laser&&(this.laser.t-=e)<=0&&(this.laser=null),!t)return;let n=this.rng,r=this.clouds,i=this.rh<.2?0:Math.round(5+36*Q(.3,.85,this.rh));if(r.length<i&&n()<e*4){let e=r.length<i*.5&&this.year<1,t=this.wind+Math.PI+(n()-.5)*2.7,a=e?.8*Math.sqrt(n()):.8;r.push({id:this._cid=(this._cid||0)+1,x:Math.cos(t)*a,z:Math.sin(t)*a,v:.055+n()*.05,drift:(n()-.5)*.03,ang:this.wind,age:0,life:40,ph:n()*6.283,k:.25+n()*.25,seed:n(),lead:0,off:0,rx:0,rz:0,ri:0,share:0,fade:0,power:0,rain:0,snow:!1,hold:0})}for(let t=r.length-1;t>=0;t--){let n=r[t];n.age+=e,r.length>i&&n.age<n.life-2&&!n.storm&&(n.life-=e*2);let a=n.drift+.02*Math.sin(n.age*.3+n.ph);n.x*n.x+n.z*n.z<.8&&(n.x+=(this.windX*n.v-this.windZ*a)*e,n.z+=(this.windZ*n.v+this.windX*a)*e);let o=n.v*e;n.lead>0?n.lead=Math.max(0,n.lead-o):n.lead<0&&(n.lead=Math.min(0,n.lead+o)),n.off>0?n.off=Math.max(0,n.off-o):n.off<0&&(n.off=Math.min(0,n.off+o)),(n.x*this.windX+n.z*this.windZ>.72||n.x*n.x+n.z*n.z>.78)&&(n.life=Math.min(n.life,n.age+2)),n.fade=Math.max(0,Math.min(1,n.age/2,(n.life-n.age)/1.5)),n.hold>0&&(n.hold-=e);let s=Math.max(0,Math.sin(n.age*n.k+n.ph));n.power=n.hold>0?0:s*n.fade,n.storm&&(n.grow=Math.min(1,n.age/7)*n.fade,n.power=Z.STORM_RAIN*n.grow),n.age>=n.life&&(r[t]=r[r.length-1],r.pop())}if(this.toolCloud.on>0&&(this.toolCloud.on-=e*2),this._storms(e),this._climate(),this.storm>0){let t=this.stormRate*e;t>this.storm&&(t=this.storm),this.storm-=t;let n=t/this.nAct,{T:r,S:i,W:a,list:o,nAct:s}=this;for(let e=0;e<s;e++){let t=o[e];r[t]<.5?i[t]+=n:a[t]+=n}}this.quake>0&&(this.quake-=e,this._thermal(Z.TALUS*.55)),this.plume&&(this.raiseAt(this.plume.x,this.plume.z,e,.85),this.plume.t-=e,this.plume.t<=0&&(this.plume=null));let{heat:a,H:o,V:s,S:c,W:l,Q:u,L:d,act:f,list:p,nAct:m}=this;if(this.hot){let t=Math.exp(-e/5),n=!1;for(let e=0;e<m;e++){let r=p[e],i=a[r];i>0&&(a[r]=i<.002?0:i*t,n=!0)}this.hot=n}this.vents.length=0;let h=this.eruptions,g=1;for(let t=h.length-1;t>=0;t--){let n=h[t];if(n.t-=e,n.age+=e,n.t<=0){this._openCrater(n),h.splice(t,1);continue}let r=Hu[n.level],i=q.volcano,p=n.age,m=Math.min(1,n.t/4),_=1-Q(i.swellEnd-1,i.swellEnd,p),v=Q(i.lavaFrom,i.lavaFrom+2,p)*m,y=Q(i.blastFrom,i.blastFrom+1.5,p)*m,b=Math.max(.08*Q(.5,2,p)*m,v*(.35+.65*y));_>0&&(this.rumble=Math.max(this.rumble,i.swellRumble*_*n.level)),r.stiff>g&&(g=r.stiff),this.hot=!0,this.vents.push({i:n.i,x:n.x,z:n.z,power:b});let x=n.i%J,S=n.i/J|0,C=Math.ceil(Math.max(6*Lu*zu,n.reach*1.2/X));for(let t=-C;t<=C;t++){let p=S+t;if(!(p<1||p>=J-1))for(let h=-C;h<=C;h++){let g=x+h;if(g<1||g>=J-1)continue;let y=p*J+g;if(!f[y])continue;let S=Math.hypot(h,t)/(Lu*zu),C=S*Iu*zu;if(_>0&&C<n.reach*1.2){let t=Math.min(.4,this.scap[y]*.95);o[y]<t&&(o[y]+=r.rise*_*e*(1-C/(n.reach*1.2)))}let w=Math.exp(-(S*S)/14)*b,T=i.ventGlow*Math.exp(-(S*S)/6)*Math.max(b,.5*(1-_)*m);a[y]<T&&(a[y]=T),v>0&&C<.85*n.rc&&(d[y]+=Z.LAVA_RATE*r.lava*v*e,this.LT[y]=1,this._lavaAt(y));let E=Math.min(s[y],i.ventScorch*w*e);s[y]-=E,u[y]+=E*Z.BCAP;let D=Math.min(c[y],.05*w*e);c[y]-=D,l[y]+=D;let O=Math.min(u[y],.01*w*e);u[y]-=O,this.vap+=O}}_>0&&(n.settle+=e,n.settle>=.1&&(this._settle(Z.TALUS*1.5,n.settle,n.x,n.z,n.reach,Math.ceil(n.reach*1.2/X)+3),n.settle=0)),this._cone(n,v,y*r.bombs,y*r.boulders,e)}this.lavaStiff=h.length?g:this.lavaAny?this.lavaStiff:1,this.steam.length=0;let _=0,v=-1,y=this.overCore,b=this.coreTop;for(let t=0;t<y.length;t++){let r=y[t];o[r]+d[r]>=b[r]||(d[r]+=q.lava.coreWell*e,this.LT[r]=1,this._lavaAt(r),this.hot=!0,a[r]<1.2&&(a[r]=1.2),_++,n()*_<1&&(v=r))}this.breachNote>0&&(this.breachNote-=e),_&&(this.vents.push({i:v,x:this.cx[v],z:this.cz[v],power:.3}),this.breachNote<=0&&this.events.push({type:`breach`,text:`You have dug into the core. Lava is welling up to fill the hole.`}),this.breachNote=25),this._rocks(e),this.fireList.length&&this._fire(e),(this.lavaAny||_||h.length)&&(this._lava(e/2),this._lava(e/2)),this.fauna.frame(e)}_around(e,t,n,r){let i=Math.ceil(n*2.4/X),a=this.index(e,t),o=a%J,s=a/J|0;for(let a=-i;a<=i;a++){let c=s+a;if(!(c<1||c>=J-1))for(let a=-i;a<=i;a++){let i=o+a;if(i<1||i>=J-1)continue;let s=c*J+i;if(!this.act[s])continue;let l=this.cx[s]-e,u=this.cz[s]-t,d=Math.exp(-(l*l+u*u)/(n*n));d>.02&&r(s,d)}}}_brush(e){let t=Math.round(e*4),n=this.brushes.get(t);return n||this.brushes.set(t,n=nd(t/4,Math.ceil(t/4*2.3))),n}shake(){let{V:e,W:t,S:n,Q:r,act:i,list:a,nAct:o,tmp:s}=this,c=this.rng,l=this.vap*.7;this.vap-=l,this.storm+=l,this.stormRate=this.storm/2.5,this.quake=2.5;let u=0,d=0;for(let e=0;e<o;e++){let n=a[e];t[n]<=0||(u+=t[n],t[n]*=.6+.8*c(),d+=t[n])}if(d>0){let e=u/d;for(let n=0;n<o;n++)t[a[n]]*=e}let f=0;for(let t=0;t<o;t++){let n=a[t];s[n]=.25*(e[n-1]+e[n+1]+e[n-J]+e[n+J]),f+=e[n]}if(f>1)for(let i=0;i<o;i++){let o=a[i];if(t[o]>Z.WSHOW||n[o]>.01)continue;let l=Math.max(0,Math.min(1,.8*e[o]+.15*s[o]+(c()<.03?.05:0))),u=(l-e[o])*Z.BCAP;if(u>0){let e=Math.min(u,r[o]);r[o]-=e;let t=u-e;if(t>this.vap*.001)continue;this.vap-=t}else r[o]-=u;e[o]=l}this.fauna.shake();for(let e of this.clouds)e.drift+=(c()-.5)*.08;this.events.push({type:`shake`,text:`Everything the air was holding comes down at once.`})}computeLevel(){let{W:e,G:t,H:n,act:r,level:i,nearest:a}=this;for(let n=0;n<Y;n++)i[n]=r[n]&&e[n]>Z.WSHOW?t[n]+e[n]:-9;let o=this.tmp;for(let e=0;e<Y;e++){if(i[e]>-8){o[e]=i[e];continue}if(!r[e]){o[e]=-9;continue}let n=-9;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++){let a=i[e+t*J+r];a>n&&(n=a)}let a=t[e];o[e]=n>-8&&n<a?n:a-(n>-8?.004:.02)}for(let e=0;e<Y;e++)i[e]=o[a[e]];for(let e=0;e<Y;e++)r[e]||(n[e]=n[a[e]])}totalWater(){let e=this.budget;return e.lake+e.soil+e.plant+e.ice+e.air}};for(let e of[md,hd,gd,_d,vd,yd,bd,xd,Sd,ad])for(let t of Object.getOwnPropertyNames(e.prototype))t!==`constructor`&&Object.defineProperty(Cd.prototype,t,Object.getOwnPropertyDescriptor(e.prototype,t));var wd=`
varying vec3 vP;
void main() {
  vP = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Td=`
uniform sampler2D tData;   // r: land height, g: water level, b: magma heat, a: ice
uniform sampler2D tColor;  // rgb: surface colour, a: soil wetness
uniform vec3 uBody, uWater, uWaterDeep, uSunDir, uCoreA, uCoreB, uLava, uIce, uNight, uSkyA, uSkyB;
uniform float uTime, uLight, uSkyAlpha;
uniform vec4 uOil[3];      // an oil well: x, z; the height of its pocket deep down; the height its oil has risen to
uniform vec3 uOilShape[3]; // how wide and how tall the pocket is now (0 wide: no well); how full the bore is
varying vec3 vP;
vec2 uvOf(vec2 xz) { return ((xz + 1.0) / ${X.toFixed(8)} + 0.5) / ${J.toFixed(1)}; }
vec3 lit(vec3 c) {
  float nl = dot(normalize(vP), uSunDir);
  float s = mix(0.82, 1.0, smoothstep(-0.4, 0.7, nl));
  return c * s * mix(uNight, vec3(1.0), uLight);
}`,Ed=`
${Td}
void main() {
  vec2 uv = uvOf(vP.xz);
  vec4 d = texture2D(tData, uv);
  float H = d.r, L = d.g, heat = d.b, S = d.a, y = vP.y;
  vec3 col;
  if (y < H + 0.002) {
    vec4 sc = texture2D(tColor, uv);
    float dz = H - y;
    vec3 top = sc.rgb * 0.88;
    vec3 body = mix(sc.rgb * 0.7, uBody, 0.8);
    col = mix(top, body, smoothstep(0.014, 0.022, dz));
    col *= 1.0 - 0.14 * sc.a * smoothstep(0.3, 0.0, dz);
    // two flat bands of darker rock lower down
    float wav = 0.03 * sin(vP.x * 6.0 + vP.z * 4.0) + 0.012 * sin(vP.x * 15.0 - vP.z * 11.0);
    col *= 1.0 - 0.09 * smoothstep(0.004, -0.004, y + 0.3 - wav);
    col *= 1.0 - 0.09 * smoothstep(0.004, -0.004, y + 0.52 + wav);
    col = lit(col);
    // magma rising under hot spots
    float yn = clamp((y + 1.0) / (H + 1.0), 0.0, 1.0);
    float reach = heat * 1.1;
    float glow = smoothstep(reach, reach - 0.3, yn) * smoothstep(0.03, 0.3, heat);
    col = mix(col, uLava, glow * 0.9);
    // oil: under each well a black pocket deep down, and the oil coming up from it in a vein to the surface.
    // Like everything underground it shows only where it meets the glass: a well drilled near the edge.
    for (int k = 0; k < 3; k++) {
      vec4 o = uOil[k];
      vec3 sh = uOilShape[k];
      if (sh.x <= 0.0) continue;
      vec2 off = vP.xz - o.xy;
      float pocket = 1.0 - smoothstep(0.72, 1.0, length(vec2(length(off) / sh.x, (y - o.z) / sh.y)));
      // the oil comes up a seam that runs from the bore out towards the wall: where the seam meets the
      // glass it is a dark crooked line, and the oil can be seen climbing it
      vec2 out2 = normalize(o.xy + vec2(1e-5));
      float along = dot(off, out2), across = off.x * out2.y - off.y * out2.x;
      float wob = 0.012 * sin(y * 36.0 + o.x * 9.0) + 0.006 * sin(y * 83.0 + o.y * 5.0);
      float width = 0.007 + 0.006 * smoothstep(o.z + 0.1, o.z, y); // wider where it leaves the pocket
      float vein = (1.0 - smoothstep(width, width + 0.006, abs(across + wob))) * step(-0.03, along) * step(along, 0.24)
        * step(o.z, y) * (1.0 - smoothstep(o.w - 0.008, o.w, y));
      float m = max(pocket, vein * sh.z);
      vec3 oilc = vec3(0.03, 0.025, 0.022) + 0.07 * max(0.0, sin(y * 150.0 + vP.x * 70.0 - uTime * 2.0)) * vec3(0.55, 0.5, 0.7);
      col = mix(col, oilc, m);
    }
    // the core
    float pulse = 1.0 + 0.012 * sin(uTime * 1.3);
    float dc = distance(vP, vec3(0.0, -1.0, 0.0));
    col = mix(col, uCoreB, smoothstep(0.765 * pulse, 0.755 * pulse, dc));
    col = mix(col, uCoreA, smoothstep(0.545 * pulse, 0.535 * pulse, dc));
  } else if (y >= L && y < max(H, L) + S && S > 0.0008) {
    col = lit(uIce);
  } else {
    discard;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Dd=`
${Td}
void main() {
  vec4 d = texture2D(tData, uvOf(vP.xz));
  float H = d.r, L = d.g, y = vP.y;
  if (y < H + 0.002 || y >= L) discard;
  float dep = L - y;
  vec3 col = mix(uWater, uWaterDeep, smoothstep(0.0, 0.32, dep));
  col = mix(col, vec3(1.0), smoothstep(0.007, 0.0, dep) * 0.4);
  gl_FragColor = vec4(lit(col), 0.74);
  #include <colorspace_fragment>
}`,Od=`
${Td}
void main() {
  vec3 col = mix(uSkyB, uSkyA, smoothstep(-0.15, 0.9, vP.y));
  gl_FragColor = vec4(col, uSkyAlpha);
  #include <colorspace_fragment>
}`,kd=`
uniform vec3 uHit;
uniform float uHitT, uHitK;
// the wave at this point of the sphere: height in -1..1, zero where it has not reached or has died
float ripple(vec3 p) {
  if (uHitT < 0.0) return 0.0;
  float d = acos(clamp(dot(normalize(p), uHit), -1.0, 1.0));
  float front = uHitT * 1.1; // how far the wave has got, in radians
  float band = smoothstep(front, front - 0.5, d) * smoothstep(0.0, 0.08, front - d + 0.08);
  return sin(d * 30.0 - uHitT * 20.0) * band * exp(-uHitT * 1.3) * exp(-d * 2.2) * uHitK;
}`,Ad=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vP;
${kd}
void main() {
  vP = position;
  vec3 p = position + normal * 0.012 * ripple(position);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vV = -mv.xyz;
  vN = normalMatrix * normal;
  gl_Position = projectionMatrix * mv;
}`,jd=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vP;
${kd}
void main() {
  vec3 n = normalize(vN), v = normalize(vV);
  float fr = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  vec3 h1 = normalize(normalize(vec3(-0.55, 0.75, 0.5)) + v);
  float s1 = pow(max(dot(n, h1), 0.0), 260.0);
  float s2 = pow(max(dot(n, h1), 0.0), 16.0) * 0.10;
  vec3 h2 = normalize(normalize(vec3(0.6, -0.45, 0.6)) + v);
  float s3 = pow(max(dot(n, h2), 0.0), 40.0) * 0.07;
  float w = ripple(vP);
  float a = 0.02 + 0.32 * fr + 0.85 * s1 + s2 + s3 + 0.8 * max(w, 0.0) + 0.25 * abs(w);
  gl_FragColor = vec4(vec3(1.0), clamp(a, 0.0, 1.0));
  #include <colorspace_fragment>
}`,Md=(e,t,n,r)=>e.copy(t).lerp(n,r);function Nd(e){let{scene:t}=e,n=new jn;t.add(n);let r=new Uint16Array(Y*4),i=new ji(r,J,J,E,v);i.magFilter=i.minFilter=c;let a=new Uint8Array(Y*4),o=new ji(a,J,J,E,d);o.colorSpace=Le,o.magFilter=o.minFilter=c;let s={uOil:{value:[new Zt,new Zt,new Zt]},uOilShape:{value:[new U,new U,new U]},tData:{value:i},tColor:{value:o},uBody:{value:new W(9075292)},uWater:{value:new W(4043980)},uWaterDeep:{value:new W(2064294)},uSunDir:{value:new U(.5,.7,.5)},uCoreA:{value:new W(16766822)},uCoreB:{value:new W(16100677)},uLava:{value:new W(16738847)},uIce:{value:new W(15135480)},uNight:{value:new W(9412304)},uSkyA:{value:new W(12575733)},uSkyB:{value:new W(15332600)},uTime:{value:0},uLight:{value:1},uSkyAlpha:{value:.4}},l=new Da(1,128,96),u=(e,t)=>new Oi(l,new La({uniforms:s,vertexShader:wd,fragmentShader:e,...t})),f=u(Od,{side:1,transparent:!0,depthWrite:!1});f.renderOrder=-10;let p=u(Ed,{}),m=u(Dd,{transparent:!0,depthWrite:!1});m.renderOrder=3;let h={uHit:{value:new U(0,1,0)},uHitT:{value:-1},uHitK:{value:0}},g=new Oi(l,new La({uniforms:h,vertexShader:Ad,fragmentShader:jd,transparent:!0,depthWrite:!1}));g.scale.setScalar(1.004),g.renderOrder=5,n.add(f,p,m,g);let _=new lo(16777215,12168602,2.1);t.add(_);let y=new Do(16774109,2.4);y.castShadow=!0,y.shadow.mapSize.set(4096,4096);let b=y.shadow.camera;b.left=b.bottom=-1.15,b.right=b.top=1.15,b.near=.5,b.far=8,y.shadow.bias=-5e-4,y.shadow.normalBias=.012,n.add(y,y.target);let x=new gi({color:16765773}),S=new Oi(new Ca(1,2),x),C=new li(new Yr({map:(()=>{let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,240,190,0.9)`),n.addColorStop(.35,`rgba(255,225,150,0.35)`),n.addColorStop(1,`rgba(255,220,140,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new ma(e)})(),transparent:!0,depthWrite:!1}));n.add(S,C);let w=(()=>{let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(40,45,60,0.30)`),n.addColorStop(.5,`rgba(40,45,60,0.12)`),n.addColorStop(1,`rgba(40,45,60,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new ma(e)})(),T=new Oi(new Ta(1,1),new gi({map:w,transparent:!0,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=-1.75,T.renderOrder=-20,t.add(T);let D=new U(.94,0,.34).normalize(),O=new U(-.1,.95,.28).normalize(),k=.9,A=new U,j=new U,M=new W,N=new W,P=e=>new W(e),F={dayTop:P(11459828),dayLow:P(15135736),duskTop:P(16038282),duskLow:P(16638144),nightTop:P(2766691),nightLow:P(5596047),haze:P(15260866),bgDay:P(15921129),bgNight:P(14474726),sunCold:P(16774857),sunMid:P(16765773),sunHot:P(16747066)};t.background=F.bgDay.clone();let I={light:1,sunDir:j,sunPos:A,sunY:1},L=0,R=0;return{group:n,data:r,dataTex:i,colData:a,colTex:o,uniforms:s,state:I,parts:{sky:f,glass:g,water:m,sun:S,halo:C},shake(){R=1},jolt(e){R=Math.max(R,e)},pierce(e,t,n,r=1){h.uHit.value.set(e,t,n).normalize(),h.uHitT.value=0,h.uHitK.value=r},setDay(e){k=e},update(e,r,i){L+=e,s.uTime.value=L,h.uHitT.value>=0&&(h.uHitT.value+=e,h.uHitT.value>4&&(h.uHitT.value=-1)),R=Math.max(0,R-e*1.1);let a=R*R*.07;n.position.set(Math.sin(L*47)*a,Math.sin(L*.8)*.025+Math.sin(L*39)*a*.6,Math.cos(L*43)*a*.5);let o=2.5-n.position.y*2;if(T.scale.set(o,o,1),i){let t=.12+.72*O.y*Math.sin(k);k+=Math.PI*2/80*e*(t<0?3.2:1)}A.copy(D).multiplyScalar(.72*Math.cos(k)).addScaledVector(O,.72*Math.sin(k)),A.y+=.12;let c=jt.smoothstep(A.y,-.14,.22),l=Math.max(0,1-Math.abs(A.y-.08)/.3)*.85;I.light=c,I.sunY=A.y;let u=r.sun,d=.05+.022*(u+1);S.position.copy(A),S.scale.setScalar(d),C.position.copy(A),C.scale.setScalar(d*5.5),u<0?Md(x.color,F.sunMid,F.sunCold,-u):Md(x.color,F.sunMid,F.sunHot,u),j.set(A.x,Math.max(A.y,.28),A.z).normalize(),s.uSunDir.value.copy(j),s.uLight.value=c,y.position.copy(j).multiplyScalar(3);let f=Math.min(.75,.9*(r.dust||0));y.intensity=(1.1+1.4*c)*(1-f),Md(y.color,M.set(10466047),N.set(16774109),c),y.color.lerp(M.set(16762256),l*.6),_.intensity=(2.7-.55*c)*(1-.3*f),Md(_.color,M.set(11122406),N.set(16777215),c);let p=jt.smoothstep(r.budget.air/r.wtot,.15,.7);Md(s.uSkyA.value,F.nightTop,F.dayTop,c).lerp(F.duskTop,l*.6).lerp(F.haze,p*.7*c),Md(s.uSkyB.value,F.nightLow,F.dayLow,c).lerp(F.duskLow,l*.7).lerp(F.haze,p*.8*c),f>.01&&(s.uSkyA.value.lerp(M.set(8222060),f*c),s.uSkyB.value.lerp(M.set(10129280),f*c),x.color.lerp(M.set(12607546),f)),s.uSkyAlpha.value=.38+.3*(1-c)+.14*p+.2*f,Md(t.background,F.bgNight,F.bgDay,c)}}}var Pd=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255],Fd={earth:Pd(11048042),sand:Pd(14926467),tundra:Pd(12042948),rock:Pd(9341574),grass:Pd(8832086),jungle:Pd(3119948),grassCold:Pd(9087110),grassDry:Pd(13091434),bed:Pd(14274470),snow:Pd(16120316),scorch:Pd(4866104),lava:Pd(16742948),ice:Pd(14938616),basalt:Pd(3880502),lavaHot:Pd(16761418),char:Pd(2235674),glass:Pd(7314556),ash:Pd(9407080),reef:Pd(15634308),kelp:Pd(5209415),plankton:Pd(7653274),algae:Pd(9416238),oil:Pd(1512207),oilStain:Pd(2892057),waterCold:Pd(10933998),waterColdDeep:Pd(6268370),waterMild:Pd(4569551),waterMildDeep:Pd(2065579),waterHot:Pd(5029796),waterHotDeep:Pd(2199420)},Id=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;Id[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}var Ld=e=>Id[e<=0?0:e>=1?255:e*255|0];function Rd(e){let{world:t,globe:n,clip:r}=e,i=e.channel,a=e.layers,{data:o,dataTex:s,colData:c,colTex:l,uniforms:u}=n,d=yr.toHalfFloat,f=new Float32Array(Y),p=new Float32Array(Y),m=new Float32Array(Y),h=new Float32Array(Y),g=new Float32Array(Y),_=new Float32Array(Y*3),v=new Float32Array(Y);for(let e=0;e<Y;e++)v[e]=1+((e*2654435761>>>0)/4294967296-.5)*.07;let y=!0,b=[];for(let e=0;e<J-1;e++)for(let t=0;t<J-1;t++){let n=e*J+t;n+1,n+J+1;let r=-1+t*X,i=-1+e*X;Math.min(Math.abs(r),Math.abs(r+X))**2+Math.min(Math.abs(i),Math.abs(i+X))**2>1.04&&r*(r+X)>0&&i*(i+X)>0||b.push(n)}let x=Int32Array.from(b),S=new Uint32Array(x.length*6),C=new Float32Array(Y*3),w=new Float32Array(Y*3);for(let e=0;e<Y;e++)C[e*3]=t.cx[e],C[e*3+2]=t.cz[e];let T=new Rr;T.setAttribute(`position`,new Cr(C,3).setUsage(Ue)),T.setAttribute(`color`,new Cr(w,3).setUsage(Ue)),T.setIndex(new Cr(S,1).setUsage(Ue)),T.boundingSphere=new Ar(new U,1.6);let E=new Oi(T,r(new za({vertexColors:!0,flatShading:!0,side:2})));E.castShadow=E.receiveShadow=!0,E.frustumCulled=!1,n.group.add(E);let D=0,O,k=new Float32Array(Y*3),A=new Float32Array(Y*4),j=new Float32Array(Y*3),M=[];for(let e=0;e<Y;e++)k[e*3]=t.cx[e],k[e*3+2]=t.cz[e],j[e*3+1]=1;for(let e=0;e<J-1;e++)for(let n=0;n<J-1;n++){let r=e*J+n,i=r+1,a=r+J,o=a+1;Math.hypot(t.cx[r]+X/2,t.cz[r]+X/2)>1.06||M.push(r,a,i,i,a,o)}let N=new Rr;N.setAttribute(`position`,new Cr(k,3).setUsage(Ue)),N.setAttribute(`color`,new Cr(A,4).setUsage(Ue)),N.setAttribute(`normal`,new Cr(j,3)),N.setIndex(M),N.boundingSphere=new Ar(new U,1.6);let P=new Oi(N,r(new za({vertexColors:!0,transparent:!0,depthWrite:!1})));P.renderOrder=1,P.frustumCulled=!1,P.receiveShadow=!0,n.group.add(P);let F=[0,0,0],I=[0,0,0],L=(e,t,n,r)=>{e[0]=t[0]+(n[0]-t[0])*r,e[1]=t[1]+(n[1]-t[1])*r,e[2]=t[2]+(n[2]-t[2])*r},R=[0,0,0],ee=[0,0,0],te=[.5,.45,.35],ne=(e,n)=>t.cx[e]*55+t.cz[e]*43+2.5*Math.sin(t.cx[e]*17-t.cz[e]*23)+D*.012+n*5e3;function re(e){let n=t.Tavg[e],r=a.cover?t.V[e]:0,i=t.Mavg[e],o=t.G[e],s=Q(15,30,n),c=Q(5,-6,n),l=1-Q(.08,.42,i);L(F,Fd.earth,Fd.sand,l*(.3+.7*s)),L(F,F,Fd.tundra,c);let u=Q(.026,.04,t.slope[e])*.8+Q(.32,.5,o)*.5;u>.9&&(u=.9),L(F,F,Fd.rock,u),L(I,Fd.grass,Fd.jungle,Q(18,26,n)),L(I,I,Fd.grassCold,c),L(I,Fd.grassDry,I,Q(.1,.4,i)),L(F,F,I,Q(.03,.45,r)*(1-u*.6));let d=1-.1*i;F[0]*=d,F[1]*=d,F[2]*=d;let f=t.B[e];f>.02&&L(F,F,Fd.basalt,.9*Q(0,.5,f));let p=t.fall[e];p>.02&&L(F,F,Fd.ash,.65*Q(.02,.35,p));let m=t.soak[e];m>.02&&L(F,F,Fd.oilStain,.82*Math.min(1,m*1.4));let h=t.oil[e];if(h>2e-5){L(F,F,Fd.oil,Math.min(.93,.4+h/6e-4));let t=.1*(1-Math.min(1,h/.0012)),n=ne(e,h);F[0]+=t*(.5+.5*Math.sin(n)),F[1]+=t*(.5+.5*Math.sin(n+2.09)),F[2]+=t*(.5+.5*Math.sin(n+4.19))}let g=t.W[e];if(g>Z.WSHOW){L(F,F,Fd.bed,(f>.3?.2:.65)*Q(Z.WSHOW,.03,g));let r=t.A[e];if(r>.01){L(I,Fd.kelp,Fd.reef,Q(16,22,n));let e=r*1.6*Math.exp(-g/.09);L(F,F,I,e>.85?.85:e)}}else a.snow&&L(F,F,Fd.snow,Q(2e-4,.0014,t.S[e]));let _=t.char[e];_>.02&&L(F,F,Fd.char,.85*Q(0,.6,_));let v=t.glassy[e];v>.05&&L(F,F,Fd.glass,.9*Q(.05,.5,v));let y=t.heat[e];y>.15&&(L(F,F,Fd.scorch,Q(.15,.6,y)),L(F,F,Fd.lava,Q(.75,1.3,y)));let b=t.L[e];b>4e-4&&(L(F,F,Fd.lava,Q(4e-4,.003,b)),L(F,F,Fd.lavaHot,.8*Q(.004,.02,b)))}let ie=()=>t.meteors.length||t.impacts.length||t.waves.length||t.nukes.length||t.eruptions.length||t.lavaAny||t.holes.length||t.rifts.length||t.laser||t.twisters.length||t.hurricane||t.showers.length||t.bombs.length||t.voids.length||t.thrown>0||t.toolCloud.on>0||t.quake>0||e.busy>0||t.blasts.some(e=>e.t<4),z=0,ae=0,oe=-1,se=[0,0,0,0,0,0];function ce(e){y||ie()?z=.8:z-=e;let r=z>0;(r||t.stepN!==oe)&&(t.computeLevel(),oe=t.stepN),ae=ae+1&3;let b=r?0:ae*J>>2,E=r?J:(ae+1)*J>>2,j=r?1:4,M=y?1:1-Math.exp(-(e*j)/.1),I=y?1:1-Math.exp(-(e*4)/.3),ce=y?1:1-Math.exp(-(e*j)/.3),{H:le,S:ue,L:de,level:fe,heat:pe,Mavg:me,nearest:he,act:ge,Tavg:_e,W:ve}=t,ye=a.snow;P.visible=n.parts.water.visible=a.lakes,D++;for(let e of t.impacts){if(!e.ice)continue;let n=t.index(e.x,e.z),r=n%J,i=n/J|0,a=Math.ceil(e.R*1.4/X);for(let n=Math.max(0,i-a);n<=Math.min(J-1,i+a);n++)for(let i=Math.max(0,r-a);i<=Math.min(J-1,r+a);i++){let r=n*J+i;Math.hypot(t.cx[r]-e.x,t.cz[r]-e.z)<e.R*1.4&&(p[r]=ye?ue[he[r]]:0)}}let be=0,xe=0,Se=0,Ce=0,we=0,Te=0;for(let e=b;e<E;e++){let t=y||!r||!(e+D&3);for(let n=e*J,r=n+J;n<r;n++){let e=he[n];if(f[n]+=(le[e]-f[n])*M,p[n]+=((ye?ue[e]:0)-p[n])*ce,m[n]+=(fe[n]-m[n])*M,g[n]+=(de[e]-g[n])*M,C[n*3+1]=h[n]=f[n]+(m[n]>f[n]?0:p[n])+g[n],!t)continue;re(e);let r=v[n],i=n*3,a=_[i]+=(F[0]*r-_[i])*I,s=_[i+1]+=(F[1]*r-_[i+1])*I,l=_[i+2]+=(F[2]*r-_[i+2])*I;w[i]=Ld(a),w[i+1]=Ld(s),w[i+2]=Ld(l),ge[n]&&(ve[n]>Z.WSHOW?(we+=_e[n],Te++):(be+=a,xe+=s,Se+=l,Ce++));let u=n*4;o[u]=d(f[n]),o[u+1]=d(m[n]),o[u+2]=d(pe[e]>4?4:pe[e]),o[u+3]=d(p[n]),c[u]=a>=1?255:a*255|0,c[u+1]=s>=1?255:s*255|0,c[u+2]=l>=1?255:l*255|0,c[u+3]=Math.min(1,me[e])*255|0}}let Ee=r||y;(Ee||ae===3)&&(s.needsUpdate=!0,l.needsUpdate=!0);for(let e of[T.attributes.position,T.attributes.color])Ee||e.addUpdateRange(b*J*3,(E-b)*J*3),e.needsUpdate=!0;if(Ee||(ae===0&&se.fill(0),se[0]+=be,se[1]+=xe,se[2]+=Se,se[3]+=Ce,se[4]+=we,se[5]+=Te,[be,xe,Se,Ce,we,Te]=ae===3?se:[0,0,0,0,0,0]),y||D%(r?5:30)==0){for(let e=0,t=0;e<x.length;e++,t+=6){let n=x[e],r=n+1,a=n+J,o=a+1,s=i[n]&i[o],c=i[r]&i[a];(s===c?Math.abs(h[n]-h[o])>Math.abs(h[r]-h[a]):c)?(S[t]=n,S[t+1]=a,S[t+2]=r,S[t+3]=r,S[t+4]=a,S[t+5]=o):(S[t]=n,S[t+1]=a,S[t+2]=o,S[t+3]=n,S[t+4]=o,S[t+5]=r)}T.index.needsUpdate=!0}if(Ce>0){let e=y?1:I*.5;te[0]+=(be/Ce*.4+.27-te[0])*e,te[1]+=(xe/Ce*.4+.22-te[1])*e,te[2]+=(Se/Ce*.4+.16-te[2])*e,u.uBody.value.setRGB(te[0],te[1],te[2],Le)}Te>0&&(O=we/Te);let De=O??t.airT,Oe=Q(8,-4,De),ke=Q(19,27,De);L(R,Fd.waterMild,Fd.waterHot,ke),L(R,R,Fd.waterCold,Oe),L(ee,Fd.waterMildDeep,Fd.waterHotDeep,ke),L(ee,ee,Fd.waterColdDeep,Oe),u.uWater.value.setRGB(R[0],R[1],R[2],Le),u.uWaterDeep.value.setRGB(ee[0],ee[1],ee[2],Le);let B=Ld(R[0]),Ae=Ld(R[1]),je=Ld(R[2]),Me=Ld(ee[0]),V=Ld(ee[1]),Ne=Ld(ee[2]),Pe=Ld(Fd.ice[0]),Fe=Ld(Fd.ice[1]),Ie=Ld(Fd.ice[2]),Re=Ld(Fd.plankton[0]),ze=Ld(Fd.plankton[1]),Be=Ld(Fd.plankton[2]),Ve=Ld(Fd.algae[0]),He=Ld(Fd.algae[1]),Ue=Ld(Fd.algae[2]),We=t.algae,Ge=t.oil,Ke=Ld(Fd.oil[0]),qe=Ld(Fd.oil[1]),Je=Ld(Fd.oil[2]),Ye=t.A,Xe=t.wave,Ze=t.crack,Qe=t.waves.length>0;for(let e=b*J,t=E*J;e<t;e++){let t=m[e]-f[e];if(t<-.012){k[e*3+1]=m[e];continue}let n=t>0?Q(8e-4,.002,p[e]):0,r=Qe&&t>0?Xe[he[e]]:0;k[e*3+1]=m[e]+(t>0?p[e]*n:0)+r;let i=Q(0,.16,t),a=e*4;A[a]=B+(Me-B)*i,A[a+1]=Ae+(V-Ae)*i,A[a+2]=je+(Ne-je)*i,A[a+3]=.5+.4*Q(0,.1,t);let o=Ye[he[e]];if(o>.02&&t>.03){let e=o*1.1*Q(.03,.1,t);e>.5&&(e=.5),A[a]+=(Re-A[a])*e,A[a+1]+=(ze-A[a+1])*e,A[a+2]+=(Be-A[a+2])*e}let s=t>.002?We[he[e]]:0;if(s>.02){let e=s>.85?.85:s;A[a]+=(Ve-A[a])*e,A[a+1]+=(He-A[a+1])*e,A[a+2]+=(Ue-A[a+2])*e,A[a+3]+=(.97-A[a+3])*e}let c=t>.002?Ge[he[e]]:0;if(c>2e-5){let t=Math.min(.94,.3+c/5e-4);A[a]+=(Ke-A[a])*t,A[a+1]+=(qe-A[a+1])*t,A[a+2]+=(Je-A[a+2])*t,A[a+3]+=(.97-A[a+3])*t;let n=.16*(1-Math.min(1,c/.0012)),r=ne(he[e],c);A[a]+=n*(.5+.5*Math.sin(r)),A[a+1]+=n*(.5+.5*Math.sin(r+2.09)),A[a+2]+=n*(.5+.5*Math.sin(r+4.19))}if(r>.004){let e=Math.min(.6,(r-.004)*40);A[a]+=(1-A[a])*e,A[a+1]+=(1-A[a+1])*e,A[a+2]+=(1-A[a+2])*e}if(n>0){A[a]+=(Pe-A[a])*n,A[a+1]+=(Fe-A[a+1])*n,A[a+2]+=(Ie-A[a+2])*n,A[a+3]+=(.97-A[a+3])*n;let t=Ze[he[e]];if(t>0){let e=t*n*.85;A[a]+=(Me*.6-A[a])*e,A[a+1]+=(V*.6-A[a+1])*e,A[a+2]+=(Ne*.7-A[a+2])*e}}}Ee||(N.attributes.position.addUpdateRange(b*J*3,(E-b)*J*3),N.attributes.color.addUpdateRange(b*J*4,(E-b)*J*4)),N.attributes.position.needsUpdate=!0,N.attributes.color.needsUpdate=!0,y=!1}return{update:ce,reset(){y=!0},surf:h,level:m,ground:f,heightAt:(e,t)=>rd(h,e,t),surfaceAt:(e,t)=>Math.max(rd(h,e,t),rd(m,e,t)),waterAt:(e,t)=>rd(m,e,t)-rd(f,e,t)}}var zd=.002,Bd=.005,Vd=[.812,.902,.953],Hd=[.961,.976,.988],Ud=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Wd(e){let{world:t,globe:n,land:r,clip:i,layers:a}=e,o=new Float32Array(Y*3),s=new Float32Array(Y*4),c=new Float32Array(Y),l=new Uint8Array(Y),u=(e,t)=>{let n=Math.imul(e,2654435761)^Math.imul(t+1663821227,2246822507);return n^=n>>>15,n=Math.imul(n,739982445),n^=n>>>12,n=Math.imul(n,695872825),n^=n>>>15,(n>>>0)/4294967296-.5};for(let e=0;e<Y;e++){o[e*3]=t.cx[e],o[e*3+2]=t.cz[e];let n=e%J,r=e/J|0;c[e]=1.3*u(n>>2,r>>2)+.7*u(n,r)}let d=[];for(let e=0;e<J-1;e++)for(let n=0;n<J-1;n++){let r=e*J+n;Math.hypot(t.cx[r]+X/2,t.cz[r]+X/2)>1.06||d.push(r)}let f=new Uint32Array(d.length*6),p=new Rr;p.setAttribute(`position`,new Cr(o,3).setUsage(Ue)),p.setAttribute(`color`,new Cr(s,4).setUsage(Ue)),p.setIndex(new Cr(f,1).setUsage(Ue)),p.boundingSphere=new Ar(new U,1.6);let m=new Oi(p,i(new za({vertexColors:!0,flatShading:!0,transparent:!0})));m.renderOrder=2,m.frustumCulled=!1,m.receiveShadow=!0,m.visible=!1,n.group.add(m);let h=Ud(Vd[0]),g=Ud(Vd[1]),_=Ud(Vd[2]),v=Ud(Hd[0]),y=Ud(Hd[1]),b=Ud(Hd[2]),x=0,S=0;function C(){let{S:e,W:n,crack:i,nearest:u}=t,C=r.level,w=r.ground,T=r.surf;if(!(a.snow&&a.lakes)){m.visible=!1,S=0;return}x++;let E=0;for(let t=0;t<Y;t++){let r=u[t],a=e[r],d=C[t]-w[t],f=t*4;if(d<=0||n[r]<=0){l[t]=0,o[t*3+1]=Math.min(T[t],C[t]+a),s[f+3]=0;continue}let p=Q(zd,Bd,a);l[t]=+(p>0),E+=l[t];let m=C[t]+a+c[t]*Math.min(.002,.1*a),x=Q(.004,.018,a),S=1+c[t]*.03,D=(h+(v-h)*x)*S,O=(g+(y-g)*x)*S,k=(_+(b-_)*x)*S,A=p,j=p>0?i[r]:0;if(j>0){m-=j*Math.min(.004,.4*a),A*=1-.85*j;let e=j*.5;D+=(.1-D)*e,O+=(.16-O)*e,k+=(.22-k)*e}o[t*3+1]=m,s[f]=D,s[f+1]=O,s[f+2]=k,s[f+3]=A}if(!E)m.visible=!1,S=0;else if(m.visible=!0,p.attributes.position.needsUpdate=!0,p.attributes.color.needsUpdate=!0,x%2==0||S===0||t.impacts.length){let e=0;for(let t=0;t<d.length;t++){let n=d[t],r=n+1,i=n+J,a=i+1;l[n]|l[r]|l[i]|l[a]&&(f[e++]=n,f[e++]=i,f[e++]=r,f[e++]=r,f[e++]=i,f[e++]=a)}S=e,p.setDrawRange(0,e),p.index.needsUpdate=!0}}return{update:C,get drawn(){return S/3}}}function Gd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Rr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Kd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Kd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Kd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function qd(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c=[],l=new Map,u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=t*.5,p=10**Math.log10(1/t),m=f*p;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*p+m)},`}a in n?u.push(n[a]):(c.push(i),n[a]=o,u.push(o),o++)}let h=e.clone();for(let t in e.attributes)h.setAttribute(t,Jd(e.attributes[t],c,l));for(let t in e.morphAttributes)h.morphAttributes[t]=e.morphAttributes[t].map(e=>Jd(e,c,l));return h.setIndex(u),h}function Jd(e,t,n=new Map){let r=e.isInterleavedBufferAttribute,i=r?e.data:e,a=r?i.stride:e.itemSize,o=r?n.get(i):void 0;if(o===void 0){let s=new i.array.constructor(t.length*a);for(let e=0;e<t.length;e++)for(let n=0;n<a;n++)s[e*a+n]=i.array[t[e]*a+n];o=r?new i.constructor(s,a,i.meshPerAttribute):new e.constructor(s,e.itemSize,e.normalized,e.meshPerAttribute),o.setUsage(i.usage),r&&n.set(i,o)}let s=r?new e.constructor(o,e.itemSize,e.offset,e.normalized):o;return s.name=e.name,r||(s.gpuType=e.gpuType),s}function Yd(e,t){let n=e.index?e.toNonIndexed():e,r=n.attributes.position.count,i=new W(t),a=new Float32Array(r*3);for(let e=0;e<r;e++)a.set([i.r,i.g,i.b],e*3);return n.setAttribute(`color`,new Cr(a,3)),n.deleteAttribute(`uv`),n}var Xd=(e,t,n,r)=>e.translate(t,n,r);function Zd(e){let t=[],n=[],r=new U,i=new U,a=new U,o=new U,s=new U;for(let[c,l,u,d]of e){i.fromArray(c),a.fromArray(l),o.fromArray(u),r.copy(a).sub(i).cross(o.clone().sub(i)),s.copy(i).add(a).add(o).divideScalar(3).setZ(0);let e=r.dot(s)<0?[i,o,a]:[i,a,o];for(let n of e)t.push(n.x,n.y,n.z);let f=new W(d);for(let e=0;e<3;e++)n.push(f.r,f.g,f.b)}let c=new Rr;return c.setAttribute(`position`,new Er(t,3)),c.setAttribute(`color`,new Er(n,3)),c.computeVertexNormals(),c}var Qd=[.058,.049,.088,.023,.02,.05,.05],$d=9069122;function ef(){return Gd([Yd(Xd(new ba(.035,.05,.25,5),0,.125,0),$d),Yd(Xd(new xa(.3,.46,6),0,.43,0),3112271),Yd(Xd(new xa(.23,.4,6),0,.66,0),3639895),Yd(Xd(new xa(.15,.34,6),0,.85,0),4298591)])}function tf(){let e=new Ca(.31,0);return e.scale(1,1.15,1),Gd([Yd(Xd(new ba(.045,.065,.45,5),0,.225,0),$d),Yd(Xd(e,0,.64,0),5613642)])}function nf(){let e=new Ca(.36,0);e.scale(1.05,.5,1.05);let t=new Ca(.22,0);return t.scale(1.2,.6,1.2),Gd([Yd(Xd(new ba(.03,.065,.74,5),0,.37,0),10848867),Yd(Xd(e,0,.8,0),2068293),Yd(Xd(t,.2,.62,.08),3055951)])}function rf(){let e=(e,t,n,r)=>new ba(e,t,n,r,1,!0),t=(e,t,n,r)=>Xd(new xa(e,t,n,1,!0),0,r+t/2,0),n=Gd([Yd(Xd(e(.055,.065,.5,4),0,.25,0),7972189),Yd(t(.055,.045,4,.5),7972189)]);return n.rotateZ(-.42),n.translate(0,.3,0),Gd([Yd(Xd(e(.085,.1,.88,5),0,.44,0),7314005),Yd(t(.085,.06,5,.88),7314005),n])}function af(){let e=(e,t,n,r,i,a)=>Yd(Xd(e.scale(i,a,i),t,n,r),16777215);return Gd([Yd(Xd(new ba(.1,.16,.5,4,1,!0),0,.25,0),15920358),e(new Ca(.3,0),0,.66,0,1.15,.8),e(new wa(.22,0),.3,.4,.1,1,.85),e(new wa(.19,0),-.26,.34,-.14,1,.85)])}function of(){let e=(e,t,n,r,i)=>{let a=new xa(.075,n,4);return a.translate(0,n/2,0),a.rotateZ(r),Yd(Xd(a,e,0,t),i)};return Gd([e(0,0,1,.06,6064700),e(.12,.08,.78,-.16,7051845),e(-.1,-.06,.62,.22,5209401)])}function sf(){let e=(e,t,n)=>{let r=new ba(.02,.03,.22,4);return r.translate(0,.11,0),r.rotateZ(n),Yd(Xd(r,e,t,0),1709332)};return Gd([Yd(Xd(new ba(.03,.06,.62,5),0,.31,0),2038296),e(.02,.42,-1.1),e(-.02,.3,1.25)])}var cf=[ef,tf,nf,rf,af,of,sf];function lf(){return cf.map(e=>e())}var uf=()=>new za({vertexColors:!0,flatShading:!0}),df={healthy:new W(1,1,1),failing:new W(.95,.72,.42),charred:new W(.3,.24,.2),black:new W(.09,.08,.08),ember:new W(1.6,.7,.25)},ff=[16746150,16753246,12096498,16766571,16744302].map(e=>new W(e)),pf=new W(16052198);function mf(e){let{world:t,globe:n,land:r,clip:i,riverside:a,layers:o}=e,s=Mu(99),c=[];for(let e=0;e<t.nAct;e++){let n=t.list[e];if(s()>.11)continue;let r=t.cx[n]+(s()-.5)*.007,i=t.cz[n]+(s()-.5)*.007;r*r+i*i>.9||c.push({x:r,z:i,ci:t.index(r,i),th:.25+s()*.7,rot:s()*6.283,sz:.8+s()*.45,jit:s(),type:-1,size:0,fell:0,fa:0,burn:0,snag:0})}let l=lf().map(e=>{let t=new Bi(e,i(uf()),c.length);return t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1,t.count=0,t.instanceMatrix.setUsage(Ue),n.group.add(t),t}),u=new nn,d=new Mt,f=new U(0,1,0),p=new U,m=new U,{healthy:h,failing:g,charred:_,black:v,ember:y}=df,b=new W,x=new pn,S=[0,0,0,0,0,0,0],C=0,w=0;function T(e){for(let e=0;e<l.length;e++)l[e].visible=e===4||e===5?o.seaPlants:o.trees;if(w+=e,C++%3)return;let n=w;w=0;let{V:i,W:s,Tavg:T,Mavg:E,heat:D,S:O,A:k}=t;S.fill(0);for(let e of c){let c=e.ci,w=i[c],A=T[c],j=-1,M=s[c];if(M<Z.DROWN&&D[c]<.4&&t.L[c]<=0&&t.B[c]<.6&&!t.rockMask[c]&&a[c]<.5&&(A>=21&&E[c]<.3?j=w>e.th*.2?3:-1:w>e.th&&(j=A<3+e.jit*5?0:A<21?1:2)),j<0&&M>.016&&M<.12&&D[c]<.4&&t.L[c]<=0&&k[c]>.1+e.th*.4&&(j=A>17+e.jit*4?4:5),e.type>=0&&e.type<4&&(t.fire[c]>0||e.burn>0&&e.burn<1)&&(e.burn=Math.min(1,e.burn+n*.6),e.burn>=1&&(e.type=6,e.snag=1,e.size=Math.max(.3,e.size))),e.type===6){if(e.snag-=n/70,e.snag<=0||e.fell>0&&(e.fell-=n/20)<=0){e.type=-1,e.size=0,e.burn=0,e.snag=0,e.fell=0;continue}}else e.fell>0?(e.fell-=n/(e.burn>0?14:30),e.fell<=0&&(e.fell=0,e.type=-1,e.size=0,e.burn=0)):e.type<0?j>=0&&(e.type=j,e.size=.02):j===e.type?e.size=Math.min(1,e.size+n*.5):(e.size-=n*.6,e.size<=0&&(e.type=-1));if(e.type<0)continue;let N=Qd[e.type]*e.sz*(.25+.75*e.size);if((e.type===4||e.type===5)&&N>M*.85&&(N=M*.85),e.type===6&&e.snag<.25?N*=e.snag/.25:e.fell>0&&e.fell<.2&&(N*=e.fell/.2),N<.002)continue;let P=r.heightAt(e.x,e.z)-(e.type>=4?.001:.004);if(e.x*e.x+e.z*e.z+(P+N)*(P+N)>.97)continue;let F=l[e.type],I=S[e.type]++;if(e.fell>0){let t=Math.min(1,(1-e.fell)*30/.5);d.setFromEuler(x.set(-1.45*t*t,e.fa,0,`YXZ`))}else e.type===6?d.setFromEuler(x.set(.12*Math.sin(e.rot*3),e.rot,.1*Math.cos(e.rot*5),`YXZ`)):d.setFromAxisAngle(f,e.rot);let L=N*(.8+.2*e.size);u.compose(p.set(e.x,P,e.z),d,m.set(L,N,L)),F.setMatrixAt(I,u),e.type===6?b.copy(h):e.burn>0?(b.copy(h).lerp(v,Math.min(1,e.burn*1.6)),t.fire[c]>0&&b.lerp(y,.35*(.5+.5*Math.sin(C*.5+e.rot*7)))):e.fell>0?b.copy(g).lerp(_,w<.05?.85:.3):e.type===4?b.copy(pf).lerp(ff[e.jit*5|0],j===e.type?1:e.size*e.size):b.copy(g).lerp(h,j===e.type?1:e.size);let R=t.fall[c];R>.04&&e.type!==6&&e.type<4&&b.lerp(g,Math.min(.75,R*1.3)),o.snow&&O[c]>.0012&&e.type<=1&&b.lerp(h,1).multiplyScalar(1.25),F.setColorAt(I,b)}for(let e=0;e<l.length;e++){let t=l[e];t.count=S[e],t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}return{update:T,flatten(e,t,n,r,i=!0){for(let a of c){if(a.type<0||a.type>=4||a.fell>0)continue;let o=a.x-e,s=a.z-t,c=Math.hypot(o,s);c>n||c>n*.6&&Math.random()>r||(i&&c<n*.55?(a.type=6,a.burn=1,a.snag=.6+.4*Math.random(),a.size=Math.max(.3,a.size),Math.random()<.5&&(a.fell=1,a.fa=Math.atan2(o,s)+(Math.random()-.5)*.5)):(a.fell=1,a.fa=Math.atan2(o,s)+(Math.random()-.5)*.5))}},blast(e,t,n,r,i){for(let a of c){if(a.type<0||a.type>=4||a.fell>0)continue;let o=a.x-e,s=a.z-t,c=Math.hypot(o,s);c>n||c>i*1.6||a.type===6&&a.blasted||(a.blasted=!0,c<r*1.3?(a.type=6,a.burn=1,a.snag=.5+.3*Math.random(),a.size=Math.max(.3,a.size),Math.random()<.7&&(a.fell=1,a.fa=Math.atan2(o,s)+(Math.random()-.5)*.3)):c>i*.9&&Math.random()>(1.6*i-c)/(.7*i)||(a.fell=1,a.fa=Math.atan2(o,s)+(Math.random()-.5)*.3))}},reset(){for(let e of c)e.blasted=!1,e.type=-1,e.size=0,e.fell=0,e.burn=0,e.snag=0},counts:S,get fallen(){return c.filter(e=>e.fell>0).length},sites:c}}var hf=[.021,.02,.02,.009];function gf(e){let t=[],n=[];for(let[r,i,a,o]of e){t.push(...r,...i,...a);let e=new W(o);for(let t=0;t<3;t++)n.push(e.r,e.g,e.b)}let r=new Rr;return r.setAttribute(`position`,new Er(t,3)),r.setAttribute(`color`,new Er(n,3)),r.computeVertexNormals(),r}function _f(){let e=[6199880,6989137,5541186,7515480,5936198],t=[];for(let n=0;n<5;n++){let r=n*1.257+.3,i=.16+n%3*.07,a=.62+.08*(n*2%3),o=Math.cos(r),s=Math.sin(r);t.push([[o*.05-s*.035,0,s*.05+o*.035],[o*.05+s*.035,0,s*.05-o*.035],[o*(.05+i),a,s*(.05+i)],e[n]])}let n=(e,t,n,r)=>{let i=Gd([Yd(Xd(new ba(.011,.015,n,3,1,!0),0,n/2,0),8365146),Yd(Xd(new ba(.036,.036,.19,4,1,!0),0,n+.07,0),7029795),Yd(Xd(new xa(.036,.05,4,1,!0),0,n+.19,0),5912862),Yd(Xd(new xa(.036,.05,4,1,!0).rotateX(Math.PI),0,n-.05,0),5912862),Yd(Xd(new ba(.004,.008,.1,3,1,!0),0,n+.26,0),9083482)]);return i.rotateZ(r),Xd(i,e,0,t)};return Gd([gf(t),n(.02,-.03,.68,-.05),n(-.05,.03,.56,.07)])}function vf(e=!1){let t=[],n=(e,n,r,i,a,o)=>{for(let s=0;s<6;s++){let c=i+s*.92,l=c+.92;t.push([[e,o,n],[e+Math.cos(l)*r,o,n+Math.sin(l)*r],[e+Math.cos(c)*r,o,n+Math.sin(c)*r],a])}};n(-.14,.1,.34,.4,5216842,0),n(.26,-.06,.24,2.6,6006355,.004),n(.02,-.34,.17,4.4,4624447,.002);let r=[gf(t)];return e&&r.push(Yd(Xd(new xa(.13,.11,5,1,!0).rotateX(Math.PI),-.14,.06,.1),16777215),Yd(Xd(new xa(.05,.07,4,1,!0),-.14,.05,.1),15909424)),Gd(r)}function yf(){let e=Math.PI*2/5,t=(e,t,n)=>[Math.sin(e)*t,n,Math.cos(e)*t],n=[0,.3,0],r=(e,t)=>{let r=e[0]-n[0];e[1]-n[1];let i=e[2]-n[2],a=t[0]-n[0];t[1]-n[1];let o=t[2]-n[2];return i*a-r*o<0?[n,t,e,16777215]:[n,e,t,16777215]},i=[];for(let n=0;n<5;n++){let a=n*e,o=t(a,1,.04),s=t(a-e/2,.4,0),c=t(a+e/2,.4,0);i.push(r(s,o),r(o,c))}return gf(i)}var bf=[_f,()=>vf(!1),()=>vf(!0),yf],xf=()=>bf.map(e=>e()),Sf=()=>new za({vertexColors:!0,flatShading:!0,side:2}),Cf={green:new W(1,1,1),winter:new W(.95,.78,.48),sick:new W(.8,.72,.5),burnt:new W(.12,.1,.09)},wf=[16777215,16769772].map(e=>new W(e)),Tf=[15764028,14239546,9068484,5210064].map(e=>new W(e)),Ef=[.035,.12];function Df(e){let{world:t,globe:n,land:r,clip:i,layers:a}=e,o=Mu(457),s=[1,Math.max(1,Math.round(J/168)),Math.max(2,Math.round(J/110)),Math.max(2,Math.round(J/56))],c=[-1,1,-J,J];function l(e){let{W:n,V:r}=t,i=n[e]>Z.WSHOW;if(i&&n[e]>.02)return!1;let a=!1,o=!1,l=r[e];for(let t of c){for(let o=0;o<2;o++){let c=e+t*s[o];n[c]>Z.WSHOW!==i&&(a=!0),n[c]<=Z.WSHOW&&r[c]>l&&(l=r[c])}(n[e+t*s[2]]>.02||n[e+t*s[3]]>.02)&&(o=!0)}return a&&o&&l>.3}let u=[];for(let e=0;e<t.nAct;e++){let n=t.list[e];if(o()>.3)continue;let r=t.cx[n]+(o()-.5)*.006,i=t.cz[n]+(o()-.5)*.006;r*r+i*i>.9||u.push({x:r,z:i,ci:t.index(r,i),th:o(),rot:o()*6.283,sz:.75+o()*.5,flower:o()<.3,hue:o()*wf.length|0,ph:o()*6.283,type:-1,size:0,burn:0})}let d=xf().map((e,t)=>{let r=new Bi(e,i(Sf()),u.length);return r.castShadow=t===0,r.receiveShadow=!0,r.frustumCulled=!1,r.count=0,r.instanceMatrix.setUsage(Ue),n.group.add(r),r}),f=new nn,p=new Mt,m=new U(0,1,0),h=new U,g=new U,_=new W,v=[0,0,0,0],y=0,b=0,x=0;function S(e){for(let e=0;e<d.length;e++)d[e].visible=(e===3?a.seaPlants:a.pondPlants)&&a.lakes;if(b+=e,x+=e,y++%4)return;let n=b;b=0;let{V:i,W:o,T:s,Tavg:c,S,A:C,heat:w,L:T,char:E,fire:D,fall:O}=t;v.fill(0);for(let e of u){let t=e.ci,i=o[t],a=c[t],u=-1;if(S[t]<8e-4&&w[t]<.4&&T[t]<=0&&E[t]<.5&&(i<.02&&a>3&&a<31&&e.th<.8&&l(t)?u=0:i>=.012&&i<.05&&C[t]>.06&&a>8&&a<32&&e.th>.8&&(u=e.flower?2:1)),u<0&&e.th<.25&&i>=Ef[0]&&i<Ef[1]&&C[t]>.1&&a<30&&w[t]<.4&&T[t]<=0&&(u=3),D[t]>0&&e.type===0&&(e.burn=1),e.type<0?u>=0&&(e.type=u,e.size=.02,e.burn=0):u===e.type&&!e.burn?e.size=Math.min(1,e.size+n*.4):(e.size-=n*(e.burn?1.2:.5),e.size<=0&&(e.type=-1,e.burn=0)),e.type<0)continue;let y=Q(6,1,s[t]),b=d[e.type],k=v[e.type]++;if(e.type===0){let n=hf[0]*e.sz*(.3+.7*e.size),i=r.heightAt(e.x,e.z)-.001;p.setFromAxisAngle(m,e.rot),f.compose(h.set(e.x,i,e.z),p,g.set(n,n,n)),_.copy(Cf.green).lerp(Cf.winter,y),O[t]>.04&&_.lerp(Cf.sick,Math.min(.8,O[t]*1.3)),e.burn&&_.lerp(Cf.burnt,.9)}else if(e.type===3){let n=hf[3]*e.sz*(.3+.7*e.size),i=e.x+.002*Math.sin(x*.03+e.ph),a=e.z+.002*Math.cos(x*.023+e.ph*1.7),o=r.heightAt(i,a)+3e-4;p.setFromAxisAngle(m,e.rot+.3*Math.sin(x*.017+e.ph)),f.compose(h.set(i,o,a),p,g.set(n,n,n)),_.copy(Tf[e.ph/6.2832*Tf.length|0]),O[t]>.04&&_.lerp(Cf.sick,Math.min(.8,O[t]*1.3))}else{let n=hf[e.type]*e.sz*(.3+.7*e.size)*(1-.85*y);if(n<.002){v[e.type]--;continue}let i=r.surfaceAt(e.x,e.z)+7e-4+3e-4*Math.sin(x*1.1+e.ph);p.setFromAxisAngle(m,e.rot),f.compose(h.set(e.x,i,e.z),p,g.set(n,n,n)),_.copy(e.type===2?wf[e.hue]:Cf.green).lerp(Cf.winter,y*.7),O[t]>.04&&_.lerp(Cf.sick,Math.min(.8,O[t]*1.3))}b.setMatrixAt(k,f),b.setColorAt(k,_)}for(let e=0;e<d.length;e++){let t=d[e];t.count=v[e],t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}return{update:S,reset(){for(let e of u)e.type=-1,e.size=0,e.burn=0},counts:v,sites:u}}function Of(e,t=1){let n=Mu(e),r=new Ca(1,t);r.deleteAttribute(`uv`),r.deleteAttribute(`normal`);let i=qd(r),a=[];for(let e=0;e<4;e++){let t=new U(n()-.5,n()-.5,n()-.5).normalize();a.push({v:t,f:1.6+e*1.1+n(),p:n()*6.283,a:.2/(1+e*.7)})}let o=i.attributes.position,s=new U;for(let e=0;e<o.count;e++){s.fromBufferAttribute(o,e).normalize();let t=1+(n()-.5)*.12;for(let e of a)t+=e.a*Math.sin(s.dot(e.v)*e.f+e.p);o.setXYZ(e,s.x*t,s.y*t,s.z*t)}return i.computeVertexNormals(),i}var kf=[11,23,37],Af=()=>new za({flatShading:!0}),jf=()=>new za({color:4012086,emissive:16742950,emissiveIntensity:0,flatShading:!0}),Mf=[9407366,10261640,8356232,10853260].map(e=>new W(e)),Nf=new W(4933189),Pf=new W(16120316),Ff=new W(12376298),If=new W(16747050);function Lf(e){let{world:t,globe:n,land:r,clip:i,layers:a}=e,o=kf.map(e=>{let t=new Bi(Of(e),i(Af()),640);return t.castShadow=t.receiveShadow=!0,t.frustumCulled=!1,t.count=0,t.instanceMatrix.setUsage(Ue),n.group.add(t),t}),s=new nn,c=new Mt,l=new pn,u=new U,d=new U,f=new W,p=[0,0,0],m=0,h=0;function g(){for(let e of o)e.visible=a.rocks;if(!(m++%3)){p.fill(0),h=0;for(let e of t.rocks){if(e.gone)continue;let n=e.y+e.r*e.sy*1.25,i=r.heightAt(e.x,e.z);if(n<i-.004)continue;let m=o[e.kind],g=p[e.kind]++,_=e.r*(1-.85*e.melt*e.melt);c.setFromEuler(l.set(e.tilt,e.yaw,e.roll)),s.compose(u.set(e.x,e.y-e.melt*.5*e.r*e.sy,e.z),c,d.set(_*e.sx,_*e.sy,_*e.sz)),m.setMatrixAt(g,s),f.copy(e.fresh?Nf:Mf[e.shade*4|0]).multiplyScalar(.9+.2*e.shade),e.melt>0?f.lerp(If,Q(0,.5,e.melt)):a.snow&&t.S[e.i]>.0012&&t.W[e.i]<.004&&f.lerp(Pf,.7),m.setColorAt(g,f),e.y+e.r*e.sy*.3>i&&h++}if(a.snow&&a.lakes)for(let e of t.chunks){let n=e.shade*3|0,i=o[n],a=p[n]++,m=e.r*(.4+.6*e.life),h=.35+.25*e.shade;c.setFromEuler(l.set(e.tilt,e.yaw,e.roll));let g=r.level[e.i]+t.S[e.i];s.compose(u.set(e.x,g+m*h*.5,e.z),c,d.set(m*(.9+.5*e.shade),m*h,m*(1.4-.5*e.shade))),i.setMatrixAt(a,s),i.setColorAt(a,f.copy(Ff).multiplyScalar(.92+.16*e.shade))}for(let e=0;e<3;e++)o[e].count=p[e],o[e].instanceMatrix.needsUpdate=!0,o[e].instanceColor&&(o[e].instanceColor.needsUpdate=!0)}}return{update:g,get shown(){return h}}}var Rf=.35,zf=9e4,Bf=1200;function Vf(e){let{world:t,globe:n,land:r,clip:i,layers:a}=e,o=e.channel,s=e.riverside,c=new Uint8Array(Y),l=n.uniforms,u=new Float32Array(Y),d=new Uint8Array(Y),f=new Int32Array(Y),p=new Float32Array(zf*3),m=new Float32Array(zf*4),h=new Float32Array(zf*4),g=new Float32Array(zf*3);for(let e=1;e<g.length;e+=3)g[e]=1;let _=new Uint32Array(zf/2*6),v=new Rr;v.setAttribute(`position`,new Cr(p,3).setUsage(Ue)),v.setAttribute(`color`,new Cr(m,4).setUsage(Ue)),v.setAttribute(`flow`,new Cr(h,4).setUsage(Ue)),v.setAttribute(`normal`,new Cr(g,3)),v.setIndex(new Cr(_,1).setUsage(Ue)),v.boundingSphere=new Ar(new U,1.6),v.setDrawRange(0,0);let y={value:0},b=i(new za({vertexColors:!0,transparent:!0,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),x=b.onBeforeCompile;b.onBeforeCompile=e=>{x(e),e.uniforms.uFlowT=y,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 flow;
varying vec4 vFlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
	vFlow = flow;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uFlowT;
varying vec4 vFlow;`).replace(`#include <color_fragment>`,`#include <color_fragment>
	{
		float white = max(vFlow.z, 0.0);
		float live = step(-0.5, vFlow.z);
		// ripples run downstream, faster and thicker where the water is white; a narrow stream is too small to show them
		float ph = vFlow.x * 30.0 - uFlowT * (0.7 + 1.1 * white);
		float lane = sin(6.2832 * ph + 2.2 * vFlow.y) * sin(6.2832 * ph * 0.31 + 1.7 + vFlow.y);
		float ripple = smoothstep(0.35, 0.6, lane) * (1.0 - vFlow.y * vFlow.y) * live * smoothstep(0.7, 1.5, vFlow.w);
		diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), ripple * (0.22 + 0.5 * white) + 0.45 * white);
		// soft banks
		diffuseColor.a *= 1.0 - smoothstep(0.75, 1.0, abs(vFlow.y));
	}`)};let S=new Oi(v,b);S.renderOrder=2,S.frustumCulled=!1,S.receiveShadow=!0,n.group.add(S);let C=new Float32Array(Bf),w=new Float32Array(Bf),T=new Float32Array(Bf),E=new Float32Array(Bf),D=new Float32Array(Bf),O=new Float32Array(Bf),k=new Float32Array(Bf),A=Bf*2,j=new Float32Array(A),M=new Float32Array(A),N=new Float32Array(A),P=new Float32Array(A),F=new Float32Array(A),I=new Float32Array(A),L=new Float32Array(A),R=(e,t,n,r,i)=>.5*(2*t+(n-e)*i+(2*e-5*t+4*n-r)*i*i+(3*t-3*n+r-e)*i*i*i),ee=!0,te=0,ne=0,re=0,ie=0,z=0,ae=0,oe=new W(14938616),se=new W,ce=new W;function le(e){let t=(.7+.38*Math.log2(e/Rf))*Q(Rf,Rf*1.6,e);return t>3.2&&(t=3.2),t*X}function ue(e,t,n){for(let t=0;t<3;t++){for(let t=1;t<e-1;t++)j[t]=.25*C[t-1]+.5*C[t]+.25*C[t+1],M[t]=.25*w[t-1]+.5*w[t]+.25*w[t+1],N[t]=.25*T[t-1]+.5*T[t]+.25*T[t+1];for(let t=1;t<e-1;t++)C[t]=j[t],w[t]=M[t],T[t]=N[t]}let i=t===2?e-1:e;for(let e=0;e<i;e++){let t=r.surfaceAt(C[e],w[e]);T[e]=(T[e]>t?T[e]:t)+7e-4+.1*E[e]}let a=0;for(let t=0;t<e-1;t++){let n=t>0?t-1:0,r=t+1,i=t+2<e?t+2:e-1;for(let e=0;e<2;e++){let o=e*.5;j[a]=R(C[n],C[t],C[r],C[i],o),M[a]=R(w[n],w[t],w[r],w[i],o),N[a]=T[t]+(T[r]-T[t])*o,P[a]=E[t]+(E[r]-E[t])*o,F[a]=D[t]+(D[r]-D[t])*o,I[a]=O[t]+(O[r]-O[t])*o,L[a]=k[t]+(k[r]-k[t])*o,a++}}if(j[a]=C[e-1],M[a]=w[e-1],N[a]=T[e-1],P[a]=E[e-1],F[a]=D[e-1],I[a]=O[e-1],L[a]=k[e-1],a++,re+a*2>zf)return;let o=n,s=re;for(let e=0;e<a;e++){let t=e>0?e-1:0,n=e<a-1?e+1:a-1,r=j[n]-j[t],i=M[n]-M[t],s=Math.hypot(r,i)||1;r/=s,i/=s,e>0&&(o+=Math.hypot(j[e]-j[e-1],M[e]-M[e-1]));let c=P[e]*.5,l=I[e],u=l>1?1:l,d=se.r+(ce.r-se.r)*u*.45,f=se.g+(ce.g-se.g)*u*.45,g=se.b+(ce.b-se.b)*u*.45,_=F[e]<-.5;for(let t=-1;t<=1;t+=2){let n=re*3,a=re*4;p[n]=j[e]-i*c*t,p[n+1]=N[e],p[n+2]=M[e]+r*c*t,m[a]=_?oe.r:d,m[a+1]=_?oe.g:f,m[a+2]=_?oe.b:g,m[a+3]=L[e];let s=re*4;h[s]=o,h[s+1]=t,h[s+2]=F[e],h[s+3]=P[e]/X,re++}}for(let e=0;e<a-1;e++){let t=s+e*2;_[ie++]=t,_[ie++]=t+1,_[ie++]=t+2,_[ie++]=t+2,_[ie++]=t+1,_[ie++]=t+3}z++}function de(e){let{flux:n,rcv:i,W:a,T:p,list:m,nAct:h,cx:g,cz:_}=t,y=r.surf,b=r.level,x=ee?1:1-Math.exp(-e/.6);for(let e=0;e<h;e++){let t=m[e],r=u[t]+=(n[t]-u[t])*x;o[t]=+(r>Rf&&a[t]<Z.WSHOW),d[t]=0,c[t]=0}for(let e=0;e<h;e++){let t=m[e];if(!o[t])continue;let n=i[t];n>=0&&o[n]&&((d[n]===0||u[t]>u[f[n]])&&(f[n]=t),d[n]++)}se.copy(l.uWater.value),ce.copy(l.uWaterDeep.value),re=ie=z=ae=0;let S=(e,t,n)=>{C[e]=g[t],w[e]=_[t];let r=u[t],i=le(r);if(T[e]=b[t]>y[t]?b[t]:y[t],E[e]=i,r>.9){let e=r>4?3:2;for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++)r*r+n*n<=e*e+1&&(c[t+n*J+r]=1)}O[e]=Q(.4,8,r),k[e]=.94;let a=n>=0?y[t]-y[n]:0;D[e]=p[t]<-1.5?-1:.8*Q(.8*X,1.3*X,a)};for(let e=0;e<h;e++){let t=m[e];if(!o[t]||d[t])continue;let n=0,r=t,s=0;for(S(n++,r,i[r]);n<1199;){let e=i[r];if(e<0||e===r)break;if(!o[e]){a[e]>=Z.WSHOW&&b[e]>-8&&(C[n]=g[e],w[n]=_[e],T[n]=b[e]+8e-4,E[n]=E[n-1]*1.9,D[n]=D[n-1]<0?-1:0,O[n]=O[n-1],k[n]=0,n++,s=2);break}if(S(n++,e,i[e]),f[e]!==r){s=1,E[n-1]=E[n-2];break}r=e}n<3||(E[0]=0,s===0&&(E[n-1]=0),ae+=n,ue(n,s,t*.618034%1*3))}let A=ee?1:1-Math.exp(-e/5);for(let e=0;e<h;e++){let t=m[e];s[t]+=(c[t]-s[t])*A}v.setDrawRange(0,ie),v.attributes.position.needsUpdate=!0,v.attributes.color.needsUpdate=!0,v.attributes.flow.needsUpdate=!0,v.index.needsUpdate=!0,ee=!1}return{update(e,t){S.visible=a.rivers,t&&(y.value+=e),ne+=e,(ee||te++%6==0)&&(de(ne),ne=0)},reset(){u.fill(0),s.fill(0),ee=!0},get runs(){return z},get patches(){return ae},get corners(){return re},flowAt:e=>u[e]}}var Hf=()=>new Ca(1,1),Uf=()=>new za({color:16777215,flatShading:!0,emissive:10135480,emissiveIntensity:.35}),Wf=new W(9279656),Gf=()=>new Ca(1,2),Kf=56,qf=3600,Jf=900,Yf=1,Xf=2,Zf=3,Qf=4,$f=5,ep=6,tp=7,np=8,rp=9,ip=10,ap=[[.7,.85,1],[1,1,1],[1,1,1],[1,.42,.08],[.2,.19,.19],[.75,.85,.3],[1,1,1],[.6,.54,.46],[1,.8,.35],[.38,.36,.35],[.86,.94,1]];function op(e){let{world:t,globe:n,land:r,clip:i,layers:a}=e,o=new jn;n.group.add(o);let s=Hf(),c=new W(16777215),l=Wf,u=[];for(let e=0;e<Kf;e++){let t=new jn,n=i(Uf()),r=t=>(Math.sin(e*12.9898+t*78.233)*43758.5453%1+1)%1,a=4+e%2;for(let e=0;e<a;e++){let i=new Oi(s,n),o=.55+r(e)*.5;i.position.set((e-(a-1)/2)*.62+(r(e+9)-.5)*.3,(r(e+5)-.3)*.3,(r(e+3)-.5)*.7),i.scale.set(o,o*.62,o*.85),i.castShadow=!0,t.add(i)}t.visible=!1,t.userData={mat:n,scale:0,id:-1},o.add(t),u.push(t)}let d=u[55],f=new Map,p=(e,t)=>{let n=e*e+t*t;return Math.max(Math.min(.36,Math.sqrt(Math.max(.03,.97-n))-.1),r.heightAt(e,t)+.075)},m=new Float32Array(qf*3),h=new Float32Array(qf*3),g=new Float32Array(qf*3),_=new Float32Array(qf),v=new Uint8Array(qf),y=0,b=new Rr;b.setAttribute(`position`,new Cr(m,3).setUsage(Ue)),b.setAttribute(`color`,new Cr(g,3).setUsage(Ue)),b.boundingSphere=new Ar(new U,1.5);let x=new da(b,new oa({size:.009,map:(()=>{let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`);return t.fillStyle=`#fff`,t.beginPath(),t.arc(16,16,14,0,6.3),t.fill(),new ma(e)})(),alphaTest:.5,vertexColors:!0,sizeAttenuation:!0}));x.frustumCulled=!1,n.group.add(x);let S=new Float32Array(Jf*6),C=new Float32Array(Jf),w=0,T=new Rr;T.setAttribute(`position`,new Cr(S,3).setUsage(Ue)),T.boundingSphere=new Ar(new U,1.5);let E=new aa(T,new qi({color:10274534,transparent:!0,opacity:.7,depthWrite:!1}));E.frustumCulled=!1,E.renderOrder=2,n.group.add(E);function D(e,t,n,r,i,a,o,s){if(y>=qf||t*t+n*n+r*r>.975)return;let c=y*3;m[c]=t,m[c+1]=n,m[c+2]=r,h[c]=i,h[c+1]=a,h[c+2]=o;let l=ap[e];g[c]=l[0],g[c+1]=l[1],g[c+2]=l[2],v[y]=e,_[y]=s,y++}function O(e,t,n){if(w>=Jf||e*e+t*t+n*n>.93)return;let r=w*6;S[r]=S[r+3]=e,S[r+1]=t,S[r+4]=t+.016,S[r+2]=S[r+5]=n,C[w]=1.2+Math.random()*.5,w++}function k(e,t,n,r,i,a,o){let s=i*o;s=(s|0)+ +(Math.random()<s%1);for(let i=0;i<s;i++){let i=Math.random()*6.283,o=Math.sqrt(Math.random())*r,s=e+Math.cos(i)*o,c=n+Math.sin(i)*o*.75;a?D(Yf,s,t-.02,c,(Math.random()-.5)*.06,-.2-Math.random()*.1,(Math.random()-.5)*.06,6):O(s,t-.03-Math.random()*.03,c)}}let A={seed:0,vapour:0,lava:0,fire:0};function j(n,i){o.visible=a.clouds&&(e.cloudLook||`old`)===`old`,x.visible=E.visible=a.rain;let s=new Set;for(let a of t.clouds){s.add(a.id);let t=f.get(a.id);if(t===void 0){if(t=u.findIndex((e,t)=>t<55&&e.userData.id<0),t<0)continue;f.set(a.id,t),u[t].userData.id=a.id,u[t].userData.scale=0}let o=u[t],d=Math.min(1,a.rain/.05),m=(e.cloudLook||`old`)===`old`?p(a.x,a.z):Math.min(p(a.x,a.z),Math.max(.3,r.heightAt(a.x,a.z)+.05)),h=(.038+.02*a.seed)*a.fade*(.85+.25*a.power);o.userData.scale+=(h-o.userData.scale)*Math.min(1,n*3),o.visible=o.userData.scale>.004,o.position.set(a.x,m,a.z),o.rotation.y=-a.ang+1.57+a.seed*.6,o.scale.setScalar(Math.max(.001,o.userData.scale)),o.userData.mat.color.copy(c).lerp(l,d*.8),i&&a.rain>.002&&k(a.x,m,a.z,.075*a.fade,16+90*d,a.snow,n)}for(let[e,t]of f){if(s.has(e))continue;let r=u[t];r.userData.scale-=n*.25,r.userData.scale<=.004?(r.visible=!1,r.userData.id=-1,f.delete(e)):r.scale.setScalar(r.userData.scale)}let O=t.toolCloud,j=d.userData;if(j.scale+=((O.on>0?(.033+.028*(O.strength||0))*Math.sqrt(O.size||1):0)-j.scale)*Math.min(1,n*6),d.visible=j.scale>.004,d.visible){let e=p(O.x,O.z)-.05;d.position.set(O.x,e,O.z),d.scale.setScalar(j.scale),j.mat.color.copy(c).lerp(l,.75),O.on>.5&&k(O.x,e,O.z,.05*(O.size||1),(50+300*(O.strength||0))*(O.size||1),O.snow,n)}for(let e of t.vents){let t=r.heightAt(e.x,e.z);for(A.lava+=n*140*e.power;A.lava>=1;){--A.lava;let n=Math.random()*6.283,r=Math.random()*.15;Math.random()<.6?D(Zf,e.x,t+.01,e.z,Math.cos(n)*r,.32+Math.random()*.38,Math.sin(n)*r,2.5):D(Qf,e.x+Math.cos(n)*.02,t+.03,e.z+Math.sin(n)*.02,Math.cos(n)*.03,.11+Math.random()*.08,Math.sin(n)*.03,3+Math.random()*2)}}for(let e of t.steam){let n=t.cx[e]+(Math.random()-.5)*.03,i=t.cz[e]+(Math.random()-.5)*.03;D(ep,n,r.surfaceAt(n,i)+.01,i,(Math.random()-.5)*.05,.18+Math.random()*.12,(Math.random()-.5)*.05,1.6)}let M=t.quake>0;for(let e=y-1;e>=0;e--){let i=e*3,a=v[e],o=m[i],s=m[i+1],c=m[i+2];if(a===Zf||a===np||a===ip)h[i+1]-=1.5*n;else if(a===rp)h[i]+=(t.windX*.08-h[i])*n*.5,h[i+2]+=(t.windZ*.08-h[i+2])*n*.5,h[i+1]*=1-n*.25;else if(a===tp)h[i]*=1-n*1.6,h[i+2]*=1-n*1.6,h[i+1]+=(-.03-h[i+1])*n*1.6;else if(a===Xf){let e=M?1.6:.3;h[i]+=(-c*e-h[i])*n*2,h[i+2]+=(o*e-h[i+2])*n*2,h[i+1]+=(-.16-h[i+1])*n*1.2}else a===Yf&&(h[i]+=(Math.random()-.5)*n*.2,h[i+2]+=(Math.random()-.5)*n*.2);o+=h[i]*n,s+=h[i+1]*n,c+=h[i+2]*n,_[e]-=n;let l=o*o+s*s+c*c>.98;if(l&&a===Xf){let e=Math.sqrt(o*o+s*s+c*c);o*=.97/e,s*=.97/e,c*=.97/e,h[i]*=-.3,h[i+2]*=-.3}if(_[e]<=0||l&&a!==Xf||a!==Qf&&a!==ep&&a!==tp&&a!==rp&&h[i+1]<0&&s<r.surfaceAt(o,c)){y--;let t=y*3;m[i]=m[t],m[i+1]=m[t+1],m[i+2]=m[t+2],h[i]=h[t],h[i+1]=h[t+1],h[i+2]=h[t+2],g[i]=g[t],g[i+1]=g[t+1],g[i+2]=g[t+2],v[e]=v[y],_[e]=_[y]}else m[i]=o,m[i+1]=s,m[i+2]=c}b.setDrawRange(0,y),b.attributes.position.needsUpdate=!0,b.attributes.color.needsUpdate=!0;for(let e=w-1;e>=0;e--){let t=e*6,i=C[e]*n;if(S[t+1]-=i,S[t+4]-=i,S[t+1]<r.surfaceAt(S[t],S[t+2])){w--;let n=w*6;for(let e=0;e<6;e++)S[t+e]=S[n+e];C[e]=C[w]}}T.setDrawRange(0,w*2),T.attributes.position.needsUpdate=!0}return{update:j,flurry(){for(let e=0;e<900;e++){let e=Math.random()*6.283,t=Math.sqrt(Math.random())*.9,n=-.1+Math.random()*.9,i=Math.cos(e)*t,a=Math.sin(e)*t;n<r.surfaceAt(i,a)+.02||D(Xf,i,n,a,-a*2+(Math.random()-.5),(Math.random()-.3)*.8,i*2+(Math.random()-.5),5+Math.random()*4)}},seeds(e,t,n,i=1){A.seed+=n*60*i;let a=r.heightAt(e,t);for(;A.seed>=1;){--A.seed;let n=Math.random()*6.283,r=Math.sqrt(Math.random())*.045*i;D($f,e+Math.cos(n)*r,a+.11+Math.random()*.06,t+Math.sin(n)*r,0,-.18,0,2)}},vapour(e,t,n,i=1){for(A.vapour+=n*40*i;A.vapour>=1;){--A.vapour;let n=Math.random()*6.283,a=Math.sqrt(Math.random())*.06*i,o=e+Math.cos(n)*a,s=t+Math.sin(n)*a;D(ep,o,r.surfaceAt(o,s)+.01,s,0,.14+Math.random()*.08,0,1.4)}},streak(e,t,n,r,i,a,o,s){let c=(40+120*o)*s;c=(c|0)+ +(Math.random()<c%1);for(let s=0;s<c;s++)D(Math.random()<.4+.4*o?np:Qf,e+(Math.random()-.5)*.01,t+(Math.random()-.5)*.01,n+(Math.random()-.5)*.01,-r*.08+(Math.random()-.5)*.06,-i*.08+(Math.random()-.5)*.06,-a*.08+(Math.random()-.5)*.06,.25+Math.random()*.35)},burst(e,t,n,r,i,a,o){let s=Math.round(90+420*Math.min(1,r/.12));for(let c=0;c<s;c++){let s=Math.random()*6.283,c=Math.random(),l=Math.random();if(o&&l<.55){let i=.25+.8*c;D(ip,e+Math.cos(s)*r*.3*c,t+.01,n+Math.sin(s)*r*.3*c,Math.cos(s)*i,.6+1.1*c,Math.sin(s)*i,2+Math.random()*1.5)}else if(a&&l<.8){let i=.1+.5*c,a=l<.3;D(ep,e+Math.cos(s)*r*(a?.15:.6)*c,t+.01,n+Math.sin(s)*r*(a?.15:.6)*c,Math.cos(s)*i*(a?.15:.5),a?.5+.8*c:.2+.3*c,Math.sin(s)*i*(a?.15:.5),1.5+Math.random()*1.5)}else if(l<.3+.3*i){let r=.25+.7*c;D(l<.12+.18*i?Zf:np,e,t+.01,n,Math.cos(s)*r*.7,.45+.9*c*(.6+.6*i),Math.sin(s)*r*.7,1.2+Math.random()*1.2)}else{let i=Math.random()<.35,a=i?.05+.1*c:.4+.9*c;D(tp,e+Math.cos(s)*r*.6*c,t+.005+(i?.02*c:0),n+Math.sin(s)*r*.6*c,Math.cos(s)*a,i?.25+.35*c:.08+.1*c,Math.sin(s)*a,2.5+Math.random()*3)}}},reset(){y=w=0;for(let[,e]of f)u[e].visible=!1,u[e].userData.id=-1;f.clear()}}}var sp=2/64,cp=.07,lp=.5;function up(e){let t=new Float32Array(4096),n=new Float32Array(4096),i=new Float32Array(4096),a=new Float32Array(4096),o=new Float32Array(4096),s=new Float32Array(4096),l=new Float32Array(4096),u=new Float32Array(4096),f=new Float32Array(64);for(let e=0;e<64;e++)f[e]=-1+(e+.5)*sp;for(let e=0;e<64;e++)for(let t=0;t<64;t++){let n=Math.hypot(f[t],f[e]);u[e*64+t]=1-Q(.78,.92,n)}let p=new Uint8Array(16384),m=new ji(p,64,64,E,d);m.magFilter=m.minFilter=c,m.wrapS=m.wrapT=r,m.needsUpdate=!0;let h=new H,g=0;function _(){let t=Q(.15,.95,e.rh),n=Q(8,24,e.airT);for(let n=0;n<64;n++)for(let r=0;r<64;r++){let i=n*64+r,a=f[r],o=f[n];if(a*a+o*o>.96){s[i]=t*.35,l[i]=0;continue}let c=rd(e.rainK,a,o),u=rd(e.W,a,o)>Z.WSHOW?1:.6*rd(e.V,a,o),d=Math.min(1,Math.max(0,(c-.6)/1.4));l[i]=d,s[i]=Math.min(1,t*(.02+.42*Math.min(c,2))*(.65+.45*u))}_.warm=n,_.hum=t}_.warm=0,_.hum=0;function v(e,t,n){let r=Math.min(62.999,Math.max(0,(t+1)/sp-.5)),i=Math.min(62.999,Math.max(0,(n+1)/sp-.5)),a=r|0,o=i|0,s=r-a,c=i-o,l=o*64+a;return(e[l]*(1-s)+e[l+1]*s)*(1-c)+(e[l+64]*(1-s)+e[l+64+1]*s)*c}function y(e,t,n){for(let r=0;r<64;r++)for(let i=0;i<64;i++)o[r*64+i]=v(e,f[i]-t,f[r]-n);e.set(o)}function b(e,t,n,r,i,a){let o=Math.max(0,Math.floor((t-r+1)/sp)),s=Math.min(63,Math.ceil((t+r+1)/sp)),c=Math.max(0,Math.floor((n-r+1)/sp)),l=Math.min(63,Math.ceil((n+r+1)/sp));for(let u=c;u<=l;u++)for(let c=o;c<=s;c++){let o=((f[c]-t)**2+(f[u]-n)**2)/(r*r);if(o<1){let t=u*64+c,n=i*(1-o)*(1-o);n>e[t]&&(e[t]+=(n-e[t])*a)}}}function x(r){(g-=r)<=0&&(_(),g=lp);let o=e.windX*cp*r,c=e.windZ*cp*r;h.x+=o,h.y+=c,y(t,o,c),y(n,o,c),y(a,o,c);let d=1-Math.exp(-.22*r),f=1-Math.exp(-.35*r);for(let e=0;e<4096;e++)t[e]+=(s[e]-t[e])*d,n[e]-=n[e]*f,a[e]-=a[e]*f;for(let i of e.clouds){if(i.storm){let e=i.grow||0;b(t,i.x,i.z,.22,e,Math.min(1,r*5)),b(n,i.x,i.z,.19,e,Math.min(1,r*5)),b(a,i.x,i.z,.16,e,Math.min(1,r*5));continue}let e=Math.min(1,i.rain/.05);b(t,i.x,i.z,.1,(.6+.35*e)*i.fade,Math.min(1,r*.8)),e>0&&b(n,i.x,i.z,.09,e*i.fade,Math.min(1,r*1.5))}let v=e.toolCloud;if(v.on>0){let e=.08*Math.sqrt(v.size||1);b(t,v.x,v.z,e*1.4,1,Math.min(1,r*3)),b(n,v.x,v.z,e*1.2,Math.min(1,v.on),Math.min(1,r*4))}let x=_.warm,S=_.hum;for(let e=0;e<4096;e++){let r=t[e];i[e]=Math.min(1,Math.max(a[e],Q(.45,.95,r)*(.35+.65*l[e])*(.4+.6*x)*(.5+.5*S)+n[e]*.35));let o=e*4;p[o]=Math.round(255*r),p[o+1]=Math.round(255*Math.min(1,n[e]+.35*Q(.75,1,r))),p[o+2]=Math.round(255*i[e]),p[o+3]=Math.round(255*u[e])}m.needsUpdate=!0}function S(){_(),t.set(s),n.fill(0),a.fill(0),g=lp}return S(),{tex:m,wind:h,cover:t,dark:n,high:i,inside:u,update:x,reset:S,coverAt:(e,n)=>v(t,e,n)*v(u,e,n),darkAt:(e,t)=>v(n,e,t),highAt:(e,t)=>v(i,e,t)}}var dp=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}`;function fp(e=64){let t=(e,t)=>{let n=new Float32Array(e*e*e),r=t>>>0;for(let e=0;e<n.length;e++){r=r+1831565813>>>0;let t=r;t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),n[e]=((t^t>>>14)>>>0)/4294967296}return n},r=e=>e*e*(3-2*e),i=(n,i)=>{let a=t(n,i),o=new Float32Array(e*e*e);for(let t=0;t<e;t++)for(let i=0;i<e;i++)for(let s=0;s<e;s++){let c=s/e*n,l=i/e*n,u=t/e*n,d=c|0,f=l|0,p=u|0,m=(d+1)%n,h=(f+1)%n,g=(p+1)%n,_=r(c-d),v=r(l-f),y=r(u-p),b=(e,t,r)=>a[(r*n+t)*n+e],x=(e,t,n)=>e+(t-e)*n;o[(t*e+i)*e+s]=x(x(x(b(d,f,p),b(m,f,p),_),x(b(d,h,p),b(m,h,p),_),v),x(x(b(d,f,g),b(m,f,g),_),x(b(d,h,g),b(m,h,g),_),v),y)}return o},a=new Float32Array(e*e*e),o=.5,s=0;for(let[e,t]of[[4,11],[8,23],[16,37],[32,51]]){let n=i(e,t);for(let e=0;e<a.length;e++)a[e]+=n[e]*o;s+=o,o*=.5}let l=new Uint8Array(a.length);for(let e=0;e<a.length;e++)l[e]=Math.max(0,Math.min(255,Math.round(((a[e]/s-.5)*1.6+.5)*255)));let u=new tn(l,e,e,e);return u.format=k,u.type=d,u.minFilter=u.magFilter=c,u.wrapS=u.wrapT=u.wrapR=n,u.unpackAlignment=1,u.needsUpdate=!0,u}var pp=28,mp=4,hp=2.4,gp=.3;function _p(e,t){let{globe:n,land:r,clip:i}=e,a=784*mp,o={uFlash:{value:new Zt(0,.4,0,0)},uTime:{value:0},uRim:{value:.3},uRimColor:{value:new W(1,.9,.75)}},s=new za({color:16777215,flatShading:!0,emissive:10135480,emissiveIntensity:.3});i(s);let c=s.onBeforeCompile;s.onBeforeCompile=e=>{c(e),Object.assign(e.uniforms,o),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nuniform float uTime;\nvarying float vY;\nvarying vec3 vWp;\n${dp}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vY = position.y;
  vec3 wp = (instanceMatrix * vec4(position, 1.0)).xyz;
  vWp = wp;
  // boil: the surface heaves slowly, in world space so neighbours agree
  float b = snoise(wp * 28.0 + vec3(0.0, uTime * 0.18, uTime * 0.07)) * 0.7 + snoise(wp * 61.0 - vec3(uTime * 0.11)) * 0.3;
  transformed += normal * b * 0.16;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uRim;
uniform vec3 uRimColor;
uniform vec4 uFlash;
varying float vY;
varying vec3 vWp;`).replace(`#include <color_fragment>`,`#include <color_fragment>
  diffuseColor.rgb *= mix(0.74, 1.0, smoothstep(-0.75, 0.55, vY));`).replace(`#include <opaque_fragment>`,`float rim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0);
  outgoingLight += uRimColor * rim * uRim;
  // lightning lights the cloud from inside, brightest round the stroke, and from below
  vec3 fd = vWp - uFlash.xyz;
  float fl = uFlash.w * exp(-dot(fd, fd) / 0.012) * (0.8 + 0.6 * (1.0 - smoothstep(-0.6, 0.3, vY)));
  outgoingLight += vec3(0.78, 0.82, 1.0) * fl * 1.4;
  #include <opaque_fragment>`)};let l=new Bi(Gf(),s,a);l.instanceMatrix.setUsage(Ue),l.instanceColor=new Mi(new Float32Array(a*3),3).setUsage(Ue),l.castShadow=!0,l.frustumCulled=!1,l.visible=!1,n.group.add(l);let u=(()=>{let e=3107613;return()=>(e=Math.imul(e^e>>>15,739982445)+1831565813>>>0)/4294967296})(),d=Array.from({length:144},u),f=(e,t)=>{let n=(e/hp+.5)*12%12,r=(t/hp+.5)*12%12,i=Math.floor(n),a=Math.floor(r),o=n-i,s=r-a,c=e=>e*e*(3-2*e),l=(e,t)=>d[t%12*12+e%12],u=l(i,a)+(l(i+1,a)-l(i,a))*c(o);return u+(l(i,a+1)+(l(i+1,a+1)-l(i,a+1))*c(o)-u)*c(s)},p=[],m=hp/pp;for(let e=0;e<pp;e++)for(let t=0;t<pp;t++)p.push({ax:-2.4/2+(t+.5+(u()-.5)*.8)*m,az:-2.4/2+(e+.5+(u()-.5)*.8)*m,thr:0,size:.034+.026*u(),spin:u()*6.283,lean:u()*6.283,dy:(u()-.5)*.03});for(let e of p){let t=f(e.ax,e.az);e.thr=.12+1*(1-t)*(1-t)+.12*u(),e.size*=.8+.5*t}let h=new nn,g=new U,_=new Mt,v=new U,y=new U(0,1,0),b=new W,x=new W(1,1,1),S=new W(8358554),C=new W(4080978),w=new nn().makeScale(0,0,0),T=e=>((e+hp/2)%hp+hp)%hp-hp/2;function E(e){o.uTime.value+=e;let i=n.state.sunY,a=Math.max(0,1-Math.abs(i-.08)/.3);o.uRim.value=(.12+.55*a)*(.3+.7*n.state.light),o.uRimColor.value.setRGB(1,.92-.2*a,.8-.35*a);let s=n.state.flash;s&&o.uFlash.value.set(s.x,s.y,s.z,s.k);let c=0;for(let e of p){let n=T(e.ax+t.wind.x),i=T(e.az+t.wind.y),a=n*n+i*i<.9?t.coverAt(n,i):0,o=Q(e.thr-.1,e.thr+.12,a);if(o<.02){for(let e=0;e<mp;e++)l.setMatrixAt(c++,w);continue}let s=t.highAt(n,i),u=t.darkAt(n,i),d=e.size*(.45+.55*o),f=Math.max(gp+e.dy+.25*d,r.heightAt(n,i)+.05+d*.4);b.copy(x).lerp(S,Math.min(1,u*.85+.2*s));let p=Math.max(0,u-.35)/.5*Q(.35,.75,s);p>0&&b.lerp(C,Math.min(1,p));let m=Q(e.thr,e.thr+.25,a),E=Q(.15,.7,s)*o;for(let t=0;t<mp;t++){let r=0,a=0,o=0,u=d,p=.68;if(t===1||t===2){let n=e.lean+(t===1?0:Math.PI)+.4*Math.sin(e.spin);r=Math.cos(n)*d*.95,o=Math.sin(n)*d*.75,a=-.22*d,u=d*(.5+.25*m)*m}else if(t===3){a=d*(.55+.9*E),u=d*.8*E,p=.9;let e=Q(.7,.95,s);e>0&&(a+=d*1.4*e,u*=1+.9*e,p=.9-.5*e)}u<.002?l.setMatrixAt(c++,w):(g.set(n+r,f+a,i+o),_.setFromAxisAngle(y,e.spin+t),v.set(u,u*(t===0?p+.25*E:p),u*.92),l.setMatrixAt(c,h.compose(g,_,v)),l.setColorAt(c++,b))}}l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0}return{mesh:l,update:E,set visible(e){l.visible=e}}}var vp=160,yp=.31,bp=`
uniform sampler2D tCloud;
uniform vec2 uWind;
uniform float uTime;
${dp}
float deckThick(vec2 xz, out float dark) {
  vec4 m = texture2D(tCloud, (xz + 1.0) * 0.5);
  float cov = m.r * m.a;
  dark = m.g;
  vec2 a = xz - uWind; // where this bit of air was at the start
  float n = snoise(vec3(a * 6.0, uTime * 0.012)) * 0.72 + snoise(vec3(a * 14.0, uTime * 0.025 + 3.0)) * 0.28;
  float d = cov + 0.45 * n - 0.42;  // more cover: more of the noise comes over the threshold
  float s = clamp(d / 0.22, 0.0, 1.0);
  float t = 1.0 - (1.0 - s) * (1.0 - s); // steep sides, rounded tops
  return t * (0.035 + 0.11 * m.b);   // towers where the map's height channel is up
}`;function xp(e,t,n){e.customProgramCacheKey=()=>`cloud-deck-`+(n?`bottom`:`top`)+`-`+e.type,e.onBeforeCompile=(r,...i)=>{e.userData.clipHook&&e.userData.clipHook(r,...i),Object.assign(r.uniforms,t),r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>\n${bp}\nvarying float vT;\nvarying float vDark;\nvarying float vH;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  float dk;
  float t = deckThick(transformed.xz, dk);
  vT = t; vDark = dk;
  vH = ${n?`-0.35`:`1.0`} * t;
  transformed.y += ${n?`-0.35 * t`:`t`};`);let a=`if (vT < 0.0015) discard;`;r.fragmentShader=r.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vT;
varying float vDark;
varying float vH;`),r.fragmentShader=r.fragmentShader.includes(`#include <color_fragment>`)?r.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
  ${a}
  // greyer for rain, darker towards the base
  diffuseColor.rgb *= mix(vec3(1.0), vec3(0.52, 0.56, 0.62), clamp(vDark * 0.9, 0.0, 1.0));
  diffuseColor.rgb *= mix(0.68, 1.0, smoothstep(-0.03, 0.08, vH));`):r.fragmentShader.replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>\n  ${a}`)}}function Sp(e,t){let{globe:n,clip:r}=e,i={tCloud:{value:t.tex},uWind:{value:t.wind},uTime:{value:0}},a=new Ta(1.9,1.9,vp,vp);a.rotateX(-Math.PI/2),a.translate(0,yp,0);let o=[!1,!0].map(e=>{let t=new za({color:16777215,flatShading:!0,emissive:10135480,emissiveIntensity:.14,side:+!!e});r(t),t.userData.clipHook=t.onBeforeCompile,xp(t,i,e);let o=new Oi(a,t);if(o.frustumCulled=!1,o.castShadow=!e,!e){let e=new Ba({depthPacking:Ie});xp(e,i,!1),o.customDepthMaterial=e}return o.visible=!1,n.group.add(o),o});return{update(e){i.uTime.value+=e},set visible(e){for(let t of o)t.visible=e}}}var Cp=.26,wp=.66,Tp=.3,Ep=`
varying vec3 vL;
void main() {
  vL = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Dp=`
precision highp float;
precision highp sampler3D;
uniform sampler2D tCloud, tData;
uniform sampler3D tNoise;
uniform vec3 uCam, uSunDir, uSunCol, uSkyA, uSkyB;
uniform vec2 uWind;
uniform float uTime, uLight, uSteps;
varying vec3 vL;

vec2 uvOf(vec2 xz) { return ((xz + 1.0) / ${X.toFixed(8)} + 0.5) / ${J.toFixed(1)}; }

// cloud density at p, 0..1; also hands back the map's darkness there
float dens(vec3 p, out float dark) {
  vec4 m = texture2D(tCloud, (p.xz + 1.0) * 0.5);
  dark = m.g;
  float cov = m.r * m.a;
  if (cov < 0.03) return 0.0;
  float top = ${Tp.toFixed(3)} + 0.07 + 0.3 * m.b;            // towers climb where the map says
  float h = (p.y - ${Tp.toFixed(3)}) / (top - ${Tp.toFixed(3)});
  if (h < 0.0 || h > 1.0) return 0.0;
  float prof = smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.35, 1.0, h)); // flat bases, rounded tops
  vec3 a = vec3(p.x - uWind.x, p.y, p.z - uWind.y);
  float n = texture(tNoise, a * vec3(1.6, 2.2, 1.6) + vec3(0.0, uTime * 0.004, 0.0)).r;
  float d = texture(tNoise, a * 5.3 - vec3(uTime * 0.01)).r;  // detail, eats into the edges
  float shape = n * prof - (1.0 - prof) * 0.2 - d * 0.18;
  return clamp((shape - (1.0 - cov) * 0.55) * 4.0, 0.0, 1.0);
}

// how far the ray (o + d t) is inside the box and the glass
vec2 slab(vec3 o, vec3 d) {
  vec3 inv = 1.0 / d;
  vec3 lo = (vec3(-0.97, ${Cp.toFixed(3)}, -0.97) - o) * inv, hi = (vec3(0.97, ${wp.toFixed(3)}, 0.97) - o) * inv;
  vec3 a = min(lo, hi), b = max(lo, hi);
  float t0 = max(max(a.x, a.y), a.z), t1 = min(min(b.x, b.y), b.z);
  float bq = dot(o, d), c = dot(o, o) - 0.97 * 0.97, disc = bq * bq - c;
  if (disc < 0.0) return vec2(1.0, 0.0);
  float s = sqrt(disc);
  return vec2(max(t0, -bq - s), min(t1, -bq + s));
}

void main() {
  vec3 ro = uCam, rd = normalize(vL - uCam);
  vec2 tt = slab(ro, rd);
  if (tt.x >= tt.y) discard;
  float len = tt.y - tt.x;
  float dt = len / uSteps;
  // start a random fraction of a step in, to hide banding
  float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  float t = tt.x + dt * jit;
  float T = 1.0;           // light still getting through
  vec3 col = vec3(0.0);
  vec3 amb = mix(uSkyB, uSkyA, 0.6) * (0.32 + 0.38 * uLight) + vec3(0.3, 0.33, 0.42) * (1.0 - uLight); // moonlit at night
  vec3 sunC = uSunCol * (0.18 + 0.95 * uLight);
  for (int i = 0; i < 64; i++) {
    if (float(i) >= uSteps || T < 0.02) break;
    vec3 p = ro + rd * t;
    if (p.y < texture2D(tData, uvOf(p.xz)).r) break; // into the land
    float dark;
    float d = dens(p, dark);
    if (d > 0.0) {
      // light towards the sun: two short looks
      float dk2;
      float l = dens(p + uSunDir * 0.018, dk2) * 0.5 + dens(p + uSunDir * 0.045, dk2) * 0.35 + dens(p + uSunDir * 0.09, dk2) * 0.25;
      float sun = exp(-l * 7.0);
      sun *= 1.0 - 0.35 * exp(-d * 4.0); // powder: thin edges glow less than sunlit bulk
      float hgt = clamp((p.y - ${Tp.toFixed(3)}) / 0.25, 0.0, 1.0);
      vec3 alb = mix(vec3(1.0), vec3(0.5, 0.54, 0.6), clamp(dark * 0.9, 0.0, 1.0));
      vec3 c = alb * (sunC * sun + amb * mix(0.45, 1.0, hgt));
      float a = 1.0 - exp(-d * 80.0 * dt);
      col += T * a * c;
      T *= 1.0 - a;
    }
    t += dt;
  }
  float alpha = 1.0 - T;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(col, alpha); // premultiplied
}`;function Op(e,t){let{globe:n,camera:r}=e,i=n.uniforms,a={tCloud:{value:t.tex},tData:i.tData,tNoise:{value:fp(64)},uCam:{value:new U},uSunDir:i.uSunDir,uSunCol:{value:new W(1,.97,.9)},uSkyA:i.uSkyA,uSkyB:i.uSkyB,uLight:i.uLight,uWind:{value:t.wind},uTime:{value:0},uSteps:{value:48}},o=new va(1.94,.4,1.94);o.translate(0,.92/2,0);let s=new Oi(o,new La({uniforms:a,vertexShader:Ep,fragmentShader:Dp,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:5,blendSrc:201,blendDst:205}));s.renderOrder=1,s.frustumCulled=!1,s.visible=!1,n.group.add(s);let c=null;return e.scene.traverse(e=>{e.isDirectionalLight&&!c&&(c=e)}),{mesh:s,steps:a.uSteps,update(e){a.uTime.value+=e,a.uCam.value.copy(r.position).sub(n.group.position),c&&a.uSunCol.value.copy(c.color)},set visible(e){s.visible=e}}}var kp=[{id:`old`,label:`Old puffs`},{id:`puffs`,label:`A · Better puffs`},{id:`deck`,label:`B · Cloud deck`},{id:`volume`,label:`C · Soft clouds`}];function Ap(e){let t=up(e.world),n={puffs:_p(e,t),deck:Sp(e,t),volume:Op(e,t)},r=`puffs`;try{r=localStorage.getItem(`globe-cloud-look`)||r}catch{}return kp.some(e=>e.id===r)||(r=`puffs`),e.cloudLook=r,{map:t,looks:n,get look(){return r},setLook(t){if(kp.some(e=>e.id===t)){r=e.cloudLook=t;try{localStorage.setItem(`globe-cloud-look`,t)}catch{}}},update(i){t.update(i);let a=e.layers.clouds;for(let[e,t]of Object.entries(n))t.visible=a&&r===e,a&&r===e&&t.update(i)},reset(){t.reset()}}}var jp=J/2,Mp=25,Np=2*X,Pp=[[65,12,7],[170,35,7],[235,85,8],[255,164,26],[255,229,116],[255,251,221]],Fp=Array.from({length:37},(e,t)=>{let n=t/36*5,r=Math.min(4,Math.floor(n));return Pp[r].map((e,t)=>Math.round(e*(1-n+r)+Pp[r+1][t]*(n-r)))}),Ip=Array.from({length:37},(e,t)=>{let n=t/36;return[255,Math.round(65+190*n),Math.round(8+170*n*n)]}),Lp=Array.from({length:37},(e,t)=>{let n=1-t/36,r=Math.round(58+120*n);return[r+6,r+2,r]}),Rp=[[26,14,12],[38,18,14],[48,22,16]],zp={flame:{emit:40,cap:1500,life:.62,rise:.5,drift:.25,sway:1.4,size:1.5,alpha:.95,palette:Fp},spark:{emit:9,cap:500,life:1.6,rise:1.3,drift:1.4,sway:.6,size:.5,alpha:1,palette:Ip},smoke:{emit:7,cap:700,life:2.6,rise:.32,drift:1.9,sway:.8,size:2.4,alpha:.45,palette:Lp}},Bp=80,Vp=zp.flame.cap+zp.spark.cap+zp.smoke.cap+Bp,Hp=`
uniform sampler2D tData;
uniform sampler2D tLavaH;
varying vec2 vUv;
vec2 uvOf(vec2 xz) { return ((xz + 1.0) / ${X.toFixed(8)} + 0.5) / ${J.toFixed(1)}; }
void main() {
  vUv = uv;
  vec3 p = position;
  vec4 d = texture2D(tData, uvOf(p.xz));
  p.y = max(d.r + d.a, d.g) + texture2D(tLavaH, uv).r + 0.003; // on the land, over any snow or lava; on the water where oil burns on it
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,Up=`
uniform sampler2D tFire;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(tFire, vUv);
  if (c.a < 0.5) discard;
  gl_FragColor = vec4(c.rgb, 1.0);
  #include <colorspace_fragment>
}`,Wp=`
attribute float alpha;
attribute float size;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = color;
  vAlpha = alpha;
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_PointSize = clamp(uScale * size / -p.z, 1.0, 48.0);
}`,Gp=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(vColor, vAlpha);
  #include <colorspace_fragment>
}`,Kp=e=>{let t=Math.imul(e^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),((t^t>>>16)>>>0)/4294967296};function qp(e){let{world:t,globe:n,land:r,camera:i,renderer:o}=e,s=new Float32Array(jp*jp),l=new Uint8Array(jp*jp),u=new Float32Array(jp*jp),f=[],p=new Uint8Array(jp*jp),m=new Float32Array(jp*jp),h=[],g=new Float32Array(jp*jp),_=new Float32Array(jp*jp),y=[],b=[],x=new ji(new Uint8Array(jp*jp*4),jp,jp,E,d);x.magFilter=x.minFilter=a,x.colorSpace=Le,x.needsUpdate=!0;let S=yr.toHalfFloat,C=new ji(new Uint16Array(jp*jp),jp,jp,k,v);C.magFilter=C.minFilter=c,C.needsUpdate=!0;let w=jp*Np,T=new Ta(w,w,jp,jp);T.rotateX(-Math.PI/2),T.translate(-1-X/2+w/2,0,-1-X/2+w/2);let D=T.attributes.uv;for(let e=0;e<D.count;e++)D.setY(e,1-D.getY(e));let O=new Oi(T,new La({uniforms:{tData:n.uniforms.tData,tFire:{value:x},tLavaH:{value:C}},vertexShader:Hp,fragmentShader:Up,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));O.frustumCulled=!1,O.visible=!1,n.group.add(O);let A=new wo(16738842,0,.7,2);n.group.add(A);let j=new Float32Array(Vp*3),M=new Float32Array(Vp*3),N=new Float32Array(Vp),P=new Float32Array(Vp),F=new Rr;F.setAttribute(`position`,new Cr(j,3).setUsage(Ue)),F.setAttribute(`color`,new Cr(M,3).setUsage(Ue)),F.setAttribute(`alpha`,new Cr(N,1).setUsage(Ue)),F.setAttribute(`size`,new Cr(P,1).setUsage(Ue));let I=new La({uniforms:{uScale:{value:400}},vertexShader:Wp,fragmentShader:Gp,vertexColors:!0,transparent:!0,depthWrite:!1}),L=new da(F,I);L.frustumCulled=!1,L.renderOrder=2,n.group.add(L);let R=Object.fromEntries(Object.entries(zp).map(([e,t])=>[e,t.palette.map(e=>new W().setRGB(e[0]/255,e[1]/255,e[2]/255,Le))])),ee=[],te={flame:0,spark:0,smoke:0},ne=0,re=[],ie=[],z=e=>-1+(e%jp*2+.5)*X,ae=e=>-1+((e/jp|0)*2+.5)*X,oe=(e,t,n)=>{let r=t*4;e[r]=n[0],e[r+1]=n[1],e[r+2]=n[2],e[r+3]=255};function se(e,t,n,r,i,a=.08){if(te[e]>=zp[e].cap)return;let o=Math.random()*6.283;ee.push({type:e,x:t,y:n,z:r,vx:Math.cos(o)*a*Np,vz:Math.sin(o)*a*Np,vy:(.2+Math.random()*.6)*Np*i,age:0,life:12+Math.floor(Math.random()*18),size:.8+Math.random()*.65,phase:Math.random()*6.283}),te[e]++}function ce(){let e=x.image.data,i=t.L,a=t.LT;for(let e of t.fireList){let n=((e/J|0)>>1)*jp+(e%J>>1);l[n]=1,p[n]||(p[n]=1,s[n]=Math.max(s[n],18),u[n]=Math.max(u[n],.045*Math.min(1,t.V[e]+.3)),f.push(n))}for(let e of b)g[e]=0,_[e]=0;y.length=0;let o=t.lavaBox;if(o)for(let e=Math.max(0,o.z0);e<=Math.min(J-1,o.z1);e++)for(let t=Math.max(0,o.x0);t<=Math.min(J-1,o.x1);t++){let n=e*J+t,r=i[n];if(r<8e-4)continue;let o=(e>>1)*jp+(t>>1);g[o]===0&&y.push(o),r>g[o]&&(g[o]=r),a[n]>_[o]&&(_[o]=a[n])}for(let t of b)g[t]===0&&!p[t]&&!(m[t]>0)&&(e[t*4+3]=0);let c=C.image.data;for(let e of b)g[e]===0&&(c[e]=0);ie.length=0;for(let t of y){c[t]=S(g[t]);let n=_[t];if(p[t])continue;let r=Math.min(1,Math.max(0,(.92-n)/.6)),i=Kp(t),a=3+27*n*n*n;i<r?Math.random()<.1*(1-r*.7)?oe(e,t,Fp[Math.max(1,Math.min(36,Math.floor(a-6+Math.random()*6)))]):oe(e,t,Rp[i*30%3|0]):oe(e,t,Fp[Math.max(0,Math.min(36,Math.floor(a+(Math.random()-.5)*7)))]),n>.6&&ie.push(t)}[b,y]=[y,b],C.needsUpdate=!0,re.length=0;let d=0;for(let t=0;t<f.length;t++){let n=f[t],r=s[n];l[n]?(r=Math.min(36,r+3+Math.random()*2),r>20&&re.push(n)):r-=1.3+Math.random()*1.8,l[n]=0,r<=1?(s[n]=0,p[n]=0,u[n]=0,e[n*4+3]=0,Kp(n+7)<.55&&(m[n]>0||h.push(n),m[n]=2+4*Math.random())):(s[n]=r,oe(e,n,Fp[Math.min(36,Math.max(0,Math.floor(r+(Math.random()-.5)*5)))]),f[d++]=n)}f.length=d;let v=0;for(let t=0;t<h.length;t++){let n=h[t];p[n]||g[n]>0?m[n]=0:(m[n]-=1/Mp,m[n]<=0?(m[n]=0,e[n*4+3]=0):(Math.random()<.08*Math.min(1,m[n])?oe(e,n,Fp[3+(Math.random()*8|0)]):e[n*4+3]=0,h[v++]=n))}h.length=v,x.needsUpdate=!0,O.visible=d>0||b.length>0||v>0;for(let e of[`flame`,`spark`,`smoke`]){let t=zp[e];for(let n=0;n<t.emit&&re.length&&te[e]<t.cap;n++){let t=re[Math.random()*re.length|0],n=z(t)+(Math.random()-.5)*Np,i=ae(t)+(Math.random()-.5)*Np,a=e!==`smoke`&&Math.random()<.5?u[t]*(.6+.4*Math.random()):0;ee.push({type:e,x:n,z:i,y:r.surfaceAt(n,i)+.004+a+(e===`smoke`?u[t]:0),vx:(.03+Math.random()*.1)*Np,vz:(-.03+Math.random()*.06)*Np,vy:(.45+Math.random()*.5)*Np,age:0,life:20+Math.floor(Math.random()*24),size:.8+Math.random()*.65,phase:Math.random()*6.283}),te[e]++}}for(let e=0;e<5&&ie.length;e++){let e=ie[Math.random()*ie.length|0],t=z(e)+(Math.random()-.5)*Np,n=ae(e)+(Math.random()-.5)*Np;se(Math.random()<.7?`spark`:`flame`,t,r.heightAt(t,n)+g[e]+.003,n,.7,.05)}for(let e of t.bombs)se(`spark`,e.x,e.y,e.z,.15);for(let e of t.bombHits.splice(0)){let t=e.wet?3:e.big?28:9;for(let n=0;n<t;n++)se(`flame`,e.x+(Math.random()-.5)*Np,e.y+.003,e.z+(Math.random()-.5)*Np,.8);for(let n=0;n<t;n++)se(`spark`,e.x,e.y+.004,e.z,1.2)}let w=t.windX,T=t.windZ;for(let e=ee.length-1;e>=0;e--){let t=ee[e],n=zp[t.type];if(t.age++,t.age>=t.life*n.life){te[t.type]--,ee[e]=ee[ee.length-1],ee.pop();continue}let r=Math.sin(t.phase+t.age*.3)*.07*Np*n.sway,i=t.vx*n.drift,a=t.vz*n.drift+r;t.x+=w*i-T*a,t.z+=T*i+w*a,t.y+=t.vy*n.rise,t.vy*=.99}let E=0,D=0,k=0;for(let e of re)E+=z(e),D+=ae(e),k++;for(let e of ie)E+=z(e),D+=ae(e),k++;k?(E/=k,D/=k,A.position.set(E,r.surfaceAt(E,D)+.08,D),A.intensity=Math.min(1,k/150)*(.008+.06*(1-n.state.light))):A.intensity=0}function le(){let e=0;for(let n of t.bombs){if(e>=Bp)break;let t=e*3;j[t]=n.x,j[t+1]=n.y,j[t+2]=n.z,R.flame[30+(Math.random()*6|0)].toArray(M,t),N[e]=1,P[e]=(1.6+n.r*150)*Np,e++}for(let t of ee){let n=zp[t.type],r=Math.max(0,1-t.age/(t.life*n.life)),i=e*3;j[i]=t.x,j[i+1]=t.y,j[i+2]=t.z,R[t.type][Math.min(36,Math.floor(8+r*28))].toArray(M,i),N[e]=Math.min(1,r*2)*n.alpha,P[e]=t.size*n.size*Np*(t.type===`smoke`?.6+.8*(1-r):1),e++}F.setDrawRange(0,e);for(let e of[`position`,`color`,`alpha`,`size`])F.attributes[e].needsUpdate=!0;L.visible=e>0}return{sparks(e,t,n,r){for(let i=0;i<r;i++)se(`spark`,e,t,n,1.4)},update(e){if(I.uniforms.uScale.value=o.domElement.height/(2*Math.tan(i.fov*Math.PI/360)),!(t.fireList.length||f.length||ee.length||t.bombs.length||t.bombHits.length||t.lavaAny||b.length||h.length)){O.visible=L.visible=!1,A.intensity=0;return}ne+=e;let n=0;for(;ne>=1/Mp&&n<3;)ne-=1/Mp,ce(),n++;ne>1/Mp&&(ne=0),(n||t.bombs.length)&&le()},reset(){for(let e of f)s[e]=0,p[e]=0,u[e]=0;f.length=0;for(let e of h)m[e]=0;h.length=0;for(let e of b)g[e]=0,_[e]=0;b.length=0,x.image.data.fill(0),x.needsUpdate=!0,C.image.data.fill(0),C.needsUpdate=!0,ee.length=0,te.flame=te.spark=te.smoke=0,O.visible=L.visible=!1,A.intensity=0}}}var Jp=2400,Yp=`
attribute vec3 a;
attribute vec3 b;
attribute vec2 corner; // x: 0 at a, 1 at b; y: -1 / +1 across
attribute float w;     // full width, buffer pixels
attribute float c;     // core width, buffer pixels
attribute float k;     // brightness 0..1
uniform vec2 uRes;
varying float vPx;
varying float vW;
varying float vC;
varying float vK;
void main() {
  vec4 ca = projectionMatrix * modelViewMatrix * vec4(a, 1.0);
  vec4 cb = projectionMatrix * modelViewMatrix * vec4(b, 1.0);
  vec2 sa = ca.xy / ca.w * uRes * 0.5, sb = cb.xy / cb.w * uRes * 0.5;
  vec2 d = sb - sa;
  d = length(d) > 1e-4 ? normalize(d) : vec2(0.0, 1.0);
  vec2 n = vec2(-d.y, d.x);
  vec4 p = corner.x < 0.5 ? ca : cb;
  float hw = 0.5 * w;
  // reach a little past each end so the kinks join up
  vec2 off = n * corner.y * hw + d * (corner.x < 0.5 ? -1.0 : 1.0) * c * 0.5;
  p.xy += off / (uRes * 0.5) * p.w;
  gl_Position = p;
  vPx = corner.y * hw;
  vW = hw;
  vC = 0.5 * c;
  vK = k;
}`,Xp=`
uniform vec3 uCore;
uniform vec3 uEdge;
uniform vec3 uGlow;
varying float vPx;
varying float vW;
varying float vC;
varying float vK;
void main() {
  float x = abs(vPx);
  float core = 1.0 - smoothstep(vC - 0.5, vC + 0.6, x);
  float edge = 1.0 - smoothstep(vC + 0.4, vC + 1.6, x);
  float glow = exp(-3.0 * x * x / (vW * vW + 0.01));
  vec3 col = mix(mix(uGlow, uEdge, edge), uCore, core);
  float alpha = max(core, max(edge * 0.75, glow * 0.4)) * vK;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(col, alpha);
  #include <colorspace_fragment>
}`,Zp=`
attribute float k;
attribute float size;
varying float vK;
void main() {
  vK = k;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size;
}`,Qp=`
varying float vK;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float r = dot(q, q) * 4.0;
  float a = (exp(-r * 9.0) + 0.35 * exp(-r * 2.5)) * vK;
  if (a < 0.004) discard;
  gl_FragColor = vec4(mix(vec3(0.6, 0.65, 1.0), vec3(1.0), exp(-r * 6.0)), a);
  #include <colorspace_fragment>
}`,$p=(e,t,n)=>e>=t?Math.exp(-(e-t)/n):0,em=(e,t)=>e+Math.random()*(t-e);function tm(e,t,n,r){let i=[e,t],a=Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2])*r;for(let e=0;e<n;e++){let e=[i[0]];for(let t=0;t<i.length-1;t++){let n=i[t],r=i[t+1],o=Math.random()*6.283,s=(Math.random()-.5)*2*a;e.push([(n[0]+r[0])/2+Math.cos(o)*s,(n[1]+r[1])/2+(Math.random()-.5)*a*.4,(n[2]+r[2])/2+Math.sin(o)*s],r)}i=e,a*=.56}return i}function nm(e){let{world:t,globe:n,land:r,camera:i,renderer:a,sparks:o}=e,s=Jp*4,c=new Float32Array(s*3),l=new Float32Array(s*3),u=new Float32Array(s),d=new Float32Array(s),f=new Float32Array(s),p=new Float32Array(s*2),m=new Uint32Array(Jp*6);for(let e=0;e<Jp;e++)p.set([0,-1,0,1,1,-1,1,1],e*8),m.set([e*4,e*4+1,e*4+2,e*4+2,e*4+1,e*4+3],e*6);let h=new Rr,g=(e,t)=>new Cr(e,t).setUsage(Ue);h.setAttribute(`a`,g(c,3)),h.setAttribute(`b`,g(l,3)),h.setAttribute(`w`,g(u,1)),h.setAttribute(`c`,g(d,1)),h.setAttribute(`k`,g(f,1)),h.setAttribute(`corner`,new Cr(p,2)),h.setAttribute(`position`,new Cr(new Float32Array(s*3),3)),h.setIndex(new Cr(m,1));let _=(e,t,n)=>new W().setRGB(e,t,n,Le),v=new La({uniforms:{uRes:{value:new H(1,1)},uCore:{value:_(1,1,1)},uEdge:{value:_(.62,.52,1)},uGlow:{value:_(.42,.5,1)}},vertexShader:Yp,fragmentShader:Xp,transparent:!0,depthWrite:!1,side:2}),y=new Oi(h,v);y.frustumCulled=!1,y.renderOrder=3,y.visible=!1,n.group.add(y);let b=new Float32Array(48),x=new Float32Array(16),S=new Float32Array(16),C=new Rr;C.setAttribute(`position`,g(b,3)),C.setAttribute(`k`,g(x,1)),C.setAttribute(`size`,g(S,1));let w=new da(C,new La({vertexShader:Zp,fragmentShader:Qp,transparent:!0,depthWrite:!1}));w.frustumCulled=!1,w.renderOrder=3,w.visible=!1,n.group.add(w);let T=new wo(13163775,0,1.6,2);n.group.add(T),n.state.flash={x:0,y:.4,z:0,k:0};let E=[],D=[];function O(e,t,n){let i=[],a=Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),o=(e,t,n,r,o)=>{let s=0,c=e.reduce((t,n,r)=>r?t+Math.hypot(n[0]-e[r-1][0],n[1]-e[r-1][1],n[2]-e[r-1][2]):0,0)||1;for(let l=0;l<e.length-1;l++){let u=e[l],d=e[l+1],f=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]);i.push(u[0],u[1],u[2],d[0],d[1],d[2],t+s/a,n,r*(1-s/c*o)),s+=f}return s},s=tm(e,t,n?6:5,n?.3:.18);o(s,0,0,1,n?0:.5);let c=n?2+(Math.random()*4|0):3+(Math.random()*3|0),l=0,u=s.map((e,t)=>t?l+=Math.hypot(e[0]-s[t-1][0],e[1]-s[t-1][1],e[2]-s[t-1][2]):0);for(let e=0;e<c;e++){let e=Math.floor(em(.1,n?.75:.9)*(s.length-1)),t=s[e],i=u[e]/a,c=a*em(.15,.4)*(n?1-.6*i:.7),l=Math.random()*6.283,d=n?em(.5,1.1):em(-.1,.25),f=[t[0]+Math.cos(l)*c,t[1]-c*d,t[2]+Math.sin(l)*c];n&&(f[1]=Math.max(f[1],r.heightAt(f[0],f[2])+.012));let p=tm(t,f,5,.3);o(p,i,1,.9,.85);for(let e=0,t=Math.random()*3|0;e<t;e++){let e=2+(Math.random()*(p.length-4)|0),t=p[e],s=c*em(.25,.45),u=l+em(-1,1),f=[t[0]+Math.cos(u)*s,t[1]-s*d,t[2]+Math.sin(u)*s];n&&(f[1]=Math.max(f[1],r.heightAt(f[0],f[2])+.012)),o(tm(t,f,3,.3),i+c*e/p.length/a,2,.6,.9)}}return new Float32Array(i)}function k(e){let t=[e.cx+(e.x-e.cx)*.3+em(-.015,.015),Math.max(.33,e.y+.16),e.cz+(e.z-e.cz)*.3+em(-.015,.015)],n=em(.045,.08),r=[n],i=Math.random()<.2?0:1+(Math.random()*3|0);for(let e=0,t=n;e<i;e++)r.push(t+=em(.06,.13));E.push({seg:O(t,[e.x,e.y+.001,e.z],!0),t:0,lead:n,hits:r,end:r[r.length-1]+.3,ground:!0,x:e.x,y:e.y,z:e.z,top:t,sparked:!1})}function A(e){let t=Math.max(.36,r.heightAt(e.x,e.z)+.2),n=e.x+em(-.08,.08),i=e.z+em(-.08,.08),a=[0];for(let e=0,t=0,n=Math.random()*3|0;e<n;e++)a.push(t+=em(.05,.12));if(D.push({x:n,y:t,z:i,t:0,hits:a,end:a[a.length-1]+.2}),Math.random()<.35){let e=Math.random()*6.283,r=em(.1,.22),o=t-.05,s=[n-Math.cos(e)*r*.5,o,i-Math.sin(e)*r*.5],c=[n+Math.cos(e)*r*.5,o-em(0,.02),i+Math.sin(e)*r*.5];E.push({seg:O(s,c,!1),t:0,lead:.03,hits:a.map(e=>e+.03),end:a[a.length-1]+.25,ground:!1,top:[n,t,i]})}}let j=new H,M=0,N=0,P=0;return{update(e){for(let e of t.bolts.splice(0))k(e);for(let n of t.clouds)n.storm&&n.grow>.6&&Math.random()<e*.7*n.grow&&A(n);a.getDrawingBufferSize(j),v.uniforms.uRes.value.copy(j);let r=a.getPixelRatio(),i=1-n.state.light,s=0,p=0,m=0,g=0;for(let t=E.length-1;t>=0;t--){let n=E[t];if(n.t+=e,n.t>n.end){E.splice(t,1);continue}let i=n.t,a=n.ground?1:.55,h=0;for(let e=0;e<n.hits.length;e++)h=Math.max(h,(e?.85:1)*$p(i,n.hits[e],e?.04:.065));h=Math.min(1,h+.12*$p(i,n.lead,.28));let _=.9*$p(i,n.lead,.055),v=i<n.lead?Math.ceil(i/n.lead*9)/9:2;n.ground&&!n.sparked&&i>=n.lead&&(n.sparked=!0,o?.(n.x,n.y+.003,n.z,14)),i>=n.lead&&h*a>m&&(m=h*a,M=n.top[0],N=n.top[1],P=n.top[2]),g=Math.max(g,h*a);let y=n.seg;for(let e=0;e<y.length&&s<Jp;e+=9){let t=y[e+7],o=y[e+8],p,m,g;if(i<n.lead){if(y[e+6]>v)continue;p=(t?.3:.4)*o,m=.7,g=3}else p=(t?_:h)*o*a,m=t===0?2.1:t===1?1.3:.9,g=t===0?11:t===1?6:4,m*=.45+.55*p,g*=.4+.6*p;if(!(p<.02)){for(let t=0;t<4;t++){let n=s*4+t;c[n*3]=y[e],c[n*3+1]=y[e+1],c[n*3+2]=y[e+2],l[n*3]=y[e+3],l[n*3+1]=y[e+4],l[n*3+2]=y[e+5],u[n]=g*r,d[n]=m*r,f[n]=p}s++}}n.ground&&i>=n.lead&&p<16&&h>.03&&(b[p*3]=n.x,b[p*3+1]=n.y+.004,b[p*3+2]=n.z,x[p]=h,S[p]=(14+20*h)*r,p++)}for(let t=D.length-1;t>=0;t--){let n=D[t];if(n.t+=e,n.t>n.end){D.splice(t,1);continue}let r=0;for(let e of n.hits)r=Math.max(r,$p(n.t,e,.05));r*=.6,r>g&&(g=r,r>m&&(m=r,M=n.x,N=n.y,P=n.z))}h.setDrawRange(0,s*6);for(let e of[`a`,`b`,`w`,`c`,`k`])h.attributes[e].needsUpdate=!0;y.visible=s>0,C.setDrawRange(0,p);for(let e of[`position`,`k`,`size`])C.attributes[e].needsUpdate=!0;w.visible=p>0,T.position.set(M,N-.04,P),T.intensity=m*(.05+.2*i);let _=n.state.flash;_.x=M,_.y=N,_.z=P,_.k=g},reset(){E.length=D.length=0,y.visible=w.visible=!1,T.intensity=0,n.state.flash.k=0}}}var rm=2*X,im=[[65,12,7],[170,35,7],[235,85,8],[255,164,26],[255,229,116],[255,251,221]],am=Array.from({length:37},(e,t)=>{let n=t/36*5,r=Math.min(4,Math.floor(n));return im[r].map((e,t)=>Math.round(e*(1-n+r)+im[r+1][t]*(n-r)))}),om=[[196,178,150],[168,150,126],[138,124,108],[112,104,96]],sm=1400,cm=3,lm=3e3,um=7200,dm=240,fm=`
attribute float alpha;
attribute float size;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = color;
  vAlpha = alpha;
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_PointSize = clamp(uScale * size / -p.z, 1.0, 64.0);
}`,pm=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(vColor, vAlpha);
  #include <colorspace_fragment>
}`;function mm(e){let{world:t,globe:n,land:r,camera:i,renderer:a,clip:o}=e,s=e=>new W().setRGB(e[0]/255,e[1]/255,e[2]/255,Le),c=am.map(s),l=om.map(s),u=new za({color:5069386,flatShading:!0}),d=new za({color:14726442,flatShading:!0}),f=()=>{let e=new jn,t=new Oi(new ya(.006,.016,3,8),u),r=new Oi(new ba(.0062,.0062,.003,8),d);r.position.y=.004,e.add(t,r);for(let t=0;t<4;t++){let n=new Oi(new va(9e-4,.007,.007),u);n.position.set(Math.cos(t*Math.PI/2)*.005,.012,Math.sin(t*Math.PI/2)*.005),n.rotation.y=-t*Math.PI/2,e.add(n)}return e.visible=!1,n.group.add(e),e},p=[f(),f(),f()],m=document.createElement(`div`);m.style.cssText=`position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 45%, #fff 0%, #fff8e8 55%, #ffe2b8 100%);opacity:0;`,a.domElement.after(m);let h=new wo(16773590,0,3,1.4);n.group.add(h);let g=new Float32Array(um*3),_=new Float32Array(um*3),v=new Float32Array(um),y=new Float32Array(um),b=new Rr,x=(e,t)=>new Cr(e,t).setUsage(Ue);b.setAttribute(`position`,x(g,3)),b.setAttribute(`color`,x(_,3)),b.setAttribute(`alpha`,x(v,1)),b.setAttribute(`size`,x(y,1));let S=new La({uniforms:{uScale:{value:400}},vertexShader:fm,fragmentShader:pm,vertexColors:!0,transparent:!0,depthWrite:!1}),C=new da(b,S);C.frustumCulled=!1,C.renderOrder=2,C.visible=!1,n.group.add(C);let w=[],T=Array.from({length:cm},()=>{let e=new Oi(new Da(1,32,12,0,Math.PI*2,0,Math.PI/2),new gi({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));return e.visible=!1,n.group.add(e),e}),E=new za({color:16777215,flatShading:!0});o(E);let D=E.onBeforeCompile;E.onBeforeCompile=e=>{D(e),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aGlow;
varying float vGlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vGlow = aGlow;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vGlow;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += vec3(1.0, 0.45, 0.12) * vGlow;`)};let O=new Bi(Gf(),E,720);O.instanceMatrix.setUsage(Ue),O.instanceColor=new Mi(new Float32Array(2160),3).setUsage(Ue);let k=new Mi(new Float32Array(720),1).setUsage(Ue);O.geometry.setAttribute(`aGlow`,k),O.castShadow=!0,O.frustumCulled=!1,O.count=0,n.group.add(O);let A=new nn,j=new Mt,M=new Mt,N=new U,P=new U,F=new U(0,1,0),I=new W,L=new W(15917768),R=new W(10523782),ee=new W(11048316),te=new U,ne=new U,re=new U;function ie(e){let t=()=>Math.random(),n=new Float32Array(sm*4);for(let e=0;e<sm;e++){let r,i,a;do r=t()*2-1,i=t()*2-1,a=t()*2-1;while(r*r+i*i+a*a>1);n.set([r,i,a,t()*6.283],e*4)}let i=new Float32Array(960);for(let e=0;e<dm;e++)i.set([e*2.39996+t()*.3,t()*6.283,.75+.5*t(),t()],e*4);let a=r.heightAt(e.x,e.z);return{fb:n,pf:i,yG:a,wall:Math.sqrt(Math.max(0,1-a*a))*.985-Math.hypot(e.x,e.z),rang:!1,Rcap:.12*e.k**.4}}let z=!1;return{update(o){let s=t.nukes.length||t.blasts.length||w.length;if(!s&&!z)return;z=!!s,S.uniforms.uScale.value=a.domElement.height/(2*Math.tan(i.fov*Math.PI/360));let u=1-n.state.light;p.forEach((e,n)=>{let r=t.nukes[n];if(e.visible=!!r,!r)return;let i=Math.min(1,r.t/Wu),a=.8+.5*r.k**.3;e.position.set(r.x+Math.sin(r.t*9)*.002*(1-i),r.top+(r.y0+.012*a-r.top)*i*i,r.z),e.rotation.set(Math.PI+Math.sin(r.t*7)*.12*(1-i),r.t*2,Math.cos(r.t*6)*.1*(1-i)),e.scale.setScalar(a)});let d=0,f=0,x=0,E=0,D=0,ae=0,oe=0,se=k.array;t.blasts.forEach((t,i)=>{if(i>=cm)return;let a=t._v||=ie(t),s=t.t,l=t.k;x=Math.max(x,(s<.06?1:Math.exp(-(s-.06)/.3))*Math.min(.95,.55+.2*l));let p=t.cx,m=t.cz,h=Math.sqrt(Math.max(.05,.94-p*p-m*m)),b=a.Rcap*(.3+.7*(1-Math.exp(-s/2.5))),S=b*.55,C=a.yG+(h-S*1.1-a.yG)*(1-Math.exp(-s/3.2)),k=Math.exp(-s/2.2),z=(s<.1?3:3*Math.exp(-(s-.1)/.6)+.5*k)*(.6+.4*l)*(.5+u);if(z>E&&(E=z,D=t.x+(p-t.x)*Q(0,6,s),ae=Math.max(a.yG+.05,C),oe=t.z+(m-t.z)*Q(0,6,s)),k>.06){let e=t.Rf*.95*(1-Math.exp(-s/.12))*(1+.25*Math.min(1,s/3)),n=p,i=m,o=a.yG+(C-a.yG)*Q(.15,1.4,s),l=-s*1.6,u=Math.cos(l),f=Math.sin(l),h=Q(.06,.2,k);for(let t=0;t<sm&&d<um;t++){let l=a.fb[t*4],p=a.fb[t*4+1],m=a.fb[t*4+2],b=a.fb[t*4+3],x=Math.hypot(l,m),S=Math.atan2(m,l),C=x*u-p*f,w=x*f+p*u,T=n+Math.cos(S)*C*e,E=i+Math.sin(S)*C*e,D=o+w*e*.85,O=r.heightAt(T,E)+.002;D<O&&(D=O+(O-D)*.15);let A=Math.sqrt(l*l+p*p+m*m),j=Math.max(0,Math.min(36,Math.floor(36*(k*(1.25-.55*A)+.12*Math.sin(b+s*23))+2))),M=d*3;g[M]=T,g[M+1]=D,g[M+2]=E,c[j].toArray(_,M),v[d]=h*(.85+.15*Math.sin(b*3+s*31)),y[d]=Math.max(rm,e*.16),d++}}let ce=ed(s,l),le=1-Q(.15,1.1,ce/(t.Rb*4));if(ce<a.wall+.03&&le>.02){let e=Math.min(140,Math.floor(260*o*30*le*Math.min(1,ce/.1+.2)));for(let n=0;n<e&&w.length<lm;n++){let e=Math.random()*6.283,n=t.x+Math.cos(e)*ce,i=t.z+Math.sin(e)*ce;n*n+i*i>.9||w.push({x:n,z:i,y:r.heightAt(n,i)+.003,vx:Math.cos(e)*.05,vz:Math.sin(e)*.05,vy:.015+.04*Math.random()*le,age:0,life:.9+.9*Math.random(),s:(.8+.8*Math.random())*rm*(.8+.4*le),c:Math.random()*4|0})}}let ue=T[i],de=.35*Math.exp(-s/.22)*(s<1.2);if(ue.visible=de>.01,ue.visible&&(ue.position.set(t.x,a.yG,t.z),ue.scale.set(ce,ce*.55,ce),ue.material.opacity=de),!a.rang&&ce>=a.wall){a.rang=!0;let e=Math.hypot(t.x,t.z)||1,r=t.x/e||1,i=t.z/e,o=Math.sqrt(Math.max(0,1-(a.yG+.05)**2));n.pierce(r*o,a.yG+.05,i*o,Math.min(1,.35+.25*l)),n.jolt(Math.min(.6,.25+.15*l))}e.flora&&ce<t.Rb*1.7&&e.flora.blast(t.x,t.z,ce,t.Rf,t.Rb);let fe=1-Q(24,48,s),pe=Q(8,30,s),me=Q(5,10,s);if(fe>.01){te.set(p,h,m).normalize(),ne.set(0,1,0).cross(te),ne.lengthSq()<1e-6&&ne.set(1,0,0),ne.normalize(),re.copy(te).cross(ne);let e=.955-S*.4,n=s*.9;for(let i=0;i<dm&&f<720;i++){let o=a.pf[i*4],c=a.pf[i*4+1],d=a.pf[i*4+2],h=a.pf[i*4+3],g,_,v,y,x,w=.8,T=0;if(i<150){let t,r,a;if(i<120){let e=c-n,i=b+S*Math.cos(e);t=Math.cos(o)*i,a=Math.sin(o)*i,r=S*Math.sin(e)*.8,y=S*.85*d,x=k*2.2*(.55+.45*Math.max(0,-Math.sin(e)))}else{let e=b*Math.sqrt(h)*.85;t=Math.cos(o)*e,a=Math.sin(o)*e,r=S*(.75+.25*Math.cos(c+s)),y=S*.7*d,x=k*1.2}if(g=p+t,_=C+r,v=m+a,me>0){let n=Math.hypot(t,a)/(b+S),r=Math.min(.95,Math.asin(Math.min(.95,(b+S)/e))*(.25+.85*n)*(1+2*pe)),s=Math.cos(o),c=Math.sin(o),l=Math.cos(r),u=Math.sin(r),d=e-(i<120?.25:.6)*S*(1-.5*pe),f=d*(l*te.x+u*(s*ne.x+c*re.x)),p=d*(l*te.y+u*(s*ne.y+c*re.y)),m=d*(l*te.z+u*(s*ne.z+c*re.z));g+=(f-g)*me,_+=(p-_)*me,v+=(m-v)*me,y*=1+.35*pe,w=.8-.25*pe,T=me}I.copy(L).lerp(R,Q(1,12,s))}else if(i<210){let e=(i-150)/60+(h-.5)/60;if(e>Q(.15,2.2,s)){se[f]=0,O.setMatrixAt(f++,A.makeScale(0,0,0));continue}let n=a.yG+.01,r=C-S*.35,c=b*(.26+.4*(1-e)**3)*(1-.6*pe),l=o+s*.6*(1-e);g=t.x+(p-t.x)*e+Math.cos(l)*c*.6,v=t.z+(m-t.z)*e+Math.sin(l)*c*.6,_=n+(r-n)*e,y=c*.85*d*(1-.7*Q(14,30,s)),x=k*1.5*(1-e),w=1,I.copy(ee).lerp(R,Q(2,14,s))}else{let e=Math.min(t.Rb*.7,ed(s,l)*.6)*(.75+.35*h);if(g=t.x+Math.cos(o)*e,v=t.z+Math.sin(o)*e,g*g+v*v>.85){se[f]=0,O.setMatrixAt(f++,A.makeScale(0,0,0));continue}_=r.heightAt(g,v)+.008,y=(.012+.012*d)*l**.3*Q(.2,1.2,s)*(1-Q(8,20,s)),x=k*.6,w=.6,I.copy(ee)}y*=fe,y<.001?(se[f]=0,O.setMatrixAt(f++,A.makeScale(0,0,0))):(j.setFromAxisAngle(F,c+i),T>.5&&j.setFromUnitVectors(F,N.set(-g,-_,-v).normalize()).multiply(M.setFromAxisAngle(F,c+i)),O.setMatrixAt(f,A.compose(N.set(g,_,v),j,P.set(y,y*w,y))),O.setColorAt(f,I),se[f]=x*(.6+.6*u),f++)}}});for(let e=t.blasts.length;e<cm;e++)T[e].visible=!1;let ce=0;for(let e=0;e<w.length;e++){let t=w[e];if(t.age+=o,t.age>t.life)continue;let n=Math.exp(-o*2.5);if(t.vx*=n,t.vz*=n,t.vy=t.vy*n-.01*o,t.x+=t.vx*o,t.z+=t.vz*o,t.y+=t.vy*o,w[ce++]=t,d>=um)continue;let r=t.age/t.life,i=d*3;g[i]=t.x,g[i+1]=t.y,g[i+2]=t.z,l[t.c].toArray(_,i),v[d]=.6*(1-r*r),y[d]=t.s*(1+1.2*r),d++}w.length=ce,b.setDrawRange(0,d);for(let e of[`position`,`color`,`alpha`,`size`])b.attributes[e].needsUpdate=!0;C.visible=d>0,O.count=f,f&&(O.instanceMatrix.needsUpdate=!0,O.instanceColor.needsUpdate=!0,k.needsUpdate=!0),m.style.opacity=x>.01?x.toFixed(3):`0`,h.intensity=E,h.position.set(D,ae,oe),h.color.setRGB(1,.75+.2*Math.min(1,E/3),.45+.4*Math.min(1,E/3))},reset(){w.length=0,O.count=0,C.visible=!1;for(let e of T)e.visible=!1;for(let e of p)e.visible=!1;m.style.opacity=`0`,h.intensity=0,z=!1}}}function hm(e){let{world:t,globe:n}=e,r=new Ca(1,3),i=[];for(let e=0;e<4;e++){let e=new Oi(r,new gi({color:0})),t=new Oi(r,new gi({color:10512127,side:1,transparent:!0,opacity:.6,blending:2,depthWrite:!1})),a=new wo(11567359,0,.9,1.5),o=new jn;o.add(e,t,a),o.visible=!1,n.group.add(o),i.push({g:o,dark:e,rim:t,light:a})}function a(){let e=t.voids;for(let t=0;t<i.length;t++){let n=i[t],r=e[t];if(!r||r.t>1.1){n.g.visible=!1;continue}let a=Math.max(0,(r.t-.25)/.85),o=r.R*(1-a*a);n.g.visible=o>.001,n.g.position.set(r.x,r.y,r.z),n.dark.scale.setScalar(o),n.rim.scale.setScalar(o*(1.06+.1*Math.sin(r.t*40))),n.rim.material.opacity=.75*(1-a),n.light.intensity=(r.flash?9:2.5)*(1-a)*(r.t<.08?r.t/.08:1),n.light.color.setHex(r.flash?16777215:11567359),n.rim.material.color.setHex(r.flash?16777215:10512127)}}return{update:a,reset(){for(let e of i)e.g.visible=!1}}}var gm=1.9;function _m(e){let{world:t,globe:n,sparks:r,air:i}=e,a=new ba(1,1,1,10,1,!0).translate(0,.5,0),o=(e,t)=>new gi({color:e,transparent:!0,opacity:t,blending:2,depthWrite:!1,side:2}),s=new Oi(a,o(16774378,1)),c=new Oi(a,o(16722458,.4)),l=new Oi(a,o(16734762,.14)),u=new wo(16730666,0,.5,1.6),d=new jn;d.add(s,c,l,u),d.visible=!1;for(let e of[s,c,l])e.renderOrder=6,e.frustumCulled=!1;n.group.add(d);let f=0,p=0;function m(e){let n=t.laser;if(f+=e,!n){d.visible=!1;return}d.visible=!0,d.position.set(n.x,n.y-.004,n.z);let a=gm-n.y,o=1+.12*Math.sin(f*70)+.08*Math.sin(f*23);s.scale.set(.0016*n.size*o,a,.0016*n.size*o),c.scale.set(.005*n.size*o,a,.005*n.size*o),l.scale.set(.012*n.size,a,.012*n.size),u.position.set(0,.02,0),u.intensity=3*o,(p-=e)<=0&&(p=.05,r&&r(n.x,n.y+.002,n.z,n.wet?2:6),n.wet&&i?.vapour&&i.vapour(n.x,n.z,.05,.4))}return{update:m,reset(){d.visible=!1}}}var vm=[16726832,16749824,16769354,5036388,3520511,5926143,10509552],ym=56;function bm(e){let{world:t,globe:n,land:r,layers:i,camera:a}=e,o=[],s=[],c=[];for(let e=0;e<=ym;e++){let t=e/ym*Math.PI;for(let e=0;e<=vm.length;e++){let n=1-.2*(e/vm.length);o.push(Math.cos(t)*n,Math.sin(t)*n,0);let r=new W(vm[Math.min(e,vm.length-1)]);s.push(r.r,r.g,r.b)}}let l=vm.length+1;for(let e=0;e<ym;e++)for(let t=0;t<vm.length;t++){let n=e*l+t;c.push(n,n+l,n+1,n+1,n+l,n+l+1)}let u=new Rr;u.setAttribute(`position`,new Er(o,3)),u.setAttribute(`color`,new Er(s,3)),u.setIndex(c);let d=new Oi(u,new gi({vertexColors:!0,transparent:!0,opacity:0,side:2,depthWrite:!1,fog:!1}));d.renderOrder=5,d.visible=!1,d.frustumCulled=!1,n.group.add(d);let f=0,p=-99,m=0,h=0,g=new Map,_=0,v=0,y=0;function b(e,t,n=12){let i=Math.hypot(e,t),a=r.heightAt(e,t),o=Math.min(.34,.92-i,Math.sqrt(Math.max(0,.88-i*i))-a);return o>.1&&(d.position.set(e,a-.02*o,t),d.scale.setScalar(o),p=f,m=n,!0)}function x(e){f+=e;let r=n.state.light>.6,o=new Set;for(let e of t.clouds){if(e.snow||!(e.rain>.04))continue;o.add(e.id);let t=g.get(e.id);t?(t.x=e.rx,t.z=e.rz):g.set(e.id,{x:e.rx,z:e.rz,since:f})}for(let[e,n]of g)o.has(e)||(g.delete(e),r&&f>h&&f-n.since>3&&b(n.x,n.z)&&(h=f+45,t.events.push({type:`rainbow`,text:`The rain has eased and the sun is out: a rainbow.`})));let s=t.toolCloud;s.on>.5?(_+=e,v=s.x,y=s.z):(_>1.5&&r&&b(v,y)&&(h=f+20),_=0);let c=f-p,l=c<0||c>m?0:Math.min(1,c/2.5,(m-c)/3.5);d.visible=l>.01&&i.rain&&n.state.light>.35,d.visible&&d.rotation.set(0,Math.atan2(a.position.x-n.group.position.x-d.position.x,a.position.z-n.group.position.z-d.position.z),0),d.material.opacity=.6*l*Math.min(1,(n.state.light-.35)/.3)}return{update:x,show:b,reset(){p=-99,g.clear(),_=0,d.visible=!1}}}var xm=.36,Sm=16,Cm=9,wm=110,Tm=2;function Em(e){let{world:t,globe:n,land:r,clip:i,flora:a}=e,o=new Bi(new ba(1,.84,1,12,1,!0).translate(0,.5,0),i(new za({color:16777215,transparent:!0,opacity:.86,side:2,flatShading:!0,depthWrite:!1})),32),s=new Bi(new Ca(1,1),i(new za({color:16777215,flatShading:!0})),18);for(let e of[o,s])e.frustumCulled=!1,e.count=0,e.instanceMatrix.setUsage(Ue),n.group.add(e);o.renderOrder=3;let c=new Float32Array(660),l=new Rr;l.setAttribute(`position`,new Cr(c,3).setUsage(Ue));let u=new da(l,new oa({color:4142379,size:.009,sizeAttenuation:!0,transparent:!0,opacity:.95,depthWrite:!1}));u.frustumCulled=!1,n.group.add(u);let d=new nn,f=new Mt,p=new U(0,1,0),m=new U,h=new U,g=new W,_=new W(4408909),v=new W(9278365),y=new W(6054508),b=new W(16742946),x=new W(16761418),S=[0,0],C=0;function w(e){C+=e;let n=0,i=0,w=0,T=t.twisters;for(let t=0;t<Math.min(Tm,T.length);t++){let l=T[t],u=l.power??0;if(u<.02)continue;let E=r.surfaceAt(l.x,l.z),D=Math.min(xm,Math.sqrt(Math.max(.01,.9-l.x*l.x-l.z*l.z))-E-.03)*(.5+.5*u);if(D<.05)continue;let O=l.r*3.2*(.5+.5*u),k=e=>[.07*e*e*Math.sin(C*.9+e*3.2+l.ph)-Math.cos(l.ang)*.05*e*e,.07*e*e*Math.cos(C*.7+e*2.6+l.ph)-Math.sin(l.ang)*.05*e*e],A=e=>O*(.1+.9*e**1.8);for(let e=0;e<Sm;e++){let t=e/Sm,r=(e+1)/Sm,[i,a]=k(t);f.setFromAxisAngle(p,C*(10-5*t)+e),d.compose(m.set(l.x+i,E-.004+t*D,l.z+a),f,h.set(A(r),D/Sm*1.08,A(r))),o.setMatrixAt(n,d),g.copy(_).lerp(v,t),l.aflame>0&&g.lerp(t<.5?x:b,Math.min(1,l.aflame)*(.85-.5*t)*(.8+.2*Math.sin(C*23+e))),o.setColorAt(n,g),n++}let[j,M]=k(1);for(let e=0;e<Cm;e++){let t=e/Cm*6.283+C*.8,n=e?O*.85:0,r=O*(e?.55:.8)*u;d.compose(m.set(l.x+j+Math.cos(t)*n,E+D+.012,l.z+M+Math.sin(t)*n),f.identity(),h.set(r,r*.45,r)),s.setMatrixAt(i,d),s.setColorAt(i,g.copy(y).multiplyScalar(.9+.25*(e*.37%1))),i++}for(let e=0;e<wm;e++){let t=e*.618%1,n=t*t*.7,[r,i]=k(n),a=C*(9-5*n)+e*2.4,o=A(n)*(1.3+1.4*(e*.41%1));c[w*3]=l.x+r+Math.cos(a)*o,c[w*3+1]=E+.004+n*D,c[w*3+2]=l.z+i+Math.sin(a)*o,w++}(S[t]-=e)<=0&&(S[t]=.25,a&&u>.3&&a.flatten(l.x,l.z,l.r*1.1,.7,!1))}o.count=n,s.count=i,o.instanceMatrix.needsUpdate=s.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),s.instanceColor&&(s.instanceColor.needsUpdate=!0),u.visible=w>0,l.setDrawRange(0,w),l.attributes.position.needsUpdate=!0}return{update:w,reset(){o.count=s.count=0,l.setDrawRange(0,0)}}}var Dm=700;function Om(e){let{world:t,globe:n,land:r,layers:i}=e,a=new Float32Array(Dm*2*3),o=new Rr;o.setAttribute(`position`,new Cr(a,3).setUsage(Ue));let s=new da(o,new oa({color:3352858,size:.0055,sizeAttenuation:!0,transparent:!0,opacity:.85,depthWrite:!1}));s.frustumCulled=!1,s.renderOrder=3,n.group.add(s);let c=0,l=e=>{let t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)};function u(e,n){c+=e;let u=0;for(let e=0;e<Math.min(2,t.swarms.length);e++){let i=t.swarms[e],o=n*Math.sqrt(Math.max(.05,i.n)),s=Math.min(Dm,Math.round(Dm*i.n/1.5));for(let e=0;e<s;e++){let t=l(e+1)*6.283+c*(.6+l(e+7))*(e&1?1:-1),n=o*Math.sqrt(l(e+3))*(.9+.2*Math.sin(c*3+e)),s=i.x+Math.cos(t)*n,d=i.z+Math.sin(t)*n;a[u*3]=s,a[u*3+1]=r.heightAt(s,d)+.004+.035*l(e+5)*(.6+.4*Math.sin(c*2.1+e*.7)),a[u*3+2]=d,u++}}s.visible=u>0&&i.insects,o.setDrawRange(0,u),o.attributes.position.needsUpdate=!0}return{update:u,reset(){o.setDrawRange(0,0)}}}var km=3,Am=48;function jm(e){let{world:t,globe:n}=e,r=document.createElement(`div`);r.style.cssText=`position:fixed;inset:0;background:#fff;opacity:0;pointer-events:none;z-index:5`,document.body.appendChild(r);let i=new W(3997578),a=new W(10771711),o=[];for(let e=0;e<km;e++){let e=new Float32Array(294),t=new Float32Array(294),r=[];for(let e=0;e<=Am;e++)t.set([i.r,i.g,i.b],e*6),t.set([a.r*.5,a.g*.5,a.b*.5],e*6+3),e<Am&&r.push(e*2,e*2+2,e*2+1,e*2+1,e*2+2,e*2+3);let s=new Rr;s.setAttribute(`position`,new Cr(e,3).setUsage(Ue)),s.setAttribute(`color`,new Cr(t,3)),s.setIndex(r);let c=new Oi(s,new gi({vertexColors:!0,transparent:!0,opacity:0,blending:2,side:2,depthWrite:!1,fog:!1}));c.frustumCulled=!1,c.renderOrder=4,c.visible=!1,n.group.add(c),o.push({m:c,pos:e})}let s=0;function c(e){s+=e;let n=t.gammas[0];if(!n){r.style.opacity=0;for(let e of o)e.m.visible=!1;return}r.style.opacity=n.t<1.3?((1-n.t/1.3)**2).toFixed(3):0;let i=q.gamma.aurora,a=Math.max(0,Math.min(1,(n.t-.8)/3,(i-n.t)/6)),c=Math.atan2(n.uz,n.ux);for(let e=0;e<km;e++){let{m:t,pos:n}=o[e];t.visible=a>.01,t.material.opacity=.55*a*(.75+.25*Math.sin(s*.7+e*2));let r=.42+.09*e,i=.16+.03*e,l=Math.sqrt(Math.max(.05,.84-(r+i)**2))-.03*e;for(let t=0;t<=Am;t++){let a=t/Am,o=c+(a-.5)*(3.6+.8*e)+.25*Math.sin(s*.2+e),u=l+(Math.sin(a*14+s*.9+e*1.7)*.03+Math.sin(a*5-s*.4)*.04),d=Math.sin(a*Math.PI);n[t*6]=Math.cos(o)*u,n[t*6+1]=r+.02*Math.sin(a*9+s),n[t*6+2]=Math.sin(o)*u,n[t*6+3]=Math.cos(o)*(u-.02),n[t*6+4]=r+i*(.4+.6*d)*(.8+.2*Math.sin(a*23+s*1.6)),n[t*6+5]=Math.sin(o)*(u-.02)}t.geometry.attributes.position.needsUpdate=!0}}return{update:c,reset(){r.style.opacity=0;for(let e of o)e.m.visible=!1}}}var Mm=e=>{let t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)},Nm=420,Pm=3,Fm=46;function Im(e){let{world:t,globe:n,clip:r}=e,i=new Bi(new Ca(1,1),r(new za({color:16777215,flatShading:!0})),Nm);i.frustumCulled=!1,i.castShadow=!0,i.visible=!1,i.instanceMatrix.setUsage(Ue),n.group.add(i);let a=new nn,o=new Mt,s=new U,c=new U,l=new W,u=new W(15330802),d=new W(7305091),f=0;function p(e,n){f+=e;let r=t.hurricane;if(!r){i.visible=!1;return}i.visible=!0;let p=r.power,m=r.spin+f*.45;for(let e=0;e<Nm;e++){let t,r,f,h,g;if(e>=374){let i=e-374;t=n+.025,r=m*1.6+i/Fm*6.283,f=.05*p,h=.41+.015*Mm(e+3),g=.55}else{let i=Mm(e+1),a=e%Pm;t=n+.05+i*(.7-n),r=m+a*6.283/Pm-i*4.6+(Mm(e+9)-.5)*(.5-.25*i),f=(.03+.035*Mm(e+5))*(1.15-.5*i)*p,h=.4-.07*i+.02*Mm(e+3),g=.45*(1-i)+.15*Mm(e+7)}a.compose(s.set(Math.cos(r)*t,h,Math.sin(r)*t),o,c.set(f*1.5,f*.7,f*1.5)),i.setMatrixAt(e,a),i.setColorAt(e,l.copy(u).lerp(d,g))}i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{update:p,reset:()=>i.visible=!1}}function Lm(e){let{world:t,globe:n}=e,r=new qi({color:16777215,transparent:!0,opacity:.95,depthWrite:!1}),i=null,a=``,o=(e,t)=>{let n=Math.sqrt(Math.max(0,1-t*t))*1.004;return[Math.cos(e)*n,t*1.004,Math.sin(e)*n]};function s(){i&&=(n.group.remove(i),i.geometry.dispose(),null);let e=[];for(let n of t.cracks){let t=Mu(n.seed),r=(n,i,a,s,c,l)=>{for(let u=0;u<c;u++){let u=n+a+(t()-.5)*.05,d=Math.max(-.5,Math.min(.75,i+s+(t()-.5)*.05));e.push(...o(n,i),...o(u,d)),n=u,i=d,l<2&&t()<.3&&r(n,i,a*.5+(t()-.5)*.06,s*.5+(t()-.5)*.06,Math.ceil(c*.5),l+1)}};for(let e=0;e<6;e++){let i=e/6*6.283+t();r(n.ang,.06,Math.cos(i)*.035,Math.sin(i)*.04,6+(t()*5|0),0)}}if(!e.length)return;let a=new Rr;a.setAttribute(`position`,new Er(e,3)),i=new aa(a,r),i.renderOrder=8,i.frustumCulled=!1,n.group.add(i)}function c(){let e=t.cracks.map(e=>e.seed).join(`,`);e!==a&&(a=e,s())}return{update:c,reset(){a=`?`}}}function Rm(e){let{world:t,globe:n,land:r}=e,i=[],a=new Float32Array(540),o=new Rr;o.setAttribute(`position`,new Cr(a,3).setUsage(Ue));let s=new da(o,new oa({color:16756832,size:.006,sizeAttenuation:!0,transparent:!0,opacity:.9,blending:2,depthWrite:!1}));s.frustumCulled=!1,s.renderOrder=4,n.group.add(s);for(let e=0;e<2;e++){let e=new Oi(new Ca(1,3),new gi({color:0})),t=new Oi(new Oa(1,.12,6,40),new gi({color:16752704,transparent:!0,opacity:.9,blending:2,depthWrite:!1})),r=new Oi(new Oa(1.5,.3,6,40),new gi({color:16734752,transparent:!0,opacity:.3,blending:2,depthWrite:!1})),a=new wo(16747072,0,.6,1.5),o=new jn;o.add(e,t,r,a),o.visible=!1,n.group.add(o),i.push({g:o,core:e,ring:t,halo:r,light:a})}let c=0;function l(e){c+=e;let n=0;for(let e=0;e<i.length;e++){let o=i[e],s=t.holes[e];if(!s){o.g.visible=!1;continue}for(let e=0;e<90;e++){let t=(c*.45+Mm(e+1))%1,i=s.R*(1-t)**1.6,o=Mm(e+3)*6.283+t*9,l=s.x+Math.cos(o)*i,u=s.z+Math.sin(o)*i,d=r.heightAt(l,u)+.004;a[n*3]=l,a[n*3+1]=d+(s.y-d)*t*t,a[n*3+2]=u,n++}let l=.012*Math.sqrt(s.size)*(1+1.2*(s.t/s.life))*Math.min(1,s.t/.4);o.g.visible=!0,o.g.position.set(s.x,s.y,s.z),o.core.scale.setScalar(l),o.ring.scale.setScalar(l*1.9),o.halo.scale.setScalar(l*1.9),o.ring.rotation.set(1.25+.15*Math.sin(c*1.7),c*3,0),o.halo.rotation.copy(o.ring.rotation),o.light.intensity=2+Math.sin(c*30)*.5}s.visible=n>0,o.setDrawRange(0,n),o.attributes.position.needsUpdate=!0}return{update:l,reset(){for(let e of i)e.g.visible=!1;o.setDrawRange(0,0)}}}function zm(e){let{world:t,land:n,flora:r,sparks:i}=e;function a(){for(let e of t.rifts){let t=e.tips||[];for(let e=0;e<t.length;e+=3)r&&r.flatten(t[e],t[e+1],t[e+2]*2.4,1,!1),i&&i(t[e],n.heightAt(t[e],t[e+1])+.004,t[e+1],5);e.tips=[]}}return{update:a,reset(){}}}var Bm=140,Vm=160,Hm=`
attribute float size;
attribute float age;
uniform float uScale;
varying float vAge;
void main() {
  vAge = age;
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_PointSize = clamp(uScale * size / -p.z, 1.0, 40.0);
}`,Um=`
varying float vAge;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q);
  if (r > 1.0) discard;
  float rim = smoothstep(0.62, 0.95, r);
  vec3 hue = 0.5 + 0.5 * cos(6.2832 * (atan(q.y, q.x) / 6.2832 + vAge * 0.6 + vec3(0.0, 0.33, 0.67)));
  vec3 c = mix(vec3(0.04, 0.035, 0.03), hue * 0.75, rim * 0.6);
  c += vec3(1.0) * (1.0 - smoothstep(0.0, 0.22, length(q - vec2(-0.32, -0.34))));
  gl_FragColor = vec4(c, 0.92 * (1.0 - smoothstep(0.85, 1.0, vAge)));
  #include <colorspace_fragment>
}`;function Wm(e){let{world:t,globe:n,land:r,camera:i,renderer:a}=e,o=new Float32Array(840),s=new Float32Array(840),c=new Rr;c.setAttribute(`position`,new Cr(o,3).setUsage(Ue)),c.setAttribute(`color`,new Cr(s,3).setUsage(Ue));let l=new da(c,new oa({vertexColors:!0,size:.008,sizeAttenuation:!0,transparent:!0,opacity:.95,depthWrite:!1}));l.frustumCulled=!1,l.renderOrder=3;let u=new wo(16742954,0,.6,1.6);n.group.add(l,u);let d=new W(789001),f=new W(16765514),p=new W(16734746),m=new W,h=new Float32Array(480),g=new Float32Array(Vm),_=new Float32Array(Vm),v=new Rr;v.setAttribute(`position`,new Cr(h,3).setUsage(Ue)),v.setAttribute(`size`,new Cr(g,1).setUsage(Ue)),v.setAttribute(`age`,new Cr(_,1).setUsage(Ue));let y=new La({uniforms:{uScale:{value:400}},vertexShader:Hm,fragmentShader:Um,transparent:!0,depthWrite:!1}),b=new da(v,y);b.frustumCulled=!1,b.renderOrder=3,n.group.add(b);let x=[],S=0,C=0;function w(e,w){S+=e;let T=n.uniforms;for(let e=0;e<3;e++){let n=t.gushers[e];if(!n){T.uOilShape.value[e].set(0,0,0);continue}let r=n.t-w.rise,i=Math.max(0,Math.min(1,r/w.seconds));T.uOil.value[e].set(n.x,n.z,n.deep,r<0?n.deep+(n.y-n.deep)*(n.t/w.rise):n.y+.01),T.uOilShape.value[e].set(.2*(1-.4*i),.055*(1-.55*i),r>w.seconds?.5:1)}let E=0,D=null;for(let e=0;e<Math.min(3,t.gushers.length)&&E<280;e++){let n=t.gushers[e],r=n.t-w.rise;if(r<0||r>=w.seconds)continue;let i=Math.min(1,r/.6,(w.seconds-r)/1.5),a=t.fire[t.index(n.x,n.z)]>0;a&&(D=n);for(let e=0;e<Bm&&E<280;e++){let t=(S*.9+Mm(e+1))%1,r=Mm(e+3)*6.283,c=.012+.03*Mm(e+5);o[E*3]=n.x+Math.cos(r)*c*t,o[E*3+1]=n.y+.16*i*4*t*(1-t)*(.6+.4*Mm(e+7)),o[E*3+2]=n.z+Math.sin(r)*c*t,(a?m.copy(f).lerp(p,t*(.6+.4*Math.sin(S*30+e))):m.copy(d)).toArray(s,E*3),E++}}l.visible=E>0,c.setDrawRange(0,E),c.attributes.position.needsUpdate=c.attributes.color.needsUpdate=!0,u.intensity=D?2.5+.8*Math.sin(S*27):0,D&&u.position.set(D.x,D.y+.08,D.z);let O=t.oilBox;if((C-=e)<=0&&O){C=.06;for(let e=0;e<12&&x.length<Vm;e++){let e=O.x0+Math.floor(Math.random()*(O.x1-O.x0+1)),n=(O.z0+Math.floor(Math.random()*(O.z1-O.z0+1)))*J+e;t.oil[n]>w.skin*.9&&x.push({x:t.cx[n]+(Math.random()-.5)*.005,z:t.cz[n]+(Math.random()-.5)*.005,t:0,life:.5+Math.random()*1.1,size:.006+.01*Math.random()*Math.min(1,t.oil[n]/.001)})}}let k=0;for(let t=x.length-1;t>=0;t--){let n=x[t];if(n.t+=e,n.t>=n.life){x[t]=x[x.length-1],x.pop();continue}let i=n.t/n.life;h[k*3]=n.x,h[k*3+1]=r.surfaceAt(n.x,n.z)+.0015,h[k*3+2]=n.z,g[k]=n.size*(.3+.7*Math.sqrt(i)),_[k]=i,k++}b.visible=k>0,v.setDrawRange(0,k),y.uniforms.uScale.value=a.domElement.height/(2*Math.tan(i.fov*Math.PI/360));for(let e of[`position`,`size`,`age`])v.attributes[e].needsUpdate=!0}return{update:w,reset(){c.setDrawRange(0,0),v.setDrawRange(0,0),x=[],u.intensity=0;for(let e of n.uniforms.uOilShape.value)e.set(0,0,0)}}}var Gm={minnow:.3,bigfish:.75,pike:.95,rabbit:1,fox:1,songbird:.5,heron:1,hawk:.44,frog:.9,dragonfly:1,duck:1},Km=(e,t,n,r,i,a,o)=>Yd(Xd(new va(e,t,n),r,i,a),o);function qm(e=1){let t=1/Math.sqrt(e),n=.019*e,r=.008*e,i=-.015*e,a=-.023*e,o=[[0,.0075*t,r],[.005*t,5e-4,r],[0,-.0055*t,r],[-.005*t,5e-4,r]],s=[0,.001,n],c=[0,0,i],l=[];for(let e=0;e<4;e++)l.push([s,o[e],o[(e+1)%4],16777215],[c,o[e],o[(e+1)%4],16777215]);let u=[0,5e-4,a+.0035*e];return l.push([c,[0,.007,a],u,13684944],[c,u,[0,-.007,a],13684944]),Zd(l)}var Jm=()=>qm(1.7);function Ym(){return Gd([Km(.006,.0055,.009,0,.0038,0,16777215),Km(.0045,.0045,.0045,0,.0072,.0048,16777215),Km(.0012,.0055,.0016,-.0012,.0115,.0038,14733512),Km(.0012,.0055,.0016,.0012,.0115,.0038,14733512),Km(.0025,.0025,.0018,0,.0045,-.0052,16777215)])}function Xm(){let e=4864560,t=(e,t,n,r)=>[[0,t+r,e],[n,t,e],[0,t-r,e],[-n,t,e]],n=(e,t,n,r)=>{for(let i=0;i<4;i++)e.push([t,n[i],n[(i+1)%4],r])},r=(e,t,n,r)=>{for(let i=0;i<4;i++)e.push([t[i],n[i],n[(i+1)%4],r],[t[i],n[(i+1)%4],t[(i+1)%4],r])},i=[t(.0145,.0105,.0017,.0016),t(.0105,.0115,.0032,.003),t(.0075,.0105,.0021,.0023),t(.004,.0092,.0034,.0036),t(-.0045,.009,.0032,.0034),t(-.0085,.0092,.0014,.0014),t(-.014,.0082,.0024,.0026)],a=[];n(a,[0,.0103,.0178],i[0],e);for(let e=0;e+1<i.length;e++)r(a,i[e],i[e+1],16777215);n(a,[0,.007,-.02],i[6],16052456);for(let t of[-1,1])a.push([[t*.0012,.0135,.0118],[t*.0022,.013,.0085],[t*.0034,.0178,.0098],e]);for(let[e,t]of[[-.002,.004],[.002,.004],[-.002,-.0045],[.002,-.0045]])a.push([[e,.0085,t-9e-4],[e,.0085,t+9e-4],[e,0,t],3812904]);return Zd(a)}function Zm(){return Zd([[[0,0,.009],[-.015,.005,-.003],[0,0,-.004],16777215],[[0,0,.009],[0,0,-.004],[.015,.005,-.003],16777215],[[0,0,-.002],[-.0035,0,-.012],[.0035,0,-.012],13158600]])}function Qm(){let e=new Rr;e.setAttribute(`position`,new Cr(new Float32Array([0,0,.012,-.032,.008,-.01,0,0,-.004,0,0,.012,0,0,-.004,.032,.008,-.01]),3));let t=Yd(e,16777215);return t.computeVertexNormals(),t}function $m(){let e=16777215,t=15790320,n=(e,t,n,r)=>{for(let i=0;i<4;i++)e.push([t,n[i],n[(i+1)%4],r])},r=(e,t,n,r)=>{for(let i=0;i<4;i++)e.push([t[i],n[i],n[(i+1)%4],r],[t[i],n[(i+1)%4],t[(i+1)%4],r])},i=[];for(let e of[-.0012,.0012])i.push([[e,.0125,-6e-4],[e,.0125,6e-4],[e,0,0],10127952]);let a=[0,.0185,-.008],o=[0,.0125,.0055],s=[0,.914,.406],c=(e,t,n)=>{let r=[0,a[1]+(o[1]-a[1])*e,a[2]+(o[2]-a[2])*e];return[[0,r[1]+n*s[1],r[2]+n*s[2]],[t,r[1],r[2]],[0,r[1]-n*s[1],r[2]-n*s[2]],[-t,r[1],r[2]]]},l=c(.3,.0028,.003),u=c(.7,.0028,.003);n(i,a,l,e),r(i,l,u,e),n(i,o,u,e);let d=[[0,.0168,.002],[.001,.0153,.003],[-.001,.0153,.003]],f=[[0,.0253,.0068],[8e-4,.0241,.0074],[-8e-4,.0241,.0074]];for(let e=0;e<3;e++)i.push([d[e],f[e],f[(e+1)%3],t],[d[e],f[(e+1)%3],d[(e+1)%3],t]);let p=[[0,.0262,.0075],[.0015,.0248,.0075],[0,.0234,.0075],[-.0015,.0248,.0075]];return n(i,[0,.0246,.0052],p,t),n(i,[0,.0243,.0145],p,13148224),Zd(i)}function eh(){let e=16777215,t=[[0,.0034,0],[.0024,.0012,0],[0,2e-4,0],[-.0024,.0012,0]],n=[0,.0022,.0042],r=[0,.001,-.0036],i=[];for(let a=0;a<4;a++)i.push([n,t[a],t[(a+1)%4],e],[r,t[a],t[(a+1)%4],e]);for(let e of[-1,1])i.push([[e*.0018,.0014,-.0012],[e*.0046,1e-4,4e-4],[e*.0034,1e-4,-.0036],12109992]),i.push([[e*8e-4,.003,.002],[e*.0018,.0038,.0013],[e*.0013,.0026,8e-4],16774824]);return Zd(i)}function th(){let e=5592405,t=16777215,n=[[[0,0,.0042],[5e-4,0,-.0046],[-5e-4,0,-.0046],e],[[0,0,.0042],[0,6e-4,-.0046],[0,-3e-4,-.0046],e]];for(let e of[-1,1])n.push([[0,3e-4,.0018],[e*.0062,9e-4,.0026],[e*.006,9e-4,6e-4],t]),n.push([[0,3e-4,4e-4],[e*.0056,9e-4,4e-4],[e*.005,9e-4,-.0016],t]);return Zd(n)}function nh(){let e=14209736,t=(e,t,n,r)=>{for(let i=0;i<4;i++)e.push([t,n[i],n[(i+1)%4],r])},n=[[0,.0042,0],[.0028,.002,0],[0,-4e-4,0],[-.0028,.002,0]],r=[[0,.0078,.0048],[.0012,.0066,.0048],[0,.0054,.0048],[-.0012,.0066,.0048]],i=[];return t(i,[0,.0022,.0052],n,e),t(i,[0,.0048,-.0062],n,e),t(i,[0,.003,.0028],r,3111506),t(i,[0,.0062,.0078],r,15249456),Zd(i)}var rh=()=>new za({vertexColors:!0,flatShading:!0,side:2}),ih=e=>new W(e),ah={minnow:{cold:ih(11123915),mild:ih(15311420),warm:ih(16017466)},bigfish:{cold:ih(7309206),mild:ih(9080650),warm:ih(10123834)},pike:{cold:ih(5203536),mild:ih(6122036),warm:ih(6972464)},rabbit:{cold:ih(15921386),mild:ih(9402978),hot:ih(13214826)},fox:{cold:ih(15658730),mild:ih(13132842),hot:ih(13666888)},songbird:{brown:ih(8808780)},heron:{grey:ih(10135220),white:ih(16053488)},hawk:{slate:ih(4014928)},frog:{green:ih(6467644),brown:ih(9206848)},dragonfly:{blue:ih(4830448),green:ih(5820554),red:ih(15753290)},duck:{drake:ih(16777215),hen:ih(11571304),duckling:ih(16177230)},deep:{bigfish:ih(3493978),pike:ih(2767924)}},oh=700;function sh(e){let{world:t,globe:n,land:r,clip:i,layers:a}=e,o=t.fauna,s=new nn,c=new Mt,l=new Mt,u=new U(0,1,0),d=new U,f=new U,p=new U,m=new W,h=(e,t,r=!0,a=!1)=>{let o=rh();a&&(o.transparent=!0,o.opacity=.55,o.depthWrite=!1);let s=new Bi(e,i(o),t);return a&&(s.renderOrder=1.5),s.count=0,s.frustumCulled=!1,s.castShadow=r,s.instanceMatrix.setUsage(Ue),n.group.add(s),s},g={minnow:h(qm(),cd.minnow.max+40,!1),bigfish:h(qm(),cd.bigfish.max+10,!1,!0),pike:h(Jm(),cd.pike.max+4,!1,!0),rabbit:h(Ym(),cd.rabbit.max+10),fox:h(Xm(),cd.fox.max+6),songbird:h(Zm(),cd.songbird.max+40),heron:h($m(),cd.heron.max+6),hawk:h(Qm(),cd.hawk.max+40),frog:h(eh(),cd.frog.max+10,!1),dragonfly:h(th(),cd.dragonfly.max+10,!1),duck:h(nh(),cd.duck.max+10)};g.hawk.castShadow=!1;let _=new W,v={next:6},y={},b=(e,t,n,r,i,a,o,m=0,h=0,_=1)=>{let v=g[e];y[e]>=v.instanceMatrix.count||(c.setFromAxisAngle(u,i),m&&c.multiply(l.setFromAxisAngle(d.set(1,0,0),m)),h&&c.multiply(l.setFromAxisAngle(d.set(0,0,1),h)),s.compose(f.set(t,n,r),c,p.set(a,a*_,a)),v.setMatrixAt(y[e],s),v.setColorAt(y[e],o),y[e]++)},x=new Float32Array(oh*3),S=new Rr;S.setAttribute(`position`,new Cr(x,3).setUsage(Ue));let C=new oa({size:.004,sizeAttenuation:!0,transparent:!0,depthWrite:!1}),w=new da(S,C);w.frustumCulled=!1,n.group.add(w);let T=[],E=0,D=Array.from({length:o.M*o.M},(e,t)=>t);for(let e=D.length-1;e>0;e--){let t=Math.floor((Math.sin(e*91.7)*43758.5453%1+1)%1*(e+1));[D[e],D[t]]=[D[t],D[e]]}let O=new W(2894370),k=new W(15138672),A=0,j=e=>t.G[e]+Math.max(0,t.W[e]),M=(e,t,n)=>m.copy(e.mild).lerp(e.hot,Q(18,28,n)).lerp(e.cold,Q(3,-6,n)),N=(e,t)=>m.copy(e.mild).lerp(e.warm,Q(18,26,t)).lerp(e.cold,Q(9,1,t)),P=(e,t,n)=>Math.min(t,Math.sqrt(Math.max(0,.86-e*e-n*n))),F=.07,I=()=>Math.random(),L=(e,t,n)=>{e.side=Math.cos(e.h)*(t-e.x)-Math.sin(e.h)*(n-e.z)>=0?1:-1,e.mode=`stoop`,e.near=!1,e.t=0,e.gx=t,e.gz=n,e.cx=t,e.cz=n,v.next=A+12+I()*10},R=(e,n)=>{let i=e.ph*7.31%1,a=e.ph*3.77%1,o=e.fl;if(!o){let t=.5+.13*i,n=.14+.08*a,r=e.ph*40,s=Math.sqrt(.86-(t+.06)**2)-1.3*n-.05,c=Math.hypot(e.x,e.z),l=c>s?s/c:1,u=e.x*l,d=e.z*l;o=e.fl={mode:`soar`,side:e.ph<.5?1:-1,t:0,cruise:t,r:n,cx:u,cz:d,x:u+Math.cos(r)*n,z:d+Math.sin(r)*n,y:t,vy:0,h:r,turn:0,flap:0,flapAt:2+12*a},o.h=Math.atan2(Math.sin(r)*o.side,-Math.cos(r)*o.side)}for(let r=n;r>1e-6;){let n=Math.min(r,1/30);r-=n,o.t+=n;let a,s,c=F*(.95+.1*i),l=.03,u=.03;if(o.mode===`soar`){let t=e.x-o.cx,r=e.z-o.cz,i=Math.hypot(t,r),c=Math.min(i,.02*n);i>1e-6&&(o.cx+=t/i*c,o.cz+=r/i*c),a=o.r*(1+.3*Math.sin(A*.05+e.ph*9)),s=o.cruise+.03*Math.sin(A*.07+e.ph*5),(o.flapAt-=n)<0&&(o.flap=1+I()*1.5,o.flapAt=8+I()*12)}else if(o.mode===`stoop`){let e=j(t.index(o.gx,o.gz))+.012,n=o.y-e,r=Math.hypot(o.x-o.gx,o.z-o.gz),i=Math.min(1,Math.max(0,(n-.02)/.15));a=.03+.05*i,c=F*(.6+.7*i),s=e,u=.025+.05*Math.min(1,o.t/6),o.near||(u=Math.min(u,Math.max(.008,(n-.12)*c/Math.max(.05,r)))),(n<.03&&r<a+.02||o.t>30)&&(o.mode=`climb`,o.t=0,o.flap=3,o.side=o.turn>=0?1:-1,o.cx=o.x+Math.cos(o.h)*.05*o.side,o.cz=o.z-Math.sin(o.h)*.05*o.side)}if(o.mode===`climb`){let e=Math.min(1,Math.max(0,o.y/o.cruise));a=.05+.09*e,s=o.cruise,l=.025,c=F*(.7+.3*e),o.y>o.cruise-.015&&(o.mode=`soar`,o.flapAt=5+I()*10)}let d=Math.max(.05,Math.sqrt(Math.max(0,.86-(o.y+.06)**2))-a-.05),f=Math.hypot(o.cx,o.cz);f>d&&o.mode!==`stoop`&&(o.cx*=d/f,o.cz*=d/f);let p=o.x-o.cx,m=o.z-o.cz,h=Math.hypot(p,m)||1e-6,g=-p/h,_=-m/h,v=o.mode===`stoop`&&!o.near&&h>1.1*a;o.mode===`stoop`&&!v&&(o.near=!0);let y=o.side,b=-_*y,x=g*y,S=Math.max(-1.1,Math.min(1.1,Math.atan(2*(h-a)/a))),C=(v?Math.atan2(g,_)-y*Math.asin(a/h):Math.atan2(b*Math.cos(S)+g*Math.sin(S),x*Math.cos(S)+_*Math.sin(S)))-o.h;C-=Math.round(C/6.283185)*6.283185;let w=v?0:y*c/a*Math.max(0,Math.cos(C)),T=Math.max(-1.6,Math.min(1.6,w+C));o.turn+=(T-o.turn)*(1-Math.exp(-n/.4)),o.h+=o.turn*n,o.x+=Math.sin(o.h)*c*n,o.z+=Math.cos(o.h)*c*n;let E=Math.max(-u,Math.min(l,(s-o.y)*.4));o.vy+=(E-o.vy)*(1-Math.exp(-n/1.2)),o.y+=o.vy*n,o.flap>0&&(o.flap-=n),o.v=c}o.y=Math.max(r.heightAt(o.x,o.z)+.01,Math.min(o.y,P(o.x,9,o.z)-.02)),o.roll=-Math.max(-.6,Math.min(.6,o.turn*.55)),o.pitch=Math.atan2(-o.vy,o.v)*1.3,o.flap=Math.max(0,o.flap);let s=o.flap>0?1+.75*Math.sin(A*10+e.ph*6.283):o.mode===`stoop`?.55:1;return{x:o.x,y:o.y,z:o.z,h:o.h,pitch:o.pitch,roll:o.roll,flap:s}};function ee(e,i){let s=i?e:0;A+=s;for(let e in g)y[e]=0;g.minnow.visible=g.bigfish.visible=g.pike.visible=a.fish,g.rabbit.visible=g.fox.visible=g.frog.visible=a.animals,g.songbird.visible=g.heron.visible=g.hawk.visible=g.duck.visible=a.birds,w.visible=g.dragonfly.visible=a.insects;let{W:c,S:l,Tavg:u}=t;for(let e of o.kills.splice(0)){let t=e.a;t.k===`hawk`?t.fl&&t.fl.mode===`soar`&&(A>v.next||e.prey===`fire`)&&L(t.fl,e.x,e.z):t.k===`bigfish`||t.k===`pike`?t.hop=.8:t.k===`fox`?t.hop=.35:t.k===`heron`&&(t.stab=.4)}for(let n of[`minnow`,`bigfish`,`pike`]){let r=ah[n],a=n!==`minnow`;for(let d of o.pop[n]){let o=t.index(d.x,d.z),f=c[o],p=t.G[o]+f;d.seen===void 0&&(d.seen=A);let m=Gm[n]*(.3+.7*Math.min(1,(A-d.seen)/.6,.3+d.age/.3)),h=a?Math.max(t.G[o]+.004,p-.006-Math.min(.04,f*(n===`pike`?.55:.4)))+.002*Math.sin(A*1.3+d.ph*40):p-.001-.003*d.ph+.0015*Math.sin(A*2+d.ph*40),g=0;if(d.hop>0){let e=1-d.hop/.8;h=p-.004+(n===`minnow`?.034:.05)*Math.sin(Math.PI*e),g=(e-.5)*1.6,d.hop-=s}else n===`minnow`&&i&&f>.03&&l[o]<.001&&Math.random()<e*.02&&(d.hop=.8);let v=N(r,u[o]);a&&!(d.hop>0)&&(v=_.copy(ah.deep[n]).lerp(v,.25)),b(n,d.x,h,d.z,d.dir+Math.sin(A*(a?3:6)+d.ph*30)*.2,m,v,g)}}let d=o.sinking;for(let e=d.length-1;e>=0;e--){let n=d[e];if(n.t+=s,n.t>.8){d.splice(e,1);continue}let r=t.index(n.x,n.z),i=t.G[r]+c[r],a=n.t/.8,o=n.k!==`minnow`,l=Math.max(t.G[r]+.002,i-(o?.01:.002)-.012*a);b(n.k,n.x,l,n.z,n.dir,Gm[n.k]*(1-.8*a),o?ah.deep[n.k]:N(ah[n.k],u[r]),0,1.2*a)}let f=o.floating;for(let e=f.length-1;e>=0;e--){let n=f[e];n.t+=s;let r=t.index(n.x,n.z);if(n.t>25||c[r]<=Z.WSHOW){f.splice(e,1);continue}n.x+=t.windX*.003*s,n.z+=t.windZ*.003*s;let i=t.G[r]+c[r],a=Math.min(1,n.t/1.5),o=i-.008*(1-a)+.0012+6e-4*Math.sin(A*2+n.ph*20),l=Gm[n.k]*(n.t>22?1-(n.t-22)/3:1),d=n.k!==`minnow`;b(n.k,n.x,o,n.z,n.dir+n.t*.04,l,d?ah.deep[n.k]:N(ah[n.k],u[r]),0,Math.PI*a)}for(let e of[`rabbit`,`fox`]){let n=Gm[e],i=ah[e];for(let a of o.pop[e]){let o=Math.hypot(a.tx-a.x,a.tz-a.z)>.004,c=r.heightAt(a.x,a.z);a.hop>0?(c+=.012*Math.sin(Math.PI*(.35-a.hop)/.35),a.hop-=s):o&&(c+=Math.abs(Math.sin(A*(e===`rabbit`?14:10)+a.ph*20))*(e===`rabbit`?.003:.0015)),b(e,a.x,c,a.z,a.dir,n,M(i,e,u[t.index(a.x,a.z)]))}}for(let e of o.pop.frog){let n=t.index(e.x,e.z);if(t.T[n]<2)continue;let i=!(e.sit>0)&&Math.hypot(e.tx-e.x,e.tz-e.z)>.003,a=Math.max(r.heightAt(e.x,e.z),j(n)-.0012);i&&(a+=Math.abs(Math.sin(A*9+e.ph*20))*.004),b(`frog`,e.x,a,e.z,e.dir,Gm.frog,m.copy(ah.frog.green).lerp(ah.frog.brown,Q(12,4,u[n])))}for(let e of o.pop.dragonfly){let n=t.index(e.x,e.z);if(t.T[n]<6)continue;let r=j(n)+.007+.004*e.ph+.0012*Math.sin(A*5+e.ph*40),i=ah.dragonfly,a=e.ph<.4?i.blue:e.ph<.75?i.green:i.red;b(`dragonfly`,e.x,P(e.x,r,e.z),e.z,e.dir,Gm.dragonfly,a,0,0,.5+Math.abs(Math.sin(A*40+e.ph*60)))}for(let e of o.pop.duck){let n=t.index(e.x,e.z),i=e.age<.5&&e.mom,a=Math.max(r.heightAt(e.x,e.z),j(n))+3e-4*Math.sin(A*2.2+e.ph*30),o=ah.duck;b(`duck`,e.x,a,e.z,e.dir+Math.sin(A*1.5+e.ph*20)*.08,Gm.duck*(i?.45+e.age:1),i?o.duckling:e.ph<.5?o.drake:o.hen)}for(let n of o.pop.songbird){let r=t.index(n.x,n.z),i=Math.hypot(n.tx-n.x,n.tz-n.z)>.006,a=j(r)+(i?.06:.045)+.006*Math.sin(A*3+n.ph*30);n.y=n.y===void 0?a:n.y+(a-n.y)*Math.min(1,e*4);let o=i?.3+Math.abs(Math.sin(A*22+n.ph*50))*1.4:1;b(`songbird`,n.x,P(n.x,n.y,n.z),n.z,n.dir,Gm.songbird,ah.songbird.brown,0,0,o)}for(let n of o.pop.heron){let i=t.index(n.x,n.z),a=n.ph>.82?ah.heron.white:ah.heron.grey,o=Math.max(r.heightAt(n.x,n.z),j(i)-.006),c=n.fly?o+.08:o;if(n.y=n.y===void 0?c:n.y+(c-n.y)*Math.min(1,e*3),n.y>o+.015){let e=.4+Math.abs(Math.sin(A*7+n.ph*20))*1.2;b(`hawk`,n.x,P(n.x,n.y,n.z),n.z,n.dir,Gm.hawk*1.15,a,0,0,e)}else{let e=0;n.stab>0&&(e=.5*Math.sin(Math.PI*(.4-n.stab)/.4),n.stab-=s),b(`heron`,n.x,n.y,n.z,n.dir,Gm.heron,a,e)}}if(i&&A>v.next+20&&o.pop.hawk.length){let e=o.pop.hawk[Math.random()*o.pop.hawk.length|0],t=o.pop.rabbit.length?o.pop.rabbit:o.pop.songbird;if(e.fl?.mode===`soar`&&t.length){let n=t[Math.random()*t.length|0];L(e.fl,n.x,n.z)}}for(let e of o.pop.hawk){let t=R(e,s);b(`hawk`,t.x,t.y,t.z,t.h,Gm.hawk,ah.hawk.slate,t.pitch,t.roll,t.flap)}let p=o.falling;for(let e=p.length-1;e>=0;e--){let n=p[e],r=t.index(n.x,n.z),i=j(r)+.002;n.y0===void 0&&(n.y0=n.k===`hawk`?.4:i+(n.k===`heron`?.02:.05)),n.t+=s;let a=Math.max(i,n.y0-.175*n.t*n.t);if(a<=i&&n.land===void 0&&(n.land=n.t),n.land!==void 0&&n.t>n.land+1.5){p.splice(e,1);continue}let o=n.land===void 0?n.t*9:n.land*9,c=n.k!==`songbird`;b(c?`hawk`:`songbird`,n.x,a,n.z,o*.3,c?Gm.hawk*(n.k===`heron`?1.15:1):Gm.songbird,c?n.k===`heron`?ah.heron.grey:ah.hawk.slate:ah.songbird.brown,o,o*.6)}for(let e in g){let t=g[e];t.count=y[e],t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}if((E-=e)<=0){E=.5,T=[];let e=o.ins,r=o.M,i=n.state.light<.5,a=i?.12:.45,s=i?oh:250;for(let n of D){if(T.length>=s)break;if(e[n]<a||!o.cellOn[n])continue;let i=-1+(n%r+.5)/r*2,l=-1+((n/r|0)+.5)/r*2,u=t.index(i,l);if(c[u]>Z.WSHOW||t.S[u]>.001)continue;let d=Math.min(3,1+(e[n]*4|0));for(let e=0;e<d;e++){let t=Math.sin(n*12.9898+e*78.233)*43758.5453,a=t-Math.floor(t);T.push({x:i+(a-.5)*(2/r),z:l+(a*7.13%1-.5)*(2/r),ph:a*6.283})}}}let h=1-n.state.light;C.color.copy(O).lerp(k,Q(.4,.8,h)),C.size=.005+.009*h,C.opacity=.55+.4*h*(.6+.4*Math.sin(A*3)),C.blending=h>.6?2:1;let F=Math.min(T.length,oh);for(let e=0;e<F;e++){let t=T[e],n=t.x+.004*Math.sin(A*1.7+t.ph*3),i=t.z+.004*Math.cos(A*1.3+t.ph*5);x[e*3]=n,x[e*3+1]=r.heightAt(n,i)+.008+.004*Math.sin(A*2.3+t.ph*7),x[e*3+2]=i}S.setDrawRange(0,F),S.attributes.position.needsUpdate=!0}return{update:ee,startle(){},reset(){T=[],E=0},get birds(){return y.songbird+y.hawk},get fish(){return y.minnow+y.bigfish+y.pike}}}var ch=2400,lh=0,uh=1;function dh(e,{air:t,flora:n,life:r}){let{world:i,globe:a,land:o}=e,s=Of(5),c=[];for(let e=0;e<24;e++){let e=new Oi(s,jf());e.castShadow=!0,e.visible=!1,a.group.add(e),c.push(e)}let l=new Float32Array(ch*3),u=new Float32Array(ch*3),d=new Float32Array(ch*3),f=new Float32Array(ch),p=new Float32Array(ch),m=new Float32Array(ch),h=new Float32Array(ch),g=new Uint8Array(ch),_=0,v=new Rr;v.setAttribute(`position`,new Cr(l,3).setUsage(Ue)),v.setAttribute(`aColor`,new Cr(d,3).setUsage(Ue)),v.setAttribute(`aSize`,new Cr(f,1).setUsage(Ue)),v.setAttribute(`aAlpha`,new Cr(p,1).setUsage(Ue)),v.boundingSphere=new Ar(new U,6);let y=new da(v,new La({uniforms:{uMap:{value:(()=>{let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.45,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new ma(e)})()},uScale:{value:600}},vertexShader:`
      attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
      varying vec3 vColor; varying float vAlpha; uniform float uScale;
      void main() {
        vColor = aColor; vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uMap; varying vec3 vColor; varying float vAlpha;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vColor, t.a * vAlpha);
      }`,transparent:!0,depthWrite:!1}));y.frustumCulled=!1,y.renderOrder=5,a.group.add(y);function b(e,t,n,r,i,a,o,s,c,v,y,b){if(_>=ch)return;let x=_*3;l[x]=t,l[x+1]=n,l[x+2]=r,u[x]=i,u[x+1]=a,u[x+2]=o,d[x]=v,d[x+1]=y,d[x+2]=b,f[_]=s,p[_]=1,m[_]=h[_]=c,g[_]=e,_++}let x=new Oi(new Da(1,20,14),new gi({color:16773572,transparent:!0,opacity:0,depthWrite:!1,blending:2}));x.visible=!1,a.group.add(x);let S=0,C=0,w=new Ea(.82,1,64),T=[];for(let e=0;e<4;e++){let e=new Oi(w,new gi({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}));e.visible=!1,e.renderOrder=6,a.group.add(e),T.push({mesh:e,t:0,r0:0,r1:0,life:.5})}function E(e,t,n,r,i,a,o,s,c,l){let u=T.find(e=>e.t<=0)||T[0];u.t=u.life=c,u.r0=o,u.r1=s,u.mesh.position.set(e,t,n),u.mesh.lookAt(e+r,t+i,n+a),u.mesh.material.color.setHex(l),u.mesh.visible=!0}let D=new Map,O=()=>i.windX,k=()=>i.windZ;function A(e){let o=i.meteors;for(let e=0;e<c.length;e++){let t=c[e],n=o[e];if(!n){t.visible=!1;continue}let r=n.t**1.5,i=n.fx+(n.x-n.fx)*r,s=n.fy+(n.y-n.fy)*r,l=n.fz+(n.z-n.fz)*r,u=Math.min(1,(n.v-.25)/2.5)*Math.min(1,n.t*3);t.visible=!0,t.position.set(i,s,l),t.scale.setScalar(n.r*.9),t.rotation.set(n.spin+n.t*4,n.spin*2+n.t*6,0),t.material.emissiveIntensity=u*.9;let d=D.get(n);if(d){let e=i-d.x,t=s-d.y,r=l-d.z,o=Math.max(2,Math.round(Math.hypot(e,t,r)/(n.r*.25)));for(let i=0;i<o;i++){let a=i/o,s=d.x+e*a,c=d.y+t*a,l=d.z+r*a,f=()=>(Math.random()-.5)*n.r*.8,p=.4+Math.random()*.3;if(b(lh,s+f(),c+f(),l+f(),(Math.random()-.5)*.03+O()*.01,.02+Math.random()*.03,(Math.random()-.5)*.03+k()*.01,n.r*(1.8+1.4*Math.random()),1.6+Math.random()*1.6,p,p*.97,p*.94),u>.1&&Math.random()<.5*u){let i=.1+.3*u;b(uh,s+f(),c+f(),l+f(),(Math.random()-.5)*i-e*.6,(Math.random()-.5)*i-t*.6,(Math.random()-.5)*i-r*.6,n.r*.8,.25+Math.random()*.4,1,.55+.4*Math.random(),.15)}}let c=d.x*d.x+d.y*d.y+d.z*d.z,f=i*i+s*s+l*l;if(c>1&&f<=1){let e=Math.sqrt(c),t=d.x/e,r=d.y/e,i=d.z/e;E(t,r,i,t,r,i,n.r*2,.16+n.r*2+u*.1,.45,14676991),a.pierce(t,r,i,.6+.4*u+n.r*4),S=Math.max(S,.6),C=n.r*2.5,x.position.set(t,r,i)}}D.set(n,{x:i,y:s,z:l})}for(let e of D.keys())o.includes(e)||D.delete(e);for(let e of i.impacts.splice(0))S=1,C=e.R*(.25+.3*e.fast)+e.r,x.position.set(e.x,e.y+e.r*.5,e.z),t.burst(e.x,e.y,e.z,e.R,e.fast,e.wet,e.ice),a.jolt(Math.min(.75,.25+.5*e.fast+e.R)),e.fast>.1&&n.flatten(e.x,e.z,e.R*(1.5+1.2*e.fast),e.fast),r.startle(e.x,e.z,e.R*4);for(let t=_-1;t>=0;t--){let n=t*3,r=g[t];if(m[t]-=e,m[t]<=0){_--;let e=_*3;l[n]=l[e],l[n+1]=l[e+1],l[n+2]=l[e+2],u[n]=u[e],u[n+1]=u[e+1],u[n+2]=u[e+2],d[n]=d[e],d[n+1]=d[e+1],d[n+2]=d[e+2],f[t]=f[_],p[t]=p[_],m[t]=m[_],h[t]=h[_],g[t]=g[_];continue}let i=m[t]/h[t];r===lh?(f[t]+=f[t]*e*.5,p[t]=.7*i*Math.min(1,(1-i)*8+.3)):(u[n+1]-=.8*e,p[t]=i),l[n]+=u[n]*e,l[n+1]+=u[n+1]*e,l[n+2]+=u[n+2]*e}v.setDrawRange(0,_);for(let e of[`position`,`aColor`,`aSize`,`aAlpha`])v.attributes[e].needsUpdate=!0;S>0?(S=Math.max(0,S-e*3.5),x.visible=S>0,x.scale.setScalar(C*(1.6-S)),x.material.opacity=.6*S*S):x.visible=!1;for(let t of T){if(t.t<=0){t.mesh.visible=!1;continue}t.t-=e;let n=1-Math.max(0,t.t)/t.life,r=1-(1-n)*(1-n);t.mesh.scale.setScalar(t.r0+(t.r1-t.r0)*r),t.mesh.material.opacity=.7*(1-n)}}return{update:A,reset(){_=0,D.clear()},get trailCount(){return _}}}var fh={look:`<path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4"/><path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M6 21v-4h4"/>`,rain:`<path d="M7 15a4 4 0 0 1 .6-8 5 5 0 0 1 9.6 1.2A3.5 3.5 0 0 1 17 15z"/><path d="M9 18l-1 2.5M13 18l-1 2.5M17 18l-1 2.5"/>`,clear:`<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>`,seeds:`<path d="M12 21v-9"/><path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6z"/><path d="M12 15c0-3-2-5-6-5 0 3 2 5 6 5z"/>`,raise:`<path d="M3 20l6-9 3 4 3-5 6 10z"/><path d="M12 7V2M9.5 4.5L12 2l2.5 2.5"/>`,sink:`<path d="M3 10c3 0 4 8 9 8s6-8 9-8"/><path d="M12 3v8M9.5 8.5L12 11l2.5-2.5"/>`,asteroid:`<path d="M14.5 20.5a5 5 0 1 1 2-9.6 5 5 0 0 1-2 9.6z"/><path d="M3 3l6 6M3 9l3 3M9 3l3 3"/>`,lightning:`<path d="M13.5 2L5 13.5h6L9.5 22 19 9.5h-6z"/>`,nuke:`<circle cx="12" cy="12" r="1.6"/><path d="M12 12L8.2 5.4a7.6 7.6 0 0 1 7.6 0zM12 12l7.6 0a7.6 7.6 0 0 1-3.8 6.6zM12 12l-3.8 6.6A7.6 7.6 0 0 1 4.4 12z"/>`,tornado:`<path d="M3 4h18M5 8h14M8 12h9M10 16h5M12 20h2"/>`,hurricane:`<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 3-6 7-6M14 12c4 0 6 3 6 7M12 14c0 4-3 6-7 6M10 12c-4 0-6-3-6-7"/>`,crack:`<circle cx="12" cy="12" r="9"/><path d="M12 3l-2 5 4 3-3 4 2 6M10 8l-4 1M14 11l4-2M11 15l-4 2"/>`,hole:`<circle cx="12" cy="12" r="3.2" class="fill"/><ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(-20 12 12)"/>`,oil:`<path d="M12 3c3 4.5 5.5 7.3 5.5 10.6a5.5 5.5 0 0 1-11 0C6.5 10.3 9 7.5 12 3z" class="fill"/><path d="M4 21h16"/>`,fissure:`<path d="M2 7h7l-2 4 4 2-3 4 2 3M22 7h-8l2 4-4 2 3 4-2 3"/>`,locusts:`<circle cx="6" cy="8" r="1.3" class="fill"/><circle cx="12" cy="5.5" r="1.3" class="fill"/><circle cx="17.5" cy="9" r="1.3" class="fill"/><circle cx="9" cy="13" r="1.3" class="fill"/><circle cx="15" cy="14.5" r="1.3" class="fill"/><circle cx="6.5" cy="18" r="1.3" class="fill"/><circle cx="12.5" cy="19" r="1.3" class="fill"/><circle cx="18.5" cy="17.5" r="1.3" class="fill"/>`,gamma:`<circle cx="18" cy="6" r="2.2" class="fill"/><path d="M15.5 8.5L3 21M12 5L4 9M19 12l-4 8"/>`,shower:`<circle cx="16.5" cy="17" r="3"/><circle cx="8" cy="19" r="1.8"/><path d="M13.5 13.5L5 5M19 11l-5-5M6.5 16.5L3 13M10 3l2.5 2.5"/>`,antimatter:`<circle cx="12" cy="12" r="4.2" class="fill"/><circle cx="12" cy="12" r="8.2" stroke-dasharray="2.6 2.6"/>`,laser:`<path d="M12 2v13"/><path d="M5 20h14"/><path d="M12 15l-4.5 3.5M12 15l4.5 3.5M12 15v4.5"/><path d="M9 5.5L7 4M15 5.5L17 4"/>`,volcano:`<path d="M2 20l7-9h6l7 9z"/><path d="M10 11c0-2 4-2 4 0"/><path d="M12 7V3M8.5 5.5L7 3M15.5 5.5L17 3"/>`,shake:`<circle cx="12" cy="11" r="6.5"/><path d="M8 20h8"/><path d="M2.5 8c-.8 2-.8 4 0 6M21.5 8c.8 2 .8 4 0 6"/>`,pause:`<path class="fill" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/>`,s1:`<path class="fill" d="M8 5l11 7-11 7z"/>`,s2:`<path class="fill" d="M4 5l8 7-8 7zM13 5l8 7-8 7z"/>`,s3:`<path class="fill" d="M2 6l6.5 6L2 18zM9 6l6.5 6L9 18zM16 6l6.5 6L16 18z"/>`,cold:`<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/>`,drop:`<path d="M12 4c2.6 3.9 5 6.4 5 9.5a5 5 0 0 1-10 0c0-3.1 2.4-5.6 5-9.5z"/>`,sea:`<path d="M2.5 8.5c3.2-2.6 6.3 2.6 9.5 0s6.3 2.6 9.5 0M2.5 15.5c3.2-2.6 6.3 2.6 9.5 0s6.3 2.6 9.5 0"/>`,eye:`<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>`,chev:`<path d="M6 9l6 6 6-6"/>`,arrow:`<path d="M12 20V5"/><path d="M6 11l6-6 6 6"/>`,globe:`<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>`,time:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,tools:`<path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z"/><path d="M12 7l5 5"/>`,hot:`<circle cx="12" cy="12" r="5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>`},ph=e=>`<svg viewBox="0 0 24 24" aria-hidden="true">${fh[e]}</svg>`,mh=[{id:`look`,label:`Look`,hint:`Drag to turn the globe. Scroll or pinch to zoom. Right-drag turns it in any tool.`},{id:`rain`,label:`Rain`,hint:`Hold on the land to gather what the air is carrying and rain it there. On soaked ground it runs off into the streams.`},{id:`clear`,label:`Clear`,hint:`Hold to open the sky over a spot and let the sun dry it out.`},{id:`seeds`,label:`Seeds`,hint:`Hold to scatter seeds. On land they take where the ground is damp and mild; on water they start sea life.`},{id:`raise`,label:`Raise`,hint:`Hold to stir the core under a spot. The land swells; keep going and it erupts. Raised across a river, it dams it.`},{id:`sink`,label:`Sink`,hint:`Hold to let the land under a spot sink. Rivers turn to follow the new low ground.`},{id:`volcano`,label:`Volcano`,hint:`Click to open a volcano here, or wake the old one nearest (within the ring). Hold to keep it erupting: the cone grows, lava pours out and glowing bombs fly. Each time a volcano erupts its cone gets bigger.`},{id:`asteroid`,label:`Asteroid`,hint:`Call down an asteroid. A quick click sends a pebble at full speed; hold the button to grow the rock, up to a boulder in a second and a half, and let go to send it. The ring shows the crater it would leave.`},{id:`lightning`,label:`Lightning`,hint:`Click to send down a bolt; hold for more. It sets the plants it hits alight, splits boulders, burns a black mark into the ground, and on water kills the fish nearby, which float up. Size spreads the bolts out; Flow sends them faster.`},{id:`hurricane`,label:`Hurricane`,hint:`Click to wind up a hurricane that fills the dome for most of a minute: rain on everything, wind that strips the land (hardest round the calm eye in the middle), lightning all over, and fires put out.`},{id:`oil`,label:`Oil`,hint:`Click to drill for oil. A black gusher rains it on the ground; it runs downhill and spreads as a slick on water, killing what is under it. Oil burns, on land and on water: try lightning on a slick.`},{id:`hole`,label:`Black hole`,hint:`Click to drop a mini black hole. For a few seconds it pulls in the ground under it, water, plants, boulders and animals, then evaporates in a flash, leaving a deep pit.`},{id:`crack`,label:`Glass crack`,hint:`Click towards the wall to crack the glass on that side. Water slowly leaks out of the world, the cold comes in, and frost creeps over the land by the crack. Click by a crack to seal it.`},{id:`tornado`,label:`Tornado`,hint:`Click to put down a tornado. It goes with the wind for a quarter of a minute, stripping plants, flinging boulders and animals, lifting spray off a lake, and throwing a fire it crosses ahead of itself.`},{id:`fissure`,label:`Fissure`,hint:`Drag a line and let go: the ground tears open along it, deepest in the middle, with lava at the bottom. A quick click opens one of the standard length whichever way it runs. Rivers that cross it pour in.`},{id:`locusts`,label:`Locusts`,hint:`Click to set down a swarm of locusts. It strips the ground and moves on to the greenest in reach, growing as it feeds. Cold, rain, fire and birds end it.`},{id:`gamma`,label:`Gamma ray`,hint:`Click a side of the globe: a gamma-ray burst sweeps in from that side. What faces it in the open dies; what is under water, in the shadow of high ground or down a burrow lives. An aurora follows.`},{id:`shower`,label:`Shower`,hint:`Click to call down a meteor shower over the ring: a dozen or more small rocks in a few seconds, little craters and fires. Size sets how many and how wide.`},{id:`laser`,label:`Laser`,hint:`Hold and drag to burn a line with a beam from above the glass. It cuts a glowing trench, fuses the floor to glass, boils water, and sets fires along both sides. Across a river, the trench turns it.`},{id:`antimatter`,label:`Antimatter`,hint:`Click to drop an antimatter bomb. It deletes a ball of the world, the size of the ring: no fire, no fallout, only a clean round pit, which water then finds.`},{id:`nuke`,label:`Nuke`,hint:`Click to drop a nuclear bomb. The flash sets the land alight, the blast flattens the forest and the mushroom cloud spreads across the top of the glass. Its fallout sickens the land downwind for decades, and its dust brings a nuclear winter for a few years. Size sets how big a bomb it is; the ring shows the blast.`}],hh=[{name:`Life`,items:[{id:`trees`,label:`Trees`},{id:`seaPlants`,label:`Reef and kelp`,hint:`Coral and kelp in the bright shallows, and starfish on the bed of deeper water.`},{id:`pondPlants`,label:`Reeds and lily pads`,hint:`Cattails at the edge of still water, lily pads floating beyond them.`},{id:`fish`,label:`Fish`,hint:`Minnows, big fish and pike.`},{id:`animals`,label:`Land animals`,hint:`Rabbits, foxes and frogs.`},{id:`birds`,label:`Birds`,hint:`Songbirds, herons, hawks and ducks.`},{id:`insects`,label:`Insects`,hint:`Gnats by day, fireflies at night, wherever insects are thick; dragonflies over the shallows.`}]},{name:`Land`,items:[{id:`cover`,label:`Ground cover`,hint:`The green of plants on the ground. Off shows the bare soil and rock.`},{id:`rocks`,label:`Boulders`},{id:`snow`,label:`Snow and ice`}]},{name:`Water`,items:[{id:`lakes`,label:`Lakes`,hint:`Off shows the lake beds.`},{id:`rivers`,label:`Rivers`}]},{name:`Sky`,items:[{id:`clouds`,label:`Clouds`,hint:`Their shadows go with them.`},{id:`rain`,label:`Rain and snowfall`},{id:`sun`,label:`Sun`,hint:`The sun itself. Its light stays.`},{id:`glass`,label:`Glass and sky`}]}],gh=hh.flatMap(e=>e.items.map(e=>e.id)),_h=`globe.layers`,vh=[[`lake`,`Lakes`,`#3fb0cb`],[`soil`,`Ground`,`#b08d62`],[`plant`,`Plants`,`#6dbb55`],[`ice`,`Ice`,`#ffffff`],[`air`,`Air`,`#c9d3de`]],yh=[`Spring`,`Summer`,`Autumn`,`Winter`];function bh(e,t){let n=(e,t,n,r)=>`<section class="panel card" data-panel="${e}">
      <button class="phead" data-fold="${e}" title="Show or hide ${n.toLowerCase()}"><span class="picon">${ph(t)}</span><span>${n}</span><b data-meta="${e}"></b>${ph(`chev`)}</button>
      <div class="pbody" data-body="${e}">${r}</div>
    </section>`;e.innerHTML=`
    <div class="col left">
      ${n(`globe`,`globe`,`Globe`,`<p class="clock"><span id="clock"></span><span id="wind" title="The way the wind blows, as the globe is turned now. Clouds ride it; the slopes that face it get the rain, and the far side of a range lies in its shadow.">${ph(`arrow`)}<span>wind</span></span></p>
        <div class="water" title="Where the water is. The Water dial sets how much the globe holds.">
          <div class="bar">${vh.map(([e,,t])=>`<i data-k="${e}" style="background:${t}"></i>`).join(``)}</div>
          <div class="legend">${vh.map(([e,t,n])=>`<span style="--c:${n}" data-l="${e}"><span>${t}</span> <b></b></span>`).join(``)}</div>
        </div>
        <div class="dials">
          <div class="row" title="How strong the sun is">
            ${ph(`cold`)}<input id="sun" type="range" min="-1" max="1" step="0.01" value="0" aria-label="Sun strength" />${ph(`hot`)}
            <p>Sun · <span id="sunText"></span></p>
          </div>
          <div class="row" title="How much water the globe holds. It rains in, or drains away, over some years.">
            ${ph(`drop`)}<input id="wet" type="range" min="-1" max="1" step="0.01" value="0" aria-label="Amount of water" />${ph(`sea`)}
            <p>Water · <span id="wetText"></span></p>
          </div>
        </div>
        <div class="prow">
          <button class="plain" id="new" title="Start a fresh globe with a new landscape">New globe</button>
          <button class="plain act" id="shake" title="Shake the globe: a hard stir of everything (S)">${ph(`shake`)}Shake</button>
        </div>`)}
      ${n(`time`,`time`,`Time`,`<div class="seg" role="group" aria-label="Speed">
          <button data-speed="0" title="Pause (space)" aria-label="Pause">${ph(`pause`)}</button>
          <button data-speed="1" title="Normal: a year in 12 seconds" aria-label="Normal speed">${ph(`s1`)}</button>
          <button data-speed="2" title="Fast: a year in 2 seconds" aria-label="Fast">${ph(`s2`)}</button>
          <button data-speed="3" title="Very fast: 3 years a second" aria-label="Very fast">${ph(`s3`)}</button>
        </div>`)}
    </div>
    <div class="note" id="note" role="status"></div>
    <div class="col right">
      ${n(`tools`,`tools`,`Tools`,`<div class="tools" role="toolbar" aria-label="Tools">
          ${mh.map((e,t)=>`<button data-tool="${e.id}" title="${e.hint}${t<9?` (${t+1})`:``}">${ph(e.id)}<span>${e.label}</span></button>`).join(``)}
        </div>
        <div class="opts" id="opts" hidden>
          <label title="How wide an area the tool covers ( [ and ] )"><span>Size</span> <input id="size" type="range" min="-1.3" max="1.6" step="0.05" value="0" /><b id="sizeText"></b></label>
          <label title="How hard the tool works ( - and = )"><span>Flow</span> <input id="flow" type="range" min="-2" max="2" step="0.05" value="0" /><b id="flowText"></b></label>
        </div>
        <small id="toolTip" hidden>Click for a pebble at full speed. Hold to grow the rock, up to a boulder; let go to send it.</small>`)}
      ${n(`layers`,`eye`,`Layers`,`${hh.map(e=>`<p>${e.name}</p>${e.items.map(e=>`<label${e.hint?` title="${e.hint}"`:``}><input type="checkbox" data-layer="${e.id}" checked /><span>${e.label}</span></label>`).join(``)}`).join(``)}
        <p>Cloud look</p>
        <div class="seg looks" role="group" aria-label="Cloud look">
          ${(t.cloudLooks||[]).map(e=>`<button data-look="${e.id}" title="${e.label} (C cycles)">${e.label.split(` · `)[0].replace(`Old puffs`,`Old`)}</button>`).join(``)}
        </div>
        <p>Who lives here</p><small id="census"></small>
        <div class="lfoot"><button id="layersAll">Show all</button><button id="layersNone">Hide all</button></div>
        <small>Hides from view only. The world carries on.</small>`)}
    </div>`;let r=t=>e.querySelector(t),i=r(`#note`),a=0,o=[],s=Object.fromEntries(mh.map(e=>[e.id,{size:0,flow:0}])),c=`look`,l=e=>{let t=2**e;return(t>=10?t.toFixed(0):t.toFixed(1))+`×`};function u(){let e=s[c];r(`#opts`).hidden=c===`look`||c===`asteroid`||c===`volcano`||c===`gamma`||c===`hurricane`||c===`crack`||c===`oil`,r(`#flow`).closest(`label`).hidden=[`nuke`,`antimatter`,`shower`,`laser`,`tornado`,`fissure`,`locusts`,`hole`].includes(c),r(`#toolTip`).hidden=c!==`asteroid`,r(`#size`).value=e.size,r(`#flow`).value=e.flow,r(`#sizeText`).textContent=l(e.size),r(`#flowText`).textContent=l(e.flow),t.brush({size:2**e.size,flow:2**e.flow})}function d(e,t){if(c===`look`||c===`asteroid`)return;let n=r(`#`+e);s[c][e]=Math.max(Number(n.min),Math.min(Number(n.max),s[c][e]+t)),u()}function f(n){c=n,e.querySelectorAll(`[data-tool]`).forEach(e=>e.setAttribute(`aria-pressed`,e.dataset.tool===n)),y(`tools`,mh.find(e=>e.id===n).label),t.tool(n),u()}function p(n){e.querySelectorAll(`[data-speed]`).forEach(e=>e.setAttribute(`aria-pressed`,Number(e.dataset.speed)===n)),y(`time`,[`paused`,`normal`,`fast`,`very fast`][n]),t.speed(n)}e.querySelectorAll(`[data-tool]`).forEach(e=>e.addEventListener(`click`,()=>f(e.dataset.tool))),e.querySelectorAll(`[data-speed]`).forEach(e=>e.addEventListener(`click`,()=>p(Number(e.dataset.speed)))),r(`#shake`).addEventListener(`click`,()=>t.shake()),r(`#new`).addEventListener(`click`,()=>t.newGlobe()),r(`#sun`).addEventListener(`input`,e=>t.sun(Number(e.target.value))),r(`#wet`).addEventListener(`input`,e=>t.water(Number(e.target.value)));for(let e of[`size`,`flow`])r(`#`+e).addEventListener(`input`,t=>{s[c][e]=Number(t.target.value),u()});let m=[`globe`,`time`,`tools`,`layers`],h={};try{h=JSON.parse(localStorage.getItem(`globe.panels`))||{}}catch{}let g=Object.fromEntries(m.map(e=>[e,h[e]??window.innerWidth>900]));function _(){for(let t of m)e.querySelector(`[data-panel="${t}"]`).classList.toggle(`shut`,!g[t]),e.querySelector(`[data-fold="${t}"]`).setAttribute(`aria-expanded`,g[t]),e.querySelector(`[data-body="${t}"]`).hidden=!g[t];try{localStorage.setItem(`globe.panels`,JSON.stringify(g))}catch{}}let v=e=>{g[e]=!g[e],_()};e.querySelectorAll(`[data-fold]`).forEach(e=>e.addEventListener(`click`,()=>v(e.dataset.fold)));let y=(t,n)=>e.querySelector(`[data-meta="${t}"]`).textContent=n;_();let b=[...e.querySelectorAll(`[data-layer]`)],x={};try{x=JSON.parse(localStorage.getItem(_h))||{}}catch{}let S=new Set((x.off||[]).filter(e=>gh.includes(e)));function C(){for(let e of b)e.checked=!S.has(e.dataset.layer);y(`layers`,S.size?`${S.size} off`:``);try{localStorage.setItem(_h,JSON.stringify({off:[...S]}))}catch{}}function w(e,n){gh.includes(e)&&(n?S.delete(e):S.add(e),t.layer(e,n),C())}let T=e=>gh.forEach(t=>w(t,e));for(let e of b)e.addEventListener(`change`,()=>w(e.dataset.layer,e.checked)),e.addEventListener(`click`,t=>t.detail>0&&e.blur());r(`#layersAll`).addEventListener(`click`,()=>T(!0)),r(`#layersNone`).addEventListener(`click`,()=>T(!1));for(let e of gh)t.layer(e,!S.has(e));C();function E(t){e.querySelectorAll(`[data-look]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.look===t)))}e.querySelectorAll(`[data-look]`).forEach(e=>e.addEventListener(`click`,()=>t.cloudLook(e.dataset.look)));let D=1;return window.addEventListener(`keydown`,n=>{if(n.target instanceof HTMLInputElement&&(n.key!==` `||n.target.type===`checkbox`)||n.metaKey||n.ctrlKey||n.altKey)return;let r=Number(n.key);if(r>=1&&r<=mh.length)f(mh[r-1].id);else if(n.key===` `){n.preventDefault();let t=Number(e.querySelector(`[data-speed][aria-pressed="true"]`).dataset.speed);t>0?(D=t,p(0)):p(D)}else n.key===`s`||n.key===`S`?t.shake():n.key===`[`?d(`size`,-.25):n.key===`]`?d(`size`,.25):n.key===`-`?d(`flow`,-.25):n.key===`=`||n.key===`+`?d(`flow`,.25):n.key===`l`||n.key===`L`?v(`layers`):n.key===`c`||n.key===`C`?t.cloudLook(`next`):n.key===`Escape`&&f(`look`)}),{setTool:f,setSpeed:p,setCloudLook:E,setLayer:w,setAllLayers:T,setSun(e){r(`#sun`).value=e},setWater(e){r(`#wet`).value=e},say(e,t=6){o.length<4&&o[o.length-1]?.text!==e&&o.push({text:e,seconds:t})},update(t,n=0){let s=performance.now(),c=t.windX*Math.cos(n)-t.windZ*Math.sin(n),l=-t.windX*Math.sin(n)-t.windZ*Math.cos(n);if(r(`#wind svg`).style.transform=`rotate(${Math.atan2(c,l)}rad)`,s>a){let e=o.shift();e?(i.textContent=e.text,i.classList.add(`on`),a=s+(o.length?Math.min(e.seconds,4):e.seconds)*1e3):a&&(a=0,i.classList.remove(`on`))}let u=t.year-Math.floor(t.year),d=yh[Math.floor((u+.125)%1*4)];r(`#clock`).textContent=`Year ${Math.floor(t.year)+1} · ${d} · ${Math.round(t.Tsea)}°C`,y(`globe`,`Year ${Math.floor(t.year)+1} · ${Math.round(t.Tsea)}°C`);let f=t.sun;r(`#sunText`).textContent=f<-.6?`freezing`:f<-.2?`cold`:f<.2?`mild`:f<.55?`warm`:f<.8?`hot`:`scorching`;let p=t.budget,m=p.lake+p.soil+p.plant+p.ice+p.air||1,h=t.water,g=m/t.wref;if(r(`#wetText`).textContent=(h<-.6?`parched`:h<-.2?`dry`:h<.2?`balanced`:h<.5?`wet`:h<.8?`flooded`:`ocean`)+` · `+(g>=9.95?g.toFixed(0):g.toFixed(1))+`×`,e.querySelector(`[data-l="lake"] span`).textContent=t.stats.lakeFrac>.5?`Sea`:`Lakes`,t.fauna){let e=e=>t.fauna.count(e),n=(e,t)=>t?`${e} ${t}`:``;r(`#census`).textContent=[n(`Minnows`,e(`minnow`)),n(`Big fish`,e(`bigfish`)),n(`Pike`,e(`pike`)),n(`Rabbits`,e(`rabbit`)),n(`Foxes`,e(`fox`)),n(`Songbirds`,e(`songbird`)),n(`Herons`,e(`heron`)),n(`Hawks`,e(`hawk`)),n(`Frogs`,e(`frog`)),n(`Dragonflies`,e(`dragonfly`)),n(`Ducks`,e(`duck`))].filter(Boolean).join(` · `)||`Nothing yet.`}for(let[t]of vh){let n=100*p[t]/m;e.querySelector(`[data-k="${t}"]`).style.width=n+`%`,e.querySelector(`[data-l="${t}"] b`).textContent=Math.round(n)+`%`}}}}var xh=[{path:`/game/`,name:`Game`,seed:!0},{path:`/effects-lab/`,name:`Effects lab`,seed:!0},{path:`/asset-browser/`,name:`Assets`,seed:!1}],Sh=`
#switcher {
  position: fixed;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 2px rgba(47, 52, 64, 0.08), 0 4px 14px rgba(47, 52, 64, 0.1);
  font: 600 12px/1 ui-rounded, 'SF Pro Rounded', 'Nunito', system-ui, -apple-system, sans-serif;
  user-select: none;
  -webkit-user-select: none;
}
#switcher a {
  padding: 7px 12px;
  border-radius: 999px;
  color: #6b7180;
  text-decoration: none;
  white-space: nowrap;
}
#switcher a:hover {
  color: #2f3440;
  background: rgba(47, 52, 64, 0.06);
}
#switcher a[aria-current='page'] {
  color: #fff;
  background: #2f8fb0;
}
`;function Ch(){if(document.getElementById(`switcher`))return;let e=xh.find(e=>location.pathname.startsWith(e.path));if(!e)return;let t=document.createElement(`style`);t.textContent=Sh,document.head.append(t);let n=document.createElement(`nav`);n.id=`switcher`,n.setAttribute(`aria-label`,`Snow Globe apps`);for(let t of xh){let r=document.createElement(`a`);r.textContent=t.name,r.href=t.path,t===e&&r.setAttribute(`aria-current`,`page`);let i=()=>r.href=t.path+(t.seed&&e.seed?location.hash:``);r.addEventListener(`pointerenter`,i),r.addEventListener(`focus`,i),r.addEventListener(`click`,i),n.append(r)}document.body.append(n);let r=document.getElementById(`stage`)||document.getElementById(`c`);if(!r)return;let i=()=>{let e=r.getBoundingClientRect(),t=document.getElementById(`lab`),i=t?Math.min(e.right,t.getBoundingClientRect().left):e.right;n.style.left=e.width?`${(e.left+i)/2}px`:``};new ResizeObserver(i).observe(r),addEventListener(`resize`,i),i()}var wh=[0,1/12,1/2,3],Th=document.getElementById(`c`),Eh=new cu({canvas:Th,antialias:!0});Eh.setPixelRatio(Math.min(window.devicePixelRatio,2)),Eh.shadowMap.enabled=!0,Eh.shadowMap.type=2,Eh.shadowMap.autoUpdate=!1;var Dh=new zn,Oh=new So(30,1,.1,50),kh={value:new U};function Ah(e){return e.onBeforeCompile=e=>{e.uniforms.uGlobeC=kh,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uGlobeC;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
	if (distance(-vViewPosition, uGlobeC) > 1.0) discard;`)},e}var $=new Cd(Number(location.hash.slice(1))||1+Math.floor(Math.random()*9999));history.replaceState(null,``,`#`+$.seed);var jh=Object.fromEntries(hh.flatMap(e=>e.items.map(e=>[e.id,!0]))),Mh={scene:Dh,camera:Oh,renderer:Eh,world:$,clip:Ah,layers:jh,channel:new Uint8Array(Y),riverside:new Float32Array(Y),busy:0},Nh=Mh.globe=Nd(Mh),Ph=Mh.land=Rd(Mh),Fh=Wd(Mh),Ih=mf(Mh),Lh=Df(Mh),Rh=Lf(Mh),zh=Vf(Mh),Bh=op(Mh),Vh=Ap(Mh),Hh=qp(Mh),Uh=nm({...Mh,sparks:Hh.sparks}),Wh=sh(Mh),Gh=mm({...Mh,flora:Ih}),Kh=hm(Mh),qh=_m({...Mh,sparks:Hh.sparks,air:Bh}),Jh=bm(Mh),Yh=Em({...Mh,flora:Ih}),Xh=Om(Mh),Zh=jm(Mh),Qh=Im(Mh),$h=Lm(Mh),eg=Rm(Mh),tg=Wm(Mh),ng=zm({...Mh,flora:Ih,sparks:Hh.sparks}),rg=dh(Mh,{air:Bh,flora:Ih,life:Wh}),ig=new yu(Oh,Th);ig.enablePan=!1,ig.enableDamping=!0,ig.dampingFactor=.08,ig.minDistance=1.5,ig.maxDistance=9,ig.minPolarAngle=Math.PI*.1,ig.maxPolarAngle=Math.PI*.68,ig.rotateSpeed=.7,ig.mouseButtons.RIGHT=e.ROTATE;function ag(){let e=Math.atan2($.basin.x,$.basin.z)-.55,t=.17,n=5.6;Oh.position.set(Math.sin(e)*Math.cos(t)*n,Math.sin(t)*n,Math.cos(e)*Math.cos(t)*n),ig.target.set(0,-.04,0),ig.update()}function og(){let e=window.innerWidth,t=window.innerHeight;Eh.setSize(e,t,!1),Oh.aspect=e/t,Oh.fov=Math.atan(Math.max(Math.tan(30*Math.PI/360),.215/Oh.aspect))*360/Math.PI,Oh.updateProjectionMatrix()}window.addEventListener(`resize`,og),og(),ag();var sg=new Go,cg=new H,lg=new U,ug=new U,dg=new U;function fg(e,t){let n=Th.getBoundingClientRect();cg.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),sg.setFromCamera(cg,Oh),lg.copy(sg.ray.origin).sub(Nh.group.position),ug.copy(sg.ray.direction);let r=lg.dot(ug),i=lg.dot(lg)-.985,a=r*r-i;if(a<0)return null;let o=-r-Math.sqrt(a),s=-r+Math.sqrt(a),c=o;for(let e=o;e<=s;e+=.005){if(dg.copy(lg).addScaledVector(ug,e),dg.y<Ph.surfaceAt(dg.x,dg.z)){let t=c,n=e;for(let e=0;e<6;e++){let e=(t+n)/2;dg.copy(lg).addScaledVector(ug,e),dg.y<Ph.surfaceAt(dg.x,dg.z)?n=e:t=e}return dg.copy(lg).addScaledVector(ug,n),{x:dg.x,z:dg.z,y:Ph.surfaceAt(dg.x,dg.z)}}c=e}return null}var pg={rain:[.058,4891608],clear:[.065,15906106],seeds:[.045,7191381],raise:[.052,15757370],volcano:[.07,16730652],lightning:[.03,12167167],nuke:[1,13168698],antimatter:[1,11567359],shower:[1,15764026],laser:[.012,16726570],tornado:[.03,9080988],fissure:[.012,16742954],locusts:[.08,7035434],gamma:[.05,14217471],hurricane:[.12,13161184],crack:[.05,16777215],hole:[.18,3153978],oil:[.02,1709330],sink:[.072,8023951],asteroid:[1,14239802]},mg=new Oi(new Ea(.9,1,48).rotateX(-Math.PI/2),new gi({color:16777215,transparent:!0,opacity:.9,depthTest:!1}));mg.renderOrder=10,mg.visible=!1;var hg=new W(16773590);Nh.group.add(mg);var gg=`look`,_g=1,vg=null,yg=!1,bg=0,xg=0,Sg=null,Cg={size:1,flow:1},wg=0,Tg=0,Eg=1.5,Dg=()=>Math.min(1,Math.max(0,((performance.now()-Tg)/1e3-.12)/Eg)),Og=e=>({size:(.012+.058*e)/.03,speed:4-1.4*e});function kg(e){e.buttons&2||(vg=gg===`look`?null:yg?Ag(e.clientX,e.clientY,wg)||vg:fg(e.clientX,e.clientY))}function Ag(e,t,n){let r=Th.getBoundingClientRect();if(cg.set((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1),sg.setFromCamera(cg,Oh),lg.copy(sg.ray.origin).sub(Nh.group.position),ug.copy(sg.ray.direction),Math.abs(ug.y)<1e-4)return null;let i=(n-lg.y)/ug.y;if(i<=0)return null;let a=lg.x+ug.x*i,o=lg.z+ug.z*i,s=Math.sqrt(Math.max(.01,.96-n*n)),c=Math.hypot(a,o);return c>s&&(a*=s/c,o*=s/c),{x:a,z:o,y:n}}Th.addEventListener(`pointerdown`,e=>{if(gg!==`look`&&e.button===0&&(kg(e),vg)){if(gg===`asteroid`){if($.meteors.length>=6){Ig.say(`Too many on their way already. Wait for them to land.`,3);return}Tg=performance.now()}gg===`volcano`&&$.volcanoAt(vg.x,vg.z),gg===`nuke`&&!$.nukeAt(vg.x,vg.z,Cg.size)&&Ig.say($.nukes.length>=3?`Three bombs are already falling.`:`Drop it on the land, inside the glass.`,3),gg===`hurricane`&&!$.hurricaneAt()&&Ig.say(`There is a hurricane already.`,3),gg===`crack`&&!$.crackAt(vg.x,vg.z)&&Ig.say($.cracks.length>=3?`The glass is cracked in three places already. Click by a crack to seal it.`:`Point towards the wall: the glass cracks on that side.`,4),gg===`hole`&&!$.holeAt(vg.x,vg.z,Cg.size)&&Ig.say(`Two black holes are feeding already.`,3),gg===`oil`&&!$.oilAt(vg.x,vg.z)&&Ig.say(`Two wells are gushing already.`,3),gg===`tornado`&&!$.tornadoAt(vg.x,vg.z,Cg.size)&&Ig.say(`Two tornadoes are down already.`,3),gg===`locusts`&&!$.locustsAt(vg.x,vg.z,Cg.size)&&Ig.say(`Two swarms are out already.`,3),gg===`gamma`&&!$.gammaAt(vg.x,vg.z)&&Ig.say($.gammas.length?`The sky is still glowing from the last one.`:`Point away from the middle of the globe: the burst comes from that side.`,3),gg===`fissure`&&(Sg={x:vg.x,z:vg.z}),gg===`antimatter`&&!$.antimatterAt(vg.x,vg.z,Cg.size)&&Ig.say($.nukes.length>=3?`Three bombs are already falling.`:`Drop it on the land, inside the glass.`,3),gg===`shower`&&!$.showerAt(vg.x,vg.z,Cg.size)&&Ig.say(`Two showers are coming down already.`,3),gg===`lightning`&&($.lightningAt(vg.x,vg.z),xg=0),yg=!0,wg=vg.y,ig.enabled=!1;try{Th.setPointerCapture(e.pointerId)}catch{}}},!0),Th.addEventListener(`pointermove`,kg);var jg=e=>{if(yg&&e&&gg===`asteroid`&&vg){let{size:e,speed:t}=Og(Dg());$.launch(vg.x,vg.z,e,t)}if(yg&&e&&gg===`fissure`&&Sg&&vg){let e=vg.x-Sg.x,t=vg.z-Sg.z,n=Math.hypot(e,t);(n>.04?$.fissureAt((vg.x+Sg.x)/2,(vg.z+Sg.z)/2,Math.atan2(t,e),n,Cg.size):$.fissureAt(Sg.x,Sg.z,0,0,Cg.size))||Ig.say(`Two cracks are opening already.`,3)}Sg=null,yg=!1,ig.enabled=!0};Th.addEventListener(`pointerup`,()=>jg(!0)),Th.addEventListener(`pointercancel`,()=>jg(!1)),Th.addEventListener(`pointerleave`,()=>{yg||(vg=null)});function Mg(e){if(Mh.busy>0&&(Mh.busy-=e),!yg||!vg)return;Mh.busy=.5;let{x:t,z:n}=vg,{size:r,flow:i}=Cg;if(e*=i,gg===`rain`)$.rainAt(t,n,e,r)<.15&&(bg-=e)<=0&&(Ig.say($.airT<0?`The air is too cold to carry much water.`:`The air is nearly dry. There is little left to rain.`,4),bg=6);else if(gg===`clear`)$.clearAt(t,n,e,r)>0&&Bh.vapour(t,n,e,r);else if(gg===`seeds`)$.seedAt(t,n,e,r),Bh.seeds(t,n,e,r);else if(gg===`raise`)$.raiseAt(t,n,e,1,r);else if(gg===`sink`)$.sinkAt(t,n,e,r);else if(gg===`volcano`)$.volcanoAt(t,n);else if(gg===`laser`)$.laserAt(t,n,e,r);else if(gg===`lightning`&&(xg+=e,xg>.35)){xg=0;let e=Math.random()*6.283,i=Math.sqrt(Math.random())*.03*r;$.lightningAt(t+Math.cos(e)*i,n+Math.sin(e)*i)}}function Ng(){$.shake(),Nh.shake(),Bh.flurry()}function Pg(){zg=0,Ph.reset(),Ih.reset(),Lh.reset(),zh.reset(),Bh.reset(),Vh.reset(),Hh.reset(),Uh.reset(),Gh.reset(),Kh.reset(),qh.reset(),Jh.reset(),Yh.reset(),Xh.reset(),Zh.reset(),Qh.reset(),$h.reset(),eg.reset(),tg.reset(),rg.reset(),Wh.reset()}function Fg(e=1+Math.floor(Math.random()*9999)){$.reset(e),history.replaceState(null,``,`#`+e),Pg(),Ig.setSun(0),Ig.setWater(0),ag()}window.addEventListener(`hashchange`,()=>{let e=Number(location.hash.slice(1));e&&e!==$.seed&&Fg(e)});var Ig=bh(document.getElementById(`ui`),{cloudLooks:kp,cloudLook:e=>Lg(e),tool:e=>{gg=e,vg=null,Th.style.cursor=e===`look`?`grab`:`crosshair`},speed:e=>_g=e,brush:e=>Cg=e,sun:e=>$.sun=e,water:e=>$.water=e,layer:(e,t)=>{jh[e]=t;let{sun:n,halo:r,glass:i,sky:a}=Nh.parts;n.visible=r.visible=jh.sun,i.visible=a.visible=jh.glass},shake:Ng,newGlobe:()=>Fg()});function Lg(e){e===`next`&&(e=kp[(kp.findIndex(e=>e.id===Vh.look)+1)%kp.length].id),Vh.setLook(e),Ig.setCloudLook(Vh.look),Ig.say(`Clouds: ${kp.find(e=>e.id===Vh.look).label}`,2)}Ig.setCloudLook(Vh.look),Ig.setTool(`look`),Ig.setSpeed(1);var Rg=performance.now(),zg=0,Bg=0,Vg=!1,Hg=[[`globe`,(e,t)=>Nh.update(e,$,t)],[`land`,e=>Ph.update(e)],[`ice`,()=>Fh.update()],[`flora`,e=>Ih.update(e)],[`pond`,e=>Lh.update(e)],[`rocks`,()=>Rh.update()],[`rivers`,(e,t)=>zh.update(e,t)],[`air`,(e,t)=>Bh.update(e,t)],[`clouds`,e=>Vh.update(e)],[`fire`,e=>Hh.update(e)],[`lightning`,e=>Uh.update(e)],[`nuke`,e=>Gh.update(e)],[`disasters`,e=>{Kh.update(e),qh.update(e),Jh.update(e),Yh.update(e),Xh.update(e,q.locust.radius),Zh.update(e),Qh.update(e,q.hurricane.eye),$h.update(),eg.update(e),tg.update(e,q.oil),ng.update()}],[`meteors`,e=>rg.update(e)],[`life`,(e,t)=>Wh.update(e,t)]],Ug=!1,Wg=null;function Gg(e){let t=Wg?performance.now():0;e*=$.beat(e);let n=_g>0,r=$.fireList.length>0;r&&_g>1&&!Vg&&Ig.say(`Time slows to normal while the fire burns.`,4),Vg=r&&_g>1;let i=Vg?1:_g;if(n){if(zg+=e*wh[i],i===3){if(zg>=Z.DT*2){let e=Math.min(zg,Z.DT*4);$.step(e),zg=Math.min(zg-e,Z.DT*4)}}else{let e=0;for(;zg>=Z.DT&&e<3;)$.step(Z.DT),zg-=Z.DT,e++;zg>Z.DT*3&&(zg=0)}}$.daylight=Nh.state.light,$.realtime(e,n),Wg&&(Wg.ms.sim=(Wg.ms.sim||0)+performance.now()-t),$.rumble>0&&(Nh.jolt(Math.min(.6,$.rumble)),$.rumble=0),Mg(e);for(let[t,r]of Hg)if(Wg){let i=performance.now();r(e,n),Wg.ms[t]=(Wg.ms[t]||0)+performance.now()-i}else r(e,n);let a=pg[gg];if(mg.visible=!!(vg&&a),mg.visible){if(mg.position.set(vg.x,Ph.surfaceAt(vg.x,vg.z)+.012,vg.z),gg===`asteroid`){let e=yg?Dg():0,{size:t,speed:n}=Og(e),r=Zu(Math.min(.07,Math.max(.012,.03*t)),n).R;mg.scale.setScalar(r*(yg?1+.05*(.4+e)*Math.sin(performance.now()/(90-50*e)):1)),mg.material.color.setHex(a[1]).lerp(hg,e*e*.8)}else gg===`nuke`?(mg.scale.setScalar(Qu(Cg.size).Rb),mg.material.color.setHex(a[1])):gg===`antimatter`||gg===`shower`?(mg.scale.setScalar(gg===`antimatter`?$u(Math.min(3.2,Math.max(.35,Cg.size))):q.shower.spread*Math.sqrt(Cg.size)),mg.material.color.setHex(a[1])):(mg.scale.setScalar(a[0]*Cg.size*(yg?.92+.08*Math.sin(performance.now()/90):1)),mg.material.color.setHex(a[1]))}for(let e of $.events.splice(0))Ig.say(e.text);if((Bg-=e)<=0&&(Ig.update($,Math.atan2(Oh.position.x,Oh.position.z)),Bg=.2),ig.update(),Oh.updateMatrixWorld(),kh.value.copy(Nh.group.position).applyMatrix4(Oh.matrixWorldInverse),Eh.shadowMap.needsUpdate=Ug=!Ug,Wg){let e=performance.now();Eh.render(Dh,Oh),Eh.getContext().finish(),Wg.ms.draw=(Wg.ms.draw||0)+performance.now()-e,Wg.calls+=Eh.info.render.calls,Wg.tris+=Eh.info.render.triangles}else Eh.render(Dh,Oh)}function Kg(e=120){Wg={ms:{},calls:0,tris:0};let t=performance.now();for(let t=0;t<e;t++)Gg(1/60);let n=(performance.now()-t)/e,r=Wg;Wg=null;let i=Object.fromEntries(Object.entries(r.ms).map(([t,n])=>[t,+(n/e).toFixed(2)]).filter(([,e])=>e>=.05).sort((e,t)=>t[1]-e[1]));return{"ms a frame":+n.toFixed(1),parts:i,"draw calls":Math.round(r.calls/e),triangles:Math.round(r.tris/e),pixels:Eh.domElement.width*Eh.domElement.height}}var qg=1e3/60,Jg={most:Math.min(window.devicePixelRatio,2),now:Math.min(window.devicePixelRatio,2),late:0,easy:0};function Yg(e){Jg.now=e,Jg.late=Jg.easy=0,Eh.setPixelRatio(e),og()}function Xg(e){requestAnimationFrame(Xg);let t=e-Rg,n=document.hasFocus()?qg:qg*2;t<n-2||(Rg=e,t<250&&(t>n*1.45?(Jg.late+=t,Jg.easy=0):(Jg.easy+=t,Jg.late=Math.max(0,Jg.late-t*.5)),Jg.late>2e3&&Jg.now>1?Yg(Math.max(1,Jg.now-.25)):Jg.easy>3e4&&Jg.now<Jg.most&&Yg(Math.min(Jg.most,Jg.now+.25))),Gg(Math.min(.1,t/1e3)*window.globe.pace))}requestAnimationFrame(Xg),window.globe={world:$,P:Z,land:Ph,ice:Fh,flora:Ih,pond:Lh,rainbow:Jh,rocks:Rh,rivers:zh,life:Wh,layers:jh,camera:Oh,controls:ig,renderer:Eh,tick:Gg,view:Nh,pace:1,profile:Kg,sharp:Jg,resetViews:Pg,frameCamera:ag,ui:Ig,advance(e){let t=Math.round(e/Z.DT);for(let e=0;e<t;e++)$.step(Z.DT),$.realtime(Z.DT*12,!0)},water(e){$.water=e,Ig.setWater(e)},sun(e){$.sun=e,Ig.setSun(e)},speed:e=>Ig.setSpeed(e),tool:e=>Ig.setTool(e),shake:Ng,newGlobe:Fg,pick:fg,launch:(e,t,n=1,r=1)=>$.launch(e,t,n,r),meteors:rg,clouds:Vh,cloudLook:e=>Lg(e)},Ch();