import{Dr as e,Dt as t,Gt as n,P as r,Vt as i,Xn as a,Zn as o,c as s,g as c,l,r as u,tt as d,u as f,vt as p,zt as m}from"./three.module-TVF63cYk.js";import{n as h,r as g,t as _}from"./OutputPass-CxDAHfy4.js";import{a as v,i as y,n as b,r as x,t as S}from"./GUIHelper-DNd0uFVI.js";import{t as C}from"./UnrealBloomPass-C17ZlHgr.js";import{t as w}from"./OrbitControls-Ju8LL-qO.js";var T=(e=!1)=>({blending:5,blendEquation:100,blendSrc:e?201:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:e?200:201,blendDstAlpha:e?201:205,premultipliedAlpha:e}),E=e=>Object.assign(e.blendMaterial,T(!0)),D=class{constructor(e,t={}){this.canvas=e,this._guiPreferencesLoading=!1,this._pendingGuiRebuilds=null;let n={bloom强度:.1,bloom半径:.1,bloom阈值:.8,bloom音频增幅:.1,echo残影消退:.25,echo叠加透明度:.45,跳动幅度:.1,跳动音频敏感度:.1,流动音频敏感度:.5,扩张音频敏感度:.12,抖动音频敏感度:.5,大小音频敏感度:.8,鼓点爆发强度:.5,柱数量:128,柱宽度:.2,柱高度系数:2,柱最小高度:.2,柱颜色速度:.02,鼓点闪光衰减:.92,粒子透明度:.3,颜色饱和度:1.5,颜色冷暖敏感度:.6,粒子分布半径:1,粒子数量:5e3,中心区域亮度:0,粒子大小:5,cameraPosition:{x:0,y:0,z:12},beatSensitivity:.1};this.settings={...n,...t},this.defaultSettings=n,this.scene=null,this.barScene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.particles=null,this.particleMat=null,this.barMesh=null,this.barGeo=null,this.barMat=null,this.barDummy=new m,this.barColor=new c,this.echoCanvas=null,this.echoCtx=null,this.echoTempCanvas=null,this.echoTempCtx=null,this.audioFeature={bass:0,mid:0,high:0,energy:0,motion:0},this.brightness=0,this.kick=0,this.hasAudioData=!1,this._beatDecay=0,this._isReady=!1,this._time=0,this.fftData=new Uint8Array(256),this.beatFlash=0,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this._lastFrameTime=-1,this.time=0,this.settingsButton=null,this.init(),this._isReady=!0}init(){try{return this.setupThreeJS(),this.setupEchoCanvas(),this.createParticles(this.settings.粒子数量),this.createBars(this.settings.柱数量),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),this.resizeHandler=()=>this.onWindowResize(),window.addEventListener(`resize`,this.resizeHandler),console.log(`✅ Animation49 初始化成功`),!0}catch(e){throw console.error(`❌ Animation49 初始化失败:`,e),e}}setupThreeJS(){this.scene=new a,this.barScene=new a,this.camera=new i(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(this.settings.cameraPosition.x,this.settings.cameraPosition.y,this.settings.cameraPosition.z),this.camera.lookAt(0,0,0),this.renderer=new u({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=p,this.canvas.style.position=`fixed`,this.canvas.style.left=`0`,this.canvas.style.top=`0`,this.canvas.style.zIndex=`0`,this.canvas.style.pointerEvents=`auto`,this.canvas.style.opacity=`0`,this.canvas.style.width=window.innerWidth+`px`,this.canvas.style.height=window.innerHeight+`px`,this.controls=new w(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=3,this.controls.maxDistance=1/0,this.controls.saveState(),this.controls.update()}setupEchoCanvas(){this.echoCanvas=document.createElement(`canvas`),this.echoCanvas.id=`Animation49-echo-canvas`,this.echoCtx=this.echoCanvas.getContext(`2d`),this.echoCanvas.width=window.innerWidth,this.echoCanvas.height=window.innerHeight,this.echoCanvas.style.position=`fixed`,this.echoCanvas.style.left=`0`,this.echoCanvas.style.top=`0`,this.echoCanvas.style.width=`100%`,this.echoCanvas.style.height=`100%`,this.echoCanvas.style.zIndex=`1`,this.echoCanvas.style.pointerEvents=`none`,this.echoCanvas.style.background=`transparent`,document.body.appendChild(this.echoCanvas),this.visibleCanvas=this.echoCanvas,this.echoTempCanvas=document.createElement(`canvas`),this.echoTempCtx=this.echoTempCanvas.getContext(`2d`),this.echoTempCanvas.width=this.echoCanvas.width,this.echoTempCanvas.height=this.echoCanvas.height}createBars(e){if(this._guiPreferencesLoading){this._pendingGuiRebuilds.bars=e;return}if(this.barMesh){if(this.barWidth!==this.settings.柱宽度){let e=this.barGeo;this.barGeo=new s(this.settings.柱宽度,1,this.settings.柱宽度),this.barMesh.geometry=this.barGeo,e?.dispose(),this.barWidth=this.settings.柱宽度}this.barMesh.count=e}else this.barGeo=new s(this.settings.柱宽度,1,this.settings.柱宽度),this.barWidth=this.settings.柱宽度,this.barMat=new t,this.barMesh=new d(this.barGeo,this.barMat,512),this.barMesh.instanceMatrix.setUsage(r),this.barMesh.count=e,this.barScene.add(this.barMesh);for(let t=0;t<e;t++){let n=t/e*Math.PI*2,r=3.5;this.barDummy.position.set(Math.cos(n)*r,0,Math.sin(n)*r),this.barDummy.rotation.y=-n,this.barDummy.scale.set(1,1,1),this.barDummy.updateMatrix(),this.barMesh.setMatrixAt(t,this.barDummy.matrix),this.barMesh.setColorAt(t,new c().setHSL(t/e,1,.6))}this.barMesh.instanceColor.needsUpdate=!0,this.barMesh.instanceMatrix.needsUpdate=!0}createParticleGeometry(e){let t=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e);for(let i=0;i<e;i++){let e=5+Math.random()*8,a=Math.random()*Math.PI*2,o=(Math.random()-.5)*2;t[i*3]=Math.cos(a)*e,t[i*3+1]=o,t[i*3+2]=Math.sin(a)*e;let s=Math.random(),l=new c().setHSL(s,1,.65);n[i*3]=l.r,n[i*3+1]=l.g,n[i*3+2]=l.b,r[i]=1+Math.random()*2}let i=new f;return i.setAttribute(`position`,new l(t,3)),i.setAttribute(`color`,new l(n,3)),i.setAttribute(`size`,new l(r,1)),i}createParticles(e){if(this.particles){this.recreateParticles(e);return}this.particleMat||=new o({transparent:!0,depthWrite:!1,...T(),uniforms:{uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uEnergy:{value:0},uMotion:{value:0},uBrightness:{value:0},uBeat:{value:0},uColorReaction:{value:this.settings.颜色冷暖敏感度},uOpacity:{value:this.settings.粒子透明度},uColorIntensity:{value:this.settings.颜色饱和度},uRadiusScale:{value:this.settings.粒子分布半径},uCenterBrightness:{value:this.settings.中心区域亮度},uSizeScale:{value:this.settings.粒子大小},uBounceAmplitude:{value:this.settings.跳动幅度},uMidBounce:{value:this.settings.跳动音频敏感度},uFlowSensitivity:{value:this.settings.流动音频敏感度},uExpandSensitivity:{value:this.settings.扩张音频敏感度},uJitterSensitivity:{value:this.settings.抖动音频敏感度},uSizeSensitivity:{value:this.settings.大小音频敏感度},uBurstSensitivity:{value:this.settings.鼓点爆发强度}},vertexShader:`
                    attribute float size;
                    attribute vec3 color;

                    varying vec3 vColor;
                    varying float vRadius;

                    uniform float uTime;
                    uniform float uBass;
                    uniform float uMid;
                    uniform float uHigh;
                    uniform float uEnergy;
                    uniform float uMotion;
                    uniform float uBeat;
                    uniform float uRadiusScale;
                    uniform float uSizeScale;
                    uniform float uBounceAmplitude;
                    uniform float uMidBounce;
                    uniform float uFlowSensitivity;
                    uniform float uExpandSensitivity;
                    uniform float uJitterSensitivity;
                    uniform float uSizeSensitivity;
                    uniform float uBurstSensitivity;

                    // 简化 Flow Noise
                    float hash(float n){
                        return fract(sin(n)*43758.5453123);
                    }

                    float noise(vec3 x){
                        vec3 p = floor(x);
                        vec3 f = fract(x);
                        f = f*f*(3.0-2.0*f);
                        float n = p.x + p.y*57.0 + p.z*113.0;
                        return mix(
                            mix(
                                mix(hash(n+0.0), hash(n+1.0), f.x),
                                mix(hash(n+57.0), hash(n+58.0), f.x),
                                f.y
                            ),
                            mix(
                                mix(hash(n+113.0), hash(n+114.0), f.x),
                                mix(hash(n+170.0), hash(n+171.0), f.x),
                                f.y
                            ),
                            f.z
                        );
                    }

                    vec3 flowField(vec3 p, float t){
                        float n1 = noise(p*0.35 + vec3(t*0.05));
                        float n2 = noise(p*0.35 + vec3(10.0+t*0.05));
                        float n3 = noise(p*0.35 + vec3(20.0+t*0.05));
                        return vec3(
                            sin(n1*6.2831),
                            cos(n2*6.2831),
                            sin(n3*6.2831)
                        );
                    }

                    void main(){
                        vColor = color;
                        vec3 p = position;

                        // 环形基础结构（粒子分布半径：缩放实际分布位置）
                        p.x *= uRadiusScale;
                        p.z *= uRadiusScale;

                        float angle = atan(p.z,p.x);
                        float radius = length(p.xz);
                        vRadius = radius;

                        // 中频能量 → 上下跳动（幅度 + 频率）
                        float bounceFreq = 1.2 + uMid * 2.0;
                        float bouncePhase = radius * 0.8 + angle;
                        p.y += sin(uTime * bounceFreq + bouncePhase) * (uBounceAmplitude + uMid * uMidBounce);

                        // 运动感 → 流场流动强度
                        vec3 flow = flowField(p, uTime);
                        p += flow * (0.4 + uMotion * uFlowSensitivity);

                        // 高频能量 → 细碎抖动
                        p.y += sin(uTime*6.0 + radius*3.0) * uHigh * uJitterSensitivity;

                        // 低频能量 → 整体扩张
                        p *= (1.0 + uBass * uExpandSensitivity);

                        // 底鼓 → 径向爆发
                        p += normalize(p) * uBeat * uBurstSensitivity;

                        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);

                        gl_PointSize =
                            size * uSizeScale *
                            (1.0 + uEnergy * uSizeSensitivity) *
                            (25.0 / max(-mvPosition.z, 1.0));

                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,fragmentShader:`
                    varying vec3 vColor;
                    varying float vRadius;

                    uniform float uOpacity;
                    uniform float uColorIntensity;
                    uniform float uCenterBrightness;
                    uniform float uColorReaction;
                    uniform float uBrightness;
                    uniform float uBeat;

                    void main(){
                        vec2 uv = gl_PointCoord - 0.5;
                        float d = length(uv);
                        if(d > 0.5) discard;

                        float alpha = smoothstep(0.3, 0.05, d);

                        // 频谱亮度 → 冷暖色温：亮度低(低频为主)→暖色偏红，亮度高(高频为主)→冷色偏蓝
                        vec3 tint = vec3(
                            1.0 + (1.0 - uBrightness) * uColorReaction * 0.6,
                            1.0,
                            1.0 + uBrightness * uColorReaction * 0.6
                        );
                        // 底鼓 → 全通道提亮（配合径向爆发）
                        tint *= (1.0 + uBeat * 1.2 * uColorReaction);

                        // 中心区域亮度
                        float centerGlow = uCenterBrightness / (1.0 + vRadius * vRadius * 0.05);
                        vec3 finalColor = vColor * tint * (1.0 + centerGlow) * uColorIntensity;

                        gl_FragColor = vec4(finalColor, alpha * uOpacity);
                    }
                `}),this.particles=new n(this.createParticleGeometry(e),this.particleMat),this.scene.add(this.particles)}recreateParticles(e){if(this._guiPreferencesLoading){this._pendingGuiRebuilds.particles=e;return}if(this.settings.粒子数量=e,this.particles){let t=this.particles.geometry;this.particles.geometry=this.createParticleGeometry(e),t.dispose();return}this.particles=new n(this.createParticleGeometry(e),this.particleMat),this.scene.add(this.particles)}setupPostProcessing(){let t=new h(this.scene,this.camera);this.bloomPass=new C(new e(window.innerWidth,window.innerHeight),this.settings.bloom强度,this.settings.bloom半径,this.settings.bloom阈值),this.composer=new g(this.renderer),this.composer.addPass(t),this.composer.addPass(this.bloomPass),E(this.bloomPass),this.composer.addPass(new _)}beginGuiPreferencesLoad(){this._guiPreferencesLoading=!0,this._pendingGuiRebuilds={bars:null,particles:null}}endGuiPreferencesLoad(){let e=this._pendingGuiRebuilds;this._guiPreferencesLoading=!1,this._pendingGuiRebuilds=null,e&&(e.bars!==null&&this.createBars(e.bars),e.particles!==null&&this.recreateParticles(e.particles))}setupGUI(){this.createGUIContainer(),this.gui=new v({title:`音律流光`,container:this.guiContainer});let e=this.gui.addFolder(`Bloom`);e.add(this.settings,`bloom强度`,0,3,.01).onChange(e=>{this.bloomPass.strength=e}),e.add(this.settings,`bloom半径`,0,1,.01).onChange(e=>{this.bloomPass.radius=e}),e.add(this.settings,`bloom阈值`,0,1,.01).onChange(e=>{this.bloomPass.threshold=e}),e.add(this.settings,`bloom音频增幅`,0,3,.01).name(`音量增幅(energy)`);let t=this.gui.addFolder(`Echo 回响`);t.add(this.settings,`echo残影消退`,0,.3,.001),t.add(this.settings,`echo叠加透明度`,0,1,.01);let n=this.gui.addFolder(`粒子`);n.add(this.settings,`跳动幅度`,0,3,.01).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uBounceAmplitude.value=e)}),n.add(this.settings,`跳动音频敏感度`,0,2,.01).name(`跳动敏感度(mid)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uMidBounce.value=e)}),n.add(this.settings,`流动音频敏感度`,0,2,.01).name(`流动敏感度(motion)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uFlowSensitivity.value=e)}),n.add(this.settings,`扩张音频敏感度`,0,.3,.01).name(`扩张敏感度(bass)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uExpandSensitivity.value=e)}),n.add(this.settings,`抖动音频敏感度`,0,1,.01).name(`抖动敏感度(high)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uJitterSensitivity.value=e)}),n.add(this.settings,`大小音频敏感度`,0,2,.01).name(`大小敏感度(energy)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uSizeSensitivity.value=e)}),n.add(this.settings,`鼓点爆发强度`,0,4,.01).name(`鼓点爆发(kick)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uBurstSensitivity.value=e)}),n.add(this.settings,`粒子透明度`,0,1,.01).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uOpacity.value=e)}),n.add(this.settings,`颜色饱和度`,0,5,.01).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uColorIntensity.value=e)}),n.add(this.settings,`颜色冷暖敏感度`,0,2,.01).name(`冷暖敏感度(brightness)`).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uColorReaction.value=e)}),n.add(this.settings,`粒子分布半径`,.2,3,.01).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uRadiusScale.value=e)}),n.add(this.settings,`粒子数量`,1e3,5e4,1e3).onFinishChange(e=>{this.recreateParticles(e)}),n.add(this.settings,`中心区域亮度`,0,5,.01).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uCenterBrightness.value=e)}),n.add(this.settings,`粒子大小`,.1,30,.1).onChange(e=>{this.particleMat&&(this.particleMat.uniforms.uSizeScale.value=e)});let r=this.gui.addFolder(`频谱柱`);r.add(this.settings,`柱数量`,16,512,8).onFinishChange(e=>{this.createBars(e)}),r.add(this.settings,`柱宽度`,.02,.8,.01).onFinishChange(()=>{this.createBars(this.settings.柱数量)}),r.add(this.settings,`柱高度系数`,1,15,.1),r.add(this.settings,`柱最小高度`,0,1,.01),r.add(this.settings,`柱颜色速度`,0,.1,.001);let i=this.gui.addFolder(`鼓点`);i.add(this.settings,`beatSensitivity`,0,1,.01).name(`kick触发阈值`),i.add(this.settings,`鼓点闪光衰减`,.8,.99,.001),this.gui.hide()}createGUIContainer(){this.guiContainer=x(`Animation49-gui-container`,`90vh`),S(`Animation49-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=y(`Animation49-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}update(){let e=this.time,t=this.audioFeature;this.beatFlash*=this.settings.鼓点闪光衰减,this.controls.update();let n=this.barMesh.count;for(let t=0;t<n;t++){let r=this.fftData[t]/255,i=t/n*Math.PI*2,a=3.5,o=this.settings.柱最小高度+r*this.settings.柱高度系数;this.barColor.setHSL((t/n+e*this.settings.柱颜色速度)%1,1,.5+r*.3),this.barMesh.setColorAt(t,this.barColor),this.barDummy.position.set(Math.cos(i)*a,o*.5,Math.sin(i)*a),this.barDummy.rotation.y=-i,this.barDummy.scale.set(this.settings.柱宽度,o,this.settings.柱宽度),this.barDummy.updateMatrix(),this.barMesh.setMatrixAt(t,this.barDummy.matrix)}if(this.barMesh.instanceColor.needsUpdate=!0,this.barMesh.instanceMatrix.needsUpdate=!0,this.particleMat){let n=this.particleMat.uniforms;n.uTime.value=e,n.uBass.value=t.bass,n.uMid.value=t.mid,n.uHigh.value=t.high,n.uEnergy.value=t.energy,n.uMotion.value=t.motion,n.uBrightness.value=this.brightness,n.uBeat.value=this.beatFlash}let r=t.energy;this.bloomPass.strength=this.settings.bloom强度+r*this.settings.bloom音频增幅,this.bloomPass.radius=this.settings.bloom半径+r*.35,this.echoTempCtx.clearRect(0,0,this.echoTempCanvas.width,this.echoTempCanvas.height),this.echoTempCtx.drawImage(this.echoCanvas,0,0),this.echoCtx.clearRect(0,0,this.echoCanvas.width,this.echoCanvas.height),this.renderer.clear(),this.composer.render(),this.renderer.autoClear=!1,this.renderer.clear(!1,!0,!1),this.renderer.render(this.barScene,this.camera),this.renderer.autoClear=!0,this.echoCtx.drawImage(this.renderer.domElement,0,0,this.renderer.domElement.width,this.renderer.domElement.height,0,0,this.echoCanvas.width,this.echoCanvas.height);let i=this.settings.echo叠加透明度*(1-this.settings.echo残影消退*1.5);this.echoCtx.globalAlpha=Math.max(0,i),this.echoCtx.drawImage(this.echoTempCanvas,0,0),this.echoCtx.globalAlpha=1,this.beatFlash>.05&&(this.echoCtx.fillStyle=`rgba(255,255,255,${.03+t.energy*.05})`,this.echoCtx.fillRect(0,0,this.echoCanvas.width,this.echoCanvas.height))}render(){if(!this._isReady||!this.composer)return;let e=this._time*.001;if(this._lastFrameTime>0&&e>0){let t=Math.min(.033,e-this._lastFrameTime);this.time+=t}if(this._lastFrameTime=e,!this.hasAudioData){let e=this.audioFeature;e.bass*=.95,e.mid*=.95,e.high*=.95,e.energy*=.95,e.motion*=.95,this.brightness*=.95,this.kick*=.95}this.hasAudioData&&this.kick>this.settings.beatSensitivity&&(this._beatDecay=Math.max(this._beatDecay,this.kick)),this._beatDecay*=.88,this._beatDecay<.01&&(this._beatDecay=0),this.beatFlash=Math.max(this.beatFlash,this._beatDecay),this.update()}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.canvas.style.width=e+`px`,this.canvas.style.height=t+`px`,this.echoCanvas&&(this.echoCanvas.width=e,this.echoCanvas.height=t),this.echoTempCanvas&&(this.echoTempCanvas.width=e,this.echoTempCanvas.height=t)}updateWithAudioData(e,t){if(t!==void 0&&(this._time=t),!e||!e.audioFeature||!e.isPlaying){this.hasAudioData=!1;return}this.hasAudioData=!0;let n=e.audioFeature.animation;if(this.audioFeature.bass=n.bass||0,this.audioFeature.mid=n.mid||0,this.audioFeature.high=n.high||0,this.audioFeature.energy=n.energy||0,this.audioFeature.motion=n.motion||0,this.brightness=this.brightness*.7+(n.brightness||0)*.3,this.kick=n.kick||0,e.frequencyData){let t=e.frequencyData;for(let e=0;e<Math.min(256,t.length);e++)this.fftData[e]=this.fftData[e]*.7+t[e]*.3}}setEffectMode(e){return console.log(`当前效果模式：${e}`),!0}updateSettings(e){Object.assign(this.settings,e),e.cameraPosition&&this.camera.position.set(e.cameraPosition.x||this.settings.cameraPosition.x,e.cameraPosition.y||this.settings.cameraPosition.y,e.cameraPosition.z||this.settings.cameraPosition.z),e.bloom强度!==void 0&&(this.bloomPass.strength=e.bloom强度),e.bloom半径!==void 0&&(this.bloomPass.radius=e.bloom半径),e.bloom阈值!==void 0&&(this.bloomPass.threshold=e.bloom阈值),e.粒子透明度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uOpacity.value=e.粒子透明度),e.颜色饱和度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uColorIntensity.value=e.颜色饱和度),e.颜色冷暖敏感度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uColorReaction.value=e.颜色冷暖敏感度),e.粒子分布半径!==void 0&&this.particleMat&&(this.particleMat.uniforms.uRadiusScale.value=e.粒子分布半径),e.中心区域亮度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uCenterBrightness.value=e.中心区域亮度),e.粒子大小!==void 0&&this.particleMat&&(this.particleMat.uniforms.uSizeScale.value=e.粒子大小),e.跳动幅度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uBounceAmplitude.value=e.跳动幅度),e.跳动音频敏感度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uMidBounce.value=e.跳动音频敏感度),e.流动音频敏感度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uFlowSensitivity.value=e.流动音频敏感度),e.扩张音频敏感度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uExpandSensitivity.value=e.扩张音频敏感度),e.抖动音频敏感度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uJitterSensitivity.value=e.抖动音频敏感度),e.大小音频敏感度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uSizeSensitivity.value=e.大小音频敏感度),e.鼓点爆发强度!==void 0&&this.particleMat&&(this.particleMat.uniforms.uBurstSensitivity.value=e.鼓点爆发强度),e.柱数量!==void 0&&(this.settings.柱数量=e.柱数量,this.createBars(this.settings.柱数量)),e.粒子数量!==void 0&&this.recreateParticles(e.粒子数量)}resetGuiCamera(){if(!this.camera||!this.controls)return;let e=this.defaultSettings.cameraPosition;this.camera.position.set(e.x,e.y,e.z),this.controls.target.set(0,0,0),this.controls.update()}dispose(){this.resizeHandler&&window.removeEventListener(`resize`,this.resizeHandler),b(this.settingsButton,this.guiContainer,this.gui),this.settingsButton=null,this.guiContainer=null,this.controls&&=(this.controls.dispose(),null),this.echoCanvas&&this.echoCanvas.parentNode&&(this.echoCanvas.parentNode.removeChild(this.echoCanvas),this.echoCanvas=null),this.particles&&(this.scene.remove(this.particles),this.particles.geometry.dispose()),this.particleMat&&this.particleMat.dispose(),this.barMesh&&(this.barScene.remove(this.barMesh),this.barGeo.dispose(),this.barMat.dispose()),this.renderer&&this.renderer.dispose(),console.log(`✅ Animation49 资源已清理`)}getAudioDataForUI(){return{bass:this.audioFeature.bass,mid:this.audioFeature.mid,high:this.audioFeature.high}}};export{D as default};