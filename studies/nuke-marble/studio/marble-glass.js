/* Marble glass: the "1st Choice" look from studies/glass, as a drop-in WebGL2 pass.
 *
 *   <script src="marble-glass.js"></script>            (a plain script: it sets window.MarbleGlass)
 *   const glass = MarbleGlass.create(gl);             // gl: a WebGL2 context
 *   each frame:
 *     glass.drawBackdrop(frame)   // optional, first: space, stars, the halo, and the sky seen inside the bubble
 *     ...draw your world, kept inside the sphere...
 *     glass.draw(frame)           // last: reads what is on screen and lays the glass over it
 *   where frame = { camera: { view, proj }, sphere: { center, radius, ground, lava }, w, h, time,
 *                   from: null, to: null, sun: [x,y,z] (optional), gold: 0..1 (optional) }
 *
 * The glass is faked in one fullscreen pass; nothing is ray traced. The shader is the study's glass pass with every
 * effect the 1st Choice look leaves off taken out. The numbers in it were tuned on a sphere of radius 10, so it works in
 * those units and scales your sphere to fit. See README.md beside this file. */
(function (root) {
  'use strict';
  const RAD = 10;
  const DEG = Math.PI / 180;

  // ── the look: every control the kit keeps, with the 1st Choice values (studies/glass/looks/1st-choice.json) ──
  // A colour is [r, g, b] in 0..1. Ranges and meanings are in the study's README; the ids are the same.
  const FIRST = {
    lp: 0.12, lc: 1.7, lx: 0.6,                                   // lens pull: strength, curve, colour split
    bw: 0.014, bs: 0.05, bk: 0.28,                                // thick band: width, folds in, shade
    el: 0.73, ew: 2.3, ei: 0, eo: 0.27, ec: '#b3d9ff',            // lit edge line: strength, width (px), inset, lit side ↔ far side, colour
    ra: 0.3, rh: 58, ry: 0.7, ru: 0.2,                            // reflection along the top edge: strength, length (°), softness, below too
    gg: 0.12, ga: 138.5, gs: 58, gd: 1, gC: '#ffedcc',            // glow caught inside the rim: strength, where (°), length (°), reaches in, colour
    hm: 0.7,                                                      // keep highlights off the middle
    gt: 0.63, gw: 0.28, gc: '#bddbfa', gb: 0.3,                   // tint toward the rim: strength, width, colour, whole face
    rk: 0.29, rp: 10, rc: '#e6f2ff',                              // rim: dark ↔ bright, thinness, colour (unused while "inside" is on)
    rf: 0.35, r0: 0.075, rg: 2.1, rb: 0.04, rT: 1.18,             // mirror: strength, facing you, rim falloff, softness; the studio light it mirrors
    cs: 0.71, cf: 0.35, cb: 0, cn: 0,                             // studio that stays with you: strength, across the face, soft box, window panes
    hb: 0.6, hz: 7.9, hh: 0, hf: 1, ha: 138.3665, he: 53.0349,    // main spot: brightness, size (°), sharpness, at the light, direction, height
    hn: 1, hx: 0.2, hX: 2.14, hs: 155, hy: 18,                    // more spots: how many, brightness, size ×, spread (°), height (°)
    hg: 0.38,                                                     // far-wall glint
    bl: 0.65, bp: 12.5, bt: 0.27, bc: '#ffffff',                  // rim light from behind: strength, thinness, tilt up, colour
    fr: 0.09,                                                     // colour fringe
    hS: 2.04, hW: 1.26, hC: '#386bb3', hR: 4,                     // halo: strength, width, colour and warm-below (both unused while "inside" is on)
    im: 1, iK: 1.2, iW: 0.75, iL: 1.62, iE: 0,                    // glow from what is inside: on, sky, water, lava, earth
    cg: 0.94,                                                     // core glow on the lower glass (only while "inside" is off)
    lA: 142, lE: 90,                                              // main light: direction, height (°) — overridden by frame.sun
    sB: 0.74, sS: 1.13, sC: 4, sN: 0,                             // space brightness; stars brightness, how many; nebula
    sg: 0.4, sr: 0.12,                                            // the sun through the glass: glow, rays
  };
  const COLOURS = new Set(['ec', 'gC', 'gc', 'rc', 'bc', 'hC']);
  // what each of the study's effects is set to while switched off (a look file's "off" list), for the effects kept here
  const NEUTRAL = { lens: { lp: 0 }, eband: { bw: 0 }, eline: { el: 0 }, earc: { ra: 0 }, cres: { gg: 0 }, mid: { hm: 0 }, rtint: { gt: 0, gb: 0 },
    rim: { rk: 0 }, refl: { rf: 0 }, vstudio: { cs: 0 }, mstudio: { rT: 0 }, spot: { hb: 0 }, extra: { hn: 0 }, glint: { hg: 0 }, back: { bl: 0 },
    fringe: { fr: 0 }, halo: { hS: 0, hR: 0 }, inside: { im: 0 }, core: { cg: 0 }, stars: { sS: 0 }, nebula: { sN: 0 }, sunglow: { sg: 0, sr: 0 } };
  // the study's effects this kit does not carry, with the controls that make them visible
  const DROPPED = { ebend: ['eb'], eout: ['ed'], eprism: ['ep'], fwall: ['fw'], clarity: ['cl', 1], tint: ['ts'], mstars: ['rS'], mwin: ['rW'],
    mag: ['mg'], ghost: ['gh'], dust: ['du'], smudge: ['sm'], scratch: ['sc'], wave: ['wv'], mist: ['mi'], dew: ['dw'], frost: ['fo'], drops: ['dr'],
    haze: ['zS'], sheen: ['sh'], caust: ['ca'], land: ['ld', 0, 'lm'], water: ['wm'], thick: ['th'], bend: ['bd'] };

  const hex = (s) => { const n = parseInt(String(s).replace('#', ''), 16); return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };
  const col = (x) => (Array.isArray(x) ? x.slice(0, 3) : hex(x));
  function resolve(look) {
    // a look file ({ settings, off }), or a plain { id: value } object; anything missing takes the 1st Choice value
    const s = look && look.settings ? look.settings : look || {};
    const off = look && Array.isArray(look.off) ? look.off : [];
    const v = {};
    for (const id in FIRST) v[id] = COLOURS.has(id) ? col(id in s ? s[id] : FIRST[id]) : +(id in s ? s[id] : FIRST[id]);
    for (const e of off) if (NEUTRAL[e]) for (const id in NEUTRAL[e]) v[id] = NEUTRAL[e][id];
    const missing = [];
    for (const e in DROPPED) {
      if (off.includes(e)) continue;
      const [id, neutral = 0, id2] = DROPPED[e];
      if ((id in s && +s[id] !== neutral) || (id2 && id2 in s && +s[id2] !== 0)) missing.push(e);
    }
    return { v, missing };
  }

  // ── the controls go to the shaders packed in one vec4 array, named by #define ──
  const KSLOT = {};
  let NK = 0;
  (() => {
    let lane = 4;
    for (const id in FIRST) {
      if (COLOURS.has(id)) { KSLOT[id] = [NK++, 'xyz']; lane = 4; continue; }
      if (lane > 3) { lane = 0; NK++; }
      KSLOT[id] = [NK - 1, 'xyzw'[lane++]];
    }
  })();
  const KDEFS = `uniform vec4 uK[${NK}];\n` + Object.keys(KSLOT).map((id) => `#define P_${id} uK[${KSLOT[id][0]}].${KSLOT[id][1]}`).join('\n') + '\n';

  const HEAD = '#version 300 es\nprecision highp float;\nprecision highp int;\nprecision highp sampler2D;\n';
  const VS = HEAD + `
out vec2 vP;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vP = p * 2.0 - 1.0;
  gl_Position = vec4(vP, 0.0, 1.0);
}`;
  // shared by both passes: the view ray, and the rule for what lies behind the glass at a point on it
  const COMMON = (groundGLSL) => `
const float RAD = 10.0;
const float RR = 100.0;
in vec2 vP;
out vec4 o;
uniform vec3 uCam;
uniform vec3 uFwd;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec2 uTan;
uniform vec2 uOff;
uniform float uTime;
uniform vec3 uSun;
uniform float uGround;
uniform float uLava;
vec3 rayAt(vec2 p) { return normalize(uFwd + uRight * ((p.x + uOff.x) * uTan.x) + uUp * ((p.y + uOff.y) * uTan.y)); }
// The ground at a point xz inside the sphere, in the glass's units (radius 10, centre at 0):
// x = the top of the land, y = the top of any water there, z = 1 where there is water.
vec3 marbleGround(vec2 xz) {
${groundGLSL}
}
// What lies behind the glass at a point p on it, as light: open sky above the land, water, the dark earth layers, lava at the bottom.
vec3 insideLight(vec3 p) {
  vec3 hh = marbleGround(p.xz);
  float top = hh.x;
  float wet = hh.z > 0.5 ? 1.0 : 0.0;
  float surf = max(top, wet > 0.5 ? hh.y : top);
  float y = p.y;
  float skyW = smoothstep(surf - 0.05, surf + 0.4, y);
  float waterW = wet * smoothstep(top - 0.05, top + 0.08, y) * (1.0 - smoothstep(surf - 0.02, surf + 0.06, y));
  float lavaW = 1.0 - smoothstep(uLava - 0.6, uLava + 1.5, y);
  float earthW = clamp(1.0 - skyW - waterW - lavaW, 0.0, 1.0);
  vec3 sky = mix(vec3(0.80, 0.93, 1.0), vec3(0.27, 0.58, 0.95), smoothstep(-0.25, 0.9, y / RAD));
  sky += vec3(1.0, 0.95, 0.8) * pow(max(dot(normalize(p), uSun), 0.0), 6.0) * 0.6;
  vec3 lava = vec3(1.0, 0.42, 0.08) * (0.85 + 0.15 * sin(uTime * 1.1 + p.x * 0.8 + p.z * 0.6));
  return sky * skyW * P_iK + vec3(0.3, 0.75, 0.85) * waterW * P_iW + lava * lavaW * P_iL + vec3(0.45, 0.32, 0.2) * earthW * P_iE;
}
`;
  const FLAT = '  return vec3(uGround, uGround, 0.0);';

  // ── behind the world: space, stars, the halo the glass throws, and the sky seen inside the bubble ──
  const BACK_FS = (g) => HEAD + KDEFS + COMMON(g) + `
float hash3(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise3(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 0.0)), hash3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0.0, 0.0, 1.0)), hash3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 1.0)), hash3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// the halo's colour: what lies inside round the rim, nearest this point, spread wider the further out it is
vec3 haloInside(vec3 q, float miss) {
  float D2 = dot(uCam, uCam);
  vec3 cn = uCam * inversesqrt(D2);
  float k = RR / D2;
  vec3 cs = cn * RAD * k;
  float rad = RAD * sqrt(max(1.0 - k, 0.0));
  vec3 e = q - cn * dot(q, cn);
  e /= max(length(e), 1e-5);
  vec3 f = cross(cn, e);
  float sg = mix(0.049, 0.22, smoothstep(0.0, 3.5, miss));
  vec3 acc = vec3(0.0);
  for (int i = -2; i <= 2; i++) {
    float a = float(i) * sg;
    acc += insideLight(cs + (e * cos(a) + f * sin(a)) * rad) * exp(-0.5 * float(i * i));
  }
  return min(acc / 2.4837, vec3(4.0));
}
void main() {
  vec3 d = rayAt(vP);
  vec3 g = d * 220.0;
  vec3 id = floor(g);
  vec3 f = fract(g) - vec3(0.5);
  float h = hash3(id);
  float star = step(1.0 - 0.0045 * P_sC, h) * (1.0 - smoothstep(0.04, 0.24, length(f)));
  star *= (0.4 + 0.6 * fract(h * 71.0)) * (0.65 + 0.35 * sin(uTime * 1.5 + h * 500.0));
  vec3 col = vec3(0.016, 0.02, 0.05) * P_sB + vec3(0.9, 0.95, 1.0) * star * P_sS;
  if (P_sN > 0.0) {
    float neb = noise3(d * 2.2 + vec3(3.0)) * noise3(d * 4.7 - vec3(1.0));
    col += (vec3(0.10, 0.05, 0.16) * neb * 1.4 + vec3(0.02, 0.09, 0.11) * noise3(d * 1.6 + vec3(9.0)) * 0.5) * P_sN;
  }
  float b = dot(uCam, d);
  float cc = dot(uCam, uCam) - RR;
  float disc = b * b - cc;
  if (disc > 0.0) {
    float sq = sqrt(disc);
    vec3 pf = uCam + d * (-b + sq);
    float sd = max(dot(normalize(pf), uSun), 0.0);
    vec3 sky = mix(vec3(0.80, 0.93, 1.0), vec3(0.27, 0.58, 0.95), smoothstep(-0.25, 0.9, pf.y / RAD));
    sky += vec3(1.0, 0.95, 0.8) * (pow(sd, 220.0) * 1.2 + pow(sd, 12.0) * 0.18 * P_sg);
    if (P_sr > 0.0 && sd > 0.6) {
      vec3 sT = normalize(cross(uSun, vec3(0.0, 1.0, 0.0)) + vec3(1e-5, 0.0, 1e-5));
      vec3 sBn = cross(uSun, sT);
      vec3 pd = normalize(pf);
      float ang = atan(dot(pd, sBn), dot(pd, sT));
      float ray = pow(abs(cos(ang * 3.0)), 24.0) + 0.6 * pow(abs(cos(ang * 3.0 + 0.5236)), 48.0);
      sky += vec3(1.0, 0.96, 0.86) * ray * pow(sd, 30.0) * P_sr * 0.9;
    }
    col = mix(col, sky, 0.94 * smoothstep(0.0, 0.1, sq / RAD));
  } else if (b < 0.0) {
    float miss = sqrt(max(cc + RR - b * b, 0.0)) - RAD;
    float hk = exp(-miss * 0.8 / P_hW) * 0.13 * P_hS;
    if (P_im > 0.5) {
      if (hk > 0.0015) col += haloInside(uCam - d * b, miss) * hk;
    } else {
      col += P_hC * hk;
      col += vec3(0.7, 0.25, 0.08) * exp(-miss * 1.6 / P_hW) * 0.06 * (1.0 - smoothstep(-0.2, 0.35, d.y + 0.25)) * P_hR;
    }
  }
  o = vec4(col, 1.0);
}`;

  // ── the glass, over a picture of the world ──
  const GLASS_FS = (g) => HEAD + KDEFS + COMMON(g) + `
uniform sampler2D uScene;
uniform mat4 uVP;
uniform float uPx;
uniform vec2 uTexel;
uniform vec3 uSpot[4];
uniform vec4 uSpotK[4];
uniform vec3 uBack;
uniform float uGold;
float g2(float x) { return exp(-x * x); }
vec3 pic(vec2 uv, float lod) {
  uv = clamp(uv, vec2(0.0), vec2(1.0));
  if (lod < 0.05) return textureLod(uScene, uv, 0.0).rgb;
  vec2 o2 = uTexel * exp2(lod) * 0.6;
  return 0.25 * (textureLod(uScene, uv + o2, lod).rgb + textureLod(uScene, uv - o2, lod).rgb
               + textureLod(uScene, uv + vec2(o2.x, -o2.y), lod).rgb + textureLod(uScene, uv + vec2(-o2.x, o2.y), lod).rgb);
}
// a soft box overhead, one at the light, a pale horizon: what the mirror shows
vec3 env(vec3 r, float blur) {
  float sb = 0.03 + blur * 0.4;
  float box = smoothstep(0.6 - sb, 0.6 + sb, r.y);
  float key = smoothstep(0.82 - sb, 0.82 + sb, dot(r, uSpot[0]));
  float band = g2(r.y * 4.2);
  return P_rT * (vec3(1.0) * box * 0.75 + vec3(1.0, 0.98, 0.95) * key * 0.6 + vec3(0.5, 0.55, 0.62) * band * 0.22 + vec3(0.05, 0.055, 0.065) * smoothstep(-0.6, 0.3, r.y));
}
// the screen point seen along a view line whose distance from the sphere's centre is rs (in radii), in the same plane
// as the real view line: how the edge bends and folds the picture without tracing anything
vec2 edgeUV(float rs, vec3 cn, vec3 pe, float cdist) {
  float sA = clamp(rs * RAD / cdist, 0.0, 0.9999);
  vec4 q = uVP * vec4(uCam + (cn * sqrt(1.0 - sA * sA) + pe * sA) * 4.0, 1.0);
  return q.xy / q.w * 0.5 + 0.5;
}
// the r03 demo's studio, fixed to the view: a rounded soft box up left, a warm lamp down right, a blue strip right
float sdRR(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
vec3 studioV(vec3 r) {
  vec3 c = vec3(0.0);
  if (P_cb > 0.0) {
    vec3 a = normalize(vec3(-0.55, 0.62, 0.56));
    float k = dot(r, a);
    if (k > 0.0) {
      vec3 t = normalize(cross(vec3(0.0, 1.0, 0.0), a));
      vec3 b = cross(a, t);
      vec2 q = vec2(dot(r, t), dot(r, b)) / k;
      float d = sdRR(q, vec2(0.27, 0.19), 0.08);
      float m = 1.0 - smoothstep(-0.02, 0.025, d);
      float bars = smoothstep(0.008, 0.02, abs(q.x)) * smoothstep(0.008, 0.02, abs(q.y));
      c += (vec3(1.0, 0.98, 0.95) * m * mix(1.0, mix(0.5, 1.0, bars), P_cn) * 0.85 + vec3(0.6, 0.75, 1.0) * exp(-max(d, 0.0) * 9.0) * 0.1) * P_cb;
    }
  }
  vec3 a2 = normalize(vec3(0.7, -0.42, 0.55));
  float k2 = dot(r, a2);
  if (k2 > 0.0) c += vec3(1.0, 0.8, 0.6) * (1.0 - smoothstep(0.09, 0.15, acos(min(k2, 1.0)))) * 0.42;
  c += vec3(0.55, 0.75, 1.0) * smoothstep(0.93, 0.985, dot(r, normalize(vec3(0.95, 0.22, -0.2)))) * 0.3;
  c += vec3(0.04, 0.06, 0.11) * smoothstep(-0.2, 1.0, r.y);
  return c;
}
void main() {
  vec2 uv = vP * 0.5 + 0.5;
  vec3 d = rayAt(vP);
  float b = dot(uCam, d);
  float cc = dot(uCam, uCam) - RR;
  float disc = b * b - cc;
  if (disc <= 0.0) { o = vec4(textureLod(uScene, uv, 0.0).rgb, 1.0); return; }
  float sq = sqrt(disc);
  float t1 = -b - sq, t2 = -b + sq;
  vec3 P1 = uCam + d * t1;
  vec3 P2 = uCam + d * t2;
  vec3 n0 = P1 / RAD;
  vec3 n2 = P2 / RAD;
  float pp = sqrt(max(dot(uCam, uCam) - b * b, 0.0));
  float ndv0 = max(dot(n0, -d), 0.0);
  float edge = 1.0 - ndv0;
  float fres = pow(edge, 3.5);
  vec3 L = uSpot[0];
  vec3 add = vec3(0.0);
  vec3 mul = vec3(1.0);
  vec3 r = reflect(d, n0);
  vec4 c0 = uVP * vec4(0.0, 0.0, 0.0, 1.0);
  vec2 cuv = c0.xy / c0.w * 0.5 + 0.5;

  // ── the edge: the lens pull, and a thin band that folds the inside back ──
  float rho = pp / RAD;                                             // 0 at the middle of the disc, 1 at its edge
  float pxR = sqrt(max(dot(uCam, uCam) - RR, 0.0)) * uPx / RAD;      // one pixel at the rim, in those units
  float tb = 0.0, eband = 0.0, eLod = 0.0;
  vec2 suv = uv, euvR = vec2(0.0), euvB = vec2(0.0);
  if (P_bw > 0.0 || P_lp > 0.0) {
    vec3 ecn = normalize(-uCam);
    float ecd = length(uCam);
    vec3 epe = d - ecn * dot(d, ecn);
    epe /= max(length(epe), 1e-6);
    float inner = 1.0 - P_bw;
    float rs = rho;
    if (rho >= inner) {
      tb = clamp((rho - inner) / max(P_bw, 1e-4), 0.0, 1.0);
      eband = smoothstep(inner - pxR, inner + pxR, rho);
      rs = inner * (1.0 - P_bs * tb);
    }
    if (P_lp > 0.0) { rs *= 1.0 - P_lp * pow(edge, P_lc); eLod += min(P_lp * 12.0 * pow(edge, 4.0), 3.0); }
    rs = min(rs, 0.99);
    vec2 e0 = edgeUV(rs, ecn, epe, ecd);
    suv += e0 - uv;
    if (P_lx > 0.0) {
      euvR = edgeUV(clamp(rho - (rho - rs) * (1.0 - 0.035 * P_lx), 0.0, 0.99), ecn, epe, ecd) - e0;
      euvB = edgeUV(clamp(rho - (rho - rs) * (1.0 + 0.05 * P_lx), 0.0, 0.99), ecn, epe, ecd) - e0;
    }
  }

  // ── the shell: rim, lit edge line, crescent, tint, the arc along the top ──
  float fr = pow(edge, P_rp);
  if (P_rk > 0.0) add += (P_im > 0.5 ? insideLight(P1) : P_rc) * fr * P_rk; else mul *= 1.0 + P_rk * fr;
  float litS = 0.5 + 0.5 * dot(n0, L);
  float sideK = mix(litS, 1.0 - litS, P_eo);
  sideK = 0.15 + 0.85 * sideK * sideK;
  if (P_el > 0.0) {
    float w = P_ew * pxR;
    float ln = g2((rho - (1.0 - P_ei - w)) / w);
    if (P_bw > 0.0) ln += 0.7 * g2((rho - (1.0 - P_bw)) / w);
    add += P_ec * ln * sideK * P_el;
  }
  if (P_gg > 0.0) {
    vec3 m3 = n0 + d * dot(n0, -d);
    vec2 nd = vec2(dot(m3, uRight), dot(m3, uUp));
    nd /= max(length(nd), 1e-4);
    float cA = cos(radians(P_gs));
    float k = smoothstep(cA, mix(cA, 1.0, 0.89), dot(nd, vec2(sin(radians(P_ga)), cos(radians(P_ga)))));
    float gb2 = smoothstep(0.03 * P_gd, 0.12 * P_gd, ndv0) * (1.0 - smoothstep(0.18 * P_gd, 0.45 * P_gd, ndv0));
    add += P_gC * k * gb2 * P_gg;
  }
  if (P_gt > 0.0) mul *= mix(vec3(1.0), P_gc, P_gt * (1.0 - smoothstep(0.0, P_gw, ndv0)));
  if (P_gb > 0.0) { mul *= mix(vec3(1.0), vec3(0.95, 0.98, 1.0), P_gb); add += vec3(0.008, 0.014, 0.03) * P_gb; }
  if (P_ra > 0.0) {
    vec3 m3 = n0 + d * dot(n0, -d);
    float upv = dot(m3, uUp) / max(length(m3), 1e-4);
    float cA = cos(radians(P_rh));
    float cover = smoothstep(cA, mix(cA, 1.0, 0.45), upv) + 0.6 * P_ru * smoothstep(cA, mix(cA, 1.0, 0.45), -upv);
    float r0 = 1.0 - P_bw - 0.035;
    float wa = 0.012 + P_ry * 0.05;
    float prof = smoothstep(r0 - wa * 2.2, r0 - wa * 0.2, rho) * (1.0 - smoothstep(r0 + wa * 0.15, r0 + wa * 0.7, rho));
    add += vec3(0.94, 0.97, 1.0) * prof * cover * P_ra * 0.55;
  }

  // ── reflection and highlights ──
  float scatter = mix(1.0, smoothstep(0.45, 0.85, pp / RAD), P_hm);
  if (P_rf > 0.0) {
    float Fr = P_r0 + (1.0 - P_r0) * pow(1.0 - ndv0, P_rg);
    add += env(r, clamp(P_rb, 0.0, 1.0)) * Fr * P_rf * scatter;
  }
  if (P_cs > 0.0) {
    vec3 rv = vec3(dot(r, uRight), dot(r, uUp), -dot(r, uFwd));
    add += studioV(rv) * (P_cf + (1.0 - P_cf) * (0.04 + 0.96 * pow(1.0 - ndv0, 5.0))) * P_cs * scatter;
  }
  vec3 spec = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    vec4 k = uSpotK[i];
    if (k.z <= 0.0) continue;
    float c = max(dot(r, uSpot[i]), 0.0);
    spec += (i == 0 ? vec3(1.0) : vec3(0.8, 0.9, 1.0)) * mix(pow(c, k.x), smoothstep(k.y, k.w, c), P_hh) * k.z;
  }
  add += spec * scatter;
  if (P_hg > 0.0) add += vec3(1.0) * pow(max(dot(reflect(d, -n2), L), 0.0), uSpotK[0].x * 0.6) * P_hg * 0.6 * scatter;
  if (P_bl > 0.0) { float side = 0.5 + 0.5 * dot(n0, uBack); add += P_bc * pow(edge, P_bp) * side * side * P_bl * 1.5; }
  if (P_im < 0.5) add += vec3(0.5, 0.15, 0.03) * fres * (1.0 - smoothstep(-0.9, -0.2, n0.y)) * P_cg;
  if (uGold > 0.0) {                                                 // a rare discovery gilds the glass for a moment
    float sweep = 0.5 + 0.5 * sin(atan(n0.z, n0.x) * 3.0 + n0.y * 4.0 - uTime * 3.0);
    add += vec3(1.0, 0.78, 0.32) * uGold * (0.12 + fres * 0.7) * (0.6 + 0.4 * sweep);
  }

  // ── the world behind, as a picture: pulled, softened at the rim, fringed ──
  float lod = min(eband * (0.3 + tb * 0.9) + eLod, 6.0);
  vec3 col = pic(suv, lod);
  if (euvR != vec2(0.0) || euvB != vec2(0.0)) { col.r = pic(suv + euvR, lod).r; col.b = pic(suv + euvB, lod).b; }
  mul *= 1.0 - eband * P_bk;
  if (P_fr > 0.0) {
    vec2 dir = suv - cuv;
    float f = P_fr * 0.035 * pow(pp / RAD, 4.0);
    col.r = pic(cuv + dir * (1.0 + f), lod).r;
    col.b = pic(cuv + dir * (1.0 - f), lod).b;
  }
  o = vec4(col * mul + add, 1.0);
}`;

  // ── small maths ──
  const norm3 = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
  const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dirOf = (az, el) => [Math.cos(el * DEG) * Math.cos(az * DEG), Math.sin(el * DEG), Math.cos(el * DEG) * Math.sin(az * DEG)];

  function create(gl, opts) {
    opts = opts || {};
    const ground = opts.groundGLSL || FLAT;
    const errors = [];
    function compile(type, src, name) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) errors.push(name + ': ' + gl.getShaderInfoLog(s));
      return s;
    }
    function program(name, fs) {
      const p = gl.createProgram();
      gl.attachShader(p, compile(gl.VERTEX_SHADER, VS, name)); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs, name));
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) errors.push(name + ': ' + gl.getProgramInfoLog(p));
      const loc = {};
      return { p, u: (n) => (n in loc ? loc[n] : (loc[n] = gl.getUniformLocation(p, n))) };
    }
    const pBack = program('marble-glass backdrop', BACK_FS(ground));
    const pGlass = program('marble-glass glass', GLASS_FS(ground));
    if (errors.length) throw new Error(errors.join('\n'));
    const vao = gl.createVertexArray();
    const K = new Float32Array(NK * 4);
    const spot = new Float32Array(12), spotK = new Float32Array(16);
    const hdr = !!opts.hdr && !!gl.getExtension('EXT_color_buffer_float');
    let pic = null, look = null, checked = false;

    function setLook(L) {
      const r = resolve(L);
      look = r.v;
      for (const id in KSLOT) {
        const [s, c] = KSLOT[id], x = look[id];
        if (c === 'xyz') { K[s * 4] = x[0]; K[s * 4 + 1] = x[1]; K[s * 4 + 2] = x[2]; }
        else K[s * 4 + 'xyzw'.indexOf(c)] = x;
      }
      if (r.missing.length) console.warn('marble-glass: this look uses effects the kit does not carry (' + r.missing.join(', ') + '); they are left out. The full set is in studies/glass.');
      return r.missing;
    }
    setLook(opts.look || null);

    // the frame's camera and sphere, turned into the glass's own units
    function frameOf(f) {
      const V = f.camera.view, P = f.camera.proj, sp = f.sphere || {};
      const c = sp.center || [0, 0, 0], k = RAD / (sp.radius || RAD);
      const right = [V[0], V[4], V[8]], up = [V[1], V[5], V[9]], back = [V[2], V[6], V[10]];
      const t = [V[12], V[13], V[14]];
      const eye = [0, 1, 2].map((i) => -(right[i] * t[0] + up[i] * t[1] + back[i] * t[2]));
      const cam = [(eye[0] - c[0]) * k, (eye[1] - c[1]) * k, (eye[2] - c[2]) * k];
      const fwd = [-back[0], -back[1], -back[2]];
      const tanX = 1 / P[0], tanY = 1 / P[5];
      // the same camera in the glass's units, for projecting points back to the screen
      const n = 0.05, fa = 4000, vp = new Float32Array(16);
      const tv = [-(right[0] * cam[0] + right[1] * cam[1] + right[2] * cam[2]), -(up[0] * cam[0] + up[1] * cam[1] + up[2] * cam[2]), -(back[0] * cam[0] + back[1] * cam[1] + back[2] * cam[2])];
      const view = [right[0], up[0], back[0], 0, right[1], up[1], back[1], 0, right[2], up[2], back[2], 0, tv[0], tv[1], tv[2], 1];
      const proj = [P[0], 0, 0, 0, 0, P[5], 0, 0, P[8], P[9], (fa + n) / (n - fa), -1, 0, 0, 2 * fa * n / (n - fa), 0];
      for (let col = 0; col < 4; col++) for (let row = 0; row < 4; row++) {
        let s = 0;
        for (let i = 0; i < 4; i++) s += proj[i * 4 + row] * view[col * 4 + i];
        vp[col * 4 + row] = s;
      }
      const sun = f.sun ? norm3(f.sun) : dirOf(look.lA, look.lE);
      return { cam, fwd, right, up, tan: [tanX, tanY], off: [P[8] || 0, P[9] || 0], vp, sun,
        ground: (sp.ground ?? -0.27) * RAD, lava: (sp.lava ?? -0.71) * RAD, time: (f.time || 0) % 3600 };
    }
    function common(p, F) {
      gl.useProgram(p.p);
      gl.uniform3fv(p.u('uCam'), F.cam); gl.uniform3fv(p.u('uFwd'), F.fwd); gl.uniform3fv(p.u('uRight'), F.right); gl.uniform3fv(p.u('uUp'), F.up);
      gl.uniform2fv(p.u('uTan'), F.tan); gl.uniform2fv(p.u('uOff'), F.off);
      gl.uniform1f(p.u('uTime'), F.time); gl.uniform3fv(p.u('uSun'), F.sun);
      gl.uniform1f(p.u('uGround'), F.ground); gl.uniform1f(p.u('uLava'), F.lava);
      gl.uniform4fv(p.u('uK[0]'), K);
    }
    function target(f) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, f.to ?? null);
      gl.viewport(0, 0, f.w, f.h);
      gl.disable(gl.DEPTH_TEST); gl.disable(gl.BLEND); gl.depthMask(false);
      gl.bindVertexArray(vao);
    }

    function drawBackdrop(f) {
      const F = frameOf(f);
      target(f);
      common(pBack, F);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null); gl.depthMask(true);
    }

    function picAlloc(w, h) {
      if (pic && pic.w === w && pic.h === h) return pic;
      if (pic) { gl.deleteFramebuffer(pic.fb); gl.deleteTexture(pic.tex); }
      const Q = { w, h, tex: gl.createTexture(), fb: gl.createFramebuffer() };
      gl.bindTexture(gl.TEXTURE_2D, Q.tex);
      gl.texStorage2D(gl.TEXTURE_2D, Math.floor(Math.log2(Math.max(w, h))) + 1, hdr ? gl.RGBA16F : gl.RGBA8, w, h);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.bindFramebuffer(gl.FRAMEBUFFER, Q.fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, Q.tex, 0);
      return (pic = Q);
    }

    function draw(f) {
      const F = frameOf(f);
      const w = f.w, h = f.h, Q = picAlloc(w, h);
      // take a picture of what is drawn so far: the glass bends, softens and tints it
      if (!checked) while (gl.getError() !== gl.NO_ERROR);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, f.from ?? null); gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, Q.fb);
      gl.blitFramebuffer(0, 0, w, h, 0, 0, w, h, gl.COLOR_BUFFER_BIT, gl.NEAREST);
      if (!checked) {
        checked = true;
        if (gl.getError() !== gl.NO_ERROR) console.warn('marble-glass: could not copy the picture from `from`. It must be a plain (not multisampled) framebuffer of w×h; a canvas made with antialias: true cannot be read this way, so resolve it into your own framebuffer first and pass that.');
      }
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, Q.tex);
      gl.generateMipmap(gl.TEXTURE_2D);
      target(f);
      const p = pGlass;
      common(p, F);
      // the highlights: a main spot at the light and up to three more round it
      const v = look;
      const keyAz = v.hf ? null : v.ha, keyEl = v.hf ? null : v.he;
      const key = v.hf ? F.sun : dirOf(keyAz, keyEl);
      const az0 = Math.atan2(key[2], key[0]) / DEG;
      const e0 = 140 * (5.7 / v.hz) ** 2, th0 = v.hz * DEG * 1.25;
      spotK.fill(0);
      const setSpot = (i, dir, e, th, bright) => { spot.set(dir, i * 3); spotK.set([e, Math.cos(th * 1.1), bright, Math.cos(th * 0.9)], i * 4); };
      setSpot(0, key, e0, th0, v.hb);
      for (let i = 1; i <= 3; i++) {
        if (i <= Math.round(v.hn)) setSpot(i, dirOf((v.hf ? (Math.abs(key[1]) > 0.9999 ? v.lA : az0) : keyAz) + v.hs * i, v.hy), e0 / (v.hX * v.hX), th0 * v.hX, v.hx);
        else spot.set(key, i * 3);
      }
      const cp = norm3(F.cam);
      gl.uniform3fv(p.u('uSpot[0]'), spot); gl.uniform4fv(p.u('uSpotK[0]'), spotK);
      gl.uniform3fv(p.u('uBack'), norm3([-cp[0], -cp[1] + v.bt * 1.2, -cp[2]]));
      gl.uniformMatrix4fv(p.u('uVP'), false, F.vp);
      gl.uniform1f(p.u('uPx'), 2 * F.tan[1] / h);
      gl.uniform2f(p.u('uTexel'), 1 / w, 1 / h);
      gl.uniform1f(p.u('uGold'), Math.min(1, Math.max(0, f.gold || 0)));
      gl.uniform1i(p.u('uScene'), 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null); gl.depthMask(true);
    }

    function dispose() {
      gl.deleteProgram(pBack.p); gl.deleteProgram(pGlass.p); gl.deleteVertexArray(vao);
      if (pic) { gl.deleteFramebuffer(pic.fb); gl.deleteTexture(pic.tex); pic = null; }
    }
    return { drawBackdrop, draw, setLook, dispose, get look() { return look; } };
  }

  root.MarbleGlass = { create, FIRST, RAD, resolve };
})(typeof window !== 'undefined' ? window : globalThis);
