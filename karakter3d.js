/* ===== KARAKTER & ADEGAN 3D — Petualangan Sistem Gerak =====
   Memakai Three.js r128 (dimuat di index.html).
   Satu renderer WebGL dipakai bersama; hasilnya disalin ke canvas 2D tiap adegan,
   jadi banyak adegan di layar tidak menghabiskan "konteks WebGL" milik browser.
   Jika WebGL/Three.js tidak tersedia, K3D.ok = false dan script.js memakai gambar SVG lama. */
(function(){
'use strict';
if(!window.THREE){window.K3D={ok:false};return;}
const T=THREE,MU=T.MathUtils,PI=Math.PI;
let R;
try{R=new T.WebGLRenderer({antialias:true,alpha:true});}catch(e){window.K3D={ok:false};return;}
R.outputEncoding=T.sRGBEncoding;R.setClearColor(0x000000,0);
/* Mode hemat: HP dengan RAM <=4 GB atau prosesor <=4 inti memakai resolusi dan fps lebih rendah */
const COARSE=matchMedia('(pointer:coarse)').matches;
const LOW=(navigator.deviceMemory&&navigator.deviceMemory<=4)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||(COARSE&&Math.min(screen.width,screen.height)<420);
const DPR=Math.min(window.devicePixelRatio||1,LOW?1.25:(COARSE?1.75:2));R.setPixelRatio(DPR);
const REDUCE=matchMedia('(prefers-reduced-motion:reduce)').matches;
const NOHOVER=matchMedia('(hover:none)').matches;
/* SAKLAR: true = karakter di kartu quest bergerak terus tanpa berhenti. false = bergerak hanya saat kursor menyentuh kartu (lalu diselesaikan dulu). */
const TERUS=true;

/* ---------- alat bantu ---------- */
const C=h=>new T.Color(h).convertSRGBToLinear();
const MC={};
const SHARED=new Set();
const mt=(h,o)=>{const k=h+JSON.stringify(o||{});if(!MC[k]){MC[k]=new T.MeshStandardMaterial(Object.assign({color:C(h),roughness:.6,metalness:0},o||{}));SHARED.add(MC[k]);}return MC[k];};
const GC={};const G=(k,f)=>{if(!GC[k]){GC[k]=f();SHARED.add(GC[k]);}return GC[k];};
const mesh=(g,m,x,y,z,p)=>{const o=new T.Mesh(g,m);o.position.set(x||0,y||0,z||0);if(p)p.add(o);return o;};
const SP=()=>G('sp',()=>new T.SphereGeometry(1,28,20));
const ell=(m,rx,ry,rz,x,y,z,p)=>{const o=mesh(SP(),m,x,y,z,p);o.scale.set(rx,ry,rz);return o;};
/* kapsul (r128 belum punya CapsuleGeometry): ujung atas/bawah bulat, panjang = jarak antar pusat ujung */
const capGeo=(r,len)=>G('c'+r+'_'+len,()=>{const p=[];
  for(let i=0;i<=8;i++){const a=-PI/2+i/8*PI/2;p.push(new T.Vector2(Math.cos(a)*r,Math.sin(a)*r-len/2));}
  for(let i=1;i<=8;i++){const a=i/8*PI/2;p.push(new T.Vector2(Math.cos(a)*r,Math.sin(a)*r+len/2));}
  return new T.LatheGeometry(p,20);});
const lerpAng=(a,b,t)=>{const d=(((b-a+PI)%(2*PI))+2*PI)%(2*PI)-PI;return a+d*t;};
const ease=x=>x*x*(3-2*x);
const near0=p=>{const m=((p%(2*PI))+2*PI)%(2*PI);return Math.min(m,2*PI-m)<.14;};   /* fase hampir di awal/akhir satu siklus */
let BT;
function blob(r){if(!BT){const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,2,32,32,32);
  g.addColorStop(0,'rgba(20,30,60,.5)');g.addColorStop(1,'rgba(20,30,60,0)');x.fillStyle=g;x.fillRect(0,0,64,64);BT=new T.CanvasTexture(c);BT.encoding=T.sRGBEncoding;}
  const m=new T.Mesh(new T.PlaneGeometry(2*r,2*r),new T.MeshBasicMaterial({map:BT,transparent:true,depthWrite:false}));m.rotation.x=-PI/2;m.position.y=.02;return m;}
function teks(t,w,h,bg,fg,fs){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');
  x.fillStyle=bg;x.beginPath();x.moveTo(24,0);x.arcTo(w,0,w,h,24);x.arcTo(w,h,0,h,24);x.arcTo(0,h,0,0,24);x.arcTo(0,0,w,0,24);x.fill();
  x.fillStyle=fg;x.font='800 '+fs+'px "Baloo 2",Nunito,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(t,w/2,h/2+4);
  const tx=new T.CanvasTexture(c);tx.encoding=T.sRGBEncoding;tx.anisotropy=4;return tx;}
const papan=(t,w,h,bg,fg,fs,pw,ph)=>{const m=new T.Mesh(new T.PlaneGeometry(pw,ph),new T.MeshBasicMaterial({map:teks(t,w,h,bg,fg,fs),transparent:true}));return m;};

function lights(sc){
  sc.add(new T.HemisphereLight(0xffffff,C('#9fc58a'),.62));
  const d=new T.DirectionalLight(0xfff0d8,.68);d.position.set(4,9,7);sc.add(d);
  const r=new T.DirectionalLight(C('#9fd8ff'),.3);r.position.set(-6,4,-6);sc.add(r);}
function mkScene(hw,hh,cy,el){const sc=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,100);lights(sc);
  return {sc,cam,fit(a){const tf=Math.tan(cam.fov*PI/360),d=Math.max(hh/tf,hw/(tf*a));cam.position.set(0,cy+d*(el||.2),d);cam.lookAt(0,cy,0);cam.updateProjectionMatrix();}};}
function pulau(p,r){
  mesh(new T.CylinderGeometry(r,r,.3,56),mt('#7fd35a',{roughness:.9}),0,-.15,0,p);
  mesh(new T.CylinderGeometry(r*.96,r*.5,.8,56),mt('#a2734a',{roughness:.95}),0,-.7,0,p);
  mesh(new T.CylinderGeometry(r*.5,r*.2,.5,32),mt('#8a5f3c',{roughness:.95}),0,-1.35,0,p);}
function pohon(p,x,z,s){const g=new T.Group();g.position.set(x,0,z);g.scale.setScalar(s);p.add(g);
  mesh(G('tr',()=>new T.CylinderGeometry(.1,.14,.7,8)),mt('#8b5a2b'),0,.35,0,g);
  ell(mt('#3fae49',{flatShading:true}),.6,.62,.6,0,1.05,0,g);ell(mt('#58c95a',{flatShading:true}),.42,.42,.42,0,1.6,0,g);return g;}
