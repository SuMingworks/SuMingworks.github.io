import{At as e,Fr as t,Jt as n,Kt as r,Nr as i,O as a,Pr as o,Qt as s,Rr as c,St as l,U as u,Un as d,X as f,Z as ee,at as te,er as ne,kt as re,nr as ie,nt as p,r as ae,rr as m,vt as h,wt as g}from"./three.module-CI1jJgD_.js";import{a as oe,i as se,n as _,r as ce,t as le}from"./GUIHelper-DNd0uFVI.js";import{t as ue}from"./OrbitControls-DLu-nFn1.js";import{a as v,c as de,m as fe,n as pe,s as y}from"./PerceptualColor-5EYeXve1.js";var b=(e,t=1)=>Math.min(t,Math.max(0,Number.isFinite(e)?e:0)),x=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),S={lightCount:[50,4e3,1,`光柱数量`],lightWidth:[.2,4,.05,`光柱粗细`],jump:[0,5,.05,`独立跳动幅度`],restHeight:[.05,1,.01,`跳动最低高度`],sensitivity:[.5,4,.05,`频谱灵敏度`],attack:[5,80,1,`上升速度`],release:[1,25,.5,`回落速度`],sharpness:[0,1,.01,`光柱锐度`],glow:[0,1.5,.05,`外部光晕`],reflectionLength:[.5,2.5,.05,`倒影长度`],waterDistortion:[0,3,.05,`水纹扭曲`],waterDetail:[0,3,.05,`细纹亮度`],saturation:[0,3,.05,`颜色饱和度`],colorStrength:[0,1.5,.05,`音频变色强度`],colorSpeed:[.5,12,.5,`变色响应速度`],exposure:[.3,2,.05,`曝光`]},C={uJumpAmount:`jump`,uRestHeight:`restHeight`,uWaterDistortion:`waterDistortion`,uWaterDetail:`waterDetail`,uSharpness:`sharpness`,uGlow:`glow`,uLightWidth:`lightWidth`,uSaturation:`saturation`},me=Array.from({length:256},(e,t)=>`light${t}`),w=class{static get audioProfile(){return{smoothing:.35,bands:Array.from({length:256},(e,t)=>({name:`light${t}`,startBin:Math.max(1,Math.floor(40*400**(t/256)/(44100/2048))),endBin:Math.max(1,Math.ceil(40*400**((t+1)/256)/(44100/2048))-1)}))}}constructor(e,t={}){this.canvas=e,this.originalCanvasTitle=e.title,this.globalBackgroundPolicy=`inherit`,this.defaultSettings=Object.freeze({jump:3,restHeight:.16,sensitivity:1.8,attack:38,release:9,reflectionLength:1.4,waterDistortion:1,waterDetail:1,colorSpeed:4,exposure:1.05,sharpness:.85,glow:.35,lightCount:1350,lightWidth:2,saturation:1.5,colorStrength:1}),this.settings={...this.defaultSettings,...t},this.applySettings(),this.events=new AbortController,this.lastTime=null,this.lastAudioTime=-1/0;try{this.init()}catch(e){throw this.dispose(),e}}init(){if(this.disposed||this.renderer)return;let _=this.settings,C=this.renderer=new ae({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`});C.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),C.setClearColor(`#101510`),C.outputColorSpace=ne,C.toneMapping=4,C.toneMappingExposure=_.exposure;let w=new Float32Array(256),T=this.spectrumTexture=new a(w,256,1,d,u);T.minFilter=h,T.magFilter=h,T.needsUpdate=!0;let E={uTime:{value:0},uResolution:{value:new i},uAudio:{value:new t},uPulse:{value:0},uWaveAge:{value:10},uActive:{value:0},uSpectrum:{value:T},uJumpAmount:{value:_.jump},uRestHeight:{value:_.restHeight},uWaterDistortion:{value:_.waterDistortion},uWaterDetail:{value:_.waterDetail},uSharpness:{value:_.sharpness},uGlow:{value:_.glow},uLightWidth:{value:_.lightWidth},uSaturation:{value:_.saturation},uBillboard:{value:new i(1,0)},uTint:{value:new o(1,1,1)},uColorMix:{value:0}},D=this.scene=new ie,O=this.camera=new r(48,window.innerWidth/window.innerHeight,.1,180);O.position.set(0,3.8,23),O.lookAt(0,-.4,-24);let k=this.controls=new ue(O,C.domElement);k.target.set(0,-.4,-24),k.mouseButtons={LEFT:g.ROTATE,MIDDLE:g.DOLLY,RIGHT:g.PAN},k.enableDamping=!0,k.dampingFactor=.08,k.screenSpacePanning=!1,k.minDistance=8,k.maxDistance=110,k.minPolarAngle=.12,k.maxPolarAngle=Math.PI/2-.08,k.rotateSpeed=.65,k.panSpeed=.75,k.update(),k.saveState(),C.domElement.title=`左键旋转 · 右键平移 · 滚轮缩放`;let A=new f;D.add(A);let he=this.reflection=new c(1,1,{type:ee}),ge=`
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
      `,_e=this.material=new m({uniforms:E,vertexShader:ge,transparent:!0,depthWrite:!1,blending:2,side:2,fragmentShader:`
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
      `}),j=4e3,M=this.geometry=new n(1,1,1,18);M.translate(0,.5,0);let N=this.columns=new te(M,_e,j),P=new Float32Array(j),F=new Float32Array(j*3),I=217,L=()=>(I=Math.imul(I,1664525)+1013904223>>>0,I/4294967296),R=[`#ea9751`,`#fd8637`,`#d3661c`,`#b8593f`,`#e61111`,`#4a727a`,`#086253`,`#2e201f`].map(v),z=new re,B=new o,V=new o,H=new s,U=[];for(let e=0;e<j;e++){let t=-4-L()*65,n=(L()-.5)*(52+Math.abs(t)*.6),r=Math.sqrt(-2*Math.log(Math.max(1e-5,L())))*Math.cos(2*Math.PI*L()),i=.12+Math.abs(r)*2.9,a=.16+Math.sqrt(i)*.18;B.set(n,0,t),V.set(a,i,a),z.compose(B,H,V),N.setMatrixAt(e,z),U.push({x:n,z:t,height:i,width:a}),P[e]=L();let o=(.5+.25*Math.sin(n*.15)+.24*Math.sin(n*.43+1.8))*7,s=Math.floor(o),c=y(de(R[s],R[Math.min(7,s+1)],o-s));F.set(c,e*3)}M.setAttribute(`aSeed`,new p(P,1)),M.setAttribute(`aColor`,new p(F,3)),A.add(N);let W=this.glowGeometry=new n(1,1);W.translate(0,.5,0),W.setAttribute(`aSeed`,new p(P,1)),W.setAttribute(`aColor`,new p(F,3));let ve=this.glowMaterial=new m({uniforms:E,vertexShader:ge,transparent:!0,depthWrite:!1,blending:2,side:2,fragmentShader:`
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
        `}),G=this.glows=new te(W,ve,j);U.forEach((e,t)=>{z.compose(new o(e.x,0,e.z),H,new o(e.width*1.2,e.height,1)),G.setMatrixAt(t,z)}),A.add(G),N.frustumCulled=G.frustumCulled=!1,N.count=G.count=_.lightCount;let K=this.waterGeometry=new n(600,600,160,160);K.rotateX(-Math.PI/2);let q=new e(K,this.waterMaterial=new m({uniforms:{...E,uReflection:{value:he.texture}},vertexShader:`
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
        `}));q.position.z=-180,D.add(q),Object.assign(this,{uniforms:E,lights:A,spectrumValues:w,water:q}),this.onWindowResize(),this.guiContainer=ce(`Animation81-gui-container`),this.scrollbarStyle=le(`Animation81-gui-container`),document.body.appendChild(this.guiContainer);let J=this.gui=new oe({container:this.guiContainer,title:`流光映水`,width:285});for(let[e,t]of[[`光柱外观`,[`lightCount`,`lightWidth`]],[`光迹跳动`,[`jump`,`restHeight`,`sensitivity`,`attack`,`release`,`sharpness`,`glow`]],[`水面与倒影`,[`reflectionLength`,`waterDistortion`,`waterDetail`]],[`色彩与亮度`,[`saturation`,`colorStrength`,`colorSpeed`,`exposure`]]]){let n=J.addFolder(e);for(let e of t){let[t,r,i,a]=S[e];n.add(_,e,t,r,i).name(a).onChange(()=>this.applySettings())}}this.settingsButton=se(`Animation81-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?J.show():J.hide()},{signal:this.events.signal}),document.body.appendChild(this.settingsButton),J.hide();let Y=0,X=0,Z=0,Q=0,$=v(`#c4dc74`);this.updateAudioAnalysis=(e,t)=>{if(this.disposed)return;t=b(t,.1);let n=e?.isPlaying===!0,r=n?e.audioFeature?.animation:null,i=!!r&&b(e.audioFeature?.energy?.rms??r.energy)>.008,a=i?e.audioFeature?.customBands:null,o=i?b(r.bass):0,s=i?b(r.mid):0,c=i?b(r.high):0,l=i?b(r.motion):0,u=i?b(r.energy):0,d=i?b(r.kick,2):0;for(let e=0;e<256;e++){let n=a?.[me[e]]??(e<70?o:e<180?s:c),r=i?Math.min(1,Math.max(0,(b(n)-.035)*_.sensitivity)):0;w[e]=x(w[e],r,r>w[e]?_.attack:_.release,t)}T.needsUpdate=!0;let f=n;if(E.uActive.value=x(E.uActive.value,+!!f,f?15:4,t),Y+=t*(1+l*1.8),E.uTime.value=Y,E.uAudio.value.set(o,s,c,l),Q=Math.max(0,Q-t),E.uWaveAge.value+=t,d>.25&&d>Z*1.25&&Q===0&&(E.uWaveAge.value=0,Q=.22),Z=d,E.uPulse.value=Math.min(1,d),i&&(X=(X+t*(.025*u+.07*s+.12*c))%1),i){let e=X+s*.16+c*.26,[t,n]=fe($[1],$[2],e),r=1+o*.45,i=pe(y([$[0],t*r,n*r])),a=Math.max(.05,i[0]*.2126+i[1]*.7152+i[2]*.0722);E.uTint.value.set(i[0]/a,i[1]/a,i[2]/a)}E.uColorMix.value=x(E.uColorMix.value,i?Math.min(.95,(.35+u*.6)*_.colorStrength):0,_.colorSpeed,t),!i&&E.uColorMix.value<.001&&(X=0)},this.renderScene=()=>{if(this.disposed)return;k.update(),O.updateMatrixWorld(),E.uBillboard.value.set(O.matrixWorld.elements[0],O.matrixWorld.elements[2]).normalize();let e=C.outputColorSpace,t=C.toneMapping,n=C.getRenderTarget(),r=A.scale.y,i=q.visible;try{q.visible=!1,A.scale.y=-_.reflectionLength,C.outputColorSpace=l,C.toneMapping=0,C.setRenderTarget(he),C.render(D,O)}finally{C.setRenderTarget(n),C.outputColorSpace=e,C.toneMapping=t,A.scale.y=r,q.visible=i}C.render(D,O)},this.resetAudio=()=>{this.disposed||(Y=X=Z=Q=0,E.uTime.value=E.uActive.value=E.uPulse.value=E.uColorMix.value=0,E.uWaveAge.value=10,E.uAudio.value.set(0,0,0,0),E.uTint.value.set(1,1,1),w.fill(0),T.needsUpdate=!0)}}applySettings(){if(!this.disposed){for(let[e,[t,n]]of Object.entries(S)){let r=this.settings[e];this.settings[e]=Math.min(n,Math.max(t,Number.isFinite(r)?r:this.defaultSettings[e]))}if(this.settings.lightCount=Math.round(this.settings.lightCount),this.uniforms)for(let[e,t]of Object.entries(C))this.uniforms[e].value=this.settings[t];this.columns&&(this.columns.count=this.settings.lightCount),this.glows&&(this.glows.count=this.settings.lightCount),this.renderer&&(this.renderer.toneMappingExposure=this.settings.exposure),this.gui?.controllersRecursive().forEach(e=>e.updateDisplay())}}updateWithAudioData(e){this.disposed||(this.frame=e,this.lastAudioTime=performance.now())}render(){if(this.disposed||document.hidden)return;let e=performance.now(),t=this.lastTime===null?1/60:Math.min(.1,Math.max(0,(e-this.lastTime)/1e3));this.lastTime=e,this.updateAudioAnalysis(e-this.lastAudioTime<250?this.frame:null,t),this.renderer.toneMappingExposure=this.settings.exposure,this.renderScene()}onWindowResize(){if(this.disposed||!this.uniforms)return;let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(e,t,!1),this.renderer.getDrawingBufferSize(this.uniforms.uResolution.value),this.reflection.setSize(Math.max(1,Math.round(this.uniforms.uResolution.value.x*.75)),Math.max(1,Math.round(this.uniforms.uResolution.value.y*.75))),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}resetGuiCamera(){this.disposed||!this.controls||(this.controls.enableDamping=!1,this.controls.update(),this.controls.reset(),this.controls.update(),this.controls.enableDamping=!0)}resetState(){this.disposed||(this.frame=null,this.lastAudioTime=-1/0,this.lastTime=null,this.resetAudio?.(),this.applySettings(),this.resetGuiCamera())}dispose(){if(!this.disposed){this.disposed=!0,this.events?.abort(),this.frame=null,_(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.controls?.dispose();for(let e of[`columns`,`glows`,`geometry`,`material`,`glowGeometry`,`glowMaterial`,`waterGeometry`,`waterMaterial`,`reflection`,`spectrumTexture`])this[e]?.dispose();this.scene?.clear(),this.renderer?.dispose(),this.canvas?.title===`左键旋转 · 右键平移 · 滚轮缩放`&&(this.canvas.title=this.originalCanvasTitle??``),this.renderScene=this.updateAudioAnalysis=this.resetAudio=null;for(let e of[`columns`,`glows`,`geometry`,`material`,`glowGeometry`,`glowMaterial`,`waterGeometry`,`waterMaterial`,`reflection`,`spectrumTexture`,`spectrumValues`,`uniforms`,`lights`,`water`,`scene`,`camera`,`controls`,`renderer`,`gui`,`guiContainer`,`settingsButton`,`scrollbarStyle`])this[e]=null}}};export{w as default};