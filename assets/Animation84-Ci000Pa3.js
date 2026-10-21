import{$n as e,Ct as t,Mr as n,Pr as r,Tt as i,V as a,Wt as o,Yt as s,d as c,kt as l,nr as u,r as d,tr as f}from"./three.module-Cl1eh3-1.js";import{a as p,i as m,n as h,r as g,t as _}from"./GUIHelper-DNd0uFVI.js";import{t as v}from"./OrbitControls-Bw7OgNlo.js";import{a as y,i as b}from"./PerceptualColor-CpM8fhF0.js";var x=class{static get audioProfile(){return{smoothing:.7,bands:Array.from({length:64},(e,t)=>({name:String(t),startBin:Math.max(1,Math.floor(35*(16e3/35)**(t/64)*2048/44100)),endBin:Math.max(1,Math.floor(35*(16e3/35)**((t+1)/64)*2048/44100))}))}}constructor(e,t={}){this.canvas=e,this.resources=new Set,this.events=new AbortController,this.globalBackgroundPolicy=`inherit`;try{this.init(t)}catch(e){throw this.dispose(),e}}init(h={}){if(this.scene||this.disposed)return;let x=e=>(this.resources.add(e),e);function S(e=`#6571ff`){let t=b(e),n={hue:t,phase:0,chroma:.16,lightness:.64,separation:.055};return{state:n,reset:()=>Object.assign(n,{hue:t,phase:0,chroma:.16,lightness:.64,separation:.055}),update(e,r,a){let o=r?e:null,s=e=>Math.min(1,Math.max(0,Number.isFinite(o?.[e])?o[e]:0)),c=s(`mid`),l=s(`high`),u=s(`bass`),d=Math.max(0,Math.min(a||0,.1)),f=Math.sqrt(Math.max(s(`energy`),u,c,l));r&&f>.01?n.phase=(n.phase+d*f*(.1+c*.3+l*.25+s(`variation`)*.12))%1:n.phase=0;let p=t+n.phase+c*.16+l*.24+s(`brightness`)*.2,m=1-Math.exp(-Math.max(0,Math.min(a||0,.1))/(r?.16:.18)),h=i.euclideanModulo(p-n.hue+.5,1)-.5;return n.hue=t+i.euclideanModulo(n.hue-t+h*m,1),n.chroma+=(.16+u*.075-n.chroma)*m,n.lightness+=(.64+s(`energy`)*.065+l*.025-n.lightness)*m,n.separation+=(.055+l*.065-n.separation)*m,n}}}let C=new Map;function w(e){return C.has(e)||C.set(e,y(e)),C.get(e)}let T=S(),ee=T.state.hue,E=this.renderer=new d({canvas:this.canvas,antialias:!0,alpha:!0});E.setPixelRatio(Math.min(devicePixelRatio,2)),E.setClearColor(0,0),E.outputColorSpace=e,E.toneMapping=0;let D=this.scene=new f,O=this.camera=new o(-500,500,500,-500,.1,3e3);O.position.z=1e3;let k=this.controls=new v(O,E.domElement);k.mouseButtons.LEFT=t.ROTATE,k.mouseButtons.RIGHT=t.PAN,k.mouseButtons.MIDDLE=t.DOLLY,k.enableDamping=!0,k.dampingFactor=.08,k.screenSpacePanning=!0,k.rotateSpeed=.65,k.panSpeed=.8,k.zoomSpeed=.9,k.minZoom=.35,k.maxZoom=4,k.minPolarAngle=.02,k.maxPolarAngle=Math.PI-.02,k.saveState();let A={sceneScale:1,animationSpeed:1,layerSpeed:1,particleSpeed:1,lineWidth:1,needleWidth:1,needleLength:1,glowOpacity:1,particleSize:1,particleOpacity:1,bassResponse:1,midResponse:1,highResponse:1,beatResponse:1,colorReactivity:1,colorSpeed:1,saturationBoost:1,layerSeparation:1,needleColorSpan:.65,brightness:1};this.defaultSettings=Object.freeze(A);let j=this.settings={...A};for(let e of Object.keys(A))Number.isFinite(h[e])&&(j[e]=h[e]);let M=this.uniforms={uTime:{value:0},uSeed:{value:0},uPointScale:{value:1},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uEnergy:{value:0},uFlow:{value:0},uColor:{value:new r(0,1,0,0)},uPaletteHue:{value:b(`#f10aff`)},uActivity:{value:0},uMotion:{value:0},uHihat:{value:0},uKick:{value:0},uPercussive:{value:0},uExpansion:{value:0},uSnareAge:{value:10},uSnarePower:{value:0},uSnareOrigin:{value:0},uOrbit:{value:new n},uHighlight:{value:0},uParticleFlow:{value:0},uPulseAge:{value:new r(10,10,10,10)},uPulsePower:{value:new r},uSpectrum:{value:new Float32Array(64)},uWave:{value:new Float32Array(128)},uLineWidth:{value:1},uNeedleWidth:{value:1},uNeedleLength:{value:1},uGlowOpacity:{value:1},uParticleSize:{value:1},uParticleOpacity:{value:1},uHueSeparation:{value:1},uBrightness:{value:1},uNeedleColorSpan:{value:.65},uHueResponse:{value:1},uBeatStrength:{value:1}},N,P,F=0,I=performance.now(),L,R,z=0,B=null,te=1,V={kick:{previous:0,cooldown:0},snare:{previous:0,cooldown:0}},ne=0,H=Math.PI*2;function U(e=0,t=1){return e+(t-e)*N()}function W(e){return e[Math.floor(U(0,e.length))]}function re(){return Math.sqrt(-2*Math.log(Math.max(U(),1e-7)))*Math.cos(H*U())}function ie(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}let G=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+uSeed)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
`,ae=`
vec2 tilt(vec2 p){
  p*=vec2(1.15,.72);
  float a=.86+sin(uTime*.09)*.025;
  return mat2(cos(a),sin(a),-sin(a),cos(a))*p;
}
`,oe=`

vec3 perceptualLinear(vec3 lch) {
    float angle = lch.z * 6.28318530718;
    vec2 ab = vec2(cos(angle), sin(angle)) * lch.y;
    vec3 lms = vec3(lch.x + .3963377774*ab.x + .2158037573*ab.y,
                    lch.x - .1055613458*ab.x - .0638541728*ab.y,
                    lch.x - .0894841775*ab.x - 1.291485548*ab.y);
    lms = lms*lms*lms;
    return vec3(dot(vec3(4.0767416621,-3.3077115913,.2309699292),lms),
                dot(vec3(-1.2684380046,2.6097574011,-.3413193965),lms),
                dot(vec3(-.0041960863,-.7034186147,1.707614701),lms));
}
bool perceptualInGamut(vec3 rgb) {
    return min(min(rgb.r,rgb.g),rgb.b)>=0. && max(max(rgb.r,rgb.g),rgb.b)<=.95;
}
vec3 perceptualColor(float lightness,float chroma,float hue) {
    vec3 lch=vec3(clamp(lightness,.08,.9),max(0.,chroma),hue);
    vec3 rgb=perceptualLinear(lch);
    if(perceptualInGamut(rgb))return rgb;
    float lo=0.,hi=lch.y;
    vec3 best=perceptualLinear(vec3(lch.x,0.,hue));
    for(int i=0;i<7;i++){
        float c=(lo+hi)*.5;
        vec3 candidate=perceptualLinear(vec3(lch.x,c,hue));
        if(perceptualInGamut(candidate)){lo=c;best=candidate;}else{hi=c;}
    }
    return best;
}

uniform vec4 uColor;
uniform float uPaletteHue,uActivity,uHigh,uMid,uBass,uHueSeparation,uBrightness,uHueResponse,uNeedleColorSpan;
vec3 audioColor(vec3 lab,float spatial,float role,float highlight,float hueOffset){
  float sourceChroma=length(lab.yz);
  float sourceHue=atan(lab.z,lab.y)/6.28318530718;
  float sourceOffset=fract(sourceHue-uPaletteHue+.5)-.5;
  float outerOffset=.06*uMid-.025*uBass;
  float innerOffset=.24+.10*uMid-.05*uHigh;
  float needleOffset=-.14-.10*uHigh+.035*uBass;
  float layerOffset=role<1.5?mix(outerOffset,innerOffset,clamp(role,0.,1.)):needleOffset;
  float targetHue=uPaletteHue+sourceOffset*.16+layerOffset*uHueSeparation;
  float difference=fract(targetHue-sourceHue+.5)-.5;
  float hue=sourceHue+(difference*uActivity+uColor.x+spatial*uColor.w)*uHueResponse+hueOffset;
  float chroma=mix(sourceChroma,max(sourceChroma,.14),uActivity)*uColor.y;
  if(role>1.5)chroma=max(chroma,.15*min(1.,uNeedleColorSpan*4.));
  float light=mix(lab.x,min(lab.x,.77),uActivity)+uColor.z*.35+highlight*.065;
  return perceptualColor(min(.86,light*uBrightness),chroma,hue);
}
`,se=`
uniform vec4 uPulseAge,uPulsePower;
uniform float uBeatStrength,uPercussive;
float layerPulse(float lane){
  float pulse=0.;
  for(int i=0;i<4;i++){
    float age=uPulseAge[i]-(lane+1.)*.045;
    float t=max(0.,age);
    pulse+=step(0.,age)*(1.-exp(-t*mix(40.,90.,uPercussive)))*exp(-t*mix(6.,11.,uPercussive))*uPulsePower[i];
  }
  return min(pulse,1.)*uBeatStrength;
}
`,ce=x(new u({uniforms:M,transparent:!0,blending:2,depthTest:!1,depthWrite:!1,side:2,vertexShader:`
  uniform float uTime,uSeed,uBass,uMid,uEnergy,uMotion,uActivity,uHighlight,uKick,uExpansion;
  uniform float uSnareAge,uSnarePower,uSnareOrigin;
  uniform float uSpectrum[64],uWave[128];
  uniform float uLineWidth,uNeedleWidth,uNeedleLength,uGlowOpacity;
  uniform vec2 uOrbit;
  attribute vec4 aArc,aMotion,aLayer;
  attribute vec3 aColor;
  attribute float aAlpha;
  varying vec2 vUv;varying vec3 vColor;varying float vAlpha,vKind,vHighlight,vRole,vNeedleHue;
  ${G}
  ${ae}
  ${se}
  void main(){
    vUv=uv;vColor=aColor;vAlpha=aAlpha;vKind=aMotion.w;
    float phase=aMotion.z,kind=aMotion.w;
    float lane=aLayer.x,group=aLayer.y;
    vRole=kind>2.5?2.:(group>=0.?(group>1.5?1.:0.):clamp((318.-aArc.x-position.y*aArc.w)/73.,0.,1.));
    float pulse=layerPulse(lane);
    float start=aArc.y,sweep=aArc.z;
    float radius=aArc.x*(1.+uBass*.045+uKick*uBeatStrength*.012);
    float width=aArc.w*(1.+uMid*.16)*(kind>2.5?uNeedleWidth:(kind>1.5?uLineWidth:1.));
    if(kind>.5&&kind<1.5)vAlpha*=uGlowOpacity;
    if(group>=0.&&kind<2.5){
      float orbit=group>1.5?uOrbit.x:uOrbit.y;
      start+=orbit;
      radius+=(aArc.x-aLayer.z)*(uBass*.8+uEnergy*.3+uExpansion*.45);
      radius+=pulse*(5.+(lane+1.)*4.);
      sweep*=1.+(uMid*.12+uExpansion*.035)*sin(orbit*.7+group*1.8);
      start+=(aArc.z-sweep)*.5;
    }
    float angle=start+(kind>2.5?0.:uv.x*sweep);
    vNeedleHue=kind>2.5?.5*sin(angle-.6):0.;
    vHighlight=0.;
    if(kind<2.5){
      float d=atan(sin(angle-uHighlight),cos(angle-uHighlight));
      float sweepAngle=uSnareOrigin+uSnareAge*(2.3+uMotion*1.5);
      float sd=atan(sin(angle-sweepAngle),cos(angle-sweepAngle));
      float snare=exp(-sd*sd*12.)*exp(-uSnareAge*3.6)*uSnarePower*uBeatStrength;
      vHighlight=min(1.25,exp(-d*d*5.)*uActivity*(.25+uMotion*.55)+snare*.85);
    }
    vAlpha*=.84+uEnergy*.24+pulse*.12;
    if(kind<1.5){radius+=sin(phase*.7+uTime*.4)*2.;}
    else if(kind<2.5){angle+=sin(uTime*.18)*.04;}
    vec2 direction=vec2(cos(angle),sin(angle));
    vec2 p;
    if(kind>2.5){
      float bin=abs(fract(angle/6.2831853)*2.-1.)*63.;int index=int(bin);
      float spectrum=mix(uSpectrum[index],uSpectrum[min(index+1,63)],fract(bin));
      float wave=uWave[int(mod(phase*2.,128.))];
      float lengthFactor=.10+pow(spectrum,.82)*(.43+uExpansion*.06);
      p=direction*(radius+uv.x*(aArc.z+radius*lengthFactor)*uNeedleLength+wave*3.)
        +vec2(-direction.y,direction.x)*position.y*width;
      vAlpha*=.62+spectrum*.65;
    }else{
      float wobble=(noise(vec2(angle*2.+phase*.02,uTime*.18))-.5);
      radius+=wobble*(kind<1.5?1.2:.4);
      p=direction*(radius+position.y*width);
    }
    p+=aMotion.xy;p=tilt(p);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,0.,1.);
  }`,fragmentShader:`
  ${oe}
  varying vec2 vUv;varying vec3 vColor;varying float vAlpha,vKind,vHighlight,vRole,vNeedleHue;
  void main(){
    float y=abs(vUv.y*2.-1.);
    float profile=vKind>.5&&vKind<1.5?exp(-y*y*5.5)*(1.-smoothstep(.75,1.,y)):1.-smoothstep(.55,1.,y);
    float ends=smoothstep(0.,.003,vUv.x)*(1.-smoothstep(.997,1.,vUv.x));
    float role=vRole;
    float highlight=vHighlight+(vKind>2.5?vUv.x*uActivity*.18:0.);
    float needleHue=vNeedleHue*uNeedleColorSpan*(1.+uHigh*uActivity*uHueResponse*.2);
    vec3 color=audioColor(vColor,vUv.y-.5,role,highlight,needleHue);
    gl_FragColor=vec4(color,vAlpha*profile*ends*(1.+vHighlight*.2));
    #include <colorspace_fragment>
  }`})),le=x(new u({uniforms:M,transparent:!0,blending:2,depthTest:!1,depthWrite:!1,vertexShader:`
  uniform float uTime,uSeed,uPointScale,uBass,uHigh,uFlow,uParticleFlow,uHihat;
  uniform float uParticleSize,uParticleOpacity;
  attribute vec3 aColor;attribute float aAlpha,aSize,aPhase;
  varying vec3 vColor;varying float vAlpha,vSpark,vRole;
  ${G}
  ${ae}
  ${se}
  void main(){
    vRole=clamp((328.-length(position.xy))/100.,.12,.9);
    vColor=aColor;float n=noise(vec2(aPhase*5.,sin(uTime*.75)*5.));
    vSpark=smoothstep(.8,.95,n);
    vAlpha=aAlpha*(.7+.3*n)*(.65+uHigh*.35+uHihat*vSpark*.25)*uParticleOpacity;
    vec3 p=position;
    float lane=fract(aPhase*.618)*2.-1.;
    float pulse=layerPulse(lane);
    float orbit=uParticleFlow*(.65+fract(aPhase*.3819)*.35);
    p.xy=mat2(cos(orbit),sin(orbit),-sin(orbit),cos(orbit))*p.xy;
    float drift=fract(aPhase*.618+uFlow);
    float burst=sin(drift*3.14159)*12.+pulse*14.;
    vec2 tangent=normalize(vec2(-p.y,p.x));
    p.xy*=1.+uBass*.045+burst/max(length(p.xy),1.);
    p.xy+=tangent*pulse*(10.+fract(aPhase*.713)*16.);
    p.xy+=vec2(sin(uTime*.22+aPhase),cos(uTime*.18+aPhase))*3.;p.xy=tilt(p.xy);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    gl_PointSize=aSize*uPointScale*(1.+uHihat*vSpark*.22)*uParticleSize;
  }`,fragmentShader:`
  ${oe}
  varying vec3 vColor;varying float vAlpha,vSpark,vRole;
  void main(){vec2 q=gl_PointCoord*2.-1.;
    q=mat2(.652,-.758,.758,.652)*q;
    float r=length(q*vec2(1.,1.45));
    float disc=1.-smoothstep(.72,1.,r);
    float diamond=1.-smoothstep(.35,.62,abs(q.x)+abs(q.y));
    gl_FragColor=vec4(audioColor(vColor,0.,vRole,vSpark*.12,0.),vAlpha*(disc+diamond*vSpark*.15));
    #include <colorspace_fragment>
  }`}));function ue(e){let t={position:[],uv:[],aArc:[],aMotion:[],aLayer:[],aColor:[],aAlpha:[]},n=[];for(let r of e){let e=r.kind>2.5?1:96,i=t.position.length/3,a=w(r.color);for(let n=0;n<=e;n++)for(let i=0;i<2;i++)t.position.push(0,i-.5,0),t.uv.push(n/e,i),t.aArc.push(r.radius,r.start,r.sweep,r.width),t.aMotion.push(r.x,r.y,r.phase,r.kind),t.aLayer.push(r.lane??0,r.group??-1,r.center??r.radius,0),t.aColor.push(...a),t.aAlpha.push(r.alpha);for(let t=0;t<e;t++){let e=i+t*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}}let r=x(new c);for(let[e,n]of Object.entries(t))r.setAttribute(e,new a(n,{position:3,uv:2,aArc:4,aMotion:4,aLayer:4,aColor:3,aAlpha:1}[e]));return r.setIndex(n),r}function de(){P=crypto.getRandomValues(new Uint32Array(1))[0],N=ie(P),M.uSeed.value=P%1e4;let e=[`#5100ff`,`#6100ff`,`#8600ff`,`#b500ff`],t=[`#d600ff`,`#f10aff`,`#ff20ee`,`#ab06ff`],n=[`#fff270`,`#e6d446`,`#fff8b8`,`#fffde8`,`#c3abff`,`#a69eff`,`#ffe829`,`#7457ff`,`#44d9e9`],r=U(-.035,.035),i=[],o=[],u=[],d=[],f=[],p=[];function m(e,n,a={}){i.push({kind:e,phase:n,radius:285,start:r,sweep:H-.2,width:2,x:0,y:0,color:W(t),alpha:.5,...a})}for(let t=0;t<16;t++)m(1,t,{radius:281+U(-9,9),width:U(85,145),start:r+.05,sweep:5.95,color:W(e),alpha:.045}),m(1,t+20,{radius:290+U(-15,15),width:U(130,190),start:3.25+r,sweep:2.7,color:`#2800ff`,alpha:.026});let h=[{r:318,start:.24,length:2.45},{r:318,start:2.91,length:2.63},{r:245,start:.05,length:4.78}],g=40;for(let[e,n]of h.entries())for(let i=0;i<16;i++){let a=n.r+(i-7.5)*1.65+U(-.5,.5),o=W(t),s={lane:i/15*2-1,group:e,center:n.r,radius:a,start:n.start+r+U(-.008,.008),sweep:n.length,width:U(1.1,2.8),color:o,alpha:U(.48,.85)};m(1,g++,{...s,width:15,alpha:.038}),m(2,g++,s)}for(let e=0;e<180;e++){let t=e/180*H;if(t>.28&&t<.57||t>2.2&&t<2.55)continue;let n=Math.sin(t)<-.1;m(3,e,{radius:n?U(235,275):U(209,234),start:t,sweep:n?U(25,62):U(4,13),width:U(.7,1.65),color:U()<.2?`#fff8dc`:`#ead53b`,alpha:U(.32,.75)})}for(let e=0;e<440;e++){let t=U()<.8?U(Math.PI*.95,H*1.02):U(0,H),r=298+re()*48;o.push(Math.cos(t)*r,Math.sin(t)*r,0),u.push(...w(W(n))),d.push(U(.28,.95)),f.push(U(3,13)*(U()<.08?1.55:1)),p.push(e)}L=new l(ue(i),ce),L.frustumCulled=!1,D.add(L);let _=x(new c);for(let[e,t,n]of[[`position`,o,3],[`aColor`,u,3],[`aAlpha`,d,1],[`aSize`,f,1],[`aPhase`,p,1]])_.setAttribute(e,new a(t,n));R=new s(_,le),R.frustumCulled=!1,D.add(R)}function fe(){T.reset(),M.uColor.value.set(0,1,0,0),B=null,F=0,M.uTime.value=0;for(let e of[`uBass`,`uMid`,`uHigh`,`uEnergy`,`uActivity`,`uMotion`,`uHihat`,`uKick`,`uPercussive`,`uExpansion`,`uSnarePower`,`uSnareOrigin`,`uHighlight`,`uParticleFlow`,`uFlow`])M[e].value=0;M.uSnareAge.value=10,ne=0;for(let e of Object.values(V))e.previous=0,e.cooldown=0;M.uOrbit.value.set(0,0),M.uPulseAge.value.set(10,10,10,10),M.uPulsePower.value.set(0,0,0,0),z=0,M.uSpectrum.value.fill(0),M.uWave.value.fill(0)}function pe(){E.setSize(innerWidth,innerHeight),te=E.getPixelRatio()*Math.min(innerWidth,innerHeight)/1020;let e=innerWidth/innerHeight;O.left=-510*Math.max(1,e),O.right=-O.left,O.top=510*Math.max(1,1/e),O.bottom=-O.top,O.updateProjectionMatrix()}D.position.y=65;function me(e,t,n,r){let i=V[e];i.cooldown=Math.max(0,i.cooldown-n);let a=t-i.previous,o=!r&&i.cooldown===0&&t>.1&&a>Math.max(.035,i.previous*.1);return i.previous=t,o&&(i.cooldown=e===`kick`?.16:.13),o?1-Math.exp(-t):0}function he(e,t){let n=Number.isFinite(t)?t:performance.now(),r=B===null?1/60:Math.max(0,(n-B)/1e3);B=n;let a=Math.min(r,.05),o=!!e?.isPlaying,s=o?e.audioFeature?.animation:null,c=e=>Math.min(1,Math.max(0,Number.isFinite(e)?e:0)),l=s?{...s,bass:c((s.bass??0)*j.bassResponse),mid:c((s.mid??0)*j.midResponse),high:c((s.high??0)*j.highResponse)}:null,u=c(l?.percussive);for(let[e,t]of[[`uBass`,`bass`],[`uMid`,`mid`],[`uHigh`,`high`],[`uEnergy`,`energy`],[`uMotion`,`motion`]])M[e].value=c(l?.[t]);let d=e=>Number.isFinite(e)?Math.max(0,e):0,f=o?d(l?.kick):0,p=o?d(l?.snare):0;M.uKick.value=1-Math.exp(-f),M.uHihat.value=o?1-Math.exp(-d(l?.hihat)*j.beatResponse):0,M.uPercussive.value=u;let m=Number.isFinite(l?.energyTrend)?Math.min(1,Math.max(-1,l.energyTrend)):0,h=o?c(c(l?.energy)*.55+m*.2+c(l?.variation)*.2):0;M.uExpansion.value=h;let g=o?c(Math.max(l?.energy??0,l?.mid??0,l?.high??0)*5):0;M.uActivity.value=g;let _=Math.min(r,.5)*(o?j.colorSpeed:1),v=Math.max(1,Math.ceil(_/.1)),y=T.state;for(let e=0;e<v;e++)y=T.update(l,o,_/v);M.uColor.value.set(y.hue-ee,1+(y.chroma/.16-1)*j.saturationBoost,y.lightness-.64,y.separation-.055);let b=M.uMotion.value,x=M.uActivity.value;M.uOrbit.value.x-=a*x*(.055+b*.12)*j.layerSpeed,M.uOrbit.value.y+=a*x*(.04+b*.09)*j.layerSpeed,M.uHighlight.value+=a*x*(.5+b*1.5),M.uParticleFlow.value+=a*x*(.018+b*.1)*j.particleSpeed,M.uFlow.value+=a*(.008+M.uHigh.value*.012)*j.particleSpeed;for(let e=0;e<4;e++)M.uPulseAge.value.setComponent(e,Math.min(10,M.uPulseAge.value.getComponent(e)+r));M.uSnareAge.value=Math.min(10,M.uSnareAge.value+r);let S=me(`kick`,f,r,r>.5),C=me(`snare`,p,r,r>.5);S&&(M.uPulseAge.value.setComponent(z,0),M.uPulsePower.value.setComponent(z,S),z=(z+1)%4),C&&(M.uSnareAge.value=0,M.uSnarePower.value=C,M.uSnareOrigin.value=(M.uHighlight.value+ ne++*2.399963)%H);let w=o?e?.audioFeature?.customBands:null;for(let e=0;e<64;e++)M.uSpectrum.value[e]=c(w?.[String(e)]);let E=o?e?.waveformData:null;for(let e=0;e<128;e++){let t=e/127,n=E?.[Math.floor(t*(E.length-1))];M.uWave.value[e]=Number.isFinite(n)?i.clamp((n-128)/128,-1,1)*Math.sin(Math.PI*t):0}}let ge=()=>{M.uTime.value=F,k.update(),M.uPointScale.value=te*O.zoom*D.scale.x,E.render(D,O)};this.guiContainer=g(`Animation84-gui-container`),this.scrollbarStyle=_(`Animation84-gui-container`),document.body.appendChild(this.guiContainer);let K=this.gui=new p({title:`幻彩环流`,container:this.guiContainer});function q(e,t,n,r,i,a,o){return e.add(j,t,r,i,a).name(o).onChange(e=>{M[n].value=e})}let J=K.addFolder(`画面参数`);J.add(j,`sceneScale`,.5,1.5,.01).name(`整体大小`).onChange(()=>Z()),q(J,`lineWidth`,`uLineWidth`,.4,2.5,.05,`弧线粗细`),q(J,`needleWidth`,`uNeedleWidth`,.2,4,.05,`针线粗细`),q(J,`needleLength`,`uNeedleLength`,0,2,.05,`针线长度`),q(J,`glowOpacity`,`uGlowOpacity`,0,1.6,.05,`底光强度`),q(J,`particleSize`,`uParticleSize`,.3,2.5,.05,`粒子大小`),q(J,`particleOpacity`,`uParticleOpacity`,0,1.5,.05,`粒子亮度`);let Y=K.addFolder(`动画与音频`);Y.add(j,`animationSpeed`,0,2.5,.05).name(`基础动画速度`),Y.add(j,`layerSpeed`,0,3,.05).name(`弧线错位速度`),Y.add(j,`particleSpeed`,0,3,.05).name(`粒子流动速度`),Y.add(j,`bassResponse`,0,2,.05).name(`低频响应`),Y.add(j,`midResponse`,0,2,.05).name(`中频响应`),Y.add(j,`highResponse`,0,2,.05).name(`高频响应`),q(Y,`beatResponse`,`uBeatStrength`,0,2,.05,`鼓点响应`);let X=K.addFolder(`音频配色`);q(X,`colorReactivity`,`uHueResponse`,0,1.5,.05,`音频色相幅度`),X.add(j,`colorSpeed`,.25,3,.05).name(`变色响应速度`),X.add(j,`saturationBoost`,0,2,.05).name(`低频饱和增强`),q(X,`layerSeparation`,`uHueSeparation`,0,1.8,.05,`内外圈色差`),q(X,`needleColorSpan`,`uNeedleColorSpan`,0,1,.01,`针线色彩跨度`),q(X,`brightness`,`uBrightness`,.6,1.2,.01,`颜色明度`),K.open();for(let e of[J,Y,X])e.open();let _e={lineWidth:`uLineWidth`,needleWidth:`uNeedleWidth`,needleLength:`uNeedleLength`,glowOpacity:`uGlowOpacity`,particleSize:`uParticleSize`,particleOpacity:`uParticleOpacity`,beatResponse:`uBeatStrength`,colorReactivity:`uHueResponse`,layerSeparation:`uHueSeparation`,needleColorSpan:`uNeedleColorSpan`,brightness:`uBrightness`},Z=()=>{for(let e of K.controllersRecursive()){let t=e.property;if(!(t in A))continue;let n=Number.isFinite(j[t])?j[t]:A[t];j[t]=i.clamp(n,e._min??-1/0,e._max??1/0),e.updateDisplay()}D.scale.setScalar(j.sceneScale);for(let[e,t]of Object.entries(_e))M[t].value=j[e]};K.onChange(Z),this.endGuiPreferencesLoad=(e=!0)=>{e&&Z()},this.resetGuiCamera=()=>{let e=k.enableDamping;k.enableDamping=!1,k.update(),k.reset(),k.enableDamping=e,O.updateProjectionMatrix()},this.settingsButton=m(`Animation84-settings-button`),document.body.appendChild(this.settingsButton),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?K.show():K.hide()},{signal:this.events.signal}),K.hide();let Q=null,$=-1/0;this.updateWithAudioData=e=>{Q=e,$=performance.now()+250},this.updateAudioAnalysis=he,this.resetState=()=>{Q=null,$=-1/0,I=performance.now(),fe(),Z(),this.resetGuiCamera()},this.onWindowResize=()=>{E.setPixelRatio(Math.min(devicePixelRatio,2)),pe()},this.render=()=>{if(this.disposed||this.contextLost||document.hidden)return;let e=performance.now(),t=Math.max(0,(e-I)/1e3);I=e,F+=Math.min(t,.05)*j.animationSpeed,he(e<=$?Q:null,e),ge()},this.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.resetState()},{signal:this.events.signal}),this.canvas.addEventListener(`webglcontextrestored`,()=>{this.contextLost=!1,this.onWindowResize(),this.resetState()},{signal:this.events.signal}),document.addEventListener(`visibilitychange`,()=>{Q=null,$=-1/0,I=performance.now(),B=null;for(let e of Object.values(V))e.previous=0,e.cooldown=0},{signal:this.events.signal}),Z(),fe(),pe(),de()}dispose(){if(!this.disposed){this.disposed=!0,this.events.abort(),h(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.controls?.dispose();for(let e of this.resources)e.dispose();this.resources.clear(),this.scene?.clear(),this.renderer?.dispose();for(let e of[`render`,`updateWithAudioData`,`updateAudioAnalysis`,`resetState`,`resetGuiCamera`,`onWindowResize`,`endGuiPreferencesLoad`])this[e]=()=>{};for(let e of[`renderer`,`scene`,`camera`,`controls`,`uniforms`,`gui`,`guiContainer`,`settingsButton`,`scrollbarStyle`])this[e]=null}}};export{x as default};