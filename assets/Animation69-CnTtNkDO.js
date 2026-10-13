import{$n as e,Ar as t,Ct as n,Dt as r,F as i,Gt as a,Jt as o,Ot as s,R as c,Rn as l,Ut as u,Wt as d,Zn as f,_t as p,cr as ee,dt as te,er as m,f as ne,g as h,ht as re,jr as g,l as _,lr as ie,lt as ae,nr as oe,pr as se,q as ce,qt as v,r as le,u as y}from"./three.module-y53aV_Iu.js";import{n as ue,r as de,t as fe}from"./OutputPass-R3e3FNgb.js";import{a as pe,i as me,n as b,r as he,t as ge}from"./GUIHelper-DNd0uFVI.js";import{t as _e}from"./UnrealBloomPass-C3xsCyqj.js";import{d as ve,i as ye}from"./PerceptualColor-yyoOW5OX.js";var be=`/assets/visualizations/animation69/dream-crescent-portrait.png`,x=class{constructor(e){this.canvas=e,this.gui=null,this.guiContainer=null,this.settingsButton=null,this.guiVisible=!1,this._disposed=!1,this._listeners=[],this.init()}init(){let b=(e,t,n)=>{e.addEventListener(t,n),this._listeners.push([e,t,n])},x=new e,S=new u(48,innerWidth/innerHeight,.1,100);S.position.set(0,.12,10.2),S.lookAt(-.08,.08,0);function xe(){let e=innerWidth/innerHeight;S.aspect=e,S.fov=n.radToDeg(2*Math.atan(Math.tan(n.degToRad(48)/2)*Math.max(1,.78/e))),S.updateProjectionMatrix()}xe();let C=new le({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`});C.setSize(innerWidth,innerHeight),C.setPixelRatio(Math.min(devicePixelRatio,2)),C.outputColorSpace=f,C.toneMapping=4,C.toneMappingExposure=1,C.setClearColor(0,0),this.canvas.style.backgroundColor=`transparent`;let w=new de(C);w.addPass(new ue(x,S));let Se=new _e(new t(innerWidth,innerHeight),.82,.48,.68);w.addPass(Se),w.addPass(new fe);let T=(e,t)=>e+Math.random()*(t-e),E=e=>e<0?0:e>1?1:e,D=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),Ce=(e,t,n)=>E((e-t)/Math.max(1e-6,n-t)),we=(e,t,n)=>{let r=t-e,i=E((n-e)/(Math.abs(r)<1e-6?1e-6:r));return i*i*(3-2*i)},Te=e=>{let t=Ce(e,.2,.82);return t*t*(3-2*t)},Ee=new m({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uResolution:{value:new t(innerWidth,innerHeight)},uAmbience:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.999,1.);}`,fragmentShader:`
 precision highp float; varying vec2 vUv; uniform float uTime; uniform vec2 uResolution;
 uniform float uAmbience;
 float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.03;a*=.5;}return v;}
 void main(){
   vec2 p=vUv*2.-1.; p.x*=uResolution.x/uResolution.y;
   float r=length(p);
   vec3 c=vec3(.00025,.0004,.0010);
   // 段落气氛：uAmbience=0 时与 V1.6.4 完全一致，只在段落强弱上做整体加深
   float ambNeb=1.0+uAmbience*.95;
   float ambCore=1.0+uAmbience*.55;
   float center=exp(-r*r*2.35);
   c+=vec3(.004,.010,.030)*center*.42*ambCore;
   float n=fbm(p*1.65+vec2(uTime*.003,-uTime*.002));
   c+=vec3(.018,.006,.038)*smoothstep(.64,.88,n)*.09*ambNeb;
   float n2=fbm(p*2.8+vec2(-uTime*.002,uTime*.003));
   c+=vec3(.002,.022,.040)*smoothstep(.68,.91,n2)*.05*ambNeb;
    float vig=1.0-smoothstep(.30,1.42,r);
   c*=.28+vig*.76;
   gl_FragColor=vec4(c,1.);
 }`}),De=new r(new a(2,2),Ee);De.frustumCulled=!1,De.renderOrder=-100,x.add(De);function Oe(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,255,255,.6)`),n.addColorStop(.2,`rgba(255,255,255,.13)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),t.save(),t.translate(64,64),t.beginPath();for(let e=0;e<8;e++){let n=-Math.PI/2+e*Math.PI/4,r=e%2?5:42,i=Math.cos(n)*r,a=Math.sin(n)*r;e?t.lineTo(i,a):t.moveTo(i,a)}t.closePath(),t.fillStyle=`rgba(255,255,255,.95)`,t.fill(),t.restore();let r=new ne(e);return r.colorSpace=f,r}let ke=Oe();function Ae(){let e=new oe,r=2.12,i=1.7,a=-.14,o=.59,s=n.degToRad(60),c=n.degToRad(300),l=n.degToRad(292),u=n.degToRad(68),d=new t(a+Math.cos(s)*r,Math.sin(s)*r),f=new t(a+Math.cos(c)*r,Math.sin(c)*r),p=new t(o+Math.cos(l)*i,Math.sin(l)*i);return e.moveTo(d.x,d.y),e.absarc(a,0,r,s,c,!1),e.quadraticCurveTo(f.x+.1,f.y+.015,p.x,p.y),e.absarc(o,0,i,l,u,!0),e.quadraticCurveTo(d.x+.1,d.y-.015,d.x,d.y),e.closePath(),e}let O=new c(Ae(),{depth:.16,bevelEnabled:!0,bevelSegments:8,bevelSize:.045,bevelThickness:.038,curveSegments:128,steps:1});O.computeBoundingBox();let je=O.boundingBox.getCenter(new g);O.translate(-je.x,-je.y,-je.z);let k=new ce;k.position.set(-.18,.02,.05),k.rotation.y=-.035;let A=new ce;A.name=`MoonCharacterRig`,k.add(A);let Me=new se,j=Me.load(be);j.colorSpace=f,j.minFilter=p,j.magFilter=re,j.generateMipmaps=!0;let Ne=new s({map:j,transparent:!0,alphaTest:.018,depthWrite:!1,depthTest:!0,toneMapped:!1,side:2}),Pe=new a(1.42,2.15);Pe.translate(.08,.73,0);let Fe=new r(Pe,Ne);Fe.renderOrder=8,A.add(Fe);let Ie=new s({map:j,color:16768432,transparent:!0,opacity:.025,alphaTest:.01,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:2,side:2}),Le=new r(Pe.clone(),Ie);Le.position.z=-.018,Le.scale.setScalar(1.018),Le.renderOrder=7,A.add(Le);let M=document.createElement(`input`);M.type=`file`,M.accept=`image/png,image/webp,image/jpeg`,M.style.display=`none`,document.body.appendChild(M);let N=null,P=null,Re=0,ze=1;function Be(){let e=Math.max(.2,Math.min(5,U.characterAspect));Fe.scale.x=e,Fe.scale.y=1,Le.scale.set(1.018*e,1.018,1.018)}function Ve(e){let t=e?.image;!t?.width||!t?.height||(ze=t.width/t.height/.6604651162790698,U.characterAspect=ze,Be(),In?.updateDisplay())}function He(e,t=!1){e.colorSpace=f,e.minFilter=p,e.magFilter=re,e.generateMipmaps=!0,Ne.map=e,Ne.needsUpdate=!0,Ie.map=e,Ie.needsUpdate=!0,t&&U.characterAspectAuto&&Ve(e)}b(M,`change`,()=>{let e=M.files?.[0];if(!e)return;let t=++Re;N&&URL.revokeObjectURL(N),N=URL.createObjectURL(e),Me.load(N,n=>{if(t!==Re){n.dispose();return}P&&P!==n&&P.dispose(),P=n,He(n,!0),console.info(`[Portrait] loaded:`,e.name,n.image?.width+`×`+n.image?.height)},void 0,t=>console.error(`[Portrait] failed:`,e.name,t))});function F(){A.visible=U.characterVisible,A.position.set(U.characterX,U.characterY,U.characterZ),A.rotation.set(0,.018,U.characterRotation),A.scale.setScalar(U.characterScale)}x.add(k);let I=new m({uniforms:{uTime:{value:0},uGeometryCenter:{value:je.clone()},uPearl:{value:1},uBodyHDR:{value:1},uInnerGlow:{value:1},uOuterGlow:{value:1},uBass:{value:0},uImpact:{value:0},uMoonTint:{value:new h(1,1,1)}},vertexShader:`
 varying vec3 vPos;
 varying vec3 vN;
 void main(){
   vPos=position;
   vN=normalize(normalMatrix*normal);
   gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
 }`,fragmentShader:`
 precision highp float;
 varying vec3 vPos;
 varying vec3 vN;
 uniform float uTime;
 uniform float uBodyHDR;
 uniform float uInnerGlow;
 uniform float uOuterGlow;
 uniform float uBass;
 uniform float uImpact;
  uniform vec3 uMoonTint;
  uniform vec3 uGeometryCenter;
  uniform float uPearl;

 float hash(vec2 p){
   p=fract(p*vec2(123.34,345.45));
   p+=dot(p,p+34.345);
   return fract(p.x*p.y);
 }
 float noise(vec2 p){
   vec2 i=floor(p),f=fract(p);
   f=f*f*(3.0-2.0*f);
   return mix(
     mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),
     mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),
     f.y
   );
 }

 void main(){
    vec2 p=vPos.xy+uGeometryCenter.xy;

   const vec2 OUTER_CENTER=vec2(-0.14,0.0);
   const float OUTER_RADIUS=2.12;
   const vec2 INNER_CENTER=vec2(0.59,0.0);
   const float INNER_RADIUS=1.70;

   float dOuter=abs(length(p-OUTER_CENTER)-OUTER_RADIUS);
   float dInner=abs(length(p-INNER_CENTER)-INNER_RADIUS);

   float frontFace=smoothstep(0.68,0.96,abs(normalize(vN).z));

   // Wide transition fields, not graphic outline bands.
   float innerHot =(1.0-smoothstep(0.008,0.16,dInner))*frontFace;
   float outerHot =(1.0-smoothstep(0.006,0.11,dOuter))*frontFace;

   // Extremely restrained living variation. The crescent remains an energy object,
   // not a textured rock.
   float breathe=.985+sin(uTime*.42)*.012;

   // Refined Moon Depth:
   // Cross-section shading: both real boundaries stay pale while the body center
   // is only 10–15% deeper. No brown groove and no graphic inner outline.
    vec3 champagneShade = vec3(.82,.59,.37);
    vec3 champagneBody  = vec3(1.04,.84,.62);
    vec3 champagneEdge  = vec3(1.30,1.10,.85);

   // Approximate position through the crescent section from the two true arcs.
   float sectionSum=max(dInner+dOuter,0.0001);
   float sectionPos=dOuter/sectionSum;                 // 0 outer -> 1 inner
   float sectionCenter=1.0-abs(sectionPos*2.0-1.0);   // 0 edges -> 1 middle
   sectionCenter=smoothstep(0.10,0.92,sectionCenter);

   float nearestEdge=min(dInner,dOuter);
   float softEdge=1.0-smoothstep(0.020,0.34,nearestEdge);
   float fineEdge=1.0-smoothstep(0.005,0.080,nearestEdge);

   // uInnerGlow is now true arc/body depth control. Bass deepens the section
   // slightly, which reads as weight rather than as a brightness change.
   float depthAmount=.105*uInnerGlow*(1.0+uBass*.30);
   vec3 color=mix(champagneBody,champagneShade,sectionCenter*depthAmount);

   // uOuterGlow is now a restrained pale-edge control.
   float edgeAmount=(softEdge*.20+fineEdge*.11)*uOuterGlow;
   color=mix(color,champagneEdge,clamp(edgeAmount,0.0,.42));

   // Break mathematical uniformity with only a very broad, low-amplitude bias.
   float broadBias=smoothstep(-1.75,.60,p.x);
   color*=.988+broadBias*.012;

   // V3.1 sculpted pearl body: broad cloud structure + fine pearlescent grain.
   // Keep variation inside the material rather than turning the whole moon into white bloom.
   float cloud1=noise(p*2.15+vec2(uTime*.0012,-uTime*.0008));
   float cloud2=noise(p*5.8+vec2(-uTime*.0017,uTime*.0011));
   float grain=noise(p*18.0);
    float pearl=((cloud1-.5)*.17+(cloud2-.5)*.085+(grain-.5)*.035)*uPearl;
   float warmCloud=smoothstep(.42,.72,cloud1)*(.45+.55*sectionCenter);
   vec3 pearlWarm=vec3(1.00,.91,.77);
   vec3 pearlCool=vec3(.88,.93,1.00);
   color=mix(color,pearlWarm,warmCloud*.055);
   color=mix(color,pearlCool,smoothstep(.66,.90,cloud2)*.025);
   float bodyGain=.91+uBass*.050+uImpact*.075;
   color*=uBodyHDR*(.965+pearl)*breathe*bodyGain;
   // Embedded micro-sparkles: sparse and local, visible even before external pearl dust.
   float sparkle=step(.985,noise(p*34.0+floor(p*8.0)))*(1.0-sectionCenter*.28);
    color+=sparkle*vec3(1.0,.83,.58)*.38*uPearl*frontFace;

   // No separate inner/outer light bands. Only tiny energy lifts at the real edges.
   // The beat only lifts these true edges, so impact keeps highlight layering.
    float edgeLift=.8*uOuterGlow+uImpact*.18;
    float edgeLift2=1.0*uOuterGlow+uImpact*.20;
   color+=innerHot*vec3(.035,.028,.018)*edgeLift;
   color+=outerHot*vec3(.045,.035,.021)*edgeLift2;

   // Tips remain naturally a little brighter.
   float tipConvergence=innerHot*outerHot;
   color+=tipConvergence*vec3(.085,.067,.041)*(.040+uImpact*.105);

   // 颜色导演：色相漂移转成暖金 ↔ 冷银的小幅偏色。
   // uMoonTint 在无音乐时严格等于 (1,1,1)，不改变基础材质颜色。
   color*=uMoonTint;

   gl_FragColor=vec4(color,1.0);
 }`}),Ue=new r(O,I);k.add(Ue);let We=new s({color:16769717,transparent:!0,opacity:.055,depthWrite:!1,blending:2,side:2}),Ge=new r(O,We);Ge.scale.set(1.035,1.035,1.05),Ge.position.z=-.055,k.add(Ge);let Ke=new y,qe=new Float32Array(520*3),Je=new Float32Array(520*3),L=new h;for(let e=0;e<520;e++){let t=Math.random()*Math.PI*2,n=2.7+Math.random()**.72*3,r=.72+.2*Math.random();qe[e*3]=Math.cos(t)*n+(Math.random()-.5)*.28,qe[e*3+1]=Math.sin(t)*n*r+(Math.random()-.5)*.22,qe[e*3+2]=-1.2-Math.random()*3;let i=Math.random();i<.62?L.setRGB(.42,.62,1):i<.82?L.setRGB(.28,.9,1):i<.94?L.setRGB(.7,.48,1):L.setRGB(1,.52,.76);let a=.22+Math.random()*.32;Je[e*3]=L.r*a,Je[e*3+1]=L.g*a,Je[e*3+2]=L.b*a}Ke.setAttribute(`position`,new _(qe,3)),Ke.setAttribute(`color`,new _(Je,3));let Ye=new o({size:.018,vertexColors:!0,transparent:!0,opacity:.44,depthWrite:!1,blending:2,sizeAttenuation:!0}),Xe=new v(Ke,Ye);x.add(Xe);let Ze=[`#9db5d8`,`#7f99cc`,`#a494db`,`#70c8d9`,`#d098ba`,`#dbe7f8`],Qe=`
 precision highp float;
 uniform sampler2D uTex;
 uniform float uHueShift;
 uniform float uChromaGain;
 uniform float uLightGain;
 uniform float uAccent;
 uniform vec3 uAccentColor;

 varying vec3 vOklch;
 varying float vAlpha;

 vec3 oklchToLinearRgb(float L,float C,float hue){
   float angle=hue*6.28318530718;
   float a=cos(angle)*C;
   float b=sin(angle)*C;
   float l_=L+0.3963377774*a+0.2158037573*b;
   float m_=L-0.1055613458*a-0.0638541728*b;
   float s_=L-0.0894841775*a-1.2914855480*b;
   float l=l_*l_*l_;
   float m=m_*m_*m_;
   float s=s_*s_*s_;
   return vec3(
      4.0767416621*l-3.3077115913*m+0.2309699292*s,
     -1.2684380046*l+2.6097574011*m-0.3413193965*s,
     -0.0041960863*l-0.7034186147*m+1.7076147010*s
   );
 }

 void main(){
   float mask=texture2D(uTex,gl_PointCoord).a;
   if(mask<0.002) discard;

   // 固定颜色角色 + 统一色相旋转：多色星空不会收敛成单一色相
   float L=clamp(vOklch.x*uLightGain,0.0,1.0);
   float C=max(0.0,vOklch.y*uChromaGain);
   float hue=fract(vOklch.z+uHueShift);
   vec3 rgb=oklchToLinearRgb(L,C,hue);

   // 色域保护：整体缩放而不是逐通道裁剪，避免色相被裁偏
   float peak=max(max(rgb.r,rgb.g),rgb.b);
   if(peak>1.0) rgb/=peak;
   rgb=max(rgb,vec3(0.0));

   // 节拍强调：短促叠加暖光，不整体换色。这是鼓点在星场上的唯一落点
   rgb+=uAccentColor*(uAccent*0.75);

   gl_FragColor=vec4(rgb,vAlpha*mask);
 }`;class $e{constructor(e){Object.assign(this,e);let t=e.count,n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),s=new Float32Array(t),c=new Float32Array(t),l=new Float32Array(t);for(let u=0;u<t;u++){let t,d,f=0;do t=T(-e.xr,e.xr),d=T(-e.yr,e.yr),f++;while(Math.hypot(t+.18,d-.02)<1.65&&f<8);n[u*3]=t,n[u*3+1]=d,n[u*3+2]=T(e.z0,e.z1);let p=ve(ye(Ze[Math.random()*Ze.length|0]));r[u*3]=p[0],r[u*3+1]=p[1],r[u*3+2]=p[2],i[u]=T(e.s0,e.s1),a[u]=Math.random()*1e3,o[u]=e.tw*T(.7,1.5),s[u]=e.drift*T(.75,1.3),c[u]=T(e.o0,e.o1),l[u]=T(.05,.15)}this.geo=new y,this.geo.setAttribute(`position`,new _(n,3)),this.geo.setAttribute(`aOklch`,new _(r,3)),this.geo.setAttribute(`aSize`,new _(i,1)),this.geo.setAttribute(`aSeed`,new _(a,1)),this.geo.setAttribute(`aTw`,new _(o,1)),this.geo.setAttribute(`aSpeed`,new _(s,1)),this.geo.setAttribute(`aOpacity`,new _(c,1)),this.geo.setAttribute(`aSway`,new _(l,1)),this.mat=new m({uniforms:{uTime:{value:0},uTex:{value:ke},uSizeScale:{value:1e3},uWrap:{value:e.yr+.7},uHueShift:{value:0},uChromaGain:{value:1},uLightGain:{value:1},uAccent:{value:0},uAccentColor:{value:new h(1,.88,.66)},uTwinkle:{value:0},uSizeBoost:{value:0},uGlowGain:{value:1},uStarGain:{value:1},uSpatialTension:{value:0},uSpatialWeight:{value:1},uDepthWeight:{value:1}},vertexShader:`
 precision highp float;
 attribute vec3 aOklch;
 attribute float aSize;
 attribute float aSeed;
 attribute float aTw;
 attribute float aSpeed;
 attribute float aOpacity;
 attribute float aSway;

 uniform float uTime;
 uniform float uSizeScale;
 uniform float uWrap;
 uniform float uSizeBoost;
 uniform float uTwinkle;
 uniform float uGlowGain;
 uniform float uStarGain;
 uniform float uSpatialTension;
 uniform float uSpatialWeight;
 uniform float uDepthWeight;

 varying vec3 vOklch;
 varying float vAlpha;

 void main(){
   vec3 p=position;

   float st=uSpatialTension*uSpatialWeight;
   float edge=smoothstep(0.8,7.5,abs(p.x+0.18));
   float side=sign(p.x+0.18);
   p.x+=(p.x+0.18)*(st*(0.055+edge*0.075));
   p.x+=side*st*(0.05+0.10*fract(aSeed*.173));
   p.y+=sin(aSeed*1.731)*st*(0.035+edge*.045);
   p.y*=1.0-st*0.018;
   p.z-=st*uDepthWeight*(0.35+0.65*fract(aSeed*.317));

   // 星场只做缓慢漂移 + 有界摆动。坠落交给独立的"坠星"系统，
   // 整片星空一起下落会让画面变脏，也会盖掉坠星这个节奏落点。
   p.x+=sin(uTime*0.17+aSeed*0.31)*aSway;
   float y=p.y+aSpeed*uTime;
   p.y=mod(y+uWrap,2.0*uWrap)-uWrap;

   vec4 mv=modelViewMatrix*vec4(p,1.0);
   gl_Position=projectionMatrix*mv;

   float q=0.5+0.5*sin(uTime*aTw*(1.0+uTwinkle*0.65)+aSeed);

   vOklch=aOklch;
   vAlpha=clamp(aOpacity*(0.72+q*0.30)*uStarGain*uGlowGain,0.0,1.0);

   float sz=aSize*(0.97+q*0.12+uSizeBoost*0.45);
   gl_PointSize=clamp(sz*uSizeScale/max(0.001,-mv.z),1.0,128.0);
 }`,fragmentShader:Qe,transparent:!0,depthWrite:!1,depthTest:!0,blending:2}),this.points=new v(this.geo,this.mat),this.points.frustumCulled=!1,x.add(this.points)}}let et=new $e({count:540,z0:-8,z1:-4,xr:9,yr:5.5,s0:.018,s1:.055,o0:.055,o1:.24,drift:.03,tw:.48,brightnessWeight:.65}),tt=new $e({count:225,z0:-3.8,z1:-.6,xr:7.8,yr:4.8,s0:.045,s1:.125,o0:.18,o1:.55,drift:.05,tw:.78,brightnessWeight:.9}),nt=new $e({count:38,z0:.2,z1:3.2,xr:6.6,yr:4.1,s0:.09,s1:.22,o0:.34,o1:.76,drift:.07,tw:1,brightnessWeight:1.1}),rt=[[et,.45,-.055,.46,.85],[tt,.75,0,.72,.62],[nt,1,.055,1,.38]],it=[];function at(e,t,n,r,i,a){let o=new ie({map:ke,color:i,transparent:!0,opacity:.58,depthWrite:!1,blending:2}),s=new ee(o);s.position.set(e,t,n),s.scale.setScalar(r),x.add(s),it.push({s,mat:o,x:e,y:t,size:r,phase:a})}at(-4.15,1.45,1.8,.36,15965141,.2),at(3.65,1.72,2.3,.3,7986687,2),at(2.85,-1.85,2,.32,10523903,4.1),at(-3.2,-2.15,1.4,.23,15267071,5.2),at(1.35,2.62,1.1,.21,16756956,3.3);let ot=[10335704,8362444,10786011,7391449,13670586,14411768],st=new ce;x.add(st);let ct=[];for(let e=0;e<22;e++){let t=new ce,n=new ee(new ie({map:ke,color:ot[e%ot.length],transparent:!0,opacity:0,depthWrite:!1,blending:2})),r=new te({color:ot[(e+2)%ot.length],transparent:!0,opacity:0,depthWrite:!1,blending:2}),i=r.clone(),a=new y().setFromPoints([new g(-.09,0,0),new g(.09,0,0)]),o=new y().setFromPoints([new g(0,-.09,0),new g(0,.09,0)]),s=new ae(a,r),c=new ae(o,i);t.add(n,s,c);let l=Math.random()*Math.PI*2,u=2.7+Math.random()*4;t.position.set(k.position.x+Math.cos(l)*u,k.position.y+Math.sin(l)*u,.1+Math.random()*1.8),t.scale.setScalar(.28+Math.random()*.32),st.add(t),ct.push({g:t,core:n,hl:s,vl:c,env:0,hold:0,phase:Math.random()*6.283})}function lt(e,t){let n=e===`snare`?2:1;for(let r=0;r<n;r++){let n=ct[Math.random()*ct.length|0];n.env=Math.max(n.env,Math.min(1,t*(e===`snare`?.82:.58))),n.hold=e===`snare`?.04:.018}}function ut(e,t){for(let n of ct){n.hold>0?n.hold-=e:n.env*=Math.exp(-10.5*e);let r=n.env;n.g.visible=r>.002,n.core.material.opacity=r*.72,n.hl.material.opacity=r*.32,n.vl.material.opacity=r*.32,n.g.scale.setScalar((.72+r*.48)*U.particleSize),n.g.rotation.z=Math.sin(t*.22+n.phase)*.05}}let dt=1450,ft=new Float32Array(dt*3);for(let e=0;e<dt;e++){let t,n,r=0;do t=T(-10,10),n=T(-6,6),r++;while(Math.hypot(t+.18,n-.02)<1.5&&r<6);ft[e*3]=t,ft[e*3+1]=n,ft[e*3+2]=T(-10,-5)}let pt=new y;pt.setAttribute(`position`,new _(ft,3));let mt=new o({color:7901623,size:.012,transparent:!0,opacity:.15,depthWrite:!1,blending:2}),ht=new v(pt,mt);x.add(ht);let gt=new Float32Array(54),_t=new Float32Array(54),vt=new Float32Array(18),yt=new Float32Array(18);for(let e=0;e<18;e++)gt[e*3+1]=999;let bt=new y,xt=new _(gt,3).setUsage(i),St=new _(vt,1).setUsage(i),Ct=new _(yt,1).setUsage(i);bt.setAttribute(`position`,xt),bt.setAttribute(`aOklch`,new _(_t,3)),bt.setAttribute(`aSize`,St),bt.setAttribute(`aAlpha`,Ct);let wt=bt.attributes.aOklch,Tt=new m({uniforms:{uTex:{value:ke},uSizeScale:{value:1e3},uHueShift:{value:0},uChromaGain:{value:1},uLightGain:{value:1},uAccent:{value:0},uAccentColor:{value:new h(1,.88,.66)}},vertexShader:`
 precision highp float;
 attribute vec3 aOklch;
 attribute float aSize;
 attribute float aAlpha;
 uniform float uSizeScale;
 varying vec3 vOklch;
 varying float vAlpha;
 void main(){
   vec4 mv=modelViewMatrix*vec4(position,1.0);
   gl_Position=projectionMatrix*mv;
   vOklch=aOklch;
   vAlpha=aAlpha;
   gl_PointSize=clamp(aSize*uSizeScale/max(0.001,-mv.z),1.0,220.0);
 }`,fragmentShader:Qe,transparent:!0,depthWrite:!1,depthTest:!0,blending:2}),Et=new v(bt,Tt);Et.frustumCulled=!1,x.add(Et);let Dt=new Float32Array(324),Ot=new Float32Array(216),kt=new Float32Array(108),At=[[0,-1],[0,1],[1,-1],[1,-1],[0,1],[1,1]];for(let e=0;e<18;e++)for(let t=0;t<6;t++)Ot[(e*6+t)*2]=At[t][0],Ot[(e*6+t)*2+1]=(At[t][1]+1)*.5;let jt=new y;jt.setAttribute(`position`,new _(Dt,3).setUsage(i)),jt.setAttribute(`uv`,new _(Ot,2)),jt.setAttribute(`aAlpha`,new _(kt,1).setUsage(i));let Mt=new r(jt,new m({transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,vertexShader:`attribute float aAlpha;varying vec2 vUv;varying float vAlpha;
 void main(){vUv=uv;vAlpha=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;varying float vAlpha;
 void main(){
 vec2 trailUv=clamp(vUv,0.,1.);
 float crossTrail=max(0.,1.-abs(trailUv.y*2.-1.));
 float a=pow(crossTrail,1.6)*pow(max(0.,1.-trailUv.x),1.7)*clamp(vAlpha,0.,1.);
 if(!(a>=.001))discard;
 vec3 color=mix(vec3(2.5,1.65,.94),vec3(.44,.50,.95),smoothstep(.05,.8,trailUv.x));
 gl_FragColor=vec4(color,a);}`}));Mt.frustumCulled=!1,x.add(Mt);function Nt(){let e=!1;for(let t=0;t<18;t++){let n=Pt[t],r=Math.hypot(n.vx,n.vy),i=n.active&&r>1e-6?Math.min(1,n.life/.18)*(1-we(-.5,-3.6,n.y))*n.bright:0;e||=i>.001;let a=r>0?-n.vy/r:0,o=r>0?n.vx/r:0;for(let e=0;e<6;e++){let[r,s]=At[e],c=t*6+e,l=n.head*.2*U.particleSize*(1-r)+5e-4;Dt[c*3]=n.x-n.vx*n.trailTime*r+a*s*l,Dt[c*3+1]=n.y-n.vy*n.trailTime*r+o*s*l,Dt[c*3+2]=n.z,kt[c]=i}}Mt.visible=e,jt.attributes.position.needsUpdate=!0,jt.attributes.aAlpha.needsUpdate=!0}let Pt=[];for(let e=0;e<18;e++)Pt.push({active:!1,slot:e,x:0,y:0,z:0,vx:0,vy:0,life:0,maxLife:1,head:.1,trailTime:.1,bright:.7});function Ft(e){let t=-1;for(let e=0;e<18;e++)if(!Pt[e].active){t=e;break}if(t<0)return!1;e=E(e);let n=Pt[t];n.active=!0,n.x=T(-8,8),n.y=T(6,7.6),n.z=T(-2,1.5),n.vy=-(4+e*4)*U.fallSpeed,n.vx=-Math.abs(n.vy)*T(.85,1.3),n.life=0,n.maxLife=6.5,n.head=T(.055,.1)+e*.065,n.trailTime=(.16+e*.14)*U.fallTrail,n.bright=.55+e*.45;let r=ve(ye(Ze[Math.random()*Ze.length|0]));return _t.set(r,n.slot*3),wt.needsUpdate=!0,!0}let It=0,Lt=0,Rt=0,zt=0,Bt=0;function Vt(e){Lt=Math.max(0,Lt-e);let t=!1;U.fallRate>0&&Y.active&&Lt<=0&&(Y.kick>.35&&Y.kick>Rt+.05?t=Ft(Y.kick):Y.downbeat>.4&&Y.downbeat>zt+.06&&(t=Ft(Y.downbeat)),!t&&Y.hihat>.4&&Y.hihat>Bt+.06&&(t=Ft(Y.hihat*.45)),t&&(Lt=.4)),Rt=Y.kick,zt=Y.downbeat,Bt=Y.hihat;let n=Y.active?(.12+Y.section*.65+Y.motionResp*.5)*U.fallRate:.07*U.fallRate;It+=n*e,It>=1&&(It=0,Lt<=0&&Ft(.2+Y.section*.32)&&(Lt=.4));for(let t=0;t<18;t++){let n=Pt[t];if(!n.active){yt[t]=0;continue}if(n.life+=e,n.x+=n.vx*e,n.y+=n.vy*e,n.life>=n.maxLife||n.y<-4.2){n.active=!1,yt[t]=0,gt[t*3+1]=999;continue}let r=Math.min(1,n.life/.18)*(1-we(-.5,-3.6,n.y));gt[t*3]=n.x,gt[t*3+1]=n.y,gt[t*3+2]=n.z,vt[t]=n.head,yt[t]=Math.min(1,r*n.bright)}xt.needsUpdate=!0,St.needsUpdate=!0,Ct.needsUpdate=!0,Nt(),Tt.uniforms.uSizeScale.value=Xn,Tt.uniforms.uHueShift.value=Q,Tt.uniforms.uChromaGain.value=1+Y.bassResp*1.3*U.saturationBoost,Tt.uniforms.uLightGain.value=1+(Y.brightResp-.5)*.3,Tt.uniforms.uAccent.value=E(Y.accent)}let R=[new h(16767406),new h(12179711),new h(11050239),new h(16757967),new h(15988735)];function Ht(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(Math.PI*2*t)}let Ut=[{base:-3.1,slope:.015,curve:.026,wave:.24,freq:.48,phase:.7,width:.48,left:-14,right:14,weight:1},{base:2.15,slope:-.45,curve:-.028,wave:.32,freq:.64,phase:1.2,width:.43,left:-14,right:-1.2,weight:.83},{base:-.3,slope:.34,curve:-.041,wave:.28,freq:.57,phase:-.8,width:.36,left:2.8,right:14,weight:.72}],Wt=(e,t)=>e.base+e.slope*t+e.curve*t*t+e.wave*Math.sin(t*e.freq+e.phase),Gt=(e,t)=>we(e.left,e.left+1.8,t)*(1-we(e.right-1.8,e.right,t)),z=e=>Number.isInteger(e)?e.toFixed(1):String(e),Kt=Ut.map((e,t)=>`
 float galaxyCenter${t}(float x){return ${z(e.base)}+${z(e.slope)}*x+${z(e.curve)}*x*x+${z(e.wave)}*sin(x*${z(e.freq)}+${z(e.phase)});}
 float galaxyBand${t}(vec2 p,float w){float d=(p.y-galaxyCenter${t}(p.x))/(${z(e.width)}*w);
 return exp(-.5*d*d)*smoothstep(${z(e.left)},${z(e.left+1.8)},p.x)*(1.-smoothstep(${z(e.right-1.8)},${z(e.right)},p.x))*${z(e.weight)};}
`).join(`
`),qt=Kt+`
 vec2 galaxyLimits(float arm){
 ${Ut.map((e,t)=>`if(arm<${z(t+.5)})return vec2(${z(e.left)},${z(e.right)});`).join(`
