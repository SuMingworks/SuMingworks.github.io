import{$n as e,Ar as t,Ct as n,Et as r,H as i,I as a,N as o,Ot as s,Rn as c,Ut as l,Yt as u,a as d,c as f,er as p,g as m,jr as h,nt as g,r as _,yt as v}from"./three.module-y53aV_Iu.js";import{n as y,r as b,t as x}from"./OutputPass-R3e3FNgb.js";import{a as S,i as C,n as w,r as T,t as E}from"./GUIHelper-DNd0uFVI.js";import{t as D}from"./UnrealBloomPass-C3xsCyqj.js";import{t as O}from"./OrbitControls-Bg5pjowc.js";import{n as k}from"./PerceptualColor-yyoOW5OX.js";var A=()=>({blending:5,blendEquation:100,blendSrc:201,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:200,blendDstAlpha:201,premultipliedAlpha:!0}),j=e=>e-Math.floor(e),M=(e,t,r)=>{let i=n.clamp((r-e)/(t-e),0,1);return i*i*(3-2*i)};function N(e,t){let n=(e+t)*.366025403784439,r=Math.floor(e+n),i=Math.floor(t+n),a=(r+i)*.211324865405187,o=e-r+a,s=t-i+a,c=+(o>s),l=1-c,u=e=>e-Math.floor(e/289)*289,d=e=>u((e*34+1)*e),f=0;for(let[e,t,n,a]of[[o,s,0,0],[o-c+.211324865405187,s-l+.211324865405187,c,l],[o-.577350269189626,s-.577350269189626,1,1]]){let o=2*j(d(d(u(i)+a)+u(r)+n)*.024390243902439)-1,s=Math.abs(o)-.5,c=o-Math.floor(o+.5),l=Math.max(.5-e*e-t*t,0);f+=l**4*(1.79284291400159-.85373472095314*(c*c+s*s))*(c*e+s*t)}return 130*f}var P=`
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
      float hue = fract(0.72 - normElevation * 0.23 + centerDist * 0.004
        + sin(centerDist * 0.16 - uTime * 0.6) * 0.035 + (rnd - 0.5) * 0.035);
      targetGlow = hsv2rgb(vec3(hue, 0.85, 1.0));
    } else {
      targetGlow = oklabToLinearRgb(mix(zoneCoreLab, zoneEdgeLab, fract(rnd * 11.0)));
    }
    float distFade = 1.0 - smoothstep(40.0, 75.0, centerDist);
    vec3 brightCool = mix(coolCore, vec3(1.0), 0.24);
    targetGlow = mix(targetGlow, brightCool, uBrightness * 0.6);
    targetGlow = mix(targetGlow, vec3(1.0, 0.72, 0.3), vRippleAnim.x * 0.65);
    vec3 currentGlow = targetGlow * uGlowIntensity * distFade;
    currentGlow = mix(currentGlow, uRippleColor, vRippleAnim.x);
    currentGlow = mix(currentGlow, vec3(1.0), vRippleAnim.y);

    vec3 bodyColor = oklabToLinearRgb(mix(uBaseColor1, uBaseColor2, vRelativeY * distFade));
    float colorBlend = (0.08 + rnd * 0.18) * distFade;
    bodyColor = mix(bodyColor, targetGlow, colorBlend);
    vec3 finalColor;

    if (isTop) {
      float topIntensity = 0.6 + smoothstep(0.0, 0.4, normElevation) * 0.4;
      float twinkleDistFalloff = (1.0 - smoothstep(30.0, 60.0, centerDist));
      float twinkleMultiplier = mix(twinkleDistFalloff, 1.0, smoothstep(0.01, 0.1, normElevation));
      bool isSparkleTarget = fract(rnd * 31.0) > 0.95;
      if (isSparkleTarget && normElevation < 0.1) {
        topIntensity += uAir * 2.0 * twinkleMultiplier;
      }
      float topColorBlend = 0.12 + rnd * 0.28;
      vec3 topBase = mix(cBase2, targetGlow, topColorBlend);
      finalColor = mix(topBase, currentGlow, topIntensity);
      float edgeX = (1.0 - smoothstep(0.01, 0.05, vUv.x)) + smoothstep(0.95, 0.99, vUv.x);
      float edgeY = (1.0 - smoothstep(0.01, 0.05, vUv.y)) + smoothstep(0.95, 0.99, vUv.y);
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
      float sideGlow = (1.0 - smoothstep(0.0, 0.5 / verticalFalloff, distFromTop)) * (0.5 + normElevation * 0.5);
      if (normElevation < 0.02) sideGlow = 0.15;
      finalColor = mix(bodyColor * 0.55, currentGlow, clamp(sideGlow * 1.2, 0.0, 1.0));
      float rimGlow = (1.0 - smoothstep(0.0, 0.03, distFromTop)) * (0.4 + normElevation * 0.6);
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
`,F=`
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

    float globalFalloff = (1.0 - smoothstep(30.0, 60.0, centerDist));
    float idleElevation = mix(baseNoise, wave, uSmoothness * 0.5 + 0.2) * 0.8 * globalFalloff;

    float subRegion = (1.0 - smoothstep(0.0, 25.0, centerDist));
    float subLift = uSubBass * subRegion * 5.0;

    float bassNoise = snoise(pos2D * 0.1 - vec2(0.0, uTime * 0.2));
    float bassRegion = (1.0 - smoothstep(5.0, 35.0, centerDist + bassNoise * 5.0));
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
        float behind = max(0.0, -d);
        float wake = (1.0 - smoothstep(-0.2, 0.0, d)) *
          sin(behind * 2.2) * exp(-behind / 4.0) * 0.22;
        float tailDistance = d + 2.0;
        float tail = exp(-tailDistance * tailDistance / (curWidth * 4.0)) * 0.32;
        float ignition = exp(-dist * dist / 5.0) * exp(-timeSince * 12.0);
        float fade = exp(-waveRadius / curFadeDist);
        float rPulse = rippleWave * fade * uRipples[i].strength;

        rippleElevation += (rippleWave + tail + wake + ignition) * fade *
          uRipples[i].strength * elevationScale;
        if (uRipples[i].rippleType > 0.5) {
          rippleIntensityWhite += rPulse;
        } else {
          rippleIntensityNormal += rPulse;
        }
      }
    }

    elevation = max(0.0, elevation + rippleElevation);
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
`,I=`
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
`,L=`
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
    float twinkleDistFalloff = (1.0 - smoothstep(30.0, 60.0, centerDist));
    float twinkleMultiplier = mix(twinkleDistFalloff, 1.0, smoothstep(0.01, 0.1, normElevation));

    vec3 variedBase = mix(cBase2, targetGlow, 0.3 + rnd * 0.5);
    vec3 finalColor = mix(variedBase, currentGlow, topIntensity);

    float edgeX = (1.0 - smoothstep(0.01, 0.05, vUv.x)) + smoothstep(0.95, 0.99, vUv.x);
    float edgeY = (1.0 - smoothstep(0.01, 0.05, vUv.y)) + smoothstep(0.95, 0.99, vUv.y);
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
`,R=13207340,z=[56.89,30.87,-.76],B=[2.77,-3.48,-.5],V={极光:{uBaseColor1:327701,uBaseColor2:983608,uCoolCore:19711,uCoolEdge:10040319,uWarmCore:16724736,uWarmEdge:16750848,uRippleColor:3401471},霓虹:{uBaseColor1:1703962,uBaseColor2:3342387,uCoolCore:16711935,uCoolEdge:65535,uWarmCore:16776960,uWarmEdge:16711816,uRippleColor:65484},熔岩:{uBaseColor1:655360,uBaseColor2:1705216,uCoolCore:16729088,uCoolEdge:16737792,uWarmCore:16768256,uWarmEdge:16720384,uRippleColor:16746496},深海:{uBaseColor1:2580,uBaseColor2:6707,uCoolCore:52479,uCoolEdge:26367,uWarmCore:65450,uWarmEdge:17578,uRippleColor:6750207},赛博:{uBaseColor1:524296,uBaseColor2:1376277,uCoolCore:16711808,uCoolEdge:8388863,uWarmCore:65416,uWarmEdge:16755200,uRippleColor:65535},七彩:{uBaseColor1:8,uBaseColor2:524309,uCoolCore:16777215,uCoolEdge:16777215,uWarmCore:16777215,uWarmEdge:16777215,uRippleColor:3401471}},H=class{static get audioProfile(){return{bands:[{name:`sub`,startBin:0,endBin:2},{name:`bass`,startBin:2,endBin:6},{name:`lowMid`,startBin:7,endBin:18},{name:`mid`,startBin:18,endBin:92},{name:`highMid`,startBin:92,endBin:185}],smoothing:.7}}constructor(e,t={}){this.canvas=e;let n={bloomStrength:.2,bloomRadius:.25,bloomThreshold:.7,amplitude:1.5,glowIntensity:.5,autoRotate:!1,rotateSpeed:.6,colorPreset:`七彩`,rippleColor:R,rippleSpeedResponse:1,rippleWidthResponse:1,rippleFadeResponse:1,rippleElevationResponse:1.5,rippleColorIntensity:3,rippleWhiteIntensity:1.2,meteorFrequency:.7,terrainBrightness:.3,beatSensitivity:1,bandResponse:1,blockPulseResponse:.05,meteorThreshold:.5,flashResponse:1,brightnessResponse:1,terrainDensity:.5};this.settings={...n,...t},this.defaultSettings={...n},this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.terrainMesh=null,this.terrainMat=null,this.blockMesh=null,this.blockMat=null,this.floatingBlocks=[],this.meteors=[],this.meteorMesh=null,this.meteorMat=null,this.meteorIndex=0,this.lastMeteorSpawnTime=-1/0,this.particles=[],this.particleMesh=null,this.particleMat=null,this.particleIndex=0,this.ripples=[],this.rippleIdx=0,this.theme={uBaseColor1:new m(327701),uBaseColor2:new m(983608),uFogColor:new m(0),uCoolCore:new m(19711),uCoolEdge:new m(10040319),uWarmCore:new m(16724736),uWarmEdge:new m(16750848),uRippleColor:new m(R),uGlowIntensity:1},this.perceptualTheme=null,this.refreshPerceptualTheme(V[this.settings.colorPreset]),this.audioFeature=null,this.customBands=null,this.smoothedAudio={subBass:0,bass:0,lowMid:0,mid:0,highMid:0,presence:0,brilliance:0,air:0},this.floatingBlockPulse=0,this.isAudioPlaying=!1,this.hasAudioData=!1,this._kickRippleCooldown=0,this._prevKick=0,this._impactFlash=0,this._prevHihat=0,this._isReady=!1,this._time=0,this._elapsed=0,this._lastTime=0,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.resizeHandler=null,this.init(),this._isReady=!0}init(){try{return this.setupThreeJS(),this.createTerrain(),this.createFloatingBlocks(),this.createMeteors(),this.createParticles(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),this.setupInteraction(),this.resizeHandler=()=>this.onWindowResize(),window.addEventListener(`resize`,this.resizeHandler),this.applyColorPreset(this.settings.colorPreset),console.log(`✅ Animation52 初始化成功`),!0}catch(e){throw console.error(`❌ Animation52 初始化失败:`,e),e}}setupThreeJS(){this.scene=new e,this.camera=new l(45,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(...z),this.renderer=new _({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=v,this.canvas.style.backgroundColor=`transparent`,this.canvas.style.zIndex=`1`,this.controls=new O(this.camera,this.canvas),this.controls.target.set(...B),this.controls.enablePan=!0,this.controls.update(),this.controls.minDistance=5,this.controls.maxDistance=1/0,this.controls.maxPolarAngle=Math.PI/2-.1;let t=new i(0,30,95);this.scene.fog=t,this.scene.add(new d(16777215,.5));let n=new o(16777215,1);n.position.set(10,20,10),this.scene.add(n)}createTerrain(){let e=1.5,n=.55,i=42*e/2;this.ripples=Array.from({length:10},()=>({pos:new t,time:-100,strength:0,isActive:0,rippleType:0,speed:9,width:3,fade:8,elevation:4}));let a=new f(n,1,n);this.terrainMat=new p({uniforms:{uTime:{value:0},uSubBass:{value:0},uBass:{value:0},uLowMid:{value:0},uMid:{value:0},uHighMid:{value:0},uPresence:{value:0},uBrilliance:{value:0},uAir:{value:0},uWarmth:{value:0},uBrightness:{value:0},uSharpness:{value:0},uSmoothness:{value:0},uDensity:{value:0},uEnergy:{value:0},uAmplitude:{value:1},uRipples:{value:Array.from({length:10},()=>({pos:new t,time:0,strength:0,isActive:0,rippleType:0}))},uBaseColor1:{value:this.perceptualTheme.uBaseColor1.clone()},uBaseColor2:{value:this.perceptualTheme.uBaseColor2.clone()},uFogColor:{value:this.theme.uFogColor.clone()},uCoolCore:{value:this.perceptualTheme.uCoolCore.clone()},uCoolEdge:{value:this.perceptualTheme.uCoolEdge.clone()},uWarmCore:{value:this.perceptualTheme.uWarmCore.clone()},uWarmEdge:{value:this.perceptualTheme.uWarmEdge.clone()},uRippleColor:{value:this.theme.uRippleColor.clone()},uGlowIntensity:{value:1},uRainbow:{value:0},uRippleColorIntensity:{value:3},uRippleWhiteIntensity:{value:1.2}},vertexShader:F,fragmentShader:P,transparent:!0}),this.terrainMesh=new g(a,this.terrainMat,1764),this.terrainMesh.frustumCulled=!1;let o=new r,s=0;for(let t=0;t<42;t++)for(let n=0;n<42;n++){let r=t*e-i,a=n*e-i;o.makeTranslation(r,.5,a),this.terrainMesh.setMatrixAt(s,o),s++}this.terrainMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.terrainMesh)}createFloatingBlocks(){this.floatingBlocks=Array.from({length:120},(e,t)=>{let n=t/120*Math.PI*2*5+Math.sin(t*12.9898)*.7,r=14+t*37%62,i=6+t*17%19;return{x:Math.cos(n)*r,z:Math.sin(n)*r,y:i,baseScale:.75+t*11%9*.05,phase:t*.73,rotationSpeed:.18+t*7%10*.035}});let e=new f(1,1,1);this.blockMat=new p({uniforms:{uTime:{value:0},uPulse:{value:0},uPresence:{value:0},uBrilliance:{value:0},uAir:{value:0},uWarmth:{value:0},uBrightness:{value:0},uSharpness:{value:0},uBaseColor1:{value:this.perceptualTheme.uBaseColor1.clone()},uBaseColor2:{value:this.perceptualTheme.uBaseColor2.clone()},uFogColor:{value:this.theme.uFogColor.clone()},uCoolCore:{value:this.perceptualTheme.uCoolCore.clone()},uCoolEdge:{value:this.perceptualTheme.uCoolEdge.clone()},uWarmCore:{value:this.perceptualTheme.uWarmCore.clone()},uWarmEdge:{value:this.perceptualTheme.uWarmEdge.clone()},uRippleColor:{value:this.theme.uRippleColor.clone()},uGlowIntensity:{value:1},uRainbow:{value:0},uRippleColorIntensity:{value:3},uRippleWhiteIntensity:{value:1.2}},vertexShader:I,fragmentShader:L,transparent:!0}),this.blockMesh=new g(e,this.blockMat,120),this.blockMesh.frustumCulled=!1,this.scene.add(this.blockMesh)}createMeteors(){this.meteors=Array.from({length:20},()=>({active:!1,x:0,y:-1e3,z:0,speed:0,strength:0})),this.meteorIndex=0,this.lastMeteorSpawnTime=-1/0;let e=new f(.4,1.2,.4);this.meteorMat=new s({color:16777215,toneMapped:!1}),this.meteorMesh=new g(e,this.meteorMat,20),this.meteorMesh.frustumCulled=!1,this.scene.add(this.meteorMesh)}createParticles(){this.particles=Array.from({length:200},()=>({active:!1,x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,scale:1})),this.particleIndex=0;let e=new f(.8,.8,.8);this.particleMat=new s({color:16777215,toneMapped:!1,transparent:!0,opacity:.6}),this.particleMesh=new g(e,this.particleMat,200),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh)}setupPostProcessing(){let e=new y(this.scene,this.camera);this.bloomPass=new D(new t(window.innerWidth,window.innerHeight),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold),this.composer=new b(this.renderer),this.composer.addPass(e),this.composer.addPass(this.bloomPass),Object.assign(this.bloomPass.blendMaterial,A()),this.composer.addPass(new x)}setRainbow(e){this.terrainMat&&(this.terrainMat.uniforms.uRainbow.value=e),this.blockMat&&(this.blockMat.uniforms.uRainbow.value=e)}refreshPerceptualTheme(e){let t=e=>`#${e.toString(16).padStart(6,`0`)}`,n=k({uBaseColor1:t(e.uBaseColor1),uBaseColor2:t(e.uBaseColor2),uCoolCore:t(e.uCoolCore),uCoolEdge:t(e.uCoolEdge),uWarmCore:t(e.uWarmCore),uWarmEdge:t(e.uWarmEdge)});this.perceptualTheme={},Object.entries(n).forEach(([e,t])=>{this.perceptualTheme[e]=new h(...t)})}applyColorPreset(e){let t=V[e];if(!t)return;let n=e===`七彩`;this.setRainbow(+!!n),this.refreshPerceptualTheme(t),this.theme.uBaseColor1.setHex(t.uBaseColor1),this.theme.uBaseColor2.setHex(t.uBaseColor2),this.theme.uCoolCore.setHex(t.uCoolCore),this.theme.uCoolEdge.setHex(t.uCoolEdge),this.theme.uWarmCore.setHex(t.uWarmCore),this.theme.uWarmEdge.setHex(t.uWarmEdge),this.settings.rippleColor=R,this.theme.uRippleColor.setHex(R)}setupGUI(){this.guiContainer=T(`Animation52-gui-container`),E(`Animation52-gui-container`),document.body.appendChild(this.guiContainer),this.gui=new S({title:`音浪叠彩`,container:this.guiContainer});let e=this.gui.addFolder(`泛光效果`);e.add(this.settings,`bloomStrength`,0,1,.01).name(`泛光强度`).onChange(e=>{this.bloomPass.strength=e}),e.add(this.settings,`bloomRadius`,0,1,.01).name(`泛光范围`).onChange(e=>{this.bloomPass.radius=e}),e.add(this.settings,`bloomThreshold`,0,1,.01).name(`泛光阈值`).onChange(e=>{this.bloomPass.threshold=e}),e.open();let t=this.gui.addFolder(`地形`);t.add(this.settings,`amplitude`,0,3,.01).name(`起伏振幅`),t.add(this.settings,`glowIntensity`,0,3,.01).name(`辉光强度`),t.add(this.settings,`terrainBrightness`,0,2,.05).name(`亮度`),t.open();let n=this.gui.addFolder(`音频响应`);n.add(this.settings,`bandResponse`,0,2,.05).name(`地形频段响应`),n.add(this.settings,`blockPulseResponse`,0,2,.05).name(`方块脉冲强度`),n.add(this.settings,`meteorThreshold`,0,1,.01).name(`打击触发阈值`),n.add(this.settings,`flashResponse`,0,2,.05).name(`闪光响应`),n.add(this.settings,`brightnessResponse`,0,2,.05).name(`亮度响应`),n.add(this.settings,`terrainDensity`,0,1,.05).name(`地形密度`),n.open();let r=this.gui.addFolder(`涟漪`);r.addColor(this.settings,`rippleColor`).name(`涟漪颜色`).onChange(e=>{this.theme.uRippleColor.setHex(e)}),r.add(this.settings,`rippleSpeedResponse`,0,2,.05).name(`扩散响应(音频)`),r.add(this.settings,`rippleWidthResponse`,0,2,.05).name(`宽度响应(音频)`),r.add(this.settings,`rippleFadeResponse`,0,2,.05).name(`衰减响应(音频)`),r.add(this.settings,`rippleElevationResponse`,0,2,.05).name(`隆起响应(音频)`),r.add(this.settings,`rippleColorIntensity`,0,10,.05).name(`彩色强度`),r.add(this.settings,`rippleWhiteIntensity`,0,10,.05).name(`白色强度`),r.add(this.settings,`meteorFrequency`,.1,10,.1).name(`坠落频率(每秒)`),r.open();let i=this.gui.addFolder(`相机`);i.add(this.settings,`autoRotate`).name(`自动旋转`).onChange(e=>{this.controls.autoRotate=e}),i.add(this.settings,`rotateSpeed`,.1,3,.1).name(`旋转速度`).onChange(e=>{this.controls.autoRotateSpeed=e}),i.open();let a=this.gui.addFolder(`颜色预设`);a.add(this.settings,`colorPreset`,Object.keys(V)).name(`切换预设`).onChange(e=>{this.applyColorPreset(e)}),a.open(),this.gui.add(this.settings,`beatSensitivity`,0,2.5,.1).name(`节拍灵敏度`),this.gui.hide()}setupSettingsButton(){this.settingsButton=C(`Animation52-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}setupInteraction(){let e=new c,n=new t,r=0,i={x:0,y:0};this.renderer.domElement.addEventListener(`pointerdown`,e=>{e.button===0&&(r=performance.now(),i.x=e.clientX,i.y=e.clientY)}),this.renderer.domElement.addEventListener(`pointerup`,t=>{if(t.button!==0)return;let a=t.clientX-i.x,o=t.clientY-i.y;if(Math.sqrt(a*a+o*o)>4)return;let s=performance.now()-r,c=Math.min(.2+s/1e3*2.8,3);n.x=t.clientX/window.innerWidth*2-1,n.y=-(t.clientY/window.innerHeight)*2+1,e.setFromCamera(n,this.camera);let l=e.intersectObject(this.terrainMesh);if(l.length>0){let e=l[0].point;this.addRipple(e.x,e.z,c)}})}addRipple(e,t,n,r=!1){if(!r){let e=1.4-((this.audioFeature||{}).energy||0)*1,t=0;for(let n of this.ripples)if(n.isActive>0&&n.rippleType<.5&&(t++,t>=2||(this._elapsed-n.time)*n.speed<e*n.fade))return}let i=this.ripples[this.rippleIdx];i.pos.set(e,t),i.time=this._elapsed,i.strength=n,i.isActive=1,i.rippleType=+!!r;let a=this.audioFeature||{},o=this.settings,s=!this.hasAudioData;i.speed=Math.max(1,(s?12:4)+(a.motion||0)*10*o.rippleSpeedResponse),i.width=Math.max(.5,(s?4:1.2)+(a.kick||0)*2.5*o.rippleWidthResponse),i.fade=Math.max(2,(s?9:3)+(a.bass||0)*8*o.rippleFadeResponse),i.elevation=Math.max(.3,(s?6:1.5)+(a.mid||0)*3.5*o.rippleElevationResponse),this.rippleIdx=(this.rippleIdx+1)%10}spawnParticle(e,t,n,r,i=!1){let a=this.particles[this.particleIndex];a.active=!0,a.x=e+(Math.random()-.5)*1.5,a.y=t+(Math.random()-.5)*1.5,a.z=n+(Math.random()-.5)*1.5;let o=Math.random()*Math.PI*2,s=i?.8+Math.random()*1.8:.15;a.vx=Math.cos(o)*s,a.vy=i?1.2+Math.random()*2+r:.15,a.vz=Math.sin(o)*s,a.gravity=i?4.5:.2,a.burst=i,a.life=0,a.maxLife=.5+Math.random()*.5,a.scale=Math.random()*.6+.2,this.particleIndex=(this.particleIndex+1)%200}addMeteor(e){let t=this._elapsed;if(t-this.lastMeteorSpawnTime<1/Math.max(.1,this.settings.meteorFrequency))return;this.lastMeteorSpawnTime=t;let n=this.meteors[this.meteorIndex],r=Math.random()*Math.PI*2,i=Math.random()*25;n.active=!0,n.x=Math.cos(r)*i,n.z=Math.sin(r)*i,n.y=30+Math.random()*10,n.driftX=Math.cos(r+.8)*.18,n.driftZ=Math.sin(r+.8)*.18,n.trailBudget=0,n.speed=.3+Math.random()*.1+e*.04,n.strength=e,this.meteorIndex=(this.meteorIndex+1)%20}terrainHeightAt(e,t){if(e=Math.round((e+31.5)/1.5)*1.5-31.5,t=Math.round((t+31.5)/1.5)*1.5-31.5,e<-31.5||e>30||t<-31.5||t>30)return 0;let r=this._elapsed,i=this.smoothedAudio,a=Math.hypot(e,t),o=j(Math.sin(e*12.9898+t*78.233)*43758.5453123),s=M(60,30,a),c=(N(e*.05+r*.1,t*.05+r*.05)+1)*.5,l=Math.sin(e*.15+t*.1-r*.6)*.5+.5,u=n.lerp(c,l,(this.audioFeature?.smoothness||0)*.5+.2)*.8*s,d=i.subBass*M(25,0,a)*5;d+=i.bass*M(35,5,a+N(e*.1,t*.1-r*.2)*5)*M(0,1,o+this.settings.terrainDensity*.5)*4,d+=i.lowMid*(N(e*.05+r*.1,t*.05)*.5+.5)*2.5,d+=i.mid*Math.max(0,Math.sin(e*.2+t*.2+N(e*.1,t*.1)*2-r*2))*3,j(o*13.3)>.8&&(d+=i.highMid*M(10,45,a)*j(o*7.7)*2.5),o>.99&&(d+=Math.min(1,Math.max(0,this.audioFeature?.energy||0))*5);let f=u+Math.max(0,d*s-.2)*this.settings.amplitude;for(let n of this.ripples){if(!n.isActive)continue;let i=r-n.time,a=i*n.speed,o=Math.hypot(e-n.pos.x,t-n.pos.y),s=o-a,c=Math.max(0,-s),l=(1-M(-.2,0,s))*Math.sin(c*2.2)*Math.exp(-c/4)*.22,u=Math.exp(-((s+2)**2)/(n.width*4))*.32,d=Math.exp(-o*o/5)*Math.exp(-i*12);f+=(Math.exp(-s*s/n.width)+u+l+d)*Math.exp(-a/n.fade)*n.strength*n.elevation}return 1+Math.max(0,f)}updateWithAudioData(e,t){e&&(this._time=t||this._time,this.isAudioPlaying=e.isPlaying===!0,this.hasAudioData=e.isPlaying===!0,e.audioFeature&&(this.audioFeature=e.audioFeature.animation,this.customBands=e.audioFeature.customBands||null))}updateAudioData(){}setEffectMode(e){return console.log(`当前效果模式：${e}`),!0}updateSettings(e){Object.assign(this.settings,e),e.bloomStrength!==void 0&&(this.bloomPass.strength=e.bloomStrength),e.bloomRadius!==void 0&&(this.bloomPass.radius=e.bloomRadius),e.bloomThreshold!==void 0&&(this.bloomPass.threshold=e.bloomThreshold),e.amplitude!==void 0&&this.terrainMat&&(this.terrainMat.uniforms.uAmplitude.value=e.amplitude),e.colorPreset!==void 0&&this.applyColorPreset(e.colorPreset)}update(){let e=this._time;if(this._lastTime<=0){this._lastTime=e;return}this._delta=Math.max(0,Math.min(.05,e-this._lastTime)),this._lastTime=e,this._elapsed+=this._delta;for(let e of this.ripples)e.isActive>0&&(this._elapsed-e.time)*e.speed>e.fade*3.5&&(e.isActive=0);let t=this.audioFeature,i=this.customBands,o=this._delta;this._kickRippleCooldown=Math.max(0,this._kickRippleCooldown-o);let s=t?.kick||0,c=this.settings.beatSensitivity>0?.5/this.settings.beatSensitivity:1/0;if(s>c&&(this._prevKick<=c||s-this._prevKick>.15)&&this._kickRippleCooldown<=0){let e=Math.random()*Math.PI*2,t=3+Math.random()*15;this.addRipple(Math.cos(e)*t,Math.sin(e)*t,Math.min(s*1.5,3)),this._kickRippleCooldown=.15}this._prevKick=s,this._impactFlash*=Math.exp(-o*7);let l=n.lerp(2.2,60,50/100),d=Math.max(0,Math.min(1,1-Math.exp(-l*o))),f=t?.energy||0,p=t?.brightness||0,g=this.settings.bandResponse,_=Math.max(0,Math.min(1.2,(i?.sub||0)*g)),v=Math.max(0,Math.min(1.15,(i?.bass||0)*g)),y=Math.max(0,Math.min(1,(i?.lowMid||0)*g)),b=Math.max(0,Math.min(1,(i?.mid||0)*g)),x=Math.max(0,Math.min(1,(i?.highMid||0)*g));this.smoothedAudio.subBass=n.lerp(this.smoothedAudio.subBass,_,d),this.smoothedAudio.bass=n.lerp(this.smoothedAudio.bass,v,d),this.smoothedAudio.lowMid=n.lerp(this.smoothedAudio.lowMid,y,d),this.smoothedAudio.mid=n.lerp(this.smoothedAudio.mid,b,d),this.smoothedAudio.highMid=n.lerp(this.smoothedAudio.highMid,x,d),this.smoothedAudio.presence=n.lerp(this.smoothedAudio.presence,Math.max(0,Math.min(1,f*this.settings.flashResponse)),d),this.smoothedAudio.brilliance=n.lerp(this.smoothedAudio.brilliance,Math.max(0,Math.min(1,p*this.settings.brightnessResponse)),d),this.smoothedAudio.air=n.lerp(this.smoothedAudio.air,Math.max(0,Math.min(1,p*this.settings.brightnessResponse)),d);let S=this.smoothedAudio.subBass+this.smoothedAudio.bass+this.smoothedAudio.lowMid+this.smoothedAudio.mid,C=S+(this.smoothedAudio.highMid+this.smoothedAudio.brilliance+this.smoothedAudio.air),w=C>.001?S/C:.5,T=t?.hihat||0,E=T-this._prevHihat;this._prevHihat=T,E>.1&&T>this.settings.meteorThreshold&&this.addMeteor(Math.min(T*2,3));let D=this.terrainMat.uniforms,O=this.theme;D.uTime.value=this._elapsed,D.uSubBass.value=this.smoothedAudio.subBass,D.uBass.value=this.smoothedAudio.bass,D.uLowMid.value=this.smoothedAudio.lowMid,D.uMid.value=this.smoothedAudio.mid,D.uHighMid.value=this.smoothedAudio.highMid,D.uPresence.value=this.smoothedAudio.presence,D.uBrilliance.value=this.smoothedAudio.brilliance,D.uAir.value=this.smoothedAudio.air,D.uWarmth.value=Math.max(0,Math.min(1,w)),D.uBrightness.value=Math.max(0,Math.min(1.5,(Math.max(0,Math.min(1,p))+.02)*this.settings.terrainBrightness)),D.uSharpness.value=t?.texture||0,D.uSmoothness.value=t?.smoothness||0,D.uDensity.value=this.settings.terrainDensity,D.uEnergy.value=Math.max(0,Math.min(1,f)),D.uAmplitude.value=this.settings.amplitude,D.uBaseColor1.value.copy(this.perceptualTheme.uBaseColor1),D.uBaseColor2.value.copy(this.perceptualTheme.uBaseColor2),D.uFogColor.value.copy(O.uFogColor),D.uCoolCore.value.copy(this.perceptualTheme.uCoolCore),D.uCoolEdge.value.copy(this.perceptualTheme.uCoolEdge),D.uWarmCore.value.copy(this.perceptualTheme.uWarmCore),D.uWarmEdge.value.copy(this.perceptualTheme.uWarmEdge),D.uRippleColor.value.copy(O.uRippleColor),D.uGlowIntensity.value=this.settings.glowIntensity,D.uRipples.value=this.ripples,D.uRippleColorIntensity.value=this.settings.rippleColorIntensity,D.uRippleWhiteIntensity.value=this.settings.rippleWhiteIntensity,this.scene.fog&&this.scene.fog.color.copy(O.uFogColor);let k=Math.max(0,Math.min(1,(t?.beat||0)*this.settings.blockPulseResponse)),A=n.lerp(3,36,50/100),j=Math.max(0,Math.min(1,1-Math.exp(-A*o)));this.floatingBlockPulse=n.lerp(this.floatingBlockPulse,k,j);let M=this.floatingBlockPulse,N=Math.max(0,Math.min(1,M*1.35)),P=n.lerp(.3,2.5,N),F=this.blockMat.uniforms;F.uTime.value=this._elapsed,F.uPulse.value=N,F.uBaseColor1.value.copy(this.perceptualTheme.uBaseColor1),F.uBaseColor2.value.copy(this.perceptualTheme.uBaseColor2),F.uFogColor.value.copy(O.uFogColor),F.uCoolCore.value.copy(this.perceptualTheme.uCoolCore),F.uCoolEdge.value.copy(this.perceptualTheme.uCoolEdge),F.uWarmCore.value.copy(this.perceptualTheme.uWarmCore),F.uWarmEdge.value.copy(this.perceptualTheme.uWarmEdge),F.uRippleColor.value.copy(O.uRippleColor),F.uGlowIntensity.value=this.settings.glowIntensity,F.uRippleColorIntensity.value=this.settings.rippleColorIntensity,F.uRippleWhiteIntensity.value=this.settings.rippleWhiteIntensity,F.uWarmth.value=Math.max(0,Math.min(1,w)),F.uBrightness.value=Math.max(0,Math.min(1.5,(Math.max(0,Math.min(1,p))+.02)*this.settings.terrainBrightness)),F.uSharpness.value=t?.texture||0,F.uPresence.value=this.smoothedAudio.presence,F.uBrilliance.value=this.smoothedAudio.brilliance,F.uAir.value=this.smoothedAudio.air;let I=new h,L=new u,R=new h,z=new a,B=new r;for(let e=0;e<this.floatingBlocks.length;e++){let t=this.floatingBlocks[e],n=Math.sin(this._elapsed*(.55+t.rotationSpeed)+t.phase)*.45;I.set(t.x,t.y+n+M*.5*1.4,t.z),z.set(this._elapsed*t.rotationSpeed+t.phase,this._elapsed*t.rotationSpeed*.7+t.phase,this._elapsed*t.rotationSpeed*.45),L.setFromEuler(z);let r=t.baseScale*P;R.set(r,r,r),B.compose(I,L,R),this.blockMesh.setMatrixAt(e,B)}this.blockMesh.instanceMatrix.needsUpdate=!0;let V=new m().copy(O.uWarmCore).lerp(new m(16777215),.7);this.meteorMat.color.copy(V);for(let e=0;e<20;e++){let n=this.meteors[e];if(!n.active)I.set(0,-1e3,0),R.set(0,0,0),B.compose(I,L,R),this.meteorMesh.setMatrixAt(e,B);else{let r=.45+Math.min(1,t?.high||0)*1.4,i=n.speed*r*60*o;n.y-=i,n.x+=n.driftX*i,n.z+=n.driftZ*i;let a=this.terrainHeightAt(n.x,n.z);if(n.y-.9<=a){n.active=!1,this.addRipple(n.x,n.z,Math.min(n.strength*1,1.2),!0),this._impactFlash=Math.min(1,this._impactFlash+n.strength*.35);for(let e=0;e<24;e++)this.spawnParticle(n.x,a+.3,n.z,n.speed*1.5,!0)}for(I.set(n.x,Math.max(0,n.y),n.z),L.setFromUnitVectors(new h(0,1,0),new h(-n.driftX,1,-n.driftZ).normalize()),R.setScalar(n.active?1.5:0),B.compose(I,L,R),this.meteorMesh.setMatrixAt(e,B),n.trailBudget+=o*42;n.active&&n.trailBudget>=1;)--n.trailBudget,this.spawnParticle(n.x,n.y,n.z,n.speed*.2)}}this.meteorMesh.instanceMatrix.needsUpdate=!0,this.particleMat.color.copy(V);for(let e=0;e<200;e++){let t=this.particles[e];if(!t.active)I.set(0,-1e3,0),R.set(0,0,0),B.compose(I,L,R),this.particleMesh.setMatrixAt(e,B);else{if(t.life+=o,t.life>=t.maxLife)t.active=!1,R.set(0,0,0);else{t.x+=t.vx*o*10,t.vy-=t.gravity*o,t.y+=t.vy*o*10,t.z+=t.vz*o*10;let n=t.scale*(1-t.life/t.maxLife);I.set(t.x,t.y,t.z),R.set(n*(t.burst?1:.45),n*(t.burst?1:3.5),n*(t.burst?1:.45)),this.particleMesh.setColorAt(e,V.clone().multiplyScalar((1-t.life/t.maxLife)**2))}B.compose(I,L,R),this.particleMesh.setMatrixAt(e,B)}}this.particleMesh.instanceMatrix.needsUpdate=!0,this.particleMesh.instanceColor&&(this.particleMesh.instanceColor.needsUpdate=!0),this.bloomPass.strength=this.settings.bloomStrength*(1+this._impactFlash*.65)}render(){if(!this._isReady||!this.composer)return;let e=this._time;if(this._lastFrameTime>0&&e>0&&Math.min(.033,e-this._lastFrameTime),this._lastFrameTime=e,!this.hasAudioData){for(let e in this.smoothedAudio)this.smoothedAudio[e]*=.95;this.audioFeature=null,this.customBands=null}this.update(),this.controls.update(),this.composer.render()}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}resetGuiCamera(){!this.camera||!this.controls||(this.camera.position.set(...z),this.controls.target.set(...B),this.controls.update())}dispose(){this.resizeHandler&&window.removeEventListener(`resize`,this.resizeHandler),w(this.settingsButton,this.guiContainer,this.gui),this.settingsButton=null,this.guiContainer=null,this.terrainMesh&&(this.scene.remove(this.terrainMesh),this.terrainMesh.geometry.dispose(),this.terrainMat.dispose()),this.blockMesh&&(this.scene.remove(this.blockMesh),this.blockMesh.geometry.dispose(),this.blockMat.dispose()),this.meteorMesh&&(this.scene.remove(this.meteorMesh),this.meteorMesh.geometry.dispose(),this.meteorMat.dispose()),this.particleMesh&&(this.scene.remove(this.particleMesh),this.particleMesh.geometry.dispose(),this.particleMat.dispose()),this.renderer&&this.renderer.dispose(),console.log(`✅ Animation52 资源已清理`)}getAudioDataForUI(){let e=this.customBands||{},t=this.audioFeature||{};return{bass:(e.sub||0)+(e.bass||0),mid:e.mid||0,high:t.high||0}}playAudio(){console.log(`音频播放由系统控制`)}pauseAudio(){console.log(`音频暂停由系统控制`)}};export{H as default};