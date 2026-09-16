import{a as e}from"./lil-gui.esm-jlbWO7FJ.js";import{Dr as t,Et as n,Gt as r,H as i,Jn as a,Or as o,P as s,St as c,Ut as l,Vt as u,Xn as d,Zn as f,g as p,l as m,r as h,u as g}from"./three.module-TVF63cYk.js";import{n as _,r as ee,t as v}from"./OutputPass-CxDAHfy4.js";import{t as te}from"./UnrealBloomPass-C17ZlHgr.js";import{i as y,n as b,r as x,t as S}from"./GUIHelper-DspWBXk2.js";var ne=(e=!1)=>({blending:5,blendEquation:100,blendSrc:e?201:204,blendDst:201,blendEquationAlpha:100,blendSrcAlpha:e?200:201,blendDstAlpha:e?201:205,premultipliedAlpha:e}),re=e=>{e?.blendMaterial&&Object.assign(e.blendMaterial,ne(!0))},ie=Object.freeze({转场强度:[0,1.5],传播强度:[0,1.2],镜头动势:[0,1.5],粒子数量:[8e3,5e4],星点尺寸:[.8,3.2],星点亮度:[.6,2.2],Hero强度:[0,2.6],近景层强度:[0,2.2],漂移速度:[0,.65],星河流动:[0,1.4],空间氛围:[0,.8],Flyby强度:[0,1.3],微星强度:[0,1.6],星尘强度:[0,1.2],星云强度:[0,1.2],恒星强度:[0,1.8],拖尾强度:[0,.8],拖尾长度:[.3,1.4],拖尾宽度:[.4,1.4],Bloom强度:[0,1],Bloom半径:[0,.6],Bloom阈值:[.05,1],音乐响应强度:[0,1.5],转场灵敏度:[0,1],运动响应:[0,1.5],光色响应:[0,1.5],镜头响应:[0,1.2]});function ae(e={}){let t={};if(!e||typeof e!=`object`)return t;for(let[n,r]of Object.entries(e)){if(n===`音频驱动`){typeof r==`boolean`&&(t[n]=r);continue}let e=ie[n];if(!e||!Number.isFinite(r))continue;let i=c.clamp(r,e[0],e[1]);t[n]=n===`粒子数量`?Math.round(i):i}return t}function oe(e){let y=Math.PI*2,b=5e4,x=17e3,S=6200,ne=[`Into the Void · 进入深空`,`Galactic Passage · 穿越银河`,`Stellar Cathedral · 星海圣殿`,`Edge of the Galaxy · 银河边缘`],ie=[`Void Arrival · 深空抵达`,`Galactic Sweep · 银河横越`,`Cathedral Surge · 星海涌升`,`Edge Rebirth · 边缘重生`],ae=[{fov:68,lookX:16,lookY:3,depth:-138},{fov:60.5,lookX:-2,lookY:-2,depth:-146},{fov:57.5,lookX:0,lookY:6,depth:-158},{fov:69,lookX:-18,lookY:5,depth:-152}],oe=[{stars:.78,near:.52,micro:.48,dust:.64,nebula:.24,hero:.68,trail:.36,bloom:.82,cool:1.18,warm:.62,rose:.58},{stars:1.04,near:1.18,micro:1.28,dust:1.34,nebula:.18,hero:1,trail:1.34,bloom:1.06,cool:1.02,warm:.86,rose:1},{stars:.72,near:.46,micro:.52,dust:.94,nebula:.28,hero:1.42,trail:.2,bloom:1.18,cool:.72,warm:1.28,rose:1.34},{stars:.54,near:.3,micro:.34,dust:.44,nebula:.1,hero:.46,trail:.3,bloom:.58,cool:1.28,warm:.38,rose:.4}],se=[[[-112,48,-155,18,10,24,.72],[-72,31,-128,15,8,20,.16],[-138,13,-218,11,7,18,.96],[8,24,-205,14,8,24,.38]],[[-108,-24,-132,18,9,22,.12],[-48,-8,-112,15,8,18,.4],[-3,-1,-145,19,10,24,.72],[58,10,-166,13,7,18,.96],[112,20,-218,17,9,26,.22]],[[-74,50,-128,16,13,20,.2],[72,45,-135,16,13,20,.18],[-61,-27,-112,13,11,18,.96],[64,-20,-122,13,11,18,.94],[-5,12,-355,20,11,28,.72]],[[-108,-15,-148,17,9,22,.16],[-58,42,-188,14,8,22,.38],[4,70,-245,15,9,24,.14],[65,61,-292,12,7,22,.72],[116,29,-340,10,6,20,.94]]],ce=[.14,.19,.17,.11],C=e.settings,le=e.defaultSettings,w,T,E,D,O,ue,k,de,A,j,M,N,fe,pe,P,me,he,F,ge,I,_e,L=0,R=1,ve=0,z=!1,ye=0,B=0,be=performance.now()*.001,xe=null,Se=-1,Ce=!1,V={macro:0,dynamicLift:0,impact:0,transient:0,downbeatPulse:0,brightness:0,percussive:0,variation:0,flow:0,atmosphere:0,camera:0,climax:0,trail:0,bass:0,mid:0,high:0},H={macro:0,dynamicLift:0,impact:0,climax:0},U={duration:3.2,intensity:1,propagation:1,trail:1,energy:1,hero:1,bloom:1,camera:1,flyby:1},we=0;function W(e,t,n,r,i){let a=t>e?r:i,o=1-Math.exp(-n/Math.max(.001,a));return e+(t-e)*o}function Te(){return!!(e.hasAudioData&&e.audioAnimation&&C.音频驱动)}function Ee(){xe=null,Se=-1,Ce=!1;for(let e in V)V[e]=0;H.macro=0,H.dynamicLift=0,H.impact=0,H.climax=0}function De(t){let n=e.audioAnimation;if(!Te()||!n){let e={macro:0,dynamicLift:0,impact:0,transient:0,downbeatPulse:0,brightness:0,percussive:0,variation:0,flow:0,atmosphere:0,camera:0,climax:0,trail:0,bass:0,mid:0,high:0};for(let n in e)V[n]=W(V[n],e[n],t,.18,n===`atmosphere`?3.5:1.2);H.macro=W(H.macro,0,t,.28,1.8),H.dynamicLift=W(H.dynamicLift,0,t,.16,.9),H.impact=W(H.impact,0,t,.025,.34),H.climax=W(H.climax,0,t,.14,1);return}xe=n;let r=C.音乐响应强度,i=Number.isFinite(n.sectionEnergy)?n.sectionEnergy:n.energy||0,a=Number.isFinite(n.relativeEnergy)?n.relativeEnergy:n.energy||0,o=Number.isFinite(n.energyTrend)?n.energyTrend:0,s=Number.isFinite(n.impact)?n.impact:Math.max(n.kick||0,n.downbeat||0),c=Number.isFinite(n.bassPunch)?n.bassPunch:n.kick||0,l=Number.isFinite(n.downbeat)?n.downbeat:+!!n.isDownbeat,u=Number.isFinite(n.motion)?n.motion:((n.bass||0)+(n.mid||0))*.5,d=Number.isFinite(n.smoothness)?n.smoothness:.5,f=Number.isFinite(n.brightness)?n.brightness:n.high||0,p=Number.isFinite(n.variation)?n.variation:Math.max(0,o),m=Q(i*.52+(n.energy||0)*.28+a*.2),h=Q(a*.58+Math.max(0,o)*.42),g=Q(Math.max(s,c*.92,l*.82)),_=Number.isFinite(n.percussive)?n.percussive:g,ee=Q(Math.max(g,n.beat||0,n.kick||0,(n.snare||0)*.82)),v=Q(Math.max(0,(m-.48)*1.72)+h*.36+g*.22);H.macro=W(H.macro,m,t,.36,2),H.dynamicLift=W(H.dynamicLift,h,t,.18,1),H.impact=W(H.impact,g,t,.025,.36),H.climax=W(H.climax,v,t,.16,1.08);let te=Q((i*.52+(n.energy||0)*.28+a*.2)*r),y=Q((a*.58+Math.max(0,o)*.42)*r),b=Q(Math.max(s,c*.92,l*.82)*r),x=Q((u*.38+(n.mid||0)*.34+(n.energy||0)*.18+y*.1)*r),S=e.audioEnvelope?.sustain||0,ne=Q((i*.58+S*.27+d*.15)*r),re=Q(Math.max(0,(te-.48)*1.72)+y*.36+b*.22),ie=ee*(.12+.24*_),ae=l*.72+b*.34,oe=re*.48+p*.2+y*.14,se=Q(Math.max(ie,ae,oe)),ce=Q(b*.62+l*.48+re*.18);V.macro=W(V.macro,te,t,.42,2.4),V.dynamicLift=W(V.dynamicLift,y,t,.2,1.15),V.impact=W(V.impact,b,t,.025,.38),V.transient=W(V.transient,ee*r,t,.008,.16),V.downbeatPulse=W(V.downbeatPulse,l*r,t,.006,.28),V.brightness=W(V.brightness,f*r,t,.1,.52),V.percussive=W(V.percussive,_*r,t,.025,.3),V.variation=W(V.variation,p*r,t,.22,1.45),V.flow=W(V.flow,x,t,.18,.95),V.atmosphere=W(V.atmosphere,ne,t,1.15,4.2),V.camera=W(V.camera,ce,t,.035,.42),V.climax=W(V.climax,re,t,.18,1.25),V.trail=W(V.trail,se,t,.025,.42),V.bass=W(V.bass,(n.bass||0)*r,t,.07,.42),V.mid=W(V.mid,(n.mid||0)*r,t,.1,.58),V.high=W(V.high,(n.high||0)*r,t,.06,.32)}function Oe(){if(!Te()||z)return!1;let e=xe;if(!e)return!1;let t=Q(C.转场灵敏度),n=c.lerp(.68,.3,t),r=c.lerp(.78,.46,t),i=c.lerp(.7,.34,t),a=c.lerp(.66,.28,t),o=c.lerp(.78,.38,t),s=c.lerp(.72,.34,t),l=Number.isFinite(e.bar)?e.bar:-1,u=!!(e.isDownbeat||(e.downbeat||0)>.55)&&l!==Se;u&&(Se=l);let d=H.impact>o||(e.beat||0)>s,f=d&&!Ce;Ce=d;let p=H.dynamicLift>n||H.macro>r||H.climax>i||V.variation>a,m=u&&p,h=f&&(H.dynamicLift>n*.86||H.macro>r*.9||H.climax>i*.82||V.variation>a*.86);return m||h}let G=[],K=new Float32Array(b*4),ke=new Float32Array(b),Ae=new Float32Array(b),je=new Float32Array(b),Me=new Float32Array(b),Ne=new Float32Array(b),q=Array.from({length:4},()=>new Float32Array(b)),Pe=Array.from({length:4},()=>new Float32Array(b)),Fe=new Float32Array(b),Ie=new Float32Array(b),Le=new Float32Array(b),Re=new Float32Array(b),J=new Float32Array(b*3),ze=new Float32Array(b*3),Be=new Float32Array(x*3),Ve=new Float32Array(x*3),He=new Float32Array(x*2),Ue=new Float32Array(x),We=new Float32Array(x),Ge=new Float32Array(S*3),Ke=new Float32Array(S*3),qe=new Float32Array(S*2),Je=new Float32Array(S),Ye=new Float32Array(S),Xe=Array.from({length:4},()=>new Float32Array(x*3)),Ze=Array.from({length:4},()=>new Float32Array(x)),Qe=Array.from({length:4},()=>new Float32Array(S*3)),$e=Array.from({length:4},()=>new Float32Array(S)),et=Array.from({length:4},()=>new Float32Array(54)),tt=Array.from({length:4},()=>new Float32Array(18)),nt=new Float32Array(54),rt=new Float32Array(54),it=new Float32Array(36),at=new Float32Array(18),ot=new Float32Array(18),st=new Float32Array(18),ct=new Uint32Array(360),lt=new Float32Array(360*3),ut=new Float32Array(360*4*3),dt=new Float32Array(360*4),ft=new Float32Array(360*4),pt=new Float32Array(360*4),mt=new Uint32Array(360*6);function ht(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}let Y=ht(12605985),X=(e=0,t=1)=>e+(t-e)*Y();function Z(){let e=Math.max(1e-6,Y()),t=Math.max(1e-6,Y());return Math.sqrt(-2*Math.log(e))*Math.cos(y*t)}function gt(e,t,n,r,i){let a=t*3;e[a]=n,e[a+1]=r,e[a+2]=i}function Q(e){return Math.max(0,Math.min(1,e))}function _t(e,t=0){return Number.isFinite(e)?e:t}function vt(e){return e=Q(e),e*e*(3-2*e)}function yt(e,t,n,r,i){return vt((e-t)/Math.max(1e-4,n-t))*(1-vt((e-r)/Math.max(1e-4,i-r)))}function bt(e,t=0){let n=oe[L][e],r=oe[z?R:L][e];return c.lerp(n,r,z?vt(t):0)}function xt(e,t){let n=t*4;if(K[n+3]>=ce[e])return null;let r=se[e],i=r[Math.min(r.length-1,Math.floor(K[n+2]*r.length))],a=K[n+1]*y,o=.16+.84*Q(K[n]**1.65);return{x:i[0]+Math.cos(a)*i[3]*o+Math.sin(a*2.7)*i[3]*.1,y:i[1]+Math.sin(a)*i[4]*o+Math.cos(a*2.1)*i[4]*.1,z:i[2]+(K[n+2]-.5)*i[5],vis:.78+.22*(1-o),role:i[6]}}function St(){for(let e=0;e<4;e++)G[e]=new Float32Array(b*3);for(let e=0;e<b;e++){let t=Y(),n=t<.61?0:t<.94?1:2;Me[e]=n;let r=e*4;K[r]=Y(),K[r+1]=Y(),K[r+2]=Y(),K[r+3]=Y(),ke[e]=Y()**2.25*.82+.15,Ae[e]=Y()**3.25*2.55+.4,je[e]=Y()>.9972?.76+Y()*.24:0,Ne[e]=Y();{let t=Y(),i,a,o,s;if(t<.68){let e=X(-1.38,1.34),t=e*154-18,c=31+e*45+Math.sin(e*1.72+.42)*20+Math.sin(e*3.15-1.2)*5.5,l=45+34.4*Math.cos(e*1.72+.42)+17.3*Math.cos(e*3.15-1.2),u=1/Math.max(1e-4,Math.hypot(154,l)),d=-l*u,f=154*u,p=Y()<.57?-1:1,m=6+7.5*(.5+.5*Math.sin(e*2.35+1.1)),h=(n===0?13.5:n===1?10:6.5)*(.62+.55*Y()),g=p*(m+Math.abs(Z())*h);i=t+d*g+Z()*2,a=c+f*g+Z()*1.6,o=-(n===0?X(205,310):n===1?X(120,205):X(62,118)),o+=Math.sin(e*2.1)*14;let _=.7+.18*Math.sin(e*2.27+K[r]*4)+.12*Math.sin(e*5.1+K[r+1]*2.4);s=Q((n===0?.83:n===1?.98:.7)*_)}else if(t<.83){let e=X(-1.45,1.25);i=e*172-30+Z()*22,a=27+e*48+Math.sin(e*1.55)*18+Z()*17,o=-X(275,430),s=(n===0?.34:.18)*(.55+.45*Y())}else if(t<.94)i=(Y()<.62?-1:1)*X(42,125)+Z()*9,a=X(-76,72)+Z()*5,o=-X(30,88),s=(n===2?.64:.18)*(.55+.45*Y());else{let e=X(0,y),t=Y()**1.8*18;i=-112+Math.cos(e)*t*1.8,a=54+Math.sin(e)*t*.72,o=-X(250,390),s=.24*(.55+.45*Y())}let c=Math.exp(-((i-48)*(i-48)*55e-5+(a+4)*(a+4)*.0017));s*=1-.72*c;let l=xt(0,e);l&&(i=l.x,a=l.y,o=l.z,s=Math.max(s,l.vis));let u=Math.exp(-((i+105)*(i+105)*.0015+(a-48)*(a-48)*.004)),d=(.5+.5*Math.sin(i*.115+a*.173))*(.72+.28*(.5+.5*Math.sin(i*.041-a*.087+1.7))),f=.5+.5*Math.sin(i*.028+a*.046+Math.sin(a*.018)*1.4);Pe[0][e]=l?l.role:u>.38?.66+.13*u:d>.925?.9+.08*K[r+1]:.035+.42*f,q[0][e]=Q(s),gt(G[0],e,i,a,o)}{let t=Y(),i,a,o,s;if(t<.72){let e=X(-1.34,1.34),t=e*164,c=-9+e*22+Math.sin(e*1.46+.55)*15+Math.sin(e*3.1-.8)*4.5,l=22+21.9*Math.cos(e*1.46+.55)+13.95*Math.cos(e*3.1-.8),u=1/Math.max(1e-4,Math.hypot(164,l)),d=-l*u,f=164*u,p=Y(),m;m=p<.46?-(10+Math.abs(Z())*(n===2?10:17)):p<.88?7+Math.abs(Z())*(n===2?8:14):Z()*4.2;let h=1+.3*Math.sin(e*2.2+1)+.16*Math.sin(e*5.35+K[r]*3);m*=h,i=t+d*m+Z()*2.5,a=c+f*m+Z()*2,o=-(n===0?X(190,315):n===1?X(95,195):X(42,108)),o+=Math.sin(e*2)*18;let g=Math.exp(-((m/5.6)**2));s=Q((n===0?.75:n===1?1:.82)*(.73+.27*Y())*(1-.58*g))}else if(t<.88){let e=X(-1.4,1.4);i=e*176+Z()*18,a=-7+e*23+Math.sin(e*1.4+.5)*16+Z()*26,o=-X(210,390),s=.24*(.55+.45*Y())}else t<.96?(i=X(-118,118),a=X(-68,68),o=-X(28,78),s=(n===2?.58:.14)*(.55+.45*Y())):(i=X(-185,185),a=X(-92,92),o=-X(320,500),s=.16*Y());let c=xt(1,e);c&&(i=c.x,a=c.y,o=c.z,s=Math.max(s,c.vis));let l=Math.exp(-(i*i*52e-5+(a+4)*(a+4)*.0038)),u=(.5+.5*Math.sin(i*.145-a*.213))*(.68+.32*(.5+.5*Math.sin(i*.052+a*.076-1.2))),d=.5+.5*Math.sin(i*.032-a*.064+Math.sin(i*.014)*1.6);Pe[1][e]=c?c.role:l>.52?.64+.16*l:u>.91?.9+.09*K[r]:.025+.44*d,q[1][e]=Q(s),gt(G[1],e,i,a,o)}{let t=Y(),i,a,o,s;if(t<.7){let e=Y()<.52?-1:1,t=X(-1.25,1.28),c=X(0,1),l=t*116,u=e*(30+26*(1-c)+8*Math.sin(t*1.45+e*.8))+e*(10*Math.sin(t*2.05+e*.9)+4*Math.sin(t*4.8)),d=(n===0?24:n===1?17:10)*(.58+.62*Y());i=u+e*Math.abs(Z())*d+Z()*3,a=l+Z()*(n===0?8.5:6),o=-(90+c*230+(n===0?70:n===1?20:-24)),o+=Math.sin(t*1.7+e)*18;let f=.58+.26*Math.sin(t*2.35+K[r]*5.2)+.16*Math.sin(t*6.1+e);s=Q((n===0?.72:n===1?1:.76)*f)}else if(t<.84){let e=X(0,y),t=Y()**2.2*28;i=-4+Math.cos(e)*t*1.15,a=7+Math.sin(e)*t*.62,o=-X(330,455),s=.34*(.62+.38*Y())}else t<.94?(i=(Y()<.5?-1:1)*X(45,120)+Z()*9,a=(Y()<.5?-1:1)*X(48,112)+Z()*8,o=-X(150,300),s=.3*(.55+.45*Y())):(i=(Y()<.5?-1:1)*X(66,130),a=X(-82,82),o=-X(30,80),s=(n===2?.5:.1)*Y());let c=Math.exp(-(i*i*.0015))*Math.exp(-(a*a*22e-5));o>-300&&(s*=1-.72*c);let l=xt(2,e);l&&(i=l.x,a=l.y,o=l.z,s=Math.max(s,l.vis));let u=(.5+.5*Math.sin(a*.155+Math.abs(i)*.092))*(.7+.3*(.5+.5*Math.sin(a*.052-i*.081+.6))),d=Math.exp(-(i*i*.0015+(a-7)*(a-7)*.0032))*vt((-o-260)/150),f=.5+.5*Math.sin(a*.036+Math.abs(i)*.051+Math.sin(a*.015)*1.2);Pe[2][e]=l?l.role:d>.38?.65+.16*d:u>.9?.88+.11*K[r]:.045+.43*f,q[2][e]=Q(s),gt(G[2],e,i,a,o)}{let t=Y(),i,a,o,s;if(t<.69){let e=X(.1,1.48),t=235+34*Math.sin(e*1.8+.4),c=-178+Math.cos(e)*t*1.1,l=-144+Math.sin(e)*t*.82,u=Math.cos(e),d=Math.sin(e),f=Y()<.58?1:-1,p=6+4*Math.sin(e*3.1),m=(n===0?18:n===1?13:8)*(.55+.65*Y()),h=f*(p+Math.abs(Z())*m);i=c+u*h+Z()*2,a=l+d*h+Z()*1.8,o=-(n===0?X(210,330):n===1?X(110,210):X(52,118)),o+=22*Math.sin(e*2.4);let g=.62+.23*Math.sin(e*4+K[r]*3.7)+.15*Math.sin(e*8.2+1);s=Q((n===0?.76:n===1?1:.72)*g)}else if(t<.81){let e=X(.02,1.56),t=270+X(-18,28);i=-178+Math.cos(e)*t*1.1+Z()*14,a=-144+Math.sin(e)*t*.82+Z()*11,o=-X(250,420),s=.22*(.5+.5*Y())}else if(t<.91){let e=X(0,y),t=Y()**1.9*16;i=94+Math.cos(e)*t*1.5,a=32+Math.sin(e)*t*.8,o=-X(300,445),s=.26*(.55+.45*Y())}else t<.97?(i=X(-150,150),a=X(-86,86),o=-X(360,540),s=.1*Y()):(i=X(-126,126),a=X(-75,75),o=-X(28,82),s=(n===2?.42:.08)*Y());let c=Math.exp(-((i-52)*(i-52)*45e-5+(a-5)*(a-5)*.001));s*=1-.38*c;let l=xt(3,e);l&&(i=l.x,a=l.y,o=l.z,s=Math.max(s,l.vis));let u=vt((-o-185)/210)*(.45+.55*vt((i+80)/180)),d=(.5+.5*Math.sin(i*.092+a*.137))*(.74+.26*(.5+.5*Math.sin(i*.037-a*.064+2.1))),f=.5+.5*Math.sin(i*.025+a*.052+Math.sin(i*.013)*1.4);Pe[3][e]=l?l.role:d>.95?.91+.07*K[r]:u>.58?.62+.16*u:.02+.38*f,q[3][e]=Q(s),gt(G[3],e,i,a,o)}}for(let e=0;e<b;e++)je[e]>0&&(q[0][e]*=.58,q[1][e]*=.92,q[2][e]*=.78,q[3][e]*=.52);let e=0,t=0;for(;e<360&&t<360*140;){let n=Math.floor(Y()*b);t++,!(Me[n]===0&&je[n]===0&&Y()<.95)&&(Me[n]===2&&je[n]===0&&Y()<.72||(ct[e++]=n))}for(let e=0;e<360;e++){let t=e*4,n=e*6;dt[t]=-1,dt[t+1]=1,dt[t+2]=-1,dt[t+3]=1,ft[t]=1,ft[t+1]=1,ft[t+2]=0,ft[t+3]=0,mt[n]=t,mt[n+1]=t+2,mt[n+2]=t+1,mt[n+3]=t+1,mt[n+4]=t+2,mt[n+5]=t+3}}function Ct(){w=new h({canvas:e.canvas,antialias:!0,alpha:!0,powerPreference:`high-performance`}),w.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),w.setSize(window.innerWidth,window.innerHeight,!1),w.setClearColor(0,0),w.outputColorSpace=a,w.toneMapping=4,w.toneMappingExposure=1.06,e.canvas&&(e.canvas.style.backgroundColor=`transparent`,e.canvas.style.zIndex=`1`),T=new d,T.fog=new i(131850,.00165),E=new u(60.5,window.innerWidth/window.innerHeight,.1,760),E.position.set(0,0,12),E.lookAt(0,0,-110),St(),J.set(G[0]),ze.set(G[1]),Fe.set(q[0]),Ie.set(q[1]),Le.set(Pe[0]),Re.set(Pe[1]),wt(),Mt(),Nt(),Pt(),Ft(),Ht()}function wt(){let e=new g;e.setAttribute(`position`,new m(new Float32Array(J),3)),e.setAttribute(`aFrom`,new m(J,3)),e.setAttribute(`aTo`,new m(ze,3)),e.setAttribute(`aSeed`,new m(K,4)),e.setAttribute(`aBright`,new m(ke,1)),e.setAttribute(`aSize`,new m(Ae,1)),e.setAttribute(`aHero`,new m(je,1)),e.setAttribute(`aLayer`,new m(Me,1)),e.setAttribute(`aBias`,new m(Ne,1)),e.setAttribute(`aFromVis`,new m(Fe,1)),e.setAttribute(`aToVis`,new m(Ie,1)),e.setAttribute(`aFromColorRole`,new m(Le,1)),e.setAttribute(`aToColorRole`,new m(Re,1)),e.setDrawRange(0,C.粒子数量),I=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTransitionActive:{value:0},uTime:{value:0},uType:{value:0},uStrength:{value:1},uWave:{value:1},uEnergy:{value:0},uPointScale:{value:1.72},uBrightness:{value:1.1},uSceneDensity:{value:1},uHeroStrength:{value:1},uNearStrength:{value:1},uDrift:{value:.15},uFlow:{value:.72},uScene:{value:0},uColorCoolShift:{value:0},uColorWarmShift:{value:0},uColorRoseShift:{value:0},uHueShift:{value:0},uColorSpread:{value:.03},uAudioMotion:{value:0},uAudioImpact:{value:0},uAudioBass:{value:0},uFlyby:{value:.58},uColorA:{value:new p(`#78a7ff`)},uColorB:{value:new p(`#edf5ff`)},uColorC:{value:new p(`#d3a6ff`)},uColorD:{value:new p(`#ffd29a`)}},vertexShader:`
        precision highp float;
        attribute vec3 aFrom;attribute vec3 aTo;attribute vec4 aSeed;attribute float aBright;attribute float aSize;attribute float aHero;attribute float aLayer;attribute float aBias;attribute float aFromVis;attribute float aToVis;attribute float aFromColorRole;attribute float aToColorRole;
        uniform float uProgress;uniform float uTransitionActive;uniform float uTime;uniform float uType;uniform float uStrength;uniform float uWave;uniform float uEnergy;uniform float uPointScale;uniform float uDrift;uniform float uHeroStrength;uniform float uNearStrength;uniform float uFlow;uniform float uScene;uniform float uAudioMotion;uniform float uAudioImpact;uniform float uAudioBass;uniform float uFlyby;
        varying float vAlpha;varying float vBright;varying float vSeed;varying float vHero;varying float vEnergy;varying float vLayer;varying float vVisibility;varying float vColorRole;varying float vSmallStar;varying float vFlare;
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
          vBright=aBright;vSeed=aSeed.z;vHero=aHero*uHeroStrength;vEnergy=uEnergy;vLayer=aLayer;vVisibility=visibility;
        }`,fragmentShader:`
        precision highp float;
        uniform float uBrightness;uniform float uSceneDensity;uniform float uColorCoolShift;uniform float uColorWarmShift;uniform float uColorRoseShift;uniform float uHueShift;uniform float uColorSpread;
        uniform vec3 uColorA;uniform vec3 uColorB;uniform vec3 uColorC;uniform vec3 uColorD;
        varying float vAlpha;varying float vBright;varying float vSeed;varying float vHero;varying float vEnergy;varying float vLayer;varying float vVisibility;varying float vColorRole;varying float vSmallStar;varying float vFlare;
        vec3 rgb2hsv(vec3 c){vec4 K=vec4(0.,-1./3.,2./3.,-1.);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y),e=1.e-10;return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x);}
        vec3 hsv2rgb(vec3 c){vec3 p=abs(fract(c.xxx+vec3(0.,2./3.,1./3.))*6.-3.);return c.z*mix(vec3(1.),clamp(p-1.,0.,1.),c.y);}
        void main(){
          vec2 q=gl_PointCoord-.5;
          float r=length(q);

          // Bloom-safe circular sprite. Never allow the square point quad to contribute.
          if(r>=.5)discard;
          float edgeMask=1.0-smoothstep(.42,.5,r);

          float core=smoothstep(.155,0.0,r);
          float haloStrength=.30+.20*clamp(vBright,0.0,1.0);
          float halo=smoothstep(.49,.055,r)*haloStrength;
          float spikeX=exp(-abs(q.y)*62.0)*smoothstep(.48,.06,abs(q.x));
          float spikeY=exp(-abs(q.x)*62.0)*smoothstep(.48,.06,abs(q.y));
          float cross=(spikeX+spikeY)*vFlare*.72;
          float densityKeep=smoothstep(1.0-clamp(uSceneDensity,0.0,1.0)-.10,1.0-clamp(uSceneDensity,0.0,1.0)+.10,vSeed);
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
          float emissiveEnvelope=smoothstep(.46,.06,r)*smoothstep(.28,.92,b)*.58;
          float coreHDR=core*(.24+.68*b);

          float populationChroma=max(oldW,hiiW);
          float chromaProtectedEmission=mix(1.0,.68,populationChroma);
          c*=uBrightness*(stellarEmission+mediumHDR+brightHDR+coreHDR+emissiveEnvelope+vHero*.06+cross*.72)*chromaProtectedEmission;
          c*=edgeMask;
          gl_FragColor=vec4(c,alpha);
        }`}),k=new r(e,I),k.frustumCulled=!1,T.add(k)}function Tt(){for(let e=0;e<x;e++)He[e*2]=e*.61803398875%1,He[e*2+1]=(e*.41421356237+.17)%1;for(let e=0;e<S;e++)qe[e*2]=e*.754877666%1,qe[e*2+1]=(e*.569840291+.31)%1;for(let e=0;e<18;e++)it[e*2]=(e*.38196601125+.13)%1,it[e*2+1]=(e*.70710678118+.41)%1,st[e]=.86+e%5*.12+(e%7==0?.34:0);for(let e=0;e<4;e++)for(let t=0;t<x;t++){let n=t*3,r=He[t*2],i=He[t*2+1],a=0,o=0,s=0,c=1;if(e===0)if(r<.54){let e=(i*2-1)*1.42;a=-78+e*82+Z()*20,o=18+e*31+Math.sin(e*2.2)*18+Z()*13,s=-X(260,520),c=.3+.5*r}else{a=X(-175,175),o=X(-100,100),s=-X(350,650);let e=Math.exp(-((a-45)*(a-45)*55e-5+(o+5)*(o+5)*.0015));c=(.12+.22*i)*(1-.7*e)}else if(e===1){let e=(r*2-1)*1.55,t=-7+e*18+Math.sin(e*1.55+.4)*11;a=e*170+Z()*18,o=t+Z()*(12+26*i),s=-X(190,500);let n=Math.exp(-(((o-t)/7.2)**2));c=(.46+.48*i)*(1-.58*n)}else if(e===2){let e=r<.5?-1:1,n=(i*2-1)*1.35;a=e*(46+34*(1-Math.abs(n))+Math.abs(Z())*24),o=n*120+Z()*8,s=-X(170,520),t%5==0?(a=X(-160,160),o=X(-100,100),s=-X(360,680),c=.16+.2*r):c=.34+.48*r}else if(r<.64){let e=.08+i*1.46,t=250+Z()*24;a=-182+Math.cos(e)*t*1.1+Z()*8,o=-145+Math.sin(e)*t*.82+Z()*7,s=-X(220,520),c=.34+.48*r}else a=X(-180,180),o=X(-105,105),s=-X(390,720),c=.1+.18*i;Xe[e][n]=a,Xe[e][n+1]=o,Xe[e][n+2]=s,Ze[e][t]=Q(c)}for(let e=0;e<4;e++)for(let t=0;t<S;t++){let n=t*3,r=qe[t*2],i=qe[t*2+1],a=0,o=0,s=0,c=1;if(e===0){let e=(r*2-1)*1.25;a=-92+e*92+Z()*25,o=10+e*28+Math.sin(e*2)*20+Z()*21,s=-X(150,370),c=.34+.45*i}else if(e===1){let e=(r*2-1)*1.45;a=e*168+Z()*24,o=-6+e*17+Math.sin(e*1.4)*12+Z()*(20+26*i),s=-X(105,330),c=.48+.42*i}else if(e===2)a=(r<.5?-1:1)*(52+Math.abs(Z())*(18+20*i)),o=(i*2-1)*116+Z()*12,s=-X(95,300),c=.42+.45*i;else{let e=.05+i*1.48,t=250+Z()*33;a=-182+Math.cos(e)*t*1.1+Z()*10,o=-145+Math.sin(e)*t*.82+Z()*9,s=-X(120,360),c=.32+.4*r}Qe[e][n]=a,Qe[e][n+1]=o,Qe[e][n+2]=s,$e[e][t]=Q(c)}let e=[[[-82,37,-115],[68,28,-150],[-22,-25,-92],[118,-18,-210],[-128,-46,-165],[22,61,-245],[93,67,-320],[-45,74,-285],[142,15,-360],[-104,8,-265],[35,-57,-205],[-8,18,-330],[78,-72,-290],[-148,63,-390],[126,78,-430],[-64,-72,-350],[12,-83,-430],[154,-54,-470]],[[-105,25,-120],[-68,-18,-105],[-20,16,-150],[32,-10,-118],[73,31,-155],[112,-27,-190],[145,14,-255],[-136,-45,-235],[-92,55,-280],[-44,-58,-210],[4,44,-240],[52,-48,-230],[96,62,-320],[132,-66,-360],[-8,-72,-290],[28,76,-350],[-158,35,-420],[158,49,-460]],[[-73,52,-110],[72,46,-118],[-61,-25,-95],[66,-18,-104],[-88,-62,-160],[91,-58,-175],[-49,79,-205],[54,83,-220],[-118,10,-250],[121,4,-270],[-34,18,-340],[29,7,-380],[-136,68,-390],[139,72,-420],[-102,-82,-340],[106,-84,-360],[-15,-74,-440],[18,68,-470]],[[-112,-18,-135],[-72,42,-165],[-28,67,-210],[18,76,-245],[61,69,-280],[102,48,-320],[132,16,-350],[145,-34,-390],[92,-66,-285],[42,-78,-230],[-8,-72,-200],[-53,-55,-185],[78,8,-460],[120,72,-510],[-132,58,-480],[28,27,-390],[-86,4,-340],[152,58,-570]]];for(let t=0;t<4;t++)for(let n=0;n<18;n++){let r=n*3,i=e[t][n];et[t][r]=i[0],et[t][r+1]=i[1],et[t][r+2]=i[2],tt[t][n]=n<8?.88:n<13?.58:.34}}function Et(e,t){Be.set(Xe[e]),Ve.set(Xe[t]),Ue.set(Ze[e]),We.set(Ze[t]),Ge.set(Qe[e]),Ke.set(Qe[t]),Je.set($e[e]),Ye.set($e[t]),nt.set(et[e]),rt.set(et[t]),at.set(tt[e]),ot.set(tt[t]),j&&(j.geometry.getAttribute(`aFrom`).needsUpdate=!0,j.geometry.getAttribute(`aTo`).needsUpdate=!0,j.geometry.getAttribute(`aFromVis`).needsUpdate=!0,j.geometry.getAttribute(`aToVis`).needsUpdate=!0),M&&(M.geometry.getAttribute(`aFrom`).needsUpdate=!0,M.geometry.getAttribute(`aTo`).needsUpdate=!0,M.geometry.getAttribute(`aFromVis`).needsUpdate=!0,M.geometry.getAttribute(`aToVis`).needsUpdate=!0),N&&(N.geometry.getAttribute(`aFrom`).needsUpdate=!0,N.geometry.getAttribute(`aTo`).needsUpdate=!0,N.geometry.getAttribute(`aFromVis`).needsUpdate=!0,N.geometry.getAttribute(`aToVis`).needsUpdate=!0)}function Dt(){let e=new g;e.setAttribute(`position`,new m(new Float32Array(x*3),3)),e.setAttribute(`aFrom`,new m(Be,3)),e.setAttribute(`aTo`,new m(Ve,3)),e.setAttribute(`aSeed`,new m(He,2)),e.setAttribute(`aFromVis`,new m(Ue,1)),e.setAttribute(`aToVis`,new m(We,1)),P=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTime:{value:0},uStrength:{value:.92},uHigh:{value:0},uCoolShift:{value:0},uWarmPresence:{value:.55},uAccentPresence:{value:.12},uColorA:{value:new p(`#8aa9ff`)},uColorB:{value:new p(`#f4f8ff`)},uColorWarm:{value:new p(`#f2bf72`)},uColorAccent:{value:new p(`#d85b68`)}},vertexShader:`
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
          float shape=smoothstep(.48,.04,r)*edgeMask;
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
        }`}),j=new r(e,P),j.frustumCulled=!1,j.renderOrder=-2,T.add(j)}function Ot(){let e=new g;e.setAttribute(`position`,new m(new Float32Array(S*3),3)),e.setAttribute(`aFrom`,new m(Ge,3)),e.setAttribute(`aTo`,new m(Ke,3)),e.setAttribute(`aSeed`,new m(qe,2)),e.setAttribute(`aFromVis`,new m(Je,1)),e.setAttribute(`aToVis`,new m(Ye,1)),me=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTime:{value:0},uStrength:{value:.52},uMid:{value:0},uBass:{value:0},uColorA:{value:new p(`#536fbd`)},uColorB:{value:new p(`#9c6cb8`)}},vertexShader:`
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
          float a=smoothstep(.47,.10,r)*edgeMask*vVis*uStrength*(.11+.15*vSeed);
          if(a<.006)discard;
          vec3 c=mix(uColorA,uColorB,vSeed)*(.27+.24*vSeed);
          // Dust is structural material, not a luminous emitter.
          c*=edgeMask;
          gl_FragColor=vec4(c,a*.88);
        }`}),M=new r(e,me),M.frustumCulled=!1,M.renderOrder=-1,T.add(M)}function kt(){let e=new g;e.setAttribute(`position`,new m(new Float32Array(54),3)),e.setAttribute(`aFrom`,new m(nt,3)),e.setAttribute(`aTo`,new m(rt,3)),e.setAttribute(`aSeed`,new m(it,2)),e.setAttribute(`aSize`,new m(st,1)),e.setAttribute(`aFromVis`,new m(at,1)),e.setAttribute(`aToVis`,new m(ot,1)),he=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uProgress:{value:0},uTime:{value:0},uStrength:{value:1.08},uImpact:{value:0},uClimax:{value:0},uHeroWarmShift:{value:0},uHeroRoseShift:{value:0},uColorCool:{value:new p(`#d9e9ff`)},uColorWarm:{value:new p(`#ffd49a`)}},vertexShader:`
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
          float sx=exp(-abs(q.x)*78.0)*smoothstep(.48,.02,abs(q.y));
          float sy=exp(-abs(q.y)*78.0)*smoothstep(.48,.02,abs(q.x));
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
        }`}),N=new r(e,he),N.frustumCulled=!1,N.renderOrder=25,T.add(N)}function At(){let e=new l(2,2);F=new f({transparent:!0,depthWrite:!1,depthTest:!1,blending:2,uniforms:{uTime:{value:0},uScene:{value:0},uStrength:{value:1},uBass:{value:0},uMacro:{value:0},uPaletteBlue:{value:0},uPaletteRose:{value:0},uPaletteCyan:{value:0},uPaletteGold:{value:0},uHueShift:{value:0},uColorSpread:{value:.03},uResolution:{value:new t(window.innerWidth,window.innerHeight)}},vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,fragmentShader:`
        precision highp float;
        uniform float uTime,uScene,uStrength,uBass,uMacro;
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
          vec2 warp=vec2(fbm(q*1.02+vec2(t,1.7)),fbm(q*1.08+vec2(-2.6,-t)))-.5;
          vec2 p=q+warp*(.24+.075*uBass);
          float nL=fbm(p*1.58+vec2(t*.45,-t*.22));
          float nM=fbm(p*3.65-vec2(t*.15,t*.09));
          float nH=fbm(p*8.1+vec2(-t*.08,t*.13));
          float fil=pow(clamp(ridge(fbm(p*4.15+vec2(2.3,-1.4))),0.,1.),3.0);

          float s0=1.10*ell(p,vec2(-1.10,.14),vec2(1.22,.74),.95)+.58*ell(p,vec2(-.52,-.42),vec2(.72,.48),1.35);
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
          float filament=shape*fil*(.42+.58*nM);
          float emission=shape*pow(max(0.,nM-.57),2.2)*2.8*(.45+.55*nH);
          float density=(body*.62+filament*.82+emission*.54)*uStrength*(.78+.28*uMacro+.18*uBass);

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
          c=mix(c,c*vec3(.66,.90,1.34),clamp(uPaletteBlue,0.0,1.0)*.38);
          c=mix(c,vec3(.38,.035,.24),clamp(uPaletteRose,0.0,1.0)*filament*.48);
          c=mix(c,vec3(.025,.34,.40),clamp(uPaletteCyan,0.0,1.0)*nM*.42);
          vec3 gasHSV=rgb2hsv(max(c,vec3(0.)));
          float spatialHue=(nL-.5)*uColorSpread*.16+(nM-.5)*uColorSpread*.09;
          gasHSV.x=fract(gasHSV.x+uHueShift+spatialHue);
          gasHSV.y=clamp(gasHSV.y*(1.+uColorSpread*.45),.10,1.);
          c=hsv2rgb(gasHSV);

          // Gas body stays sub-HDR; only compact emission ridges bloom.
          // Keep the broad body below bloom, but make coloured filaments
          // readable against black instead of disappearing behind star points.
          vec3 gasColor=c*density*(.76+filament*.16);
          float emissionMask=clamp(emission*.60,0.0,1.0);
          vec3 emissionColor=youngBlue*2.2;
          emissionColor=mix(emissionColor,vec3(1.10,.055,.12),clamp(hiiKnots*(.35*w0+.62*w1+1.0*w2+.18*w3),0.,1.));
          emissionColor=mix(emissionColor,vec3(1.06,.48,.08),clamp(oldGlow*(.45*w0+.55*w1+.36*w2+.12*w3),0.,1.));
          emissionColor=mix(emissionColor,vec3(.08,.78,1.08),clamp(uPaletteCyan,0.0,1.0)*.34);
          emissionColor=mix(emissionColor,vec3(1.08,.52,.12),clamp(uPaletteGold,0.0,1.0)*.34);
          emissionColor=mix(emissionColor,vec3(1.00,.12,.68),clamp(uPaletteRose,0.0,1.0)*.32);
          vec3 hdrEmission=emissionColor*emissionMask*(1.08+2.45*emissionMask)*(0.72+0.28*uMacro);

          float alpha=clamp(density*.22,0.,.22);
          if(alpha<.003 && emissionMask<.012)discard;
          gl_FragColor=vec4(gasColor+hdrEmission, max(alpha,emissionMask*.10));
        }`}),fe=new n(e,F),fe.frustumCulled=!1,fe.renderOrder=-6,T.add(fe)}function jt(){let e=new l(2,2);ge=new f({transparent:!0,depthWrite:!1,depthTest:!1,blending:1,uniforms:{uTime:{value:0},uScene:{value:0},uStrength:{value:.46},uMid:{value:0},uResolution:{value:new t(window.innerWidth,window.innerHeight)}},vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,fragmentShader:`
        precision highp float;
        uniform float uTime,uScene,uStrength,uMid;uniform vec2 uResolution;
        float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*45758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        float fbm(vec2 p){float v=0.,a=.55;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.04+vec2(1.3,-1.7);a*=.46;}return v;}
        float sw(float x,float c){return 1.-smoothstep(.58,1.08,abs(x-c));}
        void main(){
          vec2 q=gl_FragCoord.xy/max(uResolution,vec2(1.));q=(q-.5)*vec2(uResolution.x/max(uResolution.y,1.),1.);
          float w0=sw(uScene,0.),w1=sw(uScene,1.),w2=sw(uScene,2.),w3=sw(uScene,3.);
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
        }`}),pe=new n(e,ge),pe.frustumCulled=!1,pe.renderOrder=20,T.add(pe)}function Mt(){Tt(),Et(L,R),At(),Dt(),Ot(),jt(),kt(),k&&(k.renderOrder=4)}function Nt(){let e=new g,t=new m(ut,3);t.setUsage(s),e.setAttribute(`position`,t);let r=new m(pt,1);r.setUsage(s),e.setAttribute(`aEnergy`,r),e.setAttribute(`aSide`,new m(dt,1)),e.setAttribute(`aFade`,new m(ft,1)),e.setIndex(new m(mt,1)),_e=new f({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,uniforms:{uOpacity:{value:0},uColorA:{value:new p(`#86b8ff`)},uColorB:{value:new p(`#ffafd1`)}},vertexShader:`precision highp float;attribute float aSide;attribute float aFade;attribute float aEnergy;varying float vSide;varying float vFade;varying float vEnergy;void main(){vSide=aSide;vFade=aFade;vEnergy=aEnergy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`precision highp float;uniform float uOpacity;uniform vec3 uColorA;uniform vec3 uColorB;varying float vSide;varying float vFade;varying float vEnergy;void main(){float longitudinal=pow(clamp(vFade,0.0,1.0),1.12);float edge=.38+.62*pow(clamp(1.0-abs(vSide),0.0,1.0),.48);float core=pow(clamp(1.0-abs(vSide)*1.35,0.0,1.0),2.0);float e=clamp(vEnergy,0.0,1.0);float a=uOpacity*longitudinal*(edge*.76+core*.24)*e*(.44+.56*e);if(a<.009)discard;vec3 c=mix(uColorA,uColorB,smoothstep(.38,.94,e));c*=.60+1.10*e+core*.30;gl_FragColor=vec4(c,a);}`}),de=new n(e,_e),de.frustumCulled=!1,T.add(de)}function Pt(){A=new n(new l(2,2),new f({transparent:!0,depthWrite:!1,depthTest:!1,blending:2,uniforms:{uTime:{value:0},uStrength:{value:.34},uScene:{value:0},uTransition:{value:0},uResolution:{value:new t(window.innerWidth,window.innerHeight)}},vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,fragmentShader:`
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
        }`})),A.frustumCulled=!1,A.renderOrder=-10,T.add(A)}function Ft(){D=new ee(w),D.addPass(new _(T,E)),O=new te(new t(window.innerWidth,window.innerHeight),C.Bloom强度*.72,Math.max(.03,C.Bloom半径*.55),C.Bloom阈值),ue=new te(new t(window.innerWidth,window.innerHeight),C.Bloom强度*.38,Math.min(.82,C.Bloom半径*.95+.22),Math.max(.03,C.Bloom阈值-.14)),re(O),re(ue),D.addPass(O),D.addPass(ue),D.addPass(new v)}function It(){Object.assign(C,le),k&&k.geometry.setDrawRange(0,C.粒子数量),Kt()}function Lt(){let e=xe||{},t=Q(H.macro),n=Q(H.dynamicLift),r=Q(Math.max(H.impact,e.impact||0,(e.bassPunch||0)*.92)),i=Q(H.climax),a=Q(e.downbeat||0),o=Q(e.bassPunch||0),s=Number.isFinite(e.bpm)?e.bpm:0,l=s>0?Q((s-68)/112):.32,u=Q(t*.21+n*.2+r*.19+i*.18+V.variation*.12+a*.06+l*.04);U.duration=c.lerp(4.5,1.8,vt(u));let d=Q(t*.16+n*.17+r*.23+i*.2+V.variation*.1+V.percussive*.06+o*.05+a*.03);U.intensity=c.lerp(.78,1.38,vt(d)),U.propagation=c.lerp(.9,1.18,Q(n*.4+i*.34+V.variation*.26)),U.trail=c.lerp(.82,1.48,Q(r*.46+i*.38+n*.16)),U.energy=c.lerp(.86,1.42,Q(r*.34+i*.46+t*.2)),U.hero=c.lerp(.9,1.28,Q(i*.58+r*.42)),U.bloom=c.lerp(.88,1.32,Q(i*.6+r*.4)),U.camera=c.lerp(.84,1.3,Q(r*.48+a*.3+i*.22)),U.flyby=c.lerp(.88,1.34,Q(o*.48+r*.34+i*.18))}function Rt(){z||(R=(L+1)%G.length,ve=L%4,Lt(),J.set(G[L]),ze.set(G[R]),Fe.set(q[L]),Ie.set(q[R]),Le.set(Pe[L]),Re.set(Pe[R]),Et(L,R),k.geometry.getAttribute(`aFrom`).needsUpdate=!0,k.geometry.getAttribute(`aTo`).needsUpdate=!0,k.geometry.getAttribute(`aFromVis`).needsUpdate=!0,k.geometry.getAttribute(`aToVis`).needsUpdate=!0,k.geometry.getAttribute(`aFromColorRole`).needsUpdate=!0,k.geometry.getAttribute(`aToColorRole`).needsUpdate=!0,ye=B,z=!0,e.modeLabel=ie[ve],Ht())}function zt(){L=R,J.set(G[L]),ze.set(G[(L+1)%G.length]),Fe.set(q[L]),Ie.set(q[(L+1)%G.length]),Le.set(Pe[L]),Re.set(Pe[(L+1)%G.length]),Et(L,(L+1)%G.length),k.geometry.getAttribute(`aFrom`).needsUpdate=!0,k.geometry.getAttribute(`aTo`).needsUpdate=!0,k.geometry.getAttribute(`aFromVis`).needsUpdate=!0,k.geometry.getAttribute(`aToVis`).needsUpdate=!0,k.geometry.getAttribute(`aFromColorRole`).needsUpdate=!0,k.geometry.getAttribute(`aToColorRole`).needsUpdate=!0,I.uniforms.uProgress.value=0,I.uniforms.uTransitionActive.value=0,z=!1,e.sceneLabel=ne[L],e.modeLabel=`静止星场`,_e.uniforms.uOpacity.value=0}function Bt(e,t){let n=Q(e),r=vt((n-.035)/.865),i=yt(n,.03,.18,.68,.94),a=yt(n,0,.16,.72,.98),o=yt(n,.02,.2,.76,.96),s=vt((n-.22)/.62),c=yt(n,0,.18,.74,.96),l=yt(n,0,.12,.64,.92);return t===2&&(r=vt((n-.12)/.72),i=yt(n,.08,.2,.58,.88),a=yt(n,.16,.32,.67,.93),o=yt(n,.43,.58,.8,.97),l=yt(n,.04,.18,.52,.86)),t===3&&(r=vt((n-.16)/.72),i=yt(n,.24,.4,.65,.88),a=yt(n,.3,.48,.72,.94),o=yt(n,.6,.7,.86,.98),l=yt(n,.1,.28,.62,.9)),z&&(i*=U.trail,a*=U.energy,o*=U.hero,c*=U.bloom,l*=U.camera),{morph:r,trail:i,energy:a,heroPulse:o,color:s,bloom:c,cameraPulse:l}}function Vt(e,t,n,r,i){let a=e*3,o=e*4,s=K[o],l=K[o+1],u=K[o+2],d=K[o+3],f=0;f=n===0?.45+J[a]*.003+J[a+1]*.0014:n===1?.47+J[a]*.0046-J[a+1]*.001:n===2?.44+(-J[a+2]-30)*.00135+Math.hypot(J[a],J[a+1])*.0018:.5+Math.hypot(J[a],J[a+1])*.0048,f+=(Ne[e]-.5)*.2*C.传播强度*U.propagation;let p=c.lerp(.64,.33,c.clamp(C.传播强度*U.propagation,0,1.4)),m=vt(Q((t-f+p)/Math.max(.08,p))),h=Math.sin(Math.PI*m),g=J[a]+(ze[a]-J[a])*m,_=J[a+1]+(ze[a+1]-J[a+1])*m,ee=J[a+2]+(ze[a+2]-J[a+2])*m,v=Me[e],te=v<.5?.45:v<1.5?1:1.52*C.近景层强度,y=r*C.漂移速度;g+=Math.sin(y*.52+s*17+ee*.014)*(.14+.14*te),_+=Math.cos(y*.4+l*19+g*.018)*(.09+.1*te);let b=C.转场强度*U.intensity*te;if(n===0){let e=h*b*(.36+s*1.28)*(1+.0018*Math.abs(ee)),t=Math.cos(e),n=Math.sin(e),r=g;g=r*t-_*n,_=r*n+_*t;let i=1+h*b*(.08+u*.18);g*=i,_*=i,ee+=h*b*(8+d*18)}else if(n===1)_+=(s>=.5?1:-1)*h*b*(4.5+30*l*l),g+=Math.sin(u*28+m*7)*h*b*3.1,ee+=Math.cos(d*16+m*4)*h*b*6;else if(n===2){let e=.55+c.clamp(C.Flyby强度*U.flyby,0,1.7)*.78,t=1+h*b*(.34+s*.82)*e;g*=t,_*=t,ee+=h*b*(18+62*l)*e;let n=Math.max(.001,Math.hypot(g,_));g+=g/n*h*b*(1.5+6.5*u)*e,_+=_/n*h*b*(1.5+6.5*u)*e}else{let e=Math.max(.12,1-h*b*(.38+.26*s));g*=e,_*=e;let t=h*b*(l-.5)*1.65,n=Math.cos(t),r=Math.sin(t),i=g;g=i*n-_*r,_=i*r+_*n,ee+=h*b*(9+25*u)}i[0]=g,i[1]=_,i[2]=ee}let $=[0,0,0];function Ht(){let e=z?Q((B-ye)/Math.max(.01,U.duration)):0;for(let t=0;t<360;t++){Vt(ct[t],e,ve,B,$);let n=t*3;lt[n]=$[0],lt[n+1]=$[1],lt[n+2]=$[2]}}function Ut(e,t){let n=Te()?V.trail*C.运动响应:0,r=bt(`trail`,t.color??e),i=Q(V.transient*(.55+V.percussive*.35)),a=Q(Math.max(V.downbeatPulse,V.impact*.82)),s=Q(Math.max(V.variation*.72,V.climax*.8,t.trail||0)),l=c.clamp((.07+i*.16+a*.25+s*.31)*(.72+r*.28),.06,.8),u=Math.round(360*l);de.geometry.setDrawRange(0,u*6);let d=Q(Math.max(t.trail,n)*C.拖尾强度*1.6*r);if(_e.uniforms.uOpacity.value=d,d<.004)return;let f=new o;E.getWorldDirection(f);for(let n=0;n<360;n++){let r=ct[n],o=n*4;if(r>=C.粒子数量){pt[o]=pt[o+1]=pt[o+2]=pt[o+3]=0;continue}Vt(r,e,ve,B,$);let l=n*3,u=lt[l],d=lt[l+1],p=lt[l+2],m=$[0]-u,h=$[1]-d,g=$[2]-p,_=Math.max(.001,Math.hypot($[0],$[1])),ee=z?0:Q(i*.52+a*.86+s*.38),v=.055+i*.08+a*.18+s*.13,te=c.lerp(m,$[0]/_*v,ee),y=c.lerp(h,$[1]/_*v,ee),b=c.lerp(g,v*.22,ee),x=Math.hypot(te,y,b)+1e-5,S=1+je[r]*C.Hero强度*1.55,ne=Me[r]>1.5?1.2:1,re=(je[r]>0?1.3:Me[r]>1.5?.72:.48)*(.42+Math.max(t.energy,V.impact*.72+V.climax*.38)*.92),ie=(4.2+Math.min(16,x*24))*.48*C.拖尾长度*re*S*ne,ae=$[0]-te*ie,oe=$[1]-y*ie,se=$[2]-b*ie,ce=$[0]-ae,le=$[1]-oe,w=$[2]-se,T=le*f.z-w*f.y,D=w*f.x-ce*f.z,O=ce*f.y-le*f.x,ue=Math.hypot(T,D,O)||1;T/=ue,D/=ue,O/=ue;let k=Math.hypot($[0]-E.position.x,$[1]-E.position.y,$[2]-E.position.z),de=c.clamp(k/120,.9,1.45),A=(.055+.088*Math.min(1,x*8))*1.45*de*C.拖尾宽度*S*(Me[r]>1.5?1.12:1),j=n*12;ut[j]=$[0]-T*A,ut[j+1]=$[1]-D*A,ut[j+2]=$[2]-O*A,ut[j+3]=$[0]+T*A,ut[j+4]=$[1]+D*A,ut[j+5]=$[2]+O*A,ut[j+6]=ae-T*A*.18,ut[j+7]=oe-D*A*.18,ut[j+8]=se-O*A*.18,ut[j+9]=ae+T*A*.18,ut[j+10]=oe+D*A*.18,ut[j+11]=se+O*A*.18;let M=c.lerp(Fe[r],Ie[r],Q(e)),N=Q((.18+x*5.5+je[r]*.58)*M);pt[o]=N,pt[o+1]=N,pt[o+2]=N*.4,pt[o+3]=N*.4;let fe=.12;lt[l]=c.lerp(u,$[0],fe),lt[l+1]=c.lerp(d,$[1],fe),lt[l+2]=c.lerp(p,$[2],fe)}de.geometry.getAttribute(`position`).needsUpdate=!0,de.geometry.getAttribute(`aEnergy`).needsUpdate=!0}function Wt(e){let t=[[`#2457d6`,`#d6ebff`,`#df5b55`,`#efb75d`],[`#296ee8`,`#bceeff`,`#dc6674`,`#ffd078`],[`#426be0`,`#e5f3ff`,`#ef6049`,`#ffc06a`],[`#204fbd`,`#a9dcff`,`#c65b65`,`#d5a45f`]],n=t[L],r=t[R],i=n.map(e=>new p(e));if(z){let t=vt(e);for(let e=0;e<4;e++)i[e].lerp(new p(r[e]),t)}let a=Te()?C.光色响应:0,o=Q((V.brightness*.58+V.high*.24)*a),s=Q((V.percussive*.44+V.transient*.28)*a),c=Q((V.variation*.62+V.mid*.18+V.climax*.2)*a),l=Q((V.downbeatPulse*.68+V.bass*.18)*a);i[0].lerp(new p(`#19d5e8`),o*.72),i[1].lerp(new p(`#c6b7ff`),c*.42).lerp(new p(`#dcffff`),o*.34),i[2].lerp(new p(`#ff2ca8`),c*.68).lerp(new p(`#ff7a32`),s*.38),i[3].lerp(new p(`#ff8a18`),Math.max(s*.38,l*.78)),I.uniforms.uColorA.value.copy(i[0]),I.uniforms.uColorB.value.copy(i[1]),I.uniforms.uColorC.value.copy(i[2]),I.uniforms.uColorD.value.copy(i[3]);let u=Q((V.brightness*.54+V.high*.24)*a),d=Q((V.mid*.24+V.variation*.46)*a),f=Q((V.downbeatPulse*.7+V.bass*.16)*a);_e.uniforms.uColorA.value.copy(i[0]).lerp(new p(`#75e7ff`),u*.44),_e.uniforms.uColorB.value.copy(i[2]).lerp(new p(`#ed5dbb`),d*.38).lerp(new p(`#ffc568`),f*.46)}function Gt(e){let t=e*.001,n=Math.min(.05,Math.max(0,t-be));be=t,B+=n,De(n);let r=0,i={morph:0,trail:0,energy:0,heroPulse:0,color:0,bloom:0,cameraPulse:0};z?(r=(B-ye)/Math.max(.1,U.duration),r>=1?(zt(),r=0):(i=Bt(r,ve),I.uniforms.uTransitionActive.value=1,I.uniforms.uProgress.value=i.morph,I.uniforms.uType.value=ve,Ut(i.morph,i))):(I.uniforms.uTransitionActive.value=0,I.uniforms.uProgress.value=0,Te()&&V.trail>.035?Ut(0,{trail:V.trail,energy:Math.max(V.impact,V.climax*.65)}):_e.uniforms.uOpacity.value=0,Te()&&Oe()&&Rt());let a=Te(),o=a?C.运动响应:0,s=a?Q(V.transient*(.72+V.percussive*.38)):0,l=a?Q(V.downbeatPulse*(.82+V.percussive*.3)):0,u=a?Q(V.variation*.62+V.dynamicLift*.38):0,d=a?Q(V.macro*.42+V.impact*.38+s*.58+l*.38+V.climax*.38):0,f=z?i.color:0,m=e=>bt(e,f);I.uniforms.uTime.value=B,I.uniforms.uStrength.value=C.转场强度*(z?U.intensity:1),I.uniforms.uWave.value=C.传播强度*(z?U.propagation:1),I.uniforms.uSceneDensity.value=Q(m(`stars`)),I.uniforms.uPointScale.value=C.星点尺寸*(.85+.15*m(`stars`))*(1+d*.06+s*.075*o);let h=a?1+V.macro*.07*C.光色响应+V.impact*.045*C.光色响应+s*.13*C.光色响应+l*.08*C.光色响应:1;I.uniforms.uBrightness.value=C.星点亮度*_t(h,1),I.uniforms.uHeroStrength.value=C.Hero强度*(.3+i.heroPulse*.1+V.climax*.08+V.impact*.05+s*.06+l*.22),I.uniforms.uNearStrength.value=C.近景层强度*m(`near`)*(1+V.macro*.24*o+V.impact*.12*o),I.uniforms.uDrift.value=C.漂移速度*(1+V.flow*.58*o),I.uniforms.uFlow.value=C.星河流动*(.72+V.flow*1.36*o+V.dynamicLift*.26*o+u*.34*o),I.uniforms.uScene.value=z?c.lerp(L,R,i.color):L,I.uniforms.uEnergy.value=Q(Math.max(i.energy,d)),I.uniforms.uAudioMotion.value=V.flow*o,I.uniforms.uAudioImpact.value=V.impact*o,I.uniforms.uAudioBass.value=V.bass*o,I.uniforms.uFlyby.value=C.Flyby强度*(z?U.flyby:1);let g=a?(V.climax*.38+V.impact*.18+s*.28+l*.58)*C.光色响应:0,_=a?1+V.macro*.09*C.光色响应+V.climax*.045*C.光色响应:1,ee=c.clamp(C.Bloom强度*m(`bloom`)*_t(_,1)*(1+i.bloom*.08+g*.1),0,1);O.strength=c.clamp(ee*.92,0,1),O.radius=c.clamp(.025+C.Bloom半径*.52+.025*i.bloom,.02,.48),O.threshold=c.clamp(C.Bloom阈值-.035*i.bloom-.018*V.climax*C.光色响应,.03,1),ue.strength=c.clamp(ee*.58,0,.72),ue.radius=c.clamp(.22+C.Bloom半径*.82+.04*i.bloom+.018*V.climax*C.光色响应,.18,.88),ue.threshold=c.clamp(C.Bloom阈值-.16-.045*i.bloom-.025*V.climax*C.光色响应,.02,.88);let v=a?C.光色响应:0,te=Q((.06+V.brightness*.52+V.high*.22+V.atmosphere*.1-V.climax*.06)*v*m(`cool`)),b=Q((V.bass*.1+l*.58+V.climax*.22)*v*m(`warm`)),x=Q((V.mid*.22+V.variation*.42+u*.18+V.climax*.14)*v*m(`rose`)),S=a?(V.brightness*.024+V.high*.012+V.mid*.008+V.variation*.018-l*.016)*v:0,ne=a?Q(.05+V.variation*.28+V.percussive*.1+V.brightness*.06)*Math.min(1,v):.035;I.uniforms.uColorCoolShift.value=te,I.uniforms.uColorWarmShift.value=b,I.uniforms.uColorRoseShift.value=x,I.uniforms.uHueShift.value=S,I.uniforms.uColorSpread.value=ne,Wt(i.color);let re=z?i.morph:0,ie=z?c.lerp(L,R,i.color):L,oe=L,se=z?R:L,ce=f,le=e=>c.lerp(e[oe],e[se],ce),w=le([.55,1,.68,.74]),T=le([.38,1,.66,.46]),k=le([.72,.54,.78,.38]),de=le([.56,.74,1.12,.58]);if(P){P.uniforms.uProgress.value=re,P.uniforms.uTime.value=B;let e=a?.9+V.macro*.025*C.光色响应+V.brightness*.1+s*.16:1;P.uniforms.uStrength.value=C.微星强度*m(`micro`)*w*_t(e,1),P.uniforms.uHigh.value=a?Q(V.high*.55+V.brightness*.25+s*.45)*C.运动响应:0,P.uniforms.uCoolShift.value=Q((V.brightness*.52+V.high*.18+V.atmosphere*.06)*v),P.uniforms.uWarmPresence.value=Q(le([.58,.76,1,.28])*(.88+l*.1+V.mid*.08)),P.uniforms.uAccentPresence.value=Q(le([.1,.17,.34,.05])*(.82+u*.18+V.variation*.12)),P.uniforms.uColorA.value.copy(I.uniforms.uColorA.value).multiplyScalar(.86),P.uniforms.uColorB.value.copy(I.uniforms.uColorB.value),P.uniforms.uColorWarm.value.copy(I.uniforms.uColorD.value),P.uniforms.uColorAccent.value.copy(I.uniforms.uColorC.value).lerp(I.uniforms.uColorD.value,.18)}if(me&&(me.uniforms.uProgress.value=re,me.uniforms.uTime.value=B,me.uniforms.uStrength.value=C.星尘强度*m(`dust`)*T*(a?.76+V.macro*.13+V.mid*.18+u*.2:1),me.uniforms.uMid.value=a?V.mid*C.运动响应:0,me.uniforms.uBass.value=a?V.bass*C.运动响应:0,me.uniforms.uColorA.value.copy(I.uniforms.uColorA.value).lerp(new p(`#536fbd`),.62),me.uniforms.uColorB.value.copy(I.uniforms.uColorC.value).lerp(new p(`#8a659e`),.55)),he){he.uniforms.uProgress.value=re,he.uniforms.uTime.value=B;let e=a?.92+V.macro*.055*C.光色响应+V.climax*.075*C.光色响应+V.impact*.055*C.光色响应:1;he.uniforms.uStrength.value=C.恒星强度*C.Hero强度*m(`hero`)*de*_t(e,1),he.uniforms.uImpact.value=Q(Math.max(V.impact*.72,s*.48,l,i.heroPulse*.72)),he.uniforms.uClimax.value=Q(V.climax),he.uniforms.uHeroWarmShift.value=Q((l*.72+V.bass*.12+V.climax*.26)*v),he.uniforms.uHeroRoseShift.value=Q((V.mid*.18+V.variation*.38+u*.18+V.climax*.16)*v),he.uniforms.uColorCool.value.copy(I.uniforms.uColorB.value),he.uniforms.uColorWarm.value.copy(I.uniforms.uColorD.value)}if(F){F.uniforms.uTime.value=B,F.uniforms.uScene.value=ie;let e=a?.76+V.atmosphere*.14+V.bass*.055*C.光色响应+V.macro*.055*C.光色响应+V.climax*.025*C.光色响应:1;F.uniforms.uStrength.value=C.星云强度*m(`nebula`)*k*_t(e,1),F.uniforms.uBass.value=a?V.bass:0,F.uniforms.uMacro.value=a?V.macro:0,F.uniforms.uPaletteBlue.value=Q((.14+V.brightness*.38+V.atmosphere*.22)*v),F.uniforms.uPaletteRose.value=Q((V.mid*.24+V.variation*.46+u*.18+V.climax*.18)*v),F.uniforms.uPaletteCyan.value=Q((V.brightness*.34+V.high*.2+V.flow*.16)*v),F.uniforms.uPaletteGold.value=Q((V.downbeatPulse*.62+V.bass*.16+V.climax*.18)*v),F.uniforms.uHueShift.value=S*.72,F.uniforms.uColorSpread.value=ne*1.18}ge&&(ge.uniforms.uTime.value=B,ge.uniforms.uScene.value=ie,ge.uniforms.uStrength.value=.42+.18*C.星尘强度,ge.uniforms.uMid.value=a?V.mid:0);let j=C.镜头动势,M=i.cameraPulse,N=ae[L],fe=ae[z?R:L],pe=z?vt(i.color):0,xe=c.lerp(N.fov,fe.fov,pe),Se=0,Ce=0,H=c.lerp(N.lookX,fe.lookX,pe),W=c.lerp(N.lookY,fe.lookY,pe),Ee=c.lerp(N.depth,fe.depth,pe);z&&(ve===0&&(xe-=M*2.8*j,Se=1.9*M*j,Ce=.014*M*j),ve===1&&(xe+=M*3.4*j,Se=1.6*M*j,Ce=-.026*M*j),ve===2&&(xe+=M*8.2*j,Se=5.2*M*C.转场强度*U.intensity*j*(.45+.8*C.Flyby强度*U.flyby),Ce=Math.sin(r*y)*.03*M*j),ve===3&&(xe-=M*4.6*j,Se=2.3*M*j,Ce=.02*M*j));let G=a?Math.max(V.camera*.74,s*.34,l*.92)*C.镜头响应:0;xe+=V.macro*1.5*C.镜头响应+G*1.8,Se+=G*1.2,Ce+=G*.004*Math.sin(B*2.7),E.fov=c.lerp(E.fov,xe,Math.min(1,n*2.6)),E.updateProjectionMatrix();let K=c.lerp(L,z?R:L,pe),ke=Math.sin(B*.031+K*.9)*.85,Ae=Math.cos(B*.026+K*.7)*.42;if(E.position.x=ke+M*Math.sin(r*y)*.72*j+G*.12*Math.sin(B*1.7),E.position.y=Ae+M*Math.cos(r*Math.PI)*.3*j+G*.07*Math.cos(B*2),E.position.z=12-Se,H+=Math.sin(B*.018+K)*1.25,W+=Math.cos(B*.015+K*.8)*.55,E.lookAt(H,W,Ee),we=c.lerp(we,Ce,Math.min(1,n*3.6)),E.rotation.z=we,A){let e=A.material.uniforms;e.uTime.value=B;let t=a?.52+V.atmosphere*.88+V.climax*.18:1;e.uStrength.value=C.空间氛围*t,e.uScene.value=z?c.lerp(L,R,i.color):L,e.uTransition.value=Q(Math.max(i.energy,V.macro*.42+V.climax*.45))}D.render()}function Kt(){if(Ee(),R=(L+1)%G.length,ve=L%4,z=!1,ye=B,we=0,k){J.set(G[L]),ze.set(G[R]),Fe.set(q[L]),Ie.set(q[R]),Le.set(Pe[L]),Re.set(Pe[R]);let e=k.geometry;e.getAttribute(`aFrom`).needsUpdate=!0,e.getAttribute(`aTo`).needsUpdate=!0,e.getAttribute(`aFromVis`).needsUpdate=!0,e.getAttribute(`aToVis`).needsUpdate=!0,e.getAttribute(`aFromColorRole`).needsUpdate=!0,e.getAttribute(`aToColorRole`).needsUpdate=!0,I.uniforms.uProgress.value=0,I.uniforms.uTransitionActive.value=0}if(Et(L,R),_e&&(_e.uniforms.uOpacity.value=0),Ht(),E){let e=ae[L];E.fov=e.fov,E.position.set(0,0,12),E.lookAt(e.lookX,e.lookY,e.depth),E.rotation.z=0,E.updateProjectionMatrix()}e.sceneLabel=ne[L],e.modeLabel=`静止星场`}function qt(){T&&(T.traverse(e=>{if(e.geometry&&typeof e.geometry.dispose==`function`&&e.geometry.dispose(),e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)if(e){for(let t of Object.keys(e)){let n=e[t];n&&n.isTexture&&typeof n.dispose==`function`&&n.dispose()}typeof e.dispose==`function`&&e.dispose()}}}),T.clear()),O?.dispose&&O.dispose(),ue?.dispose&&ue.dispose(),D?.dispose&&D.dispose(),w?.dispose&&w.dispose(),w=T=E=D=O=ue=null,k=de=A=null,j=M=N=fe=pe=null,P=me=he=F=ge=null,I=_e=null}function Jt(e=window.innerWidth,t=window.innerHeight){!E||!w||(E.aspect=e/t,E.updateProjectionMatrix(),w.setSize(e,t,!1),D&&D.setSize(e,t),A&&A.material.uniforms.uResolution.value.set(e,t),F&&F.uniforms.uResolution.value.set(e,t),ge&&ge.uniforms.uResolution.value.set(e,t))}return Ct(),e.sceneLabel=ne[L],e.modeLabel=`静止星场`,{renderFrame:Gt,onResize:Jt,resetSettings:It,resetRuntimeState:Kt,resetMusicalDirector:Ee,disposeRuntime:qt,get renderer(){return w},get scene(){return T},get camera(){return E},get composer(){return D},get tightBloomPass(){return O},get wideBloomPass(){return ue},get starPoints(){return k}}}var se=class{constructor(e,t={}){this.canvas=e;let n={转场强度:1,传播强度:.95,镜头动势:1,粒子数量:36e3,星点尺寸:2.5,星点亮度:1.6,Hero强度:1.6,近景层强度:1.2,漂移速度:.5,星河流动:.78,空间氛围:.38,Flyby强度:.58,微星强度:.82,星尘强度:.72,星云强度:1,恒星强度:1.08,拖尾强度:.32,拖尾长度:.65,拖尾宽度:.8,Bloom强度:.2,Bloom半径:.16,Bloom阈值:.51,音频驱动:!0,音乐响应强度:1,转场灵敏度:.75,运动响应:1,光色响应:1,镜头响应:.72};this.defaultSettings=Object.freeze({...n}),this.settings={...n,...ae(t)},this.runtime=null,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.tightBloomPass=null,this.wideBloomPass=null,this.gui=null,this.guiContainer=null,this.guiVisible=!1,this.settingsButton=null,this.hasAudioData=!1,this.audioAnimation=null,this.audioEnvelope=null,this.sceneLabel=``,this.modeLabel=``,this.init()}init(){try{return this.setupThreeJS(),this.setupPostProcessing(),this.setupGUI(),this.setupSettingsButton(),console.log(`✅ Animation67 初始化成功`),!0}catch(e){throw console.error(`❌ Animation67 初始化失败:`,e),e}}setupThreeJS(){this.runtime||(this.runtime=oe(this),this.scene=this.runtime.scene,this.camera=this.runtime.camera,this.renderer=this.runtime.renderer,this.composer=this.runtime.composer,this.tightBloomPass=this.runtime.tightBloomPass,this.wideBloomPass=this.runtime.wideBloomPass)}setupPostProcessing(){if(!this.composer)throw Error(`Animation67 composer 初始化失败`)}setupGUI(){this.createGUIContainer();let t={resetParams:()=>{this.runtime?.resetSettings(),this.hasAudioData=!1,this.audioAnimation=null,this.audioEnvelope=null,this.updateGUIControllers()}};this.gui=new e({title:`67. Musical Cosmic Starfield`,container:this.guiContainer});let n=this.gui.addFolder(`运动导演`);n.add(this.settings,`转场强度`,0,1.5,.05),n.add(this.settings,`传播强度`,0,1.2,.05),n.add(this.settings,`镜头动势`,0,1.5,.05);let r=this.gui.addFolder(`空间层级`);r.add(this.settings,`粒子数量`,8e3,5e4,1e3).onChange(e=>{let t=this.runtime?.starPoints;t&&t.geometry.setDrawRange(0,Math.round(e))}),r.add(this.settings,`星点尺寸`,.8,3.2,.05),r.add(this.settings,`星点亮度`,.6,2.2,.05),r.add(this.settings,`Hero强度`,0,2.6,.05),r.add(this.settings,`近景层强度`,0,2.2,.05),r.add(this.settings,`漂移速度`,0,.65,.01);let i=this.gui.addFolder(`空间生命感`);i.add(this.settings,`星河流动`,0,1.4,.02),i.add(this.settings,`空间氛围`,0,.8,.02),i.add(this.settings,`Flyby强度`,0,1.3,.02);let a=this.gui.addFolder(`天体层级`);a.add(this.settings,`微星强度`,0,1.6,.02),a.add(this.settings,`星尘强度`,0,1.2,.02),a.add(this.settings,`星云强度`,0,1.2,.02),a.add(this.settings,`恒星强度`,0,1.8,.02);let o=this.gui.addFolder(`丝带拖尾`);o.add(this.settings,`拖尾强度`,0,.8,.02),o.add(this.settings,`拖尾长度`,.3,1.4,.05),o.add(this.settings,`拖尾宽度`,.4,1.4,.05);let s=this.gui.addFolder(`光效`);s.add(this.settings,`Bloom强度`,0,1,.01),s.add(this.settings,`Bloom半径`,0,.6,.01),s.add(this.settings,`Bloom阈值`,.05,1,.01);let c=this.gui.addFolder(`音频导演`);c.add(this.settings,`音频驱动`),c.add(this.settings,`音乐响应强度`,0,1.5,.05),c.add(this.settings,`转场灵敏度`,0,1,.05),c.add(this.settings,`运动响应`,0,1.5,.05),c.add(this.settings,`光色响应`,0,1.5,.05),c.add(this.settings,`镜头响应`,0,1.2,.05),this.gui.add(t,`resetParams`).name(`重置参数`),n.open(),r.open(),this.gui.hide()}createGUIContainer(){this.guiContainer=x(`Animation67-gui-container`),S(`Animation67-gui-container`),document.body.appendChild(this.guiContainer)}setupSettingsButton(){this.settingsButton=y(`Animation67-settings-button`),this.settingsButton.addEventListener(`click`,()=>{this.guiVisible=!this.guiVisible,this.guiVisible?this.gui?.show():this.gui?.hide()}),document.body.appendChild(this.settingsButton)}updateGUIControllers(){if(!this.gui)return;let e=t=>{t.controllers?.forEach(e=>e.updateDisplay()),t.folders&&Object.values(t.folders).forEach(e)};e(this.gui)}updateWithAudioData(e,t){let n=e?.audioFeature?.animation;if(n){this.audioAnimation=n,this.audioEnvelope=e.audioFeature?.envelope||e.envelope||null,this.hasAudioData=e.isPlaying!==!1;return}if(e?.energy){let t=e.beat||{};this.audioAnimation={bass:e.energy.low||0,mid:e.energy.mid||0,high:e.energy.high||0,energy:e.energy.average||e.energy.overall||0,relativeEnergy:e.energy.average||e.energy.overall||0,sectionEnergy:e.energy.average||e.energy.overall||0,energyTrend:0,motion:((e.energy.low||0)+(e.energy.mid||0))*.5,smoothness:.5,impact:Math.max(t.kick||0,t.downbeat||0),bassPunch:t.kick||0,downbeat:t.downbeat||0,beat:Math.max(t.kick||0,t.snare||0),isDownbeat:(t.downbeat||0)>.5,bar:t.bar??-1,bpm:t.bpm||0},this.hasAudioData=!0;return}this.hasAudioData=!1}render(){if(!(!this.runtime||!this.renderer||!this.scene||!this.camera))try{this.runtime.renderFrame(performance.now())}catch(e){console.error(`Animation67 渲染错误:`,e)}}onWindowResize(){this.runtime&&this.runtime.onResize(window.innerWidth,window.innerHeight)}resetState(){this.hasAudioData=!1,this.audioAnimation=null,this.audioEnvelope=null,this.runtime?.resetRuntimeState()}updateSettings(e){if(!e)return;let t=ae(e);if(Object.assign(this.settings,t),t.粒子数量!==void 0){let e=this.runtime?.starPoints;e&&e.geometry.setDrawRange(0,t.粒子数量)}this.updateGUIControllers()}getAudioDataForUI(){let e=this.audioAnimation||{};return{bass:e.bass||0,mid:e.mid||0,high:e.high||0}}dispose(){b(this.settingsButton,this.guiContainer,this.gui),this.gui=null,this.guiContainer=null,this.settingsButton=null,this.runtime&&=(this.runtime.disposeRuntime(),null),this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.tightBloomPass=null,this.wideBloomPass=null,this.audioAnimation=null,this.audioEnvelope=null,console.log(`✅ Animation67 资源已清理`)}};export{se as default};