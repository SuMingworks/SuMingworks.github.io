import{a as e}from"./lil-gui.esm-jlbWO7FJ.js";import{Et as t,Gt as n,Jn as r,K as i,Or as a,St as o,Vt as s,Xn as c,Zn as l,g as u,nr as d,r as f,u as p,z as m}from"./three.module-TVF63cYk.js";import{n as h,r as g,t as _}from"./OutputPass-CxDAHfy4.js";import{i as v,n as y,r as b,t as x}from"./GUIHelper-DspWBXk2.js";import{t as ee}from"./OrbitControls-Ju8LL-qO.js";var S=()=>({blending:5,blendEquation:100,blendSrc:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:200,blendDstAlpha:201}),C=e=>Math.min(1,Math.max(0,e));function w(e){let[t,n,r]=e,i=.4122214708*t+.5363325363*n+.0514459929*r,a=.2119034982*t+.6806995451*n+.1073969566*r,o=.0883024619*t+.2817188376*n+.6299787005*r,s=Math.cbrt(Math.max(0,i)),c=Math.cbrt(Math.max(0,a)),l=Math.cbrt(Math.max(0,o));return[.2104542553*s+.793617785*c-.0040720468*l,1.9779984951*s-2.428592205*c+.4505937099*l,.0259040371*s+.7827717662*c-.808675766*l]}function T(e){let[t,n,r]=e,i=t+.3963377774*n+.2158037573*r,a=t-.1055613458*n-.0638541728*r,o=t-.0894841775*n-1.291485548*r,s=i*i*i,c=a*a*a,l=o*o*o;return[4.0767416621*s-3.3077115913*c+.2309699292*l,-1.2684380046*s+2.6097574011*c-.3413193965*l,-.0041960863*s-.7034186147*c+1.707614701*l]}function E(e){let t=new u(e);return w([t.r,t.g,t.b])}function D(e,t,n){let r=C(Number(n)||0);return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function te(e,t,{preserveChroma:n=1,maxChromaScale:r=2}={}){let i=0,a=0,o=0,s=0;for(let n=0;n<e.length;n++){let r=Math.max(0,Number(t[n])||0);i+=r,a+=e[n][0]*r,o+=e[n][1]*r,s+=e[n][2]*r}if(i<=1e-8)return e[0].slice();let c=[a/i,o/i,s/i],l=e.reduce((e,n,r)=>e+Math.hypot(n[1],n[2])*Math.max(0,Number(t[r])||0),0)/i,u=Math.hypot(c[1],c[2]);if(u>1e-8&&l>u){let e=Math.min(r,1+(l/u-1)*n);c[1]*=e,c[2]*=e}return c}function ne(e){let[t,n,r]=e,i=r*Math.PI*2;return[t,n*Math.cos(i),n*Math.sin(i)]}function re(e,{maxValue:t=1}={}){let n=T(e),r=e.slice();for(let e=0;e<8&&Math.min(...n)<-1e-5;e++)r[1]*=.82,r[2]*=.82,n=T(r);return n.map(e=>Math.min(t,Math.max(0,e)))}function ie(e,{threshold:t=1,headroom:n=.28,softness:r=.58}={}){let i=Math.max(1e-5,r);return e.map(e=>{let r=Math.max(0,e);if(r<=t)return r;let a=r-t;return t+n*(1-Math.exp(-a/i))})}function O(e){return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}function k(e,t={}){let n=O(e);for(let[e,r]of Object.entries(t||{}))r&&typeof r==`object`&&!Array.isArray(r)&&n[e]&&typeof n[e]==`object`?Object.assign(n[e],r):n[e]=r;return n}var A={camera:{distance:32,fov:42,autoOrbit:.028},sphere:{radius:10,shellOpacity:.86,rimStrength:1.42,rimPower:4.65,edgeVariation:.68,atmosphere:.105},far:{count:9200,size:1.78,brightness:1.045,shellBias:.4},mid:{count:3600,size:2.73,brightness:.98,shellBias:.48},near:{count:1020,size:4.7,brightness:1.82,cameraBias:.667},hero:{probability:.0215,size:15.2,brightness:3.46},naturalField:{strength:.289,scale:.341,depthVariation:.18,offsetX:.12,offsetY:-.08,offsetZ:.16},composition:{riverRatio:.315,satelliteRatio:.078,riverWidth:1.48,riverFlatten:.46,riverTurbulence:.39,quietStrength:.58,islandStretch:1.58,balanceStrength:.24,brightBalance:.82},dust:{count:1240,size:2.92,opacity:.205,drift:.323},motion:{rotationY:.066,rotationX:.028,twinkle:.54,starDrift:.245},livingFlow:{speed:.0175,curlStrength:.44,confinement:.64,stability:.94,influence:.94,pulseWidth:.09,pulseStrength:.92,vfxStrength:.72,trailStrength:.46,releaseStrength:.39,vortexEvent:.46},audioReactive:{enabled:!0,strength:.82,motion:.58,brightness:.52,pulse:.88,tempoSync:.72,ambient:1.05,dust:1.35,color:1.15},colorDirector:{enabled:!0,intensity:1.32,coverage:1.08,transitionSpeed:1.18,eventIntensity:1.28,peakAccent:1.12},colorSection:{sensitivity:1,calmThreshold:.22,peakThreshold:.66,trendThreshold:.08,relativeThreshold:.57,variationThreshold:.18,minHold:2.5,transitionDuration:3.2},shellColor:{response:1,coverage:1,sectionInfluence:1,downbeatInfluence:1,basePreservation:.04},riverColor:{response:1,coverage:1,highInfluence:.72,kickAccent:1,impactAccent:.95},ambientStarColor:{response:1,coverage:.88,complementary:.82,depthSeparation:.35,snareSpread:.95,variationInfluence:.72},dustColor:{response:1,coverage:.94,highInfluence:1,variationInfluence:.78,hihatAccent:1},heroColor:{response:1,kickAccent:.62,impactAccent:1,downbeatAccent:1,warmPeak:.92,colorCoverage:1},environmentColor:{atmosphereResponse:.9},colorEnvelope:{kickRelease:.25,snareRelease:.36,hihatRelease:.1,impactRelease:.3,downbeatRelease:.55},colors:{blue:`#4969f2`,cyan:`#64d8ff`,violet:`#8b5cf0`,white:`#f4f7ff`,warm:`#f3c9a7`,rim:`#5364cf`},performance:{dpr:1.2}},j=class{constructor(e,t={}){this.canvas=e,this.defaultSettings=O(A),this.settings=k(A,t),this.params=this.settings,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.renderPass=null,this.outputPass=null,this.universe=null,this.atmosphereGroup=null,this.starsGroup=null,this.dustGroup=null,this.shellGroup=null,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.hasAudioData=!1,this.audioFrame=null,this.elapsed=0,this.lastTime=performance.now()*.001,this.startTime=this.lastTime,this._core=null,this._disposed=!1,this.initPromise=this.init(),this.initPromise.catch(e=>{console.error(`❌ Animation66 初始化失败:`,e)})}async init(){return this._disposed?!1:this.scene?!0:(this.setupThreeJS(),this._disposed||(this.createVisualCore(),this._disposed)||(this.setupPostProcessing(),this._disposed)?!1:(this.setupGUI(),this.setupSettingsButton(),console.log(`✅ Animation66 初始化成功`),!0))}setupThreeJS(){let e=this.params;this.scene=new c,this.camera=new s(e.camera.fov,Math.max(1,window.innerWidth)/Math.max(1,window.innerHeight),.1,120),this.camera.position.set(0,0,e.camera.distance),this.renderer=new f({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.performance.dpr)),this.renderer.setSize(Math.max(1,window.innerWidth),Math.max(1,window.innerHeight),!1),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=r,this.renderer.toneMapping=0,this.canvas.style.backgroundColor=`transparent`,this.canvas.style.zIndex=`1`,this.controls=new ee(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.055,this.controls.enablePan=!1,this.controls.minDistance=15,this.controls.maxDistance=46,this.controls.autoRotate=e.camera.autoOrbit>0,this.controls.autoRotateSpeed=e.camera.autoOrbit,this.controls.target.set(0,0,0),this.controls.saveState(),this.universe=new i,this.atmosphereGroup=new i,this.starsGroup=new i,this.dustGroup=new i,this.shellGroup=new i,this.universe.add(this.atmosphereGroup,this.starsGroup,this.dustGroup,this.shellGroup),this.scene.add(this.universe)}createVisualCore(){let e=this,r=this.params,i=this.renderer;this.scene;let s=this.camera,c=this.controls,f=this.universe,h=this.atmosphereGroup,g=this.starsGroup,_=this.dustGroup,v=this.shellGroup;function y(e){let t=new u(e);return new a(t.r,t.g,t.b)}function b(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}let x=b(26288166);function ee(){x=b(26288166)}function C(){let e=x()*2-1,t=x()*Math.PI*2,n=Math.sqrt(Math.max(0,1-e*e));return new a(n*Math.cos(t),n*Math.sin(t),e)}function w(e,t){return C().multiplyScalar(x()**+t*e)}let T=[new a(-7.35,-2.75,-2.55),new a(-5.65,-1.55,1.55),new a(-3.2,.4,3.05),new a(-.95,1.2,1.1),new a(1.05,-.45,-2.65),new a(3.35,.5,-3.05),new a(5.25,2.15,-.65),new a(7.05,3.25,2.1)];function O(e,t,n,r,i,o=new a){let s=i*i,c=s*i;return o.set(0,0,0).addScaledVector(t,2).addScaledVector(e,-i+2*s-c).addScaledVector(t,-5*s+3*c).addScaledVector(n,i+4*s-3*c).addScaledVector(r,-s+c).multiplyScalar(.5)}function k(e){let t=o.clamp(e,0,.999999)*7,n=Math.floor(t),r=t-n,i=n,a=Math.min(n+1,7),s=Math.max(i-1,0),c=Math.min(a+1,7);return O(T[s],T[i],T[a],T[c],r)}function A(e){let t=.0025,n=k(Math.max(0,e-t));return k(Math.min(.99999,e+t)).sub(n).normalize()}function j(e){let t=A(e),n=Math.abs(t.y)<.88?new a(0,1,0):new a(1,0,0),r=new a().crossVectors(t,n).normalize(),i=new a().crossVectors(t,r).normalize(),o=Math.sin(e*Math.PI*2.15-.55)*.48+Math.sin(e*Math.PI*4.1+.8)*.11,s=Math.cos(o),c=Math.sin(o);return{tangent:t,normal:r.clone().multiplyScalar(s).addScaledVector(i,c),binormal:i.clone().multiplyScalar(s).addScaledVector(r,-c)}}function ae(e){let t=.34+.66*Math.sin(Math.PI*o.clamp(e,0,1))**.46,n=.72*Math.exp(-(((e-.27)/.13)**2)),i=.46*Math.exp(-(((e-.52)/.085)**2)),a=.88*Math.exp(-(((e-.76)/.14)**2)),s=(.68+n-i+a)*t;return r.composition.riverWidth*Math.max(.3,s)}function oe(e){let t=.52*Math.exp(-(((e-.18)/.12)**2)),n=1.02*Math.exp(-(((e-.36)/.105)**2)),r=.42*Math.exp(-(((e-.53)/.075)**2)),i=1.16*Math.exp(-(((e-.7)/.11)**2)),a=.68*Math.exp(-(((e-.86)/.095)**2)),s=Math.sin(Math.PI*o.clamp(e,0,1))**.34;return Math.max(.1,(.25+t+n-r+i+a)*s)}function se(){for(let e=0;e<18;e++){let e=x();if(x()<Math.min(1,oe(e)/1.48))return e}return .18+x()*.7}function ce(e){let t=1e9,n=0;for(let r=0;r<=46;r++){let i=r/46,a=k(i),o=e.distanceToSquared(a);o<t&&(t=o,n=i)}let r=Math.max(.34,ae(n)),i=Math.sqrt(t),a=Math.exp(-(i*i)/(2*r*r));return{t:n,d:i,width:r,affinity:a}}function le(e,t){let n=se(),i=k(n),{normal:a,binormal:s}=j(n),c=ae(n),l=e===`far`?1.28:e===`mid`?1:.72,u=Math.exp(-(((n-.53)/.115)**2)),d=c*l*.1*u,f=c*l,p=o.lerp(d,f,x()**.58),m=x()*Math.PI*2,h=r.composition.riverFlatten,g=.88+.12*Math.sin(n*17+m*2.4),_=Math.cos(m)*p*g,v=Math.sin(m)*p*h*(.72+.26*Math.sin(n*8.5+1.1)),y=i.clone().addScaledVector(a,_).addScaledVector(s,v),b=r.composition.riverTurbulence;return y.addScaledVector(a,Math.sin(n*27+m*1.7)*b*.12*c),y.addScaledVector(s,Math.cos(n*19-m*1.2)*b*.08*c),y.length()>t&&y.setLength(t*(.9+x()*.05)),{p:y,t:n,lane:p/Math.max(c,.001),width:c}}let M=[{t:.22,n:2.55,b:-1.3,sx:2.9,sy:.62,phase:.2},{t:.61,n:-2.35,b:1.55,sx:2.6,sy:.58,phase:2.5},{t:.82,n:1.75,b:1.2,sx:3.2,sy:.68,phase:4.4}];function ue(e,t){let n=M[Math.min(M.length-1,Math.floor(x()*M.length))],i=o.clamp(n.t+(x()-.5)*.105,0,1),a=k(i),{tangent:s,normal:c,binormal:l}=j(i),u=e===`far`?1.16:e===`mid`?1:.76,d=x()+x()+x()+x()-2,f=x()+x()+x()+x()-2,p=d*n.sx*r.composition.islandStretch*u,m=f*n.sy*u,h=.34*Math.tanh(Math.abs(p)*.55),g=a.clone().addScaledVector(c,n.n*(1-h*.18)).addScaledVector(l,n.b).addScaledVector(s,p).addScaledVector(c,m).addScaledVector(l,m*.42*Math.sin(n.phase+i*9)).addScaledVector(c,-Math.sign(n.n||1)*Math.abs(p)*h*.16);return g.length()>t&&g.setLength(t*(.84+x()*.085)),{p:g,t:i,lane:1.18+Math.abs(m)/(n.sy+.001)}}function de(e){let t=[[new a(-4.75,4.05,1.65),2.85],[new a(4.7,-3.85,-1.75),2.95],[new a(-.35,-5.05,1.35),2.4],[new a(1.2,4.85,-2.25),2.15]],n=0;for(let[r,i]of t){let t=e.distanceTo(r);n=Math.max(n,Math.exp(-(t*t)/(2*i*i)))}return n}function fe(e,t=0){let n=r.naturalField.scale,i=Math.cos(t),a=Math.sin(t),s=e.x*i-e.z*a,c=e.x*a+e.z*i,l=s+r.naturalField.offsetX,u=e.y+r.naturalField.offsetY,d=c+r.naturalField.offsetZ,f=Math.sin(l*n*.78+u*n*.41-d*n*.32+.7*t),p=Math.sin(-l*n*.27+u*n*.87+d*n*.51+1.35-.3*t),m=Math.sin(l*n*.45-u*n*.24+d*n*.69-.55+.6*t),h=Math.sin(d*n*.43+l*n*.15-u*n*.08)*r.naturalField.depthVariation,g=f*.3+p*.24+m*.18+h,_=de(e)*r.composition.quietStrength,v=ce(e).affinity*.18;return o.clamp(1+g*r.naturalField.strength-_-v,.5,1.26)}function pe(){return{total:0,xp:0,xn:0,yp:0,yn:0,zp:0,zn:0,wxp:0,wxn:0,wyp:0,wyn:0}}function N(e,t){if(!t||t.total<24)return 1;let n=t.total*.5,i=e.x>=0?`xp`:`xn`,a=e.y>=0?`yp`:`yn`,s=e.z>=0?`zp`:`zn`,c=(t[i]-n)/Math.max(n,1)+(t[a]-n)/Math.max(n,1)*.52+(t[s]-n)/Math.max(n,1)*.25;return o.clamp(1-c*r.composition.balanceStrength,.7,1.3)}function me(e,t,n,r){let i=o.clamp(t*n*N(e,r),.12,.96);return x()>i?!1:(r.total++,r[e.x>=0?`xp`:`xn`]++,r[e.y>=0?`yp`:`yn`]++,r[e.z>=0?`zp`:`zn`]++,!0)}function he(e,t,n){if(!t||t.total<30||n<1.15)return 1;let i=e.x>=0?t.wxp:t.wxn,a=e.x>=0?t.wxn:t.wxp,s=e.y>=0?t.wyp:t.wyn,c=e.y>=0?t.wyn:t.wyp,l=(i-a)/Math.max(6,i+a)+.52*(s-c)/Math.max(6,s+c);return o.clamp(1-l*r.composition.brightBalance,.42,1.18)}function ge(e,t,n){t&&(e.x>=0?t.wxp+=n:t.wxn+=n,e.y>=0?t.wyp+=n:t.wyn+=n)}function _e(e,t,n){if(e===`river`){let e=Math.exp(-(((t-.36)/.11)**2)),r=Math.exp(-(((t-.7)/.12)**2)),i=Math.exp(-(((t-.88)/.12)**2)),a=.16+.34*t+.42*Math.max(e,r)-.28*i;return a=o.clamp(a+(n-.5)*.075,0,1),P(a)}return P(e===`satellite`?o.clamp(.22+n*.58,0,1):n)}function P(e){let t=new u(r.colors.blue),n=new u(r.colors.cyan),i=new u(r.colors.violet),a=new u(r.colors.white),o=new u(r.colors.warm);return e<.46?t.clone().lerp(n,e/.46):e<.86?n.clone().lerp(i,(e-.46)/.4):e<.965?i.clone().lerp(a,(e-.86)/.105):a.clone().lerp(o,(e-.965)/.035)}function ve(e,t,n,r,i,a,o,s=[],c=[],l=[],u=[]){let d=new p;d.setAttribute(`position`,new m(e,3)),d.setAttribute(`color`,new m(t,3)),d.setAttribute(`aSize`,new m(n,1)),d.setAttribute(`aAlpha`,new m(r,1)),d.setAttribute(`aPhase`,new m(i,1)),d.setAttribute(`aDepth`,new m(a,1)),d.setAttribute(`aLuminosity`,new m(o,1));let f=e.length/3,h=(e,t)=>e.length===f?e:Array(f).fill(t);return d.setAttribute(`aFlowAffinity`,new m(h(s,0),1)),d.setAttribute(`aFlowPhase`,new m(h(c,0),1)),d.setAttribute(`aFlowLane`,new m(h(l,0),1)),d.setAttribute(`aFlowSpeed`,new m(h(u,0),1)),d}function ye(e){let t=Math.max(x(),1e-6),n=1;if(n=e===`far`?.78+t**7.5*.72:e===`mid`?.88+t**6*1.55:.96+t**4.2*2.55,x()<r.hero.probability){let e=x()**.42;n*=o.lerp(1.65,r.hero.brightness,e)}return n}function be(e,t,n){let i=Math.max(t-1,0),a=1+i**.58*.22;n===`near`&&(a*=1+i**.72*.1);let s=o.clamp((t-1.45)/3.2,0,1),c=o.clamp(.55+r.hero.size*.0475,.7,1.5);return a*=o.lerp(1,c,s),e*a}function xe(e){let t=Math.round(e*r.composition.riverRatio),n=Math.round(e*r.composition.satelliteRatio);return{ambient:Math.max(0,e-t-n),river:t,satellite:n}}function Se(e,t,n,i,a=0,s=0,c=null){let l=r.sphere.radius*(n===`far`?.94:n===`mid`?.92:.9),u=ye(n);if(i===`river`){let e=Math.exp(-(((a-.36)/.105)**2)),t=Math.exp(-(((a-.7)/.115)**2)),n=Math.exp(-(((a-.53)/.08)**2));u*=o.clamp(.91+e*.15+t*.23-n*.1,.78,1.26)}i===`satellite`&&(u*=.94+x()*.12);let d=he(t,c,Math.max(u,1)**1.4);u>1.55&&x()>d&&(u=1.05+(u-1.05)*.46);let f=be((n===`far`?r.far.size:n===`mid`?r.mid.size:r.near.size)*(n===`far`?.5+x()*.72:n===`mid`?.58+x()*.88:.66+x()*.98),u,n);if(i===`river`){let e=Math.max(Math.exp(-(((a-.36)/.115)**2)),Math.exp(-(((a-.7)/.125)**2))),t=Math.exp(-(((a-.53)/.085)**2));f*=1+e*.1+Math.exp(-s*s*1.6)*.035-t*.055}let p=n===`far`?.17+x()*.42:n===`mid`?.28+x()*.54:.42+x()*.5,m=i===`ambient`?.88:i===`river`?1:.96;i===`river`&&(m*=o.clamp(.84+oe(a)*.2,.82,1.12));let h=o.clamp(p*m,.1,1),g=_e(i,a,x());if(e.P.push(t.x,t.y,t.z),e.C.push(g.r,g.g,g.b),e.S.push(f),e.A.push(h),e.H.push(x()*Math.PI*2),e.D.push(t.length()/l),e.L.push(u),i===`river`)e.FA.push(o.clamp(1-s*.34,.34,1)),e.FP.push(a),e.FL.push(s),e.FS.push((n===`far`?.78:n===`mid`?.96:1.1)*(.82+x()*.42));else{let r=ce(t);e.FA.push(i===`satellite`?o.clamp(Math.max(r.affinity*.52,.2),.2,.58):r.affinity*.28),e.FP.push(r.t),e.FL.push(r.d/Math.max(r.width,.001)),e.FS.push((n===`far`?.58:n===`mid`?.7:.82)*(.8+x()*.35))}ge(t,c,f*h*Math.max(u,.8)**1.15*.1)}function Ce(){return{P:[],C:[],S:[],A:[],H:[],D:[],L:[],FA:[],FP:[],FL:[],FS:[]}}function F(e){return ve(e.P,e.C,e.S,e.A,e.H,e.D,e.L,e.FA,e.FP,e.FL,e.FS)}function we(e,t,n,r,i){let a=new p;return a.setAttribute(`position`,new m(e,3)),a.setAttribute(`color`,new m(t,3)),a.setAttribute(`aSize`,new m(n,1)),a.setAttribute(`aAlpha`,new m(r,1)),a.setAttribute(`aPhase`,new m(i,1)),a}function Te(e,t,n,i,a,s){let c=Ce(),l=xe(t),u=pe(),d=0,f=0;for(;d<l.ambient&&f<Math.max(5e3,l.ambient*35);){f++;let t=w(n,i);e===`near`&&(t.z=o.lerp(t.z,Math.abs(t.z),r.near.cameraBias*.52),t.z+=.28+x()*.58,t.length()>n&&t.setLength(n*(.76+x()*.14))),me(t,a,fe(t,s),u)&&(Se(c,t,e,`ambient`,0,0,u),d++)}for(let t=0;t<l.river;t++){let t=le(e,n);Se(c,t.p,e,`river`,t.t,t.lane,u)}for(let t=0;t<l.satellite;t++){let t=ue(e,n);Se(c,t.p,e,`satellite`,t.t,t.lane,u)}return F(c)}function Ee(){return Te(`far`,r.far.count,r.sphere.radius*.94,r.far.shellBias,0,0)}function De(){return Te(`mid`,r.mid.count,r.sphere.radius*.92,r.mid.shellBias,.67,.72)}function Oe(){return Te(`near`,r.near.count,r.sphere.radius*.9,.62,.5,-.48)}function ke(){let e=[],t=[],n=[],i=[],a=[],s=r.sphere.radius*.91,c=Math.round(r.dust.count*.16),l=Math.max(0,r.dust.count-c),u=0,d=0;for(;u<l&&d<Math.max(4e3,l*30);){d++;let c=w(s,.52);if(x()>o.clamp(.56*fe(c,.25),.18,.82))continue;let l=P(.16+x()*.56);e.push(c.x,c.y,c.z),t.push(l.r,l.g,l.b),n.push(r.dust.size*(.54+x()*1.04)),i.push(r.dust.opacity*(.24+x()*.62)),a.push(x()*Math.PI*2),u++}for(let o=0;o<c;o++){let o=le(`far`,s),c=_e(`river`,o.t,x());e.push(o.p.x,o.p.y,o.p.z),t.push(c.r,c.g,c.b),n.push(r.dust.size*(.62+x()*1.18)),i.push(r.dust.opacity*(.3+x()*.66)),a.push(x()*Math.PI*2)}return we(e,t,n,i,a)}let I={value:0};function Ae(e,t){return new l({uniforms:{uTime:I,uDrift:{value:r.motion.starDrift},uPixelRatio:{value:i.getPixelRatio()},uTwinkle:{value:r.motion.twinkle},uBrightness:{value:e},uGlow:{value:t},uAudioMid:{value:0},uAudioHigh:{value:0},uRiverLowColor:{value:y(r.colors.violet)},uRiverFlowColor:{value:y(r.colors.cyan)},uRiverHitColor:{value:y(r.colors.rim)},uAmbientLowColor:{value:y(r.colors.blue)},uAmbientHighColor:{value:y(r.colors.cyan)},uHeroColor:{value:y(r.colors.rim)},uFlowSpeed:{value:r.livingFlow.speed},uCurlStrength:{value:r.livingFlow.curlStrength},uConfinement:{value:r.livingFlow.confinement},uFlowStability:{value:r.livingFlow.stability},uFlowInfluence:{value:r.livingFlow.influence},uPulseSpeed:{value:r.livingFlow.speed*3.9},uPulseWidth:{value:r.livingFlow.pulseWidth},uPulseStrength:{value:r.livingFlow.pulseStrength},uVFXStrength:{value:r.livingFlow.vfxStrength},uTrailStrength:{value:r.livingFlow.trailStrength},uReleaseStrength:{value:r.livingFlow.releaseStrength},uVortexEvent:{value:r.livingFlow.vortexEvent},uPulsePhase:{value:0},uBeatImpulse:{value:0},uDownbeatImpulse:{value:0},uAudioSync:{value:0},uAmbientMotion:{value:0},uAmbientBeat:{value:0},uRiverPoints:{value:T}},vertexShader:`
    attribute float aSize;
    attribute float aAlpha;
    attribute float aPhase;
    attribute float aDepth;
    attribute float aLuminosity;
    attribute float aFlowAffinity;
    attribute float aFlowPhase;
    attribute float aFlowLane;
    attribute float aFlowSpeed;

    varying vec3 vColor;
    varying float vAlpha;
    varying float vPhase;
    varying float vDepth;
    varying float vLuminosity;
    varying float vFlowEdge;
    varying float vFlowPulse;
    varying float vTrail;
    varying float vRelease;
    varying float vRiverMask;
    varying vec2 vTrailDir;

    uniform float uTime;
    uniform float uDrift;
    uniform float uPixelRatio;
    uniform float uFlowSpeed;
    uniform float uCurlStrength;
    uniform float uConfinement;
    uniform float uFlowStability;
    uniform float uFlowInfluence;
    uniform float uPulseSpeed;
    uniform float uPulseWidth;
    uniform float uPulseStrength;
    uniform float uVFXStrength;
    uniform float uTrailStrength;
    uniform float uReleaseStrength;
    uniform float uVortexEvent;
    uniform float uPulsePhase;
    uniform float uBeatImpulse;
    uniform float uDownbeatImpulse;
    uniform float uAudioSync;
    uniform float uAmbientMotion;
    uniform float uAmbientBeat;
    uniform vec3 uRiverPoints[8];

    vec3 catmull(vec3 p0,vec3 p1,vec3 p2,vec3 p3,float t){
      float t2=t*t;
      float t3=t2*t;
      return .5*((2.0*p1)+(-p0+p2)*t+(2.0*p0-5.0*p1+4.0*p2-p3)*t2+(-p0+3.0*p1-3.0*p2+p3)*t3);
    }

    vec3 curvePoint(float t){
      float u=clamp(t,0.0,.999999)*7.0;
      int seg=int(floor(u));
      float f=fract(u);
      int i1=seg;
      int i2=min(seg+1,7);
      int i0=max(i1-1,0);
      int i3=min(i2+1,7);
      return catmull(uRiverPoints[i0],uRiverPoints[i1],uRiverPoints[i2],uRiverPoints[i3],f);
    }

    void curveFrame(float t,out vec3 tangent,out vec3 normal,out vec3 binormal){
      float e=.0025;
      vec3 a=curvePoint(max(0.0,t-e));
      vec3 b=curvePoint(min(.99999,t+e));
      tangent=normalize(b-a);
      vec3 ref=abs(tangent.y)<.88?vec3(0.0,1.0,0.0):vec3(1.0,0.0,0.0);
      normal=normalize(cross(tangent,ref));
      binormal=normalize(cross(tangent,normal));
      float roll=sin(t*6.2831853*2.15-.55)*.48+sin(t*6.2831853*4.1+.8)*.11;
      float cr=cos(roll),sr=sin(roll);
      vec3 n=normal*cr+binormal*sr;
      vec3 bn=binormal*cr-normal*sr;
      normal=n;
      binormal=bn;
    }

    void main(){
      vColor=color;
      vAlpha=aAlpha;
      vPhase=aPhase;
      vDepth=aDepth;
      vLuminosity=aLuminosity;
      vFlowEdge=1.0;
      vFlowPulse=0.0;
      vTrail=0.0;
      vRelease=0.0;
      vRiverMask=0.0;
      vTrailDir=vec2(1.0,0.0);

      vec3 p=position;
      float riverMask=smoothstep(.60,.84,aFlowAffinity)*uFlowInfluence;
      float satelliteMask=smoothstep(.18,.30,aFlowAffinity)*(1.0-smoothstep(.56,.62,aFlowAffinity));
      float flowMask=riverMask;
      vRiverMask=flowMask;

      if(flowMask>.001){
        // Base transport still follows each particle's baked phase/speed, but a coherent
        // packet now travels through the river and gives the eye one readable direction.
        float travel=uTime*uFlowSpeed*aFlowSpeed;
        float baseT=fract(aFlowPhase+travel);
        float autonomousPulse=mod(uTime*uPulseSpeed,1.24);
        float syncedPulse=mod(uPulsePhase,1.24);
        float pulseCycle=mix(autonomousPulse,syncedPulse,uAudioSync);
        float pulseHead=pulseCycle-.12;
        // Art-direction pass: the packet crosses an open river, then rests briefly before the next phrase.
        // Particle transport may recycle, but the visible energy phrase does not wrap from exit to entrance.
        float signedPulse=baseT-pulseHead;
        float pulseDelta=abs(signedPulse);
        float pulseSigma=max(.025,uPulseWidth);
        float pulse=exp(-(pulseDelta*pulseDelta)/(2.0*pulseSigma*pulseSigma));
        float eventGain=1.0+uBeatImpulse*.62+uDownbeatImpulse*.86;
        float packet=pulse*uPulseStrength*flowMask*eventGain;

        // The packet advances particles locally rather than just making them brighter.
        // This creates a moving compression/release wave while keeping the spline stable.
        float movingT=fract(baseT+packet*(.010+.014*aFlowSpeed));
        vFlowPulse=packet;

        vec3 oldTangent,oldNormal,oldBinormal;
        vec3 newTangent,newNormal,newBinormal;
        curveFrame(aFlowPhase,oldTangent,oldNormal,oldBinormal);
        curveFrame(movingT,newTangent,newNormal,newBinormal);

        vec3 oldCenter=curvePoint(aFlowPhase);
        vec3 newCenter=curvePoint(movingT);
        vec3 local=p-oldCenter;
        float n0=dot(local,oldNormal);
        float b0=dot(local,oldBinormal);
        float along0=dot(local,oldTangent);

        // Curl is intentionally localized into two river bends instead of running
        // everywhere. Forward advection remains the dominant visual grammar.
        float vortexA=exp(-pow((movingT-.36)/.105,2.0));
        float vortexB=exp(-pow((movingT-.69)/.125,2.0));
        float eventA=.35+.65*(.5+.5*sin(uTime*.47+1.1));
        float eventB=.30+.70*(.5+.5*sin(uTime*.39+3.0));
        float phraseGate=smoothstep(.08,.34,packet);
        float vortexMask=clamp(vortexA*.78*eventA+vortexB*.58*eventB,0.0,1.0)
          *mix(.30,1.0,uVortexEvent)*phraseGate*(1.0+uDownbeatImpulse*.38);
        float curlPhase=uTime*uCurlStrength*(.20+.30*aFlowSpeed)*(1.0+.16*aFlowLane)*vortexMask+aPhase*.12*vortexMask;
        float cc=cos(curlPhase),ss=sin(curlPhase);
        float n1=n0*cc-b0*ss;
        float b1=n0*ss+b0*cc;

        // Coherent packet briefly tightens lanes, then lets them open again behind it.
        float breathe=.5+.5*sin(uTime*(.20+.08*aFlowSpeed)+aPhase*1.25);
        float baseReturn=uConfinement*(.045+.055*breathe)*smoothstep(.15,1.35,aFlowLane);
        float packetReturn=packet*(.10+.08*smoothstep(.25,1.25,aFlowLane));
        float radialScale=1.0-clamp(baseReturn+packetReturn,0.0,.34);
        n1*=radialScale;
        b1*=radialScale;

        // High inertia means only broad, slow irregularities survive.
        float micro=(1.0-uFlowStability)*(.055+.060*aFlowLane);
        n1+=sin(uTime*.45+aPhase*1.8+movingT*12.0)*micro*(1.0-.55*packet);
        b1+=cos(uTime*.39-aPhase*1.3+movingT*10.0)*micro*.70*(1.0-.55*packet);

        // A small tangent compression around the pulse helps nearby particles read as a
        // short-lived moving queue instead of unrelated individual movers.
        float signedCompression=clamp(signedPulse/pulseSigma,-2.0,2.0);
        float tangentCompression=signedCompression*packet*.032;

        // V2.1: art-directed compression -> release rhythm around two river nodes.
        float compressionNode=exp(-pow((movingT-.46)/.080,2.0));
        float releaseNodeA=exp(-pow((movingT-.64)/.066,2.0));
        float releaseNodeB=exp(-pow((movingT-.80)/.054,2.0));
        float releaseWindow=max(releaseNodeA,releaseNodeB)*packet*uReleaseStrength*uVFXStrength
          *(1.0+uDownbeatImpulse*.58);
        float compress=1.0-compressionNode*packet*.18*uVFXStrength;
        float expand=1.0+releaseWindow*.18;
        n1*=compress*expand;
        b1*=compress*expand;

        // Sparse lateral release: deterministic per-particle phase, then soft return as packet leaves.
        float releaseSelect=smoothstep(.70,.95,.5+.5*sin(aPhase*7.13+aFlowSpeed*5.7));
        float releaseLife=releaseWindow*releaseSelect;
        float releaseAngle=aPhase*1.73+movingT*9.0;
        vec3 releaseDir=newNormal*cos(releaseAngle)+newBinormal*sin(releaseAngle);
        vec3 releaseOffset=releaseDir*releaseLife*(.12+.26*smoothstep(.2,1.25,aFlowLane));
        vRelease=releaseLife;

        vec3 flowed=newCenter+newNormal*n1+newBinormal*b1+newTangent*(along0*.24-tangentCompression)+releaseOffset;
        p=mix(p,flowed,flowMask);

        // Trail eligibility is intentionally sparse and biased to Mid/Near-like bright particles.
        float trailSelect=smoothstep(.82,.975,.5+.5*sin(aPhase*11.7+aFlowSpeed*8.1));
        float brightSelect=smoothstep(1.15,2.55,aLuminosity);
        vTrail=packet*trailSelect*brightSelect*uTrailStrength*uVFXStrength;
        vec3 viewTan=normalize((modelViewMatrix*vec4(newTangent,0.0)).xyz);
        vTrailDir=normalize(viewTan.xy+vec2(1e-4));

        // Hide recycling at tapered ends; pulse also fades there so no bright jump appears.
        float edgeFade=smoothstep(.018,.085,movingT)*(1.0-smoothstep(.915,.982,movingT));
        vFlowEdge=mix(1.0,edgeFade,flowMask);
        vFlowPulse*=edgeFade;
      }

      // Satellite fields answer the passing packet, but remain subordinate to the river.
      if(satelliteMask>.001){
        float autonomousPulseSat=mod(uTime*uPulseSpeed,1.24);
        float syncedPulseSat=mod(uPulsePhase,1.24);
        float pulseCycleSat=mix(autonomousPulseSat,syncedPulseSat,uAudioSync);
        float pulseHeadSat=pulseCycleSat-.12;
        float sd=abs(aFlowPhase-pulseHeadSat);
        float sp=exp(-(sd*sd)/(2.0*max(.035,uPulseWidth*1.35)*max(.035,uPulseWidth*1.35)));
        vec3 st,sn,sb; curveFrame(aFlowPhase,st,sn,sb);
        float tug=sp*satelliteMask*uVFXStrength*.055;
        p+=st*tug+sn*sin(aPhase*2.1+uTime*.3)*tug*.45;
        vFlowPulse=max(vFlowPulse,sp*satelliteMask*.22*uVFXStrength);
      }

      // Ambient stars have their own broad orbit/breathing response; they are not river leftovers.
      float ambientMask=1.0-max(flowMask,satelliteMask*.25);
      float nearFactor=1.0-aDepth;
      float driftT=uTime*uDrift;
      p.x+=sin(aPhase+driftT*.18+aDepth*3.0)*.018*nearFactor*ambientMask;
      p.y+=cos(aPhase*1.21-driftT*.14+aDepth*4.1)*.014*nearFactor*ambientMask;
      p.z+=sin(aPhase*.70+driftT*.10)*.010*nearFactor*ambientMask;

      // Non-river stars breathe as a restrained field instead of remaining inert.
      float ambientAudioPhase=aPhase*1.37+uTime*(.34+uAmbientMotion*.48);
      float ambientAudioAmount=uAmbientMotion*(.18+.22*nearFactor)*ambientMask;
      p+=vec3(
        sin(ambientAudioPhase),
        cos(ambientAudioPhase*1.17),
        sin(ambientAudioPhase*.73+1.4)
      )*ambientAudioAmount;
      float ambientBeatSelect=.35+.65*(.5+.5*sin(aPhase*5.31));
      p+=normalize(p+vec3(1e-4))*uAmbientBeat*.42*ambientBeatSelect*ambientMask;

      vec4 mv=modelViewMatrix*vec4(p,1.0);
      gl_Position=projectionMatrix*mv;
      float perspective=300.0/max(-mv.z,.70);
      float lumSize=1.0+pow(max(aLuminosity-1.0,0.0),.52)*.10;
      float ambientAudioSize=1.0+(uAmbientMotion*.18+uAmbientBeat*.58)*ambientMask;
      gl_PointSize=max(1.0,aSize*lumSize*(1.0+vFlowPulse*.22+vTrail*.58+vRelease*.12)*ambientAudioSize*uPixelRatio*perspective*.095);
    }
    `,fragmentShader:`
    precision highp float;

    varying vec3 vColor;
    varying float vAlpha;
    varying float vPhase;
    varying float vDepth;
    varying float vLuminosity;
    varying float vFlowEdge;
    varying float vFlowPulse;
    varying float vTrail;
    varying float vRelease;
    varying float vRiverMask;
    varying vec2 vTrailDir;

    uniform float uTime;
    uniform float uTwinkle;
    uniform float uBrightness;
    uniform float uGlow;
    uniform float uAudioMid;
    uniform float uAudioHigh;
    uniform vec3 uRiverLowColor;
    uniform vec3 uRiverFlowColor;
    uniform vec3 uRiverHitColor;
    uniform vec3 uAmbientLowColor;
    uniform vec3 uAmbientHighColor;
    uniform vec3 uHeroColor;

    void main(){
      vec2 q =
        gl_PointCoord-.5;

      float r=length(q);

      if(r>.5){
        discard;
      }

      vec2 td=normalize(vTrailDir+vec2(1e-4));
      vec2 tp=vec2(dot(q,td),dot(q,vec2(-td.y,td.x)));
      float tail=exp(-pow(max(tp.x,0.0)*5.2,2.0)-pow(tp.y*18.0,2.0))*vTrail;
      tail*=smoothstep(.48,.04,r);

      float lum =
        max(vLuminosity,0.6);

      float core =
        exp(-r*r*82.0);

      float halo =
        exp(-r*r*12.0)*
        uGlow*
        mix(
          .72,
          1.55,
          clamp((lum-1.0)/3.0,0.0,1.0)
        );

      float cross =
        (
          exp(-abs(q.x)*25.0)*
          exp(-abs(q.y)*4.0)
          +
          exp(-abs(q.y)*25.0)*
          exp(-abs(q.x)*4.0)
        )
        *.035*
        (1.0-vDepth)*
        clamp((lum-.9)*.7,0.0,1.0);

      float tw =
        1.0+
        sin(
          uTime*
          (.44+.22*(1.0-vDepth))
          +vPhase
        )*
        uTwinkle*
        mix(
          .08,
          .16,
          clamp((lum-1.0)/2.5,0.0,1.0)
        );

      float pulseAlpha=1.0+vFlowPulse*.42+vRelease*.16;

      float alpha =
        (core+halo+cross+tail*.42)*
        vAlpha*
        tw*
        vFlowEdge*
        pulseAlpha;

      float midBand=.5+.5*sin(vPhase*2.7+uTime*(.32+uAudioMid*1.25));
      float highBand=pow(.5+.5*sin(vPhase*7.3-uTime*(.75+uAudioHigh*2.1)),5.0);
      float bassBand=.5+.5*sin(vPhase*.83+uTime*.16+vDepth*4.2);
      float ambientMask=1.0-smoothstep(.08,.72,vRiverMask);
      float heroMask=smoothstep(2.05,3.35,vLuminosity)*ambientMask;
      vec3 ambientColor=mix(uAmbientLowColor,uAmbientHighColor,highBand);
      vec3 audioColor=mix(vColor,ambientColor,ambientMask*.86);
      float riverColorMask=smoothstep(.08,.72,vRiverMask);
      vec3 riverColor=mix(uRiverLowColor,uRiverFlowColor,midBand);
      riverColor=mix(riverColor,uRiverHitColor,highBand*.78);
      audioColor=mix(audioColor,riverColor,riverColorMask);
      audioColor=mix(audioColor,uHeroColor,heroMask*(.58+.42*highBand));
      vec3 pulseTint=mix(vec3(1.0),vec3(.82,1.08,1.18),clamp(vFlowPulse,0.0,1.0));
      vec3 color =
        audioColor*
        pulseTint*
        (core*1.34+halo+cross+tail*.72)*
        uBrightness*
        lum*
        tw*
        (1.0+vFlowPulse*.52+vRelease*.14);
      // Limit additive/HDR energy at the final output, while preserving hue ratios.
      float peak=max(max(color.r,color.g),color.b);
      color*=peak>1.35?(1.35+.34*(1.0-exp(-(peak-1.35)*.72)))/peak:1.0;

      gl_FragColor=
        vec4(
          color,
          alpha
        );
    }
    `,transparent:!0,depthTest:!0,depthWrite:!1,...S(),vertexColors:!0,toneMapped:!1})}let L=Ae(r.far.brightness,.36),je=Ae(r.mid.brightness,.52),Me=Ae(r.near.brightness,.68),R=new l({uniforms:{uTime:I,uPixelRatio:{value:i.getPixelRatio()},uDrift:{value:r.dust.drift},uAudioEnergy:{value:0},uAudioMotion:{value:0},uAudioHigh:{value:0},uAudioBeat:{value:0},uDustBaseColor:{value:y(r.colors.blue)},uDustSparkColor:{value:y(r.colors.cyan)},uDustHitColor:{value:y(r.colors.rim)}},vertexShader:`
    attribute float aSize;
    attribute float aAlpha;
    attribute float aPhase;

    varying vec3 vColor;
    varying float vAlpha;

    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uDrift;
    uniform float uAudioEnergy;
    uniform float uAudioMotion;
    uniform float uAudioHigh;
    uniform float uAudioBeat;
    uniform vec3 uDustBaseColor;
    uniform vec3 uDustSparkColor;
    uniform vec3 uDustHitColor;

    void main(){
      float shimmer=.5+.5*sin(aPhase*2.41+uTime*(1.2+uAudioHigh*2.8));
      float eventLift=uAudioBeat*.92;
      vec3 dustColor=mix(color,uDustBaseColor,.78);
      float dustHighBand=pow(shimmer,4.0);
      dustColor=mix(dustColor,uDustSparkColor,.18+dustHighBand*.68);
      dustColor=mix(dustColor,uDustHitColor,eventLift*(.30+dustHighBand*.55));
      vColor=dustColor*(1.0+uAudioEnergy*.72+uAudioHigh*shimmer*.48+eventLift*.42);
      vAlpha=aAlpha*(1.0+uAudioEnergy*1.10+uAudioHigh*shimmer*.72+eventLift*.95);

      vec3 p=position;
      float t=uTime*uDrift;

      p.x+=sin(aPhase+t*.14)*.026;
      p.y+=cos(aPhase*1.17-t*.11)*.020;
      p.z+=sin(aPhase*.71+t*.08)*.015;

      float audioPhase=aPhase*1.63+uTime*(.55+uAudioMotion*1.35);
      float audioDrift=uAudioMotion*(.07+.08*shimmer);
      p+=vec3(
        sin(audioPhase),
        cos(audioPhase*1.11),
        sin(audioPhase*.79+2.0)
      )*audioDrift;
      vec3 radial=normalize(p+vec3(1e-4));
      vec3 tangent=normalize(cross(radial,normalize(vec3(.17,1.0,.11)))+vec3(1e-4));
      float swirlWave=.35+.65*(.5+.5*sin(aPhase*1.91+uTime*(.42+uAudioMotion*.74)));
      p+=tangent*uAudioMotion*(.12+.18*shimmer)*swirlWave;
      float beatSelect=.25+.75*(.5+.5*sin(aPhase*4.73));
      p+=radial*uAudioBeat*.24*beatSelect;

      vec4 mv=
        modelViewMatrix*
        vec4(p,1.0);

      gl_Position=
        projectionMatrix*
        mv;

      gl_PointSize=
        max(
          1.0,
          aSize*
          uPixelRatio*
          280.0/
          max(-mv.z,.70)*
          .080*
          (1.0+uAudioEnergy*.72+uAudioHigh*shimmer*.48+eventLift*1.15)
        );
    }
    `,fragmentShader:`
    precision highp float;

    varying vec3 vColor;
    varying float vAlpha;

    void main(){
      vec2 q=gl_PointCoord-.5;
      float r=length(q);

      if(r>.5){
        discard;
      }

      float alpha=
        exp(-r*r*10.0)*
        vAlpha;

      gl_FragColor=
        vec4(
          vColor*alpha*.40/(1.0+max(max(vColor.r,vColor.g),vColor.b)*alpha*.12),
          alpha
        );
    }
    `,transparent:!0,depthTest:!0,depthWrite:!1,...S(),vertexColors:!0,toneMapped:!1});function Ne(e){for(let t of[...e.children])t.geometry&&t.geometry.dispose(),e.remove(t)}function Pe(){Ne(g),Ne(_),ee();let e=new n(Ee(),L),t=new n(De(),je),r=new n(Oe(),Me),i=new n(ke(),R);for(let n of[e,t,r,i])n.frustumCulled=!1;e.name=`Far Directed Field`,t.name=`Mid Directed Field`,r.name=`Near Directed Field`,i.name=`3D Dust`,g.add(e,t,r),_.add(i)}let Fe=new d(r.sphere.radius*.945,64,48),z={uTime:I,uStrength:{value:r.sphere.atmosphere},uBlue:{value:y(r.colors.blue)},uViolet:{value:y(r.colors.violet)},uAudioSection:{value:0},uAudioTrend:{value:0}},Ie=new l({uniforms:z,vertexShader:`
    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;

    void main(){
      vec4 world=
        modelMatrix*
        vec4(position,1.0);

      vWorldPos=
        world.xyz;

      vWorldNormal=
        normalize(
          mat3(modelMatrix)*
          normal
        );

      gl_Position=
        projectionMatrix*
        viewMatrix*
        world;
    }
    `,fragmentShader:`
    precision highp float;

    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;

    uniform float uTime;
    uniform float uStrength;
    uniform vec3 uBlue;
    uniform vec3 uViolet;
    uniform float uAudioSection;
    uniform float uAudioTrend;

    void main(){
      vec3 V=
        normalize(
          cameraPosition-
          vWorldPos
        );

      float rim=
        pow(
          1.0-
          abs(
            dot(
              V,
              normalize(vWorldNormal)
            )
          ),
          2.55
        );

      float broad=
        .5+
        .5*sin(
          vWorldPos.x*.14-
          vWorldPos.z*.12+
          vWorldPos.y*.09+
          uTime*(.028+uAudioSection*.11)+uAudioTrend*1.7
        );

      float alpha=
        (
          .022+
          (.064+uAudioSection*.052)*broad
        )*
        uStrength*
        (
          .14+
          .86*rim
        );

      vec3 color=
        mix(
          uBlue,
          uViolet,
          .24+.28*broad+uAudioSection*.18
        );

      gl_FragColor=
        vec4(
          color*alpha,
          alpha
        );
    }
    `,transparent:!0,side:1,depthWrite:!1,...S(),toneMapped:!1});h.add(new t(Fe,Ie));let Le=new d(r.sphere.radius,128,96),B={uTime:I,uOpacity:{value:r.sphere.shellOpacity},uRimStrength:{value:r.sphere.rimStrength},uRimPower:{value:r.sphere.rimPower},uVariation:{value:r.sphere.edgeVariation},uRim:{value:y(r.colors.rim)},uCyan:{value:y(r.colors.cyan)},uViolet:{value:y(r.colors.violet)},uAudioMid:{value:0},uAudioHigh:{value:0},uAudioDownbeat:{value:0},uAudioColorAmount:{value:0}},Re=new l({uniforms:B,vertexShader:`
    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;

    void main(){
      vec4 world=
        modelMatrix*
        vec4(position,1.0);

      vWorldPos=
        world.xyz;

      vWorldNormal=
        normalize(
          mat3(modelMatrix)*
          normal
        );

      gl_Position=
        projectionMatrix*
        viewMatrix*
        world;
    }
    `,fragmentShader:`
    precision highp float;

    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;

    uniform float uTime;
    uniform float uOpacity;
    uniform float uRimStrength;
    uniform float uRimPower;
    uniform float uVariation;

    uniform vec3 uRim;
    uniform vec3 uCyan;
    uniform vec3 uViolet;
    uniform float uAudioMid;
    uniform float uAudioHigh;
    uniform float uAudioDownbeat;
    uniform float uAudioColorAmount;

    void main(){
      vec3 V=
        normalize(
          cameraPosition-
          vWorldPos
        );

      float rim=
        pow(
          clamp(
            1.0-
            abs(
              dot(
                V,
                normalize(vWorldNormal)
              )
            ),
            0.0,
            1.0
          ),
          uRimPower
        );

      float a=
        atan(
          vWorldPos.y,
          vWorldPos.x
        );

      float b=
        atan(
          vWorldPos.z,
          length(vWorldPos.xy)
        );

      float broad=
        .68+
        .16*sin(
          a*2.0+
          b*1.15+
          uTime*.026
        )+
        .10*sin(
          b*3.7-
          a*.70-
          uTime*.020
        );

      broad=
        mix(
          1.0,
          broad,
          uVariation
        );

      float broken=
        .58+
        .42*
        smoothstep(
          -.80,
          .68,
          sin(
            a*1.08-
            b*.64+
            .76
          )
        );

      float accent=
        pow(
          .5+
          .5*sin(
            a*4.9+
            b*3.2+
            sin(a*1.6)*1.0
          ),
          14.0
        );

      vec3 color=
        mix(
          uRim,
          uCyan,
          .13+
          .09*sin(a*1.5)
        );

      color=
        mix(
          color,
          uViolet,
          accent*.12
        );

      // The palette uniforms already contain the audio response. This value only
      // crossfades the original shell into that palette, avoiding a second audio gate.
      float audioAmount=clamp(uAudioColorAmount,0.0,1.0);
      float slowBand=.5+.5*sin(
        a*(2.0+uAudioMid*1.6)+b*1.4-uTime*(.10+uAudioMid*.48)
      );
      float counterBand=.5+.5*sin(
        a*(-3.1-uAudioHigh*.8)+b*4.3+uTime*(.08+uAudioHigh*.52)+1.7
      );
      vec3 flowingPalette=mix(uViolet,uCyan,slowBand);
      flowingPalette=mix(flowingPalette,uRim,counterBand*.30);

      float highGlint=pow(counterBand,5.0)*uAudioHigh;
      float beatWave=pow(.5+.5*sin(a*3.2-b*2.4-uTime*2.1),8.0)*uAudioDownbeat;
      flowingPalette=mix(flowingPalette,uRim,clamp(highGlint*.16+beatWave*.24,0.0,.26));
      color=mix(color,flowingPalette,clamp(audioAmount*1.18,0.0,.96));

      float alpha=
        rim*
        uRimStrength*
        broad*
        broken*
        uOpacity;

      alpha+=
        accent*
        rim*
        .035*
        uOpacity;

      alpha*=1.0+clamp(audioAmount*.10+highGlint*.06+beatWave*.12,0.0,.18);

      gl_FragColor=
        vec4(
          color*alpha,
          alpha
        );
    }
    `,transparent:!0,depthWrite:!1,...S(),toneMapped:!1});v.add(new t(Le,Re)),Pe();let V={bass:0,mid:0,high:0,motion:0,brightness:0,texture:0,variation:0,relativeEnergy:.5,sectionEnergy:0,energyTrend:0,bpm:0},H={kick:0,snare:0,hihat:0,impact:0,downbeat:0},U={kick:0,snare:0,hihat:0,impact:0,downbeat:0},W=0;function ze(e,t=1){return 1-Math.exp(-Math.max(0,Number(e)||0)*t)}let G={phase:0,mix:0};function K(e,t,n,r=10,i=3.5){let a=t>e?r:i;return e+(t-e)*(1-Math.exp(-a*n))}let q={scale:1,dustScale:1,atmosphereScale:1,starTilt:0,cameraDistance:r.camera.distance},J=null,Be={},Y={state:`CALM`,previous:`CALM`,candidate:`CALM`,candidateTime:0,stateTime:0,transition:1},X={hue:.64,hueVelocity:0,colorPhase:0,chroma:.13,lightness:.6};function Ve(e,t){if(!t)return`CALM`;let n=r.colorSection,i=n.sensitivity,a=e.sectionEnergy*i,o=.5+(e.relativeEnergy-.5)*i,s=e.energyTrend*i;return a>=n.peakThreshold&&o>=n.relativeThreshold?`PEAK`:s>=n.trendThreshold&&(e.variation>=n.variationThreshold||o>.56)?`BUILD`:s<=-n.trendThreshold&&a>n.calmThreshold*.8?`RELEASE`:a<=n.calmThreshold?`CALM`:`FLOW`}function He(e,t,n){let i=Y,a=Ve(t,n);i.stateTime+=e,a===i.candidate?i.candidateTime+=e:(i.candidate=a,i.candidateTime=0);let o=r.colorSection.minHold;a!==i.state&&i.candidateTime>=o&&i.stateTime>=o*.45&&(i.previous=i.state,i.state=a,i.stateTime=0,i.transition=0);let s=Math.max(.15,r.colorSection.transitionDuration/r.colorDirector.transitionSpeed);i.transition=Math.min(1,i.transition+e/s)}function Ue(){J={blue:E(r.colors.blue),cyan:E(r.colors.cyan),violet:E(r.colors.violet),rim:E(r.colors.rim),indigo:E(`#4930ff`)}}function Z(e,t,n,r=7,i=3){let a=Be[e]||(Be[e]=t.slice());for(let e=0;e<3;e++)a[e]=K(a[e],t[e],n,r,i);return a}function Q(e,t){let n=ie(re(t,{maxValue:1.45}),{threshold:1,headroom:.28,softness:.58});e.value.set(n[0],n[1],n[2])}let $=e=>(e%1+1)%1,We=(e,t)=>((t-e+.5)%1+1)%1-.5;function Ge(e){let t=[[.98,.08+e.bass],[.64,.08+e.mid],[.38,.06+e.high]],n=0,r=0;for(let[e,i]of t)n+=Math.cos(e*Math.PI*2)*i,r+=Math.sin(e*Math.PI*2)*i;return $(Math.atan2(r,n)/(Math.PI*2))}function Ke(e,t,n){let i=X,a={CALM:.42,FLOW:.92,BUILD:1.34,PEAK:1.72,RELEASE:.68},s=Y.transition*Y.transition*(3-2*Y.transition),c=o.lerp(a[Y.previous],a[Y.state],s),l=Ge(t),u=n?(.34+t.mid*.72+t.high*1.08+t.variation*.86)*c*r.colorDirector.transitionSpeed:0;i.colorPhase=(i.colorPhase+e*u)%(Math.PI*2e3);let d=(t.high-t.bass)*.22+(t.mid-(t.bass+t.high)*.5)*.12,f=(Math.sin(i.colorPhase)*.26+Math.sin(i.colorPhase*.37+1.7)*.13)*1,p=n?$(l+f+d*1+t.texture*.1+t.variation*.16):.64,m=t.energyTrend<-.06?-1:1,h=n?m*(.012+t.mid*.045+t.high*.07+t.variation*.115+t.texture*.035)*c*1*r.colorDirector.transitionSpeed:0;i.hueVelocity=K(i.hueVelocity,h,e,4.8,2.2),i.hue=$(i.hue+i.hueVelocity*e),i.hue=$(i.hue+We(i.hue,p)*(1-Math.exp(-e*(n?1.65*r.colorDirector.transitionSpeed:.8))));let g=Math.max(0,t.relativeEnergy-.42),_=+(Y.previous===`PEAK`),v=+(Y.state===`PEAK`),y=.065*o.lerp(_,v,s)*r.colorDirector.peakAccent,b=(.135+g*.13+t.variation*.085+t.texture*.055+y)*1.15,x=.52+t.brightness*.18+t.sectionEnergy*.09;i.chroma=K(i.chroma,n?b:.13,e,4.2,2),i.lightness=K(i.lightness,n?x:.6,e,3.2,1.5)}function qe(e,t,n,i){r.colorDirector.enabled||(t=0);let a=r.colorDirector,s=o.clamp(t*a.intensity,0,1.5),c=o.clamp(a.coverage,0,1.5),l=o.clamp(s*c,0,1),u=o.clamp(n.bass,0,1)**.72,d=o.clamp(n.mid,0,1)**.72,f=o.clamp(n.high,0,1)**.68,p=o.clamp(n.sectionEnergy,0,1)**.58,m=1.12,h=X.hue,g=X.colorPhase,_=X.chroma,v=X.lightness,y=(e,t,n)=>ne([o.clamp(e,.02,.94),o.clamp(t,.01,.3),$(n)]),b=$(h+Math.sin(g*.43+n.bass*2.8)*.1*m-n.bass*.08),x=$(h+Math.sin(g*.79+1.4+n.mid*3.4)*.2*m+n.mid*.12),ee=$(h+Math.sin(g*1.37+3.1+n.high*4.2)*.31*m+n.high*.24),S=y(v-.23,_*.62,b-.035*m),C=y(v,_,b),w=y(v+.055,_*1.02,x),T=y(v+.1,_*1.16,ee),E=y(v+.22,_*.46,$(x-.18*m)),re=y(v-.17,_*.58,$(b+.11*m)),ie=y(v-.11,_*.66,$(x+.18*m)),O=a.eventIntensity*a.peakAccent,k=te([S,C,w],[.18+u,.18+d,.12+f],{preserveChroma:.78,maxChromaScale:2.2}),A=r.riverColor,j=Math.min(1,(s*c*A.response*A.coverage)**.55),ae=D(J.indigo,D(S,C,u),j),oe=D(J.cyan,D(k,w,d),j),se=Math.min(1,O*(i.kick*A.kickAccent+i.impact*A.impactAccent)),ce=D(T,E,Math.min(1,f*A.highInfluence*.42+se)),le=D(J.rim,ce,j),M=r.ambientStarColor,ue=Math.min(1,(s*c*M.response*M.coverage)**.55),de=D(J.blue,D(S,w,p),ue),fe=D(w,T,Math.min(1,M.complementary*(f+i.snare*M.snareSpread+n.variation*M.variationInfluence))),pe=D(J.cyan,fe,ue),N=r.heroColor,me=Math.min(1,N.response*O*(i.kick*N.kickAccent+i.impact*N.impactAccent+i.downbeat*N.downbeatAccent)),he=Y.transition*Y.transition*(3-2*Y.transition),ge=D(D(E,T,o.lerp(+(Y.previous===`PEAK`),+(Y.state===`PEAK`),he)*N.warmPeak*.55),y(v+.25,_*.36,ee),me*N.colorCoverage),_e=D(J.rim,ge,l),P=r.dustColor,ve=Math.min(1,(s*c*P.response*P.coverage)**.55),ye=D(J.blue,D(S,k,n.texture),ve),be=D(w,T,Math.min(1,f*P.highInfluence+n.variation*P.variationInfluence)),xe=D(J.cyan,be,ve),Se=D(T,E,Math.min(1,O*i.hihat*P.hihatAccent)),Ce=D(J.rim,Se,ve),F=r.shellColor,we=Math.min(1,(s*c*F.response*F.coverage)**.5*(1-F.basePreservation)),Te=D(D(J.rim,C,we*F.sectionInfluence),T,Math.min(1,O*i.downbeat*F.downbeatInfluence)),Ee=D(J.cyan,w,we),De=D(J.violet,T,we),Oe=r.environmentColor,ke=D(J.blue,re,Math.min(1,s*Oe.atmosphereResponse)),I=D(J.violet,ie,Math.min(1,s*Oe.atmosphereResponse)),Ae=Z(`riverLow`,ae,e,5,2.5),Ne=Z(`riverFlow`,oe,e,5,2.5),Pe=Z(`riverHit`,le,e,18,7),Fe=Z(`ambientLow`,de,e,4,1.8),Ie=Z(`ambientHigh`,pe,e,7,2.8),Le=Z(`hero`,_e,e,22,3.4);for(let[e,t]of[L,je,Me].entries()){Q(t.uniforms.uRiverLowColor,Ae),Q(t.uniforms.uRiverFlowColor,Ne),Q(t.uniforms.uRiverHitColor,Pe);let n=o.clamp(.56+(e-1)*r.ambientStarColor.depthSeparation*.34,0,1);Q(t.uniforms.uAmbientLowColor,D(Fe,Ie,n*.24)),Q(t.uniforms.uAmbientHighColor,D(Fe,Ie,n)),Q(t.uniforms.uHeroColor,Le)}Q(R.uniforms.uDustBaseColor,Z(`dustBase`,ye,e,6,3)),Q(R.uniforms.uDustSparkColor,Z(`dustSpark`,xe,e,9,4)),Q(R.uniforms.uDustHitColor,Z(`dustHit`,Ce,e,20,8)),Q(B.uRim,Z(`shellRim`,Te,e,18,2.6)),Q(B.uCyan,Z(`shellCyan`,Ee,e,1.8,.75)),Q(B.uViolet,Z(`shellViolet`,De,e,1.8,.75)),Q(z.uBlue,Z(`atmosphereBlue`,ke,e,1.5,.7)),Q(z.uViolet,Z(`atmosphereViolet`,I,e,1.5,.7))}Ue();function Je(e){if(!e)return null;let t=Number(e.energy)||0,n=Number(e.bass)||0,r=Number(e.mid)||0,i=Number(e.high)||0;return{...e,bass:n,mid:r,high:i,energy:t,motion:Number(e.motion)||0,brightness:Number(e.brightness)||t,texture:Number(e.texture??e.percussive)||0,variation:Number(e.variation)||0,relativeEnergy:Number.isFinite(Number(e.relativeEnergy))?Number(e.relativeEnergy):.5,sectionEnergy:Number(e.sectionEnergy??t)||0,energyTrend:Number(e.energyTrend)||0,bpm:Number(e.bpm)||0,kick:Number(e.kick)||0,snare:Number(e.snare)||0,hihat:Number(e.hihat)||0,impact:Number(e.impact)||Math.max(Number(e.kick)||0,Number(e.snare)||0)*.7,downbeat:Number(e.downbeat)||+!!e.isDownbeat,isDownbeat:!!e.isDownbeat}}function Ye(t){let n=r.audioReactive.enabled&&e.hasAudioData?Je(e.audioFrame):null,i=!!n;if(i)H.kick=ze(n.kick,.62),H.snare=ze(n.snare,.82),H.hihat=ze(n.hihat,1.65),H.impact=ze(n.impact,1.05),H.downbeat=ze(n.downbeat,.9),(n.isDownbeat||n.downbeat>.5)&&(G.phase=0);else for(let e of Object.keys(H))H[e]=0;let a=r.colorEnvelope,o={kick:4.6/a.kickRelease,snare:4.6/a.snareRelease,hihat:4.6/a.hihatRelease,impact:4.6/a.impactRelease,downbeat:4.6/a.downbeatRelease};for(let e of Object.keys(U))U[e]=Math.max(H[e],U[e]*Math.exp(-o[e]*t));let s=n?Number(n.bpm)||0:V.bpm;i&&s>35&&(G.phase=(G.phase+t*1.24*s/60)%1.24),G.mix=K(G.mix,i&&s>35?1:0,t,3.5,2.2);for(let e of Object.keys(V)){let r=n?Number(n[e])||0:e===`relativeEnergy`?.5:0,i=e===`sectionEnergy`?2.2:8,a=e===`sectionEnergy`?.9:3;V[e]=K(V[e],r,t,i,a)}W=K(W,+!!i,t,5,2.2),He(t,V,i),Ke(t,V,i)}function Xe(e){let t=r.audioReactive,n=V,a=U,l=(t.enabled?t.strength:0)*W,u=l*t.motion,d=l*t.brightness,p=l*t.pulse,m=l*t.ambient,g=l*t.dust,v=o.clamp(n.sectionEnergy,0,1)**.58,y=o.clamp(n.energyTrend,-1,1),b=n.bpm>35?1.24*n.bpm/60:r.livingFlow.speed*3.9,x=Math.min(1,t.tempoSync*l),ee=o.lerp(r.livingFlow.speed*3.9,b,x),S=G.mix*t.tempoSync*+(l>0),C=l*t.color;qe(e,C,n,a);for(let[e,t,i]of[[L,r.far.brightness,.36],[je,r.mid.brightness,.52],[Me,r.near.brightness,.68]])e.uniforms.uFlowSpeed.value=r.livingFlow.speed*(1+u*(n.motion*.92+n.bass*.38)),e.uniforms.uCurlStrength.value=r.livingFlow.curlStrength*(1+u*n.motion*1.15),e.uniforms.uConfinement.value=r.livingFlow.confinement*(1+u*n.bass*.32),e.uniforms.uFlowStability.value=o.clamp(r.livingFlow.stability-u*n.motion*.12,0,1),e.uniforms.uFlowInfluence.value=r.livingFlow.influence,e.uniforms.uPulseSpeed.value=ee,e.uniforms.uPulseWidth.value=r.livingFlow.pulseWidth*(1+u*n.bass*.24),e.uniforms.uPulseStrength.value=r.livingFlow.pulseStrength*(1+p*a.kick*.92),e.uniforms.uVFXStrength.value=r.livingFlow.vfxStrength*(1+u*n.motion*.72),e.uniforms.uTrailStrength.value=r.livingFlow.trailStrength*(1+u*n.motion*.36),e.uniforms.uReleaseStrength.value=r.livingFlow.releaseStrength*(1+p*a.kick*.38),e.uniforms.uVortexEvent.value=r.livingFlow.vortexEvent*(1+p*a.kick*.82),e.uniforms.uPulsePhase.value=G.phase,e.uniforms.uBeatImpulse.value=a.kick*p*.72,e.uniforms.uDownbeatImpulse.value=a.downbeat*p,e.uniforms.uAudioSync.value=o.clamp(S,0,1),e.uniforms.uAmbientMotion.value=m*n.motion,e.uniforms.uAmbientBeat.value=m*a.snare*.72,e.uniforms.uBrightness.value=t*(1+d*n.brightness*.72),e.uniforms.uGlow.value=i*(1+d*n.brightness*.48),e.uniforms.uTwinkle.value=o.clamp(r.motion.twinkle+d*n.brightness*.34,0,1.5),e.uniforms.uAudioMid.value=l*n.mid,e.uniforms.uAudioHigh.value=l*n.high;z.uStrength.value=r.sphere.atmosphere*(1+l*(v*1.18+n.brightness*.34)),z.uAudioSection.value=l*v,z.uAudioTrend.value=y,B.uOpacity.value=r.sphere.shellOpacity*(1+l*(v*.34+a.downbeat*.1)),B.uRimStrength.value=r.sphere.rimStrength*(1+l*(v*.48+n.brightness*.2+a.downbeat*.24));let w=C*r.colorDirector.intensity*r.shellColor.response*r.shellColor.coverage;B.uAudioMid.value=o.clamp(n.sectionEnergy,0,1)**.58,B.uAudioHigh.value=o.clamp(n.brightness,0,1)**.68,B.uAudioDownbeat.value=a.downbeat,B.uAudioColorAmount.value=w,R.uniforms.uAudioEnergy.value=o.clamp(g*n.high,0,1.35),R.uniforms.uAudioMotion.value=o.clamp(g*n.texture,0,1.5),R.uniforms.uAudioHigh.value=o.clamp(g*n.high**.72,0,1.4),R.uniforms.uAudioBeat.value=o.clamp(g*a.hihat,0,1.5);let T=1+l*(v*.052+Math.max(0,y)*.018);q.scale=K(q.scale,T,e,2.4,.8),f.scale.setScalar(q.scale);let E=1+l*(n.high**.72*.06+a.hihat*.055);q.dustScale=K(q.dustScale,E,e,8,3.5),_.scale.setScalar(q.dustScale);let D=1+l*(v*.026+Math.max(0,y)*.018);q.atmosphereScale=K(q.atmosphereScale,D,e,1.8,.65),h.scale.setScalar(q.atmosphereScale);let te=r.camera.distance*(1-l*v*.046-l*a.downbeat*.012);q.cameraDistance=K(q.cameraDistance,te,e,2.1,.8),s.position.setLength(q.cameraDistance),i.setClearColor(0,0),c.autoRotate=r.camera.autoOrbit>0||W>.02,c.autoRotateSpeed=r.camera.autoOrbit+l*(v*.055+Math.max(0,y)*.025)}function Ze(){for(let e of Object.keys(V))V[e]=0;V.relativeEnergy=.5;for(let e of Object.keys(H))H[e]=0;for(let e of Object.keys(U))U[e]=0;W=0,G.phase=0,G.mix=0,Y.state=`CALM`,Y.previous=`CALM`,Y.candidate=`CALM`,Y.candidateTime=0,Y.stateTime=0,Y.transition=1,Object.assign(X,{hue:.64,hueVelocity:0,colorPhase:0,chroma:.13,lightness:.6});for(let e of[L,je,Me])e.uniforms.uAudioMid.value=0,e.uniforms.uAudioHigh.value=0,e.uniforms.uPulsePhase.value=0,e.uniforms.uBeatImpulse.value=0,e.uniforms.uDownbeatImpulse.value=0,e.uniforms.uAudioSync.value=0,e.uniforms.uAmbientMotion.value=0,e.uniforms.uAmbientBeat.value=0;z.uAudioSection.value=0,z.uAudioTrend.value=0,B.uAudioMid.value=0,B.uAudioHigh.value=0,B.uAudioDownbeat.value=0,B.uAudioColorAmount.value=0,R.uniforms.uAudioEnergy.value=0,R.uniforms.uAudioMotion.value=0,R.uniforms.uAudioHigh.value=0,R.uniforms.uAudioBeat.value=0}this._core={commonTime:I,farMaterial:L,midMaterial:je,nearMaterial:Me,dustMaterial:R,atmosphereGeometry:Fe,atmosphereMaterial:Ie,atmosphereUniforms:z,shellGeometry:Le,shellMaterial:Re,shellUniforms:B,buildInterior:Pe,disposeChildren:Ne,updateAudioFeatures:Ye,applyAudioResponse:Xe,resetAudioReaction:Ze,refreshPerceptualAnchors:Ue,perceptualState:Be,visualRuntime:q,audioDrive:V,visualEvents:U,audioEvents:H,audioSync:G,colorSectionRuntime:Y,musicColorRuntime:X,approach:K,getAudioActive:()=>W}}setupPostProcessing(){this.renderPass=new h(this.scene,this.camera),this.composer=new g(this.renderer),this.composer.addPass(this.renderPass),this.outputPass=new _,this.composer.addPass(this.outputPass)}createGUIContainer(){this.guiContainer=b(`Animation66-gui-container`),x(`Animation66-gui-container`),document.body.appendChild(this.guiContainer)}setupGUI(){this.createGUIContainer();let t=this.params,n=this._core;this.renderer;let r=this.camera;this.controls,this.gui=new e({title:`66. Universe Sphere`,container:this.guiContainer});let i=this.gui.addFolder(`镜头与构图`);i.add(t.camera,`distance`,15,46,.01).name(`镜头距离`).onChange(e=>{n.visualRuntime.cameraDistance=e,r.position.setLength(e)}),i.add(t.sphere,`shellOpacity`,0,1.2,.001).name(`球壳透明度`).onChange(e=>n.shellUniforms.uOpacity.value=e),i.add(t.far,`count`,3e3,13e3,100).name(`星海密度`).onFinishChange(n.buildInterior),i.add(t.composition,`riverWidth`,.7,3.2,.01).name(`河流宽度`).onFinishChange(n.buildInterior);let a=this.gui.addFolder(`基础外观`);a.add(t.sphere,`rimStrength`,0,2,.001).name(`球壳边缘`).onChange(e=>n.shellUniforms.uRimStrength.value=e),a.add(t.sphere,`atmosphere`,0,.5,.001).name(`内部大气`).onChange(e=>n.atmosphereUniforms.uStrength.value=e),a.add(t.dust,`opacity`,0,.35,.001).name(`星尘强度`).onFinishChange(n.buildInterior),a.add(t.motion,`twinkle`,0,1,.001).name(`星光闪烁`).onChange(e=>{for(let t of[n.farMaterial,n.midMaterial,n.nearMaterial])t.uniforms.uTwinkle.value=e});let o=this.gui.addFolder(`音乐互动`);o.add(t.audioReactive,`enabled`).name(`启用音乐互动`),o.add(t.audioReactive,`strength`,0,1.5,.01).name(`整体响应`),o.add(t.audioReactive,`motion`,0,1.5,.01).name(`运动响应`),o.add(t.audioReactive,`color`,0,1.5,.01).name(`颜色响应`),o.add(t.audioReactive,`pulse`,0,1.5,.01).name(`节拍响应`);let s=this.gui.addFolder(`颜色表现`);s.add(t.colorDirector,`transitionSpeed`,.35,2.5,.01).name(`变化速度`),s.add(t.colorDirector,`peakAccent`,0,1.5,.01).name(`高潮强调`);let c=this.gui.addFolder(`高级美术`);c.add(t.livingFlow,`trailStrength`,0,1.2,.01).name(`河流亮迹`),c.add(t.livingFlow,`curlStrength`,0,1.6,.01).name(`河流卷流`),c.add(t.hero,`probability`,.002,.04,1e-4).name(`Hero 星数量`).onFinishChange(n.buildInterior),c.add(t.near,`size`,1,8,.01).name(`主体粒子尺寸`).onFinishChange(n.buildInterior),c.open(),this.gui.add({reset:()=>this.resetParams()},`reset`).name(`重置参数`),this.gui.close(),this.gui.hide()}setupSettingsButton(){this.settingsButton=v(`Animation66-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.gui&&(this.guiVisible?this.gui.show():this.gui.hide())}),document.body.appendChild(this.settingsButton)}updateWithAudioData(e,t){t!==void 0&&Number.isFinite(Number(t))&&(this.elapsed=Number(t));let n=e?.audioFeature?.animation;n?(this.audioFrame=n,this.hasAudioData=e?.isPlaying===void 0?!0:e.isPlaying===!0):(this.audioFrame=null,this.hasAudioData=!1)}updateAudioAnalysis(e){this._core&&(this._core.updateAudioFeatures(e),this._core.applyAudioResponse(e))}render(){if(this._disposed||!this._core||!this.composer)return;let e=performance.now()*.001,t=Math.min(Math.max(e-this.lastTime,1/240),.1);this.lastTime=e,this.elapsed=e-this.startTime;let n=this._core;n.commonTime.value=this.elapsed,this.updateAudioAnalysis(t);let r=n.getAudioActive(),i=(this.params.audioReactive.enabled?this.params.audioReactive.strength:0)*r,a=o.clamp(n.audioDrive.sectionEnergy,0,1)**.58;this.starsGroup.rotation.y+=(this.params.motion.rotationY*.132+i*a*.012)*t,this.starsGroup.rotation.x+=this.params.motion.rotationX*.084*t,n.visualRuntime.starTilt=n.approach(n.visualRuntime.starTilt,i*o.clamp(n.audioDrive.energyTrend,-1,1)*.045,t,1.4,.7),this.starsGroup.rotation.z=n.visualRuntime.starTilt,this.dustGroup.rotation.y-=(this.params.motion.rotationY*.06+i*(n.audioDrive.texture*.085+n.audioDrive.high*.038))*t,this.dustGroup.rotation.x+=i*(n.audioDrive.high*.052+n.visualEvents.hihat*.045)*t,this.atmosphereGroup.rotation.y-=(this.params.motion.rotationY*.027+i*a*.022)*t,this.shellGroup.rotation.y+=i*(a*.01+Math.max(0,n.audioDrive.energyTrend)*.006)*t,this.controls.update(),this.composer.render()}onWindowResize(){if(!this.camera||!this.renderer)return;let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer?.setSize(e,t)}resetParams(){for(let e of Object.keys(this.defaultSettings))this.params[e]&&typeof this.params[e]==`object`&&!Array.isArray(this.params[e])?Object.assign(this.params[e],O(this.defaultSettings[e])):this.params[e]=O(this.defaultSettings[e]);this.resetState(),this._core.refreshPerceptualAnchors();for(let e of Object.keys(this._core.perceptualState))delete this._core.perceptualState[e];this._core.buildInterior(),this.gui?.controllersRecursive().forEach(e=>e.updateDisplay())}resetState(){if(!this._core)return;let e=this.params,t=this._core;this.audioFrame=null,this.hasAudioData=!1,this.startTime=performance.now()*.001,this.lastTime=this.startTime,this.elapsed=0,t.commonTime.value=0,t.resetAudioReaction(),Object.assign(t.visualRuntime,{scale:1,dustScale:1,atmosphereScale:1,starTilt:0,cameraDistance:e.camera.distance}),this.universe.scale.setScalar(1),this.dustGroup.scale.setScalar(1),this.atmosphereGroup.scale.setScalar(1);for(let e of[this.starsGroup,this.dustGroup,this.atmosphereGroup,this.shellGroup])e.rotation.set(0,0,0);this.camera.fov=e.camera.fov,this.camera.position.set(0,0,e.camera.distance),this.camera.updateProjectionMatrix(),this.controls.target.set(0,0,0),this.controls.autoRotate=e.camera.autoOrbit>0,this.controls.autoRotateSpeed=e.camera.autoOrbit,this.controls.update(),t.shellUniforms.uOpacity.value=e.sphere.shellOpacity,t.shellUniforms.uRimStrength.value=e.sphere.rimStrength,t.shellUniforms.uRimPower.value=e.sphere.rimPower,t.shellUniforms.uVariation.value=e.sphere.edgeVariation,t.atmosphereUniforms.uStrength.value=e.sphere.atmosphere,t.farMaterial.uniforms.uBrightness.value=e.far.brightness,t.midMaterial.uniforms.uBrightness.value=e.mid.brightness,t.nearMaterial.uniforms.uBrightness.value=e.near.brightness;for(let[n,r]of[[t.farMaterial,.36],[t.midMaterial,.52],[t.nearMaterial,.68]])n.uniforms.uGlow.value=r,n.uniforms.uTwinkle.value=e.motion.twinkle,n.uniforms.uDrift.value=e.motion.starDrift,n.uniforms.uPixelRatio.value=e.performance.dpr,n.uniforms.uFlowSpeed.value=e.livingFlow.speed,n.uniforms.uCurlStrength.value=e.livingFlow.curlStrength,n.uniforms.uConfinement.value=e.livingFlow.confinement,n.uniforms.uFlowStability.value=e.livingFlow.stability,n.uniforms.uFlowInfluence.value=e.livingFlow.influence,n.uniforms.uPulseSpeed.value=e.livingFlow.speed*3.9,n.uniforms.uPulseWidth.value=e.livingFlow.pulseWidth,n.uniforms.uPulseStrength.value=e.livingFlow.pulseStrength,n.uniforms.uVFXStrength.value=e.livingFlow.vfxStrength,n.uniforms.uTrailStrength.value=e.livingFlow.trailStrength,n.uniforms.uReleaseStrength.value=e.livingFlow.releaseStrength,n.uniforms.uVortexEvent.value=e.livingFlow.vortexEvent;t.dustMaterial.uniforms.uDrift.value=e.dust.drift,t.dustMaterial.uniforms.uPixelRatio.value=e.performance.dpr,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.performance.dpr)),this.renderer.setClearColor(0,0),this.onWindowResize()}dispose(){this._disposed||(this._disposed=!0,y(this.settingsButton,this.guiContainer,this.gui),this.settingsButton=null,this.guiContainer=null,this.gui=null,this.controls?.dispose(),this._core&&(this._core.disposeChildren(this.starsGroup),this._core.disposeChildren(this.dustGroup),this._core.farMaterial.dispose(),this._core.midMaterial.dispose(),this._core.nearMaterial.dispose(),this._core.dustMaterial.dispose(),this._core.atmosphereGeometry.dispose(),this._core.atmosphereMaterial.dispose(),this._core.shellGeometry.dispose(),this._core.shellMaterial.dispose()),this.composer?.dispose?.(),this.renderer?.dispose(),this.scene&&this.universe&&this.scene.remove(this.universe),this._core=null,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null)}};export{j as default};