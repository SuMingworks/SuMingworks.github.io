import{At as e,B as t,Et as n,Jt as r,Kt as i,L as a,Nr as o,Pr as s,Vn as c,X as l,Xt as u,Zt as d,ar as f,bt as p,d as m,dr as ee,er as te,fr as ne,ft as re,gr as ie,jt as ae,m as oe,mt as se,nr as ce,qt as le,r as ue,rr as h,u as g,v as _,vt as de}from"./three.module-CI1jJgD_.js";import{n as fe,r as pe,t as me}from"./OutputPass-D7sfcF5T.js";import{a as he,i as ge,n as v,r as _e,t as ve}from"./GUIHelper-DNd0uFVI.js";import{t as ye}from"./UnrealBloomPass-afIQHt-X.js";import{a as be,f as xe}from"./PerceptualColor-5EYeXve1.js";var Se=`/assets/visualizations/animation69/dream-crescent-portrait.png`,y=class{constructor(e){this.canvas=e,this.gui=null,this.guiContainer=null,this.settingsButton=null,this.guiVisible=!1,this._disposed=!1,this._listeners=[],this.init()}init(){let v=(e,t,n)=>{e.addEventListener(t,n),this._listeners.push([e,t,n])},y=new ce,b=new i(48,innerWidth/innerHeight,.1,100);b.position.set(0,.12,10.2),b.lookAt(-.08,.08,0);function Ce(){let e=innerWidth/innerHeight;b.aspect=e,b.fov=n.radToDeg(2*Math.atan(Math.tan(n.degToRad(48)/2)*Math.max(1,.78/e))),b.updateProjectionMatrix()}Ce();let x=new ue({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`});x.setSize(innerWidth,innerHeight),x.setPixelRatio(Math.min(devicePixelRatio,2)),x.outputColorSpace=te,x.toneMapping=4,x.toneMappingExposure=1,x.setClearColor(0,0),this.canvas.style.backgroundColor=`transparent`;let S=new pe(x);S.addPass(new fe(y,b));let we=new ye(new o(innerWidth,innerHeight),.82,.48,.68);S.addPass(we),S.addPass(new me);let C=(e,t)=>e+Math.random()*(t-e),w=e=>e<0?0:e>1?1:e,T=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r)),Te=(e,t,n)=>w((e-t)/Math.max(1e-6,n-t)),Ee=(e,t,n)=>{let r=t-e,i=w((n-e)/(Math.abs(r)<1e-6?1e-6:r));return i*i*(3-2*i)},De=e=>{let t=Te(e,.2,.82);return t*t*(3-2*t)},Oe=new h({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uResolution:{value:new o(innerWidth,innerHeight)},uAmbience:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.999,1.);}`,fragmentShader:`
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
 }`}),ke=new e(new r(2,2),Oe);ke.frustumCulled=!1,ke.renderOrder=-100,y.add(ke);function Ae(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,255,255,.6)`),n.addColorStop(.2,`rgba(255,255,255,.13)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),t.save(),t.translate(64,64),t.beginPath();for(let e=0;e<8;e++){let n=-Math.PI/2+e*Math.PI/4,r=e%2?5:42,i=Math.cos(n)*r,a=Math.sin(n)*r;e?t.lineTo(i,a):t.moveTo(i,a)}t.closePath(),t.fillStyle=`rgba(255,255,255,.95)`,t.fill(),t.restore();let r=new oe(e);return r.colorSpace=te,r}let je=Ae();function Me(){let e=new f,t=2.12,r=1.7,i=-.14,a=.59,s=n.degToRad(60),c=n.degToRad(300),l=n.degToRad(292),u=n.degToRad(68),d=new o(i+Math.cos(s)*t,Math.sin(s)*t),p=new o(i+Math.cos(c)*t,Math.sin(c)*t),m=new o(a+Math.cos(l)*r,Math.sin(l)*r);return e.moveTo(d.x,d.y),e.absarc(i,0,t,s,c,!1),e.quadraticCurveTo(p.x+.1,p.y+.015,m.x,m.y),e.absarc(a,0,r,l,u,!0),e.quadraticCurveTo(d.x+.1,d.y-.015,d.x,d.y),e.closePath(),e}let E=new t(Me(),{depth:.16,bevelEnabled:!0,bevelSegments:8,bevelSize:.045,bevelThickness:.038,curveSegments:128,steps:1});E.computeBoundingBox();let Ne=E.boundingBox.getCenter(new s);E.translate(-Ne.x,-Ne.y,-Ne.z);let D=new l;D.position.set(-.18,.02,.05),D.rotation.y=-.035;let O=new l;O.name=`MoonCharacterRig`,D.add(O);let Pe=new ie,k=Pe.load(Se);k.colorSpace=te,k.minFilter=p,k.magFilter=de,k.generateMipmaps=!0;let Fe=new ae({map:k,transparent:!0,alphaTest:.018,depthWrite:!1,depthTest:!0,toneMapped:!1,side:2}),Ie=new r(1.42,2.15);Ie.translate(.08,.73,0);let Le=new e(Ie,Fe);Le.renderOrder=8,O.add(Le);let Re=new ae({map:k,color:16768432,transparent:!0,opacity:.025,alphaTest:.01,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:2,side:2}),ze=new e(Ie.clone(),Re);ze.position.z=-.018,ze.scale.setScalar(1.018),ze.renderOrder=7,O.add(ze);let A=document.createElement(`input`);A.type=`file`,A.accept=`image/png,image/webp,image/jpeg`,A.style.display=`none`,document.body.appendChild(A);let j=null,M=null,Be=0,Ve=1;function He(){let e=Math.max(.2,Math.min(5,H.characterAspect));Le.scale.x=e,Le.scale.y=1,ze.scale.set(1.018*e,1.018,1.018)}function Ue(e){let t=e?.image;!t?.width||!t?.height||(Ve=t.width/t.height/.6604651162790698,H.characterAspect=Ve,He(),Ln?.updateDisplay())}function We(e,t=!1){e.colorSpace=te,e.minFilter=p,e.magFilter=de,e.generateMipmaps=!0,Fe.map=e,Fe.needsUpdate=!0,Re.map=e,Re.needsUpdate=!0,t&&H.characterAspectAuto&&Ue(e)}v(A,`change`,()=>{let e=A.files?.[0];if(!e)return;let t=++Be;j&&URL.revokeObjectURL(j),j=URL.createObjectURL(e),Pe.load(j,n=>{if(t!==Be){n.dispose();return}M&&M!==n&&M.dispose(),M=n,We(n,!0),console.info(`[Portrait] loaded:`,e.name,n.image?.width+`×`+n.image?.height)},void 0,t=>console.error(`[Portrait] failed:`,e.name,t))});function N(){O.visible=H.characterVisible,O.position.set(H.characterX,H.characterY,H.characterZ),O.rotation.set(0,.018,H.characterRotation),O.scale.setScalar(H.characterScale)}y.add(D);let P=new h({uniforms:{uTime:{value:0},uGeometryCenter:{value:Ne.clone()},uPearl:{value:1},uBodyHDR:{value:1},uInnerGlow:{value:1},uOuterGlow:{value:1},uBass:{value:0},uImpact:{value:0},uMoonTint:{value:new _(1,1,1)}},vertexShader:`
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
 }`}),Ge=new e(E,P);D.add(Ge);let Ke=new ae({color:16769717,transparent:!0,opacity:.055,depthWrite:!1,blending:2,side:2}),qe=new e(E,Ke);qe.scale.set(1.035,1.035,1.05),qe.position.z=-.055,D.add(qe);let Je=new m,Ye=new Float32Array(520*3),Xe=new Float32Array(520*3),F=new _;for(let e=0;e<520;e++){let t=Math.random()*Math.PI*2,n=2.7+Math.random()**.72*3,r=.72+.2*Math.random();Ye[e*3]=Math.cos(t)*n+(Math.random()-.5)*.28,Ye[e*3+1]=Math.sin(t)*n*r+(Math.random()-.5)*.22,Ye[e*3+2]=-1.2-Math.random()*3;let i=Math.random();i<.62?F.setRGB(.42,.62,1):i<.82?F.setRGB(.28,.9,1):i<.94?F.setRGB(.7,.48,1):F.setRGB(1,.52,.76);let a=.22+Math.random()*.32;Xe[e*3]=F.r*a,Xe[e*3+1]=F.g*a,Xe[e*3+2]=F.b*a}Je.setAttribute(`position`,new g(Ye,3)),Je.setAttribute(`color`,new g(Xe,3));let Ze=new d({size:.018,vertexColors:!0,transparent:!0,opacity:.44,depthWrite:!1,blending:2,sizeAttenuation:!0}),Qe=new u(Je,Ze);y.add(Qe);let $e=[`#9db5d8`,`#7f99cc`,`#a494db`,`#70c8d9`,`#d098ba`,`#dbe7f8`],et=`
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
 }`;class tt{constructor(e){Object.assign(this,e);let t=e.count,n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),s=new Float32Array(t),c=new Float32Array(t),l=new Float32Array(t);for(let u=0;u<t;u++){let t,d,f=0;do t=C(-e.xr,e.xr),d=C(-e.yr,e.yr),f++;while(Math.hypot(t+.18,d-.02)<1.65&&f<8);n[u*3]=t,n[u*3+1]=d,n[u*3+2]=C(e.z0,e.z1);let p=xe(be($e[Math.random()*$e.length|0]));r[u*3]=p[0],r[u*3+1]=p[1],r[u*3+2]=p[2],i[u]=C(e.s0,e.s1),a[u]=Math.random()*1e3,o[u]=e.tw*C(.7,1.5),s[u]=e.drift*C(.75,1.3),c[u]=C(e.o0,e.o1),l[u]=C(.05,.15)}this.geo=new m,this.geo.setAttribute(`position`,new g(n,3)),this.geo.setAttribute(`aOklch`,new g(r,3)),this.geo.setAttribute(`aSize`,new g(i,1)),this.geo.setAttribute(`aSeed`,new g(a,1)),this.geo.setAttribute(`aTw`,new g(o,1)),this.geo.setAttribute(`aSpeed`,new g(s,1)),this.geo.setAttribute(`aOpacity`,new g(c,1)),this.geo.setAttribute(`aSway`,new g(l,1)),this.mat=new h({uniforms:{uTime:{value:0},uTex:{value:je},uSizeScale:{value:1e3},uWrap:{value:e.yr+.7},uHueShift:{value:0},uChromaGain:{value:1},uLightGain:{value:1},uAccent:{value:0},uAccentColor:{value:new _(1,.88,.66)},uTwinkle:{value:0},uSizeBoost:{value:0},uGlowGain:{value:1},uStarGain:{value:1},uSpatialTension:{value:0},uSpatialWeight:{value:1},uDepthWeight:{value:1}},vertexShader:`
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
 }`,fragmentShader:et,transparent:!0,depthWrite:!1,depthTest:!0,blending:2}),this.points=new u(this.geo,this.mat),this.points.frustumCulled=!1,y.add(this.points)}}let nt=new tt({count:540,z0:-8,z1:-4,xr:9,yr:5.5,s0:.018,s1:.055,o0:.055,o1:.24,drift:.03,tw:.48,brightnessWeight:.65}),rt=new tt({count:225,z0:-3.8,z1:-.6,xr:7.8,yr:4.8,s0:.045,s1:.125,o0:.18,o1:.55,drift:.05,tw:.78,brightnessWeight:.9}),it=new tt({count:38,z0:.2,z1:3.2,xr:6.6,yr:4.1,s0:.09,s1:.22,o0:.34,o1:.76,drift:.07,tw:1,brightnessWeight:1.1}),at=[[nt,.45,-.055,.46,.85],[rt,.75,0,.72,.62],[it,1,.055,1,.38]],ot=[];function st(e,t,n,r,i,a){let o=new ne({map:je,color:i,transparent:!0,opacity:.58,depthWrite:!1,blending:2}),s=new ee(o);s.position.set(e,t,n),s.scale.setScalar(r),y.add(s),ot.push({s,mat:o,x:e,y:t,size:r,phase:a})}st(-4.15,1.45,1.8,.36,15965141,.2),st(3.65,1.72,2.3,.3,7986687,2),st(2.85,-1.85,2,.32,10523903,4.1),st(-3.2,-2.15,1.4,.23,15267071,5.2),st(1.35,2.62,1.1,.21,16756956,3.3);let ct=[10335704,8362444,10786011,7391449,13670586,14411768],lt=new l;y.add(lt);let ut=[];for(let e=0;e<22;e++){let t=new l,n=new ee(new ne({map:je,color:ct[e%ct.length],transparent:!0,opacity:0,depthWrite:!1,blending:2})),r=new se({color:ct[(e+2)%ct.length],transparent:!0,opacity:0,depthWrite:!1,blending:2}),i=r.clone(),a=new m().setFromPoints([new s(-.09,0,0),new s(.09,0,0)]),o=new m().setFromPoints([new s(0,-.09,0),new s(0,.09,0)]),c=new re(a,r),u=new re(o,i);t.add(n,c,u);let d=Math.random()*Math.PI*2,f=2.7+Math.random()*4;t.position.set(D.position.x+Math.cos(d)*f,D.position.y+Math.sin(d)*f,.1+Math.random()*1.8),t.scale.setScalar(.28+Math.random()*.32),lt.add(t),ut.push({g:t,core:n,hl:c,vl:u,env:0,hold:0,phase:Math.random()*6.283})}function dt(e,t){let n=e===`snare`?2:1;for(let r=0;r<n;r++){let n=ut[Math.random()*ut.length|0];n.env=Math.max(n.env,Math.min(1,t*(e===`snare`?.82:.58))),n.hold=e===`snare`?.04:.018}}function ft(e,t){for(let n of ut){n.hold>0?n.hold-=e:n.env*=Math.exp(-10.5*e);let r=n.env;n.g.visible=r>.002,n.core.material.opacity=r*.72,n.hl.material.opacity=r*.32,n.vl.material.opacity=r*.32,n.g.scale.setScalar((.72+r*.48)*H.particleSize),n.g.rotation.z=Math.sin(t*.22+n.phase)*.05}}let pt=1450,mt=new Float32Array(pt*3);for(let e=0;e<pt;e++){let t,n,r=0;do t=C(-10,10),n=C(-6,6),r++;while(Math.hypot(t+.18,n-.02)<1.5&&r<6);mt[e*3]=t,mt[e*3+1]=n,mt[e*3+2]=C(-10,-5)}let ht=new m;ht.setAttribute(`position`,new g(mt,3));let gt=new d({color:7901623,size:.012,transparent:!0,opacity:.15,depthWrite:!1,blending:2}),_t=new u(ht,gt);y.add(_t);let I=new Float32Array(54),vt=new Float32Array(54),yt=new Float32Array(18),bt=new Float32Array(18);for(let e=0;e<18;e++)I[e*3+1]=999;let xt=new m,St=new g(I,3).setUsage(a),Ct=new g(yt,1).setUsage(a),wt=new g(bt,1).setUsage(a);xt.setAttribute(`position`,St),xt.setAttribute(`aOklch`,new g(vt,3)),xt.setAttribute(`aSize`,Ct),xt.setAttribute(`aAlpha`,wt);let Tt=xt.attributes.aOklch,Et=new h({uniforms:{uTex:{value:je},uSizeScale:{value:1e3},uHueShift:{value:0},uChromaGain:{value:1},uLightGain:{value:1},uAccent:{value:0},uAccentColor:{value:new _(1,.88,.66)}},vertexShader:`
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
 }`,fragmentShader:et,transparent:!0,depthWrite:!1,depthTest:!0,blending:2}),Dt=new u(xt,Et);Dt.frustumCulled=!1,y.add(Dt);let Ot=new Float32Array(324),kt=new Float32Array(216),At=new Float32Array(108),jt=[[0,-1],[0,1],[1,-1],[1,-1],[0,1],[1,1]];for(let e=0;e<18;e++)for(let t=0;t<6;t++)kt[(e*6+t)*2]=jt[t][0],kt[(e*6+t)*2+1]=(jt[t][1]+1)*.5;let Mt=new m;Mt.setAttribute(`position`,new g(Ot,3).setUsage(a)),Mt.setAttribute(`uv`,new g(kt,2)),Mt.setAttribute(`aAlpha`,new g(At,1).setUsage(a));let Nt=new e(Mt,new h({transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,vertexShader:`attribute float aAlpha;varying vec2 vUv;varying float vAlpha;
 void main(){vUv=uv;vAlpha=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;varying float vAlpha;
 void main(){
 vec2 trailUv=clamp(vUv,0.,1.);
 float crossTrail=max(0.,1.-abs(trailUv.y*2.-1.));
 float a=pow(crossTrail,1.6)*pow(max(0.,1.-trailUv.x),1.7)*clamp(vAlpha,0.,1.);
 if(!(a>=.001))discard;
 vec3 color=mix(vec3(2.5,1.65,.94),vec3(.44,.50,.95),smoothstep(.05,.8,trailUv.x));
 gl_FragColor=vec4(color,a);}`}));Nt.frustumCulled=!1,y.add(Nt);function Pt(){let e=!1;for(let t=0;t<18;t++){let n=Ft[t],r=Math.hypot(n.vx,n.vy),i=n.active&&r>1e-6?Math.min(1,n.life/.18)*(1-Ee(-.5,-3.6,n.y))*n.bright:0;e||=i>.001;let a=r>0?-n.vy/r:0,o=r>0?n.vx/r:0;for(let e=0;e<6;e++){let[r,s]=jt[e],c=t*6+e,l=n.head*.2*H.particleSize*(1-r)+5e-4;Ot[c*3]=n.x-n.vx*n.trailTime*r+a*s*l,Ot[c*3+1]=n.y-n.vy*n.trailTime*r+o*s*l,Ot[c*3+2]=n.z,At[c]=i}}Nt.visible=e,Mt.attributes.position.needsUpdate=!0,Mt.attributes.aAlpha.needsUpdate=!0}let Ft=[];for(let e=0;e<18;e++)Ft.push({active:!1,slot:e,x:0,y:0,z:0,vx:0,vy:0,life:0,maxLife:1,head:.1,trailTime:.1,bright:.7});function It(e){let t=-1;for(let e=0;e<18;e++)if(!Ft[e].active){t=e;break}if(t<0)return!1;e=w(e);let n=Ft[t];n.active=!0,n.x=C(-8,8),n.y=C(6,7.6),n.z=C(-2,1.5),n.vy=-(4+e*4)*H.fallSpeed,n.vx=-Math.abs(n.vy)*C(.85,1.3),n.life=0,n.maxLife=6.5,n.head=C(.055,.1)+e*.065,n.trailTime=(.16+e*.14)*H.fallTrail,n.bright=.55+e*.45;let r=xe(be($e[Math.random()*$e.length|0]));return vt.set(r,n.slot*3),Tt.needsUpdate=!0,!0}let Lt=0,Rt=0,zt=0,Bt=0,Vt=0;function Ht(e){Rt=Math.max(0,Rt-e);let t=!1;H.fallRate>0&&J.active&&Rt<=0&&(J.kick>.35&&J.kick>zt+.05?t=It(J.kick):J.downbeat>.4&&J.downbeat>Bt+.06&&(t=It(J.downbeat)),!t&&J.hihat>.4&&J.hihat>Vt+.06&&(t=It(J.hihat*.45)),t&&(Rt=.4)),zt=J.kick,Bt=J.downbeat,Vt=J.hihat;let n=J.active?(.12+J.section*.65+J.motionResp*.5)*H.fallRate:.07*H.fallRate;Lt+=n*e,Lt>=1&&(Lt=0,Rt<=0&&It(.2+J.section*.32)&&(Rt=.4));for(let t=0;t<18;t++){let n=Ft[t];if(!n.active){bt[t]=0;continue}if(n.life+=e,n.x+=n.vx*e,n.y+=n.vy*e,n.life>=n.maxLife||n.y<-4.2){n.active=!1,bt[t]=0,I[t*3+1]=999;continue}let r=Math.min(1,n.life/.18)*(1-Ee(-.5,-3.6,n.y));I[t*3]=n.x,I[t*3+1]=n.y,I[t*3+2]=n.z,yt[t]=n.head,bt[t]=Math.min(1,r*n.bright)}St.needsUpdate=!0,Ct.needsUpdate=!0,wt.needsUpdate=!0,Pt(),Et.uniforms.uSizeScale.value=Xn,Et.uniforms.uHueShift.value=Z,Et.uniforms.uChromaGain.value=1+J.bassResp*1.3*H.saturationBoost,Et.uniforms.uLightGain.value=1+(J.brightResp-.5)*.3,Et.uniforms.uAccent.value=w(J.accent)}let L=[new _(16767406),new _(12179711),new _(11050239),new _(16757967),new _(15988735)];function Ut(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(Math.PI*2*t)}let Wt=[{base:-3.1,slope:.015,curve:.026,wave:.24,freq:.48,phase:.7,width:.48,left:-14,right:14,weight:1},{base:2.15,slope:-.45,curve:-.028,wave:.32,freq:.64,phase:1.2,width:.43,left:-14,right:-1.2,weight:.83},{base:-.3,slope:.34,curve:-.041,wave:.28,freq:.57,phase:-.8,width:.36,left:2.8,right:14,weight:.72}],Gt=(e,t)=>e.base+e.slope*t+e.curve*t*t+e.wave*Math.sin(t*e.freq+e.phase),Kt=(e,t)=>Ee(e.left,e.left+1.8,t)*(1-Ee(e.right-1.8,e.right,t)),R=e=>Number.isInteger(e)?e.toFixed(1):String(e),qt=Wt.map((e,t)=>`
 float galaxyCenter${t}(float x){return ${R(e.base)}+${R(e.slope)}*x+${R(e.curve)}*x*x+${R(e.wave)}*sin(x*${R(e.freq)}+${R(e.phase)});}
 float galaxyBand${t}(vec2 p,float w){float d=(p.y-galaxyCenter${t}(p.x))/(${R(e.width)}*w);
 return exp(-.5*d*d)*smoothstep(${R(e.left)},${R(e.left+1.8)},p.x)*(1.-smoothstep(${R(e.right-1.8)},${R(e.right)},p.x))*${R(e.weight)};}
`).join(`
`),Jt=qt+`
 vec2 galaxyLimits(float arm){
 ${Wt.map((e,t)=>`if(arm<${R(t+.5)})return vec2(${R(e.left)},${R(e.right)});`).join(`
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
`;function Yt(e,t,n){return .035+H.galaxyAudioFlow*(.32*e+.2*t+.16*n)}let Xt=.035;function Zt(e){let t=Yt(J.midResp,J.motionResp,J.section);Xt=T(Xt,t,1.8,e),rn+=e*H.galaxyFlow*Xt}function Qt(e=0){let t=Math.random(),n=t<.57?0:t<.83?1:2,r=Wt[n],i=C(r.left,r.right),a=Gt(r,i),o=r.width*(e===2?1.9:e===0?1.1:.66),s=a+Ut()*o,c=.64+.22*Math.sin(i*1.17+r.phase)+.14*Math.sin(i*2.9),l=Math.exp(-.25*((s-a)/o)**2)*c;return{x:i,y:s,z:-5.25+C(-.48,.48),armIndex:n,centerY:a,density:Math.max(0,l)}}let $t=new r(28,18,1,1),z=new h({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uTime:{value:0},uWidth:{value:1},uBrightness:{value:.72},uAudio:{value:0},uMid:{value:0},uHigh:{value:0}},vertexShader:`varying vec2 vUv;
 void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`precision highp float;
 varying vec2 vUv;
 uniform float uTime,uWidth,uBrightness,uAudio,uMid,uHigh;
 ${qt}

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
 }`}),en=new e($t,z);en.position.z=-5.25,en.renderOrder=-5,y.add(en);function tn(e,t,n,r){let i=new m,a=new Float32Array(e*3),o=new Float32Array(e*3),s=new Float32Array(e),c=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e);for(let r=0;r<e;r++){let e=Qt(t);l[r]=e.centerY,d[r]=e.armIndex,a[r*3]=e.x,a[r*3+1]=e.y,a[r*3+2]=e.z;let i,u=Math.random();i=t===2?u<.72?L[2]:u<.9?L[1]:L[3]:t===1?u<.38?L[0]:u<.7?L[4]:u<.88?L[1]:L[3]:u<.55?L[4]:u<.78?L[1]:u<.92?L[0]:L[2];let f=(.18+.82*Math.random()**(t===1?1.35:2.25))*e.density;o[r*3]=i.r*f,o[r*3+1]=i.g*f,o[r*3+2]=i.b*f,s[r]=(.52+Math.random()**(t===1?3:4.2)*(t===1?4.8:2.8))*n,c[r]=Math.random()*100}i.setAttribute(`position`,new g(a,3)),i.setAttribute(`color`,new g(o,3)),i.setAttribute(`aSize`,new g(s,1)),i.setAttribute(`aSeed`,new g(c,1)),i.setAttribute(`aCenter`,new g(l,1)),i.setAttribute(`aArm`,new g(d,1));let f=new h({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,vertexColors:!0,uniforms:{uTime:{value:0},uBrightness:{value:1},uWidth:{value:1},uFlowTime:{value:0},uPixelScale:{value:1},uAudio:{value:0},uHigh:{value:0},uOpacity:{value:r}},vertexShader:`attribute float aSize,aSeed,aCenter,aArm;varying vec3 vColor;varying float vA;
  uniform float uTime,uWidth,uFlowTime,uPixelScale,uAudio,uHigh;
  ${Jt}
  void main(){
   vec3 p=galaxyAdvect(position,aCenter,aArm,uWidth,uFlowTime);
   vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
   gl_PointSize=max(1.0,(1.0+aSize*(1.0+uHigh*.28))*min(2.8,12.0/-mv.z)*uPixelScale);
   vColor=color;vA=(.72+.28*sin(uTime*(.24+fract(aSeed)*.72)+aSeed))*(1.+uAudio*.06)*galaxyVisibility(p,aArm);
  }`,fragmentShader:`varying vec3 vColor;varying float vA;uniform float uBrightness,uOpacity;
  void main(){vec2 q=gl_PointCoord-.5;float r=length(q);
   float core=1.0-smoothstep(.035,.38,r);float halo=exp(-r*r*14.);
   float a=(core*.74+halo*.25)*vA*uBrightness*uOpacity;if(a<.005)discard;
   gl_FragColor=vec4(vColor*(1.0+halo*.54),a);}`}),p=new u(i,f);return p.renderOrder=-2,p.frustumCulled=!1,y.add(p),{pts:p,mat:f,count:e,gain:t===1?1.06:t===0?.76:.34}}let nn=[tn(19e3,0,.56,.34),tn(7200,1,1.12,.76),tn(13500,2,.32,.09)],rn=0;function an(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,241,220,.20)`),n.addColorStop(.22,`rgba(154,181,255,.13)`),n.addColorStop(.52,`rgba(118,92,210,.065)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new oe(e);return r.colorSpace=te,r}let on=an(),sn=new l;sn.renderOrder=-3,y.add(sn);for(let e=0;e<18;e++){let t=Qt(2),n=0;for(;t.density<.24&&n++<40;)t=Qt(2);let r=[9406207,7445759,16757895,14847415],i=new ne({map:on,color:r[e%r.length],transparent:!0,opacity:(.018+Math.random()*.032)*Math.min(1,t.density*1.6),depthWrite:!1,blending:2}),a=new ee(i);a.position.set(t.x,t.y,t.z-.2);let o=1.5+Math.random()*2.4;a.scale.set(o*(1.2+Math.random()),o*(.48+Math.random()*.42),1),a.material.rotation=-.18+Math.sin(t.x*.43)*.12+Ut()*.18,a.userData.baseOpacity=i.opacity,a.userData.centerY=t.centerY,a.userData.baseY=t.y,a.userData.baseX=t.x,a.userData.armIndex=t.armIndex,sn.add(a)}let B=new l;B.renderOrder=-1,y.add(B);let cn=[16766890,13229311,10397183,16033734,16777215];for(let e=0;e<16;e++){let e=Qt(1),t=0;for(;e.density<.34&&t++<24;)e=Qt(1);let n=110+(Math.random()*170|0),r=new Float32Array(n*3),i=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(n),s=new Float32Array(n),c=new Float32Array(n),l=.18+Math.random()*.34,d=.1+Math.random()*.25;for(let t=0;t<n;t++){r[t*3]=e.x+Ut()*l,r[t*3+1]=e.y+Ut()*d,r[t*3+2]=e.z+(Math.random()-.5)*.7,s[t]=Gt(Wt[e.armIndex],r[t*3]),c[t]=e.armIndex;let n=new _(cn[Math.random()*cn.length|0]),u=.5+.5*Math.random()**1.7;i[t*3]=n.r*u,i[t*3+1]=n.g*u,i[t*3+2]=n.b*u,a[t]=.9+Math.random()**3.1*4.6,o[t]=Math.random()*100}let f=new m;f.setAttribute(`position`,new g(r,3)),f.setAttribute(`color`,new g(i,3)),f.setAttribute(`aSize`,new g(a,1)),f.setAttribute(`aSeed`,new g(o,1)),f.setAttribute(`aCenter`,new g(s,1)),f.setAttribute(`aArm`,new g(c,1));let p=new u(f,new h({transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,uniforms:{uTime:{value:0},uAudio:{value:0},uFlowTime:{value:0},uWidth:{value:1},uBrightness:{value:1},uPixelScale:{value:1}},vertexShader:`attribute float aSize,aSeed,aCenter,aArm;varying vec3 vColor;varying float vA;uniform float uTime,uAudio,uFlowTime,uWidth,uPixelScale;
  ${Jt}
  void main(){vec3 p=galaxyAdvect(position,aCenter,aArm,uWidth,uFlowTime);vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
   gl_PointSize=max(1.,(1.+aSize*(1.+uAudio*.16))*min(2.8,10.0/-mv.z)*uPixelScale);
   vColor=color;vA=(.72+.28*sin(uTime*(.28+fract(aSeed)) + aSeed))*galaxyVisibility(p,aArm);}`,fragmentShader:`varying vec3 vColor;varying float vA;uniform float uBrightness;
  void main(){vec2 q=gl_PointCoord-.5;float r=length(q);float a=(1.-smoothstep(.03,.42,r))*vA;
   if(a<.01)discard;gl_FragColor=vec4(vColor*(1.1+exp(-r*r*18.)*.7),a*.82*uBrightness);}`}));p.frustumCulled=!1,B.add(p)}{let e=[...B.children],t=e.reduce((e,t)=>e+t.geometry.attributes.position.count,0),n=new m,r=[],i=Math.max(...e.map(e=>e.geometry.attributes.position.count));for(let t=0;t<i;t++)for(let n of e)t<n.geometry.attributes.position.count&&r.push([n,t]);for(let i of[`position`,`color`,`aSize`,`aSeed`,`aCenter`,`aArm`]){let a=e[0].geometry.attributes[i].itemSize,o=new Float32Array(t*a);for(let e=0;e<r.length;e++){let[t,n]=r[e],s=t.geometry.attributes[i].array;for(let t=0;t<a;t++)o[e*a+t]=s[n*a+t]}n.setAttribute(i,new g(o,a))}let a=e[0].material;for(let t of e)t.geometry.dispose(),t.material!==a&&t.material.dispose(),B.remove(t);let o=new u(n,a);o.frustumCulled=!1,B.add(o)}let ln=1800,un=new m,dn=new Float32Array(ln*3),fn=E.attributes.normal,V=E.attributes.position,pn=[],mn=0;for(let e=0;e<V.count;e+=3){if(fn.getZ(e)<.999||fn.getZ(e+1)<.999||fn.getZ(e+2)<.999)continue;let t=V.getX(e),n=V.getY(e),r=V.getX(e+1),i=V.getY(e+1),a=V.getX(e+2),o=V.getY(e+2),s=Math.abs((r-t)*(o-n)-(i-n)*(a-t))*.5;s<1e-10||(mn+=s,pn.push({i:e,end:mn}))}for(let e=0;e<ln;e++){let t=Math.random()*mn,n=0,r=pn.length-1;for(;n<r;){let e=n+r>>1;pn[e].end<t?n=e+1:r=e}let i=pn[n].i,a=Math.sqrt(Math.random()),o=Math.random(),s=[1-a,a*(1-o),a*o];for(let t=0;t<3;t++)dn[e*3]+=V.getX(i+t)*s[t],dn[e*3+1]+=V.getY(i+t)*s[t],dn[e*3+2]+=V.getZ(i+t)*s[t];dn[e*3+2]+=.007}un.setAttribute(`position`,new g(dn,3));let hn=new d({map:je,color:16768941,size:.013,transparent:!0,opacity:.3,depthWrite:!1,blending:2,sizeAttenuation:!0}),gn=new u(un,hn);D.add(gn);let _n={x:0,y:0};v(x.domElement,`pointermove`,e=>{let t=x.domElement.getBoundingClientRect();_n.x=(e.clientX-t.left)/t.width*2-1,_n.y=-((e.clientY-t.top)/t.height*2-1)});let vn={exposure:.9,coreBrightness:1,innerGlow:1,outerGlow:1,bloomStrength:.16,bloomRadius:.28,bloomThreshold:.82,aura:.012,starBrightness:1.8,particleSize:1,dustBrightness:1.8,galaxyBrightness:1.28,galaxyDensity:1.45,galaxyWidth:1.12,galaxyFlow:1,galaxyAudioFlow:1,pearlTexture:1.25,nebulaBrightness:.82,fallRate:1.15,fallSpeed:1,fallTrail:1.18,audioDrive:1,bassResponse:1,beatResponse:1,colorReactivity:1,saturationBoost:1,colorLerpSpeed:1,spatialResponse:1,characterVisible:!0,characterX:.305529,characterY:-2.0867,characterZ:.765,characterScale:1.35,characterRotation:.04,characterDrag:!1,characterAspect:1,characterAspectAuto:!0,showMeter:!1},H={...vn};function U(){x.toneMappingExposure=H.exposure,we.radius=H.bloomRadius,we.threshold=H.bloomThreshold,P.uniforms.uBodyHDR.value=H.coreBrightness,P.uniforms.uInnerGlow.value=H.innerGlow,P.uniforms.uOuterGlow.value=H.outerGlow}function yn(){for(let[e]of at)e.mat.uniforms.uStarGain.value=Math.max(.12,1+(H.starBrightness-1)*e.brightnessWeight)}this.guiContainer=_e(`Animation69-gui-container`),ve(`Animation69-gui-container`),document.body.appendChild(this.guiContainer);let W=new he({title:`梦幻月牙`,container:this.guiContainer});this.gui=W,W.add(H,`exposure`,.6,1.4,.01).name(`整体曝光`).onChange(U),W.add(H,`coreBrightness`,.55,1.5,.01).name(`暖月核心亮度`).onChange(U),W.add(H,`innerGlow`,0,1.8,.01).name(`弧面深度`).onChange(U),W.add(H,`outerGlow`,0,1.6,.01).name(`边缘柔光`).onChange(U);let bn=W.addFolder(`泛光效果`);bn.add(H,`bloomStrength`,0,1.8,.01).name(`泛光强度`),bn.add(H,`bloomRadius`,0,1,.01).name(`泛光范围`).onChange(U),bn.add(H,`bloomThreshold`,0,1.4,.01).name(`泛光阈值`).onChange(U),W.add(H,`aura`,0,.03,.001).name(`月牙光晕`),W.add(H,`starBrightness`,.2,3,.01).name(`星星亮度`).onChange(yn),W.add(H,`particleSize`,.4,2.5,.01).name(`粒子大小`).onChange(Zn),W.add(H,`dustBrightness`,0,3,.01).name(`星尘亮度`);let G=W.addFolder(`银河构图`);G.add(H,`galaxyBrightness`,0,2.5,.01).name(`银河亮度`),G.add(H,`galaxyDensity`,0,2,.01).name(`银河星点密度`),G.add(H,`galaxyWidth`,.4,1.8,.01).name(`银河宽度`),G.add(H,`galaxyFlow`,0,2,.01).name(`银河流动速度`),G.add(H,`galaxyAudioFlow`,0,2,.01).name(`音乐推动流动`),G.add(H,`pearlTexture`,0,2,.01).name(`月牙珍珠质感`),G.add(H,`nebulaBrightness`,0,2,.01).name(`星云柔光`);let xn=W.addFolder(`坠星`);xn.add(H,`fallRate`,0,3,.01).name(`坠星频率`),xn.add(H,`fallSpeed`,0,2,.01).name(`坠星速度`),xn.add(H,`fallTrail`,0,2,.01).name(`拖尾长度`);let Sn=new c,Cn=new o,wn=new le,Tn=new s,En=new s,Dn=new s,On=!1;function kn(e){let t=x.domElement.getBoundingClientRect();Cn.x=(e.clientX-t.left)/t.width*2-1,Cn.y=-((e.clientY-t.top)/t.height)*2+1,Sn.setFromCamera(Cn,b)}function An(){Mn.updateDisplay(),Nn.updateDisplay(),Pn.updateDisplay(),Fn.updateDisplay(),In.updateDisplay()}v(x.domElement,`pointerdown`,e=>{if(!H.characterDrag||!H.characterVisible||(kn(e),!Sn.intersectObject(Le,!1)[0]))return;On=!0,x.domElement.setPointerCapture?.(e.pointerId),O.getWorldPosition(Dn);let t=new s;b.getWorldDirection(t),wn.setFromNormalAndCoplanarPoint(t,Dn),Sn.ray.intersectPlane(wn,Tn)&&En.copy(Dn).sub(Tn),e.preventDefault()}),v(x.domElement,`pointermove`,e=>{if(!On||(kn(e),!Sn.ray.intersectPlane(wn,Tn)))return;Tn.add(En);let t=D.worldToLocal(Tn.clone());H.characterX=n.clamp(t.x,-2.5,2.5),H.characterY=n.clamp(t.y,-2.5,2),N(),An(),e.preventDefault()});function jn(e){On&&(On=!1,x.domElement.releasePointerCapture?.(e.pointerId))}v(x.domElement,`pointerup`,jn),v(x.domElement,`pointercancel`,jn);let K=W.addFolder(`人物`);K.add(H,`characterVisible`).name(`显示人物`).onChange(N);let Mn=K.add(H,`characterX`,-2.5,2.5,.01).name(`人物 X`).onChange(N),Nn=K.add(H,`characterY`,-2.5,2,.01).name(`人物 Y`).onChange(N),Pn=K.add(H,`characterZ`,.05,.8,.005).name(`人物 Z / 前后`).onChange(N),Fn=K.add(H,`characterScale`,.35,2,.01).name(`人物缩放`).onChange(N),In=K.add(H,`characterRotation`,-.6,.6,.005).name(`人物旋转`).onChange(N);K.add(H,`characterDrag`).name(`鼠标拖动人物`),H.上传人物图片=()=>A.click(),K.add(H,`上传人物图片`),K.add(H,`characterAspectAuto`).name(`上传后自动宽高比`).onChange(e=>{e&&Ue(M||k)});let Ln=K.add(H,`characterAspect`,.2,3,.01).name(`人物宽高比`).onChange(He);H.恢复默认人物=()=>{++Be,A.value=``,j&&=(URL.revokeObjectURL(j),null),M&&=(M.dispose(),null),Ve=1,H.characterAspect=1,H.characterAspectAuto=!0,We(k,!1),He(),W.controllersRecursive().forEach(e=>e.updateDisplay())},K.add(H,`恢复默认人物`),K.open();let q=W.addFolder(`音频驱动`);q.add(H,`audioDrive`,0,2,.01).name(`音频驱动强度`),q.add(H,`bassResponse`,0,2,.01).name(`月牙低频呼吸`),q.add(H,`beatResponse`,0,2,.01).name(`节拍冲击`),q.add(H,`colorReactivity`,0,3,.05).name(`音频变色强度`),q.add(H,`saturationBoost`,0,3,.05).name(`低频饱和增强`),q.add(H,`colorLerpSpeed`,.01,3,.05).name(`变色响应速度`),q.add(H,`spatialResponse`,0,2,.05).name(`星场空间张力`),H.重置参数=()=>{Object.assign(H,vn),M&&H.characterAspectAuto&&(H.characterAspect=Ve),Bn(),Vn=0,Z=0,Y=0,X=0,U(),yn(),N(),He(),W.controllersRecursive().forEach(e=>e.updateDisplay()),An()},W.close(),W.hide(),this.settingsButton=ge(`Animation69-settings-button`),v(this.settingsButton,`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?(W.open(),W.show()):W.hide()}),document.body.appendChild(this.settingsButton),U(),yn(),N(),He();let Rn=null,J={active:!1,bass:0,mid:0,high:0,brightness:0,motion:0,bassResp:0,midResp:0,highResp:0,brightResp:0,motionResp:0,rms:0,section:0,kick:0,snare:0,hihat:0,downbeat:0,impact:0,accent:0,snarePulse:0,hihatPulse:0},Y=0,X=0,zn={textContent:``};function Bn(){J.active=!1;for(let e of Object.keys(J))e!==`active`&&(J[e]=0)}let Vn=0,Z=0,Hn=0,Un=0,Wn=0,Gn=0,Q=0,Kn=0,qn=0;function Jn(e){let t=!!Rn?.isPlaying;J.active=t;let n=Rn?.audioFeature,r=t?n?.animation:null,i=e=>r?w((r[e]??0)*H.audioDrive):0;J.bass=T(J.bass,i(`bass`),6,e),J.mid=T(J.mid,i(`mid`),5,e),J.high=T(J.high,i(`high`),8,e),J.brightness=T(J.brightness,i(`brightness`),4,e),J.motion=T(J.motion,i(`motion`),4,e),J.bassResp=De(J.bass),J.midResp=De(J.mid),J.highResp=De(J.high),J.brightResp=De(J.brightness),J.motionResp=De(J.motion);let a=t?w((n?.energy?.rms??0)*3*H.audioDrive):0;J.rms=T(J.rms,a,6,e),Y=T(Y,J.rms,.45,e);let o=w((J.rms-Y*.92)/Math.max(.06,Y*.55));J.section=T(J.section,w(Y*.45+o*.55),1.6,e);let s=t?w((J.section*.88+J.motionResp*.12)*H.spatialResponse):0;X=T(X,s,s>X?.34:.2,e),r?(J.kick=i(`kick`),J.snare=i(`snare`),J.hihat=i(`hihat`),J.downbeat=i(`downbeat`)):J.kick=J.snare=J.hihat=J.downbeat=0,J.snarePulse=Math.max(J.snarePulse,J.snare*H.beatResponse),J.hihatPulse=Math.max(J.hihatPulse,J.hihat*H.beatResponse),J.accent=Math.max(J.accent,J.kick*.85,J.snare*.65,J.hihat*.45),J.snarePulse*=Math.exp(-7*e),J.hihatPulse*=Math.exp(-10*e),J.accent*=Math.exp(-6*e),t&&(Vn+=e*(.3+J.midResp*2.4)*H.colorLerpSpeed);let c=Math.sin(Vn)*J.midResp,l=t?(c*.1+J.midResp*.3+J.highResp*.12)*H.colorReactivity:0;Z=T(Z,l,t?3:5.5,e)}function Yn(e){if(Q=Math.max(0,Q-e),Kn=Math.max(0,Kn-e),qn=Math.max(0,qn-e),!J.active){Hn=Un=Wn=Gn=0,J.impact*=Math.exp(-7*e);return}let t=J.kick,n=J.snare,r=J.hihat,i=J.downbeat;Q<=0&&t>.15&&t>Hn+.03?(J.impact=Math.max(J.impact,Math.min(1,t*.92+i*.35)),Q=.12):Q<=0&&i>.18&&i>Gn+.04&&(J.impact=Math.max(J.impact,Math.min(1,i*1.1)),Q=.16),Kn<=0&&n>.14&&n>Un+.03&&(dt(`snare`,n),Kn=.09),qn<=0&&r>.12&&r>Wn+.025&&(dt(`hihat`,r),qn=.06),J.impact*=Math.exp(-7*e),Hn=t,Un=n,Wn=r,Gn=i}let Xn=1e3;function Zn(){let e=x.getSize(new o).y;Xn=e*x.getPixelRatio()*H.particleSize/Math.max(.05,2*Math.tan(n.degToRad(b.fov)/2));for(let[e]of at)e.mat.uniforms.uSizeScale.value=Xn;let t=e*x.getPixelRatio()*H.particleSize/900;for(let e of nn)e.mat.uniforms.uPixelScale.value=t;for(let e of B.children)e.material.uniforms.uPixelScale.value=t}Zn();function Qn(e){let t=J.highResp*.6+J.hihatPulse*.45,n=J.highResp;for(let[r,i,a,o,s]of at){let c=r.mat.uniforms;c.uTime.value=e,c.uHueShift.value=Z+a,c.uChromaGain.value=1+J.bassResp*1.3*H.saturationBoost*i,c.uLightGain.value=1+(J.brightResp-.5)*.3*i,c.uAccent.value=w(J.accent*i),c.uTwinkle.value=t*i,c.uSizeBoost.value=n*i,c.uGlowGain.value=1+J.section*.26*i,c.uSpatialTension&&(c.uSpatialTension.value=X),c.uSpatialWeight&&(c.uSpatialWeight.value=o),c.uDepthWeight&&(c.uDepthWeight.value=s)}}function $n(){let e=w(J.bassResp*H.bassResponse),t=w(J.impact*H.beatResponse);P.uniforms.uBass.value=e,P.uniforms.uImpact.value=t;let r=n.clamp(Z/.5,-1,1),i=Math.abs(r);return P.uniforms.uMoonTint.value.setRGB(1+i*(r>=0?.055:-.045),1+i*(r>=0?0:-.005),1+i*(r>=0?-.07:.075)),{mr:e,mi:t}}let $={bass:[],mid:[],high:[],impact:[]},er=0,tr=0;function nr(e){if(er+=e,er>=.25){er=0;let e=(e,t)=>{e.push(t),e.length>32&&e.shift()};e($.bass,J.bassResp),e($.mid,J.midResp),e($.high,J.highResp),e($.impact,J.impact)}if(!H.showMeter){zn.textContent&&=``;return}if(tr++%6!=0)return;let t=e=>e.length?Math.min(...e).toFixed(2)+`~`+Math.max(...e).toFixed(2):`--`;zn.textContent=`低频`+t($.bass)+` 中频`+t($.mid)+` 高频`+t($.high)+` 段落`+J.section.toFixed(2)+` 空间`+X.toFixed(2)+` 冲击`+t($.impact)+` 色相`+(Z*360).toFixed(0)+`°`}N();let rr=0,ir=performance.now();function ar(){let e=performance.now(),t=Math.min(Math.max((e-ir)/1e3,0),.1);ir=e,rr+=t;let r=rr;Jn(t),Yn(t),Oe.uniforms.uTime.value=r,Oe.uniforms.uAmbience.value=J.section,P.uniforms.uTime.value=r;let{mr:i,mi:a}=$n();Qn(r),ft(t,r),Ht(t);for(let e of ot){let t=.5+.5*Math.sin(r*1.05+e.phase);e.s.scale.setScalar(e.size*H.particleSize*(.97+t*.17+J.snarePulse*.22+J.hihatPulse*.1));let i=n.clamp(.8+H.starBrightness/3*.55,.8,1.35);e.mat.opacity=Math.min(.94,(.34+t*.36+J.snarePulse*.2+J.hihatPulse*.14)*i),e.s.position.x=e.x+Math.sin(r*.13+e.phase)*.065,e.s.position.y=e.y+Math.cos(r*.1+e.phase)*.045}let o=.5+.5*Math.sin(r*.5);D.scale.setScalar(1.16*(.998+o*.004+i*.005+a*.006)),D.rotation.z=Math.sin(r*.11)*.004;let s=.5+.5*Math.sin(r*.42+.4);Ke.opacity=H.aura*(.76+s*.44+i*.55+a*2.6);let c=1.018+s*.008+i*.006+a*.02;qe.scale.set(c,c,1.05);let l=.65+H.dustBrightness*.35;Qe.rotation.z+=t*(.006+J.motionResp*.006),Ze.opacity=Math.min(.68,(.3+s*.075+J.highResp*.34)*l),Ze.size=(.018+J.highResp*.006)*H.particleSize,gt.opacity=Math.min(.42,.15*(.55+H.dustBrightness*.45)*(1+J.section*.25)),gt.size=.012*H.particleSize,_t.rotation.z+=t*(.0045+J.motionResp*.006),_t.position.y=Math.sin(r*.06)*.025;let u=J.section*.62+J.motionResp*.38;Zt(t);for(let e of nn)e.mat.uniforms.uTime.value=r,e.mat.uniforms.uFlowTime.value=rn,e.mat.uniforms.uBrightness.value=H.galaxyBrightness*e.gain,e.mat.uniforms.uWidth.value=H.galaxyWidth,e.mat.uniforms.uAudio.value=u,e.mat.uniforms.uHigh.value=J.highResp,e.pts.geometry.setDrawRange(0,Math.floor(e.count*H.galaxyDensity/2));z.uniforms.uTime.value=rn,z.uniforms.uWidth.value=H.galaxyWidth,z.uniforms.uBrightness.value=H.galaxyBrightness*H.nebulaBrightness*.72,z.uniforms.uAudio.value=u,z.uniforms.uMid.value=J.midResp,z.uniforms.uHigh.value=J.highResp;for(let e of sn.children){let t=e.userData,r=Wt[t.armIndex];e.position.x=r.left+n.euclideanModulo(t.baseX-r.left+rn,r.right-r.left),e.position.y=Gt(r,e.position.x)+(t.baseY-t.centerY)*H.galaxyWidth;let i=Math.hypot((e.position.x+.02)/2.6,(e.position.y-.02)/2.25),a=Kt(r,e.position.x)*(.04+.96*Ee(.82,1.3,i));e.material.opacity=e.userData.baseOpacity*H.galaxyBrightness*H.nebulaBrightness*(.82+u*.22)*a}for(let e of B.children)e.material.uniforms.uTime.value=r,e.material.uniforms.uFlowTime.value=rn,e.material.uniforms.uAudio.value=J.highResp*.55+J.impact*.3,e.material.uniforms.uBrightness.value=H.galaxyBrightness,e.material.uniforms.uWidth.value=H.galaxyWidth,e.geometry.setDrawRange(0,Math.floor(e.geometry.attributes.position.count*H.galaxyDensity/2));P.uniforms.uPearl.value=H.pearlTexture,hn.opacity=Math.min(.52,H.pearlTexture*(.23+.06*J.highResp)),hn.size=(.01+.005*H.pearlTexture+.003*J.highResp)*H.particleSize,we.strength=Math.min(1.6,H.bloomStrength*(1+J.section*.22)+a*.055);let d=_n.x*.075,f=.12+_n.y*.055;b.position.x=T(b.position.x,d,1.09,t),b.position.y=T(b.position.y,f,1.09,t),b.lookAt(-.08,.07,0),nr(t),S.render()}this.scene=y,this.renderer=x,this.composer=S,this.externalBackgroundEnabled=!1,this.setExternalBackgroundEnabled=e=>{this.externalBackgroundEnabled=e,ke.visible=!e},this._frame=ar,this._setAudioData=e=>{Rn=e},this._normalizePortrait=()=>{!M&&H.characterAspectAuto&&(H.characterAspect=1,He(),Ln.updateDisplay())},this._clearAudio=()=>{Rn=null,Bn(),Y=0,X=0,Vn=0,Z=0},this._resize=()=>{Ce(),x.setPixelRatio(Math.min(devicePixelRatio,2)),x.setSize(innerWidth,innerHeight),S.setPixelRatio(x.getPixelRatio()),S.setSize(innerWidth,innerHeight),Oe.uniforms.uResolution.value.set(innerWidth,innerHeight),Zn()},this._disposeScene=()=>{++Be,j&&URL.revokeObjectURL(j),A.remove();let e=new Set,t=new Set,n=new Set([je,k,M]);y.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])t.add(e)});for(let t of e)t.dispose();for(let e of t)e.map&&n.add(e.map),e.dispose();for(let e of n)e?.dispose();S.dispose(),x.dispose()}}updateWithAudioData(e){this._setAudioData?.(e)}render(){this._disposed||this._frame?.()}onWindowResize(){this._resize?.()}resetState(){this._clearAudio?.()}endGuiPreferencesLoad(e=!0){e&&this._normalizePortrait?.()}dispose(){if(!this._disposed){this._disposed=!0;for(let[e,t,n]of this._listeners)e.removeEventListener(t,n);this._listeners=[],v(this.settingsButton,this.guiContainer,this.gui),this._disposeScene?.()}}};export{y as default};