function bunga(p,x,z,c){mesh(G('bs',()=>new T.CylinderGeometry(.015,.015,.22,5)),mt('#3fae49'),x,.11,z,p);ell(mt(c,{roughness:.5}),.07,.07,.07,x,.24,z,p);}
function awan(p,x,y,z,s){const g=new T.Group();g.position.set(x,y,z);g.scale.setScalar(s);p.add(g);const m=mt('#ffffff',{roughness:1});
  ell(m,.6,.4,.4,0,0,0,g);ell(m,.45,.35,.35,.55,-.05,0,g);ell(m,.4,.3,.3,-.5,-.08,0,g);return g;}

/* ---------- ANAK (karakter 3D) ---------- */
const POSE={
  diri:{f:2.2,A:0,K:0,S:.04,E:.12,L:0,B:0,hop:0,one:0,up:0,wave:0,H:0,th:0,thr:0,flex:0,circ:0},
  lambai:{wave:1},
  jalan:{f:6.5,A:.5,K:.85,S:.5,E:.3,L:.05,B:.04},
  lari:{f:11,A:.9,K:1.5,S:.9,E:1.4,L:.28,B:.1},
  berdiri1:{f:0,one:1,up:.55},
  lompat:{f:6.2,hop:1,one:1,H:.55,up:.85},
  loncat:{f:6.2,hop:1,one:0,H:.7,up:1.3},
  sorak:{f:6.5,hop:1,one:0,H:.28,up:2.6},
  mikir:{f:0,th:1},lempar:{f:4.5,thr:1,S:0},kuat:{f:3,flex:1,E:0,up:0},putar:{f:5,circ:1,S:0}};
const pz=n=>Object.assign({},POSE.diri,POSE[n]||{});

