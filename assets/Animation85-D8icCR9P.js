import{Ct as e,Dt as t,Gt as n,J as r,Mr as i,Nr as a,Ot as o,Pr as s,Rn as c,Tt as l,kt as u,qt as d,r as f,tr as p}from"./three.module-Cl1eh3-1.js";import{a as m,i as h,n as g,r as _,t as ee}from"./GUIHelper-DNd0uFVI.js";import{t as te}from"./OrbitControls-Bw7OgNlo.js";import{c as ne,m as v,n as y,r as re,s as b}from"./PerceptualColor-CpM8fhF0.js";var ie=`
      precision highp float;
      precision highp int;
      out vec4 O;
      uniform float time;
      uniform vec3 uRingColors[9];
      uniform vec3 uRingAccentColors[9];
      uniform vec3 uRingThirdColors[9];
      uniform float uColorFlowPhase;
      uniform float uEdge;
      uniform float uFlowPhase;
      uniform float uFlowStrength;
      uniform float uThickness;
      uniform float uBoundsRadius;
      uniform float uBrightness;
      uniform float uIor;
      uniform float uTransmission;
      uniform vec2 resolution;
      uniform vec3 uEye;
      uniform mat3 uCameraBasis;
      uniform mat3 ringRotation[9];
      uniform vec4 ringShape[9];
      uniform vec2 ringRipple[9];
      vec2 field(vec3 p){
       float best=100.;float id=0.;
       for(int i=0;i<9;i++){
        vec3 q=ringRotation[i]*(p-ringShape[i].xyz);
        float angle=atan(q.z,q.x);
        float wave=ringRipple[i].x*sin(angle*6.+ringRipple[i].y);
        float slope=6.*ringRipple[i].x/max(length(q.xz),.1);
        float d=(length(vec2(length(q.xz)-ringShape[i].w,q.y-wave))-uThickness)/(1.+slope);
        if(d<best){best=d;id=float(i);}
       }
       return vec2(best,id);
      }

      vec3 normalAt(vec3 p,int id){
       vec3 q=ringRotation[id]*(p-ringShape[id].xyz);
       float radial=max(length(q.xz),1e-6);
       float angle=atan(q.z,q.x);
       float phase=angle*6.+ringRipple[id].y;
       vec2 v=vec2(radial-ringShape[id].w,q.y-ringRipple[id].x*sin(phase));
       float slope=6.*ringRipple[id].x*cos(phase)/(radial*radial);
       vec3 n=normalize(vec3(q.x*v.x/radial+v.y*slope*q.z,
         v.y,q.z*v.x/radial-v.y*slope*q.x));
       return transpose(ringRotation[id])*n;
      }

      vec2 bounds(vec3 ro,vec3 rd){
       float b=dot(ro,rd),c=dot(ro,ro)-uBoundsRadius*uBoundsRadius;
       float h=b*b-c;
       if(h<0.)return vec2(1.,-1.);
       h=sqrt(h);return vec2(-b-h,-b+h);
      }
      vec3 environment(vec3 d){
       vec3 col=mix(vec3(.008,.018,.035),vec3(.045,.10,.15),.5+.5*d.y);
       float strip=pow(max(0.,1.-abs(d.x*.7+d.y*.45-.25)),18.);
       float rim=pow(max(dot(d,normalize(vec3(-.8,.3,.6))),0.),24.);
       return col+strip*vec3(.5,.85,1.)*1.3+rim*vec3(.32,.22,.65);
      }



      vec3 renderSurface(vec2 pixel){
       vec2 uv=(pixel-.5*resolution)/min(resolution.x,resolution.y);
       vec3 ro=uEye;
       vec3 rd=normalize(uCameraBasis*vec3(uv,-1.65));
       vec3 background=vec3(0.);
       vec3 col=background;
       vec2 interval=bounds(ro,rd);
       float t=max(interval.x,0.);
       for(int j=0;j<208;j++){
        if(t>interval.y)break;
        vec3 p=ro+rd*t;
        vec3 c=p;
        vec2 sampleValue=field(c);
        if(abs(sampleValue.x)<.00055){
         int id=int(sampleValue.y);
         vec3 n=normalAt(c,id);
         if(dot(n,rd)>0.)n=-n;
         float ndv=clamp(dot(n,-rd),0.,1.);
         float f0=pow((uIor-1.)/(uIor+1.),2.);
         float fres=f0+(1.-f0)*pow(1.-ndv,5.);
         vec3 reflected=reflect(rd,n);
         vec3 q=ringRotation[id]*(c-ringShape[id].xyz);
         float angle=atan(q.z,q.x);
         float position=fract(angle/6.2831853-uColorFlowPhase/6.2831853)*3.;
         float blend=smoothstep(0.,1.,fract(position));
         vec3 a=uRingColors[id],b=uRingAccentColors[id],d=uRingThirdColors[id];
         vec3 tint=position<1.?mix(a,b,blend):position<2.?mix(b,d,blend):mix(d,a,blend);

         vec3 halfA=normalize(normalize(vec3(-.6,1.,-.8))-rd);
         vec3 halfB=normalize(normalize(vec3(.8,.35,.45))-rd);
         float softA=pow(max(dot(n,halfA),0.),18.);
         float softB=pow(max(dot(n,halfB),0.),10.);
         float diffuse=.45+.55*max(dot(n,normalize(vec3(-.4,1.,-.6))),0.);

         float sheen=.5+.5*sin(angle*2.-uFlowPhase*.7+float(id)*.3);
         float glow=.12+min(uFlowStrength,2.)*.10*sheen;
         vec3 transmitted=environment(refract(rd,n,1./uIor))*.32;
         vec3 body=tint*(diffuse*.65+glow)
           +mix(background,transmitted,.45)*uTransmission*.35;
         vec3 reflection=environment(reflected)*(.12+fres*.55*uEdge);
         vec3 highlights=(vec3(.78,.90,1.)*softA*.55
           +mix(tint,vec3(1.),.35)*softB*.18);
         col=uBrightness*(body+reflection+highlights);
         break;
        }
        t+=clamp(abs(sampleValue.x)*.8,.00018,.24);
       }
       float peak=max(max(col.r,col.g),max(col.b,0.));
       col=max(col,vec3(0.))*(peak>1e-6?(1.-exp(-peak*1.18))/peak:1.18);
       col*=1.-.45*smoothstep(.3,1.2,length(uv));
       col*=smoothstep(0.,1.7,time);
       return col;
      }
      void main(){


       vec3 col=(renderSurface(gl_FragCoord.xy+vec2(-.25,-.25))
         +renderSurface(gl_FragCoord.xy+vec2(.25,.25)))*.5;
       vec3 low=col*12.92;
       vec3 high=1.055*pow(max(col,vec3(0.)),vec3(1./2.4))-.055;
       O=vec4(mix(low,high,step(vec3(.0031308),col)),1.);
      }
    `,x=()=>{},S=class{constructor(e,t={}){this.canvas=e,this.globalBackgroundPolicy=`independent`,this.resources=new Set,this.events=new AbortController;try{this.init(t)}catch(e){throw this.dispose(),e}}init(g={}){if(this.renderer||this.disposed)return;let x=e=>(this.resources.add(e),e),S=this.renderer=new f({canvas:this.canvas,antialias:!1,alpha:!0,depth:!1,stencil:!1,powerPreference:`high-performance`});S.setClearColor(0,1),S.toneMapping=0;let C={paused:!1,speed:1,radius:1,spacing:1,thickness:.035,brightness:1,ior:1.32,transmission:.79,audioStrength:1,liftHeight:1.2,breathAmount:.035,delayAmount:1,rippleAmount:.018,swayAmount:.055,trembleAmount:.018,downbeatAmount:.6,colorReactivity:1,saturationBoost:.65};this.defaultSettings=Object.freeze(C);let w=this.settings={...C};for(let e of Object.keys(C)){let t=g[e];(e===`paused`?typeof t==`boolean`:Number.isFinite(t))&&(w[e]=t)}let T=this.uniforms={uRingColors:{value:Array.from({length:9},()=>new a)},uRingAccentColors:{value:Array.from({length:9},()=>new a)},uRingThirdColors:{value:Array.from({length:9},()=>new a)},uColorFlowPhase:{value:0},uEdge:{value:1},uFlowPhase:{value:0},uFlowStrength:{value:.2},uThickness:{value:w.thickness},uBoundsRadius:{value:2.65},uBrightness:{value:w.brightness},uIor:{value:w.ior},uTransmission:{value:w.transmission},time:{value:0},resolution:{value:new i(1,1)},uEye:{value:new a},uCameraBasis:{value:new t},ringRotation:{value:Array.from({length:9},()=>new t)},ringRipple:{value:Array.from({length:9},()=>new i)},ringShape:{value:Array.from({length:9},()=>new s)}},E=re({base:`#36ceff`,accent:`#a77bff`}),ae=Array.from({length:9},(e,t)=>ne(E.base,E.accent,t/12)),D=this.visual={bass:0,mid:0,high:0,energy:0,motion:0,kick:0,flowPhase:0,colorPhase:0,previousKick:0,lastKick:-1e3,springHeight:0,springVelocity:0,ringExtensions:new Float32Array(9),hihatEnvelope:0,downbeatActive:!1,compressionAge:10,compressionStrength:0,resetState(){this.bass=this.mid=this.high=this.energy=this.motion=this.kick=0,this.flowPhase=0,this.colorPhase=0,this.lastTime=null,this.previousKick=0,this.lastKick=-1e3,this.springHeight=0,this.springVelocity=0,this.ringExtensions.fill(0),this.hihatEnvelope=0,this.downbeatActive=!1,this.compressionAge=10,this.compressionStrength=0,T.uFlowPhase.value=0,T.uFlowStrength.value=.2,this.applyColors(0,0,0,0)},applyColors(e,t,n,r){let i=Math.min(1,Math.max(r,n,e,t)*2),a=(Math.sin(this.colorPhase*Math.PI*2)*.18*i+.12*e+.24*t)*w.colorReactivity;for(let e=0;e<9;e++){let t=ae[e],i=v(t[1],t[2],a),o=1+n*w.saturationBoost,s=[Math.min(.88,t[0]+r*.045),i[0]*o,i[1]*o],c=y(b(s,{maxValue:1.35}));T.uRingColors.value[e].set(...c);let l=v(s[1],s[2],.2),u=y(b([s[0],...l],{maxValue:1.35}));T.uRingAccentColors.value[e].set(...u);let d=v(s[1],s[2],-.22);T.uRingThirdColors.value[e].set(...y(b([s[0],...d],{maxValue:1.35})))}T.uColorFlowPhase.value=this.colorPhase*Math.PI*2},updateWithAudioData(e,t){let n=this.lastTime==null?1/60:Math.min(.1,Math.max(0,(t-this.lastTime)/1e3));this.lastTime=t;let r=e?.isPlaying?e.audioFeature?.animation:null,i=(e,t=1)=>Number.isFinite(e)?Math.max(0,Math.min(t,e)):0;if(w.paused||w.speed===0){this.previousKick=i(r?.kick,2),this.downbeatActive=!!r?.isDownbeat||i(r?.downbeat,2)>.06;return}let a=n*w.speed;for(let e of[`bass`,`mid`,`high`,`energy`,`motion`])this[e]=i(r?.[e]);this.kick=i(r?.kick,2);let o=w.audioStrength,s=i(r?.hihat,1.5);this.hihatEnvelope=s;let c=!!r?.isDownbeat||i(r?.downbeat,2)>.06;c&&!this.downbeatActive&&w.downbeatAmount>0&&(this.compressionAge=0,this.compressionStrength=Math.max(.3,i(r?.downbeat,2),this.kick)*o*w.downbeatAmount),this.downbeatActive=c;let l=this.compressionAge;(w.downbeatAmount===0||o===0)&&(this.compressionStrength=0),this.compressionAge+=a;let u=l<.065&&this.compressionAge>=.065;u&&(this.springVelocity=Math.max(0,this.springVelocity)+this.compressionStrength*7);let d=this.kick>.06&&this.kick-this.previousKick>.015;if(r&&d&&t-this.lastKick>140){let e=Math.min(1,this.kick);this.compressionAge>=.065&&!u&&(this.springVelocity=Math.max(0,this.springVelocity)+(5+Math.sqrt(e)*6)*o),this.lastKick=t}let f=this.energy*.08*o,p=Math.max(1,Math.ceil(a/(1/120))),m=a/p;for(let e=0;e<p;e++)if(this.springVelocity+=((f-this.springHeight)*220-this.springVelocity*20)*m,this.springHeight+=this.springVelocity*m,(this.springHeight<0||this.springHeight>1.9)&&(this.springHeight=Math.max(0,Math.min(1.9,this.springHeight)),this.springVelocity=0),this.ringExtensions[8]=this.springHeight,w.delayAmount<=0)this.ringExtensions.fill(this.springHeight);else{let e=1-Math.exp(-m*65/w.delayAmount);for(let t=7;t>=0;t--)this.ringExtensions[t]+=(this.ringExtensions[t+1]-this.ringExtensions[t])*e}this.flowPhase+=a*(.35+o*(this.bass*2.8+this.motion*2)),T.uFlowPhase.value=this.flowPhase,T.uFlowStrength.value=.2+o*(this.energy*.7+this.bass*.3),this.previousKick=this.kick;let h=Math.max(i(r?.energy),i(r?.bass),i(r?.mid),i(r?.high));h>.01&&(this.colorPhase=(this.colorPhase+a*h*(.055+i(r?.mid)*.13+i(r?.high)*.22+i(r?.variation)*.08)*w.colorReactivity)%1),this.applyColors(i(r?.mid),i(r?.high),i(r?.bass),i(r?.energy))}},oe=x(new c({glslVersion:r,uniforms:T,vertexShader:`precision highp float;
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:ie,depthTest:!1,depthWrite:!1,toneMapped:!1})),O=this.scene=new p,k=this.camera=new n(34,1,.01,100);k.position.set(0,2.24,-7.04);let A=this.controls=new te(k,this.canvas);A.target.set(0,.6,0),A.enableDamping=!0,A.dampingFactor=.08,A.screenSpacePanning=!0,A.minDistance=3,A.maxDistance=24,A.mouseButtons.LEFT=e.ROTATE,A.mouseButtons.MIDDLE=e.DOLLY,A.mouseButtons.RIGHT=e.PAN,A.update(),A.saveState();let j=new u(x(new d(2,2)),oe);j.frustumCulled=!1,O.add(j);let M=1;function se(){return Math.min(1.5,window.devicePixelRatio||1,Math.sqrt(16e5/Math.max(1,innerWidth*innerHeight)))}function N(){let e=se()*M;S.setPixelRatio(e),S.setSize(window.innerWidth,window.innerHeight),S.getDrawingBufferSize(T.resolution.value),k.aspect=innerWidth/Math.max(1,innerHeight),k.fov=l.radToDeg(2*Math.atan(innerHeight/Math.max(1,Math.min(innerWidth,innerHeight))/3.3)),k.updateProjectionMatrix()}let P=new o,F=new o;function I(e){let t=w.audioStrength;T.uThickness.value=w.thickness,T.uBrightness.value=w.brightness*(1+D.kick*t*.12),T.uEdge.value=1+D.high*t*.6;let n=0;for(let r=0;r<9;r++){let i=(8-r)/8,a=r===8,o=w.delayAmount>0?D.ringExtensions[r]:D.springHeight,s=D.compressionAge<.065?Math.sin(Math.PI*D.compressionAge/.065)*D.compressionStrength*.16:0,c=Math.sin(e*95+r*.6)*D.hihatEnvelope*w.trembleAmount*i*t,l=Math.max(0,i*(.12+o*2.7-s)*w.liftHeight+c),u=a?0:D.bass*t*w.breathAmount,d=(.36+r*.185*w.spacing)*w.radius*(1+u);T.ringShape.value[r].set(0,l,0,d);let f=a?0:Math.min(.06,(D.mid*.35+D.high*.65)*t*w.rippleAmount);T.ringRipple.value[r].set(f,-D.flowPhase*2+r*.35);let p=T.ringShape.value[r];n=Math.max(n,Math.hypot(p.x,p.y,p.z)+p.w+T.uThickness.value+f);let m=a?0:Math.min(.12,D.mid*t*w.swayAmount)*i;P.makeRotationX(Math.sin(D.flowPhase*.65)*m),P.multiply(F.makeRotationZ(Math.cos(D.flowPhase*.5)*m*.6)),T.ringRotation.value[r].setFromMatrix4(P)}T.uBoundsRadius.value=n+.08}let L=0,R=0,z=null,B=0,V=0,H=0,U=null,W=-1/0,G=()=>{A.update(),k.updateMatrixWorld(),T.uEye.value.copy(k.position),T.uCameraBasis.value.setFromMatrix4(k.matrixWorld)};this.guiContainer=_(`Animation85-gui-container`),this.scrollbarStyle=ee(`Animation85-gui-container`),document.body.appendChild(this.guiContainer);let K=this.gui=new m({title:`琉璃律环`,container:this.guiContainer}),q=K.addFolder(`音频响应`);q.open(),q.add(w,`audioStrength`,0,2,.05).name(`频谱与光流强度`),q.add(w,`liftHeight`,0,4,.05).name(`弹簧起伏高度`),q.add(w,`colorReactivity`,0,3,.05).name(`音频变色强度`),q.add(w,`saturationBoost`,0,3,.05).name(`低频彩度增强`);let J=K.addFolder(`音频运动细节`);J.add(w,`delayAmount`,0,2,.05).name(`层间弹性延迟`),J.add(w,`breathAmount`,0,.08,.005).name(`低频径向呼吸`),J.add(w,`rippleAmount`,0,.05,.001).name(`中高频波纹`),J.add(w,`swayAmount`,0,.12,.005).name(`中频倾摆`),J.add(w,`trembleAmount`,0,.04,.001).name(`镲片细颤`),J.add(w,`downbeatAmount`,0,1.5,.05).name(`强拍压缩释放`),J.open();let Y=K.addFolder(`动画`);Y.open(),Y.add(w,`paused`).name(`暂停动画`),Y.add(w,`speed`,0,2,.01).name(`动画速度`);let X=K.addFolder(`同心频谱环`);X.open(),X.add(w,`radius`,.65,1.35,.01).name(`整体半径`),X.add(w,`spacing`,.7,1.5,.01).name(`径向间距`);function Z(e,t,n,r,i,a){e.add(w,t,n,r,i).name(a)}Z(X,`thickness`,.018,.075,.001,`玻璃管粗细`);let Q=K.addFolder(`光影`);Z(Q,`brightness`,.2,2,.01,`玻璃亮度`),Z(Q,`ior`,1.05,1.6,.01,`折射率`),Z(Q,`transmission`,.5,.95,.01,`透光程度`),Q.open();let $=()=>{for(let e of K.controllersRecursive()){let t=e.property;if(!(t in C))continue;if(t===`paused`){typeof w[t]!=`boolean`&&(w[t]=C[t]);continue}let n=Number.isFinite(w[t])?w[t]:C[t];w[t]=l.clamp(n,e._min??-1/0,e._max??1/0),e.updateDisplay()}T.uIor.value=w.ior,T.uTransmission.value=w.transmission,D.applyColors(D.mid,D.high,D.bass,D.energy),I(L)};K.onChange($),this.endGuiPreferencesLoad=(e=!0)=>{e&&!this.disposed&&$()},this.resetGuiCamera=()=>{let e=A.enableDamping;A.enableDamping=!1,A.update(),A.reset(),A.enableDamping=e,k.updateProjectionMatrix(),G()},this.settingsButton=h(`Animation85-settings-button`),document.body.appendChild(this.settingsButton),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?K.show():K.hide()},{signal:this.events.signal}),K.hide(),this.updateWithAudioData=e=>{U=e,W=performance.now()+250},this.updateAudioAnalysis=(e,t=performance.now())=>{D.updateWithAudioData(e,t),I(L)},this.resetState=()=>{U=null,W=-1/0,L=0,R=0,z=null,B=0,V=0,H=performance.now()+2500,D.resetState(),T.time.value=0,$(),this.resetGuiCamera()},this.onWindowResize=()=>{this.disposed||(N(),B=0,V=0,H=performance.now()+2500)},this.render=()=>{if(this.disposed||this.contextLost||document.hidden)return;let e=performance.now(),t=z===null?0:Math.max(0,e-z);if(z=e,D.updateWithAudioData(e<=W?U:null,e),L+=w.paused?0:Math.min(t,100)/1e3*w.speed,R=Math.min(1.7,R+Math.min(t,100)/1e3),T.time.value=R,G(),I(L),S.render(O,k),e>H&&t>0&&t<250&&(V+=t,B++,V>=1800)){let t=V/B,n=M;t>23?n=Math.max(.7,M*.85):t<18&&B>90&&(n=Math.min(1,M+.05)),Math.abs(n-M)>.001&&(M=n,N(),H=e+2500),B=0,V=0}},this.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.resetState()},{signal:this.events.signal}),this.canvas.addEventListener(`webglcontextrestored`,()=>{this.contextLost=!1,this.onWindowResize(),this.resetState()},{signal:this.events.signal}),document.addEventListener(`visibilitychange`,()=>{U=null,W=-1/0,z=null,D.resetState(),B=0,V=0,I(L)},{signal:this.events.signal}),this.resetState(),this.onWindowResize()}dispose(){if(!this.disposed){this.disposed=!0,this.events?.abort(),g(this.settingsButton,this.guiContainer,this.gui),this.scrollbarStyle?.remove(),this.controls?.dispose();for(let e of this.resources)e.dispose();this.resources.clear(),this.scene?.clear(),this.renderer?.dispose(),this.visual&&(this.visual.updateWithAudioData=x,this.visual.resetState=x,this.visual.applyColors=x);for(let e of[`render`,`updateWithAudioData`,`updateAudioAnalysis`,`resetState`,`resetGuiCamera`,`onWindowResize`,`endGuiPreferencesLoad`])this[e]=x;for(let e of[`renderer`,`scene`,`camera`,`controls`,`uniforms`,`visual`,`gui`,`guiContainer`,`scrollbarStyle`,`settingsButton`])this[e]=null}}};export{S as default};