import{At as e,Fr as t,Jt as n,Kt as r,Nr as i,er as a,m as o,nr as s,r as c,rr as l,vt as u}from"./three.module-CI1jJgD_.js";import{a as d,i as f,n as ee,r as te,t as ne}from"./GUIHelper-DNd0uFVI.js";var p=class{static globalBackgroundPolicy=`independent`;constructor(p,re={}){this.canvas=p,this.globalBackgroundPolicy=`independent`;let m=this.guiContainer=te(`Animation62-gui-container`),ie=this.scrollbarStyle=ne(m.id);ie.textContent+=`#${m.id} #Animation62-thumbs { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; max-height:145px; overflow:auto; } #${m.id} .thumb { height:44px; padding:0; border:2px solid transparent; opacity:.65; cursor:pointer; } #${m.id} .thumb.selected { border-color:#d5b7fa; opacity:1; } #${m.id} .thumb img { width:100%; height:100%; object-fit:cover; } #${m.id} [role=status] { font-size:11px; padding:6px; }`,document.body.append(m);let h=e=>m.querySelector(`#Animation62-${e}`),g=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),_={x:.5,y:.5},v=[],y=[[`fadeCurve`,`淡化曲线`,1,.3,3,.05,[`fade`]],[`slideSoftness`,`滑动接缝柔度`,.005,.001,.08,.001,[`slide`]],[`focusBlur`,`焦点模糊半径 / px`,10,0,50,1,[`focus`]],[`flowAmplitude`,`流动幅度`,.009,0,.05,.001,[`flow`]],[`flowFrequency`,`流动纹理频率`,18,4,40,1,[`flow`]],[`radialSoftness`,`径向柔边宽度`,.06,.005,.2,.005,[`radial`]],[`depthBlur`,`景深模糊半径 / px`,8,0,40,1,[`depth`]],[`depthZoom`,`景深穿越幅度`,.13,0,.3,.005,[`depth`]],[`glowBrightness`,`柔光亮度`,.15,0,.5,.01,[`light`]],[`glowSpread`,`柔光集中程度`,3.8,1,10,.1,[`light`]],[`dragBlur`,`拖影半径 / px`,22,0,80,1,[`blur`]],[`dragOffset`,`拖影偏移`,.012,0,.06,.001,[`blur`]],[`layerCount`,`错位层数`,5,2,10,1,[`layers`]],[`layerDelay`,`层间延迟比例`,.055,0,.09,.005,[`layers`]],[`layerOffset`,`层偏移幅度`,.014,0,.08,.001,[`layers`]],[`contourSoftness`,`轮廓融合柔度`,.06,.005,.25,.005,[`contour`]],[`rippleAmplitude`,`涟漪位移幅度`,.008,0,.05,.001,[`ripple`]],[`rippleWidth`,`涟漪波环宽度`,.065,.01,.2,.005,[`ripple`]],[`rotateAngle`,`旋转角度 / 度`,1.49,0,12,.1,[`rotate`]],[`rotateZoom`,`旋转附加缩放`,.035,0,.2,.005,[`rotate`]],[`foldWidth`,`折页宽度`,.085,.01,.25,.005,[`fold`]],[`foldBend`,`折页弯曲幅度`,.035,0,.12,.005,[`fold`]],[`foldShadow`,`折页阴影强度`,.18,0,.6,.01,[`fold`]],[`grainSize`,`颗粒大小 / px`,2,1,16,1,[`grain`]],[`grainContrast`,`颗粒亮度差`,.035,0,.2,.005,[`grain`]],[`inkScale`,`渗透纹理密度`,4,1,12,.1,[`ink`]],[`inkSoftness`,`渗透融合柔度`,.14,.01,.3,.005,[`ink`]],[`colorSoftness`,`相似色融合柔度`,.07,.005,.25,.005,[`colorMatch`]],[`compositionZoom`,`主体对齐附加缩放`,.04,0,.2,.005,[`composition`]],[`beamWidth`,`光带宽度`,.045,.005,.2,.005,[`beam`]],[`beamBrightness`,`光带亮度`,.2,0,.7,.01,[`beam`]],[`beamSlope`,`光带倾斜比例`,.25,0,.8,.01,[`beam`]],[`protectSoftness`,`主体保护边界柔度`,.07,.005,.25,.005,[`protect`]],[`bloomScale`,`墨迹纹理密度`,8,2,24,.5,[`inkBloom`]],[`bloomRoughness`,`墨迹边缘起伏`,.055,0,.12,.005,[`inkBloom`]],[`bloomSoftness`,`墨迹边缘柔度`,.085,.005,.25,.005,[`inkBloom`]]],ae=[[`photoBrightness`,`照片亮度`,1,.75,1.35,.01],[`saturation`,`照片饱和度`,1,0,2,.01],[`contrast`,`照片对比度`,1,.6,1.5,.01],[`temperature`,`照片色温`,0,-1,1,.01],[`exposure`,`场景曝光`,1,.7,1.4,.01]],oe=Object.freeze({...Object.fromEntries(ae.map(([e,,t])=>[e,t])),...Object.fromEntries(y.map(([e,,t])=>[e,t])),mode:`push`,fit:`cover`,sensitivity:1.15,transition:.4,transitionStrength:.5,audioModulation:!0,transitionDirection:`auto`,feather:.08,pushAmount:.06,motion:.45,animationEnabled:!0,animation:`breath`,radialX:.5,radialY:.5,shuffle:!1}),b=this.settings={...oe,...re};this.defaultSettings=oe,b.mode===`auto`&&(b.mode=`push`);let x,S,C,w,T,E,D,O,k={zoom:0,velocity:0,lightStart:-100,lightStrength:0},A=[],j=[],M=0,N=0,P=null,F=null,I=0,L=0,R=performance.now(),z=0,B=null,V=!1,H=!1,U={energy:0,onset:!1,onsetStrength:0},W=0,G=0,K=0;class se{constructor(){this.reset()}reset(){this.previous=0,this.armed=!0}update(e,t,n){let r=Math.max(0,Number.isFinite(e)?e:0),i=.08/Math.max(.5,n);if(!Number.isFinite(t)||t<.006)return this.previous=r,this.armed=!0,!1;r<=i*.4&&(this.armed=!0);let a=r>=i&&(this.armed||r-this.previous>=i*.5&&r>this.previous*1.35);return this.previous=r,a&&(this.armed=!1),a}}let q=new se;function J(e){h(`status`).textContent=e}function ce(){x=new c({antialias:!0,canvas:p,alpha:!1,powerPreference:`high-performance`}),x.setPixelRatio(Math.min(devicePixelRatio,1.5)),x.outputColorSpace=a,x.toneMapping=1,x.toneMappingExposure=b.exposure,x.setClearColor(592656),this.renderer=x,S=new s,C=new r(40,1,.1,100),C.position.z=5,w=new l({depthTest:!1,depthWrite:!1,uniforms:{photoBrightness:{value:b.photoBrightness},photoSaturation:{value:b.saturation},photoContrast:{value:b.contrast},photoTemperature:{value:b.temperature},...Object.fromEntries(y.map(([e])=>[e,{value:b[e]}])),texA:{value:null},texB:{value:null},aspectA:{value:1},aspectB:{value:1},screenAspect:{value:1},progress:{value:0},mode:{value:0},contain:{value:0},zoomA:{value:1},zoomB:{value:1},panA:{value:new i},panB:{value:new i},direction:{value:1},feather:{value:.08},pushAmount:{value:.06},effectStrength:{value:0},focalPoint:{value:new i(.5,.5)},subjectA:{value:new i(.5,.5)},subjectB:{value:new i(.5,.5)},pixelStep:{value:new i(1/innerWidth,1/innerHeight)},depthA:{value:null},depthB:{value:null},hasDepthA:{value:0},hasDepthB:{value:0},animMode:{value:0},animStrength:{value:0},animTime:{value:0},animEnergy:{value:0},lightAge:{value:100},lightStrength:{value:0},photoID_A:{value:0},photoID_B:{value:0},ripples:{value:[new t(0,0,-100,0),new t(0,0,-100,0),new t(0,0,-100,0),new t(0,0,-100,0)]},ripplePhoto:{value:[-1,-1,-1,-1]}},vertexShader:`varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
 uniform float ${y.map(([e])=>e).join(`,`)};
 uniform float photoBrightness,photoSaturation,photoContrast,photoTemperature;
 uniform sampler2D texA,texB; uniform float aspectA,aspectB,screenAspect,progress,mode,contain,zoomA,zoomB,direction,feather,pushAmount,effectStrength; uniform vec2 panA,panB,pixelStep,focalPoint,subjectA,subjectB;
 uniform sampler2D depthA,depthB;
 uniform float hasDepthA,hasDepthB,animMode,animStrength,animTime,animEnergy,lightAge,lightStrength,photoID_A,photoID_B;
 uniform vec4 ripples[4];uniform float ripplePhoto[4];varying vec2 vUv;
 vec4 photo(sampler2D tex,float aspect,vec2 uv,float zoom,vec2 pan){
 vec2 q=uv-.5;
 if(contain>.5){if(aspect>screenAspect)q.y*=aspect/screenAspect;else q.x*=screenAspect/aspect;}
 else {if(aspect>screenAspect)q.x*=screenAspect/aspect;else q.y*=aspect/screenAspect;}
 q=q/zoom+pan; vec2 p=q+.5; float inside=step(0.,p.x)*step(p.x,1.)*step(0.,p.y)*step(p.y,1.);
 vec4 c=texture2D(tex,clamp(p,0.,1.));
 // Linear-light photo adjustments: saturation, contrast and temperature.
 float luma=dot(c.rgb,vec3(.2126,.7152,.0722));
 c.rgb=mix(vec3(luma),c.rgb,photoSaturation);
 c.rgb=(c.rgb-.5)*photoContrast+.5;
 c.rgb*=vec3(1.+photoTemperature*.12,1.,1.-photoTemperature*.12);
 c.rgb=max(c.rgb,vec3(0.))*photoBrightness;
 return mix(vec4(.003,.004,.007,1.),c,inside);
 }
 // Nine taps, normalized weights. Clamp screen UV to avoid dark edge sampling.
 vec4 focused(sampler2D tex,float aspect,vec2 uv,float zoom,vec2 pan,float radius){
 vec2 d=pixelStep*radius;
 vec4 c=photo(tex,aspect,uv,zoom,pan)*.25;
 c+=photo(tex,aspect,clamp(uv+vec2(d.x,0.),0.,1.),zoom,pan)*.125;
 c+=photo(tex,aspect,clamp(uv-vec2(d.x,0.),0.,1.),zoom,pan)*.125;
 c+=photo(tex,aspect,clamp(uv+vec2(0.,d.y),0.,1.),zoom,pan)*.125;
 c+=photo(tex,aspect,clamp(uv-vec2(0.,d.y),0.,1.),zoom,pan)*.125;
 c+=photo(tex,aspect,clamp(uv+d*.7071,0.,1.),zoom,pan)*.0625;
 c+=photo(tex,aspect,clamp(uv-d*.7071,0.,1.),zoom,pan)*.0625;
 c+=photo(tex,aspect,clamp(uv+vec2(d.x,-d.y)*.7071,0.,1.),zoom,pan)*.0625;
 c+=photo(tex,aspect,clamp(uv+vec2(-d.x,d.y)*.7071,0.,1.),zoom,pan)*.0625;
 return c;
 }
 vec4 directionalBlur(sampler2D tex,float aspect,vec2 uv,float zoom,vec2 pan,vec2 axis,float radius){
 vec2 d=pixelStep*axis*(radius/3.);
 vec4 c=photo(tex,aspect,clamp(uv,0.,1.),zoom,pan)*.28;
 c+=photo(tex,aspect,clamp(uv+d,0.,1.),zoom,pan)*.20;
 c+=photo(tex,aspect,clamp(uv-d,0.,1.),zoom,pan)*.20;
 c+=photo(tex,aspect,clamp(uv+d*2.,0.,1.),zoom,pan)*.11;
 c+=photo(tex,aspect,clamp(uv-d*2.,0.,1.),zoom,pan)*.11;
 c+=photo(tex,aspect,clamp(uv+d*3.,0.,1.),zoom,pan)*.05;
 c+=photo(tex,aspect,clamp(uv-d*3.,0.,1.),zoom,pan)*.05;
 return c;
 }
 float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
 float smoothNoise(vec2 p){
 vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.,1.)),f.x),f.y);
 }
 vec2 rotatedUV(vec2 uv,float angle){
 vec2 q=(uv-.5)*vec2(screenAspect,1.);float c=cos(angle),s=sin(angle);
 return .5+mat2(c,-s,s,c)*q/vec2(screenAspect,1.);
 }
 float rotationCover(float angle){return max(1.,cos(angle)+abs(sin(angle))*max(screenAspect,1./screenAspect));}
 float alignmentScale(vec2 focus,vec2 anchor){
 vec2 lo=anchor/max(focus,vec2(.01)),hi=(1.-anchor)/max(1.-focus,vec2(.01));
 return max(1.,max(max(lo.x,lo.y),max(hi.x,hi.y)));
 }
 vec2 animatedUV(vec2 uv,float slot,float zoom,vec2 pan,float aspect){
 vec2 subject=slot<.5?subjectA:subjectB;
 vec2 metric=vec2(screenAspect,1.);
 float border=smoothstep(0.,.12,uv.x)*smoothstep(0.,.12,1.-uv.x)*smoothstep(0.,.12,uv.y)*smoothstep(0.,.12,1.-uv.y);
 if(animMode>3.5){
 float enabled=slot<.5?hasDepthA:hasDepthB;
 vec2 q=uv-.5;
 if(contain>.5){if(aspect>screenAspect)q.y*=aspect/screenAspect;else q.x*=screenAspect/aspect;}
 else{if(aspect>screenAspect)q.x*=screenAspect/aspect;else q.y*=aspect/screenAspect;}
 vec2 nativeUV=clamp(q/zoom+pan+.5,0.,1.);
 float depth=slot<.5?texture2D(depthA,nativeUV).r:texture2D(depthB,nativeUV).r;
 vec2 orbit=vec2(sin(animTime*.32),cos(animTime*.26));
 uv+=orbit*(depth-.5)*.026*animStrength*animEnergy*enabled*border;
 }
 else if(animMode>2.5){
 float id=slot<.5?photoID_A:photoID_B;
 for(int i=0;i<4;i++){
 float age=animTime-ripples[i].z;
 if(age>=0.&&age<2.8&&abs(id-ripplePhoto[i])<.5){
 vec2 q=(uv-ripples[i].xy)*metric;float d=length(q),radius=age*.38;
 float ring=exp(-pow((d-radius)/.055,2.))*sin((d-radius)*65.);
 uv+=q/max(d,.001)/metric*ring*.012*ripples[i].w*animStrength*exp(-age*1.1)*border;
 }
 }
 }
 else if(animMode>1.5){
 float d=length((uv-subject)*metric);
 float outside=smoothstep(.18,.52,d);
 vec2 flow=vec2(sin(uv.y*12.+animTime*.65),cos(uv.x*10.-animTime*.52));
 uv+=flow*.010*animStrength*animEnergy*outside*border;
 }
 return clamp(uv,0.,1.);
 }
 void main(){float p=progress; vec2 a=animatedUV(vUv,0.,zoomA,panA,aspectA),b=animatedUV(vUv,1.,zoomB,panB,aspectB);float za=zoomA,zb=zoomB;
 // Every mode returns the unmodified outgoing/incoming photo at its endpoints.
 if(p<=0.)gl_FragColor=photo(texA,aspectA,a,za,panA);
 else if(p>=1.)gl_FragColor=photo(texB,aspectB,b,zb,panB);
 else if(mode>20.5){
 vec2 metric=vec2(screenAspect,1.);
 float margin=bloomSoftness+bloomRoughness*.5;
 float radius=mix(-margin,length(vec2(screenAspect,1.))/.65+margin,p);
 float field=10.;
 for(int i=0;i<5;i++){
 float f=float(i);
 vec2 center=vec2(.16+.68*hash21(vec2(f,17.)),.16+.68*hash21(vec2(f,53.)));
 float d=length((vUv-center)*metric)/(.65+.55*hash21(vec2(f,91.)));
 float rough=(smoothNoise(vUv*vec2(screenAspect,1.)*bloomScale+f*3.)-.5)*bloomRoughness;
 field=min(field,d+rough);
 }
 // Scale growth to viewport aspect so seeds also reach wide-screen corners.

 float reveal=1.-smoothstep(radius-bloomSoftness,radius+bloomSoftness,field);
 gl_FragColor=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 }
 else if(mode>19.5){
 vec2 metric=vec2(screenAspect,1.);
 float d=length((vUv-subjectA)*metric);
 float extent=length(max(subjectA,1.-subjectA)*metric);
 float radius=mix(extent+protectSoftness,-protectSoftness,p);
 float reveal=smoothstep(radius-protectSoftness,radius+protectSoftness,d);
 gl_FragColor=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 }
 else if(mode>18.5){
 float x=(direction>0.?vUv.x:1.-vUv.x)*(1.-beamSlope)+vUv.y*beamSlope;
 float edge=mix(-.09,1.09,p);
 float reveal=1.-smoothstep(edge-.06,edge+.06,x);
 vec4 c=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 float beam=exp(-pow((x-edge)/beamWidth,2.))*sin(3.14159265*p);
 c.rgb+=vec3(.9,.94,1.)*(1.-c.rgb)*beam*beamBrightness;
 gl_FragColor=c;
 }
 else if(mode>17.5){
 vec2 anchor=mix(subjectA,subjectB,p);
 float envelope=sin(3.14159265*p);
 float scaleA=alignmentScale(subjectA,anchor)+compositionZoom*envelope;
 float scaleB=alignmentScale(subjectB,anchor)+compositionZoom*envelope;
 vec2 alignedA=subjectA+(vUv-anchor)/scaleA,alignedB=subjectB+(vUv-anchor)/scaleB;
 gl_FragColor=mix(photo(texA,aspectA,alignedA,za,panA),photo(texB,aspectB,alignedB,zb,panB),p);
 }
 else if(mode>16.5){
 vec4 oldPhoto=photo(texA,aspectA,a,za,panA),newPhoto=photo(texB,aspectB,b,zb,panB);
 float similarity=1.-clamp(length(oldPhoto.rgb-newPhoto.rgb)/1.7320508,0.,1.);
 float threshold=mix(1.+colorSoftness,-colorSoftness,p);
 float reveal=smoothstep(threshold-colorSoftness,threshold+colorSoftness,similarity);
 gl_FragColor=mix(oldPhoto,newPhoto,reveal);
 }
 else if(mode>15.5){
 // Smooth, fixed organic field; no animated noise or flicker.
 vec2 field=vUv*vec2(screenAspect,1.)*inkScale;
 field+=vec2(smoothNoise(field*.7),smoothNoise(field*.7+19.))*1.6;
 float organic=.65*smoothNoise(field)+.25*smoothNoise(field*2.+8.)+.10*smoothNoise(field*4.+31.);
 vec4 oldPhoto=photo(texA,aspectA,a,za,panA),newPhoto=photo(texB,aspectB,b,zb,panB);
 float chroma=max(newPhoto.r,max(newPhoto.g,newPhoto.b))-min(newPhoto.r,min(newPhoto.g,newPhoto.b));
 float threshold=clamp(organic*.86+(1.-chroma)*.14,0.,1.);
 float reveal=smoothstep(threshold-inkSoftness,threshold+inkSoftness,mix(-inkSoftness,1.+inkSoftness,p));
 gl_FragColor=mix(oldPhoto,newPhoto,reveal);
 }
 else if(mode>14.5){
 float grain=hash21(floor(vUv/(pixelStep*grainSize)));
 float reveal=smoothstep(grain-.09,grain+.09,mix(-.09,1.09,p));
 vec4 c=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 c.rgb+=(grain-.5)*grainContrast*sin(3.14159265*p);
 gl_FragColor=vec4(clamp(c.rgb,0.,1.),1.);
 }
 else if(mode>13.5){
 float envelope=sin(3.14159265*p);
 float x=direction>0.?vUv.x:1.-vUv.x;
 float edge=mix(1.12,-.12,p)+foldBend*sin(vUv.y*3.14159265)*envelope;
 float width=foldWidth*envelope;
 float band=exp(-pow((x-edge)/max(width,.003),2.));
 float warped=x-foldBend*envelope*band;
 vec2 uv=vec2(direction>0.?warped:1.-warped,vUv.y);
 vec4 front=photo(texA,aspectA,clamp(uv,0.,1.),za,panA);
 front.rgb*=1.-.15*band*envelope;
 vec4 back=photo(texB,aspectB,b,zb,panB);
 float shadow=exp(-pow((x-edge-width*.6)/max(width,.008),2.))*foldShadow*envelope;
 back.rgb*=1.-shadow;
 float keep=1.-smoothstep(edge-.003,edge+.003,x);
 vec4 c=mix(back,front,keep);
 if(x>edge&&x<edge+width){
 float t=(x-edge)/max(width,.003);
 vec2 reverseUV=vec2(direction>0.?edge-(x-edge)*1.3:1.-edge+(x-edge)*1.3,vUv.y);
 vec4 paper=photo(texA,aspectA,clamp(reverseUV,0.,1.),za,panA);
 paper.rgb=mix(paper.rgb,vec3(.93,.91,.87),.78)*(1.-.16*sin(t*3.14159265));
 c=mix(c,paper,1.-smoothstep(.82,1.,t));
 }
 gl_FragColor=c;
 }
 else if(mode>12.5){
 float oldAngle=direction*radians(rotateAngle)*p,newAngle=-direction*radians(rotateAngle)*(1.-p);
 gl_FragColor=mix(photo(texA,aspectA,rotatedUV(a,oldAngle),za*rotationCover(oldAngle)*(1.+rotateZoom*p),panA),photo(texB,aspectB,rotatedUV(b,newAngle),zb*rotationCover(newAngle)*(1.+rotateZoom*(1.-p)),panB),p);
 }
 else if(mode>11.5){
 vec2 metric=vec2(screenAspect,1.);
 vec2 q=(vUv-focalPoint)*metric;
 float distanceToFocus=length(q);
 float extent=length(max(focalPoint,1.-focalPoint)*metric);
 float radius=mix(-.12,extent+.12,p);
 float ring=exp(-pow((distanceToFocus-radius)/rippleWidth,2.))*sin(3.14159265*p);
 float border=smoothstep(0.,.10,vUv.x)*smoothstep(0.,.10,1.-vUv.x)*smoothstep(0.,.10,vUv.y)*smoothstep(0.,.10,1.-vUv.y);
 vec2 displacement=(q/max(distanceToFocus,.001))/metric*ring*border*(rippleAmplitude*(1.+1.25*effectStrength));
 float reveal=1.-smoothstep(radius-.055,radius+.055,distanceToFocus);
 gl_FragColor=mix(photo(texA,aspectA,a+displacement,za,panA),photo(texB,aspectB,b-displacement,zb,panB),reveal);
 }
 else if(mode>10.5){
 vec4 oldPhoto=photo(texA,aspectA,a,za,panA);
 vec4 newPhoto=photo(texB,aspectB,b,zb,panB);
 // Incoming image luminance determines the order: highlights appear first.
 float luminance=dot(newPhoto.rgb,vec3(.2126,.7152,.0722));
 float softness=contourSoftness;
 float threshold=mix(1.+softness,-softness,p);
 float reveal=smoothstep(threshold-softness,threshold+softness,luminance);
 gl_FragColor=mix(oldPhoto,newPhoto,reveal);
 }
 else if(mode>9.5){
 float layer=min(layerCount-1.,floor(vUv.y*layerCount));
 // Alternate even/odd rows without duplicate delays for even layer counts.
 float order=mod(layer,2.)<.5?layer*.5:ceil(layerCount*.5)+floor(layer*.5);
 float t=clamp((p-order*layerDelay)/(1.-(layerCount-1.)*layerDelay),0.,1.);
 t=t*t*(3.-2.*t);
 float x=direction>0.?vUv.x:1.-vUv.x;
 float edge=mix(-.05,1.05,t);
 float reveal=1.-smoothstep(edge-.05,edge+.05,x);
 float envelope=4.*t*(1.-t);
 vec2 offset=vec2(direction*layerOffset*envelope,0.);
 gl_FragColor=mix(photo(texA,aspectA,clamp(a+offset,0.,1.),za,panA),photo(texB,aspectB,clamp(b-offset,0.,1.),zb,panB),reveal);
 }
 else if(mode>8.5){
 float envelope=sin(3.14159265*p);
 float radius=(dragBlur*(1.+.8181818*effectStrength))*envelope;
 vec2 axis=normalize(vec2(direction,.12));
 vec2 offset=axis*dragOffset*envelope;
 gl_FragColor=mix(directionalBlur(texA,aspectA,a+offset,za,panA,axis,radius),directionalBlur(texB,aspectB,b-offset,zb,panB,axis,radius),p);
 }
 else if(mode>7.5){
 vec2 q=(vUv-vec2(.5,.5))*vec2(screenAspect,1.);
 float light=exp(-dot(q,q)*glowSpread);
 float envelope=4.*p*(1.-p);
 float reveal=clamp(p+.13*light*envelope,0.,1.);
 vec4 c=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 c.rgb+=vec3(1.,.88,.74)*(1.-c.rgb)*light*envelope*(glowBrightness*(1.+.5333333*effectStrength));
 gl_FragColor=c;
 }
 else if(mode>6.5){
 float radius=depthBlur*(1.+.5*effectStrength);
 gl_FragColor=mix(focused(texA,aspectA,a,za*(1.+depthZoom*.5384615*p),panA,radius*p),focused(texB,aspectB,b,zb*(1.+depthZoom*(1.-p)),panB,radius*(1.-p)),p);
 }
 else if(mode>5.5){
 vec2 metric=vec2(screenAspect,1.);
 float d=length((vUv-focalPoint)*metric);
 vec2 reach=max(focalPoint,1.-focalPoint)*metric;
 float maxRadius=length(reach);
 float soft=radialSoftness;
 float radius=mix(-soft,maxRadius+soft,p);
 float reveal=1.-smoothstep(radius-soft,radius+soft,d);
 gl_FragColor=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 }
 else if(mode>4.5){
 float x=direction>0.?vUv.x:1.-vUv.x;
 float edge=mix(-feather,1.+feather,p);
 float local=exp(-pow((x-edge)/.22,2.))*sin(3.14159265*p);
 float border=smoothstep(0.,.12,vUv.x)*smoothstep(0.,.12,1.-vUv.x)*smoothstep(0.,.12,vUv.y)*smoothstep(0.,.12,1.-vUv.y);
 vec2 flow=vec2(sin(vUv.y*flowFrequency+p*5.),cos(vUv.x*flowFrequency*.7222222-p*4.))*(flowAmplitude*(1.+1.1111111*effectStrength))*local*border;
 float reveal=1.-smoothstep(edge-feather,edge+feather,x+flow.x*direction);
 gl_FragColor=mix(photo(texA,aspectA,a+flow,za,panA),photo(texB,aspectB,b-flow,zb,panB),reveal);
 }
 else if(mode>3.5){
 float radius=focusBlur*(1.+.6*effectStrength);
 gl_FragColor=mix(focused(texA,aspectA,a,za,panA,radius*sin(1.57079633*p)),focused(texB,aspectB,b,zb,panB,radius*sin(1.57079633*(1.-p))),p);
 }
 else if(mode>2.5){
 float x=direction>0.?vUv.x:1.-vUv.x;
 float edge=mix(-feather,1.+feather,p);
 float reveal=1.-smoothstep(edge-feather,edge+feather,x);
 gl_FragColor=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),reveal);
 }
 else if(mode>1.5){float seam=max(.000001,slideSoftness*sin(3.14159265*p));a.x+=p*direction;b.x-=(1.-p)*direction;float useB=direction>0.?smoothstep(1.-p-seam,1.-p+seam,vUv.x):1.-smoothstep(p-seam,p+seam,vUv.x);gl_FragColor=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),useB);}
 else {if(mode>.5){za*=1.+pushAmount*p;zb*=1.+pushAmount*(1.-p);}gl_FragColor=mix(photo(texA,aspectA,a,za,panA),photo(texB,aspectB,b,zb,panB),mode<.5?pow(p,fadeCurve):p);}
 if(animMode>.5&&animMode<1.5&&lightAge>=0.&&lightAge<3.5){
 float x=mix(-.4,1.4,lightAge/3.5);
 float sweep=exp(-pow((vUv.x+vUv.y*.15-x)/.22,2.));
 float envelope=sin(3.14159265*lightAge/3.5);
 gl_FragColor.rgb+=vec3(1.,.90,.77)*(1.-gl_FragColor.rgb)*sweep*envelope*.22*lightStrength*animStrength;
 }
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`}),T=new e(new n(1,1),w),S.add(T);let u=document.createElement(`canvas`);u.width=u.height=2;let d=u.getContext(`2d`);d.fillStyle=`#808080`,d.fillRect(0,0,2,2),O=new o(u),w.uniforms.depthA.value=w.uniforms.depthB.value=O,this.scene=S,this.camera=C,le()}function le(){if(!x)return;let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);x.setSize(e,t),C.aspect=e/t,C.updateProjectionMatrix();let n=10*Math.tan(40*Math.PI/360);T.scale.set(n*e/t,n,1),w.uniforms.screenAspect.value=e/t,w.uniforms.pixelStep.value.set(1/e,1/t)}function ue(e,t){let n=new o(e);return n.colorSpace=a,n.generateMipmaps=!1,n.minFilter=u,{texture:n,aspect:e.width/e.height,name:t,thumb:de(e),focus:{x:.5,y:.5},depth:null,depthGeneration:0}}function de(e){let t=document.createElement(`canvas`);return t.width=96,t.height=64,t.getContext(`2d`).drawImage(e,0,0,96,64),t.toDataURL(`image/jpeg`,.7)}function fe(e,t){let n=Math.min(1,Math.min(2048,x.capabilities.maxTextureSize)/Math.max(e.naturalWidth,e.naturalHeight)),r=document.createElement(`canvas`);return r.width=Math.max(1,Math.round(e.naturalWidth*n)),r.height=Math.max(1,Math.round(e.naturalHeight*n)),r.getContext(`2d`).drawImage(e,0,0,r.width,r.height),ue(r,t)}async function pe(){let e=++z,t=[],n=0;D.disable();try{for(let r=1;r<=8&&!(H||e!==z);r++){let i=`${String(r).padStart(3,`0`)}.png`;J(`正在读取示例照片 ${r} / 8`);try{let n=new Image;if(n.src=`/assets/visualizations/animation62/${i}`,await n.decode(),H||e!==z)break;t.push(fe(n,i))}catch{n++}}if(H||e!==z){t.forEach(e=>e.texture.dispose());return}me(t),J(t.length?`已载入 ${t.length} 张示例照片${n?`，${n} 张未能读取`:``}，使用系统播放器播放音乐。`:`示例图片未能读取，请选择本地照片。`)}finally{!H&&e===z&&D.enable()}}function me(e){if(!e.length)return;let t=j;j=e,P=null,F=null,I=0,M=N=0,k.zoom=k.velocity=0,k.lightStart=-100,w.uniforms.zoomA.value=w.uniforms.zoomB.value=1,w.uniforms.panA.value.set(0,0),w.uniforms.panB.value.set(0,0),he(),t.forEach(e=>{e.texture.dispose(),e.depth?.dispose()}),A=[]}function Y(){let e=j[M];if(!e)return;h(`depthStatus`)&&(h(`depthStatus`).textContent=e.depth?`当前照片：已关联深度图`:`当前照片：未关联深度图`),_.x=e.focus.x,_.y=e.focus.y,v.forEach(e=>e.updateDisplay());let t=w.uniforms;t.texA.value=t.texB.value=e.texture,t.aspectA.value=t.aspectB.value=e.aspect,t.progress.value=0,t.depthA.value=t.depthB.value=e.depth??O,t.hasDepthA.value=t.hasDepthB.value=+!!e.depth,t.photoID_A.value=t.photoID_B.value=M,t.subjectA.value.copy(Q(e,e.focus,t.zoomA.value,t.panA.value)),t.subjectB.value.copy(t.subjectA.value),h(`count`).textContent=`${M+1} / ${j.length}`,m.querySelectorAll(`.thumb`).forEach((e,t)=>{e.classList.toggle(`selected`,t===M),e.setAttribute(`aria-pressed`,t===M?`true`:`false`)})}function he(){h(`thumbs`).replaceChildren(),j.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`thumb`,n.title=e.name,n.setAttribute(`aria-label`,`显示 ${e.name}`);let r=document.createElement(`img`);r.src=e.thumb,r.alt=``,n.append(r),n.onclick=()=>Z(t,!0),h(`thumbs`).append(n)}),Y()}function X(e=1){if(!j.length)return 0;let t=F??(P?N:M);if(b.shuffle&&j.length>2){let e;do e=Math.floor(Math.random()*j.length);while(e===t);return e}return(t+e+j.length)%j.length}function Z(e,t=!1,n=0){if(j.length<2||!Number.isInteger(e)||!j[e])return;if(P){t&&(F=e,I=n);return}if(e===M)return;N=e;let r=b.audioModulation&&!t,i=r?g(U.onsetStrength/.6):0,a=g(b.transitionStrength+i*.5),o=b.mode===`auto`?`push`:b.mode;P={time:0,duration:Math.max(.18,b.transition*(r?1-.35*U.energy:1)),mode:{fade:0,push:1,slide:2,wipe:3,focus:4,flow:5,radial:6,depth:7,light:8,blur:9,layers:10,contour:11,ripple:12,rotate:13,fold:14,grain:15,ink:16,colorMatch:17,composition:18,beam:19,protect:20,inkBloom:21}[o],effectStrength:a,photoFocusA:{...j[M].focus},photoFocusB:{...j[N].focus},feather:Math.max(.005,b.feather*(1-.65*i)),pushAmount:b.pushAmount*(1+.6*i),direction:b.transitionDirection===`auto`?n||(N>=M?1:-1):Number(b.transitionDirection)};let s=w.uniforms;for(let[e]of y)s[e].value=b[e];s.texB.value=j[e].texture,s.aspectB.value=j[e].aspect,s.mode.value=P.mode,s.direction.value=P.direction,s.feather.value=P.feather,s.pushAmount.value=P.pushAmount,s.effectStrength.value=P.effectStrength,s.focalPoint.value.set(b.radialX,1-b.radialY)}async function ge(e){let t=Array.from(e).filter(e=>e.type.startsWith(`image/`)||/\.(jpe?g|png|webp|gif|avif|bmp)$/i.test(e.name)).slice(0,100);if(!t.length){J(`请选择 JPG、PNG、WebP 等浏览器支持的图片。`);return}let n=++z,r=[],i=0;D.disable();try{for(let e=0;e<t.length&&!(H||n!==z);e++){J(`正在读取照片 ${e+1} / ${t.length}`);let a=URL.createObjectURL(t[e]);try{let i=new Image;if(i.src=a,await i.decode(),H||n!==z)break;r.push(fe(i,t[e].name))}catch{i++}finally{URL.revokeObjectURL(a)}}if(H||n!==z){r.forEach(e=>e.texture.dispose());return}me(r),J(r.length?`已载入 ${r.length} 张照片${i?`，${i} 张格式无法读取`:``}。使用系统播放器播放音乐。`:`这些图片无法解码，请使用 JPG / PNG。`)}finally{n===z&&D.enable()}}function _e(){B=null,V=!1,q.reset(),U={energy:0,onset:!1,onsetStrength:0},W=G=K=0,A=[],k.zoom=k.velocity=k.lightStrength=0,k.lightStart=-100}function ve(e){U.onset=!1;let t=V?B:null;V=!1;let n=t?.audioFeature;if(!n||!t.isPlaying){U.energy*=Math.exp(-e*5),U.onsetStrength=0,q.reset();return}U.energy=g(n.animation.energy),U.onsetStrength=Math.max(0,n.beat.onset||0),U.onset=q.update(U.onsetStrength,n.energy.rms,b.sensitivity),U.onset&&G++}function ye(){P||j.length<2||!U.onset||(Z(X(),!1,1),K++)}function Q(e,t,n,r){let a=w.uniforms.screenAspect.value,o=1,s=1;return b.fit===`cover`?e.aspect>a?o=a/e.aspect:s=e.aspect/a:e.aspect>a?s=e.aspect/a:o=a/e.aspect,new i(g(.5+(t.x-.5-r.x)*n/o,.15,.85),g(.5+(1-t.y-.5-r.y)*n/s,.15,.85))}function be(e){let t=g((e-R)/1e3,0,.05);if(R=e,L+=t,ve(t),ye(),W+=(U.energy-W)*(1-Math.exp(-t*7)),h(`meterFill`).style.width=`${W*100}%`,h(`energy`).textContent=`${Math.round(W*100)}%`,h(`signal`).textContent=U.onset?`新起音`:P?`照片交接中`:`等待新起音`,h(`onsetValue`).textContent=U.onsetStrength.toFixed(3),h(`eventCount`).textContent=`${G} / ${K}`,!w||!j.length)return;$();let n=w.uniforms;n.contain.value=+(b.fit===`contain`);let r=P?N:M,a=b.animationEnabled&&b.motion>0,o=a&&(b.animation===`breath`||b.animation===`focus`);U.onset&&a&&(o&&(k.velocity+=(.055+.06*U.onsetStrength)*b.motion),b.animation===`light`?(k.lightStart=L,k.lightStrength=g(.4+U.onsetStrength)):b.animation===`ripple`&&(A.unshift({center:Q(j[M],j[M].focus,n.zoomA.value,n.panA.value),time:L,strength:g(.4+U.onsetStrength),photo:M}),A=A.slice(0,4)));let s=((o?b.motion*W*(b.animation===`focus`?.16:.09):0)-k.zoom)*8-k.velocity*5;k.velocity+=s*t,k.zoom=Math.max(0,k.zoom+k.velocity*t);let c=1+k.zoom;function l(e,t){let n=new i;return b.animation===`focus`?n.set((e.focus.x-.5)*(1-1/c),(1-e.focus.y-.5)*(1-1/c)):b.animation===`breath`&&n.set(Math.sin(L*.16+t)*k.zoom*.06,Math.cos(L*.12+t)*k.zoom*.06),n}n.zoomA.value=n.zoomB.value=c,n.panA.value.copy(l(j[M],M)),n.panB.value.copy(l(j[r],r)),n.animMode.value=a?{light:1,edge:2,ripple:3,parallax:4}[b.animation]??0:0,n.animStrength.value=b.motion,n.animTime.value=L,n.animEnergy.value=W,n.lightAge.value=L-k.lightStart,n.lightStrength.value=k.lightStrength,n.depthA.value=j[M].depth??O,n.depthB.value=j[r].depth??O,n.hasDepthA.value=+!!j[M].depth,n.hasDepthB.value=+!!j[r].depth,n.photoID_A.value=M,n.photoID_B.value=r;for(let e=0;e<4;e++){let t=A[e];n.ripples.value[e].set(t?.center.x??.5,t?.center.y??.5,t?.time??-100,t?.strength??0),n.ripplePhoto.value[e]=t?.photo??-1}if(n.subjectA.value.copy(Q(j[M],P?P.photoFocusA:j[M].focus,n.zoomA.value,n.panA.value)),n.subjectB.value.copy(Q(j[r],P?P.photoFocusB:j[r].focus,n.zoomB.value,n.panB.value)),P){P.time+=t;let e=g(P.time/P.duration);if(n.progress.value=e*e*(3-2*e),e>=1&&(M=N,P=null,n.zoomA.value=n.zoomB.value,n.panA.value.copy(n.panB.value),Y(),F!==null)){let e=F,t=I;F=null,I=0,Z(e,!0,t)}}x.render(S,C)}function $(){if(!w||!x)return;let e=w.uniforms;e.photoBrightness.value=b.photoBrightness,e.photoSaturation.value=b.saturation,e.photoContrast.value=b.contrast,e.photoTemperature.value=b.temperature,x.toneMappingExposure=b.exposure}function xe(){E=new d({container:m,title:`音画导演`});let e={choosePhotos:()=>h(`images`).click(),previous:()=>Z(X(-1),!0,-1),next:()=>Z(X(),!0,1),examples:()=>pe(),chooseDepth:()=>h(`depthFile`).click(),clearDepth:()=>{let e=j[M];e&&(e.depthGeneration++,e.depth?.dispose(),e.depth=null,Y())}},t=E.addFolder(`照片与预览`);D=t.add(e,`choosePhotos`).name(`选择照片（最多100张）`),t.add(e,`previous`).name(`上一张`),t.add(e,`next`).name(`下一张`),t.add(e,`examples`).name(`恢复示例图片`);let n=document.createElement(`div`);n.innerHTML=`<span id="Animation62-count"></span><div id="Animation62-thumbs"></div><input id="Animation62-images" type="file" accept="image/*" multiple hidden><input id="Animation62-depthFile" type="file" accept="image/*" hidden><div id="Animation62-depthStatus"></div><div id="Animation62-status" role="status"></div>`,t.domElement.querySelector(`.children, .lil-children`).append(n);let r=E.addFolder(`视觉`);for(let[e,t,,n,i,a]of ae)r.add(b,e,n,i,a).name(t).onChange($);let i=E.addFolder(`转场`);i.add(b,`mode`,{淡化:`fade`,推近:`push`,滑动:`slide`,擦除:`wipe`,焦点模糊:`focus`,流动:`flow`,径向:`radial`,景深:`depth`,柔光:`light`,拖影:`blur`,分层:`layers`,轮廓:`contour`,涟漪:`ripple`,旋转:`rotate`,折页:`fold`,颗粒:`grain`,渗透:`ink`,相似色:`colorMatch`,构图:`composition`,光带:`beam`,主体保护:`protect`,墨迹:`inkBloom`}).name(`转场效果`).onChange(e=>{e===`auto`&&(b.mode=`push`),c()}),i.add(b,`fit`,{填满:`cover`,完整:`contain`}).name(`照片比例`),i.add(b,`transition`,.2,2,.05).name(`时长 / 秒`),i.add(b,`transitionStrength`,0,1,.01).name(`附加强度`),i.add(b,`transitionDirection`,{自动:`auto`,正向:`1`,反向:`-1`}).name(`方向`),i.add(b,`feather`,.005,.2,.005).name(`擦除柔边`),i.add(b,`pushAmount`,0,.2,.005).name(`推近幅度`),i.add(b,`audioModulation`).name(`音频调制`),i.add(b,`sensitivity`,.5,2,.05).name(`起音灵敏度`).onChange(()=>q.reset()),i.add(b,`shuffle`).name(`随机选图`),i.add(b,`radialX`,.15,.85,.01).name(`转场焦点 X`),i.add(b,`radialY`,.15,.85,.01).name(`转场焦点 Y`);let a=i.addFolder(`转场专属参数`),o=y.map(([e,t,,n,r,i,o])=>({controller:a.add(b,e,n,r,i).name(t),modes:o})),s={transitionStrength:[`focus`,`flow`,`depth`,`light`,`blur`,`ripple`],transitionDirection:[`slide`,`wipe`,`flow`,`blur`,`layers`,`rotate`,`fold`,`beam`],feather:[`wipe`,`flow`],pushAmount:[`push`],radialX:[`radial`,`ripple`],radialY:[`radial`,`ripple`]};function c(){let e=!1;for(let{controller:t,modes:n}of o){let r=n.includes(b.mode);r?t.show():t.hide(),e||=r}e?a.show():a.hide();for(let e of i.controllers){let t=s[e.property];t&&(t.includes(b.mode)?e.show():e.hide())}}c(),a.open();let l=E.addFolder(`停留动画`);l.add(b,`animationEnabled`).name(`启用`),l.add(b,`animation`,{镜头呼吸:`breath`,焦点运镜:`focus`,柔光:`light`,边缘流动:`edge`,涟漪:`ripple`,深度视差:`parallax`}).name(`动画效果`),l.add(b,`motion`,0,1,.05).name(`强度`),l.add(e,`chooseDepth`).name(`上传当前照片深度图`),l.add(e,`clearDepth`).name(`清除当前深度图`);let u=document.createElement(`div`);u.textContent=`当前照片主体焦点（白近黑远深度图需同比例）`;for(let e of[`x`,`y`]){let t=document.createElement(`input`);t.type=`range`,t.min=`.2`,t.max=`.8`,t.step=`.01`,t.value=`.5`,t.setAttribute(`aria-label`,`当前照片主体 ${e.toUpperCase()}`),t.oninput=()=>{j[M]&&(j[M].focus[e]=Number(t.value))},v.push({updateDisplay:()=>{t.value=String(_[e])}}),u.append(t)}l.domElement.querySelector(`.children, .lil-children`).append(u);let f=document.createElement(`div`);f.innerHTML=`<span id="Animation62-signal"></span> <span id="Animation62-energy"></span><div id="Animation62-meterFill"></div><span id="Animation62-onsetValue"></span> · <span id="Animation62-eventCount"></span>`,E.domElement.querySelector(`.children, .lil-children`).append(f),E.hide()}async function Se(e){let t=j[M];if(!e||!t)return;let n=++t.depthGeneration,r=URL.createObjectURL(e);try{let e=new Image;e.src=r,await e.decode();let i=e.naturalWidth/e.naturalHeight;if(Math.abs(i/t.aspect-1)>.03)throw Error(`深度图宽高比必须与当前照片一致。`);if(H||!j.includes(t)||n!==t.depthGeneration)return;let a=document.createElement(`canvas`),s=Math.min(1,1024/Math.max(e.naturalWidth,e.naturalHeight));a.width=Math.max(1,Math.round(e.naturalWidth*s)),a.height=Math.max(1,Math.round(e.naturalHeight*s)),a.getContext(`2d`).drawImage(e,0,0,a.width,a.height),t.depth?.dispose(),t.depth=new o(a),t.depth.generateMipmaps=!1,t.depth.minFilter=u,j[M]===t&&(h(`depthStatus`).textContent=`当前照片：已关联深度图`),J(`深度图已关联：白色近、黑色远，仅在本地读取。`)}catch(e){j.includes(t)&&n===t.depthGeneration&&J(e.message)}finally{URL.revokeObjectURL(r)}}this.dispose=()=>{if(!H){H=!0,z++;for(let e of j)e.texture.dispose(),e.depth?.dispose();j=[],O?.dispose(),T?.geometry.dispose(),w?.dispose(),S?.clear(),x?.dispose(),ee(this.settingsButton,m,E),ie.remove(),B=null}},this.updateWithAudioData=e=>{H||(B=e,V=!0)},this.render=()=>{H||be(performance.now())},this.onWindowResize=le,this.resetState=()=>{_e(),P=F=null,I=0,N=M,L=0,R=performance.now(),w.uniforms.zoomA.value=w.uniforms.zoomB.value=1,w.uniforms.panA.value.set(0,0),w.uniforms.panB.value.set(0,0),Y(),$()};try{ce.call(this),xe(),this.gui=E,h(`images`).onchange=e=>{ge(e.target.files),e.target.value=``},h(`depthFile`).onchange=e=>{Se(e.target.files[0]),e.target.value=``},this.settingsButton=f(`Animation62-settings-button`),this.settingsButton.onclick=()=>E._hidden?E.show():E.hide(),document.body.append(this.settingsButton),this.initPromise=pe()}catch(e){throw this.dispose(),e}}};export{p as default};