function anak(o){
  o=Object.assign({kulit:'#f2c6a0',rambut:'#2a1a14',baju:'#ff6b6b',bawah:'#2b4a9e',sepatu:'#ffffff',gadis:false,seragam:false,tas:null,rok:false},o);
  const S=mt(o.kulit,{roughness:.55}),B=mt(o.baju,{roughness:.7}),W=mt('#ffffff',{roughness:.6}),D=mt('#1d2b53',{roughness:.4}),
    BW=mt(o.bawah,{roughness:.75}),HR=mt(o.rambut,{roughness:.45}),SH=mt(o.sepatu,{roughness:.5}),PK=mt('#ff8f8f',{roughness:1,transparent:true,opacity:.5}),
    IR=mt('#4a2c17',{roughness:.3}),RD=mt('#d62839',{roughness:.5});
  const g=new T.Group(),J={};
  const hips=J.hips=new T.Group();hips.position.y=.96;g.add(hips);
  const tor=J.tor=new T.Group();hips.add(tor);
  mesh(capGeo(.27,.36),B,0,.36,0,tor).scale.set(1,1,.9);
  mesh(G('kr',()=>new T.TorusGeometry(.17,.045,8,20)),o.seragam?RD:W,0,.8,0,tor).rotation.x=PI/2;
  mesh(G('lh',()=>new T.CylinderGeometry(.1,.11,.18,12)),S,0,.84,0,tor);
  if(!o.seragam){const gs=mesh(G('gs',()=>new T.TorusGeometry(.275,.03,6,28)),W,0,.42,0,tor);gs.rotation.x=PI/2;gs.scale.set(1,.9,1);}
  if(o.tas){const TS=mt(o.tas,{roughness:.6});ell(TS,.25,.33,.14,0,.42,-.3,tor);
    [-1,1].forEach(s=>mesh(G('tl',()=>new T.BoxGeometry(.06,.52,.04)),TS,s*.14,.5,.215,tor));}
  /* kepala */
  const hd=J.head=new T.Group();hd.position.y=1.3;tor.add(hd);
  ell(S,.5,.475,.475,0,0,0,hd);
  [-1,1].forEach(s=>ell(S,.09,.11,.07,s*.5,0,0,hd));
  const mata=x=>{const e=new T.Group();e.position.set(x,.03,.41);hd.add(e);
    ell(W,.115,.135,.065,0,0,0,e);ell(IR,.075,.095,.05,0,-.005,.04,e);ell(D,.04,.055,.04,0,-.005,.09,e);ell(W,.022,.022,.02,.03,.04,.11,e);return e;};
  J.mL=mata(-.17);J.mR=mata(.17);
  J.br=[];[-1,1].forEach(s=>{const b=ell(HR,.085,.018,.02,s*.17,.2,.43,hd);b.rotation.z=-s*.12;J.br.push(b);ell(PK,.085,.055,.025,s*.3,-.1,.36,hd).rotation.y=s*.55;});
  ell(S,.045,.04,.04,0,-.07,.465,hd);
  const sm=mesh(G('sm',()=>new T.TorusGeometry(.1,.016,8,20,PI)),mt('#7a1f2b',{roughness:.5}),0,-.1,.44,hd);sm.rotation.z=PI;J.sm=sm;
  J.mo=ell(mt('#7a1f2b',{roughness:.5}),.075,.055,.03,0,-.17,.44,hd);J.mo.visible=false;
  /* rambut */
  const cap=new T.Mesh(G('cap',()=>new T.SphereGeometry(1,32,16,0,PI*2,0,PI*.46)),HR);cap.scale.set(.535,.52,.535);cap.rotation.x=-.32;hd.add(cap);
  if(o.gadis){
    ell(HR,.4,.11,.18,0,.34,.33,hd);ell(HR,.56,.62,.4,0,-.1,-.17,hd);
    [-1,1].forEach(s=>{ell(HR,.16,.16,.16,s*.55,.12,-.05,hd);mesh(capGeo(.1,.4),HR,s*.58,-.18,-.05,hd).rotation.z=s*.12;});
    const kn=ell(RD,.07,.07,.07,.3,.46,.12,hd);kn.userData.k=1;
    const c1=mesh(G('co',()=>new T.ConeGeometry(.11,.2,12)),RD,.4,.46,.12,hd);c1.rotation.z=-PI/2;
    const c2=mesh(G('co',()=>new T.ConeGeometry(.11,.2,12)),RD,.2,.46,.12,hd);c2.rotation.z=PI/2;
  }else{
    [[-.22,.32,.38],[0,.35,.41],[.22,.32,.38]].forEach(q=>ell(HR,.14,.09,.1,q[0],q[1],q[2],hd));ell(HR,.12,.12,.12,0,.55,0,hd);}
  /* lengan */
  const lengan=s=>{const p=new T.Group();p.position.set(s*.33,.64,0);tor.add(p);
    ell(B,.115,.115,.115,0,0,0,p);mesh(capGeo(.075,.30),S,0,-.15,0,p);
    mesh(G('sl',()=>new T.CylinderGeometry(.095,.105,.17,12)),B,0,-.08,0,p);
    const e=new T.Group();e.position.y=-.30;p.add(e);mesh(capGeo(.066,.26),S,0,-.13,0,e);ell(S,.085,.085,.085,0,-.28,0,e);return [p,e];};
  [J.sL,J.eL]=lengan(-1);[J.sR,J.eR]=lengan(1);
  /* kaki */
  const kaki=s=>{const h=new T.Group();h.position.set(s*.14,0,0);hips.add(h);
    mesh(capGeo(.105,.40),S,0,-.20,0,h);
    if(!o.rok)mesh(G('sh',()=>new T.CylinderGeometry(.135,.15,.30,16)),BW,0,-.12,0,h);
    const k=new T.Group();k.position.y=-.40;h.add(k);mesh(capGeo(.09,.40),S,0,-.20,0,k);
    mesh(G('sk',()=>new T.CylinderGeometry(.098,.098,.22,12)),W,0,-.29,0,k);
    const f=new T.Group();f.position.y=-.40;k.add(f);
    ell(SH,.12,.085,.2,0,-.07,.07,f);ell(D,.125,.035,.205,0,-.13,.07,f);return [h,k,f];};
  [J.hL,J.kL,J.fL]=kaki(-1);[J.hR,J.kR,J.fR]=kaki(1);
  if(o.rok)mesh(new T.CylinderGeometry(.26,.46,.34,32,1,true),new T.MeshStandardMaterial({color:C(o.bawah),roughness:.8,side:T.DoubleSide}),0,0,0,hips);
  else mesh(G('pl',()=>new T.CylinderGeometry(.27,.27,.2,16)),BW,0,.02,0,hips);
  const sh=blob(.62);

  /* --- animasi --- */
  let tg=pz('diri'),ph=Math.random()*6,tmp=0,bk='diri',ws=1,bt=2,bl=0,lift=0,fc='senyum';const st=pz('diri');
  const c={g,J,st,shadow:sh,
    pose(n,w){tg=pz(n);if(w)ws=w;return c;},face(n){fc=n;return c;},
    temp(n,d,back){tmp=d;bk=back;tg=pz(n);},
    setPhase(p){ph=p;},phase(){return ph;},get lift(){return lift;},
    upd(dt,t,look,still){
      if(tmp>0){tmp-=dt;if(tmp<=0)tg=pz(bk);}
      const k=1-Math.exp(-dt*7);for(const q in tg)st[q]+=(tg[q]-st[q])*k;
      if(!still)ph+=dt*st.f;
      const sn=Math.sin(ph),cs=Math.cos(ph),air=Math.max(0,sn),gr=Math.max(0,-sn),hp=st.hop,one=st.one;
      let tL=st.A*sn,tR=-st.A*sn,kL=st.K*Math.max(0,cs),kR=st.K*Math.max(0,-cs);
      const hT=-.55*air,hK=.9*air+.5*gr;
      tL=MU.lerp(tL,hT,hp);kL=MU.lerp(kL,hK,hp);tR=MU.lerp(tR,hT,hp);kR=MU.lerp(kR,hK,hp);
      tR=MU.lerp(tR,-.95,one);kR=MU.lerp(kR,1.4,one);
      J.hL.rotation.x=-tL;J.hR.rotation.x=-tR;J.kL.rotation.x=kL;J.kR.rotation.x=kR;
      J.fL.rotation.x=-(J.hL.rotation.x+J.kL.rotation.x)*.85;J.fR.rotation.x=-(J.hR.rotation.x+J.kR.rotation.x)*.85;
      lift=st.B*Math.abs(cs)*(1-hp)+hp*(st.H*air-.06*gr);
      hips.position.y=.96+lift;
      const ue=st.up*MU.lerp(1,.35+.65*air,hp);
      J.sL.rotation.x=st.S*sn*(1-hp);J.sR.rotation.x=-st.S*sn*(1-hp);
      J.sL.rotation.z=-(.1+ue);J.sR.rotation.z=.1+ue;
      J.eL.rotation.x=-st.E;J.eR.rotation.x=-st.E;J.eL.rotation.z=0;J.eR.rotation.z=0;
      if(st.wave>.01){const sa=ws>0?J.sR:J.sL,ea=ws>0?J.eR:J.eL;
        sa.rotation.z=MU.lerp(sa.rotation.z,ws*2.4,st.wave);sa.rotation.x*=(1-st.wave);ea.rotation.x=MU.lerp(ea.rotation.x,0,st.wave);ea.rotation.z=st.wave*ws*Math.sin(t*9)*.5;}
      if(st.flex>.01){const f=st.flex;J.sL.rotation.z=MU.lerp(J.sL.rotation.z,-1.5,f);J.sR.rotation.z=MU.lerp(J.sR.rotation.z,1.5,f);
        J.eL.rotation.x*=1-f;J.eR.rotation.x*=1-f;J.eL.rotation.z=-1.7*f*(1+.05*Math.sin(t*6));J.eR.rotation.z=1.7*f*(1+.05*Math.sin(t*6));}
      if(st.th>.01){const f=st.th;J.sR.rotation.x=MU.lerp(J.sR.rotation.x,-1.35,f);J.sR.rotation.z=MU.lerp(J.sR.rotation.z,.12,f);J.eR.rotation.x=MU.lerp(J.eR.rotation.x,-1.9,f);
        J.sL.rotation.x=MU.lerp(J.sL.rotation.x,-.7,f);J.eL.rotation.x=MU.lerp(J.eL.rotation.x,-1.7,f);}
      if(st.thr>.01){const f=st.thr,u=Math.sin(ph)*.5+.5;J.sR.rotation.x=MU.lerp(J.sR.rotation.x,MU.lerp(.9,-3.0,u),f);J.eR.rotation.x=MU.lerp(J.eR.rotation.x,MU.lerp(-1.7,-.2,u),f);
        J.sL.rotation.x=MU.lerp(J.sL.rotation.x,-.5,f);tor.rotation.y=(.5-u)*.7*f;}else tor.rotation.y=0;
      if(st.circ>.01){const f=st.circ;J.sL.rotation.x=MU.lerp(J.sL.rotation.x,-ph,f);J.sR.rotation.x=MU.lerp(J.sR.rotation.x,-ph,f);J.sL.rotation.z=MU.lerp(J.sL.rotation.z,-.3,f);J.sR.rotation.z=MU.lerp(J.sR.rotation.z,.3,f);
        J.eL.rotation.x*=1-f;J.eR.rotation.x*=1-f;}
      tor.rotation.x=st.L;tor.scale.y=1+.012*Math.sin(t*2.4);
      const q=Math.min(1,dt*6);
      hd.rotation.y+=(Math.sin(t*.9)*.12*(1-st.circ)+Math.sin(ph*.5)*.5*st.circ-hd.rotation.y)*q;hd.rotation.x+=(-st.L*.5-hd.rotation.x)*q;hd.rotation.z=.14*st.th;
      bt-=dt;if(bt<0){bl=.14;bt=2.5+Math.random()*3;}if(bl>0)bl-=dt;
      const es=bl>0?.1:1;J.mL.scale.y=es;J.mR.scale.y=es;
      J.mo.visible=fc==='senang'||(hp>.5&&air>.25);
      const bg=fc==='bingung';J.sm.rotation.z=bg?0:PI;J.sm.position.y=bg?-.21:-.1;J.br[0].rotation.z=bg?.42:.12;J.br[1].rotation.z=bg?-.42:-.12;J.br[0].position.y=J.br[1].position.y=bg?.23:.2;
      sh.scale.setScalar(1/(1+Math.max(0,lift)*1.5));}};
  g.add(sh);sh.position.y=.02;
  return c;}

