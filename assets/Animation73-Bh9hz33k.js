import{At as e,Fr as t,Gt as n,Jt as r,Nr as i,Pr as a,X as o,er as s,nr as c,r as l,rr as u,wt as d}from"./three.module-CI1jJgD_.js";import{n as f,r as p,t as m}from"./OutputPass-D7sfcF5T.js";import{n as h,t as g}from"./AnimationInputListeners-CVym640U.js";import{a as _,i as v,n as y,r as b,t as x}from"./GUIHelper-CK73tCKI.js";import{t as S}from"./UnrealBloomPass-afIQHt-X.js";import{t as C}from"./AnimationCameraControls-2zD2PkBR.js";import{m as w,n as T,r as E,s as D}from"./PerceptualColor-5EYeXve1.js";var O=E({violet:`#9692DA`,pale:`#C0BAEA`,ice:`#79CADA`}),k={violet:[.305,.287,.701],pale:[.53,.49,.82],ice:[.191,.591,.701]},A=e=>Number.isFinite(e)?Math.min(1,Math.max(0,e)):0,j=class{constructor(){this.waves=new Float32Array(16),this.colors={},this.reset()}reset(){this.phase=0,this.hue=0,this.chroma=1,this.light=0,this.mix=0,this.previousKick=0,this.armed=!0,this.cooldown=0,this.cursor=0;for(let e=0;e<8;e++)this.waves[e*2]=10,this.waves[e*2+1]=0;for(let e in k)this.colors[e]=[...k[e]];this.accent=[...k.ice]}update(e,t,{colorResponse:n=1,colorSpeed:r=1,saturationBoost:i=.65,beatResponse:a=1,style:o=`veil`}={}){t=Number.isFinite(t)?Math.min(.1,Math.max(0,t)):0;let s=A(e?.bass),c=A(e?.mid),l=A(e?.high),u=A(e?.energy),d=!!e&&n>0;d&&(this.phase+=t*(c*.8+l*1.5+u*.16)*r);let f=c*.27+l*.43,p=Math.sin(this.phase)*.22+Math.sin(this.phase*.43)*.09,m=d?(f+p)*n:0,h=1-Math.exp(-t/(e?.15:.38));this.hue+=(m-this.hue)*h,this.chroma+=((d?1+s*i:1)-this.chroma)*h,this.light+=((d?u*.065+l*.025:0)-this.light)*h,this.mix+=(+!!d-this.mix)*h;let g=0;for(let e in O){let t=O[e],n=this.hue*(g===0?.9:g===1?1:1.12),r=w(t[1]*this.chroma,t[2]*this.chroma,n),i=T(D([Math.min(.9,t[0]+this.light),...r]));this.colors[e]=k[e].map((e,t)=>e+(i[t]-e)*this.mix),g++}let _=O.ice;this.accent=T(D([.8,...w(_[1]*1.5,_[2]*1.5,this.hue+.12)])),this.cooldown=Math.max(0,this.cooldown-t);for(let n=0;n<8;n++)this.waves[n*2]=Math.min(10,this.waves[n*2]+t),e||(this.waves[n*2+1]*=Math.exp(-t/.2));let v=A(e?.kick);if(v<.06&&(this.armed=!0),v>.12&&(this.armed||v-this.previousKick>.08)&&this.cooldown===0&&a>0){for(let e=0;e<8;e++)this.waves[e*2+1]*=.55;let e=this.cursor*2;this.waves[e]=0,this.waves[e+1]=Math.min(1.25,v*1.6)*a*(o===`silk`?1.05:1),this.cursor=(this.cursor+1)%8,this.cooldown=.2,this.armed=!1}if(this.previousKick=v,a===0)for(let e=0;e<8;e++)this.waves[e*2+1]=0}},M=`
uniform vec2 uWaves[8];
uniform float uWaveSpeed;
float waveAt(float s){
 float delay=.025+.10*(.5+.5*sin(uPetal.w));
 float result=0.;
 for(int i=0;i<8;i++){
  float age=uWaves[i].x-delay;
  float front=age*uWaveSpeed;
  float band=exp(-pow((s-front)/.13,2.));
  result+=step(0.,age)*band*exp(-max(age,0.)*.85)*uWaves[i].y;
 }
 return 1.1*(1.-exp(-result/1.1));
}`,N=class{constructor(e,t={}){this.canvas=e,this.initialSettings=t,this.init()}init(){let h=new l({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:`high-performance`});h.setPixelRatio(Math.min(devicePixelRatio,2)),h.setClearColor(0,0),h.outputColorSpace=s;let y=new c,w=new n(-6,6,6,-6,.1,60);w.position.set(0,0,20);let T=new C(w,h.domElement);T.enableRotate=!0,T.enablePan=!0,T.enableZoom=!0,T.enableDamping=!0,T.dampingFactor=.08,T.rotateSpeed=.65,T.panSpeed=.8,T.zoomSpeed=.85,T.screenSpacePanning=!0,T.mouseButtons.LEFT=d.ROTATE,T.mouseButtons.MIDDLE=d.DOLLY,T.mouseButtons.RIGHT=d.PAN,T.update(),T.saveState(),T.minZoom=.35,T.maxZoom=4;let E={speed:.72,breath:.8,roll:.72,flutter:.35,opacity:.64,core:.72,scale:1,pause:!1,bloom:!0,bloomStrength:.18,bloomRadius:.55,bloomThreshold:.72};Object.assign(E,{audioEnabled:!0,shapeResponse:.65,colorResponse:1,beatResponse:.45}),Object.assign(E,{openingRange:.22,widthRange:.1,growthRange:.35,foldRange:.38,depthRange:.4,edgeRange:.45}),Object.assign(E,{colorSpeed:1,saturationBoost:.65,waveSpeed:.8});let D=new j;Object.assign(E,this.initialSettings),this.settings=E,this.defaultSettings={...E};let O=new p(h);O.addPass(new f(y,w));let k=new S(new i(innerWidth,innerHeight),E.bloomStrength,E.bloomRadius,E.bloomThreshold);O.addPass(k),O.addPass(new m);let A={uTime:{value:0},uBreath:{value:1},uRoll:{value:1},uFlutter:{value:.65},uOpacity:{value:.3},uCore:{value:1}};Object.assign(A,{uMusic:{value:0},uOpening:{value:1},uWidth:{value:1},uGrowth:{value:0},uFold:{value:0},uDepth:{value:0},uEdge:{value:0},uWaves:{value:D.waves},uWaveSpeed:{value:E.waveSpeed},uAccent:{value:new a(.2,.6,.7)},uAudioBass:{value:0},uAudioMid:{value:0},uAudioPulse:{value:0},uViolet:{value:new a(.305,.287,.701)},uPale:{value:new a(.53,.49,.82)},uIce:{value:new a(.191,.591,.701)}});let N=new o;y.add(N);let P=new r(1,1,144,56),F=`
precision highp float;
uniform float uTime,uBreath,uRoll,uFlutter,uCore;
uniform float uAudioBass,uAudioMid;
uniform float uMusic,uOpening,uWidth,uGrowth,uFold,uDepth,uEdge;
uniform vec4 uPetal; // angle, length, width, phase
${M}
uniform float uLayer;
varying vec2 vParam;
varying vec3 vPosition;
varying float vFold;
const float PI=3.14159265359;
vec3 spine(float s){
  float phase=uPetal.w,t=uTime;
  float env=sin(PI*s);
  float traveling=sin(s*5.4-t*.72+phase);
  float angle=uPetal.x+.68*s+.10*env*traveling*uBreath;
  float opening=1.+(uOpening-1.)*.65+.035*sin(t*.38+phase*.35)*uBreath;
  // Growth builds toward the tip, leaving the root anchored at the core.
  float growth=uGrowth*(.85+.15*sin(phase));
  float radius=.20*uCore+uPetal.y*pow(s,.94)*opening*(1.+growth*smoothstep(0.,1.,s));
  float z=-.25+env*(.55+.30*traveling*uBreath)+.36*s*s;
  z+=uDepth*env*.45+waveAt(s)*env*.48;
  return vec3(cos(angle)*radius,sin(angle)*radius,z+uLayer);
}
void main(){
  float s=uv.x,a=uv.y*2.-1.,phase=uPetal.w;
  vec3 c=spine(s);
  vec3 T=normalize(spine(min(s+.003,1.))-spine(max(0.,s-.003)));
  vec3 N=normalize(vec3(-T.y,T.x,0.));
  vec3 B=normalize(cross(T,N));
  float envelope=pow(max(sin(PI*s),0.),.78);
  float width=uPetal.z*envelope*(.66+.34*s)*uWidth*(1.+uGrowth*.22*s);
  float fold=(.12+.72*s)*uRoll;
  fold+=.23*sin(s*4.5-uTime*.65+phase)*uBreath;
  fold+=uMusic*uFold*.30*sin(phase+s*2.)+waveAt(s)*.22;
  float curvature=.68+.12*sin(s*3.-uTime*.35+phase);
  float crossAngle=a*curvature;
  vec3 R=N*cos(fold)+B*sin(fold),Q=-N*sin(fold)+B*cos(fold);
  vec3 p=c+R*(sin(crossAngle)/curvature*width);
  p+=Q*((1.-cos(crossAngle))/curvature*width);
  float pleat=sin(a*9.+s*3.-uTime*.38+phase)*.035;
  pleat+=sin(a*17.-s*2.+phase)*.009;
  p+=Q*pleat*envelope*(.4+.6*abs(a));
  float edge=pow(abs(a),5.);
  float ripple=sin(s*12.-uTime*.85+phase)*.025*uFlutter*(1.+uEdge*.3);
  p+=Q*edge*envelope*(.10*sin(s*5.-uTime*.55+phase)+ripple);
  p.y*=1.08;
  vParam=vec2(s,a);vPosition=(modelViewMatrix*vec4(p,1.)).xyz;vFold=fold;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
}`,I=`
precision highp float;
uniform float uOpacity,uAudioPulse;
uniform vec3 uViolet,uPale,uIce;
uniform vec4 uPetal;
uniform vec3 uAccent;
${M}
varying vec2 vParam;
varying vec3 vPosition;
varying float vFold;
void main(){
  float s=vParam.x,a=vParam.y;
  vec3 normal=normalize(cross(dFdx(vPosition),dFdy(vPosition)));
  if(normal.z<0.)normal=-normal;
  vec3 tangent=normalize(dFdx(vPosition)*dFdy(vParam.y)-dFdy(vPosition)*dFdx(vParam.y));
  vec3 light=normalize(vec3(-.5,.8,1.2));
  vec3 halfDir=normalize(light+vec3(0.,0.,1.));
  float diffuse=max(dot(normal,light),0.);
  float grazing=1.-abs(normal.z);
  float sheen=pow(max(0.,1.-pow(dot(tangent,halfDir),2.)),22.);
  sheen*=pow(max(dot(normal,halfDir),0.),3.);
  vec3 col=mix(uViolet*.56,uPale,smoothstep(.1,.95,s)*.60);
  float ice=exp(-pow((s-.58)/.32,2.))*(.5+.5*sin(uPetal.w));
  col=mix(col,uIce*.75,ice*.22);
  col*=.45+.55*diffuse;
  col+=vec3(.66,.73,.92)*sheen*.48;
  col+=vec3(.25,.36,.56)*pow(grazing,3.)*.13;
  float fiber=sin(a*340.+s*9.)*.5+.5;
  col*=1.+fiber*.018;
  float colorWave=waveAt(s)*(.35+.65*pow(abs(a),2.));
  col=mix(col,uAccent*(.65+.35*diffuse),clamp(colorWave*.52,0.,.70));
  col+=uAccent*colorWave*.14;
  float edgeFade=1.-smoothstep(.94,1.,abs(a));
  float tipFade=smoothstep(0.,.05,s)*(1.-smoothstep(.965,1.,s));
  float alpha=clamp(uOpacity+grazing*.12,0.,.88)*edgeFade*tipFade;
  gl_FragColor=vec4(col,alpha);
}`;for(let[n,r,i,a,o]of[[.12,4.8,1.48,.3,-.35],[1.48,4.25,1.32,1.5,-.2],[2.73,4.65,1.52,2.8,-.05],[4.05,4.15,1.35,4.1,.1],[5.23,4.5,1.4,5.3,.25],[.94,2.4,.86,2.1,.65],[3.12,2.65,.94,4.3,.82],[5.25,2.2,.78,.6,.98]]){let s=new e(P,new u({uniforms:{...A,uPetal:{value:new t(n,r,i,a)},uLayer:{value:o}},vertexShader:F,fragmentShader:I,transparent:!0,side:2,depthWrite:!1,depthTest:!0,forceSinglePass:!0}));s.frustumCulled=!1,s.renderOrder=10+o,N.add(s)}this.scene=y,this.camera=w,this.renderer=h,this.controls=T,this.composer=O,this.bloomPass=k,this.uniforms=A,this.sculpture=N,this.audioMotion=D,this.waves=D.waves,this.guiContainer=b(`Animation73-gui-container`),document.body.appendChild(this.guiContainer),this.scrollbarStyle=x(`Animation73-gui-container`);let L=this.gui=new _({title:`73.月光呼吸`,container:this.guiContainer});L.add(E,`speed`,0,2,.01).name(`流动速度`),L.add(E,`breath`,0,1.6,.01).name(`舒展幅度`),L.add(E,`roll`,.15,1.5,.01).name(`翻卷程度`),L.add(E,`flutter`,0,1.5,.01).name(`边缘细褶`),L.add(E,`opacity`,.25,.85,.005).name(`薄膜浓度`),L.add(E,`core`,.65,1.3,.01).name(`中心大小`),L.add(E,`scale`,.7,1.25,.01).name(`整体大小`),L.add(E,`pause`).name(`暂停动画`);let R=L.addFolder(`音频响应`);R.add(E,`audioEnabled`).name(`音乐驱动`),R.add(E,`shapeResponse`,0,1.5,.01).name(`形变总幅度`),R.add(E,`openingRange`,0,.8,.01).name(`低频 → 开合范围`),R.add(E,`widthRange`,0,.8,.01).name(`低频 → 花瓣宽度`),R.add(E,`growthRange`,0,.8,.01).name(`能量 / 低频 → 生长幅度`),R.add(E,`foldRange`,0,1.8,.01).name(`中频 → 折叠角度`),R.add(E,`depthRange`,0,1.8,.01).name(`中频 → 弯曲深度`),R.add(E,`edgeRange`,0,4,.01).name(`高频 → 卷边细褶`),R.add(E,`colorResponse`,0,2,.01).name(`音频变色强度`),R.add(E,`colorSpeed`,.2,2,.01).name(`色相流动速度`),R.add(E,`saturationBoost`,0,1.5,.01).name(`低频彩度增强`),R.add(E,`waveSpeed`,.5,1.6,.01).name(`鼓点波传播速度`),R.add(E,`beatResponse`,0,2,.01).name(`鼓点形变 / 色光波`);let z=L.addFolder(`泛光效果`);z.add(E,`bloom`).name(`启用泛光效果`),z.add(E,`bloomStrength`,0,1.5,.01).name(`泛光强度`),z.add(E,`bloomRadius`,0,1,.01).name(`泛光范围`),z.add(E,`bloomThreshold`,0,1,.01).name(`泛光阈值`),L.hide(),this.settingsButton=v(`Animation73-settings-button`),this.toggleGUI=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?L.show():L.hide()},this.settingsButton.addEventListener(`click`,this.toggleGUI),document.body.appendChild(this.settingsButton),this.preventContextMenu=e=>e.preventDefault(),g(this.canvas,`contextmenu`,this.preventContextMenu),this.resetState(),this.onWindowResize()}updateWithAudioData(e){this.audio=e?.isPlaying===!0?e.audioFeature?.animation:null}updateAudioAnalysis(e){let t=this.settings,n=this.uniforms,r=t.audioEnabled&&this.audio&&this.audio.energy>.0015?this.audio:null,i=e=>Number.isFinite(Number(e))?Math.max(0,Math.min(1.5,Number(e))):0;for(let t in this.drive){let n=r?i(r[t]):0;this.drive[t]+=(n-this.drive[t])*(1-Math.exp(-e/(n>this.drive[t]?.12:.4)))}let a=r?i(r.kick):0;if(this.cooldown=Math.max(0,this.cooldown-e),this.pulse*=Math.exp(-e/.26),a>.06&&a>this.previousKick+.02&&this.cooldown===0&&(this.pulse=Math.max(this.pulse,Math.min(1,a*2.4)),this.cooldown=.18),this.previousKick=a,t.pause)return;this.musicMix+=(+!!r-this.musicMix)*(1-Math.exp(-e/(r?.8:1.2)));let o=e=>Math.min(1,e**.65),s=o(this.drive.bass),c=o(this.drive.mid),l=o(this.drive.high),u=o(this.drive.energy),d=this.musicMix;n.uMusic.value=d,n.uOpening.value=1+d*(s-.35)*t.openingRange*t.shapeResponse,n.uWidth.value=1+d*(s-.4)*t.widthRange*t.shapeResponse,n.uGrowth.value=d*(u*.7+s*.3)*t.growthRange*t.shapeResponse,n.uFold.value=(c-.3)*t.foldRange*t.shapeResponse*2,n.uDepth.value=d*(c-.25)*t.depthRange*t.shapeResponse,n.uEdge.value=l*t.edgeRange*t.shapeResponse*d,n.uAudioBass.value=s*d,n.uAudioMid.value=c*d,n.uAudioPulse.value=this.pulse*t.beatResponse,n.uOpacity.value=t.opacity+u*.025*d,n.uWaveSpeed.value=t.waveSpeed,this.audioMotion.update(r,e,{...t,style:`silk`}),this.applyAudioColors(),this.bloomPass.strength=Math.min(.6,t.bloomStrength+this.pulse*.08*t.beatResponse)}applyAudioColors(){let e=this.uniforms;e.uViolet.value.set(...this.audioMotion.colors.violet),e.uPale.value.set(...this.audioMotion.colors.pale),e.uIce.value.set(...this.audioMotion.colors.ice),e.uAccent.value.set(...this.audioMotion.accent),e.uWaveSpeed.value=this.settings.waveSpeed}render(){if(this.disposed)return;let e=performance.now()/1e3,t=this.lastTime===null?1/60:Math.max(0,Math.min(e-this.lastTime,.05));this.lastTime=e;let n=this.settings,r=this.uniforms;n.pause||(this.time+=t*n.speed*(1+Math.min(.18,this.drive.motion*.35)*n.shapeResponse)),r.uTime.value=this.time,r.uBreath.value=n.breath,r.uRoll.value=n.roll,r.uFlutter.value=n.flutter,r.uCore.value=n.core,n.pause&&(r.uOpacity.value=n.opacity),this.sculpture.scale.setScalar(n.scale),this.bloomPass.enabled=n.bloom,this.bloomPass.radius=n.bloomRadius,this.bloomPass.threshold=n.bloomThreshold,this.bloomPass.strength=n.bloomStrength,this.updateAudioAnalysis(t),this.controls.update(),this.composer.render()}onWindowResize(){if(this.disposed)return;let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight,n=e/t,r=Math.max(6.9,5.8/n);Object.assign(this.camera,{left:-r*n,right:r*n,top:r,bottom:-r}),this.camera.updateProjectionMatrix();let i=Math.min(devicePixelRatio,2);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.composer.setPixelRatio(i),this.composer.setSize(e,t)}resetState(){this.audio=null,this.drive={bass:0,mid:0,high:0,motion:0,energy:0},this.musicMix=0,this.previousKick=0,this.pulse=0,this.cooldown=0,this.time=0,this.lastTime=null,this.audioMotion.reset(),this.applyAudioColors(),this.updateAudioAnalysis(0),this.resetGuiCamera()}resetGuiCamera(){this.controls.reset(),this.controls.update()}dispose(){if(this.disposed)return;this.disposed=!0,h(this.canvas,`contextmenu`,this.preventContextMenu),this.settingsButton.removeEventListener(`click`,this.toggleGUI),y(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle.remove(),this.controls.dispose();let e=new Set,t=new Set;this.scene.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&t.add(n.material)}),e.forEach(e=>e.dispose()),t.forEach(e=>e.dispose()),this.composer.passes.forEach(e=>e.dispose?.()),this.composer.dispose(),this.scene.clear(),this.renderer.dispose()}};export{N as default};