`)}
 return vec2(-14.,14.);
 }
 float flowingCenter(float arm,float x){
 if(arm<.5)return galaxyCenter0(x);
 if(arm<1.5)return galaxyCenter1(x);
 return galaxyCenter2(x);
 }
 vec3 galaxyAdvect(vec3 p,float center,float arm,float width,float phase){
 vec2 limits=galaxyLimits(arm);
 float x=limits.x+mod(p.x-limits.x+phase,limits.y-limits.x);
 return vec3(x,flowingCenter(arm,x)+(p.y-center)*width,p.z);
 }
 float galaxyVisibility(vec3 p,float arm){
 vec2 limits=galaxyLimits(arm);
 float ends=smoothstep(limits.x,limits.x+1.8,p.x)*(1.-smoothstep(limits.y-1.8,limits.y,p.x));
 float stage=length(vec2((p.x+.02)/2.6,(p.y-.02)/2.25));
 return ends*(.04+.96*smoothstep(.82,1.3,stage));
 }
`;function Jt(e,t,n){return .035+U.galaxyAudioFlow*(.32*e+.2*t+.16*n)}let Yt=.035;function Xt(e){let t=Jt(Y.midResp,Y.motionResp,Y.section);Yt=D(Yt,t,1.8,e),nn+=e*U.galaxyFlow*Yt}function Zt(e=0){let t=Math.random(),n=t<.57?0:t<.83?1:2,r=Ut[n],i=T(r.left,r.right),a=Wt(r,i),o=r.width*(e===2?1.9:e===0?1.1:.66),s=a+Ht()*o,c=.64+.22*Math.sin(i*1.17+r.phase)+.14*Math.sin(i*2.9),l=Math.exp(-.25*((s-a)/o)**2)*c;return{x:i,y:s,z:-5.25+T(-.48,.48),armIndex:n,centerY:a,density:Math.max(0,l)}}let Qt=new a(28,18,1,1),B=new m({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uTime:{value:0},uWidth:{value:1},uBrightness:{value:.72},uAudio:{value:0},uMid:{value:0},uHigh:{value:0}},vertexShader:`varying vec2 vUv;
 void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`precision highp float;
 varying vec2 vUv;
 uniform float uTime,uWidth,uBrightness,uAudio,uMid,uHigh;
 ${Kt}

 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
 float noise(vec2 p){
   vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
   return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
              mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
 }
 float fbm(vec2 p){
   float v=0.,a=.5;
   mat2 m=mat2(.80,.60,-.60,.80);
   for(int i=0;i<4;i++){v+=a*noise(p);p=m*p*2.03+vec2(17.1,9.2);a*=.50;}
   return v;
 }
 void main(){
   vec2 p=(vUv-.5)*vec2(28.0,18.0);
       float band=galaxyBand0(p,uWidth)+galaxyBand1(p,uWidth)+galaxyBand2(p,uWidth);
    if(band<.002) discard;


// Domain-warped fBM gives internal gas, holes and wispy ridges.
   vec2 q=p*.34-vec2(uTime*.34,uTime*.018);
   vec2 warp=vec2(fbm(q+vec2(2.7,8.1)),fbm(q+vec2(9.2,1.4)))-.5;
   float n=fbm(q+warp*1.85);
   float n2=fbm(q*2.25-warp*.85);
   float ridge=1.-abs(n2*2.-1.);
   float matter=smoothstep(.31,.78,n*.72+ridge*.28);

       vec2 stageP=vec2((p.x+.02)/2.6,(p.y-.02)/2.25);
    float stageKeep=.04+.96*smoothstep(.82,1.3,length(stageP));
    float dustLane=smoothstep(.40,.63,n2);
    float dens=band*matter*(.22+.78*dustLane)*stageKeep;
    float outer=band*fbm(q*.72+3.7)*.09*stageKeep;
    dens+=outer;
    dens*=1.-smoothstep(12.0,14.0,abs(p.x));


// Matter-dependent palette, not random RGB.
   vec3 violet=vec3(.20,.18,.48);
   vec3 blue=vec3(.20,.38,.72);
   vec3 pearl=vec3(.92,.72,.49);
   vec3 rose=vec3(.55,.23,.43);
   float warmMask=smoothstep(.57,.82,fbm(q*1.55+12.));
   float roseMask=smoothstep(.70,.90,fbm(q*1.90-7.));
   vec3 col=mix(violet,blue,smoothstep(.30,.75,n));
   col=mix(col,pearl,warmMask*.34);
   col=mix(col,rose,roseMask*.18);

   float audioGain=1.+uAudio*.12+uMid*.08;
   float alpha=dens*uBrightness*audioGain;
   if(alpha<.006)discard;
   gl_FragColor=vec4(col*(.72+dens*.85+uHigh*.035),alpha*.48);
 }`}),$t=new r(Qt,B);$t.position.z=-5.25,$t.renderOrder=-5,x.add($t);function en(e,t,n,r){let i=new y,a=new Float32Array(e*3),o=new Float32Array(e*3),s=new Float32Array(e),c=new Float32Array(e),l=new Float32Array(e),u=new Float32Array(e);for(let r=0;r<e;r++){let e=Zt(t);l[r]=e.centerY,u[r]=e.armIndex,a[r*3]=e.x,a[r*3+1]=e.y,a[r*3+2]=e.z;let i,d=Math.random();i=t===2?d<.72?R[2]:d<.9?R[1]:R[3]:t===1?d<.38?R[0]:d<.7?R[4]:d<.88?R[1]:R[3]:d<.55?R[4]:d<.78?R[1]:d<.92?R[0]:R[2];let f=(.18+.82*Math.random()**(t===1?1.35:2.25))*e.density;o[r*3]=i.r*f,o[r*3+1]=i.g*f,o[r*3+2]=i.b*f,s[r]=(.52+Math.random()**(t===1?3:4.2)*(t===1?4.8:2.8))*n,c[r]=Math.random()*100}i.setAttribute(`position`,new _(a,3)),i.setAttribute(`color`,new _(o,3)),i.setAttribute(`aSize`,new _(s,1)),i.setAttribute(`aSeed`,new _(c,1)),i.setAttribute(`aCenter`,new _(l,1)),i.setAttribute(`aArm`,new _(u,1));let d=new m({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,vertexColors:!0,uniforms:{uTime:{value:0},uBrightness:{value:1},uWidth:{value:1},uFlowTime:{value:0},uPixelScale:{value:1},uAudio:{value:0},uHigh:{value:0},uOpacity:{value:r}},vertexShader:`attribute float aSize,aSeed,aCenter,aArm;varying vec3 vColor;varying float vA;
  uniform float uTime,uWidth,uFlowTime,uPixelScale,uAudio,uHigh;
  ${qt}
  void main(){
   vec3 p=galaxyAdvect(position,aCenter,aArm,uWidth,uFlowTime);
   vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
   gl_PointSize=max(1.0,(1.0+aSize*(1.0+uHigh*.28))*min(2.8,12.0/-mv.z)*uPixelScale);
   vColor=color;vA=(.72+.28*sin(uTime*(.24+fract(aSeed)*.72)+aSeed))*(1.+uAudio*.06)*galaxyVisibility(p,aArm);
  }`,fragmentShader:`varying vec3 vColor;varying float vA;uniform float uBrightness,uOpacity;
  void main(){vec2 q=gl_PointCoord-.5;float r=length(q);
   float core=1.0-smoothstep(.035,.38,r);float halo=exp(-r*r*14.);
   float a=(core*.74+halo*.25)*vA*uBrightness*uOpacity;if(a<.005)discard;
   gl_FragColor=vec4(vColor*(1.0+halo*.54),a);}`}),f=new v(i,d);return f.renderOrder=-2,f.frustumCulled=!1,x.add(f),{pts:f,mat:d,count:e,gain:t===1?1.06:t===0?.76:.34}}let tn=[en(19e3,0,.56,.34),en(7200,1,1.12,.76),en(13500,2,.32,.09)],nn=0;function rn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,241,220,.20)`),n.addColorStop(.22,`rgba(154,181,255,.13)`),n.addColorStop(.52,`rgba(118,92,210,.065)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new ne(e);return r.colorSpace=f,r}let an=rn(),on=new ce;on.renderOrder=-3,x.add(on);for(let e=0;e<18;e++){let t=Zt(2),n=0;for(;t.density<.24&&n++<40;)t=Zt(2);let r=[9406207,7445759,16757895,14847415],i=new ie({map:an,color:r[e%r.length],transparent:!0,opacity:(.018+Math.random()*.032)*Math.min(1,t.density*1.6),depthWrite:!1,blending:2}),a=new ee(i);a.position.set(t.x,t.y,t.z-.2);let o=1.5+Math.random()*2.4;a.scale.set(o*(1.2+Math.random()),o*(.48+Math.random()*.42),1),a.material.rotation=-.18+Math.sin(t.x*.43)*.12+Ht()*.18,a.userData.baseOpacity=i.opacity,a.userData.centerY=t.centerY,a.userData.baseY=t.y,a.userData.baseX=t.x,a.userData.armIndex=t.armIndex,on.add(a)}let V=new ce;V.renderOrder=-1,x.add(V);let sn=[16766890,13229311,10397183,16033734,16777215];for(let e=0;e<16;e++){let e=Zt(1),t=0;for(;e.density<.34&&t++<24;)e=Zt(1);let n=110+(Math.random()*170|0),r=new Float32Array(n*3),i=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(n),s=new Float32Array(n),c=new Float32Array(n),l=.18+Math.random()*.34,u=.1+Math.random()*.25;for(let t=0;t<n;t++){r[t*3]=e.x+Ht()*l,r[t*3+1]=e.y+Ht()*u,r[t*3+2]=e.z+(Math.random()-.5)*.7,s[t]=Wt(Ut[e.armIndex],r[t*3]),c[t]=e.armIndex;let n=new h(sn[Math.random()*sn.length|0]),d=.5+.5*Math.random()**1.7;i[t*3]=n.r*d,i[t*3+1]=n.g*d,i[t*3+2]=n.b*d,a[t]=.9+Math.random()**3.1*4.6,o[t]=Math.random()*100}let d=new y;d.setAttribute(`position`,new _(r,3)),d.setAttribute(`color`,new _(i,3)),d.setAttribute(`aSize`,new _(a,1)),d.setAttribute(`aSeed`,new _(o,1)),d.setAttribute(`aCenter`,new _(s,1)),d.setAttribute(`aArm`,new _(c,1));let f=new v(d,new m({transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,uniforms:{uTime:{value:0},uAudio:{value:0},uFlowTime:{value:0},uWidth:{value:1},uBrightness:{value:1},uPixelScale:{value:1}},vertexShader:`attribute float aSize,aSeed,aCenter,aArm;varying vec3 vColor;varying float vA;uniform float uTime,uAudio,uFlowTime,uWidth,uPixelScale;
  ${qt}
  void main(){vec3 p=galaxyAdvect(position,aCenter,aArm,uWidth,uFlowTime);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
   gl_PointSize=max(1.,(1.+aSize*(1.+uAudio*.16))*min(2.8,10.0/-mv.z)*uPixelScale);
   vColor=color;vA=(.72+.28*sin(uTime*(.28+fract(aSeed)) + aSeed))*galaxyVisibility(p,aArm);}`,fragmentShader:`varying vec3 vColor;varying float vA;uniform float uBrightness;
  void main(){vec2 q=gl_PointCoord-.5;float r=length(q);float a=(1.-smoothstep(.03,.42,r))*vA;
   if(a<.01)discard;gl_FragColor=vec4(vColor*(1.1+exp(-r*r*18.)*.7),a*.82*uBrightness);}`}));f.frustumCulled=!1,V.add(f)}{let e=[...V.children],t=e.reduce((e,t)=>e+t.geometry.attributes.position.count,0),n=new y,r=[],i=Math.max(...e.map(e=>e.geometry.attributes.position.count));for(let t=0;t<i;t++)for(let n of e)t<n.geometry.attributes.position.count&&r.push([n,t]);for(let i of[`position`,`color`,`aSize`,`aSeed`,`aCenter`,`aArm`]){let a=e[0].geometry.attributes[i].itemSize,o=new Float32Array(t*a);for(let e=0;e<r.length;e++){let[t,n]=r[e],s=t.geometry.attributes[i].array;for(let t=0;t<a;t++)o[e*a+t]=s[n*a+t]}n.setAttribute(i,new _(o,a))}let a=e[0].material;for(let t of e)t.geometry.dispose(),t.material!==a&&t.material.dispose(),V.remove(t);let o=new v(n,a);o.frustumCulled=!1,V.add(o)}let cn=1800,ln=new y,un=new Float32Array(cn*3),dn=O.attributes.normal,H=O.attributes.position,fn=[],pn=0;for(let e=0;e<H.count;e+=3){if(dn.getZ(e)<.999||dn.getZ(e+1)<.999||dn.getZ(e+2)<.999)continue;let t=H.getX(e),n=H.getY(e),r=H.getX(e+1),i=H.getY(e+1),a=H.getX(e+2),o=H.getY(e+2),s=Math.abs((r-t)*(o-n)-(i-n)*(a-t))*.5;s<1e-10||(pn+=s,fn.push({i:e,end:pn}))}for(let e=0;e<cn;e++){let t=Math.random()*pn,n=0,r=fn.length-1;for(;n<r;){let e=n+r>>1;fn[e].end<t?n=e+1:r=e}let i=fn[n].i,a=Math.sqrt(Math.random()),o=Math.random(),s=[1-a,a*(1-o),a*o];for(let t=0;t<3;t++)un[e*3]+=H.getX(i+t)*s[t],un[e*3+1]+=H.getY(i+t)*s[t],un[e*3+2]+=H.getZ(i+t)*s[t];un[e*3+2]+=.007}ln.setAttribute(`position`,new _(un,3));let mn=new o({map:ke,color:16768941,size:.013,transparent:!0,opacity:.3,depthWrite:!1,blending:2,sizeAttenuation:!0}),hn=new v(ln,mn);k.add(hn);let gn={x:0,y:0};b(C.domElement,`pointermove`,e=>{let t=C.domElement.getBoundingClientRect();gn.x=(e.clientX-t.left)/t.width*2-1,gn.y=-((e.clientY-t.top)/t.height*2-1)});let _n={exposure:.9,coreBrightness:1,innerGlow:1,outerGlow:1,bloomStrength:.16,bloomRadius:.28,bloomThreshold:.82,aura:.012,starBrightness:1.8,particleSize:1,dustBrightness:1.8,galaxyBrightness:1.28,galaxyDensity:1.45,galaxyWidth:1.12,galaxyFlow:1,galaxyAudioFlow:1,pearlTexture:1.25,nebulaBrightness:.82,fallRate:1.15,fallSpeed:1,fallTrail:1.18,audioDrive:1,bassResponse:1,beatResponse:1,colorReactivity:1,saturationBoost:1,colorLerpSpeed:1,spatialResponse:1,characterVisible:!0,characterX:.305529,characterY:-2.0867,characterZ:.765,characterScale:1.35,characterRotation:.04,characterDrag:!1,characterAspect:1,characterAspectAuto:!0,showMeter:!1},U={..._n};function W(){C.toneMappingExposure=U.exposure,Se.radius=U.bloomRadius,Se.threshold=U.bloomThreshold,I.uniforms.uBodyHDR.value=U.coreBrightness,I.uniforms.uInnerGlow.value=U.innerGlow,I.uniforms.uOuterGlow.value=U.outerGlow}function vn(){for(let[e]of rt)e.mat.uniforms.uStarGain.value=Math.max(.12,1+(U.starBrightness-1)*e.brightnessWeight)}this.guiContainer=he(`Animation69-gui-container`),ge(`Animation69-gui-container`),document.body.appendChild(this.guiContainer);let G=new pe({title:`梦幻月牙`,container:this.guiContainer});this.gui=G,G.add(U,`exposure`,.6,1.4,.01).name(`整体曝光`).onChange(W),G.add(U,`coreBrightness`,.55,1.5,.01).name(`暖月核心亮度`).onChange(W),G.add(U,`innerGlow`,0,1.8,.01).name(`弧面深度`).onChange(W),G.add(U,`outerGlow`,0,1.6,.01).name(`边缘柔光`).onChange(W);let yn=G.addFolder(`泛光效果`);yn.add(U,`bloomStrength`,0,1.8,.01).name(`泛光强度`),yn.add(U,`bloomRadius`,0,1,.01).name(`泛光范围`).onChange(W),yn.add(U,`bloomThreshold`,0,1.4,.01).name(`泛光阈值`).onChange(W),G.add(U,`aura`,0,.03,.001).name(`月牙光晕`),G.add(U,`starBrightness`,.2,3,.01).name(`星星亮度`).onChange(vn),G.add(U,`particleSize`,.4,2.5,.01).name(`粒子大小`).onChange(Zn),G.add(U,`dustBrightness`,0,3,.01).name(`星尘亮度`);let K=G.addFolder(`银河构图`);K.add(U,`galaxyBrightness`,0,2.5,.01).name(`银河亮度`),K.add(U,`galaxyDensity`,0,2,.01).name(`银河星点密度`),K.add(U,`galaxyWidth`,.4,1.8,.01).name(`银河宽度`),K.add(U,`galaxyFlow`,0,2,.01).name(`银河流动速度`),K.add(U,`galaxyAudioFlow`,0,2,.01).name(`音乐推动流动`),K.add(U,`pearlTexture`,0,2,.01).name(`月牙珍珠质感`),K.add(U,`nebulaBrightness`,0,2,.01).name(`星云柔光`);let bn=G.addFolder(`坠星`);bn.add(U,`fallRate`,0,3,.01).name(`坠星频率`),bn.add(U,`fallSpeed`,0,2,.01).name(`坠星速度`),bn.add(U,`fallTrail`,0,2,.01).name(`拖尾长度`);let xn=new l,Sn=new t,Cn=new d,wn=new g,Tn=new g,En=new g,Dn=!1;function On(e){let t=C.domElement.getBoundingClientRect();Sn.x=(e.clientX-t.left)/t.width*2-1,Sn.y=-((e.clientY-t.top)/t.height)*2+1,xn.setFromCamera(Sn,S)}function kn(){jn.updateDisplay(),Mn.updateDisplay(),Nn.updateDisplay(),Pn.updateDisplay(),Fn.updateDisplay()}b(C.domElement,`pointerdown`,e=>{if(!U.characterDrag||!U.characterVisible||(On(e),!xn.intersectObject(Fe,!1)[0]))return;Dn=!0,C.domElement.setPointerCapture?.(e.pointerId),A.getWorldPosition(En);let t=new g;S.getWorldDirection(t),Cn.setFromNormalAndCoplanarPoint(t,En),xn.ray.intersectPlane(Cn,wn)&&Tn.copy(En).sub(wn),e.preventDefault()}),b(C.domElement,`pointermove`,e=>{if(!Dn||(On(e),!xn.ray.intersectPlane(Cn,wn)))return;wn.add(Tn);let t=k.worldToLocal(wn.clone());U.characterX=n.clamp(t.x,-2.5,2.5),U.characterY=n.clamp(t.y,-2.5,2),F(),kn(),e.preventDefault()});function An(e){Dn&&(Dn=!1,C.domElement.releasePointerCapture?.(e.pointerId))}b(C.domElement,`pointerup`,An),b(C.domElement,`pointercancel`,An);let q=G.addFolder(`人物`);q.add(U,`characterVisible`).name(`显示人物`).onChange(F);let jn=q.add(U,`characterX`,-2.5,2.5,.01).name(`人物 X`).onChange(F),Mn=q.add(U,`characterY`,-2.5,2,.01).name(`人物 Y`).onChange(F),Nn=q.add(U,`characterZ`,.05,.8,.005).name(`人物 Z / 前后`).onChange(F),Pn=q.add(U,`characterScale`,.35,2,.01).name(`人物缩放`).onChange(F),Fn=q.add(U,`characterRotation`,-.6,.6,.005).name(`人物旋转`).onChange(F);q.add(U,`characterDrag`).name(`鼠标拖动人物`),U.上传人物图片=()=>M.click(),q.add(U,`上传人物图片`),q.add(U,`characterAspectAuto`).name(`上传后自动宽高比`).onChange(e=>{e&&Ve(P||j)});let In=q.add(U,`characterAspect`,.2,3,.01).name(`人物宽高比`).onChange(Be);U.恢复默认人物=()=>{++Re,M.value=``,N&&=(URL.revokeObjectURL(N),null),P&&=(P.dispose(),null),ze=1,U.characterAspect=1,U.characterAspectAuto=!0,He(j,!1),Be(),G.controllersRecursive().forEach(e=>e.updateDisplay())},q.add(U,`恢复默认人物`),q.open();let J=G.addFolder(`音频驱动`);J.add(U,`audioDrive`,0,2,.01).name(`音频驱动强度`),J.add(U,`bassResponse`,0,2,.01).name(`月牙低频呼吸`),J.add(U,`beatResponse`,0,2,.01).name(`节拍冲击`),J.add(U,`colorReactivity`,0,3,.05).name(`音频变色强度`),J.add(U,`saturationBoost`,0,3,.05).name(`低频饱和增强`),J.add(U,`colorLerpSpeed`,.01,3,.05).name(`变色响应速度`),J.add(U,`spatialResponse`,0,2,.05).name(`星场空间张力`),U.重置参数=()=>{Object.assign(U,_n),P&&U.characterAspectAuto&&(U.characterAspect=ze),zn(),Bn=0,Q=0,X=0,Z=0,W(),vn(),F(),Be(),G.controllersRecursive().forEach(e=>e.updateDisplay()),kn()},G.close(),G.hide(),this.settingsButton=me(`Animation69-settings-button`),b(this.settingsButton,`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?(G.open(),G.show()):G.hide()}),document.body.appendChild(this.settingsButton),W(),vn(),F(),Be();let Ln=null,Y={active:!1,bass:0,mid:0,high:0,brightness:0,motion:0,bassResp:0,midResp:0,highResp:0,brightResp:0,motionResp:0,rms:0,section:0,kick:0,snare:0,hihat:0,downbeat:0,impact:0,accent:0,snarePulse:0,hihatPulse:0},X=0,Z=0,Rn={textContent:``};function zn(){Y.active=!1;for(let e of Object.keys(Y))e!==`active`&&(Y[e]=0)}let Bn=0,Q=0,Vn=0,Hn=0,Un=0,Wn=0,Gn=0,Kn=0,qn=0;function Jn(e){let t=!!Ln?.isPlaying;Y.active=t;let n=Ln?.audioFeature,r=t?n?.animation:null,i=e=>r?E((r[e]??0)*U.audioDrive):0;Y.bass=D(Y.bass,i(`bass`),6,e),Y.mid=D(Y.mid,i(`mid`),5,e),Y.high=D(Y.high,i(`high`),8,e),Y.brightness=D(Y.brightness,i(`brightness`),4,e),Y.motion=D(Y.motion,i(`motion`),4,e),Y.bassResp=Te(Y.bass),Y.midResp=Te(Y.mid),Y.highResp=Te(Y.high),Y.brightResp=Te(Y.brightness),Y.motionResp=Te(Y.motion);let a=t?E((n?.energy?.rms??0)*3*U.audioDrive):0;Y.rms=D(Y.rms,a,6,e),X=D(X,Y.rms,.45,e);let o=E((Y.rms-X*.92)/Math.max(.06,X*.55));Y.section=D(Y.section,E(X*.45+o*.55),1.6,e);let s=t?E((Y.section*.88+Y.motionResp*.12)*U.spatialResponse):0;Z=D(Z,s,s>Z?.34:.2,e),r?(Y.kick=i(`kick`),Y.snare=i(`snare`),Y.hihat=i(`hihat`),Y.downbeat=i(`downbeat`)):Y.kick=Y.snare=Y.hihat=Y.downbeat=0,Y.snarePulse=Math.max(Y.snarePulse,Y.snare*U.beatResponse),Y.hihatPulse=Math.max(Y.hihatPulse,Y.hihat*U.beatResponse),Y.accent=Math.max(Y.accent,Y.kick*.85,Y.snare*.65,Y.hihat*.45),Y.snarePulse*=Math.exp(-7*e),Y.hihatPulse*=Math.exp(-10*e),Y.accent*=Math.exp(-6*e),t&&(Bn+=e*(.3+Y.midResp*2.4)*U.colorLerpSpeed);let c=Math.sin(Bn)*Y.midResp,l=t?(c*.1+Y.midResp*.3+Y.highResp*.12)*U.colorReactivity:0;Q=D(Q,l,t?3:5.5,e)}function Yn(e){if(Gn=Math.max(0,Gn-e),Kn=Math.max(0,Kn-e),qn=Math.max(0,qn-e),!Y.active){Vn=Hn=Un=Wn=0,Y.impact*=Math.exp(-7*e);return}let t=Y.kick,n=Y.snare,r=Y.hihat,i=Y.downbeat;Gn<=0&&t>.15&&t>Vn+.03?(Y.impact=Math.max(Y.impact,Math.min(1,t*.92+i*.35)),Gn=.12):Gn<=0&&i>.18&&i>Wn+.04&&(Y.impact=Math.max(Y.impact,Math.min(1,i*1.1)),Gn=.16),Kn<=0&&n>.14&&n>Hn+.03&&(lt(`snare`,n),Kn=.09),qn<=0&&r>.12&&r>Un+.025&&(lt(`hihat`,r),qn=.06),Y.impact*=Math.exp(-7*e),Vn=t,Hn=n,Un=r,Wn=i}let Xn=1e3;function Zn(){let e=C.getSize(new t).y;Xn=e*C.getPixelRatio()*U.particleSize/Math.max(.05,2*Math.tan(n.degToRad(S.fov)/2));for(let[e]of rt)e.mat.uniforms.uSizeScale.value=Xn;let r=e*C.getPixelRatio()*U.particleSize/900;for(let e of tn)e.mat.uniforms.uPixelScale.value=r;for(let e of V.children)e.material.uniforms.uPixelScale.value=r}Zn();function Qn(e){let t=Y.highResp*.6+Y.hihatPulse*.45,n=Y.highResp;for(let[r,i,a,o,s]of rt){let c=r.mat.uniforms;c.uTime.value=e,c.uHueShift.value=Q+a,c.uChromaGain.value=1+Y.bassResp*1.3*U.saturationBoost*i,c.uLightGain.value=1+(Y.brightResp-.5)*.3*i,c.uAccent.value=E(Y.accent*i),c.uTwinkle.value=t*i,c.uSizeBoost.value=n*i,c.uGlowGain.value=1+Y.section*.26*i,c.uSpatialTension&&(c.uSpatialTension.value=Z),c.uSpatialWeight&&(c.uSpatialWeight.value=o),c.uDepthWeight&&(c.uDepthWeight.value=s)}}function $n(){let e=E(Y.bassResp*U.bassResponse),t=E(Y.impact*U.beatResponse);I.uniforms.uBass.value=e,I.uniforms.uImpact.value=t;let r=n.clamp(Q/.5,-1,1),i=Math.abs(r);return I.uniforms.uMoonTint.value.setRGB(1+i*(r>=0?.055:-.045),1+i*(r>=0?0:-.005),1+i*(r>=0?-.07:.075)),{mr:e,mi:t}}let $={bass:[],mid:[],high:[],impact:[]},er=0,tr=0;function nr(e){if(er+=e,er>=.25){er=0;let e=(e,t)=>{e.push(t),e.length>32&&e.shift()};e($.bass,Y.bassResp),e($.mid,Y.midResp),e($.high,Y.highResp),e($.impact,Y.impact)}if(!U.showMeter){Rn.textContent&&=``;return}if(tr++%6!=0)return;let t=e=>e.length?Math.min(...e).toFixed(2)+`~`+Math.max(...e).toFixed(2):`--`;Rn.textContent=`低频`+t($.bass)+` 中频`+t($.mid)+` 高频`+t($.high)+` 段落`+Y.section.toFixed(2)+` 空间`+Z.toFixed(2)+` 冲击`+t($.impact)+` 色相`+(Q*360).toFixed(0)+`°`}F();let rr=0,ir=performance.now();function ar(){let e=performance.now(),t=Math.min(Math.max((e-ir)/1e3,0),.1);ir=e,rr+=t;let r=rr;Jn(t),Yn(t),Ee.uniforms.uTime.value=r,Ee.uniforms.uAmbience.value=Y.section,I.uniforms.uTime.value=r;let{mr:i,mi:a}=$n();Qn(r),ut(t,r),Vt(t);for(let e of it){let t=.5+.5*Math.sin(r*1.05+e.phase);e.s.scale.setScalar(e.size*U.particleSize*(.97+t*.17+Y.snarePulse*.22+Y.hihatPulse*.1));let i=n.clamp(.8+U.starBrightness/3*.55,.8,1.35);e.mat.opacity=Math.min(.94,(.34+t*.36+Y.snarePulse*.2+Y.hihatPulse*.14)*i),e.s.position.x=e.x+Math.sin(r*.13+e.phase)*.065,e.s.position.y=e.y+Math.cos(r*.1+e.phase)*.045}let o=.5+.5*Math.sin(r*.5);k.scale.setScalar(1.16*(.998+o*.004+i*.005+a*.006)),k.rotation.z=Math.sin(r*.11)*.004;let s=.5+.5*Math.sin(r*.42+.4);We.opacity=U.aura*(.76+s*.44+i*.55+a*2.6);let c=1.018+s*.008+i*.006+a*.02;Ge.scale.set(c,c,1.05);let l=.65+U.dustBrightness*.35;Xe.rotation.z+=t*(.006+Y.motionResp*.006),Ye.opacity=Math.min(.68,(.3+s*.075+Y.highResp*.34)*l),Ye.size=(.018+Y.highResp*.006)*U.particleSize,mt.opacity=Math.min(.42,.15*(.55+U.dustBrightness*.45)*(1+Y.section*.25)),mt.size=.012*U.particleSize,ht.rotation.z+=t*(.0045+Y.motionResp*.006),ht.position.y=Math.sin(r*.06)*.025;let u=Y.section*.62+Y.motionResp*.38;Xt(t);for(let e of tn)e.mat.uniforms.uTime.value=r,e.mat.uniforms.uFlowTime.value=nn,e.mat.uniforms.uBrightness.value=U.galaxyBrightness*e.gain,e.mat.uniforms.uWidth.value=U.galaxyWidth,e.mat.uniforms.uAudio.value=u,e.mat.uniforms.uHigh.value=Y.highResp,e.pts.geometry.setDrawRange(0,Math.floor(e.count*U.galaxyDensity/2));B.uniforms.uTime.value=nn,B.uniforms.uWidth.value=U.galaxyWidth,B.uniforms.uBrightness.value=U.galaxyBrightness*U.nebulaBrightness*.72,B.uniforms.uAudio.value=u,B.uniforms.uMid.value=Y.midResp,B.uniforms.uHigh.value=Y.highResp;for(let e of on.children){let t=e.userData,r=Ut[t.armIndex];e.position.x=r.left+n.euclideanModulo(t.baseX-r.left+nn,r.right-r.left),e.position.y=Wt(r,e.position.x)+(t.baseY-t.centerY)*U.galaxyWidth;let i=Math.hypot((e.position.x+.02)/2.6,(e.position.y-.02)/2.25),a=Gt(r,e.position.x)*(.04+.96*we(.82,1.3,i));e.material.opacity=e.userData.baseOpacity*U.galaxyBrightness*U.nebulaBrightness*(.82+u*.22)*a}for(let e of V.children)e.material.uniforms.uTime.value=r,e.material.uniforms.uFlowTime.value=nn,e.material.uniforms.uAudio.value=Y.highResp*.55+Y.impact*.3,e.material.uniforms.uBrightness.value=U.galaxyBrightness,e.material.uniforms.uWidth.value=U.galaxyWidth,e.geometry.setDrawRange(0,Math.floor(e.geometry.attributes.position.count*U.galaxyDensity/2));I.uniforms.uPearl.value=U.pearlTexture,mn.opacity=Math.min(.52,U.pearlTexture*(.23+.06*Y.highResp)),mn.size=(.01+.005*U.pearlTexture+.003*Y.highResp)*U.particleSize,Se.strength=Math.min(1.6,U.bloomStrength*(1+Y.section*.22)+a*.055);let d=gn.x*.075,f=.12+gn.y*.055;S.position.x=D(S.position.x,d,1.09,t),S.position.y=D(S.position.y,f,1.09,t),S.lookAt(-.08,.07,0),nr(t),w.render()}this.scene=x,this.renderer=C,this.composer=w,this.externalBackgroundEnabled=!1,this.setExternalBackgroundEnabled=e=>{this.externalBackgroundEnabled=e,De.visible=!e},this._frame=ar,this._setAudioData=e=>{Ln=e},this._normalizePortrait=()=>{!P&&U.characterAspectAuto&&(U.characterAspect=1,Be(),In.updateDisplay())},this._clearAudio=()=>{Ln=null,zn(),X=0,Z=0,Bn=0,Q=0},this._resize=()=>{xe(),C.setPixelRatio(Math.min(devicePixelRatio,2)),C.setSize(innerWidth,innerHeight),w.setPixelRatio(C.getPixelRatio()),w.setSize(innerWidth,innerHeight),Ee.uniforms.uResolution.value.set(innerWidth,innerHeight),Zn()},this._disposeScene=()=>{++Re,N&&URL.revokeObjectURL(N),M.remove();let e=new Set,t=new Set,n=new Set([ke,j,P]);x.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])t.add(e)});for(let t of e)t.dispose();for(let e of t)e.map&&n.add(e.map),e.dispose();for(let e of n)e?.dispose();w.dispose(),C.dispose()}}updateWithAudioData(e){this._setAudioData?.(e)}render(){this._disposed||this._frame?.()}onWindowResize(){this._resize?.()}resetState(){this._clearAudio?.()}endGuiPreferencesLoad(e=!0){e&&this._normalizePortrait?.()}dispose(){if(!this._disposed){this._disposed=!0;for(let[e,t,n]of this._listeners)e.removeEventListener(t,n);this._listeners=[],b(this.settingsButton,this.guiContainer,this.gui),this._disposeScene?.()}}};export{x as default};