/* ---------- ULI SI ULAT (maskot 3D) ---------- */
function uli(){
  const Y=mt('#ffd400',{roughness:.38}),Yd=mt('#e3a900',{roughness:.5}),RD=mt('#ff6b6b',{roughness:.4}),W=mt('#ffffff',{roughness:.3}),D=mt('#1d2b53',{roughness:.3}),PK=mt('#ff8fa3',{roughness:.9});
  const g=new T.Group(),body=new T.Group();g.add(body);
  const segs=[[.64,.62],[1.14,.66],[1.64,.68]].map(s=>ell(Y,s[1],.52,s[1],0,s[0],0,body));
  [[.9,.545],[1.4,.58]].forEach(q=>{const t=mesh(G('gr',()=>new T.TorusGeometry(1,.06,6,32)),Yd,0,q[0],0,body);t.rotation.x=PI/2;t.scale.set(q[1],q[1],.6);});
  [-1,1].forEach(s=>{ell(RD,.28,.16,.38,s*.3,.14,.14,g);ell(W,.29,.05,.39,s*.3,.04,.14,g);});
  const lengan=s=>{const p=new T.Group();p.position.set(s*.63,1.28,.08);body.add(p);mesh(capGeo(.1,.28),Y,0,-.17,0,p);ell(Y,.13,.13,.13,0,-.38,0,p);p.rotation.z=s*.35;return p;};
  const aL=lengan(-1),aR=lengan(1);
  const hd=new T.Group();hd.position.y=2.42;body.add(hd);ell(Y,.84,.8,.82,0,0,0,hd);
  const hb=mesh(G('hb',()=>new T.TorusGeometry(1,.11,10,40)),RD,0,.22,0,hd);hb.rotation.x=PI/2;hb.scale.set(.83,.81,1);
  ell(RD,.14,.14,.14,.8,.2,.2,hd);[-1,-2].forEach(a=>mesh(capGeo(.06,.35),RD,.95,.08,.12,hd).rotation.z=a);
  const mata=x=>{const e=new T.Group();e.position.set(x,.02,.66);hd.add(e);ell(W,.2,.25,.12,0,0,0,e);ell(D,.1,.14,.07,.015,-.02,.07,e);ell(W,.04,.04,.03,.045,.04,.12,e);return e;};
  const eL=mata(-.27),eR=mata(.27);
  [-1,1].forEach(s=>ell(PK,.13,.09,.03,s*.5,-.2,.6,hd).rotation.y=s*.7);
  const mo=ell(mt('#9b2335',{roughness:.5}),.21,.12,.07,0,-.28,.69,hd);ell(Y,.25,.09,.09,0,-.17,.7,hd);ell(PK,.1,.05,.03,0,-.34,.72,hd);
  const ant=s=>{const p=new T.Group();p.position.set(s*.3,.72,.08);hd.add(p);mesh(G('as',()=>new T.CylinderGeometry(.035,.045,.55,8)),D,0,.27,0,p);ell(RD,.14,.14,.14,0,.6,0,p);return p;};
  const nL=ant(-1),nR=ant(1);
  const sh=blob(.95);g.add(sh);
  let hy=0,vy=0,sq=0,tk=0,wv=0,bt=2,bl=0;
  const c={g,shadow:sh,
    hop(){if(hy<.02)vy=5.6;},talk(s){tk=s;},wave(b){wv=b?1:0;},
    upd(dt,t,look){
      if(hy>0||vy>0){vy-=15*dt;hy+=vy*dt;if(hy<=0){hy=0;if(vy<-2)sq=.28;vy=0;}}
      sq=Math.max(0,sq-dt);
      const sy=hy>0?1+Math.min(.08,Math.abs(vy)*.012):1-(sq>0?.14*Math.sin(sq/.28*PI):0)+.012*Math.sin(t*2.4),sx=1/Math.sqrt(sy);
      g.position.y=hy;body.scale.set(sx,sy,sx);sh.scale.setScalar(1/(1+hy*.9));sh.position.y=.02-hy;
      const q=Math.min(1,dt*6);
      hd.rotation.z=.06*Math.sin(t*1.6);hd.rotation.y+=(look.x*.5-hd.rotation.y)*q;hd.rotation.x+=(-look.y*.25-hd.rotation.x)*q;
      nR.rotation.z=-.42+.16*Math.sin(t*3.1)-vy*.03;nL.rotation.z=.42+.16*Math.sin(t*3.1+1.3)-vy*.03;
      segs.forEach((s,i)=>{s.position.x=.035*Math.sin(t*2.2+i*1.1);});
      aL.rotation.z=-(.35+.08*Math.sin(t*2));aR.rotation.z=wv?2.3+.45*Math.sin(t*7):.35+.08*Math.sin(t*2+1);
      bt-=dt;if(bt<0){bl=.14;bt=2.5+Math.random()*3;}if(bl>0)bl-=dt;eL.scale.y=eR.scale.y=bl>0?.1:1;
      let op=.8;if(tk>0){tk-=dt;op=.8+.6*Math.abs(Math.sin(t*14));}mo.scale.y=.12*op;}};
  return c;}

/* ---------- ADEGAN ---------- */
const KID={
  g:()=>anak({gadis:true,kulit:'#f2c6a0',rambut:'#2a1a14',baju:'#ff6b6b',bawah:'#2b4a9e'}),
  b:()=>anak({kulit:'#c98d62',rambut:'#1c120d',baju:'#3ec9a7',bawah:'#2b4a9e'})};
const SERAGAM=()=>[anak({gadis:true,rok:true,seragam:true,baju:'#ffffff',bawah:'#d62839',tas:'#4caf50',sepatu:'#2b2b33'}),
                   anak({seragam:true,kulit:'#c98d62',rambut:'#1c120d',baju:'#ffffff',bawah:'#d62839',tas:'#3b6fb6',sepatu:'#2b2b33'})];

