import{At as e,Et as t,H as n,Kt as r,L as i,Nr as a,Pr as o,X as s,Xt as c,Zt as l,cr as u,d,er as f,jt as p,nr as m,r as h,rr as g,u as _,v,wt as ee}from"./three.module-CI1jJgD_.js";import{n as te,r as ne,t as re}from"./OutputPass-D7sfcF5T.js";import{a as ie,i as ae,n as y,r as oe,t as se}from"./GUIHelper-DNd0uFVI.js";import{t as ce}from"./UnrealBloomPass-afIQHt-X.js";import{t as le}from"./OrbitControls-DLu-nFn1.js";import{a as ue,m as de,s as fe}from"./PerceptualColor-5EYeXve1.js";function pe(e,t=!1){let n=e.getAttribute(`position`).count,r=t?n-1:n/2,i=new d,a=[];for(let e=0;e<r;e++){let n=t?e:e*2;a.push(n,n,n+1,n+1)}for(let[t,n]of Object.entries(e.attributes)){let e=new Float32Array(a.length*n.itemSize);a.forEach((t,r)=>{for(let i=0;i<n.itemSize;i++)e[r*n.itemSize+i]=n.array[t*n.itemSize+i]}),i.setAttribute(t,new _(e,n.itemSize))}let o=new Float32Array(a.length*3),s=new Float32Array(a.length),c=new Float32Array(a.length),l=e.getAttribute(`position`),u=e.getAttribute(`aT`),f=[];return a.forEach((e,t)=>{let n=t%4,r=a[t-n+(n<2?2:0)];o.set([l.getX(r),l.getY(r),l.getZ(r)],t*3),s[t]=u.getX(r),c[t]=[-1,1,1,-1][n],n===0&&f.push(t,t+2,t+1,t+2,t+3,t+1)}),i.setAttribute(`aLineOther`,new _(o,3)),i.setAttribute(`aLineOtherT`,new _(s,1)),i.setAttribute(`aLineSide`,new _(c,1)),i.setIndex(f),i}var me=`
  attribute vec3 aLineOther;
  attribute float aLineOtherT;
  attribute float aLineSide;
  uniform float uLineWidth;
  uniform vec2 uLineViewport;
  vec4 expandLine(vec4 clip, vec4 other) {
    vec2 direction = (other.xy / max(other.w, 0.0001) - clip.xy / max(clip.w, 0.0001)) * uLineViewport;
    direction /= max(length(direction), 0.0001);
    vec2 normal = vec2(-direction.y, direction.x);
    clip.xy += normal * aLineSide * uLineWidth / uLineViewport * clip.w;
    return clip;
  }
`,b=class{constructor(e,t={}){this.canvas=e,this.hostSettings=t,this.gui=null,this.guiContainer=null,this.settingsButton=null,this.guiVisible=!1,this.disposed=!1,this.init()}init(){let y=new m;y.background=null;let b=new r(46,(this.canvas.clientWidth||innerWidth)/(this.canvas.clientHeight||innerHeight),.1,100);b.position.set(.2,1,10.4);let x=new h({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:`high-performance`});x.setSize(this.canvas.clientWidth||innerWidth,this.canvas.clientHeight||innerHeight),x.setPixelRatio(Math.min(devicePixelRatio,2)),x.outputColorSpace=f,x.toneMapping=4,x.toneMappingExposure=1.05,x.setClearColor(0,0),this.canvas.style.backgroundColor=`transparent`;let S=new le(b,x.domElement);S.enableDamping=!0,S.dampingFactor=.055,S.enablePan=!0,S.screenSpacePanning=!0,S.mouseButtons.LEFT=ee.ROTATE,S.mouseButtons.MIDDLE=ee.DOLLY,S.mouseButtons.RIGHT=ee.PAN,S.minDistance=5.5,S.maxDistance=16,S.target.set(0,.65,0),S.autoRotate=!0,S.autoRotateSpeed=.22;let he=e=>e.preventDefault();x.domElement.addEventListener(`contextmenu`,he);let ge=!1;S.addEventListener(`start`,()=>{ge=!0});function _e(){let e=Math.max(10.4,6.8/(Math.tan(b.fov*Math.PI/360)*b.aspect));b.position.set(.2,1,e),S.maxDistance=Math.max(26,e*1.7)}_e(),this._resetCamera=()=>{ge=!1,S.target.set(0,.65,0),_e(),S.update()};let C=new ne(x);C.addPass(new te(y,b));let w=new ce(new a(this.canvas.clientWidth||innerWidth,this.canvas.clientHeight||innerHeight),1,.3,.5);w.threshold=.5,w.strength=1,w.radius=.3,C.addPass(w),C.addPass(new re);let T=(e,t)=>e+Math.random()*(t-e),E=new o,D=[new v(`#ff3b78`),new v(`#ff7fa8`),new v(`#ffd7e6`),new v(`#f7f8ff`),new v(`#a9d7ff`),new v(`#9aa9ff`)];function ve(){let e=Math.random();return e<.3?D[0].clone():e<.52?D[1].clone():e<.67?D[2].clone():e<.81?D[3].clone():e<.92?D[4].clone():D[5].clone()}let O=[],k=[],ye=[],be=[],xe=[],Se=[],Ce=[],A=new o(0,-.45,0),j=new s;j.position.copy(A),y.add(j);let we=[{count:42,spread:[1.35,2.25],rise:[3.4,4.1],tip:[1.1,1.85],side:.28},{count:78,spread:[2.65,3.8],rise:[3.3,4.3],tip:[-.55,.35],side:.48},{count:60,spread:[4,5.15],rise:[2.6,3.6],tip:[-1.8,-.8],side:.64}];function Te(e,t,n,r,i,a=new o){let s=1-i,c=s*s*s,l=3*s*s*i,u=3*s*i*i,d=i*i*i;return a.set(c*e.x+l*t.x+u*n.x+d*r.x,c*e.y+l*t.y+u*n.y+d*r.y,c*e.z+l*t.z+u*n.z+d*r.z),a}function Ee(e){let t=e<42?0:e<120?1:2,n=we[t],r=(e-(t===0?0:t===1?42:120))/n.count*Math.PI*2+t*.27+T(-.065,.065),i=new o(Math.cos(r),T(-.06,.12),Math.sin(r)*.78).normalize(),a=Math.cos(r*6+t*.7),s=T(...n.spread)*(1+a*.045),c=T(...n.rise)+a*.14,l=T(-n.side,n.side),u=A.clone(),d=new o(-i.z,0,i.x),f=A.clone().addScaledVector(i,T(.25,.95)).add(new o(0,T(1.15,2.15),0)).addScaledVector(d,l*.16),p=A.clone().addScaledVector(i,s*T(.56,.82)).add(new o(0,c,0)).addScaledVector(d,l),m=A.clone().addScaledVector(i,s).add(new o(0,T(...n.tip),T(-.12,.12))).addScaledVector(d,l*.65);f.z+=T(-.12,.12),p.z+=T(-.22,.22),m.z+=T(-.26,.26);let h=ve(),g={p0:u,p1:f,p2:p,p3:m,color:h,birth:(T(0,1)+t*.16)%1,seed:Math.random()*100,layer:t};O.push(g);for(let e=0;e<52;e++){let n=e/52,r=(e+1)/52,i=Te(u,f,p,m,n,new o),a=Te(u,f,p,m,r,new o);k.push(i.x,i.y,i.z),k.push(a.x,a.y,a.z),ye.push(h.r,h.g,h.b),ye.push(h.r,h.g,h.b),be.push(n,r),xe.push(g.birth,g.birth),Se.push(g.seed,g.seed),Ce.push(t,t)}}for(let e=0;e<180;e++)Ee(e);let M=new d;M.setAttribute(`position`,new n(k,3)),M.setAttribute(`aColor`,new n(ye,3)),M.setAttribute(`aT`,new n(be,1)),M.setAttribute(`aBirth`,new n(xe,1)),M.setAttribute(`aSeed`,new n(Se,1)),M.setAttribute(`aLayer`,new n(Ce,1)),M.translate(-A.x,-A.y,-A.z);let De=M;M=pe(De),De.dispose();let N={uLineWidth:{value:1.5},uLineViewport:{value:new a(this.canvas.clientWidth||innerWidth,this.canvas.clientHeight||innerHeight)},uTime:{value:0},uGrowthPhase:{value:0},uOpenings:{value:new o},uLayerSpacing:{value:1},uSway:{value:1}},Oe=`
      uniform float uTime;
      uniform float uGrowthPhase;
      uniform vec3 uOpenings;
      uniform float uLayerSpacing;
      uniform float uSway;

      vec3 deformFiber(vec3 p, float t, float seed, float layer) {
        float opening = layer < 0.5 ? uOpenings.x : (layer < 1.5 ? uOpenings.y : uOpenings.z);
        float tipWeight = smoothstep(0.0, 1.0, t);
        p.xz *= 1.0 + opening * 0.28 * tipWeight
          + (uLayerSpacing - 1.0) * (layer - 1.0) * 0.22 * tipWeight;
        p.y += opening * (sin(t * 3.14159265) * 0.55 + t * 0.18);
        p.y -= (uLayerSpacing - 1.0) * (layer - 1.0) * 0.24 * tipWeight;
        p.x += sin(uTime * 0.72 + seed * 4.7 + t * 7.0) * 0.025 * t * uSway;
        p.z += cos(uTime * 0.61 + seed * 3.1 + t * 5.0) * 0.022 * t * uSway;
        return p;
      }

      vec3 fiberLife(float t, float birth, float seed) {
        float phase = fract(uGrowthPhase * (0.9 + fract(seed * 0.37) * 0.2) + birth);
        float growthEnd = 0.43 + fract(seed * 0.173) * 0.16;
        float progress = clamp(phase / growthEnd, 0.0, 1.0);
        float fade = 1.0 - smoothstep(0.73, 1.0, phase);
        float visible = smoothstep(t - 0.025, t + 0.025, progress);
        // The previous cycle is dark before phase wraps back to zero.
        float born = smoothstep(0.0, 0.035, phase);
        float head = exp(-pow((t - progress) * 19.0, 2.0)) * fade * born;
        return vec3(visible * fade * born, head, progress);
      }
    `,P={uWaves:{value:Array.from({length:4},()=>new a(-2,0))},uWaveWidth:{value:.045},uWaveTail:{value:.18},uWaveStrength:{value:1}},F=new g({transparent:!0,depthWrite:!1,blending:2,vertexColors:!1,uniforms:{...N,...P,uBrightness:{value:1},uAudioTint:{value:new v(`#ff7fa8`)},uColorMix:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aT;
        attribute float aBirth;
        attribute float aSeed;
        attribute float aLayer;

        varying vec3 vColor;
        varying float vT;
        varying float vAge;
        varying float vHead;
        varying float vTwinkle;

        ${Oe}
        ${me}
        uniform vec2 uWaves[4];
        uniform float uWaveWidth;
        uniform float uWaveTail;
        uniform float uWaveStrength;

        void main() {
          vec3 life = fiberLife(aT, aBirth, aSeed);
          float wave = 0.0;
          for (int i = 0; i < 4; i++) {
            float front = uWaves[i].x - aLayer * 0.1 - fract(aSeed) * 0.08;
            float distanceBehind = front - aT;
            float head = exp(-pow(distanceBehind / uWaveWidth, 2.0));
            float tail = exp(-max(distanceBehind, 0.0) / uWaveTail)
              * smoothstep(-uWaveWidth, 0.0, distanceBehind);
            float strandGain = mix(0.35, 1.0, fract(aSeed * 0.127 + float(i) * 0.37));
            wave += (head + tail * 0.32) * uWaves[i].y * strandGain;
          }
          wave = 1.5 * (1.0 - exp(-wave * uWaveStrength * 0.65));

          float twinkle = 0.88 + 0.12 * sin(
            uTime * (2.0 + fract(aSeed) * 4.0) +
            aSeed * 8.0 +
            aT * 15.0
          );

          vColor = aColor;
          vT = aT;
          vAge = max(life.x, min(wave * 0.7, 0.95));
          vHead = life.y + wave;
          vTwinkle = twinkle;

          vec3 p = deformFiber(position, aT, aSeed, aLayer);

          gl_Position = expandLine(projectionMatrix * modelViewMatrix * vec4(p, 1.0),
            projectionMatrix * modelViewMatrix * vec4(deformFiber(aLineOther, aLineOtherT, aSeed, aLayer), 1.0));
        }
      `,fragmentShader:`
        precision highp float;

        varying vec3 vColor;
        varying float vT;
        varying float vAge;
        varying float vHead;
        varying float vTwinkle;

        uniform float uBrightness;
        uniform vec3 uAudioTint;
        uniform float uColorMix;

        void main() {
          float rootGlow = 0.62 + 0.38 * (1.0 - smoothstep(0.0, 1.0, vT));
          float rootWeight = mix(0.16, 1.0, smoothstep(0.015, 0.28, vT));
          float alpha = min(0.85, vAge * (0.19 + vHead * 0.4) * vTwinkle) * rootWeight;

          if (alpha < 0.015) discard;

          vec3 color = mix(vColor, uAudioTint * (0.7 + dot(vColor, vec3(0.2126, 0.7152, 0.0722)) * 0.6), uColorMix);
          vec3 c = color * (0.72 + vHead * 1.2 + rootGlow * 0.42);
          c *= uBrightness;
          // Compress peaks uniformly to retain hue when several waves overlap.
          float peak = max(c.r, max(c.g, c.b));
          if (peak > 1.0) c *= (1.0 + (1.0 - exp(-(peak - 1.0) / 0.65)) * 0.35) / peak;

          gl_FragColor = vec4(c, alpha);
        }
      `}),ke=new e(M,F);j.add(ke),ke.frustumCulled=!1;let I=F.clone();Object.assign(I.uniforms,N,P),I.uniforms.uBrightness.value=1.28,I.fragmentShader=`
      precision highp float;

      varying vec3 vColor;
      varying float vT;
      varying float vAge;
      varying float vHead;
      varying float vTwinkle;

      uniform float uBrightness;
      uniform vec3 uAudioTint;
      uniform float uColorMix;

      void main() {
        float rootWeight = mix(0.1, 1.0, smoothstep(0.015, 0.3, vT));
        float alpha = vAge * (0.035 + min(vHead, 1.5) * 0.22) * vTwinkle * rootWeight;
        if (alpha < 0.01) discard;

        vec3 base = mix(vColor, uAudioTint, uColorMix * 0.7);
        vec3 whiteHot = mix(base, vec3(1.0), min(0.22, 0.08 + vHead * 0.06));
        gl_FragColor = vec4(whiteHot * uBrightness, min(alpha, 1.0));
      }
    `;let Ae=new e(M,I);j.add(Ae),Ae.frustumCulled=!1;let je=new u(.15,24,24),Me=new p({color:16771056,transparent:!0,opacity:.92}),Ne=new e(je,Me);j.add(Ne);let Pe=new u(.33,24,24),L=new p({color:16732035,transparent:!0,opacity:.18,depthWrite:!1,blending:2}),Fe=new e(Pe,L);j.add(Fe);let R=new d,Ie=new Float32Array(216),z=new Float32Array(216),Le=new Float32Array(72),Re=new Float32Array(72),ze=new Float32Array(72),Be=new Float32Array(72),Ve=new Float32Array(72),He=new Float32Array(72),Ue=[];for(let e=0;e<72;e++){let t=Math.floor(Math.random()*O.length),n=O[t];Ue.push({fiberIndex:t,offset:Math.random(),speed:T(.045,.12),size:T(1,2.6)}),z[e*3+0]=Math.min(1,n.color.r*1.25+.25),z[e*3+1]=Math.min(1,n.color.g*1.25+.25),z[e*3+2]=Math.min(1,n.color.b*1.25+.25),Le[e]=Ue[e].size,Be[e]=n.seed,Ve[e]=n.layer,He[e]=n.birth}R.setAttribute(`position`,new _(Ie,3)),R.setAttribute(`aColor`,new _(z,3)),R.setAttribute(`aSize`,new _(Le,1)),R.setAttribute(`aT`,new _(Re,1).setUsage(i)),R.setAttribute(`aLife`,new _(ze,1).setUsage(i)),R.setAttribute(`aSeed`,new _(Be,1)),R.setAttribute(`aLayer`,new _(Ve,1)),R.setAttribute(`aBirth`,new _(He,1)),R.attributes.position.setUsage(i);let B=new g({transparent:!0,depthWrite:!1,blending:2,uniforms:{...N,uPixelRatio:{value:Math.min(devicePixelRatio,2)},uAudioHigh:{value:0},uAudioTint:{value:new v(`#ff7fa8`)},uColorMix:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aT;
        attribute float aLife;
        attribute float aSeed;
        attribute float aLayer;
        attribute float aBirth;

        varying vec3 vColor;
        varying float vPulse;
        varying float vLife;

        ${Oe}
        uniform float uPixelRatio;
        uniform float uAudioHigh;

        void main() {
          vColor = aColor;

          vec3 p = deformFiber(position, aT, aSeed, aLayer);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vLife = aLife * fiberLife(aT, aBirth, aSeed).x;

          float pulse = 0.78 + 0.22 * sin(
            uTime * 5.0 +
            position.x * 7.0 +
            position.y * 4.0
          );
          vPulse = pulse;

          gl_PointSize = aSize * 4.8 * uPixelRatio * pulse * (1.0 + uAudioHigh * 0.45);
          gl_PointSize *= 1.0 / max(0.28, -mv.z * 0.11);

          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        precision highp float;

        varying vec3 vColor;
        varying float vPulse;
        varying float vLife;

        uniform vec3 uAudioTint;
        uniform float uColorMix;
        void main() {
          vec2 p = gl_PointCoord - 0.5;
          float d = length(p);

          // Cross/star shaped highlight.
          float crossX = exp(-abs(p.x) * 28.0) * exp(-abs(p.y) * 5.2);
          float crossY = exp(-abs(p.y) * 28.0) * exp(-abs(p.x) * 5.2);
          float core = 1.0 - smoothstep(0.0, 0.24, d);

          float a = max(core, max(crossX, crossY));
          a *= vPulse * vLife;

          if (a < 0.025) discard;

          vec3 base = mix(vColor, uAudioTint, uColorMix);
          vec3 c = mix(base, vec3(1.0), core * 0.18);
          gl_FragColor = vec4(c * 1.65, a);
        }
      `}),We=new c(R,B);j.add(We),We.frustumCulled=!1;let V=new Float32Array(500*3);for(let e=0;e<500;e++){let t=T(3.5,11.5),n=Math.random()*Math.PI*2,r=Math.acos(T(-1,1));V[e*3+0]=Math.sin(r)*Math.cos(n)*t,V[e*3+1]=Math.cos(r)*t*.55+1.2,V[e*3+2]=Math.sin(r)*Math.sin(n)*t}let Ge=new d;Ge.setAttribute(`position`,new _(V,3));let Ke=new c(Ge,new l({color:14279935,size:.018,transparent:!0,opacity:.25,depthWrite:!1,blending:2}));y.add(Ke);let H=0,U=null,W=ue(`#ff7fa8`),qe=new v(`#ff4f83`),G={lineWidth:1.5,growth:1,sway:1,wave:1,color:1,colorSpeed:1,saturationBoost:.5,sparkle:1,opening:1,layerLag:.12,layerSpacing:1,waveTravel:1.1,waveWidth:.045,waveTail:.18,cycle:5.6,fiberBrightness:1,innerBrightness:1.28,starSpeed:1,corePulse:1,glowOpacity:1,bloomStrength:1,bloomRadius:.3,bloomThreshold:.5,exposure:1.05,autoRotate:.22};this.guiContainer=oe(`Animation70-gui-container`),se(`Animation70-gui-container`),document.body.appendChild(this.guiContainer);let K=new ie({title:`光纤维花`,container:this.guiContainer});this.gui=K;let q=K.addFolder(`音频响应`);q.add(G,`growth`,0,2.5,.05).name(`纤维生长`),q.add(G,`opening`,0,2,.05).name(`低频开合幅度`),q.add(G,`layerLag`,0,.35,.01).name(`层间响应延迟`),q.add(G,`sway`,0,2.5,.05).name(`微风摆动`),q.add(G,`color`,0,2,.05).name(`颜色响应`),q.add(G,`colorSpeed`,0,2,.05).name(`变色响应速度`),q.add(G,`saturationBoost`,0,2,.05).name(`低频饱和增强`),q.add(G,`sparkle`,0,2.5,.05).name(`高频星光`);let J=K.addFolder(`纤维与星光`);J.add(G,`lineWidth`,.5,8,.1).name(`线条粗细（像素）`),J.add(G,`cycle`,4.5,9,.1).name(`生长周期`),J.add(G,`layerSpacing`,.3,1.7,.05).name(`花瓣层间距`),J.add(G,`fiberBrightness`,.2,2.5,.05).name(`纤维亮度`),J.add(G,`innerBrightness`,.2,2.5,.05).name(`内层亮度`),J.add(G,`starSpeed`,0,3,.05).name(`飞星速度`),J.add(G,`corePulse`,0,2.5,.05).name(`花芯呼吸`),J.add(G,`glowOpacity`,0,2,.05).name(`光晕透明度`);let Y=K.addFolder(`鼓点光波`);Y.add(G,`wave`,0,2.5,.05).name(`光波强度`),Y.add(G,`waveTravel`,.45,2,.05).name(`传播时长（秒）`),Y.add(G,`waveWidth`,.02,.12,.005).name(`光波宽度`),Y.add(G,`waveTail`,.05,.4,.01).name(`尾迹长度`);let Je=K.addFolder(`泛光效果`);Je.add(G,`bloomStrength`,0,2.5,.05).name(`泛光强度`).onChange(e=>{w.strength=e}),Je.add(G,`bloomRadius`,0,1,.01).name(`泛光范围`).onChange(e=>{w.radius=e}),Je.add(G,`bloomThreshold`,0,1,.01).name(`泛光阈值`).onChange(e=>{w.threshold=e});let Ye=K.addFolder(`画面`);Ye.add(G,`exposure`,.5,1.8,.01).name(`曝光`).onChange(e=>{x.toneMappingExposure=e}),Ye.add(G,`autoRotate`,0,1.2,.02).name(`自动旋转`).onChange(e=>{S.autoRotateSpeed=e}),K.close(),K.hide(),this.settingsButton=ae(`Animation70-settings-button`),this.settingsButton.addEventListener(`click`,this.toggleGUI=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?(K.open(),K.show()):K.hide()}),document.body.appendChild(this.settingsButton);let X={bass:0,mid:0,high:0,motion:0,previousKick:0,colorMix:0,wavePower:0,kickArmed:!0,sinceKick:10},Z=[0,0,0],Q=Array.from({length:4},()=>({progress:-2,power:0,age:0})),Xe=0,Ze=0,Qe=performance.now(),$e=0,$=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-r*n));function et(e){let n=!!(U?.audioFeature?.animation&&U.isPlaying!==!1),r=n?U?.audioFeature?.animation:null;X.bass=$(X.bass,r?.bass||0,e,n?8:3),X.mid=$(X.mid,r?.mid||0,e,n?7:3),X.high=$(X.high,r?.high||0,e,n?12:4),X.motion=$(X.motion,r?.motion||0,e,n?6:3),X.colorMix=$(X.colorMix,r?Math.min(.9,(.32+(X.mid+X.high)*.3)*G.color):0,e,n?2.5:3);let i=r?.kick||0;X.sinceKick+=e,i<.18&&(X.kickArmed=!0);let a=X.kickArmed||i>X.previousKick*1.22+.04;if(n&&a&&i>.3&&X.sinceKick>.16){let e=Q[Xe];e.progress=0,e.age=0,e.power=Math.min(1.3,i),Xe=(Xe+1)%Q.length,X.wavePower=Math.min(1,i),X.kickArmed=!1,X.sinceKick=0}X.previousKick=i,X.wavePower*=Math.exp(-4*e);for(let n=0;n<Q.length;n++){let r=Q[n];r.power>0&&(r.progress+=e/G.waveTravel,r.age+=e,r.progress>1.2+G.waveTail*4&&(r.power=0));let i=1-t.smoothstep(r.progress,1.08,1.2+G.waveTail*4);P.uWaves.value[n].set(r.progress,r.power*Math.exp(-r.age*.65)*i)}N.uGrowthPhase.value+=e*(1+(X.mid*.65+X.motion*.25)*G.growth)/G.cycle;let o=X.bass*G.opening;for(let t=2;t>=0;t--){let n=G.layerLag>0&&t>0?Z[t-1]:o,r=t===0||G.layerLag===0?.085:G.layerLag;Z[t]=$(Z[t],n,e,1/r)}N.uOpenings.value.set(...Z),N.uLineWidth.value=G.lineWidth,N.uLineViewport.value.set(x.domElement.clientWidth||innerWidth,x.domElement.clientHeight||innerHeight),N.uLayerSpacing.value=G.layerSpacing,N.uSway.value=G.sway*(1+X.bass*.7),P.uWaveWidth.value=G.waveWidth,P.uWaveTail.value=G.waveTail,P.uWaveStrength.value=G.wave;let s=(r?Math.min(1.5,(r.mid??0)+(r.high??0)*1.25):0)*.55*G.color;H=$(H,s,e,n?G.colorSpeed*8:1/.18);let[c,l]=de(W[1],W[2],H),u=1+X.bass*G.saturationBoost,d=fe([Math.min(.82,W[0]+X.bass*.03),c*u,l*u]);for(let e of[F,I,B])e.uniforms.uColorMix.value=X.colorMix,e.uniforms.uAudioTint.value.setRGB(d[0],d[1],d[2]);F.uniforms.uBrightness.value=G.fiberBrightness,I.uniforms.uBrightness.value=G.innerBrightness,Me.opacity=Math.min(1,.92+X.wavePower*.08),L.color.copy(qe).lerp(F.uniforms.uAudioTint.value,X.colorMix),B.uniforms.uAudioHigh.value=X.high*G.sparkle}function tt(e){let n=R.attributes.position.array;for(let r=0;r<72;r++){let i=Ue[r],a=O[i.fiberIndex],o=(e*i.speed+i.offset)%1,s=.04+o*.94;Re[r]=s,ze[r]=t.smoothstep(o,0,.1)*(1-t.smoothstep(o,.86,1)),Te(a.p0,a.p1,a.p2,a.p3,s,E),n[r*3+0]=E.x-A.x,n[r*3+1]=E.y-A.y,n[r*3+2]=E.z-A.z}R.attributes.position.needsUpdate=!0,R.attributes.aT.needsUpdate=!0,R.attributes.aLife.needsUpdate=!0}function nt(){let e=performance.now(),t=Math.min(Math.max((e-Qe)/1e3,0),.1);Qe=e,Ze+=t;let n=Ze;$e+=t*G.starSpeed,et(t),S.update(t),F.uniforms.uTime.value=n,I.uniforms.uTime.value=n,B.uniforms.uTime.value=n,tt($e),j.rotation.y=Math.sin(n*.11)*.055,j.rotation.z=Math.sin(n*.16)*.012;let r=1+(Math.sin(n*3)*.055+X.bass*.12*G.opening+X.wavePower*.14*G.wave)*G.corePulse;Ne.scale.setScalar(r),Fe.scale.setScalar(1+Math.sin(n*1.8)*.11+X.bass*.22*G.opening+X.wavePower*.25*G.wave),L.opacity=Math.min(1,(.14+(Math.sin(n*2.4)*.5+.5)*.1+X.wavePower*.16*G.wave)*G.glowOpacity),Ke.rotation.y+=t*.0132,C.render()}this.scene=y,this.renderer=x,this.controls=S,this.composer=C,this._renderFrame=nt,this._setAudioData=e=>{U=e},this._resetAudio=()=>{U=null,Object.assign(X,{bass:0,mid:0,high:0,motion:0,previousKick:0,colorMix:0,wavePower:0,kickArmed:!0,sinceKick:10}),Z.fill(0);for(let e of Q)e.progress=-2,e.power=0,e.age=0;H=0;let e=fe(W);for(let t of[F,I,B])t.uniforms.uColorMix.value=0,t.uniforms.uAudioTint.value.setRGB(...e);L.color.copy(qe),N.uGrowthPhase.value=0},this._resize=()=>{let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;b.aspect=e/t,b.updateProjectionMatrix(),ge||_e();let n=Math.min(devicePixelRatio,2);x.setPixelRatio(n),x.setSize(e,t),C.setPixelRatio(n),C.setSize(e,t),B.uniforms.uPixelRatio.value=n},this._disposeScene=()=>{x.domElement.removeEventListener(`contextmenu`,he),S.dispose();let e=new Set,t=new Set;y.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])t.add(e)});for(let t of e)t.dispose();for(let e of t)e.dispose();w.dispose(),C.dispose(),x.dispose()},this._resize()}updateWithAudioData(e){this._setAudioData?.(e)}render(){this.disposed||this._renderFrame?.()}onWindowResize(){this._resize?.()}resetState(){this._resetAudio?.()}resetGuiCamera(){this._resetCamera?.()}dispose(){this.disposed||(this.disposed=!0,this.settingsButton?.removeEventListener(`click`,this.toggleGUI),y(this.settingsButton,this.guiContainer,this.gui),this._disposeScene?.())}};export{b as default};