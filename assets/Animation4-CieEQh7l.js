import{Et as e,Kt as t,Nr as n,Pr as r,Qt as i,S as a,X as o,Xt as s,d as c,er as l,nr as u,r as d,rr as f,u as p,wt as m}from"./three.module-CI1jJgD_.js";import{n as h,r as g,t as _}from"./OutputPass-D7sfcF5T.js";import{a as v,i as y,n as b,r as x,t as S}from"./GUIHelper-DNd0uFVI.js";import{t as C}from"./UnrealBloomPass-afIQHt-X.js";import{a as w,s as ee}from"./PerceptualColor-5EYeXve1.js";var T={type:`change`},E={type:`start`},D={type:`end`},O=1e-6,k={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},A=new n,j=new n,M=new r,N=new r,P=new r,F=new i,I=new r,L=new r,R=new r,z=new r,B=class extends a{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=[`KeyA`,`KeyS`,`KeyD`],this.mouseButtons={LEFT:m.ROTATE,MIDDLE:m.DOLLY,RIGHT:m.PAN},this.target=new r,this.state=k.NONE,this.keyState=k.NONE,this._lastPosition=new r,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new r,this._movePrev=new n,this._moveCurr=new n,this._lastAxis=new r,this._zoomStart=new n,this._zoomEnd=new n,this._panStart=new n,this._panEnd=new n,this._pointers=[],this._pointerPositions={},this._onPointerMove=H.bind(this),this._onPointerDown=V.bind(this),this._onPointerUp=U.bind(this),this._onPointerCancel=W.bind(this),this._onContextMenu=Z.bind(this),this._onMouseWheel=X.bind(this),this._onKeyDown=K.bind(this),this._onKeyUp=G.bind(this),this._onTouchStart=te.bind(this),this._onTouchMove=ne.bind(this),this._onTouchEnd=re.bind(this),this._onMouseDown=q.bind(this),this._onMouseMove=J.bind(this),this._onMouseUp=Y.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener(`keydown`,this._onKeyDown),window.addEventListener(`keyup`,this._onKeyUp),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerCancel),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.style.touchAction=`none`}disconnect(){window.removeEventListener(`keydown`,this._onKeyDown),window.removeEventListener(`keyup`,this._onKeyUp),this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerCancel),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.domElement.style.touchAction=``}dispose(){this.disconnect()}handleResize(){let e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>O&&(this.dispatchEvent(T),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>O||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(T),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn(`THREE.TrackballControls: Unsupported camera type.`)}reset(){this.state=k.NONE,this.keyState=k.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(T),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(j.copy(this._panEnd).sub(this._panStart),j.lengthSq()){if(this.object.isOrthographicCamera){let e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;j.x*=e,j.y*=t}j.multiplyScalar(this._eye.length()*this.panSpeed),N.copy(this._eye).cross(this.object.up).setLength(j.x),N.add(M.copy(this.object.up).setLength(j.y)),this.object.position.add(N),this.target.add(N),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(j.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){z.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=z.length();e?(this._eye.copy(this.object.position).sub(this.target),I.copy(this._eye).normalize(),L.copy(this.object.up).normalize(),R.crossVectors(L,I).normalize(),L.setLength(this._moveCurr.y-this._movePrev.y),R.setLength(this._moveCurr.x-this._movePrev.x),z.copy(L.add(R)),P.crossVectors(z,this._eye).normalize(),e*=this.rotateSpeed,F.setFromAxisAngle(P,e),this._eye.applyQuaternion(F),this.object.up.applyQuaternion(F),this._lastAxis.copy(P),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),F.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(F),this.object.up.applyQuaternion(F)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===k.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=e.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn(`THREE.TrackballControls: Unsupported camera type`)):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=e.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn(`THREE.TrackballControls: Unsupported camera type`)),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return A.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),A}_getMouseOnCircle(e,t){return A.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),A}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new n,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}};function V(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e))}function H(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function U(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchEnd(e):this._onMouseUp(),this._removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp)))}function W(e){this._removePointer(e)}function G(){this.enabled!==!1&&(this.keyState=k.NONE,window.addEventListener(`keydown`,this._onKeyDown))}function K(e){this.enabled!==!1&&(window.removeEventListener(`keydown`,this._onKeyDown),this.keyState===k.NONE&&(e.code===this.keys[k.ROTATE]&&!this.noRotate?this.keyState=k.ROTATE:e.code===this.keys[k.ZOOM]&&!this.noZoom?this.keyState=k.ZOOM:e.code===this.keys[k.PAN]&&!this.noPan&&(this.keyState=k.PAN)))}function q(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case m.DOLLY:this.state=k.ZOOM;break;case m.ROTATE:this.state=k.ROTATE;break;case m.PAN:this.state=k.PAN;break;default:this.state=k.NONE}let n=this.keyState===k.NONE?this.state:this.keyState;n===k.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):n===k.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):n===k.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(E)}function J(e){let t=this.keyState===k.NONE?this.state:this.keyState;t===k.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY))):t===k.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(e.pageX,e.pageY)):t===k.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(e.pageX,e.pageY))}function Y(){this.state=k.NONE,this.dispatchEvent(D)}function X(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.dispatchEvent(E),this.dispatchEvent(D)}}function Z(e){this.enabled!==!1&&e.preventDefault()}function te(e){switch(this._trackPointer(e),this._pointers.length){case 1:this.state=k.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=k.TOUCH_ZOOM_PAN;let e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);let n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,r=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,r)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(E)}function ne(e){switch(this._trackPointer(e),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY));break;default:let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(n*n+r*r);let i=(e.pageX+t.x)/2,a=(e.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(i,a));break}}function re(e){switch(this._pointers.length){case 0:this.state=k.NONE;break;case 1:this.state=k.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=k.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==e.pointerId){let e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(D)}var Q=(e=!1)=>({blending:5,blendEquation:100,blendSrc:e?201:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:e?200:201,blendDstAlpha:e?201:205,premultipliedAlpha:e}),ie=e=>Object.assign(e.blendMaterial,Q(!0)),$={galaxyRadius:[220,430,1],armTightness:[.018,.072,.001],armWidth:[.16,.9,.01],coreDensity:[.12,.5,.01],diskThickness:[.35,2.2,.01],featherStrength:[0,2.2,.01],outerSpread:[.65,1.45,.01],stellarCount:[4e4,26e4,1e3],dustCount:[5e3,9e4,1e3],heroCount:[100,2500,50],stellarSize:[.4,5,.05],dustSize:[2,18,.1],dustOpacity:[0,.65,.01],heroSize:[1,10,.1],heroBrightness:[.3,2.5,.01],colorIntensity:[.35,1.8,.01],depthFade:[0,.004,1e-5],exposure:[.65,1.8,.01],bloomStrength:[0,2.5,.01],bloomRadius:[0,.7,.01],bloomThreshold:[0,1,.01],colorChangeIntensity:[0,1.5,.01],bassWarmthColor:[0,1.8,.01],midPaletteMorph:[0,1.6,.01],highCoolTint:[0,1.8,.01],kickColorPulse:[0,2,.01],downbeatColorDrift:[0,1.8,.01],colorEvolutionSpeed:[0,2.5,.01],violetBias:[0,1,.01],coolBias:[0,1,.01],warmLimit:[0,1,.01],coreWarmth:[0,1,.01],rotationSpeed:[0,.002,1e-5],shaderRotationSpeed:[0,.12,.001],flowStrength:[0,2.5,.01],armBreath:[0,2.5,.01],propagationStrength:[0,2.5,.01],sensitivity:[0,2.5,.01],smoothing:[.05,1,.01],bassFlow:[0,2.5,.01],midBreath:[0,2.5,.01],highSparkle:[0,2.5,.01],kickPulse:[0,2.5,.01],snareDust:[0,2.5,.01],downbeatBreath:[0,2.5,.01],motionIntensity:[0,2,.01],textureIntensity:[0,2,.01],variationIntensity:[0,2,.01],sparkleThreshold:[.5,.98,.01]},ae=class{constructor(e,t={}){this.canvas=e,this.settings={stellarCount:19e4,dustCount:56e3,heroCount:1200,galaxyRadius:320,armTightness:.041,armWidth:.42,coreDensity:.28,diskThickness:1,featherStrength:1,outerSpread:1,rotationSpeed:34e-5,autoRotate:!0,shaderRotationSpeed:.018,stellarSize:3,dustSize:5,dustOpacity:.34,heroSize:5.7,heroBrightness:1.38,sensitivity:1,smoothing:.72,bassFlow:1,midBreath:.9,highSparkle:1.05,kickPulse:1,snareDust:.75,downbeatBreath:.9,motionIntensity:.85,textureIntensity:.55,variationIntensity:.55,flowStrength:1,armBreath:1,propagationStrength:1,depthFade:82e-5,colorIntensity:1.08,coreWarmth:.62,sparkleThreshold:.78,colorChangeIntensity:1.1,bassWarmthColor:1.08,midPaletteMorph:1.12,highCoolTint:1.1,kickColorPulse:1.22,downbeatColorDrift:.92,colorEvolutionSpeed:1.45,violetBias:.12,coolBias:.08,warmLimit:.72,coreColor:`#f5f2ff`,armColor:`#586bff`,accentColor:`#a554ff`,deepColor:`#1f2e85`,exposure:1.18,bloomStrength:.2,bloomRadius:.2,bloomThreshold:.6},this.defaultSettings={...this.settings};for(let e of Object.keys(this.defaultSettings))Object.prototype.hasOwnProperty.call(t,e)&&(this.settings[e]=t[e]);this.normalizeSettings(),this.capacity={stellar:$.stellarCount[1],dust:$.dustCount[1],hero:$.heroCount[1]},this.baseStructure={galaxyRadius:320,armTightness:.041,armWidth:.42},this._rngState=1243072995,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.bloomPass=null,this.controls=null,this.galaxyGroup=null,this.stellarPoints=null,this.dustPoints=null,this.heroPoints=null,this.stellarMaterial=null,this.dustMaterial=null,this.heroMaterial=null,this.hasAudioData=!1,this.bass=0,this.mid=0,this.high=0,this.energyLevel=0,this.motionVal=0,this.brightnessVal=0,this.textureVal=0,this.smoothnessVal=.5,this.variationVal=0,this._kickEnvelope=0,this._snareEnvelope=0,this._hihatEnvelope=0,this._downbeatEnvelope=0,this._kickProgress=1,this._snareProgress=1,this._downbeatProgress=1,this._lastKickInput=0,this._lastSnareInput=0,this._lastDownbeatInput=!1,this._lastAudioTime=null,this._lastRenderTime=null,this._breathPhase=0,this._rotationDrive=0,this._lastKickTime=-1/0,this._lastSnareTime=-1/0,this._palettePhase=.055,this.gui=null,this.guiContainer=null,this.guiScrollbarStyle=null,this.settingsButton=null,this.guiVisible=!1,this._guiPreferencesLoading=!1,this._pendingUniformSync=!1,this._guiSettingsBeforeLoad=null,this.mouseControls={isMouseDown:!1,autoRotate:this.settings.autoRotate},this._autoRotateTimer=null,this._mouseHandlers=null,this.init()}init(){try{return this.setupThreeJS(),this.setupPostProcessing(),this.setupMouseControls(),this.createGUI(),console.log(`✅ Animation4  初始化成功 - Spectral Living Galaxy`),!0}catch(e){throw this.dispose(),e}}setupThreeJS(){this.scene=new u,this.camera=new t(58,window.innerWidth/window.innerHeight,.1,2200),this.camera.position.set(-255.28,264.2,355.51),this.renderer=new d({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.outputColorSpace=l,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=this.settings.exposure,this.renderer.setClearColor(0,0),this.canvas.style.backgroundColor=`transparent`,this.canvas.style.zIndex=`1`,this.controls=new B(this.camera,this.renderer.domElement),this.controls.rotateSpeed=2,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=.12,this.controls.target.set(0,0,0),this.controls.minDistance=0,this.controls.maxDistance=1/0,this.controls.update(),this.setupGalaxyLayers()}setupPostProcessing(){this.composer=new g(this.renderer),this.composer.addPass(new h(this.scene,this.camera)),this.bloomPass=new C(new n(window.innerWidth,window.innerHeight),this.settings.bloomStrength,this.settings.bloomRadius,this.settings.bloomThreshold),this.composer.addPass(this.bloomPass),ie(this.bloomPass),this.composer.addPass(new _),this.composer.renderToScreen=!0}resetDeterministicRandom(e=1243072995){this._rngState=e>>>0}rand(){let e=this._rngState>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,this._rngState=e>>>0,(this._rngState>>>0)/4294967296}randomGaussian(){let t=Math.max(1e-6,this.rand()),n=Math.max(1e-6,this.rand());return e.clamp(Math.sqrt(-2*Math.log(t))*Math.cos(Math.PI*2*n),-2.6,2.6)}generateStellarGalaxy(t){let n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),s=new Float32Array(t),c=new Float32Array(t),l=this.baseStructure.galaxyRadius,u=this.baseStructure.armTightness,d=this.baseStructure.armWidth;this.resetDeterministicRandom(1369948382);for(let f=0;f<t;f++){let t=this.rand(),p,m,h,g,_=0,v=0;if(t<.28){let t=this.rand()**1.75;p=9+t*96;let n=f%2*Math.PI;_=this.randomGaussian()*(.42-t*.12),m=n+p*u*.72+_,h=this.randomGaussian()*e.lerp(27,7,t)*.34,g=0}else if(t<.93){p=45+this.rand()**.82*(l-45);let t=p/l,n=f%2*Math.PI,r=e.lerp(.48,1.02,t),i=this.rand();i>.56&&i<=.79?v=.16+t*.16:i>.79&&(v=-.14-t*.13);let a=Math.abs(v)>.001?.36:.52;_=this.randomGaussian()*r*a,m=n+p*u+v+_*d,p+=this.randomGaussian()*e.lerp(2.2,10.5,t),h=this.randomGaussian()*e.lerp(7.5,19,t)*.32,g=1}else p=110+Math.sqrt(this.rand())*(l*1.06-110),m=this.rand()*Math.PI*2,h=this.randomGaussian()*e.lerp(8,31,p/l)*.36,g=2;let y=g===0?.86:1,b=Math.cos(m)*p,x=Math.sin(m)*p*y;n[f*3]=b,n[f*3+1]=h,n[f*3+2]=x,r[f]=Math.sqrt(b*b+x*x),i[f]=this.rand(),a[f]=g,o[f]=.55+this.rand()**3*1.9,s[f]=_,c[f]=v}return{positions:n,radius:r,seed:i,layer:a,sizeJitter:o,armOffset:s,featherOffset:c}}generateDustGalaxy(t){let n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),s=new Float32Array(t),c=new Float32Array(t),l=this.baseStructure.galaxyRadius,u=this.baseStructure.armTightness,d=this.baseStructure.armWidth;this.resetDeterministicRandom(2446717754);for(let f=0;f<t;f++){let t=24+this.rand()**.9*(l-10),p=t/l,m=f%2*Math.PI,h=e.lerp(.82,1.62,p),g=this.rand(),_=0;g>.58&&g<=.8?_=.18+p*.14:g>.8&&(_=-.16-p*.12);let v=Math.abs(_)>.001?.5:.72,y=this.randomGaussian()*h*v,b=m+t*u+_+y*d+Math.sin(t*.045+f*.017)*.055;t+=this.randomGaussian()*e.lerp(5,16,p);let x=Math.cos(b)*t,S=Math.sin(b)*t,C=this.randomGaussian()*e.lerp(8,26,p)*.42+Math.sin(b*2+t*.025)*2.2;n[f*3]=x,n[f*3+1]=C,n[f*3+2]=S,r[f]=Math.sqrt(x*x+S*S),i[f]=this.rand(),a[f]=e.lerp(.25,1,this.rand()**.8),o[f]=.55+this.rand()*1.55,s[f]=y,c[f]=_}return{positions:n,radius:r,seed:i,alpha:a,sizeJitter:o,armOffset:s,featherOffset:c}}generateHeroStars(t){let n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),s=new Float32Array(t),c=this.baseStructure.galaxyRadius,l=this.baseStructure.armTightness,u=this.baseStructure.armWidth;this.resetDeterministicRandom(797689697);for(let d=0;d<t;d++){let t=18+this.rand()**.78*(c*.98),f=t/c,p=d%2*Math.PI,m=this.randomGaussian()*e.lerp(.45,1.05,f),h=this.rand()>.82?(this.rand()>.5?1:-1)*(.1+f*.12):0,g=p+t*l+h+m*u;t+=this.randomGaussian()*4.5;let _=Math.cos(g)*t,v=Math.sin(g)*t,y=this.randomGaussian()*e.lerp(3.5,13,f)*.35;n[d*3]=_,n[d*3+1]=y,n[d*3+2]=v,r[d]=Math.sqrt(_*_+v*v),i[d]=this.rand(),a[d]=.8+this.rand()**1.7*2.4,o[d]=m,s[d]=h}return{positions:n,radius:r,seed:i,sizeJitter:a,armOffset:o,featherOffset:s}}createGeometry(e){let t=new c;t.setAttribute(`position`,new p(e.positions,3));let n=(e,n)=>{n&&t.setAttribute(e,new p(n,1))};return n(`aRadius`,e.radius),n(`aSeed`,e.seed),n(`aLayer`,e.layer),n(`aAlpha`,e.alpha),n(`aSizeJitter`,e.sizeJitter),n(`aArmOffset`,e.armOffset),n(`aFeatherOffset`,e.featherOffset),t}setupGalaxyLayers(){this.disposeGalaxyLayers(),this.galaxyGroup=new o,this.scene.add(this.galaxyGroup),this.stellarMaterial=this.createStellarMaterial(),this.dustMaterial=this.createDustMaterial(),this.heroMaterial=this.createHeroMaterial(),this.stellarPoints=new s(this.createGeometry(this.generateStellarGalaxy(this.capacity.stellar)),this.stellarMaterial),this.dustPoints=new s(this.createGeometry(this.generateDustGalaxy(this.capacity.dust)),this.dustMaterial),this.heroPoints=new s(this.createGeometry(this.generateHeroStars(this.capacity.hero)),this.heroMaterial),this.stellarPoints.frustumCulled=!1,this.dustPoints.frustumCulled=!1,this.heroPoints.frustumCulled=!1,this.dustPoints.renderOrder=0,this.stellarPoints.renderOrder=1,this.heroPoints.renderOrder=2,this.galaxyGroup.add(this.dustPoints,this.stellarPoints,this.heroPoints),this.syncAllUniforms()}disposeGalaxyLayers(){let e=new Set([this.stellarMaterial,this.dustMaterial,this.heroMaterial]);for(let t of[this.stellarPoints,this.dustPoints,this.heroPoints])t&&(t.parent?.remove(t),t.geometry?.dispose(),e.add(t.material));for(let t of e)t?.dispose();this.stellarPoints=null,this.dustPoints=null,this.heroPoints=null,this.stellarMaterial=null,this.dustMaterial=null,this.heroMaterial=null,this.galaxyGroup&&=(this.galaxyGroup.parent&&this.galaxyGroup.parent.remove(this.galaxyGroup),this.galaxyGroup.clear(),null)}createCommonUniforms(){let e=this.getPerceptualPaletteUniforms();return{uTime:{value:0},uRotationPhase:{value:0},uBreathPhase:{value:0},uExpansion:{value:0},uGalaxyRadius:{value:this.settings.galaxyRadius},uBaseGalaxyRadius:{value:this.baseStructure.galaxyRadius},uArmTightness:{value:this.settings.armTightness},uBaseArmTightness:{value:this.baseStructure.armTightness},uArmWidth:{value:this.settings.armWidth},uBaseArmWidth:{value:this.baseStructure.armWidth},uCoreDensity:{value:this.settings.coreDensity},uDiskThickness:{value:this.settings.diskThickness},uFeatherStrength:{value:this.settings.featherStrength},uOuterSpread:{value:this.settings.outerSpread},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uEnergy:{value:0},uTextureFeat:{value:0},uSmoothnessFeat:{value:.5},uVariationFeat:{value:0},uKick:{value:0},uSnare:{value:0},uHihat:{value:0},uDownbeat:{value:0},uKickProgress:{value:1},uSnareProgress:{value:1},uDownbeatProgress:{value:1},uBassFlow:{value:this.settings.bassFlow},uMidBreath:{value:this.settings.midBreath},uHighSparkle:{value:this.settings.highSparkle},uKickPulse:{value:this.settings.kickPulse},uSnareDust:{value:this.settings.snareDust},uDownbeatBreath:{value:this.settings.downbeatBreath},uFlowStrength:{value:this.settings.flowStrength},uArmBreath:{value:this.settings.armBreath},uPropagationStrength:{value:this.settings.propagationStrength},uColorIntensity:{value:this.settings.colorIntensity},uCoreWarmth:{value:this.settings.coreWarmth},uDepthFade:{value:this.settings.depthFade},uColorChangeIntensity:{value:this.settings.colorChangeIntensity},uBassWarmthColor:{value:this.settings.bassWarmthColor},uMidPaletteMorph:{value:this.settings.midPaletteMorph},uHighCoolTint:{value:this.settings.highCoolTint},uKickColorPulse:{value:this.settings.kickColorPulse},uPalettePhase:{value:this._palettePhase},uAudioHueShift:{value:0},uAudioSaturation:{value:1},uVioletBias:{value:this.settings.violetBias},uCoolBias:{value:this.settings.coolBias},uWarmLimit:{value:this.settings.warmLimit},uCoreColor:{value:e.core},uArmColor:{value:e.arm},uAccentColor:{value:e.accent},uDeepColor:{value:e.deep}}}getPerceptualPaletteUniforms(){let e=e=>{let t=ee(w(e),{maxValue:1});return new r(t[0],t[1],t[2])};return{core:e(this.settings.coreColor),arm:e(this.settings.armColor),accent:e(this.settings.accentColor),deep:e(this.settings.deepColor)}}createStellarMaterial(){let e=this.createCommonUniforms();return e.uSize={value:this.settings.stellarSize},e.uSparkleThreshold={value:this.settings.sparkleThreshold},new f({transparent:!0,depthWrite:!1,...Q(),uniforms:e,vertexShader:this.getStellarVertexShader(),fragmentShader:this.getStellarFragmentShader()})}getStellarVertexShader(){return`
      uniform float uTime;
      uniform float uGalaxyRadius;
      uniform float uBaseGalaxyRadius;
      uniform float uArmTightness;
      uniform float uBaseArmTightness;
      uniform float uArmWidth;
      uniform float uBaseArmWidth;
      uniform float uCoreDensity;
      uniform float uDiskThickness;
      uniform float uFeatherStrength;
      uniform float uOuterSpread;
      uniform float uSize;
      uniform float uSparkleThreshold;
      uniform float uRotationPhase;
      uniform float uBreathPhase;
      uniform float uExpansion;

      uniform float uBass;
      uniform float uMid;
      uniform float uHigh;
      uniform float uEnergy;
      uniform float uVariationFeat;

      uniform float uKick;
      uniform float uHihat;
      uniform float uDownbeat;
      uniform float uKickProgress;
      uniform float uDownbeatProgress;

      uniform float uBassFlow;
      uniform float uMidBreath;
      uniform float uHighSparkle;
      uniform float uKickPulse;
      uniform float uDownbeatBreath;
      uniform float uFlowStrength;
      uniform float uArmBreath;
      uniform float uPropagationStrength;

      attribute float aRadius;
      attribute float aSeed;
      attribute float aLayer;
      attribute float aSizeJitter;
      attribute float aArmOffset;
      attribute float aFeatherOffset;

      varying float vRadiusNorm;
      varying float vSeed;
      varying float vLayer;
      varying float vEnergy;
      varying float vSparkle;
      varying float vDepth;
      varying float vPulse;

      mat2 rot(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat2(c, -s, s, c);
      }

      void main() {
        vec3 pos = position;

        float structureScale = uGalaxyRadius / max(1.0, uBaseGalaxyRadius);
        pos.xz *= structureScale;
        pos.y *= uDiskThickness;

        float shapeAngle =
          aRadius * (uArmTightness - uBaseArmTightness) +
          aArmOffset * (uArmWidth - uBaseArmWidth) +
          aFeatherOffset * (uFeatherStrength - 1.0);
        if (aLayer < 1.5) pos.xz = rot(shapeAngle) * pos.xz;

        if (aLayer < 0.5) {
          float coreFocus = clamp((uCoreDensity - 0.12) / 0.38, 0.0, 1.0);
          pos.xz *= mix(1.30, 0.68, coreFocus);
          pos.y *= mix(1.08, 0.78, coreFocus);
        } else if (aLayer > 1.5) {
          pos.xz *= uOuterSpread;
          pos.y *= mix(0.8, 1.25, clamp(uOuterSpread - 0.65, 0.0, 1.0));
        }

        pos.xz *= 1.0 + uExpansion;
        float rNorm = clamp(length(pos.xz) / max(1.0, uGalaxyRadius), 0.0, 1.15);

        float differential =
          mix(1.15, 0.45, clamp(rNorm, 0.0, 1.0));

        float flowAngle = uRotationPhase * differential;

        // Variation 让每颗星的角速度产生轻微、连续的差异，避免整体同步旋转。
        flowAngle +=
          sin(uTime * (0.38 + aSeed * 0.34) + aSeed * 19.0) *
          uVariationFeat *
          0.045;

        pos.xz = rot(flowAngle) * pos.xz;

        vec2 radialDir =
          length(pos.xz) > 0.001
            ? normalize(pos.xz)
            : vec2(1.0, 0.0);

        vec2 tangentDir =
          vec2(-radialDir.y, radialDir.x);

        float breathPhase =
          uBreathPhase -
          rNorm * 9.0 +
          aSeed * 6.28318;

        float armMask = 1.0 - step(1.5, aLayer);

        float breathAmp =
          uMid *
          uMidBreath *
          uArmBreath *
          mix(0.7, 2.8, rNorm) *
          armMask;

        pos.xz +=
          radialDir *
          sin(breathPhase) *
          breathAmp;

        float stream =
          sin(
            uTime * 0.32 -
            rNorm * 7.0 +
            aSeed * 4.0
          ) *
          0.5 +
          0.5;

        pos.xz +=
          tangentDir *
          stream *
          uBass *
          uBassFlow *
          uFlowStrength *
          mix(0.25, 1.7, rNorm);

        float kickWave =
          exp(
            -pow(
              (rNorm - uKickProgress) / 0.07,
              2.0
            )
          ) *
          uKick *
          uKickPulse *
          uPropagationStrength;

        pos.xz +=
          radialDir *
          kickWave *
          mix(1.8, 7.5, rNorm);

        float downbeatWave =
          exp(
            -pow(
              (rNorm - uDownbeatProgress) / 0.18,
              2.0
            )
          ) *
          uDownbeat *
          uDownbeatBreath *
          uPropagationStrength;

        pos.xz +=
          radialDir *
          downbeatWave *
          4.2;

        pos.y +=
          downbeatWave *
          (aSeed - 0.5) *
          2.8;

        float sparkleSeed =
          smoothstep(uSparkleThreshold, min(0.999, uSparkleThreshold + 0.2), aSeed);

        float twinkle =
          0.5 +
          0.5 *
          sin(
            uTime * (3.5 + aSeed * 4.0) +
            aSeed * 24.0
          );

        float sparkle =
          sparkleSeed *
          (uHigh * uHighSparkle + uHihat * 0.55 + 0.12) *
          twinkle;

        vec4 mvPos =
          modelViewMatrix * vec4(pos, 1.0);

        float perspective =
          300.0 / max(1.0, -mvPos.z);

        float layerScale =
          aLayer < 0.5
            ? 1.05
            : aLayer < 1.5
              ? 1.0
              : 0.72;

        gl_PointSize =
          uSize *
          aSizeJitter *
          layerScale *
          (1.0 +
            sparkle * 0.85 +
            kickWave * 0.18) *
          perspective;

        gl_Position =
          projectionMatrix * mvPos;

        vRadiusNorm = rNorm;
        vSeed = aSeed;
        vLayer = aLayer;
        vEnergy =
          clamp(
            (
              uEnergy * 0.65 +
              uBass * 0.2 +
              uMid * 0.15
            ),
            0.0,
            1.7
          );
        vSparkle = sparkle;
        vDepth = -mvPos.z;
        vPulse =
          kickWave +
          downbeatWave * 0.65;
      }
    `}getStellarFragmentShader(){return`
      uniform float uColorIntensity;
      uniform float uCoreWarmth;
      uniform float uDepthFade;
      uniform float uSparkleThreshold;
      uniform float uBass;
      uniform float uMid;
      uniform float uTextureFeat;
      uniform float uColorChangeIntensity;
      uniform float uBassWarmthColor;
      uniform float uMidPaletteMorph;
      uniform float uHighCoolTint;
      uniform float uKickColorPulse;
      uniform float uPalettePhase;
      uniform float uAudioHueShift;
      uniform float uAudioSaturation;
      uniform float uVioletBias;
      uniform float uCoolBias;
      uniform float uWarmLimit;
      uniform vec3 uCoreColor;
      uniform vec3 uArmColor;
      uniform vec3 uAccentColor;
      uniform vec3 uDeepColor;

      varying float vRadiusNorm;
      varying float vSeed;
      varying float vLayer;
      varying float vEnergy;
      varying float vSparkle;
      varying float vDepth;
      varying float vPulse;

      vec3 electricIndigo(float r) {
        vec3 core = uCoreColor;
        vec3 indigo = uArmColor;
        vec3 violet = uAccentColor;
        vec3 deep = uDeepColor;
        if (r < 0.22) return mix(core, indigo, smoothstep(0.0, 0.22, r));
        if (r < 0.68) return mix(indigo, violet, smoothstep(0.22, 0.68, r));
        return mix(violet, deep, smoothstep(0.68, 1.12, r));
      }

      vec3 ultraviolet(float r) {
        vec3 white = vec3(0.94, 0.93, 1.00);
        vec3 violet = vec3(0.58, 0.28, 1.00);
        vec3 magenta = vec3(0.92, 0.26, 0.78);
        vec3 midnight = vec3(0.14, 0.12, 0.42);
        if (r < 0.24) return mix(white, violet, smoothstep(0.0, 0.24, r));
        if (r < 0.70) return mix(violet, magenta, smoothstep(0.24, 0.70, r));
        return mix(magenta, midnight, smoothstep(0.70, 1.12, r));
      }

      vec3 solarRose(float r) {
        vec3 champagne = vec3(1.00, 0.80, 0.58);
        vec3 coral = vec3(1.00, 0.43, 0.48);
        vec3 rose = vec3(0.88, 0.28, 0.72);
        vec3 blue = vec3(0.20, 0.28, 0.72);
        if (r < 0.20) return mix(champagne, coral, smoothstep(0.0, 0.20, r));
        if (r < 0.62) return mix(coral, rose, smoothstep(0.20, 0.62, r));
        return mix(rose, blue, smoothstep(0.62, 1.12, r));
      }

      vec3 arcticCyan(float r) {
        vec3 silver = vec3(0.93, 0.98, 1.00);
        vec3 ice = vec3(0.35, 0.86, 1.00);
        vec3 cyan = vec3(0.16, 0.62, 0.92);
        vec3 deep = vec3(0.09, 0.20, 0.48);
        if (r < 0.22) return mix(silver, ice, smoothstep(0.0, 0.22, r));
        if (r < 0.70) return mix(ice, cyan, smoothstep(0.22, 0.70, r));
        return mix(cyan, deep, smoothstep(0.70, 1.12, r));
      }

      vec3 dynamicPalette(float r) {
        float p = fract(uPalettePhase + uAudioHueShift) * 4.0;
        if (p < 1.0) return mix(electricIndigo(r), ultraviolet(r), smoothstep(0.0, 1.0, p));
        if (p < 2.0) return mix(ultraviolet(r), solarRose(r), smoothstep(1.0, 2.0, p));
        if (p < 3.0) return mix(solarRose(r), arcticCyan(r), smoothstep(2.0, 3.0, p));
        return mix(arcticCyan(r), electricIndigo(r), smoothstep(3.0, 4.0, p));
      }

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d2 = dot(uv, uv);
        if (d2 > 0.25) discard;

        float pointCore = exp(-22.0 * d2);
        float pointHalo = exp(-7.0 * d2);
        float colorDrive = clamp(uColorChangeIntensity, 0.0, 1.5);
        float morphDrive = clamp((0.30 + uMid * 0.78 + uTextureFeat * 0.46 + vEnergy * 0.22) * uMidPaletteMorph * colorDrive, 0.0, 1.0);

        vec3 col = mix(electricIndigo(vRadiusNorm), dynamicPalette(vRadiusNorm), morphDrive);

        // 音乐能量直接推动青蓝↔洋红色域，保证中频起伏时能肉眼辨认出色相变化。
        float musicColorDrive = clamp((uMid * 0.92 + uTextureFeat * 0.62 + vEnergy * 0.42) * colorDrive, 0.0, 1.0);
        float hueWave = 0.5 + 0.5 * sin((uPalettePhase + uAudioHueShift) * 6.28318 + vSeed * 2.1);
        vec3 musicAccent = mix(uArmColor, uAccentColor, hueWave);
        col = mix(col, musicAccent, musicColorDrive * 0.52);

        // 低频只加热核心/内旋臂，避免整片银河变红。
        float innerMask = 1.0 - smoothstep(0.16, 0.64, vRadiusNorm);
        float warmAmount = clamp(uBass * uBassWarmthColor * innerMask * colorDrive, 0.0, uWarmLimit);
        vec3 warmColor = mix(vec3(1.0, 0.63, 0.46), vec3(1.0, 0.82, 0.62), uCoreWarmth);
        col = mix(col, warmColor, warmAmount * 0.76);

        // GUI 的冷/紫偏向是 grade，不是独立彩虹色。
        col = mix(col, col * vec3(0.86, 0.90, 1.14), clamp(uCoolBias, 0.0, 1.0) * 0.35);
        col = mix(col, col * vec3(1.08, 0.84, 1.16), clamp(uVioletBias, 0.0, 1.0) * 0.38);

        // Kick/Downbeat 的颜色与几何传播共用同一个传播波前。
        float chromaticPulse = clamp(vPulse * uKickColorPulse * colorDrive, 0.0, 1.0);
        vec3 pulseColor = mix(vec3(1.0, 0.77, 0.56), vec3(0.96, 0.33, 0.77), smoothstep(0.08, 0.75, vRadiusNorm));
        col = mix(col, pulseColor, chromaticPulse * 0.76);

        // High 只给高亮恒星冰蓝/淡紫 tint，不驱动几何抖动。
        float highMask = clamp(vSparkle * uHighCoolTint * colorDrive, 0.0, 1.0);
        vec3 highTint = mix(vec3(0.80, 0.95, 1.00), vec3(0.88, 0.78, 1.00), fract(vSeed * 3.7));
        col = mix(col, highTint, highMask * 0.48);

        float colorLuma = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(colorLuma), col, uAudioSaturation);

        float coreWeight = 1.0 - smoothstep(0.06, 0.45, vRadiusNorm);
        float armWeight = 1.0 - step(1.5, vLayer);
        float baseBrightness = 0.52 + coreWeight * 0.32 + armWeight * 0.30 + vEnergy * 0.40 + vPulse * 0.58;
        float heroLike = smoothstep(uSparkleThreshold, 1.0, vSeed);
        float sparkleBoost = vSparkle * mix(0.35, 1.15, heroLike);
        float depth = clamp(1.0 - vDepth * uDepthFade, 0.30, 1.0);
        float luminance = (baseBrightness + sparkleBoost) * depth;

        vec3 finalCol = col * uColorIntensity * (pointCore * 1.12 + pointHalo * 0.24) * luminance;
        finalCol += highTint * pointCore * sparkleBoost * 0.30;
        float alpha = (pointCore * 0.94 + pointHalo * 0.17) * clamp(0.50 + luminance * 0.50, 0.0, 1.0);
        gl_FragColor = vec4(finalCol, alpha);
      }
    `}createDustMaterial(){let e=this.createCommonUniforms();return e.uSize={value:this.settings.dustSize},e.uOpacity={value:this.settings.dustOpacity},new f({transparent:!0,depthWrite:!1,...Q(),uniforms:e,vertexShader:this.getDustVertexShader(),fragmentShader:this.getDustFragmentShader()})}getDustVertexShader(){return`
      uniform float uTime;
      uniform float uGalaxyRadius;
      uniform float uBaseGalaxyRadius;
      uniform float uArmTightness;
      uniform float uBaseArmTightness;
      uniform float uArmWidth;
      uniform float uBaseArmWidth;
      uniform float uDiskThickness;
      uniform float uFeatherStrength;
      uniform float uSize;
      uniform float uRotationPhase;
      uniform float uBreathPhase;
      uniform float uExpansion;

      uniform float uMid;
      uniform float uEnergy;
      uniform float uTextureFeat;
      uniform float uSmoothnessFeat;

      uniform float uKick;
      uniform float uSnare;
      uniform float uDownbeat;
      uniform float uKickProgress;
      uniform float uSnareProgress;
      uniform float uDownbeatProgress;

      uniform float uMidBreath;
      uniform float uKickPulse;
      uniform float uSnareDust;
      uniform float uDownbeatBreath;
      uniform float uArmBreath;
      uniform float uPropagationStrength;

      attribute float aRadius;
      attribute float aSeed;
      attribute float aAlpha;
      attribute float aSizeJitter;
      attribute float aArmOffset;
      attribute float aFeatherOffset;

      varying float vRadiusNorm;
      varying float vAlpha;
      varying float vEnergy;
      varying float vDepth;
      varying float vPulse;
      varying float vTexture;

      mat2 rot(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat2(c, -s, s, c);
      }

      void main() {
        vec3 pos = position;
        float structureScale = uGalaxyRadius / max(1.0, uBaseGalaxyRadius);
        pos.xz *= structureScale;
        pos.y *= uDiskThickness;
        float shapeAngle =
          aRadius * (uArmTightness - uBaseArmTightness) +
          aArmOffset * (uArmWidth - uBaseArmWidth) +
          aFeatherOffset * (uFeatherStrength - 1.0);
        pos.xz = rot(shapeAngle) * pos.xz;
        pos.xz *= 1.0 + uExpansion;
        float rNorm = clamp(length(pos.xz) / max(1.0, uGalaxyRadius), 0.0, 1.15);

        float differential =
          mix(
            1.05,
            0.42,
            clamp(
              rNorm,
              0.0,
              1.0
            )
          );

        float flowAngle = uRotationPhase * differential;

        pos.xz =
          rot(flowAngle) *
          pos.xz;

        vec2 radialDir =
          length(pos.xz) > 0.001
            ? normalize(pos.xz)
            : vec2(1.0, 0.0);

        vec2 tangentDir =
          vec2(
            -radialDir.y,
            radialDir.x
          );

        float turbulence =
          sin(
            pos.x * 0.025 +
            uTime * 0.38 +
            aSeed * 7.0
          ) *
          cos(
            pos.z * 0.021 -
            uTime * 0.29 +
            aSeed * 5.0
          );

        turbulence *=
          mix(
            1.0,
            0.42,
            clamp(
              uSmoothnessFeat,
              0.0,
              1.0
            )
          );

        float textureAmp =
          (
            0.25 +
            uTextureFeat * 0.75
          ) *
          mix(
            0.8,
            2.8,
            rNorm
          );

        pos.xz +=
          tangentDir *
          turbulence *
          textureAmp;

        float breath =
          sin(
            uBreathPhase * 0.81 -
            rNorm * 8.0 +
            aSeed * 3.0
          ) *
          uMid *
          uMidBreath *
          uArmBreath;

        pos.xz +=
          radialDir *
          breath *
          mix(
            0.9,
            3.5,
            rNorm
          );

        pos.y +=
          breath *
          (aSeed - 0.5) *
          2.2;

        float kickWave =
          exp(
            -pow(
              (
                rNorm -
                uKickProgress
              ) /
                0.085,
              2.0
            )
          ) *
          uKick *
          uKickPulse *
          uPropagationStrength;

        float snareWave =
          exp(
            -pow(
              (
                rNorm -
                uSnareProgress
              ) /
                0.12,
              2.0
            )
          ) *
          uSnare *
          uSnareDust *
          uPropagationStrength;

        float downbeatWave =
          exp(
            -pow(
              (
                rNorm -
                uDownbeatProgress
              ) /
                0.20,
              2.0
            )
          ) *
          uDownbeat *
          uDownbeatBreath *
          uPropagationStrength;

        pos.xz +=
          radialDir *
          (
            kickWave * 5.5 +
            downbeatWave * 3.7
          );

        pos.y +=
          (aSeed - 0.5) *
          (
            snareWave * 8.0 +
            downbeatWave * 3.0
          );

        vec4 mvPos =
          modelViewMatrix *
          vec4(pos, 1.0);

        float perspective =
          300.0 /
          max(1.0, -mvPos.z);

        gl_PointSize =
          uSize *
          aSizeJitter *
          (
            1.0 +
            snareWave * 0.28 +
            uTextureFeat * 0.12
          ) *
          perspective;

        gl_Position =
          projectionMatrix *
          mvPos;

        vRadiusNorm = rNorm;
        vAlpha = aAlpha;
        vEnergy =
          clamp(
            uEnergy * 0.75 +
            uMid * 0.25,
            0.0,
            1.5
          );
        vDepth = -mvPos.z;
        vPulse =
          kickWave * 0.7 +
          snareWave +
          downbeatWave * 0.55;
        vTexture = uTextureFeat;
      }
    `}getDustFragmentShader(){return`
      uniform float uOpacity;
      uniform float uColorIntensity;
      uniform float uDepthFade;
      uniform float uBass;
      uniform float uMid;
      uniform float uTextureFeat;
      uniform float uColorChangeIntensity;
      uniform float uBassWarmthColor;
      uniform float uMidPaletteMorph;
      uniform float uKickColorPulse;
      uniform float uPalettePhase;
      uniform float uAudioHueShift;
      uniform float uAudioSaturation;
      uniform float uVioletBias;
      uniform float uCoolBias;
      uniform float uWarmLimit;
      uniform vec3 uArmColor;
      uniform vec3 uAccentColor;

      varying float vRadiusNorm;
      varying float vAlpha;
      varying float vEnergy;
      varying float vDepth;
      varying float vPulse;
      varying float vTexture;

      vec3 electricDust(float r) {
        return mix(uArmColor, uAccentColor, smoothstep(0.18, 0.88, r));
      }
      vec3 ultravioletDust(float r) {
        return mix(vec3(0.42, 0.26, 0.88), vec3(0.84, 0.24, 0.68), smoothstep(0.20, 0.90, r));
      }
      vec3 solarDust(float r) {
        return mix(vec3(0.94, 0.40, 0.48), vec3(0.48, 0.25, 0.80), smoothstep(0.15, 0.92, r));
      }
      vec3 arcticDust(float r) {
        return mix(vec3(0.18, 0.66, 0.90), vec3(0.24, 0.36, 0.78), smoothstep(0.20, 0.96, r));
      }
      vec3 dynamicDust(float r) {
        float p = fract(uPalettePhase + uAudioHueShift) * 4.0;
        if (p < 1.0) return mix(electricDust(r), ultravioletDust(r), smoothstep(0.0, 1.0, p));
        if (p < 2.0) return mix(ultravioletDust(r), solarDust(r), smoothstep(1.0, 2.0, p));
        if (p < 3.0) return mix(solarDust(r), arcticDust(r), smoothstep(2.0, 3.0, p));
        return mix(arcticDust(r), electricDust(r), smoothstep(3.0, 4.0, p));
      }

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d2 = dot(uv, uv);
        if (d2 > 0.25) discard;

        float softCore = exp(-8.2 * d2);
        float softHalo = exp(-3.4 * d2);
        float colorDrive = clamp(uColorChangeIntensity, 0.0, 1.5);
        float morph = clamp((0.28 + uMid * 0.72 + uTextureFeat * 0.52 + vEnergy * 0.24) * uMidPaletteMorph * colorDrive, 0.0, 1.0);
        vec3 col = mix(electricDust(vRadiusNorm), dynamicDust(vRadiusNorm), morph);

        float musicColorDrive = clamp((uMid * 0.86 + uTextureFeat * 0.72 + vEnergy * 0.46) * colorDrive, 0.0, 1.0);
        float hueWave = 0.5 + 0.5 * sin((uPalettePhase + uAudioHueShift) * 6.28318 + vRadiusNorm * 3.4);
        vec3 musicAccent = mix(uArmColor, uAccentColor, hueWave);
        col = mix(col, musicAccent, musicColorDrive * 0.58);

        float innerMask = 1.0 - smoothstep(0.12, 0.58, vRadiusNorm);
        float warmAmount = clamp(uBass * uBassWarmthColor * innerMask * colorDrive, 0.0, uWarmLimit);
        col = mix(col, vec3(0.96, 0.42, 0.46), warmAmount * 0.58);
        col = mix(col, col * vec3(0.88, 0.92, 1.14), clamp(uCoolBias, 0.0, 1.0) * 0.28);
        col = mix(col, col * vec3(1.10, 0.82, 1.14), clamp(uVioletBias, 0.0, 1.0) * 0.34);

        float pulse = clamp(vPulse * uKickColorPulse * colorDrive, 0.0, 1.0);
        vec3 pulseColor = mix(vec3(1.0, 0.53, 0.48), vec3(0.82, 0.28, 0.92), smoothstep(0.12, 0.82, vRadiusNorm));
        col = mix(col, pulseColor, pulse * 0.68);

        float colorLuma = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(colorLuma), col, uAudioSaturation);

        float depth = clamp(1.0 - vDepth * uDepthFade, 0.22, 1.0);
        float brightness = 0.54 + vEnergy * 0.26 + pulse * 0.38 + vTexture * 0.10;
        vec3 finalCol = col * uColorIntensity * (softCore * 0.72 + softHalo * 0.30) * brightness * depth;
        float alpha = uOpacity * vAlpha * (softCore * 0.55 + softHalo * 0.30) * clamp(0.72 + vEnergy * 0.20 + pulse * 0.18, 0.0, 1.15);
        gl_FragColor = vec4(finalCol, alpha);
      }
    `}createHeroMaterial(){let e=this.createCommonUniforms();return e.uSize={value:this.settings.heroSize},e.uHeroBrightness={value:this.settings.heroBrightness},new f({transparent:!0,depthWrite:!1,...Q(),uniforms:e,vertexShader:this.getHeroVertexShader(),fragmentShader:this.getHeroFragmentShader()})}getHeroVertexShader(){return`
      uniform float uTime;
      uniform float uGalaxyRadius;
      uniform float uBaseGalaxyRadius;
      uniform float uArmTightness;
      uniform float uBaseArmTightness;
      uniform float uArmWidth;
      uniform float uBaseArmWidth;
      uniform float uDiskThickness;
      uniform float uFeatherStrength;
      uniform float uSize;
      uniform float uRotationPhase;
      uniform float uExpansion;

      uniform float uHigh;
      uniform float uEnergy;

      uniform float uKick;
      uniform float uDownbeat;
      uniform float uKickProgress;
      uniform float uDownbeatProgress;

      uniform float uHighSparkle;
      uniform float uKickPulse;
      uniform float uDownbeatBreath;
      uniform float uPropagationStrength;

      attribute float aRadius;
      attribute float aSeed;
      attribute float aSizeJitter;
      attribute float aArmOffset;
      attribute float aFeatherOffset;

      varying float vRadiusNorm;
      varying float vSeed;
      varying float vTwinkle;
      varying float vPulse;
      varying float vDepth;

      mat2 rot(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat2(c, -s, s, c);
      }

      void main() {
        vec3 pos = position;
        float structureScale = uGalaxyRadius / max(1.0, uBaseGalaxyRadius);
        pos.xz *= structureScale;
        pos.y *= uDiskThickness;
        float shapeAngle =
          aRadius * (uArmTightness - uBaseArmTightness) +
          aArmOffset * (uArmWidth - uBaseArmWidth) +
          aFeatherOffset * (uFeatherStrength - 1.0);
        pos.xz = rot(shapeAngle) * pos.xz;
        pos.xz *= 1.0 + uExpansion;
        float rNorm = clamp(length(pos.xz) / max(1.0, uGalaxyRadius), 0.0, 1.15);

        float flow =
          uRotationPhase *
          mix(
            1.15,
            0.5,
            clamp(
              rNorm,
              0.0,
              1.0
            )
          );

        pos.xz =
          rot(flow) *
          pos.xz;

        vec2 radialDir =
          length(pos.xz) >
          0.001
            ? normalize(pos.xz)
            : vec2(
                1.0,
                0.0
              );

        float kickWave =
          exp(
            -pow(
              (
                rNorm -
                uKickProgress
              ) /
                0.065,
              2.0
            )
          ) *
          uKick *
          uKickPulse *
          uPropagationStrength;

        float downbeatWave =
          exp(
            -pow(
              (
                rNorm -
                uDownbeatProgress
              ) /
                0.17,
              2.0
            )
          ) *
          uDownbeat *
          uDownbeatBreath *
          uPropagationStrength;

        pos.xz +=
          radialDir *
          (
            kickWave * 6.5 +
            downbeatWave * 3.7
          );

        float twinkle =
          0.5 +
          0.5 *
          sin(
            uTime *
              (
                2.5 +
                aSeed * 6.0
              ) +
            aSeed * 28.0
          );

        float sparkle =
          twinkle *
          (
            0.28 +
            uHigh *
              uHighSparkle *
              1.15 +
            uEnergy * 0.18
          );

        vec4 mvPos =
          modelViewMatrix *
          vec4(
            pos,
            1.0
          );

        float perspective =
          300.0 /
          max(
            1.0,
            -mvPos.z
          );

        gl_PointSize =
          uSize *
          aSizeJitter *
          (
            0.72 +
            sparkle * 0.86 +
            kickWave * 0.28
          ) *
          perspective;

        gl_Position =
          projectionMatrix *
          mvPos;

        vRadiusNorm =
          rNorm;
        vSeed =
          aSeed;
        vTwinkle =
          sparkle;
        vPulse =
          kickWave +
          downbeatWave * 0.6;
        vDepth =
          -mvPos.z;
      }
    `}getHeroFragmentShader(){return`
      uniform float uHeroBrightness;
      uniform float uColorIntensity;
      uniform float uDepthFade;
      uniform float uColorChangeIntensity;
      uniform float uHighCoolTint;
      uniform float uKickColorPulse;
      uniform float uPalettePhase;
      uniform float uAudioHueShift;
      uniform float uAudioSaturation;
      uniform vec3 uCoreColor;
      uniform vec3 uArmColor;
      uniform vec3 uAccentColor;

      varying float vRadiusNorm;
      varying float vSeed;
      varying float vTwinkle;
      varying float vPulse;
      varying float vDepth;

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;

        float core = exp(-34.0 * d * d);
        float halo = exp(-8.0 * d * d);
        float rayX = exp(-95.0 * abs(uv.x)) * exp(-6.0 * abs(uv.y));
        float rayY = exp(-95.0 * abs(uv.y)) * exp(-6.0 * abs(uv.x));
        float rayMask = step(0.82, fract(vSeed * 5.17));
        float rays = (rayX + rayY) * rayMask;

        float phase = fract(uPalettePhase + uAudioHueShift);
        vec3 silver = uCoreColor;
        vec3 ice = mix(uCoreColor, uArmColor, 0.58);
        vec3 paleViolet = mix(uCoreColor, uAccentColor, 0.62);
        vec3 tint = mix(ice, paleViolet, 0.5 + 0.5 * sin(phase * 6.28318 + vSeed * 8.0));
        float highTint = clamp(vTwinkle * uHighCoolTint * uColorChangeIntensity, 0.0, 1.0);
        vec3 col = mix(silver, tint, highTint * 0.68);

        float pulse = clamp(vPulse * uKickColorPulse * uColorChangeIntensity, 0.0, 1.0);
        vec3 pulseColor = mix(vec3(1.0, 0.80, 0.58), vec3(0.96, 0.45, 0.82), smoothstep(0.08, 0.78, vRadiusNorm));
        col = mix(col, pulseColor, pulse * 0.70);

        float colorLuma = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(colorLuma), col, uAudioSaturation);

        float depth = clamp(1.0 - vDepth * uDepthFade, 0.32, 1.0);
        float luminosity = uHeroBrightness * uColorIntensity * depth * (0.76 + vTwinkle * 0.62 + pulse * 0.46);
        vec3 finalCol = col * (core * 1.35 + halo * 0.28 + rays * 0.16) * luminosity;
        float alpha = clamp(core * 0.98 + halo * 0.20 + rays * 0.10, 0.0, 1.0);
        gl_FragColor = vec4(finalCol, alpha);
      }
    `}updateEnvelope(e,t,n,r,i){let a=t>e?r:i;return e+(t-e)*(1-Math.exp(-n/Math.max(a,.001)))}updateWithAudioData(t,n){if(!t||t.isPlaying!==!0||!t.audioFeature?.animation){this.hasAudioData=!1,this._lastAudioTime=null,this._lastKickInput=0,this._lastSnareInput=0,this._lastDownbeatInput=!1;return}this.hasAudioData=!0;let r=Number.isFinite(n)?n*.001:performance.now()*.001,i=this._lastAudioTime===null?1/60:e.clamp(r-this._lastAudioTime,1/240,.1);this._lastAudioTime=r;let a=t.audioFeature.animation,o=this.getSmoothingScale();this.bass=this.updateEnvelope(this.bass,e.clamp(a.bass||0,0,1.5),i,.045*o,.38*o),this.mid=this.updateEnvelope(this.mid,e.clamp(a.mid||0,0,1.5),i,.07*o,.3*o),this.high=this.updateEnvelope(this.high,e.clamp(a.high||0,0,1.5),i,.025*o,.13*o),this.energyLevel=this.updateEnvelope(this.energyLevel,e.clamp(a.energy||0,0,1.5),i,.06*o,.34*o),this.motionVal=this.updateEnvelope(this.motionVal,e.clamp(a.motion||0,0,1.5),i,.07*o,.32*o),this.brightnessVal=this.updateEnvelope(this.brightnessVal,e.clamp(a.brightness||0,0,1.5),i,.08*o,.36*o),this.textureVal=this.updateEnvelope(this.textureVal,e.clamp(a.texture||0,0,1.5),i,.07*o,.28*o),this.smoothnessVal=this.updateEnvelope(this.smoothnessVal,e.clamp(a.smoothness??.5,0,1),i,.12*o,.42*o),this.variationVal=this.updateEnvelope(this.variationVal,e.clamp(a.variation||0,0,1.5),i,.09*o,.34*o);let s=e.clamp(a.kick||0,0,1.5),c=e.clamp(a.snare||0,0,1.5),l=e.clamp(a.hihat||0,0,1.5),u=!!(a.isDownbeat||(a.downbeat||0)>.5);s>.08&&s-this._lastKickInput>.04&&r-this._lastKickTime>.16&&(this._lastKickTime=r,this._kickProgress=0,this._kickEnvelope=Math.max(this._kickEnvelope,s)),c>.06&&c-this._lastSnareInput>.035&&r-this._lastSnareTime>.12&&(this._lastSnareTime=r,this._snareProgress=0,this._snareEnvelope=Math.max(this._snareEnvelope,c)),u&&!this._lastDownbeatInput&&(this._downbeatProgress=0,this._downbeatEnvelope=Math.max(this._downbeatEnvelope,e.clamp(a.downbeat||s||.72,0,1.5))),this._hihatEnvelope=Math.max(this._hihatEnvelope,l),this._lastKickInput=s,this._lastSnareInput=c,this._lastDownbeatInput=u,this.writeAudioUniforms()}getMaterials(){return[this.stellarMaterial,this.dustMaterial,this.heroMaterial].filter(Boolean)}getAudioDrives(){let t=Math.max(0,this.settings.sensitivity),n=(n,r=1)=>e.clamp(n*t*r,0,1.5);return{bass:n(this.bass),mid:n(this.mid),high:n(this.high),energy:n(this.energyLevel),brightness:n(this.brightnessVal),motion:n(this.motionVal,this.settings.motionIntensity),texture:n(this.textureVal,this.settings.textureIntensity),variation:n(this.variationVal,this.settings.variationIntensity),kick:n(this._kickEnvelope),snare:n(this._snareEnvelope),hihat:n(this._hihatEnvelope),downbeat:n(this._downbeatEnvelope)}}updateBloom(e,t){if(!this.bloomPass)return;this.settings.bloomStrength===0&&(this.bloomPass.strength=0);let n=this.settings.bloomStrength*(1+t.energy*.6+t.brightness*.25+t.kick*.4+t.downbeat*.3);this.bloomPass.strength=this.updateEnvelope(this.bloomPass.strength,n,e,.08,.3),this.bloomPass.radius=this.settings.bloomRadius,this.bloomPass.threshold=this.settings.bloomThreshold}writeAudioUniforms(){let t=this.getAudioDrives(),n={uBass:t.bass,uMid:t.mid,uHigh:t.high,uEnergy:t.energy,uTextureFeat:t.texture,uSmoothnessFeat:e.lerp(.75,this.smoothnessVal,e.clamp(this.settings.sensitivity,0,1)),uVariationFeat:t.variation,uKick:t.kick,uSnare:t.snare,uHihat:t.hihat,uDownbeat:t.downbeat,uKickProgress:this._kickProgress,uSnareProgress:this._snareProgress,uDownbeatProgress:this._downbeatProgress,uExpansion:Math.min(.06,t.energy*.03+t.bass*this.settings.bassFlow*.01),uBreathPhase:this._breathPhase,uAudioHueShift:t.mid*.48+t.high*.32+t.texture*.18+t.variation*.12,uAudioSaturation:1+Math.min(.5,(t.bass*.3+t.energy*.15)*this.settings.colorChangeIntensity)};for(let e of this.getMaterials())for(let[t,r]of Object.entries(n))e.uniforms[t]&&(e.uniforms[t].value=r)}render(){let t=performance.now()*.001,n=this._lastRenderTime===null?1/60:e.clamp(t-this._lastRenderTime,1/240,.05);this._lastRenderTime=t,this._kickProgress=Math.min(1,this._kickProgress+n*1.55),this._snareProgress=Math.min(1,this._snareProgress+n*1.25),this._downbeatProgress=Math.min(1,this._downbeatProgress+n*.78),this._kickEnvelope*=Math.exp(-n/.28),this._snareEnvelope*=Math.exp(-n/.22),this._hihatEnvelope*=Math.exp(-n/.085),this._downbeatEnvelope*=Math.exp(-n/.55),this.hasAudioData||this.updateIdleState(n);let r=this.getAudioDrives(),i=Math.max(0,(r.bass*this.settings.bassFlow*.85+r.motion*.25)*this.settings.flowStrength),a=i/(.5+i);this._rotationDrive=this.updateEnvelope(this._rotationDrive,a,n,.18*this.getSmoothingScale(),.55*this.getSmoothingScale()),this._breathPhase+=n*(.42+r.motion*.12);let o=(.025+Math.min(1,r.mid*.48+r.texture*.3+r.variation*.1+r.energy*.12)*.09+r.downbeat*.06*this.settings.downbeatColorDrift)*this.settings.colorEvolutionSpeed;this._palettePhase=(this._palettePhase+n*o)%1,this.writeAudioUniforms(),this.updateBloom(n,r);for(let e of this.getMaterials())e.uniforms.uRotationPhase.value+=n*this.settings.shaderRotationSpeed*(e===this.dustMaterial?.78:1)*(1+this._rotationDrive*1.4),e.uniforms.uTime&&(e.uniforms.uTime.value=t),e.uniforms.uPalettePhase&&(e.uniforms.uPalettePhase.value=this._palettePhase);this.mouseControls.autoRotate&&!this.mouseControls.isMouseDown&&this.galaxyGroup&&(this.galaxyGroup.rotation.y+=this.settings.rotationSpeed*n*60*(1+this._rotationDrive*.35)),this.controls?.update();try{this.composer?this.composer.render():this.renderer?.render(this.scene,this.camera)}catch(e){console.error(`❌ Animation4 渲染错误:`,e)}}updateIdleState(e){for(let t of[`bass`,`mid`,`high`,`energyLevel`,`motionVal`,`brightnessVal`,`textureVal`,`variationVal`])this[t]=this.updateEnvelope(this[t],0,e,.3,.55);this.smoothnessVal=this.updateEnvelope(this.smoothnessVal,.75,e,.4,.7)}syncAllUniforms(){this.normalizeSettings();let t=this.getPerceptualPaletteUniforms(),n={uGalaxyRadius:this.settings.galaxyRadius,uArmTightness:this.settings.armTightness,uArmWidth:this.settings.armWidth,uCoreDensity:this.settings.coreDensity,uDiskThickness:this.settings.diskThickness,uFeatherStrength:this.settings.featherStrength,uOuterSpread:this.settings.outerSpread,uBassFlow:this.settings.bassFlow,uMidBreath:this.settings.midBreath,uHighSparkle:this.settings.highSparkle,uKickPulse:this.settings.kickPulse,uSnareDust:this.settings.snareDust,uDownbeatBreath:this.settings.downbeatBreath,uFlowStrength:this.settings.flowStrength,uArmBreath:this.settings.armBreath,uPropagationStrength:this.settings.propagationStrength,uColorIntensity:this.settings.colorIntensity,uCoreWarmth:this.settings.coreWarmth,uDepthFade:this.settings.depthFade,uColorChangeIntensity:this.settings.colorChangeIntensity,uBassWarmthColor:this.settings.bassWarmthColor,uMidPaletteMorph:this.settings.midPaletteMorph,uHighCoolTint:this.settings.highCoolTint,uKickColorPulse:this.settings.kickColorPulse,uPalettePhase:this._palettePhase,uVioletBias:this.settings.violetBias,uCoolBias:this.settings.coolBias,uWarmLimit:this.settings.warmLimit,uCoreColor:t.core,uArmColor:t.arm,uAccentColor:t.accent,uDeepColor:t.deep};for(let e of this.getMaterials())for(let[t,r]of Object.entries(n))e.uniforms[t]&&(e.uniforms[t].value=r);this.stellarMaterial&&(this.stellarMaterial.uniforms.uSize.value=this.settings.stellarSize,this.stellarMaterial.uniforms.uSparkleThreshold.value=this.settings.sparkleThreshold),this.dustMaterial&&(this.dustMaterial.uniforms.uSize.value=this.settings.dustSize,this.dustMaterial.uniforms.uOpacity.value=this.settings.dustOpacity),this.heroMaterial&&(this.heroMaterial.uniforms.uSize.value=this.settings.heroSize,this.heroMaterial.uniforms.uHeroBrightness.value=this.settings.heroBrightness),this.stellarPoints?.geometry.setDrawRange(0,Math.round(e.clamp(this.settings.stellarCount,1,this.capacity.stellar))),this.dustPoints?.geometry.setDrawRange(0,Math.round(e.clamp(this.settings.dustCount,1,this.capacity.dust))),this.heroPoints?.geometry.setDrawRange(0,Math.round(e.clamp(this.settings.heroCount,1,this.capacity.hero))),this.renderer&&(this.renderer.toneMappingExposure=this.settings.exposure),this.bloomPass&&(this.updateBloom(0,this.getAudioDrives()),this.bloomPass.radius=this.settings.bloomRadius,this.bloomPass.threshold=this.settings.bloomThreshold),this.syncAutoRotation(),this.writeAudioUniforms();for(let e of this.gui?.controllersRecursive()??[])e.updateDisplay()}normalizeSettings(){for(let[t,[n,r]]of Object.entries($)){let i=this.settings[t];this.settings[t]=Number.isFinite(i)?e.clamp(i,n,r):this.defaultSettings[t]}for(let e of[`stellarCount`,`dustCount`,`heroCount`])this.settings[e]=Math.round(this.settings[e]);for(let e of[`coreColor`,`armColor`,`accentColor`,`deepColor`])(typeof this.settings[e]!=`string`||!/^#[0-9a-f]{6}$/i.test(this.settings[e]))&&(this.settings[e]=this.defaultSettings[e]);typeof this.settings.autoRotate!=`boolean`&&(this.settings.autoRotate=this.defaultSettings.autoRotate)}getSmoothingScale(){return e.lerp(.55,1.9,this.settings.smoothing)}syncAutoRotation(){this.mouseControls.autoRotate=this.settings.autoRotate&&!this.mouseControls.isMouseDown&&!this._autoRotateTimer}updateSettings(e){for(let t of Object.keys(this.defaultSettings))Object.prototype.hasOwnProperty.call(e,t)&&(this.settings[t]=e[t]);this.requestUniformSync()}requestUniformSync(){if(this._guiPreferencesLoading){this._pendingUniformSync=!0;return}this.syncAllUniforms()}beginGuiPreferencesLoad(){this._guiPreferencesLoading||=(this._guiSettingsBeforeLoad={...this.settings},this._pendingUniformSync=!1,!0)}endGuiPreferencesLoad(e=!0){!e&&this._guiSettingsBeforeLoad&&Object.assign(this.settings,this._guiSettingsBeforeLoad),this._guiPreferencesLoading=!1,this._guiSettingsBeforeLoad=null;let t=this._pendingUniformSync||!e;this._pendingUniformSync=!1,t&&this.syncAllUniforms()}setupMouseControls(){let e=this.renderer.domElement,t=t=>{t.button===0&&(this.mouseControls.isMouseDown=!0,this.mouseControls.autoRotate=!1,this._autoRotateTimer&&clearTimeout(this._autoRotateTimer),e.setPointerCapture?.(t.pointerId))},n=e=>{e.type!==`pointercancel`&&e.button!==0||this.mouseControls.isMouseDown&&(this.mouseControls.isMouseDown=!1,this._autoRotateTimer&&clearTimeout(this._autoRotateTimer),this._autoRotateTimer=setTimeout(()=>{this._autoRotateTimer=null,this.mouseControls.isMouseDown||(this.mouseControls.autoRotate=this.settings.autoRotate)},1800))},r=()=>{this.mouseControls.autoRotate=!1,this._autoRotateTimer&&clearTimeout(this._autoRotateTimer),this._autoRotateTimer=setTimeout(()=>{this._autoRotateTimer=null,this.mouseControls.isMouseDown||(this.mouseControls.autoRotate=this.settings.autoRotate)},1e3)},i=e=>{e.preventDefault()};this._mouseHandlers={onPointerDown:t,onPointerUp:n,onWheel:r,onContextMenu:i},e.addEventListener(`pointerdown`,t),window.addEventListener(`pointerup`,n),window.addEventListener(`pointercancel`,n),e.addEventListener(`wheel`,r,{passive:!0}),e.addEventListener(`contextmenu`,i)}onWindowResize(){try{if(!this.camera||!this.renderer)return;let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer?.setSize(e,t),this.controls?.handleResize()}catch(e){console.error(`❌ Animation4 窗口调整错误:`,e)}}resetState(){this.hasAudioData=!1,this.bass=0,this.mid=0,this.high=0,this.energyLevel=0,this.motionVal=0,this.brightnessVal=0,this.textureVal=0,this.smoothnessVal=.5,this.variationVal=0,this._kickEnvelope=0,this._snareEnvelope=0,this._hihatEnvelope=0,this._downbeatEnvelope=0,this._kickProgress=1,this._snareProgress=1,this._downbeatProgress=1,this._lastKickInput=0,this._lastSnareInput=0,this._lastDownbeatInput=!1,this._lastAudioTime=null,this._lastKickTime=-1/0,this._lastSnareTime=-1/0,this._rotationDrive=0,this._palettePhase=.055,this.writeAudioUniforms()}resetCamera(){this.camera&&(this.controls?(this.controls.reset(),this.controls._lastAngle=0,this.controls._movePrev.copy(this.controls._moveCurr),this.controls._zoomStart.copy(this.controls._zoomEnd),this.controls._panStart.copy(this.controls._panEnd),this.controls._touchZoomDistanceStart=this.controls._touchZoomDistanceEnd,this.controls.update()):(this.camera.position.set(-255.28,264.2,355.51),this.camera.up.set(0,1,0),this.camera.zoom=1,this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()))}resetGuiCamera(){this.resetCamera()}createGUIContainer(){let e=document.getElementById(`Animation4-settings-button`);e||(e=y(`Animation4-settings-button`),document.body.appendChild(e)),this.settingsButton=e,e._animation4Handler&&e.removeEventListener(`click`,e._animation4Handler),e._animation4Handler=()=>this.toggleGUI(),e.addEventListener(`click`,e._animation4Handler);let t=document.getElementById(`Animation4-gui-container`);t||(t=x(`Animation4-gui-container`),document.body.appendChild(t));let n=document.getElementById(`Animation4-gui-scrollbar-style`);n||(n=S(`Animation4-gui-container`),n.id=`Animation4-gui-scrollbar-style`),this.guiContainer=t,this.guiScrollbarStyle=n}createGUI(){if(this.gui&&this.gui.destroy(),this.createGUIContainer(),!this.settingsButton||!this.guiContainer)return;this.gui=new v({container:this.guiContainer,title:`银河旋臂`}),this.gui.$title.style.pointerEvents=`none`,this.guiVisible?this.gui.show():this.gui.hide();let e=e=>e.onChange(()=>this.requestUniformSync()),t=(e,t)=>e.add(this.settings,t,...$[t]),n=this.gui.addFolder(`银河构图`);e(t(n,`galaxyRadius`).name(`银河尺寸`)),e(t(n,`armTightness`).name(`旋臂紧密度`)),e(t(n,`armWidth`).name(`旋臂宽度`)),e(t(n,`coreDensity`).name(`核心集中度`)),e(t(n,`diskThickness`).name(`盘面厚度`)),e(t(n,`featherStrength`).name(`羽状支流`)),e(t(n,`outerSpread`).name(`外围扩散`)),e(t(n,`stellarCount`).name(`恒星数量`)),e(t(n,`dustCount`).name(`星云数量`)),e(t(n,`heroCount`).name(`亮星数量`));let r=this.gui.addFolder(`材质与光效`);e(t(r,`stellarSize`).name(`恒星尺寸`)),e(t(r,`dustSize`).name(`星云尺寸`)),e(t(r,`dustOpacity`).name(`星云透明度`)),e(t(r,`heroSize`).name(`亮星尺寸`)),e(t(r,`heroBrightness`).name(`亮星亮度`)),e(t(r,`sparkleThreshold`).name(`闪耀星筛选阈值`)),e(t(r,`colorIntensity`).name(`整体亮度`)),e(t(r,`depthFade`).name(`空间衰减`)),e(t(r,`exposure`).name(`曝光`));let i=this.gui.addFolder(`泛光效果`);e(t(i,`bloomStrength`).name(`泛光强度`)),e(t(i,`bloomRadius`).name(`泛光范围`)),e(t(i,`bloomThreshold`).name(`泛光阈值`));let a=this.gui.addFolder(`综合色彩`);e(a.addColor(this.settings,`coreColor`).name(`核心颜色`)),e(a.addColor(this.settings,`armColor`).name(`旋臂颜色`)),e(a.addColor(this.settings,`accentColor`).name(`强调颜色`)),e(a.addColor(this.settings,`deepColor`).name(`深空颜色`)),e(t(a,`colorChangeIntensity`).name(`颜色变化强度`)),e(t(a,`bassWarmthColor`).name(`低频色温响应`)),e(t(a,`midPaletteMorph`).name(`中频Palette Morph`)),e(t(a,`highCoolTint`).name(`高频冷色闪耀`)),e(t(a,`kickColorPulse`).name(`节拍颜色传播`)),e(t(a,`downbeatColorDrift`).name(`重拍色彩演化`)),e(t(a,`colorEvolutionSpeed`).name(`色彩演化速度`)),e(t(a,`violetBias`).name(`紫色倾向`)),e(t(a,`coolBias`).name(`冷色倾向`)),e(t(a,`warmLimit`).name(`暖色上限`)),e(t(a,`coreWarmth`).name(`核心暖色`));let o=this.gui.addFolder(`银河运动`);e(t(o,`rotationSpeed`).name(`整体旋转`)),e(t(o,`shaderRotationSpeed`).name(`差速流速`)),e(t(o,`flowStrength`).name(`流场强度`)),e(t(o,`armBreath`).name(`旋臂呼吸`)),e(t(o,`propagationStrength`).name(`传播强度`));let s=e(o.add(this.settings,`autoRotate`).name(`自动旋转`));s.domElement.title=`控制银河整体旋转；旋臂内部的差速流动由差速流速独立控制。`;let c=this.gui.addFolder(`音频响应`);e(t(c,`sensitivity`).name(`整体敏感度`)),e(t(c,`smoothing`).name(`平滑系数`)),e(t(c,`bassFlow`).name(`Bass→流动`)),e(t(c,`midBreath`).name(`Mid→呼吸`)),e(t(c,`highSparkle`).name(`High→闪耀`)),e(t(c,`kickPulse`).name(`Kick→传播`)),e(t(c,`snareDust`).name(`Snare→星云`)),e(t(c,`downbeatBreath`).name(`Downbeat→呼吸`)),e(t(c,`motionIntensity`).name(`Motion强度`)),e(t(c,`textureIntensity`).name(`Texture强度`)),e(t(c,`variationIntensity`).name(`Variation强度`))}toggleGUI(){return this.gui?(this.guiVisible=!this.guiVisible,this.guiVisible?this.gui.show():this.gui.hide(),this.guiVisible):!1}setEffectMode(e){return console.log(`✅ Animation4 使用固定效果模式: Cinematic Living Galaxy`),e===`galaxy`||e==null}hasEffectModes(){return!1}triggerEffect(){this._kickProgress=0,this._kickEnvelope=Math.max(this._kickEnvelope,.9),this.writeAudioUniforms()}dispose(){try{this._autoRotateTimer&&=(clearTimeout(this._autoRotateTimer),null);let e=this.renderer?.domElement;if(e&&this._mouseHandlers&&(e.removeEventListener(`pointerdown`,this._mouseHandlers.onPointerDown),window.removeEventListener(`pointerup`,this._mouseHandlers.onPointerUp),window.removeEventListener(`pointercancel`,this._mouseHandlers.onPointerUp),e.removeEventListener(`wheel`,this._mouseHandlers.onWheel),e.removeEventListener(`contextmenu`,this._mouseHandlers.onContextMenu)),this._mouseHandlers=null,this.settingsButton?._animation4Handler&&(this.settingsButton.removeEventListener(`click`,this.settingsButton._animation4Handler),delete this.settingsButton._animation4Handler),b(this.settingsButton,this.guiContainer,this.gui),this.guiScrollbarStyle?.remove(),this.settingsButton=null,this.guiContainer=null,this.gui=null,this.guiScrollbarStyle=null,this.controls?.dispose(),this.controls=null,this.disposeGalaxyLayers(),this.composer){for(let e of this.composer.passes)e.dispose?.();this.composer.dispose(),this.composer=null}this.renderer&&=(this.renderer.dispose(),null),this.scene=null,this.camera=null,this.bloomPass=null,console.log(`✅ Animation4 V2 资源已清理`)}catch(e){console.error(`❌ Animation4 V2 清理资源错误:`,e)}}};export{ae as default};