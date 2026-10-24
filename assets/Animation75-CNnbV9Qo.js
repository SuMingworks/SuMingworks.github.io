import{At as e,Et as t,H as n,Kt as r,Nr as i,Pr as a,X as o,Xt as s,cr as c,d as l,er as u,nr as d,r as f,rr as p,sr as m,wt as h}from"./three.module-CI1jJgD_.js";import{n as g,r as _,t as v}from"./OutputPass-D7sfcF5T.js";import{a as y,i as b,n as x,r as S,t as C}from"./GUIHelper-CK73tCKI.js";import{t as w}from"./UnrealBloomPass-afIQHt-X.js";import{t as T}from"./AnimationCameraControls-2zD2PkBR.js";var E=Object.freeze({ringWidth:1,waveStrength:1.25,pointSize:2,flowSpeed:1.45,audioStrength:1,colorReactivity:.75,saturationBoost:.5,colorResponse:.25,bloomStrength:.1,bloomRadius:.2,bloomThreshold:.75}),D=(e,n=1)=>t.clamp(Number.isFinite(e)?e:0,0,n),O=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-r*n)),k=`
  uniform float uColorSpread, uHueShift, uSaturation, uLightness;
  vec3 audioColor(float position) {
    float hue = .84 - clamp(position, 0.0, 1.0) * .31
              + uHueShift + position * uColorSpread * .08;
    vec3 srgb = clamp(abs(mod(hue * 6.0 + vec3(0.,4.,2.), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    float chroma = (1.0 - abs(2.0 * uLightness - 1.0)) * uSaturation;
    srgb = (srgb - .5) * chroma + uLightness;
    vec3 linear = mix(srgb / 12.92, pow((srgb + .055) / 1.055, vec3(2.4)), step(vec3(.04045), srgb));
    return linear;
  }
`,A=class{constructor(e,t={}){this.canvas=e,this.settings={...E,...t},this.settings.bloomThreshold=D(this.settings.bloomThreshold),this.disposed=!1,this.audio=null,this.lastTime=null,this.elapsed=0,this.hue=0,this.saturation=.82,this.lightness=.51,this.levels={bass:0,mid:0,high:0,energy:0,motion:0},this.scene=new d;let{width:n,height:a}=this.size();this.camera=new r(42,n/a,.1,100),this.camera.position.set(0,0,7.8/Math.min(1,this.camera.aspect)),this.renderer=new f({canvas:e,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.outputColorSpace=u,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,this.controls=new T(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=3,this.controls.maxDistance=35,this.controls.screenSpacePanning=!0,this.controls.mouseButtons.LEFT=h.ROTATE,this.controls.mouseButtons.RIGHT=h.PAN,this.controls.mouseButtons.MIDDLE=h.DOLLY,this.controls.update(),this.composer=new _(this.renderer),this.composer.addPass(new g(this.scene,this.camera)),this.bloom=new w(new i(n,a),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold),this.composer.addPass(this.bloom),this.composer.addPass(new v),this.group=new o,this.scene.add(this.group),this.uniforms={uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uHit:{value:0},uColorSpread:{value:0},uHueShift:{value:0},uSnare:{value:0},uHihat:{value:0},uSaturation:{value:.82},uLightness:{value:.51},uRingWidth:{value:this.settings.ringWidth},uWaveStrength:{value:this.settings.waveStrength},uPointSize:{value:this.settings.pointSize},uPixelRatio:{value:1}},this.createSphere(),this.setupGUI(),this.onWindowResize()}size(){return{width:Math.max(1,this.canvas.clientWidth||window.innerWidth),height:Math.max(1,this.canvas.clientHeight||window.innerHeight)}}createSphere(){let t=this.uniforms;this.ringMaterial=new p({uniforms:t,transparent:!0,side:0,depthWrite:!1,blending:2,vertexShader:`
        varying vec3 vNormal, vView, vSurface;
        void main() {
          vSurface = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vView = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`${k}
        uniform float uTime, uBass, uHit, uRingWidth;
        varying vec3 vNormal, vView, vSurface;
        void main() {
          vec3 n = normalize(vNormal);
          float facing = max(0.0, dot(n, normalize(vView)));
          float flow = .5 + .5 * sin(vSurface.x * 7.0 + vSurface.y * 5.0
                     + vSurface.z * 4.0 - uTime * 1.5);
          float width = uRingWidth * (.20 + flow * .22 + uBass * .08 + uHit * .035);
          float rim = 1.0 - smoothstep(.015, max(.025, width), facing);
          float sheen = pow(max(0.0, dot(n, normalize(vec3(-.5,.7,1.0)))), 5.0);
          float palettePosition = clamp(.5 + .5 * vSurface.x + .14 * vSurface.y, 0.0, 1.0);
          vec3 color = audioColor(palettePosition);
          gl_FragColor = vec4(color * (rim * .62 + sheen * .035 + .006), 1.0);
        }
      `}),this.ring=new e(new c(2,128,96),this.ringMaterial),this.group.add(this.ring);let r=[];for(let e=0;e<144;e++){let t=1-2*(e+.5)/144,n=Math.sqrt(1-t*t),i=Math.max(12,Math.round(280*n));for(let a=0;a<i;a++){let o=(a+e%2*.5)/i*Math.PI*2;r.push(n*Math.cos(o),t,n*Math.sin(o))}}this.particleGeometry=new l,this.particleGeometry.setAttribute(`position`,new n(r,3)),this.particleGeometry.boundingSphere=new m(new a,2.5),this.particleMaterial=new p({uniforms:t,transparent:!0,depthWrite:!1,blending:2,vertexShader:`
        uniform float uTime, uBass, uMid, uHigh, uHit, uSnare, uHihat, uWaveStrength, uPointSize;
        uniform float uPixelRatio;
        varying float vLight;
        varying vec3 vColorPosition;
        void main() {
          vec3 n = normalize(position);
          float phase = dot(n, vec3(4.2,2.4,3.5)) - uTime * 1.65;
          float wave = sin(phase + 1.5 * sin(n.y * 3.0 + uTime * .7));
          vec3 field = vec3(sin(n.y * 5.0 + uTime),
                            cos(n.z * 4.0 - uTime * .8),
                            sin(n.x * 4.5 + uTime * .65));
          vec3 tangent = field - n * dot(field, n);
          float strength = (.075 + uBass * .10 + uMid * .13 + uSnare * .025) * uWaveStrength;
          n = normalize(n + tangent * strength);
          vColorPosition = n;
          vec4 mv = modelViewMatrix * vec4(n * 1.992, 1.0);
          vec3 viewNormal = normalize(normalMatrix * n);
          float facing = dot(viewNormal, normalize(-mv.xyz));
          float front = smoothstep(-.15, .35, facing);
          float ridge = pow(.5 + .5 * cos(phase + wave * 1.4), 4.0);
          vLight = (.20 + ridge * .65) * mix(.12, 1.0, front) * (.8 + uMid * .6 + uHit * .25);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp((1.1 + ridge * .45 + uHigh * .35 + uHihat * .3)
                        * uPixelRatio * uPointSize * 7.2 / max(.1,-mv.z), .5, 7.0);
        }
      `,fragmentShader:`${k} varying float vLight; varying vec3 vColorPosition; void main() {
        float d = length(gl_PointCoord - .5);
        float alpha = (1.0 - smoothstep(.16, .5, d)) * vLight;
        float palettePosition = clamp(.5 + .5 * vColorPosition.x + .14 * vColorPosition.y, 0.0, 1.0);
        gl_FragColor = vec4(audioColor(palettePosition) * 2.2, alpha);
      }`}),this.particles=new s(this.particleGeometry,this.particleMaterial),this.group.add(this.particles)}setupGUI(){let e=this.settings;this.guiContainer=S(`Animation75-gui-container`),document.body.appendChild(this.guiContainer),this.scrollbarStyle=C(`Animation75-gui-container`),this.gui=new y({title:`音浪球场`,width:260,container:this.guiContainer});let t=this.gui.addFolder(`光环与网膜`);t.add(e,`ringWidth`,.25,2.5,.05).name(`球缘发光厚度`),t.add(e,`waveStrength`,0,1.6,.05).name(`球面流动幅度`),t.add(e,`pointSize`,.5,2.5,.05).name(`粒子大小`),t.add(e,`flowSpeed`,.1,3,.05).name(`流动速度`);let n=this.gui.addFolder(`音频与颜色`);n.add(e,`audioStrength`,0,2,.05).name(`形变响应`),n.add(e,`colorReactivity`,0,3,.05).name(`变色强度`),n.add(e,`colorResponse`,.02,.5,.005).name(`变色缓冲（秒）`),n.add(e,`saturationBoost`,0,.5,.01).name(`低频饱和增强`);let r=this.gui.addFolder(`泛光效果`);r.add(e,`bloomStrength`,0,1,.01).name(`泛光强度`),r.add(e,`bloomRadius`,0,1,.01).name(`泛光范围`);let i=r.add(e,`bloomThreshold`,0,1,.01).name(`泛光阈值`);i.onChange(t=>{e.bloomThreshold=D(t),i.updateDisplay(),this.bloom.threshold=e.bloomThreshold}),this.gui.hide(),this.guiVisible=!1,this.settingsButton=b(`Animation75-settings-button`),this.toggleGUI=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()},this.settingsButton.addEventListener(`click`,this.toggleGUI),document.body.appendChild(this.settingsButton)}updateWithAudioData(e){this.audio=e?.isPlaying===!1?null:e?.audioFeature?.animation??null}updateAudio(e,t){let n=this.settings,r=this.uniforms,i=this.levels,a=this.audio||{},o=!!this.audio;i.bass=O(i.bass,D(a.bass),18,e),i.mid=O(i.mid,D(a.mid),14,e),i.high=O(i.high,D(a.high),20,e),i.energy=O(i.energy,D(a.energy),10,e),i.motion=O(i.motion,D(a.motion),12,e);let s=D(a.kick,2),c=D(a.snare,1.5),l=D(a.hihat,1.5);this.elapsed+=e*n.flowSpeed*(.36+i.motion*1.8+i.mid*.7),r.uTime.value=this.elapsed,r.uBass.value=i.bass*n.audioStrength,r.uMid.value=i.mid*n.audioStrength,r.uHigh.value=i.high*n.audioStrength,r.uHit.value=s*n.audioStrength,r.uSnare.value=c*n.audioStrength,r.uHihat.value=l*n.audioStrength,r.uRingWidth.value=n.ringWidth,r.uWaveStrength.value=n.waveStrength,r.uPointSize.value=n.pointSize;let u=o?Math.min(1.5,Math.sqrt(D(a.mid))*.65+Math.sqrt(D(a.high))):0,d=(.55+.12*Math.sin(t*5e-4))*u*n.colorReactivity,f=o?1/Math.max(.02,n.colorResponse):1/.18;this.hue=O(this.hue,d,f,e),this.saturation=O(this.saturation,o?Math.min(.98,.82+D(a.bass)*n.saturationBoost*.32):.82,f,e),this.lightness=O(this.lightness,o?.49+D(a.energy)*.045+D(a.high)*.02:.51,f,e),r.uHueShift.value=this.hue,r.uColorSpread.value=O(r.uColorSpread.value,o?Math.min(.65,u*.65):0,o?f:1/.18,e),r.uSaturation.value=this.saturation,r.uLightness.value=this.lightness,this.bloom.strength=n.bloomStrength*(1+i.energy*.33+s*.3),this.bloom.radius=n.bloomRadius,n.bloomThreshold=D(n.bloomThreshold),this.bloom.threshold=n.bloomThreshold}render(){if(this.disposed)return;let e=performance.now(),t=this.lastTime===null?1/60:Math.min(Math.max((e-this.lastTime)/1e3,0),.1);this.lastTime=e,this.updateAudio(t,e),this.controls.update(),this.composer.render()}onWindowResize(){if(this.disposed)return;let{width:e,height:t}=this.size();this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.uniforms.uPixelRatio.value=this.renderer.getPixelRatio()}resetGuiCamera(){this.camera.position.set(0,0,7.8/Math.min(1,this.camera.aspect)),this.controls.target.set(0,0,0),this.controls.update()}resetState(){this.audio=null,this.lastTime=null,this.elapsed=0,this.hue=0,this.saturation=.82,this.lightness=.51;for(let e of Object.keys(this.levels))this.levels[e]=0;for(let e of[`uBass`,`uMid`,`uHigh`,`uHit`,`uSnare`,`uHihat`,`uColorSpread`,`uHueShift`,`uTime`])this.uniforms[e].value=0;this.uniforms.uSaturation.value=.82,this.uniforms.uLightness.value=.51,this.resetGuiCamera()}dispose(){this.disposed||(this.disposed=!0,this.settingsButton.removeEventListener(`click`,this.toggleGUI),x(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle.remove(),this.controls.dispose(),this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.ring.geometry.dispose(),this.ringMaterial.dispose(),this.composer.dispose(),this.scene.clear(),this.renderer.dispose())}};export{A as default};