import{Dr as e,Et as t,Fn as n,Ht as r,Mr as i,Or as a,Q as o,St as s,Tt as c,Ut as l,Vt as u,Xn as d,Y as f,Zn as p,g as m,mt as h,qt as g,r as _,tt as v,vt as y}from"./three.module-TVF63cYk.js";import{n as b,r as x,t as S}from"./OutputPass-CxDAHfy4.js";import{a as C,i as w,n as T,r as E,t as D}from"./GUIHelper-DNd0uFVI.js";import{t as O}from"./UnrealBloomPass-C17ZlHgr.js";var k=()=>({blending:5,blendEquation:100,blendSrc:201,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:200,blendDstAlpha:201,premultipliedAlpha:!0}),A=22,j=1600,M={x:6,y:5.2,z:6},N={x:-3,y:.15,z:-3},P=M.x/A,F=1/P,I={x:-5.2,y:1.1,z:0},L=1/60,R=14,z=.985,B=class{constructor(e){this.owner=e,this.reset()}reset(){this.alive=!1,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.radius=.1,this.life=0,this.maxLife=12,this.born=0,this.buoy=0,this.grounded=!1,this.settled=!1,this.phase=Math.random(),this.hue=Math.random(),this.sat=.85,this.lum=.62,this.hueSpeed=0,this.hero=!1,this.heroWeight=0,this.cr=1,this.cg=1,this.cb=1}spawn(e,t,n,r,i,a,o){this.alive=!0,this.px=e,this.py=t,this.pz=n,this.vx=i===void 0?1.1+Math.random()*.5:i,this.vy=a===void 0?.8+Math.random()*1:a,this.vz=o===void 0?(Math.random()-.5)*.4:o,this.radius=r,this.buoy=Math.random()<.18?-(.12+Math.random()*.22):.08+Math.random()*.26,this.grounded=!1,this.settled=!1,this.born=performance.now(),this.maxLife=12+Math.random()*5,this.life=this.maxLife,this.phase=Math.random(),this.hero=r>=.42,this.heroWeight=this.hero?s.clamp((r-.42)/.65+.35,.35,1):0,this.hue=Math.random(),this.sat=.7+Math.random()*.3,this.lum=.62+Math.random()*.23,this.hueSpeed=(Math.random()-.5)*.06,this.updateColor()}updateColor(){this.owner._hsl.setHSL(this.hue,this.sat,this.lum),this.cr=this.owner._hsl.r,this.cg=this.owner._hsl.g,this.cb=this.owner._hsl.b}},V=class{constructor(t,i={}){this.canvas=t,this.mousePosition=new e(9999,9999),this.mouseVelocity=new e,this.mouseNdc=new e,this.mouseRaycaster=new n,this.mousePlane=new r(new a(0,0,1),0),this.mouseHit=new a,this.mouseMoveHandler=e=>{if(!this.camera)return;let t=this.canvas.getBoundingClientRect();if(this.mouseNdc.set((e.clientX-t.left)/Math.max(1,t.width)*2-1,-((e.clientY-t.top)/Math.max(1,t.height))*2+1),this.mouseRaycaster.setFromCamera(this.mouseNdc,this.camera),!this.mouseRaycaster.ray.intersectPlane(this.mousePlane,this.mouseHit))return;let n=this.mouseHit.x,r=this.mouseHit.y;this.mousePosition.x<9e3&&this.mouseVelocity.set(n-this.mousePosition.x,r-this.mousePosition.y).multiplyScalar(.35),this.mousePosition.set(n,r)},this.mouseLeaveHandler=()=>{this.mousePosition.set(9999,9999),this.mouseVelocity.set(0,0)};let o={bloomEnabled:!0,bloomStrength:.06,bloomRadius:.12,bloomThreshold:.92,filmThickness:300,filmStrength:1,fresnelPower:1,bubbleOpacity:1,innerGlow:.08,bubbleScale:.82,mouseDisturbanceStrength:.55,hueShift:100,saturation:.72,brightness:.92,colorMix:.18,colorResponse:1.15,hueVariation:1,smooth:.5,bassStrength:1,midStrength:1,highStrength:1,brightnessStrength:1,kickForce:1,snareStrength:1,hihatStrength:1,fieldBreath:.2,vortexStrength:.45,shockwaveStrength:.18,heroAmount:.4,chromaFlow:.28};this.settings={...o,...i},this.defaultSettings=o,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.bloomPass=null,this.bgRT=null,this.bgScene=null,this.nebulaMat=null,this.bubbles=null,this.bubbleMat=null,this.bubbleGeo=null,this.aRadius=null,this.aPhase=null,this.aColor=null,this.aFade=null,this.ux=null,this.uy=null,this.uz=null,this.ux2=null,this.uy2=null,this.uz2=null,this.div=null,this.p=null,this.pn=null,this.simTime=0,this.pool=[],this.cursor=0,this._hsl=new m,this._m4=new c,this._q=new g,this._s=new a,this._p=new a,this._upAxis=new a(0,1,0),this.bass=0,this.mid=0,this.high=0,this.audioBrightness=.5,this.kickVal=0,this.snareVal=0,this.hihatVal=0,this.beatVal=0,this.kickEngine=0,this.snareEngine=0,this.hihatEngine=0,this.beatEngine=0,this.lastKickE=0,this.lastHihatE=0,this.burstCooldown=0,this.hihatCooldown=0,this.fieldBreath=0,this.shockwave=0,this.vortexPulse=0,this.heroCooldown=0,this.heroEnergy=0,this.lastBassForHero=0,this.audio={bass:0,mid:0,high:0,beatPulse:0,snare:0,fieldBreath:0,vortex:0,shockwave:0},this.hasAudioData=!1,this._lastWasPlaying=!1,this.acc=0,this.lastTime=0,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this._isReady=!1,this.init()}init(){if(!(this._isReady||this.scene))try{return this.allocateFluid(),this.setupThreeJS(),this.canvas.addEventListener(`pointermove`,this.mouseMoveHandler,{passive:!0}),this.canvas.addEventListener(`pointerleave`,this.mouseLeaveHandler,{passive:!0}),this.createBackground(),this.createBubbles(),this.createBubblePool(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),this.syncParams(),this._isReady=!0,console.log(`✅ Animation58 V2 · Chromatic Bubble Symphony 初始化成功`),!0}catch(e){throw console.error(`❌ Animation58 初始化失败:`,e),e}}setupThreeJS(){this.camera=new u(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,1.6,5),this.camera.lookAt(0,1.6,0),this.renderer=new _({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=y}createBackground(){this.bgRT=new i(window.innerWidth,window.innerHeight,{minFilter:h,magFilter:h}),this.bgScene=new d,this.nebulaMat=new p({depthTest:!1,depthWrite:!1,uniforms:{},vertexShader:`
                void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
                void main(){
                    // RGB 黑底继续供折射采样，但离屏纹理不再携带不透明黑 Alpha。
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                }`});let e=new t(new l(2,2),this.nebulaMat);e.renderOrder=0,this.bgScene.add(e),this.scene=new d}createBubbles(){let e=j;this.bubbleGeo=new f(1,3),this.aRadius=new o(new Float32Array(e),1),this.aPhase=new o(new Float32Array(e),1),this.aColor=new o(new Float32Array(e*3),3),this.aFade=new o(new Float32Array(e),1);for(let t=0;t<e;t++)this.aRadius.array[t]=.12,this.aPhase.array[t]=Math.random(),this.aColor.array[t*3]=1,this.aColor.array[t*3+1]=1,this.aColor.array[t*3+2]=1,this.aFade.array[t]=0;this.bubbleGeo.setAttribute(`aRadius`,this.aRadius),this.bubbleGeo.setAttribute(`aPhase`,this.aPhase),this.bubbleGeo.setAttribute(`aColor`,this.aColor),this.bubbleGeo.setAttribute(`aFade`,this.aFade),this.bubbleMat=new p({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uMidMotion:{value:0},uHighFlow:{value:0},uBeat:{value:0},uFieldBreath:{value:0},uShockwave:{value:0},uChromaFlow:{value:1},uFilmThickness:{value:400},uFilmStrength:{value:.85},uFresnelPower:{value:5},uF0:{value:.02},uAlpha:{value:1},uInnerGlow:{value:1.8},uRefraction:{value:1.333},uEnvIntensity:{value:1},uHueShift:{value:0},uSaturation:{value:1},uBrightness:{value:1},uColorMix:{value:.7},uHueVariation:{value:1},uAudioShift:{value:0},tScene:{value:this.bgRT.texture}},vertexShader:`
                uniform float uTime;
                uniform float uBeat;
                uniform float uFieldBreath;
                attribute float aRadius;
                attribute float aPhase;
                attribute vec3 aColor;
                attribute float aFade;
                varying vec3 vWorldPos;
                varying vec3 vNormalW;
                varying vec3 vViewDir;
                varying float vPhase;
                varying vec2 vScreenUV;
                varying float vRadius;
                varying vec3 vColor;
                varying float vFade;
                void main(){
                    vPhase = aPhase;
                    vRadius = aRadius;
                    vColor = aColor;
                    vFade = aFade;
                    // 音频只提供很轻的整体起伏，避免泡泡像橡胶球一样随鼓点伸缩。
                    // 注：几何大小由 instanceMatrix 提供（aRadius 仅作折射属性），勿再乘 aRadius，否则尺寸被平方
                    float localPulse = sin(uTime * 1.7 + vPhase * 6.2831) * 0.5 + 0.5;
                    float morph = 1.0 + uFieldBreath * 0.018 + uBeat * (0.008 + 0.008 * localPulse);
                    vec3 pos = position * morph;
                    vec4 world = instanceMatrix * vec4(pos, 1.0);
                    vWorldPos = world.xyz;
                    vNormalW = normalize(mat3(instanceMatrix) * normal);
                    vViewDir = cameraPosition - world.xyz;
                    vec4 clip = projectionMatrix * viewMatrix * world;
                    vScreenUV = clip.xy / clip.w * 0.5 + 0.5;
                    gl_Position = clip;
                }`,fragmentShader:`
                uniform float uTime, uBass, uMid, uHigh, uMidMotion, uHighFlow, uBeat;
                uniform float uFieldBreath, uShockwave, uChromaFlow;
                uniform float uFilmThickness, uFilmStrength;
                uniform float uFresnelPower, uF0, uRefraction, uEnvIntensity, uAlpha, uInnerGlow;
                uniform float uHueShift, uSaturation, uBrightness, uColorMix, uHueVariation;
                uniform float uAudioShift;
                uniform sampler2D tScene;
                varying vec3 vWorldPos, vNormalW, vViewDir;
                varying float vPhase, vRadius, vFade;
                varying vec2 vScreenUV;
                varying vec3 vColor;

                const float PI = 3.14159265359;

                // 程序化噪声（Cinematic Thin Film 2.0 厚度场）
                float hash(vec3 p) {
                    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
                    p *= 17.0;
                    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
                }

                // 色相旋转（绕灰色轴旋转 RGB，用于 GUI 颜色控制）
                vec3 hueShift(vec3 c, float rad) {
                    const vec3 k = vec3(0.5773502692);
                    float cosA = cos(rad);
                    return c * cosA + cross(k, c) * sin(rad) + k * dot(k, c) * (1.0 - cosA);
                }
                vec3 hsl2rgb(vec3 hsl) {
                    vec3 rgb = clamp(abs(mod(hsl.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
                    return hsl.z + hsl.y * (rgb - 0.5) * (1.0 - abs(2.0 * hsl.z - 1.0));
                }
                vec3 rgb2hsl(vec3 rgb) {
                    float maxVal = max(rgb.r, max(rgb.g, rgb.b));
                    float minVal = min(rgb.r, min(rgb.g, rgb.b));
                    float h = 0.0;
                    float s = 0.0;
                    float l = (maxVal + minVal) * 0.5;
                    if (maxVal != minVal) {
                        float d = maxVal - minVal;
                        s = l > 0.5 ? d / (2.0 - maxVal - minVal) : d / max(maxVal + minVal, 0.0001);
                        if (maxVal == rgb.r) h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6.0 : 0.0);
                        else if (maxVal == rgb.g) h = (rgb.b - rgb.r) / d + 2.0;
                        else h = (rgb.r - rgb.g) / d + 4.0;
                        h /= 6.0;
                    }
                    return vec3(h, s, l);
                }
                float noise(vec3 p) {
                    vec3 i = floor(p);
                    vec3 f = fract(p);
                    f = f * f * (3.0 - 2.0 * f);
                    return mix(
                        mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
                        f.z);
                }

                // 程序化环境反射（顶亮底暗 + 主光斑）
                vec3 envColor(vec3 dir){
                    float t = clamp(dir.y*0.5+0.5, 0.0, 1.0);
                    vec3 c = mix(vec3(0.06,0.07,0.12), vec3(0.28,0.38,0.62), pow(t,1.2));
                    c += vec3(0.40,0.32,0.52) * pow(max(dir.y,0.0), 4.0);
                    c += vec3(1.5,1.15,0.85) * pow(max(dot(dir, normalize(vec3(0.25,1.0,0.4))),0.0), 32.0) * 1.0;   // 小而亮的主光 → 玻璃高光
                    return c;
                }

                void main(){
                    vec3 N = normalize(vNormalW);
                    vec3 V = normalize(vViewDir);
                    float nDotV = clamp(dot(N, V), 0.0, 1.0);
                    vec3 tint = clamp(vColor, 0.0, 1.0);   // 实例色彩

                    // 1. Fresnel（Schlick）
                    float F = uF0 + (1.0 - uF0) * pow(1.0 - nDotV, uFresnelPower);

                    // 2. 薄膜干涉：低频厚度变化形成少量、不对称的流动色带。
                    float sinTheta = sqrt(max(1.0 - nDotV * nDotV, 0.0));
                    float flowSpeed = 0.025 + uHighFlow * 0.16 * uChromaFlow;
                    vec3 flowP = vWorldPos * 1.65 + vec3(uTime * flowSpeed, -uTime * flowSpeed * 0.7, 0.0);
                    float filmNoise = noise(flowP + vPhase * 40.0);
                    float thick = uFilmThickness * (0.72 + filmNoise * 0.42);
                    thick *= (0.92 + 0.18 * sinTheta);
                    thick *= (1.12 - 0.24 * clamp(vNormalW.y * 0.5 + 0.5, 0.0, 1.0)); // 重力排液：下半部膜略厚
                    thick += min(uHighFlow, 1.0) * 24.0;
                    vec3 lambda = vec3(440.0, 550.0, 680.0);
                    vec3 phase = 4.0 * PI * thick * (0.72 + 0.28 * nDotV) / lambda;
                    vec3 film = 0.5 + 0.5 * cos(phase);
                    film = mix(vec3(dot(film, vec3(0.333))), film, 0.68);
                    float filmPatch = smoothstep(0.46, 0.72, filmNoise + sinTheta * 0.20);
                    film *= uFilmStrength * filmPatch * (0.72 + 0.22 * uHigh * uChromaFlow);
                    vec3 filmCol = film * mix(vec3(1.0), tint, uColorMix);

                    // 参考 Animation7：以当前薄膜干涉色为基色，再由音频连续旋转 HSL。
                    // 中高频推动色相，低频增强饱和度，整体能量轻微提升明度。
                    float bassColor = pow(clamp(uBass, 0.0, 1.0), 0.55);
                    float midColor = pow(clamp(uMid, 0.0, 1.0), 0.55);
                    float highColor = pow(clamp(uHigh, 0.0, 1.0), 0.55);
                    float colorSum = bassColor + midColor + highColor;
                    float audioColorEnergy = clamp(max(max(bassColor, midColor), highColor), 0.0, 1.0);
                    float spectralSpread = (
                        abs(bassColor - midColor) + abs(midColor - highColor) + abs(highColor - bassColor)
                    ) / max(colorSum * 2.0, 0.001);
                    vec3 filmHsl = rgb2hsl(clamp(filmCol, 0.0001, 1.0));
                    float idleHueFlow = sin(uTime * 0.42 + vPhase * 6.2831) * 0.08;
                    float audioHueFlow = (midColor + highColor) * 0.38 + spectralSpread * 0.22;
                    filmHsl.x = fract(filmHsl.x + idleHueFlow + audioHueFlow * uHueVariation);
                    filmHsl.y = clamp(filmHsl.y * (1.0 + bassColor * 1.15) + audioColorEnergy * 0.10, 0.0, 1.0);
                    filmHsl.z = clamp(filmHsl.z * (1.0 + highColor * 0.28 + audioColorEnergy * 0.10), 0.0, 0.92);
                    vec3 spectralColor = hsl2rgb(filmHsl);
                    filmCol = mix(filmCol, spectralColor * uFilmStrength, 0.42 + audioColorEnergy * 0.48);

                    // 3. 反射（纯黑背景下用程序化环境光：顶亮蓝紫 + 主光高光，保持抛光玻璃质感）
                    vec3 R = reflect(-V, N);
                    vec3 envR = envColor(R);
                    vec3 refl = envR * F * uEnvIntensity;
                    // 玻璃高光：反射方向对准主光 → 锐利亮斑（不乘 F，中心也有光点）
                    vec3 L = normalize(vec3(0.25, 1.0, 0.4));
                    float glint = pow(max(dot(R, L), 0.0), 96.0);
                    refl += vec3(1.0, 1.02, 1.05) * glint * 1.15;
                    float spec2 = pow(max(dot(R, L), 0.0), 18.0) * 0.10 * F;
                    refl += vec3(spec2);
                    refl += filmCol * F * 0.55;

                    // 4. 折射 —— 薄膜色散：RGB 三通道轻微分离，产生肥皂膜特有的虹彩位移
                    vec3 T = refract(-V, N, 1.0 / uRefraction);
                    vec2 off = T.xy * 0.018 * uRefraction * (0.25 + vRadius * 0.9) * (0.7 + 0.2 * uMidMotion);
                    vec3 bg;
                    bg.r = texture2D(tScene, clamp(vScreenUV + off * 1.04, 0.0, 1.0)).r;
                    bg.g = texture2D(tScene, clamp(vScreenUV + off * 1.00, 0.0, 1.0)).g;
                    bg.b = texture2D(tScene, clamp(vScreenUV + off * 0.96, 0.0, 1.0)).b;

                    // 5. 薄膜透射 —— 肥皂泡中心几乎全透明，背景无阻穿过，仅边缘轻微遮蔽
                    float trans = 1.0 - 0.35 * F;

                    // 6. 合成：中心只透射背景，颜色主要存在于掠射角的薄膜上。
                    vec3 col = refl + bg * trans;
                    float edge = sqrt(max(1.0 - nDotV * nDotV, 0.0));
                    col += filmCol * (0.025 + 0.20 * pow(edge, 2.2));
                    col += spectralColor * F * audioColorEnergy * (0.18 + spectralSpread * 0.20);
                    vec3 shockColor = hueShift(filmCol, (vPhase - 0.5) * 1.7 + uAudioShift);
                    col += shockColor * pow(edge, 3.2) * uShockwave * 0.16;
                    col += filmCol * F * uBeat * 0.08;

                    // 极弱的中心亮度只用于防止泡泡在纯黑背景上完全消失。
                    float inside = pow(1.0 - edge, 7.0);
                    col += vec3(0.16, 0.20, 0.26) * inside * uInnerGlow;

                    float alpha = clamp((0.035 + 0.78 * pow(edge, 3.6) + glint * 0.16) * uAlpha * vFade, 0.0, 0.82);

                    // GUI 颜色控制：色相偏移（GUI 基准 + 音频质心冷暖偏移）/ 饱和度 / 亮度
                    col = hueShift(col, uHueShift + uAudioShift);
                    col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, uSaturation);
                    col *= uBrightness;

                    gl_FragColor = vec4(col * vFade, alpha);   // 线性输出，色调映射 + sRGB 由 OutputPass 完成
                }`}),this.bubbles=new v(this.bubbleGeo,this.bubbleMat,j),this.bubbles.renderOrder=1,this.bubbles.frustumCulled=!1,this.scene.add(this.bubbles)}createBubblePool(){for(let e=0;e<j;e++)this.pool.push(new B(this));this.cursor=0}spawnOne(e,t,n,r,i,a,o){for(let s=0;s<j;s++){let c=(this.cursor+s)%j;if(!this.pool[c].alive){this.pool[c].spawn(e,t,n,r,i,a,o),this.cursor=(c+1)%j;return}}}burstSpawn(e=8){for(let t=0;t<e;t++){let e=.1+Math.random()*.18;this.spawnOne(I.x+(Math.random()-.5)*.5,I.y+(Math.random()-.5)*.5,I.z+(Math.random()-.5)*.5,e,1.8+Math.random()*1.6,(Math.random()-.35)*1.2,(Math.random()-.5)*1)}}heroSpawn(e=1){for(let t=0;t<e;t++){let e=.48+Math.random()*.52;this.spawnOne(-4.8-Math.random()*.8,.9+Math.random()*2.2,(Math.random()-.5)*1.4,e,.45+Math.random()*.45,(Math.random()-.5)*.18,(Math.random()-.5)*.22)}}hihatSpawn(e=5){for(let t=0;t<e;t++)this.spawnOne(I.x+(Math.random()-.5)*.3,I.y+(Math.random()-.5)*.3,I.z+(Math.random()-.5)*.3,.05+Math.random()*.1)}setupPostProcessing(){this.composer=new x(this.renderer),this.composer.addPass(new b(this.scene,this.camera)),this.bloomPass=new O(new e(window.innerWidth,window.innerHeight),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold),this.composer.addPass(this.bloomPass),Object.assign(this.bloomPass.blendMaterial,k()),this.composer.addPass(new S)}updateWithAudioData(e,t){let n=!!(e&&e.isPlaying===!0);if(e&&e.audioFeature&&e.audioFeature.animation){this.hasAudioData=n;let t=e.audioFeature.animation,r=this.settings.smooth;this.bass=this.bass*r+(t.bass||0)*(1-r),this.mid=this.mid*r+(t.mid||0)*(1-r),this.high=this.high*r+(t.high||0)*(1-r),this.audioBrightness=this.audioBrightness*r+(t.brightness||0)*(1-r),this.kickEngine=t.kick||0,this.snareEngine=t.snare||0,this.hihatEngine=t.hihat||0,this.beatEngine=t.beat||0}else e&&e.audioFeature?.animation?(this.hasAudioData=e.isPlaying===void 0?!0:n,this.bass=e.audioFeature?.animation.bass||0,this.mid=e.audioFeature?.animation.mid||0,this.high=e.audioFeature?.animation.high||0,this.audioBrightness=.5,this.kickEngine=e.beat?.kick||0,this.snareEngine=e.beat?.snare||0,this.hihatEngine=e.beat?.hihat||0,this.beatEngine=Math.max(this.kickEngine,this.snareEngine,this.hihatEngine)):this.hasAudioData=!1;n&&!this._lastWasPlaying&&this.clearBubbles(),this._lastWasPlaying=n}clearBubbles(){for(let e=0;e<j;e++)this.pool[e].reset(),this._p.set(0,-10,0),this._q.identity(),this._s.set(1e-4,1e-4,1e-4),this.bubbles.setMatrixAt(e,this._m4.compose(this._p,this._q,this._s)),this.aRadius.array[e]=1e-4,this.aFade.array[e]=0,this.aColor.array[e*3]=0,this.aColor.array[e*3+1]=0,this.aColor.array[e*3+2]=0;this.aRadius.needsUpdate=!0,this.aFade.needsUpdate=!0,this.aColor.needsUpdate=!0,this.bubbles.instanceMatrix.needsUpdate=!0}updateAudioAnalysis(e){this.hasAudioData?(this.kickVal=Math.min(this.kickEngine,2),this.snareVal=Math.min(this.snareEngine,1.5),this.hihatVal=Math.min(this.hihatEngine,1.5),this.beatVal=Math.min(this.beatEngine,2),this.settings.kickForce>.01&&this.kickVal>.3&&this.kickVal>this.lastKickE*1.05&&this.burstCooldown<=0&&(this.burstSpawn(Math.max(1,Math.round(7*this.settings.kickForce))),this.shockwave=Math.min(1.35,this.shockwave+.75+this.kickVal*.35),this.fieldBreath=Math.min(1.4,this.fieldBreath+.35*this.settings.fieldBreath),this.burstCooldown=.17),this.settings.hihatStrength>.01&&this.hihatVal>.1&&this.hihatVal>this.lastHihatE*1.1&&this.hihatCooldown<=0&&(this.hihatSpawn(Math.max(1,Math.round(5*this.settings.hihatStrength))),this.hihatCooldown=.2),this.lastKickE=this.kickVal,this.lastHihatE=this.hihatVal):(this.bass*=.95,this.mid*=.95,this.high*=.95,this.audioBrightness+=(.5-this.audioBrightness)*.1,this.kickVal*=.92,this.snareVal*=.9,this.hihatVal*=.88,this.beatVal*=.9,this.lastKickE*=.95,this.lastHihatE*=.95);let t=Math.min(1.2,this.bass*this.settings.fieldBreath);this.fieldBreath+=(t-this.fieldBreath)*(1-Math.exp(-e*5));let n=Math.min(1.4,this.mid*this.settings.vortexStrength);this.vortexPulse+=(n-this.vortexPulse)*(1-Math.exp(-e*4)),this.shockwave*=Math.exp(-e*4.6),this.heroEnergy+=(this.bass*.48+this.mid*.28+this.high*.24-this.heroEnergy)*(1-Math.exp(-e*1.8)),this.heroCooldown=Math.max(0,this.heroCooldown-e);let r=this.heroEnergy>.62&&this.bass>.48&&this.bass>this.lastBassForHero+.025;if(this.hasAudioData&&r&&this.heroCooldown<=0&&this.settings.heroAmount>.01){let e=Math.min(3,this.settings.heroAmount*(1+this.heroEnergy)),t=Math.floor(e),n=t+ +(Math.random()<e-t);n>0&&(this.heroSpawn(n),this.heroCooldown=3.8)}this.lastBassForHero=this.bass,this.burstCooldown=Math.max(0,this.burstCooldown-e),this.hihatCooldown=Math.max(0,this.hihatCooldown-e),this.audio={bass:this.bass,mid:this.mid,high:this.high,beatPulse:Math.min(this.kickVal*this.settings.kickForce,1),snare:this.snareVal,fieldBreath:this.fieldBreath,vortex:this.vortexPulse,shockwave:this.shockwave}}allocateFluid(){let e=A*A*A;this.ux=new Float32Array(e),this.uy=new Float32Array(e),this.uz=new Float32Array(e),this.ux2=new Float32Array(e),this.uy2=new Float32Array(e),this.uz2=new Float32Array(e),this.div=new Float32Array(e),this.p=new Float32Array(e),this.pn=new Float32Array(e)}clampI(e){return e<0?0:e>=A?A-1:e}gidx(e,t,n){return(e*A+t)*A+n}w2g(e,t,n){return[(e-N.x)/M.x*A,(t-N.y)/M.y*A,(n-N.z)/M.z*A]}triSample(e,t,n,r){let i=Math.floor(t),a=Math.floor(n),o=Math.floor(r),s=Math.min(i+1,A-1),c=Math.min(a+1,A-1),l=Math.min(o+1,A-1),u=t-i,d=n-a,f=r-o,p=this.gidx(i,a,o),m=this.gidx(s,a,o),h=this.gidx(i,c,o),g=this.gidx(s,c,o),_=this.gidx(i,a,l),v=this.gidx(s,a,l),y=this.gidx(i,c,l),b=this.gidx(s,c,l),x=e[p]*(1-u)+e[m]*u,S=e[h]*(1-u)+e[g]*u,C=e[_]*(1-u)+e[v]*u,w=e[y]*(1-u)+e[b]*u,T=x*(1-d)+S*d,E=C*(1-d)+w*d;return T*(1-f)+E*f}sampleVel(e,t,n){let[r,i,a]=this.w2g(e,t,n),o=this.clampI(r),s=this.clampI(i),c=this.clampI(a);return[this.triSample(this.ux,o,s,c),this.triSample(this.uy,o,s,c),this.triSample(this.uz,o,s,c)]}fluidStep(e,t,n,r){let i=this.ux,a=this.uy,o=this.uz,s=this.ux2,c=this.uy2,l=this.uz2,u=this.div,d=this.p,f=this.pn,p=A-1,m=1/A,h=t.bass*4.8*1*this.settings.bassStrength,g=(t.mid*2.4+(t.vortex||0)*4.8)*1*this.settings.midStrength,_=(t.beatPulse*7+(t.shockwave||0)*10*this.settings.shockwaveStrength)*1,v=2.8+(t.fieldBreath||0)*.9;for(let t=0;t<A;t++)for(let n=0;n<A;n++)for(let s=0;s<A;s++){let c=this.gidx(t,n,s),l=N.x+(t+.5)*P,u=N.y+(n+.5)*P,d=N.z+(s+.5)*P;i[c]+=(.18+Math.sin(u*.6+r*.4)*.1)*1*e,a[c]+=Math.cos(l*1.1+r*.55)*.08*1*e,o[c]+=Math.sin(d*.8+r*1)*.1*1*e;let f=l-0,p=u-1.1,m=d-0,y=f*f+p*p+m*m,b=Math.exp(-y/(v*v)),x=Math.sqrt(y)+.001;i[c]+=f/x*h*b*e,a[c]+=p/x*h*b*e,o[c]+=m/x*h*b*e,i[c]+=-m/x*g*b*e,o[c]+=f/x*g*b*e,i[c]+=f/x*_*b*e,a[c]+=p/x*_*b*e,o[c]+=m/x*_*b*e}let y=.35;for(let t of n){let[n,r,s]=this.w2g(t.px,t.py,t.pz),c=this.clampI(Math.floor(n)),l=this.clampI(Math.floor(r)),u=this.clampI(Math.floor(s)),d=this.gidx(c,l,u);i[d]-=t.vx*y*e*10,a[d]-=t.vy*y*e*10,o[d]-=t.vz*y*e*10}for(let t=0;t<A;t++)for(let n=0;n<A;n++)for(let r=0;r<A;r++){let u=this.gidx(t,n,r),d=t+.5,f=n+.5,p=r+.5,h=d-i[u]*e*m,g=f-a[u]*e*m,_=p-o[u]*e*m;s[u]=this.triSample(i,h,g,_),c[u]=this.triSample(a,h,g,_),l[u]=this.triSample(o,h,g,_)}i.set(s),a.set(c),o.set(l);for(let e=0;e<A;e++)for(let t=0;t<A;t++)for(let n=0;n<A;n++){let r=this.gidx(e,t,n),s=this.gidx(Math.max(e-1,0),t,n),c=this.gidx(Math.min(e+1,p),t,n),l=this.gidx(e,Math.max(t-1,0),n),f=this.gidx(e,Math.min(t+1,p),n),m=this.gidx(e,t,Math.max(n-1,0)),h=this.gidx(e,t,Math.min(n+1,p));u[r]=.5*F*(i[c]-i[s]+(a[f]-a[l])+(o[h]-o[m])),d[r]=0}let b=P/6;for(let e=0;e<R;e++){for(let e=0;e<A;e++)for(let t=0;t<A;t++)for(let n=0;n<A;n++){let r=this.gidx(e,t,n);f[r]=(d[this.gidx(Math.max(e-1,0),t,n)]+d[this.gidx(Math.min(e+1,p),t,n)]+d[this.gidx(e,Math.max(t-1,0),n)]+d[this.gidx(e,Math.min(t+1,p),n)]+d[this.gidx(e,t,Math.max(n-1,0))]+d[this.gidx(e,t,Math.min(n+1,p))])*(1/6)-b*u[r]}let e=d;d.set(f),f.set(e)}for(let e=0;e<A;e++)for(let t=0;t<A;t++)for(let n=0;n<A;n++){let r=this.gidx(e,t,n),s=this.gidx(Math.max(e-1,0),t,n),c=this.gidx(Math.min(e+1,p),t,n),l=this.gidx(e,Math.max(t-1,0),n),u=this.gidx(e,Math.min(t+1,p),n),f=this.gidx(e,t,Math.max(n-1,0)),m=this.gidx(e,t,Math.min(n+1,p)),h=.5*F*(d[c]-d[s]),g=.5*F*(d[u]-d[l]),_=.5*F*(d[m]-d[f]);i[r]-=h,a[r]-=g,o[r]-=_}for(let e=0;e<i.length;e++){i[e]*=z,a[e]*=z,o[e]*=z;let t=i[e]*i[e]+a[e]*a[e]+o[e]*o[e];if(t>144){let n=12/Math.sqrt(t);i[e]*=n,a[e]*=n,o[e]*=n}}}bubbleStep(e,t){let n=this.pool,r=this.bubbles,i=this.aRadius,a=this.aFade,o=this.aColor,c=this._p,l=this._q,u=this._s,d=this._m4,f=this._upAxis,p=this.camera;this.mouseVelocity.multiplyScalar(.002**e);let m=(this.hasAudioData?2:2.5)+t.bass*5*this.settings.bassStrength;if(Math.random()<m*e){let e=1+(this.hasAudioData?Math.min(1,Math.floor(t.bass*2.5)):0);for(let t=0;t<e;t++)this.spawnOne(I.x+(Math.random()-.5)*.25,I.y+(Math.random()-.5)*.25,I.z+(Math.random()-.5)*.25,(()=>{let e=Math.random();return e<.18?.055+Math.random()*.055:e>.93?.2+Math.random()*.12:.1+Math.random()*.12})())}for(let m=0;m<j;m++){let h=n[m];if(!h.alive){c.set(0,-10,0),l.identity(),u.set(1e-4,1e-4,1e-4),r.setMatrixAt(m,d.compose(c,l,u)),i.array[m]=1e-4,a.array[m]=0,o.array[m*3]=0,o.array[m*3+1]=0,o.array[m*3+2]=0;continue}let[g,_,v]=this.sampleVel(h.px,h.py,h.pz),y=Math.tan(s.degToRad(p.fov)*.5),b=p.position.z-h.pz,x=p.position.y-b*y,S=p.position.y+b*y,C=1.6;if(!h.grounded){if(h.settled)h.vx*=.98,h.vz*=.98;else{h.vx+=((g-h.vx)*C+1.6)*e,h.vz+=(v-h.vz)*C*e,h.vx<1.1&&(h.vx=1.1);let n=t.vortex??t.mid,r=h.px*.72-this.simTime*(.75+t.mid*.9),i=h.py*.95+this.simTime*.55+h.pz*.32,a=Math.sin(r+h.pz*.9)*Math.cos(i)*n,o=Math.cos(r*.85-h.py*.7)*n,s=-h.pz*.22*n,c=(h.py-1.6)*.24*n;h.vx+=(s+Math.sin(i)*.32*n)*e,h.vy+=(a*1.15+t.bass*.42*this.settings.bassStrength)*e,h.vz+=(o*.85+c)*e;let l=h.px-this.mousePosition.x,u=h.py-this.mousePosition.y,d=l*l+u*u,f=1.25,p=Math.exp(-d/(f*f));if(p>.001){let t=1/Math.sqrt(Math.max(d,.001)),n=this.settings.mouseDisturbanceStrength;h.vx+=l*t*p*8*n*e,h.vy+=u*t*p*8*n*e;let r=this.mouseVelocity.length();h.vx+=-u*t*p*r*10*n*e,h.vy+=l*t*p*r*10*n*e}let m=(t.shockwave||0)*this.settings.shockwaveStrength;if(m>.001){let t=h.px- -.8,n=h.py-1.55,r=h.pz-0,i=t*t+n*n+r*r+.18,a=1/Math.sqrt(i),o=m*Math.exp(-i/10)*4.2;h.vx+=t*a*o*e,h.vy+=n*a*o*e,h.vz+=r*a*o*e}h.vx+=Math.sin(this.simTime*.72+h.phase*6.2831)*.16*e,h.vz+=Math.cos(this.simTime*.58+h.phase*6.2831)*.2*e,h.vy+=Math.sin(this.simTime*.82+h.phase*6.2831)*.18*e}if(h.buoy<0)h.vy-=.6*e;else{let t=S-.8-h.phase*2;h.py>t?h.vy+=(0-h.vy)*2*e:h.vy+=(.15-h.vy)*1*e}}h.grounded&&(h.vx=h.vx*.95+.006,h.vz*=.9),h.px+=h.vx*e,h.py+=h.vy*e,h.pz+=h.vz*e,h.life-=e;let w=5.6,T=1;if(h.py<x+h.radius&&(h.py=x+h.radius,h.settled=!0,h.vy<-.2?(h.vy=Math.abs(h.vy)*.65,h.grounded=!1):(h.vy=0,h.grounded=!h.hero,h.hero&&(h.vy=.22+Math.abs(Math.sin(h.phase*12))*.16),h.vx*=.9,h.life<6&&(h.life=6))),h.grounded&&t.beatPulse>.3&&Math.random()<.04&&(h.vy=.5+t.beatPulse*1.5,h.grounded=!1),h.py>S+3){h.alive=!1;continue}if(h.px>w-1.5&&(T=Math.max(0,(w-h.px)/1.5)),h.px>w+h.radius){h.alive=!1;continue}if(h.px<-6.6){h.alive=!1;continue}if(h.pz>2.5&&(h.pz=2.5,h.vz*=-.5),h.pz<-2.5&&(h.pz=-2.5,h.vz*=-.5),h.life<=0){h.alive=!1;continue}h.hue+=h.hueSpeed*e,h.hue>1?--h.hue:h.hue<0&&(h.hue+=1),h.updateColor();let E=.012*Math.sin(h.phase*20+performance.now()*.0011),D=(t.fieldBreath||0)*(.012+.006*Math.sin(h.phase*9+this.simTime)),O=(t.shockwave||0)*.008,k=h.hero?.015*Math.sin(this.simTime*.8+h.phase*10):0,A=1+E+D+O+k,j=(performance.now()-h.born)*.001,M=Math.min(1,j/.8);M=M*M*(3-2*M),c.set(h.px,h.py,h.pz),l.setFromAxisAngle(f,h.phase*Math.PI*2+performance.now()*4e-4);let N=h.radius*A*this.settings.bubbleScale*M*T;u.set(N,N,N),r.setMatrixAt(m,d.compose(c,l,u)),i.array[m]=N,a.array[m]=M*T,o.array[m*3]=h.cr,o.array[m*3+1]=h.cg,o.array[m*3+2]=h.cb}i.needsUpdate=!0,a.needsUpdate=!0,o.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0}syncParams(){let e=this.settings;if(this.bloomPass&&(this.bloomPass.enabled=e.bloomEnabled,this.bloomPass.strength=e.bloomStrength,this.bloomPass.radius=e.bloomRadius,this.bloomPass.threshold=e.bloomThreshold),!this.bubbleMat)return;let t=this.bubbleMat.uniforms;t.uFresnelPower.value=e.fresnelPower,t.uAlpha.value=e.bubbleOpacity,t.uInnerGlow.value=e.innerGlow,t.uHueShift.value=e.hueShift*Math.PI/180,t.uSaturation.value=e.saturation,t.uBrightness.value=e.brightness,t.uColorMix.value=e.colorMix,t.uHueVariation.value=e.hueVariation}setupGUI(){this.guiContainer=E(`Animation58-gui-container`),D(`Animation58-gui-container`),document.body.appendChild(this.guiContainer),this.gui=new C({title:`音波幻泡`,container:this.guiContainer});let e=this.settings,t=this.gui.addFolder(`Bloom 辉光`);t.add(e,`bloomEnabled`).name(`启用辉光`),t.add(e,`bloomStrength`,0,1,.01).name(`bloom强度`),t.add(e,`bloomRadius`,0,1,.01).name(`bloom半径`),t.add(e,`bloomThreshold`,0,1,.01).name(`bloom阈值`),t.open();let n=this.gui.addFolder(`泡泡参数`);n.add(e,`filmThickness`,100,1200,10).name(`薄膜厚度`),n.add(e,`filmStrength`,0,2,.01).name(`薄膜强度`),n.add(e,`fresnelPower`,.2,8,.1).name(`边缘锐度`),n.add(e,`bubbleOpacity`,.2,1,.01).name(`泡泡不透明度`),n.add(e,`innerGlow`,0,.5,.01).name(`内芯亮度`),n.add(e,`bubbleScale`,.2,3,.01).name(`气泡大小`),n.add(e,`mouseDisturbanceStrength`,0,3,.05).name(`鼠标扰动强度`),n.open();let r=this.gui.addFolder(`颜色控制`);r.add(e,`hueShift`,0,360,1).name(`色相偏移(度)`),r.add(e,`saturation`,0,2,.01).name(`饱和度`),r.add(e,`brightness`,.3,1.5,.01).name(`亮度`),r.add(e,`colorMix`,0,.4,.01).name(`个体色差`),r.add(e,`colorResponse`,0,2.5,.05).name(`音频颜色响应`),r.add(e,`hueVariation`,0,2,.05).name(`色相变化范围`),r.open();let i=this.gui.addFolder(`音频映射`);i.add(e,`bassStrength`,0,2,.05).name(`低音→吹泡/流场`),i.add(e,`midStrength`,0,2,.05).name(`中音→流场`),i.add(e,`highStrength`,0,2,.05).name(`高音→膜流动`),i.add(e,`brightnessStrength`,0,2,.05).name(`质心→冷暖`),i.add(e,`kickForce`,0,2,.05).name(`底鼓→爆发`),i.add(e,`snareStrength`,0,2,.05).name(`军鼓→闪烁`),i.add(e,`hihatStrength`,0,2,.05).name(`踩镲→细泡`),i.add(e,`smooth`,0,.95,.01).name(`音频平滑`);let a=this.gui.addFolder(`V2 音乐空间编排`);a.add(e,`fieldBreath`,0,2,.05).name(`低音→全场呼吸`),a.add(e,`vortexStrength`,0,2.5,.05).name(`中音→群体旋流`),a.add(e,`shockwaveStrength`,0,2.5,.05).name(`底鼓→空间冲击`),a.add(e,`heroAmount`,0,2,.05).name(`高潮→Hero泡泡`),a.add(e,`chromaFlow`,0,2.5,.05).name(`高音→虹彩流速`),a.open(),this.gui.hide()}setupSettingsButton(){this.settingsButton=w(`Animation58-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}render(){if(!this._isReady||!this.composer)return;let e=performance.now()*.001,t=this.lastTime>0?Math.min(.05,e-this.lastTime):.016;for(this.lastTime=e,this.acc+=t,this.syncParams(),this.updateAudioAnalysis(t);this.acc>=L;)this.simTime+=L,this.fluidStep(L,this.audio,this.pool,this.simTime),this.bubbleStep(L,this.audio),this.acc-=L;let n=this.bubbleMat.uniforms;n.uTime.value=e;let r=this.settings.colorResponse;n.uBass.value=Math.min(1,this.audio.bass*r),n.uMid.value=Math.min(1,this.audio.mid*r),n.uHigh.value=Math.min(1,this.audio.high*r),n.uMidMotion.value=Math.min(1,this.audio.mid*this.settings.midStrength),n.uHighFlow.value=Math.min(1,this.audio.high*this.settings.highStrength),n.uBeat.value=Math.min(this.beatVal,1.2),n.uFieldBreath.value=Math.min(this.fieldBreath,1.5),n.uShockwave.value=Math.min(this.shockwave*this.settings.shockwaveStrength,1.5),n.uChromaFlow.value=this.settings.chromaFlow,n.uAudioShift.value=(this.audioBrightness-.5)*1.8*this.settings.brightnessStrength,n.uFilmStrength.value=this.settings.filmStrength+this.audio.snare*.3*this.settings.snareStrength,n.uFilmThickness.value=this.settings.filmThickness+this.audio.high*80*this.settings.highStrength+this.audio.snare*30*this.settings.snareStrength,this.bgScene.background=this.scene.background,this.renderer.setRenderTarget(this.bgRT),this.renderer.render(this.bgScene,this.camera),this.renderer.setRenderTarget(null),this.composer.render()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.bgRT&&this.bgRT.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight),this.bloomPass&&this.bloomPass.setSize(window.innerWidth,window.innerHeight)}resetState(){this.bass=0,this.mid=0,this.high=0,this.audioBrightness=.5,this.kickVal=0,this.snareVal=0,this.hihatVal=0,this.beatVal=0,this.kickEngine=0,this.snareEngine=0,this.hihatEngine=0,this.beatEngine=0,this.lastKickE=0,this.lastHihatE=0,this.burstCooldown=0,this.hihatCooldown=0,this.fieldBreath=0,this.shockwave=0,this.vortexPulse=0,this.heroCooldown=0,this.heroEnergy=0,this.lastBassForHero=0,this.hasAudioData=!1,this.audio={bass:0,mid:0,high:0,beatPulse:0,snare:0,fieldBreath:0,vortex:0,shockwave:0},this.simTime=0,this.acc=0,this.lastTime=0,this.ux.fill(0),this.uy.fill(0),this.uz.fill(0),this.ux2.fill(0),this.uy2.fill(0),this.uz2.fill(0),this.div.fill(0),this.p.fill(0),this.pn.fill(0),this.clearBubbles()}updateSettings(e){Object.assign(this.settings,e),this.syncParams()}dispose(){this.canvas.removeEventListener(`pointermove`,this.mouseMoveHandler),this.canvas.removeEventListener(`pointerleave`,this.mouseLeaveHandler),T(this.settingsButton,this.guiContainer,this.gui),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())}),this.bgScene&&this.bgScene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.bgRT&&this.bgRT.dispose(),this.bubbleGeo&&this.bubbleGeo.dispose(),this.bubbleMat&&this.bubbleMat.dispose(),this.nebulaMat&&this.nebulaMat.dispose(),this.composer&&this.composer.dispose&&this.composer.dispose(),this.renderer&&this.renderer.dispose(),this._isReady=!1,console.log(`✅ Animation58 资源已清理`)}};export{V as default};