function sHero(v,solo){
  const o=mkScene(solo?1.9:5.1,solo?2.4:3.4,solo?1.7:1.6);const sc=o.sc;
  const m=uli();m.g.userData.who='m';sc.add(m.g);
  let a,b;
  if(!solo){
    mesh(new T.CylinderGeometry(5.4,5.4,.2,64),mt('#8bdc5c',{roughness:.95}),0,-.1,0,sc);
    mesh(new T.CylinderGeometry(3.3,3.3,.21,64),mt('#a4e87a',{roughness:.95}),0,-.09,0,sc);
    [a,b]=SERAGAM();a.g.userData.who='a';b.g.userData.who='b';
    a.g.position.set(-3.3,0,.5);a.g.rotation.y=.55;b.g.position.set(3.3,0,.5);b.g.rotation.y=-.55;m.g.position.z=.3;
    a.pose('lambai',-1);b.pose('lambai',1);sc.add(a.g,b.g);
  }else{mesh(new T.CylinderGeometry(1.7,1.7,.16,48),mt('#8bdc5c',{roughness:.95}),0,-.08,0,sc);}
  m.wave(!solo);
  let tm=2.5;
  return Object.assign(o,{
    upd(dt,t,look){
      if(!solo){tm-=dt;if(tm<0){tm=2.5+Math.random()*3;const r=Math.random();if(r<.35)a.temp('sorak',1.3,'lambai');else if(r<.7)b.temp('sorak',1.3,'lambai');else m.hop();}
        a.upd(dt,t,look);b.upd(dt,t,look);}
      else if(Math.random()<dt*.15)m.hop();
      m.upd(dt,t,look);},
    tap(w){if(w==='m'){m.hop();m.talk(1.4);m.wave(true);setTimeout(()=>m.wave(!solo),1600);}else if(w==='a')a.temp('sorak',1.4,'lambai');else if(w==='b')b.temp('sorak',1.4,'lambai');}});
}

function sRangka(v){
  const o=mkScene(3.6,2.9,2.0);const sc=o.sc;
  const pg=new T.Group();sc.add(pg);
  mesh(new T.CylinderGeometry(2.7,2.9,.34,48),mt('#18a89a'),0,-.17,0,pg);
  mesh(new T.TorusGeometry(2.72,.07,10,64),mt('#ffc93c'),0,0,0,pg).rotation.x=PI/2;
  const sk=new T.Group();sk.scale.setScalar(.58);sk.position.y=1.5;sc.add(sk);
  const B=mt('#fff3d6',{roughness:.5}),D=mt('#1d2b53',{roughness:.4});
  const e=(m,rx,ry,rz,x,y,z)=>ell(m,rx,ry,rz,x,y,z,sk);
  e(B,.82,.95,.85,0,3.5,0);e(B,.5,.35,.55,0,2.85,.25);e(D,.2,.24,.12,-.3,3.6,.72);e(D,.2,.24,.12,.3,3.6,.72);e(D,.08,.13,.06,0,3.25,.82);
  mesh(G('ssm',()=>new T.TorusGeometry(.24,.035,8,20,PI)),D,0,3.1,.74,sk).rotation.z=PI;
  for(let i=0;i<9;i++)e(B,.16,.13,.16,0,2.5-i*.38,-.05-i*.05);
  mesh(capGeo(.09,1.8),B,0,1.05,.74,sk);mesh(capGeo(.08,2),B,0,2.1,.25,sk).rotation.z=PI/2;
  [-1,1].forEach(s=>{e(B,.2,.2,.2,s*1.05,2.1,.1);mesh(capGeo(.13,1.2),B,s*1.3,1.3,.1,sk).rotation.z=s*.12;});
  for(let i=0;i<6;i++){const gm=new T.TorusGeometry(.95-i*.03,.07,8,28,PI*1.7);gm.rotateZ(-1.1);const m=new T.Mesh(gm,B);m.rotation.x=PI/2;m.scale.set(1,.75,1);m.position.y=1.85-i*.33;sk.add(m);}
  const gp=new T.Mesh(new T.TorusGeometry(.8,.28,10,24),B);gp.rotation.x=PI/2;gp.scale.set(1.1,.85,.7);gp.position.y=-1.15;sk.add(gp);
  e(B,.55,.6,.3,-.75,-.85,0);e(B,.55,.6,.3,.75,-.85,0);
  const pk=mt('#ff9aa2',{roughness:.7});e(pk,.55,.85,.4,-.55,1.5,-.05);e(pk,.55,.85,.4,.55,1.5,-.05);
  const hm=new T.MeshStandardMaterial({color:C('#ff4d6d'),emissive:C('#ff2d55'),emissiveIntensity:.3,roughness:.35});
  const hr=new T.Group();hr.position.set(-.28,1.45,.5);sk.add(hr);
  ell(hm,.34,.34,.3,-.17,.1,0,hr);ell(hm,.34,.34,.3,.17,.1,0,hr);const cn=mesh(G('hc',()=>new T.ConeGeometry(.36,.6,16)),hm,0,-.25,0,hr);cn.rotation.x=PI;
  const shm=new T.MeshStandardMaterial({color:C('#7fe3ff'),transparent:true,opacity:.16,roughness:.2,depthWrite:false});
  const sh=mesh(SP(),shm,0,1.4,0,sk);
  const orbs=[];for(let i=0;i<8;i++)orbs.push(ell(mt('#ffd93b',{roughness:.3}),.09,.09,.09,0,0,0,pg));
  const bs=blob(2.2);bs.position.y=.01;pg.add(bs);
  let ang=0;
  return Object.assign(o,{rest(){const m=((ang+PI)%(2*PI)+2*PI)%(2*PI)-PI;if(Math.abs(m)<.14){ang-=m;sk.rotation.y=ang;return true;}return false;},
    upd(dt,t){const h=v.hs;if(v.on)ang+=dt*(.45+1.8*h);sk.rotation.y=ang;sk.position.y=1.5+.07*Math.sin(t*2);
    const bp=Math.pow(Math.max(0,Math.sin(t*(3+3.5*h))),3);hr.scale.setScalar(.9*(1+.16*bp));hm.emissiveIntensity=.3+.5*bp;
    const s=1+.03*Math.sin(t*3)*(1+h);sh.scale.set(2.3*s,3.2*s,1.8*s);shm.opacity=.13+.07*Math.sin(t*2)+.1*h;
    orbs.forEach((q,i)=>{const a=t*(.8+1.6*h)+i*PI/4;q.position.set(Math.cos(a)*2.5,1.7+.9*Math.sin(a*2+i),Math.sin(a)*2.5);});}});
}

