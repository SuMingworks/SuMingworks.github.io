import{At as e,Jt as t,Kt as n,Nr as r,Pr as i,X as a,cr as o,er as s,nr as c,r as l,rr as u}from"./three.module-CI1jJgD_.js";import{a as d,i as f,n as p,r as m,t as h}from"./GUIHelper-CK73tCKI.js";import{t as g}from"./AnimationCameraControls-2zD2PkBR.js";import{c as _,l as v,n as y,r as b,s as x}from"./PerceptualColor-5EYeXve1.js";var S=class{constructor(d,f={}){this.canvas=d,this.settings={enabled:!0,amount:1,colorAmount:1,beatAmount:1,colorResponse:9,flowing:!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,flowSpeed:.65,chroma:1,exposure:1.12,reflection:1,shellOpacity:1,...f},this.disposed=!1,this.audioData=null;let p=new l({canvas:d,antialias:!0,alpha:!0,powerPreference:`high-performance`});p.outputColorSpace=s,p.setClearColor(0,0),p.toneMapping=4;let m=new c,h=new n(36,window.innerWidth/window.innerHeight,.1,40),S=new g(h,p.domElement);S.enableDamping=!0,S.enablePan=!1,S.minDistance=4,S.maxDistance=11;function C(){let e=S.enableDamping;S.enableDamping=!1,S.update(),h.position.set(-5.65,.8,3.1).normalize().multiplyScalar(window.innerWidth<640?8:6.5),S.target.set(0,0,0),S.update(),S.enableDamping=e}C();let w=new a;m.add(w);let T={uTime:{value:0},uChroma:{value:1},uBass:{value:0},uCurl:{value:0},uDetail:{value:0},uLayer:{value:0},uShellHue:{value:0},uWaveGain:{value:1},uWaves:{value:Array.from({length:3},()=>new r(10,0))},uHueShift:{value:0},uColorIntensity:{value:1},uAudioGain:{value:1},uAudioBlend:{value:0},uAudioTint:{value:new i(1,1,1)},uReflectionGain:{value:1},uShellStrength:{value:1}},E=`
uniform float uTime;uniform float uBass,uCurl,uDetail,uLayer;varying vec3 vWorld;varying vec3 vNormal;varying vec2 vUv;
vec3 surface(vec2 uv){
 float a=uv.x*6.2831853,b=uv.y*6.2831853,t=uTime*.32+uLayer*.12*uCurl;
 float radius=.83+.10*sin(a*2.+t)+.04*cos(a*3.-t*.7);
 float tube=.235+.125*(.5+.5*sin(a+.75))+.045*sin(2.*a-t);
 tube*=1.+mix(.28,.17,uLayer)*uBass;
 float q=b+a+.38*sin(a*2.+t*.5)+.52*uCurl*sin(a*2.-t+uLayer*.65);
 vec3 p=vec3(radius*cos(a),radius*sin(a)*.90-.12,.29*sin(a*2.+.65+t*.5));
 p+=vec3(cos(a),sin(a),0.)*tube*cos(q)+vec3(0.,0.,tube*.85*sin(q));
 p.y+=.075*sin(a*3.+t)*sin(b);
 p.z+=.14*cos(a-1.1)+.055*sin(3.*a+b+t);
 p.z+=.14*uBass*sin(a*2.+t)+mix(.010,.024,uLayer)*uDetail*sin(8.*a+2.*b-t*2.);
 return p;
}
void main(){
 vUv=uv;vec3 p=surface(uv);
 vec3 du=surface(uv+vec2(.0003,0.))-surface(uv-vec2(.0003,0.));
 vec3 dv=surface(uv+vec2(0.,.0003))-surface(uv-vec2(0.,.0003));
 vNormal=normalize(transpose(inverse(mat3(modelMatrix)))*normalize(cross(du,dv)));
 vec4 w=modelMatrix*vec4(p,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;
}`,D=`
precision highp float;
varying vec3 vWorld;varying vec3 vNormal;varying vec2 vUv;
uniform float uTime;uniform float uChroma;uniform float uReflectionGain,uShellStrength;

uniform float uHueShift,uColorIntensity,uAudioGain,uAudioBlend;
uniform vec3 uAudioTint;
uniform float uLayer,uShellHue,uWaveGain;
uniform vec2 uWaves[3];
// Thin-film spectral phase is preserved; sound offsets it continuously.
// Perceptual tint comes from the shared JS module in linear RGB.
vec3 audioFilm(vec3 base){
 float gray=dot(base,vec3(.2126,.7152,.0722));
 vec3 saturated=max(vec3(0.),mix(vec3(gray),base,uColorIntensity));
 vec3 tinted=mix(saturated*(vec3(.35)+uAudioTint*1.9),uAudioTint*(.35+gray*.95),.48);
 return mix(saturated,tinted,uAudioBlend)*uAudioGain;
}

float travelingBeat(vec2 uv){
 float light=0.;
 for(int i=0;i<3;i++){
  float age=uWaves[i].x-uLayer*.10;
  float center=fract(max(age,0.)*.78);
  float distanceAlong=abs(uv.x-center);
  distanceAlong=min(distanceAlong,1.-distanceAlong);
  float envelope=exp(-max(age,0.)*1.65)*(1.-smoothstep(.85,1.25,max(age,0.)));
  light+=exp(-distanceAlong*distanceAlong/.0025)*uWaves[i].y*envelope*step(0.,age);
 }
 return min(light,1.5)*uWaveGain;
}
// Scale all channels together, preserving hue in bright glass reflections.
vec3 protectHighlight(vec3 color){
 float peak=max(color.r,max(color.g,color.b));
 float excess=max(peak-1.35,0.);
 float mapped=1.35+.80*(1.-exp(-excess/1.25));
 return peak>1.35?color*(mapped/peak):color;
}

vec3 spectrum(float p){return .5+.5*cos(6.2831853*(p+vec3(0.,.33,.67)));}
float box(vec2 p,vec2 b,float f){vec2 d=abs(p)-b;return 1.-smoothstep(-f,f,max(d.x,d.y));}
// Procedural studio: a wide overhead softbox and narrow colored strip lights.
vec3 studio(vec3 r){
 vec3 c=vec3(.005,.007,.016);
 float top=box(vec2(r.x+.12,r.y-.77),vec2(.70,.13),.045)*smoothstep(-.45,.15,r.z);
 c+=mix(vec3(.52,.66,1.),vec3(1.,.65,.35),smoothstep(-.65,.75,r.x))*top*2.5;
 float strip=exp(-pow((r.y+.48+.15*r.x)/.065,2.))*exp(-pow((r.x-.1)/.9,6.));
 c+=mix(vec3(.15,.55,1.),vec3(1.,.15,.53),smoothstep(-.5,.65,r.x))*strip*.55;
 c+=vec3(.17,.10,.54)*exp(-pow((r.x+.88)/.11,2.))*exp(-pow(r.y/.7,4.));
 c+=vec3(.70,.13,.29)*exp(-pow((r.x-.92)/.08,2.))*exp(-pow((r.y+.1)/.65,4.));
 c+=vec3(.7,.8,1.)*pow(max(0.,dot(r,normalize(vec3(-.6,.1,1.)))),90.)*.65;
 return c;
}
void main(){
 vec3 n=normalize(vNormal);if(!gl_FrontFacing)n=-n;
 vec3 v=normalize(cameraPosition-vWorld);float nv=max(0.,dot(n,v));
 vec3 r=reflect(-v,n);
 float phase=.66+nv*.98+vWorld.y*.20+vWorld.x*.12+.07*sin(vUv.x*12.566)+uHueShift*(1.-uLayer*.22);
 vec3 rainbow=pow(spectrum(phase),vec3(1.35));
 rainbow=mix(vec3(.58,.61,.69),rainbow,clamp(uChroma,0.,1.))*(1.+max(0.,uChroma-1.)*.45);
 rainbow=audioFilm(rainbow);
 float fresnel=pow(1.-nv,2.5);
 float broad=pow(max(0.,dot(n,normalize(vec3(-.5,1.,1.2)))),2.);
 vec3 color=rainbow*(.10+.49*broad+.38*fresnel)+studio(r)*(.60+.55*fresnel)*uReflectionGain*(vec3(.82)+rainbow*.18);
 float line=pow(.5+.5*sin(phase*31.+vWorld.z*5.),32.);
 color+=mix(rainbow,vec3(.65,.78,1.),.35)*line*.20+vec3(.025,.003,.033);
 float wave=travelingBeat(vUv);
 color+=mix(rainbow,uAudioTint,.45)*wave*(.12+.32*fresnel);
 gl_FragColor=vec4(protectHighlight(color),1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,O=new t(1,1,256,80),k=new u({uniforms:T,vertexShader:E,fragmentShader:D,side:2}),A=new e(O,k);A.rotation.set(.2,-.2,-.48),A.position.y=-.1,A.frustumCulled=!1,w.add(A);let j=new u({uniforms:{...T,uLayer:{value:1}},vertexShader:E,fragmentShader:D,side:2}),M=new e(O,j);M.scale.set(.72,.63,.7),M.rotation.set(1.2,.3,.45),M.position.set(0,-.34,-.27),M.frustumCulled=!1,w.add(M);let N=new e(new o(1.49,128,96),new u({uniforms:T,vertexShader:`
varying vec3 vWorld;varying vec3 vNormal;varying vec2 vUv;
void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;vNormal=normalize(transpose(inverse(mat3(modelMatrix)))*normal);gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`
precision highp float;
varying vec3 vWorld;varying vec3 vNormal;varying vec2 vUv;
uniform float uTime;uniform float uChroma;uniform float uReflectionGain,uShellStrength;

uniform float uHueShift,uColorIntensity,uAudioGain,uAudioBlend;
uniform vec3 uAudioTint;
uniform float uLayer,uShellHue,uWaveGain;
uniform vec2 uWaves[3];
// Thin-film spectral phase is preserved; sound offsets it continuously.
// Perceptual tint comes from the shared JS module in linear RGB.
vec3 audioFilm(vec3 base){
 float gray=dot(base,vec3(.2126,.7152,.0722));
 vec3 saturated=max(vec3(0.),mix(vec3(gray),base,uColorIntensity));
 vec3 tinted=mix(saturated*(vec3(.35)+uAudioTint*1.9),uAudioTint*(.35+gray*.95),.48);
 return mix(saturated,tinted,uAudioBlend)*uAudioGain;
}

float travelingBeat(vec2 uv){
 float light=0.;
 for(int i=0;i<3;i++){
  float age=uWaves[i].x-uLayer*.10;
  float center=fract(max(age,0.)*.78);
  float distanceAlong=abs(uv.x-center);
  distanceAlong=min(distanceAlong,1.-distanceAlong);
  float envelope=exp(-max(age,0.)*1.65)*(1.-smoothstep(.85,1.25,max(age,0.)));
  light+=exp(-distanceAlong*distanceAlong/.0025)*uWaves[i].y*envelope*step(0.,age);
 }
 return min(light,1.5)*uWaveGain;
}
// Scale all channels together, preserving hue in bright glass reflections.
vec3 protectHighlight(vec3 color){
 float peak=max(color.r,max(color.g,color.b));
 float excess=max(peak-1.35,0.);
 float mapped=1.35+.80*(1.-exp(-excess/1.25));
 return peak>1.35?color*(mapped/peak):color;
}

vec3 spectrum(float p){return .5+.5*cos(6.2831853*(p+vec3(0.,.33,.67)));}
float box(vec2 p,vec2 b,float f){vec2 d=abs(p)-b;return 1.-smoothstep(-f,f,max(d.x,d.y));}
// Procedural studio: a wide overhead softbox and narrow colored strip lights.
vec3 studio(vec3 r){
 vec3 c=vec3(.005,.007,.016);
 float top=box(vec2(r.x+.12,r.y-.77),vec2(.70,.13),.045)*smoothstep(-.45,.15,r.z);
 c+=mix(vec3(.52,.66,1.),vec3(1.,.65,.35),smoothstep(-.65,.75,r.x))*top*2.5;
 float strip=exp(-pow((r.y+.48+.15*r.x)/.065,2.))*exp(-pow((r.x-.1)/.9,6.));
 c+=mix(vec3(.15,.55,1.),vec3(1.,.15,.53),smoothstep(-.5,.65,r.x))*strip*.55;
 c+=vec3(.17,.10,.54)*exp(-pow((r.x+.88)/.11,2.))*exp(-pow(r.y/.7,4.));
 c+=vec3(.70,.13,.29)*exp(-pow((r.x-.92)/.08,2.))*exp(-pow((r.y+.1)/.65,4.));
 c+=vec3(.7,.8,1.)*pow(max(0.,dot(r,normalize(vec3(-.6,.1,1.)))),90.)*.65;
 return c;
}
void main(){
 vec3 n=normalize(vNormal),v=normalize(cameraPosition-vWorld);
 float nv=max(dot(n,v),0.);vec3 r=reflect(-v,n);
 float edge=pow(1.-nv,3.2);
 vec3 film=mix(vec3(.6),spectrum(.56+nv*.9+vWorld.y*.14+vWorld.x*.09+uShellHue),clamp(uChroma,0.,1.));
 film=mix(film,audioFilm(film),.85);
 vec3 reflection=studio(r)*uReflectionGain;
 reflection=reflection/(vec3(1.)+reflection*.24);
 // Sound colors both the broad reflections and the transparent rim.
 float response=clamp(uAudioBlend,0.,1.);
 // Tint reflection luminance directly: multiplying the already bright studio
 // RGB washed the musical hue out during tone mapping, especially at the rim.
 float tintPeak=max(max(uAudioTint.r,uAudioTint.g),uAudioTint.b);
 vec3 musicalTint=uAudioTint/max(tintPeak,.001);
 vec3 shellTint=mix(film,musicalTint,.82*response);
 float reflectionLight=dot(reflection,vec3(.2126,.7152,.0722));
 vec3 coloredReflection=reflectionLight*(vec3(.045)+musicalTint*1.15);
 reflection=mix(reflection,coloredReflection,clamp(response*1.55,0.,.96));
 float broadSheen=pow(1.-nv,1.4);
 vec3 color=reflection*.78+shellTint*edge*(.30+response*.90)
  +shellTint*response*.22*broadSheen;
 float peak=max(reflection.r,max(reflection.g,reflection.b));
 float opacity=clamp(.012+edge*.48+peak*.42,.012,.82);
 // Keep bright transparent pixels chromatic before ACES; unbounded division
 // by a small alpha otherwise turns even a colored reflection nearly white.
 gl_FragColor=vec4(protectHighlight(color/max(opacity,.07)),clamp(opacity*uShellStrength,0.,1.));
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,transparent:!0,depthWrite:!1,side:0}));N.scale.set(1,.96,1),N.renderOrder=5,w.add(N);let P=(e,t=0)=>Number.isFinite(e)?e:t,F=(e,t=1)=>Math.min(t,Math.max(0,P(e))),I=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),L=this.settings,R=b({low:`#ff6c94`,mid:`#945bff`,high:`#4ddcff`,accent:`#ffb967`,red:`#ff385f`,amber:`#ffb52e`,green:`#72ee50`,cyan:`#28dedb`,blue:`#4878ff`,violet:`#d24dff`}),z=[R.red,R.amber,R.green,R.cyan,R.blue,R.violet],B=[R.low,R.mid,R.high],V=[0,0,0],H={preserveChroma:.65,maxChromaScale:2.5},U={maxValue:1},W={threshold:1,headroom:.18,softness:.6},G=[...R.mid],K=[0,0,0];class q{constructor(){this.lastTime=null,this.elapsed=0,this.colorPhase=0,this.resetState()}resetState(){this.lastTime=null,this.elapsed=0,this.previousKick=0,this.cooldown=0,this.shock=0,this.flow=0,this.colorPhase=0,this.waveIndex=0;for(let e of T.uWaves.value)e.set(10,0);T.uShellHue.value=0;for(let e of[`uBass`,`uCurl`,`uDetail`,`uHueShift`,`uAudioBlend`,`uTime`])T[e].value=0;T.uColorIntensity.value=1,T.uAudioGain.value=1,T.uWaveGain.value=L.amount*L.beatAmount,T.uAudioTint.value.set(1,1,1);for(let e=0;e<3;e++)G[e]=R.mid[e]}updateWithAudioData(e,t){let n=this.lastTime===null?1/60:Math.min(.05,Math.max(0,(t-this.lastTime)/1e3));this.lastTime=t;let r=e?.audioFeature?.animation,i=L.enabled&&e?.isPlaying===!0&&!!r&&F(r.energy)>.001,a=i?F(r.bass):0,o=i?F(r.mid):0,s=i?F(r.high):0,c=i?F(r.motion):0,l=i?F(r.energy):0,u=L.amount;this.flow=I(this.flow,c,7,n),L.flowing&&(this.elapsed+=n*L.flowSpeed*(1+this.flow*2.2*u)),T.uTime.value=this.elapsed,T.uBass.value=I(T.uBass.value,a*u,12,n),T.uCurl.value=I(T.uCurl.value,o*u,10,n),T.uDetail.value=I(T.uDetail.value,s*u,16,n);let d=i?F(r.kick,2):0;this.cooldown=Math.max(0,this.cooldown-n),this.shock*=Math.exp(-5.5*n);for(let e of T.uWaves.value)e.x+=n,i||(e.y*=Math.exp(-9*n));T.uWaveGain.value=u*L.beatAmount,d>.1&&d>this.previousKick*1.22+.025&&this.cooldown===0&&(T.uWaves.value[this.waveIndex].set(0,Math.min(1.3,d)),this.waveIndex=(this.waveIndex+1)%3,this.shock=Math.max(this.shock,Math.min(1.3,d)),this.cooldown=.13),this.previousKick=d,i&&(this.colorPhase+=n*(o*.9+s*1.35));let f=Math.min(1.5,o+s),p=(o*.65+s*.95+Math.sin(this.colorPhase)*.22*f)*L.colorAmount;T.uHueShift.value=I(T.uHueShift.value,p,i?L.colorResponse:1/.18,n),T.uShellHue.value=I(T.uShellHue.value,p*.85,i?5.5:1/.18,n),T.uColorIntensity.value=I(T.uColorIntensity.value,1+a*.38*L.colorAmount,9,n),T.uAudioGain.value=I(T.uAudioGain.value,1+l*.1,9,n);let m=i?Math.min(.88,(.38+f*.4)*L.colorAmount):0;if(T.uAudioBlend.value=I(T.uAudioBlend.value,m,i?L.colorResponse:1/.18,n),i){V[0]=.08+a,V[1]=.12+o,V[2]=.06+s;let e=v(B,V,H),t=(p%1+1)%1*z.length,r=Math.floor(t),i=_(_(e,_(z[r],z[(r+1)%z.length],t-r),.86),R.accent,Math.min(.12,this.shock*.1));for(let e=0;e<3;e++)G[e]=I(G[e],i[e],L.colorResponse,n);let c=x(G,U);for(let e=0;e<3;e++)K[e]=c[e]*(1+s*.18);let l=y(K,W);T.uAudioTint.value.fromArray(l)}let h=this.elapsed;w.rotation.y=.16*Math.sin(h*.22),w.rotation.z=.035*Math.sin(h*.27),w.position.y=.035*Math.sin(h*.55)}render(){S.update(),p.render(m,h)}dispose(){O.dispose(),k.dispose(),j.dispose(),N.geometry.dispose(),N.material.dispose(),S.dispose(),p.dispose(),m.clear()}}this.renderer=p,this.scene=m,this.camera=h,this.controls=S,this.uniforms=T,this.group=w,this.director=new q,this.resetGuiCamera=()=>{this.disposed||C()};try{this.setupGUI(),this.onWindowResize(),this.syncSettings()}catch(e){throw this.dispose(),e}}setupGUI(){let e=this.settings;this.guiContainer=m(`Animation77-gui-container`),document.body.appendChild(this.guiContainer),this.scrollbarStyle=h(`Animation77-gui-container`),this.gui=new d({title:`77.虹彩流体`,width:290,container:this.guiContainer});let t=this.gui.addFolder(`流体与材质`);t.add(e,`flowing`).name(`流动动画`),t.add(e,`flowSpeed`,0,2,.01).name(`基础流速`),t.add(e,`chroma`,0,1.5,.01).name(`虹彩强度`),t.add(e,`exposure`,.5,1.8,.01).name(`曝光`),t.add(e,`reflection`,0,1.5,.01).name(`反射高光`),t.add(e,`shellOpacity`,0,1.5,.01).name(`球壳透明强度`);let n=this.gui.addFolder(`音频驱动`);n.add(e,`enabled`).name(`启用驱动`),n.add(e,`amount`,0,1.5,.05).name(`形变强度`),n.add(e,`colorAmount`,0,3,.05).name(`变色强度`),n.add(e,`beatAmount`,0,2,.05).name(`鼓点亮纹`),n.add(e,`colorResponse`,2,18,.5).name(`变色响应速度`),this.gui.hide(),this.guiVisible=!1,this.settingsButton=f(`Animation77-settings-button`),this.toggleGUI=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()},this.settingsButton.addEventListener(`click`,this.toggleGUI),document.body.appendChild(this.settingsButton)}updateWithAudioData(e){this.disposed||(this.audioData=e)}syncSettings(){let e=this.settings,t=this.uniforms;t.uChroma.value=e.chroma,t.uReflectionGain.value=e.reflection,t.uShellStrength.value=e.shellOpacity,this.renderer.toneMappingExposure=e.exposure}render(){this.disposed||(this.syncSettings(),this.director.updateWithAudioData(this.audioData,performance.now()),this.director.render())}onWindowResize(){if(this.disposed)return;let e=Math.max(1,this.canvas.clientWidth||window.innerWidth),t=Math.max(1,this.canvas.clientHeight||window.innerHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,t)}resetState(){this.disposed||(this.audioData=null,this.director.resetState(),this.group.rotation.set(0,0,0),this.group.position.set(0,0,0),this.syncSettings(),this.resetGuiCamera())}dispose(){this.disposed||(this.disposed=!0,this.audioData=null,this.settingsButton?.removeEventListener(`click`,this.toggleGUI),p(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.director.dispose())}};export{S as default};