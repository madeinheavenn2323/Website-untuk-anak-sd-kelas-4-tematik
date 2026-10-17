/* ===== ILUSTRASI 3D DI DALAM MATERI (slide) & KARAKTER PENDAMPING SOAL =====
   Memakai alat dari karakter3d.js (K3D.kit). Kunci adegan = kunci gambar lama di data materi (emoji / nama),
   ditulis 's:<kunci>'. Jika sebuah kunci tidak ada di sini, script.js otomatis memakai gambar SVG lama. */
(function(){
'use strict';
if(!window.K3D||!K3D.ok)return;
const {T,MU,PI,C,mt,G,mesh,ell,capGeo,ease,blob,teks,papan,mkScene,pulau,pohon,bunga,awan,anak,KID,sJalan,sLompat,sEngklek,sPodium,sKlip}=K3D.kit;
const S=K3D.SCENES,L0={x:0,y:0};
const pulauScene=(hw,r,cy,el)=>{const o=mkScene(hw,hw,cy,el||.22),is=new T.Group();o.sc.add(is);pulau(is,r);return [o,is];};
const lbl=(t,pw)=>papan(t,240,80,'rgba(255,255,255,.93)','#1d2b53',44,pw||1.6,(pw||1.6)/3);
const basic=h=>new T.MeshBasicMaterial({color:C(h)});
const heart=(s,hm)=>{const g=new T.Group();ell(hm,.34,.34,.3,-.17,.1,0,g);ell(hm,.34,.34,.3,.17,.1,0,g);mesh(G('hc',()=>new T.ConeGeometry(.36,.6,16)),hm,0,-.25,0,g).rotation.x=PI;g.scale.setScalar(s);return g;};
const tetes=s=>{const g=new T.Group(),m=mt('#4aa8ff',{roughness:.25});ell(m,.18,.18,.18,0,0,0,g);mesh(G('dc',()=>new T.ConeGeometry(.16,.3,12)),m,0,.22,0,g);g.scale.setScalar(s);return g;};

/* 🏠 Rangka itu seperti rumah: rumah melindungi dari panas dan hujan */
S['s:🏠']=v=>{const [o,is]=pulauScene(3.7,3.5,1.5);
  const h=new T.Group();h.position.set(-.7,0,-.3);is.add(h);
  mesh(new T.BoxGeometry(2.6,1.6,2),mt('#ffc93c'),0,.8,0,h);
  const rg=new T.Group();rg.position.y=2.15;rg.scale.set(1,1,.8);h.add(rg);mesh(new T.ConeGeometry(2.1,1.1,4),mt('#ff6b6b'),0,0,0,rg).rotation.y=PI/4;
  mesh(new T.BoxGeometry(.55,1,.06),mt('#3ec9a7'),0,.5,1.03,h);[-1,1].forEach(s=>mesh(new T.BoxGeometry(.5,.5,.06),mt('#ffffff',{roughness:.3}),s*.85,.95,1.03,h));
  const k=KID.g();k.g.position.set(1.8,0,1);k.g.rotation.y=-.5;is.add(k.g);k.pose('lambai',1);
  const km=mt('#8d99ab',{roughness:1}),cg=new T.Group();cg.position.set(-1.6,4.3,0);o.sc.add(cg);ell(km,.7,.4,.45,0,0,0,cg);ell(km,.5,.35,.35,.6,-.05,0,cg);ell(km,.45,.3,.3,-.55,-.08,0,cg);
  const dr=[];for(let i=0;i<16;i++){const d=ell(mt('#5aa9ff',{roughness:.3}),.05,.12,.05,0,0,0,is);d.userData={x:-3+Math.random()*3.4,y:Math.random()*4,z:-1.2+Math.random()*2.4,s:3+Math.random()*2};dr.push(d);}
  const sun=new T.Group();sun.position.set(2.7,4.2,-1.5);o.sc.add(sun);mesh(new T.SphereGeometry(.55,24,16),basic('#ffd93b'),0,0,0,sun);
  for(let i=0;i<8;i++){const a=i*PI/4,r=mesh(G('ry',()=>new T.ConeGeometry(.09,.3,6)),basic('#ffb800'),Math.cos(a)*.9,Math.sin(a)*.9,0,sun);r.rotation.z=a-PI/2;}
  return Object.assign(o,{upd(dt,t){k.upd(dt,t,L0);sun.rotation.z=t*.5;
    dr.forEach(d=>{const u=d.userData;u.y-=u.s*dt;if(Math.abs(u.x+.7)<1.5&&u.y<2.3&&u.y>1.2)u.y=-1;if(u.y<0.05){u.y=4;u.x=-3+Math.random()*3.4;}d.position.set(u.x,u.y,u.z);});}});};

/* 📦 Seperti kemasan buah */
S['s:📦']=v=>{const [o,is]=pulauScene(3.5,3.3,1.3);
  const W=mt('#d9a066',{roughness:.8}),b=new T.Group();is.add(b);
  mesh(new T.BoxGeometry(2.6,.12,1.9),W,0,.06,0,b);mesh(new T.BoxGeometry(2.6,.9,.1),W,0,.5,.9,b);mesh(new T.BoxGeometry(2.6,.9,.1),W,0,.5,-.9,b);
  [-1,1].forEach(s=>mesh(new T.BoxGeometry(.1,.9,1.9),W,s*1.25,.5,0,b));
  const fr=papan('AMAN',240,80,'rgba(255,255,255,.9)','#1d2b53',46,1.4,.46);fr.position.set(0,.5,.96);b.add(fr);
  const ap=[];[-.75,0,.75].forEach((x,i)=>[-.35,.35].forEach((z,j)=>{const a=new T.Group();a.position.set(x,.65,z);b.add(a);ell(mt('#e63946',{roughness:.35}),.34,.32,.34,0,0,0,a);mesh(G('st',()=>new T.CylinderGeometry(.02,.02,.16,6)),mt('#6b4423'),0,.34,0,a);ell(mt('#3fae49'),.12,.04,.06,.1,.38,0,a);a.userData.p=i*2+j;ap.push(a);}));
  const lid=new T.Group();lid.position.set(0,.95,-.95);b.add(lid);mesh(new T.BoxGeometry(2.7,.1,1.9),W,0,0,.95,lid);
  const sm=new T.MeshStandardMaterial({color:C('#7fe3ff'),transparent:true,opacity:.15,roughness:.2,depthWrite:false});const sh=mesh(G('sph',()=>new T.SphereGeometry(1,32,20)),sm,0,.8,0,b);sh.scale.set(2.1,1.6,1.7);
  return Object.assign(o,{upd(dt,t){lid.rotation.x=-(.5+.5*Math.sin(t*1.2))*1.1;ap.forEach(a=>{a.position.y=.65+.05*Math.sin(t*3+a.userData.p);});sm.opacity=.1+.06*Math.sin(t*2.4);b.rotation.y=.35*Math.sin(t*.6);}});};

/* 🏃 Bergerak itu seru & jalan: dua anak berlari / jalan dan lari */
S['s:🏃']=v=>sJalan(v,{dua:true});
S['s:jalan']=v=>sJalan(v,{label:true});

/* 🛍️ Lempar dan Tangkap: dua kantong plastik terbang saling bertukar */
S['s:🛍️']=v=>{const [o,is]=pulauScene(4.3,4.2,1.4);
  const a=KID.g(),b=KID.b();a.g.position.set(-2.5,0,0);b.g.position.set(2.5,0,0);a.g.rotation.y=PI/2;b.g.rotation.y=-PI/2;is.add(a.g,b.g);a.pose('lempar');b.pose('lempar');
  const tas=c=>{const g=new T.Group(),m=mt(c,{roughness:.25});ell(m,.34,.26,.12,0,0,0,g);ell(m,.1,.12,.06,-.14,.26,0,g);ell(m,.1,.12,.06,.14,.26,0,g);o.sc.add(g);return g;};
  const t1=tas('#ffc93c'),t2=tas('#3ec9a7');
  const gr=mesh(new T.PlaneGeometry(4.6,.07),new T.MeshBasicMaterial({color:C('#1d2b53'),transparent:true,opacity:.55}),0,.03,1.2,is);gr.rotation.x=-PI/2;
  const tx=lbl('3 meter',1.5);tx.rotation.x=-PI/2.4;tx.position.set(0,.05,1.7);is.add(tx);
  pohon(is,-3.2,-1.8,.6);pohon(is,3.3,-1.9,.55);awan(o.sc,-2.8,4.2,-2,.7);
  const P=2.6;
  return Object.assign(o,{upd(dt,t){const uu=(t%P)/P,dir=Math.floor(t/P)%2?-1:1,ph=uu*PI*2+PI/2;a.setPhase(ph);b.setPhase(ph);a.upd(dt,t,L0,true);b.upd(dt,t,L0,true);
    const xa=-2.2*dir,xb=2.2*dir;t1.position.set(MU.lerp(xa,xb,uu),1.7+1.5*Math.sin(PI*uu),0);t2.position.set(MU.lerp(xb,xa,uu),1.6+2.3*Math.sin(PI*uu),0);t1.rotation.z=t*5;t2.rotation.z=-t*4;}});};

/* 💪 Manfaat bergerak: tubuh bugar, otot kuat, hati senang */
S['s:💪']=v=>{const [o,is]=pulauScene(3.5,3.2,1.5);
  const k=KID.b();is.add(k.g);k.pose('kuat').face('senang');
  const hm=new T.MeshStandardMaterial({color:C('#ff4d6d'),emissive:C('#ff2d55'),emissiveIntensity:.35,roughness:.35});
  const hs=[0,1,2].map(i=>{const h=heart(.45,hm);o.sc.add(h);h.userData.i=i;return h;}),ds=[0,1,2].map(i=>{const d=tetes(.8);o.sc.add(d);d.userData.i=i;return d;});
  pohon(is,-2.5,-1.6,.6);pohon(is,2.5,-1.7,.55);
  return Object.assign(o,{upd(dt,t){k.upd(dt,t,L0);k.g.position.y=.06*Math.abs(Math.sin(t*3));
    hs.forEach(h=>{const u=((t*.35+h.userData.i/3)%1);h.position.set(-1.9+Math.sin(u*9)*.25,1.3+u*3.2,.6);h.scale.setScalar(.45*(1-u*.4)*(1+.12*Math.sin(t*8)));});
    ds.forEach(d=>{const u=((t*.3+d.userData.i/3)%1);d.position.set(1.9+Math.sin(u*7)*.2,1.3+u*3,.6);d.scale.setScalar(.8*(1-u*.5));});}});};

/* 🦘 Apa bedanya lompat dan loncat */
S['s:🦘']=v=>sLompat(v);

/* 🪢 Lompat tali */
S['s:🪢']=v=>{const [o,is]=pulauScene(3.3,3.0,1.6);
  const k=KID.g();is.add(k.g);k.pose('loncat');
  const hips=k.J.hips,rope=new T.Group();hips.add(rope);const bm=mt('#8b5a2b',{roughness:.7}),N=24,bd=[];
  for(let i=0;i<N;i++)bd.push(ell(bm,.06,.06,.06,0,0,0,rope));
  [-1,1].forEach(s=>mesh(capGeo(.05,.22),mt('#ffc93c',{roughness:.4}),s*.76,.16,0,rope));
  pohon(is,-2.3,-1.4,.6);pohon(is,2.4,-1.5,.55);bunga(is,-1.6,1.6,'#ff6b6b');bunga(is,1.7,1.5,'#ffc93c');
  return Object.assign(o,{upd(dt,t){k.upd(dt,t,L0);const J=k.J;J.sL.rotation.z=-.8;J.sR.rotation.z=.8;J.eL.rotation.x=J.eR.rotation.x=-.25;
    const f=k.phase()+PI/2,cf=Math.cos(f),sf=Math.sin(f);
    bd.forEach((b,i)=>{const s=i/(N-1),rr=Math.sin(PI*s);b.position.set(-.76+1.52*s,.16+rr*(cf>0?1.75:1.15)*cf,rr*1.1*sf);});}});};

/* 🏅 Lompat jauh: lari, tolak, melayang, mendarat */
S['s:🏅']=v=>{const [o,is]=pulauScene(4.6,4.3,1.5);
  const tr=mesh(new T.BoxGeometry(5.2,.04,1.5),mt('#d96b4a',{roughness:1}),-1.2,.02,0,is);mesh(new T.BoxGeometry(5.2,.045,.06),mt('#ffffff'),-1.2,.025,.5,is);mesh(new T.BoxGeometry(5.2,.045,.06),mt('#ffffff'),-1.2,.025,-.5,is);
  mesh(new T.BoxGeometry(.3,.07,1.5),mt('#ffffff'),.1,.04,0,is);mesh(new T.BoxGeometry(2.2,.07,1.7),mt('#f3d79b',{roughness:1}),2.5,.035,0,is);
  const k=KID.b();is.add(k.g);
  const md=new T.Group();md.position.set(-1.8,3.3,-1.2);o.sc.add(md);mesh(new T.CylinderGeometry(.5,.5,.1,32),mt('#ffc93c',{roughness:.3}),0,0,0,md).rotation.x=PI/2;
  mesh(new T.BoxGeometry(.3,.8,.04),mt('#ff6b6b'),-.12,.7,-.02,md).rotation.z=.25;mesh(new T.BoxGeometry(.3,.8,.04),mt('#3b6fb6'),.12,.7,-.02,md).rotation.z=-.25;
  pohon(is,-3.4,-1.8,.55);pohon(is,3.6,-1.8,.5);
  const T0=4.4;let last=-1;
  return Object.assign(o,{upd(dt,t){const u=t%T0;md.rotation.y=t*1.2;k.g.rotation.y=PI/2;
    let sc=1;if(u<.25)sc=u/.25;if(u>T0-.2)sc=Math.max(0,(T0-u)/.2);k.g.scale.setScalar(Math.max(.01,sc));
    if(u<1.7){k.pose('lari');k.g.position.set(MU.lerp(-3.4,.1,ease(Math.min(1,u/1.7)*.55+.45*Math.min(1,u/1.7))),0,0);k.upd(dt,t,L0);}
    else if(u<2.6){const f=(u-1.7)/.9;k.pose('diri');k.upd(dt,t,L0);k.g.position.set(MU.lerp(.1,2.5,f),Math.sin(PI*f)*1.5,0);
      const J=k.J;J.hL.rotation.x=J.hR.rotation.x=-1.0-.3*f;J.kL.rotation.x=J.kR.rotation.x=.35;J.sL.rotation.x=J.sR.rotation.x=-2.7;J.tor.rotation.x=.25;}
    else{k.pose('sorak');k.face('senang');k.g.position.set(2.5,0,0);k.upd(dt,t,L0);}
    if(u<.3)k.face('senyum');}});};

/* 🇮🇩 Kaya permainan tradisional */
S['s:🇮🇩']=v=>{const [o,is]=pulauScene(3.7,3.5,1.9);
  mesh(new T.CylinderGeometry(.06,.06,4.2,10),mt('#cfd8e3',{roughness:.4}),0,2.1,-.6,is);ell(mt('#ffc93c',{roughness:.3}),.12,.12,.12,0,4.25,-.6,is);
  const fl=[['#e03c3c',.4],['#ffffff',-.4]].map(q=>{const g=new T.PlaneGeometry(2.4,.8,24,4),m=mesh(g,new T.MeshStandardMaterial({color:C(q[0]),side:T.DoubleSide,roughness:.7}),1.26,3.5+q[1],-.6,is);m.userData.bx=Array.from(g.attributes.position.array).filter((_,i)=>i%3===0);return m;});
  const gs=new T.Group();gs.position.set(-1.6,0,1.1);is.add(gs);mesh(new T.ConeGeometry(.5,.7,24),mt('#3ec9a7',{roughness:.3}),0,.35,0,gs).rotation.x=PI;ell(mt('#ff6b6b',{roughness:.3}),.5,.16,.5,0,.75,0,gs);mesh(new T.CylinderGeometry(.06,.06,.4,8),mt('#8b5a2b'),0,1.0,0,gs);
  const kt=new T.Group();kt.position.set(2.1,3.4,.4);o.sc.add(kt);const kp=mesh(new T.PlaneGeometry(1.1,1.1),new T.MeshStandardMaterial({color:C('#ff6b6b'),side:T.DoubleSide,roughness:.6}),0,0,0,kt);kp.rotation.z=PI/4;kp.scale.set(.8,1.1,1);
  [0,1,2,3,4].forEach(i=>{const b=ell(mt(i%2?'#ffc93c':'#3ec9a7'),.12,.08,.03,Math.sin(i)*.1,-.8-i*.28,0,kt);});
  const mr=['#3b6fb6','#ffc93c','#e63946','#3ec9a7'].map((c,i)=>ell(new T.MeshStandardMaterial({color:C(c),roughness:.08,metalness:.1}),.2,.2,.2,1.1+i*.45,.2,1.4-(i%2)*.5,is));
  pohon(is,-2.7,-1.2,.6);
  return Object.assign(o,{upd(dt,t){gs.rotation.y=t*14;gs.rotation.z=.08*Math.sin(t*1.5);gs.position.y=0;
    fl.forEach(m=>{const p=m.geometry.attributes.position;for(let i=0;i<p.count;i++){const x=m.userData.bx[i];p.setZ(i,Math.sin(x*2.4-t*4)*.14*(x+1.2)/2.4);}p.needsUpdate=true;m.geometry.computeVertexNormals();});
    kt.position.y=3.4+.18*Math.sin(t*1.3);kt.rotation.z=.12*Math.sin(t*1.7);mr.forEach((m,i)=>{m.rotation.x=t*2+i;m.position.x=1.1+i*.45+.1*Math.sin(t*1.5+i);});}});};

/* 🟦 Engklek & langkah: anak melompat satu kaki melewati kotak bernomor */
S['s:🟦']=v=>sEngklek(v);
S['s:langkah']=v=>sEngklek(v);

/* 📝 Rencana & 📋 Laporan: papan tercentang satu per satu */
S['s:📝']=v=>sKlip(v,{judul:'RENCANA'});
S['s:📋']=v=>sKlip(v,{judul:'LAPORAN'});

/* 🥇 Belajar dari atlet */
S['s:🥇']=v=>sPodium(v);

/* 👨‍👩‍👧 Main bersama keluarga */
S['s:👨‍👩‍👧']=v=>{const [o,is]=pulauScene(3.8,3.6,1.7);
  const a=anak({kulit:'#d9a074',rambut:'#1c120d',baju:'#e8833a',bawah:'#2b4a9e'}),b=KID.g(),c=anak({kulit:'#c98d62',rambut:'#1c120d',baju:'#ffc93c',bawah:'#2b4a9e'});
  a.g.scale.setScalar(1.25);c.g.scale.setScalar(.8);a.g.position.set(-1.6,0,0);b.g.position.set(.1,0,.4);c.g.position.set(1.7,0,.5);is.add(a.g,b.g,c.g);
  a.pose('loncat');b.pose('loncat');c.pose('loncat');b.setPhase(.7);c.setPhase(1.4);[a,b,c].forEach(k=>k.face('senang'));
  const hm=new T.MeshStandardMaterial({color:C('#ff4d6d'),emissive:C('#ff2d55'),emissiveIntensity:.35,roughness:.35});
  const hs=[0,1,2,3].map(i=>{const h=heart(.4,hm);o.sc.add(h);h.userData.i=i;return h;});
  pohon(is,-3,-1.6,.6);pohon(is,3,-1.7,.55);
  return Object.assign(o,{upd(dt,t){a.upd(dt,t,L0);b.upd(dt,t,L0);c.upd(dt,t,L0);hs.forEach(h=>{const u=((t*.3+h.userData.i/4)%1);h.position.set(-2+h.userData.i*1.35+Math.sin(u*8)*.2,3.6+u*1.2,.5);h.scale.setScalar(.4*(1-u*.5)*(1+.1*Math.sin(t*8)));});}});};

/* 📏 Mistar: pita hijau diukur, 1 cm = 10 mm */
S['s:📏']=v=>{const [o,is]=pulauScene(3.9,3.9,1.1,.5);
  const rc=document.createElement('canvas');rc.width=640;rc.height=120;const x=rc.getContext('2d');x.fillStyle='#ffc93c';x.fillRect(0,0,640,120);x.strokeStyle='#1d2b53';x.fillStyle='#1d2b53';x.font='800 24px "Baloo 2",Nunito,sans-serif';x.textAlign='center';
  for(let m=0;m<=120;m++){const px=20+m*5,h=m%10===0?46:m%5===0?32:20;x.lineWidth=m%10===0?3:2;x.beginPath();x.moveTo(px,0);x.lineTo(px,h);x.stroke();if(m%10===0)x.fillText(m/10,px,78);}
  const tx=new T.CanvasTexture(rc);tx.encoding=T.sRGBEncoding;tx.anisotropy=4;
  mesh(new T.BoxGeometry(6.4,.16,1.2),mt('#e0a800'),0,.08,.4,is);const rp=new T.Mesh(new T.PlaneGeometry(6.4,1.2),new T.MeshBasicMaterial({map:tx}));rp.rotation.x=-PI/2;rp.position.set(0,.165,.4);is.add(rp);
  const rb=mesh(new T.BoxGeometry(1,.14,.5),mt('#3ec9a7',{roughness:.5}),0,.07,-.6,is),mk=mesh(new T.BoxGeometry(.05,.03,1.6),mt('#e63946'),0,.12,-.1,is);
  const lb=papan('',300,90,'rgba(255,255,255,.95)','#1d2b53',44,2.4,.72);lb.position.set(0,2.2,.6);is.add(lb);
  const g=KID.g();g.g.position.set(-2.6,0,-1.5);g.g.rotation.y=.5;is.add(g.g);g.pose('lambai',1);
  const tg=[5,8,3,6,9,4];let cur=5,li=-1,sh=0;
  return Object.assign(o,{upd(dt,t){g.upd(dt,t,L0);const n=tg[Math.floor(t/2.6)%tg.length];cur+=(n-cur)*Math.min(1,dt*3);
    const len=cur*.5;rb.scale.x=Math.max(.01,len);rb.position.x=-3+len/2;mk.position.x=-3+len;
    if(n!==li){li=n;const o2=lb.material.map;lb.material.map=teks(n+' cm = '+n*10+' mm',300,90,'rgba(255,255,255,.95)','#1d2b53',40);if(o2)o2.dispose();}}});};

/* lengan: sendi siku (engsel) & otot mengerut */
function lenganScene(otot){
  return v=>{const o=mkScene(3.3,3.3,1.7,.08),sc=o.sc;
    mesh(new T.CylinderGeometry(2.7,2.9,.3,48),mt('#18a89a'),0,-.15,0,sc);const bs=blob(2);bs.position.y=.01;sc.add(bs);
    const sk=mt('#f2c6a0',{roughness:.55}),ar=new T.Group();ar.position.y=.3;sc.add(ar);
    const ua=new T.Group();ua.position.set(0,1.3,0);ua.rotation.z=.9;ar.add(ua);mesh(capGeo(.34,1.9),sk,0,1.0,0,ua);
    const fa=new T.Group();fa.position.set(0,1.3,0);ar.add(fa);mesh(capGeo(.28,1.7),sk,0,.95,0,fa);ell(sk,.34,.34,.34,0,1.95,0,fa);
    const jm=new T.MeshStandardMaterial({color:C('#ffd93b'),emissive:C('#ffb800'),emissiveIntensity:.4,roughness:.3});const jt=mesh(G('sph',()=>new T.SphereGeometry(1,32,20)),jm,0,1.3,.12,ar);jt.scale.setScalar(.42);
    const mm=new T.MeshStandardMaterial({color:C('#ff6b6b'),roughness:.45}),ms=ell(mm,.4,.9,.34,0,1,.34,ua);ms.visible=!!otot;
    const t1=papan(otot?'Otot mengerut':'Sendi siku',300,90,'rgba(255,255,255,.95)','#1d2b53',46,2.4,.72),t2=papan(otot?'tulang tertarik':'(sendi engsel)',300,90,'rgba(255,255,255,.95)','#1d2b53',38,2.1,.63);
    t1.position.set(0,.55,2.3);t2.position.set(0,-.1,2.3);t1.scale.setScalar(.9);t2.scale.setScalar(.9);t1.rotation.x=t2.rotation.x=-.25;sc.add(t1,t2);t1.position.y=.62;t2.position.y=.1;
    return Object.assign(o,{upd(dt,t){const b=.5+.5*Math.sin(t*1.7);fa.rotation.z=MU.lerp(-1.4,.7,b);ar.position.y=.3+.06*Math.sin(t*2);
      jm.emissiveIntensity=.35+.35*Math.sin(t*4)*(otot?0:1);jt.visible=true;
      if(otot){ms.scale.set(.4*(1+.45*b),.9*(1-.4*b),.34*(1+.45*b));mm.color=C(b>.5?'#ff3b3b':'#ff8a8a');}}});};}
S['s:sendi']=lenganScene(false);S['s:otot']=lenganScene(true);

/* fungsi: 4 tugas rangka */
S['s:fungsi']=v=>{const o=mkScene(3.5,3.5,1.8,.04),sc=o.sc,bone=mt('#fff3d6',{roughness:.5});
  const pn=(x,y,t,c)=>{const g=new T.Group();g.position.set(x,y,0);sc.add(g);mesh(new T.BoxGeometry(2.2,2.2,.14),mt(c,{roughness:.7}),0,0,0,g);const l=papan(t,300,90,'rgba(255,255,255,.95)','#1d2b53',46,1.9,.57);l.position.set(0,-.78,.1);g.add(l);return g;};
  const p1=pn(-1.2,2.8,'Penopang','#fff3c4'),p2=pn(1.2,2.8,'Pelindung','#d9f3ff'),p3=pn(-1.2,.4,'Tempat otot','#ffe3e3'),p4=pn(1.2,.4,'Gerak','#ddf7ee');
  const sp=[];for(let i=0;i<5;i++)sp.push(ell(bone,.2,.14,.2,0,-.35+i*.24,.2,p1));const sk=ell(bone,.38,.42,.36,0,.95,.2,p1);
  const shp=new T.Shape();shp.moveTo(0,.7);shp.bezierCurveTo(.5,.7,.55,.5,.55,.4);shp.bezierCurveTo(.55,-.15,.2,-.5,0,-.7);shp.bezierCurveTo(-.2,-.5,-.55,-.15,-.55,.4);shp.bezierCurveTo(-.55,.5,-.5,.7,0,.7);
  const sg=new T.ExtrudeGeometry(shp,{depth:.16,bevelEnabled:true,bevelSize:.05,bevelThickness:.05,bevelSegments:2,curveSegments:14});sg.translate(0,0,-.08);
  const sd=new T.Group();sd.position.set(0,.15,.2);sd.scale.setScalar(.85);p2.add(sd);mesh(sg,mt('#3b8fe0',{roughness:.35}),0,0,0,sd);
  const hm=new T.MeshStandardMaterial({color:C('#ff4d6d'),emissive:C('#ff2d55'),emissiveIntensity:.35,roughness:.35}),hr=heart(.5,hm);hr.position.set(0,.1,.2);sd.add(hr);
  const bn=new T.Group();bn.position.set(0,.15,.2);bn.rotation.z=.5;p3.add(bn);mesh(capGeo(.12,1.1),bone,0,0,0,bn);[-1,1].forEach(s=>{ell(bone,.2,.2,.2,-.1,s*.62,0,bn);ell(bone,.2,.2,.2,.1,s*.62,0,bn);});
  const mu=ell(new T.MeshStandardMaterial({color:C('#ff6b6b'),roughness:.45}),.3,.5,.28,.22,0,.1,bn);
  const k=KID.g();k.g.scale.setScalar(.5);k.g.position.set(0,-.65,.1);p4.add(k.g);k.pose('lari');
  return Object.assign(o,{upd(dt,t){k.upd(dt,t,L0);sk.position.y=.95+.04*Math.sin(t*2);sd.rotation.y=.5*Math.sin(t*1.2);const bp=Math.pow(Math.max(0,Math.sin(t*3.2)),3);hr.scale.setScalar(.5*(1+.18*bp));hm.emissiveIntensity=.3+.5*bp;
    const c=.5+.5*Math.sin(t*2.4);mu.scale.set(.3*(1+.5*c),.5*(1-.35*c),.28*(1+.5*c));sp.forEach((s,i)=>{s.position.x=.03*Math.sin(t*2+i);});}});};

/* tinggi badan */
S['s:tinggi']=v=>{const [o,is]=pulauScene(3.4,3.2,1.7);
  const bc=document.createElement('canvas');bc.width=128;bc.height=512;const x=bc.getContext('2d');x.fillStyle='#ffd93b';x.fillRect(0,0,128,512);x.strokeStyle='#1d2b53';x.fillStyle='#1d2b53';x.font='800 22px "Baloo 2",Nunito,sans-serif';
  for(let i=0;i<=24;i++){const y=500-i*20,big=i%5===0;x.lineWidth=big?3:2;x.beginPath();x.moveTo(0,y);x.lineTo(big?60:34,y);x.stroke();if(big&&i)x.fillText(i*5,66,y+7);}
  const tx=new T.CanvasTexture(bc);tx.encoding=T.sRGBEncoding;tx.anisotropy=4;
  const bd=new T.Group();bd.position.set(1.7,0,-.4);is.add(bd);mesh(new T.BoxGeometry(.9,4.8,.12),mt('#e0a800'),0,2.4,-.07,bd);const pl=new T.Mesh(new T.PlaneGeometry(.9,4.8),new T.MeshBasicMaterial({map:tx}));pl.position.set(0,2.4,0);bd.add(pl);
  const sl=new T.Group();bd.add(sl);mesh(new T.BoxGeometry(1.6,.1,.5),mt('#e63946'),-.8,0,.2,sl);mesh(new T.BoxGeometry(.2,.3,.5),mt('#e63946'),0,0,.2,sl);
  const k=KID.b();k.g.position.set(.4,0,.3);k.g.rotation.y=.2;is.add(k.g);k.pose('lambai',-1);
  const ap=new T.Group();ap.position.set(-2.1,1.6,.6);o.sc.add(ap);ell(mt('#e63946',{roughness:.35}),.4,.38,.4,0,0,0,ap);mesh(G('st',()=>new T.CylinderGeometry(.03,.03,.2,6)),mt('#6b4423'),0,.42,0,ap);ell(mt('#3fae49'),.15,.05,.08,.13,.46,0,ap);
  pohon(is,-2.4,-1.5,.6);
  return Object.assign(o,{upd(dt,t){const g=1+.025*Math.sin(t*1.1);k.g.scale.setScalar(g);k.upd(dt,t,L0);const top=2.75*g+.05,ph=.5+.5*Math.sin(t*.9);sl.position.set(0,MU.lerp(top,top+1.1,ph*ph),0);ap.position.y=1.6+.2*Math.sin(t*2);ap.rotation.y=t;}});};

/* lempar: lemparan ke sasaran */
S['s:lempar']=v=>{const [o,is]=pulauScene(4.1,4.0,1.5);
  const k=KID.g();k.g.position.set(-2.6,0,0);k.g.rotation.y=PI/2;is.add(k.g);k.pose('lempar');
  const st=new T.Group();st.position.set(2.8,0,0);is.add(st);mesh(new T.CylinderGeometry(.07,.09,2.2,10),mt('#8b5a2b'),0,1.1,0,st);
  const rg=mesh(new T.TorusGeometry(.6,.09,10,28),mt('#ff6b6b',{roughness:.4}),0,2.3,0,st);rg.rotation.y=PI/2;
  const bl=ell(mt('#ffd93b',{roughness:.3}),.22,.22,.22,0,0,0,o.sc);
  for(let i=1;i<=10;i++){const u=i/11;ell(mt('#ffffff'),.05,.05,.05,MU.lerp(-1.9,2.8,u),2.3+ -.3*0+Math.sin(PI*u)*1.4-.3*(1-u)+(.0),0,is);}
  pohon(is,-3.3,-1.9,.55);pohon(is,3.5,-1.8,.5);
  const P=3.0;
  return Object.assign(o,{upd(dt,t){const uu=(t%P)/P;k.setPhase(uu*PI*2+PI/2);k.upd(dt,t,L0,true);
    const f=Math.min(1,uu/.5);if(uu<.5){bl.visible=true;bl.position.set(MU.lerp(-1.9,2.8,f),2.3+Math.sin(PI*f)*1.4-.3*(1-f)+.0,0);}else{bl.visible=false;}
    rg.scale.setScalar(uu>.5&&uu<.65?1+.25*Math.sin((uu-.5)/.15*PI):1);}});};

/* aman: pemanasan sebelum bergerak */
S['s:aman']=v=>{const [o,is]=pulauScene(3.5,3.3,1.5);
  const k=KID.b();is.add(k.g);
  const bt=new T.Group();bt.position.set(2.1,0,.9);is.add(bt);mesh(new T.CylinderGeometry(.22,.22,.8,16),mt('#4aa8ff',{roughness:.2}),0,.4,0,bt);mesh(new T.CylinderGeometry(.1,.1,.14,12),mt('#ffffff'),0,.87,0,bt);
  const sp=new T.Group();sp.position.set(-2.1,0,1);is.add(sp);[-.3,.3].forEach(x=>{ell(mt('#ffffff',{roughness:.5}),.22,.15,.4,x,.15,0,sp);ell(mt('#e63946'),.23,.05,.41,x,.03,0,sp);});
  pohon(is,-2.6,-1.5,.6);pohon(is,2.6,-1.6,.55);
  const urut=['putar','sorak'];let ix=-1;
  return Object.assign(o,{upd(dt,t){const n=Math.floor(t/3.6)%urut.length;if(n!==ix){ix=n;k.pose(urut[n]);k.face(n?'senang':'senyum');}k.upd(dt,t,L0);sp.rotation.y=Math.sin(t)*.4;}});};

/* main: permainan tradisional lain (kelereng & gasing) */
S['s:main']=v=>{const [o,is]=pulauScene(3.5,3.4,1.1,.5);
  const ring=mesh(new T.TorusGeometry(1.9,.05,8,48),mt('#ffffff',{roughness:.9}),0,.04,0,is);ring.rotation.x=PI/2;
  const cl=['#ff6b6b','#3ec9a7','#8fd3ff','#ffc93c','#b86bff','#ff9ad5'];
  const mr=cl.map((c,i)=>ell(new T.MeshStandardMaterial({color:C(c),roughness:.06,metalness:.1}),.24,.24,.24,0,.25,0,is));
  const gs=new T.Group();is.add(gs);mesh(new T.ConeGeometry(.45,.65,24),mt('#ffc93c',{roughness:.3}),0,.33,0,gs).rotation.x=PI;ell(mt('#3b6fb6',{roughness:.3}),.5,.16,.5,0,.72,0,gs);mesh(new T.CylinderGeometry(.06,.06,.35,8),mt('#8b5a2b'),0,.95,0,gs);
  pohon(is,-2.6,-1.4,.6);pohon(is,2.7,-1.5,.55);bunga(is,-1.4,1.9,'#ff6b6b');bunga(is,1.5,1.8,'#ffc93c');
  return Object.assign(o,{upd(dt,t){gs.rotation.y=t*13;gs.rotation.z=.07*Math.sin(t*1.4);mr.forEach((m,i)=>{const a=t*(.5+i*.12)+i*1.05,r=.85+(i%3)*.32;m.position.set(Math.cos(a)*r,.25,Math.sin(a)*r);m.rotation.x=t*3;m.rotation.z=t*2;});}});};

/* kuis: karakter pendamping saat mengerjakan soal. state('ok') / state('no') dipanggil dari script.js */
S['kuis']=v=>{const o=mkScene(3.3,3.8,1.9,.18),sc=o.sc;
  mesh(new T.CylinderGeometry(2.5,2.5,.18,48),mt('#7fd35a',{roughness:.9}),0,-.09,0,sc);mesh(new T.CylinderGeometry(2.4,1.3,.7,48),mt('#a2734a',{roughness:.95}),0,-.53,0,sc);
  const k=(v.cv.dataset.warna==='b'?KID.b:KID.g)();sc.add(k.g);k.pose('mikir');
  const q=papan('?',140,140,'rgba(255,255,255,.96)','#1d2b53',100,1.3,1.3);q.position.set(1.8,3.7,.5);sc.add(q);
  const ok=lbl('Hebat! ⭐',2.4),no=lbl('Semangat, ayo lagi!',3.1);ok.position.set(0,4.6,.5);no.position.set(0,4.2,.5);ok.visible=no.visible=false;sc.add(ok,no);
  const st=[];for(let i=0;i<10;i++){const s=mesh(G('oc',()=>new T.OctahedronGeometry(.16)),basic('#ffd93b'),0,0,0,sc);s.visible=false;s.userData={vx:0,vy:0,vz:0,l:0};st.push(s);}
  let mode='';
  return Object.assign(o,{state(s){mode=s;q.visible=false;ok.visible=s==='ok';no.visible=s==='no';
    if(s==='ok'){k.pose('loncat').face('senang');st.forEach((a,i)=>{const an=i/10*PI*2;a.userData={vx:Math.cos(an)*2.6,vy:2+Math.random()*2,vz:Math.sin(an)*1,l:1};a.position.set(0,2.6,.4);a.visible=true;});}
    else{k.pose('diri').face('bingung');}},
    upd(dt,t){k.upd(dt,t,L0);if(!mode){q.position.y=3.7+.12*Math.sin(t*3);q.scale.setScalar(1+.05*Math.sin(t*3));}
    st.forEach(a=>{const u=a.userData;if(u.l>0){u.l-=dt*.9;u.vy-=6*dt;a.position.x+=u.vx*dt;a.position.y+=u.vy*dt;a.position.z+=u.vz*dt;a.rotation.y+=dt*6;a.scale.setScalar(Math.max(.01,u.l));if(u.l<=0)a.visible=false;}});}});};
})();