function sJalan(v,op){op=op||{};
  const o=mkScene(3.8,2.8,1.05);const sc=o.sc;const is=new T.Group();sc.add(is);pulau(is,3.4);
  const tr=mesh(new T.RingGeometry(1.3,3.0,64),mt('#ecd9a8',{roughness:1}),0,.012,0,is);tr.rotation.x=-PI/2;
  const ln=mesh(new T.RingGeometry(2.1,2.17,64),mt('#ffffff',{roughness:1}),0,.016,0,is);ln.rotation.x=-PI/2;
  for(let i=0;i<8;i++){const a=i/8*PI*2+.3;pohon(is,Math.sin(a)*3.15,Math.cos(a)*3.15,.5);}
  pohon(is,-.2,-.1,.85);[['#ff6b6b',.6,.5],['#ffc93c',-.7,.6],['#ff9ad5',.5,-.7],['#8fd3ff',-.6,-.6]].forEach(q=>bunga(is,q[1],q[2],q[0]));
  const cl=[awan(sc,-3,3.6,-2,.8),awan(sc,3,3.2,-3,.7)];
  const w=KID.g(),r=KID.b();is.add(w.g,r.g);const bw=w.shadow,br=r.shadow;is.add(bw,br);w.g.remove(bw);r.g.remove(br);
  let aw=-.35,ar=.9;const aw0=aw;
  const lb=op.label?[papan('Jalan',200,80,'rgba(255,255,255,.92)','#1d2b53',46,1.3,.52),papan('Lari',200,80,'rgba(255,255,255,.92)','#1d2b53',46,1.3,.52)]:null;if(lb)is.add(lb[0],lb[1]);
  const place=(k,bl,a,rad,sp)=>{const x=rad*Math.sin(a),z=rad*Math.cos(a),idle=Math.atan2(-x,10-z);
    k.g.position.set(x,0,z);k.g.rotation.y=lerpAng(idle,PI/2+a,MU.clamp(sp,0,1));bl.position.set(x,.02,z);};
  return Object.assign(o,{rest(){const m=(((aw-aw0)%(2*PI))+2*PI)%(2*PI);return Math.min(m,2*PI-m)<.1;},
    upd(dt,t,look){const h=v.hs>.5&&!REDUCE;
    w.pose(h?(op.dua?'lari':'jalan'):'diri');r.pose(h?'lari':'diri');w.upd(dt,t,look);r.upd(dt,t,look);
    const sw=MU.clamp((w.st.f-2.2)/(op.dua?8.8:4.3),0,1.2),sr=MU.clamp((r.st.f-2.2)/8.8,0,1.2);
    aw+=dt*sw*(op.dua?1.3:.88);ar+=dt*sr*(op.dua?1.3:1.76);place(w,bw,aw,1.7,sw);place(r,br,ar,2.55,sr);
    bw.scale.setScalar(1/(1+w.lift*1.5));br.scale.setScalar(1/(1+r.lift*1.5));
    if(lb){lb[0].position.set(w.g.position.x,3.5,w.g.position.z);lb[1].position.set(r.g.position.x,3.5,r.g.position.z);}
    cl[0].position.x=-3+Math.sin(t*.3)*.4;cl[1].position.x=3+Math.cos(t*.25)*.4;}});
}

function sLompat(v,op){
  const o=mkScene(3.4,2.7,1.15);const sc=o.sc;const is=new T.Group();sc.add(is);pulau(is,3.2);
  pohon(is,-2.3,-1.4,.7);pohon(is,2.4,-1.5,.65);[['#ff6b6b',-.2,-1],['#ffc93c',.3,-1.4],['#ff9ad5',-1.8,1.6],['#8fd3ff',1.9,1.7]].forEach(q=>bunga(is,q[1],q[2],q[0]));
  awan(sc,-2.6,3.6,-2,.7);awan(sc,2.8,3.3,-2.5,.6);
  const a=KID.g(),b=KID.b();a.g.position.set(-1.25,0,.1);b.g.position.set(1.25,0,.1);a.g.rotation.y=.25;b.g.rotation.y=-.25;is.add(a.g,b.g);
  b.setPhase(PI/2);a.pose('berdiri1');
  [[-1.25,'1 kaki'],[1.25,'2 kaki']].forEach(q=>{const p=papan(q[1],200,80,'rgba(255,255,255,.92)','#1d2b53',46,1.3,.52);p.rotation.x=-PI/2;p.position.set(q[0],.03,1.7);is.add(p);});
  let ga=false,gb=false;
  return Object.assign(o,{rest(){return !ga&&!gb;},
    upd(dt,t,look){if(v.hov&&!REDUCE){ga=gb=true;}else{if(ga&&near0(a.phase()))ga=false;if(gb&&near0(b.phase()))gb=false;}
      a.pose(ga?'lompat':'berdiri1');b.pose(gb?'loncat':'diri');a.upd(dt,t,look);b.upd(dt,t,look);}});
}

function sEngklek(v,op){
  const o=mkScene(3.4,2.8,1.1,.3);const sc=o.sc;const is=new T.Group();sc.add(is);pulau(is,3.5);
  const cv=document.createElement('canvas');cv.width=200;cv.height=480;const x=cv.getContext('2d');
  x.fillStyle='#e8d7b9';x.fillRect(0,0,200,480);x.lineWidth=6;x.strokeStyle='#fff';x.fillStyle='rgba(255,255,255,.35)';x.font='800 34px "Baloo 2",Nunito,sans-serif';x.textAlign='center';x.textBaseline='middle';
  const rows=[[0],[0],[-1,1],[0],[-1,1],[0]];let n=1;const P=[];
  rows.forEach((r,i)=>r.forEach(cx=>{const px=100+cx*40,py=(5-i+.5)*80;x.fillRect(px-36,py-36,72,72);x.strokeRect(px-36,py-36,72,72);x.fillStyle='#1d2b53';x.fillText(n++,px,py+3);x.fillStyle='rgba(255,255,255,.35)';P.push({x:cx*.4,z:2.0-i*.8});}));
  const tx=new T.CanvasTexture(cv);tx.encoding=T.sRGBEncoding;tx.anisotropy=4;
  const pl=new T.Mesh(new T.PlaneGeometry(2,4.8),new T.MeshBasicMaterial({map:tx}));pl.rotation.x=-PI/2;pl.position.y=.02;is.add(pl);
  pohon(is,-2.5,-1,.6);pohon(is,2.6,-1.4,.55);bunga(is,-2,1.5,'#ff6b6b');bunga(is,2.1,1.4,'#ffc93c');awan(sc,-2.4,3.7,-2,.7);
  ell(mt('#ff6b6b',{roughness:.4}),.15,.07,.13,P[0].x+.18,.08,P[0].z+.05,is);
  const k=KID.g();is.add(k.g);k.setPhase(0);k.pose('berdiri1');
  const seq=[0,1,2,3,4,5,6,7,6,5,4,3,2,1];let prog=0,yaw=.3,run=false;
  const at=p=>{const i=Math.floor(p)%seq.length,f=P[seq[i]],t=P[seq[(i+1)%seq.length]],u=p-Math.floor(p);return {f,t,u:u<.5?ease(u/.5):1};};
  return Object.assign(o,{rest(){return !run;},
    upd(dt,t,look){if(v.hov&&!REDUCE)run=true;
    k.pose(run?'lompat':'berdiri1');
    if(run){const pv=prog;prog+=dt*(v.hov?1.1:1.9);const m=Math.floor(prog);
      if(!v.hov&&m>Math.floor(pv)&&(m%14===0||m%14===7)){prog=m;run=false;}}
    k.setPhase(prog*PI*2);k.upd(dt,t,look,true);
    const s=at(prog);k.g.position.set(MU.lerp(s.f.x,s.t.x,s.u),0,MU.lerp(s.f.z,s.t.z,s.u));
    const ty=run?Math.atan2(s.t.x-s.f.x,s.t.z-s.f.z):.3;yaw=lerpAng(yaw,ty,Math.min(1,dt*8));k.g.rotation.y=yaw;}});
}

