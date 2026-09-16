import{a as e}from"./lil-gui.esm-jlbWO7FJ.js";import{$ as t,Dr as n,Dt as r,Et as i,Gt as a,Jn as o,K as s,Kt as c,Mt as l,Or as u,Q as d,St as f,Un as p,Ut as m,Vt as h,Xn as g,Zn as _,f as ee,g as v,l as y,nr as b,r as te,u as ne,y as re,z as ie}from"./three.module-TVF63cYk.js";import{n as ae,r as x,t as S}from"./OutputPass-CxDAHfy4.js";import{t as oe}from"./pointer-input-DxeYmife.js";import{a as C,f as w,h as se,n as ce,o as le,r as ue}from"./dist-Fwp4vcHv.js";import{c as T}from"./GlobalMouseFlowService-CPDcMzsj.js";import{t as E}from"./UnrealBloomPass-C17ZlHgr.js";import{i as D,n as de,r as fe,t as pe}from"./GUIHelper-DspWBXk2.js";import{t as me}from"./OrbitControls-Ju8LL-qO.js";var O=class{constructor(e,t={}){this.canvas=e;let n={impactRate:30,rainSpeed:13,rainOpacity:.26,dropVariation:.82,largeDropChance:.078,surfaceTension:.98,impactDepth:.7,interference:.88,rippleSize:1.27,rippleLife:1.34,surfaceRipple:1.05,surfaceMotion:.068,visibleRippleStrength:.34,visibleRippleChance:.18,surfaceFlash:.52,splashAmount:.44,needleStrength:.56,crownStrength:.72,bloomStrength:.84,airEntrapment:.44,bubbleFrequency:1.15,bubbleMin:.04,bubbleMax:.21,bubbleLife:1.58,bubbleWobble:.11,bubbleDisturbance:.74,iridescence:.1,bubbleHighlight:.7,reflectionStrength:1.42,puddleAmount:1,puddleDepth:1.4,roadRoughness:1.48,reflectionStretch:1.28,waterDynamics:1.2,puddleRippleStrength:2.6,warmReflection:.82,bloom:.12,exposure:1.16,detailStrength:1.06,silverStrength:1.12,wetEdgeStrength:1.08,lightFieldStrength:1.08,specularContrast:1.14,rainlightDistortion:1.08,highlightRecovery:1.05,directionalFlow:.62,distanceDetail:1,microFlowStrength:.48,layerSeparation:1,edgeMeniscus:1.08,bubbleDrift:.42,transitionSoftness:1,subsurfaceAsphalt:.28,edgeIrregularity:.72,waterActivity:1.25,flowSense:1.25,atmosphereStrength:.98,shaftStrength:.26,lightDirection:-.08,horizonGlow:.66,cloudShadow:.9,coolWarmBalance:.78,farBrightness:.76,stormDepth:1.02,horizonMist:1.16,lightSourcePresence:.72,urbanLightStrength:.98,urbanBokeh:3.85,urbanWarmth:.94,urbanMotion:.035,urbanReflection:1.38,urbanFogScatter:1.22,urbanRainLight:1.1,urbanOrange:1.22,urbanCool:.56,urbanCoolReflection:.5,urbanDomainWidth:1.2,urbanCorePresence:.22,urbanPoolStrength:1.18,urbanPoolWidth:1.16,urbanPoolRain:1.18,urbanPoolReflection:1.16,highLightStrength:1.08,highLightSize:1.1,highRainScatter:1.14,midLightStrength:1,diffuseHalo:1.22,diffuseRain:1.18,diffuseMist:1.16,layerIrregularity:1,lightVolumeDepth:1,lightVolumeSpread:1,lightVolumeNear:1,lightVolumeMid:1,lightVolumeFar:1,rainDepthContrast:1.1,rainLightResponse:1.12,rainLayer:1,rainWindStrength:.78,rainGustPropagation:.72,rainDensity:1.08,streakVariation:.96,audioRainDensity:1.22,cameraRainStrength:.055,qualityMode:`平衡`,depthResponse:1,deepSmoothness:1,rippleLod:1,shaderDetailLod:1,bubbleScale:1,audioEnabled:!0,audioAmount:.92,audioDynamics:.92,audioRhythm:1.05};this.defaultSettings=JSON.parse(JSON.stringify(n)),this.settings={...n,...t},this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.runtime=null,this.groundFluid=null,this.groundDistortions=null,this.detachGroundFluidPointer=null,this.activeGroundDistortion=null,this.localFlowCompositionActive=!1,this.groundFluidConfigKey=``,this.isDisposed=!1,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.lastTime=performance.now()*.001,this.elapsed=0,this.hasAudioData=!1,this.a=null,this.externalBackgroundEnabled=!1,this.globalMouseFlowLayer=`overlay`,this.audioState={ready:!1,playing:!1,energy:0,bass:0,mid:0,high:0,motion:0,brightness:0,variation:0,relativeEnergy:.5,impact:0,bassPunch:0,sectionEnergy:0,energyBaseline:.18,kick:0,snare:0,hihat:0,beat:0,downbeat:0,prevBeat:0,prevDownbeat:0,eventCooldown:0},this.initPromise=this.init(),this.initPromise.catch(e=>{console.error(`❌ Animation65 初始化失败:`,e)})}async init(){return this.isDisposed?!1:this.scene?!0:(this.setupThreeJS(),this.isDisposed||(this.setupPostProcessing(),this.runtime=this.buildRainRuntime(),this.isDisposed)?!1:(this.setupGUI(),this.setupSettingsButton(),console.log(`✅ Animation65 初始化成功`),!0))}setupThreeJS(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.scene=new g,this.scene.background=new v(198411),this.camera=new h(46,e/t,.05,120),this.camera.position.set(0,.92,7),this.renderer=new te({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setSize(e,t,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=o,this.renderer.toneMapping=1,this._applyOutputExposure(),this.controls=new me(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.target.set(0,.035,-2.9),this.controls.minDistance=3.5,this.controls.maxDistance=13,this.controls.maxPolarAngle=Math.PI*.6,this.controls.minPolarAngle=.05,this.controls.saveState()}setupPostProcessing(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,r=new ae(this.scene,this.camera);this.bloomPass=new E(new n(e,t),this.settings.bloom,.32,.9),this.composer=new x(this.renderer),this.composer.addPass(r),this.composer.addPass(this.bloomPass),this.composer.addPass(new S)}_selectedGlobalFlowEffect(){let e=document.getElementById(`globalMouseFlowEffect`);return e instanceof HTMLSelectElement?e.value:``}_ensureGroundDistortion(){if(this.groundFluid||!this.renderer||!this.composer||!this.bloomPass)return;this.groundFluid=new ue(this.renderer,{profile:`balanced`,splatRadius:.0014,splatForce:7,pressureIterations:10,curlStrength:.18,velocityDissipation:.99,densityDissipation:.94,pressureDissipation:.8,bfecc:!0,reflectWalls:!1,enableDye:!0}),this.groundDistortions={simple:new se(this.groundFluid),chromatic:new C(this.groundFluid),waterDistortion:new ce(this.groundFluid),caustics:new w(this.groundFluid),rgb:new le(this.groundFluid)};let e=this.composer.passes.indexOf(this.bloomPass);for(let t of Object.values(this.groundDistortions))t.enabled=!1,this.composer.insertPass(t,e);this.detachGroundFluidPointer=oe(document.body,this.groundFluid,{coloredStrokes:!1,shouldSplat:()=>!!this.activeGroundDistortion}),this.onWindowResize()}_syncGroundDistortion(e){let t=this._selectedGlobalFlowEffect(),n=document.getElementById(`globalMouseFlowEnabled`),r=(!(n instanceof HTMLInputElement)||n.checked)&&[`simple`,`chromatic`,`waterDistortion`,`caustics`,`rgb`].includes(t);if(r!==this.localFlowCompositionActive&&(this.localFlowCompositionActive=r,T(r)),!r){if(this.activeGroundDistortion=null,this.groundDistortions)for(let e of Object.values(this.groundDistortions))e.enabled=!1;return}this._ensureGroundDistortion();let i=(e,t)=>{let n=document.getElementById(e),r=n instanceof HTMLInputElement?Number(n.value):t;return Number.isFinite(r)?r:t},a=i(`globalMouseFlowIntensity`,1),o=i(`globalMouseFlowForce`,7),s=i(`globalMouseFlowRadius`,1),c=i(`globalMouseFlowCurl`,.18),l=i(`globalMouseFlowVelocityDissipation`,.99),u=i(`globalMouseFlowDensityDissipation`,.94),d=`${o}|${s}|${c}|${l}|${u}`;d!==this.groundFluidConfigKey&&(this.groundFluid.configure({splatForce:o,splatRadius:s*.0014,curlStrength:c,velocityDissipation:l,densityDissipation:u}),this.groundFluidConfigKey=d),this.activeGroundDistortion=t;for(let[e,n]of Object.entries(this.groundDistortions))n.enabled=e===t,n.intensity=a;this.groundFluid.step(e)}_qualityBloomScale(e=this.settings.qualityMode){return e===`高画质`?1:e===`性能`?.62:.82}_applyOutputExposure(){this.renderer&&(this.renderer.toneMappingExposure=this.settings.exposure)}buildRainRuntime(){let e=this.scene,h=this.camera,g=this.renderer;this.controls;let te=this.composer,ae=this.bloomPass,x=this.settings,S=this.audioState,oe=Object.freeze({rainRateMul:1,rainDensityMul:1,rainSpeedMul:1,largeDropAdd:0,impactMul:1,rippleMul:1,interferenceMul:1,motionMul:1,bubbleWobbleAdd:0,airAdd:0,highlightAdd:0,flashMul:1}),C={...oe};function w(){if(!(x.audioEnabled&&S.playing&&S.ready))return oe;let e=x.audioAmount,t=x.audioDynamics,n=x.audioRhythm,r=f.clamp((S.relativeEnergy-.5)*2,0,1),i=f.clamp(S.sectionEnergy*.68+r*.2+S.energy*.12,0,1),a=f.clamp(S.energy*.3+S.motion*.26+i*.44,0,1.25),o=f.clamp(S.mid*.42+S.motion*.25+S.variation*.23+S.impact*.1,0,1.25),s=f.clamp(S.kick*.34+S.snare*.22+S.bassPunch*.3+S.impact*.24,0,1.4),c=f.clamp(a*.52+i*.38+S.motion*.1,0,1.25),l=f.clamp(S.impact*.3+S.bassPunch*.28+S.beat*.18+S.downbeat*.24,0,1.2),u=f.clamp(.82+x.audioRainDensity*e*t*(c*.52+l*.1),.76,1.38);return C.rainRateMul=f.clamp(1+e*t*(a*.72+i*.2),1,1.82),C.rainDensityMul=u,C.rainSpeedMul=1+e*t*(a*.16+S.motion*.08),C.largeDropAdd=e*n*(S.bassPunch*.095+S.kick*.045),C.impactMul=1+e*n*(s*.82+S.bassPunch*.26),C.rippleMul=1+e*t*(o*.72+S.bass*.12),C.interferenceMul=1+e*t*(S.variation*.38+S.mid*.24+o*.12),C.motionMul=1+e*t*(S.motion*.48+a*.12),C.bubbleWobbleAdd=e*t*(S.mid*.055+S.high*.038+S.motion*.055),C.airAdd=e*n*(S.bassPunch*.075+S.kick*.045),C.highlightAdd=e*(S.brightness*.2+S.high*.18+S.hihat*.24),C.flashMul=1+e*n*(S.snare*.38+S.impact*.22+S.kick*.12)+e*t*S.high*.1,C}let se=Array.from({length:24},()=>new n(999,999)),ce=new Float32Array(24),le=new Float32Array(24),ue=new Float32Array(24),T=new Float32Array(24);for(let e=0;e<24;e++)T[e]=Math.random();let E=0,D={uTime:{value:0},uMotion:{value:x.surfaceMotion},uReflect:{value:x.reflectionStrength},uPuddleAmount:{value:x.puddleAmount},uPuddleDepth:{value:x.puddleDepth},uRoadRoughness:{value:x.roadRoughness},uReflectionStretch:{value:x.reflectionStretch},uDetail:{value:x.detailStrength},uSilver:{value:x.silverStrength},uWetEdge:{value:x.wetEdgeStrength},uLightField:{value:x.lightFieldStrength},uSpecContrast:{value:x.specularContrast},uRainlight:{value:x.rainlightDistortion},uRecovery:{value:x.highlightRecovery},uLightFlow:{value:x.directionalFlow},uDistanceDetail:{value:x.distanceDetail},uMicroFlow:{value:x.microFlowStrength},uLayerSeparation:{value:x.layerSeparation},uEdgeMeniscus:{value:x.edgeMeniscus},uTransitionSoftness:{value:x.transitionSoftness},uSubsurfaceAsphalt:{value:x.subsurfaceAsphalt},uEdgeIrregularity:{value:x.edgeIrregularity},uWaterActivity:{value:x.waterActivity},uFlowSense:{value:x.flowSense},uDepthResponse:{value:x.depthResponse},uDeepSmoothness:{value:x.deepSmoothness},uRippleLod:{value:x.rippleLod},uShaderDetailLod:{value:x.shaderDetailLod},uAtmosCouple:{value:0},uAtmosDirection:{value:x.lightDirection},uUrbanLight:{value:x.urbanLightStrength},uUrbanWarm:{value:x.urbanWarmth},uUrbanReflection:{value:x.urbanReflection},uUrbanOrange:{value:x.urbanOrange},uUrbanCool:{value:x.urbanCool},uUrbanCoolReflection:{value:x.urbanCoolReflection},uPoolStrength:{value:x.urbanPoolStrength},uPoolWidth:{value:x.urbanPoolWidth},uPoolReflection:{value:x.urbanPoolReflection},uWaterDynamics:{value:x.waterDynamics},uPuddleRippleStrength:{value:x.puddleRippleStrength},uWarm:{value:x.warmReflection},uRippleLife:{value:x.rippleLife},uRippleSize:{value:x.rippleSize},uSurfaceRipple:{value:x.surfaceRipple},uTension:{value:x.surfaceTension},uImpactDepth:{value:x.impactDepth},uInterference:{value:x.interference},uRippleCenters:{value:se},uRippleBirths:{value:ce},uRippleStrengths:{value:le},uRippleFlash:{value:ue},uRippleSeeds:{value:T}},de=new _({uniforms:D,vertexShader:`
  precision highp float;
  #define MAXR 24
  varying vec3 vWorld;
  varying float vImpactHeight;
  varying float vTerrain;
  uniform float uTime,uMotion,uRippleLife,uRippleSize,uSurfaceRipple,uTension,uImpactDepth,uInterference,uRippleLod;
  uniform vec2 uRippleCenters[MAXR];uniform float uRippleBirths[MAXR];uniform float uRippleStrengths[MAXR];uniform float uRippleSeeds[MAXR];

  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
  float terrain(vec2 p){
    float h=(noise(p*.105+vec2(7.4,2.8))-.5)*.62;
    h+=(noise(p*.245+vec2(-2.1,8.6))-.5)*.27;
    h+=(noise(p*.58+vec2(5.3,-3.2))-.5)*.11;
    h+=sin(p.x*.31+p.y*.075)*.055;
    return h;
  }
  float irregularDistance(vec2 d,float seed){
    float a=seed*6.2831853;
    float ca=cos(a),sa=sin(a);
    vec2 r=vec2(ca*d.x-sa*d.y,sa*d.x+ca*d.y);
    float asp=.93+.14*fract(sin(seed*91.73)*43758.54);
    r.x*=asp;r.y/=asp;
    float ang=atan(r.y,r.x);
    return length(r)*(1.0+.018*sin(ang*3.0+seed*17.0)+.010*sin(ang*5.0-seed*11.0));
  }
  float livingSurface(vec2 xz){
    float h=0.0;
    for(int i=0;i<MAXR;i++){
      float rippleBudget=clamp(uRippleLod,0.0,1.0);
      float rippleIndexNorm=float(i)/float(MAXR);
      if(rippleIndexNorm>rippleBudget) continue;
      float age=uTime-uRippleBirths[i];
      if(age>0.0&&age<uRippleLife){
        float t=age/uRippleLife,s=uRippleStrengths[i],seed=uRippleSeeds[i];
        float d=irregularDistance(xz-uRippleCenters[i],seed);
        float speed=.92+.18*fract(sin(seed*57.31)*24631.7);
        float front=t*uRippleSize*speed;
        float core=exp(-23.0*d)*(1.0-t);
        float depression=-core*(1.0-smoothstep(0.0,.15,t))*.021*uImpactDepth*s;
        float rebound=core*sin(3.14159265*clamp((t-.08)/.46,0.0,1.0))*.011*uTension*s;
        float waveN=33.0+5.0*fract(sin(seed*33.7)*9127.4);
        float ring=sin((d-front)*waveN+seed*2.4)*exp(-20.0*abs(d-front))*(1.0-t)*.0082*uSurfaceRipple*s;
        h+=depression+rebound+ring;
      }
    }
    return h;
  }
  void main(){
    vec3 p=position;vec4 w0=modelMatrix*vec4(p,1.0);
    float th=terrain(w0.xz);
    float live=livingSurface(w0.xz);
    p.y+=th*.030+live;
    vTerrain=th;vImpactHeight=live;
    vec4 w=modelMatrix*vec4(p,1.0);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;
  }`,fragmentShader:`
  precision highp float;
  #define MAXR 24
  uniform float uTime,uMotion,uReflect,uPuddleAmount,uPuddleDepth,uRoadRoughness,uReflectionStretch,uWaterDynamics,uPuddleRippleStrength,uWarm,uRippleLife,uRippleSize,uSurfaceRipple,uInterference,uDetail,uSilver,uWetEdge,uLightField,uSpecContrast,uRainlight,uRecovery,uLightFlow,uDistanceDetail,uMicroFlow,uLayerSeparation,uEdgeMeniscus,uTransitionSoftness,uSubsurfaceAsphalt,uEdgeIrregularity,uWaterActivity,uFlowSense,uDepthResponse,uDeepSmoothness,uRippleLod,uShaderDetailLod,uAtmosCouple,uAtmosDirection,uUrbanLight,uUrbanWarm,uUrbanReflection,uUrbanOrange,uUrbanCool,uUrbanCoolReflection,uPoolStrength,uPoolWidth,uPoolReflection;
  uniform vec2 uRippleCenters[MAXR];uniform float uRippleBirths[MAXR];uniform float uRippleStrengths[MAXR];uniform float uRippleFlash[MAXR];uniform float uRippleSeeds[MAXR];
  varying vec3 vWorld;varying float vImpactHeight;varying float vTerrain;

  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
  vec2 hash22(vec2 p){float n=sin(dot(p,vec2(41.0,289.0)));return fract(vec2(262144.0,32768.0)*n);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
  float fbm(vec2 p){float f=0.0,a=.5;for(int i=0;i<4;i++){f+=a*noise(p);p=p*2.03+vec2(13.1,7.7);a*=.5;}return f;}
  float terrain(vec2 p){
    float h=(noise(p*.105+vec2(7.4,2.8))-.5)*.62;
    h+=(noise(p*.245+vec2(-2.1,8.6))-.5)*.27;
    h+=(noise(p*.58+vec2(5.3,-3.2))-.5)*.11;
    h+=sin(p.x*.31+p.y*.075)*.055;
    return h;
  }
  float cellular(vec2 p){
    vec2 ip=floor(p),fp=fract(p);float md=2.0;
    for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){
      vec2 o=vec2(float(x),float(y));vec2 r=o+hash22(ip+o)-fp;md=min(md,dot(r,r));
    }
    return sqrt(md);
  }
  float irregularDistance(vec2 d,float seed){
    float a=seed*6.2831853;float ca=cos(a),sa=sin(a);
    vec2 r=vec2(ca*d.x-sa*d.y,sa*d.x+ca*d.y);
    float asp=.93+.14*fract(sin(seed*91.73)*43758.54);r.x*=asp;r.y/=asp;
    float ang=atan(r.y,r.x);
    return length(r)*(1.0+.018*sin(ang*3.0+seed*17.0)+.010*sin(ang*5.0-seed*11.0));
  }
  vec4 rippleField(vec2 xz,out float flash){
    float height=0.0,energy=0.0;
    flash=0.0;
    vec2 opticalWarp=vec2(0.0);
    for(int i=0;i<MAXR;i++){
      float rippleBudget=clamp(uRippleLod,0.0,1.0);
      float rippleIndexNorm=float(i)/float(MAXR);
      if(rippleIndexNorm>rippleBudget) continue;
      float age=uTime-uRippleBirths[i];
      if(age>0.0&&age<uRippleLife){
        float t=age/uRippleLife,seed=uRippleSeeds[i];
        vec2 delta=xz-uRippleCenters[i];
        float rawD=max(length(delta),.0001);
        float d=irregularDistance(delta,seed);
        float speed=.92+.18*fract(sin(seed*57.31)*24631.7);
        float front=t*uRippleSize*speed;
        float waveN=31.0+6.0*fract(sin(seed*33.7)*9127.4);
        float ang=atan(delta.y,delta.x);
        float breakup=.82+.18*sin(ang*4.0+seed*21.0+noise(delta*3.1+seed)*2.2);
        float env=exp(-15.5*abs(d-front))*pow(1.0-t,.88)*uRippleStrengths[i]*breakup;
        float phase=sin((d-front)*waveN-uTime*(.72+.46*seed)+seed*2.7);
        float secondaryFront=max(0.0,front-(.085+.045*seed));
        float env2=exp(-18.0*abs(d-secondaryFront))*pow(1.0-t,1.18)*uRippleStrengths[i]*.46*breakup;
        float phase2=sin((d-secondaryFront)*(waveN*1.12)+seed*5.1);
        float tertiaryFront=max(0.0,front-(.17+.055*seed));
        float env3=exp(-16.0*abs(d-tertiaryFront))*pow(1.0-t,1.55)*uRippleStrengths[i]*.22*breakup;
        float phase3=sin((d-tertiaryFront)*(waveN*.92)-seed*3.6);
        height+=phase*env+phase2*env2+phase3*env3;
        energy+=env+env2*.62+env3*.34;

        // Rainlight field: each impact temporarily fractures the reflection field,
        // then optical coherence recovers more slowly than the visible ripple.
        float recover=pow(1.0-t,1.0+uRecovery*1.65);
        float opticalEnv=exp(-10.5*abs(d-front))*recover*uRippleStrengths[i]*breakup;
        vec2 radial=delta/rawD;
        vec2 tangent=vec2(-radial.y,radial.x);
        opticalWarp+=(radial*(phase*.62+phase3*.18)+tangent*phase2*.32)*opticalEnv*.0085*uRainlight;
        if(age<.16){
          flash+=exp(-34.0*d)*pow(1.0-age/.16,2.8)*uRippleFlash[i];
        }
      }
    }
    return vec4(height,energy,opticalWarp);
  }

  void main(){
    vec2 xz=vWorld.xz;
    float camDist=length(cameraPosition-vWorld);
    float detailLod=clamp(1.20-camDist*.055,0.18,1.0)*uShaderDetailLod;

    // Terrain-guided water hierarchy: damp asphalt -> wet film -> shallow water -> deep puddle.
    float th=terrain(xz);
    float basin=fbm(xz*.105+vec2(2.8,-4.1));
    float local=fbm(xz*.29+vec2(-8.2,3.7));
    float lowScore=clamp(.50-th*.90+(basin-.5)*.25+(local-.5)*.075,0.0,1.0);
    float channel=1.0-smoothstep(.045,.19,abs(sin(xz.x*.105+xz.y*.022+fbm(xz*.075)*1.65)));
    float edgeNoise=(fbm(xz*.46+vec2(11.3,-5.7))-.5)*.060*uEdgeIrregularity;
    edgeNoise+=(noise(xz*1.35+vec2(-3.1,8.4))-.5)*.022*uEdgeIrregularity;
    float waterScore=lowScore+channel*.050+edgeNoise;
    float threshold=.735-uPuddleAmount*.15;
    float trans=max(.55,uTransitionSoftness);
    float wetFilm=smoothstep(threshold-.30*trans,threshold-.095,waterScore);
    float shallowWater=smoothstep(threshold-.060*trans,threshold+.095*trans,waterScore);
    float depthCtl=clamp(uPuddleDepth,0.2,2.8);
    float depthNorm=pow(smoothstep(.2,2.8,depthCtl),.68);
    float depthResponse=clamp(uDepthResponse,.45,1.55);
    // V3.2.8: puddle coverage stays terrain-guided, while depth varies inside each basin.
    // The same GUI depth now produces shallow rims and naturally deeper low spots.
    float waterMask=shallowWater;
    float waterInterior=smoothstep(.14,.86,waterMask);
    float basinDepth=smoothstep(.36,.76,lowScore)*mix(.72,1.0,waterInterior);
    float localDepthNorm=clamp(depthNorm*mix(.62,1.22,basinDepth),0.0,1.0);
    float waterLayerWeight=clamp(waterMask*mix(.08,.98,pow(localDepthNorm,.76))*mix(.66,1.0,waterInterior)*depthResponse,0.0,1.0);
    float deepWater=clamp(waterLayerWeight*waterInterior,0.0,1.0);
    // Explicit material layers: asphalt remains one layer, water becomes a second optical layer.
    float dampLayer=wetFilm*(1.0-waterMask);
    float filmLayer=wetFilm*(1.0-waterLayerWeight);
    float shallowLayer=waterMask*(1.0-waterLayerWeight);
    float deepLayer=waterLayerWeight;
    float edgeBand=smoothstep(.10,.47,shallowWater)*(1.0-smoothstep(.56,.95,shallowWater));
    float edgeWidth=mix(38.0,24.0,clamp(uTransitionSoftness*.65,0.0,1.0));
    float meniscus=exp(-abs(waterScore-threshold)*edgeWidth)*wetFilm*(1.0-deepWater*.72)*uWetEdge*uEdgeMeniscus;
    float soakedEdge=exp(-abs(waterScore-(threshold-.105))*18.0)*wetFilm*(1.0-shallowWater*.76);
    float layerContrast=clamp(uLayerSeparation,0.0,1.6);

    // Asphalt aggregate: large stones, packed grit, pores and longitudinal wear.
    float coarse=fbm(xz*1.08+vec2(9.0,1.4));
    float aggNoise=noise(xz*6.4+vec2(1.8,6.2));
    float stone=0.0;
    if(detailLod>.22){
      float stoneDist=cellular(xz*7.8+vec2(2.7,-1.4)+vec2(noise(xz*1.7)*.35,noise(xz*1.9+7.0)*.35));
      stone=1.0-smoothstep(.18,.52,stoneDist);
    }
    float pebble=.0,grit=.5,pore=.5,chip=.0,tarPit=.0;
    if(detailLod>.34){
      float pebbleDist=cellular(xz*17.5+vec2(-3.6,4.1));
      pebble=1.0-smoothstep(.11,.38,pebbleDist);
      grit=noise(xz*31.0+vec2(-4.0,3.0));
    }
    if(detailLod>.62){
      pore=noise(xz*67.0+vec2(8.0,-5.0));
      float microCell=cellular(xz*38.0+vec2(1.4,9.2));
      chip=1.0-smoothstep(.055,.19,microCell);
      tarPit=smoothstep(.78,.96,fbm(xz*12.5+vec2(-6.0,4.0)))*smoothstep(.46,.78,noise(xz*48.0));
    }
    float wearPatch=fbm(vec2(xz.x*.34,xz.y*1.48)+vec2(12.0,-2.0));
    float streak=noise(vec2(xz.x*.62,xz.y*4.6)+vec2(2.0,9.0));
    float grooves=.5+.5*sin(xz.y*3.25+noise(xz*.46)*2.8);
    float fineScratch=0.0;
    if(detailLod>.72){fineScratch=abs(sin(xz.x*3.7+xz.y*18.0+noise(xz*3.2)*5.0));fineScratch=1.0-smoothstep(.010,.060,fineScratch);}
    // Camera-distance material grammar: preserve aggregate close-up, simplify micro-noise in the distance.
    float viewDist=length(cameraPosition-vWorld);
    float nearDetail=1.0-smoothstep(7.0,18.0,viewDist);
    float distanceMaterialLod=mix(.42,1.0,nearDetail)*uDistanceDetail;
    float roadHeight=(coarse-.5)*.068+(aggNoise-.5)*.034+(stone-.35)*.026;
    roadHeight+=((pebble-.32)*.011+(grit-.5)*.009+(pore-.5)*.0038+(chip-.12)*.0055-tarPit*.0045+fineScratch*.0018)*distanceMaterialLod;
    roadHeight*=uRoadRoughness*uDetail;
    // Standing water optically buries the aggregate instead of preserving a uniformly noisy road.
    roadHeight*=mix(1.0,.24,waterLayerWeight*waterInterior);

    // Rain drives both geometry and the optical reflection field.
    float f=0.0;
    vec4 rf=rippleField(xz,f);
    float edgeRippleAtten=1.0-edgeBand*.42;
    float waterRippleGate=clamp(wetFilm*.18+shallowLayer*.76+deepLayer*.90,0.0,1.0)*edgeRippleAtten;
    float rippleH=rf.x*uSurfaceRipple*uPuddleRippleStrength*waterRippleGate;
    float rippleEnergy=rf.y*uInterference*uPuddleRippleStrength*waterRippleGate;
    vec2 rainlightWarp=rf.zw*waterRippleGate;
    float cap1=(noise(xz*11.0+vec2(uTime*.070,-uTime*.045))-.5);
    float cap2=(noise(xz*25.0+vec2(-uTime*.050,uTime*.034))-.5);
    float filmMotion=(cap1*.0038+cap2*.00125)*uWaterDynamics*uMotion*(.25+.75*wetFilm);
    // Continuous rainwater field: extremely low-frequency motion keeps puddles alive between impacts.
    float flowSense=clamp(uFlowSense,0.0,2.5);
    float waterActivity=clamp(uWaterActivity,0.0,2.5);
    vec2 slowP=xz*.12+vec2(uTime*.010,-uTime*.007)*flowSense;
    float slowA=noise(slowP+vec2(4.2,-7.1))-.5;
    float slowB=noise(slowP*1.73+vec2(-3.7,5.8)+vec2(-uTime*.006,uTime*.009)*flowSense)-.5;
    float livingWater=(slowA*.0042+slowB*.0020)*waterActivity*waterMask*mix(.42,1.0,localDepthNorm);

    // True dual-normal model. Asphalt normal stays rough; water normal is a separate, smoother surface.
    float depthRippleAtten=mix(1.0,.46,waterLayerWeight);
    float asphaltH=roadHeight*.90+filmMotion*.10*wetFilm;
    float waterH=filmMotion*.44+livingWater+rippleH*.32*depthRippleAtten+vImpactHeight*5.0*depthRippleAtten;
    vec3 qa=vec3(vWorld.x,asphaltH,vWorld.z);
    vec3 qw=vec3(vWorld.x,waterH,vWorld.z);
    vec3 Na=normalize(cross(dFdx(qa),dFdy(qa)));if(Na.y<0.0)Na=-Na;
    vec3 Nw=normalize(cross(dFdx(qw),dFdy(qw)));if(Nw.y<0.0)Nw=-Nw;
    // Subsurface asphalt is real optical coupling now: more visibility preserves a controlled amount of asphalt normal below water.
    float subsurface=clamp(uSubsurfaceAsphalt/0.65,0.0,1.0);
    float subsurfaceInterior=subsurface*waterInterior*waterLayerWeight;
    float normalBlend=clamp(waterLayerWeight*mix(.82,1.0,clamp(uDeepSmoothness*.72,0.0,1.0))*(1.0-subsurfaceInterior*.46),0.0,1.0);
    vec3 N=normalize(mix(Na,Nw,normalBlend));

    vec3 V=normalize(cameraPosition-vWorld);
    float ndv=max(dot(N,V),0.0);
    float fres=.014+.986*pow(1.0-ndv,5.0);

    // Neutral black asphalt remains visible through the wet film.
    float aggregateLift=.70+coarse*.14+aggNoise*.052+stone*.080+pebble*.040+grit*.022+chip*.030;
    vec3 dryRoad=vec3(.0205,.0222,.0240)*aggregateLift;
    vec3 dampRoad=vec3(.0108,.0128,.0145)*(.74+coarse*.105+stone*.040+wearPatch*.035);
    vec3 shallowRoad=vec3(.0066,.0084,.0100)*(.78+coarse*.050);
    vec3 asphaltLayer=mix(dryRoad,dampRoad,wetFilm*.91);
    asphaltLayer=mix(asphaltLayer,shallowRoad,clamp(waterMask*.42,0.0,.72));
    // Water layer remains clean, while uSubsurfaceAsphalt controls how much submerged asphalt survives optically.
    vec3 waterLayerColor=vec3(.0046,.0063,.0078)*mix(.96,.76,localDepthNorm);
    vec3 submergedAsphalt=asphaltLayer*mix(.62,.78,1.0-localDepthNorm);
    waterLayerColor=mix(waterLayerColor,submergedAsphalt,subsurfaceInterior*.78);
    vec3 base=mix(asphaltLayer,waterLayerColor,waterLayerWeight*.90);

    float brightStone=stone*smoothstep(.52,.91,grit)*(1.0-waterMask*.60)*(1.0-waterLayerWeight*.92);
    float smallStone=pebble*smoothstep(.60,.95,aggNoise)*(1.0-waterMask*.74)*(1.0-waterLayerWeight*.95);
    float chipLift=chip*smoothstep(.45,.86,grit)*(1.0-waterMask*.70)*(1.0-waterLayerWeight*.94);
    float poreDark=smoothstep(.68,.94,pore)*(1.0-waterMask*.78)*(1.0-waterLayerWeight*.90);
    base+=brightStone*vec3(.019,.0205,.0215)*(1.0-wetFilm*.35);
    base+=smallStone*vec3(.011,.012,.013)*(1.0-wetFilm*.47);
    base+=chipLift*vec3(.008,.009,.0095)*(1.0-wetFilm*.35);
    // Submerged aggregate cue: visible only inside the water layer, never on dry/damp asphalt.
    float submergedTexture=(stone*.42+pebble*.22+grit*.18+chip*.26)*subsurfaceInterior;
    base+=submergedTexture*vec3(.0065,.0072,.0078);
    base*=1.0-poreDark*.12*uRoadRoughness-tarPit*.10;
    base*=.989-grooves*.021*uRoadRoughness-streak*.009-fineScratch*.010;
    base=mix(base,base*.82,soakedEdge*.30);

    // Cinematic wet-road lighting. Reflections are treated as an off-screen light field,
    // then fractured by asphalt roughness, film normals and rain ripples.
    vec2 rippleWarp=vec2(rf.x*.031,rf.x*.021+rippleEnergy*.0030);
    float flowPhase=uTime*(.055+.025*uLightFlow);
    vec2 terrainFlow=normalize(vec2(
      terrain(xz+vec2(.16,0.0))-terrain(xz-vec2(.16,0.0)),
      terrain(xz+vec2(0.0,.16))-terrain(xz-vec2(0.0,.16))
    )+vec2(.0001));
    terrainFlow=-terrainFlow;
    vec2 ambientFlow=normalize(vec2(.22+noise(xz*.11)*.16,-1.0));
    vec2 flowDir=normalize(mix(ambientFlow,terrainFlow,.62*uMicroFlow));
    vec2 lightFlow=(flowDir*sin(flowPhase+fbm(xz*.08)*2.2)+vec2(-flowDir.y,flowDir.x)*cos(flowPhase*.73)*.22)*.020*uLightFlow*wetFilm;
    vec2 microFlow=flowDir*(.0045+.0065*shallowLayer+.004*deepLayer)*sin(uTime*.24+fbm(xz*.18)*5.0)*uMicroFlow;
    vec2 livingFlow=(flowDir*(slowA*.72+slowB*.28)+vec2(-flowDir.y,flowDir.x)*(slowB*.36))*.020*flowSense*waterActivity*waterLayerWeight;
    vec2 distort=N.xz*(.34+waterLayerWeight*.68)+vec2((coarse-.5)*.019,(aggNoise-.5)*.030)*(1.0-waterMask)*(1.0-waterLayerWeight*.95)+rippleWarp+rainlightWarp+lightFlow+microFlow+livingFlow;
    vec2 rxz=xz+distort;
    float stretch=max(.42,uReflectionStretch);
    float zSlow=rxz.y/(2.28*stretch);
    float breakA=fbm(vec2(rxz.x*.48,zSlow*.90)+vec2(3.1,8.8));
    float breakB=noise(vec2(rxz.x*3.45,zSlow*5.0)+vec2(-2.0,4.0));
    float breakC=noise(vec2(rxz.x*10.2,zSlow*12.0)+vec2(6.0,-3.0));
    float roughBreak=clamp(.35+coarse*.23+aggNoise*.18+grit*.14+stone*.10,0.0,1.0);
    float breakup=breakA*(.34+.52*breakB+.14*breakC)*mix(.72,1.08,roughBreak);
    float coherentBreak=smoothstep(.26,.72,breakA*.82+breakB*.18);
    breakup=mix(breakup,coherentBreak,waterLayerWeight*.88);
    float rainFracture=clamp(length(rainlightWarp)*38.0+rippleEnergy*.028+f*.08,0.0,.48);
    breakup=pow(clamp(breakup*(1.0-rainFracture)+breakC*rainFracture*1.15,0.0,1.0),uSpecContrast);

    // Broad light masses establish composition; shaft direction only nudges their placement.
    // The coupling is deliberately subtle so V3.2.8 wet-asphalt material remains the visual anchor.
    float atmosShift=uAtmosDirection*1.18;
    float atmosBoost=1.0+uAtmosCouple*.11;
    float coolWide=exp(-pow((rxz.x+2.72-atmosShift)*.34,2.0))*smoothstep(.41,.79,breakup);
    float coolCore=exp(-pow((rxz.x+.42-atmosShift*.55)*.77,2.0))*smoothstep(.50,.87,noise(vec2(rxz.x*.86,zSlow*1.24+3.2)));
    float silver=exp(-pow((rxz.x-1.04-atmosShift*.24)*.96,2.0))*smoothstep(.52,.87,fbm(vec2(rxz.x*1.08,zSlow*1.34+7.0)));
    float whiteStreak=exp(-pow((rxz.x-2.15-atmosShift*.18)*1.42,2.0))*smoothstep(.61,.91,noise(vec2(rxz.x*1.48,zSlow*1.55+5.6)));
    float warm=exp(-pow((rxz.x-4.18-atmosShift*.70)*.91,2.0))*smoothstep(.58,.88,noise(vec2(rxz.x*.72,zSlow*1.10+11.0)));
    // V3.6.2: glow composition. The warm/orange road reflection is the visual anchor.
    // Cool light is deliberately subordinate and used mainly to open depth around the warm field.
    // V3.7: ground receives the same invisible rain-light volumes as the atmosphere.
    float depthVol=1.0-smoothstep(-20.0,5.0,rxz.y);
    float cityCold=exp(-pow((rxz.x+4.10-atmosShift*.36)*.245,2.0))*mix(.66,1.0,depthVol);
    float citySilver=exp(-pow((rxz.x-.15-atmosShift*.16)*.355,2.0))*mix(.60,.96,depthVol);
    float cityWarm=exp(-pow((rxz.x-5.20-atmosShift*.44)*.255,2.0))*mix(.78,1.16,depthVol);
    float softGapA=1.0-exp(-pow((rxz.x+1.85)*.72,2.0))*.38;
    float softGapB=1.0-exp(-pow((rxz.x-2.55)*.78,2.0))*.30;
    float cityGap=clamp(softGapA*softGapB,.42,1.0);
    float strandA=smoothstep(.43,.80,fbm(vec2(rxz.x*.92,zSlow*.42+3.7)));
    float strandB=smoothstep(.50,.88,noise(vec2(rxz.x*3.8,zSlow*.96+11.4)));
    float strandC=.66+.34*noise(vec2(rxz.x*8.2,zSlow*2.15+17.0));
    float urbanStrands=mix(strandA,strandA*strandB,.40)*strandC*cityGap;
    float urbanShimmer=.92+.08*sin(uTime*.23+rxz.x*.36+rxz.y*.050);
    float farGate=1.0-smoothstep(-14.0,4.5,rxz.y);
    float nearFracture=mix(.74,1.34,smoothstep(-18.0,2.0,rxz.y));
    urbanStrands=pow(clamp(urbanStrands,0.0,1.0),nearFracture);
    float longitudinal=.58+.42*smoothstep(.32,.78,noise(vec2(rxz.x*.66,zSlow*.68)));

    // Rain sheet / sheen: a thin moving highlight film, not another water layer.
    float sheenSignal=noise(vec2(rxz.x*1.15+uTime*.018*flowSense,rxz.y*8.4-uTime*.12*flowSense)+vec2(slowA,slowB)*1.8);
    float rainSheen=smoothstep(.58,.91,sheenSignal)*wetFilm*(1.0-waterLayerWeight*.34)*waterActivity;
    rainSheen*=mix(.24,1.0,pow(fres,.58));
    float filmSpec=(dampLayer*.012+filmLayer*.020)*(1.0+.88*fres)*(1.0-waterMask*.34);
    float shallowSpec=shallowLayer*(.028+.350*fres);
    float waterSpec=waterLayerWeight*(.045+.245*fres);
    float specMask=(filmSpec+shallowSpec+waterSpec+rainSheen*.010)*uLightField;
    vec3 refl=vec3(.0085,.013,.0185)*specMask;
    refl+=vec3(.052,.100,.148)*coolWide*.255*specMask*longitudinal*atmosBoost;
    refl+=vec3(.078,.128,.176)*coolCore*.235*specMask;
    refl+=vec3(.185,.205,.216)*silver*.305*specMask;
    refl+=vec3(.235,.246,.250)*whiteStreak*.185*specMask;
    refl+=vec3(.54,.142,.050)*warm*.155*uWarm*uUrbanWarm*specMask*farGate*mix(1.0,atmosBoost,.72);
    float urbanMask=urbanStrands*farGate*uUrbanLight*uUrbanReflection;
    // Subordinate cool/silver accents.
    refl+=vec3(.055,.145,.225)*cityCold*urbanMask*.120*uUrbanCool*uUrbanCoolReflection*(1.03-.08*urbanShimmer);
    refl+=vec3(.235,.265,.285)*citySilver*urbanMask*.135*uUrbanCoolReflection*urbanShimmer;
    // Orange remains the hero reflection: wider, longer and more fragmented toward camera.
    float warmLongBreak=smoothstep(.30,.79,fbm(vec2(rxz.x*1.35+slowA*.42,zSlow*.72+uTime*.012+14.0)));
    float warmCrossBreak=.45+.55*smoothstep(.40,.86,noise(vec2(rxz.x*5.4+slowB*.65,zSlow*2.15-uTime*.018+31.0)));
    float warmGap=1.0-smoothstep(.72,.93,noise(vec2(rxz.x*.72,zSlow*.38+7.0)))*.68;
    float warmFilaments=urbanMask*cityWarm*uUrbanOrange*uUrbanWarm*uWarm*(.94+.10*urbanShimmer)*warmLongBreak*warmCrossBreak*warmGap;
    float warmBreak=.48+.52*smoothstep(.34,.82,noise(vec2(rxz.x*4.7+rippleWarp.x*18.0,zSlow*1.18+rippleWarp.y*12.0+26.0)));
    refl+=vec3(.710,.205,.038)*warmFilaments*.292*warmBreak;
    refl+=vec3(.960,.360,.075)*warmFilaments*.082*smoothstep(.64,.92,breakC);
    float rareWarm=smoothstep(.84,.965,noise(vec2(rxz.x*2.35,zSlow*.76+22.0)))*cityWarm;
    refl+=vec3(.68,.058,.012)*rareWarm*urbanMask*.055*uUrbanOrange*uWarm;
    refl*=mix(1.0,1.0+.20*uUrbanLight*uUrbanReflection,clamp((coolWide+silver+warm+cityCold+citySilver+cityWarm)*.22,0.0,1.0));


    // V3.8 3D Rain Light Volume: sparse visible lamps now own localized wet reflection pools.
    // The lamps stay small; what grows is the humid-air / rain / wet-ground response beneath them.
    float poolW=max(.62,uPoolWidth);
    float poolZ=smoothstep(-30.0,-18.0,rxz.y)*(1.0-smoothstep(2.0,7.0,rxz.y));
    float nearPoolBreak=.46+.54*smoothstep(.34,.82,noise(vec2(rxz.x*5.4,zSlow*1.42+41.0)));
    float poolFine=.62+.38*smoothstep(.46,.88,noise(vec2(rxz.x*11.8,zSlow*2.55+9.0)));

    float pColdA=exp(-pow((rxz.x+6.2)/(1.05*poolW),2.0));
    float pColdB=exp(-pow((rxz.x+3.0)/(1.20*poolW),2.0));
    float pSilver=exp(-pow((rxz.x-.2)/(1.28*poolW),2.0));
    float pWarmA=exp(-pow((rxz.x-5.2)/(1.15*poolW),2.0));
    float pWarmB=exp(-pow((rxz.x-7.35)/(1.00*poolW),2.0));

    float poolFragment=urbanStrands*nearPoolBreak*poolFine;
    float coldPool=(pColdA*.54+pColdB*.38)*poolZ*poolFragment*uPoolStrength*uPoolReflection*uUrbanCool;
    float silverPool=pSilver*.34*poolZ*poolFragment*uPoolStrength*uPoolReflection;
    float warmPool=(pWarmA*.78+pWarmB*.92)*poolZ*poolFragment*uPoolStrength*uPoolReflection*uUrbanOrange*uUrbanWarm*uWarm;

    // Cool pools are subordinate; warm pools remain the visual anchor.
    refl+=vec3(.070,.175,.255)*coldPool*.115*uUrbanCoolReflection;
    refl+=vec3(.250,.285,.310)*silverPool*.105*uUrbanCoolReflection;
    refl+=vec3(.920,.250,.040)*warmPool*.180;
    refl+=vec3(1.00,.430,.090)*warmPool*.052*smoothstep(.66,.94,breakC);

    // Virtual grazing lights make the normal field physically legible instead of merely painted.
    vec3 Lc=normalize(vec3(-.52,.30,-.80));
    vec3 Ls=normalize(vec3(.20,.24,-.95));
    vec3 Lw=normalize(vec3(.67,.27,-.70));
    float asphaltRough=clamp(.80-roadHeight*2.0-waterMask*.18,.16,.92);
    float waterRough=clamp(mix(.30,.082,localDepthNorm)*mix(1.08,.82,clamp(uDeepSmoothness*.7,0.0,1.0)),.07,.34);
    float roughness=mix(asphaltRough,waterRough,clamp(waterLayerWeight*(1.0-subsurfaceInterior*.38),0.0,1.0));
    float gloss=mix(34.0,170.0,1.0-roughness);
    float dirCool=pow(max(dot(N,normalize(Lc+V)),0.0),gloss*.72);
    float dirSilver=pow(max(dot(N,normalize(Ls+V)),0.0),gloss);
    float dirWarm=pow(max(dot(N,normalize(Lw+V)),0.0),gloss*.82);
    float dirBreak=smoothstep(.34,.86,breakup)*(.35+.65*wetFilm);
    vec3 directionalSpec=(vec3(.065,.115,.155)*dirCool*.44+vec3(.225,.235,.240)*dirSilver*.50+vec3(.46,.135,.052)*dirWarm*.26*uWarm)*dirBreak*specMask*uReflect;

    // Four specular scales create wet-asphalt silver fragments instead of a flat mirror.
    float glintA=smoothstep(.79,.982,noise(vec2(rxz.x*8.8,rxz.y*3.2)+N.xz*2.7));
    float glintB=smoothstep(.895,.994,noise(vec2(rxz.x*24.0,rxz.y*7.5)+vec2(coarse,aggNoise)*3.0));
    float glintC=smoothstep(.958,.999,noise(vec2(rxz.x*61.0,rxz.y*16.0)+uTime*.006))*(.28+.72*nearDetail);
    float glintD=smoothstep(.932,.997,noise(vec2(rxz.x*39.0+wearPatch*5.0,rxz.y*5.8)+vec2(chip,pore)*4.0));
    float grazing=pow(fres,.50);
    float aggregateGate=.16+.84*clamp(stone*.42+pebble*.25+grit*.20+chip*.34,0.0,1.0);
    float rainSpark=1.0+clamp(rippleEnergy*.060+f*.18,0.0,.32);
    float asphaltGlintRetention=clamp((1.0-waterLayerWeight*.97)+subsurfaceInterior*.28,0.0,1.0);
    float asphaltGlints=(glintA*.47+glintB*.68+glintC*.52+glintD*.46)*wetFilm*(1.0-waterMask*.48)*asphaltGlintRetention*grazing*aggregateGate*uSilver*rainSpark;
    asphaltGlints*=mix(1.0,.12,deepLayer*waterInterior);
    float waterFragments=smoothstep(.60,.962,noise(vec2(rxz.x*8.0,rxz.y*2.55)+N.xz*5.8+rippleWarp*8.0))*waterMask*(1.0-waterLayerWeight*.78)*pow(fres,.68)*uSilver;
    float streakGlint=smoothstep(.69,.958,noise(vec2(rxz.x*2.8,rxz.y*.62/stretch)+vec2(4.0,1.0)+rippleWarp*4.0))*wetFilm*pow(fres,.60)*.36*uSilver;
    float edgeSpark=smoothstep(.72,.985,noise(xz*19.0+N.xz*8.0))*meniscus*pow(fres,.42)*uSilver;
    float wetMicro=smoothstep(.953,.999,noise(xz*83.0+vec2(coarse,wearPatch)*7.0))*wetFilm*(1.0-waterLayerWeight*.98)*pow(fres,.45)*uSilver*nearDetail;

    float impactSpec=clamp(f*.58+rippleEnergy*.078,0.0,1.0)*(wetFilm*.24+shallowWater*.76);
    float microSpark=smoothstep(.984,1.0,noise(rxz*24.0+uTime*.014))*.009*wetFilm;

    vec3 color=base+refl*uReflect+directionalSpec;
    color+=asphaltGlints*vec3(.072,.083,.089)*uReflect;
    color+=waterFragments*vec3(.102,.124,.134)*.20*uReflect;
    color+=streakGlint*vec3(.070,.082,.088)*uReflect;
    color+=edgeBand*vec3(.010,.016,.020)*(.10+.20*fres)*layerContrast;
    color-=edgeBand*vec3(.0045,.0050,.0055)*(.35+.30*layerContrast);
    color+=meniscus*vec3(.020,.029,.034)*(.14+.40*fres);
    color+=edgeSpark*vec3(.095,.108,.114)*.30;
    color+=wetMicro*vec3(.060,.069,.074)*.22;
    color+=impactSpec*vec3(.030,.052,.064);
    color+=microSpark;
    color+=rainSheen*vec3(.020,.027,.031)*(.16+.34*fres);
    color+=rippleEnergy*vec3(.005,.010,.013)*shallowWater*.11;
    // Deep water reads deeper through absorption, not through extra brightness.
    color*=mix(1.0,.79,waterLayerWeight*mix(.35,1.0,localDepthNorm));
    color=mix(color,color*vec3(.92,.96,1.00),waterLayerWeight*.16);

    // Photographic response: retain deep blacks, lift only grazing wet surfaces.
    float wetLift=pow(fres,.72)*(wetFilm*.020+shallowWater*.030);
    color+=wetLift*vec3(.055,.067,.075);
    color*=.905+fres*(.022+.073*wetFilm+.074*shallowWater);
    float distanceHaze=smoothstep(8.0,28.0,viewDist);
    float horizonBlend=smoothstep(18.0,34.0,viewDist)*(.72+.28*wetFilm);
    color=mix(color,vec3(.009,.014,.019),distanceHaze*.145+horizonBlend*.075);
    gl_FragColor=vec4(color,1.0);
  }`,side:2}),fe=new m(52,48,112,112);fe.rotateX(-Math.PI/2);let pe=new i(fe,de);pe.position.z=-8,e.add(pe);function me(e){return e-Math.floor(e)}function O(e,t){return me(Math.sin(e*127.1+t*311.7)*43758.5453123)}function k(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=O(n,r),l=O(n+1,r),u=O(n,r+1),d=O(n+1,r+1);return f.lerp(f.lerp(c,l,o),f.lerp(u,d,o),s)}function he(e,t){let n=0,r=.5;for(let i=0;i<4;i++){n+=r*k(e,t);let i=e*2.03+13.1,a=t*2.03+7.7;e=i,t=a,r*=.5}return n}function A(e,t){return(k(e*.105+7.4,t*.105+2.8)-.5)*.62+(k(e*.245-2.1,t*.245+8.6)-.5)*.27+(k(e*.58+5.3,t*.58-3.2)-.5)*.11+Math.sin(e*.31+t*.075)*.055}function j(e,t,n){let r=f.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function ge(e,t){let n=A(e,t),r=he(e*.105+2.8,t*.105-4.1),i=he(e*.29-8.2,t*.29+3.7),a=f.clamp(.5-n*.9+(r-.5)*.25+(i-.5)*.075,0,1),o=1-j(.045,.19,Math.abs(Math.sin(e*.105+t*.022+he(e*.075,t*.075)*1.65))),s=(he(e*.46+11.3,t*.46-5.7)-.5)*.06*x.edgeIrregularity+(k(e*1.35-3.1,t*1.35+8.4)-.5)*.022*x.edgeIrregularity,c=a+o*.05+s,l=.735-x.puddleAmount*.15,u=Math.max(.55,x.transitionSoftness),d=j(l-.3*u,l-.095,c),p=j(l-.06*u,l+.095*u,c),m=j(.2,2.8,f.clamp(x.puddleDepth,.2,2.8))**.68,h=f.clamp(x.depthResponse,.45,1.55),g=p,_=j(.14,.86,g),ee=j(.36,.76,a)*f.lerp(.72,1,_),v=f.clamp(m*f.lerp(.62,1.22,ee),0,1),y=f.clamp(g*f.lerp(.08,.98,v**.76)*f.lerp(.66,1,_)*h,0,1);return{film:d,shallow:g,deep:f.clamp(y*_,0,1),waterLayer:y,depth:f.clamp(d*.1+g*.24+y*.82,0,1),depthNorm:v}}function _e(e,t){let n=.18,r=A(e+n,t)-A(e-n,t),i=A(e,t+n)-A(e,t-n),a=Math.hypot(r,i)||1;return{x:-r/a,z:-i/a}}function ve(e=96){let t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=n.createRadialGradient(e*.5,e*.5,0,e*.5,e*.5,e*.5);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.25,`rgba(255,255,255,.50)`),r.addColorStop(.7,`rgba(255,255,255,.08)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,e,e);let i=new ee(t);return i.colorSpace=o,i}let ye=ve(),be=new n(-.085,.018);function xe(e,t,n,r=0,i={x:0,z:0,gust:0}){let a=x.rainGustPropagation,o=t*.205-n*(.46+.34*a)+Math.sin(e*.075)*.58,s=e*.105+t*.062-n*(.18+.2*a)+1.73,c=Math.sin(o),l=Math.sin(s)*.46,u=Math.max(0,Math.sin(t*.118-n*(.29+.24*a)-.65)),d=c*.62+l*.3+u*.34,f=1+r*.18*x.audioAmount,p=d*.04*x.rainWindStrength*f;return i.x=be.x*(.76+.34*x.rainWindStrength)+p,i.z=be.y+Math.sin(s*.72)*.006*x.rainWindStrength,i.gust=d,i}let Se={x:0,z:0,gust:0},Ce=[{source:new u(-8.9,8.4,-19.4),target:new u(-1.4,.32,-3.9),width:8.7,color:7838384,strength:1.12,seed:2.1},{source:new u(1,9.3,-24.6),target:new u(.3,.4,-6),width:10.4,color:8624292,strength:.56,seed:5.4},{source:new u(9.6,7,-20),target:new u(4.1,.28,-5.8),width:6.1,color:11759447,strength:.32,seed:8.7}];function we(e){let t=e.source.clone(),n=e.target.clone();return n.x+=x.lightDirection*3.2,t.x+=x.lightDirection*.7,{source:t,target:n}}function Te(t){let n=new s;n.renderOrder=1,e.add(n);let r=[];for(let e=0;e<3;e++){let a=new _({vertexShader:`
varying vec2 vUv;varying vec3 vWorld;
void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.0);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`
precision highp float;
varying vec2 vUv;varying vec3 vWorld;
uniform float uTime,uOpacity,uSeed,uNoiseLayers,uDrift;
uniform vec3 uColor;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+uSeed)*43758.5453123);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
void main(){
  vec2 q=vUv*2.0-1.0;float t=vUv.y;
  vec2 drift=vec2(-.085,.018)*uTime*.050*uDrift;
  float n0=noise(vWorld.xz*.105+drift+uSeed*.31);
  float n1=noise(vWorld.xz*.218-drift*.54+uSeed*.77);
  float warp=(n0-.5)*.20;
  float edge=1.0-smoothstep(.30,1.10,abs(q.x+warp*(.50+.22*t)));
  float longitudinal=smoothstep(.025,.15,t)*(1.0-smoothstep(.80,1.0,t));
  float breakup=mix(.80,1.13,n0)*mix(1.0,mix(.92,1.05,n1),uNoiseLayers);
  float upperFade=mix(.52,1.0,smoothstep(.05,.66,t));
  float a=edge*longitudinal*breakup*upperFade*uOpacity;
  gl_FragColor=vec4(uColor*a,a);
}`,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:0},uSeed:{value:t.seed+e*.37},uNoiseLayers:{value:1},uDrift:{value:1},uColor:{value:new v(t.color)}}}),o=new i(new m(t.width,1,1,1),a);o.rotation.y=e*Math.PI/3,n.add(o),r.push(a)}return{def:t,group:n,mats:r}}let M=Ce.map(Te),Ee=new u(0,1,0),N=new u;function De(e){let{source:t,target:n}=we(e.def);N.copy(n).sub(t);let r=N.length();N.normalize(),e.group.position.copy(t).addScaledVector(N,r*.5),e.group.quaternion.setFromUnitVectors(Ee,N);for(let t of e.group.children)t.scale.set(1,r,1)}for(let e of M)De(e);let P=new _({side:1,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,uniforms:{uAtmos:{value:x.atmosphereStrength},uTime:{value:0},uHorizon:{value:x.horizonGlow},uCloud:{value:x.cloudShadow},uBalance:{value:x.coolWarmBalance},uFar:{value:x.farBrightness},uDirection:{value:x.lightDirection},uStormDepth:{value:x.stormDepth},uMist:{value:x.horizonMist},uLightPresence:{value:x.lightSourcePresence},uUrban:{value:x.urbanLightStrength},uOrange:{value:x.urbanOrange},uCool:{value:x.urbanCool},uDomain:{value:x.urbanDomainWidth},uScatter:{value:x.urbanFogScatter},uExternalBackground:{value:+!!this.externalBackgroundEnabled}},vertexShader:`varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`precision highp float;varying vec3 vDir;uniform float uAtmos,uTime,uHorizon,uCloud,uBalance,uFar,uDirection,uStormDepth,uMist,uLightPresence,uUrban,uOrange,uCool,uDomain,uScatter,uExternalBackground;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
  float fbm(vec2 p){float a=.56,v=0.;v+=a*noise(p);p=p*2.03+vec2(7.1,2.7);a*=.50;v+=a*noise(p);p=p*2.07+vec2(3.4,8.2);a*=.50;v+=a*noise(p);return v;}
  float glow(vec2 p,vec2 c,vec2 sc){vec2 q=(p-c)/sc;return exp(-dot(q,q)*2.0);}
  void main(){
    vec3 d=normalize(vDir);float y=d.y;vec2 p=vec2(d.x+uDirection*.046,y);
    vec3 zenith=vec3(.0013,.0030,.0054),low=vec3(.0040,.0085,.0128);vec3 col=mix(low,zenith,smoothstep(-.24,.64,y));
    vec2 cloudUv=vec2(d.x*1.18+d.z*.17,d.z*.88-d.x*.10);float c0=fbm(cloudUv+vec2(uTime*.00030,-uTime*.00018));float c1=fbm(cloudUv*1.68+vec2(-uTime*.00014,uTime*.00010)+13.7);float cloudMass=smoothstep(.45,.88,mix(c0,c1,.30));float cloudGate=smoothstep(-.02,.68,y)*(1.0-smoothstep(.68,.92,y));col*=1.0-cloudMass*cloudGate*uCloud*uStormDepth*.44;
    float mistNoise=fbm(vec2(d.x*2.2-uTime*.00044,d.z*.72+8.0));float horizonY=-.055+(mistNoise-.50)*.064*uMist;float horizon=exp(-abs(y-horizonY)*7.5);float mistBody=exp(-abs(y-horizonY)*3.5);
    float cutA=.54+.46*fbm(vec2(d.x*7.0+2.1,d.z*.8+uTime*.00020));float cutB=.58+.42*fbm(vec2(d.x*12.0-4.0,d.z*.45-uTime*.00016));float broken=cutA*cutB;
    // Invisible urban rain-light volumes: broad, low-frequency zones rather than lamp sprites.
    float coldVol=glow(p,vec2(-.46,-.018),vec2(.62,.135)*vec2(uDomain,1.0));
    float silverVol=glow(p,vec2(-.03,-.026),vec2(.52,.112)*vec2(uDomain,1.0));
    float warmVol=glow(p,vec2(.58,-.032),vec2(.66,.142)*vec2(uDomain,1.0));
    float coldInner=glow(p,vec2(-.40,-.030),vec2(.31,.064)*vec2(uDomain,1.0));
    float silverInner=glow(p,vec2(.02,-.038),vec2(.26,.058)*vec2(uDomain,1.0));
    float warmInner=glow(p,vec2(.60,-.046),vec2(.34,.070)*vec2(uDomain,1.0));
    float volumeBreak=.68+.32*fbm(vec2(d.x*5.5+3.0,d.z*.52-uTime*.00019));
    vec3 local=(vec3(.040,.086,.118)*coldInner*.36*uCool+vec3(.105,.118,.125)*silverInner*.27+vec3(.205,.074,.020)*warmInner*.42*uOrange)*uUrban*uFar*uLightPresence*broken;
    vec3 scatter=(vec3(.014,.040,.062)*coldVol*uCool+vec3(.035,.043,.047)*silverVol*.70+vec3(.078,.027,.008)*warmVol*uOrange*.70)*uUrban*uScatter*volumeBreak;
    col+=local*horizon*(.30+.42*uAtmos);
    col+=scatter*mistBody*(.58+.58*uAtmos);
    col+=vec3(.008,.016,.023)*mistBody*.09*uHorizon*uAtmos;
    float lower=smoothstep(.22,-.42,y);col+=vec3(.0023,.0043,.0060)*lower*.075*uAtmos;
    float externalAlpha=clamp(.08+uAtmos*.10+mistBody*.08,.08,.28);
    gl_FragColor=vec4(col,mix(1.0,externalAlpha,uExternalBackground));
  }`}),Oe=new i(new b(70,48,24),P);Oe.renderOrder=-30,e.add(Oe);let ke=[{x:-11.8,y:2.7,z:-12.5,size:18.8,color:11983078,lum:.36,core:.34,layer:0,depth:0},{x:11.2,y:2.1,z:-13.8,size:19.4,color:15770716,lum:.4,core:.36,layer:0,depth:0},{x:-9.4,y:.65,z:-20.5,size:15.8,color:10470869,lum:.46,core:.48,layer:0,depth:1},{x:-6.2,y:2,z:-22.8,size:17.2,color:12836070,lum:.46,core:.48,layer:1,depth:1},{x:-2.7,y:.58,z:-21.2,size:14.8,color:14739691,lum:.38,core:.36,layer:0,depth:1},{x:1.4,y:2.8,z:-23.6,size:18,color:14083820,lum:.5,core:.52,layer:2,depth:1},{x:4.7,y:1.05,z:-19.8,size:15.2,color:14780983,lum:.46,core:.42,layer:1,depth:1},{x:8.3,y:2.45,z:-22.6,size:18.2,color:15773033,lum:.5,core:.5,layer:2,depth:1},{x:-10.6,y:.44,z:-31,size:11.8,color:10074567,lum:.3,core:.24,layer:0,depth:2},{x:-8,y:1.25,z:-33,size:12.6,color:12112091,lum:.32,core:.26,layer:1,depth:2},{x:-5,y:.5,z:-29.8,size:11.2,color:14476776,lum:.28,core:.22,layer:0,depth:2},{x:-2,y:2.1,z:-32.5,size:13.4,color:12179685,lum:.34,core:.3,layer:2,depth:2},{x:1.2,y:.62,z:-30.8,size:11.8,color:14673898,lum:.3,core:.24,layer:0,depth:2},{x:3.8,y:1.45,z:-34,size:12.9,color:13951977,lum:.32,core:.28,layer:1,depth:2},{x:6.4,y:.52,z:-31.8,size:11.6,color:14911284,lum:.3,core:.22,layer:0,depth:2},{x:8.8,y:2.2,z:-33.5,size:13,color:15442266,lum:.34,core:.28,layer:2,depth:2},{x:10.8,y:.78,z:-29.6,size:12,color:15769676,lum:.32,core:.24,layer:1,depth:2}],F=ke.length,Ae=new Float32Array(F*3),je=new Float32Array(F),Me=new Float32Array(F),Ne=new Float32Array(F*3),Pe=new Float32Array(F),Fe=new Float32Array(F),Ie=new Float32Array(F);for(let e=0;e<F;e++){let t=ke[e],n=e*3,r=new v(t.color);Ae[n]=t.x,Ae[n+1]=t.y,Ae[n+2]=t.z,je[e]=t.size,Me[e]=2.7+e*3.91,Pe[e]=t.core,Fe[e]=t.layer??0,Ie[e]=t.depth??1,Ne[n]=r.r*t.lum,Ne[n+1]=r.g*t.lum,Ne[n+2]=r.b*t.lum}let I=new ne;I.setAttribute(`position`,new y(Ae,3)),I.setAttribute(`aSize`,new y(je,1)),I.setAttribute(`aSeed`,new y(Me,1)),I.setAttribute(`aColor`,new y(Ne,3)),I.setAttribute(`aCore`,new y(Pe,1)),I.setAttribute(`aLayer`,new y(Fe,1)),I.setAttribute(`aDepth`,new y(Ie,1));let Le=new _({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uTime:{value:0},uStrength:{value:x.urbanLightStrength},uBokeh:{value:x.urbanBokeh},uWarm:{value:x.urbanWarmth},uMotion:{value:x.urbanMotion},uCorePresence:{value:x.urbanCorePresence},uHighStrength:{value:x.highLightStrength},uHighSize:{value:x.highLightSize},uMidStrength:{value:x.midLightStrength},uIrregularity:{value:x.layerIrregularity},uVolumeDepth:{value:x.lightVolumeDepth},uNear:{value:x.lightVolumeNear},uMid:{value:x.lightVolumeMid},uFar:{value:x.lightVolumeFar}},vertexShader:`precision highp float;attribute float aSize,aSeed,aCore,aLayer,aDepth;attribute vec3 aColor;varying vec3 vColor;varying float vSeed,vCore,vLayer;uniform float uTime,uBokeh,uMotion,uHighSize,uIrregularity,uVolumeDepth,uNear,uMid,uFar;void main(){vec3 p=position;float layerDrift=mix(.35,1.0,smoothstep(.5,2.0,aLayer));p.x+=sin(uTime*(.018+.006*fract(aSeed))+aSeed*2.1)*.010*uMotion*layerDrift*uIrregularity;p.y+=cos(uTime*.011+aSeed*1.3)*.004*uMotion*layerDrift*uIrregularity;vec4 mv=modelViewMatrix*vec4(p,1.0);vColor=aColor;vSeed=aSeed;vCore=aCore;vLayer=aLayer;gl_Position=projectionMatrix*mv;float layerSize=mix(1.0,uHighSize,smoothstep(1.5,2.0,aLayer));float depthMul=mix(uNear,uMid,step(.5,aDepth));depthMul=mix(depthMul,uFar,step(1.5,aDepth));float perspMix=mix(1.0,clamp(24.0/max(-mv.z,1.0),.58,1.55),clamp(uVolumeDepth,0.0,1.4));gl_PointSize=clamp(aSize*uBokeh*layerSize*depthMul*perspMix,4.0,112.0);}`,fragmentShader:`precision highp float;varying vec3 vColor;varying float vSeed,vCore,vLayer,vDepth;uniform float uTime,uStrength,uWarm,uCorePresence,uHighStrength,uMidStrength;void main(){vec2 q=gl_PointCoord-.5;float r=length(q);if(r>.5)discard;float glow=exp(-r*r*46.0);float core=exp(-r*r*420.0)*vCore*(.50+uCorePresence*5.8);float flick=.992+.008*sin(uTime*(.045+.010*fract(vSeed))+vSeed*4.9);vec3 c=vColor;if(c.r>c.b*1.35)c=mix(vec3(dot(c,vec3(.333))),c,uWarm);float layerMul=mix(1.0,uMidStrength,smoothstep(.5,1.0,vLayer));layerMul=mix(layerMul,uHighStrength,smoothstep(1.5,2.0,vLayer));float a=(glow*.082+core*1.24)*uStrength*layerMul*flick;if(a<.0008)discard;vec3 rgb=c*(glow*.36+core*1.72);gl_FragColor=vec4(rgb,a);}`}),L=new _({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uTime:{value:0},uStrength:{value:x.urbanLightStrength},uBokeh:{value:x.urbanBokeh},uWarm:{value:x.urbanWarmth},uMotion:{value:x.urbanMotion},uScatter:{value:x.urbanFogScatter},uHighStrength:{value:x.highLightStrength},uHighSize:{value:x.highLightSize},uHighRainScatter:{value:x.highRainScatter},uMidStrength:{value:x.midLightStrength},uDiffuseHalo:{value:x.diffuseHalo},uDiffuseMist:{value:x.diffuseMist},uIrregularity:{value:x.layerIrregularity},uVolumeDepth:{value:x.lightVolumeDepth},uSpread:{value:x.lightVolumeSpread},uNear:{value:x.lightVolumeNear},uMid:{value:x.lightVolumeMid},uFar:{value:x.lightVolumeFar}},vertexShader:`precision highp float;attribute float aSize,aSeed,aLayer,aDepth;attribute vec3 aColor;varying vec3 vColor;varying float vSeed,vLayer;uniform float uTime,uBokeh,uMotion,uHighSize,uIrregularity,uVolumeDepth,uSpread,uNear,uMid,uFar;void main(){vec3 p=position;float layerDrift=mix(.30,1.0,smoothstep(.5,2.0,aLayer));p.x+=sin(uTime*(.014+.004*fract(aSeed))+aSeed*1.7)*.006*uMotion*layerDrift*uIrregularity;p.y+=cos(uTime*.009+aSeed*1.9)*.004*uMotion*layerDrift*uIrregularity;vec4 mv=modelViewMatrix*vec4(p,1.0);vColor=aColor;vSeed=aSeed;vLayer=aLayer;gl_Position=projectionMatrix*mv;float layerSize=mix(1.0,uHighSize*1.35,smoothstep(1.5,2.0,aLayer));float depthMul=mix(uNear,uMid,step(.5,aDepth));depthMul=mix(depthMul,uFar,step(1.5,aDepth));float perspMix=mix(1.0,clamp(48.0/max(-mv.z,1.0),.70,2.15),clamp(uVolumeDepth,0.0,1.4));gl_PointSize=clamp(aSize*uBokeh*layerSize*depthMul*uSpread*perspMix,16.0,320.0);}`,fragmentShader:`precision highp float;varying vec3 vColor;varying float vSeed,vLayer;uniform float uTime,uStrength,uWarm,uScatter,uHighStrength,uHighRainScatter,uMidStrength,uDiffuseHalo,uDiffuseMist;void main(){vec2 q=gl_PointCoord-.5;float layerShape=mix(1.65,1.28,smoothstep(1.5,2.0,vLayer));q.y*=layerShape;float r2=dot(q,q);if(r2>.30)discard;float inner=exp(-r2*15.0);float outer=exp(-r2*(5.0/max(uDiffuseHalo,.25)));float layerMul=mix(1.0,uMidStrength,smoothstep(.5,1.0,vLayer));layerMul=mix(layerMul,uHighStrength*uHighRainScatter,smoothstep(1.5,2.0,vLayer));float layerMist=mix(.82,1.22*uDiffuseMist,smoothstep(.5,2.0,vLayer));float haze=(outer*.050+inner*.056)*uStrength*uScatter*layerMul*layerMist*uDiffuseHalo;float breath=.985+.015*sin(uTime*.018+vSeed*2.4);vec3 c=vColor;if(c.r>c.b*1.35)c=mix(vec3(dot(c,vec3(.333))),c,uWarm);float a=haze*breath;if(a<.00055)discard;gl_FragColor=vec4(c*(outer*.15+inner*.24)*uScatter,a);}`}),R=new a(I,L);R.renderOrder=-3,R.frustumCulled=!1,R.visible=!0,e.add(R);let z=new a(I,Le);z.renderOrder=-2,z.frustumCulled=!1,z.visible=!0,e.add(z);let B=Le;function Re(t,n,r,a,o,s){let c=new _({vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`precision highp float;varying vec2 vUv;uniform float uTime,uOpacity,uSeed,uDrift,uMist,uUrban,uScatter,uOrange,uCool,uDiffuseMist;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+uSeed)*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fbm(vec2 p){float v=.58*noise(p);p=p*2.03+4.7;v+=.27*noise(p);p=p*2.07+7.3;v+=.12*noise(p);return v;}
void main(){vec2 q=vUv;float n=fbm(vec2(q.x*2.30+uTime*.0015*uDrift,q.y*1.22-uTime*.0006));float edge=smoothstep(0.,.10,q.x)*smoothstep(1.,.90,q.x);float rag=.40+.60*n;float ridge=.47+(n-.52)*.105*uMist;float band=exp(-pow((q.y-ridge)*5.6,2.0));float skirt=exp(-pow((q.y-.34)*2.7,2.0))*.28;vec3 base=vec3(.019,.033,.044);float gxCool=exp(-pow((q.x-.29)*2.05,2.0));float gxSilver=exp(-pow((q.x-.48)*2.8,2.0));float gxOrange=exp(-pow((q.x-.80)*2.55,2.0));vec3 glow=(vec3(.016,.043,.067)*gxCool*uCool+vec3(.043,.049,.052)*gxSilver*.50+vec3(.070,.022,.008)*gxOrange*uOrange*.55)*uUrban*uScatter*uDiffuseMist;float a=uOpacity*edge*(band+skirt)*rag;gl_FragColor=vec4(base+glow*(band*.62+skirt*.32),a);}`,transparent:!0,depthWrite:!1,depthTest:!0,blending:1,uniforms:{uTime:{value:0},uOpacity:{value:o},uSeed:{value:s},uDrift:{value:1},uMist:{value:x.horizonMist},uUrban:{value:x.urbanLightStrength},uScatter:{value:x.urbanFogScatter},uOrange:{value:x.urbanOrange},uCool:{value:x.urbanCool},uDiffuseMist:{value:x.diffuseMist}}}),l=new i(new m(r,a),c);return l.position.set(0,n,t),l.renderOrder=-4,e.add(l),{mesh:l,mat:c,baseOpacity:o}}let V=[Re(-29,1.36,44,5.5,.132,2.3),Re(-19,.82,34,4,.078,5.7),Re(-11,.4,25,2.6,.034,8.9)],H=new Float32Array(27),ze=new Float32Array(9);function Be(e,t=!1){let n=e*3;H[n]=f.randFloatSpread(6.4),H[n+1]=t?f.randFloat(-2.4,3.1):f.randFloat(2.4,4),H[n+2]=f.randFloat(-3.5,-.75),ze[e]=f.randFloat(.78,1.42)}for(let e=0;e<9;e++)Be(e,!0);let Ve=new ne;Ve.setAttribute(`position`,new y(H,3));let He=new c({color:14216696,size:20,map:ye,transparent:!0,opacity:.014,depthWrite:!1,blending:2,sizeAttenuation:!1,alphaTest:.002}),Ue=new a(Ve,He);Ue.renderOrder=5,h.add(Ue),e.add(h);let U=9,We=1;function Ge(e=x.qualityMode){e===`高画质`?(U=9,We=1):e===`性能`?(U=3,We=0):(U=6,We=1),Ve.setDrawRange(0,U),V[0].mesh.visible=!0,V[1].mesh.visible=e!==`性能`,V[2].mesh.visible=e===`高画质`,M[0].group.visible=!0,M[1].group.visible=e===`高画质`,M[2].group.visible=e!==`性能`}function Ke(e,t,n){let r=Math.max(x.atmosphereStrength,0)**.76*1.12,i=Math.max(x.shaftStrength,0)**.8*1.18,a=1+n.highlightAdd*.035+n.airAdd*.02;P.uniforms.uAtmos.value=x.atmosphereStrength,P.uniforms.uTime.value=t,P.uniforms.uHorizon.value=x.horizonGlow,P.uniforms.uCloud.value=x.cloudShadow,P.uniforms.uFar.value=x.farBrightness,P.uniforms.uDirection.value=x.lightDirection,P.uniforms.uStormDepth.value=x.stormDepth,P.uniforms.uMist.value=x.horizonMist,P.uniforms.uLightPresence.value=x.lightSourcePresence,P.uniforms.uUrban.value=x.urbanLightStrength,P.uniforms.uOrange.value=x.urbanOrange,P.uniforms.uCool.value=x.urbanCool,P.uniforms.uDomain.value=x.urbanDomainWidth,P.uniforms.uScatter.value=x.urbanFogScatter,Oe.position.copy(h.position),B.uniforms.uTime.value=t,B.uniforms.uStrength.value=x.urbanLightStrength*(.9+n.highlightAdd*.012),B.uniforms.uBokeh.value=x.urbanBokeh,B.uniforms.uWarm.value=x.urbanWarmth,B.uniforms.uMotion.value=x.urbanMotion,B.uniforms.uCorePresence.value=x.urbanCorePresence,B.uniforms.uHighStrength.value=x.highLightStrength,B.uniforms.uHighSize.value=x.highLightSize,B.uniforms.uMidStrength.value=x.midLightStrength,B.uniforms.uIrregularity.value=x.layerIrregularity,B.uniforms.uVolumeDepth.value=x.lightVolumeDepth,B.uniforms.uNear.value=x.lightVolumeNear,B.uniforms.uMid.value=x.lightVolumeMid,B.uniforms.uFar.value=x.lightVolumeFar,L.uniforms.uTime.value=t,L.uniforms.uStrength.value=x.urbanLightStrength*x.urbanPoolStrength*(.88+n.airAdd*.012),L.uniforms.uBokeh.value=x.urbanBokeh,L.uniforms.uWarm.value=x.urbanWarmth,L.uniforms.uMotion.value=x.urbanMotion,L.uniforms.uScatter.value=x.urbanFogScatter,L.uniforms.uHighStrength.value=x.highLightStrength,L.uniforms.uHighSize.value=x.highLightSize,L.uniforms.uHighRainScatter.value=x.highRainScatter,L.uniforms.uMidStrength.value=x.midLightStrength,L.uniforms.uDiffuseHalo.value=x.diffuseHalo,L.uniforms.uDiffuseMist.value=x.diffuseMist,L.uniforms.uIrregularity.value=x.layerIrregularity,L.uniforms.uVolumeDepth.value=x.lightVolumeDepth,L.uniforms.uSpread.value=x.lightVolumeSpread,L.uniforms.uNear.value=x.lightVolumeNear,L.uniforms.uMid.value=x.lightVolumeMid,L.uniforms.uFar.value=x.lightVolumeFar;let o=x.urbanLightStrength>.001&&x.urbanBokeh>.001;z.visible=o,R.visible=o;for(let e=0;e<M.length;e++){let o=M[e];De(o);let s=e===2?x.warmReflection*x.coolWarmBalance:1;for(let e of o.mats)e.uniforms.uTime.value=t,e.uniforms.uNoiseLayers.value=We,e.uniforms.uDrift.value=.48+n.highlightAdd*.012,e.uniforms.uOpacity.value=.0105*r*i*o.def.strength*s*a}He.opacity=.014*r*x.cameraRainStrength*(1+n.highlightAdd*.06);let s=xe(0,-13,t,S.motion,Se);for(let e=0;e<V.length;e++){let i=V[e];i.mat.uniforms.uTime.value=t,i.mat.uniforms.uDrift.value=.31+.1*e+Math.abs(s.x)*1.25,i.mat.uniforms.uMist.value=x.horizonMist,i.mat.uniforms.uUrban.value=x.urbanLightStrength,i.mat.uniforms.uScatter.value=x.urbanFogScatter,i.mat.uniforms.uOrange.value=x.urbanOrange,i.mat.uniforms.uCool.value=x.urbanCool,i.mat.uniforms.uDiffuseMist.value=x.diffuseMist,i.mat.uniforms.uOpacity.value=i.baseOpacity*r*x.horizonMist*(.8+.2*x.farBrightness)*(1+n.airAdd*.018)}let c=s.x*(.72+x.lightDirection*.16);for(let t=0;t<U;t++){let n=t*3;H[n+1]-=(.72+.54*ze[t])*e,H[n]+=c*.36*e,H[n+1]<-2.8&&Be(t,!1)}Ve.attributes.position.needsUpdate=!0}let W=1800,qe=5.5,G=new Float32Array(W*6),Je=new Float32Array(W),Ye=new Float32Array(W),Xe=new Float32Array(W),K=new Float32Array(W*3),Ze=new Float32Array(W),Qe=new Float32Array(W),$e=new Float32Array(W),et=new Float32Array(W),tt=new Float32Array(W),nt=new Float32Array(W),q=new Float32Array(W),rt=new Float32Array(W),it=new Float32Array(W),at={x:0,z:0,gust:0},ot=!0;function st(){let e=Math.random(),t;return t=e<.12?Math.random()*.18:e<.72?.18+Math.random()*.48:.66+Math.random()*.34,f.lerp(qe,-27,t)}function ct(e,t=!1){let n=e*6,r=e*3,i=st(),a=f.clamp((qe-i)/(qe- -27),0,1),o=f.lerp(8.5,25,a**.72),s=f.randFloatSpread(o*2),c=t?f.randFloat(.18,12.8):f.randFloat(8.2,14),l=w(),u=Math.random()<f.clamp(x.largeDropChance+l.largeDropAdd,0,.48)?f.randFloat(1.05,1.65):f.randFloat(.38,1.02),d=f.randFloat(.74,1.38),p=u*d*d,m=f.randFloat(-.055,.012)*x.dropVariation,h=Math.random(),g=h<.56?0:h<.93?1:2;a>.72&&g===2&&Math.random()<.72&&(g=0),a<.16&&g===0&&Math.random()<.48&&(g=1);let _=g===0?.62:g===1?1:1.18,ee=x.rainSpeed*d*.0315*_*f.randFloat(.86,1.13),v=f.clamp(ee,.075,.66);G[n]=s,G[n+1]=c,G[n+2]=i,G[n+3]=s+m,G[n+4]=c-v,G[n+5]=i+.018,Je[e]=d,Ye[e]=p,Xe[e]=m,K[r]=s+m*.5,K[r+1]=c-v*.5,K[r+2]=i+.009,Qe[e]=v,Ze[e]=v,it[e]=g;let y=g===0?.72:g===1?1:1.12;$e[e]=f.lerp(.0085,.0185,f.clamp(p/2.1,0,1))*y*f.randFloat(.86,1.1),et[e]=f.clamp(p*(g===0?.76:g===1?1:1.1),.22,2.1),tt[e]=Math.random();let b=m+xe(s,i,D.uTime.value||0,S.motion).x*.72;q[e]=b,nt[e]=b,rt[e]=f.randFloat(.84,1.18),ot=!0}for(let e=0;e<W;e++)ct(e,!0);let lt=new m(1,1,1,1),J=new t;J.index=lt.index,J.setAttribute(`position`,lt.attributes.position),J.setAttribute(`uv`,lt.attributes.uv),J.setAttribute(`iHead`,new d(K,3)),J.setAttribute(`iLength`,new d(Ze,1)),J.setAttribute(`iWidth`,new d($e,1)),J.setAttribute(`iEnergy`,new d(et,1)),J.setAttribute(`iSeed`,new d(tt,1)),J.setAttribute(`iAngle`,new d(nt,1)),J.setAttribute(`iRole`,new d(it,1)),J.instanceCount=W,lt.dispose();let ut=Array.from({length:7},()=>new u),dt=Array.from({length:7},()=>new u),ft=Array.from({length:7},()=>new v),pt=new Float32Array(7),mt=new Float32Array(7),Y={uOpacity:{value:x.rainOpacity},uRainLight:{value:x.rainLightResponse},uRainLayer:{value:x.rainLayer},uRainDepthContrast:{value:x.rainDepthContrast},uAtmos:{value:x.atmosphereStrength},uTime:{value:0},uCameraRight:{value:new u(1,0,0)},uCameraPos:{value:new u},uLightSource:{value:ut},uLightTarget:{value:dt},uLightWidth:{value:pt},uLightStrength:{value:mt},uLightColor:{value:ft}},ht=new i(J,new _({vertexShader:`
precision highp float;
attribute vec3 iHead;attribute float iLength,iWidth,iEnergy,iSeed,iAngle,iRole;
uniform vec3 uCameraRight,uCameraPos;uniform float uRainLayer;
varying vec2 vUv;varying vec3 vWorld;varying float vEnergy,vSeed,vRole,vDepthGrammar,vNearGrammar,vFarGrammar,vMidGrammar;
void main(){
  vUv=uv;vEnergy=iEnergy;vSeed=iSeed;vRole=iRole;
  vec3 dir=normalize(vec3(iAngle,-1.0,.025));
  // Forward camera depth is more stable than Euclidean distance for cinematic layer grammar.
  vec4 viewHead=viewMatrix*vec4(iHead,1.0);
  float d=max(-viewHead.z,.05);
  float nearG=1.0-smoothstep(3.0,7.0,d);
  float farG=smoothstep(16.5,29.0,d);
  float midG=clamp(1.0-nearG-farG,0.0,1.0);

  // Perspective-aware width keeps far streaks readable while hard-limiting the apparent
  // thickness of very near drops so isolated "light-pole" rain cannot dominate the frame.
  float perspectiveWidth=clamp(d/10.0,.30,1.52);
  float widthGrammar=perspectiveWidth*(.66*nearG + 1.00*midG + .78*farG);
  float bg=1.0-step(.5,vRole);float accent=step(1.5,vRole);float body=1.0-bg-accent;
  float roleLen=.72*bg+1.0*body+1.12*accent;
  float roleWidth=.78*bg+1.0*body+1.06*accent;
  float lenGrammar=(.78*nearG + 1.00*midG + .68*farG)*roleLen;
  widthGrammar*=roleWidth;
  vec3 world=iHead + dir*(position.y*iLength*lenGrammar) + uCameraRight*(position.x*iWidth*widthGrammar);
  vWorld=world;vNearGrammar=nearG;vMidGrammar=midG;vFarGrammar=farG;
  // Mid distance is the readable body; far rain maintains continuity; near rain stays sparse/fast.
  vDepthGrammar=(.44*nearG + 1.10*midG + .82*farG)*uRainLayer;
  gl_Position=projectionMatrix*viewMatrix*vec4(world,1.0);
}`,fragmentShader:`
precision highp float;
varying vec2 vUv;varying vec3 vWorld;varying float vEnergy,vSeed,vRole,vDepthGrammar,vNearGrammar,vFarGrammar,vMidGrammar;
uniform float uOpacity,uRainLight,uRainLayer,uRainDepthContrast,uAtmos,uTime;uniform vec3 uCameraPos;
uniform vec3 uLightSource[7],uLightTarget[7],uLightColor[7];uniform float uLightWidth[7],uLightStrength[7];
float hash(float n){return fract(sin(n*91.733+17.17)*43758.5453);}
float segLight(vec3 p,int i,out vec3 ldir){
  vec3 a=uLightSource[i],b=uLightTarget[i],ab=b-a;float len2=max(dot(ab,ab),1e-4);float t=clamp(dot(p-a,ab)/len2,0.0,1.0);
  vec3 c=a+ab*t;float radius=uLightWidth[i]*(.17+.50*t);float lateral=exp(-pow(length(p-c)/max(radius,.25),2.0)*1.28);
  float longitudinal=smoothstep(.025,.15,t)*(1.0-smoothstep(.80,1.0,t));
  ldir=normalize(p-a);return lateral*longitudinal*uLightStrength[i];
}
void main(){
  float x=abs(vUv.x-.5)*2.0;
  float core=exp(-x*x*6.0);
  float profile=smoothstep(.0,.075,vUv.y)*(1.0-smoothstep(.70,1.0,vUv.y));
  vec3 viewDir=normalize(uCameraPos-vWorld);vec3 lightRGB=vec3(0.0);float lit=0.0;
  for(int i=0;i<7;i++){
    vec3 ldir;float f=segLight(vWorld,i,ldir);
    // View-dependent scattering creates occasional bright streaks but never decides existence.
    float phase=.48+.52*pow(max(dot(ldir,viewDir),0.0),2.2);
    float ls=f*phase;lit+=ls;lightRGB+=uLightColor[i]*ls;
  }
  float e=clamp(vEnergy*.62,.18,1.25);float rnd=hash(vSeed);
  float field=clamp(lit*uRainLight,0.0,1.8);

  // Continuous visibility grammar. No hard depth classes and no seed discard:
  // near rain is sparse, mid rain carries the scene, far rain stays fine but continuous.
  float bg=1.0-step(.5,vRole);float accent=step(1.5,vRole);float body=1.0-bg-accent;
  float roleVisibility=.48*bg+.82*body+1.06*accent;
  float ambientVisibility=mix(.26,.58,smoothstep(.04,.96,rnd))*roleVisibility;
  float lightReveal=smoothstep(.10,.84,field)*(.20+.42*field)*(body+accent*.92+bg*.45);
  float nearPresence=mix(.24,.88,smoothstep(.72,.99,rnd));
  float midPresence=.90+.10*smoothstep(.18,.92,rnd);
  float farPresence=.78+.22*smoothstep(.10,.94,rnd);
  float depthPresence=nearPresence*vNearGrammar + midPresence*vMidGrammar + farPresence*vFarGrammar;
  depthPresence=mix(1.0,depthPresence,uRainDepthContrast);
  // Low-frequency density modulation follows the same travelling rain direction but stays subtle.
  float densityWave=.91+.09*sin(vWorld.z*.145-uTime*.20+sin(vWorld.x*.065)*.62);
  float visibility=clamp((ambientVisibility+lightReveal)*depthPresence*densityWave,0.0,1.22);

  // Slight low-altitude lift bridges sky rain into the horizon without drawing a separate rain layer.
  float lowAltitude=1.0-smoothstep(.20,2.25,max(vWorld.y,0.0));
  float horizonBridge=1.0+lowAltitude*(1.0-vNearGrammar)*.12;
  float distanceTone=.88*vNearGrammar + 1.00*vMidGrammar + .82*vFarGrammar;
  float atmosDepth=mix(.93,1.0,clamp(uAtmos,0.0,1.3));
  vec3 neutral=vec3(.69,.81,.90);vec3 tint=neutral+lightRGB*.31;
  float energyTone=(.70+.30*e)*(.92+.08*sin(vSeed*31.7+uTime*.07));
  float alpha=profile*core*vDepthGrammar*visibility*uOpacity*atmosDepth*energyTone*distanceTone*horizonBridge;
  if(alpha<.0012)discard;
  float luminance=.54 + field*.72 + body*.05 + accent*.12 + smoothstep(.86,.99,rnd)*.06;
  gl_FragColor=vec4(tint*luminance,alpha);
}`,uniforms:Y,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2}));ht.frustumCulled=!1,ht.renderOrder=3,e.add(ht);let X=W,gt=1250;function _t(e=x.qualityMode){return e===`高画质`?1:e===`性能`?.62:.82}function vt(){ae.strength=x.bloom*_t(x.qualityMode)}function yt(e=null){let t=e?.rainDensityMul??1,n=f.clamp(x.impactRate/30,.3,2.2),r=Math.floor(gt*x.rainDensity*n*t);J.instanceCount=f.clamp(r,120,X)}function bt(e=x.qualityMode){x.qualityMode=e;let t=Math.min(devicePixelRatio,2),n=t;e===`高画质`?(X=W,gt=1450,n=t,x.rippleLod=1,x.shaderDetailLod=1):e===`性能`?(X=1044,gt=720,n=Math.min(devicePixelRatio,1),x.rippleLod=.48,x.shaderDetailLod=.58):(X=W,gt=1250,n=Math.min(devicePixelRatio,1.3),x.rippleLod=.72,x.shaderDetailLod=.8);let r=g.domElement.clientWidth||innerWidth,i=g.domElement.clientHeight||innerHeight;g.setPixelRatio(n),te.setPixelRatio(n),vt(),yt(),Ge(e),g.setSize(r,i,!1),te.setSize(r,i)}bt();let xt=[],St=new p(.965,1,56,1,0,Math.PI*f.randFloat(1.05,1.72));St.rotateX(-Math.PI/2);for(let t=0;t<48;t++){let t=new i(St,new r({color:11126484,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}));t.visible=!1,t.position.y=.012,e.add(t),xt.push({mesh:t,active:!1,age:0,life:1,phase:0,scale:1,aspect:1})}let Ct=new b(1,18,10,0,Math.PI*2,0,Math.PI*.5),Z=[];for(let t=0;t<64;t++){let t={uOpacity:{value:0},uIridescence:{value:x.iridescence},uHighlight:{value:x.bubbleHighlight},uTime:{value:0},uSeed:{value:Math.random()*20}},n=new i(Ct,new _({uniforms:t,vertexShader:`
varying vec3 vWNormal;
varying vec3 vWorld;
varying vec3 vLocal;
uniform float uTime,uSeed;

void main(){
  vec3 p=position;
  float w1=sin((p.x+p.z)*7.0+uTime*5.0+uSeed)*.008;
  float w2=sin((p.x-p.z)*10.0-uTime*3.1+uSeed*.67)*.0035;
  p+=normal*(w1+w2)*(1.0-p.y*.24);

  vec4 w=modelMatrix*vec4(p,1.0);
  vWorld=w.xyz;
  vLocal=p;
  vWNormal=normalize(mat3(modelMatrix)*normal);
  gl_Position=projectionMatrix*viewMatrix*w;
}`,fragmentShader:`
precision highp float;

varying vec3 vWNormal;
varying vec3 vWorld;
varying vec3 vLocal;

uniform float uOpacity,uIridescence,uHighlight,uTime,uSeed;

void main(){
  vec3 N=normalize(vWNormal);
  vec3 V=normalize(cameraPosition-vWorld);
  float ndv=max(dot(N,V),0.0);
  float fres=pow(1.0-ndv,2.42);

  float angle=atan(vLocal.z,vLocal.x);

  // non-uniform broken highlight arcs
  float a1=.5+.5*sin(angle*2.0+uSeed*1.4);
  float a2=.5+.5*sin(angle*4.0-uSeed*.73+uTime*.18);
  float a3=.5+.5*sin(angle*7.0+uSeed*.31-uTime*.11);
  float arcSignal=a1*.52+a2*.31+a3*.17;
  float arc=smoothstep(.57,.82,arcSignal);

  vec3 L1=normalize(vec3(-.52,.88,.28));
  vec3 H1=normalize(L1+V);
  float spec1=pow(max(dot(N,H1),0.0),105.0);

  vec3 L2=normalize(vec3(.40,.90,-.22));
  vec3 H2=normalize(L2+V);
  float spec2=pow(max(dot(N,H2),0.0),165.0)*.34;

  float film=sin(fres*12.5+angle*.40+uSeed+uTime*.15);
  vec3 iri=.5+.5*cos(vec3(.12,2.18,4.28)+film*1.6+fres*3.0);
  iri=mix(vec3(.66,.78,.84),iri,uIridescence);

  vec3 center=vec3(.018,.035,.043);
  vec3 edge=iri*fres*(.10+.36*arc)*uHighlight;
  vec3 spec=(spec1+spec2)*vec3(.95,1.01,1.05)*uHighlight;

  float lower=pow(1.0-clamp(vLocal.y,0.0,1.0),3.0)*fres;
  vec3 col=center+edge+spec+lower*vec3(.022,.058,.072);

  float alpha=uOpacity*(.026+fres*(.18+.34*arc)+(spec1+spec2)*.44);

  // reduce the "stuck-on dome" silhouette at the water contact
  alpha*=smoothstep(-.012,.038,vLocal.y);

  gl_FragColor=vec4(col,alpha);
}`,transparent:!0,depthWrite:!1,side:2}));n.visible=!1,e.add(n),Z.push({mesh:n,uniforms:t,active:!1,age:0,life:1,size:.1,popTriggered:!1,disturbance:0,disturbPhase:Math.random()*6.28,flowX:0,flowZ:0,waterTimer:0,waterState:{shallow:1,deep:0}})}let wt=[],Tt=new p(.62,1,32);Tt.rotateX(-Math.PI/2);for(let t=0;t<48;t++){let t=new i(Tt,new r({color:9685992,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.visible=!1,t.position.y=.014,e.add(t),wt.push({mesh:t,active:!1,age:0,life:1})}function Et(e=18){let t=[],n=[];for(let n=0;n<e;n++){let r=n/e*Math.PI*2,i=.7;t.push(Math.cos(r)*i,0,Math.sin(r)*i);let a=.4+.6*(.5+.5*Math.sin(r*e*.5+1.7))**2;t.push(Math.cos(r)*1,a,Math.sin(r)*1)}for(let t=0;t<e;t++){let r=(t+1)%e,i=t*2,a=t*2+1,o=r*2,s=r*2+1;n.push(i,o,a,a,o,s)}let r=new ne;return r.setAttribute(`position`,new ie(t,3)),r.setIndex(n),r.computeVertexNormals(),r}let Dt=Et(),Ot=[];for(let t=0;t<44;t++){let t=new i(Dt,new l({color:12115698,roughness:.08,metalness:0,transmission:.32,transparent:!0,opacity:0,thickness:.02,clearcoat:1,clearcoatRoughness:.04,depthWrite:!1,side:2}));t.visible=!1,e.add(t),Ot.push({mesh:t,active:!1,age:0,life:.18,size:.15,mode:`crown`})}let kt=new re(.045,.55,8,1,!0);kt.translate(0,.275,0);let At=[];for(let t=0;t<32;t++){let t=new i(kt,new r({color:13430015,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}));t.visible=!1,e.add(t),At.push({mesh:t,active:!1,age:0,life:.12,size:.1})}let jt=new b(.013,6,6),Mt=new r({color:12573158,transparent:!0,opacity:.55,depthWrite:!1,blending:2}),Nt=[];for(let t=0;t<180;t++){let t=new i(jt,Mt);t.visible=!1,e.add(t),Nt.push({mesh:t,active:!1,age:0,life:.3,v:new u,energy:.5})}function Q(e){return e.find(e=>!e.active)}let $=[];function Pt(e,t,n=1,r=1){let i=w(),a=f.clamp(.28+n*.4,0,1),o=f.clamp((x.airEntrapment+i.airAdd)*x.bubbleFrequency*a*r,0,1);if(Math.random()>o)return;let s=n>1.15?f.randInt(2,4):1;for(let r=0;r<s;r++)$.push({x:e,z:t,strength:n,delay:f.randFloat(.065,.14)+r*.018,scale:s>1?f.randFloat(.38,.62):f.randFloat(.72,1),spread:s>1?f.randFloat(.025,.11):.02});n>1.35&&Math.random()<f.clamp(.32*x.bubbleFrequency,0,1)&&$.push({x:e,z:t,strength:n,delay:f.randFloat(.14,.22),scale:f.randFloat(.86,1.15),spread:.035})}function Ft(e){for(let t=$.length-1;t>=0;t--){let n=$[t];if(n.delay-=e,n.delay<=0){let e=Math.random()*Math.PI*2,r=Math.random()*n.spread;Ut(n.x+Math.cos(e)*r,n.z+Math.sin(e)*r,n.strength,n.scale),$.splice(t,1)}}}function It(e,t,n){for(let r of Z){if(!r.active)continue;let i=r.mesh.position.x-e,a=r.mesh.position.z-t,o=Math.hypot(i,a);if(o<.58){let e=(1-o/.58)*n*x.bubbleDisturbance;r.disturbance=Math.min(1.5,r.disturbance+e),r.disturbPhase=Math.atan2(a,i)}}}function Lt(e,t,n=1,r=.35){se[E].set(e,t),ce[E]=D.uTime.value,le[E]=n,ue[E]=r*x.surfaceFlash,T[E]=Math.random(),E=(E+1)%24,It(e,t,n)}function Rt(e,t,n=1,r=1){if(Math.random()>x.visibleRippleChance*f.lerp(.35,1,r))return;let i=Q(xt);i&&(i.active=!0,i.age=0,i.life=x.rippleLife*f.randFloat(.76,1.08),i.phase=Math.random()*6.28,i.scale=n*f.randFloat(.86,1.07),i.aspect=f.randFloat(.92,1.08),i.mesh.visible=!0,i.mesh.position.set(e,.014,t),i.mesh.rotation.y=Math.random()*Math.PI*2,i.mesh.scale.setScalar(.015),i.mesh.material.opacity=0)}function zt(e,t,n,r,i=1){for(let a=0;a<r;a++){let r=Q(Nt);if(!r)break;let a=Math.random()*Math.PI*2,o=f.randFloat(.1,.48)*n;r.active=!0,r.age=0,r.life=f.randFloat(.16,.4),r.energy=n,r.mesh.visible=!0,r.mesh.position.set(e,.028,t),r.v.set(Math.cos(a)*o,f.randFloat(.4,1.3)*n*i,Math.sin(a)*o)}}function Bt(e,t,n){let r=Q(At);r&&(r.active=!0,r.age=0,r.life=f.randFloat(.09,.15),r.size=f.lerp(.045,.095,f.clamp(n/1.1,0,1))*x.needleStrength,r.mesh.visible=!0,r.mesh.position.set(e,.01,t),r.mesh.scale.set(r.size,r.size*(1.2+n*.55),r.size),r.mesh.material.opacity=0)}function Vt(e,t,n=1,r=`crown`){let i=Q(Ot);if(!i)return;i.active=!0,i.age=0,i.mode=r,i.life=r===`bloom`?f.randFloat(.2,.31):f.randFloat(.14,.23);let a=r===`bloom`?x.bloomStrength:x.crownStrength;i.size=f.randFloat(.07,.135)*a*n,i.mesh.visible=!0,i.mesh.position.set(e,.012,t),i.mesh.rotation.y=Math.random()*Math.PI,i.mesh.scale.set(i.size*.55,i.size*.35,i.size*.55),i.mesh.material.opacity=0,zt(e,t,n,r===`bloom`?f.randInt(7,12):f.randInt(3,7),r===`bloom`?1.12:1)}function Ht(e,t,n,r){Math.random()>x.splashAmount||(r===`needle`?Bt(e,t,n):Vt(e,t,n,r))}function Ut(e,t,n=1,r=1){let i=Q(Z);if(!i)return;let a=Math.random(),o;o=a<.66?f.randFloat(x.bubbleMin,x.bubbleMin+(x.bubbleMax-x.bubbleMin)*.3):a<.95?f.randFloat(x.bubbleMin+(x.bubbleMax-x.bubbleMin)*.28,x.bubbleMin+(x.bubbleMax-x.bubbleMin)*.64):f.randFloat(x.bubbleMin+(x.bubbleMax-x.bubbleMin)*.62,x.bubbleMax),o*=x.bubbleScale*r*f.lerp(.94,1.08,f.clamp(n/1.6,0,1)),i.active=!0,i.age=0,i.waterTimer=Math.random()*.12,i.waterState=ge(e,t),i.life=x.bubbleLife*f.randFloat(.72,1.34),i.size=o,i.popTriggered=!1,i.disturbance=0;let s=_e(e,t);i.flowX=s.x,i.flowZ=s.z,i.mesh.visible=!0,i.mesh.position.set(e,.015,t),i.mesh.rotation.y=Math.random()*Math.PI,i.mesh.scale.set(o*.04,o*.022,o*.04),i.uniforms.uOpacity.value=0,i.uniforms.uIridescence.value=x.iridescence,i.uniforms.uHighlight.value=x.bubbleHighlight,i.uniforms.uSeed.value=Math.random()*30;let c=Q(wt);c&&(c.active=!0,c.age=0,c.life=i.life,c.mesh.visible=!0,c.mesh.position.set(e,.012,t),c.mesh.scale.setScalar(o*.31),c.mesh.material.opacity=0)}function Wt(){let e=w(),t=Math.random()<f.clamp(x.largeDropChance+e.largeDropAdd,0,.48)?f.randFloat(1.05,1.68):f.randFloat(.38,1.03),n=f.randFloat(.82,1.24),r=f.randFloat(-.06,.02)*x.dropVariation,i=t*n*n,a=`needle`;return i>.72&&(a=`crown`),i>1.34&&(a=`bloom`),{mass:t,speed:n,angle:r,energy:i,type:a}}function Gt(e=1,t=null,n=`world`){let r=w(),i=0,a=0,o=null,s=n!==`world`;for(let e=0;e<(s?8:4);e++){a=s?f.randFloat(-7.2,-1):f.randFloat(-12.5,3);let t=s?f.mapLinear(a,-7.2,-1,5.8,3.2):f.mapLinear(a,-12.5,3,12,7.4);if(i=f.randFloatSpread(t*2),o=ge(i,a),o.depth>(s?.24:.16)||e===(s?7:3))break}let c=Wt(),l=f.lerp(.3,1.08,f.clamp(o.depth*1.25,0,1)),u=f.clamp(c.energy*r.impactMul*e*l,.18,2.35),d=t||c.type;if(t||(d=o.deep>.3&&u>1.48?`bloom`:o.shallow>.3&&u>.76?`crown`:`needle`),Lt(i,a,u,(d===`bloom`?.82:d===`crown`?.43:.14)*r.flashMul),Rt(i,a,u*r.rippleMul,o.depth),o.film>.18){let e=f.clamp(.24+o.shallow*.58+o.deep*.34,0,1);Math.random()<e&&Ht(i,a,u,d);let t=f.clamp(.1+o.film*.18+o.shallow*.66+o.deep*.34,0,1);o.film>.22&&Pt(i,a,u*(.55+.45*o.depth),t)}}let Kt=[{source:[-10.5,3.2,-15],target:[-6,.25,-3.8],width:9.8,color:10997726,kind:`nearCool`},{source:[-6.8,2.4,-21.5],target:[-3.5,.18,-5],width:11.6,color:10470869,kind:`midCool`},{source:[-1,2.2,-24],target:[-.4,.12,-6.2],width:12,color:14017513,kind:`midSilver`},{source:[5.7,2.8,-21],target:[2.8,.18,-5],width:11.8,color:14780983,kind:`midWarm`},{source:[9.3,3,-26],target:[4.8,.18,-5.8],width:12.8,color:15703369,kind:`farWarm`},{source:[-3,5.1,-31],target:[-2,1.5,-9],width:10.6,color:12179685,kind:`highCool`},{source:[4.2,5.7,-32],target:[3,1.7,-9.4],width:11.2,color:14412013,kind:`highSilver`}];function qt(e){switch(e){case`nearCool`:return .22*x.urbanCool*x.lightVolumeNear;case`midCool`:return .3*x.urbanCool*x.lightVolumeMid;case`midSilver`:return .22*x.lightVolumeMid;case`midWarm`:return .42*x.urbanOrange*x.lightVolumeMid;case`farWarm`:return .54*x.urbanOrange*x.lightVolumeFar;case`highCool`:return .24*x.urbanCool*x.highRainScatter*x.highLightStrength*x.lightVolumeFar;case`highSilver`:return .22*x.highRainScatter*x.highLightStrength*x.lightVolumeFar;default:return 0}}function Jt(e,t){Y.uTime.value=e,Y.uRainDepthContrast.value=x.rainDepthContrast,Y.uOpacity.value=x.rainOpacity*f.clamp(.92+(t.rainDensityMul-1)*.12,.82,1.14),Y.uRainLight.value=x.rainLightResponse*x.urbanRainLight*x.diffuseRain*(1+t.highlightAdd*.07),Y.uRainLayer.value=x.rainLayer,Y.uAtmos.value=x.atmosphereStrength,Y.uCameraPos.value.copy(h.position),h.updateMatrixWorld(),Y.uCameraRight.value.setFromMatrixColumn(h.matrixWorld,0).normalize();for(let e=0;e<7;e++){let t=Kt[e];ut[e].set(t.source[0],t.source[1],t.source[2]),dt[e].set(t.target[0],t.target[1],t.target[2]),pt[e]=t.width*x.urbanPoolWidth*x.lightVolumeSpread*x.urbanDomainWidth,mt[e]=qt(t.kind)*x.urbanPoolRain*x.urbanPoolStrength*x.diffuseRain*x.urbanLightStrength*x.urbanFogScatter,ft[e].setHex(t.color)}}function Yt(e,t){let n=w();for(let r=0;r<X;r++){let i=r*6,a=r*3,o=x.rainSpeed*n.rainSpeedMul,s=o*Je[r]*e,c=xe((G[i]+G[i+3])*.5,(G[i+2]+G[i+5])*.5,t,S.motion,at),l=f.clamp(Xe[r]+c.x*.74,-.145,.055),u=(2.25+Je[r]*1.25)*rt[r],d=1-Math.exp(-u*e);q[r]=f.lerp(q[r],l,d);let p=q[r]*s*.72,m=c.z*s*.1;G[i+1]-=s,G[i+4]-=s,G[i]+=p,G[i+3]+=p,G[i+2]+=m,G[i+5]+=m;let h=it[r],g=h===0?.64:h===1?1:1.18,_=.0305*f.lerp(.88,1.12,x.streakVariation),ee=1+Math.min(Math.abs(c.gust),1.5)*.11*x.rainWindStrength,v=f.clamp(o*Je[r]*_*g*ee,.07,.68);if(Ze[r]=f.lerp(Ze[r],v,1-Math.exp(-5*e)),nt[r]=q[r],G[i+4]<.015){if(Math.random()<.055){let e=G[i],t=G[i+2],a=f.clamp(Ye[r]*n.impactMul,.24,1.95);if(Math.abs(e)<13.2&&t>-14.5&&t<4.5){let r=ge(e,t),i=f.lerp(.2,1,r.depth);Lt(e,t,a*.58*i,.14*n.flashMul*i),r.film>.16&&Rt(e,t,a*.62*n.rippleMul*i,r.depth),r.film>.12&&a>1.15&&Math.random()<.05+.14*r.shallow&&Bt(e,t,a*.5*i)}}ct(r,!1)}K[a]=(G[i]+G[i+3])*.5,K[a+1]=(G[i+1]+G[i+4])*.5,K[a+2]=(G[i+2]+G[i+5])*.5}J.attributes.iHead.needsUpdate=!0,J.attributes.iLength.needsUpdate=!0,J.attributes.iAngle.needsUpdate=!0,ot&&=(J.attributes.iWidth.needsUpdate=!0,J.attributes.iEnergy.needsUpdate=!0,J.attributes.iSeed.needsUpdate=!0,J.attributes.iRole.needsUpdate=!0,!1),Jt(t,n)}function Xt(e){for(let t of xt){if(!t.active||(t.age+=e,t.age<0))continue;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=(.03+(1-(1-n)**2.05)*x.rippleSize)*t.scale,i=1+.012*Math.sin(t.age*3.7+t.phase);t.mesh.scale.set(r*t.aspect*i,r,r/t.aspect*(2-i));let a=Math.min(1,n/.1),o=.82+.18*Math.sin(n*Math.PI*2+t.phase);t.mesh.material.opacity=.3*x.visibleRippleStrength*a*(1-n)**1.38*o,t.mesh.rotation.y+=e*.08}}function Zt(e,t){let n=w();for(let r of Z){if(!r.active)continue;r.age+=e;let i=r.age/r.life;if(r.uniforms.uTime.value=t,r.uniforms.uIridescence.value=x.iridescence,r.uniforms.uHighlight.value=x.bubbleHighlight+n.highlightAdd,i>=1){r.popTriggered||(r.popTriggered=!0,Lt(r.mesh.position.x,r.mesh.position.z,f.clamp(r.size*2.3,.12,.38),.05),r.size>.15&&Math.random()<.18&&zt(r.mesh.position.x,r.mesh.position.z,.22,f.randInt(2,4),.65)),r.active=!1,r.mesh.visible=!1;continue}let a=Math.min(1,i/.17),o=a*a*(3-2*a),s=1;i>.93&&(s=1-(i-.93)/.07*.16),r.disturbance*=.955**(e*60);let c=r.disturbance,l=.006+(x.bubbleWobble+n.bubbleWobbleAdd)*.022+c*.055,u=Math.sin(t*(4.7+x.bubbleWobble*6.5)+r.uniforms.uSeed.value+r.disturbPhase)*l,d=Math.cos(t*5.8+r.uniforms.uSeed.value*.71)*c*.026;r.mesh.scale.set(r.size*o*(1+u+d)*s,r.size*.57*o*(1-u*.72)*s,r.size*o*(1-u*.55-d)*s),r.mesh.rotation.z=d*.22,r.waterTimer-=e,r.waterTimer<=0&&(r.waterState=ge(r.mesh.position.x,r.mesh.position.z),r.waterTimer=.12+Math.random()*.06);let p=r.waterState,m=f.clamp(p.shallow*.78+p.deep*.42,0,1),h=(.01+.016*Math.min(1,r.size/.16))*x.bubbleDrift*m;r.mesh.position.x+=r.flowX*h*e,r.mesh.position.z+=r.flowZ*h*e;let g=Math.min(1,i/.1),_=i>.975?1-(i-.975)/.025:1;r.uniforms.uOpacity.value=g*_}for(let t of wt){if(!t.active)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=Math.min(1,n/.11)*(n>.92?1-(n-.92)/.08:1);t.mesh.material.opacity=.06*r}}function Qt(e){for(let t of At){if(!t.active)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=Math.sin(Math.PI*Math.min(n,1));t.mesh.scale.y=t.size*(1+r*2.4),t.mesh.material.opacity=.28*Math.sin(Math.PI*n)}for(let t of Ot){if(!t.active)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=1-(1-Math.min(n/.58,1))**2,i=n>.58?1-(n-.58)/.42:1;t.mode===`bloom`?t.mesh.scale.set(t.size*(.48+r*1.45),t.size*(.22+r*.92)*i,t.size*(.48+r*1.45)):t.mesh.scale.set(t.size*(.45+r*.88),t.size*(.28+r*1.65)*i,t.size*(.45+r*.88)),t.mesh.material.opacity=(t.mode===`bloom`?.28:.34)*Math.sin(Math.PI*n)}for(let t of Nt)if(t.active){if(t.age+=e,t.age>=t.life||t.mesh.position.y<.012){t.mesh.position.y<.012&&t.energy>.85&&Math.random()<.18&&Lt(t.mesh.position.x,t.mesh.position.z,t.energy*.12,.02),t.active=!1,t.mesh.visible=!1;continue}t.v.y-=4.9*e,t.mesh.position.addScaledVector(t.v,e),t.mesh.scale.setScalar(.55+.45*(1-t.age/t.life))}}let $t=0;function en(e,t){let n=w();for(yt(n),D.uTime.value=t,D.uTension.value=x.surfaceTension,D.uImpactDepth.value=x.impactDepth*n.impactMul,D.uInterference.value=x.interference*n.interferenceMul,D.uRippleSize.value=x.rippleSize*n.rippleMul,D.uRippleLife.value=x.rippleLife,D.uSurfaceRipple.value=x.surfaceRipple*n.rippleMul,D.uMotion.value=x.surfaceMotion*n.motionMul,D.uReflect.value=x.reflectionStrength,D.uPuddleAmount.value=x.puddleAmount,D.uPuddleDepth.value=x.puddleDepth,D.uRoadRoughness.value=x.roadRoughness,D.uReflectionStretch.value=x.reflectionStretch,D.uDetail.value=x.detailStrength,D.uSilver.value=x.silverStrength,D.uWetEdge.value=x.wetEdgeStrength,D.uLightField.value=x.lightFieldStrength,D.uSpecContrast.value=x.specularContrast,D.uRainlight.value=x.rainlightDistortion,D.uRecovery.value=x.highlightRecovery,D.uLightFlow.value=x.directionalFlow,D.uDistanceDetail.value=x.distanceDetail,D.uMicroFlow.value=x.microFlowStrength,D.uLayerSeparation.value=x.layerSeparation,D.uEdgeMeniscus.value=x.edgeMeniscus,D.uTransitionSoftness.value=x.transitionSoftness,D.uSubsurfaceAsphalt.value=x.subsurfaceAsphalt,D.uEdgeIrregularity.value=x.edgeIrregularity,D.uWaterActivity.value=x.waterActivity*(1+S.motion*.12*x.audioAmount),D.uFlowSense.value=x.flowSense,D.uDepthResponse.value=x.depthResponse,D.uDeepSmoothness.value=x.deepSmoothness,D.uRippleLod.value=x.rippleLod,D.uShaderDetailLod.value=x.shaderDetailLod,D.uAtmosCouple.value=x.atmosphereStrength*(x.shaftStrength+x.urbanLightStrength*.22),D.uAtmosDirection.value=x.lightDirection,D.uUrbanLight.value=x.urbanLightStrength,D.uUrbanWarm.value=x.urbanWarmth,D.uUrbanReflection.value=x.urbanReflection,D.uUrbanOrange.value=x.urbanOrange,D.uUrbanCool.value=x.urbanCool,D.uUrbanCoolReflection.value=x.urbanCoolReflection,D.uPoolStrength.value=x.urbanPoolStrength,D.uPoolWidth.value=x.urbanPoolWidth,D.uPoolReflection.value=x.urbanPoolReflection,D.uWaterDynamics.value=x.waterDynamics,D.uPuddleRippleStrength.value=x.puddleRippleStrength,D.uWarm.value=x.warmReflection,$t+=e*x.impactRate*n.rainRateMul;$t>=1;)Gt(),--$t;let r=S.beat>.34&&S.prevBeat<=.34,i=S.downbeat>.22&&S.prevDownbeat<=.22;x.audioEnabled&&S.playing&&S.eventCooldown<=0&&(i?(Gt(1.18+S.bassPunch*.42,`bloom`,`accent`),S.eventCooldown=.1):r&&(S.kick>.28||S.snare>.36)&&(Gt((S.kick>=S.snare?1.1:1.02)+S.impact*.24,`crown`,`accent`),S.eventCooldown=.065)),S.prevBeat=S.beat,S.prevDownbeat=S.downbeat,Yt(e,t),Ke(e,t,n),Ft(e),Xt(e),Zt(e,t),Qt(e)}function tn(){$t=0,E=0,$.length=0;for(let e=0;e<24;e++)se[e].set(999,999),ce[e]=-1e6,le[e]=0,ue[e]=0,T[e]=0;let e=e=>{for(let t of e)t.active=!1,t.age=0,t.mesh&&(t.mesh.visible=!1,t.mesh.material&&`opacity`in t.mesh.material&&(t.mesh.material.opacity=0))};e(xt),e(Z),e(wt),e(At),e(Ot),e(Nt);for(let e=0;e<W;e++)ct(e,!0);for(let e=0;e<9;e++)Be(e,!0);ot=!0,yt()}function nn(e){P.uniforms.uExternalBackground.value=+!!e}return{frame:en,resetRuntimeState:tn,setExternalBackgroundEnabled:nn,applyQuality:bt,applyBloomStrength:vt,updateVisibleRainCount:yt,wetUniforms:D,rainUniforms:Y}}setupGUI(){this.createGUIContainer();let t={resetParams:()=>{for(let e of Object.keys(this.settings))e in this.defaultSettings||delete this.settings[e];Object.assign(this.settings,JSON.parse(JSON.stringify(this.defaultSettings))),this.resetState({resetCamera:!1});let e=t=>{t.controllers.forEach(e=>e.updateDisplay()),t.folders&&Object.values(t.folders).forEach(e)};e(this.gui)}};this.gui=new e({title:`65. 霓虹雨幕`,container:this.guiContainer});let n=this.gui.addFolder(`音频`);n.add(this.settings,`audioEnabled`).name(`启用音频驱动`),n.add(this.settings,`audioAmount`,0,1.6,.01).name(`音乐响应`),n.add(this.settings,`audioDynamics`,0,1.6,.01).name(`动态幅度`),n.add(this.settings,`audioRhythm`,0,1.8,.01).name(`节奏冲击`),n=this.gui.addFolder(`雨`),n.add(this.settings,`impactRate`,8,64,1).name(`基础雨量`).onChange(()=>this.runtime?.updateVisibleRainCount()),n.add(this.settings,`rainDensity`,.45,1.65,.01).name(`雨幕密度`).onChange(()=>this.runtime?.updateVisibleRainCount()),n.add(this.settings,`rainOpacity`,.08,.48,.01).name(`雨幕亮度`),n.add(this.settings,`rainWindStrength`,0,1.35,.01).name(`风场强度`),n.add(this.settings,`rainDepthContrast`,0,1.5,.01).name(`雨幕纵深`),n.add(this.settings,`cameraRainStrength`,0,.35,.01).name(`镜头近雨`),n=this.gui.addFolder(`积水`),n.add(this.settings,`waterActivity`,0,2.5,.01).name(`水面活性`),n.add(this.settings,`puddleAmount`,0,2,.01).name(`积水覆盖`),n.add(this.settings,`puddleDepth`,.2,2.8,.01).name(`积水深度`),n.add(this.settings,`waterDynamics`,0,2.4,.01).name(`水膜扰动`),n.add(this.settings,`puddleRippleStrength`,.35,5.2,.01).name(`雨滴波纹`),n.add(this.settings,`flowSense`,0,2.5,.01).name(`流动感`),n=this.gui.addFolder(`路面与反射`),n.add(this.settings,`roadRoughness`,.25,1.8,.01).name(`路面粗糙度`),n.add(this.settings,`detailStrength`,.65,1.45,.01).name(`材质细节`),n.add(this.settings,`reflectionStrength`,.45,1.8,.01).name(`反射强度`),n.add(this.settings,`reflectionStretch`,.45,1.8,.01).name(`反射拉伸`),n.add(this.settings,`warmReflection`,0,3,.01).name(`暖色倒影`),n=this.gui.addFolder(`泡泡`),n.add(this.settings,`bubbleFrequency`,0,2.5,.01).name(`泡泡频率`),n.add(this.settings,`bubbleScale`,.65,1.45,.01).name(`泡泡尺寸`),n.add(this.settings,`bubbleLife`,.8,2.8,.05).name(`泡泡寿命`),n=this.gui.addFolder(`3D城市灯光`),n.add(this.settings,`urbanLightStrength`,0,1.6,.01).name(`灯光强度`),n.add(this.settings,`urbanOrange`,0,1.8,.01).name(`暖橙光`),n.add(this.settings,`urbanCool`,0,1.4,.01).name(`冷白光`),n.add(this.settings,`urbanBokeh`,.8,5.8,.01).name(`远灯尺寸`),n.add(this.settings,`urbanCorePresence`,0,.4,.002).name(`灯芯亮度`),n.add(this.settings,`lightVolumeDepth`,0,1.4,.01).name(`空间纵深`),n.add(this.settings,`urbanFogScatter`,0,1.8,.01).name(`光雾扩散`),n=this.gui.addFolder(`环境`),n.add(this.settings,`atmosphereStrength`,0,1.35,.01).name(`空气厚度`),n.add(this.settings,`farBrightness`,.25,1.5,.01).name(`远景亮度`),n.add(this.settings,`horizonMist`,0,1.6,.01).name(`地平线湿雾`),n.add(this.settings,`stormDepth`,0,1.5,.01).name(`风暴层次`),n=this.gui.addFolder(`画面`),n.add(this.settings,`bloom`,0,.65,.01).name(`Bloom`).onChange(()=>this.runtime?.applyBloomStrength()),n.add(this.settings,`exposure`,.5,3,.01).name(`曝光`).onChange(()=>this._applyOutputExposure()),n=this.gui.addFolder(`性能`),n.add(this.settings,`qualityMode`,[`高画质`,`平衡`,`性能`]).name(`质量档位`).onChange(e=>this.runtime?.applyQuality(e)),this.gui.add(t,`resetParams`).name(`重置参数`),this.gui.hide()}createGUIContainer(){this.guiContainer=fe(`Animation65-gui-container`),pe(`Animation65-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=D(`Animation65-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}updateWithAudioData(e,t){let n=e?.audioFeature?.animation;this.hasAudioData=!!n&&e?.isPlaying===!0,this.a=n||null}_smooth(e,t,n,r=9,i=3){let a=t>e?r:i;return e+(t-e)*(1-Math.exp(-a*n))}updateAudioAnalysis(e){let t=this.audioState,n=this.a;if(!this.settings.audioEnabled||!this.hasAudioData||!n){for(let n of[`energy`,`bass`,`mid`,`high`,`motion`,`brightness`,`variation`,`impact`,`bassPunch`,`sectionEnergy`,`kick`,`snare`,`hihat`,`beat`,`downbeat`])t[n]=this._smooth(t[n],0,e,8,2.6);t.relativeEnergy=this._smooth(t.relativeEnergy,.5,e,6,2.2),t.energyBaseline=this._smooth(t.energyBaseline,.18,e,.35,.35),t.ready=!1,t.playing=!1,t.eventCooldown=Math.max(0,t.eventCooldown-e);return}t.ready=!0,t.playing=!0;for(let r of[`energy`,`bass`,`mid`,`high`,`motion`,`brightness`,`variation`]){let i=Number.isFinite(n[r])?n[r]:void 0;i===void 0&&(i=0),t[r]=this._smooth(t[r],i,e,10,3.5)}t.kick=Number.isFinite(n.kick)?n.kick:0,t.snare=Number.isFinite(n.snare)?n.snare:0,t.hihat=Number.isFinite(n.hihat)?n.hihat:0,t.downbeat=Number.isFinite(n.downbeat)?n.downbeat:+!!n.isDownbeat,t.beat=Number.isFinite(n.beat)?n.beat:Math.max(t.kick,t.snare,t.hihat*.7),t.energyBaseline=this._smooth(t.energyBaseline,t.energy,e,.28,.18);let r=f.clamp(.5+(t.energy-t.energyBaseline)*1.9,0,1);t.relativeEnergy=this._smooth(t.relativeEnergy,r,e,2.8,1.25);let i=f.clamp((t.relativeEnergy-.5)*2,0,1),a=f.clamp(t.energy*.78+i*.22,0,1);t.sectionEnergy=this._smooth(t.sectionEnergy,a,e,.85,.32);let o=Number.isFinite(n.percussive)?n.percussive:t.beat;t.impact=this._smooth(t.impact,o,e,24,7.5),t.bassPunch=this._smooth(t.bassPunch,Math.max(t.kick,t.bass*o),e,28,8),t.eventCooldown=Math.max(0,t.eventCooldown-e)}render(){if(!(!this.scene||!this.camera||!this.renderer||!this.controls||!this.runtime))try{let e=performance.now()*.001,t=Math.min(.033,Math.max(.001,e-this.lastTime));this.lastTime=e,this.elapsed+=t,this.updateAudioAnalysis(t),this.runtime.frame(t,this.elapsed),this._syncGroundDistortion(t),this.controls.update(),this.composer.render()}catch(e){console.error(`Animation65 渲染错误:`,e)}}onWindowResize(){if(!this.camera||!this.renderer||!this.composer)return;let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.groundFluid?.resize(e,t)}resetState({resetCamera:e=!0}={}){this.hasAudioData=!1,this.a=null,this.elapsed=0,this.lastTime=performance.now()*.001,Object.assign(this.audioState,{ready:!1,playing:!1,energy:0,bass:0,mid:0,high:0,motion:0,brightness:0,variation:0,relativeEnergy:.5,impact:0,bassPunch:0,sectionEnergy:0,energyBaseline:.18,kick:0,snare:0,hihat:0,beat:0,downbeat:0,prevBeat:0,prevDownbeat:0,eventCooldown:0}),e&&this.camera&&this.controls&&(this.controls.reset(),this.controls.update()),this.bloomPass&&(this.bloomPass.strength=this.settings.bloom*this._qualityBloomScale(this.settings.qualityMode),this.bloomPass.radius=.32,this.bloomPass.threshold=.9),this._applyOutputExposure(),this.runtime&&(this.runtime.resetRuntimeState(),this.runtime.applyQuality(this.settings.qualityMode),this.runtime.applyBloomStrength(),this.runtime.updateVisibleRainCount())}updateSettings(e={}){Object.assign(this.settings,e),this.runtime&&(this.runtime.applyQuality(this.settings.qualityMode),this.runtime.applyBloomStrength(),this.runtime.updateVisibleRainCount()),this._applyOutputExposure()}setEffectMode(){}setExternalBackgroundEnabled(e){this.externalBackgroundEnabled=!!e,this.runtime?.setExternalBackgroundEnabled(this.externalBackgroundEnabled)}getAudioDataForUI(){return{bass:this.audioState.bass,mid:this.audioState.mid,high:this.audioState.high,energy:this.audioState.energy,motion:this.audioState.motion,brightness:this.audioState.brightness,kick:this.audioState.kick,snare:this.audioState.snare,hihat:this.audioState.hihat,downbeat:this.audioState.downbeat}}playAudio(){}pauseAudio(){}dispose(){if(!this.isDisposed){if(this.isDisposed=!0,this.localFlowCompositionActive&&(this.localFlowCompositionActive=!1,T(!1)),de(this.settingsButton,this.guiContainer,this.gui),this.controls&&this.controls.dispose(),this.scene){let e=new Set,t=new Set,n=new Set;this.scene.traverse(r=>{r.geometry&&!e.has(r.geometry)&&(e.add(r.geometry),r.geometry.dispose());let i=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(let e of i)if(!(!e||t.has(e))){t.add(e);for(let t of Object.keys(e)){let r=e[t];r?.isTexture&&!n.has(r)&&(n.add(r),r.dispose())}if(e.uniforms)for(let t of Object.values(e.uniforms)){let e=t?.value;e?.isTexture&&!n.has(e)&&(n.add(e),e.dispose())}e.dispose()}})}if(this.composer){for(let e of this.composer.passes||[])typeof e.dispose==`function`&&e.dispose();typeof this.composer.dispose==`function`&&this.composer.dispose()}this.detachGroundFluidPointer?.(),this.detachGroundFluidPointer=null,this.groundFluid?.dispose(),this.groundFluid=null,this.groundDistortions=null,this.activeGroundDistortion=null,this.groundFluidConfigKey=``,this.renderer&&this.renderer.dispose(),this.runtime=null,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.gui=null,this.guiContainer=null,this.settingsButton=null}}};export{O as default};