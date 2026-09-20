import{$ as e,Dr as t,Dt as n,Et as r,Gt as i,Jn as a,K as o,Kt as s,Mt as c,Or as l,Q as u,St as d,Un as f,Ut as p,Vt as m,Xn as h,Zn as g,f as _,g as v,l as y,nr as b,r as x,u as ee,y as te,z as ne}from"./three.module-TVF63cYk.js";import{n as re,r as ie,t as S}from"./OutputPass-CxDAHfy4.js";import{t as C}from"./pointer-input-DxeYmife.js";import{a as ae,f as w,h as T,n as oe,o as se,r as ce}from"./dist-Fwp4vcHv.js";import{c as E}from"./GlobalMouseFlowService-CPDcMzsj.js";import{a as D,i as O,n as k,r as le,t as ue}from"./GUIHelper-DNd0uFVI.js";import{t as de}from"./UnrealBloomPass-C17ZlHgr.js";import{t as fe}from"./OrbitControls-Ju8LL-qO.js";var A=class{constructor(e,t={}){this.canvas=e;let n={impactRate:30,rainSpeed:13,rainOpacity:.26,dropVariation:.82,largeDropChance:.078,surfaceTension:.98,impactDepth:.7,interference:.88,rippleSize:1.27,rippleLife:1.34,surfaceRipple:1.05,surfaceMotion:.068,visibleRippleStrength:.34,visibleRippleChance:.18,surfaceFlash:.52,splashAmount:.44,needleStrength:.56,crownStrength:.72,bloomStrength:.84,airEntrapment:.44,bubbleFrequency:1.15,bubbleMin:.04,bubbleMax:.21,bubbleLife:1.58,bubbleWobble:.11,bubbleDisturbance:.74,iridescence:.1,bubbleHighlight:.7,reflectionStrength:1.42,puddleAmount:1,puddleDepth:1.4,roadRoughness:1.48,reflectionStretch:1.28,waterDynamics:1.2,puddleRippleStrength:2.6,warmReflection:.82,bloom:.12,exposure:1.16,detailStrength:1.06,silverStrength:1.12,wetEdgeStrength:1.08,lightFieldStrength:1.08,specularContrast:1.14,rainlightDistortion:1.08,highlightRecovery:1.05,directionalFlow:.62,distanceDetail:1,microFlowStrength:.48,layerSeparation:1,edgeMeniscus:1.08,bubbleDrift:.42,transitionSoftness:1,subsurfaceAsphalt:.28,edgeIrregularity:.72,waterActivity:1.25,flowSense:1.25,atmosphereStrength:.98,shaftStrength:.26,lightDirection:-.08,horizonGlow:.66,cloudShadow:.9,coolWarmBalance:.78,farBrightness:.76,stormDepth:1.02,horizonMist:1.16,lightSourcePresence:.72,urbanLightStrength:.98,urbanBokeh:3.85,urbanWarmth:.94,urbanMotion:.035,urbanReflection:1.38,urbanFogScatter:1.22,urbanRainLight:1.1,urbanOrange:1.22,urbanCool:.56,urbanCoolReflection:.5,urbanDomainWidth:1.2,urbanCorePresence:.22,urbanPoolStrength:1.18,urbanPoolWidth:1.16,urbanPoolRain:1.18,urbanPoolReflection:1.16,highLightStrength:1.08,highLightSize:1.1,highRainScatter:1.14,midLightStrength:1,diffuseHalo:1.22,diffuseRain:1.18,diffuseMist:1.16,layerIrregularity:1,lightVolumeDepth:1,lightVolumeSpread:1,lightVolumeNear:1,lightVolumeMid:1,lightVolumeFar:1,rainDepthContrast:1.1,rainLightResponse:1.12,rainLayer:1,rainWindStrength:.78,rainGustPropagation:.72,rainDensity:1.08,streakVariation:.96,audioRainDensity:1.22,cameraRainStrength:.055,qualityMode:`平衡`,depthResponse:1,deepSmoothness:1,rippleLod:1,shaderDetailLod:1,bubbleScale:1,audioEnabled:!0,audioAmount:.92,audioDynamics:.92,audioRhythm:1.05};this.defaultSettings=JSON.parse(JSON.stringify(n)),this.settings={...n,...t},this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.runtime=null,this.groundFluid=null,this.groundDistortions=null,this.detachGroundFluidPointer=null,this.activeGroundDistortion=null,this.localFlowCompositionActive=!1,this.groundFluidConfigKey=``,this.isDisposed=!1,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.lastTime=performance.now()*.001,this.elapsed=0,this.hasAudioData=!1,this.a=null,this.externalBackgroundEnabled=!1,this.globalMouseFlowLayer=`overlay`,this.audioState={ready:!1,playing:!1,energy:0,bass:0,mid:0,high:0,motion:0,brightness:0,variation:0,relativeEnergy:.5,impact:0,bassPunch:0,sectionEnergy:0,energyBaseline:.18,kick:0,snare:0,hihat:0,beat:0,downbeat:0,prevBeat:0,prevDownbeat:0,eventCooldown:0},this.init()}init(){return this.isDisposed?!1:this.scene?!0:(this.setupThreeJS(),this.isDisposed||(this.setupPostProcessing(),this.runtime=this.buildRainRuntime(),this.isDisposed)?!1:(this.setupGUI(),this.setupSettingsButton(),console.log(`✅ Animation65 初始化成功`),!0))}setupThreeJS(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.scene=new h,this.scene.background=new v(198411),this.camera=new m(46,e/t,.05,120),this.camera.position.set(0,.92,7),this.renderer=new x({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setSize(e,t,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=a,this.renderer.toneMapping=1,this._applyOutputExposure(),this.controls=new fe(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.target.set(0,.035,-2.9),this.controls.minDistance=3.5,this.controls.maxDistance=13,this.controls.maxPolarAngle=Math.PI*.6,this.controls.minPolarAngle=.05,this.controls.saveState()}setupPostProcessing(){let e=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight,r=new re(this.scene,this.camera);this.bloomPass=new de(new t(e,n),this.settings.bloom,.32,.9),this.composer=new ie(this.renderer),this.composer.addPass(r),this.composer.addPass(this.bloomPass),this.composer.addPass(new S)}_selectedGlobalFlowEffect(){let e=document.getElementById(`globalMouseFlowEffect`);return e instanceof HTMLSelectElement?e.value:``}_ensureGroundDistortion(){if(this.groundFluid||!this.renderer||!this.composer||!this.bloomPass)return;this.groundFluid=new ce(this.renderer,{profile:`balanced`,splatRadius:.0014,splatForce:7,pressureIterations:10,curlStrength:.18,velocityDissipation:.99,densityDissipation:.94,pressureDissipation:.8,bfecc:!0,reflectWalls:!1,enableDye:!0}),this.groundDistortions={simple:new T(this.groundFluid),chromatic:new ae(this.groundFluid),waterDistortion:new oe(this.groundFluid),caustics:new w(this.groundFluid),rgb:new se(this.groundFluid)};let e=this.composer.passes.indexOf(this.bloomPass);for(let t of Object.values(this.groundDistortions))t.enabled=!1,this.composer.insertPass(t,e);this.detachGroundFluidPointer=C(document.body,this.groundFluid,{coloredStrokes:!1,shouldSplat:()=>!!this.activeGroundDistortion}),this.onWindowResize()}_syncGroundDistortion(e){let t=this._selectedGlobalFlowEffect(),n=document.getElementById(`globalMouseFlowEnabled`),r=(!(n instanceof HTMLInputElement)||n.checked)&&[`simple`,`chromatic`,`waterDistortion`,`caustics`,`rgb`].includes(t);if(r!==this.localFlowCompositionActive&&(this.localFlowCompositionActive=r,E(r)),!r){if(this.activeGroundDistortion=null,this.groundDistortions)for(let e of Object.values(this.groundDistortions))e.enabled=!1;return}this._ensureGroundDistortion();let i=(e,t)=>{let n=document.getElementById(e),r=n instanceof HTMLInputElement?Number(n.value):t;return Number.isFinite(r)?r:t},a=i(`globalMouseFlowIntensity`,1),o=i(`globalMouseFlowForce`,7),s=i(`globalMouseFlowRadius`,1),c=i(`globalMouseFlowCurl`,.18),l=i(`globalMouseFlowVelocityDissipation`,.99),u=i(`globalMouseFlowDensityDissipation`,.94),d=`${o}|${s}|${c}|${l}|${u}`;d!==this.groundFluidConfigKey&&(this.groundFluid.configure({splatForce:o,splatRadius:s*.0014,curlStrength:c,velocityDissipation:l,densityDissipation:u}),this.groundFluidConfigKey=d),this.activeGroundDistortion=t;for(let[e,n]of Object.entries(this.groundDistortions))n.enabled=e===t,n.intensity=a;this.groundFluid.step(e)}_qualityBloomScale(e=this.settings.qualityMode){return e===`高画质`?1:e===`性能`?.62:.82}_applyOutputExposure(){this.renderer&&(this.renderer.toneMappingExposure=this.settings.exposure)}buildRainRuntime(){let m=this.scene,h=this.camera,x=this.renderer;this.controls;let re=this.composer,ie=this.bloomPass,S=this.settings,C=this.audioState,ae=Object.freeze({rainRateMul:1,rainDensityMul:1,rainSpeedMul:1,largeDropAdd:0,impactMul:1,rippleMul:1,interferenceMul:1,motionMul:1,bubbleWobbleAdd:0,airAdd:0,highlightAdd:0,flashMul:1}),w={...ae};function T(){if(!(S.audioEnabled&&C.playing&&C.ready))return ae;let e=S.audioAmount,t=S.audioDynamics,n=S.audioRhythm,r=d.clamp((C.relativeEnergy-.5)*2,0,1),i=d.clamp(C.sectionEnergy*.68+r*.2+C.energy*.12,0,1),a=d.clamp(C.energy*.3+C.motion*.26+i*.44,0,1.25),o=d.clamp(C.mid*.42+C.motion*.25+C.variation*.23+C.impact*.1,0,1.25),s=d.clamp(C.kick*.34+C.snare*.22+C.bassPunch*.3+C.impact*.24,0,1.4),c=d.clamp(a*.52+i*.38+C.motion*.1,0,1.25),l=d.clamp(C.impact*.3+C.bassPunch*.28+C.beat*.18+C.downbeat*.24,0,1.2),u=d.clamp(.82+S.audioRainDensity*e*t*(c*.52+l*.1),.76,1.38);return w.rainRateMul=d.clamp(1+e*t*(a*.72+i*.2),1,1.82),w.rainDensityMul=u,w.rainSpeedMul=1+e*t*(a*.16+C.motion*.08),w.largeDropAdd=e*n*(C.bassPunch*.095+C.kick*.045),w.impactMul=1+e*n*(s*.82+C.bassPunch*.26),w.rippleMul=1+e*t*(o*.72+C.bass*.12),w.interferenceMul=1+e*t*(C.variation*.38+C.mid*.24+o*.12),w.motionMul=1+e*t*(C.motion*.48+a*.12),w.bubbleWobbleAdd=e*t*(C.mid*.055+C.high*.038+C.motion*.055),w.airAdd=e*n*(C.bassPunch*.075+C.kick*.045),w.highlightAdd=e*(C.brightness*.2+C.high*.18+C.hihat*.24),w.flashMul=1+e*n*(C.snare*.38+C.impact*.22+C.kick*.12)+e*t*C.high*.1,w}let oe=Array.from({length:24},()=>new t(999,999)),se=new Float32Array(24),ce=new Float32Array(24),E=new Float32Array(24),D=new Float32Array(24);for(let e=0;e<24;e++)D[e]=Math.random();let O=0,k={uTime:{value:0},uMotion:{value:S.surfaceMotion},uReflect:{value:S.reflectionStrength},uPuddleAmount:{value:S.puddleAmount},uPuddleDepth:{value:S.puddleDepth},uRoadRoughness:{value:S.roadRoughness},uReflectionStretch:{value:S.reflectionStretch},uDetail:{value:S.detailStrength},uSilver:{value:S.silverStrength},uWetEdge:{value:S.wetEdgeStrength},uLightField:{value:S.lightFieldStrength},uSpecContrast:{value:S.specularContrast},uRainlight:{value:S.rainlightDistortion},uRecovery:{value:S.highlightRecovery},uLightFlow:{value:S.directionalFlow},uDistanceDetail:{value:S.distanceDetail},uMicroFlow:{value:S.microFlowStrength},uLayerSeparation:{value:S.layerSeparation},uEdgeMeniscus:{value:S.edgeMeniscus},uTransitionSoftness:{value:S.transitionSoftness},uSubsurfaceAsphalt:{value:S.subsurfaceAsphalt},uEdgeIrregularity:{value:S.edgeIrregularity},uWaterActivity:{value:S.waterActivity},uFlowSense:{value:S.flowSense},uDepthResponse:{value:S.depthResponse},uDeepSmoothness:{value:S.deepSmoothness},uRippleLod:{value:S.rippleLod},uShaderDetailLod:{value:S.shaderDetailLod},uAtmosCouple:{value:0},uAtmosDirection:{value:S.lightDirection},uUrbanLight:{value:S.urbanLightStrength},uUrbanWarm:{value:S.urbanWarmth},uUrbanReflection:{value:S.urbanReflection},uUrbanOrange:{value:S.urbanOrange},uUrbanCool:{value:S.urbanCool},uUrbanCoolReflection:{value:S.urbanCoolReflection},uPoolStrength:{value:S.urbanPoolStrength},uPoolWidth:{value:S.urbanPoolWidth},uPoolReflection:{value:S.urbanPoolReflection},uWaterDynamics:{value:S.waterDynamics},uPuddleRippleStrength:{value:S.puddleRippleStrength},uWarm:{value:S.warmReflection},uRippleLife:{value:S.rippleLife},uRippleSize:{value:S.rippleSize},uSurfaceRipple:{value:S.surfaceRipple},uTension:{value:S.surfaceTension},uImpactDepth:{value:S.impactDepth},uInterference:{value:S.interference},uRippleCenters:{value:oe},uRippleBirths:{value:se},uRippleStrengths:{value:ce},uRippleFlash:{value:E},uRippleSeeds:{value:D}},le=new g({uniforms:k,vertexShader:`
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
  }`,side:2}),ue=new p(52,48,112,112);ue.rotateX(-Math.PI/2);let de=new r(ue,le);de.position.z=-8,m.add(de);function fe(e){return e-Math.floor(e)}function A(e,t){return fe(Math.sin(e*127.1+t*311.7)*43758.5453123)}function j(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=A(n,r),l=A(n+1,r),u=A(n,r+1),f=A(n+1,r+1);return d.lerp(d.lerp(c,l,o),d.lerp(u,f,o),s)}function pe(e,t){let n=0,r=.5;for(let i=0;i<4;i++){n+=r*j(e,t);let i=e*2.03+13.1,a=t*2.03+7.7;e=i,t=a,r*=.5}return n}function M(e,t){return(j(e*.105+7.4,t*.105+2.8)-.5)*.62+(j(e*.245-2.1,t*.245+8.6)-.5)*.27+(j(e*.58+5.3,t*.58-3.2)-.5)*.11+Math.sin(e*.31+t*.075)*.055}function N(e,t,n){let r=d.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function me(e,t){let n=M(e,t),r=pe(e*.105+2.8,t*.105-4.1),i=pe(e*.29-8.2,t*.29+3.7),a=d.clamp(.5-n*.9+(r-.5)*.25+(i-.5)*.075,0,1),o=1-N(.045,.19,Math.abs(Math.sin(e*.105+t*.022+pe(e*.075,t*.075)*1.65))),s=(pe(e*.46+11.3,t*.46-5.7)-.5)*.06*S.edgeIrregularity+(j(e*1.35-3.1,t*1.35+8.4)-.5)*.022*S.edgeIrregularity,c=a+o*.05+s,l=.735-S.puddleAmount*.15,u=Math.max(.55,S.transitionSoftness),f=N(l-.3*u,l-.095,c),p=N(l-.06*u,l+.095*u,c),m=N(.2,2.8,d.clamp(S.puddleDepth,.2,2.8))**.68,h=d.clamp(S.depthResponse,.45,1.55),g=p,_=N(.14,.86,g),v=N(.36,.76,a)*d.lerp(.72,1,_),y=d.clamp(m*d.lerp(.62,1.22,v),0,1),b=d.clamp(g*d.lerp(.08,.98,y**.76)*d.lerp(.66,1,_)*h,0,1);return{film:f,shallow:g,deep:d.clamp(b*_,0,1),waterLayer:b,depth:d.clamp(f*.1+g*.24+b*.82,0,1),depthNorm:y}}function he(e,t){let n=.18,r=M(e+n,t)-M(e-n,t),i=M(e,t+n)-M(e,t-n),a=Math.hypot(r,i)||1;return{x:-r/a,z:-i/a}}function ge(e=96){let t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=n.createRadialGradient(e*.5,e*.5,0,e*.5,e*.5,e*.5);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.25,`rgba(255,255,255,.50)`),r.addColorStop(.7,`rgba(255,255,255,.08)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,e,e);let i=new _(t);return i.colorSpace=a,i}let _e=ge(),ve=new t(-.085,.018);function ye(e,t,n,r=0,i={x:0,z:0,gust:0}){let a=S.rainGustPropagation,o=t*.205-n*(.46+.34*a)+Math.sin(e*.075)*.58,s=e*.105+t*.062-n*(.18+.2*a)+1.73,c=Math.sin(o),l=Math.sin(s)*.46,u=Math.max(0,Math.sin(t*.118-n*(.29+.24*a)-.65)),d=c*.62+l*.3+u*.34,f=1+r*.18*S.audioAmount,p=d*.04*S.rainWindStrength*f;return i.x=ve.x*(.76+.34*S.rainWindStrength)+p,i.z=ve.y+Math.sin(s*.72)*.006*S.rainWindStrength,i.gust=d,i}let be={x:0,z:0,gust:0},xe=[{source:new l(-8.9,8.4,-19.4),target:new l(-1.4,.32,-3.9),width:8.7,color:7838384,strength:1.12,seed:2.1},{source:new l(1,9.3,-24.6),target:new l(.3,.4,-6),width:10.4,color:8624292,strength:.56,seed:5.4},{source:new l(9.6,7,-20),target:new l(4.1,.28,-5.8),width:6.1,color:11759447,strength:.32,seed:8.7}];function Se(e){let t=e.source.clone(),n=e.target.clone();return n.x+=S.lightDirection*3.2,t.x+=S.lightDirection*.7,{source:t,target:n}}function Ce(e){let t=new o;t.renderOrder=1,m.add(t);let n=[];for(let i=0;i<3;i++){let a=new g({vertexShader:`
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
}`,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:0},uSeed:{value:e.seed+i*.37},uNoiseLayers:{value:1},uDrift:{value:1},uColor:{value:new v(e.color)}}}),o=new r(new p(e.width,1,1,1),a);o.rotation.y=i*Math.PI/3,t.add(o),n.push(a)}return{def:e,group:t,mats:n}}let P=xe.map(Ce),we=new l(0,1,0),F=new l;function Te(e){let{source:t,target:n}=Se(e.def);F.copy(n).sub(t);let r=F.length();F.normalize(),e.group.position.copy(t).addScaledVector(F,r*.5),e.group.quaternion.setFromUnitVectors(we,F);for(let t of e.group.children)t.scale.set(1,r,1)}for(let e of P)Te(e);let I=new g({side:1,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,uniforms:{uAtmos:{value:S.atmosphereStrength},uTime:{value:0},uHorizon:{value:S.horizonGlow},uCloud:{value:S.cloudShadow},uBalance:{value:S.coolWarmBalance},uFar:{value:S.farBrightness},uDirection:{value:S.lightDirection},uStormDepth:{value:S.stormDepth},uMist:{value:S.horizonMist},uLightPresence:{value:S.lightSourcePresence},uUrban:{value:S.urbanLightStrength},uOrange:{value:S.urbanOrange},uCool:{value:S.urbanCool},uDomain:{value:S.urbanDomainWidth},uScatter:{value:S.urbanFogScatter},uExternalBackground:{value:+!!this.externalBackgroundEnabled}},vertexShader:`varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`precision highp float;varying vec3 vDir;uniform float uAtmos,uTime,uHorizon,uCloud,uBalance,uFar,uDirection,uStormDepth,uMist,uLightPresence,uUrban,uOrange,uCool,uDomain,uScatter,uExternalBackground;
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
  }`}),Ee=new r(new b(70,48,24),I);Ee.renderOrder=-30,m.add(Ee);let De=[{x:-11.8,y:2.7,z:-12.5,size:18.8,color:11983078,lum:.36,core:.34,layer:0,depth:0},{x:11.2,y:2.1,z:-13.8,size:19.4,color:15770716,lum:.4,core:.36,layer:0,depth:0},{x:-9.4,y:.65,z:-20.5,size:15.8,color:10470869,lum:.46,core:.48,layer:0,depth:1},{x:-6.2,y:2,z:-22.8,size:17.2,color:12836070,lum:.46,core:.48,layer:1,depth:1},{x:-2.7,y:.58,z:-21.2,size:14.8,color:14739691,lum:.38,core:.36,layer:0,depth:1},{x:1.4,y:2.8,z:-23.6,size:18,color:14083820,lum:.5,core:.52,layer:2,depth:1},{x:4.7,y:1.05,z:-19.8,size:15.2,color:14780983,lum:.46,core:.42,layer:1,depth:1},{x:8.3,y:2.45,z:-22.6,size:18.2,color:15773033,lum:.5,core:.5,layer:2,depth:1},{x:-10.6,y:.44,z:-31,size:11.8,color:10074567,lum:.3,core:.24,layer:0,depth:2},{x:-8,y:1.25,z:-33,size:12.6,color:12112091,lum:.32,core:.26,layer:1,depth:2},{x:-5,y:.5,z:-29.8,size:11.2,color:14476776,lum:.28,core:.22,layer:0,depth:2},{x:-2,y:2.1,z:-32.5,size:13.4,color:12179685,lum:.34,core:.3,layer:2,depth:2},{x:1.2,y:.62,z:-30.8,size:11.8,color:14673898,lum:.3,core:.24,layer:0,depth:2},{x:3.8,y:1.45,z:-34,size:12.9,color:13951977,lum:.32,core:.28,layer:1,depth:2},{x:6.4,y:.52,z:-31.8,size:11.6,color:14911284,lum:.3,core:.22,layer:0,depth:2},{x:8.8,y:2.2,z:-33.5,size:13,color:15442266,lum:.34,core:.28,layer:2,depth:2},{x:10.8,y:.78,z:-29.6,size:12,color:15769676,lum:.32,core:.24,layer:1,depth:2}],L=De.length,Oe=new Float32Array(L*3),ke=new Float32Array(L),Ae=new Float32Array(L),je=new Float32Array(L*3),Me=new Float32Array(L),Ne=new Float32Array(L),Pe=new Float32Array(L);for(let e=0;e<L;e++){let t=De[e],n=e*3,r=new v(t.color);Oe[n]=t.x,Oe[n+1]=t.y,Oe[n+2]=t.z,ke[e]=t.size,Ae[e]=2.7+e*3.91,Me[e]=t.core,Ne[e]=t.layer??0,Pe[e]=t.depth??1,je[n]=r.r*t.lum,je[n+1]=r.g*t.lum,je[n+2]=r.b*t.lum}let R=new ee;R.setAttribute(`position`,new y(Oe,3)),R.setAttribute(`aSize`,new y(ke,1)),R.setAttribute(`aSeed`,new y(Ae,1)),R.setAttribute(`aColor`,new y(je,3)),R.setAttribute(`aCore`,new y(Me,1)),R.setAttribute(`aLayer`,new y(Ne,1)),R.setAttribute(`aDepth`,new y(Pe,1));let Fe=new g({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uTime:{value:0},uStrength:{value:S.urbanLightStrength},uBokeh:{value:S.urbanBokeh},uWarm:{value:S.urbanWarmth},uMotion:{value:S.urbanMotion},uCorePresence:{value:S.urbanCorePresence},uHighStrength:{value:S.highLightStrength},uHighSize:{value:S.highLightSize},uMidStrength:{value:S.midLightStrength},uIrregularity:{value:S.layerIrregularity},uVolumeDepth:{value:S.lightVolumeDepth},uNear:{value:S.lightVolumeNear},uMid:{value:S.lightVolumeMid},uFar:{value:S.lightVolumeFar}},vertexShader:`precision highp float;attribute float aSize,aSeed,aCore,aLayer,aDepth;attribute vec3 aColor;varying vec3 vColor;varying float vSeed,vCore,vLayer;uniform float uTime,uBokeh,uMotion,uHighSize,uIrregularity,uVolumeDepth,uNear,uMid,uFar;void main(){vec3 p=position;float layerDrift=mix(.35,1.0,smoothstep(.5,2.0,aLayer));p.x+=sin(uTime*(.018+.006*fract(aSeed))+aSeed*2.1)*.010*uMotion*layerDrift*uIrregularity;p.y+=cos(uTime*.011+aSeed*1.3)*.004*uMotion*layerDrift*uIrregularity;vec4 mv=modelViewMatrix*vec4(p,1.0);vColor=aColor;vSeed=aSeed;vCore=aCore;vLayer=aLayer;gl_Position=projectionMatrix*mv;float layerSize=mix(1.0,uHighSize,smoothstep(1.5,2.0,aLayer));float depthMul=mix(uNear,uMid,step(.5,aDepth));depthMul=mix(depthMul,uFar,step(1.5,aDepth));float perspMix=mix(1.0,clamp(24.0/max(-mv.z,1.0),.58,1.55),clamp(uVolumeDepth,0.0,1.4));gl_PointSize=clamp(aSize*uBokeh*layerSize*depthMul*perspMix,4.0,112.0);}`,fragmentShader:`precision highp float;varying vec3 vColor;varying float vSeed,vCore,vLayer,vDepth;uniform float uTime,uStrength,uWarm,uCorePresence,uHighStrength,uMidStrength;void main(){vec2 q=gl_PointCoord-.5;float r=length(q);if(r>.5)discard;float glow=exp(-r*r*46.0);float core=exp(-r*r*420.0)*vCore*(.50+uCorePresence*5.8);float flick=.992+.008*sin(uTime*(.045+.010*fract(vSeed))+vSeed*4.9);vec3 c=vColor;if(c.r>c.b*1.35)c=mix(vec3(dot(c,vec3(.333))),c,uWarm);float layerMul=mix(1.0,uMidStrength,smoothstep(.5,1.0,vLayer));layerMul=mix(layerMul,uHighStrength,smoothstep(1.5,2.0,vLayer));float a=(glow*.082+core*1.24)*uStrength*layerMul*flick;if(a<.0008)discard;vec3 rgb=c*(glow*.36+core*1.72);gl_FragColor=vec4(rgb,a);}`}),z=new g({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uTime:{value:0},uStrength:{value:S.urbanLightStrength},uBokeh:{value:S.urbanBokeh},uWarm:{value:S.urbanWarmth},uMotion:{value:S.urbanMotion},uScatter:{value:S.urbanFogScatter},uHighStrength:{value:S.highLightStrength},uHighSize:{value:S.highLightSize},uHighRainScatter:{value:S.highRainScatter},uMidStrength:{value:S.midLightStrength},uDiffuseHalo:{value:S.diffuseHalo},uDiffuseMist:{value:S.diffuseMist},uIrregularity:{value:S.layerIrregularity},uVolumeDepth:{value:S.lightVolumeDepth},uSpread:{value:S.lightVolumeSpread},uNear:{value:S.lightVolumeNear},uMid:{value:S.lightVolumeMid},uFar:{value:S.lightVolumeFar}},vertexShader:`precision highp float;attribute float aSize,aSeed,aLayer,aDepth;attribute vec3 aColor;varying vec3 vColor;varying float vSeed,vLayer;uniform float uTime,uBokeh,uMotion,uHighSize,uIrregularity,uVolumeDepth,uSpread,uNear,uMid,uFar;void main(){vec3 p=position;float layerDrift=mix(.30,1.0,smoothstep(.5,2.0,aLayer));p.x+=sin(uTime*(.014+.004*fract(aSeed))+aSeed*1.7)*.006*uMotion*layerDrift*uIrregularity;p.y+=cos(uTime*.009+aSeed*1.9)*.004*uMotion*layerDrift*uIrregularity;vec4 mv=modelViewMatrix*vec4(p,1.0);vColor=aColor;vSeed=aSeed;vLayer=aLayer;gl_Position=projectionMatrix*mv;float layerSize=mix(1.0,uHighSize*1.35,smoothstep(1.5,2.0,aLayer));float depthMul=mix(uNear,uMid,step(.5,aDepth));depthMul=mix(depthMul,uFar,step(1.5,aDepth));float perspMix=mix(1.0,clamp(48.0/max(-mv.z,1.0),.70,2.15),clamp(uVolumeDepth,0.0,1.4));gl_PointSize=clamp(aSize*uBokeh*layerSize*depthMul*uSpread*perspMix,16.0,320.0);}`,fragmentShader:`precision highp float;varying vec3 vColor;varying float vSeed,vLayer;uniform float uTime,uStrength,uWarm,uScatter,uHighStrength,uHighRainScatter,uMidStrength,uDiffuseHalo,uDiffuseMist;void main(){vec2 q=gl_PointCoord-.5;float layerShape=mix(1.65,1.28,smoothstep(1.5,2.0,vLayer));q.y*=layerShape;float r2=dot(q,q);if(r2>.30)discard;float inner=exp(-r2*15.0);float outer=exp(-r2*(5.0/max(uDiffuseHalo,.25)));float layerMul=mix(1.0,uMidStrength,smoothstep(.5,1.0,vLayer));layerMul=mix(layerMul,uHighStrength*uHighRainScatter,smoothstep(1.5,2.0,vLayer));float layerMist=mix(.82,1.22*uDiffuseMist,smoothstep(.5,2.0,vLayer));float haze=(outer*.050+inner*.056)*uStrength*uScatter*layerMul*layerMist*uDiffuseHalo;float breath=.985+.015*sin(uTime*.018+vSeed*2.4);vec3 c=vColor;if(c.r>c.b*1.35)c=mix(vec3(dot(c,vec3(.333))),c,uWarm);float a=haze*breath;if(a<.00055)discard;gl_FragColor=vec4(c*(outer*.15+inner*.24)*uScatter,a);}`}),B=new i(R,z);B.renderOrder=-3,B.frustumCulled=!1,B.visible=!0,m.add(B);let V=new i(R,Fe);V.renderOrder=-2,V.frustumCulled=!1,V.visible=!0,m.add(V);let H=Fe;function Ie(e,t,n,i,a,o){let s=new g({vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`precision highp float;varying vec2 vUv;uniform float uTime,uOpacity,uSeed,uDrift,uMist,uUrban,uScatter,uOrange,uCool,uDiffuseMist;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+uSeed)*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fbm(vec2 p){float v=.58*noise(p);p=p*2.03+4.7;v+=.27*noise(p);p=p*2.07+7.3;v+=.12*noise(p);return v;}
void main(){vec2 q=vUv;float n=fbm(vec2(q.x*2.30+uTime*.0015*uDrift,q.y*1.22-uTime*.0006));float edge=smoothstep(0.,.10,q.x)*smoothstep(1.,.90,q.x);float rag=.40+.60*n;float ridge=.47+(n-.52)*.105*uMist;float band=exp(-pow((q.y-ridge)*5.6,2.0));float skirt=exp(-pow((q.y-.34)*2.7,2.0))*.28;vec3 base=vec3(.019,.033,.044);float gxCool=exp(-pow((q.x-.29)*2.05,2.0));float gxSilver=exp(-pow((q.x-.48)*2.8,2.0));float gxOrange=exp(-pow((q.x-.80)*2.55,2.0));vec3 glow=(vec3(.016,.043,.067)*gxCool*uCool+vec3(.043,.049,.052)*gxSilver*.50+vec3(.070,.022,.008)*gxOrange*uOrange*.55)*uUrban*uScatter*uDiffuseMist;float a=uOpacity*edge*(band+skirt)*rag;gl_FragColor=vec4(base+glow*(band*.62+skirt*.32),a);}`,transparent:!0,depthWrite:!1,depthTest:!0,blending:1,uniforms:{uTime:{value:0},uOpacity:{value:a},uSeed:{value:o},uDrift:{value:1},uMist:{value:S.horizonMist},uUrban:{value:S.urbanLightStrength},uScatter:{value:S.urbanFogScatter},uOrange:{value:S.urbanOrange},uCool:{value:S.urbanCool},uDiffuseMist:{value:S.diffuseMist}}}),c=new r(new p(n,i),s);return c.position.set(0,t,e),c.renderOrder=-4,m.add(c),{mesh:c,mat:s,baseOpacity:a}}let U=[Ie(-29,1.36,44,5.5,.132,2.3),Ie(-19,.82,34,4,.078,5.7),Ie(-11,.4,25,2.6,.034,8.9)],W=new Float32Array(27),Le=new Float32Array(9);function Re(e,t=!1){let n=e*3;W[n]=d.randFloatSpread(6.4),W[n+1]=t?d.randFloat(-2.4,3.1):d.randFloat(2.4,4),W[n+2]=d.randFloat(-3.5,-.75),Le[e]=d.randFloat(.78,1.42)}for(let e=0;e<9;e++)Re(e,!0);let ze=new ee;ze.setAttribute(`position`,new y(W,3));let Be=new s({color:14216696,size:20,map:_e,transparent:!0,opacity:.014,depthWrite:!1,blending:2,sizeAttenuation:!1,alphaTest:.002}),Ve=new i(ze,Be);Ve.renderOrder=5,h.add(Ve),m.add(h);let G=9,He=1;function Ue(e=S.qualityMode){e===`高画质`?(G=9,He=1):e===`性能`?(G=3,He=0):(G=6,He=1),ze.setDrawRange(0,G),U[0].mesh.visible=!0,U[1].mesh.visible=e!==`性能`,U[2].mesh.visible=e===`高画质`,P[0].group.visible=!0,P[1].group.visible=e===`高画质`,P[2].group.visible=e!==`性能`}function We(e,t,n){let r=Math.max(S.atmosphereStrength,0)**.76*1.12,i=Math.max(S.shaftStrength,0)**.8*1.18,a=1+n.highlightAdd*.035+n.airAdd*.02;I.uniforms.uAtmos.value=S.atmosphereStrength,I.uniforms.uTime.value=t,I.uniforms.uHorizon.value=S.horizonGlow,I.uniforms.uCloud.value=S.cloudShadow,I.uniforms.uFar.value=S.farBrightness,I.uniforms.uDirection.value=S.lightDirection,I.uniforms.uStormDepth.value=S.stormDepth,I.uniforms.uMist.value=S.horizonMist,I.uniforms.uLightPresence.value=S.lightSourcePresence,I.uniforms.uUrban.value=S.urbanLightStrength,I.uniforms.uOrange.value=S.urbanOrange,I.uniforms.uCool.value=S.urbanCool,I.uniforms.uDomain.value=S.urbanDomainWidth,I.uniforms.uScatter.value=S.urbanFogScatter,Ee.position.copy(h.position),H.uniforms.uTime.value=t,H.uniforms.uStrength.value=S.urbanLightStrength*(.9+n.highlightAdd*.012),H.uniforms.uBokeh.value=S.urbanBokeh,H.uniforms.uWarm.value=S.urbanWarmth,H.uniforms.uMotion.value=S.urbanMotion,H.uniforms.uCorePresence.value=S.urbanCorePresence,H.uniforms.uHighStrength.value=S.highLightStrength,H.uniforms.uHighSize.value=S.highLightSize,H.uniforms.uMidStrength.value=S.midLightStrength,H.uniforms.uIrregularity.value=S.layerIrregularity,H.uniforms.uVolumeDepth.value=S.lightVolumeDepth,H.uniforms.uNear.value=S.lightVolumeNear,H.uniforms.uMid.value=S.lightVolumeMid,H.uniforms.uFar.value=S.lightVolumeFar,z.uniforms.uTime.value=t,z.uniforms.uStrength.value=S.urbanLightStrength*S.urbanPoolStrength*(.88+n.airAdd*.012),z.uniforms.uBokeh.value=S.urbanBokeh,z.uniforms.uWarm.value=S.urbanWarmth,z.uniforms.uMotion.value=S.urbanMotion,z.uniforms.uScatter.value=S.urbanFogScatter,z.uniforms.uHighStrength.value=S.highLightStrength,z.uniforms.uHighSize.value=S.highLightSize,z.uniforms.uHighRainScatter.value=S.highRainScatter,z.uniforms.uMidStrength.value=S.midLightStrength,z.uniforms.uDiffuseHalo.value=S.diffuseHalo,z.uniforms.uDiffuseMist.value=S.diffuseMist,z.uniforms.uIrregularity.value=S.layerIrregularity,z.uniforms.uVolumeDepth.value=S.lightVolumeDepth,z.uniforms.uSpread.value=S.lightVolumeSpread,z.uniforms.uNear.value=S.lightVolumeNear,z.uniforms.uMid.value=S.lightVolumeMid,z.uniforms.uFar.value=S.lightVolumeFar;let o=S.urbanLightStrength>.001&&S.urbanBokeh>.001;V.visible=o,B.visible=o;for(let e=0;e<P.length;e++){let o=P[e];Te(o);let s=e===2?S.warmReflection*S.coolWarmBalance:1;for(let e of o.mats)e.uniforms.uTime.value=t,e.uniforms.uNoiseLayers.value=He,e.uniforms.uDrift.value=.48+n.highlightAdd*.012,e.uniforms.uOpacity.value=.0105*r*i*o.def.strength*s*a}Be.opacity=.014*r*S.cameraRainStrength*(1+n.highlightAdd*.06);let s=ye(0,-13,t,C.motion,be);for(let e=0;e<U.length;e++){let i=U[e];i.mat.uniforms.uTime.value=t,i.mat.uniforms.uDrift.value=.31+.1*e+Math.abs(s.x)*1.25,i.mat.uniforms.uMist.value=S.horizonMist,i.mat.uniforms.uUrban.value=S.urbanLightStrength,i.mat.uniforms.uScatter.value=S.urbanFogScatter,i.mat.uniforms.uOrange.value=S.urbanOrange,i.mat.uniforms.uCool.value=S.urbanCool,i.mat.uniforms.uDiffuseMist.value=S.diffuseMist,i.mat.uniforms.uOpacity.value=i.baseOpacity*r*S.horizonMist*(.8+.2*S.farBrightness)*(1+n.airAdd*.018)}let c=s.x*(.72+S.lightDirection*.16);for(let t=0;t<G;t++){let n=t*3;W[n+1]-=(.72+.54*Le[t])*e,W[n]+=c*.36*e,W[n+1]<-2.8&&Re(t,!1)}ze.attributes.position.needsUpdate=!0}let K=1800,Ge=5.5,q=new Float32Array(K*6),Ke=new Float32Array(K),qe=new Float32Array(K),Je=new Float32Array(K),J=new Float32Array(K*3),Ye=new Float32Array(K),Xe=new Float32Array(K),Ze=new Float32Array(K),Qe=new Float32Array(K),$e=new Float32Array(K),et=new Float32Array(K),Y=new Float32Array(K),tt=new Float32Array(K),nt=new Float32Array(K),rt={x:0,z:0,gust:0},it=!0;function at(){let e=Math.random(),t;return t=e<.12?Math.random()*.18:e<.72?.18+Math.random()*.48:.66+Math.random()*.34,d.lerp(Ge,-27,t)}function ot(e,t=!1){let n=e*6,r=e*3,i=at(),a=d.clamp((Ge-i)/(Ge- -27),0,1),o=d.lerp(8.5,25,a**.72),s=d.randFloatSpread(o*2),c=t?d.randFloat(.18,12.8):d.randFloat(8.2,14),l=T(),u=Math.random()<d.clamp(S.largeDropChance+l.largeDropAdd,0,.48)?d.randFloat(1.05,1.65):d.randFloat(.38,1.02),f=d.randFloat(.74,1.38),p=u*f*f,m=d.randFloat(-.055,.012)*S.dropVariation,h=Math.random(),g=h<.56?0:h<.93?1:2;a>.72&&g===2&&Math.random()<.72&&(g=0),a<.16&&g===0&&Math.random()<.48&&(g=1);let _=g===0?.62:g===1?1:1.18,v=S.rainSpeed*f*.0315*_*d.randFloat(.86,1.13),y=d.clamp(v,.075,.66);q[n]=s,q[n+1]=c,q[n+2]=i,q[n+3]=s+m,q[n+4]=c-y,q[n+5]=i+.018,Ke[e]=f,qe[e]=p,Je[e]=m,J[r]=s+m*.5,J[r+1]=c-y*.5,J[r+2]=i+.009,Xe[e]=y,Ye[e]=y,nt[e]=g;let b=g===0?.72:g===1?1:1.12;Ze[e]=d.lerp(.0085,.0185,d.clamp(p/2.1,0,1))*b*d.randFloat(.86,1.1),Qe[e]=d.clamp(p*(g===0?.76:g===1?1:1.1),.22,2.1),$e[e]=Math.random();let x=m+ye(s,i,k.uTime.value||0,C.motion).x*.72;Y[e]=x,et[e]=x,tt[e]=d.randFloat(.84,1.18),it=!0}for(let e=0;e<K;e++)ot(e,!0);let st=new p(1,1,1,1),X=new e;X.index=st.index,X.setAttribute(`position`,st.attributes.position),X.setAttribute(`uv`,st.attributes.uv),X.setAttribute(`iHead`,new u(J,3)),X.setAttribute(`iLength`,new u(Ye,1)),X.setAttribute(`iWidth`,new u(Ze,1)),X.setAttribute(`iEnergy`,new u(Qe,1)),X.setAttribute(`iSeed`,new u($e,1)),X.setAttribute(`iAngle`,new u(et,1)),X.setAttribute(`iRole`,new u(nt,1)),X.instanceCount=K,st.dispose();let ct=Array.from({length:7},()=>new l),lt=Array.from({length:7},()=>new l),ut=Array.from({length:7},()=>new v),dt=new Float32Array(7),ft=new Float32Array(7),Z={uOpacity:{value:S.rainOpacity},uRainLight:{value:S.rainLightResponse},uRainLayer:{value:S.rainLayer},uRainDepthContrast:{value:S.rainDepthContrast},uAtmos:{value:S.atmosphereStrength},uTime:{value:0},uCameraRight:{value:new l(1,0,0)},uCameraPos:{value:new l},uLightSource:{value:ct},uLightTarget:{value:lt},uLightWidth:{value:dt},uLightStrength:{value:ft},uLightColor:{value:ut}},pt=new r(X,new g({vertexShader:`
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
}`,uniforms:Z,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2}));pt.frustumCulled=!1,pt.renderOrder=3,m.add(pt);let mt=K,ht=1250;function gt(e=S.qualityMode){return e===`高画质`?1:e===`性能`?.62:.82}function _t(){ie.strength=S.bloom*gt(S.qualityMode)}function vt(e=null){let t=e?.rainDensityMul??1,n=d.clamp(S.impactRate/30,.3,2.2),r=Math.floor(ht*S.rainDensity*n*t);X.instanceCount=d.clamp(r,120,mt)}function yt(e=S.qualityMode){S.qualityMode=e;let t=Math.min(devicePixelRatio,2),n=t;e===`高画质`?(mt=K,ht=1450,n=t,S.rippleLod=1,S.shaderDetailLod=1):e===`性能`?(mt=1044,ht=720,n=Math.min(devicePixelRatio,1),S.rippleLod=.48,S.shaderDetailLod=.58):(mt=K,ht=1250,n=Math.min(devicePixelRatio,1.3),S.rippleLod=.72,S.shaderDetailLod=.8);let r=x.domElement.clientWidth||innerWidth,i=x.domElement.clientHeight||innerHeight;x.setPixelRatio(n),re.setPixelRatio(n),_t(),vt(),Ue(e),x.setSize(r,i,!1),re.setSize(r,i)}yt();let bt=[],xt=new f(.965,1,56,1,0,Math.PI*d.randFloat(1.05,1.72));xt.rotateX(-Math.PI/2);for(let e=0;e<48;e++){let e=new r(xt,new n({color:11126484,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}));e.visible=!1,e.position.y=.012,m.add(e),bt.push({mesh:e,active:!1,age:0,life:1,phase:0,scale:1,aspect:1})}let St=new b(1,18,10,0,Math.PI*2,0,Math.PI*.5),Ct=[];for(let e=0;e<64;e++){let e={uOpacity:{value:0},uIridescence:{value:S.iridescence},uHighlight:{value:S.bubbleHighlight},uTime:{value:0},uSeed:{value:Math.random()*20}},t=new r(St,new g({uniforms:e,vertexShader:`
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
}`,transparent:!0,depthWrite:!1,side:2}));t.visible=!1,m.add(t),Ct.push({mesh:t,uniforms:e,active:!1,age:0,life:1,size:.1,popTriggered:!1,disturbance:0,disturbPhase:Math.random()*6.28,flowX:0,flowZ:0,waterTimer:0,waterState:{shallow:1,deep:0}})}let wt=[],Tt=new f(.62,1,32);Tt.rotateX(-Math.PI/2);for(let e=0;e<48;e++){let e=new r(Tt,new n({color:9685992,transparent:!0,opacity:0,depthWrite:!1,blending:2}));e.visible=!1,e.position.y=.014,m.add(e),wt.push({mesh:e,active:!1,age:0,life:1})}function Et(e=18){let t=[],n=[];for(let n=0;n<e;n++){let r=n/e*Math.PI*2,i=.7;t.push(Math.cos(r)*i,0,Math.sin(r)*i);let a=.4+.6*(.5+.5*Math.sin(r*e*.5+1.7))**2;t.push(Math.cos(r)*1,a,Math.sin(r)*1)}for(let t=0;t<e;t++){let r=(t+1)%e,i=t*2,a=t*2+1,o=r*2,s=r*2+1;n.push(i,o,a,a,o,s)}let r=new ee;return r.setAttribute(`position`,new ne(t,3)),r.setIndex(n),r.computeVertexNormals(),r}let Dt=Et(),Ot=[];for(let e=0;e<44;e++){let e=new r(Dt,new c({color:12115698,roughness:.08,metalness:0,transmission:.32,transparent:!0,opacity:0,thickness:.02,clearcoat:1,clearcoatRoughness:.04,depthWrite:!1,side:2}));e.visible=!1,m.add(e),Ot.push({mesh:e,active:!1,age:0,life:.18,size:.15,mode:`crown`})}let kt=new te(.045,.55,8,1,!0);kt.translate(0,.275,0);let At=[];for(let e=0;e<32;e++){let e=new r(kt,new n({color:13430015,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}));e.visible=!1,m.add(e),At.push({mesh:e,active:!1,age:0,life:.12,size:.1})}let jt=new b(.013,6,6),Mt=new n({color:12573158,transparent:!0,opacity:.55,depthWrite:!1,blending:2}),Nt=[];for(let e=0;e<180;e++){let e=new r(jt,Mt);e.visible=!1,m.add(e),Nt.push({mesh:e,active:!1,age:0,life:.3,v:new l,energy:.5})}function Q(e){return e.find(e=>!e.active)}let $=[];function Pt(e,t,n=1,r=1){let i=T(),a=d.clamp(.28+n*.4,0,1),o=d.clamp((S.airEntrapment+i.airAdd)*S.bubbleFrequency*a*r,0,1);if(Math.random()>o)return;let s=n>1.15?d.randInt(2,4):1;for(let r=0;r<s;r++)$.push({x:e,z:t,strength:n,delay:d.randFloat(.065,.14)+r*.018,scale:s>1?d.randFloat(.38,.62):d.randFloat(.72,1),spread:s>1?d.randFloat(.025,.11):.02});n>1.35&&Math.random()<d.clamp(.32*S.bubbleFrequency,0,1)&&$.push({x:e,z:t,strength:n,delay:d.randFloat(.14,.22),scale:d.randFloat(.86,1.15),spread:.035})}function Ft(e){for(let t=$.length-1;t>=0;t--){let n=$[t];if(n.delay-=e,n.delay<=0){let e=Math.random()*Math.PI*2,r=Math.random()*n.spread;Ut(n.x+Math.cos(e)*r,n.z+Math.sin(e)*r,n.strength,n.scale),$.splice(t,1)}}}function It(e,t,n){for(let r of Ct){if(!r.active)continue;let i=r.mesh.position.x-e,a=r.mesh.position.z-t,o=Math.hypot(i,a);if(o<.58){let e=(1-o/.58)*n*S.bubbleDisturbance;r.disturbance=Math.min(1.5,r.disturbance+e),r.disturbPhase=Math.atan2(a,i)}}}function Lt(e,t,n=1,r=.35){oe[O].set(e,t),se[O]=k.uTime.value,ce[O]=n,E[O]=r*S.surfaceFlash,D[O]=Math.random(),O=(O+1)%24,It(e,t,n)}function Rt(e,t,n=1,r=1){if(Math.random()>S.visibleRippleChance*d.lerp(.35,1,r))return;let i=Q(bt);i&&(i.active=!0,i.age=0,i.life=S.rippleLife*d.randFloat(.76,1.08),i.phase=Math.random()*6.28,i.scale=n*d.randFloat(.86,1.07),i.aspect=d.randFloat(.92,1.08),i.mesh.visible=!0,i.mesh.position.set(e,.014,t),i.mesh.rotation.y=Math.random()*Math.PI*2,i.mesh.scale.setScalar(.015),i.mesh.material.opacity=0)}function zt(e,t,n,r,i=1){for(let a=0;a<r;a++){let r=Q(Nt);if(!r)break;let a=Math.random()*Math.PI*2,o=d.randFloat(.1,.48)*n;r.active=!0,r.age=0,r.life=d.randFloat(.16,.4),r.energy=n,r.mesh.visible=!0,r.mesh.position.set(e,.028,t),r.v.set(Math.cos(a)*o,d.randFloat(.4,1.3)*n*i,Math.sin(a)*o)}}function Bt(e,t,n){let r=Q(At);r&&(r.active=!0,r.age=0,r.life=d.randFloat(.09,.15),r.size=d.lerp(.045,.095,d.clamp(n/1.1,0,1))*S.needleStrength,r.mesh.visible=!0,r.mesh.position.set(e,.01,t),r.mesh.scale.set(r.size,r.size*(1.2+n*.55),r.size),r.mesh.material.opacity=0)}function Vt(e,t,n=1,r=`crown`){let i=Q(Ot);if(!i)return;i.active=!0,i.age=0,i.mode=r,i.life=r===`bloom`?d.randFloat(.2,.31):d.randFloat(.14,.23);let a=r===`bloom`?S.bloomStrength:S.crownStrength;i.size=d.randFloat(.07,.135)*a*n,i.mesh.visible=!0,i.mesh.position.set(e,.012,t),i.mesh.rotation.y=Math.random()*Math.PI,i.mesh.scale.set(i.size*.55,i.size*.35,i.size*.55),i.mesh.material.opacity=0,zt(e,t,n,r===`bloom`?d.randInt(7,12):d.randInt(3,7),r===`bloom`?1.12:1)}function Ht(e,t,n,r){Math.random()>S.splashAmount||(r===`needle`?Bt(e,t,n):Vt(e,t,n,r))}function Ut(e,t,n=1,r=1){let i=Q(Ct);if(!i)return;let a=Math.random(),o;o=a<.66?d.randFloat(S.bubbleMin,S.bubbleMin+(S.bubbleMax-S.bubbleMin)*.3):a<.95?d.randFloat(S.bubbleMin+(S.bubbleMax-S.bubbleMin)*.28,S.bubbleMin+(S.bubbleMax-S.bubbleMin)*.64):d.randFloat(S.bubbleMin+(S.bubbleMax-S.bubbleMin)*.62,S.bubbleMax),o*=S.bubbleScale*r*d.lerp(.94,1.08,d.clamp(n/1.6,0,1)),i.active=!0,i.age=0,i.waterTimer=Math.random()*.12,i.waterState=me(e,t),i.life=S.bubbleLife*d.randFloat(.72,1.34),i.size=o,i.popTriggered=!1,i.disturbance=0;let s=he(e,t);i.flowX=s.x,i.flowZ=s.z,i.mesh.visible=!0,i.mesh.position.set(e,.015,t),i.mesh.rotation.y=Math.random()*Math.PI,i.mesh.scale.set(o*.04,o*.022,o*.04),i.uniforms.uOpacity.value=0,i.uniforms.uIridescence.value=S.iridescence,i.uniforms.uHighlight.value=S.bubbleHighlight,i.uniforms.uSeed.value=Math.random()*30;let c=Q(wt);c&&(c.active=!0,c.age=0,c.life=i.life,c.mesh.visible=!0,c.mesh.position.set(e,.012,t),c.mesh.scale.setScalar(o*.31),c.mesh.material.opacity=0)}function Wt(){let e=T(),t=Math.random()<d.clamp(S.largeDropChance+e.largeDropAdd,0,.48)?d.randFloat(1.05,1.68):d.randFloat(.38,1.03),n=d.randFloat(.82,1.24),r=d.randFloat(-.06,.02)*S.dropVariation,i=t*n*n,a=`needle`;return i>.72&&(a=`crown`),i>1.34&&(a=`bloom`),{mass:t,speed:n,angle:r,energy:i,type:a}}function Gt(e=1,t=null,n=`world`){let r=T(),i=0,a=0,o=null,s=n!==`world`;for(let e=0;e<(s?8:4);e++){a=s?d.randFloat(-7.2,-1):d.randFloat(-12.5,3);let t=s?d.mapLinear(a,-7.2,-1,5.8,3.2):d.mapLinear(a,-12.5,3,12,7.4);if(i=d.randFloatSpread(t*2),o=me(i,a),o.depth>(s?.24:.16)||e===(s?7:3))break}let c=Wt(),l=d.lerp(.3,1.08,d.clamp(o.depth*1.25,0,1)),u=d.clamp(c.energy*r.impactMul*e*l,.18,2.35),f=t||c.type;if(t||(f=o.deep>.3&&u>1.48?`bloom`:o.shallow>.3&&u>.76?`crown`:`needle`),Lt(i,a,u,(f===`bloom`?.82:f===`crown`?.43:.14)*r.flashMul),Rt(i,a,u*r.rippleMul,o.depth),o.film>.18){let e=d.clamp(.24+o.shallow*.58+o.deep*.34,0,1);Math.random()<e&&Ht(i,a,u,f);let t=d.clamp(.1+o.film*.18+o.shallow*.66+o.deep*.34,0,1);o.film>.22&&Pt(i,a,u*(.55+.45*o.depth),t)}}let Kt=[{source:[-10.5,3.2,-15],target:[-6,.25,-3.8],width:9.8,color:10997726,kind:`nearCool`},{source:[-6.8,2.4,-21.5],target:[-3.5,.18,-5],width:11.6,color:10470869,kind:`midCool`},{source:[-1,2.2,-24],target:[-.4,.12,-6.2],width:12,color:14017513,kind:`midSilver`},{source:[5.7,2.8,-21],target:[2.8,.18,-5],width:11.8,color:14780983,kind:`midWarm`},{source:[9.3,3,-26],target:[4.8,.18,-5.8],width:12.8,color:15703369,kind:`farWarm`},{source:[-3,5.1,-31],target:[-2,1.5,-9],width:10.6,color:12179685,kind:`highCool`},{source:[4.2,5.7,-32],target:[3,1.7,-9.4],width:11.2,color:14412013,kind:`highSilver`}];function qt(e){switch(e){case`nearCool`:return .22*S.urbanCool*S.lightVolumeNear;case`midCool`:return .3*S.urbanCool*S.lightVolumeMid;case`midSilver`:return .22*S.lightVolumeMid;case`midWarm`:return .42*S.urbanOrange*S.lightVolumeMid;case`farWarm`:return .54*S.urbanOrange*S.lightVolumeFar;case`highCool`:return .24*S.urbanCool*S.highRainScatter*S.highLightStrength*S.lightVolumeFar;case`highSilver`:return .22*S.highRainScatter*S.highLightStrength*S.lightVolumeFar;default:return 0}}function Jt(e,t){Z.uTime.value=e,Z.uRainDepthContrast.value=S.rainDepthContrast,Z.uOpacity.value=S.rainOpacity*d.clamp(.92+(t.rainDensityMul-1)*.12,.82,1.14),Z.uRainLight.value=S.rainLightResponse*S.urbanRainLight*S.diffuseRain*(1+t.highlightAdd*.07),Z.uRainLayer.value=S.rainLayer,Z.uAtmos.value=S.atmosphereStrength,Z.uCameraPos.value.copy(h.position),h.updateMatrixWorld(),Z.uCameraRight.value.setFromMatrixColumn(h.matrixWorld,0).normalize();for(let e=0;e<7;e++){let t=Kt[e];ct[e].set(t.source[0],t.source[1],t.source[2]),lt[e].set(t.target[0],t.target[1],t.target[2]),dt[e]=t.width*S.urbanPoolWidth*S.lightVolumeSpread*S.urbanDomainWidth,ft[e]=qt(t.kind)*S.urbanPoolRain*S.urbanPoolStrength*S.diffuseRain*S.urbanLightStrength*S.urbanFogScatter,ut[e].setHex(t.color)}}function Yt(e,t){let n=T();for(let r=0;r<mt;r++){let i=r*6,a=r*3,o=S.rainSpeed*n.rainSpeedMul,s=o*Ke[r]*e,c=ye((q[i]+q[i+3])*.5,(q[i+2]+q[i+5])*.5,t,C.motion,rt),l=d.clamp(Je[r]+c.x*.74,-.145,.055),u=(2.25+Ke[r]*1.25)*tt[r],f=1-Math.exp(-u*e);Y[r]=d.lerp(Y[r],l,f);let p=Y[r]*s*.72,m=c.z*s*.1;q[i+1]-=s,q[i+4]-=s,q[i]+=p,q[i+3]+=p,q[i+2]+=m,q[i+5]+=m;let h=nt[r],g=h===0?.64:h===1?1:1.18,_=.0305*d.lerp(.88,1.12,S.streakVariation),v=1+Math.min(Math.abs(c.gust),1.5)*.11*S.rainWindStrength,y=d.clamp(o*Ke[r]*_*g*v,.07,.68);if(Ye[r]=d.lerp(Ye[r],y,1-Math.exp(-5*e)),et[r]=Y[r],q[i+4]<.015){if(Math.random()<.055){let e=q[i],t=q[i+2],a=d.clamp(qe[r]*n.impactMul,.24,1.95);if(Math.abs(e)<13.2&&t>-14.5&&t<4.5){let r=me(e,t),i=d.lerp(.2,1,r.depth);Lt(e,t,a*.58*i,.14*n.flashMul*i),r.film>.16&&Rt(e,t,a*.62*n.rippleMul*i,r.depth),r.film>.12&&a>1.15&&Math.random()<.05+.14*r.shallow&&Bt(e,t,a*.5*i)}}ot(r,!1)}J[a]=(q[i]+q[i+3])*.5,J[a+1]=(q[i+1]+q[i+4])*.5,J[a+2]=(q[i+2]+q[i+5])*.5}X.attributes.iHead.needsUpdate=!0,X.attributes.iLength.needsUpdate=!0,X.attributes.iAngle.needsUpdate=!0,it&&=(X.attributes.iWidth.needsUpdate=!0,X.attributes.iEnergy.needsUpdate=!0,X.attributes.iSeed.needsUpdate=!0,X.attributes.iRole.needsUpdate=!0,!1),Jt(t,n)}function Xt(e){for(let t of bt){if(!t.active||(t.age+=e,t.age<0))continue;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=(.03+(1-(1-n)**2.05)*S.rippleSize)*t.scale,i=1+.012*Math.sin(t.age*3.7+t.phase);t.mesh.scale.set(r*t.aspect*i,r,r/t.aspect*(2-i));let a=Math.min(1,n/.1),o=.82+.18*Math.sin(n*Math.PI*2+t.phase);t.mesh.material.opacity=.3*S.visibleRippleStrength*a*(1-n)**1.38*o,t.mesh.rotation.y+=e*.08}}function Zt(e,t){let n=T();for(let r of Ct){if(!r.active)continue;r.age+=e;let i=r.age/r.life;if(r.uniforms.uTime.value=t,r.uniforms.uIridescence.value=S.iridescence,r.uniforms.uHighlight.value=S.bubbleHighlight+n.highlightAdd,i>=1){r.popTriggered||(r.popTriggered=!0,Lt(r.mesh.position.x,r.mesh.position.z,d.clamp(r.size*2.3,.12,.38),.05),r.size>.15&&Math.random()<.18&&zt(r.mesh.position.x,r.mesh.position.z,.22,d.randInt(2,4),.65)),r.active=!1,r.mesh.visible=!1;continue}let a=Math.min(1,i/.17),o=a*a*(3-2*a),s=1;i>.93&&(s=1-(i-.93)/.07*.16),r.disturbance*=.955**(e*60);let c=r.disturbance,l=.006+(S.bubbleWobble+n.bubbleWobbleAdd)*.022+c*.055,u=Math.sin(t*(4.7+S.bubbleWobble*6.5)+r.uniforms.uSeed.value+r.disturbPhase)*l,f=Math.cos(t*5.8+r.uniforms.uSeed.value*.71)*c*.026;r.mesh.scale.set(r.size*o*(1+u+f)*s,r.size*.57*o*(1-u*.72)*s,r.size*o*(1-u*.55-f)*s),r.mesh.rotation.z=f*.22,r.waterTimer-=e,r.waterTimer<=0&&(r.waterState=me(r.mesh.position.x,r.mesh.position.z),r.waterTimer=.12+Math.random()*.06);let p=r.waterState,m=d.clamp(p.shallow*.78+p.deep*.42,0,1),h=(.01+.016*Math.min(1,r.size/.16))*S.bubbleDrift*m;r.mesh.position.x+=r.flowX*h*e,r.mesh.position.z+=r.flowZ*h*e;let g=Math.min(1,i/.1),_=i>.975?1-(i-.975)/.025:1;r.uniforms.uOpacity.value=g*_}for(let t of wt){if(!t.active)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=Math.min(1,n/.11)*(n>.92?1-(n-.92)/.08:1);t.mesh.material.opacity=.06*r}}function Qt(e){for(let t of At){if(!t.active)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=Math.sin(Math.PI*Math.min(n,1));t.mesh.scale.y=t.size*(1+r*2.4),t.mesh.material.opacity=.28*Math.sin(Math.PI*n)}for(let t of Ot){if(!t.active)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=1-(1-Math.min(n/.58,1))**2,i=n>.58?1-(n-.58)/.42:1;t.mode===`bloom`?t.mesh.scale.set(t.size*(.48+r*1.45),t.size*(.22+r*.92)*i,t.size*(.48+r*1.45)):t.mesh.scale.set(t.size*(.45+r*.88),t.size*(.28+r*1.65)*i,t.size*(.45+r*.88)),t.mesh.material.opacity=(t.mode===`bloom`?.28:.34)*Math.sin(Math.PI*n)}for(let t of Nt)if(t.active){if(t.age+=e,t.age>=t.life||t.mesh.position.y<.012){t.mesh.position.y<.012&&t.energy>.85&&Math.random()<.18&&Lt(t.mesh.position.x,t.mesh.position.z,t.energy*.12,.02),t.active=!1,t.mesh.visible=!1;continue}t.v.y-=4.9*e,t.mesh.position.addScaledVector(t.v,e),t.mesh.scale.setScalar(.55+.45*(1-t.age/t.life))}}let $t=0;function en(e,t){let n=T();for(vt(n),k.uTime.value=t,k.uTension.value=S.surfaceTension,k.uImpactDepth.value=S.impactDepth*n.impactMul,k.uInterference.value=S.interference*n.interferenceMul,k.uRippleSize.value=S.rippleSize*n.rippleMul,k.uRippleLife.value=S.rippleLife,k.uSurfaceRipple.value=S.surfaceRipple*n.rippleMul,k.uMotion.value=S.surfaceMotion*n.motionMul,k.uReflect.value=S.reflectionStrength,k.uPuddleAmount.value=S.puddleAmount,k.uPuddleDepth.value=S.puddleDepth,k.uRoadRoughness.value=S.roadRoughness,k.uReflectionStretch.value=S.reflectionStretch,k.uDetail.value=S.detailStrength,k.uSilver.value=S.silverStrength,k.uWetEdge.value=S.wetEdgeStrength,k.uLightField.value=S.lightFieldStrength,k.uSpecContrast.value=S.specularContrast,k.uRainlight.value=S.rainlightDistortion,k.uRecovery.value=S.highlightRecovery,k.uLightFlow.value=S.directionalFlow,k.uDistanceDetail.value=S.distanceDetail,k.uMicroFlow.value=S.microFlowStrength,k.uLayerSeparation.value=S.layerSeparation,k.uEdgeMeniscus.value=S.edgeMeniscus,k.uTransitionSoftness.value=S.transitionSoftness,k.uSubsurfaceAsphalt.value=S.subsurfaceAsphalt,k.uEdgeIrregularity.value=S.edgeIrregularity,k.uWaterActivity.value=S.waterActivity*(1+C.motion*.12*S.audioAmount),k.uFlowSense.value=S.flowSense,k.uDepthResponse.value=S.depthResponse,k.uDeepSmoothness.value=S.deepSmoothness,k.uRippleLod.value=S.rippleLod,k.uShaderDetailLod.value=S.shaderDetailLod,k.uAtmosCouple.value=S.atmosphereStrength*(S.shaftStrength+S.urbanLightStrength*.22),k.uAtmosDirection.value=S.lightDirection,k.uUrbanLight.value=S.urbanLightStrength,k.uUrbanWarm.value=S.urbanWarmth,k.uUrbanReflection.value=S.urbanReflection,k.uUrbanOrange.value=S.urbanOrange,k.uUrbanCool.value=S.urbanCool,k.uUrbanCoolReflection.value=S.urbanCoolReflection,k.uPoolStrength.value=S.urbanPoolStrength,k.uPoolWidth.value=S.urbanPoolWidth,k.uPoolReflection.value=S.urbanPoolReflection,k.uWaterDynamics.value=S.waterDynamics,k.uPuddleRippleStrength.value=S.puddleRippleStrength,k.uWarm.value=S.warmReflection,$t+=e*S.impactRate*n.rainRateMul;$t>=1;)Gt(),--$t;let r=C.beat>.34&&C.prevBeat<=.34,i=C.downbeat>.22&&C.prevDownbeat<=.22;S.audioEnabled&&C.playing&&C.eventCooldown<=0&&(i?(Gt(1.18+C.bassPunch*.42,`bloom`,`accent`),C.eventCooldown=.1):r&&(C.kick>.28||C.snare>.36)&&(Gt((C.kick>=C.snare?1.1:1.02)+C.impact*.24,`crown`,`accent`),C.eventCooldown=.065)),C.prevBeat=C.beat,C.prevDownbeat=C.downbeat,Yt(e,t),We(e,t,n),Ft(e),Xt(e),Zt(e,t),Qt(e)}function tn(){$t=0,O=0,$.length=0;for(let e=0;e<24;e++)oe[e].set(999,999),se[e]=-1e6,ce[e]=0,E[e]=0,D[e]=0;let e=e=>{for(let t of e)t.active=!1,t.age=0,t.mesh&&(t.mesh.visible=!1,t.mesh.material&&`opacity`in t.mesh.material&&(t.mesh.material.opacity=0))};e(bt),e(Ct),e(wt),e(At),e(Ot),e(Nt);for(let e=0;e<K;e++)ot(e,!0);for(let e=0;e<9;e++)Re(e,!0);it=!0,vt()}function nn(e){I.uniforms.uExternalBackground.value=+!!e}return{frame:en,resetRuntimeState:tn,setExternalBackgroundEnabled:nn,applyQuality:yt,applyBloomStrength:_t,updateVisibleRainCount:vt,wetUniforms:k,rainUniforms:Z}}setupGUI(){this.createGUIContainer(),this.gui=new D({title:`65. 霓虹雨幕`,container:this.guiContainer});let e=this.gui.addFolder(`音频`);e.add(this.settings,`audioEnabled`).name(`启用音频驱动`),e.add(this.settings,`audioAmount`,0,1.6,.01).name(`音乐响应`),e.add(this.settings,`audioDynamics`,0,1.6,.01).name(`动态幅度`),e.add(this.settings,`audioRhythm`,0,1.8,.01).name(`节奏冲击`),e=this.gui.addFolder(`雨`),e.add(this.settings,`impactRate`,8,64,1).name(`基础雨量`).onChange(()=>this.runtime?.updateVisibleRainCount()),e.add(this.settings,`rainDensity`,.45,1.65,.01).name(`雨幕密度`).onChange(()=>this.runtime?.updateVisibleRainCount()),e.add(this.settings,`rainOpacity`,.08,.48,.01).name(`雨幕亮度`),e.add(this.settings,`rainWindStrength`,0,1.35,.01).name(`风场强度`),e.add(this.settings,`rainDepthContrast`,0,1.5,.01).name(`雨幕纵深`),e.add(this.settings,`cameraRainStrength`,0,.35,.01).name(`镜头近雨`),e=this.gui.addFolder(`积水`),e.add(this.settings,`waterActivity`,0,2.5,.01).name(`水面活性`),e.add(this.settings,`puddleAmount`,0,2,.01).name(`积水覆盖`),e.add(this.settings,`puddleDepth`,.2,2.8,.01).name(`积水深度`),e.add(this.settings,`waterDynamics`,0,2.4,.01).name(`水膜扰动`),e.add(this.settings,`puddleRippleStrength`,.35,5.2,.01).name(`雨滴波纹`),e.add(this.settings,`flowSense`,0,2.5,.01).name(`流动感`),e=this.gui.addFolder(`路面与反射`),e.add(this.settings,`roadRoughness`,.25,1.8,.01).name(`路面粗糙度`),e.add(this.settings,`detailStrength`,.65,1.45,.01).name(`材质细节`),e.add(this.settings,`reflectionStrength`,.45,1.8,.01).name(`反射强度`),e.add(this.settings,`reflectionStretch`,.45,1.8,.01).name(`反射拉伸`),e.add(this.settings,`warmReflection`,0,3,.01).name(`暖色倒影`),e=this.gui.addFolder(`泡泡`),e.add(this.settings,`bubbleFrequency`,0,2.5,.01).name(`泡泡频率`),e.add(this.settings,`bubbleScale`,.65,1.45,.01).name(`泡泡尺寸`),e.add(this.settings,`bubbleLife`,.8,2.8,.05).name(`泡泡寿命`),e=this.gui.addFolder(`3D城市灯光`),e.add(this.settings,`urbanLightStrength`,0,1.6,.01).name(`灯光强度`),e.add(this.settings,`urbanOrange`,0,1.8,.01).name(`暖橙光`),e.add(this.settings,`urbanCool`,0,1.4,.01).name(`冷白光`),e.add(this.settings,`urbanBokeh`,.8,5.8,.01).name(`远灯尺寸`),e.add(this.settings,`urbanCorePresence`,0,.4,.002).name(`灯芯亮度`),e.add(this.settings,`lightVolumeDepth`,0,1.4,.01).name(`空间纵深`),e.add(this.settings,`urbanFogScatter`,0,1.8,.01).name(`光雾扩散`),e=this.gui.addFolder(`环境`),e.add(this.settings,`atmosphereStrength`,0,1.35,.01).name(`空气厚度`),e.add(this.settings,`farBrightness`,.25,1.5,.01).name(`远景亮度`),e.add(this.settings,`horizonMist`,0,1.6,.01).name(`地平线湿雾`),e.add(this.settings,`stormDepth`,0,1.5,.01).name(`风暴层次`),e=this.gui.addFolder(`画面`),e.add(this.settings,`bloom`,0,.65,.01).name(`Bloom`).onChange(()=>this.runtime?.applyBloomStrength()),e.add(this.settings,`exposure`,.5,3,.01).name(`曝光`).onChange(()=>this._applyOutputExposure()),e=this.gui.addFolder(`性能`),e.add(this.settings,`qualityMode`,[`高画质`,`平衡`,`性能`]).name(`质量档位`).onChange(e=>this.runtime?.applyQuality(e)),this.gui.hide()}createGUIContainer(){this.guiContainer=le(`Animation65-gui-container`),ue(`Animation65-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=O(`Animation65-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide()}),document.body.appendChild(this.settingsButton)}updateWithAudioData(e,t){let n=e?.audioFeature?.animation;this.hasAudioData=!!n&&e?.isPlaying===!0,this.a=n||null}_smooth(e,t,n,r=9,i=3){let a=t>e?r:i;return e+(t-e)*(1-Math.exp(-a*n))}updateAudioAnalysis(e){let t=this.audioState,n=this.a;if(!this.settings.audioEnabled||!this.hasAudioData||!n){for(let n of[`energy`,`bass`,`mid`,`high`,`motion`,`brightness`,`variation`,`impact`,`bassPunch`,`sectionEnergy`,`kick`,`snare`,`hihat`,`beat`,`downbeat`])t[n]=this._smooth(t[n],0,e,8,2.6);t.relativeEnergy=this._smooth(t.relativeEnergy,.5,e,6,2.2),t.energyBaseline=this._smooth(t.energyBaseline,.18,e,.35,.35),t.ready=!1,t.playing=!1,t.eventCooldown=Math.max(0,t.eventCooldown-e);return}t.ready=!0,t.playing=!0;for(let r of[`energy`,`bass`,`mid`,`high`,`motion`,`brightness`,`variation`]){let i=Number.isFinite(n[r])?n[r]:void 0;i===void 0&&(i=0),t[r]=this._smooth(t[r],i,e,10,3.5)}t.kick=Number.isFinite(n.kick)?n.kick:0,t.snare=Number.isFinite(n.snare)?n.snare:0,t.hihat=Number.isFinite(n.hihat)?n.hihat:0,t.downbeat=Number.isFinite(n.downbeat)?n.downbeat:+!!n.isDownbeat,t.beat=Number.isFinite(n.beat)?n.beat:Math.max(t.kick,t.snare,t.hihat*.7),t.energyBaseline=this._smooth(t.energyBaseline,t.energy,e,.28,.18);let r=d.clamp(.5+(t.energy-t.energyBaseline)*1.9,0,1);t.relativeEnergy=this._smooth(t.relativeEnergy,r,e,2.8,1.25);let i=d.clamp((t.relativeEnergy-.5)*2,0,1),a=d.clamp(t.energy*.78+i*.22,0,1);t.sectionEnergy=this._smooth(t.sectionEnergy,a,e,.85,.32);let o=Number.isFinite(n.percussive)?n.percussive:t.beat;t.impact=this._smooth(t.impact,o,e,24,7.5),t.bassPunch=this._smooth(t.bassPunch,Math.max(t.kick,t.bass*o),e,28,8),t.eventCooldown=Math.max(0,t.eventCooldown-e)}render(){if(!(!this.scene||!this.camera||!this.renderer||!this.controls||!this.runtime))try{let e=performance.now()*.001,t=Math.min(.033,Math.max(.001,e-this.lastTime));this.lastTime=e,this.elapsed+=t,this.updateAudioAnalysis(t),this.runtime.frame(t,this.elapsed),this._syncGroundDistortion(t),this.controls.update(),this.composer.render()}catch(e){console.error(`Animation65 渲染错误:`,e)}}onWindowResize(){if(!this.camera||!this.renderer||!this.composer)return;let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.groundFluid?.resize(e,t)}resetState({resetCamera:e=!0}={}){this.hasAudioData=!1,this.a=null,this.elapsed=0,this.lastTime=performance.now()*.001,Object.assign(this.audioState,{ready:!1,playing:!1,energy:0,bass:0,mid:0,high:0,motion:0,brightness:0,variation:0,relativeEnergy:.5,impact:0,bassPunch:0,sectionEnergy:0,energyBaseline:.18,kick:0,snare:0,hihat:0,beat:0,downbeat:0,prevBeat:0,prevDownbeat:0,eventCooldown:0}),e&&this.camera&&this.controls&&(this.controls.reset(),this.controls.update()),this.bloomPass&&(this.bloomPass.strength=this.settings.bloom*this._qualityBloomScale(this.settings.qualityMode),this.bloomPass.radius=.32,this.bloomPass.threshold=.9),this._applyOutputExposure(),this.runtime&&(this.runtime.resetRuntimeState(),this.runtime.applyQuality(this.settings.qualityMode),this.runtime.applyBloomStrength(),this.runtime.updateVisibleRainCount())}resetGuiCamera(){!this.camera||!this.controls||(this.camera.position.set(0,.92,7),this.controls.target.set(0,.035,-2.9),this.controls.update())}updateSettings(e={}){Object.assign(this.settings,e),this.runtime&&(this.runtime.applyQuality(this.settings.qualityMode),this.runtime.applyBloomStrength(),this.runtime.updateVisibleRainCount()),this._applyOutputExposure()}setEffectMode(){}setExternalBackgroundEnabled(e){this.externalBackgroundEnabled=!!e,this.runtime?.setExternalBackgroundEnabled(this.externalBackgroundEnabled)}getAudioDataForUI(){return{bass:this.audioState.bass,mid:this.audioState.mid,high:this.audioState.high,energy:this.audioState.energy,motion:this.audioState.motion,brightness:this.audioState.brightness,kick:this.audioState.kick,snare:this.audioState.snare,hihat:this.audioState.hihat,downbeat:this.audioState.downbeat}}playAudio(){}pauseAudio(){}dispose(){if(!this.isDisposed){if(this.isDisposed=!0,this.localFlowCompositionActive&&(this.localFlowCompositionActive=!1,E(!1)),k(this.settingsButton,this.guiContainer,this.gui),this.controls&&this.controls.dispose(),this.scene){let e=new Set,t=new Set,n=new Set;this.scene.traverse(r=>{r.geometry&&!e.has(r.geometry)&&(e.add(r.geometry),r.geometry.dispose());let i=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(let e of i)if(!(!e||t.has(e))){t.add(e);for(let t of Object.keys(e)){let r=e[t];r?.isTexture&&!n.has(r)&&(n.add(r),r.dispose())}if(e.uniforms)for(let t of Object.values(e.uniforms)){let e=t?.value;e?.isTexture&&!n.has(e)&&(n.add(e),e.dispose())}e.dispose()}})}if(this.composer){for(let e of this.composer.passes||[])typeof e.dispose==`function`&&e.dispose();typeof this.composer.dispose==`function`&&this.composer.dispose()}this.detachGroundFluidPointer?.(),this.detachGroundFluidPointer=null,this.groundFluid?.dispose(),this.groundFluid=null,this.groundDistortions=null,this.activeGroundDistortion=null,this.groundFluidConfigKey=``,this.renderer&&this.renderer.dispose(),this.runtime=null,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.composer=null,this.bloomPass=null,this.gui=null,this.guiContainer=null,this.settingsButton=null}}};export{A as default};