function sPodium(v,op){
  const o=mkScene(3.6,2.9,1.7);const sc=o.sc;const is=new T.Group();sc.add(is);pulau(is,3.4);
  const kot=(x,h,c,n)=>{mesh(new T.BoxGeometry(1.2,h,1.2),mt(c,{roughness:.5}),x,h/2,0,is);const p=papan(n,96,96,'rgba(255,255,255,.9)','#1d2b53',64,.6,.6);p.position.set(x,h*.55,.61);is.add(p);};
  kot(0,1.3,'#ffc93c','1');kot(-1.35,.9,'#cfd8e3','2');kot(1.35,.6,'#e0a070','3');
  const b=KID.b(),g=KID.g();b.g.position.set(0,1.3,0);g.g.position.set(1.35,.6,0);is.add(b.g,g.g);b.pose('lambai',1);g.pose('diri');
  const tp=new T.Group();tp.position.set(-1.35,.9,0);is.add(tp);const Au=mt('#ffc93c',{roughness:.3});
  mesh(new T.CylinderGeometry(.42,.48,.12,24),mt('#d99a00',{roughness:.4}),0,.06,0,tp);mesh(new T.CylinderGeometry(.08,.1,.5,12),Au,0,.37,0,tp);
  const cup=[[0,0],[.12,0],[.3,.12],[.48,.5],[.5,.7],[0,.7]].map(q=>new T.Vector2(q[0],q[1]));
  const cu=new T.Mesh(new T.LatheGeometry(cup,24),Au);cu.position.y=.6;tp.add(cu);
  [-1,1].forEach(s=>{const h=mesh(G('th',()=>new T.TorusGeometry(.22,.04,8,16)),Au,s*.55,1.0,0,tp);});
  const cf=[],cc=['#ff6b6b','#ffc93c','#3ec9a7','#8fd3ff','#b86bff'];
  for(let i=0;i<26;i++){const m=new T.Mesh(new T.PlaneGeometry(.12,.2),new T.MeshBasicMaterial({color:C(cc[i%5]),side:T.DoubleSide}));
    m.userData={x:(Math.random()-.5)*6,z:(Math.random()-.5)*3,y:Math.random()*5,s:.6+Math.random()*.8,r:Math.random()*3};is.add(m);cf.push(m);}
  const bb=blob(.6),bg=blob(.6);bb.position.set(0,1.32,0);bg.position.set(1.35,.62,0);is.add(bb,bg);
  let gb=false,gg=false,gt=false;
  return Object.assign(o,{rest(){return !gb&&!gg&&!gt;},
    upd(dt,t,look){if(v.hov&&!REDUCE){gb=gg=gt=true;}else{if(gb&&near0(b.phase()))gb=false;if(gg&&near0(g.phase()))gg=false;if(gt&&near0(tp.rotation.y)){gt=false;tp.rotation.y=Math.round(tp.rotation.y/(2*PI))*2*PI;}}
    b.pose(gb?'sorak':'lambai',1);g.pose(gg?'sorak':'diri');b.upd(dt,t,look);g.upd(dt,t,look);
    if(gt)tp.rotation.y+=dt*(.8+2*v.hs);tp.position.y=.9+.05*Math.sin(t*2);
    cf.forEach(m=>{const u=m.userData;u.y-=dt*(.25+1.6*v.hs)*u.s;if(u.y<0)u.y=5;u.r+=dt*3;m.position.set(u.x,u.y,u.z);m.rotation.set(u.r,u.r*.7,0);});}});
}

function sKlip(v,op){op=op||{};const jd=op.judul||'LAPORAN';
  const o=mkScene(3.4,2.8,1.4);const sc=o.sc;const is=new T.Group();sc.add(is);pulau(is,3.2);
  const cb=new T.Group();cb.position.set(.8,1.9,0);cb.rotation.y=-.3;is.add(cb);
  mesh(new T.BoxGeometry(2.1,2.8,.14),mt('#b5835a',{roughness:.6}),0,0,0,cb);
  const cv=document.createElement('canvas');cv.width=256;cv.height=352;const x=cv.getContext('2d');
  const tx=new T.CanvasTexture(cv);tx.encoding=T.sRGBEncoding;tx.anisotropy=4;
  let lastN=-1;
  const draw=n=>{x.fillStyle='#fffdf5';x.fillRect(0,0,256,352);x.fillStyle='#3ec9a7';x.fillRect(0,0,256,56);x.fillStyle='#fff';x.font='800 34px "Baloo 2",Nunito,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(jd,128,30);
    for(let i=0;i<4;i++){const y=92+i*62;x.strokeStyle='#1d2b53';x.lineWidth=5;x.strokeRect(24,y-18,36,36);
      if(i<n){x.strokeStyle='#2fb344';x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(30,y);x.lineTo(40,y+10);x.lineTo(58,y-14);x.stroke();}
      x.fillStyle='#c9d4e3';x.fillRect(76,y-10,150,8);x.fillRect(76,y+6,100,8);}
    tx.needsUpdate=true;};
  draw(0);
  const pp=new T.Mesh(new T.PlaneGeometry(1.8,2.48),new T.MeshBasicMaterial({map:tx}));pp.position.set(0,-.08,.08);cb.add(pp);
  mesh(new T.BoxGeometry(.8,.28,.2),mt('#8c97a8',{roughness:.4}),0,1.4,.1,cb);
  const pc=new T.Group();is.add(pc);const py=mt('#ffc93c',{roughness:.4});
  mesh(new T.CylinderGeometry(.09,.09,1.1,10),py,0,.55,0,pc);mesh(new T.ConeGeometry(.09,.25,10),mt('#f0d2a4'),0,-.12,0,pc).rotation.x=PI;mesh(new T.CylinderGeometry(.095,.095,.12,10),mt('#ff9aa2'),0,1.15,0,pc);
  pc.rotation.z=.5;
  pohon(is,-2.5,-1.3,.6);bunga(is,-2,1.5,'#ff6b6b');bunga(is,2.2,1.4,'#ffc93c');awan(sc,-2.4,3.8,-2,.7);
  const g=KID.g();g.g.position.set(-1.6,0,.6);g.g.rotation.y=.5;is.add(g.g);g.pose('lambai',-1);
  let pr=0,act=false,gk=false;
  return Object.assign(o,{rest(){return !act&&!gk;},
    upd(dt,t,look){const h=act;if(v.hov&&!REDUCE){if(!act&&pr>=4)pr=0;act=true;gk=true;}else if(gk&&near0(g.phase()))gk=false;
    if(act){pr+=dt*2.2;if(v.hov){if(pr>5.4)pr=0;}else if(pr>=4){pr=4;act=false;}}
    const n=Math.min(4,Math.floor(pr+.001));if(n!==lastN){draw(n);lastN=n;}
    g.pose(gk?'sorak':'lambai',-1);g.upd(dt,t,look);
    cb.position.y=1.9+.06*Math.sin(t*1.8);
    const w=h?1:0;pc.position.set(.2+w*Math.sin(t*7)*.25,1.3+w*Math.cos(t*5)*.12+.05*Math.sin(t*2),.55);}});
}

