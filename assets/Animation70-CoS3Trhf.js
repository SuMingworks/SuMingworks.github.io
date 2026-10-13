import{$n as e,Ar as t,B as n,Ct as r,Dt as i,F as a,Jt as o,Ot as s,Ut as c,Zn as l,ar as u,er as d,g as f,jr as p,l as m,mt as h,q as g,qt as ee,r as te,u as ne,xt as re}from"./three.module-y53aV_Iu.js";import{n as ie,r as ae,t as oe}from"./OutputPass-R3e3FNgb.js";import{a as se,i as ce,n as _,r as le,t as ue}from"./GUIHelper-DNd0uFVI.js";import{t as de}from"./UnrealBloomPass-C3xsCyqj.js";import{t as fe}from"./OrbitControls-Bg5pjowc.js";import{i as pe,o as me,p as he}from"./PerceptualColor-yyoOW5OX.js";var v=class{constructor(e,t={}){this.canvas=e,this.hostSettings=t,this.gui=null,this.guiContainer=null,this.settingsButton=null,this.guiVisible=!1,this.disposed=!1,this.init()}init(){let _=new e;_.background=null;let v=new c(46,(this.canvas.clientWidth||innerWidth)/(this.canvas.clientHeight||innerHeight),.1,100);v.position.set(.2,1,10.4);let y=new te({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:`high-performance`});y.setSize(this.canvas.clientWidth||innerWidth,this.canvas.clientHeight||innerHeight),y.setPixelRatio(Math.min(devicePixelRatio,2)),y.outputColorSpace=l,y.toneMapping=4,y.toneMappingExposure=1.05,y.setClearColor(0,0),this.canvas.style.backgroundColor=`transparent`;let b=new fe(v,y.domElement);b.enableDamping=!0,b.dampingFactor=.055,b.enablePan=!0,b.screenSpacePanning=!0,b.mouseButtons.LEFT=re.ROTATE,b.mouseButtons.MIDDLE=re.DOLLY,b.mouseButtons.RIGHT=re.PAN,b.minDistance=5.5,b.maxDistance=16,b.target.set(0,.65,0),b.autoRotate=!0,b.autoRotateSpeed=.22;let ge=e=>e.preventDefault();y.domElement.addEventListener(`contextmenu`,ge);let x=!1;b.addEventListener(`start`,()=>{x=!0});function S(){let e=Math.max(10.4,6.8/(Math.tan(v.fov*Math.PI/360)*v.aspect));v.position.set(.2,1,e),b.maxDistance=Math.max(26,e*1.7)}S(),this._resetCamera=()=>{x=!1,b.target.set(0,.65,0),S(),b.update()};let C=new ae(y);C.addPass(new ie(_,v));let w=new de(new t(this.canvas.clientWidth||innerWidth,this.canvas.clientHeight||innerHeight),1,.3,.5);w.threshold=.5,w.strength=1,w.radius=.3,C.addPass(w),C.addPass(new oe);let T=(e,t)=>e+Math.random()*(t-e),E=new p,D=[new f(`#ff3b78`),new f(`#ff7fa8`),new f(`#ffd7e6`),new f(`#f7f8ff`),new f(`#a9d7ff`),new f(`#9aa9ff`)];function _e(){let e=Math.random();return e<.3?D[0].clone():e<.52?D[1].clone():e<.67?D[2].clone():e<.81?D[3].clone():e<.92?D[4].clone():D[5].clone()}let O=[],ve=[],k=[],ye=[],be=[],xe=[],Se=[],A=new p(0,-.45,0),j=new g;j.position.copy(A),_.add(j);let Ce=[{count:42,spread:[1.35,2.25],rise:[3.4,4.1],tip:[1.1,1.85],side:.28},{count:78,spread:[2.65,3.8],rise:[3.3,4.3],tip:[-.55,.35],side:.48},{count:60,spread:[4,5.15],rise:[2.6,3.6],tip:[-1.8,-.8],side:.64}];function M(e,t,n,r,i,a=new p){let o=1-i,s=o*o*o,c=3*o*o*i,l=3*o*i*i,u=i*i*i;return a.set(s*e.x+c*t.x+l*n.x+u*r.x,s*e.y+c*t.y+l*n.y+u*r.y,s*e.z+c*t.z+l*n.z+u*r.z),a}function we(e){let t=e<42?0:e<120?1:2,n=Ce[t],r=(e-(t===0?0:t===1?42:120))/n.count*Math.PI*2+t*.27+T(-.065,.065),i=new p(Math.cos(r),T(-.06,.12),Math.sin(r)*.78).normalize(),a=Math.cos(r*6+t*.7),o=T(...n.spread)*(1+a*.045),s=T(...n.rise)+a*.14,c=T(-n.side,n.side),l=A.clone(),u=new p(-i.z,0,i.x),d=A.clone().addScaledVector(i,T(.25,.95)).add(new p(0,T(1.15,2.15),0)).addScaledVector(u,c*.16),f=A.clone().addScaledVector(i,o*T(.56,.82)).add(new p(0,s,0)).addScaledVector(u,c),m=A.clone().addScaledVector(i,o).add(new p(0,T(...n.tip),T(-.12,.12))).addScaledVector(u,c*.65);d.z+=T(-.12,.12),f.z+=T(-.22,.22),m.z+=T(-.26,.26);let h=_e(),g={p0:l,p1:d,p2:f,p3:m,color:h,birth:(T(0,1)+t*.16)%1,seed:Math.random()*100,layer:t};O.push(g);for(let e=0;e<52;e++){let n=e/52,r=(e+1)/52,i=M(l,d,f,m,n,new p),a=M(l,d,f,m,r,new p);ve.push(i.x,i.y,i.z),ve.push(a.x,a.y,a.z),k.push(h.r,h.g,h.b),k.push(h.r,h.g,h.b),ye.push(n,r),be.push(g.birth,g.birth),xe.push(g.seed,g.seed),Se.push(t,t)}}for(let e=0;e<180;e++)we(e);let N=new ne;N.setAttribute(`position`,new n(ve,3)),N.setAttribute(`aColor`,new n(k,3)),N.setAttribute(`aT`,new n(ye,1)),N.setAttribute(`aBirth`,new n(be,1)),N.setAttribute(`aSeed`,new n(xe,1)),N.setAttribute(`aLayer`,new n(Se,1)),N.translate(-A.x,-A.y,-A.z);let P={uTime:{value:0},uGrowthPhase:{value:0},uOpenings:{value:new p},uLayerSpacing:{value:1},uSway:{value:1}},Te=`
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
    `,F={uWaves:{value:Array.from({length:4},()=>new t(-2,0))},uWaveWidth:{value:.045},uWaveTail:{value:.18},uWaveStrength:{value:1}},I=new d({transparent:!0,depthWrite:!1,blending:2,vertexColors:!1,uniforms:{...P,...F,uBrightness:{value:1},uAudioTint:{value:new f(`#ff7fa8`)},uColorMix:{value:0}},vertexShader:`
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

        ${Te}
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

          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
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
      `}),Ee=new h(N,I);j.add(Ee),Ee.frustumCulled=!1;let L=I.clone();Object.assign(L.uniforms,P,F),L.uniforms.uBrightness.value=1.28,L.fragmentShader=`
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
        vec3 whiteHot = mix(base, vec3(1.0), min(0.64, 0.3 + vHead * 0.16));
        gl_FragColor = vec4(whiteHot * uBrightness, min(alpha, 1.0));
      }
    `;let De=new h(N,L);j.add(De),De.frustumCulled=!1;let Oe=new u(.15,24,24),ke=new s({color:16771056,transparent:!0,opacity:.92}),Ae=new i(Oe,ke);j.add(Ae);let je=new u(.33,24,24),R=new s({color:16732035,transparent:!0,opacity:.18,depthWrite:!1,blending:2}),Me=new i(je,R);j.add(Me);let z=new ne,Ne=new Float32Array(216),B=new Float32Array(216),Pe=new Float32Array(72),Fe=new Float32Array(72),Ie=new Float32Array(72),Le=new Float32Array(72),Re=new Float32Array(72),ze=new Float32Array(72),V=[];for(let e=0;e<72;e++){let t=Math.floor(Math.random()*O.length),n=O[t];V.push({fiberIndex:t,offset:Math.random(),speed:T(.045,.12),size:T(1,2.6)}),B[e*3+0]=Math.min(1,n.color.r*1.25+.25),B[e*3+1]=Math.min(1,n.color.g*1.25+.25),B[e*3+2]=Math.min(1,n.color.b*1.25+.25),Pe[e]=V[e].size,Le[e]=n.seed,Re[e]=n.layer,ze[e]=n.birth}z.setAttribute(`position`,new m(Ne,3)),z.setAttribute(`aColor`,new m(B,3)),z.setAttribute(`aSize`,new m(Pe,1)),z.setAttribute(`aT`,new m(Fe,1).setUsage(a)),z.setAttribute(`aLife`,new m(Ie,1).setUsage(a)),z.setAttribute(`aSeed`,new m(Le,1)),z.setAttribute(`aLayer`,new m(Re,1)),z.setAttribute(`aBirth`,new m(ze,1)),z.attributes.position.setUsage(a);let H=new d({transparent:!0,depthWrite:!1,blending:2,uniforms:{...P,uPixelRatio:{value:Math.min(devicePixelRatio,2)},uAudioHigh:{value:0}},vertexShader:`
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

        ${Te}
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

          vec3 c = mix(vColor, vec3(1.0), core * 0.78);
          gl_FragColor = vec4(c * 1.65, a);
        }
      `}),Be=new ee(z,H);j.add(Be),Be.frustumCulled=!1;let U=new Float32Array(500*3);for(let e=0;e<500;e++){let t=T(3.5,11.5),n=Math.random()*Math.PI*2,r=Math.acos(T(-1,1));U[e*3+0]=Math.sin(r)*Math.cos(n)*t,U[e*3+1]=Math.cos(r)*t*.55+1.2,U[e*3+2]=Math.sin(r)*Math.sin(n)*t}let Ve=new ne;Ve.setAttribute(`position`,new m(U,3));let He=new ee(Ve,new o({color:14279935,size:.018,transparent:!0,opacity:.25,depthWrite:!1,blending:2}));_.add(He);let Ue=0,W=null,We=pe(`#ff7fa8`),Ge=new f(`#ff4f83`),G={growth:1,sway:1,wave:1,color:1,colorSpeed:1,sparkle:1,opening:1,layerLag:.12,layerSpacing:1,waveTravel:1.1,waveWidth:.045,waveTail:.18,cycle:5.6,fiberBrightness:1,innerBrightness:1.28,starSpeed:1,corePulse:1,glowOpacity:1,bloomStrength:1,bloomRadius:.3,bloomThreshold:.5,exposure:1.05,autoRotate:.22};this.guiContainer=le(`Animation70-gui-container`),ue(`Animation70-gui-container`),document.body.appendChild(this.guiContainer);let K=new se({title:`光纤维花`,container:this.guiContainer});this.gui=K;let q=K.addFolder(`音频响应`);q.add(G,`growth`,0,2.5,.05).name(`纤维生长`),q.add(G,`opening`,0,2,.05).name(`低频开合幅度`),q.add(G,`layerLag`,0,.35,.01).name(`层间响应延迟`),q.add(G,`sway`,0,2.5,.05).name(`微风摆动`),q.add(G,`color`,0,2,.05).name(`颜色响应`),q.add(G,`colorSpeed`,0,2,.05).name(`变色速度`),q.add(G,`sparkle`,0,2.5,.05).name(`高频星光`);let J=K.addFolder(`纤维与星光`);J.add(G,`cycle`,4.5,9,.1).name(`生长周期`),J.add(G,`layerSpacing`,.3,1.7,.05).name(`花瓣层间距`),J.add(G,`fiberBrightness`,.2,2.5,.05).name(`纤维亮度`),J.add(G,`innerBrightness`,.2,2.5,.05).name(`内层亮度`),J.add(G,`starSpeed`,0,3,.05).name(`飞星速度`),J.add(G,`corePulse`,0,2.5,.05).name(`花芯呼吸`),J.add(G,`glowOpacity`,0,2,.05).name(`光晕透明度`);let Y=K.addFolder(`鼓点光波`);Y.add(G,`wave`,0,2.5,.05).name(`光波强度`),Y.add(G,`waveTravel`,.45,2,.05).name(`传播时长（秒）`),Y.add(G,`waveWidth`,.02,.12,.005).name(`光波宽度`),Y.add(G,`waveTail`,.05,.4,.01).name(`尾迹长度`);let Ke=K.addFolder(`泛光效果`);Ke.add(G,`bloomStrength`,0,2.5,.05).name(`泛光强度`).onChange(e=>{w.strength=e}),Ke.add(G,`bloomRadius`,0,1,.01).name(`泛光范围`).onChange(e=>{w.radius=e}),Ke.add(G,`bloomThreshold`,0,1,.01).name(`泛光阈值`).onChange(e=>{w.threshold=e});let qe=K.addFolder(`画面`);qe.add(G,`exposure`,.5,1.8,.01).name(`曝光`).onChange(e=>{y.toneMappingExposure=e}),qe.add(G,`autoRotate`,0,1.2,.02).name(`自动旋转`).onChange(e=>{b.autoRotateSpeed=e}),K.close(),K.hide(),this.settingsButton=ce(`Animation70-settings-button`),this.settingsButton.addEventListener(`click`,this.toggleGUI=()=>{this.guiVisible=!this.guiVisible,this.guiVisible?(K.open(),K.show()):K.hide()}),document.body.appendChild(this.settingsButton);let X={bass:0,mid:0,high:0,motion:0,previousKick:0,colorMix:0,wavePower:0,kickArmed:!0,sinceKick:10},Z=[0,0,0],Q=Array.from({length:4},()=>({progress:-2,power:0,age:0})),Je=0,Ye=0,Xe=performance.now(),Ze=0,$=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-r*n));function Qe(e){let t=!!W?.isPlaying,n=t?W?.audioFeature?.animation:null;X.bass=$(X.bass,n?.bass||0,e,t?8:3),X.mid=$(X.mid,n?.mid||0,e,t?7:3),X.high=$(X.high,n?.high||0,e,t?12:4),X.motion=$(X.motion,n?.motion||0,e,t?6:3),X.colorMix=$(X.colorMix,n?Math.min(.9,(.32+(X.mid+X.high)*.3)*G.color):0,e,t?2.5:3);let i=n?.kick||0;X.sinceKick+=e,i<.18&&(X.kickArmed=!0);let a=X.kickArmed||i>X.previousKick*1.22+.04;if(t&&a&&i>.3&&X.sinceKick>.16){let e=Q[Je];e.progress=0,e.age=0,e.power=Math.min(1.3,i),Je=(Je+1)%Q.length,X.wavePower=Math.min(1,i),X.kickArmed=!1,X.sinceKick=0}X.previousKick=i,X.wavePower*=Math.exp(-4*e);for(let t=0;t<Q.length;t++){let n=Q[t];n.power>0&&(n.progress+=e/G.waveTravel,n.age+=e,n.progress>1.2+G.waveTail*4&&(n.power=0));let i=1-r.smoothstep(n.progress,1.08,1.2+G.waveTail*4);F.uWaves.value[t].set(n.progress,n.power*Math.exp(-n.age*.65)*i)}P.uGrowthPhase.value+=e*(1+(X.mid*.65+X.motion*.25)*G.growth)/G.cycle;let o=X.bass*G.opening;for(let t=2;t>=0;t--){let n=G.layerLag>0&&t>0?Z[t-1]:o,r=t===0||G.layerLag===0?.085:G.layerLag;Z[t]=$(Z[t],n,e,1/r)}P.uOpenings.value.set(...Z),P.uLayerSpacing.value=G.layerSpacing,P.uSway.value=G.sway*(1+X.bass*.7),F.uWaveWidth.value=G.waveWidth,F.uWaveTail.value=G.waveTail,F.uWaveStrength.value=G.wave,n&&(Ue+=e*(.035+X.mid*.11+X.high*.07)*G.colorSpeed);let[s,c]=he(We[1],We[2],Ue),l=me([Math.min(.82,We[0]+X.bass*.06),s,c]);for(let e of[I,L])e.uniforms.uColorMix.value=X.colorMix,e.uniforms.uAudioTint.value.setRGB(l[0],l[1],l[2]);I.uniforms.uBrightness.value=G.fiberBrightness,L.uniforms.uBrightness.value=G.innerBrightness,ke.opacity=Math.min(1,.92+X.wavePower*.08),R.color.copy(Ge).lerp(I.uniforms.uAudioTint.value,X.colorMix),H.uniforms.uAudioHigh.value=X.high*G.sparkle}function $e(e){let t=z.attributes.position.array;for(let n=0;n<72;n++){let i=V[n],a=O[i.fiberIndex],o=(e*i.speed+i.offset)%1,s=.04+o*.94;Fe[n]=s,Ie[n]=r.smoothstep(o,0,.1)*(1-r.smoothstep(o,.86,1)),M(a.p0,a.p1,a.p2,a.p3,s,E),t[n*3+0]=E.x-A.x,t[n*3+1]=E.y-A.y,t[n*3+2]=E.z-A.z}z.attributes.position.needsUpdate=!0,z.attributes.aT.needsUpdate=!0,z.attributes.aLife.needsUpdate=!0}function et(){let e=performance.now(),t=Math.min(Math.max((e-Xe)/1e3,0),.1);Xe=e,Ye+=t;let n=Ye;Ze+=t*G.starSpeed,Qe(t),b.update(t),I.uniforms.uTime.value=n,L.uniforms.uTime.value=n,H.uniforms.uTime.value=n,$e(Ze),j.rotation.y=Math.sin(n*.11)*.055,j.rotation.z=Math.sin(n*.16)*.012;let r=1+(Math.sin(n*3)*.055+X.bass*.12*G.opening+X.wavePower*.14*G.wave)*G.corePulse;Ae.scale.setScalar(r),Me.scale.setScalar(1+Math.sin(n*1.8)*.11+X.bass*.22*G.opening+X.wavePower*.25*G.wave),R.opacity=Math.min(1,(.14+(Math.sin(n*2.4)*.5+.5)*.1+X.wavePower*.16*G.wave)*G.glowOpacity),He.rotation.y+=t*.0132,C.render()}this.scene=_,this.renderer=y,this.controls=b,this.composer=C,this._renderFrame=et,this._setAudioData=e=>{W=e},this._resetAudio=()=>{W=null,Object.assign(X,{bass:0,mid:0,high:0,motion:0,previousKick:0,colorMix:0,wavePower:0,kickArmed:!0,sinceKick:10}),Z.fill(0);for(let e of Q)e.progress=-2,e.power=0,e.age=0;Ue=0,P.uGrowthPhase.value=0},this._resize=()=>{let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;v.aspect=e/t,v.updateProjectionMatrix(),x||S();let n=Math.min(devicePixelRatio,2);y.setPixelRatio(n),y.setSize(e,t),C.setPixelRatio(n),C.setSize(e,t),H.uniforms.uPixelRatio.value=n},this._disposeScene=()=>{y.domElement.removeEventListener(`contextmenu`,ge),b.dispose();let e=new Set,t=new Set;_.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])t.add(e)});for(let t of e)t.dispose();for(let e of t)e.dispose();w.dispose(),C.dispose(),y.dispose()},this._resize()}updateWithAudioData(e){this._setAudioData?.(e)}render(){this.disposed||this._renderFrame?.()}onWindowResize(){this._resize?.()}resetState(){this._resetAudio?.()}resetGuiCamera(){this._resetCamera?.()}dispose(){this.disposed||(this.disposed=!0,this.settingsButton?.removeEventListener(`click`,this.toggleGUI),_(this.settingsButton,this.guiContainer,this.gui),this._disposeScene?.())}};export{v as default};