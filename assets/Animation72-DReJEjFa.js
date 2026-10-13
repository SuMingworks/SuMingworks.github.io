import{$n as e,Ar as t,Dt as n,Gt as r,Ht as i,Mr as a,Zn as o,er as s,jr as c,q as l,r as u,xt as d}from"./three.module-y53aV_Iu.js";import{n as f,r as p,t as m}from"./OutputPass-R3e3FNgb.js";import{a as h,i as g,n as _,r as v,t as y}from"./GUIHelper-DNd0uFVI.js";import{t as b}from"./UnrealBloomPass-C3xsCyqj.js";import{t as x}from"./OrbitControls-Bg5pjowc.js";import{n as S,o as C,p as w,t as T}from"./PerceptualColor-yyoOW5OX.js";var E=S({violet:`#9692DA`,pale:`#C0BAEA`,ice:`#79CADA`}),D={violet:[.305,.287,.701],pale:[.53,.49,.82],ice:[.191,.591,.701]},O=e=>Number.isFinite(e)?Math.min(1,Math.max(0,e)):0,k=class{constructor(){this.waves=new Float32Array(16),this.colors={},this.reset()}reset(){this.phase=0,this.hue=0,this.chroma=1,this.light=0,this.mix=0,this.previousKick=0,this.armed=!0,this.cooldown=0,this.cursor=0;for(let e=0;e<8;e++)this.waves[e*2]=10,this.waves[e*2+1]=0;for(let e in D)this.colors[e]=[...D[e]];this.accent=[...D.ice]}update(e,t,{colorResponse:n=1,colorSpeed:r=1,saturationBoost:i=.65,beatResponse:a=1,style:o=`veil`}={}){t=Number.isFinite(t)?Math.min(.1,Math.max(0,t)):0;let s=O(e?.bass),c=O(e?.mid),l=O(e?.high),u=O(e?.energy),d=!!e&&n>0;d&&(this.phase+=t*(c*.8+l*1.5+u*.16)*r);let f=c*.27+l*.43,p=Math.sin(this.phase)*.22+Math.sin(this.phase*.43)*.09,m=d?(f+p)*n:0,h=1-Math.exp(-t/(e?.15:.38));this.hue+=(m-this.hue)*h,this.chroma+=((d?1+s*i:1)-this.chroma)*h,this.light+=((d?u*.065+l*.025:0)-this.light)*h,this.mix+=(+!!d-this.mix)*h;let g=0;for(let e in E){let t=E[e],n=this.hue*(g===0?.9:g===1?1:1.12),r=w(t[1]*this.chroma,t[2]*this.chroma,n),i=T(C([Math.min(.9,t[0]+this.light),...r]));this.colors[e]=D[e].map((e,t)=>e+(i[t]-e)*this.mix),g++}let _=E.ice;this.accent=T(C([.8,...w(_[1]*1.5,_[2]*1.5,this.hue+.12)])),this.cooldown=Math.max(0,this.cooldown-t);for(let n=0;n<8;n++)this.waves[n*2]=Math.min(10,this.waves[n*2]+t),e||(this.waves[n*2+1]*=Math.exp(-t/.2));let v=O(e?.kick);if(v<.06&&(this.armed=!0),v>.12&&(this.armed||v-this.previousKick>.08)&&this.cooldown===0&&a>0){for(let e=0;e<8;e++)this.waves[e*2+1]*=.55;let e=this.cursor*2;this.waves[e]=0,this.waves[e+1]=Math.min(1.25,v*1.6)*a*(o===`silk`?1.05:1),this.cursor=(this.cursor+1)%8,this.cooldown=.2,this.armed=!1}if(this.previousKick=v,a===0)for(let e=0;e<8;e++)this.waves[e*2+1]=0}},A=`
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
}`,j=class{constructor(e,t={}){this.canvas=e,this.initialSettings=t,this.init()}init(){let _=new u({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:`high-performance`});_.setPixelRatio(Math.min(devicePixelRatio,2)),_.setClearColor(0,0),_.outputColorSpace=o;let S=new e,C=new i(-6,6,6,-6,.1,60);C.position.set(0,0,20);let w=new x(C,_.domElement);w.enableRotate=!0,w.enablePan=!0,w.enableZoom=!0,w.enableDamping=!0,w.dampingFactor=.08,w.rotateSpeed=.65,w.panSpeed=.8,w.zoomSpeed=.85,w.screenSpacePanning=!0,w.mouseButtons.LEFT=d.ROTATE,w.mouseButtons.MIDDLE=d.DOLLY,w.mouseButtons.RIGHT=d.PAN,w.update(),w.saveState(),w.minZoom=.35,w.maxZoom=4;let T={speed:1,breath:1,roll:1,flutter:.65,opacity:.3,core:1,scale:1,pause:!1,bloom:!0,bloomStrength:.2,bloomRadius:.32,bloomThreshold:.7};Object.assign(T,{audioEnabled:!0,shapeResponse:1,colorResponse:1,beatResponse:1}),Object.assign(T,{openingRange:.28,widthRange:.16,growthRange:.35,foldRange:.85,depthRange:.7,edgeRange:1.2}),Object.assign(T,{colorSpeed:1,saturationBoost:.65,waveSpeed:1.05});let E=new k;Object.assign(T,this.initialSettings),this.settings=T,this.defaultSettings={...T};let D=new p(_);D.addPass(new f(S,C));let O=new b(new t(innerWidth,innerHeight),T.bloomStrength,T.bloomRadius,T.bloomThreshold);D.addPass(O),D.addPass(new m);let j={uTime:{value:0},uBreath:{value:1},uRoll:{value:1},uFlutter:{value:.65},uOpacity:{value:.3},uCore:{value:1}};Object.assign(j,{uMusic:{value:0},uOpening:{value:1},uWidth:{value:1},uGrowth:{value:0},uFold:{value:0},uDepth:{value:0},uEdge:{value:0},uWaves:{value:E.waves},uWaveSpeed:{value:T.waveSpeed},uAccent:{value:new c(.2,.6,.7)},uAudioBass:{value:0},uAudioMid:{value:0},uAudioPulse:{value:0},uViolet:{value:new c(.305,.287,.701)},uPale:{value:new c(.53,.49,.82)},uIce:{value:new c(.191,.591,.701)}});let M=new l;S.add(M);let N=new r(1,1,100,48),P=`
precision highp float;
uniform float uTime,uBreath,uRoll,uFlutter,uCore;
uniform float uAudioBass,uAudioMid;
uniform float uMusic,uOpening,uWidth,uGrowth,uFold,uDepth,uEdge;
uniform vec4 uPetal; // angle, length, width, phase
${A}
uniform float uLayer;
varying vec2 vParam;
varying vec3 vPosition;
varying float vFold;
const float PI=3.14159265359;
vec3 spine(float s){
  float phase=uPetal.w;
  float t=uTime;
  float release=sin(t*.31+phase)*uBreath*(1.-uMusic);
  float angle=uPetal.x+1.30*(1.-exp(-s*2.8));
  angle+=mix(.21*sin(t*.24+phase)*uBreath,uFold*.28*sin(phase),uMusic)*smoothstep(0.,.65,s);
  // Growth builds toward the tip, leaving the root anchored at the core.
  float growth=uGrowth*(.85+.15*sin(phase));
  float radius=.43*uCore+uPetal.y*pow(s,1.08)*(uOpening+.085*release*sin(PI*s)+waveAt(s)*.16)*(1.+growth*smoothstep(0.,1.,s));
  float z=-.8*(1.-s)+.52*sin(PI*s)+.22*sin(t*.28+phase+s*3.)*sin(PI*s)*uBreath;
  z+=uDepth*sin(PI*s)*sin(phase+1.)+waveAt(s)*.65;
  return vec3(cos(angle)*radius,sin(angle)*radius,z+uLayer);
}
void main(){
  float s=uv.x;
  float a=uv.y*2.-1.;
  float phase=uPetal.w;
  vec3 c=spine(s);
  vec3 T=normalize(spine(min(s+.003,1.))-spine(max(0.,s-.003)));
  vec3 N=normalize(vec3(-T.y,T.x,0.));
  vec3 B=normalize(cross(T,N));
  float envelope=pow(max(sin(PI*s),0.),.66);
  float width=uPetal.z*envelope*(.72+.28*s);
  width*=1.+uGrowth*.22*s;
  width*=uWidth*(1.+.09*sin(uTime*.34+phase+1.)*uBreath*(1.-uMusic));
  float fold=(.25+s)*uRoll+mix(.57*sin(uTime*.29+phase+s*1.5)*uRoll,uFold*sin(phase+s*2.4),uMusic)*smoothstep(.03,.65,s)+waveAt(s)*.35;
  // Curved cross-section, rather than a flat strip translated only in Z.
  float curvature=.82+.3*sin(uTime*.27+phase)*(1.-uMusic)+uEdge*.22;
  float crossAngle=a*curvature;
  vec3 R=N*cos(fold)+B*sin(fold);
  vec3 Q=-N*sin(fold)+B*cos(fold);
  vec3 p=c+R*(sin(crossAngle)/curvature*width);
  p+=Q*((1.-cos(crossAngle))/curvature*width);
  // Broad longitudinal folds carry light across the membrane, not just its outline.
  float pleat=sin(a*7.5+s*1.8+phase+uTime*.16)*.095;
  pleat+=sin(a*13.-s*2.1+phase)*.024;
  p+=Q*pleat*envelope*(1.-.45*pow(abs(a),4.));
  float edge=pow(abs(a),6.);
  float ripple=(sin(s*33.+phase+uTime*.42)*.018+sin(s*63.-uTime*.31+phase)*.006)*uFlutter*(1.+uEdge*2.);
  p+=Q*(edge*envelope*(.12*sin(s*8.+phase+uTime*.24)+ripple));
  p+=N*(edge*envelope*ripple*.55);
  p.y*=1.13;
  vParam=vec2(s,a);vPosition=(modelViewMatrix*vec4(p,1.)).xyz;vFold=fold;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
}`,F=`
precision highp float;
uniform float uOpacity,uAudioPulse;
uniform vec3 uViolet,uPale,uIce;
uniform vec4 uPetal;
uniform vec3 uAccent;
${A}
varying vec2 vParam;
varying vec3 vPosition;
varying float vFold;
void main(){
  float s=vParam.x,a=vParam.y;
  vec3 normal=normalize(cross(dFdx(vPosition),dFdy(vPosition)));
  if(normal.z<0.)normal=-normal;
  float diffuse=max(dot(normal,normalize(vec3(-.5,.7,1.))),0.);
  float grazing=1.-abs(normal.z);
  // Linear-light palette: blue violet silk, icy folds, restrained pearl edges.
  vec3 violet=uViolet;
  vec3 pale=uPale;
  vec3 col=mix(violet,pale,smoothstep(.25,.9,s));
  float root=1.-smoothstep(.06,.38,s);
  col=mix(col,vec3(.021,.036,.138),root*.94);
  float ice=exp(-pow((s-.40)/.25,2.))*smoothstep(-.35,.9,a)*(.45+.55*pow(sin(uPetal.w),2.));
  col=mix(col,uIce,ice*.72);
  float border=smoothstep(.965,.999,abs(a));
  float rim=pow(grazing,3.0)*.24;
  col*=.62+.38*diffuse;
  col=mix(col,uPale,clamp(border*.22+rim*.45,0.,.30));
  // Optical absorption increases at grazing angles and in overlapping membranes.
  float thickness=1.+grazing*.8+root*2.3+border*.7;
  float alpha=1.-exp(-uOpacity*thickness);
  alpha*=smoothstep(0.,.035,s)*(1.-smoothstep(.988,1.,s));
  float colorWave=waveAt(s)*(.7+.3*abs(a));
  col=mix(col,uAccent*(.75+.25*diffuse),clamp(colorWave*.48,0.,.55));
  col+=uAccent*colorWave*.045;
  // Compress the RGB peak uniformly so the wave retains its hue.
  float peak=max(col.r,max(col.g,col.b));
  float safePeak=.65+.18*(1.-exp(-max(0.,peak-.65)/.18));
  col*=min(1.,safePeak/max(peak,.0001));
  gl_FragColor=vec4(col,alpha);


}`;for(let[e,t,r,i,o]of[[.15,4.65,2.3,.3,-.12],[1.5,4.85,2.6,1.7,.1],[2.87,4.1,2.15,3.1,-.04],[4.22,5,2.45,4.6,.05],[5.4,4,1.85,5.8,.16],[.72,3.05,1.45,2.5,.28],[2.24,3.3,1.55,4,.32],[3.65,3,1.4,5.5,.38],[5,3.1,1.5,.9,.42],[1.1,1.85,.85,3.3,.5],[3.2,1.95,.92,5.3,.55],[5.3,1.8,.8,1.4,.6]]){let c=new n(N,new s({uniforms:{...j,uPetal:{value:new a(e,t,r,i)},uLayer:{value:o}},vertexShader:P,fragmentShader:F,transparent:!0,side:2,depthWrite:!1,depthTest:!0,forceSinglePass:!0}));c.frustumCulled=!1,c.renderOrder=10+o,M.add(c)}let I=new n(new r(4.4,4.4),new s({uniforms:j,transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
    precision highp float;
    uniform float uTime,uCore,uBreath;
    varying vec2 vUv;
    void main(){
      vec2 p=(vUv-.5)*2.;p.y*=.92;
      float theta=atan(p.y,p.x);
      float contour=1.+.085*sin(theta*3.+.5)+.045*sin(theta*2.-uTime*.16)*uBreath;
      float r=length(p)/(uCore*contour);
      float core=1.-smoothstep(.26,.43,r);
      float halo=(1.-smoothstep(.38,.90,r))*.55;
      vec3 col=mix(vec3(.00152,.00212,.00402),vec3(.016,.055,.105),smoothstep(.30,.62,r));
      float alpha=max(core*.995,halo);
      gl_FragColor=vec4(col,alpha);
    
    }`}));I.position.z=-2,I.renderOrder=0,M.add(I),this.scene=S,this.camera=C,this.renderer=_,this.controls=w,this.composer=D,this.bloomPass=O,this.uniforms=j,this.sculpture=M,this.audioMotion=E,this.waves=E.waves,this.guiContainer=v(`Animation72-gui-container`),document.body.appendChild(this.guiContainer),this.scrollbarStyle=y(`Animation72-gui-container`);let L=this.gui=new h({title:`月光薄纱`,container:this.guiContainer});L.add(T,`speed`,0,2,.01).name(`流动速度`),L.add(T,`breath`,0,1.6,.01).name(`舒展幅度`),L.add(T,`roll`,.15,1.5,.01).name(`翻卷程度`),L.add(T,`flutter`,0,1.5,.01).name(`边缘细褶`),L.add(T,`opacity`,.08,.42,.005).name(`薄膜浓度`),L.add(T,`core`,.65,1.3,.01).name(`中心大小`),L.add(T,`scale`,.7,1.25,.01).name(`整体大小`),L.add(T,`pause`).name(`暂停动画`);let R=L.addFolder(`音频响应`);R.add(T,`audioEnabled`).name(`音乐驱动`),R.add(T,`shapeResponse`,0,1.5,.01).name(`形变总幅度`),R.add(T,`openingRange`,0,.8,.01).name(`低频 → 开合范围`),R.add(T,`widthRange`,0,.8,.01).name(`低频 → 花瓣宽度`),R.add(T,`growthRange`,0,.8,.01).name(`能量 / 低频 → 生长幅度`),R.add(T,`foldRange`,0,1.8,.01).name(`中频 → 折叠角度`),R.add(T,`depthRange`,0,1.8,.01).name(`中频 → 弯曲深度`),R.add(T,`edgeRange`,0,4,.01).name(`高频 → 卷边细褶`),R.add(T,`colorResponse`,0,2,.01).name(`音频变色强度`),R.add(T,`colorSpeed`,.2,2,.01).name(`色相流动速度`),R.add(T,`saturationBoost`,0,1.5,.01).name(`低频彩度增强`),R.add(T,`waveSpeed`,.5,1.6,.01).name(`鼓点波传播速度`),R.add(T,`beatResponse`,0,2,.01).name(`鼓点形变 / 色光波`);let z=L.addFolder(`泛光效果`);z.add(T,`bloom`).name(`启用泛光效果`),z.add(T,`bloomStrength`,0,1.5,.01).name(`泛光强度`),z.add(T,`bloomRadius`,0,1,.01).name(`泛光范围`),z.add(T,`bloomThreshold`,0,1,.01).name(`泛光阈值`),L.hide(),this.settingsButton=g(`Animation72-settings-button`),this.toggleGUI=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?L.show():L.hide()},this.settingsButton.addEventListener(`click`,this.toggleGUI),document.body.appendChild(this.settingsButton),this.preventContextMenu=e=>e.preventDefault(),this.canvas.addEventListener(`contextmenu`,this.preventContextMenu),this.resetState(),this.onWindowResize()}updateWithAudioData(e){this.audio=e?.isPlaying===!0?e.audioFeature?.animation:null}updateAudioAnalysis(e){let t=this.settings,n=this.uniforms,r=t.audioEnabled&&this.audio&&this.audio.energy>.0015?this.audio:null,i=e=>Number.isFinite(Number(e))?Math.max(0,Math.min(1.5,Number(e))):0;for(let t in this.drive){let n=r?i(r[t]):0;this.drive[t]+=(n-this.drive[t])*(1-Math.exp(-e/(n>this.drive[t]?.065:.24)))}let a=r?i(r.kick):0;if(this.cooldown=Math.max(0,this.cooldown-e),this.pulse*=Math.exp(-e/.26),a>.06&&a>this.previousKick+.02&&this.cooldown===0&&(this.pulse=Math.max(this.pulse,Math.min(1,a*2.4)),this.cooldown=.18),this.previousKick=a,t.pause)return;this.musicMix+=(+!!r-this.musicMix)*(1-Math.exp(-e/(r?.18:.65)));let o=e=>Math.min(1,e**.65),s=o(this.drive.bass),c=o(this.drive.mid),l=o(this.drive.high),u=o(this.drive.energy),d=this.musicMix;n.uMusic.value=d,n.uOpening.value=1+d*(s-.35)*t.openingRange*t.shapeResponse,n.uWidth.value=1+d*(s-.4)*t.widthRange*t.shapeResponse,n.uGrowth.value=d*(u*.7+s*.3)*t.growthRange*t.shapeResponse,n.uFold.value=(c-.3)*t.foldRange*t.shapeResponse*2,n.uDepth.value=d*(c-.25)*t.depthRange*t.shapeResponse,n.uEdge.value=l*t.edgeRange*t.shapeResponse*d,n.uAudioBass.value=s*d,n.uAudioMid.value=c*d,n.uAudioPulse.value=this.pulse*t.beatResponse,n.uOpacity.value=t.opacity*(1+.1*u*d),n.uWaveSpeed.value=t.waveSpeed,this.audioMotion.update(r,e,{...t,style:`veil`}),this.applyAudioColors(),this.bloomPass.strength=Math.min(.65,t.bloomStrength+this.pulse*.035*t.beatResponse)}applyAudioColors(){let e=this.uniforms;e.uViolet.value.set(...this.audioMotion.colors.violet),e.uPale.value.set(...this.audioMotion.colors.pale),e.uIce.value.set(...this.audioMotion.colors.ice),e.uAccent.value.set(...this.audioMotion.accent),e.uWaveSpeed.value=this.settings.waveSpeed}render(){if(this.disposed)return;let e=performance.now()/1e3,t=this.lastTime===null?1/60:Math.max(0,Math.min(e-this.lastTime,.05));this.lastTime=e;let n=this.settings,r=this.uniforms;n.pause||(this.time+=t*n.speed*(1+Math.min(1.5,this.drive.motion*5)*n.shapeResponse)),r.uTime.value=this.time,r.uBreath.value=n.breath,r.uRoll.value=n.roll,r.uFlutter.value=n.flutter,r.uCore.value=n.core,n.pause&&(r.uOpacity.value=n.opacity),this.sculpture.scale.setScalar(n.scale),this.bloomPass.enabled=n.bloom,this.bloomPass.radius=n.bloomRadius,this.bloomPass.threshold=n.bloomThreshold,this.bloomPass.strength=n.bloomStrength,this.updateAudioAnalysis(t),this.controls.update(),this.composer.render()}onWindowResize(){if(this.disposed)return;let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight,n=e/t,r=Math.max(7.6,7.2/n);Object.assign(this.camera,{left:-r*n,right:r*n,top:r,bottom:-r});let i=e<600?-r*.11:0;this.camera.top+=i,this.camera.bottom+=i,this.camera.updateProjectionMatrix();let a=Math.min(devicePixelRatio,2);this.renderer.setPixelRatio(a),this.renderer.setSize(e,t),this.composer.setPixelRatio(a),this.composer.setSize(e,t)}resetState(){this.audio=null,this.drive={bass:0,mid:0,high:0,motion:0,energy:0},this.musicMix=0,this.previousKick=0,this.pulse=0,this.cooldown=0,this.time=0,this.lastTime=null,this.audioMotion.reset(),this.applyAudioColors(),this.updateAudioAnalysis(0),this.resetGuiCamera()}resetGuiCamera(){this.controls.reset(),this.controls.update()}dispose(){if(this.disposed)return;this.disposed=!0,this.canvas.removeEventListener(`contextmenu`,this.preventContextMenu),this.settingsButton.removeEventListener(`click`,this.toggleGUI),_(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle.remove(),this.controls.dispose();let e=new Set,t=new Set;this.scene.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&t.add(n.material)}),e.forEach(e=>e.dispose()),t.forEach(e=>e.dispose()),this.composer.passes.forEach(e=>e.dispose?.()),this.composer.dispose(),this.scene.clear(),this.renderer.dispose()}};export{j as default};