const SCENES={hero:v=>sHero(v,false),mascot:v=>sHero(v,true),q0:sRangka,q1:sJalan,q2:sLompat,q3:sEngklek,q4:sPodium,q5:sKlip};
const OTO=n=>n.slice(0,2)==='s:'||n==='kuis';   /* gambar di dalam materi: bergerak terus */

/* ---------- pengelola tampilan ---------- */
const views=new Set(),ray=new T.Raycaster(),pt=new T.Vector2();
let raf=0,last=0,frame=0,rw=0,rh=0;
function ukur(v){const cv=v.cv;v.w=cv.clientWidth||300;v.h=cv.clientHeight||200;cv.width=Math.round(v.w*DPR);cv.height=Math.round(v.h*DPR);
  v.s.cam.aspect=v.w/v.h;v.s.fit(v.w/v.h);v.idle=0;}
function bersih(sc){sc.traverse(o=>{if(o.geometry&&!SHARED.has(o.geometry))o.geometry.dispose();const m=o.material;if(m&&!SHARED.has(m)){if(m.map&&m.map!==BT)m.map.dispose();m.dispose();}});}
function lepas(v){views.delete(v);try{if(v.s)bersih(v.s.sc);}catch(e){}if(v.ro)v.ro.disconnect();if(v.io)v.io.disconnect();}
function mount(root){
  root.querySelectorAll('canvas[data-k3d]').forEach(cv=>{
    if(cv._v)return;const mk=SCENES[cv.dataset.k3d];if(!mk)return;
    const v={cv,ctx:cv.getContext('2d'),name:cv.dataset.k3d,hov:(NOHOVER||TERUS||OTO(cv.dataset.k3d))&&!REDUCE,hot:false,on:false,left:0,idle:0,hs:0,vis:true,t:0,acc:0,w:0,h:0,look:{x:0,y:0}};
    v.w=cv.clientWidth||300;v.h=cv.clientHeight||200;cv._v=v;
    try{v.s=mk(v);ukur(v);}catch(err){console.error(err);cv._v=null;if(K3D.fail)K3D.fail(cv);return;}
    if(window.ResizeObserver){v.ro=new ResizeObserver(()=>ukur(v));v.ro.observe(cv);}
    if(window.IntersectionObserver){v.io=new IntersectionObserver(es=>{v.vis=es[es.length-1].isIntersecting;});v.io.observe(cv);}
    const card=cv.closest('.misi');
    if(card&&!NOHOVER){const on=()=>{v.hot=true;if(!TERUS)v.hov=!REDUCE;},off=()=>{v.hot=false;if(!TERUS)v.hov=false;};card.addEventListener('pointerenter',on);card.addEventListener('pointerleave',off);card.addEventListener('focus',on);card.addEventListener('blur',off);}
    if(v.s.tap){
      const kena=e=>{const b=cv.getBoundingClientRect();pt.set((e.clientX-b.left)/b.width*2-1,-((e.clientY-b.top)/b.height)*2+1);ray.setFromCamera(pt,v.s.cam);
        const hs=ray.intersectObjects(v.s.sc.children,true);for(let i=0;i<hs.length;i++){let o=hs[i].object;while(o&&!(o.userData&&o.userData.who))o=o.parent;if(o)return o.userData.who;}return null;};
      cv.addEventListener('pointerdown',e=>{const w=kena(e);if(w){v.s.tap(w);cv.dispatchEvent(new CustomEvent('k3dtap',{detail:w}));}});
      cv.addEventListener('pointermove',e=>{cv.style.cursor=kena(e)?'pointer':'default';});
    }
    views.add(v);
  });
  if(!raf)raf=requestAnimationFrame(loop);
}
function loop(now){
  raf=requestAnimationFrame(loop);
  const dt0=Math.min(.05,(now-last)/1000||.016);last=now;frame++;
  if(document.hidden)return;
  views.forEach(v=>{
    if(!v.cv.isConnected){lepas(v);return;}
    if(!v.vis)return;
    v.acc+=dt0;
    const md=(TERUS&&v.name[0]==='q'&&!v.hot)?(LOW?1/20:1/30):(LOW?1/30:0);   /* batas fps: kartu yang tidak disentuh 30 fps (HP lambat 20 fps) */
    if(md&&v.acc<md-.002)return;
    if(v.name[0]==='q'&&!v.on&&!v.hov){if(v.hs<.01){if(v.idle>24)return;v.idle++;}else v.idle=0;}else v.idle=0;   /* kartu quest: diam saat tidak disentuh */
    const dt=v.acc;v.acc=0;v.t+=dt;
    if(v.hov){v.on=true;v.left=0;}else if(v.on){v.left+=dt;const s=v.s;if(!s.rest||s.rest()||v.left>9)v.on=false;}   /* kursor pergi: selesaikan gerakan dulu */
    v.hs+=((v.on?1:0)-v.hs)*Math.min(1,dt*5);
    try{
      v.s.upd(dt,v.t,v.look);
      const W=v.w,H=v.h;
      if(W>rw||H>rh){rw=Math.max(rw,W);rh=Math.max(rh,H);R.setSize(rw,rh,false);}
      R.setViewport(0,0,W,H);R.setScissor(0,0,W,H);R.setScissorTest(true);R.clear();R.render(v.s.sc,v.s.cam);
      const cv=v.cv,el=R.domElement;v.ctx.clearRect(0,0,cv.width,cv.height);
      v.ctx.drawImage(el,0,el.height-Math.round(H*DPR),Math.round(W*DPR),Math.round(H*DPR),0,0,cv.width,cv.height);
    }catch(err){console.error(err);lepas(v);if(K3D.fail)K3D.fail(v.cv);}
  });
}
const K3D=window.K3D={ok:true,mount,fail:null,dpr:DPR,low:LOW,SCENES,has:k=>!!SCENES['s:'+k]||k==='kuis',set(cv,s){const v=cv&&cv._v;if(v&&v.s&&v.s.state)v.s.state(s);},
  kit:{T,MU,PI,C,mt,G,mesh,ell,capGeo,lerpAng,ease,blob,teks,papan,mkScene,pulau,pohon,bunga,awan,anak,uli,KID,REDUCE,sJalan,sLompat,sEngklek,sPodium,sKlip,sHero}};
})();
