import{At as e,Et as t,Fr as n,H as r,Kt as i,Nr as a,Pr as o,Vn as s,d as c,nr as l,r as u,rr as d,wt as f}from"./three.module-CI1jJgD_.js";import{n as p,r as m,t as h}from"./OutputPass-D7sfcF5T.js";import{a as g,i as _,n as v,r as y,t as b}from"./GUIHelper-DNd0uFVI.js";import{t as ee}from"./UnrealBloomPass-afIQHt-X.js";import{t as te}from"./OrbitControls-DLu-nFn1.js";import{m as ne,r as re,s as ie}from"./PerceptualColor-5EYeXve1.js";var ae=()=>{},x=class{static globalBackgroundPolicy=`inherit`;constructor(e,t={}){this.canvas=e,this.globalBackgroundPolicy=`inherit`,this.events=new AbortController;try{this.init(t)}catch(e){throw this.dispose(),e}}init(v={}){if(this.disposed||this.renderer)return;let ae=this.events,x=(e,t,n)=>e.addEventListener(t,n,{signal:ae.signal}),S=!1,C=null,w=-1/0,oe={density:96,spread:1,flow:.3,wave:.8,propagation:1.65,glow:.6,bloomRadius:.65,bloomThreshold:.62,audioResponse:1,audioUndulation:.65,colorReactivity:1,saturationBoost:.5,colorSpeed:5},T=this.settings={...oe,...v};this.defaultSettings=Object.freeze(oe);let se={density:[48,160],spread:[.65,1.4],flow:[0,1.2],wave:[0,1.6],propagation:[.5,4],glow:[0,3],bloomRadius:[0,1],bloomThreshold:[0,1],audioResponse:[0,2],audioUndulation:[0,2],colorReactivity:[0,3],saturationBoost:[0,2],colorSpeed:[1,12]},E=()=>{for(let[e,[n,r]]of Object.entries(se))T[e]=t.clamp(Number.isFinite(T[e])?T[e]:oe[e],n,r);T.density=Math.round(T.density)};E();let D=this.renderer=new u({canvas:this.canvas,antialias:!1,alpha:!0,powerPreference:`high-performance`});D.setClearColor(0,1),D.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),D.setSize(Math.max(1,innerWidth),Math.max(1,innerHeight),!1),D.toneMapping=4,D.toneMappingExposure=1.2;let ce=this.scene=new l,O=this.camera=new i(37,Math.max(1,innerWidth)/Math.max(1,innerHeight),.1,100),k=this.controls=new te(O,D.domElement);k.enableDamping=!0,k.dampingFactor=.055,k.enablePan=!0,k.enableRotate=!0,k.enableZoom=!0,k.mouseButtons={LEFT:f.ROTATE,MIDDLE:f.DOLLY,RIGHT:f.PAN},k.minDistance=7,k.maxDistance=35;let A=this.composer=new m(D);A.addPass(new p(ce,O));class le extends ee{setSize(e,t){super.setSize(Math.max(1,Math.round(e*.65)),Math.max(1,Math.round(t*.65)))}}let j=this.bloom=new le(new a(innerWidth,innerHeight),T.glow,T.bloomRadius,T.bloomThreshold);A.addPass(j),A.addPass(new h);let M=0,N=0,P=null,F=1.8,I=0,L,R=Array.from({length:8},()=>new n(0,0,0,-100)),z=new Float32Array(8),ue=Array.from({length:8},()=>new n),de=new Float32Array(8),fe=new a;D.getDrawingBufferSize(fe);let B=this.uniforms={uBlue:{value:new o},uViolet:{value:new o},uPink:{value:new o},uHighlight:{value:new o},uGold:{value:new o},uAudioLight:{value:1},uColorFlow:{value:0},uPhase:{value:0},uSpread:{value:1},uWave:{value:T.wave},uAudioWave:{value:0},uAudioPhase:{value:0},uBands:{value:new o},uAccent:{value:0},uResolution:{value:fe},uPixelRatio:{value:D.getPixelRatio()},uPulse:{value:ue},uPower:{value:de},uCount:{value:0}},pe=this.material=new d({uniforms:B,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,vertexShader:`
uniform float uPhase,uSpread,uWave,uAudioWave,uAudioPhase;
uniform vec3 uBands;uniform float uAccent;
uniform vec4 uPulse[8];uniform float uPower[8];uniform int uCount;
vec2 waveAt(vec3 p){
 float displacement=0.0,light=0.0;
 for(int i=0;i<8;i++){
  if(i>=uCount)break;
  float front=length(p-uPulse[i].xyz)-uPulse[i].w;
  if(abs(front)>1.8)continue;
  float envelope=exp(-front*front*2.4);
  displacement+=sin(front*5.8)*envelope*uPower[i];
  light+=envelope*uPower[i];
 }
 return vec2(displacement,light);
}

attribute vec2 aParam;
attribute vec3 aDu,aDv;
attribute vec2 aDirection;
attribute float aSide,aFamily,aLevel;
uniform vec2 uResolution;uniform float uPixelRatio;
varying float vSide,vAlpha,vLight;
varying vec2 vParam; varying float vGold;
void main(){
 vec2 q=aParam; vParam=q;
 // Base shape and derivatives are uploaded once, not reconstructed per frame.
 vec3 p=position;
 float rim=exp(-pow((q.y-2.65)/.84,2.0));
 p.y+=.055*sin(q.y*2.2-uPhase*.65+q.x)*rim;
 // Sustained music drives a broad, smooth deformation independently of impulses.
 float audioWave=.7*sin(q.x*2.0+q.y*1.8-uAudioPhase)
                +.3*sin(q.x*3.0-q.y*.9+uAudioPhase*.6);
 p.y+=audioWave*uAudioWave*(.35+.65*rim);
 // Separate frequency roles make musical changes visible without waiting for a traveling wave.
 p.y+=sin(q.x*3.0-q.y*2.4+uAudioPhase)*uBands.y*.22*(.3+.7*rim);
 p.y+=sin(q.x*12.0+q.y*9.0-uAudioPhase*2.0)*uBands.z*.055;
 p.y+=rim*uAccent*.24;
 vec2 w=vec2(0.0);
 if(uWave>0.001 && uCount>0)w=waveAt(p);
 p.y+=w.x*uWave*.65;
 p.xz+=normalize(p.xz+vec2(.0001))*w.x*uWave*.08;
 p*=uSpread;
 vec3 normal=normalize(cross(aDv,aDu));
 vec3 wp=(modelMatrix*vec4(p,1.0)).xyz;
 vec3 wn=normalize(mat3(modelMatrix)*normal);
 vec3 eye=normalize(cameraPosition-wp);
 float facing=abs(dot(wn,eye));
 float diffuse=abs(dot(wn,normalize(vec3(-.4,.9,.55))));
 float ridge=exp(-pow((q.y-2.65)/.47,2.0));
 float outer=1.0-smoothstep(3.8,4.8,q.y);
 float inner=smoothstep(.72,1.65,q.y);
 float depth=clamp((viewMatrix*vec4(wp,1.0)).z/-19.0,.20,1.0);
 float spatial=.54+.46*sin(q.x+.6);
 // Spatial palette is evaluated per fragment; CPU updates only five shared anchors.
 // Reuse the same local wave for lighting and deformation.
 float fine=mod(aLevel,12.0)<.5?1.25:.72;
 float illumination=(.20+.52*diffuse+.26*pow(1.0-facing,2.0))*(.48+ridge*.75)*fine;
 float flowing=.5+.5*sin(q.x*2.0-q.y*.8-uPhase*.7);
 illumination*=.82+.18*flowing;
 float gold=step(.96,fract(aLevel*.381966))*pow(max(0.0,cos(q.x-1.0)),32.0)*ridge;

 float sparkle=pow(.5+.5*sin(q.x*15.0+q.y*11.0-uAudioPhase*2.0),8.0);
 vGold=gold; vLight=illumination*(1.0+min(w.y,1.6)*uWave*.48+uAccent*.32+sparkle*uBands.z*.65)*2.1;
 vAlpha=inner*outer*(.58+.42*spatial)*(aFamily>.5?.17:.86)*clamp(1.30-depth*.45,.6,1.0);
 // Camera-facing strips give continuous, antialiased subpixel-width filaments.
 vec3 tangent=(aDirection.x*aDu+aDirection.y*aDv)*uSpread;
 vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.0);
 vec4 ahead=projectionMatrix*modelViewMatrix*vec4(p+tangent,1.0);
 vec2 screenDirection=(ahead.xy/ahead.w-clip.xy/clip.w)*uResolution;
 vec2 across=normalize(vec2(-screenDirection.y,screenDirection.x)+vec2(.000001));
 float width=(aFamily>.5?1.0:1.65)*uPixelRatio;
 clip.xy+=across*aSide*width/uResolution*clip.w;
 gl_Position=clip;vSide=aSide;
}`,fragmentShader:`
varying float vSide,vAlpha,vLight;
varying vec2 vParam; varying float vGold;
uniform vec3 uBlue,uViolet,uPink,uHighlight,uGold;
uniform float uAudioLight,uColorFlow;
void main(){
 vec3 color=mix(uBlue,uViolet,smoothstep(-.8,.5,sin(vParam.x+.3+uColorFlow)));
 color=mix(color,uPink,smoothstep(-.15,.85,cos(vParam.x-.8+uColorFlow*.73)));
 float ridge=exp(-pow((vParam.y-2.65)/.47,2.0));
 color=mix(color,uHighlight,ridge*.23);
 color=mix(color,uGold,vGold*.88);
 vec3 radiance=color*vLight*uAudioLight;
 // Scale channels together to preserve hue in bright overlapping filaments.
 float peak=max(radiance.r,max(radiance.g,radiance.b));
 radiance*=1.0/(1.0+max(0.0,peak-1.0)*.4);
 float aa=max(fwidth(vSide),.08);
 float coverage=1.0-smoothstep(max(0.0,1.0-aa),1.0,abs(vSide));
 gl_FragColor=vec4(radiance,coverage*vAlpha);
}`}),me=null,he=()=>{E();let t=[],n=[],i=[],a=[],o=[],s=[],l=[],u=[],d=[],f=0;function p(e,r,c,p,m){let h=f;for(let g=0;g<=e;g++){let _=r(g/e),v=ge(_[0],_[1]),y=ge(_[0]+.003,_[1]),b=ge(_[0],_[1]+.003);for(let e of[-1,1])l.push(v.x,v.y,v.z),u.push(y.x-v.x,y.y-v.y,y.z-v.z),d.push(b.x-v.x,b.y-v.y,b.z-v.z),t.push(_[0],_[1]),n.push(...c),i.push(e),a.push(p),o.push(m),f++;if(g<e){let e=h+g*2;s.push(e,e+1,e+2,e+1,e+3,e+2)}}}let m=T.density;for(let e=0;e<m;e++){let t=.72+e/(m-1)*4.08;p(224,e=>[e*Math.PI*2,t],[1,0],0,e)}for(let e=0;e<24;e++){let t=e/24*Math.PI*2;p(80,e=>[t,.74+e*4.04],[0,1],1,e)}let h=new c;if(h.setAttribute(`position`,new r(l,3)),h.setAttribute(`aDu`,new r(u,3)),h.setAttribute(`aDv`,new r(d,3)),h.setAttribute(`aParam`,new r(t,2)),h.setAttribute(`aDirection`,new r(n,2)),h.setAttribute(`aSide`,new r(i,1)),h.setAttribute(`aFamily`,new r(a,1)),h.setAttribute(`aLevel`,new r(o,1)),h.setIndex(s),L){let e=L.geometry;L.geometry=h,e.dispose()}else L=this.field=new e(h,pe),L.rotation.set(.07,.32,-.1),L.frustumCulled=!1,ce.add(L);me=T.density};function ge(e,t){let n=V(e,t);return n.y-=.055*Math.sin(t*2.2-N*.65+e)*Math.exp(-(((t-2.65)/.84)**2)),n}function V(e,n){let r=Math.exp(-(((n-2.65)/.84)**2)),i=Math.exp(-(((n-1.3)/.7)**2)),a=(e,n,r)=>{let i=t.clamp((r-e)/(n-e),0,1);return i*i*(3-2*i)},s=Math.sin(e*2+.55)+.36*Math.sin(e*3-1.1),c=1.3*r-.65*i-.2*n+s*(.22+.48*a(1.4,4.8,n))+.27*Math.sin(e+1.1)*r+.055*Math.sin(n*2.2-N*.65+e)*r,l=n*(1+.065*Math.cos(e*3+.4))+.13*Math.sin(e*2)*r,u=e+.11*Math.sin(n*.9+e);return new o(l*Math.cos(u)*1.12,c,l*Math.sin(u)*.95)}function H(e,n=1){if(S)return;let r=e?.isVector3?e:new o(...Array.isArray(e)?e:[2.5,0,0]);[r.x,r.y,r.z,n].every(Number.isFinite)&&(R[I].set(r.x,r.y,r.z,M),z[I]=t.clamp(n,0,2),I=(I+1)%8)}function _e(){let e=t.degToRad(O.fov*.5),n=Math.max(15.5,6/(Math.tan(e)*O.aspect));O.position.copy(new o(7.2,8.4,11.5).normalize().multiplyScalar(n)),k.target.set(0,-.25,0),k.maxDistance=Math.max(35,n*1.6),O.far=Math.max(100,k.maxDistance+20),O.updateProjectionMatrix(),k.update()}this.guiContainer=y(`Animation82-gui-container`),this.scrollbarStyle=b(`Animation82-gui-container`),document.body.appendChild(this.guiContainer);let U=this.gui=new g({title:`弦波共振`,container:this.guiContainer,width:285}),ve=U.addFolder(`场域形态`);ve.add(T,`density`,48,160,1).name(`曲线密度`).onFinishChange(()=>{!this.loadingPreferences&&T.density!==me&&he()}),ve.add(T,`spread`,.65,1.4,.01).name(`舒展程度`);let W=U.addFolder(`流动与波动`);W.add(T,`flow`,0,1.2,.01).name(`流动速度`),W.add(T,`wave`,0,1.6,.01).name(`波动强度`),W.add(T,`propagation`,.5,4,.05).name(`传播速度`);let G=U.addFolder(`泛光效果`);G.add(T,`glow`,0,3,.01).name(`泛光强度`),G.add(T,`bloomRadius`,0,1,.01).name(`泛光半径`),G.add(T,`bloomThreshold`,0,1,.01).name(`泛光阈值`);let K=U.addFolder(`音频响应`);K.add(T,`audioResponse`,0,2,.05).name(`形变响应强度`),K.add(T,`audioUndulation`,0,2,.05).name(`持续起伏强度`),K.add(T,`colorReactivity`,0,3,.05).name(`旋律色彩流动`),K.add(T,`saturationBoost`,0,2,.05).name(`低频饱和增强`),K.add(T,`colorSpeed`,1,12,.1).name(`变色响应速度`),U.hide(),[ve,W,G,K].forEach(e=>e.open()),he(),_e();for(let e of U.controllersRecursive())e.onChange(()=>{E(),$()});this.settingsButton=_(`Animation82-settings-button`),x(this.settingsButton,`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?U.show():U.hide()}),document.body.appendChild(this.settingsButton);let q=new Map,J=!1,Y=()=>{q.clear(),J=!1};x(window,`blur`,Y),x(D.domElement,`pointerdown`,e=>{q.set(e.pointerId,{x:e.clientX,y:e.clientY,moved:!1,button:e.button}),q.size>1&&(J=!0)}),x(D.domElement,`pointermove`,e=>{let t=q.get(e.pointerId);t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>=6&&(t.moved=!0)}),x(D.domElement,`pointercancel`,Y),x(D.domElement,`pointerup`,e=>{let t=q.get(e.pointerId);q.delete(e.pointerId);let n=e.button===0&&t&&t.button===0&&!t.moved&&!J&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<6;if(q.size===0&&(J=!1),!n)return;let r=D.domElement.getBoundingClientRect(),i=new s;i.setFromCamera(new a((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),O);let o=null,c=1/0;L.updateMatrixWorld();for(let e=0;e<120;e++)for(let t=0;t<36;t++){let n=e/120*Math.PI*2,r=.8+t/35*3.85,a=V(n,r),s=Math.exp(-(((r-2.65)/.84)**2)),l=.7*Math.sin(n*2+r*1.8-X.wavePhase)+.3*Math.sin(n*3-r*.9+X.wavePhase*.6);a.y+=l*B.uAudioWave.value*(.35+.65*s),a.y+=Math.sin(n*3-r*2.4+X.wavePhase)*B.uBands.value.y*.22*(.3+.7*s)+Math.sin(n*12+r*9-X.wavePhase*2)*B.uBands.value.z*.055+s*B.uAccent.value*.24;let u=a.clone().multiplyScalar(B.uSpread.value).applyMatrix4(L.matrixWorld),d=i.ray.distanceSqToPoint(u);d<c&&(c=d,o=a)}o&&c<1.3&&H(o,1.35)});let ye=re({Blue:`#193cba`,Violet:`#8132cb`,Pink:`#ef568f`,Highlight:`#f8a4c4`,Gold:`#ffb359`}),be=Object.freeze({bass:0,mid:0,high:0,motion:0,energy:0,hue:0,saturation:1,light:1,colorPhase:0,wavePhase:0,colorFlow:0,accent:0}),X={...be},Z=!1,Q=0,xe=0,Se=-1/0;function Ce(){for(let[e,t]of Object.entries(ye)){let[n,r]=ne(t[1],t[2],X.hue+X.accent*T.colorReactivity*(e===`Highlight`||e===`Gold`?.065:.012)),i=ie([t[0],n*X.saturation,r*X.saturation]);B[`u`+e].value.set(...i)}B.uAudioLight.value=X.light*(1+X.accent*.18),B.uColorFlow.value=X.colorFlow}function we(){Object.assign(X,be),Z=!1,Q=xe=0,Se=-1/0,z.fill(0),I=0,R.forEach(e=>e.w=-100),B.uCount.value=0,F=M+1.8,Ce(),$()}function Te(e,n,r){if(S)return;r=t.clamp(Number.isFinite(r)?r:1/60,0,.1),n=Number.isFinite(n)?n:performance.now();let i=e?.isPlaying?e.audioFeature?.animation:null;Z=!!i&&(e.audioFeature.energy?.rms??1)>=.008&&(i.energy>.001||i.bass>.001||i.mid>.001||i.high>.001);let a=(e,n=1)=>Z&&Number.isFinite(i[e])?t.clamp(i[e],0,n):0,o=a(`bass`),s=a(`mid`),c=a(`high`),l=s*.62+c*.3+a(`variation`)*.25;Z&&(X.colorPhase=(X.colorPhase+r*l*1.35)%(Math.PI*200)),Z&&(X.wavePhase=(X.wavePhase+r*(.9+a(`motion`)*1.1))%(Math.PI*10));let u=X.colorPhase,d=T.colorReactivity,f={bass:o,mid:s,high:c,motion:a(`motion`),energy:a(`energy`),hue:Z?(Math.sin(u)*.3+Math.sin(u*.43)*.12+(c-s)*.1)*d:0,colorFlow:Z?(Math.sin(u*.67)*1.25+Math.sin(u*.29)*.45)*d:0,saturation:1+o*T.saturationBoost,light:1+a(`energy`)*.22+c*.18};for(let e of Object.keys(f)){if([`bass`,`mid`,`high`,`energy`,`motion`,`light`].includes(e)){X[e]=f[e];continue}let t=Z?T.colorSpeed:1/.18;X[e]+=(f[e]-X[e])*(1-Math.exp(-t*r))}let p=a(`kick`,2),m=a(`snare`,1.5);X.accent=Math.max(p,m*.7);let h=p>.12&&(Q<=.12||p-Q>.08),g=m>.1&&(xe<=.1||m-xe>.07);(h||g)&&n-Se>110&&(H(V(N+(g?2.4:.7),h?2.45:3.3),(.25+(h?p:m*.75)*.85)*T.audioResponse),Se=n),Q=p,xe=m,Ce()}function Ee(){let e=0;for(let t=0;t<8;t++){let n=M-R[t].w;n<0||n>12||z[t]<=0||(ue[e].copy(R[t]),ue[e].w=n*T.propagation,de[e]=z[t]*Math.exp(-n*.34),e++)}B.uCount.value=e}function $(){B.uPhase.value=N,B.uAudioPhase.value=X.wavePhase,B.uBands.value.set(0,X.mid,X.high).multiplyScalar(T.audioResponse*T.audioUndulation),B.uAccent.value=X.accent*T.audioResponse,B.uAudioWave.value=T.audioUndulation*T.audioResponse*(X.bass*.6+X.energy*.4)*.55,B.uSpread.value=T.spread*(1+(X.bass*.075+X.accent*.045)*T.audioResponse),B.uWave.value=T.wave*(1+X.energy*T.audioResponse*.45),j.strength=T.glow*(1+X.accent*T.audioResponse*.12),j.radius=T.bloomRadius,j.threshold=T.bloomThreshold,j.enabled=T.glow>.001}this.updateAudioAnalysis=Te,this.emitImpulse=H,this.beginGuiPreferencesLoad=()=>{this.loadingPreferences=!0},this.endGuiPreferencesLoad=(e=!0)=>{this.loadingPreferences=!1,!(S||!e)&&(E(),T.density!==me&&he(),$())},this.resetGuiCamera=()=>{S||(k.enableDamping=!1,k.update(),_e(),k.enableDamping=!0)},this.resetState=()=>{S||(C=null,w=-1/0,P=null,M=N=0,Y(),we(),Ee(),this.resetGuiCamera())},this.onWindowResize=()=>{if(S)return;let e=Math.max(1,innerWidth),t=Math.max(1,innerHeight),n=O.aspect<.85;O.aspect=e/t,n===O.aspect<.85?O.updateProjectionMatrix():this.resetGuiCamera(),D.setSize(e,t,!1),A.setSize(e,t),D.getDrawingBufferSize(fe)},this.render=()=>{if(S||this.contextLost||document.hidden)return;let e=performance.now(),n=P===null?1/60:t.clamp((e-P)/1e3,0,.1);P=e,M+=n,Te(e<=w?C:null,e,n),N=(N+n*(T.flow+X.motion*T.audioResponse*.65))%(Math.PI*40);let r=e<=w&&C?.isPlaying;r&&(F=M+6.8),!r&&M>F&&(H(V(.7+M*.27,2.45),.9),F=M+6.8),$(),Ee(),k.update(),A.render()},this.updateWithAudioData=e=>{S||(C=e,w=performance.now()+250)},this.releaseRuntime=()=>{S=!0,C=null},x(window,`resize`,()=>this.onWindowResize()),x(document,`visibilitychange`,()=>{P=null,C=null,w=-1/0,Y(),we()}),x(this.canvas,`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.resetState()}),x(this.canvas,`webglcontextrestored`,()=>{this.contextLost=!1,this.onWindowResize()}),we(),this.onWindowResize()}dispose(){if(!this.disposed){this.disposed=!0,this.releaseRuntime?.(),this.events?.abort(),v(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.controls?.dispose(),this.field?.geometry.dispose(),this.material?.dispose(),this.composer?.passes.forEach(e=>e.dispose?.()),this.composer?.dispose(),this.scene?.clear(),this.renderer?.dispose();for(let e of[`render`,`updateWithAudioData`,`updateAudioAnalysis`,`emitImpulse`,`beginGuiPreferencesLoad`,`endGuiPreferencesLoad`,`resetGuiCamera`,`resetState`,`onWindowResize`,`releaseRuntime`])this[e]=ae;for(let e of[`renderer`,`scene`,`camera`,`controls`,`composer`,`bloom`,`field`,`material`,`uniforms`,`gui`,`guiContainer`,`settingsButton`,`scrollbarStyle`,`events`])this[e]=null}}};export{x as default};