import{At as e,Gt as t,Jt as n,Nr as r,Pr as i,i as a,nr as o,r as s,rr as c}from"./three.module-CI1jJgD_.js";import{t as l}from"./AnimationInputListeners-CVym640U.js";import{a as u,i as d,n as f,r as p,t as m}from"./GUIHelper-CK73tCKI.js";import{t as h}from"./PerceptualColor-5EYeXve1.js";var g=(e,t,n)=>Math.max(t,Math.min(n,e)),_=(e,t=1)=>g(Number.isFinite(e)?e:0,0,t),v=`varying vec2 vTexCoord;
      void main() {
          vTexCoord = vec2(uv.x, 1.0 - uv.y);
          gl_Position = vec4(position.xy, 0.0, 1.0);
      }`,y=`
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 uMouse;
      uniform float uDepthFalloff;
      uniform float uAbsorption;
      uniform float uParallax;
      uniform float uBreath;
      uniform float uThickness;
      uniform float uTwist;
      uniform float uFold;
      uniform float uShock;
      uniform float uShockTravel;
      uniform float uAudioMix;
      uniform float uAudioGain;
      uniform float uExternalBackground;
      uniform vec3 uAudioColorA;
      uniform vec3 uAudioColorB;
      varying vec2 vTexCoord;

      const int MARCH_STEPS = 20;
      const int TURBULENCE_LAYERS = 7;
      const vec3 PALETTE_PHASE = vec3(6.0, 1.0, 9.0);

      vec3 fieldCoordinates(vec3 world, float depth, float wave) {
          float angle = atan(world.y / 0.2, world.x) * 2.0;
          float height = world.z / 3.0;
          float radius = length(world.xy) - 5.0 - uBreath - depth * 0.2;
          radius += wave * 0.75 * sin(angle * 1.5 + height);
          angle += uTwist * sin(height * 0.8) + wave * 0.3;
          radius += uFold * sin(angle * 6.0 + height * 3.0 + iTime * 0.5);
          return vec3(
              angle,
              height * (1.0 - uThickness * 0.2),
              radius / (1.0 + uThickness)
          );
      }

      vec3 distortField(vec3 field, float phase) {
          for (int layer = 1; layer <= TURBULENCE_LAYERS; ++layer) {
              float frequency = float(layer);
              field += sin(field.yzx * frequency + phase) / frequency;
          }
          return field;
      }

      float fieldDistance(vec3 field) {
          return length(vec4(0.4 * cos(field) - 0.4, field.z));
      }

      vec3 fieldEmission(vec3 field, float iteration, float depth, float distance) {
          float phase = field.x + iteration * 0.4 + depth;
          return (1.0 + cos(phase + PALETTE_PHASE)) / distance;
      }

      #ifdef DEPTH_EFFECTS
      vec3 integrateSegment(vec3 emission, float depth, float distance,
                            inout float transmission) {
          float fade = exp(-uDepthFalloff * depth);
          float density = 1.0 - exp(-0.35 / (0.25 + distance));
          float opticalDepth = uAbsorption * density;
          float segmentTransmission = exp(-opticalDepth);
          float weight = opticalDepth < 0.001
              ? 1.0 - 0.5 * opticalDepth
              : (1.0 - segmentTransmission) / opticalDepth;
          vec3 contribution = emission * fade * transmission * weight;
          transmission *= segmentTransmission;
          return contribution;
      }
      #endif

      vec3 mapHighlights(vec3 radiance) {
          vec3 x = clamp(radiance * radiance / 400.0, 0.0, 3.0);
          vec3 squared = x * x;
          return x * (27.0 + squared) / (27.0 + 9.0 * squared);
      }

      vec3 traceAccretion(vec3 origin, vec3 direction) {
          float depth = 0.0;
          vec3 radiance = vec3(0.0);
      #ifdef DEPTH_EFFECTS
          float transmission = 1.0;
      #endif
          for (int step = 0; step < MARCH_STEPS; ++step) {
              float sampleDepth = depth;
              float iteration = float(step);
              float front = (sampleDepth - uShockTravel) / 1.8;
              float wave = uShock * exp(-front * front);
              vec3 world = origin + depth * direction + 0.1;
              vec3 field = distortField(fieldCoordinates(world, depth, wave),
                                        iTime + 0.3 * iteration);
              float distance = fieldDistance(field);
              depth += distance;
              vec3 emission = fieldEmission(field, iteration, depth, max(distance, 0.0001));
              emission *= 1.0 + wave * 1.6;
      #ifdef DEPTH_EFFECTS
              radiance += integrateSegment(emission, sampleDepth,
                                           max(distance, 0.0001), transmission);
      #else
              radiance += emission;
      #endif
          }
          return radiance;
      }

      void main() {
          vec2 screen = vTexCoord * 2.0 - 1.0;
          screen.x *= iResolution.x / iResolution.y;
          vec3 origin = vec3(uMouse * vec2(1.0, 0.5) * uParallax, 0.0);
          vec3 direction = normalize(vec3(screen - origin.xy / 5.0, 1.0));
          vec3 base = mapHighlights(traceAccretion(origin, direction));
          float peak = max(base.r, max(base.g, base.b));
          float shade = clamp(base.b - base.r + 0.5, 0.0, 1.0);
          vec3 tint = mix(uAudioColorA, uAudioColorB, shade);
          tint /= max(max(tint.r, max(tint.g, tint.b)), 0.0001);
          vec3 color = mix(base, tint * peak, uAudioMix);
          color *= uAudioGain;
          color /= max(1.0, max(color.r, max(color.g, color.b)));
          float coverage = max(color.r, max(color.g, color.b));
          gl_FragColor = vec4(color, mix(1.0, coverage, uExternalBackground));
      }`,b=class{constructor(e,t,n,r){this.color=t,this.uniforms=n,this.settings=r,this.palette=t.createPerceptualPalette({body:`#aa55ee`,edge:`#ed76b9`,air:`#5ba9f5`}),this.displayColor=new e.Color,this.resetState()}resetState(){this.previousTime=null,this.previousKick=this.travel=this.pulse=0,this.lastHit=-1/0,this.hue=0,this.colorMid=this.colorHigh=this.saturation=0,this.flow=1,this.uniforms.uBreath.value=this.uniforms.uShock.value=this.uniforms.uAudioMix.value=0,this.uniforms.uThickness.value=this.uniforms.uTwist.value=this.uniforms.uFold.value=0,this.uniforms.uAudioGain.value=1,this.uniforms.uShockTravel.value=0,this.updatePalette()}updateWithAudioData(e,t){let n=this.previousTime===null?0:g((t-this.previousTime)/1e3,0,.1);this.previousTime=t;let r=this.settings.audioEnabled&&e!=null&&e.isPlaying===!0&&(e.audioFeature?.energy?.rms===void 0||e.audioFeature.energy.rms>=.008)?e.audioFeature?.animation:null,i=this.uniforms,a=this.settings.audioStrength,o=1-Math.exp(-n/this.settings.colorResponse),s=1-Math.exp(-n/.18),c=r?o:s,l=(e,t)=>{e.value+=(t-e.value)*c},u=r?_(r.kick,2):0;this.pulse*=Math.exp(-7*n),this.travel=this.pulse>1e-4?this.travel+n*17:0,u>.12&&u>this.previousKick*1.18&&t-this.lastHit>150&&(this.pulse=_(u,1.5),this.travel=0,this.lastHit=t),this.previousKick=u,r||(this.pulse*=Math.exp(-8*n)),i.uShock.value=this.pulse*a,i.uShockTravel.value=this.travel;let d=(e,t)=>{e.value=t};d(i.uBreath,r?_(r.bass)*.9*a:0),d(i.uThickness,r?_(r.bass)*.32*a:0),d(i.uTwist,r?_(r.mid)*.65*a:0),d(i.uFold,r?_(r.high)*.18*a:0),this.flow=r?1+_(r.motion)*1.6*a:1,l(i.uAudioMix,r?g((.25+_(r.energy)*.65)*this.settings.colorReactivity,0,.95):0),i.uAudioGain.value=r?1+_(r.energy)*.12*a:1;let f=r?_(r.mid):0,p=r?_(r.high):0,m=(f*.2+p*.32)*this.settings.colorReactivity;if(this.hue+=(m-this.hue)*c,this.colorMid+=(f-this.colorMid)*c,this.colorHigh+=(p-this.colorHigh)*c,this.saturation+=((r?_(r.bass)*this.settings.saturationBoost:0)-this.saturation)*c,!r&&i.uAudioMix.value<1e-5){i.uAudioMix.value=0,i.uAudioGain.value=1;return}this.updatePalette()}updatePalette(){let e=1+this.saturation;[this.color.mixOklab(this.palette.body,this.palette.air,this.colorHigh*.6),this.color.mixOklab(this.palette.edge,this.palette.air,this.colorMid*.65)].forEach((t,n)=>{let r=this.color.rotateOklabHue(t[1],t[2],this.hue),i=this.color.mapOklabToLinearRgb([t[0],r[0]*e,r[1]*e]);this.displayColor.setRGB(...i).convertLinearToSRGB(),(n===0?this.uniforms.uAudioColorA.value:this.uniforms.uAudioColorB.value).set(this.displayColor.r,this.displayColor.g,this.displayColor.b)})}},x=class{static globalBackgroundPolicy=`inherit`;constructor(e,t={}){this.canvas=e,this.globalBackgroundPolicy=`inherit`,this.events=new AbortController,this.defaultSettings=Object.freeze({paused:!1,speed:1,depthEnabled:!0,depthFalloff:.012,absorption:.09,parallax:.2,audioEnabled:!0,audioStrength:1,colorReactivity:.5,saturationBoost:.5,colorResponse:.12}),this.settings={...this.defaultSettings,...t},this.pointerTarget=new r,this.frame=null,this.lastAudioTime=-1/0,this.lastTime=null;try{this.init()}catch(e){throw this.dispose(),e}}setExternalBackgroundEnabled(e){this.disposed||(this.uniforms.uExternalBackground.value=+!!e)}init(){this.renderer=new s({canvas:this.canvas,antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearAlpha(1),this.renderer.toneMapping=0,this.scene=new o,this.camera=new t(-1,1,1,-1,0,1),this.uniforms={iResolution:{value:new r},iTime:{value:0},uExternalBackground:{value:0},uMouse:{value:new r},uAudioColorA:{value:new i(1,1,1)},uAudioColorB:{value:new i(1,1,1)}};for(let e of[`uDepthFalloff`,`uAbsorption`,`uParallax`,`uBreath`,`uShock`,`uShockTravel`,`uThickness`,`uTwist`,`uFold`,`uAudioMix`])this.uniforms[e]={value:0};this.uniforms.uAudioGain={value:1},this.material=new c({uniforms:this.uniforms,defines:{},vertexShader:v,fragmentShader:y,depthTest:!1,depthWrite:!1,blending:0,toneMapped:!1}),this.geometry=new n(2,2),this.surface=new e(this.geometry,this.material),this.surface.frustumCulled=!1,this.scene.add(this.surface),this.response=new b(a,h,this.uniforms,this.settings),this.updateDepth(),this.onWindowResize();let u=(e,t,n)=>l(e,t,n,{signal:this.events.signal});u(this.canvas,`pointermove`,e=>{let t=this.canvas.getBoundingClientRect();this.pointerTarget.set(g((e.clientX-t.left)/Math.max(1,t.width)*2-1,-1,1),g((e.clientY-t.top)/Math.max(1,t.height)*2-1,-1,1))});let d=()=>this.pointerTarget.set(0,0);for(let e of[`pointerleave`,`pointercancel`])u(this.canvas,e,d);u(this.canvas,`pointerup`,e=>{e.pointerType!==`mouse`&&d()}),u(window,`blur`,d),u(window,`resize`,()=>this.onWindowResize()),u(document,`visibilitychange`,()=>{this.lastTime=null,this.frame=null,this.response.resetState()}),u(this.canvas,`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.resetState()}),u(this.canvas,`webglcontextrestored`,()=>{this.contextLost=!1,this.onWindowResize()}),this.setupGUI()}updateDepth(){let e=this.settings.depthEnabled;Object.hasOwn(this.material.defines,`DEPTH_EFFECTS`)!==e&&(e?this.material.defines.DEPTH_EFFECTS=1:delete this.material.defines.DEPTH_EFFECTS,this.material.needsUpdate=!0);for(let[t,n]of[[`uDepthFalloff`,`depthFalloff`],[`uAbsorption`,`absorption`],[`uParallax`,`parallax`]])this.uniforms[t].value=e?this.settings[n]:0}setupGUI(){this.guiContainer=p(`Animation80-gui-container`),this.scrollbarStyle=m(`Animation80-gui-container`),document.body.appendChild(this.guiContainer),this.gui=new u({container:this.guiContainer,title:`吸积流光`,width:285});let e=this.settings,t=this.gui;t.add(e,`paused`).name(`暂停动画`).onChange(()=>{this.lastTime=null,this.response.previousTime=null}),t.add(e,`speed`,0,2,.05).name(`动画速度`),t.add(e,`depthEnabled`).name(`空间层次增强`).onChange(()=>this.updateDepth());for(let[n,r,i,a]of[[`depthFalloff`,`距离衰减`,.08,.001],[`absorption`,`前后遮挡`,.6,.01],[`parallax`,`鼠标视差`,.5,.01]])t.add(e,n,0,i,a).name(r).onChange(()=>this.updateDepth());let n=t.addFolder(`音频响应`);n.add(e,`audioEnabled`).name(`启用音频互动`).onChange(()=>this.response.resetState());for(let[t,r,i]of[[`audioStrength`,`形态响应强度`,2],[`colorReactivity`,`音频变色强度`,2],[`saturationBoost`,`低频彩度增强`,1.5]])n.add(e,t,0,i,.05).name(r);n.add(e,`colorResponse`,.04,.5,.01).name(`颜色过渡时间`),this.settingsButton=d(`Animation80-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?t.show():t.hide()},{signal:this.events.signal}),document.body.appendChild(this.settingsButton),t.hide()}endGuiPreferencesLoad(e=!0){!e||this.disposed||(this.updateDepth(),this.response.resetState(),this.lastTime=null)}updateWithAudioData(e){this.disposed||(this.frame=e,this.lastAudioTime=performance.now())}render(){if(this.disposed||this.contextLost||document.hidden)return;let e=performance.now(),t=this.lastTime===null?0:g((e-this.lastTime)/1e3,0,.1);this.lastTime=e,!this.settings.paused&&this.settings.speed>0?(this.response.updateWithAudioData(e-this.lastAudioTime<250?this.frame:null,e),this.uniforms.iTime.value+=t*this.settings.speed*this.response.flow,this.uniforms.uMouse.value.lerp(this.pointerTarget,1-Math.exp(-t*8))):this.response.previousTime=null,this.renderer.render(this.scene,this.camera)}onWindowResize(){this.disposed||(this.renderer.setSize(Math.max(1,window.innerWidth),Math.max(1,window.innerHeight),!1),this.renderer.getDrawingBufferSize(this.uniforms.iResolution.value))}resetState(){this.disposed||(this.lastTime=null,this.frame=null,this.lastAudioTime=-1/0,this.uniforms.iTime.value=0,this.pointerTarget.set(0,0),this.uniforms.uMouse.value.set(0,0),this.response.resetState(),this.updateDepth())}dispose(){this.disposed||(this.disposed=!0,this.events.abort(),this.frame=null,f(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.geometry?.dispose(),this.material?.dispose(),this.scene?.clear(),this.renderer?.dispose())}};export{x as default};