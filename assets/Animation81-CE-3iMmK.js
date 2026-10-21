import{$n as e,Ct as t,D as n,Gt as r,H as i,Hn as a,Lr as o,Mr as s,Nr as c,Ot as l,Pr as u,X as d,Y as f,Zt as ee,_t as te,it as p,kt as ne,nr as m,qt as h,r as re,tr as ie,tt as g,xt as ae}from"./three.module-Cl1eh3-1.js";import{a as oe,i as se,n as _,r as ce,t as le}from"./GUIHelper-DNd0uFVI.js";import{t as ue}from"./OrbitControls-Bw7OgNlo.js";import{a as v,c as de,m as fe,n as pe,s as me}from"./PerceptualColor-CpM8fhF0.js";var y=(e,t=1)=>Math.min(t,Math.max(0,Number.isFinite(e)?e:0)),b=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),x={lightCount:[50,4e3,1,`光柱数量`],lightWidth:[.2,4,.05,`光柱粗细`],jump:[0,5,.05,`独立跳动幅度`],restHeight:[.05,1,.01,`跳动最低高度`],sensitivity:[.5,4,.05,`频谱灵敏度`],attack:[5,80,1,`上升速度`],release:[1,25,.5,`回落速度`],sharpness:[0,1,.01,`光柱锐度`],glow:[0,1.5,.05,`外部光晕`],reflectionLength:[.5,2.5,.05,`倒影长度`],waterDistortion:[0,3,.05,`水纹扭曲`],waterDetail:[0,3,.05,`细纹亮度`],saturation:[0,3,.05,`颜色饱和度`],colorStrength:[0,1.5,.05,`音频变色强度`],colorSpeed:[.5,12,.5,`变色响应速度`],exposure:[.3,2,.05,`曝光`]},S={uJumpAmount:`jump`,uRestHeight:`restHeight`,uWaterDistortion:`waterDistortion`,uWaterDetail:`waterDetail`,uSharpness:`sharpness`,uGlow:`glow`,uLightWidth:`lightWidth`,uSaturation:`saturation`},he=Array.from({length:256},(e,t)=>`light${t}`),C=class{static get audioProfile(){return{smoothing:.35,bands:Array.from({length:256},(e,t)=>({name:`light${t}`,startBin:Math.max(1,Math.floor(40*400**(t/256)/(44100/2048))),endBin:Math.max(1,Math.ceil(40*400**((t+1)/256)/(44100/2048))-1)}))}}constructor(e,t={}){this.canvas=e,this.originalCanvasTitle=e.title,this.globalBackgroundPolicy=`inherit`,this.defaultSettings=Object.freeze({jump:3,restHeight:.16,sensitivity:1.8,attack:38,release:9,reflectionLength:1.4,waterDistortion:1,waterDetail:1,colorSpeed:4,exposure:1.05,sharpness:.85,glow:.35,lightCount:1350,lightWidth:2,saturation:1.5,colorStrength:1}),this.settings={...this.defaultSettings,...t},this.applySettings(),this.events=new AbortController,this.lastTime=null,this.lastAudioTime=-1/0;try{this.init()}catch(e){throw this.dispose(),e}}init(){if(this.disposed||this.renderer)return;let _=this.settings,S=this.renderer=new re({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`});S.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),S.setClearColor(`#101510`),S.outputColorSpace=e,S.toneMapping=4,S.toneMappingExposure=_.exposure;let C=new Float32Array(256),w=this.spectrumTexture=new n(C,256,1,a,i);w.minFilter=te,w.magFilter=te,w.needsUpdate=!0;let T={uTime:{value:0},uResolution:{value:new s},uAudio:{value:new u},uPulse:{value:0},uWaveAge:{value:10},uActive:{value:0},uSpectrum:{value:w},uJumpAmount:{value:_.jump},uRestHeight:{value:_.restHeight},uWaterDistortion:{value:_.waterDistortion},uWaterDetail:{value:_.waterDetail},uSharpness:{value:_.sharpness},uGlow:{value:_.glow},uLightWidth:{value:_.lightWidth},uSaturation:{value:_.saturation},uBillboard:{value:new s(1,0)},uTint:{value:new c(1,1,1)},uColorMix:{value:0}},E=this.scene=new ie,D=this.camera=new r(48,window.innerWidth/window.innerHeight,.1,180);D.position.set(0,3.8,23),D.lookAt(0,-.4,-24);let O=this.controls=new ue(D,S.domElement);O.target.set(0,-.4,-24),O.mouseButtons={LEFT:t.ROTATE,MIDDLE:t.DOLLY,RIGHT:t.PAN},O.enableDamping=!0,O.dampingFactor=.08,O.screenSpacePanning=!1,O.minDistance=8,O.maxDistance=110,O.minPolarAngle=.12,O.maxPolarAngle=Math.PI/2-.08,O.rotateSpeed=.65,O.panSpeed=.75,O.update(),O.saveState(),S.domElement.title=`左键旋转 · 右键平移 · 滚轮缩放`;let k=new f;E.add(k);let A=this.reflection=new o(1,1,{type:d}),j=`
        attribute float aSeed;attribute vec3 aColor;
        varying vec2 vUv; varying vec3 vColor;varying float vDistance;
        varying float vAspect;
        uniform float uTime;uniform vec4 uAudio;
        uniform float uActive;
        uniform sampler2D uSpectrum;
        uniform float uJumpAmount,uRestHeight,uLightWidth;
        uniform vec2 uBillboard;
        void main(){
          vUv=uv;vColor=aColor;vec3 p=position;
          float sway=sin(uTime*.45+aSeed*31.)*.012;
          // Analytic swept light: easeOutQuart growth reconstructs the original
          // accumulated path without a frame-rate-dependent feedback texture.
          float progress=clamp(uTime/(1.2+aSeed*3.5),0.,1.);
          p.y*=1.-pow(1.-progress,4.);
          // Every light samples its own fine-frequency position. Stable seeds
          // distribute frequencies through the scene, without forming an FFT chart.
          float frequencyPosition=mix(.025,.975,aSeed);
          float drive=texture2D(uSpectrum,vec2(frequencyPosition,.5)).r;
          float lift=uRestHeight+drive*uJumpAmount;
          float heightScale=mix(1.,clamp(lift,.05,5.),uActive);
          p.y*=heightScale;
          p.x*=uLightWidth;
          vAspect=length(instanceMatrix[1].xyz)/max(.001,length(instanceMatrix[0].xyz)*uLightWidth)
            *heightScale*(1.-pow(1.-progress,4.));
          p.x+=p.y*sway*(1.+uAudio.w*2.);
          vec4 world=instanceMatrix*vec4(p,1.);
          // Cylindrical billboards keep each light visible when orbiting around it.
          world.xz=instanceMatrix[3].xz+uBillboard*(p.x*length(instanceMatrix[0].xyz));
          vec4 view=modelViewMatrix*world;vDistance=-view.z;
          gl_Position=projectionMatrix*view;
        }
      `,ge=this.material=new m({uniforms:T,vertexShader:j,transparent:!0,depthWrite:!1,blending:2,side:2,fragmentShader:`
        uniform vec4 uAudio; uniform float uColorMix;uniform vec3 uTint;
        uniform float uSaturation;
        vec3 grade(vec3 c){
          float l=dot(c,vec3(.2126,.7152,.0722));
          vec3 result=mix(c,l*uTint,uColorMix);
          // Scale chroma around luminance. Limit the scale before any channel
          // crosses zero, rather than clipping channels and shifting hue.
          float gray=dot(result,vec3(.2126,.7152,.0722));
          vec3 chroma=result-vec3(gray);
          float floorChannel=min(chroma.r,min(chroma.g,chroma.b));
          float safeScale=floorChannel<0.?gray/max(-floorChannel,.00001):3.;
          return vec3(gray)+chroma*min(uSaturation,safeScale);
        }
      
        varying vec2 vUv;varying vec3 vColor;varying float vDistance;
        varying float vAspect;uniform float uSharpness,uGlow;
        void main(){
          float y=vUv.y;
          float width=mix(.06,.26,pow(y,.8));
          float trail=exp(-pow((vUv.x-.5)/width,2.)*2.5);
          trail*=smoothstep(0.,.12,y)*(1.-smoothstep(.88,.96,y));
          // A bright, antialiased core supplies definition. The round endpoint
          // uses the actual animated aspect ratio so music cannot stretch it.
          float dx=abs(vUv.x-.5);
          float aa=max(fwidth(vUv.x),.002);
          float coreWidth=mix(.025,.085,pow(y,.65));
          float core=1.-smoothstep(coreWidth-aa,coreWidth+aa,dx);
          core*=smoothstep(0.,.08,y)*(1.-smoothstep(.905,.92,y));
          vec2 end=vec2((vUv.x-.5)/.19,(y-.91)*max(vAspect,1.)/.19);
          float edge=max(fwidth(length(end)),.02);
          float tip=1.-smoothstep(.8-edge,1.+edge,length(end));
          float soft=trail*(.12+.55*y*y);
          float alpha=(mix(soft,core*(.3+.55*y),uSharpness)+tip*.95+soft*uGlow*.15)*exp(-vDistance*.006);
          vec3 c=grade(vColor)*(1.+tip*.7);
          c=mix(c,grade(mix(vColor,vec3(1.),.24)),tip*.4);
          gl_FragColor=vec4(c,alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),M=4e3,N=this.geometry=new h(1,1,1,18);N.translate(0,.5,0);let P=this.columns=new p(N,ge,M),F=new Float32Array(M),I=new Float32Array(M*3),L=217,R=()=>(L=Math.imul(L,1664525)+1013904223>>>0,L/4294967296),z=[`#ea9751`,`#fd8637`,`#d3661c`,`#b8593f`,`#e61111`,`#4a727a`,`#086253`,`#2e201f`].map(v),B=new l,V=new c,H=new c,U=new ee,W=[];for(let e=0;e<M;e++){let t=-4-R()*65,n=(R()-.5)*(52+Math.abs(t)*.6),r=Math.sqrt(-2*Math.log(Math.max(1e-5,R())))*Math.cos(2*Math.PI*R()),i=.12+Math.abs(r)*2.9,a=.16+Math.sqrt(i)*.18;V.set(n,0,t),H.set(a,i,a),B.compose(V,U,H),P.setMatrixAt(e,B),W.push({x:n,z:t,height:i,width:a}),F[e]=R();let o=(.5+.25*Math.sin(n*.15)+.24*Math.sin(n*.43+1.8))*7,s=Math.floor(o),c=me(de(z[s],z[Math.min(7,s+1)],o-s));I.set(c,e*3)}N.setAttribute(`aSeed`,new g(F,1)),N.setAttribute(`aColor`,new g(I,3)),k.add(P);let G=this.glowGeometry=new h(1,1);G.translate(0,.5,0),G.setAttribute(`aSeed`,new g(F,1)),G.setAttribute(`aColor`,new g(I,3));let _e=this.glowMaterial=new m({uniforms:T,vertexShader:j,transparent:!0,depthWrite:!1,blending:2,side:2,fragmentShader:`
        uniform vec4 uAudio; uniform float uColorMix;uniform vec3 uTint;
        uniform float uSaturation;
        vec3 grade(vec3 c){
          float l=dot(c,vec3(.2126,.7152,.0722));
          vec3 result=mix(c,l*uTint,uColorMix);
          // Scale chroma around luminance. Limit the scale before any channel
          // crosses zero, rather than clipping channels and shifting hue.
          float gray=dot(result,vec3(.2126,.7152,.0722));
          vec3 chroma=result-vec3(gray);
          float floorChannel=min(chroma.r,min(chroma.g,chroma.b));
          float safeScale=floorChannel<0.?gray/max(-floorChannel,.00001):3.;
          return vec3(gray)+chroma*min(uSaturation,safeScale);
        }
      
          varying vec2 vUv;varying vec3 vColor;varying float vDistance;
          varying float vAspect;uniform float uGlow;
          void main(){vec2 p=vec2((vUv.x-.5)*4.,(vUv.y-.91)*max(vAspect,1.)*4.);
            float halo=exp(-dot(p,p)*2.2);
            float line=exp(-pow((vUv.x-.5)*25.,2.))*smoothstep(0.,.8,vUv.y)*.13;
            gl_FragColor=vec4(grade(vColor)*(1.+uAudio.z*.3),min(.4,(halo*.15+line*.3)*exp(-vDistance*.008))*uGlow);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `}),K=this.glows=new p(G,_e,M);W.forEach((e,t)=>{B.compose(new c(e.x,0,e.z),U,new c(e.width*1.2,e.height,1)),K.setMatrixAt(t,B)}),k.add(K),P.frustumCulled=K.frustumCulled=!1,P.count=K.count=_.lightCount;let ve=this.waterGeometry=new h(600,600,160,160);ve.rotateX(-Math.PI/2);let q=new ne(ve,this.waterMaterial=new m({uniforms:{...T,uReflection:{value:A.texture}},vertexShader:`
          uniform float uTime,uWaveAge;uniform vec4 uAudio;varying vec3 vWorld;
          void main(){vec3 p=position;
            float wave=sin(p.x*.65+uTime*.8)*cos(p.z*.8-uTime*.6);
            vec2 worldXZ=(modelMatrix*vec4(p,1.)).xz;
            float front=exp(-pow((length(worldXZ)-uWaveAge*8.)*.7,2.))*exp(-uWaveAge*.8);
            p.y=wave*(.018+uAudio.x*.065)+sin(length(worldXZ)*2.4-uWaveAge*15.)*front*.09;
            vWorld=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}
        `,fragmentShader:`
          uniform sampler2D uReflection;uniform vec2 uResolution;
          uniform float uTime,uPulse;uniform vec4 uAudio;varying vec3 vWorld;
          uniform float uWaterDistortion,uWaterDetail;
          void main(){
            vec2 uv=gl_FragCoord.xy/uResolution;
            float nearFactor=smoothstep(-75.,20.,vWorld.z);
            float w=sin(vWorld.z*2.1+uTime*.8+sin(vWorld.x*.47))*sin(vWorld.x*.65+uTime*.3);
            float fine=sin(vWorld.z*9.+sin(vWorld.x*1.3)+uTime*.6);
            vec2 offset=vec2(w*.018+fine*.003,sin(vWorld.z*4.-uTime)*.002)*nearFactor*(1.+uAudio.x*1.5)*uWaterDistortion;
            vec3 reflected=texture2D(uReflection,clamp(uv+offset,vec2(.001),vec2(.999))).rgb;
            float contour=vWorld.z*38.+sin(vWorld.x*.8+vWorld.z*.4)*3.+sin(vWorld.x*3.+vWorld.z*.8);
            float grain=sin(contour+uTime*.6)*.5+.5;
            float fresnel=.55+.3*(1.-nearFactor);
            vec3 c=mix(vec3(.007,.013,.009),reflected,fresnel);
            c*=.64+.36*grain;
            float thread=pow(.5+.5*sin(contour),22.);
            c+=vec3(.008,.012,.008)*thread*nearFactor*uWaterDetail;
            c+=vec3(.018,.028,.018)*pow(max(0.,w),12.)*(.3+uAudio.z);
            c+=reflected*uPulse*.12*exp(-abs(vWorld.z)*.13);
            gl_FragColor=vec4(c,1.);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `}));q.position.z=-180,E.add(q),Object.assign(this,{uniforms:T,lights:k,spectrumValues:C,water:q}),this.onWindowResize(),this.guiContainer=ce(`Animation81-gui-container`),this.scrollbarStyle=le(`Animation81-gui-container`),document.body.appendChild(this.guiContainer);let J=this.gui=new oe({container:this.guiContainer,title:`流光映水`,width:285});for(let[e,t]of[[`光柱外观`,[`lightCount`,`lightWidth`]],[`光迹跳动`,[`jump`,`restHeight`,`sensitivity`,`attack`,`release`,`sharpness`,`glow`]],[`水面与倒影`,[`reflectionLength`,`waterDistortion`,`waterDetail`]],[`色彩与亮度`,[`saturation`,`colorStrength`,`colorSpeed`,`exposure`]]]){let n=J.addFolder(e);for(let e of t){let[t,r,i,a]=x[e];n.add(_,e,t,r,i).name(a).onChange(()=>this.applySettings())}}this.settingsButton=se(`Animation81-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?J.show():J.hide()},{signal:this.events.signal}),document.body.appendChild(this.settingsButton),J.hide();let Y=0,X=0,Z=0,Q=0,$=v(`#c4dc74`);this.updateAudioAnalysis=(e,t)=>{if(this.disposed)return;t=y(t,.1);let n=e?.isPlaying===!0,r=n?e.audioFeature?.animation:null,i=!!r&&y(e.audioFeature?.energy?.rms??r.energy)>.008,a=i?e.audioFeature?.customBands:null,o=i?y(r.bass):0,s=i?y(r.mid):0,c=i?y(r.high):0,l=i?y(r.motion):0,u=i?y(r.energy):0,d=i?y(r.kick,2):0;for(let e=0;e<256;e++){let n=a?.[he[e]]??(e<70?o:e<180?s:c),r=i?Math.min(1,Math.max(0,(y(n)-.035)*_.sensitivity)):0;C[e]=b(C[e],r,r>C[e]?_.attack:_.release,t)}w.needsUpdate=!0;let f=n;if(T.uActive.value=b(T.uActive.value,+!!f,f?15:4,t),Y+=t*(1+l*1.8),T.uTime.value=Y,T.uAudio.value.set(o,s,c,l),Q=Math.max(0,Q-t),T.uWaveAge.value+=t,d>.25&&d>Z*1.25&&Q===0&&(T.uWaveAge.value=0,Q=.22),Z=d,T.uPulse.value=Math.min(1,d),i&&(X=(X+t*(.025*u+.07*s+.12*c))%1),i){let e=X+s*.16+c*.26,[t,n]=fe($[1],$[2],e),r=1+o*.45,i=pe(me([$[0],t*r,n*r])),a=Math.max(.05,i[0]*.2126+i[1]*.7152+i[2]*.0722);T.uTint.value.set(i[0]/a,i[1]/a,i[2]/a)}T.uColorMix.value=b(T.uColorMix.value,i?Math.min(.95,(.35+u*.6)*_.colorStrength):0,_.colorSpeed,t),!i&&T.uColorMix.value<.001&&(X=0)},this.renderScene=()=>{if(this.disposed)return;O.update(),D.updateMatrixWorld(),T.uBillboard.value.set(D.matrixWorld.elements[0],D.matrixWorld.elements[2]).normalize();let e=S.outputColorSpace,t=S.toneMapping,n=S.getRenderTarget(),r=k.scale.y,i=q.visible;try{q.visible=!1,k.scale.y=-_.reflectionLength,S.outputColorSpace=ae,S.toneMapping=0,S.setRenderTarget(A),S.render(E,D)}finally{S.setRenderTarget(n),S.outputColorSpace=e,S.toneMapping=t,k.scale.y=r,q.visible=i}S.render(E,D)},this.resetAudio=()=>{this.disposed||(Y=X=Z=Q=0,T.uTime.value=T.uActive.value=T.uPulse.value=T.uColorMix.value=0,T.uWaveAge.value=10,T.uAudio.value.set(0,0,0,0),T.uTint.value.set(1,1,1),C.fill(0),w.needsUpdate=!0)}}applySettings(){if(!this.disposed){for(let[e,[t,n]]of Object.entries(x)){let r=this.settings[e];this.settings[e]=Math.min(n,Math.max(t,Number.isFinite(r)?r:this.defaultSettings[e]))}if(this.settings.lightCount=Math.round(this.settings.lightCount),this.uniforms)for(let[e,t]of Object.entries(S))this.uniforms[e].value=this.settings[t];this.columns&&(this.columns.count=this.settings.lightCount),this.glows&&(this.glows.count=this.settings.lightCount),this.renderer&&(this.renderer.toneMappingExposure=this.settings.exposure),this.gui?.controllersRecursive().forEach(e=>e.updateDisplay())}}updateWithAudioData(e){this.disposed||(this.frame=e,this.lastAudioTime=performance.now())}render(){if(this.disposed||document.hidden)return;let e=performance.now(),t=this.lastTime===null?1/60:Math.min(.1,Math.max(0,(e-this.lastTime)/1e3));this.lastTime=e,this.updateAudioAnalysis(e-this.lastAudioTime<250?this.frame:null,t),this.renderer.toneMappingExposure=this.settings.exposure,this.renderScene()}onWindowResize(){if(this.disposed||!this.uniforms)return;let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(e,t,!1),this.renderer.getDrawingBufferSize(this.uniforms.uResolution.value),this.reflection.setSize(Math.max(1,Math.round(this.uniforms.uResolution.value.x*.75)),Math.max(1,Math.round(this.uniforms.uResolution.value.y*.75))),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}resetGuiCamera(){this.disposed||!this.controls||(this.controls.enableDamping=!1,this.controls.update(),this.controls.reset(),this.controls.update(),this.controls.enableDamping=!0)}resetState(){this.disposed||(this.frame=null,this.lastAudioTime=-1/0,this.lastTime=null,this.resetAudio?.(),this.applySettings(),this.resetGuiCamera())}dispose(){if(!this.disposed){this.disposed=!0,this.events?.abort(),this.frame=null,_(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.controls?.dispose();for(let e of[`columns`,`glows`,`geometry`,`material`,`glowGeometry`,`glowMaterial`,`waterGeometry`,`waterMaterial`,`reflection`,`spectrumTexture`])this[e]?.dispose();this.scene?.clear(),this.renderer?.dispose(),this.canvas?.title===`左键旋转 · 右键平移 · 滚轮缩放`&&(this.canvas.title=this.originalCanvasTitle??``),this.renderScene=this.updateAudioAnalysis=this.resetAudio=null;for(let e of[`columns`,`glows`,`geometry`,`material`,`glowGeometry`,`glowMaterial`,`waterGeometry`,`waterMaterial`,`reflection`,`spectrumTexture`,`spectrumValues`,`uniforms`,`lights`,`water`,`scene`,`camera`,`controls`,`renderer`,`gui`,`guiContainer`,`settingsButton`,`scrollbarStyle`])this[e]=null}}};export{C as default};