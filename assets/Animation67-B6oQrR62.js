import{a as e}from"./lil-gui.esm-jlbWO7FJ.js";import{Dr as t,Et as n,Gt as r,H as i,Jn as a,Or as o,P as s,St as c,Ut as l,Vt as u,Xn as d,Zn as f,g as p,l as m,r as ee,u as h}from"./three.module-TVF63cYk.js";import{n as g,r as _,t as v}from"./OutputPass-CxDAHfy4.js";import{t as y}from"./UnrealBloomPass-C17ZlHgr.js";import{i as b,n as x,r as S,t as C}from"./GUIHelper-DspWBXk2.js";var te=(e=!1)=>({blending:5,blendEquation:100,blendSrc:e?201:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:e?200:201,blendDstAlpha:e?201:205,premultipliedAlpha:e}),ne=e=>{e?.blendMaterial&&Object.assign(e.blendMaterial,te(!0))},w=Object.freeze({转场强度:[0,1.5],传播强度:[0,1.2],镜头动势:[0,1.5],粒子数量:[8e3,5e4],星点尺寸:[.8,3.2],星点亮度:[.6,2.2],Hero强度:[0,2.6],近景层强度:[0,2.2],漂移速度:[0,.65],星河流动:[0,1.4],空间氛围:[0,.8],Flyby强度:[0,1.3],微星强度:[0,1.6],星尘强度:[0,1.2],星云强度:[0,1.5],星云色彩响应:[0,2.5],星云细丝强度:[.4,2.5],恒星强度:[0,1.8],拖尾强度:[0,.8],拖尾长度:[.3,1.4],拖尾宽度:[.4,1.4],丝带色彩响应:[0,3],丝带饱和增强:[0,3],丝带变色速度:[.03,.8],Bloom强度:[0,1],Bloom半径:[0,.6],Bloom阈值:[.05,1],音乐响应强度:[0,1.5],转场灵敏度:[0,1],运动响应:[0,1.5],光色响应:[0,1.5],镜头响应:[0,1.2]});function re(e={}){let t={};if(!e||typeof e!=`object`)return t;for(let[n,r]of Object.entries(e)){if(n===`音频驱动`){typeof r==`boolean`&&(t[n]=r);continue}let e=w[n];if(!e||!Number.isFinite(r))continue;let i=c.clamp(r,e[0],e[1]);t[n]=n===`粒子数量`?Math.round(i):i}return t}function ie(e){let b=Math.PI*2,x=5e4,S=17e3,C=6200,w=[`Into the Void · 进入深空`,`Galactic Passage · 穿越银河`,`Stellar Cathedral · 星海圣殿`,`Edge of the Galaxy · 银河边缘`],re=[`Void Arrival · 深空抵达`,`Galactic Sweep · 银河横越`,`Cathedral Surge · 星海涌升`,`Edge Rebirth · 边缘重生`],ie=[{fov:68,lookX:16,lookY:3,depth:-138},{fov:60.5,lookX:-2,lookY:-2,depth:-146},{fov:57.5,lookX:0,lookY:6,depth:-158},{fov:69,lookX:-18,lookY:5,depth:-152}],ae=[{stars:.78,near:.52,micro:.48,dust:.64,nebula:.52,hero:.68,trail:.36,bloom:.82,cool:1.18,warm:.62,rose:.58},{stars:1.04,near:1.18,micro:1.28,dust:1.34,nebula:.42,hero:1,trail:1.34,bloom:1.06,cool:1.02,warm:.86,rose:1},{stars:.72,near:.46,micro:.52,dust:.94,nebula:.64,hero:1.42,trail:.2,bloom:1.18,cool:.72,warm:1.28,rose:1.34},{stars:.54,near:.3,micro:.34,dust:.44,nebula:.28,hero:.46,trail:.3,bloom:.58,cool:1.28,warm:.38,rose:.4}],oe=[[[.18,.095,.18],[.43,.125,.72],[.7,.08,.95],[.87,.105,.36]],[[.12,.09,.14],[.34,.105,.4],[.53,.135,.72],[.72,.075,.96],[.89,.095,.22]],[[.16,.1,.18],[.36,.075,.95],[.57,.125,.72],[.76,.08,.94],[.91,.095,.24]],[[.15,.09,.16],[.39,.105,.38],[.62,.115,.72],[.84,.07,.94]]],se=[.34,.42,.38,.3],T=e.settings,ce=e.defaultSettings,E,D,O,k,le,ue,A,j,de,M,N,P,fe,pe,me,he,ge,F,_e,I,ve,L=0,R=1,ye=0,z=!1,be=0,B=0,xe=performance.now()*.001,Se=null,Ce=-1,we=!1,Te=!1,V={macro:0,dynamicLift:0,impact:0,transient:0,downbeatPulse:0,brightness:0,percussive:0,variation:0,flow:0,atmosphere:0,camera:0,climax:0,trail:0,bass:0,mid:0,high:0},H={macro:0,dynamicLift:0,impact:0,climax:0},U={duration:3.2,intensity:1,propagation:1,trail:1,energy:1,hero:1,bloom:1,camera:1,flyby:1},Ee=0;function W(e,t,n,r,i){let a=t>e?r:i,o=1-Math.exp(-n/Math.max(.001,a));return e+(t-e)*o}function De(){return!!(e.hasAudioData&&e.audioAnimation&&T.音频驱动)}function Oe(){Se=null,Ce=-1,we=!1,Te=!1;for(let e in V)V[e]=0;H.macro=0,H.dynamicLift=0,H.impact=0,H.climax=0}function ke(t){let n=e.audioAnimation;if(!De()||!n){let e={macro:0,dynamicLift:0,impact:0,transient:0,downbeatPulse:0,brightness:0,percussive:0,variation:0,flow:0,atmosphere:0,camera:0,climax:0,trail:0,bass:0,mid:0,high:0};for(let n in e)V[n]=W(V[n],e[n],t,.18,n===`atmosphere`?3.5:1.2);H.macro=W(H.macro,0,t,.28,1.8),H.dynamicLift=W(H.dynamicLift,0,t,.16,.9),H.impact=W(H.impact,0,t,.025,.34),H.climax=W(H.climax,0,t,.14,1);return}Se=n;let r=T.音乐响应强度,i=Number.isFinite(n.sectionEnergy)?n.sectionEnergy:n.energy||0,a=Number.isFinite(n.relativeEnergy)?n.relativeEnergy:n.energy||0,o=Number.isFinite(n.energyTrend)?n.energyTrend:0,s=Number.isFinite(n.impact)?n.impact:Math.max(n.kick||0,n.downbeat||0),c=Number.isFinite(n.bassPunch)?n.bassPunch:n.kick||0,l=Number.isFinite(n.downbeat)?n.downbeat:+!!n.isDownbeat,u=Number.isFinite(n.motion)?n.motion:((n.bass||0)+(n.mid||0))*.5,d=Number.isFinite(n.smoothness)?n.smoothness:.5,f=Number.isFinite(n.brightness)?n.brightness:n.high||0,p=Number.isFinite(n.variation)?n.variation:Math.max(0,o),m=Q(i*.52+(n.energy||0)*.28+a*.2),ee=Q(a*.58+Math.max(0,o)*.42),h=Q(Math.max(s,c*.92,l*.82)),g=Number.isFinite(n.percussive)?n.percussive:h,_=Q(Math.max(h,n.beat||0,n.kick||0,(n.snare||0)*.82)),v=Q(Math.max(0,(m-.48)*1.72)+ee*.36+h*.22);H.macro=W(H.macro,m,t,.36,2),H.dynamicLift=W(H.dynamicLift,ee,t,.18,1),H.impact=W(H.impact,h,t,.025,.36),H.climax=W(H.climax,v,t,.16,1.08);let y=Q((i*.52+(n.energy||0)*.28+a*.2)*r),b=Q((a*.58+Math.max(0,o)*.42)*r),x=Q(Math.max(s,c*.92,l*.82)*r),S=Q((u*.38+(n.mid||0)*.34+(n.energy||0)*.18+b*.1)*r),C=e.audioEnvelope?.sustain||0,te=Q((i*.58+C*.27+d*.15)*r),ne=Q(Math.max(0,(y-.48)*1.72)+b*.36+x*.22),w=_*(.12+.24*g),re=l*.72+x*.34,ie=ne*.48+p*.2+b*.14,ae=Q(Math.max(w,re,ie)),oe=Q(x*.62+l*.48+ne*.18);V.macro=W(V.macro,y,t,.42,2.4),V.dynamicLift=W(V.dynamicLift,b,t,.2,1.15),V.impact=W(V.impact,x,t,.025,.38),V.transient=W(V.transient,_*r,t,.008,.16),V.downbeatPulse=W(V.downbeatPulse,l*r,t,.006,.28),V.brightness=W(V.brightness,f*r,t,.1,.52),V.percussive=W(V.percussive,g*r,t,.025,.3),V.variation=W(V.variation,p*r,t,.22,1.45),V.flow=W(V.flow,S,t,.18,.95),V.atmosphere=W(V.atmosphere,te,t,1.15,4.2),V.camera=W(V.camera,oe,t,.035,.42),V.climax=W(V.climax,ne,t,.18,1.25),V.trail=W(V.trail,ae,t,.025,.42),V.bass=W(V.bass,(n.bass||0)*r,t,.07,.42),V.mid=W(V.mid,(n.mid||0)*r,t,.1,.58),V.high=W(V.high,(n.high||0)*r,t,.06,.32)}function Ae(){if(!De()||z)return!1;let e=Se;if(!e)return!1;let t=Q(T.转场灵敏度),n=c.lerp(.68,.3,t),r=c.lerp(.78,.46,t),i=c.lerp(.7,.34,t),a=c.lerp(.66,.28,t),o=c.lerp(.78,.38,t),s=c.lerp(.72,.34,t),l=Number.isFinite(e.bar),u=l?e.bar:-1,d=!!(e.isDownbeat||(e.downbeat||0)>.55),f=d&&(l?u!==Ce:!we);f&&l&&(Ce=u),we=d;let p=H.impact>o||(e.beat||0)>s,m=p&&!Te;Te=p;let ee=H.dynamicLift>n||H.macro>r||H.climax>i||V.variation>a,h=f&&ee,g=m&&(H.dynamicLift>n*.86||H.macro>r*.9||H.climax>i*.82||V.variation>a*.86);return h||g}let G=[],K=new Float32Array(x*4),je=new Float32Array(x),Me=new Float32Array(x),Ne=new Float32Array(x),Pe=new Float32Array(x),Fe=new Float32Array(x),q=Array.from({length:4},()=>new Float32Array(x)),Ie=Array.from({length:4},()=>new Float32Array(x)),Le=Array.from({length:4},()=>new Float32Array(x)),Re=new Float32Array(x),ze=new Float32Array(x),Be=new Float32Array(x),Ve=new Float32Array(x),He=new Float32Array(x),Ue=new Float32Array(x),We=new Float32Array(x*3),J=new Float32Array(x*3),Ge=new Float32Array(x*3),Ke=new Float32Array(S*3),qe=new Float32Array(S*3),Je=new Float32Array(S*2),Ye=new Float32Array(S),Xe=new Float32Array(S),Ze=new Float32Array(C*3),Qe=new Float32Array(C*3),$e=new Float32Array(C*2),et=new Float32Array(C),tt=new Float32Array(C),nt=Array.from({length:4},()=>new Float32Array(S*3)),rt=Array.from({length:4},()=>new Float32Array(S)),it=Array.from({length:4},()=>new Float32Array(C*3)),at=Array.from({length:4},()=>new Float32Array(C)),ot=Array.from({length:4},()=>new Float32Array(54)),st=Array.from({length:4},()=>new Float32Array(18)),ct=new Float32Array(54),lt=new Float32Array(54),ut=new Float32Array(36),dt=new Float32Array(18),ft=new Float32Array(18),pt=new Float32Array(18),mt=new Uint32Array(360),ht=new Float32Array(360*3),gt=new Float32Array(360*4*3),_t=new Float32Array(360*4),vt=new Float32Array(360*4),yt=new Float32Array(360*4),bt=new Float32Array(360*4),xt=new Uint32Array(360*6);function St(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}let Y=St(12605985),X=(e=0,t=1)=>e+(t-e)*Y();function Z(){let e=Math.max(1e-6,Y()),t=Math.max(1e-6,Y());return Math.sqrt(-2*Math.log(e))*Math.cos(b*t)}function Ct(e,t,n,r,i){let a=t*3;e[a]=n,e[a+1]=r,e[a+2]=i}function Q(e){return Math.max(0,Math.min(1,e))}function wt(e,t=0){return Number.isFinite(e)?e:t}function Tt(e){return e=Q(e),e*e*(3-2*e)}function Et(){for(let e=0;e<x;e++){let t=e*3;We[t]=He[e],We[t+1]=Ue[e]}}function Dt(e,t,n,r,i){return Tt((e-t)/Math.max(1e-4,n-t))*(1-Tt((e-r)/Math.max(1e-4,i-r)))}function Ot(e,t=0){let n=ae[L][e],r=ae[z?R:L][e];return c.lerp(n,r,z?Tt(t):0)}function kt(e){return Math.abs(Math.sin(e*12.9898+78.233)*43758.5453)%1}function At(e,t){let n=t*4;if(K[n+3]>=se[e])return null;let r=oe[e],i=kt(t+e*100003),a=kt(t*1.731+e*9137),o=kt(t*2.417+e*3571),s=K[n+2],c=.08+.36*(.5+.5*Math.sin(s*b*2.3+e*.9));if(i<.46){let e=r[Math.min(r.length-1,Math.floor(a*r.length))],t=o*2-1;s=Q(e[0]+Math.sign(t)*Math.abs(t)**1.72*e[1]),c=e[2]}let l,u,d,f,p,m,ee;if(e===0)l=-178+s*305,u=-52+s*112+Math.sin(s*b*1.18+.35)*19,d=-112-s*176,f=305,p=112+Math.cos(s*b*1.18+.35)*19*b*1.18;else if(e===1)l=-190+s*380,u=-24+s*45+Math.sin(s*b*1.55-.7)*16,d=-96-s*205,f=380,p=45+Math.cos(s*b*1.55-.7)*16*b*1.55;else if(e===2){let e=a<.5?-1:1;l=e*(38+17*(1-s)+Math.sin(s*b*1.35+e)*8),u=-132+s*264,d=-92-s*235,f=e*(-17+Math.cos(s*b*1.35+e)*8*b*1.35),p=264}else{let e=.06+s*1.48,t=245+Math.sin(s*b*1.1)*12;l=-180+Math.cos(e)*t*1.1,u=-145+Math.sin(e)*t*.82,d=-126-s*245,f=-Math.sin(e)*t*1.1,p=Math.cos(e)*t*.82}let h=1/Math.max(.001,Math.hypot(f,p));m=-p*h,ee=f*h;let g=a<.5?-1:1,_=Math.abs(a*2-1)**1.75,v=0;for(let e of r){let t=(s-e[0])/Math.max(.001,e[1]);v=Math.max(v,Math.exp(-t*t*2.2))}let y=3.2+1.8*Math.sin(s*b*2+1.1),x=(e===2?21:e===1?17:14)*(1+v*.42),S=g*(y+_*x);return{x:l+m*S+Math.sin(o*b)*1.8,y:u+ee*S+Math.cos(o*b)*1.4,z:d+(o-.5)*(18+x*.55),vis:Q(.66+v*.34-_*.1),role:c,t:s}}function jt(){for(let e=0;e<4;e++)G[e]=new Float32Array(x*3);for(let e=0;e<x;e++){let t=Y(),n=t<.61?0:t<.94?1:2;Pe[e]=n;let r=e*4;K[r]=Y(),K[r+1]=Y(),K[r+2]=Y(),K[r+3]=Y(),je[e]=Y()**2.25*.82+.15,Me[e]=Y()**3.25*2.55+.4,Ne[e]=Y()>.9972?.76+Y()*.24:0,Fe[e]=Y();{let t=Y(),i,a,o,s;if(t<.68){let e=X(-1.38,1.34),t=e*154-18,c=31+e*45+Math.sin(e*1.72+.42)*20+Math.sin(e*3.15-1.2)*5.5,l=45+34.4*Math.cos(e*1.72+.42)+17.3*Math.cos(e*3.15-1.2),u=1/Math.max(1e-4,Math.hypot(154,l)),d=-l*u,f=154*u,p=Y()<.57?-1:1,m=6+7.5*(.5+.5*Math.sin(e*2.35+1.1)),ee=(n===0?13.5:n===1?10:6.5)*(.62+.55*Y()),h=p*(m+Math.abs(Z())*ee);i=t+d*h+Z()*2,a=c+f*h+Z()*1.6,o=-(n===0?X(205,310):n===1?X(120,205):X(62,118)),o+=Math.sin(e*2.1)*14;let g=.7+.18*Math.sin(e*2.27+K[r]*4)+.12*Math.sin(e*5.1+K[r+1]*2.4);s=Q((n===0?.83:n===1?.98:.7)*g)}else if(t<.83){let e=X(-1.45,1.25);i=e*172-30+Z()*22,a=27+e*48+Math.sin(e*1.55)*18+Z()*17,o=-X(275,430),s=(n===0?.34:.18)*(.55+.45*Y())}else if(t<.94)i=(Y()<.62?-1:1)*X(42,125)+Z()*9,a=X(-76,72)+Z()*5,o=-X(30,88),s=(n===2?.64:.18)*(.55+.45*Y());else{let e=X(0,b),t=Y()**1.8*18;i=-112+Math.cos(e)*t*1.8,a=54+Math.sin(e)*t*.72,o=-X(250,390),s=.24*(.55+.45*Y())}let c=Math.exp(-((i-48)*(i-48)*55e-5+(a+4)*(a+4)*.0017));s*=1-.72*c;let l=At(0,e);l&&(i=l.x,a=l.y,o=l.z,s=Math.max(s,l.vis));let u=Math.exp(-((i+105)*(i+105)*.0015+(a-48)*(a-48)*.004)),d=(.5+.5*Math.sin(i*.115+a*.173))*(.72+.28*(.5+.5*Math.sin(i*.041-a*.087+1.7))),f=.5+.5*Math.sin(i*.028+a*.046+Math.sin(a*.018)*1.4);Ie[0][e]=l?l.role:u>.38?.66+.13*u:d>.925?.9+.08*K[r+1]:.035+.42*f,Le[0][e]=l?l.t:K[r+2],q[0][e]=Q(s),Ct(G[0],e,i,a,o)}{let t=Y(),i,a,o,s;if(t<.72){let e=X(-1.34,1.34),t=e*164,c=-9+e*22+Math.sin(e*1.46+.55)*15+Math.sin(e*3.1-.8)*4.5,l=22+21.9*Math.cos(e*1.46+.55)+13.95*Math.cos(e*3.1-.8),u=1/Math.max(1e-4,Math.hypot(164,l)),d=-l*u,f=164*u,p=Y(),m;m=p<.46?-(10+Math.abs(Z())*(n===2?10:17)):p<.88?7+Math.abs(Z())*(n===2?8:14):Z()*4.2;let ee=1+.3*Math.sin(e*2.2+1)+.16*Math.sin(e*5.35+K[r]*3);m*=ee,i=t+d*m+Z()*2.5,a=c+f*m+Z()*2,o=-(n===0?X(190,315):n===1?X(95,195):X(42,108)),o+=Math.sin(e*2)*18;let h=Math.exp(-((m/5.6)**2));s=Q((n===0?.75:n===1?1:.82)*(.73+.27*Y())*(1-.58*h))}else if(t<.88){let e=X(-1.4,1.4);i=e*176+Z()*18,a=-7+e*23+Math.sin(e*1.4+.5)*16+Z()*26,o=-X(210,390),s=.24*(.55+.45*Y())}else t<.96?(i=X(-118,118),a=X(-68,68),o=-X(28,78),s=(n===2?.58:.14)*(.55+.45*Y())):(i=X(-185,185),a=X(-92,92),o=-X(320,500),s=.16*Y());let c=At(1,e);c&&(i=c.x,a=c.y,o=c.z,s=Math.max(s,c.vis));let l=Math.exp(-(i*i*52e-5+(a+4)*(a+4)*.0038)),u=(.5+.5*Math.sin(i*.145-a*.213))*(.68+.32*(.5+.5*Math.sin(i*.052+a*.076-1.2))),d=.5+.5*Math.sin(i*.032-a*.064+Math.sin(i*.014)*1.6);Ie[1][e]=c?c.role:l>.52?.64+.16*l:u>.91?.9+.09*K[r]:.025+.44*d,Le[1][e]=c?c.t:K[r+2],q[1][e]=Q(s),Ct(G[1],e,i,a,o)}{let t=Y(),i,a,o,s;if(t<.7){let e=Y()<.52?-1:1,t=X(-1.25,1.28),c=X(0,1),l=t*116,u=e*(30+26*(1-c)+8*Math.sin(t*1.45+e*.8))+e*(10*Math.sin(t*2.05+e*.9)+4*Math.sin(t*4.8)),d=(n===0?24:n===1?17:10)*(.58+.62*Y());i=u+e*Math.abs(Z())*d+Z()*3,a=l+Z()*(n===0?8.5:6),o=-(90+c*230+(n===0?70:n===1?20:-24)),o+=Math.sin(t*1.7+e)*18;let f=.58+.26*Math.sin(t*2.35+K[r]*5.2)+.16*Math.sin(t*6.1+e);s=Q((n===0?.72:n===1?1:.76)*f)}else if(t<.84){let e=X(0,b),t=Y()**2.2*28;i=-4+Math.cos(e)*t*1.15,a=7+Math.sin(e)*t*.62,o=-X(330,455),s=.34*(.62+.38*Y())}else t<.94?(i=(Y()<.5?-1:1)*X(45,120)+Z()*9,a=(Y()<.5?-1:1)*X(48,112)+Z()*8,o=-X(150,300),s=.3*(.55+.45*Y())):(i=(Y()<.5?-1:1)*X(66,130),a=X(-82,82),o=-X(30,80),s=(n===2?.5:.1)*Y());let c=Math.exp(-(i*i*.0015))*Math.exp(-(a*a*22e-5));o>-300&&(s*=1-.72*c);let l=At(2,e);l&&(i=l.x,a=l.y,o=l.z,s=Math.max(s,l.vis));let u=(.5+.5*Math.sin(a*.155+Math.abs(i)*.092))*(.7+.3*(.5+.5*Math.sin(a*.052-i*.081+.6))),d=Math.exp(-(i*i*.0015+(a-7)*(a-7)*.0032))*Tt((-o-260)/150),f=.5+.5*Math.sin(a*.036+Math.abs(i)*.051+Math.sin(a*.015)*1.2);Ie[2][e]=l?l.role:d>.38?.65+.16*d:u>.9?.88+.11*K[r]:.045+.43*f,Le[2][e]=l?l.t:K[r+2],q[2][e]=Q(s),Ct(G[2],e,i,a,o)}{let t=Y(),i,a,o,s;if(t<.69){let e=X(.1,1.48),t=235+34*Math.sin(e*1.8+.4),c=-178+Math.cos(e)*t*1.1,l=-144+Math.sin(e)*t*.82,u=Math.cos(e),d=Math.sin(e),f=Y()<.58?1:-1,p=6+4*Math.sin(e*3.1),m=(n===0?18:n===1?13:8)*(.55+.65*Y()),ee=f*(p+Math.abs(Z())*m);i=c+u*ee+Z()*2,a=l+d*ee+Z()*1.8,o=-(n===0?X(210,330):n===1?X(110,210):X(52,118)),o+=22*Math.sin(e*2.4);let h=.62+.23*Math.sin(e*4+K[r]*3.7)+.15*Math.sin(e*8.2+1);s=Q((n===0?.76:n===1?1:.72)*h)}else if(t<.81){let e=X(.02,1.56),t=270+X(-18,28);i=-178+Math.cos(e)*t*1.1+Z()*14,a=-144+Math.sin(e)*t*.82+Z()*11,o=-X(250,420),s=.22*(.5+.5*Y())}else if(t<.91){let e=X(0,b),t=Y()**1.9*16;i=94+Math.cos(e)*t*1.5,a=32+Math.sin(e)*t*.8,o=-X(300,445),s=.26*(.55+.45*Y())}else t<.97?(i=X(-150,150),a=X(-86,86),o=-X(360,540),s=.1*Y()):(i=X(-126,126),a=X(-75,75),o=-X(28,82),s=(n===2?.42:.08)*Y());let c=Math.exp(-((i-52)*(i-52)*45e-5+(a-5)*(a-5)*.001));s*=1-.38*c;let l=At(3,e);l&&(i=l.x,a=l.y,o=l.z,s=Math.max(s,l.vis));let u=Tt((-o-185)/210)*(.45+.55*Tt((i+80)/180)),d=(.5+.5*Math.sin(i*.092+a*.137))*(.74+.26*(.5+.5*Math.sin(i*.037-a*.064+2.1))),f=.5+.5*Math.sin(i*.025+a*.052+Math.sin(i*.013)*1.4);Ie[3][e]=l?l.role:d>.95?.91+.07*K[r]:u>.58?.62+.16*u:.02+.38*f,Le[3][e]=l?l.t:K[r+2],q[3][e]=Q(s),Ct(G[3],e,i,a,o)}}for(let e=0;e<x;e++)Ne[e]>0&&(q[0][e]*=.58,q[1][e]*=.92,q[2][e]*=.78,q[3][e]*=.52);let e=0,t=0;for(;e<360&&t<360*140;){let n=Math.floor(Y()*x);t++,!(Pe[n]===0&&Ne[n]===0&&Y()<.95)&&(Pe[n]===2&&Ne[n]===0&&Y()<.72||(mt[e++]=n))}for(let e=0;e<360;e++){let t=e*4,n=e*6;_t[t]=-1,_t[t+1]=1,_t[t+2]=-1,_t[t+3]=1,vt[t]=1,vt[t+1]=1,vt[t+2]=0,vt[t+3]=0;let r=kt(e*2.417+19.31);bt[t]=r,bt[t+1]=r,bt[t+2]=r,bt[t+3]=r,xt[n]=t,xt[n+1]=t+2,xt[n+2]=t+1,xt[n+3]=t+1,xt[n+4]=t+2,xt[n+5]=t+3}}function Mt(){E=new ee({canvas:e.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),E.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),E.setSize(window.innerWidth,window.innerHeight,!1),E.setClearColor(0,0),E.outputColorSpace=a,E.toneMapping=4,E.toneMappingExposure=1.06,e.canvas&&(e.canvas.style.backgroundColor=`transparent`,e.canvas.style.zIndex=`1`),D=new d,D.fog=new i(131850,.00165),O=new u(60.5,window.innerWidth/window.innerHeight,.1,760),O.position.set(0,0,12),O.lookAt(0,0,-110),jt(),J.set(G[0]),Ge.set(G[1]),Re.set(q[0]),ze.set(q[1]),Be.set(Ie[0]),Ve.set(Ie[1]),He.set(Le[0]),Ue.set(Le[1]),Et(),Nt(),Vt(),Ht(),Ut(),Wt(),Qt()}function Nt(){let e=new h;e.setAttribute(`position`,new m(We,3)),e.setAttribute(`aFrom`,new m(J,3)),e.setAttribute(`aTo`,new m(Ge,3)),e.setAttribute(`aSeed`,new m(K,4)),e.setAttribute(`aBright`,new m(je,1)),e.setAttribute(`aSize`,new m(Me,1)),e.setAttribute(`aHero`,new m(Ne,1)),e.setAttribute(`aLayer`,new m(Pe,1)),e.setAttribute(`aBias`,new m(Fe,1)),e.setAttribute(`aFromVis`,new m(Re,1)),e.setAttribute(`aToVis`,new m(ze,1)),e.setAttribute(`aFromColorRole`,new m(Be,1)),e.setAttribute(`aToColorRole`,new m(Ve,1)),e.setDrawRange(0,T.粒子数量),I=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTransitionActive:{value:0},uTime:{value:0},uType:{value:0},uStrength:{value:1},uWave:{value:1},uEnergy:{value:0},uPointScale:{value:1.72},uBrightness:{value:1.1},uSceneDensity:{value:1},uHeroStrength:{value:1},uNearStrength:{value:1},uDrift:{value:.15},uFlow:{value:.72},uScene:{value:0},uColorCoolShift:{value:0},uColorWarmShift:{value:0},uColorRoseShift:{value:0},uHueShift:{value:0},uColorSpread:{value:.03},uAudioMotion:{value:0},uAudioImpact:{value:0},uAudioBass:{value:0},uAudioBrightness:{value:0},uAudioPercussive:{value:0},uAudioVariation:{value:0},uAudioDownbeat:{value:0},uFlyby:{value:.58},uColorA:{value:new p(`#78a7ff`)},uColorB:{value:new p(`#edf5ff`)},uColorC:{value:new p(`#d3a6ff`)},uColorD:{value:new p(`#ffd29a`)}},vertexShader:`
        precision highp float;
        attribute vec3 aFrom;attribute vec3 aTo;attribute vec4 aSeed;attribute float aBright;attribute float aSize;attribute float aHero;attribute float aLayer;attribute float aBias;attribute float aFromVis;attribute float aToVis;attribute float aFromColorRole;attribute float aToColorRole;
        uniform float uProgress;uniform float uTransitionActive;uniform float uTime;uniform float uType;uniform float uStrength;uniform float uWave;uniform float uEnergy;uniform float uPointScale;uniform float uDrift;uniform float uHeroStrength;uniform float uNearStrength;uniform float uFlow;uniform float uScene;uniform float uAudioMotion;uniform float uAudioImpact;uniform float uAudioBass;uniform float uFlyby;
        varying float vAlpha;varying float vBright;varying float vSeed;varying float vDensitySeed;varying float vPathPhase;varying float vHero;varying float vEnergy;varying float vLayer;varying float vVisibility;varying float vColorRole;varying float vSmallStar;varying float vFlare;
        vec2 rot(vec2 p,float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c)*p;}
        float ease(float x){return x*x*(3.0-2.0*x);}
        void main(){
          float spatial=0.0;
          if(uType<.5)spatial=.45+aFrom.x*.0030+aFrom.y*.0014;
          else if(uType<1.5)spatial=.47+aFrom.x*.0046-aFrom.y*.0010;
          else if(uType<2.5)spatial=.44+(-aFrom.z-30.0)*.00135+length(aFrom.xy)*.0018;
          else spatial=.50+length(aFrom.xy)*.0048;
          spatial+=(aBias-.5)*.20*uWave;
          float window=mix(.64,.33,clamp(uWave,0.0,1.4));
          float lp=clamp((uProgress-spatial+window)/max(.08,window),0.0,1.0);
          float transitionP=ease(lp)*uTransitionActive;
          float p=transitionP,env=sin(3.14159265*p);
          vec3 pos=mix(aFrom,aTo,p);
          float visibility=mix(aFromVis,aToVis,p);
          vColorRole=mix(aFromColorRole,aToColorRole,p);
          float phaseDelta=fract(position.y-position.x+.5)-.5;
          vPathPhase=fract(position.x+phaseDelta*p);
          float layerK=aLayer<.5?.45:(aLayer<1.5?1.0:1.52*uNearStrength);
          float drift=uTime*uDrift;
          pos.x+=sin(drift*.52+aSeed.x*17.0+pos.z*.014)*(.14+.14*layerK);
          pos.y+=cos(drift*.40+aSeed.y*19.0+pos.x*.018)*(.09+.10*layerK);
          if(abs(uScene-1.0)<0.62){
            float flow=(0.28+0.72*aSeed.w)*uFlow;
            float packet=.5+.5*sin(uTime*(.62+uAudioMotion*1.9)-pos.z*.035+aSeed.x*6.283);
            float audioK=uAudioMotion*(.22+.78*packet);
            pos.x+=sin(uTime*flow*.72+aSeed.z*11.0)*(.28+.34*layerK+audioK*.42);
            pos.y+=cos(uTime*flow*.54+aSeed.x*13.0)*(.18+.22*layerK+audioK*.28);
            pos.z+=audioK*(.45+2.1*aSeed.w);
          }
          float bloomScene=1.0-smoothstep(.38,.82,abs(uScene-2.0));
          if(bloomScene>0.0){float pulseA=uAudioBass*bloomScene*(.018+.035*aSeed.w);pos.xy*=1.0+pulseA;pos.xy=rot(pos.xy,uAudioMotion*bloomScene*(aSeed.y-.5)*.035);}
          pos.z+=uAudioImpact*(aLayer>1.5?4.2:(aLayer>.5?1.15:.28))*(.35+.65*aSeed.w);
          float S=uStrength*layerK;
          if(uType<.5){
            float ang=env*S*(.36+aSeed.x*1.28)*(1.0+.0018*abs(pos.z));pos.xy=rot(pos.xy,ang);
            pos.xy*=1.0+env*S*(.08+aSeed.z*.18);pos.z+=env*S*(8.0+aSeed.w*18.0);
          }else if(uType<1.5){
            float dir=sign(aSeed.x-.5);pos.y+=dir*env*S*(4.5+30.0*pow(aSeed.y,2.0));
            pos.x+=sin(aSeed.z*28.0+p*7.0)*env*S*3.1;pos.z+=cos(aSeed.w*16.0+p*4.0)*env*S*6.0;
          }else if(uType<2.5){
            float fly=0.55+clamp(uFlyby,0.0,1.3)*.78;
            float k=1.0+env*S*(.34+aSeed.x*.82)*fly;pos.xy*=k;pos.z+=env*S*(18.0+62.0*aSeed.y)*fly;
            vec2 d=normalize(pos.xy+vec2(.001));pos.xy+=d*env*S*(1.5+6.5*aSeed.z)*fly;
          }else{
            float pinch=1.0-env*S*(.38+.26*aSeed.x);pos.xy*=max(.12,pinch);pos.xy=rot(pos.xy,env*S*(aSeed.y-.5)*1.65);pos.z+=env*S*(9.0+25.0*aSeed.z);
          }
          vec4 mv=modelViewMatrix*vec4(pos,1.0);gl_Position=projectionMatrix*mv;
          float perspective=clamp(130.0/max(16.0,-mv.z),.28,4.2);
          float layerSize=aLayer<.5?.72:(aLayer<1.5?1.0:1.34*uNearStrength);
          float heroBoost=1.0+aHero*uHeroStrength*(.36+.42*uEnergy);
          float energyBoost=1.0+uEnergy*(.18+.42*aSeed.w)*(aLayer>.5?1.0:.35);
          float flareClass=smoothstep(.84,.98,aBright)*smoothstep(.86,.985,aSeed.w);
          float flarePulse=flareClass*(1.0+uEnergy*.72+uAudioImpact*.46);
          gl_PointSize=clamp(aSize*uPointScale*perspective*layerSize*heroBoost*energyBoost*mix(.72,1.0,visibility)*(1.0+flarePulse*1.35),.55,24.0);
          vAlpha=clamp(.16+aBright*.84+aHero*.46+(aLayer>1.5?.07:0.0),0.0,1.0);
          vSmallStar=1.0-smoothstep(.82,1.72,aSize);
          vFlare=flareClass*(.72+uEnergy*.62+uAudioImpact*.44);
          vBright=aBright;vSeed=aSeed.z;vDensitySeed=fract(sin(dot(aSeed.xy,vec2(127.1,311.7)))*43758.5453);vHero=aHero*uHeroStrength;vEnergy=uEnergy;vLayer=aLayer;vVisibility=visibility;
        }`,fragmentShader:`
        precision highp float;
        uniform float uTime;uniform float uBrightness;uniform float uSceneDensity;uniform float uColorCoolShift;uniform float uColorWarmShift;uniform float uColorRoseShift;uniform float uHueShift;uniform float uColorSpread;uniform float uAudioBrightness;uniform float uAudioPercussive;uniform float uAudioVariation;uniform float uAudioDownbeat;
        uniform vec3 uColorA;uniform vec3 uColorB;uniform vec3 uColorC;uniform vec3 uColorD;
        varying float vAlpha;varying float vBright;varying float vSeed;varying float vDensitySeed;varying float vPathPhase;varying float vHero;varying float vEnergy;varying float vLayer;varying float vVisibility;varying float vColorRole;varying float vSmallStar;varying float vFlare;
        vec3 rgb2hsv(vec3 c){vec4 K=vec4(0.,-1./3.,2./3.,-1.);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y),e=1.e-10;return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x);}
        vec3 hsv2rgb(vec3 c){vec3 p=abs(fract(c.xxx+vec3(0.,2./3.,1./3.))*6.-3.);return c.z*mix(vec3(1.),clamp(p-1.,0.,1.),c.y);}
        void main(){
          vec2 q=gl_PointCoord-.5;
          float r=length(q);

          // Bloom-safe circular sprite. Never allow the square point quad to contribute.
          if(r>=.5)discard;
          float edgeMask=1.0-smoothstep(.42,.5,r);

          float core=1.0-smoothstep(0.0,.155,r);
          float haloStrength=.30+.20*clamp(vBright,0.0,1.0);
          float halo=(1.0-smoothstep(.055,.49,r))*haloStrength;
          float spikeX=exp(-abs(q.y)*62.0)*(1.0-smoothstep(.06,.48,abs(q.x)));
          float spikeY=exp(-abs(q.x)*62.0)*(1.0-smoothstep(.06,.48,abs(q.y)));
          float cross=(spikeX+spikeY)*vFlare*.72;
          float densityKeep=smoothstep(1.0-clamp(uSceneDensity,0.0,1.0)-.10,1.0-clamp(uSceneDensity,0.0,1.0)+.10,vDensitySeed);
          float alpha=(core+halo+cross)*vAlpha*vVisibility*edgeMask*densityKeep;
          if(alpha<.012)discard;
          // Population colour is spatially authored per galaxy. Seed only adds
          // small temperature variation inside a population, never a random hue.
          float youngW=1.0-smoothstep(.28,.52,vColorRole);
          float oldW=smoothstep(.52,.73,vColorRole)*(1.0-smoothstep(.80,.91,vColorRole));
          float hiiW=smoothstep(.80,.94,vColorRole);
          vec3 young=mix(uColorA,uColorB,clamp(.08+vBright*.30+vSeed*.10+vColorRole*.92,0.0,1.0));
          vec3 c=young;
          c=mix(c,uColorD,oldW);
          c=mix(c,uColorC,hiiW);
          c=mix(c,uColorB,clamp(1.0-youngW-oldW-hiiW,0.0,1.0)*.42);
          float colorPacket=.5+.5*sin(vPathPhase*18.0-uTime*(.42+uAudioVariation*1.8));
          float streamPhase=abs(fract(vPathPhase-uTime*.22+.5)-.5)*2.0;
          float downbeatWave=exp(-streamPhase*streamPhase*28.0)*uAudioDownbeat;
          c=mix(c,vec3(.08,.88,1.08),uAudioBrightness*youngW*colorPacket*.42);
          c=mix(c,vec3(1.12,.34,.055),uAudioPercussive*oldW*(.20+.34*colorPacket));
          c=mix(c,vec3(1.08,.045,.62),uAudioVariation*hiiW*colorPacket*.48);
          // Small stars carry a restrained stellar-temperature mixture. The
          // broad population remains blue-white, with pale gold and a very
          // small orange tail; HII knots keep their authored red identity.
          float spectral=fract(vSeed*2.173+vColorRole*.731);
          vec3 smallSpectral=mix(uColorA,uColorB,smoothstep(.08,.57,spectral));
          smallSpectral=mix(smallSpectral,mix(uColorB,uColorD,.54),smoothstep(.66,.86,spectral));
          smallSpectral=mix(smallSpectral,uColorD,smoothstep(.92,.985,spectral)*.68);
          // Preserve the galaxy-authored population map. Spectral variation is
          // texture inside a region, not a replacement for that region.
          float smallPopulation=vSmallStar*(1.0-hiiW)*(.15+.10*youngW);
          c=mix(c,smallSpectral,smallPopulation);
          // Musical Color Director: palette weights, not direct FFT->RGB.
          c=mix(c,c*vec3(.68,.92,1.30),clamp(uColorCoolShift,0.0,1.0)*(.08+.34*youngW));
          c=mix(c,c*vec3(1.28,.94,.62),clamp(uColorWarmShift,0.0,1.0)*(.035+.365*oldW));
          c=mix(c,c*vec3(1.18,.72,.98),clamp(uColorRoseShift,0.0,1.0)*(.045+.255*hiiW));
          vec3 hsv=rgb2hsv(max(c,vec3(0.)));
          hsv.x=fract(hsv.x+uHueShift+(vSeed-.5)*uColorSpread*.16);
          hsv.y=clamp(hsv.y*(1.+uColorSpread*.55),.08,1.);
          c=hsv2rgb(hsv);
          // Distributed stellar emission:
          // dim stars stay crisp, medium stars gain a compact glow,
          // bright stars cross decisively into HDR, Hero remains the strongest class.
          float b=clamp(vBright,0.0,1.0);
          float stellarEmission=.46 + b*1.18;
          float mediumHDR=smoothstep(.32,.78,b)*.92;
          float brightHDR=pow(b,3.05)*1.82;

          // Emissive envelope increases the *area* entering bloom,
          // without increasing the physical point size.
          float emissiveEnvelope=(1.0-smoothstep(.06,.46,r))*smoothstep(.28,.92,b)*.58;
          float coreHDR=core*(.24+.68*b);

          float populationChroma=max(oldW,hiiW);
          float chromaProtectedEmission=mix(1.0,.68,populationChroma);
          c*=uBrightness*(stellarEmission+mediumHDR+brightHDR+coreHDR+emissiveEnvelope+vHero*.06+cross*.72)*(1.0+downbeatWave*.46)*chromaProtectedEmission;
          c*=edgeMask;
          gl_FragColor=vec4(c,alpha);
        }`}),A=new r(e,I),A.frustumCulled=!1,D.add(A)}function Pt(){for(let e=0;e<S;e++)Je[e*2]=e*.61803398875%1,Je[e*2+1]=(e*.41421356237+.17)%1;for(let e=0;e<C;e++)$e[e*2]=e*.754877666%1,$e[e*2+1]=(e*.569840291+.31)%1;for(let e=0;e<18;e++)ut[e*2]=(e*.38196601125+.13)%1,ut[e*2+1]=(e*.70710678118+.41)%1,pt[e]=.86+e%5*.12+(e%7==0?.34:0);for(let e=0;e<4;e++)for(let t=0;t<S;t++){let n=t*3,r=Je[t*2],i=Je[t*2+1],a=0,o=0,s=0,c=1;if(e===0)if(r<.54){let e=(i*2-1)*1.42;a=-78+e*82+Z()*20,o=18+e*31+Math.sin(e*2.2)*18+Z()*13,s=-X(260,520),c=.3+.5*r}else{a=X(-175,175),o=X(-100,100),s=-X(350,650);let e=Math.exp(-((a-45)*(a-45)*55e-5+(o+5)*(o+5)*.0015));c=(.12+.22*i)*(1-.7*e)}else if(e===1){let e=(r*2-1)*1.55,t=-7+e*18+Math.sin(e*1.55+.4)*11;a=e*170+Z()*18,o=t+Z()*(12+26*i),s=-X(190,500);let n=Math.exp(-(((o-t)/7.2)**2));c=(.46+.48*i)*(1-.58*n)}else if(e===2){let e=r<.5?-1:1,n=(i*2-1)*1.35;a=e*(46+34*(1-Math.abs(n))+Math.abs(Z())*24),o=n*120+Z()*8,s=-X(170,520),t%5==0?(a=X(-160,160),o=X(-100,100),s=-X(360,680),c=.16+.2*r):c=.34+.48*r}else if(r<.64){let e=.08+i*1.46,t=250+Z()*24;a=-182+Math.cos(e)*t*1.1+Z()*8,o=-145+Math.sin(e)*t*.82+Z()*7,s=-X(220,520),c=.34+.48*r}else a=X(-180,180),o=X(-105,105),s=-X(390,720),c=.1+.18*i;nt[e][n]=a,nt[e][n+1]=o,nt[e][n+2]=s,rt[e][t]=Q(c)}for(let e=0;e<4;e++)for(let t=0;t<C;t++){let n=t*3,r=$e[t*2],i=$e[t*2+1],a=0,o=0,s=0,c=1;if(e===0){let e=(r*2-1)*1.25;a=-92+e*92+Z()*25,o=10+e*28+Math.sin(e*2)*20+Z()*21,s=-X(150,370),c=.34+.45*i}else if(e===1){let e=(r*2-1)*1.45;a=e*168+Z()*24,o=-6+e*17+Math.sin(e*1.4)*12+Z()*(20+26*i),s=-X(105,330),c=.48+.42*i}else if(e===2)a=(r<.5?-1:1)*(52+Math.abs(Z())*(18+20*i)),o=(i*2-1)*116+Z()*12,s=-X(95,300),c=.42+.45*i;else{let e=.05+i*1.48,t=250+Z()*33;a=-182+Math.cos(e)*t*1.1+Z()*10,o=-145+Math.sin(e)*t*.82+Z()*9,s=-X(120,360),c=.32+.4*r}it[e][n]=a,it[e][n+1]=o,it[e][n+2]=s,at[e][t]=Q(c)}let e=[[[-82,37,-115],[68,28,-150],[-22,-25,-92],[118,-18,-210],[-128,-46,-165],[22,61,-245],[93,67,-320],[-45,74,-285],[142,15,-360],[-104,8,-265],[35,-57,-205],[-8,18,-330],[78,-72,-290],[-148,63,-390],[126,78,-430],[-64,-72,-350],[12,-83,-430],[154,-54,-470]],[[-105,25,-120],[-68,-18,-105],[-20,16,-150],[32,-10,-118],[73,31,-155],[112,-27,-190],[145,14,-255],[-136,-45,-235],[-92,55,-280],[-44,-58,-210],[4,44,-240],[52,-48,-230],[96,62,-320],[132,-66,-360],[-8,-72,-290],[28,76,-350],[-158,35,-420],[158,49,-460]],[[-73,52,-110],[72,46,-118],[-61,-25,-95],[66,-18,-104],[-88,-62,-160],[91,-58,-175],[-49,79,-205],[54,83,-220],[-118,10,-250],[121,4,-270],[-34,18,-340],[29,7,-380],[-136,68,-390],[139,72,-420],[-102,-82,-340],[106,-84,-360],[-15,-74,-440],[18,68,-470]],[[-112,-18,-135],[-72,42,-165],[-28,67,-210],[18,76,-245],[61,69,-280],[102,48,-320],[132,16,-350],[145,-34,-390],[92,-66,-285],[42,-78,-230],[-8,-72,-200],[-53,-55,-185],[78,8,-460],[120,72,-510],[-132,58,-480],[28,27,-390],[-86,4,-340],[152,58,-570]]];for(let t=0;t<4;t++)for(let n=0;n<18;n++){let r=n*3,i=e[t][n];ot[t][r]=i[0],ot[t][r+1]=i[1],ot[t][r+2]=i[2],st[t][n]=n<8?.88:n<13?.58:.34}}function Ft(e,t){Ke.set(nt[e]),qe.set(nt[t]),Ye.set(rt[e]),Xe.set(rt[t]),Ze.set(it[e]),Qe.set(it[t]),et.set(at[e]),tt.set(at[t]),ct.set(ot[e]),lt.set(ot[t]),dt.set(st[e]),ft.set(st[t]),M&&(M.geometry.getAttribute(`aFrom`).needsUpdate=!0,M.geometry.getAttribute(`aTo`).needsUpdate=!0,M.geometry.getAttribute(`aFromVis`).needsUpdate=!0,M.geometry.getAttribute(`aToVis`).needsUpdate=!0),N&&(N.geometry.getAttribute(`aFrom`).needsUpdate=!0,N.geometry.getAttribute(`aTo`).needsUpdate=!0,N.geometry.getAttribute(`aFromVis`).needsUpdate=!0,N.geometry.getAttribute(`aToVis`).needsUpdate=!0),P&&(P.geometry.getAttribute(`aFrom`).needsUpdate=!0,P.geometry.getAttribute(`aTo`).needsUpdate=!0,P.geometry.getAttribute(`aFromVis`).needsUpdate=!0,P.geometry.getAttribute(`aToVis`).needsUpdate=!0)}function It(){let e=new h;e.setAttribute(`position`,new m(new Float32Array(S*3),3)),e.setAttribute(`aFrom`,new m(Ke,3)),e.setAttribute(`aTo`,new m(qe,3)),e.setAttribute(`aSeed`,new m(Je,2)),e.setAttribute(`aFromVis`,new m(Ye,1)),e.setAttribute(`aToVis`,new m(Xe,1)),me=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTime:{value:0},uStrength:{value:.92},uHigh:{value:0},uCoolShift:{value:0},uWarmPresence:{value:.55},uAccentPresence:{value:.12},uColorA:{value:new p(`#8aa9ff`)},uColorB:{value:new p(`#f4f8ff`)},uColorWarm:{value:new p(`#f2bf72`)},uColorAccent:{value:new p(`#d85b68`)}},vertexShader:`
        precision highp float;
        attribute vec3 aFrom;attribute vec3 aTo;attribute vec2 aSeed;attribute float aFromVis;attribute float aToVis;
        uniform float uProgress;uniform float uTime;uniform float uHigh;
        varying float vVis;varying float vSeed;varying float vTwinkle;varying float vRegion;
        float ease(float x){return x*x*(3.0-2.0*x);}
        void main(){
          float p=ease(clamp(uProgress,0.0,1.0));vec3 pos=mix(aFrom,aTo,p);
          pos.x+=sin(uTime*.035+aSeed.x*18.0)*.16;pos.y+=cos(uTime*.029+aSeed.y*17.0)*.11;
          vec4 mv=modelViewMatrix*vec4(pos,1.0);gl_Position=projectionMatrix*mv;
          float persp=clamp(150.0/max(34.0,-mv.z),.24,2.0);
          float tw=.76+.24*sin(uTime*(1.4+uHigh*3.8)+aSeed.x*31.0+aSeed.y*19.0);
          gl_PointSize=clamp((.48+.88*aSeed.x)*persp*(1.0+uHigh*.15*aSeed.y),.46,1.72);
          // Low-frequency waves create coherent temperature neighbourhoods;
          // the seed only varies stars inside each neighbourhood.
          // Use projected composition axes only. Random depth previously broke
          // one visible colour neighbourhood into unrelated screen-space dots.
          float regionA=.5+.5*sin(pos.x*.043+pos.y*.071);
          float regionB=.5+.5*sin(pos.x*.019-pos.y*.037+1.8);
          vRegion=regionA*(.72+.28*regionB);
          vVis=mix(aFromVis,aToVis,p);vSeed=aSeed.x;vTwinkle=tw;
        }`,fragmentShader:`
        precision highp float;uniform float uStrength;uniform float uCoolShift;uniform float uWarmPresence;uniform float uAccentPresence;uniform vec3 uColorA;uniform vec3 uColorB;uniform vec3 uColorWarm;uniform vec3 uColorAccent;
        varying float vVis;varying float vSeed;varying float vTwinkle;varying float vRegion;
        void main(){
          vec2 q=gl_PointCoord-.5;
          float r=length(q);
          if(r>=.5)discard;
          float edgeMask=1.0-smoothstep(.40,.5,r);
          float shape=(1.0-smoothstep(.04,.48,r))*edgeMask;
          float a=shape*vVis*uStrength*vTwinkle;
          if(a<.012)discard;

          vec3 c=mix(uColorA,uColorB,.18+.76*vSeed);
          float warmW=smoothstep(.60,.80,vRegion)*(1.0-smoothstep(.925,.98,vRegion))*uWarmPresence;
          float accentW=smoothstep(.965,.997,vRegion)*(.12+.14*vSeed)*uAccentPresence;
          c=mix(c,mix(uColorB,uColorWarm,.84),warmW*.82);
          c=mix(c,uColorAccent,accentW);
          c=mix(c,c*vec3(.70,.94,1.30),clamp(uCoolShift,0.0,1.0)*.28*(1.0-warmW*.72-accentW));

          // Bloom energy distribution:
          // most micro-stars stay sub-HDR; only the brightest tail gets a tiny emissive lift.
          float brightTail=pow(clamp(vSeed,0.0,1.0),7.0);
          float microEmission=.62 + brightTail*1.42;
          float coreLift=1.0 + brightTail*shape*.55;

          c*=microEmission*coreLift*edgeMask;
          gl_FragColor=vec4(c,a*(.48+.16*brightTail));
        }`}),M=new r(e,me),M.frustumCulled=!1,M.renderOrder=-2,D.add(M)}function Lt(){let e=new h;e.setAttribute(`position`,new m(new Float32Array(C*3),3)),e.setAttribute(`aFrom`,new m(Ze,3)),e.setAttribute(`aTo`,new m(Qe,3)),e.setAttribute(`aSeed`,new m($e,2)),e.setAttribute(`aFromVis`,new m(et,1)),e.setAttribute(`aToVis`,new m(tt,1)),he=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTime:{value:0},uStrength:{value:.52},uMid:{value:0},uBass:{value:0},uColorA:{value:new p(`#536fbd`)},uColorB:{value:new p(`#9c6cb8`)}},vertexShader:`
        precision highp float;
        attribute vec3 aFrom,aTo;attribute vec2 aSeed;attribute float aFromVis,aToVis;
        uniform float uProgress,uTime,uMid,uBass;varying float vVis;varying float vSeed;
        float ease(float x){return x*x*(3.0-2.0*x);}
        void main(){
          float p=ease(clamp(uProgress,0.,1.));vec3 pos=mix(aFrom,aTo,p);
          float flow=.14+uMid*.68;
          pos.x+=sin(uTime*flow*.13+aSeed.x*17.+pos.z*.005)*(.45+1.05*aSeed.y);
          pos.y+=cos(uTime*flow*.11+aSeed.y*13.+pos.x*.004)*(.32+.72*aSeed.x);
          pos.xy*=1.0+uBass*.003;
          vec4 mv=modelViewMatrix*vec4(pos,1.);gl_Position=projectionMatrix*mv;
          float persp=clamp(145.0/max(28.0,-mv.z),.22,2.4);
          gl_PointSize=clamp((.52+1.25*aSeed.x)*persp,.38,2.15);
          vVis=mix(aFromVis,aToVis,p);vSeed=aSeed.y;
        }`,fragmentShader:`
        precision highp float;uniform float uStrength;uniform vec3 uColorA,uColorB;varying float vVis,vSeed;
        void main(){
          vec2 q=gl_PointCoord-.5;
          float r=length(q);
          if(r>=.5)discard;
          float edgeMask=1.0-smoothstep(.39,.5,r);
          float a=(1.0-smoothstep(.10,.47,r))*edgeMask*vVis*uStrength*(.11+.15*vSeed);
          if(a<.006)discard;
          vec3 c=mix(uColorA,uColorB,vSeed)*(.27+.24*vSeed);
          // Dust is structural material, not a luminous emitter.
          c*=edgeMask;
          gl_FragColor=vec4(c,a*.88);
        }`}),N=new r(e,he),N.frustumCulled=!1,N.renderOrder=-1,D.add(N)}function Rt(){let e=new h;e.setAttribute(`position`,new m(new Float32Array(54),3)),e.setAttribute(`aFrom`,new m(ct,3)),e.setAttribute(`aTo`,new m(lt,3)),e.setAttribute(`aSeed`,new m(ut,2)),e.setAttribute(`aSize`,new m(pt,1)),e.setAttribute(`aFromVis`,new m(dt,1)),e.setAttribute(`aToVis`,new m(ft,1)),ge=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTime:{value:0},uStrength:{value:1.08},uImpact:{value:0},uClimax:{value:0},uHeroWarmShift:{value:0},uHeroRoseShift:{value:0},uColorCool:{value:new p(`#d9e9ff`)},uColorWarm:{value:new p(`#ffd49a`)}},vertexShader:`
        precision highp float;
        attribute vec3 aFrom,aTo;attribute vec2 aSeed;attribute float aSize,aFromVis,aToVis;
        uniform float uProgress,uTime,uImpact,uClimax;
        varying float vVis,vSeed,vBurst,vSize;
        float ease(float x){return x*x*(3.0-2.0*x);}
        void main(){
          float p=ease(clamp(uProgress,0.,1.));vec3 pos=mix(aFrom,aTo,p);
          vec4 mv=modelViewMatrix*vec4(pos,1.);gl_Position=projectionMatrix*mv;
          float persp=clamp(205.0/max(20.0,-mv.z),.32,5.4);
          float event=uImpact*(.55+.75*aSeed.x)+uClimax*(.18+.36*aSeed.y);
          gl_PointSize=clamp((8.0+aSize*6.5)*persp*(1.+event*.16),6.0,42.0);
          vVis=mix(aFromVis,aToVis,p);vSeed=aSeed.x;vBurst=event;vSize=aSize;
        }`,fragmentShader:`
        precision highp float;
        uniform float uStrength;uniform float uHeroWarmShift,uHeroRoseShift;uniform vec3 uColorCool,uColorWarm;
        varying float vVis,vSeed,vBurst,vSize;
        void main(){
          vec2 q=gl_PointCoord-.5;
          float r=length(q);
          if(r>=.5)discard;

          // Softer internal edge + absolute outer clip prevents square HDR halos.
          float edgeMask=1.0-smoothstep(.43,.5,r);
          float core=exp(-r*r*220.0);
          float photosphere=exp(-r*r*62.0);
          float corona=(exp(-r*r*15.0)*.36+exp(-r*r*5.0)*.075)*edgeMask;
          float rare=step(.78,vSeed);
          float sx=exp(-abs(q.x)*78.0)*(1.0-smoothstep(.02,.48,abs(q.y)));
          float sy=exp(-abs(q.y)*78.0)*(1.0-smoothstep(.02,.48,abs(q.x)));
          float flare=(sx+sy)*rare*(.10+.11*vBurst)*edgeMask;
          float a=(core*1.55+photosphere*.84+corona+flare)*vVis*uStrength*edgeMask;
          if(a<.007)discard;
          vec3 chroma=mix(uColorCool,uColorWarm,smoothstep(.67,.98,vSeed));
          chroma=mix(chroma,chroma*vec3(1.30,.94,.60),clamp(uHeroWarmShift,0.0,1.0)*.48);
          chroma=mix(chroma,chroma*vec3(1.20,.58,.96),clamp(uHeroRoseShift,0.0,1.0)*.38);
          // Keep chroma in the photosphere; only the tiny core approaches white.
          vec3 c=mix(chroma,vec3(1.0),clamp(core*.88+photosphere*.20,0.,.86));
          // Real HDR hierarchy: only the stellar core/photosphere reaches high luminance.
          float hdrCore=1.10 + core*6.0 + photosphere*2.05 + vBurst*1.28;
          float coronaEnergy=1.02 + corona*1.42 + vBurst*.10;
          float envelopeMix=clamp(core*1.28+photosphere*.76+corona*.46,0.,1.0);
          c*=mix(coronaEnergy,hdrCore,envelopeMix);
          c*=(.92+.12*vSize)*edgeMask;
          gl_FragColor=vec4(c,a);
        }`}),P=new r(e,ge),P.frustumCulled=!1,P.renderOrder=25,D.add(P)}function zt(){let e=new l(2,2);F=new f({transparent:!0,depthWrite:!1,depthTest:!1,...te(!0),uniforms:{uTime:{value:0},uScene:{value:0},uStrength:{value:1},uBass:{value:0},uMacro:{value:0},uBeat:{value:0},uVariation:{value:0},uFilamentStrength:{value:1},uPaletteBlue:{value:0},uPaletteRose:{value:0},uPaletteCyan:{value:0},uPaletteGold:{value:0},uHueShift:{value:0},uColorSpread:{value:.03},uResolution:{value:new t(window.innerWidth,window.innerHeight)}},vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,fragmentShader:`
        precision highp float;
        uniform float uTime,uScene,uStrength,uBass,uMacro,uBeat,uVariation,uFilamentStrength;
        uniform float uPaletteBlue,uPaletteRose,uPaletteCyan,uPaletteGold,uHueShift,uColorSpread;
        uniform vec2 uResolution;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        float fbm(vec2 p){float v=0.,a=.52;for(int i=0;i<6;i++){v+=a*noise(p);p=p*2.01+vec2(1.73,-1.19);a*=.48;}return v;}
        float ridge(float x){return 1.-abs(2.*x-1.);}
        float sw(float x,float c){return 1.-smoothstep(.58,1.08,abs(x-c));}
        float ell(vec2 p,vec2 c,vec2 s,float k){vec2 d=(p-c)/s;return exp(-dot(d,d)*k);}
        vec3 rgb2hsv(vec3 c){vec4 K=vec4(0.,-1./3.,2./3.,-1.);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y),e=1.e-10;return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x);}
        vec3 hsv2rgb(vec3 c){vec3 p=abs(fract(c.xxx+vec3(0.,2./3.,1./3.))*6.-3.);return c.z*mix(vec3(1.),clamp(p-1.,0.,1.),c.y);}
        void main(){
          vec2 q=gl_FragCoord.xy/max(uResolution,vec2(1.));
          q=(q-.5)*vec2(uResolution.x/max(uResolution.y,1.),1.);
          float t=uTime*.0035;
          float w0=sw(uScene,0.),w1=sw(uScene,1.),w2=sw(uScene,2.),w3=sw(uScene,3.);
          float weightSum=max(.0001,w0+w1+w2+w3);w0/=weightSum;w1/=weightSum;w2/=weightSum;w3/=weightSum;
          vec2 warp=vec2(fbm(q*1.02+vec2(t,1.7)),fbm(q*1.08+vec2(-2.6,-t)))-.5;
          vec2 p=q+warp*(.24+.075*uBass);
          float nL=fbm(p*1.58+vec2(t*.45,-t*.22));
          float nM=fbm(p*3.65-vec2(t*.15,t*.09));
          float nH=fbm(p*8.1+vec2(-t*.08,t*.13));
          float fil=pow(clamp(ridge(fbm(p*4.15+vec2(2.3,-1.4))),0.,1.),3.0);

          float river0=p.y-(.34*p.x+.08+.085*sin(p.x*2.25+.4));
          float s0=exp(-river0*river0*4.4)*(1.05-.28*smoothstep(-.55,1.15,p.x));
          float band=p.y-(.095*p.x-.03+.055*sin(p.x*1.85));
          float s1=exp(-band*band*2.55)*(.78+.28*ell(p,vec2(.16,.02),vec2(1.35,.52),.8));
          float left=ell(p,vec2(-.77,.02),vec2(.48,1.22),.92);
          float right=ell(p,vec2(.78,.04),vec2(.48,1.24),.92);
          float centralCut=1.-.86*ell(p,vec2(0.,.0),vec2(.34,1.02),1.25);
          float s2=(left+right)*centralCut;
          vec2 ec=p-vec2(-1.13,-.84);float er=length(ec*vec2(.86,1.10));
          float s3=exp(-pow(er-1.10,2.0)*5.8)+.25*ell(p,vec2(.86,.32),vec2(.48,.34),1.5);

          float shape=w0*s0+w1*s1+w2*s2+w3*s3;
          float body=shape*smoothstep(.23,.70,nL+.20*nM);
          float filament=shape*fil*(.42+.58*nM)*uFilamentStrength;
          float emission=shape*pow(max(0.,nM-.57),2.2)*2.8*(.45+.55*nH);
          float density=(body*.82+filament*1.08+emission*.72)*uStrength*(.82+.28*uMacro+.18*uBass);

          // Real-galaxy colour roles: blue scattered light / young stars,
          // brown-orange obscuring dust, pink-red ionised hydrogen and a warm
          // old stellar glow. Their spatial masks differ by chapter.
          vec3 youngBlue=vec3(.018,.075,.28);
          vec3 coldCyan=vec3(.018,.20,.29);
          vec3 dustBrown=vec3(.22,.075,.018);
          vec3 oldGold=vec3(.34,.19,.045);
          vec3 hiiRed=vec3(.48,.025,.075);
          float dustMask=shape*smoothstep(.38,.72,nL)*(1.-smoothstep(.58,.84,nH));
          float hiiKnots=shape*pow(smoothstep(.54,.84,nH),2.2)*(.38+.62*fil);
          float oldGlow=shape*smoothstep(.42,.72,nL)*(1.-smoothstep(.48,.78,nM));
          vec3 c=mix(youngBlue,coldCyan,nM*.54);
          // Scene 0 carries a warm dust bank; scene 1 is a balanced spiral
          // passage; scene 2 is a red-orange starburst; scene 3 is a cold rim.
          c=mix(c,dustBrown,dustMask*(.46*w0+.30*w1+.68*w2+.12*w3));
          c=mix(c,oldGold,oldGlow*(.38*w0+.46*w1+.32*w2+.12*w3));
          c=mix(c,hiiRed,hiiKnots*(.30*w0+.58*w1+.94*w2+.18*w3));

          // Musical palette weights: keep the nebula coherent, but let its dominant
          // temperature evolve with the music.
          float blueZone=clamp((.30+.70*nM)*uPaletteBlue,0.0,1.0);
          float roseZone=clamp((.22+.78*fil)*uPaletteRose+uVariation*fil*.38,0.0,1.0);
          float cyanZone=clamp((.28+.72*nH)*uPaletteCyan,0.0,1.0);
          float goldZone=clamp((.24+.76*nL)*uPaletteGold+uBeat*oldGlow*.46,0.0,1.0);
          c=mix(c,c*vec3(.48,.88,1.62),blueZone*.62);
          c=mix(c,vec3(.62,.018,.34),roseZone*.68);
          c=mix(c,vec3(.012,.48,.60),cyanZone*.58);
          c=mix(c,vec3(.72,.30,.025),goldZone*.55);
          vec3 gasHSV=rgb2hsv(max(c,vec3(0.)));
          float spatialHue=(nL-.5)*uColorSpread*.16+(nM-.5)*uColorSpread*.09;
          gasHSV.x=fract(gasHSV.x+uHueShift+spatialHue);
          gasHSV.y=clamp(gasHSV.y*(1.+uColorSpread*.45),.10,1.);
          c=hsv2rgb(gasHSV);

          // Gas body stays sub-HDR; only compact emission ridges bloom.
          // Keep the broad body below bloom, but make coloured filaments
          // readable against black instead of disappearing behind star points.
          vec3 gasColor=c*density*(1.05+filament*.28);
          float emissionMask=clamp(emission*.60,0.0,1.0);
          vec3 emissionColor=youngBlue*2.2;
          emissionColor=mix(emissionColor,vec3(1.10,.055,.12),clamp(hiiKnots*(.35*w0+.62*w1+1.0*w2+.18*w3),0.,1.));
          emissionColor=mix(emissionColor,vec3(1.06,.48,.08),clamp(oldGlow*(.45*w0+.55*w1+.36*w2+.12*w3),0.,1.));
          emissionColor=mix(emissionColor,vec3(.08,.78,1.08),clamp(uPaletteCyan,0.0,1.0)*.34);
          emissionColor=mix(emissionColor,vec3(1.08,.52,.12),clamp(uPaletteGold,0.0,1.0)*.34);
          emissionColor=mix(emissionColor,vec3(1.00,.12,.68),clamp(uPaletteRose,0.0,1.0)*.32);
          float musicalEmission=1.0+uBeat*.72+uVariation*.38+uBass*.24;
          vec3 hdrEmission=emissionColor*emissionMask*(1.08+2.45*emissionMask)*(0.72+0.28*uMacro)*musicalEmission;

          float alpha=clamp(density*.48,0.,.32);
          if(alpha<.003 && emissionMask<.012)discard;
          gl_FragColor=vec4(gasColor+hdrEmission, max(alpha,emissionMask*.16));
        }`}),fe=new n(e,F),fe.frustumCulled=!1,fe.renderOrder=-6,D.add(fe)}function Bt(){let e=new l(2,2);_e=new f({transparent:!0,depthWrite:!1,depthTest:!1,blending:1,uniforms:{uTime:{value:0},uScene:{value:0},uStrength:{value:.46},uMid:{value:0},uResolution:{value:new t(window.innerWidth,window.innerHeight)}},vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,fragmentShader:`
        precision highp float;
        uniform float uTime,uScene,uStrength,uMid;uniform vec2 uResolution;
        float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*45758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        float fbm(vec2 p){float v=0.,a=.55;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.04+vec2(1.3,-1.7);a*=.46;}return v;}
        float sw(float x,float c){return 1.-smoothstep(.58,1.08,abs(x-c));}
        void main(){
          vec2 q=gl_FragCoord.xy/max(uResolution,vec2(1.));q=(q-.5)*vec2(uResolution.x/max(uResolution.y,1.),1.);
          float w0=sw(uScene,0.),w1=sw(uScene,1.),w2=sw(uScene,2.),w3=sw(uScene,3.);
          float weightSum=max(.0001,w0+w1+w2+w3);w0/=weightSum;w1/=weightSum;w2/=weightSum;w3/=weightSum;
          float n=fbm(q*3.0+vec2(uTime*.0025*uMid,-uTime*.0018));
          float n2=fbm(q*6.4-vec2(uTime*.0012,0.0));
          float line0=q.y-(.23*q.x+.12+.05*sin(q.x*2.3));
          float lane0=exp(-line0*line0*14.0)*smoothstep(.30,.76,n);
          float line1=q.y-(.10*q.x-.03+.04*sin(q.x*2.0));
          float lane1=exp(-line1*line1*18.0)*(.48+.52*smoothstep(.28,.70,n));
          float lane2=exp(-q.x*q.x*9.0)*(1.-smoothstep(.18,.94,abs(q.y)))*smoothstep(.24,.68,n+.15*n2);
          vec2 c=q-vec2(-1.13,-.84);float rr=length(c*vec2(.86,1.10));
          float lane3=exp(-pow(rr-1.10,2.0)*26.0)*smoothstep(.30,.72,n);
          float lane=w0*lane0+w1*lane1+w2*lane2+w3*lane3;
          float a=lane*uStrength*(.48+.52*n2);
          if(a<.008)discard;
          gl_FragColor=vec4(vec3(.0015,.002,.006),clamp(a,0.,.58));
        }`}),pe=new n(e,_e),pe.frustumCulled=!1,pe.renderOrder=20,D.add(pe)}function Vt(){Pt(),Ft(L,R),zt(),It(),Lt(),Bt(),Rt(),A&&(A.renderOrder=4)}function Ht(){let e=new h,t=new m(gt,3);t.setUsage(s),e.setAttribute(`position`,t);let r=new m(yt,1);r.setUsage(s),e.setAttribute(`aEnergy`,r);let i=new m(bt,1);i.setUsage(s),e.setAttribute(`aSide`,new m(_t,1)),e.setAttribute(`aFade`,new m(vt,1)),e.setAttribute(`aPhase`,i),e.setIndex(new m(xt,1)),ve=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,uniforms:{uOpacity:{value:0},uTime:{value:0},uHueShift:{value:0},uColorIntensity:{value:1},uBrightnessAudio:{value:0},uPercussive:{value:0},uVariation:{value:0},uDownbeat:{value:0},uColorA:{value:new p(`#86b8ff`)},uColorB:{value:new p(`#ffafd1`)}},vertexShader:`precision highp float;attribute float aSide;attribute float aFade;attribute float aEnergy;attribute float aPhase;varying float vSide;varying float vFade;varying float vEnergy;varying float vPhase;void main(){vSide=aSide;vFade=aFade;vEnergy=aEnergy;vPhase=aPhase;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`
        precision highp float;
        uniform float uOpacity,uTime,uHueShift,uColorIntensity,uBrightnessAudio,uPercussive,uVariation,uDownbeat;
        uniform vec3 uColorA,uColorB;
        varying float vSide,vFade,vEnergy,vPhase;
        vec3 rgb2hsl(vec3 c){float mx=max(max(c.r,c.g),c.b),mn=min(min(c.r,c.g),c.b),d=mx-mn;float h=0.0,l=(mx+mn)*.5,s=d/(1.0-abs(2.0*l-1.0)+1e-5);if(d>1e-5){if(mx==c.r)h=mod((c.g-c.b)/d,6.0);else if(mx==c.g)h=(c.b-c.r)/d+2.0;else h=(c.r-c.g)/d+4.0;h=fract(h/6.0);}return vec3(h,s,l);}
        float hue2rgb(float p,float q,float t){t=fract(t);if(t<1.0/6.0)return p+(q-p)*6.0*t;if(t<.5)return q;if(t<2.0/3.0)return p+(q-p)*(2.0/3.0-t)*6.0;return p;}
        vec3 hsl2rgb(vec3 hsl){float q=hsl.z<.5?hsl.z*(1.0+hsl.y):hsl.z+hsl.y-hsl.z*hsl.y,p=2.0*hsl.z-q;return hsl.y<1e-5?vec3(hsl.z):vec3(hue2rgb(p,q,hsl.x+1.0/3.0),hue2rgb(p,q,hsl.x),hue2rgb(p,q,hsl.x-1.0/3.0));}
        void main(){
          float longitudinal=pow(clamp(vFade,0.0,1.0),1.12);
          float edge=.38+.62*pow(clamp(1.0-abs(vSide),0.0,1.0),.48);
          float core=pow(clamp(1.0-abs(vSide)*1.35,0.0,1.0),2.0);
          float e=clamp(vEnergy,0.0,1.0);
          float a=uOpacity*longitudinal*(edge*.76+core*.24)*e*(.44+.56*e);if(a<.009)discard;
          float movingPhase=fract(vPhase+vFade*.22-uTime*(.10+uVariation*.28));
          float packet=.5+.5*cos((movingPhase-.5)*6.2831853);
          float beatPacket=pow(packet,7.0);
          vec3 c=mix(uColorA,uColorB,smoothstep(.24,.90,e));
          vec3 hsl=rgb2hsl(max(c,vec3(0.0)));
          hsl.x=fract(hsl.x+uHueShift+(packet-.5)*uVariation*.22+(vPhase-.5)*.035);
          hsl.y=clamp(hsl.y*uColorIntensity+uBrightnessAudio*.12,0.0,1.0);
          hsl.z=mix(hsl.z,min(hsl.z*(1.18+uBrightnessAudio*.24),.78),clamp(uColorIntensity-1.0,0.0,1.0));
          c=hsl2rgb(hsl);
          c=mix(c,vec3(.05,.92,1.0),uBrightnessAudio*packet*.40);
          c=mix(c,vec3(1.0,.24,.035),uPercussive*beatPacket*.58);
          c=mix(c,vec3(1.0,.035,.68),uVariation*packet*.52);
          c=mix(c,vec3(1.0,.62,.10),uDownbeat*beatPacket*(.46+.32*vFade));
          c*=(.60+1.10*e+core*.30)*(1.0+uDownbeat*beatPacket*.34);
          gl_FragColor=vec4(c,a);
        }`}),j=new n(e,ve),j.frustumCulled=!1,D.add(j)}function Ut(){de=new n(new l(2,2),new f({transparent:!0,depthWrite:!1,depthTest:!1,blending:2,uniforms:{uTime:{value:0},uStrength:{value:.34},uScene:{value:0},uTransition:{value:0},uResolution:{value:new t(window.innerWidth,window.innerHeight)}},vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,fragmentShader:`
        precision highp float;
        uniform float uTime;uniform float uStrength;uniform float uScene;uniform float uTransition;uniform vec2 uResolution;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        float sw(float x,float c){return 1.0-smoothstep(.62,1.18,abs(x-c));}
        void main(){
          vec2 q=gl_FragCoord.xy/max(uResolution,vec2(1.0));
          q=(q-.5)*vec2(uResolution.x/max(uResolution.y,1.0),1.0);
          float n=.58*noise(q*1.7+vec2(uTime*.005,-uTime*.003))+.42*noise(q*3.5-uTime*.002);

          float w0=sw(uScene,0.0),w1=sw(uScene,1.0),w2=sw(uScene,2.0),w3=sw(uScene,3.0);
          float weightSum=max(.0001,w0+w1+w2+w3);w0/=weightSum;w1/=weightSum;w2/=weightSum;w3/=weightSum;

          // Scene 0: diagonal wall entering from upper-left; preserve right-hand void.
          float riftLine=q.y-(.24*q.x+.15+.055*sin(q.x*2.4+uTime*.008));
          float voidWall=exp(-riftLine*riftLine*5.4);

          // Scene 1: a very broad galactic passage, not a narrow ribbon.
          float passageLine=q.y-(.11*q.x-.05+.07*sin(q.x*1.8+uTime*.010));
          float passage=exp(-passageLine*passageLine*3.0);

          // Scene 2: two gigantic side walls; central nave stays dark.
          float walls=exp(-pow(abs(q.x)-.56,2.0)*8.0)*(0.62+.38*exp(-q.y*q.y*.8));

          // Scene 3: only the edge of a huge off-screen galaxy.
          vec2 c=q-vec2(-1.10,-.80);
          float rr=length(c*vec2(.88,1.08));
          float rim=exp(-pow(rr-1.12,2.0)*18.0);

          float shape=.30*w0*voidWall+.34*w1*passage+.27*w2*walls+.27*w3*rim;
          float vign=1.0-smoothstep(.38,1.25,length(q));
          float veil=(.045+.105*n)*(.55+.45*vign)+shape;
          vec3 cold=vec3(.018,.045,.115);
          vec3 violet=vec3(.075,.025,.125);
          vec3 col=mix(cold,violet,.30+.45*n+w2*.10)*veil*uStrength;
          col*=.76+.24*uTransition;
          gl_FragColor=vec4(col,clamp(veil*uStrength*.40,0.0,.19));
        }`})),de.frustumCulled=!1,de.renderOrder=-10,D.add(de)}function Wt(){k=new _(E),k.addPass(new g(D,O)),le=new y(new t(window.innerWidth,window.innerHeight),T.Bloom强度*.72,Math.max(.03,T.Bloom半径*.55),T.Bloom阈值),ue=new y(new t(window.innerWidth,window.innerHeight),T.Bloom强度*.38,Math.min(.82,T.Bloom半径*.95+.22),Math.max(.03,T.Bloom阈值-.14)),ne(le),ne(ue),k.addPass(le),k.addPass(ue),k.addPass(new v)}function Gt(){Object.assign(T,ce),A&&A.geometry.setDrawRange(0,T.粒子数量),sn()}function Kt(){let e=Se||{},t=Q(H.macro),n=Q(H.dynamicLift),r=Q(Math.max(H.impact,e.impact||0,(e.bassPunch||0)*.92)),i=Q(H.climax),a=Q(e.downbeat||0),o=Q(e.bassPunch||0),s=Number.isFinite(e.bpm)?e.bpm:0,l=s>0?Q((s-68)/112):.32,u=Q(t*.21+n*.2+r*.19+i*.18+V.variation*.12+a*.06+l*.04);U.duration=c.lerp(4.5,1.8,Tt(u));let d=Q(t*.16+n*.17+r*.23+i*.2+V.variation*.1+V.percussive*.06+o*.05+a*.03);U.intensity=c.lerp(.78,1.38,Tt(d)),U.propagation=c.lerp(.9,1.18,Q(n*.4+i*.34+V.variation*.26)),U.trail=c.lerp(.82,1.48,Q(r*.46+i*.38+n*.16)),U.energy=c.lerp(.86,1.42,Q(r*.34+i*.46+t*.2)),U.hero=c.lerp(.9,1.28,Q(i*.58+r*.42)),U.bloom=c.lerp(.88,1.32,Q(i*.6+r*.4)),U.camera=c.lerp(.84,1.3,Q(r*.48+a*.3+i*.22)),U.flyby=c.lerp(.88,1.34,Q(o*.48+r*.34+i*.18))}function qt(){z||(R=(L+1)%G.length,ye=L%4,Kt(),J.set(G[L]),Ge.set(G[R]),Re.set(q[L]),ze.set(q[R]),Be.set(Ie[L]),Ve.set(Ie[R]),He.set(Le[L]),Ue.set(Le[R]),Et(),Ft(L,R),A.geometry.getAttribute(`aFrom`).needsUpdate=!0,A.geometry.getAttribute(`aTo`).needsUpdate=!0,A.geometry.getAttribute(`aFromVis`).needsUpdate=!0,A.geometry.getAttribute(`aToVis`).needsUpdate=!0,A.geometry.getAttribute(`aFromColorRole`).needsUpdate=!0,A.geometry.getAttribute(`aToColorRole`).needsUpdate=!0,A.geometry.getAttribute(`position`).needsUpdate=!0,be=B,z=!0,e.modeLabel=re[ye],Qt())}function Jt(){L=R,J.set(G[L]),Ge.set(G[(L+1)%G.length]),Re.set(q[L]),ze.set(q[(L+1)%G.length]),Be.set(Ie[L]),Ve.set(Ie[(L+1)%G.length]),He.set(Le[L]),Ue.set(Le[(L+1)%G.length]),Et(),Ft(L,(L+1)%G.length),A.geometry.getAttribute(`aFrom`).needsUpdate=!0,A.geometry.getAttribute(`aTo`).needsUpdate=!0,A.geometry.getAttribute(`aFromVis`).needsUpdate=!0,A.geometry.getAttribute(`aToVis`).needsUpdate=!0,A.geometry.getAttribute(`aFromColorRole`).needsUpdate=!0,A.geometry.getAttribute(`aToColorRole`).needsUpdate=!0,A.geometry.getAttribute(`position`).needsUpdate=!0,I.uniforms.uProgress.value=0,I.uniforms.uTransitionActive.value=0,z=!1,e.sceneLabel=w[L],e.modeLabel=`静止星场`,ve.uniforms.uOpacity.value=0}function Yt(e,t){let n=Q(e),r=Tt((n-.035)/.865),i=Dt(n,.03,.18,.68,.94),a=Dt(n,0,.16,.72,.98),o=Dt(n,.02,.2,.76,.96),s=Tt((n-.22)/.62),c=Dt(n,0,.18,.74,.96),l=Dt(n,0,.12,.64,.92);return t===2&&(r=Tt((n-.12)/.72),i=Dt(n,.08,.2,.58,.88),a=Dt(n,.16,.32,.67,.93),o=Dt(n,.43,.58,.8,.97),l=Dt(n,.04,.18,.52,.86)),t===3&&(r=Tt((n-.16)/.72),i=Dt(n,.24,.4,.65,.88),a=Dt(n,.3,.48,.72,.94),o=Dt(n,.6,.7,.86,.98),l=Dt(n,.1,.28,.62,.9)),z&&(i*=U.trail,a*=U.energy,o*=U.hero,c*=U.bloom,l*=U.camera),{morph:r,trail:i,energy:a,heroPulse:o,color:s,bloom:c,cameraPulse:l}}function Xt(e,t,n,r,i){let a=e*3,o=e*4,s=K[o],l=K[o+1],u=K[o+2],d=K[o+3],f=I.uniforms,p=f.uWave.value,m=0;m=n===0?.45+J[a]*.003+J[a+1]*.0014:n===1?.47+J[a]*.0046-J[a+1]*.001:n===2?.44+(-J[a+2]-30)*.00135+Math.hypot(J[a],J[a+1])*.0018:.5+Math.hypot(J[a],J[a+1])*.0048,m+=(Fe[e]-.5)*.2*p;let ee=c.lerp(.64,.33,c.clamp(p,0,1.4)),h=Q((t-m+ee)/Math.max(.08,ee)),g=z?Tt(h):0,_=Math.sin(Math.PI*g),v=J[a]+(Ge[a]-J[a])*g,y=J[a+1]+(Ge[a+1]-J[a+1])*g,x=J[a+2]+(Ge[a+2]-J[a+2])*g,S=Pe[e],C=S<.5?.45:S<1.5?1:1.52*f.uNearStrength.value,te=r*f.uDrift.value;if(v+=Math.sin(te*.52+s*17+x*.014)*(.14+.14*C),y+=Math.cos(te*.4+l*19+v*.018)*(.09+.1*C),Math.abs(f.uScene.value-1)<.62){let e=(.28+.72*d)*f.uFlow.value,t=.5+.5*Math.sin(r*(.62+f.uAudioMotion.value*1.9)-x*.035+s*b),n=f.uAudioMotion.value*(.22+.78*t);v+=Math.sin(r*e*.72+u*11)*(.28+.34*C+n*.42),y+=Math.cos(r*e*.54+s*13)*(.18+.22*C+n*.28),x+=n*(.45+2.1*d)}let ne=1-Tt((Math.abs(f.uScene.value-2)-.38)/.44);if(ne>0){let e=f.uAudioBass.value*ne*(.018+.035*d),t=f.uAudioMotion.value*ne*(l-.5)*.035,n=Math.cos(t),r=Math.sin(t),i=v;v=(i*n-y*r)*(1+e),y=(i*r+y*n)*(1+e)}x+=f.uAudioImpact.value*(S>1.5?4.2:S>.5?1.15:.28)*(.35+.65*d);let w=f.uStrength.value*C;if(n===0){let e=_*w*(.36+s*1.28)*(1+.0018*Math.abs(x)),t=Math.cos(e),n=Math.sin(e),r=v;v=r*t-y*n,y=r*n+y*t;let i=1+_*w*(.08+u*.18);v*=i,y*=i,x+=_*w*(8+d*18)}else if(n===1)y+=(s>=.5?1:-1)*_*w*(4.5+30*l*l),v+=Math.sin(u*28+g*7)*_*w*3.1,x+=Math.cos(d*16+g*4)*_*w*6;else if(n===2){let e=.55+c.clamp(T.Flyby强度*U.flyby,0,1.7)*.78,t=1+_*w*(.34+s*.82)*e;v*=t,y*=t,x+=_*w*(18+62*l)*e;let n=Math.max(.001,Math.hypot(v,y));v+=v/n*_*w*(1.5+6.5*u)*e,y+=y/n*_*w*(1.5+6.5*u)*e}else{let e=Math.max(.12,1-_*w*(.38+.26*s));v*=e,y*=e;let t=_*w*(l-.5)*1.65,n=Math.cos(t),r=Math.sin(t),i=v;v=i*n-y*r,y=i*r+y*n,x+=_*w*(9+25*u)}i[0]=v,i[1]=y,i[2]=x}let $=[0,0,0],Zt=new o;function Qt(){let e=z?Q((B-be)/Math.max(.01,U.duration)):0;for(let t=0;t<360;t++){Xt(mt[t],e,ye,B,$);let n=t*3;ht[n]=$[0],ht[n+1]=$[1],ht[n+2]=$[2]}}function $t(e,t){let n=De()?V.trail*T.运动响应:0,r=Ot(`trail`,t.color??e),i=Q(V.transient*(.55+V.percussive*.35)),a=Q(Math.max(V.downbeatPulse,V.impact*.82)),o=Q(Math.max(V.variation*.72,V.climax*.8,t.trail||0)),s=c.clamp((.07+i*.16+a*.25+o*.31)*(.72+r*.28),.06,.8),l=Math.round(360*s);j.geometry.setDrawRange(0,l*6);let u=Q(Math.max(t.trail,n)*T.拖尾强度*1.6*r);if(ve.uniforms.uOpacity.value=u,u<.004)return;let d=O.getWorldDirection(Zt);for(let n=0;n<360;n++){let r=mt[n],s=n*4;if(r>=T.粒子数量){yt[s]=yt[s+1]=yt[s+2]=yt[s+3]=0;continue}let l=He[r],u=((l+(((Ue[r]-l+.5)%1+1)%1-.5)*Q(e))%1+1)%1;bt[s]=u,bt[s+1]=u,bt[s+2]=u,bt[s+3]=u,Xt(r,e,ye,B,$);let f=n*3,p=ht[f],m=ht[f+1],ee=ht[f+2],h=$[0]-p,g=$[1]-m,_=$[2]-ee,v=Math.max(.001,Math.hypot($[0],$[1])),y=z?0:Q(i*.52+a*.86+o*.38),b=.055+i*.08+a*.18+o*.13,x=c.lerp(h,$[0]/v*b,y),S=c.lerp(g,$[1]/v*b,y),C=c.lerp(_,b*.22,y),te=Math.hypot(x,S,C)+1e-5,ne=1+Ne[r]*T.Hero强度*1.55,w=Pe[r]>1.5?1.2:1,re=(Ne[r]>0?1.3:Pe[r]>1.5?.72:.48)*(.42+Math.max(t.energy,V.impact*.72+V.climax*.38)*.92),ie=(4.2+Math.min(16,te*24))*.48*T.拖尾长度*re*ne*w,ae=$[0]-x*ie,oe=$[1]-S*ie,se=$[2]-C*ie,ce=$[0]-ae,E=$[1]-oe,D=$[2]-se,k=E*d.z-D*d.y,le=D*d.x-ce*d.z,ue=ce*d.y-E*d.x,A=Math.hypot(k,le,ue)||1;k/=A,le/=A,ue/=A;let j=Math.hypot($[0]-O.position.x,$[1]-O.position.y,$[2]-O.position.z),de=c.clamp(j/120,.9,1.45),M=(.055+.088*Math.min(1,te*8))*1.45*de*T.拖尾宽度*ne*(Pe[r]>1.5?1.12:1),N=n*12;gt[N]=$[0]-k*M,gt[N+1]=$[1]-le*M,gt[N+2]=$[2]-ue*M,gt[N+3]=$[0]+k*M,gt[N+4]=$[1]+le*M,gt[N+5]=$[2]+ue*M,gt[N+6]=ae-k*M*.18,gt[N+7]=oe-le*M*.18,gt[N+8]=se-ue*M*.18,gt[N+9]=ae+k*M*.18,gt[N+10]=oe+le*M*.18,gt[N+11]=se+ue*M*.18;let P=c.lerp(Re[r],ze[r],Q(e)),fe=Q((.18+te*5.5+Ne[r]*.58)*P);yt[s]=fe,yt[s+1]=fe,yt[s+2]=fe*.4,yt[s+3]=fe*.4;let pe=.12;ht[f]=c.lerp(p,$[0],pe),ht[f+1]=c.lerp(m,$[1],pe),ht[f+2]=c.lerp(ee,$[2],pe)}j.geometry.getAttribute(`position`).needsUpdate=!0,j.geometry.getAttribute(`aEnergy`).needsUpdate=!0,j.geometry.getAttribute(`aPhase`).needsUpdate=!0}let en=[[`#2457d6`,`#d6ebff`,`#df5b55`,`#efb75d`],[`#296ee8`,`#bceeff`,`#dc6674`,`#ffd078`],[`#426be0`,`#e5f3ff`,`#ef6049`,`#ffc06a`],[`#204fbd`,`#a9dcff`,`#c65b65`,`#d5a45f`]].map(e=>e.map(e=>new p(e))),tn=Array.from({length:4},()=>new p),nn={cyan:new p(`#19d5e8`),lavender:new p(`#c6b7ff`),ice:new p(`#dcffff`),pink:new p(`#ff2ca8`),orange:new p(`#ff7a32`),amber:new p(`#ff8a18`),dustBlue:new p(`#536fbd`),dustViolet:new p(`#8a659e`)},rn={hue:0,intensity:1};function an(e,t){let n=en[L],r=en[R],i=tn;for(let e=0;e<4;e++)i[e].copy(n[e]);if(z){let t=Tt(e);for(let e=0;e<4;e++)i[e].lerp(r[e],t)}ve.uniforms.uColorA.value.copy(i[0]),ve.uniforms.uColorB.value.copy(i[2]).lerp(i[3],.22);let a=De(),o=a?T.光色响应:0,s=Q((V.brightness*.58+V.high*.24)*o),l=Q((V.percussive*.44+V.transient*.28)*o),u=Q((V.variation*.62+V.mid*.18+V.climax*.2)*o),d=Q((V.downbeatPulse*.68+V.bass*.18)*o);i[0].lerp(nn.cyan,s*.72),i[1].lerp(nn.lavender,u*.42).lerp(nn.ice,s*.34),i[2].lerp(nn.pink,u*.68).lerp(nn.orange,l*.38),i[3].lerp(nn.amber,Math.max(l*.38,d*.78)),I.uniforms.uColorA.value.copy(i[0]),I.uniforms.uColorB.value.copy(i[1]),I.uniforms.uColorC.value.copy(i[2]),I.uniforms.uColorD.value.copy(i[3]);let f=a?T.光色响应*T.丝带色彩响应:0,p=Math.min(1.5,V.mid+V.high),m=Math.sin(B*.5)*.18*p,ee=a?(m+p*.55)*f:0,h=a?1+V.bass*T.丝带饱和增强*f:1,g=1-Math.exp(-t/Math.max(.03,T.丝带变色速度));rn.hue=c.lerp(rn.hue,ee,g),rn.intensity=c.lerp(rn.intensity,h,g);let _=ve.uniforms;_.uTime.value=B,_.uHueShift.value=rn.hue,_.uColorIntensity.value=rn.intensity,_.uBrightnessAudio.value=a?Q((V.brightness*.68+V.high*.32)*f):0,_.uPercussive.value=a?Q((V.percussive*.68+V.transient*.32)*f):0,_.uVariation.value=a?Q((V.variation*.72+V.mid*.18+V.climax*.1)*f):0,_.uDownbeat.value=a?Q((V.downbeatPulse*.78+V.impact*.22)*f):0}function on(e){let t=e*.001,n=Math.min(.05,Math.max(0,t-xe));xe=t,B+=n,ke(n);let r=0,i={morph:0,trail:0,energy:0,heroPulse:0,color:0,bloom:0,cameraPulse:0};z?(r=(B-be)/Math.max(.1,U.duration),r>=1?(Jt(),r=0):(i=Yt(r,ye),I.uniforms.uTransitionActive.value=1,I.uniforms.uProgress.value=i.morph,I.uniforms.uType.value=ye,$t(i.morph,i))):(I.uniforms.uTransitionActive.value=0,I.uniforms.uProgress.value=0,De()&&V.trail>.035?$t(0,{trail:V.trail,energy:Math.max(V.impact,V.climax*.65)}):ve.uniforms.uOpacity.value=0,De()&&Ae()&&qt());let a=De(),o=a?T.运动响应:0,s=a?Q(V.transient*(.72+V.percussive*.38)):0,l=a?Q(V.downbeatPulse*(.82+V.percussive*.3)):0,u=a?Q(V.variation*.62+V.dynamicLift*.38):0,d=a?Q(V.macro*.42+V.impact*.38+s*.58+l*.38+V.climax*.38):0,f=z?i.color:0,p=e=>Ot(e,f);I.uniforms.uTime.value=B,I.uniforms.uStrength.value=T.转场强度*(z?U.intensity:1),I.uniforms.uWave.value=T.传播强度*(z?U.propagation:1),I.uniforms.uSceneDensity.value=Q(p(`stars`)),I.uniforms.uPointScale.value=T.星点尺寸*(.85+.15*p(`stars`))*(1+d*.06+s*.075*o);let m=a?1+V.macro*.07*T.光色响应+V.impact*.045*T.光色响应+s*.13*T.光色响应+l*.08*T.光色响应:1;I.uniforms.uBrightness.value=T.星点亮度*wt(m,1),I.uniforms.uHeroStrength.value=T.Hero强度*(.3+i.heroPulse*.1+V.climax*.08+V.impact*.05+s*.06+l*.22),I.uniforms.uNearStrength.value=T.近景层强度*p(`near`)*(1+V.macro*.24*o+V.impact*.12*o),I.uniforms.uDrift.value=T.漂移速度*(1+V.flow*.58*o),I.uniforms.uFlow.value=T.星河流动*(.72+V.flow*1.36*o+V.dynamicLift*.26*o+u*.34*o),I.uniforms.uScene.value=z?c.lerp(L,R,i.color):L,I.uniforms.uEnergy.value=Q(Math.max(i.energy,d)),I.uniforms.uAudioMotion.value=V.flow*o,I.uniforms.uAudioImpact.value=V.impact*o,I.uniforms.uAudioBass.value=V.bass*o,I.uniforms.uAudioBrightness.value=a?Q(V.brightness*.72+V.high*.28)*T.光色响应:0,I.uniforms.uAudioPercussive.value=a?Q(V.percussive*.68+s*.32)*T.光色响应:0,I.uniforms.uAudioVariation.value=a?Q(V.variation*.72+u*.28)*T.光色响应:0,I.uniforms.uAudioDownbeat.value=a?l*T.光色响应:0,I.uniforms.uFlyby.value=T.Flyby强度*(z?U.flyby:1);let ee=a?(V.climax*.38+V.impact*.18+s*.28+l*.58)*T.光色响应:0,h=a?1+V.macro*.09*T.光色响应+V.climax*.045*T.光色响应:1,g=c.clamp(T.Bloom强度*p(`bloom`)*wt(h,1)*(1+i.bloom*.08+ee*.1),0,1);le.strength=c.clamp(g*.92,0,1),le.radius=c.clamp(.025+T.Bloom半径*.52+.025*i.bloom,.02,.48),le.threshold=c.clamp(T.Bloom阈值-.035*i.bloom-.018*V.climax*T.光色响应,.03,1),ue.strength=c.clamp(g*.58,0,.72),ue.radius=c.clamp(.22+T.Bloom半径*.82+.04*i.bloom+.018*V.climax*T.光色响应,.18,.88),ue.threshold=c.clamp(T.Bloom阈值-.16-.045*i.bloom-.025*V.climax*T.光色响应,.02,.88);let _=a?T.光色响应:0,v=Q((.06+V.brightness*.52+V.high*.22+V.atmosphere*.1-V.climax*.06)*_*p(`cool`)),y=Q((V.bass*.1+l*.58+V.climax*.22)*_*p(`warm`)),x=Q((V.mid*.22+V.variation*.42+u*.18+V.climax*.14)*_*p(`rose`)),S=a?(V.brightness*.024+V.high*.012+V.mid*.008+V.variation*.018-l*.016)*_:0,C=a?Q(.05+V.variation*.28+V.percussive*.1+V.brightness*.06)*Math.min(1,_):.035;I.uniforms.uColorCoolShift.value=v,I.uniforms.uColorWarmShift.value=y,I.uniforms.uColorRoseShift.value=x,I.uniforms.uHueShift.value=S,I.uniforms.uColorSpread.value=C,an(i.color,n);let te=z?i.morph:0,ne=z?c.lerp(L,R,i.color):L,w=L,re=z?R:L,ae=f,oe=e=>c.lerp(e[w],e[re],ae),se=oe([.55,1,.68,.74]),ce=oe([.38,1,.66,.46]),E=oe([.82,.68,.9,.52]),D=oe([.56,.74,1.12,.58]);if(me){me.uniforms.uProgress.value=te,me.uniforms.uTime.value=B;let e=a?.9+V.macro*.025*T.光色响应+V.brightness*.1+s*.16:1;me.uniforms.uStrength.value=T.微星强度*p(`micro`)*se*wt(e,1),me.uniforms.uHigh.value=a?Q(V.high*.55+V.brightness*.25+s*.45)*T.运动响应:0,me.uniforms.uCoolShift.value=Q((V.brightness*.52+V.high*.18+V.atmosphere*.06)*_),me.uniforms.uWarmPresence.value=Q(oe([.58,.76,1,.28])*(.88+l*.1+V.mid*.08)),me.uniforms.uAccentPresence.value=Q(oe([.1,.17,.34,.05])*(.82+u*.18+V.variation*.12)),me.uniforms.uColorA.value.copy(I.uniforms.uColorA.value).multiplyScalar(.86),me.uniforms.uColorB.value.copy(I.uniforms.uColorB.value),me.uniforms.uColorWarm.value.copy(I.uniforms.uColorD.value),me.uniforms.uColorAccent.value.copy(I.uniforms.uColorC.value).lerp(I.uniforms.uColorD.value,.18)}if(he&&(he.uniforms.uProgress.value=te,he.uniforms.uTime.value=B,he.uniforms.uStrength.value=T.星尘强度*p(`dust`)*ce*(a?.76+V.macro*.13+V.mid*.18+u*.2:1),he.uniforms.uMid.value=a?V.mid*T.运动响应:0,he.uniforms.uBass.value=a?V.bass*T.运动响应:0,he.uniforms.uColorA.value.copy(I.uniforms.uColorA.value).lerp(nn.dustBlue,.62),he.uniforms.uColorB.value.copy(I.uniforms.uColorC.value).lerp(nn.dustViolet,.55)),ge){ge.uniforms.uProgress.value=te,ge.uniforms.uTime.value=B;let e=a?.92+V.macro*.055*T.光色响应+V.climax*.075*T.光色响应+V.impact*.055*T.光色响应:1;ge.uniforms.uStrength.value=T.恒星强度*T.Hero强度*p(`hero`)*D*wt(e,1),ge.uniforms.uImpact.value=Q(Math.max(V.impact*.72,s*.48,l,i.heroPulse*.72)),ge.uniforms.uClimax.value=Q(V.climax),ge.uniforms.uHeroWarmShift.value=Q((l*.72+V.bass*.12+V.climax*.26)*_),ge.uniforms.uHeroRoseShift.value=Q((V.mid*.18+V.variation*.38+u*.18+V.climax*.16)*_),ge.uniforms.uColorCool.value.copy(I.uniforms.uColorB.value),ge.uniforms.uColorWarm.value.copy(I.uniforms.uColorD.value)}if(F){F.uniforms.uTime.value=B,F.uniforms.uScene.value=ne;let e=a?.76+V.atmosphere*.14+V.bass*.055*T.光色响应+V.macro*.055*T.光色响应+V.climax*.025*T.光色响应:1;F.uniforms.uStrength.value=T.星云强度*1.55*p(`nebula`)*E*wt(e,1),F.uniforms.uBass.value=a?V.bass:0,F.uniforms.uMacro.value=a?V.macro:0;let t=a?T.光色响应*T.星云色彩响应:0;F.uniforms.uBeat.value=a?Q(V.percussive*.62+V.downbeatPulse*.82+V.transient*.28):0,F.uniforms.uVariation.value=a?Q(V.variation*.78+u*.42+V.climax*.22):0,F.uniforms.uFilamentStrength.value=T.星云细丝强度*(1+(a?V.variation*.34+V.brightness*.12:0)),F.uniforms.uPaletteBlue.value=Q((.16+V.brightness*.76+V.high*.34+V.atmosphere*.18)*t),F.uniforms.uPaletteRose.value=Q((V.mid*.4+V.variation*.86+u*.3+V.climax*.26)*t),F.uniforms.uPaletteCyan.value=Q((V.brightness*.56+V.high*.46+V.flow*.22)*t),F.uniforms.uPaletteGold.value=Q((V.downbeatPulse*.94+V.bass*.36+V.climax*.32)*t),F.uniforms.uHueShift.value=S*(1.1+.34*T.星云色彩响应),F.uniforms.uColorSpread.value=C*(1.55+.28*T.星云色彩响应)}_e&&(_e.uniforms.uTime.value=B,_e.uniforms.uScene.value=ne,_e.uniforms.uStrength.value=.42+.18*T.星尘强度,_e.uniforms.uMid.value=a?V.mid:0);let A=T.镜头动势,j=i.cameraPulse,M=ie[L],N=ie[z?R:L],P=z?Tt(i.color):0,fe=c.lerp(M.fov,N.fov,P),pe=0,Se=0,Ce=c.lerp(M.lookX,N.lookX,P),we=c.lerp(M.lookY,N.lookY,P),Te=c.lerp(M.depth,N.depth,P);z&&(ye===0&&(fe-=j*2.8*A,pe=1.9*j*A,Se=.014*j*A),ye===1&&(fe+=j*3.4*A,pe=1.6*j*A,Se=-.026*j*A),ye===2&&(fe+=j*8.2*A,pe=5.2*j*T.转场强度*U.intensity*A*(.45+.8*T.Flyby强度*U.flyby),Se=Math.sin(r*b)*.03*j*A),ye===3&&(fe-=j*4.6*A,pe=2.3*j*A,Se=.02*j*A));let H=a?Math.max(V.camera*.74,s*.34,l*.92)*T.镜头响应:0;fe+=V.macro*1.5*T.镜头响应+H*1.8,pe+=H*1.2,Se+=H*.004*Math.sin(B*2.7),O.fov=c.lerp(O.fov,fe,Math.min(1,n*2.6)),O.updateProjectionMatrix();let W=c.lerp(L,z?R:L,P),Oe=Math.sin(B*.031+W*.9)*.85,G=Math.cos(B*.026+W*.7)*.42;if(O.position.x=Oe+j*Math.sin(r*b)*.72*A+H*.12*Math.sin(B*1.7),O.position.y=G+j*Math.cos(r*Math.PI)*.3*A+H*.07*Math.cos(B*2),O.position.z=12-pe,Ce+=Math.sin(B*.018+W)*1.25,we+=Math.cos(B*.015+W*.8)*.55,O.lookAt(Ce,we,Te),Ee=c.lerp(Ee,Se,Math.min(1,n*3.6)),O.rotation.z=Ee,de){let e=de.material.uniforms;e.uTime.value=B;let t=a?.52+V.atmosphere*.88+V.climax*.18:1;e.uStrength.value=T.空间氛围*t,e.uScene.value=z?c.lerp(L,R,i.color):L,e.uTransition.value=Q(Math.max(i.energy,V.macro*.42+V.climax*.45))}k.render()}function sn(){if(Oe(),rn.hue=0,rn.intensity=1,ve){let e=ve.uniforms;e.uHueShift.value=0,e.uColorIntensity.value=1,e.uBrightnessAudio.value=0,e.uPercussive.value=0,e.uVariation.value=0,e.uDownbeat.value=0}if(R=(L+1)%G.length,ye=L%4,z=!1,be=B,Ee=0,A){J.set(G[L]),Ge.set(G[R]),Re.set(q[L]),ze.set(q[R]),Be.set(Ie[L]),Ve.set(Ie[R]),He.set(Le[L]),Ue.set(Le[R]),Et();let e=A.geometry;e.getAttribute(`aFrom`).needsUpdate=!0,e.getAttribute(`aTo`).needsUpdate=!0,e.getAttribute(`aFromVis`).needsUpdate=!0,e.getAttribute(`aToVis`).needsUpdate=!0,e.getAttribute(`aFromColorRole`).needsUpdate=!0,e.getAttribute(`aToColorRole`).needsUpdate=!0,e.getAttribute(`position`).needsUpdate=!0,I.uniforms.uProgress.value=0,I.uniforms.uTransitionActive.value=0}if(Ft(L,R),ve&&(ve.uniforms.uOpacity.value=0),Qt(),O){let e=ie[L];O.fov=e.fov,O.position.set(0,0,12),O.lookAt(e.lookX,e.lookY,e.depth),O.rotation.z=0,O.updateProjectionMatrix()}e.sceneLabel=w[L],e.modeLabel=`静止星场`}function cn(){D&&(D.traverse(e=>{if(e.geometry&&typeof e.geometry.dispose==`function`&&e.geometry.dispose(),e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)if(e){for(let t of Object.keys(e)){let n=e[t];n&&n.isTexture&&typeof n.dispose==`function`&&n.dispose()}typeof e.dispose==`function`&&e.dispose()}}}),D.clear()),le?.dispose&&le.dispose(),ue?.dispose&&ue.dispose(),k?.dispose&&k.dispose(),E?.dispose&&E.dispose(),E=D=O=k=le=ue=null,A=j=de=null,M=N=P=fe=pe=null,me=he=ge=F=_e=null,I=ve=null}function ln(e=window.innerWidth,t=window.innerHeight){!O||!E||(O.aspect=e/t,O.updateProjectionMatrix(),E.setSize(e,t,!1),k&&k.setSize(e,t),de&&de.material.uniforms.uResolution.value.set(e,t),F&&F.uniforms.uResolution.value.set(e,t),_e&&_e.uniforms.uResolution.value.set(e,t))}return Mt(),e.sceneLabel=w[L],e.modeLabel=`静止星场`,{renderFrame:on,onResize:ln,resetSettings:Gt,resetRuntimeState:sn,resetMusicalDirector:Oe,disposeRuntime:cn,get renderer(){return E},get scene(){return D},get camera(){return O},get composer(){return k},get tightBloomPass(){return le},get wideBloomPass(){return ue},get starPoints(){return A}}}var ae=class{constructor(e,t={}){this.canvas=e;let n={转场强度:1,传播强度:.95,镜头动势:1,粒子数量:36e3,星点尺寸:2.5,星点亮度:1.6,Hero强度:1.6,近景层强度:1.2,漂移速度:.5,星河流动:.78,空间氛围:.38,Flyby强度:.58,微星强度:.82,星尘强度:.72,星云强度:1,星云色彩响应:1.35,星云细丝强度:1.2,恒星强度:1.08,拖尾强度:.32,拖尾长度:.65,拖尾宽度:.8,丝带色彩响应:1.35,丝带饱和增强:1.1,丝带变色速度:.16,Bloom强度:.2,Bloom半径:.16,Bloom阈值:.51,音频驱动:!0,音乐响应强度:1,转场灵敏度:.75,运动响应:1,光色响应:1,镜头响应:.72};this.defaultSettings=Object.freeze({...n}),this.settings={...n,...re(t)},this.runtime=null,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.tightBloomPass=null,this.wideBloomPass=null,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.hasAudioData=!1,this.audioAnimation=null,this.audioEnvelope=null,this.sceneLabel=``,this.modeLabel=``,this.init()}init(){try{return this.setupThreeJS(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),console.log(`✅ Animation67 初始化成功`),!0}catch(e){throw console.error(`❌ Animation67 初始化失败:`,e),e}}setupThreeJS(){this.runtime||(this.runtime=ie(this),this.scene=this.runtime.scene,this.camera=this.runtime.camera,this.renderer=this.runtime.renderer,this.composer=this.runtime.composer,this.tightBloomPass=this.runtime.tightBloomPass,this.wideBloomPass=this.runtime.wideBloomPass)}setupPostProcessing(){if(!this.composer)throw Error(`Animation67 composer 初始化失败`)}setupGUI(){this.createGUIContainer();let t={resetParams:()=>{this.runtime?.resetSettings(),this.hasAudioData=!1,this.audioAnimation=null,this.audioEnvelope=null,this.updateGUIControllers()}};this.gui=new e({title:`67. Musical Cosmic Starfield`,container:this.guiContainer});let n=this.gui.addFolder(`运动导演`);n.add(this.settings,`转场强度`,0,1.5,.05),n.add(this.settings,`传播强度`,0,1.2,.05),n.add(this.settings,`镜头动势`,0,1.5,.05);let r=this.gui.addFolder(`空间层级`);r.add(this.settings,`粒子数量`,8e3,5e4,1e3).onChange(e=>{let t=this.runtime?.starPoints;t&&t.geometry.setDrawRange(0,Math.round(e))}),r.add(this.settings,`星点尺寸`,.8,3.2,.05),r.add(this.settings,`星点亮度`,.6,2.2,.05),r.add(this.settings,`Hero强度`,0,2.6,.05),r.add(this.settings,`近景层强度`,0,2.2,.05),r.add(this.settings,`漂移速度`,0,.65,.01);let i=this.gui.addFolder(`空间生命感`);i.add(this.settings,`星河流动`,0,1.4,.02),i.add(this.settings,`空间氛围`,0,.8,.02),i.add(this.settings,`Flyby强度`,0,1.3,.02);let a=this.gui.addFolder(`天体层级`);a.add(this.settings,`微星强度`,0,1.6,.02),a.add(this.settings,`星尘强度`,0,1.2,.02),a.add(this.settings,`星云强度`,0,1.5,.02),a.add(this.settings,`星云色彩响应`,0,2.5,.05),a.add(this.settings,`星云细丝强度`,.4,2.5,.05),a.add(this.settings,`恒星强度`,0,1.8,.02);let o=this.gui.addFolder(`丝带拖尾`);o.add(this.settings,`拖尾强度`,0,.8,.02),o.add(this.settings,`拖尾长度`,.3,1.4,.05),o.add(this.settings,`拖尾宽度`,.4,1.4,.05),o.add(this.settings,`丝带色彩响应`,0,3,.05),o.add(this.settings,`丝带饱和增强`,0,3,.05),o.add(this.settings,`丝带变色速度`,.03,.8,.01);let s=this.gui.addFolder(`光效`);s.add(this.settings,`Bloom强度`,0,1,.01),s.add(this.settings,`Bloom半径`,0,.6,.01),s.add(this.settings,`Bloom阈值`,.05,1,.01);let c=this.gui.addFolder(`音频导演`);c.add(this.settings,`音频驱动`),c.add(this.settings,`音乐响应强度`,0,1.5,.05),c.add(this.settings,`转场灵敏度`,0,1,.05),c.add(this.settings,`运动响应`,0,1.5,.05),c.add(this.settings,`光色响应`,0,1.5,.05),c.add(this.settings,`镜头响应`,0,1.2,.05),this.gui.add(t,`resetParams`).name(`重置参数`),n.open(),r.open(),this.gui.hide()}createGUIContainer(){this.guiContainer=S(`Animation67-gui-container`),C(`Animation67-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=b(`Animation67-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui?.show():this.gui?.hide()}),document.body.appendChild(this.settingsButton)}updateGUIControllers(){if(!this.gui)return;let e=t=>{t.controllers?.forEach(e=>e.updateDisplay()),t.folders&&Object.values(t.folders).forEach(e)};e(this.gui)}updateWithAudioData(e,t){let n=e?.audioFeature?.animation;if(n){this.audioAnimation=n,this.audioEnvelope=e.audioFeature?.envelope||e.envelope||null,this.hasAudioData=e.isPlaying!==!1;return}this.audioAnimation=null,this.audioEnvelope=null,this.hasAudioData=!1}render(){if(!(!this.runtime||!this.renderer||!this.scene||!this.camera))try{this.runtime.renderFrame(performance.now())}catch(e){console.error(`Animation67 渲染错误:`,e)}}onWindowResize(){this.runtime&&this.runtime.onResize(window.innerWidth,window.innerHeight)}resetState(){this.hasAudioData=!1,this.audioAnimation=null,this.audioEnvelope=null,this.runtime?.resetRuntimeState()}updateSettings(e){if(!e)return;let t=re(e);if(Object.assign(this.settings,t),t.粒子数量!==void 0){let e=this.runtime?.starPoints;e&&e.geometry.setDrawRange(0,t.粒子数量)}this.updateGUIControllers()}getAudioDataForUI(){let e=this.audioAnimation||{};return{bass:e.bass||0,mid:e.mid||0,high:e.high||0}}dispose(){x(this.settingsButton,this.guiContainer,this.gui),this.gui=null,this.guiContainer=null,this.settingsButton=null,this.runtime&&=(this.runtime.disposeRuntime(),null),this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.tightBloomPass=null,this.wideBloomPass=null,this.audioAnimation=null,this.audioEnvelope=null,console.log(`✅ Animation67 资源已清理`)}};export{ae as default};