import{$n as e,At as t,Cr as n,F as r,Gt as i,I as a,Jt as o,Kt as s,Lr as c,Lt as l,Mr as u,Nr as d,Ot as f,P as p,Pr as m,Q as h,T as g,Tt as _,Ut as v,V as y,W as b,X as x,Y as S,Yt as C,Z as w,Zt as T,_ as E,b as D,d as O,dr as k,dt as ee,ir as te,it as A,jt as j,kt as M,l as N,m as P,n as F,nr as I,p as ne,pt as re,qt as ie,r as ae,rn as oe,sr as se,tr as ce,tt as le,u as L,ur as ue,vr as de,yr as fe,z as pe}from"./three.module-Cl1eh3-1.js";import{n as me,r as he,t as ge}from"./OutputPass-DN_92Khf.js";import{a as _e,i as ve,n as ye,r as be,t as xe}from"./GUIHelper-DNd0uFVI.js";import{t as Se}from"./UnrealBloomPass-j9pxWeyB.js";import{t as Ce}from"./OrbitControls-Bw7OgNlo.js";var we=class e extends M{constructor(t,r={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,a=r.color===void 0?new E(8355711):new E(r.color),o=r.textureWidth||512,l=r.textureHeight||512,u=r.clipBias||0,p=r.shader||e.ReflectorShader,h=r.multisample===void 0?4:r.multisample,g=new s,_=new d,v=new d,y=new d,b=new f,S=new d(0,0,-1),C=new m,w=new d,T=new d,D=new m,O=new f,k=new c(o,l,{samples:h,type:x}),ee=new I({name:p.name===void 0?`unspecified`:p.name,uniforms:n.clone(p.uniforms),fragmentShader:p.fragmentShader,vertexShader:p.vertexShader});ee.uniforms.tDiffuse.value=k.texture,ee.uniforms.color.value=a,ee.uniforms.textureMatrix.value=O,this.material=ee,this.onBeforeRender=function(e,t,n){let r=this.getReflectionCamera(n);if(v.setFromMatrixPosition(i.matrixWorld),y.setFromMatrixPosition(n.matrixWorld),b.extractRotation(i.matrixWorld),_.set(0,0,1),_.applyMatrix4(b),w.subVectors(v,y),w.dot(_)>0&&this.forceUpdate===!1)return;w.reflect(_).negate(),w.add(v),b.extractRotation(n.matrixWorld),S.set(0,0,-1),S.applyMatrix4(b),S.add(y),T.subVectors(v,S),T.reflect(_).negate(),T.add(v),r.position.copy(w),r.up.set(0,1,0),r.up.applyMatrix4(b),r.up.reflect(_),r.lookAt(T),r.far=n.far,r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),O.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),O.multiply(r.projectionMatrix),O.multiply(r.matrixWorldInverse),O.multiply(i.matrixWorld),g.setFromNormalAndCoplanarPoint(_,v),g.applyMatrix4(r.matrixWorldInverse),C.set(g.normal.x,g.normal.y,g.normal.z,g.constant);let a=r.projectionMatrix;r.isOrthographicCamera?(D.x=(Math.sign(C.x)+a.elements[8])/a.elements[0],D.y=(Math.sign(C.y)+a.elements[9])/a.elements[5],D.z=-n.far,D.w=1):(D.x=(Math.sign(C.x)+a.elements[8])/a.elements[0],D.y=(Math.sign(C.y)+a.elements[9])/a.elements[5],D.z=-1,D.w=(1+a.elements[10])/a.elements[14]),C.multiplyScalar(2/C.dot(D)),a.elements[2]=C.x,a.elements[6]=C.y,r.isOrthographicCamera?(a.elements[10]=C.z-u,a.elements[14]=C.w-1):(a.elements[10]=C.z+1-u,a.elements[14]=C.w),i.visible=!1;let o=e.getRenderTarget(),s=e.xr.enabled,c=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(k),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,r),e.xr.enabled=s,e.shadowMap.autoUpdate=c,e.setRenderTarget(o);let l=n.viewport;l!==void 0&&e.state.viewport(l),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return k},this.dispose=function(){k.dispose(),i.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};we.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function R(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new O,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Te(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Te(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Te(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new L(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Ee(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${~~(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var De={GRASS_COUNT:22e3,SHADOW_MAP_SIZE:2048,MAX_PIXEL_RATIO:1.5,USE_BLOOM:!0,MSAA_SAMPLES:4,ADAPTIVE:!0,PARTICLES:{petals:360,pollen:240,leaves:300,snow:1700,fireflies:80}},Oe=1.8,ke=1.8,Ae=.012,je=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,Me=je?.7:2.5,Ne=je?.5:1.6,z=24,Pe=z/2,Fe=.1,Ie=.78,Le=-6.5,Re=-6.8,B=.3,V=.7,ze=7.7,Be=6.4,Ve=-.12,He=7.8,Ue=-7.1,We=-3.2,Ge=[[-7.1,5.2],[-7.7,4.5],[-8,3.5],[-7.8,2.5],[-7,1.6],[-5.8,1.15],[-4.7,1.45],[-3.6,1.2],[-2.5,.75],[-1.5,.06],[-.72,-.72],[.06,-1.5],[.65,-2.35],[.3,-3.3],[0,-4.2],[.6,-5.6],[1.1,-7.05],[1.8,-8.15],[2,-9.2],[1.45,-10.5],[1.7,-11.98]],{clamp:H,lerp:U,smoothstep:W,degToRad:Ke}=_,G=(()=>{let e=18498338;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}})(),K=(e,t)=>e+(t-e)*G();function qe(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)}function Je(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=qe(n,r),l=qe(n+1,r),u=qe(n,r+1),d=qe(n+1,r+1);return(1-s)*((1-o)*c+o*l)+s*((1-o)*u+o*d)}function Ye(e,t){let n=0,r=.55,i=1,a=1;for(let o=0;o<4;o++){let o=1-Math.abs(Je(e*i,t*i)*2-1);o*=o,n+=o*r*a,a=o,i*=2.1,r*=.5}return n}function Xe(e,t){return Math.abs($e(e,t)-1.28)*6.7}function Ze(e,t){let n=e-Le,r=t-Re,i=Math.hypot(n,r),a=Math.max(0,1-i/5.2),o=Ye(e*.7+3,t*.7-7),s=a**1.35*4.7*(.85+o*.3);return s=U(4.55,s,W(i,.85,1.65)),s}function Qe(e){return 1+.055*Math.sin(e*3+.5)+.035*Math.cos(e*5)}function $e(e,t){let n=(e-B)/ze,r=(t-V)/Be;return Math.hypot(n,r)/Qe(Math.atan2(r,n))}function et(e){let t=Qe(e)*1.28;return{x:B+Math.cos(e)*ze*t,z:V+Math.sin(e)*Be*t}}function tt(e){return .34+.08*Math.sin(e-.4)}function q(e,t){if(Math.abs(e)>12.001||Math.abs(t)>12.001)return We;let n=$e(e,t),r=Math.atan2((t-V)/Be,(e-B)/ze),i=.38+Je(e*.52,t*.52)*.3+Ze(e,t),a=U(Ve-.9+.82*Math.min(n,1)**2.8,i,W(n,.985,1.16)),o=Xe(e,t);a=U(tt(r),a,W(o,.44,1.12));let s=Math.hypot(e-He,t-Ue);return a=U(.67,a,W(s,1.25,1.8)),a}var nt=e=>e.index?e.toNonIndexed():e,J=new d,Y=new d,X=new v,rt=new E,Z={uTime:{value:0},uWindTime:{value:0},uAudioWind:{value:1},uFlowTime:{value:0},uWindDir:{value:new u(.82,.57).normalize()},uSeasonW:{value:new m(1,0,0,0)},uNight:{value:0},uSnowLine:{value:4.8},uSnowCoverage:{value:0},uFrost:{value:0},uLush:{value:.5},uDry:{value:0},uFreeze:{value:0},uFoam:{value:1},uGrassHeight:{value:1},uCanopy:{value:1},uFlowers:{value:.4},uMeadowTint:{value:new d(1,1,1)},uGrassBase:{value:new E},uGrassTip:{value:new E},uFogColor:{value:new E},uHeightFog:{value:.3},uSunDir:{value:new d(.5,.5,-.5)},uSunColor:{value:new E},uSkyTop:{value:new E},uSkyMid:{value:new E},uSkyBottom:{value:new E},uParticleRates:{value:new m},uFireflyRate:{value:0}},it=`
            uniform float uTime; uniform float uWindTime; uniform float uAudioWind; uniform float uFlowTime; uniform vec2 uWindDir;
            uniform vec4 uSeasonW; uniform float uNight;
            uniform float uSnowLine; uniform float uSnowCoverage; uniform float uFrost; uniform float uLush; uniform float uDry;
            uniform float uFreeze; uniform float uFoam; uniform float uGrassHeight; uniform float uCanopy; uniform float uFlowers;
            uniform vec3 uMeadowTint; uniform vec3 uGrassBase; uniform vec3 uGrassTip;
            uniform vec3 uFogColor; uniform float uHeightFog; uniform vec3 uSunDir; uniform vec3 uSunColor;
        `,at=`
            float sn_hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
            float sn_noise(vec2 p) {
                vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
                return mix(mix(sn_hash(i), sn_hash(i + vec2(1.0, 0.0)), f.x),
                           mix(sn_hash(i + vec2(0.0, 1.0)), sn_hash(i + vec2(1.0, 1.0)), f.x), f.y);
            }
            float sn_fbm(vec2 p) {
                float v = 0.0; float a = 0.5;
                for (int i = 0; i < 4; i++) { v += a * sn_noise(p); p = p * 2.03 + vec2(17.2, 9.1); a *= 0.5; }
                return v;
            }
        `,ot=`
            {
                vec4 snWp = vec4(transformed, 1.0);
                #ifdef USE_INSTANCING
                    snWp = instanceMatrix * snWp;
                #endif
                vWPos = (modelMatrix * snWp).xyz;
            }
        `,st=`
            {
                vec3 snN = objectNormal;
                #ifdef USE_INSTANCING
                    snN = mat3(instanceMatrix) * snN;
                #endif
                vWNrm = normalize(mat3(modelMatrix) * snN);
            }
        `,ct=`
            {
                float hfDist = length(vWPos - cameraPosition);
                float hfHeight = exp(-max(vWPos.y + 0.15, 0.0) * 1.25);
                float hf = uHeightFog * hfHeight * (1.0 - exp(-hfDist * 0.06));
                gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor * 1.08, clamp(hf, 0.0, 0.72));
            }
        `,lt=(e=`1.0`)=>`
            {
                float sdN = sn_noise(vWPos.xz * 3.1) * 0.6 + sn_noise(vWPos.xz * 9.0) * 0.4;
                float sd = uSnowCoverage * (${e}) * smoothstep(0.38, 0.78, vWNrm.y + (sdN - 0.5) * 0.5);
                diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.88, 0.92, 0.97), sd);
            }
        `;function Q(e,{key:t,uniforms:n=null,worldPos:r=!1,worldNormal:i=!1,heightFog:a=!0,vertexPars:o=``,vertexBegin:s=``,fragmentPars:c=``,diffuse:l=``,fragmentColor:u=``,fragmentRoughness:d=``,fragmentEmissive:f=``,fragmentNormal:p=``}){let m=r||a||i;return e.onBeforeCompile=e=>{Object.assign(e.uniforms,Z),n&&Object.assign(e.uniforms,n);let t=(m?`varying vec3 vWPos;
`:``)+(i?`varying vec3 vWNrm;
`:``),r=it+at+t+o+`
`+e.vertexShader;s&&(r=r.replace(`#include <begin_vertex>`,`#include <begin_vertex>
`+s)),i&&(r=r.replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
`+st)),m&&(r=r.replace(`#include <project_vertex>`,`#include <project_vertex>
`+ot)),e.vertexShader=r;let h=it+at+t+c+`
`+e.fragmentShader;l&&(h=h.replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,l)),u&&(h=h.replace(`#include <color_fragment>`,`#include <color_fragment>
`+u)),d&&(h=h.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+d)),p&&(h=h.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
`+p)),f&&(h=h.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
`+f)),a&&(h=h.replace(`#include <fog_fragment>`,`#include <fog_fragment>
`+ct)),e.fragmentShader=h},e.customProgramCacheKey=()=>`alpine-`+t,e}function ut(e,t,n){let r=new j({depthPacking:oe});return r.onBeforeCompile=e=>{Object.assign(e.uniforms,Z),e.vertexShader=it+at+t+`
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
`+n)},r.customProgramCacheKey=()=>`alpine-depth-`+e,r}var dt=[{key:`spring`,name:`Spring`,grassBase:`#347d25`,grassTip:`#b5ea68`,grassHeight:.95,meadowTint:[1.02,1.12,.86],lush:1,dry:0,frost:0,snowLine:3.55,snowCoverage:0,freeze:0,flow:1.7,foam:1.5,fogTint:[1,1.03,1.04],fogDensity:.014,heightFog:.3,skyTint:[.98,1.02,1.05],cloudShade:.05,particles:[1,.2,0,0],fireflies:.25,birds:7,flowers:1,canopy:1,sunElev:0,smoke:.35},{key:`summer`,name:`Summer`,grassBase:`#32781f`,grassTip:`#9ad64e`,grassHeight:1.1,meadowTint:[.95,1.03,.8],lush:.55,dry:.1,frost:0,snowLine:4.85,snowCoverage:0,freeze:0,flow:1,foam:1,fogTint:[1,1,1],fogDensity:.012,heightFog:.18,skyTint:[1,1,1],cloudShade:0,particles:[0,1,0,0],fireflies:1,birds:9,flowers:.4,canopy:1,sunElev:.12,smoke:.15},{key:`autumn`,name:`Autumn`,grassBase:`#7a6a2a`,grassTip:`#f5a43a`,grassHeight:.9,meadowTint:[1.22,1,.62],lush:0,dry:1,frost:.05,snowLine:7.5,snowCoverage:.06,freeze:.04,flow:.85,foam:.8,fogTint:[1.07,.98,.9],fogDensity:.016,heightFog:.45,skyTint:[1.06,.97,.88],cloudShade:.18,particles:[0,0,1,0],fireflies:.35,birds:5,flowers:0,canopy:1,sunElev:-.08,smoke:.75},{key:`winter`,name:`Winter`,grassBase:`#b9c4bd`,grassTip:`#f1f6f5`,grassHeight:.2,meadowTint:[.86,.92,1],lush:0,dry:.25,frost:1,snowLine:.16,snowCoverage:1,freeze:1,flow:.04,foam:.1,fogTint:[.95,1,1.08],fogDensity:.018,heightFog:.35,skyTint:[.9,.97,1.08],cloudShade:.38,particles:[0,0,0,1],fireflies:0,birds:0,flowers:0,canopy:0,sunElev:-.16,smoke:1}],ft=[{key:`sunset`,name:`Golden sunset`,lightDir:[.62,.34,-.7],sunColor:`#ffcf96`,sunIntensity:1,hemiSky:`#ffd6b8`,hemiGround:`#3b2b2c`,hemiIntensity:.6,skyTop:`#1d3a66`,skyMid:`#e98a60`,skyBottom:`#ffb65c`,fog:`#5a5460`,exposure:1.05,windows:3,lantern:1.6,stars:.06,night:0,sunBody:1,moonBody:0,glow:`#ffb56b`,glowScale:5.2,carLights:.35},{key:`noon`,name:`High noon`,lightDir:[.3,.92,-.28],sunColor:`#fff5e8`,sunIntensity:1.3,hemiSky:`#cfe4ff`,hemiGround:`#4d5a3c`,hemiIntensity:.8,skyTop:`#2c7fd8`,skyMid:`#78b8f3`,skyBottom:`#d8edff`,fog:`#9cc2dc`,exposure:.98,windows:.15,lantern:0,stars:0,night:0,sunBody:1,moonBody:0,glow:`#fff4dd`,glowScale:4,carLights:0},{key:`night`,name:`Moonlit night`,lightDir:[-.5,.62,-.6],sunColor:`#a9c2ff`,sunIntensity:.55,hemiSky:`#4a6190`,hemiGround:`#121426`,hemiIntensity:.85,skyTop:`#02040c`,skyMid:`#08142e`,skyBottom:`#191339`,fog:`#0e152a`,exposure:1.22,windows:5,lantern:3.2,stars:1,night:1,sunBody:0,moonBody:1,glow:`#7fc4ff`,glowScale:3.6,carLights:1}];function pt(e){return e.map(e=>{let t={};for(let[n,r]of Object.entries(e))typeof r==`string`&&r[0]===`#`?t[n]=new E(r):Array.isArray(r)?t[n]=r.length===4?new m(...r):new d(...r):t[n]=r;return t})}var mt=class{constructor(e){this.list=pt(e),this.keys=Object.keys(this.list[0]).filter(e=>typeof this.list[0][e]!=`string`),this.out={};for(let e of this.keys){let t=this.list[0][e];this.out[e]=typeof t==`number`?0:t.clone()}}blend(e){let{list:t,keys:n,out:r}=this;for(let i=0;i<n.length;i++){let a=n[i],o=r[a];if(typeof o==`number`){let n=0;for(let r=0;r<t.length;r++)n+=t[r][a]*e[r];r[a]=n}else if(o.isColor){o.setRGB(0,0,0);for(let n=0;n<t.length;n++){let r=t[n][a],i=e[n];o.r+=r.r*i,o.g+=r.g*i,o.b+=r.b*i}}else{o.multiplyScalar(0);for(let n=0;n<t.length;n++)o.addScaledVector(t[n][a],e[n])}}return r}},ht=e=>e*e*e*(e*(e*6-15)+10),gt=class{constructor(e=0,t=1){this.seasons=new mt(dt),this.times=new mt(ft),this.seasonIndex=e,this.timeIndex=t,this.sW=[0,0,0,0],this.sW[e]=1,this.sFrom=[...this.sW],this.sTo=[...this.sW],this.tW=[0,0,0],this.tW[t]=1,this.tFrom=[...this.tW],this.tTo=[...this.tW],this.sProgress=1,this.tProgress=1,this.listeners=[],this.season=this.seasons.blend(this.sW),this.time=this.times.blend(this.tW),this.lightDir=new d,this.update(0)}on(e){this.listeners.push(e)}emit(e){for(let t of this.listeners)t(e,this)}get seasonKey(){return dt[this.seasonIndex].key}get seasonName(){return dt[this.seasonIndex].name}get timeName(){return ft[this.timeIndex].name}setSeason(e){!Number.isInteger(e)||e<0||e>=dt.length||e===this.seasonIndex||(this.sFrom=[...this.sW],this.sTo=[0,0,0,0],this.sTo[e]=1,this.seasonIndex=e,this.sProgress=0,this.emit(`season`))}setTime(e){!Number.isInteger(e)||e<0||e>=ft.length||e===this.timeIndex||(this.tFrom=[...this.tW],this.tTo=[0,0,0],this.tTo[e]=1,this.timeIndex=e,this.tProgress=0,this.emit(`time`))}update(e){if(this.sProgress<1){this.sProgress=Math.min(1,this.sProgress+e/Me);let t=ht(this.sProgress);for(let e=0;e<4;e++)this.sW[e]=U(this.sFrom[e],this.sTo[e],t)}if(this.tProgress<1){this.tProgress=Math.min(1,this.tProgress+e/Ne);let t=ht(this.tProgress);for(let e=0;e<3;e++)this.tW[e]=U(this.tFrom[e],this.tTo[e],t)}let t=this.season=this.seasons.blend(this.sW),n=this.time=this.times.blend(this.tW);this.lightDir.copy(n.lightDir).normalize(),this.lightDir.y=Math.max(.12,this.lightDir.y+t.sunElev),this.lightDir.normalize(),Z.uSeasonW.value.set(this.sW[0],this.sW[1],this.sW[2],this.sW[3]),Z.uNight.value=n.night,Z.uSnowLine.value=t.snowLine,Z.uSnowCoverage.value=t.snowCoverage,Z.uFrost.value=t.frost,Z.uLush.value=t.lush,Z.uDry.value=t.dry,Z.uFreeze.value=t.freeze,Z.uFoam.value=t.foam,Z.uGrassHeight.value=t.grassHeight,Z.uCanopy.value=t.canopy,Z.uFlowers.value=t.flowers,Z.uMeadowTint.value.copy(t.meadowTint),Z.uGrassBase.value.copy(t.grassBase),Z.uGrassTip.value.copy(t.grassTip),Z.uHeightFog.value=t.heightFog*(1-n.night*.35),Z.uSunDir.value.copy(this.lightDir),Z.uSunColor.value.copy(n.sunColor);let r=t.particles;Z.uParticleRates.value.set(r.x,r.y*(1-n.night*.8),r.z,r.w*(1+n.night*.6)),Z.uFireflyRate.value=t.fireflies*H(n.night+this.tW[0]*.35,0,1),_t(Z.uSkyTop.value,n.skyTop,t.skyTint,t.cloudShade),_t(Z.uSkyMid.value,n.skyMid,t.skyTint,t.cloudShade),_t(Z.uSkyBottom.value,n.skyBottom,t.skyTint,t.cloudShade)}};function _t(e,t,n,r){e.setRGB(t.r*n.x,t.g*n.y,t.b*n.z);let i=e.r*.3+e.g*.59+e.b*.11;e.r=U(e.r,i,r),e.g=U(e.g,i,r),e.b=U(e.b,i,r)}var vt=class{constructor(){this.parts=new Map}add(e,t,n=0,r=0,i=0,a=0,o=0,s=0,c=1,l=1,u=1){return X.position.set(n,r,i),X.rotation.set(a,o,s),X.scale.set(c,l,u),X.updateMatrix(),this.addMatrix(e,t,X.matrix)}addMatrix(e,t,n){let r=e.index?e.toNonIndexed():e.clone();for(let e of Object.keys(r.attributes))e!==`position`&&e!==`normal`&&e!==`uv`&&r.deleteAttribute(e);return r.attributes.normal||r.computeVertexNormals(),r.attributes.uv||r.setAttribute(`uv`,new y(new Float32Array(r.attributes.position.count*2),2)),r.clearGroups(),r.applyMatrix4(n),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(r),this}box(e,t,n,r,i,a,o,s=0,c=0,l=0){return this.add(new N(t,n,r),e,i,a,o,s,c,l)}build(e,{castShadow:t=!0,receiveShadow:n=!0}={}){for(let[r,i]of this.parts){let a=new M(R(i,!1),r);a.castShadow=t,a.receiveShadow=n,e.add(a),i.forEach(e=>e.dispose())}this.parts.clear()}},$=(e,t=.9,n={})=>new l({color:e,roughness:t,flatShading:!0,...n}),yt=.08,bt=Q(new l({color:15988731,roughness:.82}),{key:`snow-slab`,worldPos:!0,vertexBegin:`
                    float slabS = smoothstep(0.02, 0.9, uSnowCoverage);
                    transformed.y = transformed.y * max(slabS, 0.001) - 0.03 * (1.0 - slabS);
                    transformed.xz *= mix(0.92, 1.0, slabS);
                `,fragmentColor:`
                    diffuseColor.rgb *= 0.93 + 0.07 * sn_noise(vWPos.xz * 18.0);
                `}),xt=(e,t,n)=>new N(e,t,n).translate(0,t/2,0),St=class{constructor(e){this.glowColor=new E,this.skyMaterial=new I({uniforms:{...Z,uGlowColor:{value:this.glowColor}},side:1,depthWrite:!1,fog:!1,vertexShader:`
                        varying vec3 vDir;
                        void main() {
                            vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz);
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,fragmentShader:it+at+`
                        uniform vec3 uSkyTop; uniform vec3 uSkyMid; uniform vec3 uSkyBottom; uniform vec3 uGlowColor;
                        varying vec3 vDir;
                        void main() {
                            vec3 dir = normalize(vDir);
                            float t = clamp(dir.y * 1.5 + 0.5, 0.0, 1.0);
                            vec3 sky = mix(uSkyBottom, uSkyMid, smoothstep(0.0, 0.42, t));
                            sky = mix(sky, uSkyTop, smoothstep(0.42, 1.0, t));
                            float sd = max(dot(dir, normalize(uSunDir)), 0.0);
                            sky += uGlowColor * (pow(sd, 6.0) * 0.38 + pow(sd, 48.0) * 0.8);
                            sky = mix(sky, uFogColor, (1.0 - smoothstep(0.0, 0.18, abs(dir.y))) * 0.18);
                            float bd = dot(dir, normalize(vec3(0.35, 0.3, 0.88)));
                            float band = exp(-bd * bd * 14.0);
                            float mw = sn_fbm(dir.xz * 5.0 + dir.y * 3.0);
                            sky += vec3(0.22, 0.26, 0.42) * band * mw * uNight * 0.3;
                            gl_FragColor = vec4(sky, 1.0);
                            #include <tonemapping_fragment>
                            #include <colorspace_fragment>
                        }
                    `}),this.dome=new M(new se(100,48,24),this.skyMaterial),this.dome.renderOrder=-10,e.add(this.dome),this.sun=new M(new h(.55,3),new t({color:new E(2.2,1.9,1.5),toneMapped:!1,transparent:!0,fog:!1})),this.moon=new M(new se(.46,32,16),new t({map:wt(),color:new E(1.5,1.6,1.8),toneMapped:!1,transparent:!0,fog:!1})),this.glow=new ue(new k({map:Ct(),transparent:!0,opacity:.7,blending:2,depthWrite:!1,fog:!1})),e.add(this.sun,this.moon,this.glow),this.stars=this.createStars(),e.add(this.stars),this.clouds=this.createClouds(),this.clouds.forEach(t=>e.add(t)),this.cloudColor=new E}createStars(){let e=1200,t=new Float32Array(e*3),n=new Float32Array(e),r=new Float32Array(e);for(let i=0;i<e;i++){let e=40+G()*20,a=G()*Math.PI*2,o=Math.acos(U(.06,1,G()));t[i*3]=Math.sin(o)*Math.cos(a)*e,t[i*3+1]=Math.cos(o)*e,t[i*3+2]=Math.sin(o)*Math.sin(a)*e,n[i]=1.2+G()**3*3.2,r[i]=G()*6.283}let i=new O;i.setAttribute(`position`,new L(t,3)),i.setAttribute(`aSize`,new L(n,1)),i.setAttribute(`aPhase`,new L(r,1)),this.starUniforms={uStars:{value:0},uTime:Z.uTime,uPixelRatio:{value:1}};let a=new C(i,new I({uniforms:this.starUniforms,transparent:!0,depthWrite:!1,blending:2,fog:!1,vertexShader:`
                        attribute float aSize; attribute float aPhase;
                        uniform float uTime; uniform float uPixelRatio;
                        varying float vTwinkle;
                        void main() {
                            vTwinkle = 0.65 + 0.35 * sin(uTime * (1.3 + fract(aPhase) * 2.0) + aPhase * 9.0);
                            gl_PointSize = aSize * uPixelRatio;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,fragmentShader:`
                        uniform float uStars; varying float vTwinkle;
                        void main() {
                            float d = length(gl_PointCoord - 0.5);
                            float a = smoothstep(0.5, 0.0, d);
                            gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * 1.6, a * a * uStars * vTwinkle);
                        }
                    `}));return a.rotation.z=-.14,a.frustumCulled=!1,a}createClouds(){return this.cloudMaterial=new l({color:16777215,roughness:.95,flatShading:!0,transparent:!0,opacity:.9}),[{x:3,y:6.6,z:-3,s:.85},{x:5,y:7.2,z:-5,s:.95},{x:4,y:6.9,z:-2,s:.7},{x:6,y:7,z:-4,s:.8}].map(e=>{let t=[],n=5+Math.floor(G()*3);for(let e=0;e<n;e++){let i=new r(.4+G()*.4,1);i.scale(1,.65,1),i.translate((e-n/2)*.4+(G()-.5)*.15,(G()-.5)*.12,(G()-.5)*.25),t.push(i)}let i=new M(R(t),this.cloudMaterial);return i.castShadow=!0,i.scale.setScalar(e.s),i.position.set(e.x,e.y,e.z),i.userData={angle:G()*6.283,radius:1+G()*2,speed:.03+G()*.03,baseY:e.y,cx:e.x,cz:e.z},i})}update(e,t,n){let r=t.time,i=t.season,a=t.lightDir;this.sun.position.copy(a).multiplyScalar(11.5),this.moon.position.copy(this.sun.position),this.glow.position.copy(this.sun.position),this.sun.material.opacity=r.sunBody,this.sun.visible=r.sunBody>.01,this.moon.material.opacity=r.moonBody,this.moon.visible=r.moonBody>.01,this.moon.lookAt(0,0,0),this.glowColor.copy(r.glow),this.glow.material.color.copy(r.glow),this.glow.material.opacity=.72*(1-i.cloudShade*.6),this.glow.scale.set(r.glowScale,r.glowScale,1),this.starUniforms.uStars.value=r.stars*(1-i.cloudShade*.7),this.starUniforms.uPixelRatio.value=n,this.stars.visible=r.stars>.01,this.stars.rotation.y+=e*.008,this.cloudColor.setRGB(1,1,1).lerp(rt.setRGB(.62,.66,.72),i.cloudShade*1.4),this.cloudColor.lerp(rt.setRGB(.1,.12,.22),r.night*.85),this.cloudColor.lerp(rt.setRGB(1,.78,.66),(1-r.night)*t.tW[0]*.35),this.cloudMaterial.color.copy(this.cloudColor);for(let t of this.clouds){let n=t.userData;n.angle+=n.speed*e*.74,t.position.set(n.cx+Math.cos(n.angle)*n.radius,n.baseY-i.cloudShade*.6+Math.sin(n.angle*2)*.15,n.cz+Math.sin(n.angle)*n.radius)}}};function Ct(){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createRadialGradient(128,128,4,128,128,128);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.14,`rgba(255,245,220,.7)`),r.addColorStop(.42,`rgba(255,220,180,.18)`),r.addColorStop(1,`rgba(255,200,160,0)`),n.fillStyle=r,n.fillRect(0,0,256,256);let i=new ne(t);return i.colorSpace=e,i}function wt(){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`);n.fillStyle=`#d9dde6`,n.fillRect(0,0,128,128);for(let e=0;e<26;e++){let e=3+G()*12,t=G()*128,r=G()*128,i=n.createRadialGradient(t,r,e*.2,t,r,e);i.addColorStop(0,`rgba(120,126,140,.55)`),i.addColorStop(1,`rgba(120,126,140,0)`),n.fillStyle=i,n.beginPath(),n.arc(t,r,e,0,Math.PI*2),n.fill()}let r=new ne(t);return r.colorSpace=e,r}var Tt=class{constructor(e){this.scene=e,this.buildSurface(),this.buildCliffs(),this.buildBoulders()}buildSurface(){let e=z/192,t=new ie(z,z,192,192);t.rotateX(-Math.PI/2);let n=t.attributes.position,r=new Float32Array(n.count);for(let e=0;e<n.count;e++)r[e]=q(n.getX(e),n.getZ(e)),n.setY(e,r[e]);let i=(e,t)=>r[H(t,0,192)*193+H(e,0,192)],a=new Float32Array(n.count*3),o=new Float32Array(n.count*3),s=new E(4156203),c=new E(6788422),u=new E(5722959),d=new E(9077369),f=new E(10263193),p=new E(7301211),m=new E(9669501),h=new E(11769712),g=new E(6249038),_=new E,v=new E;for(let t=0;t<=192;t++)for(let l=0;l<=192;l++){let y=t*193+l,b=n.getX(y),x=n.getZ(y),S=r[y],C=(i(l+1,t)-i(l-1,t))/(2*e),w=(i(l,t+1)-i(l,t-1))/(2*e),T=Math.hypot(C,w),E=(i(l+1,t)+i(l-1,t)+i(l,t+1)+i(l,t-1))/4-S,D=Je(b*.6,x*.6),O=Je(b*2.3,x*2.3),k=Math.hypot(b-Le,x-Re),ee=Xe(b,x),te=Math.abs($e(b,x)-1)*6.7,A=Math.max(W(S,1.3,2.2),W(T,1,1.7)),j=(1-W(k,5,6.6))*(1-A)*W(S,.45,.95),M=+(ee<.69),N=(1-W(te,.18,.36))*(1-A);_.lerpColors(s,c,H((S-Fe)*.7+D*.35,0,1));let P=.5+.5*Math.sin(S*7.5+O*2.6+b*.3);v.lerpColors(u,d,P*.8+O*.2),v.lerp(f,W(S,3.4,6)*.7),_.lerp(v,A),v.lerpColors(p,m,O),_.lerp(v,j*.85),_.lerp(g,N*.7),M&&_.lerp(h,.85);let F=H(1-Math.max(E,0)*4.5,.5,1)*(.9+.1*H(1-Math.max(-E,0)*2,0,1)+.1*W(-E,0,.05));_.multiplyScalar(H(F,.5,1.05)),a[y*3]=_.r,a[y*3+1]=_.g,a[y*3+2]=_.b;let I=H(1-A-j*.8-M-N*.6,0,1);o[y*3]=I,o[y*3+1]=A,o[y*3+2]=M}t.setAttribute(`color`,new L(a,3)),t.setAttribute(`aMat`,new L(o,3)),t.computeVertexNormals();let y=Q(new l({vertexColors:!0,roughness:.92,metalness:.02,flatShading:!0}),{key:`terrain`,worldPos:!0,vertexPars:`attribute vec3 aMat; varying vec3 vMat;`,vertexBegin:`vMat = aMat;`,fragmentPars:`varying vec3 vMat;`,fragmentColor:`
                            vec3 wp = vWPos;
                            vec3 fN = normalize(cross(dFdx(wp), dFdy(wp)) + vec3(0.0, 1e-6, 0.0));
                            float up = abs(fN.y);
                            float n1 = sn_fbm(wp.xz * 0.9);
                            float n2 = sn_noise(wp.xz * 6.5);
                            float meadow = vMat.x;
                            vec3 col = diffuseColor.rgb;

                            // Spring: lush saturation. All seasons: meadow tint.
                            float lum = dot(col, vec3(0.299, 0.587, 0.114));
                            col = mix(col, mix(vec3(lum), col, 1.0 + 0.55 * uLush) * uMeadowTint, meadow);
                            // Autumn: dry golden patches.
                            float dryMask = uDry * meadow * smoothstep(0.42, 0.66, n1 + n2 * 0.15);
                            col = mix(col, vec3(0.4, 0.27, 0.09) * (0.8 + n2 * 0.4), dryMask * 0.75);
                            // Winter: frost on the meadow.
                            col = mix(col, vec3(0.6, 0.66, 0.7), uFrost * meadow * (0.35 + 0.25 * n2));

                            // Snow: height line + noise, only on flat enough faces (steep rock stays bare).
                            float snowEdge = wp.y + (n1 - 0.5) * 1.1 + (n2 - 0.5) * 0.25;
                            float snowBand = smoothstep(uSnowLine - 0.2, uSnowLine + 0.3, snowEdge);
                            float flatMask = smoothstep(0.5 - 0.12 * uSnowCoverage, 0.8, up);
                            float snSnow = snowBand * flatMask;
                            col = mix(col, vec3(0.86, 0.9, 0.96) * (0.94 + 0.06 * n2), snSnow);

                            // Fine gravel follows the curved lake path, with seasonal snow.
                            float snWet = 0.0;
                            float pathMask = clamp(vMat.z,0.0,1.0);
                            vec3 gravel = vec3(.49,.36,.22)*(0.85+n2*.3);
                            gravel=mix(gravel,vec3(.86,.9,.94),uSnowCoverage*.94);
                            col=mix(col,gravel,pathMask);
                            diffuseColor.rgb = col;
                        `,fragmentRoughness:`
                            roughnessFactor = mix(roughnessFactor, 0.26, snWet);
                            roughnessFactor = mix(roughnessFactor, 0.7, snSnow * 0.6);
                        `});this.mesh=new M(t,y),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh)}buildCliffs(){let e=[[-12,-12],[Pe,-12],[Pe,Pe],[-12,Pe],[-12,-12]],t=[5982783,7232846,4601904,8219738,5523261].map(e=>new E(e)),n=new E(1182214),r=new E(3811871),i=new E(4933701),a=[],o=[],s=[],c=[],u=new E,d=0;for(let l=0;l<4;l++){let[f,p]=e[l],[m,h]=e[l+1];for(let e=0;e<=192;e++){let c=e/192,l=f+(m-f)*c,d=p+(h-p)*c,g=q(l,d),_=Je(l*1.7+d*1.7,3.1);for(let e=0;e<=16;e++){let c;if(c=e===0?g:e===1?g-.1:U(g-.3,We,(e-2)/14),a.push(l,c,d),s.push(g),e<=1)u.copy(g>2?i:r);else{let e=Math.floor(Math.abs(Math.sin(c*2.9+_*2.2)*997))%t.length;u.copy(t[e]),u.lerp(n,(1-(c-We)/Math.max(g-We,.1))**1.6*.85)}o.push(u.r,u.g,u.b)}}for(let e=0;e<192;e++)for(let t=0;t<16;t++){let n=d+e*17+t,r=n+1,i=d+(e+1)*17+t,a=i+1;c.push(n,r,i,r,a,i)}d+=3281}let f=new O;f.setAttribute(`position`,new y(a,3)),f.setAttribute(`color`,new y(o,3)),f.setAttribute(`aTop`,new y(s,1)),f.setIndex(c),f.computeVertexNormals();let p=new M(f,Q(new l({vertexColors:!0,roughness:.88,metalness:.05,flatShading:!0}),{key:`cliff`,worldPos:!0,heightFog:!1,vertexPars:`attribute float aTop; varying float vTop;`,vertexBegin:`vTop = aTop;`,fragmentPars:`varying float vTop;`,fragmentColor:`
                            float lipDepth = 0.06 + 0.1 * sn_noise(vec2(vWPos.x + vWPos.z, vWPos.y) * 6.0);
                            float lip = uSnowCoverage * (1.0 - smoothstep(lipDepth, lipDepth + 0.04, vTop - vWPos.y));
                            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.9, 0.95), lip);
                        `}));p.castShadow=!0,p.receiveShadow=!0,this.scene.add(p);let m=new M(new ie(z,z).rotateX(Math.PI/2),$(919301));m.position.y=We,this.scene.add(m)}buildBoulders(){this.rockGeometry=Et(),this.rockMaterial=Q($(16777215,.92),{key:`boulder`,worldNormal:!0,fragmentColor:lt(`1.0`)});let e=new A(this.rockGeometry,this.rockMaterial,85),t=0;for(let n=0;n<3e3&&t<85;n++){let n=t<30,r,i;if(n){let e=G()*Math.PI*2,t=K(3.4,6.4);r=Le+Math.cos(e)*t,i=Re+Math.sin(e)*t}else r=K(-11.4,11.4),i=K(-11.4,11.4);if(Math.abs(r)>11.4||Math.abs(i)>11.4||$e(r,i)<1.16)continue;let a=q(r,i);if(Xe(r,i)<.89||Math.hypot(r-He,i-Ue)<1.9||a>2.8)continue;let o=n?K(.12,.34):K(.08,.2);X.position.set(r,a-o*.25,i),X.rotation.set(G()*.6,G()*Math.PI*2,G()*.6),X.scale.set(o*K(.9,1.4),o*K(.55,.9),o*K(.9,1.3)),X.updateMatrix(),e.setMatrixAt(t,X.matrix);let s=K(.42,.62);e.setColorAt(t,rt.setRGB(s,s*.96,s*.92)),t++}e.count=t,e.castShadow=!0,e.receiveShadow=!0,e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0,this.scene.add(e)}};function Et(){let e=new h(1,1);e.deleteAttribute(`normal`),e.deleteAttribute(`uv`),e=Ee(e);let t=e.attributes.position;for(let e=0;e<t.count;e++){J.fromBufferAttribute(t,e);let n=.78+.4*Je(J.x*2.1+5,J.z*2.1+J.y*1.3);J.multiplyScalar(n),J.y<-.2&&(J.y*=.5),t.setXYZ(e,J.x,J.y,J.z)}return e.computeVertexNormals(),e}var Dt=class{constructor(e){this.scene=e,this.buildLake()}createWaterMaterial(){return new I({uniforms:{...n.clone(F.fog),...Z},fog:!0,transparent:!0,depthWrite:!1,side:2,vertexShader:it+`
                        #include <fog_pars_vertex>
                        varying vec2 vUv; varying vec3 vWorldPosition; varying float vSlope; varying float vWave;
                        void main() {
                            vUv = uv;
                            vec3 p = position;
                            float calm = 1.0 - uFreeze;
                            float primary = sin(uv.y * 10.0 - uFlowTime * 3.5 + uv.x * 5.0);
                            float secondary = sin(uv.y * 23.0 - uFlowTime * 5.2 - uv.x * 8.0);
                            vWave = (primary * 0.58 + secondary * 0.24) * calm;
                            p.y += vWave * 0.008;
                            vec4 world = modelMatrix * vec4(p, 1.0);
                            vWorldPosition = world.xyz;
                            vSlope = clamp(1.0 - abs(normalize(mat3(modelMatrix) * normal).y), 0.0, 1.0);
                            vec4 mvPosition = viewMatrix * world;
                            gl_Position = projectionMatrix * mvPosition;
                            #include <fog_vertex>
                        }
                    `,fragmentShader:it+at+`
                        #include <fog_pars_fragment>
                        uniform vec3 uSkyTop; uniform vec3 uSkyBottom;
                        varying vec2 vUv; varying vec3 vWorldPosition; varying float vSlope; varying float vWave;

                        float voronoiEdge(vec2 p) {
                            vec2 i = floor(p), f = fract(p);
                            float d1 = 8.0, d2 = 8.0;
                            for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
                                vec2 g = vec2(float(x), float(y));
                                vec2 o = vec2(sn_hash(i + g), sn_hash(i + g + 17.31));
                                vec2 r = g + o - f;
                                float d = dot(r, r);
                                if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
                            }
                            return sqrt(d2) - sqrt(d1);
                        }

                        void main() {
                            float flowTime = uFlowTime * 0.18;
                            vec2 flowUv = vec2(vUv.x * 4.2, vUv.y * 1.35 - flowTime);
                            float largeFlow = sn_fbm(flowUv + vec2(sin(vUv.y * 0.7), 0.0));
                            float fineFlow = sn_fbm(flowUv * 2.65 + vec2(4.7, -flowTime * 0.8));
                            float current = smoothstep(0.34, 0.84, largeFlow * 0.72 + fineFlow * 0.36 + vWave * 0.08);
                            float bankDistance = max(0.0, 0.5-length(vUv-0.5));
                            float depth = smoothstep(0.0, 0.42, bankDistance);

                            // Shore foam and the existing slope contribution.
                            float bankFoam = (1.0 - smoothstep(0.025, 0.23, bankDistance))
                                * smoothstep(0.44, 0.76, sn_fbm(vec2(vUv.y * 2.9 - flowTime * 1.7, vUv.x * 7.0)));
                            float cascade = smoothstep(0.06, 0.26, vSlope) * (0.55 + 0.45 * fineFlow);
                            float foam = clamp((bankFoam * 0.25) * clamp(uFoam, 0.2, 1.6) + cascade, 0.0, 1.0);

                            vec3 deepColor = mix(vec3(0.018, 0.17, 0.23), vec3(0.008, 0.035, 0.095), uNight);
                            vec3 shallowColor = mix(vec3(0.09, 0.58, 0.68), vec3(0.025, 0.25, 0.48), uNight);
                            vec3 bankTint = mix(vec3(0.22, 0.3, 0.2), vec3(0.03, 0.05, 0.07), uNight);
                            vec3 color = mix(deepColor, shallowColor, current * 0.6 + (1.0 - depth) * 0.3);
                            color = mix(bankTint, color, 0.35 + 0.65 * smoothstep(0.0, 0.2, bankDistance));

                            // Caustic-like light ribbons over the shallows
                            float caust = pow(1.0 - abs(sn_noise(flowUv * 3.1 + vec2(fineFlow * 1.6, 0.0)) * 2.0 - 1.0), 6.0);
                            color += vec3(0.45, 0.85, 0.9) * caust * 0.24 * (1.0 - uNight * 0.75) * (0.4 + depth);

                            // Fresnel sky reflection + sun glint
                            vec3 N = normalize(vec3((fineFlow - 0.5) * 0.32 * (1.0 - uFreeze), 1.0, (largeFlow - 0.5) * 0.28 * (1.0 - uFreeze)));
                            vec3 V = normalize(cameraPosition - vWorldPosition);
                            float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.0);
                            vec3 R = reflect(-V, N);
                            vec3 skyRef = mix(uSkyBottom, uSkyTop, clamp(R.y * 1.3, 0.0, 1.0));
                            color = mix(color, skyRef, clamp(fresnel * 0.85 + 0.1, 0.0, 0.7));
                            float glint = pow(max(dot(R, normalize(uSunDir)), 0.0), 90.0);
                            color += uSunColor * glint * 2.0;
                            color = mix(color, mix(vec3(0.82, 0.94, 0.98), vec3(0.3, 0.42, 0.6), uNight), foam * 0.85);

                            // Winter: ice grows in from the banks, cracks, snow on the edges.
                            float fn = sn_noise(vWorldPosition.xz * 4.0);
                            float iceMask = smoothstep(-0.05, 0.05, uFreeze * 1.18 - bankDistance * 2.0 + (fn - 0.5) * 0.2);
                            float crack = 1.0 - smoothstep(0.0, 0.05, voronoiEdge(vWorldPosition.xz * 5.0));
                            float crackFine = 1.0 - smoothstep(0.0, 0.035, voronoiEdge(vWorldPosition.xz * 13.0 + 3.1));
                            vec3 ice = mix(vec3(0.28, 0.52, 0.7), vec3(0.6, 0.8, 0.92), sn_fbm(vWorldPosition.xz * 2.2));
                            ice = mix(ice, vec3(0.95, 0.98, 1.0), crack * 0.55 + crackFine * 0.22);
                            ice = mix(ice, skyRef, fresnel * 0.35) + uSunColor * glint * 1.2;
                            float edgeSnow = 1.0 - smoothstep(0.02, 0.07 + 0.08 * fn, bankDistance);
                            float drift = smoothstep(0.64, 0.78, sn_fbm(vWorldPosition.xz * 2.8)) * uSnowCoverage;
                            ice = mix(ice, vec3(0.9, 0.94, 0.98), max(edgeSnow * uFreeze, drift * 0.7));
                            ice *= mix(1.0, 0.28, uNight) * mix(vec3(1.0), vec3(0.7, 0.8, 1.1), uNight);
                            color = mix(color, ice, iceMask);

                            float alpha = mix(mix(0.38, 0.57, current), 0.97, max(iceMask, foam * 0.6));
                            gl_FragColor = vec4(color, alpha);
                            #include <tonemapping_fragment>
                            #include <colorspace_fragment>
                            #include <fog_fragment>
                        }
                    `})}buildLake(){let e=[],t=[],n=[];for(let r=0;r<=20;r++)for(let i=0;i<=128;i++){let a=i/128*Math.PI*2,o=r/20,s=Qe(a)*o;if(e.push(B+Math.cos(a)*ze*s,Ve,V+Math.sin(a)*Be*s),t.push(.5+Math.cos(a)*o*.5,.5+Math.sin(a)*o*.5),r<20&&i<128){let e=r*129+i,t=e+128+1;n.push(e,t,e+1,t,t+1,e+1)}}let r=new O;r.setAttribute(`position`,new y(e,3)),r.setAttribute(`uv`,new y(t,2)),r.setIndex(n),r.computeVertexNormals();let i=this.createWaterMaterial();this.lake=new M(r,i),this.lake.renderOrder=2,this.scene.add(this.lake);let a=r.clone(),o=a.attributes.position;for(let e=0;e<o.count;e++)o.setXYZ(e,o.getX(e)-B,-(o.getZ(e)-V),0);a.computeVertexNormals(),this.reflection=new we(a,{textureWidth:768,textureHeight:768,clipBias:.003,color:7835540,multisample:0}),this.reflection.rotation.x=-Math.PI/2,this.reflection.position.set(B,Ve-.025,V),this.reflectionsEnabled=!0,this.scene.add(this.reflection)}update(){this.reflection.visible=Z.uFreeze.value<.95&&this.reflectionsEnabled}};function Ot(e,t,{road:n=.4,hut:r=1.7,maxH:i=2.5,minH:a=-1}={}){if(Math.abs(e)>11.1||Math.abs(t)>11.1||$e(e,t)<1.07||Xe(e,t)<Ie/2+n*.28||Math.hypot(e-He,t-Ue)<r)return!1;let o=q(e,t);return!(o>i||o<a)}var kt=`
            vec3 toLocal(vec3 worldOffset) {
                #ifdef USE_INSTANCING
                    mat3 im = mat3(instanceMatrix);
                    return transpose(im) * worldOffset / max(dot(im[0], im[0]), 1e-4);
                #else
                    return worldOffset;
                #endif
            }
            vec3 instanceOrigin() {
                #ifdef USE_INSTANCING
                    return (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
                #else
                    return (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
                #endif
            }
            // Travelling gust front: a visible wave rolling across the meadow.
            float gustAt(vec2 p) {
                float front = pow(max(0.0, 0.5 + 0.5 * sin(dot(p, uWindDir) * 0.55 - uWindTime * 1.5)), 5.0);
                return front * (0.55 + 0.45 * sn_noise(p * 0.35 + uWindTime * 0.15)) * uAudioWind;
            }
        `,At=class{constructor(e){this.scene=e,this.buildGrass(),this.buildFlowers(),this.buildConifers(),this.buildDeciduous()}buildGrass(){let e=.08,t=.55,n=new O;n.setAttribute(`position`,new L(new Float32Array([-.08,0,0,e,0,0,-.08*.8,t*.3,.02,e*.8,t*.3,.02,-.08*.5,t*.7,.08,e*.5,t*.7,.08,0,t,.16]),3)),n.setAttribute(`normal`,new L(new Float32Array([0,1,.2,0,1,.2,0,1,.2,0,1,.2,0,1,.3,0,1,.3,0,1,.4]),3)),n.setAttribute(`uv`,new L(new Float32Array([0,0,1,0,0,.3,1,.3,0,.7,1,.7,.5,1]),2)),n.setIndex([0,1,2,1,3,2,2,3,4,3,5,4,4,5,6]);let r=De.GRASS_COUNT,i=new Float32Array(r*4),a=new A(n,null,r),o=0;for(let e=0;e<r*4&&o<r;e++){let e=(G()-.5)*(z-.5),t=(G()-.5)*(z-.5);if(!Ot(e,t,{road:.4,hut:1.55,maxH:2.4}))continue;let n=q(e,t);X.position.set(e,n-.02,t),X.rotation.set((G()-.5)*.14,G()*Math.PI*2,(G()-.5)*.14),X.scale.setScalar(.34+G()*.46),X.updateMatrix(),a.setMatrixAt(o,X.matrix);let r=G();i[o*4]=r<.55?0:r<.82?1:2,i[o*4+1]=G(),i[o*4+3]=G(),o++}a.count=o,n.setAttribute(`aGrass`,new le(i,4)),a.material=Q(new l({roughness:.75,metalness:0,side:2}),{key:`grass`,worldPos:!0,vertexPars:`attribute vec4 aGrass; varying float vGrassH; varying float vGust; varying float vTint;
`+kt,vertexBegin:`
                            float hN = clamp(position.y / 0.55, 0.0, 1.0);
                            vGrassH = hN;
                            vTint = aGrass.y;
                            float wMul = aGrass.x < 0.5 ? 1.0 : (aGrass.x < 1.5 ? 1.75 : 0.6);
                            float hMul = aGrass.x < 0.5 ? 1.0 : (aGrass.x < 1.5 ? 0.62 : 1.3);
                            transformed.x *= wMul * (1.0 - hN * 0.15);
                            transformed.y *= hMul * uGrassHeight;
                            transformed.z *= hMul * (aGrass.x > 1.5 ? 1.6 : 1.0);
                            transformed.y -= (1.0 - uGrassHeight) * 0.04;
                            vec3 origin = instanceOrigin();
                            float gust = gustAt(origin.xz);
                            vGust = gust;
                            float sway = sin(uWindTime * 2.1 + origin.x * 0.9 + origin.z * 0.7 + aGrass.w * 6.28) * 0.12;
                            float stiff = mix(1.0, 0.35, uSnowCoverage);
                            float bend = pow(hN, 1.7) * hMul * stiff;
                            vec2 wind = uWindDir * (sway + gust * 0.6 + 0.1) * bend * 0.3;
                            transformed += toLocal(vec3(wind.x, -abs(gust) * bend * 0.05, wind.y));
                        `,fragmentPars:`varying float vGrassH; varying float vGust; varying float vTint;`,diffuse:`
                            vec3 gBase = uGrassBase * (0.8 + vTint * 0.4);
                            vec3 gTip = uGrassTip * (0.85 + (1.0 - vTint) * 0.3);
                            float gH = clamp(vGrassH, 0.0, 1.0);
                            vec3 grassCol = mix(gBase, gTip, pow(gH, 0.85));
                            // Autumn: some blades burn to deep amber, spring: a few fresh lime ones.
                            grassCol = mix(grassCol, vec3(0.75, 0.28, 0.04), uSeasonW.z * step(0.8, vTint) * gH);
                            grassCol = mix(grassCol, vec3(0.45, 0.8, 0.12), uSeasonW.x * step(0.8, vTint) * vGrassH * 0.6);
                            // Gust sheen travelling across the meadow
                            grassCol += vec3(0.08, 0.09, 0.05) * vGust * vGrassH * (1.0 - uNight * 0.7);
                            // Winter: tips poke out of the snow, frosted
                            grassCol = mix(grassCol, vec3(0.82, 0.87, 0.9), uSnowCoverage * (1.0 - vGrassH) * 0.85);
                            vec4 diffuseColor = vec4(grassCol, opacity);
                        `,fragmentNormal:`normal = normalize(vNormal);`}),a.receiveShadow=!0,a.castShadow=!1,a.frustumCulled=!1,this.scene.add(a),this.grass=a}buildFlowers(){let e=R([new g(.008,.012,.22,4).translate(0,.11,0),new h(.055,0).translate(0,.24,0),new g(.075,.02,.02,6).translate(0,.225,0)].map((e,t)=>(e=e.index?e.toNonIndexed():e,e.setAttribute(`aPart`,new y(new Float32Array(e.attributes.position.count).fill(t===0?0:t===1?.6:1),1)),e))),t=new Float32Array(850),n=new Float32Array(850*3),r=[16044894,16748459,14282130,12108031,16777215,16739179,13073919].map(e=>new E(e)),i=new A(e,null,850),a=0;for(let e=0;e<850*10&&a<850;e++){let e=(G()-.5)*(z-1),o=(G()-.5)*(z-1);if(Je(e*.7+3,o*.7)<.45||!Ot(e,o,{road:.55,hut:1.8,maxH:2.1,minH:.2}))continue;let s=q(e,o);X.position.set(e,s-.01,o),X.rotation.set((G()-.5)*.3,G()*Math.PI,(G()-.5)*.3),X.scale.setScalar(.5+G()*.45),X.updateMatrix(),i.setMatrixAt(a,X.matrix),t[a]=G();let c=r[Math.floor(G()*r.length)];n[a*3]=c.r,n[a*3+1]=c.g,n[a*3+2]=c.b,a++}i.count=a,e.setAttribute(`aSeed`,new le(t,1)),e.setAttribute(`aFlowerColor`,new le(n,3)),i.material=Q(new l({roughness:.7,flatShading:!0}),{key:`flowers`,vertexPars:`attribute float aSeed; attribute vec3 aFlowerColor; attribute float aPart; varying vec3 vFlowerColor; varying float vPart;
`+kt,vertexBegin:`
                            vFlowerColor = aFlowerColor; vPart = aPart;
                            float bloomS = smoothstep(aSeed, aSeed + 0.12, uFlowers * 1.12);
                            transformed *= bloomS;
                            vec3 origin = instanceOrigin();
                            float sway = sin(uWindTime * 2.3 + origin.x * 1.1 + aSeed * 12.0) * 0.05 + gustAt(origin.xz) * 0.08;
                            transformed += toLocal(vec3(uWindDir.x, 0.0, uWindDir.y) * sway * smoothstep(0.0, 0.25, position.y));
                        `,fragmentPars:`varying vec3 vFlowerColor; varying float vPart;`,diffuse:`
                            vec3 fc = mix(vec3(0.16, 0.36, 0.1), vFlowerColor, step(0.3, vPart));
                            fc = mix(fc, vec3(1.0, 0.85, 0.3), step(0.3, vPart) * step(vPart, 0.7));
                            vec4 diffuseColor = vec4(fc, opacity);
                        `}),i.frustumCulled=!1,i.receiveShadow=!0,this.scene.add(i),this.flowers=i}buildConifers(){let e=new g(.08,.14,.9,6).translate(0,.45,0),t=[],n=[];for(let e=0;e<4;e++){let r=.72-e*.15,i=.95-e*.1,a=.95+e*.52;t.push(new D(r,i,7).translate(0,a,0));let o=i*.56;n.push(new D(r*.6,o,7).translate(0,a+i/2-o/2+.03,0))}let r=(e,t)=>{e=nt(e);let n=e.attributes.position.count,r=new Float32Array(n*3);for(let i=0;i<n;i++){let n=.8+.35*(e.attributes.position.getY(i)%.5);r[i*3]=t.r*n,r[i*3+1]=t.g*n,r[i*3+2]=t.b*n}return e.setAttribute(`color`,new L(r,3)),e},i=R([r(e,new E(4861728)),...t.map(e=>r(e,new E(2050604)))]),a=R(n.map(nt)),o=[[11.655,1.413],[10.385,3.541],[9.51,5.694],[7.8,7.508],[5.271,8.444],[3.005,9.937],[.169,9.341],[-2.674,9.849],[-4.936,8.385],[-7.347,7.3],[-9.129,5.537],[-9.803,3.312],[-11.113,1.177],[-9.886,-1.026],[-9.966,-3.447],[-7.785,-5.003],[-6.082,-6.798],[-3.64,-7.884],[-.896,-8.055],[1.873,-8.698],[4.248,-7.293],[7.132,-6.913],[8.538,-4.821],[10.381,-3.115],[11.157,-.904]],s=[];for(let[e,t]of o){let n=e+(G()-.5)*.3,r=t+(G()-.5)*.3;if(!Ot(n,r,{road:.7,hut:2,maxH:3.4,minH:.05}))continue;let i=K(.82,1.18);X.position.set(n,q(n,r)-.05,r),X.rotation.set(0,G()*Math.PI*2,0),X.scale.set(i,i*K(.9,1.2),i),X.updateMatrix(),s.push(X.matrix.clone())}let c=Q($(16777215,.85,{vertexColors:!0}),{key:`conifer`,worldNormal:!0,vertexPars:kt,vertexBegin:`
                    vec3 treeOrigin = instanceOrigin();
                    float treeSway = sin(uWindTime * 1.4 + treeOrigin.x * 0.7 + treeOrigin.z) * 0.018 + gustAt(treeOrigin.xz) * 0.03;
                    transformed += toLocal(vec3(uWindDir.x, 0.0, uWindDir.y) * treeSway * position.y * position.y * 0.35);
                `,fragmentColor:`
                        diffuseColor.rgb *= mix(vec3(1.0), vec3(0.82, 0.9, 1.0), uSeasonW.w);
                        diffuseColor.rgb *= mix(vec3(1.0), vec3(1.12, 1.1, 0.9), uSeasonW.x);
                    `+lt(`0.55`)}),u=Q(new l({color:15922939,roughness:.8,flatShading:!0}),{key:`conifer-cap`,vertexPars:kt,vertexBegin:`
                        float capS = smoothstep(0.05, 0.85, uSnowCoverage);
                        transformed.xz *= mix(0.72, 1.0, capS);
                        transformed.y -= (1.0 - capS) * 0.08;
                    
                    vec3 treeOrigin = instanceOrigin();
                    float treeSway = sin(uWindTime * 1.4 + treeOrigin.x * 0.7 + treeOrigin.z) * 0.018 + gustAt(treeOrigin.xz) * 0.03;
                    transformed += toLocal(vec3(uWindDir.x, 0.0, uWindDir.y) * treeSway * position.y * position.y * 0.35);
                `}),d=new A(i,c,s.length),f=new A(a,u,s.length);s.forEach((e,t)=>{d.setMatrixAt(t,e),f.setMatrixAt(t,e);let n=K(.85,1.12);d.setColorAt(t,rt.setRGB(n,n*K(.95,1.05),n))}),d.castShadow=!0,d.receiveShadow=!0,f.castShadow=!1,f.receiveShadow=!0,this.scene.add(d,f),this.coniferCaps=f}buildDeciduous(){let e=[new g(.06,.12,1.3,6).translate(0,.65,0)],t=(e,t,n,r,i)=>{let a=new g(t*.5,t,e,5).translate(0,e/2,0);return a.rotateZ(n),a.rotateY(r),a.translate(0,i,0),a};for(let n=0;n<5;n++)e.push(t(.62,.05,.75+n%2*.2,n*1.26,.9+n%3*.12)),e.push(t(.32,.025,1.1,n*1.26+.6,1.25+n%2*.1));let n=R(e.map(nt)),r=1.5,i=[];for(let[e,t,n,a]of[[0,.05,0,.55],[.36,-.12,.1,.4],[-.32,-.08,-.14,.42],[.05,.3,-.05,.38],[-.1,-.18,.34,.36],[.12,-.14,-.36,.34]])i.push(new h(a,1).translate(e,t+r,n));let a=R(i),o=[[11.227,1.017],[11.337,2.098],[10.443,3.012],[10.923,4.267],[9.43,4.849],[9.573,6.164],[8.236,6.639],[7.539,7.541],[6.636,8.315],[5.246,8.432],[4.465,9.564],[2.933,9.063],[1.884,10.069],[.548,9.554],[-.721,9.794],[-2.011,9.736],[-3.078,9.011],[-4.595,9.295],[-5.21,8.029],[-6.821,8.097],[-7.262,6.913],[-8.38,6.337],[-9.171,5.493],[-9.309,4.368],[-10.572,3.636],[-9.893,2.398],[-11.073,1.472],[-10.304,.392],[-10.616,-.683],[-10.368,-1.731],[-9.523,-2.599],[-9.72,-3.853],[-8.18,-4.297],[-8.189,-5.653],[-6.694,-5.909],[-5.996,-6.867],[-4.881,-7.399],[-3.562,-7.519],[-2.588,-8.473],[-1.147,-7.857],[.034,-8.801],[1.282,-8.046],[2.607,-8.32],[3.823,-7.969],[4.852,-7.292],[6.338,-7.331],[6.797,-6.048],[8.438,-5.986],[8.613,-4.698],[9.799,-4.106],[10.28,-3.109],[10.44,-2.038],[11.457,-1.159],[10.667,-.003],[8.979432522122579,1.7903006145273799],[7.64246914095551,4.69838264283351],[4.968673412224092,6.878485138333039],[1.4448593153034415,7.933680108406544],[-2.287397600609955,7.671849786959079],[-5.548570914794295,6.140665228041351],[-7.744903691575495,3.618906908514293],[-8.476512915356047,.5657075846164425],[-7.610195591700348,-2.4630413205638284],[-5.303680816813704,-4.915900035014321],[-1.9769122774873378,-6.3462802502881805],[1.7644102663132462,-6.493754785230747],[5.23910982858938,-5.3314731723809325],[7.814553069827426,-3.0710502823236405],[9.021832900585414,-.12403792148705794],[8.64114169221197,2.9730057881936105],[6.741791322226374,5.656206742048568],[3.6695936647013614,7.437038565466186],[-.01610085915634696,7.9912678784466005],[-3.644243373533203,7.21798698095906],[-6.554263410691266,5.257985966590588],[-8.21633798560304,2.4681192813001798]],s=[],c=[];for(let[e,t]of o){let n=e+(G()-.5)*.3,r=t+(G()-.5)*.3;if(!Ot(n,r,{road:.75,hut:2,maxH:2.6,minH:.05}))continue;let i=K(.88,1.3);X.position.set(n,q(n,r)-.04,r),X.rotation.set(0,G()*Math.PI*2,0),X.scale.setScalar(i),X.updateMatrix(),s.push(X.matrix.clone()),c.push(G())}a.setAttribute(`aSeed`,new le(new Float32Array(c),1));let l=`
                    float cs = smoothstep(aSeed * 0.35, aSeed * 0.35 + 0.65, uCanopy);
                    vec3 cc = vec3(0.0, ${r.toFixed(2)}, 0.0);
                    transformed = cc + (transformed - cc) * cs;
                    vec3 cOrigin = instanceOrigin();
                    float leafSway = sin(uWindTime * 1.8 + cOrigin.x + position.y * 3.0 + aSeed * 9.0) * 0.03 + gustAt(cOrigin.xz) * 0.06;
                    transformed += toLocal(vec3(uWindDir.x, 0.0, uWindDir.y) * leafSway * smoothstep(1.0, 2.0, position.y));
                `,u=`attribute float aSeed; varying float vSeed; varying vec3 vLocal;
`+kt;this.canopyMaterial=Q($(16777215,.8),{key:`canopy`,worldPos:!0,vertexPars:u,vertexBegin:`vSeed = aSeed; vLocal = position;
`+l,fragmentPars:`varying float vSeed; varying vec3 vLocal;`,diffuse:`
                        float speck = sn_noise(vLocal.xz * 9.0 + vLocal.y * 7.0 + vSeed * 20.0);
                        vec3 spring = mix(vec3(0.92, 0.36, 0.55), vec3(1.0, 0.8, 0.86), step(0.6, fract(vSeed * 3.7)));
                        spring = mix(spring, vec3(0.5, 0.78, 0.3), smoothstep(0.62, 0.8, speck) * 0.6);
                        vec3 summer = mix(vec3(0.16, 0.38, 0.12), vec3(0.28, 0.5, 0.16), vSeed) * (0.85 + speck * 0.3);
                        vec3 autumn = mix(vec3(0.75, 0.12, 0.04), vec3(0.95, 0.45, 0.05), fract(vSeed * 5.3));
                        autumn = mix(autumn, vec3(0.95, 0.7, 0.1), step(0.78, fract(vSeed * 2.9)));
                        autumn *= 0.8 + speck * 0.4;
                        vec3 winter = vec3(0.35, 0.28, 0.2);
                        vec3 cc = spring * uSeasonW.x + summer * uSeasonW.y + autumn * uSeasonW.z + winter * uSeasonW.w;
                        vec4 diffuseColor = vec4(cc, opacity);
                    `});let d=new A(n,Q($(4928293,.9),{key:`wood-dusted`,worldNormal:!0,fragmentColor:lt(`0.8`)}),s.length),f=new A(a,this.canopyMaterial,s.length);f.customDepthMaterial=ut(`canopy`,u,l),s.forEach((e,t)=>{d.setMatrixAt(t,e),f.setMatrixAt(t,e)}),d.castShadow=!0,d.receiveShadow=!0,f.castShadow=!0,f.receiveShadow=!0,this.scene.add(d,f)}buildBankPlants(){let e=R([new h(.22,1).translate(0,.14,0),new h(.17,1).translate(.16,.1,.05),new h(.15,1).translate(-.14,.09,-.06)]),t=[];for(let e=0;e<7;e++){let n=new ie(.07,.42,1,4).translate(0,.21,0),r=n.attributes.position;for(let e=0;e<r.count;e++){let t=r.getY(e);r.setX(e,r.getX(e)*(1-t/.5)),r.setZ(e,t*t*1.4)}n.rotateX(-.35),n.rotateY(e/7*Math.PI*2),t.push(n)}let n=R(t);n.computeVertexNormals();let r=[],i=[],a=[],o=[];for(let e=0;e<4e3&&(r.length<46||i.length<90);e++){let e=G(),t=Math.floor(e*(Ge.length-1)),n=e*(Ge.length-1)-t,[s,c]=Ge[t],[l,u]=Ge[t+1],d=l-s,f=u-c,p=Math.hypot(d,f),m=G()<.5?-1:1,h=K(.42,1),g=s+d*n-f/p*h*m,_=c+f*n+d/p*h*m;if(Math.abs(g)>7.1||Math.abs(_)>7.1||!Ot(g,_,{road:.6,hut:1.8,maxH:3}))continue;let v=q(g,_),y=G()<.62;X.position.set(g,v-.02,_),X.rotation.set(0,G()*Math.PI*2,0),X.scale.setScalar(K(y?.5:.45,.85)),X.updateMatrix(),y&&i.length<90?(i.push(X.matrix.clone()),o.push(G())):!y&&r.length<46&&(r.push(X.matrix.clone()),a.push(G()))}e.setAttribute(`aSeed`,new le(new Float32Array(a),1)),n.setAttribute(`aSeed`,new le(new Float32Array(o),1));let s=Q($(16777215,.85),{key:`bush`,worldNormal:!0,vertexPars:`attribute float aSeed; varying float vSeed;
`+kt,vertexBegin:`
                        vSeed = aSeed;
                        transformed *= mix(1.0, 0.62, uSeasonW.w);
                        vec3 o = instanceOrigin();
                        transformed += toLocal(vec3(uWindDir.x, 0.0, uWindDir.y) * gustAt(o.xz) * 0.03 * position.y * 4.0);
                    `,fragmentPars:`varying float vSeed;`,diffuse:`
                        vec3 sp = mix(vec3(0.3, 0.62, 0.18), vec3(0.95, 0.95, 0.9), step(0.8, fract(vSeed * 7.1)) * 0.5);
                        vec3 su = mix(vec3(0.14, 0.34, 0.1), vec3(0.2, 0.42, 0.14), vSeed);
                        vec3 au = mix(vec3(0.7, 0.1, 0.05), vec3(0.85, 0.42, 0.06), vSeed);
                        vec3 wi = vec3(0.3, 0.22, 0.16);
                        vec4 diffuseColor = vec4(sp * uSeasonW.x + su * uSeasonW.y + au * uSeasonW.z + wi * uSeasonW.w, opacity);
                    `,fragmentColor:lt(`1.0`)}),c=Q(new l({roughness:.8,side:2}),{key:`fern`,vertexPars:`attribute float aSeed; varying float vSeed; varying float vFernH;
`+kt,vertexBegin:`
                        vSeed = aSeed; vFernH = position.y;
                        float unfurl = mix(1.0, 0.75, uSeasonW.x * step(0.5, aSeed));
                        transformed.y *= mix(1.0, 0.28, uSeasonW.w) * unfurl;
                        transformed.xz *= mix(1.0, 1.25, uSeasonW.w);
                        vec3 o = instanceOrigin();
                        float s = sin(uWindTime * 2.4 + o.x * 2.0 + aSeed * 10.0) * 0.04 + gustAt(o.xz) * 0.08;
                        transformed += toLocal(vec3(uWindDir.x, 0.0, uWindDir.y) * s * position.y * 2.2);
                    `,fragmentPars:`varying float vSeed; varying float vFernH;`,diffuse:`
                        vec3 sp = vec3(0.36, 0.72, 0.22), su = vec3(0.14, 0.4, 0.12);
                        vec3 au = mix(vec3(0.6, 0.3, 0.08), vec3(0.72, 0.5, 0.14), vSeed), wi = vec3(0.5, 0.44, 0.38);
                        vec3 fc = (sp * uSeasonW.x + su * uSeasonW.y + au * uSeasonW.z + wi * uSeasonW.w) * (0.7 + vFernH * 0.9);
                        fc = mix(fc, vec3(0.86, 0.9, 0.95), uSnowCoverage * 0.45);
                        vec4 diffuseColor = vec4(fc, opacity);
                    `,fragmentNormal:`normal = normalize(vNormal); if (!gl_FrontFacing) normal.xz *= -1.0;`}),u=new A(e,s,r.length),d=new A(n,c,i.length);r.forEach((e,t)=>u.setMatrixAt(t,e)),i.forEach((e,t)=>d.setMatrixAt(t,e)),u.castShadow=!0,u.receiveShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1,u.frustumCulled=!1,this.scene.add(u,d)}},jt=class{constructor(e,n){let r=new S,i=q(He,Ue);r.position.set(He,i,Ue),r.rotation.y=-Math.PI/4;let a=Q($(7827562,.95),{key:`dusted-stone`,worldNormal:!0,fragmentColor:lt(`0.9`)}),s=$(7029808,.85),c=$(4860957,.9),u=Q($(4007191,.85),{key:`wood-dusted`,worldNormal:!0,fragmentColor:lt(`0.8`)}),p=$(8147510,.85),m=$(4865335,.8),h=$(3103290,.8),_=$(15260870,.7),v=$(3809556,.9),y=$(9067062,.9),b=new l({color:16756800,emissive:16742936,emissiveIntensity:3,roughness:.3,toneMapped:!1});n.push({material:b,key:`window`});let x=new vt;x.box(a,1.95,.9,1.65,0,0,0),x.box(s,1.7,1.05,1.4,0,.975,0);for(let e=.56;e<1.5;e+=.15)x.box(c,1.72,.02,1.42,0,e,0);[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([e,t])=>x.box(u,.11,1.07,.11,e*.85,.975,t*.7)),x.box(u,1.8,.08,1.5,0,1.5,0);let C=Math.atan2(.62,.85),w=new te;w.moveTo(-.85,0),w.lineTo(.85,0),w.lineTo(0,.62),w.closePath(),x.add(new pe(w,{depth:1.4,bevelEnabled:!1}),p,0,1.54,-.7);for(let e=-.6;e<=.61;e+=.2){let t=.62*(1-Math.abs(e)/.85);x.box(c,.018,t,.02,e,1.54+t/2,.705)}let T=2.2,D=1.27,O=D/Math.cos(C);this.roofSnow=[],[-1,1].forEach(e=>{let t=e*D/2,n=T-D/2*Math.tan(C);x.box(m,O,.08,2.15,t,n,0,0,0,-e*C),x.box(u,O+.02,.1,.06,t,n-.02,1.08,0,0,-e*C),x.box(u,O+.02,.1,.06,t,n-.02,-1.08,0,0,-e*C),[.45,.88].forEach(t=>x.box(u,.08,.08,2.25,e*t,T-t*Math.tan(C)-.08,0));for(let t=-.9;t<=.91;t+=.3)x.box(u,.07,.07,.07,e*1.2,T-1.2*Math.tan(C)-.07,t);let i=new M(xt(O+.04,.11,2.18),bt);i.position.set(t+e*Math.sin(C)*.04,n+Math.cos(C)*.04,0),i.rotation.z=-e*C,i.receiveShadow=!0,r.add(i)}),x.box(u,.12,.12,2.25,0,2.22,0),x.box(u,.05,.62,.03,-.22,1.83,.72,0,0,.9),x.box(u,.05,.62,.03,.22,1.83,.72,0,0,-.9),x.box(u,1.55,.06,.44,0,1.52,.92),x.box(u,1.55,.05,.05,0,1.87,1.12),[-.775,.775].forEach(e=>x.box(u,.05,.05,.44,e,1.87,.92));for(let e=-.72;e<=.73;e+=.09)x.box(p,.05,.32,.02,e,1.71,1.12);[-.775,.775].forEach(e=>x.box(p,.02,.32,.4,e,1.71,.92)),[-.6,.6].forEach(e=>x.box(u,.06,.45,.06,e,1.32,.85,.72,0,0)),x.box(v,.36,.52,.03,0,1.82,.705),x.box(v,.38,.72,.04,-.4,.84,.705),x.box(_,.46,.05,.05,-.4,1.22,.71);let k=(e,t,n,r)=>{let i=new f().makeRotationY(r).setPosition(e,t,n),a=(e,t,n,r,a)=>x.addMatrix(e,t,new f().multiplyMatrices(i,new f().makeTranslation(n,r,a)));a(new N(.3,.3,.02),b,0,0,0),a(new N(.38,.045,.05),_,0,.17,.01),a(new N(.4,.05,.08),_,0,-.17,.02),a(new N(.045,.3,.05),_,-.17,0,.01),a(new N(.045,.3,.05),_,.17,0,.01),a(new N(.02,.3,.03),_,0,0,.012),a(new N(.15,.36,.025),h,-.28,0,.02),a(new N(.15,.36,.025),h,.28,0,.02)};k(.38,1,.705,0),k(.86,1,.3,Math.PI/2),k(.86,1,-.35,Math.PI/2),k(-.86,1,.3,-Math.PI/2),k(-.86,1,-.35,-Math.PI/2),k(0,1,-.705,Math.PI),x.box(a,.26,.9,.26,.42,2.05,-.4),x.box(a,.34,.06,.34,.42,2.52,-.4);let ee=new g(.055,.055,.46,7).rotateZ(Math.PI/2);for(let e=0;e<4;e++)for(let t=0;t<7-e;t++)x.add(ee,y,-1.26,.06+e*.095,-.5+t*.115+e*.057,G()*.3,0,0);let A=new M(xt(.5,.06,.62),bt);A.position.set(-1.26,.43,-.16),r.add(A),r.updateMatrixWorld(!0);let j=[[.35,1.55],[.75,1.55],[1.15,1.55],[1.55,1.55],[1.75,1.3],[1.75,.9],[1.75,.5],[1.75,.1],[1.75,-.3],[1.75,-.7]],P=j.map(([e,t])=>(Y.set(e,0,t).applyMatrix4(r.matrixWorld),q(Y.x,Y.z)-i));j.forEach(([e,t],n)=>{if(x.box(u,.06,.46,.06,e,P[n]+.2,t),n>0){let[r,i]=j[n-1],a=Math.hypot(e-r,t-i),o=Math.atan2(e-r,t-i),s=(P[n]+P[n-1])/2;[.18,.34].forEach(n=>x.box(u,.03,.05,a,(e+r)/2,s+n,(t+i)/2,0,o,0))}}),x.build(r);let F=new M(new g(.06,.04,.15,6),new t({color:new E(2.2,1.6,.7),toneMapped:!1}));F.position.set(-.4,1.33,.82),this.lantern=new o(16742161,1.6,5,1.2),this.lantern.position.set(-.4,1.33,.95),r.add(F,this.lantern),this.lanternGlass=F,e.add(r),r.updateMatrixWorld(!0),this.chimneyTop=new d(.42,2.62,-.4).applyMatrix4(r.matrixWorld)}update(e,t={mid:0,beat:0}){let n=e.lantern*(1+t.mid*.22+t.beat*.2);this.lantern.intensity=n,this.lanternGlass.material.color.setRGB(.6+n*.5,.45+n*.36,.2+n*.15)}},Mt=class{constructor(e,t=9){this.home=new d(-1.8,5.5,1.6),this.migrateTo=new d(42,13,-40),this.birds=[],this._acc=new d,this._sep=new d,this._ali=new d,this._coh=new d;let n=e=>{let t=new O,n=[.03,0,.1,.5,.025,-.02,.31,.015,.16,.03,0,.1,.26,.012,-.22,.5,.025,-.02,.03,0,.1,.09,0,-.15,.26,.012,-.22];if(e<0)for(let e=0;e<n.length;e+=9){let t=n.slice(e,e+9),r=[-t[0],t[1],t[2],-t[6],t[7],t[8],-t[3],t[4],t[5]];n.splice(e,9,...r)}return t.setAttribute(`position`,new y(n,3)),t.computeVertexNormals(),t},r=n(-1),i=n(1),a=new O;a.setAttribute(`position`,new y([-.07,0,-.23,-.16,0,-.4,0,.025,-.35,.07,0,-.23,0,.025,-.35,.16,0,-.4],3)),a.computeVertexNormals();let o=[6793666,14255731,8562809,10717883,14134619,6264996],s=(e,t)=>{e=e.index?e.toNonIndexed():e;for(let t of Object.keys(e.attributes))t!==`position`&&t!==`normal`&&e.deleteAttribute(t);let n=e.attributes.position.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3]=t.r,r[e*3+1]=t.g,r[e*3+2]=t.b;return e.setAttribute(`color`,new L(r,3)),e};for(let n=0;n<t;n++){let c=new E(o[n%o.length]),l=c.clone().offsetHSL(0,-.03,-.09),u=R([s(new se(.14,8,6).scale(.78,.72,1.48),c),s(new se(.105,7,5).scale(.72,.44,1.12).translate(0,-.075,.035),new E(15853520)),s(new se(.095,8,6).translate(0,.025,.215),c),s(new D(.026,.08,6).rotateX(Math.PI/2).translate(0,.015,.32),new E(14721868)),s(new se(.012,6,4).translate(-.073,.048,.265),new E(1055004)),s(new se(.012,6,4).translate(.073,.048,.265),new E(1055004)),s(a.clone(),l)]),f=new S,p=new M(u,$(16777215,.85,{vertexColors:!0}));p.castShadow=!0;let m=$(l,.86,{side:2}),h=new M(r,m),g=new M(i,m);h.castShadow=g.castShadow=!0,f.add(p,h,g),f.scale.setScalar(.24+G()*.085);let _=n/t*Math.PI*2,v={mesh:f,leftWing:h,rightWing:g,pos:new d(this.home.x+Math.cos(_)*2,this.home.y+(G()-.5),this.home.z+Math.sin(_)*2),vel:new d(-Math.sin(_),0,Math.cos(_)).multiplyScalar(1.4),phase:G()*Math.PI*2,flap:G()*6,yaw:0,bank:0};f.position.copy(v.pos),e.add(f),this.birds.push(v)}}update(e,t,n){let r=Math.round(n),{birds:i,home:a,_acc:o,_sep:s,_ali:c,_coh:l}=this;for(let n=0;n<i.length;n++){let u=i[n],d=n>=r;if(o.set(0,0,0),d)Y.subVectors(this.migrateTo,u.pos).normalize().multiplyScalar(3.4),o.addScaledVector(Y.sub(u.vel),1.2);else{s.set(0,0,0),c.set(0,0,0),l.set(0,0,0);let e=0;for(let t=0;t<i.length;t++){if(t===n||t>=r)continue;let a=i[t],o=u.pos.distanceTo(a.pos);o>2.6||(e++,c.add(a.vel),l.add(a.pos),o<.75&&s.add(J.subVectors(u.pos,a.pos).multiplyScalar((.75-o)/Math.max(o,.05))))}e>0&&(c.divideScalar(e).sub(u.vel).multiplyScalar(.6),l.divideScalar(e).sub(u.pos).multiplyScalar(.35),o.add(c).add(l)),o.addScaledVector(s,2.4),Y.subVectors(a,u.pos);let d=Math.hypot(Y.x,Y.z);d>2.4&&o.addScaledVector(Y.set(Y.x,0,Y.z).normalize(),(d-2.4)*1.3),o.y+=(a.y-u.pos.y)*.9,o.x+=Math.sin(t*.7+u.phase)*.35,o.z+=Math.cos(t*.53+u.phase*1.3)*.35,o.y+=Math.sin(t*.9+u.phase*2.1)*.25}u.vel.addScaledVector(o,e);let f=u.vel.length(),p=d?3.6:2;f>p?u.vel.multiplyScalar(p/f):f<1&&u.vel.multiplyScalar(1/Math.max(f,.001)),u.pos.addScaledVector(u.vel,e);let m=u.mesh;if(m.visible=u.pos.distanceToSquared(a)<3025,!m.visible)continue;m.position.copy(u.pos),m.lookAt(J.copy(u.pos).add(u.vel));let h=Math.atan2(u.vel.x,u.vel.z),g=h-u.yaw;g>Math.PI?g-=Math.PI*2:g<-Math.PI&&(g+=Math.PI*2),u.yaw=h,u.bank=_.damp(u.bank,H(-g/Math.max(e,.001)*.45,-.75,.75),4,e),m.rotateZ(u.bank);let v=d?.1:W(Math.sin(t*.45+u.phase),.25,.75)*(u.vel.y<.25?1:.3);u.flap+=e*(10.5-v*6.5);let y=U(.6,.07,v),b=Math.sin(u.flap)*y;u.leftWing.rotation.z=-.06-b-v*.12,u.rightWing.rotation.z=.06+b+v*.12}}},Nt=class{constructor(e){let t=De.PARTICLES,r=[t.petals,t.pollen,t.leaves,t.snow,t.fireflies],i=r.reduce((e,t)=>e+t,0),a=new ie(1,1),o=new Float32Array(i),s=new Float32Array(i*4),c=0;r.forEach((e,t)=>{for(let n=0;n<e;n++,c++){o[c]=t;for(let e=0;e<4;e++)s[c*4+e]=G()}}),a.setAttribute(`aType`,new le(o,1)),a.setAttribute(`aSeed`,new le(s,4));let l=new I({uniforms:{...n.clone(F.fog),...Z},transparent:!0,depthWrite:!1,side:2,fog:!0,vertexShader:it+`
                        #include <fog_pars_vertex>
                        attribute float aType; attribute vec4 aSeed;
                        uniform vec4 uParticleRates; uniform float uFireflyRate;
                        varying vec2 vUv; varying float vAlpha; varying float vType; varying vec3 vColor; varying float vShade; varying float vSeed;

                        float h1(float n) { return fract(sin(n) * 43758.5453123); }
                        mat3 rotAxis(vec3 a, float ang) {
                            float s = sin(ang), c = cos(ang), oc = 1.0 - c;
                            return mat3(oc * a.x * a.x + c, oc * a.x * a.y + a.z * s, oc * a.z * a.x - a.y * s,
                                        oc * a.x * a.y - a.z * s, oc * a.y * a.y + c, oc * a.y * a.z + a.x * s,
                                        oc * a.z * a.x + a.y * s, oc * a.y * a.z - a.x * s, oc * a.z * a.z + c);
                        }

                        void main() {
                            vType = aType; vUv = uv; vSeed = aSeed.y;
                            float fall = 0.0, size = 0.05, rate = 0.0;
                            bool tumbling = false, hovering = false;
                            if (aType < 0.5)      { fall = 0.5;  size = 0.085; rate = uParticleRates.x; tumbling = true; }
                            else if (aType < 1.5) { fall = 0.0;  size = 0.035; rate = uParticleRates.y; hovering = true; }
                            else if (aType < 2.5) { fall = 0.62; size = 0.14;  rate = uParticleRates.z; tumbling = true; }
                            else if (aType < 3.5) { fall = 0.8;  size = 0.055; rate = uParticleRates.w; }
                            else                  { fall = 0.0;  size = 0.075; rate = uFireflyRate; hovering = true; }

                            float speed = fall * (0.8 + aSeed.z * 0.4);
                            // Leaves and petals drop from tree height, snow from the clouds.
                            float top = aType < 0.5 ? 6.0 : (aType < 2.5 ? 4.6 : 8.2);
                            float life = hovering ? 8.0 + aSeed.z * 6.0 : (top + 1.4) / speed;
                            float t = uTime + aSeed.w * life * 7.0;
                            float cycle = floor(t / life);
                            float age = fract(t / life);
                            float ageSec = age * life;

                            // New spawn point every cycle (pool reuse)
                            vec3 c = vec3((h1(cycle * 12.9898 + aSeed.x * 78.233) - 0.5) * 24.0, 0.0,
                                          (h1(cycle * 39.3467 + aSeed.y * 11.135) - 0.5) * 24.0);
                            if (hovering) {
                                c.y = 0.5 + aSeed.z * 2.2 + sin(ageSec * 0.6 + aSeed.x * 20.0) * 0.3;
                                c.x += sin(ageSec * 0.5 + aSeed.y * 30.0) * 0.7 + uWindDir.x * ageSec * 0.12;
                                c.z += cos(ageSec * 0.43 + aSeed.x * 30.0) * 0.7 + uWindDir.y * ageSec * 0.12;
                            } else {
                                c.y = top + aSeed.z * 1.2 - ageSec * speed;
                                float fl = aType < 0.5 ? 0.35 : (aType < 2.5 ? 0.55 : 0.2);
                                c.xz += uWindDir * ageSec * (aType > 2.5 ? 0.32 : 0.45);
                                c.x += sin(ageSec * 1.7 + aSeed.x * 30.0) * fl;
                                c.z += cos(ageSec * 1.3 + aSeed.y * 30.0) * fl;
                            }
                            c.xz = mod(c.xz + 12.0, 24.0) - 12.0;

                            float threshold = fract(aSeed.x * 7.13 + aSeed.w * 3.1);
                            float presence = smoothstep(threshold, threshold + 0.1, rate * 1.1);
                            float edgeFade = 1.0 - smoothstep(6.5, 7.4, max(abs(c.x), abs(c.z)));
                            float lifeFade = smoothstep(0.0, 0.08, age) * (1.0 - smoothstep(0.84, 1.0, age));
                            float groundFade = smoothstep(-0.4, 0.3, c.y);
                            vAlpha = presence * edgeFade * lifeFade * groundFade;
                            if (aType > 3.5) vAlpha *= 0.35 + 0.65 * pow(max(0.0, 0.5 + 0.5 * sin(uTime * (1.5 + aSeed.z * 2.0) + aSeed.x * 40.0)), 3.0);
                            if (vAlpha < 0.002) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }

                            vec3 local = vec3(position.xy, 0.0) * size * (0.7 + aSeed.y * 0.6);
                            vec3 world;
                            vec3 nrm = vec3(0.0, 0.0, 1.0);
                            if (tumbling) {
                                vec3 axis = normalize(vec3(aSeed.x - 0.5, aSeed.y - 0.2, aSeed.z - 0.5) + 0.001);
                                mat3 R = rotAxis(axis, ageSec * (1.4 + aSeed.w * 3.0) + aSeed.x * 6.28);
                                local = R * local;
                                nrm = R * nrm;
                                world = c + local;
                            } else {
                                vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
                                vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                                world = c + right * local.x + up * local.y;
                            }
                            vShade = abs(dot(nrm, normalize(uSunDir)));

                            if (aType < 0.5) vColor = mix(vec3(1.0, 0.62, 0.78), vec3(1.0, 0.95, 0.96), step(0.55, aSeed.y));
                            else if (aType < 1.5) vColor = vec3(1.0, 0.86, 0.45);
                            else if (aType < 2.5) {
                                float p = fract(aSeed.y * 5.7);
                                vColor = p < 0.3 ? vec3(0.78, 0.14, 0.05) : p < 0.6 ? vec3(0.95, 0.45, 0.06) : p < 0.85 ? vec3(0.95, 0.72, 0.12) : vec3(0.45, 0.25, 0.1);
                            }
                            else if (aType < 3.5) vColor = vec3(0.95, 0.97, 1.0);
                            else vColor = vec3(0.9, 1.0, 0.35);

                            vec4 mvPosition = viewMatrix * vec4(world, 1.0);
                            gl_Position = projectionMatrix * mvPosition;
                            #include <fog_vertex>
                        }
                    `,fragmentShader:it+`
                        #include <fog_pars_fragment>
                        varying vec2 vUv; varying float vAlpha; varying float vType; varying vec3 vColor; varying float vShade; varying float vSeed;
                        void main() {
                            vec2 p = vUv - 0.5;
                            float a;
                            vec3 col = vColor;
                            if (vType < 0.5) {            // petal: rounded teardrop with a notch
                                vec2 q = p * vec2(1.7, 1.15);
                                a = smoothstep(0.5, 0.42, length(q + vec2(0.0, 0.08 * sign(p.y))));
                                a *= 1.0 - smoothstep(0.03, 0.0, abs(p.x)) * step(0.3, p.y);
                                col *= 0.62 + 0.55 * vShade;
                            } else if (vType < 1.5 || vType > 3.5) {   // pollen / firefly glow
                                float d = length(p);
                                a = pow(smoothstep(0.5, 0.0, d), 2.2);
                                col *= vType > 3.5 ? 3.2 : 1.4;
                            } else if (vType < 2.5) {     // leaf: pointed ellipse with a midrib
                                float w = 0.46 * pow(max(1.0 - pow(abs(p.y) * 2.0, 2.0), 0.0), 0.75);
                                a = smoothstep(w, w - 0.05, abs(p.x));
                                col *= 1.0 - 0.35 * smoothstep(0.03, 0.0, abs(p.x));
                                col *= 0.5 + 0.6 * vShade;
                            } else {                      // snowflake: soft disc
                                a = smoothstep(0.5, 0.12, length(p));
                                col *= 1.0 - uNight * 0.55;
                            }
                            if (vType < 3.5 && !(vType > 0.5 && vType < 1.5)) col *= mix(1.0, 0.35, uNight);
                            a *= vAlpha;
                            if (a < 0.01) discard;
                            gl_FragColor = vec4(col, a);
                            #include <tonemapping_fragment>
                            #include <colorspace_fragment>
                            #include <fog_fragment>
                        }
                    `});this.mesh=new A(a,l,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,e.add(this.mesh)}},Pt=class{constructor(e,t,n=dt[0].smoke,i=26){this.origin=t,this.alpha=new Float32Array(i);let o=new r(.12,1);o.setAttribute(`aAlpha`,new le(this.alpha,1).setUsage(a)),this.material=Q(new l({color:10526880,roughness:.95,transparent:!0,depthWrite:!1,flatShading:!0}),{key:`smoke`,heightFog:!1,vertexPars:`attribute float aAlpha; varying float vAlpha;`,vertexBegin:`vAlpha = aAlpha;`,fragmentPars:`varying float vAlpha;`,diffuse:`vec4 diffuseColor = vec4( diffuse, opacity * vAlpha );`}),this.mesh=new A(o,this.material,i),this.mesh.frustumCulled=!1,this.particles=Array.from({length:i},(e,t)=>({pos:new d,vel:new d,age:-t/i*3.5,maxAge:3,size:.3,live:!1})),this.particles.forEach(e=>this.reset(e,n)),e.add(this.mesh)}reset(e,t){e.pos.copy(this.origin),e.vel.set((G()-.5)*.18,.42+G()*.35,(G()-.5)*.18),e.maxAge=2.2+G()*2.2,e.size=.2+G()*.4,e.live=G()<t,e.age>=0&&(e.age=0)}update(e,t,n){this.material.color.setRGB(U(.62,.22,n),U(.62,.24,n),U(.64,.3,n));for(let n=0;n<this.particles.length;n++){let r=this.particles[n];r.age+=e,r.age>=r.maxAge&&this.reset(r,t);let i=Math.max(r.age,0)/r.maxAge;r.age>=0&&(r.pos.addScaledVector(r.vel,e),r.pos.x+=Z.uWindDir.value.x*e*.25*i,r.pos.z+=Z.uWindDir.value.y*e*.25*i);let a=r.live&&r.age>=0;X.position.copy(r.pos),X.rotation.set(0,i*2,0),X.scale.setScalar(a?(.4+i*2.6)*(1-i*.45)*r.size*2:0),X.updateMatrix(),this.mesh.setMatrixAt(n,X.matrix),this.alpha[n]=a?W(i,0,.08)*(1-i)*.5*(.6+t*.4):0}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.geometry.attributes.aAlpha.needsUpdate=!0}},Ft=class{constructor(e,t,n,r){this.scene=e;let i=$(7950391,.9),a=$(11895116,.85),o=$(4796966,.9),s=Q($(5849134,.85),{key:`pavilion-roof`,worldNormal:!0,fragmentColor:lt(`1.0`)}),c=new l({color:16768417,emissive:16756553,emissiveIntensity:1.5,toneMapped:!1});t.push({material:c,key:`window`});let u=new vt,p=new d(0,1,0),m=(e,t,n,r,i=.035)=>{let a=new d(...n),o=new d(...r),s=o.clone().sub(a),c=new f().compose(a.add(o).multiplyScalar(.5),new T().setFromUnitVectors(p,s.clone().normalize()),new d(1,1,1));e.addMatrix(new g(i,i,s.length(),6),t,c)},h=(e,t,n)=>{u.box(o,.065,1.05,.065,e,t+.525,n),u.box(c,.15,.22,.15,e,t+1.08,n),u.add(new D(.17,.14,4),o,e,t+1.26,n,0,Math.PI/4,0)};for(let e=0;e<36;e++)u.box(e%3?a:i,1.45,.085,.115,-3.15,.7,4.65+e*.12);for(let e of[-3.78,-2.52]){u.box(o,.1,.15,4.6,e,.58,6.75);for(let t of[4.7,5.75,6.85,8.1,8.85]){let n=q(e,t);u.box(i,.13,1.03-n,.13,e,(n+1.03)*.5,t),u.box(a,.17,.045,.17,e,1.05,t)}m(u,i,[e,1.01,4.7],[e,1.01,6.85],.028)}for(let e=0;e<3;e++)u.box(a,1.45,.09,.18,-3.15,.64-e*.08,8.98+e*.17);h(-3.78,.75,4.7),h(-2.52,.75,6.85);let _=null;for(let e=0;e<=90;e++){let t=e/90*Math.PI*2,n=Qe(t)*1.17,r=B+Math.cos(t)*ze*n,o=V+Math.sin(t)*Be*n;if(r>-4.3&&r<-2&&o>5||Math.hypot(r-He,o-Ue)<2||Ze(r,o)>1.4){_=null;continue}let s=q(r,o);if(u.box(i,.065,.54,.065,r,s+.27,o),_)for(let e of[.23,.47])m(u,a,[_.x,_.y+e,_.z],[r,s+e,o],.022);_={x:r,y:s,z:o}}let v=new S;v.position.set(Le,q(Le,Re)+.05,Re);let b=new vt;b.box(o,2.25,.16,2.25,0,.08,0);for(let e=0;e<16;e++)b.box(a,2.15,.055,.125,0,.18,-.96+e*.128);for(let e of[-.84,.84])for(let t of[-.84,.84])b.box(i,.105,1.65,.105,e,1.01,t),b.box(a,.16,.08,.16,e,.3,t);for(let e of[-.84,.84]){b.box(i,1.86,.11,.11,0,1.83,e),b.box(a,1.65,.065,.07,0,.76,e);for(let t=0;t<7;t++)b.box(i,.045,.51,.045,-.72+t*.24,.5,e)}b.box(a,.07,.065,1.65,-.84,.76,0),b.add(new D(1.82,.72,4),s,0,2.13,0,0,Math.PI/4,0),b.add(new D(.19,.4,4),o,0,2.64,0,0,Math.PI/4,0),b.box(c,.22,.32,.22,0,1.48,0),b.build(v),e.add(v);let x=null;for(let e=0;e<72;e++){let t=e/71,n=-.12-t*3.4,r=3.9*(1-t)+.9,o=Le+Math.cos(n)*r,s=Re+Math.sin(n)*r,c=q(o,s)+.08,l=n-.025,d=r-.025,f=Math.atan2(Math.cos(l)*d-Math.cos(n)*r,Math.sin(l)*d-Math.sin(n)*r);if(u.box(a,.68,.095,.2,o,c,s,0,f,0),e%4==0){let e=o+Math.cos(f)*.38,t=s-Math.sin(f)*.38;u.box(i,.06,.62,.06,e,c+.31,t),x&&m(u,i,x,[e,c+.6,t],.028),x=[e,c+.6,t]}}for(let e of[-.35,-1.05,2.6,.55]){let t=Qe(e)*1.18,n=B+Math.cos(e)*ze*t,r=V+Math.sin(e)*Be*t;h(n,q(n,r),r)}let C=8.45,w=2.9,E=q(C,w);u.box(a,.42,.07,1.15,C,E+.4,w),u.box(a,.06,.37,1.15,8.649999999999999,E+.63,w);for(let e of[w-.43,3.33])u.box(o,.31,.38,.08,C,E+.19,e);u.build(e);let k=new A(n,r,110),te=0;for(let e=0;e<110;e++){let t=e/110*Math.PI*2,n=Qe(t)*(1.015+G()*.035),r=B+Math.cos(t)*ze*n,i=V+Math.sin(t)*Be*n;if(r>-4.25&&r<-2.1&&i>5)continue;let a=.16+G()*.25;X.position.set(r,Math.max(Ve-.04,q(r,i))+.04,i),X.rotation.set(G()*.4,G()*Math.PI*2,G()*.3),X.scale.set(a*1.5,a*.85,a),X.updateMatrix(),k.setMatrixAt(te++,X.matrix)}k.count=te,k.castShadow=!0,k.receiveShadow=!0,e.add(k),this.boat=new S,this.boat.position.set(-.65,-.095,5.3),this.boat.rotation.y=-.6;let j=[],N=[];for(let[e,t]of[[1,.22],[.64,-.09],[.56,-.04],[.85,.19]])for(let n=0;n<16;n++){let r=n/16*Math.PI*2;j.push(Math.cos(r)*.38*e,t,Math.sin(r)*.87*e)}for(let e=0;e<4;e++)for(let t=0;t<16;t++){let n=(t+1)%16,r=e*16+t,i=e*16+n,a=(e+1)%4*16+t,o=(e+1)%4*16+n;N.push(r,i,a,i,o,a)}let P=new O;P.setAttribute(`position`,new y(j,3)),P.setIndex(N),P.computeVertexNormals();let F=new M(P,$(9787949,.85));F.material.side=2,F.castShadow=!0,F.receiveShadow=!0,this.boat.add(F);let I=new vt;I.box(o,.36,.035,1.05,0,-.02,0);for(let e of[-.34,.28])I.box(a,.58,.05,.15,0,.13,e);m(I,a,[-.48,.25,-.43],[.5,.25,.55],.017),I.box(a,.1,.025,.3,.45,.25,.49,0,-.75,0),I.build(this.boat),e.add(this.boat);let ne=new O().setFromPoints([new d(-2.52,.95,5.75),new d(-1.6,.15,5.5),new d(-.65,.11000000000000001,5.3)]);e.add(new ee(ne,new re({color:10255952})))}update(e,t=0){let n=je?0:1-Z.uFreeze.value,r=1+t*1.1;this.boat.position.y=-.095+Math.sin(e*1.1)*.025*n*r,this.boat.rotation.z=Math.sin(e*.85)*.024*n*r,this.boat.rotation.x=Math.sin(e*.72)*.015*n*r}},It=class{constructor(e){this.group=new S,this.group.rotation.y=Math.PI/4,e.add(this.group),this.pathAngle=1.85,this.travel=0,this.speed=.8,this.axis=new d(0,1,0),this.delta=new d,this.knee=new d,this.foot=new d,this.wheels=[],this.legs=[];let t=e=>new l({color:e,roughness:.78}),n=t(6273972),r=t(3157558),i=t(16772821),a=t(10991549),o=t(15976362),s=t(5649961),c=t(15778157),u=t(6061201),f=t(14912384),p=t(355e4),m=t(15311509),h=t(12154216),_=t(3548447),v=t(8737594),y=t(11957605),b=t(14206119);o.emissive.copy(o.color),o.emissiveIntensity=.08;let x=new se(1,24,16),C=new g(1,1,1,12),w=new N(1,1,1),T=(e,t,n,r,i,a,o=1,s=o,l=o)=>{let u=new M(t,n);return u.position.set(r,i,a),u.scale.set(o,s,l),u.castShadow=!0,u.receiveShadow=n!==c,e.add(u),u},E=(e,t,n,r,i)=>{let a=T(e,C,i,0,0,0);return this.placeBone(a,new d(...t),new d(...n),r),a},D=(e,t,n,r)=>{let i=T(e,new fe(new P(t.map(e=>new d(...e))),16,n,6,!1),r,0,0,0);return i.receiveShadow=!1,i},O=(e,t,n,r,i,a=i,o=i)=>{let s=T(this.body,x,e,t,n,r,i,a,o);return s.receiveShadow=!1,s.castShadow=!1,s},k=[0,.26,-.46],ee=[0,.26,.46],te=[0,.37,0],A=[0,.79,-.17],j=[0,.79,.32];[[k,A],[A,te],[te,k],[A,j],[j,te],[j,ee]].forEach(([e,t])=>E(this.group,e,t,.023,n));for(let e of[-1,1])E(this.group,[e*.045,.79,.32],[e*.045,.26,.46],.015,a),E(this.group,[e*.045,.37,0],[e*.045,.26,-.46],.012,a);for(let e of[-.46,.46]){let t=new S;t.position.set(0,.26,e),this.group.add(t);let n=T(t,new de(.235,.025,6,24),r,0,0,0);n.rotation.y=Math.PI/2;let o=T(t,new de(.204,.008,4,24),i,0,0,0);o.rotation.y=Math.PI/2;for(let e=0;e<8;e++){let n=e*Math.PI/4;E(t,[0,0,0],[0,Math.cos(n)*.205,Math.sin(n)*.205],.004,a)}E(t,[-.055,0,0],[.055,0,0],.025,a),this.wheels.push(t)}T(this.group,w,p,0,.825,-.19,.19,.055,.25),E(this.group,[0,.7,-.17],[0,.82,-.19],.018,a),E(this.group,[0,.79,.32],[0,.99,.35],.018,a),E(this.group,[-.22,.99,.35],[.22,.99,.35],.016,a);for(let e of[-1,1])E(this.group,[e*.13,.99,.35],[e*.23,.99,.35],.024,p);let F=t(12950119);T(this.group,w,F,0,.83,.56,.3,.035,.23);for(let e of[-1,1])T(this.group,w,F,e*.15,.92,.56,.022,.19,.24),T(this.group,w,F,0,.92,.56+e*.115,.3,.19,.022);T(this.group,x,i,0,.96,.56,.09,.1,.08),this.lampMaterial=new l({color:16772543,emissive:16766099,emissiveIntensity:0}),T(this.group,x,this.lampMaterial,0,.8,.7,.038),this.body=new S,this.group.add(this.body);let I=T(this.body,x,c,0,1.065,-.12,.132,.225,.112);I.rotation.x=.22,T(this.body,x,u,0,.875,-.18,.128,.085,.112),O(o,0,1.285,-.05,.047,.068,.046);let ne=O(o,0,1.43,.015,.164,.183,.145);ne.castShadow=!0,T(this.body,x,s,0,1.45,-.055,.172,.177,.13);for(let[e,t,n,r,i]of[[-.109,1.484,.122,-.5,.031],[-.059,1.499,.141,-.3,.05],[-.009,1.507,.135,-.18,.049],[.049,1.503,.125,.22,.04]]){let a=T(this.body,x,s,e,t,n,i,.018,.022);a.rotation.z=r}for(let e of[-1,1]){O(o,e*.16,1.423,.005,.023,.032,.026),O(m,e*.177,1.423,.015,.007,.018,.012);let t=T(this.body,x,s,e*.145,1.39,-.016,.028,.072,.05);t.rotation.z=e*.12,O(_,e*.058,1.453,.15,.016,.021,.01),O(i,e*.058-.004,1.46,.159,.0052),O(i,e*.058+.004,1.446,.16,.0023),O(m,e*.094,1.406,.127,.022,.011,.008),D(this.body,[[e*.041,1.486,.144],[e*.058,1.49,.139],[e*.077,1.484,.132]],.0028,s);let n=T(this.body,x,i,e*.033,1.232,-.012,.034,.022,.013);n.rotation.z=e*.32,n.receiveShadow=!1;let r=[e*.12,1.19,-.075],a=[e*.17,1.07,.105],l=[e*.19,.995,.35];T(this.body,x,c,...r,.052,.063,.057),E(this.body,r,a,.041,c),T(this.body,x,c,...a,.034),E(this.body,a,l,.03,c),E(this.body,[e*.187,1.008,.312],l,.032,i),O(o,...l,.03,.028,.036),O(o,e*.168,.988,.355,.012,.015,.019)}for(let e of[1.09,1.143,1.194]){let t=e-1.065;T(this.body,x,i,0,e,-.12+.112*Math.sqrt(1-(t/.225)**2)+t*.22,.0065,.0065,.004)}O(o,0,1.425,.16,.013,.017,.016),D(this.body,[[-.019,1.392,.158],[0,1.385,.159],[.019,1.392,.158]],.0028,y),T(this.body,new se(1,32,16,0,Math.PI*2,0,Math.PI/2),f,0,1.49,-.006,.183,.14,.169),T(this.body,x,f,0,1.493,.145,.16,.013,.05);for(let e of[-.076,0,.076]){let t=[-.115,-.07,0,.07,.115].map(t=>[e,1.49+.141*Math.sqrt(1-(e/.183)**2-(t/.169)**2),t-.006]);D(this.body,t,e===0?.006:.0035,e===0?i:y)}for(let e of[-1,1])E(this.body,[e*.155,1.48,.01],[e*.085,1.3,.035],.007,p);this.ponytail=new S,this.ponytail.position.set(0,1.46,-.22),this.body.add(this.ponytail),T(this.ponytail,x,s,0,-.018,-.02,.044,.048,.048);let re=T(this.ponytail,x,s,0,-.078,-.085,.06,.115,.057);re.rotation.x=-.65,D(this.ponytail,[[.022,-.013,-.059],[.024,-.07,-.132],[.013,-.145,-.155]],.004,v);for(let e of[-1,1]){let t=T(this.ponytail,x,f,e*.029,0,-.02,.03,.02,.014);t.rotation.z=e*.35}T(this.ponytail,x,i,0,-.001,-.034,.012),T(this.body,x,h,0,1.08,-.265,.12,.15,.065),T(this.body,x,f,0,1.128,-.319,.106,.065,.021),T(this.body,x,i,0,1.099,-.339,.01,.012,.004);for(let e of[-1,1])E(this.body,[e*.1,1.23,-.17],[e*.1,.94,-.23],.012,i);for(let e of[-1,1]){let t=T(this.group,C,u,0,0,0),n=T(this.group,C,u,0,0,0),r=T(this.group,x,i,0,0,0,.049,.035,.092);T(r,x,b,0,-.68,0,1.02,.24,1.01);for(let e of[-.28,.05,.36])T(r,w,f,0,.85,e,.9,.1,.085);let o=T(this.group,w,p,0,0,0,.12,.022,.085),s=T(this.group,C,a,0,0,0);this.legs.push({side:e,hip:new d(e*.105,.885,-.18),thigh:t,shin:n,shoe:r,pedal:o,arm:s})}this.update(0,0)}placeBone(e,t,n,r){this.delta.subVectors(n,t),e.position.copy(t).add(n).multiplyScalar(.5),e.scale.set(r,this.delta.length(),r),e.quaternion.setFromUnitVectors(this.axis,this.delta.normalize())}update(e,t){let n=je?0:e*this.speed;this.travel+=n;let r=this.travel/.42,i=et(this.pathAngle+.001),a=et(this.pathAngle-.001),o=Math.hypot(i.x-a.x,i.z-a.z)/.002;this.pathAngle-=n/o;let s=this.pathAngle,c=et(s),l=et(s-.015),u=et(s+.015);this.group.position.set(c.x,q(c.x,c.z)+.015,c.z),this.group.rotation.y=Math.atan2(l.x-u.x,l.z-u.z),this.group.rotation.x=-Math.atan2(q(l.x,l.z)-q(u.x,u.z),Math.hypot(l.x-u.x,l.z-u.z)),this.group.rotation.z=je?0:Math.sin(r)*.014,this.group.scale.setScalar(1),this.group.visible=!0;for(let e of this.wheels)e.rotation.x=this.travel/.26;this.ponytail.rotation.z=Math.sin(r)*.09,this.ponytail.rotation.x=Math.sin(r*.5)*.06,this.lampMaterial.emissiveIntensity=t*2;for(let e of this.legs){let t=r+(e.side<0?Math.PI:0);this.foot.set(e.side*.13,.37+Math.cos(t)*.13,.13*Math.sin(t)),e.pedal.position.copy(this.foot),e.shoe.position.copy(this.foot),e.shoe.position.y+=.04,e.shoe.position.z+=.025;let n=e.shoe.position.y-e.hip.y,i=e.shoe.position.z-e.hip.z,a=Math.hypot(n,i),o=Math.sqrt(Math.max(0,.34*.34-a*a*.25));this.knee.set(e.hip.x,(e.hip.y+e.shoe.position.y)*.5+i/a*o,(e.hip.z+e.shoe.position.z)*.5-n/a*o),this.placeBone(e.thigh,e.hip,this.knee,.052),this.placeBone(e.shin,this.knee,e.shoe.position,.039),this.knee.set(e.side*.13,.37,0),this.placeBone(e.arm,this.knee,this.foot,.013)}}},Lt={overview:{position:new d(17.5,19,29),target:new d(0,.35,0)},cyclist:{position:new d,target:new d},ridge:{position:new d(-15,10,7),target:new d(-6.5,3.5,-6.8)},road:{position:new d(9,5.5,15),target:new d(0,.25,2.5)}},Rt=class{constructor(e,t,n=()=>1){this.camera=e,this.controls=t,this.getFit=n,this.active=!1,this.fromPos=new d,this.toPos=new d,this.fromTarget=new d,this.toTarget=new d,this.duration=je?400:1250,this.onArrive=null}go(e,t=null){let n=Lt[e]||Lt.overview;this.fromPos.copy(this.camera.position),this.toPos.copy(n.position).sub(n.target).multiplyScalar(this.getFit()).add(n.target),this.fromTarget.copy(this.controls.target),this.toTarget.copy(n.target),this.start=performance.now(),this.active=!0,this.onArrive=t,this.controls.autoRotate=!1}cancel(){this.active=!1,this.onArrive=null}update(e){if(!this.active)return;let t=H((e-this.start)/this.duration,0,1),n=t*t*(3-2*t);this.camera.position.lerpVectors(this.fromPos,this.toPos,n),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,n),t>=1&&(this.active=!1,this.onArrive&&this.onArrive())}},zt=class{constructor(e){this.app=e,this.state={season:e.seasons.seasonIndex,time:e.seasons.timeIndex,camera:`overview`,autoOrbit:!1},this.container=be(`Animation76-gui-container`),document.body.appendChild(this.container),this.scrollbarStyle=xe(`Animation76-gui-container`),this.gui=new _e({title:`枫湖小筑 · 场景控制`,width:270,container:this.container}),this.seasonControl=this.gui.add(this.state,`season`,{春:0,夏:1,秋:2,冬:3}).name(`季节`).onChange(t=>e.seasons.setSeason(Number(t))),this.timeControl=this.gui.add(this.state,`time`,{日落:0,正午:1,夜晚:2}).name(`时间`).onChange(t=>e.seasons.setTime(Number(t))),this.cameraControl=this.gui.add(this.state,`camera`,{全景:`overview`,山顶亭:`ridge`,湖畔:`road`,跟随骑行:`cyclist`,自由视角:`free`}).name(`镜头`).onChange(t=>{t===`free`?(e.followCyclist=!1,e.controls.minDistance=6,e.cameraRig.cancel(),e.setAutoOrbit(!1),this.setCamera(`free`)):e.goCamera(t)}),this.orbitControl=this.gui.add(this.state,`autoOrbit`).name(`自动环绕`).onChange(t=>e.setAutoOrbit(t));let t=this.gui.addFolder(`画面效果`);t.add(e.settings,`exposure`,.5,1.6,.05).name(`曝光`),t.add(e.settings,`sun`,.4,1.8,.05).name(`阳光强度`),t.add(e.settings,`fog`,0,2.5,.05).name(`雾量`),t.add(e.settings,`bloom`,0,1,.05).name(`泛光`),t.add(e.settings,`reflections`).name(`湖面倒影`);let n=this.gui.addFolder(`运动`);n.add(e.settings,`cyclingSpeed`,.1,2.5,.05).name(`骑行速度`),n.add(e.settings,`orbitSpeed`,.1,2,.05).name(`环绕速度`),n.add(e.settings,`waterFlow`,0,2,.05).name(`水面流速`),e.seasons.on(()=>this.sync()),this.gui.hide(),this.button=ve(`Animation76-settings-button`),this.visible=!1,this.toggle=()=>{this.visible=!this.visible,this.visible?this.gui.show():this.gui.hide()},this.button.addEventListener(`click`,this.toggle),document.body.appendChild(this.button)}sync(){this.state.season=this.app.seasons.seasonIndex,this.state.time=this.app.seasons.timeIndex,this.seasonControl.updateDisplay(),this.timeControl.updateDisplay()}setCamera(e){this.state.camera=e||`free`,this.cameraControl.updateDisplay()}setOrbit(e){this.state.autoOrbit=!!e,this.orbitControl.updateDisplay()}dispose(){this.button.removeEventListener(`click`,this.toggle),ye(this.button,this.container,this.gui),this.scrollbarStyle.remove()}},Bt=class{constructor(e,t={}){this.canvas=e,this.glowMaterials=[],this.lastFrame=null,this.elapsed=0,this.audio=null,this.frames=0,this.fpsTime=performance.now(),this.lowFpsSeconds=0,this.startedAt=performance.now(),this.seasons=new gt(0,1),this.settings={exposure:1,sun:1,fog:.3,bloom:.42,reflections:!0,cyclingSpeed:.8,orbitSpeed:.42,waterFlow:1},this.defaults=Object.freeze({season:this.seasons.seasonIndex,time:this.seasons.timeIndex,settings:Object.freeze({...this.settings})}),Object.assign(this.settings,t),this.initRenderer(),this.initScene(),this.initLights(),this.buildWorld(),this.initPost(),this.ui=new zt(this),this.gui=this.ui.gui,this.cameraRig=new Rt(this.camera,this.controls,()=>this.viewFit),this.setAutoOrbit(!1),this.onPointerDown=()=>{this.followCyclist=!1,this.controls.minDistance=6,this.cameraRig.cancel(),this.setAutoOrbit(!1),this.ui.setCamera(null)},this.canvas.addEventListener(`pointerdown`,this.onPointerDown,{passive:!0}),this.onResize()}initRenderer(){this.pixelRatio=Math.min(window.devicePixelRatio,De.MAX_PIXEL_RATIO);let t=this.renderer=new ae({canvas:this.canvas,antialias:!0,powerPreference:`high-performance`});t.setPixelRatio(this.pixelRatio),t.setSize(this.canvas.clientWidth||window.innerWidth,this.canvas.clientHeight||window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=1,t.toneMapping=4,t.toneMappingExposure=1.05,t.outputColorSpace=e}initScene(){this.scene=new ce,this.scene.fog=new b(2505538,Ae),Z.uFogColor.value=this.scene.fog.color,this.camera=new i(38,(this.canvas.clientWidth||window.innerWidth)/(this.canvas.clientHeight||window.innerHeight),.1,300),this.camera.position.copy(Lt.overview.position);let e=this.controls=new Ce(this.camera,this.renderer.domElement);e.enableDamping=!0,e.dampingFactor=.05,e.maxPolarAngle=Math.PI*.48,e.minDistance=6,e.maxDistance=65,e.target.copy(Lt.overview.target),e.autoRotateSpeed=this.settings.orbitSpeed,this.applyViewFit();let t=Lt.overview;this.camera.position.copy(t.position).sub(t.target).multiplyScalar(this.viewFit).add(t.target)}applyViewFit(){let e=(this.canvas.clientWidth||window.innerWidth)/(this.canvas.clientHeight||window.innerHeight),t=Math.tan(Ke(19)),n=e<1.3?t*1.3/e:t,r=Math.min(n,Math.tan(Ke(26)));this.camera.fov=_.radToDeg(2*Math.atan(r)),this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.viewFit=n/r,this.controls.maxDistance=65*this.viewFit}initLights(){this.hemi=new w(16777215,3355443,.6),this.sun=new p(16771757,Oe);let e=this.sun.shadow;e.mapSize.set(De.SHADOW_MAP_SIZE,De.SHADOW_MAP_SIZE),e.camera.near=4,e.camera.far=65,e.camera.left=-17.3,e.camera.right=17.3,e.camera.top=17.3,e.camera.bottom=-17.3,e.bias=-4e-4,e.normalBias=.025,e.radius=2.5,this.sun.castShadow=!0,this.sun.target.position.set(0,.8,0),this.scene.add(this.hemi,this.sun,this.sun.target)}buildWorld(){let e=this.scene,t=this.glowMaterials;this.sky=new St(e),this.terrain=new Tt(e),this.stream=new Dt(e),this.village=new Ft(e,t,this.terrain.rockGeometry,this.terrain.rockMaterial),this.vegetation=new At(e),this.chalet=new jt(e,t),this.birds=new Mt(e,9),this.weather=new Nt(e),this.smoke=new Pt(e,this.chalet.chimneyTop,this.seasons.season.smoke),this.cyclist=new It(e),this.cyclist.speed=this.settings.cyclingSpeed}initPost(){if(this.useComposer=De.USE_BLOOM,!this.useComposer)return;let e=this.renderer.getDrawingBufferSize(new u),t=new c(e.x,e.y,{type:x,samples:De.MSAA_SAMPLES});this.composer=new he(this.renderer,t),this.composer.addPass(new me(this.scene,this.camera)),this.bloom=new Se(new u(this.canvas.clientWidth||window.innerWidth,this.canvas.clientHeight||window.innerHeight),this.settings.bloom,.5,1),this.composer.addPass(this.bloom),this.composer.addPass(new ge)}goCamera(e){if(this.followCyclist=e===`cyclist`,this.controls.minDistance=this.followCyclist?2:6,e!==`overview`&&this.ui.setOrbit(!1),this.followCyclist){let e=Lt.cyclist;e.target.copy(this.cyclist.group.position),e.target.y+=.9,e.position.copy(e.target).add(new d(7.68,3.84,3.6))}this.ui.setCamera(e),this.cameraRig.go(e,()=>{this.controls.autoRotate=e===`overview`&&this.ui.state.autoOrbit})}setAutoOrbit(e){this.controls.autoRotate=e&&!this.cameraRig.active,this.ui.setOrbit(e),e&&this.goCamera(`overview`)}onResize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=this.viewFit;this.applyViewFit();let r=this.viewFit/n;this.camera.position.sub(this.controls.target).multiplyScalar(r).add(this.controls.target),this.cameraRig.active&&(this.cameraRig.fromPos.sub(this.cameraRig.fromTarget).multiplyScalar(r).add(this.cameraRig.fromTarget),this.cameraRig.toPos.sub(this.cameraRig.toTarget).multiplyScalar(r).add(this.cameraRig.toTarget)),this.renderer.setSize(e,t),this.composer&&(this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(e,t))}resetDefaults(){Object.assign(this.settings,this.defaults.settings),this.seasons.setSeason(this.defaults.season),this.seasons.setTime(this.defaults.time),this.setAutoOrbit(!1),this.controls.autoRotateSpeed=this.settings.orbitSpeed,this.cyclist.speed=this.settings.cyclingSpeed,this.stream.reflectionsEnabled=this.settings.reflections,this.bloom&&(this.bloom.enabled=!0,this.bloom.strength=this.settings.bloom),this.pixelRatio=Math.min(window.devicePixelRatio,De.MAX_PIXEL_RATIO),this.renderer.setPixelRatio(this.pixelRatio),this.onResize(),this.lowFpsSeconds=0,this.frames=0,this.startedAt=this.fpsTime=performance.now(),this.goCamera(`overview`)}applyAtmosphere(e){let t=this.seasons,n=t.season,r=t.time;this.sun.color.copy(r.sunColor),this.sun.intensity=Oe*r.sunIntensity*(1-n.cloudShade*.35)*this.settings.sun,this.sun.position.copy(t.lightDir).multiplyScalar(34).add(this.sun.target.position),this.hemi.color.copy(r.hemiSky),this.hemi.groundColor.copy(r.hemiGround),this.hemi.intensity=r.hemiIntensity*(1+n.snowCoverage*.2);let i=this.scene.fog;i.color.setRGB(r.fog.r*n.fogTint.x,r.fog.g*n.fogTint.y,r.fog.b*n.fogTint.z),i.density=n.fogDensity*(Ae/.017)*this.settings.fog,Z.uHeightFog.value=n.heightFog*(1-r.night*.35)*this.settings.fog,this.renderer.toneMappingExposure=r.exposure*this.settings.exposure;for(let t of this.glowMaterials)t.key===`window`&&(t.material.emissiveIntensity=r.windows*(1+e.beat*.16))}trackFps(e){if(this.frames++,e-this.fpsTime<1e3)return;let t=Math.round(this.frames*1e3/(e-this.fpsTime));this.frames=0,this.fpsTime=e,!(!De.ADAPTIVE||e-this.startedAt<5e3||document.hidden)&&(this.lowFpsSeconds=t<45&&t>=10?this.lowFpsSeconds+1:0,!(this.lowFpsSeconds<4)&&(this.lowFpsSeconds=0,this.useComposer&&this.bloom.enabled?(this.bloom.enabled=!1,this.settings.reflections=!1,this.stream.reflectionsEnabled=!1):this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.onResize())))}frame(e){let t=this.lastFrame===null?1/60:Math.min((e-this.lastFrame)/1e3,.1);this.lastFrame=e,this.elapsed+=t;let n=this.elapsed,r=performance.now();this.trackFps(r);let i=this.seasons;i.update(t);let a=i.season,o=i.time,s=this.audio||{},c=this.audioLevels||={bass:0,mid:0,high:0,energy:0,beat:0};for(let e of[`bass`,`mid`,`high`,`energy`])c[e]+=((Number(s[e])||0)-c[e])*Math.min(1,t*8);c.beat+=((Number(s.kick)||0)-c.beat)*Math.min(1,t*12);let l=+!je;Z.uTime.value=n,Z.uWindTime.value+=t*ke*(1+c.high*.5*l),Z.uAudioWind.value=1+c.high*.8*l,Z.uFlowTime.value+=t*a.flow*this.settings.waterFlow*(1+c.bass*.35),Z.uFoam.value*=1+c.bass*.22,Z.uParticleRates.value.multiplyScalar(1+c.high*.3*l),Z.uFireflyRate.value=Math.min(1,Z.uFireflyRate.value*(1+c.mid*.4)),this.applyAtmosphere(c),this.bloom&&(this.bloom.strength=this.settings.bloom+c.energy*.1),this.sky.update(t,i,this.pixelRatio),this.stream.update(),this.village.update(n,c.bass),this.chalet.update(o,c),this.birds.update(t,n,a.birds),this.smoke.update(t,a.smoke,o.night),this.stream.reflectionsEnabled=this.settings.reflections,this.controls.autoRotateSpeed=this.settings.orbitSpeed,this.cyclist.speed=this.settings.cyclingSpeed*(1+c.beat*.12),this.cyclist.update(t,o.carLights),this.followCyclist&&!this.cyclist.group.visible&&this.goCamera(`overview`);let u=Z.uSnowCoverage.value>.01;bt.visible=Z.uSnowCoverage.value>yt,this.vegetation.coniferCaps.visible=u,this.cameraRig.update(r),this.followCyclist&&!this.cameraRig.active&&(J.copy(this.cyclist.group.position),J.y+=.9,J.sub(this.controls.target),this.camera.position.add(J),this.controls.target.add(J)),this.controls.update(t),this.useComposer?this.composer.render(t):this.renderer.render(this.scene,this.camera)}render(){this.disposed||this.frame(performance.now())}updateWithAudioData(e){this.audio=e?.isPlaying===!0?e.audioFeature?.animation??null:null}onWindowResize(){this.disposed||this.onResize()}resetGuiCamera(){this.followCyclist=!1,this.cameraRig.cancel(),this.goCamera(`overview`)}resetState(){this.audio=null,this.lastFrame=null,this.audioLevels=null}dispose(){if(this.disposed)return;this.disposed=!0,this.canvas.removeEventListener(`pointerdown`,this.onPointerDown),this.ui.dispose(),this.controls.dispose();let e=new Set,t=new Set,n=new Set;this.scene.traverse(n=>{n.geometry&&e.add(n.geometry);for(let e of[n.material].flat().filter(Boolean))t.add(e)});for(let t of e)t.dispose();for(let e of t){for(let t of Object.values(e))t?.isTexture&&n.add(t);e.dispose()}for(let e of n)e.dispose();this.composer?.dispose(),this.stream?.reflection?.getRenderTarget()?.dispose(),this.renderer.dispose(),this.scene.clear()}};export{Bt as default};