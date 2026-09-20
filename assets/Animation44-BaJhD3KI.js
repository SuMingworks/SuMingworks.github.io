import{Dr as e,Gt as t,Kt as n,St as r,Vt as i,Xn as a,Zn as o,ct as s,g as c,l,r as u,u as d,vt as f}from"./three.module-TVF63cYk.js";import{n as p,r as m,t as h}from"./OutputPass-CxDAHfy4.js";import{a as g,i as _,n as v,r as y,t as b}from"./GUIHelper-DNd0uFVI.js";import{t as x}from"./UnrealBloomPass-C17ZlHgr.js";import{t as S}from"./OrbitControls-Ju8LL-qO.js";import{a as C,r as w}from"./PerceptualColor-DS_Cacs7.js";var T=(e=!1)=>({blending:5,blendEquation:100,blendSrc:e?201:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:e?200:201,blendDstAlpha:e?201:205,premultipliedAlpha:e}),E=e=>Object.assign(e.blendMaterial,T(!0)),D=class{constructor(e,t={}){this.canvas=e;let n={b:.19,dt:.05,bloomStrength:.35,bloomRadius:.1,bloomThreshold:.3,autoRotateSpeed:1.5,breatheAmplitude:.03,waveAmplitude:.05,audioDriven:!0,shapeAudioEnabled:!0,shapeSmoothness:.65,structureSensitivity:.018,bassScaleSensitivity:.35,motionTurbulenceSensitivity:.15,baseColor:`#9b6cff`,sparkleColor:`#f2d9ff`,colorSpeed:2,saturationRange:1.05,hueRange:50,lowColorWeight:.8,midColorWeight:.9,highColorWeight:1,brightnessHueSensitivity:90,energyColorSensitivity:1,colorRibbonStrength:.65,bloomHighSensitivity:.12,autoRotate:!1,particleBrightness:1.1,lineOpacity:.82,beatSensitivity:1.4,variationRotateSensitivity:.5};this.settings={...n,...t},this.settings.hueRange>90&&(this.settings.hueRange=n.hueRange),this.defaultSettings={...n},this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.line=null,this.glowLine=null,this.geometry=null,this.material=null,this.glowMaterial=null,this.stars=null,this.basePositions=null,this.baseColors=null,this.radialDistances=null,this.smoothState={b:this.settings.b},this.POINTS_COUNT=6e4,this.audioEnergy={bass:0,mid:0,high:0,amplitude:0},this.isAudioPlaying=!1,this.hasAudioData=!1,this.audioFeature=null,this.audioTargets={bass:0,mid:0,high:0,energy:0,motion:0,brightness:0,texture:0,smoothness:0,kick:0,snare:0,hihat:0},this.audioVisual={...this.audioTargets},this._lastAudioTime=null,this._lastKickInput=0,this._lastSnareInput=0,this._lastDownbeatInput=!1,this._adaptiveLevels={bass:{peak:.18},mid:{peak:.18},high:{peak:.18},energy:{peak:.18}},this._kickProgress=1,this._snareProgress=1,this._downbeatProgress=1,this._downbeatEnvelope=0,this._bloomEnvelope=this.settings.bloomStrength,this._lastAttractorUpdate=0,this._lastComputedB=this.settings.b,this._time=0,this._isReady=!1,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.time=0,this.sparkles=null,this.sparkleGeometry=null,this.sparkleMaterial=null,this.settingsButton=null,this._lastFrameTime=-1,this.DEFAULT_CAM_POS={x:5.16,y:-11.5,z:5.05},this.DEFAULT_TARGET={x:-.19,y:.04,z:.32},this.init(),this._isReady=!0}computeAttractor(e,t){let n=new Float32Array(this.POINTS_COUNT*3),r=new Float32Array(this.POINTS_COUNT*3),i=new Float32Array(this.POINTS_COUNT),a=1,o=.1,s=.1,c=w(this.settings.baseColor);for(let l=0;l<this.POINTS_COUNT;l++){let u=(Math.sin(o)-e*a)*t,d=(Math.sin(s)-e*o)*t,f=(Math.sin(a)-e*s)*t;a+=u,o+=d,s+=f,n[l*3]=a,n[l*3+1]=o,n[l*3+2]=s,i[l]=Math.sqrt(a*a+o*o+s*s);let p=(a*20+o*15+s*10+360)%360,m=.7+Math.sin(a*.6)*.2,h=.45+Math.sin(o*.5)*.2,g=C(c+p/360,Math.min(1,m),Math.min(1,h));r[l*3]=g[0],r[l*3+1]=g[1],r[l*3+2]=g[2]}return{positions:n,colors:r,radialDistances:i}}init(){try{return this.setupThreeJS(),this.computeInitialData(),this.createMaterial(),this.createParticleSystem(),this.createSparkleSystem(),this.createBackgroundStars(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),this.resizeHandler=()=>this.onWindowResize(),window.addEventListener(`resize`,this.resizeHandler),console.log(`✅ Animation44 初始化成功`),!0}catch(e){throw console.error(`❌ Animation44 初始化失败:`,e),e}}setupThreeJS(){this.scene=new a,this.camera=new i(45,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(this.DEFAULT_CAM_POS.x,this.DEFAULT_CAM_POS.y,this.DEFAULT_CAM_POS.z),this.renderer=new u({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=f,this.canvas.style.backgroundColor=`transparent`,this.canvas.style.zIndex=`1`,this.controls=new S(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.autoRotate=this.settings.autoRotate,this.controls.autoRotateSpeed=this.settings.autoRotateSpeed,this.controls.target.set(this.DEFAULT_TARGET.x,this.DEFAULT_TARGET.y,this.DEFAULT_TARGET.z),this.controls.update()}computeInitialData(){let e=this.computeAttractor(this.settings.b,this.settings.dt);this.basePositions=e.positions,this.baseColors=e.colors,this.radialDistances=e.radialDistances}createMaterial(){this.material=new o({uniforms:{uTime:{value:0},uBreathe:{value:this.settings.breatheAmplitude},uWave:{value:this.settings.waveAmplitude},uBrightness:{value:1},uOpacity:{value:this.settings.lineOpacity},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uMotion:{value:0},uEnergy:{value:0},uAudioBrightness:{value:0},uHueRange:{value:this.settings.hueRange/360},uSaturationRange:{value:this.settings.saturationRange},uLowWeight:{value:this.settings.lowColorWeight},uMidWeight:{value:this.settings.midColorWeight},uHighWeight:{value:this.settings.highColorWeight},uTexture:{value:0},uSmoothness:{value:.5},uRibbonStrength:{value:this.settings.colorRibbonStrength},uKick:{value:0},uSnare:{value:0},uDownbeat:{value:0},uKickProgress:{value:1},uSnareProgress:{value:1},uDownbeatProgress:{value:1}},vertexShader:`
            uniform float uTime;
            uniform float uBreathe;
            uniform float uWave;
            uniform float uBass;
            uniform float uMid;
            uniform float uMotion;
            uniform float uKick;
            uniform float uSnare;
            uniform float uDownbeat;
            uniform float uKickProgress;
            uniform float uSnareProgress;
            uniform float uDownbeatProgress;
            attribute float pathProgress;
            attribute vec3 color;
            varying vec3 vColor;
            varying float vPath;
            varying float vPulse;
            varying float vKickPulse;
            varying float vSnarePulse;
            varying float vDownbeatPulse;
            void main() {
                vColor = color;
                vPath = pathProgress;
                vec3 pos = position;

                // Bass 只负责整体呼吸；Mid 负责缠绕扭转；Motion 负责局部湍流。
                float breathe = 1.0 + uBreathe * sin(uTime * 0.15) + uBass * 0.22;
                pos *= breathe;
                float twist = uMid * 0.22 * sin(pathProgress * 18.8496 + uTime * 0.8);
                float tc = cos(twist), ts = sin(twist);
                pos.xy = mat2(tc, -ts, ts, tc) * pos.xy;
                float turbulence = uMotion * (0.08 + 0.04 * length(pos));
                pos += vec3(
                    sin(pathProgress * 91.0 + uTime * 1.7),
                    cos(pathProgress * 73.0 + uTime * 1.3),
                    sin(pathProgress * 57.0 - uTime * 1.5)
                ) * turbulence;
                float wave = sin(uTime * 0.3 + pos.z * 2.0) * uWave;
                pos.x += wave;
                pos.y += wave;

                float kickPulse = exp(-pow((pathProgress - uKickProgress) / 0.045, 2.0)) * uKick;
                float snarePulse = exp(-pow((pathProgress - uSnareProgress) / 0.075, 2.0)) * uSnare;
                float downbeatPulse = exp(-pow((pathProgress - uDownbeatProgress) / 0.13, 2.0)) * uDownbeat;
                vPulse = kickPulse + snarePulse * 0.75 + downbeatPulse * 1.15;
                vKickPulse = kickPulse;
                vSnarePulse = snarePulse;
                vDownbeatPulse = downbeatPulse;
                pos += normalize(pos + 0.001) * (kickPulse * 0.18 + downbeatPulse * 0.25);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform float uBrightness;
            uniform float uOpacity;
            uniform float uEnergy;
            uniform float uAudioBrightness;
            uniform float uBass;
            uniform float uMid;
            uniform float uHigh;
            uniform float uHueRange;
            uniform float uSaturationRange;
            uniform float uLowWeight;
            uniform float uMidWeight;
            uniform float uHighWeight;
            uniform float uTexture;
            uniform float uSmoothness;
            uniform float uRibbonStrength;
            varying vec3 vColor;
            varying float vPath;
            varying float vPulse;
            varying float vKickPulse;
            varying float vSnarePulse;
            varying float vDownbeatPulse;

            vec3 hsv2rgb(vec3 c) {
                vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
                vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
                return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
            }
            void main() {
                // Texture 增加路径色带密度；Smoothness 控制色带边界的柔和程度。
                float density = mix(3.0, 9.0, clamp(uTexture, 0.0, 1.0));
                float rawBand = 0.5 + 0.5 * sin(vPath * 6.28318 * density + uTime * (0.22 + uMid * 0.35));
                float edge = mix(0.12, 0.46, clamp(uSmoothness, 0.0, 1.0));
                float flow = smoothstep(0.5 - edge, 0.5 + edge, rawBand);

                // 音色亮度决定主色相，各频段以不同方向推移色相；GUI 权重直接控制贡献。
                float bandHue = uBass * uLowWeight * -0.12
                    + uMid * uMidWeight * 0.08
                    + uHigh * uHighWeight * 0.2;
                float baseHue = fract(0.62 + uTime * 0.012 + uAudioBrightness * 0.16 + bandHue);
                float hueSpread = clamp(uHueRange, 0.0, 1.0);
                // 用连续的空间层次形成同色系丝线差异，避免离散彩虹分段。
                float strandLayer = clamp(dot(vColor, vec3(0.42, 0.36, 0.22)), 0.0, 1.0);
                float identityOffset = (strandLayer - 0.5) * hueSpread;
                float pathHue = fract(baseHue + identityOffset);
                float saturation = clamp((0.7 + uEnergy * 0.22 + uTexture * 0.1) * uSaturationRange, 0.0, 1.0);
                float value = 0.7 + strandLayer * 0.16 + uEnergy * 0.13 + uHigh * 0.08;
                vec3 color = hsv2rgb(vec3(pathHue, saturation, value));

                // 一条相邻色高光沿路径流动，强化节奏但不破坏整体配色统一性。
                float ribbon = pow(flow, mix(2.8, 1.6, clamp(uSmoothness, 0.0, 1.0)));
                vec3 ribbonColor = hsv2rgb(vec3(fract(baseHue + hueSpread * 0.65), saturation * 0.82, 1.0));
                float ribbonAmount = ribbon * (0.08 + uEnergy * 0.1 + uTexture * 0.07) * uRibbonStrength;
                color = mix(color, ribbonColor, clamp(ribbonAmount, 0.0, 0.55));

                // 瞬态事件形成短促的互补色脉冲，不锁定整体配色。
                vec3 kickColor = hsv2rgb(vec3(fract(baseHue + 0.5), saturation * 0.88, 1.0));
                vec3 snareColor = hsv2rgb(vec3(fract(baseHue + 0.22), saturation * 0.72, 1.0));
                color = mix(color, kickColor, clamp(vKickPulse * 0.62, 0.0, 0.58));
                color = mix(color, snareColor, clamp(vSnarePulse * 0.68, 0.0, 0.62));
                color = mix(color, vec3(1.0), clamp(vDownbeatPulse * 0.52, 0.0, 0.5));
                color *= 0.72 + uEnergy * 0.24 + uAudioBrightness * 0.08 + vPulse * 0.34;
                gl_FragColor = vec4(color * uBrightness, clamp(uOpacity + vPulse * 0.12, 0.0, 0.95));
            }
        `,transparent:!0,depthWrite:!1,blending:1}),this.glowMaterial=this.material.clone(),Object.assign(this.glowMaterial,T()),this.glowMaterial.uniforms.uBrightness.value=.42,this.glowMaterial.uniforms.uOpacity.value=.13}createParticleSystem(){this.geometry&&this.geometry.dispose(),this.geometry=new d,this.geometry.setAttribute(`position`,new l(this.basePositions.slice(),3)),this.geometry.setAttribute(`color`,new l(this.baseColors.slice(),3));let e=new Float32Array(this.POINTS_COUNT);for(let t=0;t<this.POINTS_COUNT;t++)e[t]=t/(this.POINTS_COUNT-1);this.geometry.setAttribute(`pathProgress`,new l(e,1)),this.line?(this.line.geometry=this.geometry,this.glowLine&&(this.glowLine.geometry=this.geometry)):(this.line=new s(this.geometry,this.material),this.scene.add(this.line),this.glowLine=new s(this.geometry,this.glowMaterial),this.glowLine.scale.setScalar(1.006),this.glowLine.renderOrder=-1,this.scene.add(this.glowLine))}createSparkleSystem(){let e=3e3,n=new Float32Array(e*3),r=new Float32Array(e),i=new Float32Array(e),a=new Uint32Array(e);for(let t=0;t<e;t++){let o=Math.floor(t*(this.POINTS_COUNT-1)/(e-1));a[t]=o,n[t*3]=this.basePositions[o*3],n[t*3+1]=this.basePositions[o*3+1],n[t*3+2]=this.basePositions[o*3+2],r[t]=Math.random(),i[t]=o/(this.POINTS_COUNT-1)}this.sparkleSourceIndices=a,this.sparkleGeometry=new d,this.sparkleGeometry.setAttribute(`position`,new l(n,3)),this.sparkleGeometry.setAttribute(`seed`,new l(r,1)),this.sparkleGeometry.setAttribute(`pathProgress`,new l(i,1)),this.sparkleMaterial=new o({uniforms:{uHihat:{value:0},uHigh:{value:0},uBass:{value:0},uMid:{value:0},uMotion:{value:0},uTime:{value:0},uColor:{value:new c(.78,.9,1)}},vertexShader:`
                attribute float seed;
                attribute float pathProgress;
                uniform float uHihat;
                uniform float uHigh;
                uniform float uBass;
                uniform float uMid;
                uniform float uMotion;
                uniform float uTime;
                varying float vAlpha;
                void main() {
                    // 每个闪点有独立周期：瞬时点亮、快速衰减，避免整批随机跳变。
                    float phase = fract(uTime * (7.0 + seed * 6.0) + seed * 11.73);
                    float life = pow(max(0.0, 1.0 - phase), 11.0);
                    float density = step(0.58, fract(seed * 37.17));
                    float sparkle = life * density * uHihat;
                    vec3 pos = position * (1.0 + uBass * 0.22);
                    float twist = uMid * 0.22 * sin(pathProgress * 18.8496 + uTime * 0.8);
                    float tc = cos(twist), ts = sin(twist);
                    pos.xy = mat2(tc, -ts, ts, tc) * pos.xy;
                    pos += vec3(
                        sin(pathProgress * 91.0 + uTime * 1.7),
                        cos(pathProgress * 73.0 + uTime * 1.3),
                        sin(pathProgress * 57.0 - uTime * 1.5)
                    ) * uMotion * (0.08 + 0.04 * length(pos));
                    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
                    float viewZ = max(-mv.z, 0.1);
                    // 静音时完全隐藏闪点；限制尺寸，避免接近相机时形成巨大亮斑。
                    gl_PointSize = clamp((0.5 + uHigh * 0.8 + sparkle * 2.2) * (55.0 / viewZ), 0.5, 5.0);
                    vAlpha = uHigh * 0.025 + sparkle * 0.48;
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                varying float vAlpha;
                uniform vec3 uColor;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    float glow = 1.0 - smoothstep(0.05, 0.5, d);
                    gl_FragColor = vec4(uColor, glow * vAlpha);
                }
            `,transparent:!0,depthWrite:!1,...T()}),this.sparkles=new t(this.sparkleGeometry,this.sparkleMaterial),this.scene.add(this.sparkles)}createBackgroundStars(){let e=new d,r=new Float32Array(600*3);for(let e=0;e<600;e++)r[e*3]=(Math.random()-.5)*200,r[e*3+1]=(Math.random()-.5)*200,r[e*3+2]=(Math.random()-.5)*200-20;e.setAttribute(`position`,new l(r,3));let i=new n({color:5601177,size:.12,transparent:!0,opacity:.25,...T()});this.stars=new t(e,i),this.scene.add(this.stars)}setupPostProcessing(){this.composer=new m(this.renderer);let t=new p(this.scene,this.camera);this.composer.addPass(t),this.bloomPass=new x(new e(window.innerWidth,window.innerHeight),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold),this.composer.addPass(this.bloomPass),E(this.bloomPass),this.composer.addPass(new h)}updateParticles(){let e=this.geometry.attributes.position,t=e.array,n=this.audioVisual.mid,i=this.audioFeature,a=this.settings.audioDriven&&this.settings.shapeAudioEnabled&&this.isAudioPlaying&&i,o=r.clamp(n,0,1)**.72,s=r.clamp((i?.motion||0)*2.2,0,1)**.7,c=r.clamp((i?.variation||0)*8,0,1),l=r.clamp(i?.energyTrend||0,-1,1),u=r.clamp((i?.kick||0)*.12+(i?.downbeat||0)*.16,0,.3),d=r.clamp(o*.62+s*.2+c*.12+l*.1+u,0,1.25),f=this.settings.b+(a?d*this.settings.structureSensitivity:0),p=r.clamp(f,.05,Math.max(.4,this.settings.b)),m=1-Math.exp(-.083/(.08+this.settings.shapeSmoothness*.65));this.smoothState.b+=(p-this.smoothState.b)*m;let h=this.smoothState.b;if(Math.abs(h-this._lastComputedB)<1e-4)return;this._lastComputedB=h;let g=1,_=.1,v=.1,y=this.settings.dt;for(let e=0;e<this.POINTS_COUNT;e++){let n=(Math.sin(_)-h*g)*y,r=(Math.sin(v)-h*_)*y,i=(Math.sin(g)-h*v)*y;g+=n,_+=r,v+=i;let a=e*3;t[a]=g,t[a+1]=_,t[a+2]=v}if(e.needsUpdate=!0,this.sparkleGeometry&&this.sparkleSourceIndices){let e=this.sparkleGeometry.attributes.position.array;for(let n=0;n<this.sparkleSourceIndices.length;n++){let r=this.sparkleSourceIndices[n]*3;e[n*3]=t[r],e[n*3+1]=t[r+1],e[n*3+2]=t[r+2]}this.sparkleGeometry.attributes.position.needsUpdate=!0}}resetParticles(){let e=this.computeAttractor(this.settings.b,this.settings.dt);this.basePositions.set(e.positions),this.baseColors.set(e.colors),this.radialDistances.set(e.radialDistances),this.smoothState.b=this.settings.b;let t=this.geometry.attributes.position,n=this.geometry.attributes.color;if(t.array.set(this.basePositions),n.array.set(this.baseColors),t.needsUpdate=!0,n.needsUpdate=!0,this._lastComputedB=this.settings.b,this.sparkleGeometry&&this.sparkleSourceIndices){let e=this.sparkleGeometry.attributes.position.array;for(let t=0;t<this.sparkleSourceIndices.length;t++){let n=this.sparkleSourceIndices[t]*3;e[t*3]=this.basePositions[n],e[t*3+1]=this.basePositions[n+1],e[t*3+2]=this.basePositions[n+2]}this.sparkleGeometry.attributes.position.needsUpdate=!0}}updateLineColors(){if(!this.geometry||!this.basePositions)return;let e=this.geometry.attributes.color.array,t=w(this.settings.baseColor);for(let n=0;n<this.POINTS_COUNT;n++){let r=n*3,i=this.basePositions[r],a=this.basePositions[r+1],o=this.basePositions[r+2],s=(i*20+a*15+o*10+360)%360,c=.7+Math.sin(i*.6)*.2,l=.45+Math.sin(a*.5)*.2,u=C(t+s/360,Math.min(1,c),Math.min(1,l));e[r]=u[0],e[r+1]=u[1],e[r+2]=u[2]}this.baseColors.set(e),this.geometry.attributes.color.needsUpdate=!0}setupGUI(){this.createGUIContainer(),this.gui=new g({container:this.guiContainer,title:`流光缠丝`}),this.gui.add(this.settings,`audioDriven`).name(`🎧 音频驱动总开关`);let e=this.gui.addFolder(`吸引子参数 (Thomas)`);e.add(this.settings,`b`,.05,.5,.01).name(`b (耗散系数)`).onChange(()=>this.resetParticles()),e.add(this.settings,`dt`,.01,.15,.005).name(`积分步长`).onChange(()=>this.resetParticles()),e.open();let t=this.gui.addFolder(`🎵 形状驱动 · 综合响应`);t.add(this.settings,`shapeAudioEnabled`).name(`启用音频驱动形状`),t.add(this.settings,`shapeSmoothness`,.5,.99,.01).name(`结构响应平滑`),t.add(this.settings,`structureSensitivity`,0,.035,.001).name(`综合结构幅度`),t.add(this.settings,`bassScaleSensitivity`,0,.5,.01).name(`低频整体缩放`),t.add(this.settings,`motionTurbulenceSensitivity`,0,.5,.01).name(`Motion 丝线湍流`),t.open();let n=this.gui.addFolder(`🎨 颜色驱动 · 快速`);n.addColor(this.settings,`baseColor`).name(`主丝线颜色`).onChange(()=>this.updateLineColors()),n.addColor(this.settings,`sparkleColor`).name(`闪烁层颜色`),n.add(this.settings,`colorSpeed`,0,3,.1).name(`主色漂移速度`),n.add(this.settings,`saturationRange`,0,1.5,.01).name(`整体饱和度`),n.add(this.settings,`hueRange`,0,90,2).name(`丝线色差`),n.add(this.settings,`brightnessHueSensitivity`,0,180,5).name(`音色变色幅度`),n.add(this.settings,`energyColorSensitivity`,0,1.5,.05).name(`音量色彩强度`),n.add(this.settings,`lowColorWeight`,0,1.5,.01).name(`低频染色`),n.add(this.settings,`midColorWeight`,0,1.5,.01).name(`中频染色`),n.add(this.settings,`highColorWeight`,0,1.5,.01).name(`高频染色`),n.add(this.settings,`colorRibbonStrength`,0,1.5,.05).name(`流动色带强度`),n.add(this.settings,`beatSensitivity`,0,2.5,.1).name(`Kick 脉冲灵敏度`),n.open();let r=this.gui.addFolder(`🔄 动态变形`);r.add(this.settings,`breatheAmplitude`,0,.1,.005).name(`呼吸幅度`).onChange(e=>{this.material.uniforms.uBreathe.value=e}),r.add(this.settings,`waveAmplitude`,0,.2,.005).name(`波动幅度`).onChange(e=>{this.material.uniforms.uWave.value=e}),r.open();let i=this.gui.addFolder(`视觉效果`);i.add(this.settings,`bloomStrength`,0,1.5,.01).name(`bloom强度`).onChange(e=>{this.bloomPass.strength=e,this._bloomEnvelope=e}),i.add(this.settings,`bloomRadius`,0,.8,.01).name(`bloom半径`).onChange(e=>{this.bloomPass.radius=e}),i.add(this.settings,`bloomThreshold`,0,1,.02).name(`bloom阈值`).onChange(e=>{this.bloomPass.threshold=e}),i.add(this.settings,`bloomHighSensitivity`,0,.5,.01).name(`光晕 ← 高频`),i.add(this.settings,`particleBrightness`,.1,1.5,.05).name(`丝线亮度`).onChange(e=>{this.material&&(this.material.uniforms.uBrightness.value=e)}),i.add(this.settings,`lineOpacity`,.2,1,.02).name(`丝线透明度`).onChange(e=>{this.material&&(this.material.uniforms.uOpacity.value=e)}),i.open();let a=this.gui.addFolder(`🔄 旋转控制`);a.add(this.controls,`autoRotate`).name(`自动旋转`),a.add(this.settings,`autoRotateSpeed`,0,5,.1).name(`旋转速度`).onChange(e=>{this.controls.autoRotateSpeed=e}),a.add(this.settings,`variationRotateSensitivity`,0,2,.1).name(`旋转 ← 音乐变化`),a.open(),this.gui.hide()}createGUIContainer(){this.guiContainer=y(`Animation44-gui-container`),b(`Animation44-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=_(`Animation44-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer&&this.composer.setSize(e,t)}updateEnvelope(e,t,n,r,i){let a=t>e?r:i;return e+(t-e)*(1-Math.exp(-n/Math.max(a,.001)))}normalizeAudioLevel(e,t,n){let i=r.clamp(Number.isFinite(e)?e:0,0,2),a=this._adaptiveLevels[t];return a.peak=Math.max(i,a.peak*Math.exp(-n/3.2),.12),i<.012?0:r.clamp((i-.012)/Math.max(.08,a.peak*.88),0,1.25)**.82}updateWithAudioData(e,t){if(t!==void 0&&(this._time=t),!e||e.isPlaying!==!0){this.hasAudioData=!1,this.isAudioPlaying=!1,this.audioFeature=null,this._lastAudioTime=null,this._lastDownbeatInput=!1;return}this.hasAudioData=!0;let n=Number.isFinite(t)?t*.001:performance.now()*.001,i=this._lastAudioTime===null?1/60:r.clamp(n-this._lastAudioTime,1/240,.1);this._lastAudioTime=n;let a=e.audioFeature?.animation,o=a?.bass||0,s=a?.mid||0,c=a?.high||0,l=a?.energy||0,u=this.normalizeAudioLevel(o,`bass`,i),d=this.normalizeAudioLevel(s,`mid`,i),f=this.normalizeAudioLevel(c,`high`,i),p=this.normalizeAudioLevel(l,`energy`,i),m=e.beat||{},h=a?a.kick||0:m.kick||0,g=a?a.snare||0:m.snare||0,_=a?a.hihat||0:m.hihat||0;Object.assign(this.audioTargets,{bass:u,mid:d,high:f,energy:p,motion:a&&a.motion||0,brightness:a&&a.brightness||0,texture:a&&a.texture||0,smoothness:a?a.smoothness??.5:.5,kick:h,snare:g,hihat:_});let v=this.audioVisual;v.bass=this.updateEnvelope(v.bass,u,i,.045,.42),v.mid=this.updateEnvelope(v.mid,d,i,.065,.32),v.high=this.updateEnvelope(v.high,f,i,.022,.14),v.energy=this.updateEnvelope(v.energy,p,i,.05,.36),v.motion=this.updateEnvelope(v.motion,this.audioTargets.motion,i,.05,.25),v.brightness=this.updateEnvelope(v.brightness,this.audioTargets.brightness,i,.06,.3),v.texture=this.updateEnvelope(v.texture,this.audioTargets.texture,i,.08,.35),v.smoothness=this.updateEnvelope(v.smoothness,this.audioTargets.smoothness,i,.1,.45),v.kick=this.updateEnvelope(v.kick,h,i,.008,.22),v.snare=this.updateEnvelope(v.snare,g,i,.008,.3),v.hihat=this.updateEnvelope(v.hihat,_,i,.004,.08);let y=this.settings.beatSensitivity>0?.5/this.settings.beatSensitivity:99;h>y&&this._lastKickInput<=y&&(this._kickProgress=0),g>.38&&this._lastSnareInput<=.38&&(this._snareProgress=0),this._lastKickInput=h,this._lastSnareInput=g;let b=!!a?.isDownbeat;b&&!this._lastDownbeatInput&&(this._downbeatProgress=0,this._downbeatEnvelope=Math.max(this._downbeatEnvelope,a.downbeat||h||.65)),this._lastDownbeatInput=b,this.audioEnergy.bass=v.bass,this.audioEnergy.mid=v.mid,this.audioEnergy.high=v.high,this.audioEnergy.amplitude=v.energy,this.audioFeature={energy:v.energy,bass:v.bass,mid:v.mid,high:v.high,motion:v.motion,brightness:v.brightness,texture:v.texture,smoothness:v.smoothness,variation:a&&a.variation||0,energyTrend:a&&a.energyTrend||0,kick:v.kick,snare:v.snare,hihat:v.hihat,downbeat:this._downbeatEnvelope},this.isAudioPlaying=!0}updateAudioData(){}setEffectMode(e){return console.log(`[Animation44] 模式: ${e}`),!0}render(){if(!this._isReady||!this.composer||!this.material)return;let e=this._time*.001,t=1/60;if(this._lastFrameTime>0&&e>0&&(t=r.clamp(e-this._lastFrameTime,1/240,.05),this.time+=t),this._lastFrameTime=e,!this.hasAudioData){let e=Math.exp(-t/.35);Object.keys(this.audioVisual).forEach(t=>{this.audioVisual[t]*=e}),this.audioEnergy.bass=this.audioVisual.bass,this.audioEnergy.mid=this.audioVisual.mid,this.audioEnergy.high=this.audioVisual.high,this.audioEnergy.amplitude=this.audioVisual.energy,this.audioEnergy.amplitude<.001&&(this.isAudioPlaying=!1,this.audioFeature=null)}let n=this.audioFeature,i=!!(this.settings.audioDriven&&this.isAudioPlaying&&n);this._kickProgress=Math.min(1,this._kickProgress+t*1.9),this._snareProgress=Math.min(1,this._snareProgress+t*1.45),this._downbeatProgress=Math.min(1,this._downbeatProgress+t*1.05),this._downbeatEnvelope*=Math.exp(-t/.38),(i||Math.abs(this.smoothState.b-this.settings.b)>=1e-4)&&this.time-this._lastAttractorUpdate>=1/12&&(this._lastAttractorUpdate=this.time,this.updateParticles());let a=this.settings.bloomStrength;i?(a=this.settings.bloomStrength+n.high*this.settings.bloomHighSensitivity*.4+n.kick*.045+n.downbeat*.065,this.controls.autoRotate&&(this.controls.autoRotateSpeed=this.settings.autoRotateSpeed*(1+n.variation*this.settings.variationRotateSensitivity))):this.controls.autoRotateSpeed+=(this.settings.autoRotateSpeed-this.controls.autoRotateSpeed)*(1-Math.exp(-t/.35)),this._bloomEnvelope=this.updateEnvelope(this._bloomEnvelope,a,t,.018,.2),this.bloomPass.strength=this._bloomEnvelope;let o=this.audioVisual,s=this.material.uniforms;if(s.uTime.value=this.time*this.settings.colorSpeed,s.uBrightness.value=this.settings.particleBrightness,s.uOpacity.value=this.settings.lineOpacity,s.uBass.value=i?o.bass*this.settings.bassScaleSensitivity:0,s.uMid.value=i?o.mid:0,s.uHigh.value=i?o.high:0,s.uMotion.value=i?o.motion*this.settings.motionTurbulenceSensitivity:0,s.uEnergy.value=i?o.energy*this.settings.energyColorSensitivity:0,s.uAudioBrightness.value=i?o.brightness*(this.settings.brightnessHueSensitivity/90):0,s.uHueRange.value=this.settings.hueRange/360,s.uSaturationRange.value=this.settings.saturationRange,s.uLowWeight.value=this.settings.lowColorWeight,s.uMidWeight.value=this.settings.midColorWeight,s.uHighWeight.value=this.settings.highColorWeight,s.uTexture.value=i?o.texture:0,s.uSmoothness.value=i?o.smoothness:.5,s.uRibbonStrength.value=this.settings.colorRibbonStrength,s.uKick.value=i?o.kick:0,s.uSnare.value=i?o.snare:0,s.uDownbeat.value=i?this._downbeatEnvelope:0,s.uKickProgress.value=this._kickProgress,s.uSnareProgress.value=this._snareProgress,s.uDownbeatProgress.value=this._downbeatProgress,this.glowMaterial){let e=this.glowMaterial.uniforms;Object.keys(s).forEach(t=>{t!==`uBrightness`&&t!==`uOpacity`&&(e[t].value=s[t].value)}),e.uBrightness.value=.34+o.energy*.12,e.uOpacity.value=.1+o.high*.055}if(this.sparkleMaterial){this.sparkleMaterial.uniforms.uTime.value=this.time,this.sparkleMaterial.uniforms.uHigh.value=i?o.high:0,this.sparkleMaterial.uniforms.uHihat.value=i?o.hihat:0,this.sparkleMaterial.uniforms.uBass.value=i?o.bass*this.settings.bassScaleSensitivity:0,this.sparkleMaterial.uniforms.uMid.value=i?o.mid:0,this.sparkleMaterial.uniforms.uMotion.value=i?o.motion*this.settings.motionTurbulenceSensitivity:0;let e=.62+this.time*this.settings.colorSpeed*.012+o.brightness*(this.settings.brightnessHueSensitivity/90)*.16-o.bass*this.settings.lowColorWeight*.12+o.mid*this.settings.midColorWeight*.08+o.high*this.settings.highColorWeight*.2,t=C(w(this.settings.sparkleColor)+(e%1+1)%1,r.clamp(.62*this.settings.saturationRange,0,1),.84);this.sparkleMaterial.uniforms.uColor.value.setRGB(t[0],t[1],t[2])}this.controls.update(),this.composer.render()}resetGuiCamera(){!this.camera||!this.controls||(this.camera.position.set(this.DEFAULT_CAM_POS.x,this.DEFAULT_CAM_POS.y,this.DEFAULT_CAM_POS.z),this.controls.target.set(this.DEFAULT_TARGET.x,this.DEFAULT_TARGET.y,this.DEFAULT_TARGET.z),this.controls.update())}dispose(){this.resizeHandler&&window.removeEventListener(`resize`,this.resizeHandler),this.controls&&this.controls.dispose(),this.line&&this.scene.remove(this.line),this.glowLine&&this.scene.remove(this.glowLine),this.stars&&this.scene.remove(this.stars),this.sparkles&&this.scene.remove(this.sparkles),this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.glowMaterial&&this.glowMaterial.dispose(),this.sparkleGeometry&&this.sparkleGeometry.dispose(),this.sparkleMaterial&&this.sparkleMaterial.dispose(),this.stars?.geometry&&this.stars.geometry.dispose(),this.stars?.material&&this.stars.material.dispose(),this.composer&&this.composer.dispose(),this.bloomPass?.dispose&&this.bloomPass.dispose(),v(this.settingsButton,this.guiContainer,this.gui),this.settingsButton=null,this.guiContainer=null,this.renderer&&this.renderer.dispose()}};export{D as default};