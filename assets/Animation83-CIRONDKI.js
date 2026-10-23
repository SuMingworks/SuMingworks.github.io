import{At as e,Et as t,Jt as n,Kt as r,Nr as i,Pr as a,St as o,X as s,Xt as c,_t as l,d as u,ft as d,mt as f,nr as p,r as m,rr as h,u as g,v as _,wt as ee}from"./three.module-CI1jJgD_.js";import{n as te,r as ne,t as re}from"./OutputPass-D7sfcF5T.js";import{a as ie,i as ae,n as oe,r as se,t as ce}from"./GUIHelper-DNd0uFVI.js";import{t as le}from"./UnrealBloomPass-afIQHt-X.js";import{t as ue}from"./OrbitControls-DLu-nFn1.js";import{c as de,m as fe,n as pe,r as me,s as he}from"./PerceptualColor-5EYeXve1.js";var v=()=>({blending:5,blendEquation:100,blendSrc:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:201,blendDstAlpha:205}),ge=class{static globalBackgroundPolicy=`inherit`;constructor(e,t={}){this.canvas=e,this.globalBackgroundPolicy=`inherit`,this.events=new AbortController,this.resources=new Set;try{this.init(t)}catch(e){throw this.dispose(),e}}init(oe={}){if(this.disposed||this.renderer)return;let ge=Object.freeze({enabled:!0,strength:1,colorReactivity:1,colorResponse:14,saturationBoost:1.25}),_e=Object.freeze({upperParticles:2e5,groundParticles:2e5,groundStreaks:36e3,flowGain:1,groundGain:1,beamGain:1,ribbonGain:1,ribbonWidth:1,pointSize:1,tailLength:1.5,speed:1,groundSpeed:1,plumeSpeed:1,fieldSpeed:1,shimmerSpeed:1,bloomStrength:1,bloomRadius:.28,bloomThreshold:.4,exposure:1,waveStrength:1,eruptionStrength:.65,spiralStrength:.8,cameraPush:.012});this.defaultSettings=Object.freeze({...ge,..._e});let y=this.settings={...this.defaultSettings},b=this.ui=y;for(let e of Object.keys(y))Object.hasOwn(oe,e)&&(y[e]=oe[e]);let ve={upperParticles:[1e4,3e5,1e3],groundParticles:[1e4,3e5,1e3],groundStreaks:[1e3,1e5,1e3],flowGain:[0,3,.05],groundGain:[0,3,.05],beamGain:[0,3,.05],ribbonGain:[0,3,.05],ribbonWidth:[.3,2.5,.05],pointSize:[.4,2.5,.05],tailLength:[.2,3,.05],speed:[0,2,.01],groundSpeed:[0,3,.05],plumeSpeed:[0,3,.05],fieldSpeed:[0,3,.05],shimmerSpeed:[0,3,.05],bloomStrength:[0,1.8,.01],bloomRadius:[0,1,.01],bloomThreshold:[0,1,.01],exposure:[.3,2.5,.05],waveStrength:[0,3,.05],eruptionStrength:[0,1.5,.05],spiralStrength:[0,3,.05],cameraPush:[0,.08,.005],strength:[0,2,.05],colorReactivity:[0,2,.05],colorResponse:[4,30,1],saturationBoost:[0,3,.05]},ye=()=>{for(let[e,[n,r]]of Object.entries(ve)){let i=Number.isFinite(y[e])?y[e]:this.defaultSettings[e];y[e]=t.clamp(i,n,r)}for(let e of[`upperParticles`,`groundParticles`,`groundStreaks`])y[e]=Math.round(y[e]);typeof y.enabled!=`boolean`&&(y.enabled=ge.enabled)};ye();let x=e=>(this.resources.add(e),e),S=(e,t)=>x(new e(t)),C=this.renderer=new m({canvas:this.canvas,antialias:!1,alpha:!0,powerPreference:`high-performance`});C.setPixelRatio(Math.min(devicePixelRatio,1.5)),C.setSize(innerWidth,innerHeight),C.setClearColor(259),C.toneMapping=4,C.toneMappingExposure=b.exposure;let w=this.scene=new p,T=this.camera=new r(48,innerWidth/innerHeight,.1,100);T.position.set(0,6.9,18.5);let E=this.controls=new ue(T,C.domElement);E.target.set(0,4.6,0),E.enableDamping=!0,E.minDistance=7,E.maxDistance=40,E.maxPolarAngle=Math.PI*.49,E.enableRotate=!0,E.enablePan=!0,E.enableZoom=!0,E.screenSpacePanning=!0,E.mouseButtons={LEFT:ee.ROTATE,MIDDLE:ee.DOLLY,RIGHT:ee.PAN},E.update(),E.saveState();let D=this.composer=new ne(C);D.addPass(new te(w,T));let O=this.bloom=new le(new i(innerWidth,innerHeight),b.bloomStrength,b.bloomRadius,b.bloomThreshold);Object.assign(O.blendMaterial,{blending:5,blendEquation:100,blendSrc:201,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:200,blendDstAlpha:201,premultipliedAlpha:!0}),D.addPass(O),D.addPass(new re);let k=this.uniforms={uTime:{value:0},uGroundPhase:{value:0},uTravel:{value:0},uShimmer:{value:0},uPixel:{value:C.getPixelRatio()},uEnergy:{value:0},uHigh:{value:0},uBass:{value:0},uMid:{value:0},uSnare:{value:0},uHihat:{value:0},uCollapse:{value:0},uEruption:{value:0},uBurstAge:{value:99},uBurstStrength:{value:0},uWaves:{value:Array.from({length:6},()=>new i(99,0))},uGroundColor:{value:new _(12768492)},uGroundMidColor:{value:new _(10929632)},uGroundOuterColor:{value:new _(7834280)},uFlowColor:{value:new _(14147562)},uBeamColor:{value:new _(12508159)},uLayer:{value:1},uGroundGain:{value:1},uFlowGain:{value:1},uBeamGain:{value:1},uRibbonGain:{value:1},uRibbonWidth:{value:1},uPointSize:{value:1},uTailLength:{value:1}},be=1327;function A(){return be=Math.imul(be,1664525)+1013904223>>>0,be/4294967296}function j(e){let t=x(new u);return t.setAttribute(`position`,new g(new Float32Array(e*3),3)),t}let M=3e5,N=j(M),xe=new Float32Array(M*4);for(let e=0;e<M;e++){let t=.5+Math.floor(A()*55)*.106+(A()-.5)*.15;xe.set([t,A()*Math.PI*2,A(),A()],e*4)}N.setAttribute(`aData`,new g(xe,4));let Se=S(h,{uniforms:{...k,uLayer:{value:0}},transparent:!0,depthWrite:!1,...v(),vertexShader:`
uniform float uTime;
uniform float uGroundPhase;uniform float uTravel;uniform float uShimmer;
uniform float uPointSize;uniform float uTailLength;
uniform float uEnergy;uniform float uHigh;
uniform float uBass;uniform float uMid;uniform float uSnare;uniform float uHihat;
uniform float uCollapse;uniform float uEruption;uniform float uBurstAge;uniform float uBurstStrength;
attribute vec4 aData;
varying float vAlpha;
varying float vTint;
varying float vTail;
const float TAU=6.28318530718;
uniform vec2 uWaves[6];
float square(float x){return x*x;}
float spiralAt(float u){
 float front=uBurstAge*0.62;
 float attack=smoothstep(0.0,0.12,uBurstAge);
 return exp(-square((u-front)/0.10))*attack*exp(-uBurstAge*1.2)*uBurstStrength;
}
// Stagger each family so the eruption reads as climbing strands, not a flat ring.
vec3 burstLayers(float u,float family){
 float seed=fract(sin(floor(family*31.0)*17.13+4.7)*43758.5453);
 float age=uBurstAge-seed*0.20;
 float attack=smoothstep(0.0,0.10,age);
 float gate=attack*exp(-max(age,0.0)*1.0)*uBurstStrength;
 float root=exp(-square(u/0.17))*exp(-max(age,0.0)*7.0);
 float front=age*(0.53+seed*0.15);
 float crest=exp(-square((u-front)/0.055));
 float wake=exp(-square((u-front+0.13)/0.14))*0.34;
 float sparks=pow(0.5+0.5*sin(u*105.0+seed*37.0-age*8.0),18.0)
   *exp(-square((u-front+0.20)/0.20))*smoothstep(0.30,0.85,seed);
 return vec3(root,crest+wake,sparks)*gate;
}
float waveAt(float distanceAlong){
 float wave=0.0;
 for(int i=0;i<6;i++){
  float age=uWaves[i].x;
  float front=age*0.62;
  float envelope=exp(-age*1.1)*uWaves[i].y;
  wave+=exp(-square((distanceAlong-front)/0.065))*envelope;
 }
 return min(wave,1.8);
}
// Smooth curl of a trigonometric vector potential: continuous local eddies.
vec3 curlField(vec3 p,float t){
 return vec3(-0.8*cos(p.z*0.8-t*0.3),-0.75*cos(p.x*0.75+t*0.2),-0.7*cos(p.y*0.7+t));
}
// Material coordinates move upward through a shared field, so neighboring
// filaments roll together rather than shaking with unrelated particle phases.
vec3 plumeFlow(vec3 p,float u,float group){
 float envelope=sin(u*3.14159);
 vec3 q=vec3(p.x*0.52,p.y*0.62-uTravel*0.72,p.z*0.52);
 vec3 large=curlField(q,uTime*0.22);
 vec3 small=curlField(q*1.9+large*0.42,uTime*0.31);
 float roll=0.48+uMid*0.32;
 vec3 flow=large*roll+small*(0.10+uHigh*0.10);
 // Local wave packets travel up the plume; they never scale its radius.
 float packet=waveAt(u);
 float turn=u*7.0-uTravel*0.72+group*0.8;
 flow.xz+=vec2(cos(turn),sin(turn))*packet*0.20;
 flow.y=flow.y*0.24+packet*0.16;
 return flow*envelope;
}
vec3 floorFlow(float radius,float angle){
 float r=radius+0.17*sin(angle*3.0-radius*1.7-uTime*0.6)
              +0.06*sin(angle*7.0+radius*2.0-uTime*0.9);
 float y=0.035+0.035*sin(angle*2.0-radius*2.1-uTime*0.5);
 float wave=waveAt(radius/7.0);
 r*=1.0+0.045*uBass;
 y+=wave*0.13;
 r*=1.0-uCollapse*0.035*exp(-radius*0.22);
 float impact=spiralAt(radius/7.0);
 y+=impact*0.055;
 return vec3(cos(angle)*r,y,sin(angle)*r);
}
vec3 strand(float u,float phase,float family,float t){
 // A handful of irregular ribbon families, each carrying hundreds of fine filaments.
 float group=floor(family*7.0);
 float local=fract(family*7.0);
 float h=u*10.0;
 float a=group*2.39996+phase*0.065;
 float twist=u*(3.6+sin(group*3.0)*1.7)-t*0.12;
 float waist=exp(-square((u-0.23)/0.15));
 float r=0.35+3.8*pow(u,0.64)+sin(u*6.0+group)*0.55;
 r*=1.0-waist*0.37;
 r+=(local-0.5)*(0.18+u*0.55);
 vec3 p=vec3(cos(a+twist)*r,h,sin(a+twist)*r);
 // Wide sweeping arcs alternate with upright branching plumes.
 if(mod(group,3.0)<0.5){
   float arc=u*3.14159;
   float sweep=sin(arc)*4.8;
   p.x=cos(a)*sweep+sin(arc*2.0+a)*1.2;
   p.z=sin(a)*sweep+cos(arc*2.0+a)*0.6;
   p.y=0.10+pow(u,1.5)*8.0+sin(arc)*0.8;
 }
 float bend=sin(u*3.14159);
 p.x+=sin(h*0.85+group+t*0.18)*bend*0.65;
 p.z+=cos(h*1.1+group+t*0.15)*bend*0.45;
 p+=plumeFlow(p,u,group);
 // Gather the lower sweep toward the axis, blending back to the upper plume.
 float lowerGather=smoothstep(0.15,0.9,p.y)*(1.0-smoothstep(3.0,6.5,p.y));
 p.xz*=1.0-0.20*lowerGather;
 // Keep the silhouette: a soft gathering at the root and a localized travelling accent.
 float core=exp(-u*4.0);
 float blast=spiralAt(u);
 p.xz*=1.0-uCollapse*0.075*core;
 float filamentAccent=0.5+0.5*sin(group*2.39996-u*TAU);
 p.xz*=1.0+blast*0.045*filamentAccent;
 p.y+=blast*0.07*bend;
 return p;
}

uniform float uPixel;
varying float vGroundCoord;
void main(){
 float r=aData.x;float a=aData.y+uGroundPhase*(0.32+1.15/(r+0.5));
 vec3 p=floorFlow(r,a);
 vec4 mv=modelViewMatrix*vec4(p,1.0);
 gl_Position=projectionMatrix*mv;
 gl_PointSize=clamp((0.55+pow(aData.z,5.0)*1.2)*uPixel*uPointSize*12.0/-mv.z,0.6,2.5);
 float current=0.5+0.5*sin(r*7.6+a*1.7+sin(a*3.0+r)*0.9);
 vAlpha=(0.022+pow(aData.w,6.0)*0.52)*(0.30+0.70*current*current)
       *(1.0-smoothstep(4.2,7.0,r))*(1.0+uEnergy*0.40);
 vAlpha*=1.0-smoothstep(13.0,23.0,-mv.z)*0.50;
 vAlpha*=1.0+waveAt(r/7.0)*2.3;vTint=aData.z;
 vGroundCoord=clamp(r/7.0+(aData.z-0.5)*0.035,0.0,1.0);
 // The root lights first; the outer disk remains dark enough to frame it.
 vAlpha*=1.0+uEruption*exp(-square((r-1.05)/0.8))*0.75;
}`,fragmentShader:`
uniform vec3 uGroundColor;uniform vec3 uFlowColor;uniform vec3 uBeamColor;
uniform vec3 uGroundMidColor;uniform vec3 uGroundOuterColor;
uniform float uLayer;uniform float uEnergy;
uniform float uGroundGain;uniform float uFlowGain;uniform float uBeamGain;uniform float uRibbonGain;
// A small bright core rides inside a darker colored body.
vec3 layerColor(float tint){
 // PerceptualColor.js supplies shared, gamut-mapped linear colors for every layer.
 vec3 base=mix(uGroundColor,uFlowColor,uLayer);
 return base*(0.42+pow(tint,2.5)*0.92)*mix(uGroundGain,uFlowGain,uLayer);
}
vec3 groundLayerColor(float tint,float radius){
 vec3 inner=mix(uGroundColor,uGroundMidColor,smoothstep(0.08,0.48,radius));
 vec3 base=mix(inner,uGroundOuterColor,smoothstep(0.40,0.95,radius));
 return base*(0.42+pow(tint,2.5)*0.78)*uGroundGain;
}

varying float vAlpha;varying float vTint;varying float vGroundCoord;
void main(){float d=length(gl_PointCoord-0.5);float a=1.0-smoothstep(0.10,0.5,d);gl_FragColor=vec4(groundLayerColor(vTint,vGroundCoord),a*vAlpha);}`});w.add(new c(N,Se));let P=3e5,F=j(P*2),Ce=new Float32Array(P*8),we=new Float32Array(P*2);for(let e=0;e<P;e++){let t=Math.floor(A()*430),n=t*2.399963,r=t%31/31,i=A(),a=A();for(let t=0;t<2;t++)Ce.set([i,n,r,a],e*8+t*4),we[e*2+t]=t}F.setAttribute(`aData`,new g(Ce,4)),F.setAttribute(`aEnd`,new g(we,1)),F.setDrawRange(0,b.upperParticles*2);let Te=S(h,{uniforms:k,transparent:!0,depthWrite:!1,...v(),vertexShader:`
uniform float uTime;
uniform float uGroundPhase;uniform float uTravel;uniform float uShimmer;
uniform float uPointSize;uniform float uTailLength;
uniform float uEnergy;uniform float uHigh;
uniform float uBass;uniform float uMid;uniform float uSnare;uniform float uHihat;
uniform float uCollapse;uniform float uEruption;uniform float uBurstAge;uniform float uBurstStrength;
attribute vec4 aData;
varying float vAlpha;
varying float vTint;
varying float vTail;
const float TAU=6.28318530718;
uniform vec2 uWaves[6];
float square(float x){return x*x;}
float spiralAt(float u){
 float front=uBurstAge*0.62;
 float attack=smoothstep(0.0,0.12,uBurstAge);
 return exp(-square((u-front)/0.10))*attack*exp(-uBurstAge*1.2)*uBurstStrength;
}
// Stagger each family so the eruption reads as climbing strands, not a flat ring.
vec3 burstLayers(float u,float family){
 float seed=fract(sin(floor(family*31.0)*17.13+4.7)*43758.5453);
 float age=uBurstAge-seed*0.20;
 float attack=smoothstep(0.0,0.10,age);
 float gate=attack*exp(-max(age,0.0)*1.0)*uBurstStrength;
 float root=exp(-square(u/0.17))*exp(-max(age,0.0)*7.0);
 float front=age*(0.53+seed*0.15);
 float crest=exp(-square((u-front)/0.055));
 float wake=exp(-square((u-front+0.13)/0.14))*0.34;
 float sparks=pow(0.5+0.5*sin(u*105.0+seed*37.0-age*8.0),18.0)
   *exp(-square((u-front+0.20)/0.20))*smoothstep(0.30,0.85,seed);
 return vec3(root,crest+wake,sparks)*gate;
}
float waveAt(float distanceAlong){
 float wave=0.0;
 for(int i=0;i<6;i++){
  float age=uWaves[i].x;
  float front=age*0.62;
  float envelope=exp(-age*1.1)*uWaves[i].y;
  wave+=exp(-square((distanceAlong-front)/0.065))*envelope;
 }
 return min(wave,1.8);
}
// Smooth curl of a trigonometric vector potential: continuous local eddies.
vec3 curlField(vec3 p,float t){
 return vec3(-0.8*cos(p.z*0.8-t*0.3),-0.75*cos(p.x*0.75+t*0.2),-0.7*cos(p.y*0.7+t));
}
// Material coordinates move upward through a shared field, so neighboring
// filaments roll together rather than shaking with unrelated particle phases.
vec3 plumeFlow(vec3 p,float u,float group){
 float envelope=sin(u*3.14159);
 vec3 q=vec3(p.x*0.52,p.y*0.62-uTravel*0.72,p.z*0.52);
 vec3 large=curlField(q,uTime*0.22);
 vec3 small=curlField(q*1.9+large*0.42,uTime*0.31);
 float roll=0.48+uMid*0.32;
 vec3 flow=large*roll+small*(0.10+uHigh*0.10);
 // Local wave packets travel up the plume; they never scale its radius.
 float packet=waveAt(u);
 float turn=u*7.0-uTravel*0.72+group*0.8;
 flow.xz+=vec2(cos(turn),sin(turn))*packet*0.20;
 flow.y=flow.y*0.24+packet*0.16;
 return flow*envelope;
}
vec3 floorFlow(float radius,float angle){
 float r=radius+0.17*sin(angle*3.0-radius*1.7-uTime*0.6)
              +0.06*sin(angle*7.0+radius*2.0-uTime*0.9);
 float y=0.035+0.035*sin(angle*2.0-radius*2.1-uTime*0.5);
 float wave=waveAt(radius/7.0);
 r*=1.0+0.045*uBass;
 y+=wave*0.13;
 r*=1.0-uCollapse*0.035*exp(-radius*0.22);
 float impact=spiralAt(radius/7.0);
 y+=impact*0.055;
 return vec3(cos(angle)*r,y,sin(angle)*r);
}
vec3 strand(float u,float phase,float family,float t){
 // A handful of irregular ribbon families, each carrying hundreds of fine filaments.
 float group=floor(family*7.0);
 float local=fract(family*7.0);
 float h=u*10.0;
 float a=group*2.39996+phase*0.065;
 float twist=u*(3.6+sin(group*3.0)*1.7)-t*0.12;
 float waist=exp(-square((u-0.23)/0.15));
 float r=0.35+3.8*pow(u,0.64)+sin(u*6.0+group)*0.55;
 r*=1.0-waist*0.37;
 r+=(local-0.5)*(0.18+u*0.55);
 vec3 p=vec3(cos(a+twist)*r,h,sin(a+twist)*r);
 // Wide sweeping arcs alternate with upright branching plumes.
 if(mod(group,3.0)<0.5){
   float arc=u*3.14159;
   float sweep=sin(arc)*4.8;
   p.x=cos(a)*sweep+sin(arc*2.0+a)*1.2;
   p.z=sin(a)*sweep+cos(arc*2.0+a)*0.6;
   p.y=0.10+pow(u,1.5)*8.0+sin(arc)*0.8;
 }
 float bend=sin(u*3.14159);
 p.x+=sin(h*0.85+group+t*0.18)*bend*0.65;
 p.z+=cos(h*1.1+group+t*0.15)*bend*0.45;
 p+=plumeFlow(p,u,group);
 // Gather the lower sweep toward the axis, blending back to the upper plume.
 float lowerGather=smoothstep(0.15,0.9,p.y)*(1.0-smoothstep(3.0,6.5,p.y));
 p.xz*=1.0-0.20*lowerGather;
 // Keep the silhouette: a soft gathering at the root and a localized travelling accent.
 float core=exp(-u*4.0);
 float blast=spiralAt(u);
 p.xz*=1.0-uCollapse*0.075*core;
 float filamentAccent=0.5+0.5*sin(group*2.39996-u*TAU);
 p.xz*=1.0+blast*0.045*filamentAccent;
 p.y+=blast*0.07*bend;
 return p;
}

attribute float aEnd;
void main(){
 // Different flow families shear past each other; tail endpoints stay on the same path.
 float u=fract(aData.x+uTravel*(0.065+(1.0-aData.z)*0.045));
 u+=sin(u*TAU)*0.025;
 u=min(u+aEnd*(0.0008+pow(aData.w,5.0)*0.009)*uTailLength*(1.0+uBass*.25),0.9999);
 vec3 p=strand(u,aData.y,aData.z,uTime);
 vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;
 // Broad irregular light packets avoid repeating horizontal brightness bands.
 float phase=u*10.0+aData.y*0.13-uShimmer*1.1;
 float packet=0.5+0.5*sin(phase+0.65*sin(phase*0.57+aData.z*5.0));
 float rhythm=0.24+0.76*pow(packet,3.0);
 float identity=fract(sin(aData.y*12.9898)*43758.5453);
 float hierarchy=mix(0.25,1.0,smoothstep(0.55,0.98,identity));
 vAlpha=(0.015+pow(aData.w,6.0)*0.64)*rhythm*hierarchy
       *smoothstep(0.0,0.045,u)*(1.0-smoothstep(0.88,1.0,u));
 vAlpha*=1.0-smoothstep(12.0,23.0,-mv.z)*0.65;
 vAlpha*=1.0+uEnergy*0.45+uHigh*pow(aData.w,12.0)*0.75+waveAt(u)*2.5;
 // Snare lights short packets; hats pick out a sparse, stable subset of filaments.
 vAlpha*=1.0+uSnare*pow(packet,6.0)*0.85
             +uHihat*step(0.96,identity)*1.6;
 // Accentuate selected filaments instead of flashing the entire plume in a band.
 float burstSelect=smoothstep(0.65,0.98,identity);
 vec3 burst=burstLayers(u,aData.z);
 vAlpha*=1.0+burst.x*0.30+burst.y*(0.18+burstSelect*1.0)+burst.z*1.4;
 vTail=1.0-aEnd*0.86;vTint=aData.w;
}`,fragmentShader:`
uniform vec3 uGroundColor;uniform vec3 uFlowColor;uniform vec3 uBeamColor;
uniform vec3 uGroundMidColor;uniform vec3 uGroundOuterColor;
uniform float uLayer;uniform float uEnergy;
uniform float uGroundGain;uniform float uFlowGain;uniform float uBeamGain;uniform float uRibbonGain;
// A small bright core rides inside a darker colored body.
vec3 layerColor(float tint){
 // PerceptualColor.js supplies shared, gamut-mapped linear colors for every layer.
 vec3 base=mix(uGroundColor,uFlowColor,uLayer);
 return base*(0.42+pow(tint,2.5)*0.92)*mix(uGroundGain,uFlowGain,uLayer);
}
vec3 groundLayerColor(float tint,float radius){
 vec3 inner=mix(uGroundColor,uGroundMidColor,smoothstep(0.08,0.48,radius));
 vec3 base=mix(inner,uGroundOuterColor,smoothstep(0.40,0.95,radius));
 return base*(0.42+pow(tint,2.5)*0.78)*uGroundGain;
}
varying float vAlpha;varying float vTint;varying float vTail;void main(){gl_FragColor=vec4(layerColor(vTint),vAlpha*vTail);}`});w.add(new l(F,Te));let I=1e5,L=j(I*2),Ee=new Float32Array(I*8),De=new Float32Array(I*2);for(let e=0;e<I;e++){let t=.5+A()**.7*8,n=A()*Math.PI*2,r=A();for(let i=0;i<2;i++)Ee.set([t,n,r,0],e*8+i*4),De[e*2+i]=i}L.setAttribute(`aData`,new g(Ee,4)),L.setAttribute(`aEnd`,new g(De,1)),w.add(new l(L,S(h,{uniforms:{...k,uLayer:{value:0}},transparent:!0,depthWrite:!1,...v(),vertexShader:`
uniform float uTime;
uniform float uGroundPhase;uniform float uTravel;uniform float uShimmer;
uniform float uPointSize;uniform float uTailLength;
uniform float uEnergy;uniform float uHigh;
uniform float uBass;uniform float uMid;uniform float uSnare;uniform float uHihat;
uniform float uCollapse;uniform float uEruption;uniform float uBurstAge;uniform float uBurstStrength;
attribute vec4 aData;
varying float vAlpha;
varying float vTint;
varying float vTail;
const float TAU=6.28318530718;
uniform vec2 uWaves[6];
float square(float x){return x*x;}
float spiralAt(float u){
 float front=uBurstAge*0.62;
 float attack=smoothstep(0.0,0.12,uBurstAge);
 return exp(-square((u-front)/0.10))*attack*exp(-uBurstAge*1.2)*uBurstStrength;
}
// Stagger each family so the eruption reads as climbing strands, not a flat ring.
vec3 burstLayers(float u,float family){
 float seed=fract(sin(floor(family*31.0)*17.13+4.7)*43758.5453);
 float age=uBurstAge-seed*0.20;
 float attack=smoothstep(0.0,0.10,age);
 float gate=attack*exp(-max(age,0.0)*1.0)*uBurstStrength;
 float root=exp(-square(u/0.17))*exp(-max(age,0.0)*7.0);
 float front=age*(0.53+seed*0.15);
 float crest=exp(-square((u-front)/0.055));
 float wake=exp(-square((u-front+0.13)/0.14))*0.34;
 float sparks=pow(0.5+0.5*sin(u*105.0+seed*37.0-age*8.0),18.0)
   *exp(-square((u-front+0.20)/0.20))*smoothstep(0.30,0.85,seed);
 return vec3(root,crest+wake,sparks)*gate;
}
float waveAt(float distanceAlong){
 float wave=0.0;
 for(int i=0;i<6;i++){
  float age=uWaves[i].x;
  float front=age*0.62;
  float envelope=exp(-age*1.1)*uWaves[i].y;
  wave+=exp(-square((distanceAlong-front)/0.065))*envelope;
 }
 return min(wave,1.8);
}
// Smooth curl of a trigonometric vector potential: continuous local eddies.
vec3 curlField(vec3 p,float t){
 return vec3(-0.8*cos(p.z*0.8-t*0.3),-0.75*cos(p.x*0.75+t*0.2),-0.7*cos(p.y*0.7+t));
}
// Material coordinates move upward through a shared field, so neighboring
// filaments roll together rather than shaking with unrelated particle phases.
vec3 plumeFlow(vec3 p,float u,float group){
 float envelope=sin(u*3.14159);
 vec3 q=vec3(p.x*0.52,p.y*0.62-uTravel*0.72,p.z*0.52);
 vec3 large=curlField(q,uTime*0.22);
 vec3 small=curlField(q*1.9+large*0.42,uTime*0.31);
 float roll=0.48+uMid*0.32;
 vec3 flow=large*roll+small*(0.10+uHigh*0.10);
 // Local wave packets travel up the plume; they never scale its radius.
 float packet=waveAt(u);
 float turn=u*7.0-uTravel*0.72+group*0.8;
 flow.xz+=vec2(cos(turn),sin(turn))*packet*0.20;
 flow.y=flow.y*0.24+packet*0.16;
 return flow*envelope;
}
vec3 floorFlow(float radius,float angle){
 float r=radius+0.17*sin(angle*3.0-radius*1.7-uTime*0.6)
              +0.06*sin(angle*7.0+radius*2.0-uTime*0.9);
 float y=0.035+0.035*sin(angle*2.0-radius*2.1-uTime*0.5);
 float wave=waveAt(radius/7.0);
 r*=1.0+0.045*uBass;
 y+=wave*0.13;
 r*=1.0-uCollapse*0.035*exp(-radius*0.22);
 float impact=spiralAt(radius/7.0);
 y+=impact*0.055;
 return vec3(cos(angle)*r,y,sin(angle)*r);
}
vec3 strand(float u,float phase,float family,float t){
 // A handful of irregular ribbon families, each carrying hundreds of fine filaments.
 float group=floor(family*7.0);
 float local=fract(family*7.0);
 float h=u*10.0;
 float a=group*2.39996+phase*0.065;
 float twist=u*(3.6+sin(group*3.0)*1.7)-t*0.12;
 float waist=exp(-square((u-0.23)/0.15));
 float r=0.35+3.8*pow(u,0.64)+sin(u*6.0+group)*0.55;
 r*=1.0-waist*0.37;
 r+=(local-0.5)*(0.18+u*0.55);
 vec3 p=vec3(cos(a+twist)*r,h,sin(a+twist)*r);
 // Wide sweeping arcs alternate with upright branching plumes.
 if(mod(group,3.0)<0.5){
   float arc=u*3.14159;
   float sweep=sin(arc)*4.8;
   p.x=cos(a)*sweep+sin(arc*2.0+a)*1.2;
   p.z=sin(a)*sweep+cos(arc*2.0+a)*0.6;
   p.y=0.10+pow(u,1.5)*8.0+sin(arc)*0.8;
 }
 float bend=sin(u*3.14159);
 p.x+=sin(h*0.85+group+t*0.18)*bend*0.65;
 p.z+=cos(h*1.1+group+t*0.15)*bend*0.45;
 p+=plumeFlow(p,u,group);
 // Gather the lower sweep toward the axis, blending back to the upper plume.
 float lowerGather=smoothstep(0.15,0.9,p.y)*(1.0-smoothstep(3.0,6.5,p.y));
 p.xz*=1.0-0.20*lowerGather;
 // Keep the silhouette: a soft gathering at the root and a localized travelling accent.
 float core=exp(-u*4.0);
 float blast=spiralAt(u);
 p.xz*=1.0-uCollapse*0.075*core;
 float filamentAccent=0.5+0.5*sin(group*2.39996-u*TAU);
 p.xz*=1.0+blast*0.045*filamentAccent;
 p.y+=blast*0.07*bend;
 return p;
}

attribute float aEnd;
varying float vGroundCoord;
void main(){float r=aData.x;float a=aData.y+uGroundPhase*(0.32+1.15/(r+0.5))+aEnd*(0.008+pow(aData.z,3.0)*0.045)*uTailLength;
 vec3 p=floorFlow(r,a);
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
 float vein=0.5+0.5*sin(r*5.2+a*2.0+sin(a*3.0)*0.6);
 vAlpha=(0.025+pow(aData.z,5.0)*0.48)*(0.35+0.65*vein*vein)*(1.0-smoothstep(4.0,8.5,r));
 vAlpha*=1.0+waveAt(r/7.0)*1.8;vTail=1.0-aEnd*0.78;vTint=aData.z;
 vGroundCoord=clamp(r/7.0+(aData.z-0.5)*0.035,0.0,1.0);
}`,fragmentShader:`
uniform vec3 uGroundColor;uniform vec3 uFlowColor;uniform vec3 uBeamColor;
uniform vec3 uGroundMidColor;uniform vec3 uGroundOuterColor;
uniform float uLayer;uniform float uEnergy;
uniform float uGroundGain;uniform float uFlowGain;uniform float uBeamGain;uniform float uRibbonGain;
// A small bright core rides inside a darker colored body.
vec3 layerColor(float tint){
 // PerceptualColor.js supplies shared, gamut-mapped linear colors for every layer.
 vec3 base=mix(uGroundColor,uFlowColor,uLayer);
 return base*(0.42+pow(tint,2.5)*0.92)*mix(uGroundGain,uFlowGain,uLayer);
}
vec3 groundLayerColor(float tint,float radius){
 vec3 inner=mix(uGroundColor,uGroundMidColor,smoothstep(0.08,0.48,radius));
 vec3 base=mix(inner,uGroundOuterColor,smoothstep(0.40,0.95,radius));
 return base*(0.42+pow(tint,2.5)*0.78)*uGroundGain;
}

varying float vAlpha;varying float vTint;varying float vTail;varying float vGroundCoord;
void main(){gl_FragColor=vec4(groundLayerColor(vTint,vGroundCoord),vAlpha*vTail);}`})));for(let e=0;e<14;e++){let t=[],n=.49+e*.105;for(let r=0;r<=600;r++){let i=r/600*Math.PI*2,o=n+Math.sin(i*5+e)*.009;t.push(new a(Math.cos(i)*o,.035,Math.sin(i)*o))}w.add(new d(x(new u).setFromPoints(t),S(f,{color:12048367,transparent:!0,opacity:e<5?.23:.065,...v(),depthWrite:!1})))}let Oe=S(h,{uniforms:k,transparent:!0,depthWrite:!1,...v(),side:2,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`
uniform vec3 uGroundColor;uniform vec3 uFlowColor;uniform vec3 uBeamColor;
uniform vec3 uGroundMidColor;uniform vec3 uGroundOuterColor;
uniform float uLayer;uniform float uEnergy;
uniform float uGroundGain;uniform float uFlowGain;uniform float uBeamGain;uniform float uRibbonGain;
// A small bright core rides inside a darker colored body.
vec3 layerColor(float tint){
 // PerceptualColor.js supplies shared, gamut-mapped linear colors for every layer.
 vec3 base=mix(uGroundColor,uFlowColor,uLayer);
 return base*(0.42+pow(tint,2.5)*0.92)*mix(uGroundGain,uFlowGain,uLayer);
}
vec3 groundLayerColor(float tint,float radius){
 vec3 inner=mix(uGroundColor,uGroundMidColor,smoothstep(0.08,0.48,radius));
 vec3 base=mix(inner,uGroundOuterColor,smoothstep(0.40,0.95,radius));
 return base*(0.42+pow(tint,2.5)*0.78)*uGroundGain;
}
varying vec2 vUv;void main(){float x=abs(vUv.x-0.5)*2.0;float core=exp(-x*x*350.0);float halo=exp(-x*x*18.0)*0.09;float fade=smoothstep(0.0,0.08,vUv.y)*(1.0-smoothstep(0.68,1.0,vUv.y));float coverage=core+halo;
        // The halo plane must not carry opaque coverage outside its light profile.
        // Divide RGB by coverage so additive radiance stays identical.
        gl_FragColor=vec4(uBeamColor*((core*2.4+halo)/max(coverage,0.00001))*(1.0+uEnergy*0.30)*uBeamGain,fade*coverage);}`}),ke=[];for(let[t,r,i,a]of[[0,-.35,12,.2],[-2.65,.1,7.4,.15],[2.7,0,8,.17],[-1.8,.7,5.2,.1],[1.9,.6,5.8,.1]]){let o=new e(x(new n(a,i)),Oe);o.position.set(t,i/2,r),w.add(o),ke.push(o)}let R=new s;w.add(R);for(let e=0;e<220;e++){let e=[],t=.55+A()*5.5,n=A()*Math.PI*2,r=1.5+A()*6.5;for(let i=0;i<=130;i++){let o=i/130,s=n+o*r,c=t+o*.24+Math.sin(s*3+t)*.12;e.push(new a(Math.cos(s)*c,.04+Math.sin(s*2+c)*.02,Math.sin(s)*c))}let i=S(f,{color:14081256,transparent:!0,opacity:.025+A()**7*.3,...v(),depthWrite:!1});R.add(new d(x(new u).setFromPoints(e),i))}let Ae=j(19800*2),je=new Float32Array(19800*8),Me=new Float32Array(19800*2);for(let e=0;e<180;e++){let t=e*2.399963,n=e%31/31;for(let r=0;r<110;r++){let i=e*110+r;for(let e=0;e<2;e++)je.set([.015+r/110*.97,t,n,0],i*8+e*4),Me[i*2+e]=e}}Ae.setAttribute(`aData`,new g(je,4)),Ae.setAttribute(`aEnd`,new g(Me,1));let Ne=x(Te.clone());Ne.uniforms=k,Ne.vertexShader=`
uniform float uTime;
uniform float uGroundPhase;uniform float uTravel;uniform float uShimmer;
uniform float uPointSize;uniform float uTailLength;
uniform float uEnergy;uniform float uHigh;
uniform float uBass;uniform float uMid;uniform float uSnare;uniform float uHihat;
uniform float uCollapse;uniform float uEruption;uniform float uBurstAge;uniform float uBurstStrength;
attribute vec4 aData;
varying float vAlpha;
varying float vTint;
varying float vTail;
const float TAU=6.28318530718;
uniform vec2 uWaves[6];
float square(float x){return x*x;}
float spiralAt(float u){
 float front=uBurstAge*0.62;
 float attack=smoothstep(0.0,0.12,uBurstAge);
 return exp(-square((u-front)/0.10))*attack*exp(-uBurstAge*1.2)*uBurstStrength;
}
// Stagger each family so the eruption reads as climbing strands, not a flat ring.
vec3 burstLayers(float u,float family){
 float seed=fract(sin(floor(family*31.0)*17.13+4.7)*43758.5453);
 float age=uBurstAge-seed*0.20;
 float attack=smoothstep(0.0,0.10,age);
 float gate=attack*exp(-max(age,0.0)*1.0)*uBurstStrength;
 float root=exp(-square(u/0.17))*exp(-max(age,0.0)*7.0);
 float front=age*(0.53+seed*0.15);
 float crest=exp(-square((u-front)/0.055));
 float wake=exp(-square((u-front+0.13)/0.14))*0.34;
 float sparks=pow(0.5+0.5*sin(u*105.0+seed*37.0-age*8.0),18.0)
   *exp(-square((u-front+0.20)/0.20))*smoothstep(0.30,0.85,seed);
 return vec3(root,crest+wake,sparks)*gate;
}
float waveAt(float distanceAlong){
 float wave=0.0;
 for(int i=0;i<6;i++){
  float age=uWaves[i].x;
  float front=age*0.62;
  float envelope=exp(-age*1.1)*uWaves[i].y;
  wave+=exp(-square((distanceAlong-front)/0.065))*envelope;
 }
 return min(wave,1.8);
}
// Smooth curl of a trigonometric vector potential: continuous local eddies.
vec3 curlField(vec3 p,float t){
 return vec3(-0.8*cos(p.z*0.8-t*0.3),-0.75*cos(p.x*0.75+t*0.2),-0.7*cos(p.y*0.7+t));
}
// Material coordinates move upward through a shared field, so neighboring
// filaments roll together rather than shaking with unrelated particle phases.
vec3 plumeFlow(vec3 p,float u,float group){
 float envelope=sin(u*3.14159);
 vec3 q=vec3(p.x*0.52,p.y*0.62-uTravel*0.72,p.z*0.52);
 vec3 large=curlField(q,uTime*0.22);
 vec3 small=curlField(q*1.9+large*0.42,uTime*0.31);
 float roll=0.48+uMid*0.32;
 vec3 flow=large*roll+small*(0.10+uHigh*0.10);
 // Local wave packets travel up the plume; they never scale its radius.
 float packet=waveAt(u);
 float turn=u*7.0-uTravel*0.72+group*0.8;
 flow.xz+=vec2(cos(turn),sin(turn))*packet*0.20;
 flow.y=flow.y*0.24+packet*0.16;
 return flow*envelope;
}
vec3 floorFlow(float radius,float angle){
 float r=radius+0.17*sin(angle*3.0-radius*1.7-uTime*0.6)
              +0.06*sin(angle*7.0+radius*2.0-uTime*0.9);
 float y=0.035+0.035*sin(angle*2.0-radius*2.1-uTime*0.5);
 float wave=waveAt(radius/7.0);
 r*=1.0+0.045*uBass;
 y+=wave*0.13;
 r*=1.0-uCollapse*0.035*exp(-radius*0.22);
 float impact=spiralAt(radius/7.0);
 y+=impact*0.055;
 return vec3(cos(angle)*r,y,sin(angle)*r);
}
vec3 strand(float u,float phase,float family,float t){
 // A handful of irregular ribbon families, each carrying hundreds of fine filaments.
 float group=floor(family*7.0);
 float local=fract(family*7.0);
 float h=u*10.0;
 float a=group*2.39996+phase*0.065;
 float twist=u*(3.6+sin(group*3.0)*1.7)-t*0.12;
 float waist=exp(-square((u-0.23)/0.15));
 float r=0.35+3.8*pow(u,0.64)+sin(u*6.0+group)*0.55;
 r*=1.0-waist*0.37;
 r+=(local-0.5)*(0.18+u*0.55);
 vec3 p=vec3(cos(a+twist)*r,h,sin(a+twist)*r);
 // Wide sweeping arcs alternate with upright branching plumes.
 if(mod(group,3.0)<0.5){
   float arc=u*3.14159;
   float sweep=sin(arc)*4.8;
   p.x=cos(a)*sweep+sin(arc*2.0+a)*1.2;
   p.z=sin(a)*sweep+cos(arc*2.0+a)*0.6;
   p.y=0.10+pow(u,1.5)*8.0+sin(arc)*0.8;
 }
 float bend=sin(u*3.14159);
 p.x+=sin(h*0.85+group+t*0.18)*bend*0.65;
 p.z+=cos(h*1.1+group+t*0.15)*bend*0.45;
 p+=plumeFlow(p,u,group);
 // Gather the lower sweep toward the axis, blending back to the upper plume.
 float lowerGather=smoothstep(0.15,0.9,p.y)*(1.0-smoothstep(3.0,6.5,p.y));
 p.xz*=1.0-0.20*lowerGather;
 // Keep the silhouette: a soft gathering at the root and a localized travelling accent.
 float core=exp(-u*4.0);
 float blast=spiralAt(u);
 p.xz*=1.0-uCollapse*0.075*core;
 float filamentAccent=0.5+0.5*sin(group*2.39996-u*TAU);
 p.xz*=1.0+blast*0.045*filamentAccent;
 p.y+=blast*0.07*bend;
 return p;
}

attribute float aEnd;
void main(){
 float u=min(aData.x+aEnd*(0.97/110.0),0.9999);
 vec3 p=strand(u,aData.y,aData.z,uTime);
 vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;
 float identity=fract(sin(aData.y*12.9898)*43758.5453);
 float hero=smoothstep(0.89,0.995,identity);
 float phase=u*8.0+aData.y*0.13-uShimmer*0.8;
 float light=0.5+0.5*sin(phase+0.7*sin(phase*0.61));
 vAlpha=(0.016+hero*0.25)*(0.32+0.68*light*light)
       *smoothstep(0.0,0.06,u)*(1.0-smoothstep(0.75,1.0,u));
 vAlpha*=1.0-smoothstep(12.0,23.0,-mv.z)*0.65;
 vec3 burst=burstLayers(u,aData.z);
 vAlpha*=1.0+uEnergy*0.28+burst.y*hero*0.75+burst.z*hero;
 vTail=1.0;vTint=0.5+hero*0.5;
}
`,w.add(new l(Ae,Ne));let Pe=j(1980*6),Fe=new Float32Array(1980*6*4),Ie=new Float32Array(1980*6),Le=[[0,-1],[0,1],[1,-1],[1,-1],[0,1],[1,1]],Re=0;for(let e=0;e<9;e++){let t=9+e*31,n=(e*7+3)%31/31;for(let r=0;r<220;r++)for(let[i,a]of Le)Fe.set([.015+(r+i)/220*.96,t*2.399963,n,e/9],Re*4),Ie[Re++]=a}Pe.setAttribute(`aData`,new g(Fe,4)),Pe.setAttribute(`aSide`,new g(Ie,1));let ze=new e(Pe,S(h,{uniforms:k,transparent:!0,depthWrite:!1,side:2,...v(),vertexShader:`
uniform float uTime;
uniform float uGroundPhase;uniform float uTravel;uniform float uShimmer;
uniform float uPointSize;uniform float uTailLength;
uniform float uEnergy;uniform float uHigh;
uniform float uBass;uniform float uMid;uniform float uSnare;uniform float uHihat;
uniform float uCollapse;uniform float uEruption;uniform float uBurstAge;uniform float uBurstStrength;
attribute vec4 aData;
varying float vAlpha;
varying float vTint;
varying float vTail;
const float TAU=6.28318530718;
uniform vec2 uWaves[6];
float square(float x){return x*x;}
float spiralAt(float u){
 float front=uBurstAge*0.62;
 float attack=smoothstep(0.0,0.12,uBurstAge);
 return exp(-square((u-front)/0.10))*attack*exp(-uBurstAge*1.2)*uBurstStrength;
}
// Stagger each family so the eruption reads as climbing strands, not a flat ring.
vec3 burstLayers(float u,float family){
 float seed=fract(sin(floor(family*31.0)*17.13+4.7)*43758.5453);
 float age=uBurstAge-seed*0.20;
 float attack=smoothstep(0.0,0.10,age);
 float gate=attack*exp(-max(age,0.0)*1.0)*uBurstStrength;
 float root=exp(-square(u/0.17))*exp(-max(age,0.0)*7.0);
 float front=age*(0.53+seed*0.15);
 float crest=exp(-square((u-front)/0.055));
 float wake=exp(-square((u-front+0.13)/0.14))*0.34;
 float sparks=pow(0.5+0.5*sin(u*105.0+seed*37.0-age*8.0),18.0)
   *exp(-square((u-front+0.20)/0.20))*smoothstep(0.30,0.85,seed);
 return vec3(root,crest+wake,sparks)*gate;
}
float waveAt(float distanceAlong){
 float wave=0.0;
 for(int i=0;i<6;i++){
  float age=uWaves[i].x;
  float front=age*0.62;
  float envelope=exp(-age*1.1)*uWaves[i].y;
  wave+=exp(-square((distanceAlong-front)/0.065))*envelope;
 }
 return min(wave,1.8);
}
// Smooth curl of a trigonometric vector potential: continuous local eddies.
vec3 curlField(vec3 p,float t){
 return vec3(-0.8*cos(p.z*0.8-t*0.3),-0.75*cos(p.x*0.75+t*0.2),-0.7*cos(p.y*0.7+t));
}
// Material coordinates move upward through a shared field, so neighboring
// filaments roll together rather than shaking with unrelated particle phases.
vec3 plumeFlow(vec3 p,float u,float group){
 float envelope=sin(u*3.14159);
 vec3 q=vec3(p.x*0.52,p.y*0.62-uTravel*0.72,p.z*0.52);
 vec3 large=curlField(q,uTime*0.22);
 vec3 small=curlField(q*1.9+large*0.42,uTime*0.31);
 float roll=0.48+uMid*0.32;
 vec3 flow=large*roll+small*(0.10+uHigh*0.10);
 // Local wave packets travel up the plume; they never scale its radius.
 float packet=waveAt(u);
 float turn=u*7.0-uTravel*0.72+group*0.8;
 flow.xz+=vec2(cos(turn),sin(turn))*packet*0.20;
 flow.y=flow.y*0.24+packet*0.16;
 return flow*envelope;
}
vec3 floorFlow(float radius,float angle){
 float r=radius+0.17*sin(angle*3.0-radius*1.7-uTime*0.6)
              +0.06*sin(angle*7.0+radius*2.0-uTime*0.9);
 float y=0.035+0.035*sin(angle*2.0-radius*2.1-uTime*0.5);
 float wave=waveAt(radius/7.0);
 r*=1.0+0.045*uBass;
 y+=wave*0.13;
 r*=1.0-uCollapse*0.035*exp(-radius*0.22);
 float impact=spiralAt(radius/7.0);
 y+=impact*0.055;
 return vec3(cos(angle)*r,y,sin(angle)*r);
}
vec3 strand(float u,float phase,float family,float t){
 // A handful of irregular ribbon families, each carrying hundreds of fine filaments.
 float group=floor(family*7.0);
 float local=fract(family*7.0);
 float h=u*10.0;
 float a=group*2.39996+phase*0.065;
 float twist=u*(3.6+sin(group*3.0)*1.7)-t*0.12;
 float waist=exp(-square((u-0.23)/0.15));
 float r=0.35+3.8*pow(u,0.64)+sin(u*6.0+group)*0.55;
 r*=1.0-waist*0.37;
 r+=(local-0.5)*(0.18+u*0.55);
 vec3 p=vec3(cos(a+twist)*r,h,sin(a+twist)*r);
 // Wide sweeping arcs alternate with upright branching plumes.
 if(mod(group,3.0)<0.5){
   float arc=u*3.14159;
   float sweep=sin(arc)*4.8;
   p.x=cos(a)*sweep+sin(arc*2.0+a)*1.2;
   p.z=sin(a)*sweep+cos(arc*2.0+a)*0.6;
   p.y=0.10+pow(u,1.5)*8.0+sin(arc)*0.8;
 }
 float bend=sin(u*3.14159);
 p.x+=sin(h*0.85+group+t*0.18)*bend*0.65;
 p.z+=cos(h*1.1+group+t*0.15)*bend*0.45;
 p+=plumeFlow(p,u,group);
 // Gather the lower sweep toward the axis, blending back to the upper plume.
 float lowerGather=smoothstep(0.15,0.9,p.y)*(1.0-smoothstep(3.0,6.5,p.y));
 p.xz*=1.0-0.20*lowerGather;
 // Keep the silhouette: a soft gathering at the root and a localized travelling accent.
 float core=exp(-u*4.0);
 float blast=spiralAt(u);
 p.xz*=1.0-uCollapse*0.075*core;
 float filamentAccent=0.5+0.5*sin(group*2.39996-u*TAU);
 p.xz*=1.0+blast*0.045*filamentAccent;
 p.y+=blast*0.07*bend;
 return p;
}

attribute float aSide;
uniform float uRibbonWidth;
varying float vAcross;varying float vPacket;varying float vFold;varying float vRibbonU;
void main(){
 float u=aData.x;
 vec3 p=strand(u,aData.y,aData.z,uTime);
 vec3 next=strand(min(u+0.002,0.999),aData.y,aData.z,uTime);
 vec4 view=modelViewMatrix*vec4(p,1.0);
 vec4 nextView=modelViewMatrix*vec4(next,1.0);
 vec2 tangent=nextView.xy-view.xy;
 vec2 normal=vec2(-tangent.y,tangent.x)/max(length(tangent),0.00001);
 float phase=u*11.0-uTravel*2.8+aData.w*TAU;
 float packet=pow(0.5+0.5*sin(phase+sin(phase*0.47)*0.6),5.0);
 vec3 burst=burstLayers(u,aData.z);
 float hero=smoothstep(0.35,0.85,fract(aData.w*7.13+0.17));
 float eruptionPacket=burst.y*(0.20+hero*0.65);
 vPacket=packet*0.60+waveAt(u)+eruptionPacket;
 // Apparent width rolls like a twisted silk sheet, with narrow edge-on sections.
 float fold=u*9.0-uTime*0.38+aData.w*TAU;
 vFold=sin(fold);vRibbonU=u;
 float width=(0.12+0.16*sin(u*3.14159))*(0.70+aData.w*0.45)*uRibbonWidth;
 width*=(0.24+0.76*abs(cos(fold)))*(1.0+eruptionPacket*0.25+uMid*0.12);
 view.xy+=normal*aSide*width;
 gl_Position=projectionMatrix*view;
 vAlpha=smoothstep(0.015,0.08,u)*(1.0-smoothstep(0.75,0.975,u));
 vAlpha*=1.0-smoothstep(13.0,23.0,-view.z)*0.65;
 vAlpha*=1.0+burst.x*0.30+burst.z*hero*0.40;
 vAcross=aSide;vTint=aData.w;
}`,fragmentShader:`
uniform vec3 uGroundColor;uniform vec3 uFlowColor;uniform vec3 uBeamColor;
uniform vec3 uGroundMidColor;uniform vec3 uGroundOuterColor;
uniform float uLayer;uniform float uEnergy;
uniform float uGroundGain;uniform float uFlowGain;uniform float uBeamGain;uniform float uRibbonGain;
// A small bright core rides inside a darker colored body.
vec3 layerColor(float tint){
 // PerceptualColor.js supplies shared, gamut-mapped linear colors for every layer.
 vec3 base=mix(uGroundColor,uFlowColor,uLayer);
 return base*(0.42+pow(tint,2.5)*0.92)*mix(uGroundGain,uFlowGain,uLayer);
}
vec3 groundLayerColor(float tint,float radius){
 vec3 inner=mix(uGroundColor,uGroundMidColor,smoothstep(0.08,0.48,radius));
 vec3 base=mix(inner,uGroundOuterColor,smoothstep(0.40,0.95,radius));
 return base*(0.42+pow(tint,2.5)*0.78)*uGroundGain;
}

varying float vAcross;varying float vPacket;varying float vAlpha;varying float vTint;
varying float vFold;varying float vRibbonU;
void main(){
 float x=abs(vAcross);
 float edge=1.0-smoothstep(0.78,1.0,x);
 float spine=vFold*0.42;
 float core=exp(-pow((vAcross-spine)*14.0,2.0));
 float body=pow(max(0.0,1.0-x*x),1.4);
 float hem=exp(-pow((x-0.72)*23.0,2.0));
 float weave=.90+.10*sin(vRibbonU*190.0+vAcross*12.0);
 vec3 color=mix(uFlowColor,uBeamColor,clamp(.32+vTint*.38+vAcross*.15,0.0,1.0));
 vec3 pearl=mix(color,vec3(0.85,0.93,1.0),0.48);
 vec3 radiance=mix(color,pearl,core*.75+hem*.15)*(1.1+vPacket*.8);
 float coverage=body*.15*weave+core*.48+hem*.12;
 gl_FragColor=vec4(radiance,coverage*edge*vAlpha*(.65+vPacket*1.3)*uRibbonGain);
}`}));ze.frustumCulled=!1,w.add(ze);let z=[],Be=[];for(let e=0;e<=256;e++){let t=e/256*1.1;Be.push(new a(Math.cos(t),0,Math.sin(t)))}let Ve=x(new u).setFromPoints(Be);for(let e=0;e<6;e++){let t=new d(Ve,S(f,{color:12768492,transparent:!0,opacity:0,...v(),depthWrite:!1}));t.position.y=.08,t.scale.setScalar(.9+e*.62),t.rotation.y=e*2.399963,t.visible=!1,w.add(t),z.push({mesh:t,age:99,strength:0,baseAngle:t.rotation.y})}let B=[];w.traverse(e=>{e.material?.isLineBasicMaterial&&!z.some(t=>t.mesh===e)&&B.push(e.material)}),w.traverse(e=>{e.geometry?.attributes.aData&&(e.frustumCulled=!1)});let V=e=>Number.isFinite(e)?e:0,H=e=>Math.min(1,Math.max(0,V(e))),U=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),He=me({ground:`#c2d4ec`,groundMid:`#a6c5e0`,groundOuter:`#778aa8`,flow:`#d7dfea`,beam:`#bedbff`,groundActive:`#159bd5`,groundMidActive:`#486fdf`,groundOuterActive:`#8647bf`,flowActive:`#904be5`,beamActive:`#17bcae`});class Ue{constructor(){this.resetState()}resetState({resetMotion:e=!0}={}){this.lastTime=null,this.dt=0,this.audio={energy:0,bass:0,mid:0,high:0,motion:0},this.active=!1,this.target=null,this.hueShift=0,this.chromaGain=1,this.colorBlend=0,this.layerHueSpread=0,this.colorEnergy=0,this.colorAverageMid=0,this.colorAverageHigh=0,this.colorAverageReady=!1,this.previousKick=0,this.cooldown=0,this.shock=0,this.charge=0,this.collapse=0,this.eruption=0,this.burstAge=99,this.burstStrength=0,this.burstCooldown=0,this.pendingBurst=0,this.pendingDelay=0,this.previousEnergy=0,this.cameraPulse=0,this.snare=0,this.hihat=0,this.previousSnare=this.previousHihat=0,this.snareCooldown=this.hihatCooldown=0,e&&(this.elapsed=0,this.groundPhase=0,this.travel=0,this.shimmer=0,R.rotation.y=0),k.uTime.value=this.elapsed,k.uGroundPhase.value=this.groundPhase,k.uTravel.value=this.travel,k.uShimmer.value=this.shimmer;for(let e of z)e.age=99,e.strength=0,e.mesh.visible=!1,e.mesh.material.opacity=0,e.mesh.rotation.y=e.baseAngle;k.uEnergy.value=k.uHigh.value=0,k.uBass.value=k.uMid.value=0,k.uSnare.value=k.uHihat.value=0,k.uCollapse.value=k.uEruption.value=0,k.uBurstAge.value=99,k.uBurstStrength.value=0;for(let e of k.uWaves.value)e.set(99,0);this.writeColors();for(let e of B)e.color.copy(k.uGroundColor.value).multiplyScalar(b.groundGain);O.strength=b.bloomStrength}writeColors(){let e=[`ground`,`flow`,`beam`,`groundMid`,`groundOuter`];for(let t=0;t<e.length;t++){let n=e[t],r=He[n],i=He[n+`Active`],a=de(r,i,this.colorBlend),s=this.hueShift+(t<3?t-1:-1)*this.layerHueSpread,c=fe(a[1],a[2],s),l=pe(he([Math.min(.91,a[0]),c[0]*this.chromaGain,c[1]*this.chromaGain],{maxValue:1}).map(e=>e*(1.08+this.colorEnergy*.08)),{threshold:1,headroom:.22,softness:.65});k[[`uGroundColor`,`uFlowColor`,`uBeamColor`,`uGroundMidColor`,`uGroundOuterColor`][t]].value.setRGB(l[0],l[1],l[2],o)}}updateWithAudioData(e,t){this.dt=this.lastTime===null?1/60:Math.min(Math.max((t-this.lastTime)/1e3,0),.1),this.lastTime=t;let n=e?.audioFeature?.animation;this.active=y.enabled&&e?.isPlaying===!0&&!!n&&V(e.audioFeature.energy?.rms)>1e-4,this.target=this.active?n:null;let r=this.active?Math.min(2,Math.max(0,V(n.kick))):0;if(this.cooldown=Math.max(0,this.cooldown-this.dt),b.speed>0&&y.strength>0&&r>.22&&r-this.previousKick>.06&&this.cooldown===0){let e=z.find(e=>e.age>1.6)||z.reduce((e,t)=>e.age>t.age?e:t);e.age=0,e.strength=Math.min(1.5,r)*y.strength,e.mesh.visible=!0,this.shock=Math.max(this.shock,r*y.strength),r>.85&&H(n.energy)>.32&&this.burstCooldown===0&&this.pendingBurst===0&&(this.pendingBurst=Math.min(1.4,(.65+r*.35+this.charge*.35)*y.strength),this.pendingDelay=.07,this.burstCooldown=2.2),this.cooldown=.13}this.previousKick=r;for(let[e,t,r]of[[`snare`,.16,.1],[`hihat`,.12,.055]]){let i=e===`snare`?`previousSnare`:`previousHihat`,a=e+`Cooldown`,o=this.active?Math.min(1.5,Math.max(0,V(n[e]))):0;this[a]=Math.max(0,this[a]-this.dt),b.speed>0&&y.strength>0&&o>t&&o-this[i]>.04&&this[a]===0&&(this[e]=Math.max(this[e],o*y.strength),this[a]=r),this[i]=o}}render(){let e=this.dt||0,t=b.speed>0,n=t?e*b.speed/_e.speed:0,r=this.active?n:e,i=this.target;if(y.strength===0){this.pendingBurst=this.pendingDelay=this.charge=0,this.collapse=this.eruption=this.cameraPulse=0,this.burstStrength=this.shock=this.snare=this.hihat=0,this.burstAge=99,this.burstCooldown=0;for(let e of z)e.age=99,e.strength=0}if(!this.active)this.pendingBurst=0,this.pendingDelay=0,this.previousEnergy=0,this.charge=U(this.charge,0,7,e),this.burstCooldown=Math.max(0,this.burstCooldown-e);else if(t&&y.strength>0){let t=H(i.energy),n=Math.max(0,t-this.previousEnergy)/Math.max(e,.001);this.charge=U(this.charge,H((t-.28)*.7+n*.12)*y.strength,3,e),this.burstCooldown=Math.max(0,this.burstCooldown-e),this.pendingBurst>0&&(this.pendingDelay-=e,this.pendingDelay<=0&&(this.burstAge=0,this.burstStrength=this.pendingBurst,this.pendingBurst=0,this.charge=0)),this.previousEnergy=t}if(t||!this.active){let t=this.active?n:e;this.burstAge=Math.min(99,this.burstAge+t);let r=this.active?this.burstStrength*(1-Math.exp(-this.burstAge*24))*Math.exp(-this.burstAge*4):0;this.eruption=U(this.eruption,r,16,t),this.cameraPulse=U(this.cameraPulse,r,10,t),this.collapse=U(this.collapse,this.active?this.pendingBurst>0?this.pendingBurst:this.charge*.4:0,this.pendingBurst>0?20:9,e)}k.uCollapse.value=this.collapse*b.eruptionStrength,k.uEruption.value=this.eruption*b.eruptionStrength,k.uBurstAge.value=this.burstAge,k.uBurstStrength.value=this.burstStrength*b.spiralStrength;for(let e of Object.keys(this.audio))this.audio[e]=i?H(i[e])*y.strength:0;this.shock*=Math.exp(-7*r),this.snare*=Math.exp(-12*r),this.hihat*=Math.exp(-22*r);let a=i?H(i.mid)*.45+H(i.high)*.85:0,o=this.active?y.colorResponse:1/.18,s=i?H(i.mid):0,c=i?H(i.high):0;i?(this.colorAverageReady||=(this.colorAverageMid=s,this.colorAverageHigh=c,!0),this.colorAverageMid=U(this.colorAverageMid,s,1.2,e),this.colorAverageHigh=U(this.colorAverageHigh,c,1.2,e)):(this.colorAverageReady=!1,this.colorAverageMid=this.colorAverageHigh=0);let l=(s-this.colorAverageMid)/Math.max(.15,this.colorAverageMid),u=(c-this.colorAverageHigh)/Math.max(.15,this.colorAverageHigh),d=Math.max(-.32,Math.min(.32,l*.14+u*.22)),f=this.active&&y.colorReactivity>0;if(this.hueShift=U(this.hueShift,f?s*.32+c*.48+d*y.colorReactivity:0,o,e),this.chromaGain=U(this.chromaGain,1+(f?H(i.bass):0)*y.saturationBoost,o,e),this.colorBlend=U(this.colorBlend,f?Math.min(1,a*2.2+H(i.energy)*.65):0,o,e),this.layerHueSpread=U(this.layerHueSpread,f?c*.1:0,o,e),this.colorEnergy=U(this.colorEnergy,i?H(i.energy):0,o,e),this.writeColors(),k.uEnergy.value=this.audio.energy,k.uHigh.value=this.audio.high,k.uBass.value=this.audio.bass,k.uMid.value=this.audio.mid,k.uSnare.value=this.snare,k.uHihat.value=this.hihat,t){let t=e*b.speed;this.elapsed+=t*(.45+this.audio.mid*.9)*b.fieldSpeed,this.groundPhase+=t*(.48+this.audio.bass*1.8+this.shock*1.1)*b.groundSpeed,this.travel+=t*(.36+this.audio.motion*1.25+this.audio.bass*.6+this.shock*.65)*b.plumeSpeed,this.shimmer+=t*(.65+this.audio.high*2.2)*b.shimmerSpeed,R.rotation.y=this.groundPhase*.1}k.uTime.value=this.elapsed,k.uGroundPhase.value=this.groundPhase,k.uTravel.value=this.travel,k.uShimmer.value=this.shimmer;for(let e of z){if(e.age+=r,e.age>1.6){e.mesh.visible=!1;continue}e.mesh.rotation.y+=n*(1+this.audio.bass*1.8+e.strength),e.mesh.material.opacity=Math.exp(-e.age*2.4)*e.strength*.6*b.waveStrength*b.groundGain,e.mesh.material.color.copy(k.uGroundColor.value)}for(let e=0;e<z.length;e++){let t=z[e];k.uWaves.value[e].set(t.age,t.age<=1.6?t.strength*b.waveStrength:0)}for(let e of B)e.color.copy(k.uGroundColor.value).multiplyScalar(b.groundGain);O.strength=Math.min(1.8,b.bloomStrength*(1+this.audio.energy*.25)),E.update();for(let e of ke)e.rotation.y=Math.atan2(T.position.x-e.position.x,T.position.z-e.position.z);let p=T.position.x,m=T.position.y,h=T.position.z,g=Math.min(.1,this.cameraPulse*b.cameraPush);T.position.set(p+(E.target.x-p)*g,m+(E.target.y-m)*g,h+(E.target.z-h)*g);try{D.render()}finally{T.position.set(p,m,h),T.updateMatrixWorld()}}}let W=this.director=new Ue;function G(){ye();let e=(e,t)=>Math.min(t,Math.max(0,Math.round(Number.isFinite(e)?e:0)));F.setDrawRange(0,e(b.upperParticles,P)*2),N.setDrawRange(0,e(b.groundParticles,M)),L.setDrawRange(0,e(b.groundStreaks,I)*2),k.uFlowGain.value=b.flowGain,k.uGroundGain.value=b.groundGain,k.uBeamGain.value=b.beamGain,k.uRibbonGain.value=b.ribbonGain,k.uRibbonWidth.value=b.ribbonWidth,k.uPointSize.value=b.pointSize,k.uTailLength.value=b.tailLength,O.strength=Math.min(1.8,b.bloomStrength*(1+W.audio.energy*.25));for(let e of B)e.color.copy(k.uGroundColor.value).multiplyScalar(b.groundGain);O.radius=b.bloomRadius,O.threshold=b.bloomThreshold,C.toneMappingExposure=b.exposure}this.guiContainer=se(`Animation83-gui-container`),this.scrollbarStyle=ce(`Animation83-gui-container`),document.body.appendChild(this.guiContainer);let K=this.gui=new ie({title:`灵魂之涡`,container:this.guiContainer}),q=(e,t,n)=>e.add(y,t,...ve[t]).name(n),J=K.addFolder(`常用画面`);q(J,`upperParticles`,`上升粒子数`),q(J,`groundParticles`,`地面粒子数`),q(J,`speed`,`整体流速`),q(J,`tailLength`,`粒子拖尾长度`);let Y=K.addFolder(`音乐互动`);Y.add(y,`enabled`).name(`音频互动`),q(Y,`strength`,`运动响应强度`),q(Y,`colorReactivity`,`变色响应强度`),q(Y,`eruptionStrength`,`核心蓄能与喷发`),q(Y,`cameraPush`,`镜头推进幅度`);let We=K.addFolder(`粒子细节`);q(We,`groundStreaks`,`地面短光丝`),q(We,`pointSize`,`地面粒子尺寸`);let Ge=K.addFolder(`图层细节`);q(Ge,`flowGain`,`上升光丝亮度`),q(Ge,`groundGain`,`地面粒子亮度`);let X=K.addFolder(`泛光与曝光`);q(X,`bloomStrength`,`泛光强度`),q(X,`bloomRadius`,`泛光扩散`),q(X,`bloomThreshold`,`泛光阈值`),q(X,`exposure`,`曝光`),q(Y,`colorResponse`,`变色响应速度`),q(Y,`saturationBoost`,`低频饱和增强`);for(let[e,t]of[[`beamGain`,`光柱亮度`],[`ribbonGain`,`光带亮度`],[`ribbonWidth`,`光带宽度`]])q(Ge,e,t);let Ke=K.addFolder(`流动与波纹`);for(let[e,t]of[[`groundSpeed`,`地面流速`],[`plumeSpeed`,`上升流速`],[`fieldSpeed`,`流场变化`],[`shimmerSpeed`,`闪烁流速`],[`waveStrength`,`鼓点波纹`],[`spiralStrength`,`螺旋喷发`]])q(Ke,e,t);K.onChange(e=>{G(),e.property===`enabled`&&W.resetState({resetMotion:!1})}),this.endGuiPreferencesLoad=(e=!0)=>{e&&!this.disposed&&G()},this.settingsButton=ae(`Animation83-settings-button`),document.body.appendChild(this.settingsButton),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?K.show():K.hide()},{signal:this.events.signal}),K.hide(),G(),this.resetGuiCamera=()=>{let e=E.enableDamping;E.enableDamping=!1,E.update(),E.reset(),E.enableDamping=e};let Z=null,Q=-1/0;this.updateWithAudioData=e=>{Z=e,Q=performance.now()+250},this.updateAudioAnalysis=(e,t=performance.now())=>W.updateWithAudioData(e,t),this.resetState=()=>{Z=null,Q=-1/0,W.resetState(),G(),this.resetGuiCamera()},this.render=()=>{if(this.disposed||this.contextLost||document.hidden)return;let e=performance.now();W.updateWithAudioData(e<=Q?Z:null,e),W.render()},this.onWindowResize=()=>{if(this.disposed)return;let e=Math.max(1,innerWidth),t=Math.max(1,innerHeight);T.aspect=e/t,T.updateProjectionMatrix();let n=Math.min(devicePixelRatio,1.5);C.setPixelRatio(n),D.setPixelRatio(n),k.uPixel.value=n,C.setSize(e,t),D.setSize(e,t)};let $=(e,t,n)=>e.addEventListener(t,n,{signal:this.events.signal});$(window,`resize`,this.onWindowResize),$(document,`visibilitychange`,()=>{Z=null,Q=-1/0,W.resetState({resetMotion:!1})}),$(this.canvas,`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.resetState()}),$(this.canvas,`webglcontextrestored`,()=>{this.contextLost=!1,this.onWindowResize()}),this.onWindowResize()}dispose(){if(!this.disposed){this.disposed=!0,this.events?.abort(),oe(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.controls?.dispose();for(let e of this.resources)e.dispose();this.resources.clear();for(let e of this.composer?.passes||[])e.dispose?.();this.composer?.dispose(),this.scene?.clear(),this.renderer?.dispose();for(let e of[`render`,`updateWithAudioData`,`updateAudioAnalysis`,`resetState`,`resetGuiCamera`,`onWindowResize`,`endGuiPreferencesLoad`])this[e]=()=>{};for(let e of[`renderer`,`scene`,`camera`,`controls`,`composer`,`bloom`,`uniforms`,`director`,`gui`,`guiContainer`,`settingsButton`,`scrollbarStyle`])this[e]=null}}};export{ge as default};