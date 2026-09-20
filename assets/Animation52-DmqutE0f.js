import{Dr as e,Dt as t,F as n,Fn as r,N as i,Or as a,St as o,Tt as s,V as c,Vt as l,Xn as u,Zn as d,a as f,c as p,g as m,qt as h,r as g,tt as _,vt as v}from"./three.module-TVF63cYk.js";import{n as y,r as b,t as x}from"./OutputPass-CxDAHfy4.js";import{a as S,i as C,n as w,r as T,t as E}from"./GUIHelper-DNd0uFVI.js";import{t as D}from"./UnrealBloomPass-C17ZlHgr.js";import{t as O}from"./OrbitControls-Ju8LL-qO.js";import{n as k}from"./PerceptualColor-DS_Cacs7.js";var A=()=>({blending:5,blendEquation:100,blendSrc:201,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:200,blendDstAlpha:201,premultipliedAlpha:!0}),j=`
  uniform float uTime;
  uniform float uPresence;
  uniform float uBrilliance;
  uniform float uAir;
  uniform float uWarmth;
  uniform float uBrightness;
  uniform float uSharpness;
  uniform vec3 uBaseColor1;
  uniform vec3 uBaseColor2;
  uniform vec3 uFogColor;
  uniform vec3 uCoolCore;
  uniform vec3 uCoolEdge;
  uniform vec3 uWarmCore;
  uniform vec3 uWarmEdge;
  uniform vec3 uRippleColor;
  uniform float uGlowIntensity;
  uniform float uRainbow;
  uniform float uRippleColorIntensity;
  uniform float uRippleWhiteIntensity;

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec3 oklabToLinearRgb(vec3 color) {
    float l = color.x + 0.3963377774 * color.y + 0.2158037573 * color.z;
    float m = color.x - 0.1055613458 * color.y - 0.0638541728 * color.z;
    float s = color.x - 0.0894841775 * color.y - 1.2914855480 * color.z;
    l = l * l * l;
    m = m * m * m;
    s = s * s * s;
    return clamp(vec3(
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
     -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
     -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    ), vec3(0.0), vec3(1.0));
  }

  varying vec2 vUv;
  varying float vElevation;
  varying float vDistance;
  varying vec2 vRippleAnim;
  varying vec3 vNormal;
  varying float vRelativeY;
  varying vec2 vInstancePos;
  varying float vInstanceRandom;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    bool isTop = vNormal.y > 0.5;
    float distFromTop = 1.0 - vRelativeY;
    float rnd = vInstanceRandom;
    float centerDist = length(vInstancePos);
    float normElevation = clamp(vElevation / 8.0, 0.0, 1.0);

    vec3 cBase1 = oklabToLinearRgb(uBaseColor1);
    vec3 cBase2 = oklabToLinearRgb(uBaseColor2);
    vec3 coolCore = oklabToLinearRgb(uCoolCore);

    float warmBlend = smoothstep(0.0, 1.0, uWarmth * 1.5 + (0.5 - centerDist/80.0));
    vec3 zoneCoreLab = mix(uCoolCore, uWarmCore, warmBlend);
    vec3 zoneEdgeLab = mix(uCoolEdge, uWarmEdge, warmBlend);
    vec3 targetGlow;
    if (uRainbow > 0.5) {
      float hue = fract(rnd * 0.618 + uTime * 0.015 + uPresence * 0.4 + uBrilliance * 0.15);
      targetGlow = hsv2rgb(vec3(hue, 1.0, 1.0));
    } else {
      targetGlow = oklabToLinearRgb(mix(zoneCoreLab, zoneEdgeLab, fract(rnd * 11.0)));
    }
    float distFade = 1.0 - smoothstep(40.0, 75.0, centerDist);
    vec3 brightCool = mix(coolCore, vec3(1.0), 0.24);
    targetGlow = mix(targetGlow, brightCool, uBrightness * 0.6);
    vec3 currentGlow = targetGlow * uGlowIntensity * distFade;
    currentGlow = mix(currentGlow, uRippleColor, vRippleAnim.x);
    currentGlow = mix(currentGlow, vec3(1.0), vRippleAnim.y);

    vec3 bodyColor = oklabToLinearRgb(mix(uBaseColor1, uBaseColor2, vRelativeY * distFade));
    float colorBlend = (0.08 + rnd * 0.18) * distFade;
    bodyColor = mix(bodyColor, targetGlow, colorBlend);
    vec3 finalColor;

    if (isTop) {
      float topIntensity = 0.6 + smoothstep(0.0, 0.4, normElevation) * 0.4;
      float twinkleDistFalloff = smoothstep(60.0, 30.0, centerDist);
      float twinkleMultiplier = mix(twinkleDistFalloff, 1.0, smoothstep(0.01, 0.1, normElevation));
      bool isSparkleTarget = fract(rnd * 31.0) > 0.95;
      if (isSparkleTarget && normElevation < 0.1) {
        topIntensity += uAir * 2.0 * twinkleMultiplier;
      }
      float topColorBlend = 0.12 + rnd * 0.28;
      vec3 topBase = mix(cBase2, targetGlow, topColorBlend);
      finalColor = mix(topBase, currentGlow, topIntensity);
      float edgeX = smoothstep(0.05, 0.01, vUv.x) + smoothstep(0.95, 0.99, vUv.x);
      float edgeY = smoothstep(0.05, 0.01, vUv.y) + smoothstep(0.95, 0.99, vUv.y);
      float edge = min(edgeX + edgeY, 1.0);
      finalColor += currentGlow * edge * 0.8 * (topIntensity + 0.3);
      float flashChance = smoothstep(0.3, 1.0, uPresence);
      if (fract(rnd * 53.0) > 0.98 - flashChance * 0.1) {
        float flashSync = sin(uTime * 40.0 + rnd * 100.0) * 0.5 + 0.5;
        finalColor += mix(vec3(1.0), vec3(0.5, 1.0, 1.0), rnd) * flashSync * uPresence * (1.0 + uSharpness * 2.0) * twinkleMultiplier;
      }
      if (edge > 0.5 && fract(rnd * 89.0 + uTime * 2.0) > 0.98) {
        finalColor += vec3(1.0) * uBrilliance * 3.0 * twinkleMultiplier;
      }
    } else {
      float verticalFalloff = mix(1.0, 3.0, uSharpness);
      float sideGlow = smoothstep(0.5 / verticalFalloff, 0.0, distFromTop) * (0.5 + normElevation * 0.5);
      if (normElevation < 0.02) sideGlow = 0.15;
      finalColor = mix(bodyColor, currentGlow, sideGlow * 1.5);
      float rimGlow = smoothstep(0.03, 0.0, distFromTop) * (0.4 + normElevation * 0.6);
      finalColor += currentGlow * rimGlow;
    }

    finalColor += uRippleColor * vRippleAnim.x * uRippleColorIntensity;
    finalColor += vec3(1.0) * vRippleAnim.y * uRippleWhiteIntensity;

    float aerialFog = smoothstep(30.0, 65.0, vDistance);
    vec3 atmosphericColor = oklabToLinearRgb(mix(uBaseColor1, uBaseColor2, 0.4));
    finalColor = mix(finalColor, atmosphericColor, aerialFog * 0.35);

    float alphaFade = 1.0 - smoothstep(55.0, 78.0, vDistance);
    float alphaBlend = 1.0 - alphaFade;
    vec3 backdropColor = uFogColor;
    finalColor = mix(finalColor, backdropColor, alphaBlend * 0.45);

    gl_FragColor = vec4(finalColor, alphaFade);
  }
`,M=`
  uniform float uTime;

  uniform float uSubBass;
  uniform float uBass;
  uniform float uLowMid;
  uniform float uMid;
  uniform float uHighMid;

  uniform float uSmoothness;
  uniform float uDensity;
  uniform float uEnergy;
  uniform float uAmplitude;

  struct Ripple {
    vec2 pos;
    float time;
    float strength;
    float isActive;
    float rippleType;
    float speed;      // 生成时采样（音频调制），之后保持稳定
    float width;
    float fade;
    float elevation;
  };
  uniform Ripple uRipples[10];

  varying vec2 vUv;
  varying float vElevation;
  varying float vDistance;
  varying vec2 vRippleAnim;
  varying vec3 vNormal;
  varying float vRelativeY;
  varying vec2 vInstancePos;
  varying float vInstanceRandom;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vUv = uv;
    vNormal = normal;

    vec4 instancePos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 pos2D = instancePos.xz;
    vInstancePos = pos2D;

    float centerDist = length(pos2D);
    vDistance = centerDist;

    float rnd = random(pos2D);
    vInstanceRandom = rnd;

    vec2 movingPos = pos2D * 0.05 + vec2(uTime * 0.1, uTime * 0.05);
    float baseNoise = (snoise(movingPos) + 1.0) * 0.5;
    float wave = sin(pos2D.x * 0.15 + pos2D.y * 0.1 - uTime * 0.6) * 0.5 + 0.5;

    float globalFalloff = smoothstep(60.0, 30.0, centerDist);
    float idleElevation = mix(baseNoise, wave, uSmoothness * 0.5 + 0.2) * 0.8 * globalFalloff;

    float subRegion = smoothstep(25.0, 0.0, centerDist);
    float subLift = uSubBass * subRegion * 5.0;

    float bassNoise = snoise(pos2D * 0.1 - vec2(0.0, uTime * 0.2));
    float bassRegion = smoothstep(35.0, 5.0, centerDist + bassNoise * 5.0);
    float bassLift = uBass * bassRegion * (smoothstep(0.0, 1.0, rnd + uDensity * 0.5)) * 4.0;

    float lowMidNoise = snoise(pos2D * 0.05 + vec2(uTime * 0.1, 0.0));
    float lowMidLift = uLowMid * (lowMidNoise * 0.5 + 0.5) * 2.5;

    float riverFlow = sin(pos2D.x * 0.2 + pos2D.y * 0.2 + snoise(pos2D * 0.1) * 2.0 - uTime * 2.0);
    float midLift = uMid * max(0.0, riverFlow) * 3.0;

    float highMidRegion = smoothstep(10.0, 45.0, centerDist);
    float highMidLift = 0.0;
    if (fract(rnd * 13.3) > 0.8) {
      highMidLift = uHighMid * highMidRegion * fract(rnd * 7.7) * 2.5;
    }

    float audioElevation = subLift + bassLift + lowMidLift + midLift + highMidLift;

    if (rnd > 0.99) {
      audioElevation += uEnergy * 5.0;
    }

    audioElevation *= globalFalloff;
    audioElevation = max(0.0, audioElevation - 0.2);
    audioElevation *= uAmplitude;

    float elevation = idleElevation + audioElevation;

    // 涟漪
    float rippleElevation = 0.0;
    float rippleIntensityNormal = 0.0;
    float rippleIntensityWhite = 0.0;

    for(int i = 0; i < 10; i++) {
      if(uRipples[i].isActive > 0.0) {
        float dist = length(pos2D - uRipples[i].pos);
        float timeSince = uTime - uRipples[i].time;

        // 每个涟漪使用生成时采样的属性（稳定不抖动）；白色/普通涟漪几何完全一致
        float curSpeed = uRipples[i].speed;
        float curWidth = uRipples[i].width;
        float curFadeDist = uRipples[i].fade;
        float elevationScale = uRipples[i].elevation;

        float waveRadius = timeSince * curSpeed;
        float d = dist - waveRadius;
        float rippleWave = exp(-d*d / curWidth);
        float fade = exp(-waveRadius / curFadeDist);
        float rPulse = rippleWave * fade * uRipples[i].strength;

        rippleElevation += rPulse * elevationScale;
        if (uRipples[i].rippleType > 0.5) {
          rippleIntensityWhite += rPulse;
        } else {
          rippleIntensityNormal += rPulse;
        }
      }
    }

    elevation += rippleElevation;
    vRippleAnim = vec2(clamp(rippleIntensityNormal, 0.0, 1.0), clamp(rippleIntensityWhite, 0.0, 1.0));
    vElevation = elevation;

    float yPos = position.y + 0.5;
    vRelativeY = yPos;

    float totalHeight = 1.0 + elevation;
    vec3 pos = position;
    pos.y = -0.5 + yPos * totalHeight;

    vec4 worldPosition = modelMatrix * instanceMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,N=`
  uniform float uTime;
  uniform float uPulse;

  varying vec2 vUv;
  varying float vElevation;
  varying float vDistance;
  varying vec2 vRippleAnim;
  varying vec3 vNormal;
  varying float vRelativeY;
  varying vec2 vInstancePos;

  void main() {
    vUv = uv;
    vNormal = normal;
    vec4 instancePos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 pos2D = instancePos.xz;
    vInstancePos = pos2D;
    vDistance = length(pos2D);
    vRippleAnim = vec2(uPulse * 0.8, uPulse * 0.3);
    vElevation = uPulse * 20.0;
    vRelativeY = position.y + 0.5;
    vec4 worldPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,P=`
  uniform float uTime;
  uniform float uPresence;
  uniform float uBrilliance;
  uniform float uAir;
  uniform float uWarmth;
  uniform float uBrightness;
  uniform float uSharpness;
  uniform vec3 uBaseColor1;
  uniform vec3 uBaseColor2;
  uniform vec3 uFogColor;
  uniform vec3 uCoolCore;
  uniform vec3 uCoolEdge;
  uniform vec3 uWarmCore;
  uniform vec3 uWarmEdge;
  uniform vec3 uRippleColor;
  uniform float uGlowIntensity;
  uniform float uRainbow;
  uniform float uRippleColorIntensity;
  uniform float uRippleWhiteIntensity;

  vec3 hsv2rgb_flt(vec3 c) {
    vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec3 oklabToLinearRgb(vec3 color) {
    float l = color.x + 0.3963377774 * color.y + 0.2158037573 * color.z;
    float m = color.x - 0.1055613458 * color.y - 0.0638541728 * color.z;
    float s = color.x - 0.0894841775 * color.y - 1.2914855480 * color.z;
    l = l * l * l;
    m = m * m * m;
    s = s * s * s;
    return clamp(vec3(
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
     -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
     -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    ), vec3(0.0), vec3(1.0));
  }

  varying vec2 vUv;
  varying float vElevation;
  varying float vDistance;
  varying vec2 vRippleAnim;
  varying vec3 vNormal;
  varying float vRelativeY;
  varying vec2 vInstancePos;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    float rnd = random(vInstancePos);
    float centerDist = length(vInstancePos);
    float normElevation = clamp(vElevation / 8.0, 0.0, 1.0);

    vec3 cBase1 = oklabToLinearRgb(uBaseColor1);
    vec3 cBase2 = oklabToLinearRgb(uBaseColor2);
    vec3 coolCore = oklabToLinearRgb(uCoolCore);

    float warmBlend = smoothstep(0.0, 1.0, uWarmth * 1.5 + (0.5 - centerDist/80.0));
    vec3 zoneCoreLab = mix(uCoolCore, uWarmCore, warmBlend);
    vec3 zoneEdgeLab = mix(uCoolEdge, uWarmEdge, warmBlend);
    vec3 targetGlow;
    if (uRainbow > 0.5) {
      float hue = fract(rnd * 0.618 + uTime * 0.015 + uPresence * 0.4 + uBrilliance * 0.15);
      targetGlow = hsv2rgb_flt(vec3(hue, 1.0, 1.0));
    } else {
      targetGlow = oklabToLinearRgb(mix(zoneCoreLab, zoneEdgeLab, fract(rnd * 11.0)));
    }
    float distFade = 1.0 - smoothstep(40.0, 75.0, centerDist);
    vec3 brightCool = mix(coolCore, vec3(1.0), 0.24);
    targetGlow = mix(targetGlow, brightCool, uBrightness * 0.6);
    vec3 currentGlow = mix(cBase2, targetGlow, normElevation) * uGlowIntensity * distFade;
    currentGlow = mix(currentGlow, uRippleColor, vRippleAnim.x);
    currentGlow = mix(currentGlow, vec3(1.0), vRippleAnim.y);

    float topIntensity = smoothstep(0.0, 0.4, normElevation);
    float twinkleDistFalloff = smoothstep(60.0, 30.0, centerDist);
    float twinkleMultiplier = mix(twinkleDistFalloff, 1.0, smoothstep(0.01, 0.1, normElevation));

    vec3 variedBase = mix(cBase2, targetGlow, 0.3 + rnd * 0.5);
    vec3 finalColor = mix(variedBase, currentGlow, topIntensity);

    float edgeX = smoothstep(0.05, 0.01, vUv.x) + smoothstep(0.95, 0.99, vUv.x);
    float edgeY = smoothstep(0.05, 0.01, vUv.y) + smoothstep(0.95, 0.99, vUv.y);
    float edge = min(edgeX + edgeY, 1.0);
    finalColor += currentGlow * edge * 0.8 * (topIntensity + 0.3);

    float flashChance = smoothstep(0.3, 1.0, uPresence);
    if (fract(rnd * 53.0) > 0.98 - flashChance * 0.1) {
      float flashSync = sin(uTime * 40.0 + rnd * 100.0) * 0.5 + 0.5;
      finalColor += mix(vec3(1.0), vec3(0.5, 1.0, 1.0), rnd) * flashSync * uPresence * (1.0 + uSharpness * 2.0) * twinkleMultiplier;
    }
    if (edge > 0.5 && fract(rnd * 89.0 + uTime * 2.0) > 0.98) {
      finalColor += vec3(1.0) * uBrilliance * 3.0 * twinkleMultiplier;
    }

    finalColor += uRippleColor * vRippleAnim.x * uRippleColorIntensity;
    finalColor += vec3(1.0) * vRippleAnim.y * uRippleWhiteIntensity;

    float aerialFog = smoothstep(30.0, 65.0, vDistance);
    vec3 atmosphericColor = oklabToLinearRgb(mix(uBaseColor1, uBaseColor2, 0.4));
    finalColor = mix(finalColor, atmosphericColor, aerialFog * 0.35);

    float alphaFade = 1.0 - smoothstep(55.0, 78.0, vDistance);
    float alphaBlend = 1.0 - alphaFade;
    vec3 backdropColor = uFogColor;
    finalColor = mix(finalColor, backdropColor, alphaBlend * 0.45);

    gl_FragColor = vec4(finalColor, alphaFade);
  }
`,F=13207340,I=[56.89,30.87,-.76],L=[2.77,-3.48,-.5],R={极光:{uBaseColor1:327701,uBaseColor2:983608,uCoolCore:19711,uCoolEdge:10040319,uWarmCore:16724736,uWarmEdge:16750848,uRippleColor:3401471},霓虹:{uBaseColor1:1703962,uBaseColor2:3342387,uCoolCore:16711935,uCoolEdge:65535,uWarmCore:16776960,uWarmEdge:16711816,uRippleColor:65484},熔岩:{uBaseColor1:655360,uBaseColor2:1705216,uCoolCore:16729088,uCoolEdge:16737792,uWarmCore:16768256,uWarmEdge:16720384,uRippleColor:16746496},深海:{uBaseColor1:2580,uBaseColor2:6707,uCoolCore:52479,uCoolEdge:26367,uWarmCore:65450,uWarmEdge:17578,uRippleColor:6750207},赛博:{uBaseColor1:524296,uBaseColor2:1376277,uCoolCore:16711808,uCoolEdge:8388863,uWarmCore:65416,uWarmEdge:16755200,uRippleColor:65535},七彩:{uBaseColor1:8,uBaseColor2:524309,uCoolCore:16777215,uCoolEdge:16777215,uWarmCore:16777215,uWarmEdge:16777215,uRippleColor:3401471}},z=class{static get audioProfile(){return{bands:[{name:`sub`,startBin:0,endBin:2},{name:`bass`,startBin:2,endBin:6},{name:`lowMid`,startBin:7,endBin:18},{name:`mid`,startBin:18,endBin:92},{name:`highMid`,startBin:92,endBin:185}],smoothing:.7}}constructor(e,t={}){this.canvas=e;let n={bloomStrength:.2,bloomRadius:.25,bloomThreshold:.7,amplitude:1.5,glowIntensity:.5,autoRotate:!1,rotateSpeed:.6,colorPreset:`七彩`,rippleColor:F,rippleSpeedResponse:1,rippleWidthResponse:1,rippleFadeResponse:1,rippleElevationResponse:1.5,rippleColorIntensity:3,rippleWhiteIntensity:1.2,meteorFrequency:.1,terrainBrightness:.3,beatSensitivity:1,bandResponse:1,blockPulseResponse:.05,meteorThreshold:.5,flashResponse:1,brightnessResponse:1,terrainDensity:.5};this.settings={...n,...t},this.defaultSettings={...n},this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.terrainMesh=null,this.terrainMat=null,this.blockMesh=null,this.blockMat=null,this.floatingBlocks=[],this.meteors=[],this.meteorMesh=null,this.meteorMat=null,this.meteorIndex=0,this.lastMeteorSpawnTime=-1/0,this.particles=[],this.particleMesh=null,this.particleMat=null,this.particleIndex=0,this.ripples=[],this.rippleIdx=0,this.theme={uBaseColor1:new m(327701),uBaseColor2:new m(983608),uFogColor:new m(0),uCoolCore:new m(19711),uCoolEdge:new m(10040319),uWarmCore:new m(16724736),uWarmEdge:new m(16750848),uRippleColor:new m(F),uGlowIntensity:1},this.perceptualTheme=null,this.refreshPerceptualTheme(R[this.settings.colorPreset]),this.audioFeature=null,this.customBands=null,this.smoothedAudio={subBass:0,bass:0,lowMid:0,mid:0,highMid:0,presence:0,brilliance:0,air:0},this.floatingBlockPulse=0,this.isAudioPlaying=!1,this.hasAudioData=!1,this._kickRippleCooldown=0,this._prevHihat=0,this._isReady=!1,this._time=0,this._elapsed=0,this._lastTime=0,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.resizeHandler=null,this.init(),this._isReady=!0}init(){try{return this.setupThreeJS(),this.createTerrain(),this.createFloatingBlocks(),this.createMeteors(),this.createParticles(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),this.setupInteraction(),this.resizeHandler=()=>this.onWindowResize(),window.addEventListener(`resize`,this.resizeHandler),this.applyColorPreset(this.settings.colorPreset),console.log(`✅ Animation52 初始化成功`),!0}catch(e){throw console.error(`❌ Animation52 初始化失败:`,e),e}}setupThreeJS(){this.scene=new u,this.camera=new l(45,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(...I),this.renderer=new g({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=v,this.canvas.style.backgroundColor=`transparent`,this.canvas.style.zIndex=`1`,this.controls=new O(this.camera,this.canvas),this.controls.target.set(...L),this.controls.enablePan=!0,this.controls.update(),this.controls.minDistance=5,this.controls.maxDistance=1/0,this.controls.maxPolarAngle=Math.PI/2-.1;let e=new c(0,30,95);this.scene.fog=e,this.scene.add(new f(16777215,.5));let t=new i(16777215,1);t.position.set(10,20,10),this.scene.add(t)}createTerrain(){let t=1.5,n=.55,r=42*t/2;this.ripples=Array.from({length:10},()=>({pos:new e,time:-100,strength:0,isActive:0,rippleType:0,speed:9,width:3,fade:8,elevation:4}));let i=new p(n,1,n);this.terrainMat=new d({uniforms:{uTime:{value:0},uSubBass:{value:0},uBass:{value:0},uLowMid:{value:0},uMid:{value:0},uHighMid:{value:0},uPresence:{value:0},uBrilliance:{value:0},uAir:{value:0},uWarmth:{value:0},uBrightness:{value:0},uSharpness:{value:0},uSmoothness:{value:0},uDensity:{value:0},uEnergy:{value:0},uAmplitude:{value:1},uRipples:{value:Array.from({length:10},()=>({pos:new e,time:0,strength:0,isActive:0,rippleType:0}))},uBaseColor1:{value:this.perceptualTheme.uBaseColor1.clone()},uBaseColor2:{value:this.perceptualTheme.uBaseColor2.clone()},uFogColor:{value:this.theme.uFogColor.clone()},uCoolCore:{value:this.perceptualTheme.uCoolCore.clone()},uCoolEdge:{value:this.perceptualTheme.uCoolEdge.clone()},uWarmCore:{value:this.perceptualTheme.uWarmCore.clone()},uWarmEdge:{value:this.perceptualTheme.uWarmEdge.clone()},uRippleColor:{value:this.theme.uRippleColor.clone()},uGlowIntensity:{value:1},uRainbow:{value:0},uRippleColorIntensity:{value:3},uRippleWhiteIntensity:{value:1.2}},vertexShader:M,fragmentShader:j,transparent:!0}),this.terrainMesh=new _(i,this.terrainMat,1764);let a=new s,o=0;for(let e=0;e<42;e++)for(let n=0;n<42;n++){let i=e*t-r,s=n*t-r;a.makeTranslation(i,.5,s),this.terrainMesh.setMatrixAt(o,a),o++}this.terrainMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.terrainMesh)}createFloatingBlocks(){this.floatingBlocks=Array.from({length:120},(e,t)=>{let n=t/120*Math.PI*2*5+Math.sin(t*12.9898)*.7,r=14+t*37%62,i=6+t*17%19;return{x:Math.cos(n)*r,z:Math.sin(n)*r,y:i,baseScale:.75+t*11%9*.05,phase:t*.73,rotationSpeed:.18+t*7%10*.035}});let e=new p(1,1,1);this.blockMat=new d({uniforms:{uTime:{value:0},uPulse:{value:0},uPresence:{value:0},uBrilliance:{value:0},uAir:{value:0},uWarmth:{value:0},uBrightness:{value:0},uSharpness:{value:0},uBaseColor1:{value:this.perceptualTheme.uBaseColor1.clone()},uBaseColor2:{value:this.perceptualTheme.uBaseColor2.clone()},uFogColor:{value:this.theme.uFogColor.clone()},uCoolCore:{value:this.perceptualTheme.uCoolCore.clone()},uCoolEdge:{value:this.perceptualTheme.uCoolEdge.clone()},uWarmCore:{value:this.perceptualTheme.uWarmCore.clone()},uWarmEdge:{value:this.perceptualTheme.uWarmEdge.clone()},uRippleColor:{value:this.theme.uRippleColor.clone()},uGlowIntensity:{value:1},uRainbow:{value:0},uRippleColorIntensity:{value:3},uRippleWhiteIntensity:{value:1.2}},vertexShader:N,fragmentShader:P,transparent:!0}),this.blockMesh=new _(e,this.blockMat,120),this.blockMesh.frustumCulled=!1,this.scene.add(this.blockMesh)}createMeteors(){this.meteors=Array.from({length:20},()=>({active:!1,x:0,y:-1e3,z:0,speed:0,strength:0})),this.meteorIndex=0,this.lastMeteorSpawnTime=-1/0;let e=new p(.4,1.2,.4);this.meteorMat=new t({color:16777215,toneMapped:!1}),this.meteorMesh=new _(e,this.meteorMat,20),this.meteorMesh.frustumCulled=!1,this.scene.add(this.meteorMesh)}createParticles(){this.particles=Array.from({length:200},()=>({active:!1,x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,scale:1})),this.particleIndex=0;let e=new p(.8,.8,.8);this.particleMat=new t({color:16777215,toneMapped:!1,transparent:!0,opacity:.6}),this.particleMesh=new _(e,this.particleMat,200),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh)}setupPostProcessing(){let t=new y(this.scene,this.camera);this.bloomPass=new D(new e(window.innerWidth,window.innerHeight),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold),this.composer=new b(this.renderer),this.composer.addPass(t),this.composer.addPass(this.bloomPass),Object.assign(this.bloomPass.blendMaterial,A()),this.composer.addPass(new x)}setRainbow(e){this.terrainMat&&(this.terrainMat.uniforms.uRainbow.value=e),this.blockMat&&(this.blockMat.uniforms.uRainbow.value=e)}refreshPerceptualTheme(e){let t=e=>`#${e.toString(16).padStart(6,`0`)}`,n=k({uBaseColor1:t(e.uBaseColor1),uBaseColor2:t(e.uBaseColor2),uCoolCore:t(e.uCoolCore),uCoolEdge:t(e.uCoolEdge),uWarmCore:t(e.uWarmCore),uWarmEdge:t(e.uWarmEdge)});this.perceptualTheme={},Object.entries(n).forEach(([e,t])=>{this.perceptualTheme[e]=new a(...t)})}applyColorPreset(e){let t=R[e];if(!t)return;let n=e===`七彩`;this.setRainbow(+!!n),this.refreshPerceptualTheme(t),this.theme.uBaseColor1.setHex(t.uBaseColor1),this.theme.uBaseColor2.setHex(t.uBaseColor2),this.theme.uCoolCore.setHex(t.uCoolCore),this.theme.uCoolEdge.setHex(t.uCoolEdge),this.theme.uWarmCore.setHex(t.uWarmCore),this.theme.uWarmEdge.setHex(t.uWarmEdge),this.settings.rippleColor=F,this.theme.uRippleColor.setHex(F)}setupGUI(){this.guiContainer=T(`Animation52-gui-container`),E(`Animation52-gui-container`),document.body.appendChild(this.guiContainer),this.gui=new S({title:`音浪叠彩`,container:this.guiContainer});let e=this.gui.addFolder(`Bloom`);e.add(this.settings,`bloomStrength`,0,1,.01).name(`bloom强度`).onChange(e=>{this.bloomPass.strength=e}),e.add(this.settings,`bloomRadius`,0,1,.01).name(`bloom半径`).onChange(e=>{this.bloomPass.radius=e}),e.add(this.settings,`bloomThreshold`,0,1,.01).name(`bloom阈值`).onChange(e=>{this.bloomPass.threshold=e}),e.open();let t=this.gui.addFolder(`地形`);t.add(this.settings,`amplitude`,0,3,.01).name(`起伏振幅`),t.add(this.settings,`glowIntensity`,0,3,.01).name(`辉光强度`),t.add(this.settings,`terrainBrightness`,0,2,.05).name(`亮度`),t.open();let n=this.gui.addFolder(`音频响应`);n.add(this.settings,`bandResponse`,0,2,.05).name(`地形频段响应`),n.add(this.settings,`blockPulseResponse`,0,2,.05).name(`方块脉冲强度`),n.add(this.settings,`meteorThreshold`,0,1,.01).name(`打击触发阈值`),n.add(this.settings,`flashResponse`,0,2,.05).name(`闪光响应`),n.add(this.settings,`brightnessResponse`,0,2,.05).name(`亮度响应`),n.add(this.settings,`terrainDensity`,0,1,.05).name(`地形密度`),n.open();let r=this.gui.addFolder(`涟漪`);r.addColor(this.settings,`rippleColor`).name(`涟漪颜色`).onChange(e=>{this.theme.uRippleColor.setHex(e)}),r.add(this.settings,`rippleSpeedResponse`,0,2,.05).name(`扩散响应(音频)`),r.add(this.settings,`rippleWidthResponse`,0,2,.05).name(`宽度响应(音频)`),r.add(this.settings,`rippleFadeResponse`,0,2,.05).name(`衰减响应(音频)`),r.add(this.settings,`rippleElevationResponse`,0,2,.05).name(`隆起响应(音频)`),r.add(this.settings,`rippleColorIntensity`,0,10,.05).name(`彩色强度`),r.add(this.settings,`rippleWhiteIntensity`,0,10,.05).name(`白色强度`),r.add(this.settings,`meteorFrequency`,.1,10,.1).name(`坠落频率(每秒)`),r.open();let i=this.gui.addFolder(`相机`);i.add(this.settings,`autoRotate`).name(`自动旋转`).onChange(e=>{this.controls.autoRotate=e}),i.add(this.settings,`rotateSpeed`,.1,3,.1).name(`旋转速度`).onChange(e=>{this.controls.autoRotateSpeed=e}),i.open();let a=this.gui.addFolder(`颜色预设`);a.add(this.settings,`colorPreset`,Object.keys(R)).name(`切换预设`).onChange(e=>{this.applyColorPreset(e)}),a.open(),this.gui.add(this.settings,`beatSensitivity`,0,2.5,.1).name(`节拍灵敏度`),this.gui.hide()}setupSettingsButton(){this.settingsButton=C(`Animation52-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}setupInteraction(){let t=new r,n=new e,i=0,a={x:0,y:0};this.renderer.domElement.addEventListener(`pointerdown`,e=>{e.button===0&&(i=performance.now(),a.x=e.clientX,a.y=e.clientY)}),this.renderer.domElement.addEventListener(`pointerup`,e=>{if(e.button!==0)return;let r=e.clientX-a.x,o=e.clientY-a.y;if(Math.sqrt(r*r+o*o)>4)return;let s=performance.now()-i,c=Math.min(.2+s/1e3*2.8,3);n.x=e.clientX/window.innerWidth*2-1,n.y=-(e.clientY/window.innerHeight)*2+1,t.setFromCamera(n,this.camera);let l=t.intersectObject(this.terrainMesh);if(l.length>0){let e=l[0].point;this.addRipple(e.x,e.z,c)}})}addRipple(e,t,n,r=!1){if(!r){let e=1.4-((this.audioFeature||{}).energy||0)*1,t=0;for(let n of this.ripples)if(n.isActive>0&&n.rippleType<.5&&(t++,t>=2||(this._elapsed-n.time)*n.speed<e*n.fade))return}let i=this.ripples[this.rippleIdx];i.pos.set(e,t),i.time=this._elapsed,i.strength=n,i.isActive=1,i.rippleType=+!!r;let a=this.audioFeature||{},o=this.settings,s=!this.hasAudioData;i.speed=Math.max(1,(s?12:4)+(a.motion||0)*10*o.rippleSpeedResponse),i.width=Math.max(.5,(s?4:1.2)+(a.kick||0)*2.5*o.rippleWidthResponse),i.fade=Math.max(2,(s?9:3)+(a.bass||0)*8*o.rippleFadeResponse),i.elevation=Math.max(.3,(s?6:1.5)+(a.mid||0)*3.5*o.rippleElevationResponse),this.rippleIdx=(this.rippleIdx+1)%10}spawnParticle(e,t,n,r){let i=this.particles[this.particleIndex];i.active=!0,i.x=e+(Math.random()-.5)*1.5,i.y=t+(Math.random()-.5)*1.5,i.z=n+(Math.random()-.5)*1.5,i.vx=(Math.random()-.5)*2,i.vy=Math.random()*2+r*10,i.vz=(Math.random()-.5)*2,i.life=0,i.maxLife=.5+Math.random()*.5,i.scale=Math.random()*.6+.2,this.particleIndex=(this.particleIndex+1)%200}addMeteor(e){let t=this._elapsed;if(t-this.lastMeteorSpawnTime<1/Math.max(.1,this.settings.meteorFrequency))return;this.lastMeteorSpawnTime=t;let n=this.meteors[this.meteorIndex],r=Math.random()*Math.PI*2,i=Math.random()*25;n.active=!0,n.x=Math.cos(r)*i,n.z=Math.sin(r)*i,n.y=30+Math.random()*10,n.speed=.3+Math.random()*.1+e*.04,n.strength=e,this.meteorIndex=(this.meteorIndex+1)%20}updateWithAudioData(e,t){e&&(this._time=t||this._time,this.isAudioPlaying=e.isPlaying===!0,this.hasAudioData=e.isPlaying===!0,e.audioFeature&&(this.audioFeature=e.audioFeature.animation,this.customBands=e.audioFeature.customBands||null))}updateAudioData(){}setEffectMode(e){return console.log(`当前效果模式：${e}`),!0}updateSettings(e){Object.assign(this.settings,e),e.bloomStrength!==void 0&&(this.bloomPass.strength=e.bloomStrength),e.bloomRadius!==void 0&&(this.bloomPass.radius=e.bloomRadius),e.bloomThreshold!==void 0&&(this.bloomPass.threshold=e.bloomThreshold),e.amplitude!==void 0&&this.terrainMat&&(this.terrainMat.uniforms.uAmplitude.value=e.amplitude),e.colorPreset!==void 0&&this.applyColorPreset(e.colorPreset)}update(){let e=this._time;if(this._lastTime<=0){this._lastTime=e;return}this._delta=Math.min(.05,e-this._lastTime),this._lastTime=e,this._elapsed+=this._delta;for(let e of this.ripples)e.isActive>0&&(this._elapsed-e.time)*e.speed>e.fade*3.5&&(e.isActive=0);let t=this.audioFeature,r=this.customBands,i=this._delta,c=o.lerp(2.2,60,50/100),l=Math.max(0,Math.min(1,1-Math.exp(-c*i))),u=t?.energy||0,d=t?.brightness||0,f=this.settings.bandResponse,p=Math.max(0,Math.min(1.2,(r?.sub||0)*f)),g=Math.max(0,Math.min(1.15,(r?.bass||0)*f)),_=Math.max(0,Math.min(1,(r?.lowMid||0)*f)),v=Math.max(0,Math.min(1,(r?.mid||0)*f)),y=Math.max(0,Math.min(1,(r?.highMid||0)*f));this.smoothedAudio.subBass=o.lerp(this.smoothedAudio.subBass,p,l),this.smoothedAudio.bass=o.lerp(this.smoothedAudio.bass,g,l),this.smoothedAudio.lowMid=o.lerp(this.smoothedAudio.lowMid,_,l),this.smoothedAudio.mid=o.lerp(this.smoothedAudio.mid,v,l),this.smoothedAudio.highMid=o.lerp(this.smoothedAudio.highMid,y,l),this.smoothedAudio.presence=o.lerp(this.smoothedAudio.presence,Math.max(0,Math.min(1,u*this.settings.flashResponse)),l),this.smoothedAudio.brilliance=o.lerp(this.smoothedAudio.brilliance,Math.max(0,Math.min(1,d*this.settings.brightnessResponse)),l),this.smoothedAudio.air=o.lerp(this.smoothedAudio.air,Math.max(0,Math.min(1,d*this.settings.brightnessResponse)),l);let b=this.smoothedAudio.subBass+this.smoothedAudio.bass+this.smoothedAudio.lowMid+this.smoothedAudio.mid,x=b+(this.smoothedAudio.highMid+this.smoothedAudio.brilliance+this.smoothedAudio.air),S=x>.001?b/x:.5,C=t?.hihat||0,w=C-this._prevHihat;this._prevHihat=C,w>.1&&C>this.settings.meteorThreshold&&this.addMeteor(Math.min(C*2,3));let T=this.terrainMat.uniforms,E=this.theme;T.uTime.value=this._elapsed,T.uSubBass.value=this.smoothedAudio.subBass,T.uBass.value=this.smoothedAudio.bass,T.uLowMid.value=this.smoothedAudio.lowMid,T.uMid.value=this.smoothedAudio.mid,T.uHighMid.value=this.smoothedAudio.highMid,T.uPresence.value=this.smoothedAudio.presence,T.uBrilliance.value=this.smoothedAudio.brilliance,T.uAir.value=this.smoothedAudio.air,T.uWarmth.value=Math.max(0,Math.min(1,S)),T.uBrightness.value=Math.max(0,Math.min(1.5,(Math.max(0,Math.min(1,d))+.02)*this.settings.terrainBrightness)),T.uSharpness.value=t?.texture||0,T.uSmoothness.value=t?.smoothness||0,T.uDensity.value=this.settings.terrainDensity,T.uEnergy.value=Math.max(0,Math.min(1,u)),T.uAmplitude.value=this.settings.amplitude,T.uBaseColor1.value.copy(this.perceptualTheme.uBaseColor1),T.uBaseColor2.value.copy(this.perceptualTheme.uBaseColor2),T.uFogColor.value.copy(E.uFogColor),T.uCoolCore.value.copy(this.perceptualTheme.uCoolCore),T.uCoolEdge.value.copy(this.perceptualTheme.uCoolEdge),T.uWarmCore.value.copy(this.perceptualTheme.uWarmCore),T.uWarmEdge.value.copy(this.perceptualTheme.uWarmEdge),T.uRippleColor.value.copy(E.uRippleColor),T.uGlowIntensity.value=this.settings.glowIntensity,T.uRipples.value=this.ripples,T.uRippleColorIntensity.value=this.settings.rippleColorIntensity,T.uRippleWhiteIntensity.value=this.settings.rippleWhiteIntensity,this.scene.fog&&this.scene.fog.color.copy(E.uFogColor);let D=Math.max(0,Math.min(1,(t?.beat||0)*this.settings.blockPulseResponse)),O=o.lerp(3,36,50/100),k=Math.max(0,Math.min(1,1-Math.exp(-O*i)));this.floatingBlockPulse=o.lerp(this.floatingBlockPulse,D,k);let A=this.floatingBlockPulse,j=Math.max(0,Math.min(1,A*1.35)),M=o.lerp(.3,2.5,j),N=this.blockMat.uniforms;N.uTime.value=this._elapsed,N.uPulse.value=j,N.uBaseColor1.value.copy(this.perceptualTheme.uBaseColor1),N.uBaseColor2.value.copy(this.perceptualTheme.uBaseColor2),N.uFogColor.value.copy(E.uFogColor),N.uCoolCore.value.copy(this.perceptualTheme.uCoolCore),N.uCoolEdge.value.copy(this.perceptualTheme.uCoolEdge),N.uWarmCore.value.copy(this.perceptualTheme.uWarmCore),N.uWarmEdge.value.copy(this.perceptualTheme.uWarmEdge),N.uRippleColor.value.copy(E.uRippleColor),N.uGlowIntensity.value=this.settings.glowIntensity,N.uRippleColorIntensity.value=this.settings.rippleColorIntensity,N.uRippleWhiteIntensity.value=this.settings.rippleWhiteIntensity,N.uWarmth.value=Math.max(0,Math.min(1,S)),N.uBrightness.value=Math.max(0,Math.min(1.5,(Math.max(0,Math.min(1,d))+.02)*this.settings.terrainBrightness)),N.uSharpness.value=t?.texture||0,N.uPresence.value=this.smoothedAudio.presence,N.uBrilliance.value=this.smoothedAudio.brilliance,N.uAir.value=this.smoothedAudio.air;let P=new a,F=new h,I=new a,L=new n,R=new s;for(let e=0;e<this.floatingBlocks.length;e++){let t=this.floatingBlocks[e],n=Math.sin(this._elapsed*(.55+t.rotationSpeed)+t.phase)*.45;P.set(t.x,t.y+n+A*.5*1.4,t.z),L.set(this._elapsed*t.rotationSpeed+t.phase,this._elapsed*t.rotationSpeed*.7+t.phase,this._elapsed*t.rotationSpeed*.45),F.setFromEuler(L);let r=t.baseScale*M;I.set(r,r,r),R.compose(P,F,I),this.blockMesh.setMatrixAt(e,R)}this.blockMesh.instanceMatrix.needsUpdate=!0;let z=new m().copy(E.uWarmCore).lerp(new m(16777215),.7);this.meteorMat.color.copy(z);for(let e=0;e<20;e++){let n=this.meteors[e];if(!n.active)P.set(0,-1e3,0),I.set(0,0,0),R.compose(P,F,I),this.meteorMesh.setMatrixAt(e,R);else{let r=.45+Math.min(1,t?.high||0)*1.4;if(n.y-=n.speed*r*60*i,n.y<=0){n.active=!1,this.addRipple(n.x,n.z,Math.min(n.strength*1,1.2),!0);for(let e=0;e<10;e++)this.spawnParticle(n.x,.5,n.z,n.speed*1.5)}P.set(n.x,Math.max(0,n.y),n.z),I.set(1.5,1.5,1.5),R.compose(P,F,I),this.meteorMesh.setMatrixAt(e,R),n.y>0&&Math.random()>.3&&this.spawnParticle(n.x,n.y,n.z,n.speed*.2)}}this.meteorMesh.instanceMatrix.needsUpdate=!0,this.particleMat.color.copy(z);for(let e=0;e<200;e++){let t=this.particles[e];if(!t.active)P.set(0,-1e3,0),I.set(0,0,0),R.compose(P,F,I),this.particleMesh.setMatrixAt(e,R);else{if(t.life+=i,t.life>=t.maxLife)t.active=!1,I.set(0,0,0);else{t.x+=t.vx*i*10,t.y+=t.vy*i*10,t.z+=t.vz*i*10;let e=t.scale*(1-t.life/t.maxLife);P.set(t.x,t.y,t.z),I.set(e,e,e)}R.compose(P,F,I),this.particleMesh.setMatrixAt(e,R)}}this.particleMesh.instanceMatrix.needsUpdate=!0}render(){if(!this._isReady||!this.composer)return;let e=this._time;if(this._lastFrameTime>0&&e>0&&Math.min(.033,e-this._lastFrameTime),this._lastFrameTime=e,!this.hasAudioData){for(let e in this.smoothedAudio)this.smoothedAudio[e]*=.95;this.audioFeature=null,this.customBands=null}let t=this.audioFeature?.kick||0;if(t>(this.settings.beatSensitivity>0?.5/this.settings.beatSensitivity:99)&&(this._kickRippleCooldown=Math.max(0,this._kickRippleCooldown-.016),this._kickRippleCooldown<=0)){let e=Math.random()*Math.PI*2,n=3+Math.random()*15;this.addRipple(Math.cos(e)*n,Math.sin(e)*n,Math.min(t*1.5,3),!1),this._kickRippleCooldown=.15}this.update(),this.controls.update(),this.composer.render()}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}resetGuiCamera(){!this.camera||!this.controls||(this.camera.position.set(...I),this.controls.target.set(...L),this.controls.update())}dispose(){this.resizeHandler&&window.removeEventListener(`resize`,this.resizeHandler),w(this.settingsButton,this.guiContainer,this.gui),this.settingsButton=null,this.guiContainer=null,this.terrainMesh&&(this.scene.remove(this.terrainMesh),this.terrainMesh.geometry.dispose(),this.terrainMat.dispose()),this.blockMesh&&(this.scene.remove(this.blockMesh),this.blockMesh.geometry.dispose(),this.blockMat.dispose()),this.meteorMesh&&(this.scene.remove(this.meteorMesh),this.meteorMesh.geometry.dispose(),this.meteorMat.dispose()),this.particleMesh&&(this.scene.remove(this.particleMesh),this.particleMesh.geometry.dispose(),this.particleMat.dispose()),this.renderer&&this.renderer.dispose(),console.log(`✅ Animation52 资源已清理`)}getAudioDataForUI(){let e=this.customBands||{},t=this.audioFeature||{};return{bass:(e.sub||0)+(e.bass||0),mid:e.mid||0,high:t.high||0}}playAudio(){console.log(`音频播放由系统控制`)}pauseAudio(){console.log(`音频暂停由系统控制`)}};export{z as default};