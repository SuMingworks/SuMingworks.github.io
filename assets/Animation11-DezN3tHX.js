import{Dr as e,Gt as t,Mr as n,Vt as r,Xn as i,Zn as a,g as o,l as s,q as c,r as l,u,vt as d}from"./three.module-TVF63cYk.js";import{n as f,r as p,t as m}from"./OutputPass-CxDAHfy4.js";import{a as h,i as g,n as _,r as v,t as y}from"./GUIHelper-DNd0uFVI.js";import{t as b}from"./UnrealBloomPass-C17ZlHgr.js";import{t as x}from"./OrbitControls-Ju8LL-qO.js";import{d as S,l as C,n as w,o as T}from"./PerceptualColor-DS_Cacs7.js";var E=class{constructor(e,t={}){this.canvas=e,this.scenePresets={default:{name:`默认星云`,galaxyCount:8e4,branches:6,galaxyRadius:750},spiral:{name:`螺旋星系`,galaxyCount:8e4,branches:8,galaxyRadius:750},dense:{name:`密集星云`,galaxyCount:15e4,branches:5,galaxyRadius:600},colorful:{name:`多彩星云`,galaxyCount:8e4,branches:6,galaxyRadius:750},minimal:{name:`极简风格`,galaxyCount:3e4,branches:6,galaxyRadius:750}};let n={preset:`default`,colorCore:`#ffdd55`,colorMid:`#00f2ff`,colorOuter:`#cc66ff`,bloomStrength:.1,bloomRadius:.1,bloomThreshold:.9,particleSize:1,rotationSpeed:.1,autoRotate:!0,galaxyCount:8e4,galaxyRadius:750,branches:6,cameraPosition:{x:-1478.37,y:50.8,z:900.55},audioEnabled:!0,autoColorMode:!0,colorChangeSpeed:.2,energySensitivity:1,bassResponse:.8,midResponse:1,highResponse:1,motionResponse:1,beatPulseStrength:.5,shockwaveStrength:1,sizzleStrength:.4,kickStrength:1,colorStormStrength:.5,particleBrightness:1};this.settings={...n,...t},this.DEFAULTS=n,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.previousCanvasMixBlendMode=this.canvas.style.mixBlendMode,this.galaxyPoints=null,this._guiPreferencesLoading=!1,this._pendingGalaxyRebuild=!1,this._perceptualPalette=null,this._colorCache={core:new o,mid:new o,outer:new o},this.refreshPerceptualPalette(),this.resetState(),this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null;try{this.init(),console.log(`✅ Animation11 初始化成功`)}catch(e){console.error(`❌ Animation11 初始化失败:`,e)}}init(){this.setupThreeJS(),this.createGalaxy(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton()}setupThreeJS(){this.scene=new i,this.camera=new r(55,window.innerWidth/window.innerHeight,1,12e3),this.camera.position.set(this.settings.cameraPosition.x,this.settings.cameraPosition.y,this.settings.cameraPosition.z),this.camera.lookAt(0,0,0),this.renderer=new l({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=2,this.renderer.outputColorSpace=d,this.canvas.style.backgroundColor=`transparent`,this.canvas.style.mixBlendMode=`screen`,this.canvas.style.zIndex=`1`,this.controls=new x(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.autoRotate=this.settings.autoRotate,this.controls.dampingFactor=.05,this.controls.target.set(0,0,0),this.controls.saveState()}getGalaxyVertexShader(){return`
            uniform float uTime;
            uniform float uSize;
            uniform float uAudioEnergy;
            uniform float uBass;
            uniform float uMid;
            uniform float uHigh;
            uniform float uGalaxyRadius;
            uniform float uShockwaveStrength;
            uniform float uShockwaveRadius;
            uniform float uKickPulseStrength;
            uniform float uSizzleStrength;
            uniform float uColorStormStrength;
            uniform vec3 uColorCore;
            uniform vec3 uColorMid;
            uniform vec3 uColorOuter;
            attribute float aScale;
            attribute float aFlickerSpeed;
            varying vec3 vColor;
            varying float vOpacity;

            void main() {
                vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                float distanceToCenter = length(modelPosition.xz);

                // ===== 从 uniform 计算渐变色（GPU 端，替代每帧更新顶点颜色） =====
                vec3 baseColor;
                float radius = uGalaxyRadius;
                if (distanceToCenter < radius * 0.1) {
                    baseColor = mix(uColorCore, vec3(1.0), 0.9);
                } else if (distanceToCenter < radius * 0.45) {
                    float t = (distanceToCenter - radius * 0.1) / max(radius * 0.35, 0.001);
                    baseColor = mix(uColorCore, uColorMid, t);
                } else {
                    float t = clamp((distanceToCenter - radius * 0.45) / max(radius * 0.55, 0.001), 0.0, 1.0);
                    baseColor = mix(uColorMid, uColorOuter, t);
                }

                // ===== 音频驱动的动态颜色调制 =====
                float colorMix = uAudioEnergy * 0.8;
                vec3 dynamicColor = uColorCore;
                float verySlowTime = uTime * 0.2;
                dynamicColor.r += sin(verySlowTime * 0.5 + position.x * 0.002) * uAudioEnergy * 0.3;
                dynamicColor.g += sin(verySlowTime * 0.6 + position.y * 0.002) * uAudioEnergy * 0.3;
                dynamicColor.b += sin(verySlowTime * 0.4 + position.z * 0.002) * uAudioEnergy * 0.3;
                dynamicColor = clamp(dynamicColor, 0.0, 1.0);
                vColor = mix(baseColor, dynamicColor, colorMix);

                // ===== 低频泵动：bass 驱动粒子整体膨胀/收缩（~0.3s） =====
                float bassPump = 1.0 + uBass * 0.8;
                modelPosition.xyz *= bassPump;

                // ===== 冲击波：beat 触发的单次高斯脉冲环 =====
                // 平时不做波浪运动，只在 beat 时从中心爆发一层冲击波
                // 冲击波环从中心(r=0)扩散到边缘(r=1)，粒子弹起 + 变亮 + 变大
                float nd = distanceToCenter / uGalaxyRadius;
                float env = exp(-nd * nd * 3.0);
                float distFromRing = abs(nd - uShockwaveRadius);
                float ringWidth = 0.06 + uAudioEnergy * 0.08;  // 宽度随能量变化
                float pulse = exp(-distFromRing * distFromRing / (ringWidth * ringWidth));
                float shockIntensity = pulse * uShockwaveStrength;

                // Y 弹起：冲击波经过时粒子向上跳起
                modelPosition.y += shockIntensity * 300.0 * env;

                // ===== kick脉冲：星系整体收缩（~0.5s） =====
                float kickScale = 1.0 - uKickPulseStrength * 0.12;
                modelPosition.xz *= kickScale;
                modelPosition.y *= (1.0 - uKickPulseStrength * 0.6);

                // ===== 径向微呼吸 =====
                float radialScale = 1.0 + uMid * 0.3;
                modelPosition.xz *= radialScale;

                // ===== snare闪爆：随机约30%粒子跳起+偏移（~0.3s） =====
                float sizzleSeed = fract(aScale * 73.0 + aFlickerSpeed * 51.0);
                float sizzleMask = step(0.7, sizzleSeed);
                float sizzle = sizzleMask * uSizzleStrength;
                modelPosition.y += sizzle * 80.0;
                modelPosition.x += sin(aScale * 200.0) * sizzle * 15.0;
                modelPosition.z += cos(aFlickerSpeed * 200.0) * sizzle * 15.0;

                vec4 viewPosition = viewMatrix * modelPosition;
                gl_Position = projectionMatrix * viewPosition;

                // 闪烁
                float flickerSpeed = aFlickerSpeed * (1.0 + uHigh * 1.5);
                float flicker = abs(sin(uTime * flickerSpeed + aScale * 20.0));
                gl_PointSize = uSize * aScale * (0.7 + flicker * 0.6)
                             * (1.0 + uAudioEnergy * 0.6)
                             * (1.0 + uBass * 0.3)
                             * (1.0 + shockIntensity * 0.5);
                gl_PointSize *= (1000.0 / -viewPosition.z);

                // 冲击波提亮当前调色板颜色，避免高强度时被固定白色覆盖。
                vec3 shockColor = vColor * 1.45;
                vColor = mix(vColor, shockColor, clamp(shockIntensity * 0.55, 0.0, 1.0));

                // ===== 色彩风暴：percussive触发的暖色调偏移（~0.4s） =====
                float storm = uColorStormStrength;
                vColor.r += storm * 2.0;
                vColor.g -= storm * 1.0;
                vColor.b -= storm * 0.8;

                // ===== snare闪爆：增强当前颜色的亮度 + 大小，保留原有色相 =====
                vec3 sizzleColor = vColor * 1.65;
                vColor = mix(vColor, sizzleColor, clamp(sizzle * 0.55, 0.0, 1.0));
                gl_PointSize *= (1.0 + sizzle * 0.4);

                vOpacity = 0.3 + flicker * 0.5 + uAudioEnergy * 0.8
                         + shockIntensity * 0.5
                         + storm * 0.3
                         + sizzle * 0.5;
            }
        `}getGalaxyFragmentShader(){return`
            uniform float uBrightness;
            varying vec3 vColor;
            varying float vOpacity;
            void main() {
                float dist = distance(gl_PointCoord, vec2(0.5));
            if (dist > 0.5) discard;
            
            // 锐利星点：全实心圆 + 仅边缘1px抗锯齿过渡
            float alpha = 1.0 - smoothstep(0.45, 0.5, dist);
            gl_FragColor = vec4(vColor * uBrightness * 2.5, alpha * vOpacity);
            }
        `}refreshPerceptualPalette(){this._perceptualPalette=w({core:this.settings.colorCore,mid:this.settings.colorMid,outer:this.settings.colorOuter}),this.syncLinearColorCache()}syncLinearColorCache(){[`core`,`mid`,`outer`].forEach(e=>{let t=T(this._perceptualPalette[e]);this._colorCache[e].setRGB(t[0],t[1],t[2],d)})}createGalaxy(){this.galaxyPoints&&(this.scene.remove(this.galaxyPoints),this.galaxyPoints.geometry&&this.galaxyPoints.geometry.dispose(),this.galaxyPoints.material&&this.galaxyPoints.material.dispose());let e=new u,n=new Float32Array(this.settings.galaxyCount*3),r=new Float32Array(this.settings.galaxyCount),i=new Float32Array(this.settings.galaxyCount);for(let e=0;e<this.settings.galaxyCount;e++){let t=e*3,a=Math.random()*this.settings.galaxyRadius,o=e%this.settings.branches/this.settings.branches*Math.PI*2,s=a*.01,c=Math.random()**3*(Math.random()<.5?1:-1)*.45*a,l=Math.random()**4*(Math.random()<.5?1:-1)*.2*a,u=Math.random()**3*(Math.random()<.5?1:-1)*.45*a;n[t]=Math.cos(o+s)*a+c,n[t+1]=l,n[t+2]=Math.sin(o+s)*a+u,r[e]=Math.random()*.8+.1,i[e]=Math.random()*3+1}e.setAttribute(`position`,new s(n,3)),e.setAttribute(`aScale`,new s(r,1)),e.setAttribute(`aFlickerSpeed`,new s(i,1));let o=this._colorCache,c=new a({depthWrite:!1,transparent:!0,...this.getTransparentLightBlending(),uniforms:{uTime:{value:0},uSize:{value:this.settings.particleSize},uAudioEnergy:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uGalaxyRadius:{value:this.settings.galaxyRadius},uShockwaveStrength:{value:0},uShockwaveRadius:{value:0},uKickPulseStrength:{value:0},uSizzleStrength:{value:0},uColorStormStrength:{value:0},uColorCore:{value:o.core.clone()},uColorMid:{value:o.mid.clone()},uColorOuter:{value:o.outer.clone()},uBrightness:{value:this.settings.particleBrightness}},vertexShader:this.getGalaxyVertexShader(),fragmentShader:this.getGalaxyFragmentShader()});this.galaxyPoints=new t(e,c),this.scene.add(this.galaxyPoints)}updateColors(){if(this.refreshPerceptualPalette(),!this.galaxyPoints)return;let e=this.galaxyPoints.material.uniforms,t=this._colorCache;e.uColorCore.value.copy(t.core),e.uColorMid.value.copy(t.mid),e.uColorOuter.value.copy(t.outer)}_refreshControllers(){if(!this.gui)return;let e=t=>{t.controllers.forEach(e=>e.updateDisplay()),t.folders&&Object.values(t.folders).forEach(t=>e(t))};e(this.gui)}loadScenePreset(e){let t=this.scenePresets[e];if(t){switch(this.settings.preset=e,this.settings.galaxyCount=t.galaxyCount,this.settings.branches=t.branches,this.settings.galaxyRadius=t.galaxyRadius,e){case`spiral`:this.settings.colorCore=`#ffaa00`,this.settings.colorMid=`#00aaff`,this.settings.colorOuter=`#aa00ff`;break;case`colorful`:this.settings.colorCore=`#ff0066`,this.settings.colorMid=`#00ffaa`,this.settings.colorOuter=`#ffaa00`;break;case`minimal`:this.settings.colorCore=`#ffffff`,this.settings.colorMid=`#aaaaaa`,this.settings.colorOuter=`#666666`,this.settings.bloomStrength=1;break;case`dense`:this.settings.colorCore=`#ffdd55`,this.settings.colorMid=`#00f2ff`,this.settings.colorOuter=`#cc66ff`;break;default:this.settings.colorCore=`#ffdd55`,this.settings.colorMid=`#00f2ff`,this.settings.colorOuter=`#cc66ff`,this.settings.bloomStrength=2.5}this.bloomPass&&(this.bloomPass.strength=this.settings.bloomStrength,this.bloomPass.radius=this.settings.bloomRadius,this.bloomPass.threshold=this.settings.bloomThreshold),this.refreshPerceptualPalette(),this.requestGalaxyRebuild(),this.gui&&this._refreshControllers()}}setupPostProcessing(){let t=new f(this.scene,this.camera);this.bloomPass=new b(new e(window.innerWidth,window.innerHeight),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold);let r=this.renderer.getSize(new e),i=this.renderer.getPixelRatio();this._msaaTarget=new n(Math.floor(r.width*i),Math.floor(r.height*i),{type:c,samples:4}),this.composer=new p(this.renderer,this._msaaTarget),this.composer.addPass(t),this.composer.addPass(this.bloomPass),Object.assign(this.bloomPass.blendMaterial,this.getTransparentLightBlending(!0)),this.composer.addPass(new m)}getTransparentLightBlending(e=!1){return{blending:5,blendEquation:100,blendSrc:e?201:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:200,blendDstAlpha:201,premultipliedAlpha:e}}setupGUI(){this.createGUIContainer(),this.gui=new h({title:`宇宙星河`,container:this.guiContainer});let e=this.gui.addFolder(`预设场景`),t={};Object.keys(this.scenePresets).forEach(e=>{t[this.scenePresets[e].name]=e}),e.add(this.settings,`preset`,t).name(`场景预设`).onChange(e=>{this.loadScenePreset(e)}),e.open();let n=this.gui.addFolder(`视觉效果`);n.addColor(this.settings,`colorCore`).name(`核心颜色`).onChange(()=>{this.updateColors()}),n.addColor(this.settings,`colorMid`).name(`中间颜色`).onChange(()=>{this.updateColors()}),n.addColor(this.settings,`colorOuter`).name(`外部颜色`).onChange(()=>{this.updateColors()}),n.add(this.settings,`particleSize`,1,15,.5).name(`粒子大小`).onChange(e=>{this.galaxyPoints&&(this.galaxyPoints.material.uniforms.uSize.value=e)}),n.add(this.settings,`bloomStrength`,0,5,.1).name(`bloom强度`).onChange(e=>{this.bloomPass&&(this.bloomPass.strength=e)}),n.add(this.settings,`bloomRadius`,0,2,.1).name(`bloom半径`).onChange(e=>{this.bloomPass&&(this.bloomPass.radius=e)}),n.add(this.settings,`bloomThreshold`,0,1,.05).name(`bloom阈值`).onChange(e=>{this.bloomPass&&(this.bloomPass.threshold=e)}),n.add(this.settings,`particleBrightness`,.1,3,.05).name(`粒子亮度`).onChange(e=>{this.galaxyPoints&&(this.galaxyPoints.material.uniforms.uBrightness.value=e)}),n.open();let r=this.gui.addFolder(`音频响应控制`);r.add(this.settings,`audioEnabled`).name(`启用音频响应`),r.add(this.settings,`energySensitivity`,0,2,.05).name(`整体响应强度`),r.add(this.settings,`bassResponse`,0,2,.05).name(`低频响应`),r.add(this.settings,`midResponse`,0,2,.05).name(`中频响应`),r.add(this.settings,`highResponse`,0,2,.05).name(`高频响应`),r.add(this.settings,`motionResponse`,0,2,.05).name(`运动响应`),r.add(this.settings,`beatPulseStrength`,0,2,.05).name(`节拍脉冲`),r.add(this.settings,`shockwaveStrength`,0,2,.1).name(`冲击波强度`),r.add(this.settings,`kickStrength`,0,2,.1).name(`心跳强度`),r.add(this.settings,`sizzleStrength`,0,2,.1).name(`闪爆强度`),r.add(this.settings,`colorStormStrength`,0,2,.1).name(`色暴强度`),r.add(this.settings,`autoColorMode`).name(`自动颜色模式`),r.add(this.settings,`colorChangeSpeed`,.1,1,.05).name(`颜色变化速度`),r.open();let i=this.gui.addFolder(`动画控制`);i.add(this.settings,`rotationSpeed`,0,.2,.01).name(`旋转速度`).onChange(e=>{this.controls&&(this.controls.autoRotateSpeed=e*10)}),i.add(this.settings,`autoRotate`).name(`自动旋转`).onChange(e=>{this.controls&&(this.controls.autoRotate=e)}),i.open(),this.gui.hide()}createGUIContainer(){this.guiContainer=v(`Animation11-gui-container`),y(`Animation11-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=g(`Animation11-settings-button`),this._onSettingsClick=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()},this.settingsButton.addEventListener(`click`,this._onSettingsClick),document.body.appendChild(this.settingsButton)}_updateShaderUniforms(){let e=this.audioFeature;if(!e||!this.settings.audioEnabled||!this.galaxyPoints)return;let t=Math.min(e.bass*this.settings.bassResponse,1),n=Math.min(e.mid*this.settings.midResponse,1),r=Math.min(e.high*this.settings.highResponse,1),i=Math.min(e.energy*this.settings.energySensitivity,1),a=e.beat*this.settings.beatPulseStrength,o=Math.min(i+a,1.2);e.beat>.3&&this._shockwaveStrength<.1&&(this._shockwaveStrength=(.5+t*.8)*this.settings.shockwaveStrength,this._shockwaveRadius=.02),this._percussive=e.percussive||0,(e.kick||0)>.3&&this._kickPulseStrength<.05&&(this._kickPulseStrength=(.5+t*.5)*this.settings.kickStrength);let s=Math.max(e.snare||0,e.hihat||0);s>.3&&this._sizzleStrength<.05&&(this._sizzleStrength=(.4+s*.6)*this.settings.sizzleStrength),(e.percussive||0)>.3&&this._colorStormStrength<.05&&(this._colorStormStrength=(.3+e.percussive*.7)*this.settings.colorStormStrength);let c=this.galaxyPoints.material;if(c.uniforms.uAudioEnergy.value=o,c.uniforms.uBass.value=t,c.uniforms.uMid.value=n,c.uniforms.uHigh.value=r,this.settings.autoColorMode&&e.energy>.01){let t=e.bass,n=e.mid,r=e.high,i=t+n+r+.001,a=(t*0+n*.33+r*.66)/i,o=Math.min(this.settings.colorChangeSpeed*.05,.5),s=this._colorCache,c=this._perceptualPalette.core,l=a-(Math.hypot(c[1],c[2])<=1e-8?a:(Math.atan2(c[2],c[1])/(Math.PI*2)%1+1)%1);l>.5&&--l,l<-.5&&(l+=1),Math.abs(l)<.002&&(l=0);let u=l*o;if([`core`,`mid`,`outer`].forEach(e=>{let t=this._perceptualPalette[e],[n,r]=S(t[1],t[2],u),i=[t[0],n,r];this._perceptualPalette[e]=i;let a=e===`core`?`colorCore`:e===`mid`?`colorMid`:`colorOuter`;this.settings[a]=C(i)}),this.syncLinearColorCache(),this.galaxyPoints){let e=this.galaxyPoints.material.uniforms;e.uColorCore.value.copy(s.core),e.uColorMid.value.copy(s.mid),e.uColorOuter.value.copy(s.outer)}}}render(){if(this.galaxyPoints&&(this.galaxyPoints.material.uniforms.uTime.value=this.elapsed),this.galaxyPoints){let e=.985-(this._percussive||0)*.02;this._shockwaveStrength*=e,this._shockwaveRadius+=.015,this._kickPulseStrength*=.96,this._sizzleStrength*=.93,this._colorStormStrength*=.95;let t=this.galaxyPoints.material.uniforms;t.uShockwaveStrength.value=this._shockwaveStrength,t.uShockwaveRadius.value=this._shockwaveRadius,t.uKickPulseStrength.value=this._kickPulseStrength,t.uSizzleStrength.value=this._sizzleStrength,t.uColorStormStrength.value=this._colorStormStrength}if(this.hasAudioData&&this.audioFeature)this._updateShaderUniforms();else if(this.galaxyPoints){let e=this.galaxyPoints.material.uniforms;e.uAudioEnergy.value=0,e.uBass.value=0,e.uMid.value=0,e.uHigh.value=0}let e=this.hasAudioData&&this.audioFeature?1+this.audioFeature.motion*this.settings.motionResponse*2:1;this.controls.autoRotate=this.settings.autoRotate,this.controls.autoRotateSpeed=this.settings.rotationSpeed*10*e,this.controls.update(),this.composer&&this.composer.render()}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;!this.camera||!this.renderer||!this.composer||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t))}resetState(){this.audioFeature=null,this.hasAudioData=!1,this.elapsed=0,this._shockwaveStrength=0,this._shockwaveRadius=0,this._kickPulseStrength=0,this._sizzleStrength=0,this._colorStormStrength=0,this._percussive=0}requestGalaxyRebuild(){if(this._guiPreferencesLoading){this._pendingGalaxyRebuild=!0;return}this.createGalaxy()}beginGuiPreferencesLoad(){this._guiPreferencesLoading=!0}endGuiPreferencesLoad(){this._guiPreferencesLoading=!1,this._pendingGalaxyRebuild&&(this._pendingGalaxyRebuild=!1,this.createGalaxy())}resetGuiCamera(){if(!this.camera||!this.controls)return;let e=this.DEFAULTS.cameraPosition;this.camera.position.set(e.x,e.y,e.z),this.controls.target.set(0,0,0),this.controls.update()}updateWithAudioData(e,t){if(t!==void 0&&(this.elapsed=t),!e||!e.audioFeature||!e.isPlaying){this.hasAudioData=!1;return}this.hasAudioData=!0,this.audioFeature=e.audioFeature.animation}setEffectMode(e){return this.scenePresets[e]?(this.loadScenePreset(e),!0):!1}updateSettings(e){Object.assign(this.settings,e),e.cameraPosition&&this.camera.position.set(e.cameraPosition.x??this.settings.cameraPosition.x,e.cameraPosition.y??this.settings.cameraPosition.y,e.cameraPosition.z??this.settings.cameraPosition.z),(e.colorCore!==void 0||e.colorMid!==void 0||e.colorOuter!==void 0)&&this.updateColors(),e.bloomStrength!==void 0&&(this.bloomPass.strength=e.bloomStrength),e.bloomRadius!==void 0&&(this.bloomPass.radius=e.bloomRadius),e.bloomThreshold!==void 0&&(this.bloomPass.threshold=e.bloomThreshold),e.particleSize!==void 0&&this.galaxyPoints&&(this.galaxyPoints.material.uniforms.uSize.value=e.particleSize),e.particleBrightness!==void 0&&this.galaxyPoints&&(this.galaxyPoints.material.uniforms.uBrightness.value=e.particleBrightness),e.galaxyRadius!==void 0&&this.galaxyPoints&&(this.galaxyPoints.material.uniforms.uGalaxyRadius.value=e.galaxyRadius),e.galaxyCount!==void 0&&this.createGalaxy(),this.gui&&this._refreshControllers()}dispose(){this.settingsButton&&this._onSettingsClick&&this.settingsButton.removeEventListener(`click`,this._onSettingsClick),_(this.settingsButton,this.guiContainer,this.gui),this.controls&&this.controls.dispose(),this.galaxyPoints&&(this.scene.remove(this.galaxyPoints),this.galaxyPoints.geometry&&this.galaxyPoints.geometry.dispose(),this.galaxyPoints.material&&this.galaxyPoints.material.dispose()),this.bloomPass&&this.bloomPass.dispose(),this.composer&&this.composer.dispose(),this._msaaTarget&&=(this._msaaTarget.dispose(),null),this.scene=null,this.renderer&&this.renderer.dispose(),this.canvas.style.mixBlendMode=this.previousCanvasMixBlendMode,console.log(`✅ Animation11 资源已清理`)}getAudioDataForUI(){let e=this.audioFeature;return{bass:e?e.bass:0,mid:e?e.mid:0,high:e?e.high:0,energy:e?e.energy:0}}getPerformanceData(){return{fps:0,particleCount:this.settings.galaxyCount}}};export{E as default};