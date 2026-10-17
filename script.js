/* ===== DATA MATERI (edit di sini untuk menambah materi) ===== */
const PARTS={
  kepala:['Rangka Kepala','Melindungi otak, bola mata, hidung, dan saluran pernapasan atas.'],
  dada:['Rangka Dada','Melindungi jantung dan paru-paru.'],
  pinggul:['Rangka Pinggul','Melindungi alat pencernaan dan alat reproduksi bagian dalam.']};
const MISI=[
 {e:'🦴',j:'Rangka Pelindung Tubuh',s:[
  {e:'🏠',h:'Rangka itu seperti rumah',p:'Rangka melindungi kita seperti rumah melindungi dari panas dan hujan. Rangka membuat tubuh berdiri tegak. Tanpa rangka, tubuh bisa meliuk seperti karet!'},
  {skel:1,h:'Tiga bagian rangka',p:'Geser rangkanya untuk memutar, lalu sentuh bagian yang ingin kamu ketahui tugasnya!'},
  {e:'📦',h:'Seperti kemasan buah',p:'Buah diberi kemasan supaya bersih, aman, dan tidak mudah rusak. Begitu juga rangka: tugas terpentingnya melindungi organ dalam tubuh.'},
  {ruler:1,h:'Ayo mengukur dengan mistar'},
  {q:'Fungsi terpenting rangka adalah ... organ dalam.',o:['melindungi','menghangatkan','mengubah'],a:0},
  {q:'Rangka dada melindungi ...',o:['otak dan mata','jantung dan paru-paru','alat pencernaan'],a:1},
  {q:'Rangka kepala melindungi ...',o:['otak','jantung','perut'],a:0}]},
 {e:'🏃',j:'Jalan dan Lari',s:[
  {e:'🏃',h:'Bergerak itu seru!',p:'Bermain itu menyenangkan. Ada permainan yang menggabungkan gerak berjalan dan berlari, namanya Lempar dan Tangkap.'},
  {e:'🛍️',h:'Lempar dan Tangkap',p:'Dua anak menerbangkan kantong plastik berbeda warna, lalu menangkap kantong plastik lawan. Mulai dari jarak 3 meter sambil berjalan. Lalu 6-8 meter: berjalan cepat, kemudian berlari. Makin jauh jaraknya, sampai ada yang menang.'},
  {e:'💪',h:'Manfaat bergerak',p:'Bergerak membuat tubuh bugar, tulang dan otot kuat, dan hati senang. Ayo bergerak setiap hari!'},
  {q:'Jarak awal permainan sambil berjalan adalah ...',o:['3 meter','10 meter','1 meter'],a:0},
  {q:'Gerak apa yang ada di permainan ini?',o:['Berenang dan menyelam','Berjalan dan berlari','Tidur dan duduk'],a:1}]},
 {e:'🦘',j:'Lompat dan Loncat',s:[
  {e:'🦘',h:'Apa bedanya?',p:'<b>Lompat</b>: mendorong tubuh ke atas dengan <b>satu kaki</b>.<br><b>Loncat</b>: mendorong tubuh ke atas dengan <b>dua kaki</b>.'},
  {e:'🪢',h:'Lompat tali dan loncat kotak',p:'Lompat tali melatih ketangkasan. Pegang kedua ujung tali, ayunkan melewati kepala dan kaki sambil melompat. Lalu loncati beberapa kotak dan mendaratlah dengan dua kaki.'},
  {e:'🏅',h:'Lompat raih dan lompat jauh',p:'1. Lari cepat, pandangan ke depan.<br>2. Tolak dengan satu kaki terkuat.<br>3. Ayunkan lengan ke depan.<br>4. Julurkan kedua kaki, lalu mendarat dengan dua kaki dan lutut agak ditekuk.'},
  {q:'Lompat dilakukan dengan ...',o:['satu kaki','dua kaki','tangan'],a:0},
  {q:'Loncat dilakukan dengan ...',o:['satu kaki','dua kaki','kepala'],a:1},
  {q:'Saat mendarat, lutut sebaiknya ...',o:['lurus kaku','agak ditekuk','diangkat'],a:1}]},
 {e:'🎯',j:'Permainan Tradisional',s:[
  {e:'🇮🇩',h:'Kaya permainan',p:'Indonesia punya banyak permainan tradisional. Satu permainan bisa punya nama berbeda di tiap daerah. Apa permainan tradisional di daerahmu?'},
  {e:'🟦',h:'Engklek',p:'Pemain: 2-5 orang.<br>Alat: kapur dan batu tipis untuk tiap pemain.<br><b>Ganti pemain jika:</b> kaki menginjak garis, batu mengenai garis, atau batu keluar arena.'},
  {q:'Berapa jumlah pemain engklek?',o:['2-5 orang','10 orang','1 orang'],a:0},
  {q:'Alat untuk bermain engklek adalah ...',o:['bola dan raket','kapur dan batu tipis','tali dan kotak'],a:1},
  {q:'Pemain berganti jika ...',o:['batu keluar arena','sedang tertawa','sudah makan'],a:0}]},
 {e:'📝',j:'Rencana dan Atlet',s:[
  {e:'📝',h:'Rencanakan permainan',p:'Bersama keluargamu, pilih satu permainan tradisional. Tentukan siapa pemainnya, alat apa yang dibutuhkan, dan apa aturannya.'},
  {e:'🥇',h:'Belajar dari atlet',p:'Atlet hebat berlatih dengan disiplin dan percaya diri. Kamu juga bisa membaca buku biografi atlet untuk mendapat semangat baru.'},
  {ruler:1,h:'Sentimeter dan milimeter'},
  {q:'1 sentimeter sama dengan ... milimeter.',o:['10','100','5'],a:0},
  {q:'Atlet hebat berlatih dengan ...',o:['malas','disiplin','asal-asalan'],a:1}]},
 {e:'🎉',j:'Proyek Laporan',s:[
  {e:'📋',h:'Buat laporanmu',p:'Tulis laporan permainan atau olahraga tradisional:<br>1. Nama permainan<br>2. Jumlah pemain dan alat<br>3. Langkah-langkah bermain<br>4. Aturan<br>5. Ceritakan serunya!'},
  {e:'👨‍👩‍👧',h:'Main bersama keluarga',p:'Ajak keluargamu mencoba permainannya, lalu foto atau gambar hasilnya. Selamat menyelesaikan petualangan!'},
  {q:'Bagian apa yang ada di laporan permainan?',o:['Langkah-langkah bermain','Resep masakan','Jadwal TV'],a:0}]}
];


/* ===== SOAL TAMBAHAN (jawaban benar selalu index 0; urutan diacak saat tampil) ===== */
const Q=(q,o)=>({q,o,a:0});
const EXTRA=[
 [Q('Rangka membuat tubuh kita bisa ...',['berdiri tegak','meleleh','terbang']),Q('Rangka pinggul melindungi ...',['alat pencernaan','otak','jantung']),Q('Rangka kepala, rangka dada, dan rangka ...',['pinggul','tangan','telinga']),Q('Rangka diibaratkan seperti ...',['rumah pelindung','balon','selimut'])],
 [Q('Di permainan Lempar dan Tangkap, anak menangkap ...',['kantong plastik lawan','bola basket','layang-layang']),Q('Setelah berjalan cepat, gerakan berikutnya adalah ...',['berlari','tidur','duduk']),Q('Manfaat bergerak: tubuh menjadi ...',['bugar','lemas','kaku']),Q('Permainan ini dimainkan oleh ... anak.',['dua','satu','sepuluh'])],
 [Q('Lompat tali melatih ...',['ketangkasan','rasa kantuk','kemalasan']),Q('Pada loncat kotak, kita mendarat dengan ...',['dua kaki','satu kaki','kepala']),Q('Pada lompat raih, kita menolak dengan ...',['satu kaki terkuat','dua tangan','kepala']),Q('Agar mahir melompat, kita harus ...',['berlatih disiplin','bermalas-malasan','takut mencoba'])],
 [Q('Nama lain engklek adalah ...',['sundamanda','petak umpet','congklak']),Q('Batu pertama dilempar ke kotak nomor ...',['1','9','0']),Q('Kotak engklek digambar dengan ...',['kapur','lem','pulpen']),Q('Engklek dimainkan sambil melompat dengan ...',['satu kaki','tiga kaki','merangkak'])],
 [Q('2 cm sama dengan ... mm.',['20','2','200']),Q('50 mm sama dengan ... cm.',['5','50','500']),Q('Sebelum bermain, kita tentukan ...',['pemain, alat, dan aturan','warna baju','jam makan']),Q('Atlet hebat percaya pada ...',['kemampuan dirinya','kemalasan','keberuntungan saja'])],
 [Q('Laporan permainan memuat ... bermain.',['langkah-langkah','lagu','resep']),Q('Setelah menulis laporan, kita ...',['mencoba bermain bersama keluarga','melupakannya','tidur']),Q('Selain langkah, laporan memuat ...',['nama permainan','harga sepatu','jadwal TV']),Q('Permainan tradisional perlu kita ...',['lestarikan','lupakan','hindari'])]];
EXTRA.forEach((x,i)=>MISI[i].s.push(...x));
/* ===== MATERI TAMBAHAN (disisipkan sebelum latihan soal) ===== */
const MORE=[
 [{e:'fungsi',h:'4 tugas rangka',p:'1. <b>Penopang</b>: menegakkan tubuh.<br>2. <b>Pelindung</b>: menjaga organ dalam.<br>3. <b>Tempat melekat otot</b>.<br>4. <b>Alat gerak</b>: bersama otot, tulang menggerakkan tubuh.'},
  {e:'sendi',h:'Sendi: tempat tulang bertemu',p:'Di tempat dua tulang bertemu ada <b>sendi</b>, sehingga kita bisa menekuk dan memutar tubuh.<br>• <b>Sendi engsel</b> (siku, lutut): seperti engsel pintu, maju-mundur.<br>• <b>Sendi putar</b> (leher): bisa menoleh.<br>• <b>Sendi peluru</b> (bahu, pinggul): bisa memutar ke segala arah.'},
  {e:'otot',h:'Otot: penggerak tulang',p:'Tulang tidak bisa bergerak sendiri. <b>Otot</b> menempel pada tulang. Saat otot <b>mengerut</b>, tulang tertarik dan bergerak. Otot bekerja berpasangan: saat satu mengerut, pasangannya mengendur. Coba tekuk sikumu, lalu raba bagian atas lenganmu!'},
  {e:'tinggi',h:'Tinggi badan',p:'Tinggi badan berhubungan dengan rangka dan otot tubuh. Makan makanan bergizi dan rajin bergerak membuat tulang dan otot tumbuh kuat.'}],
 [{e:'jalan',h:'Jalan dan lari beda apa?',p:'Gerak yang membuat kita berpindah tempat disebut <b>gerak lokomotor</b>.<br>• <b>Berjalan</b>: salah satu kaki selalu menyentuh tanah.<br>• <b>Berlari</b>: ada saat kedua kaki terangkat dari tanah, dan gerakannya lebih cepat.'},
  {e:'aman',h:'Pemanasan dulu!',p:'Sebelum berlari atau melompat, lakukan <b>pemanasan</b> supaya otot siap dan tidak cedera: putar leher, bahu, pinggang, lalu lutut. Setelah bergerak, minum air putih.'}],
 [{e:'lempar',h:'Gerak melempar',p:'Tatap sasaranmu, ayunkan lengan dari belakang ke depan, lalu lepaskan bendanya. Di permainan sebelumnya, anak melempar kantong plastik ke atas lalu bergerak menangkapnya.'},
  {e:'aman',h:'Keselamatan diri',p:'• Pilih tempat yang datar dan tidak licin.<br>• Pakai sepatu yang nyaman.<br>• Mendarat dengan lutut agak ditekuk.<br>• Kalau badan terasa sakit, berhenti dan beri tahu orang dewasa.'}],
 [{e:'langkah',h:'Cara bermain engklek',p:'1. Gambar kotak-kotak bernomor dengan kapur.<br>2. Lempar batu ke kotak 1, lalu melompat dengan satu kaki sampai kotak terakhir dan kembali lagi.<br>3. Di kotak yang berdampingan, boleh mendarat dengan dua kaki.<br>4. Setelah semua kotak dilewati, lempar batu sambil menghadap ke belakang. Kotak tempat batu jatuh diberi tanda bintang sebagai wilayahmu.'},
  {e:'main',h:'Permainan tradisional lain',p:'Selain engklek ada <b>lompat tali</b>, <b>kelereng</b>, <b>gobak sodor</b>, <b>egrang</b>, dan masih banyak lagi. Semuanya melatih gerak tubuh, kerja sama, dan sportivitas. Apa permainan tradisional di daerahmu?'}],
 [{e:'📏',h:'Sentimeter dan milimeter',p:'Pada mistar, jarak antara dua angka besar adalah <b>1 cm</b>. Di antaranya ada 10 garis kecil, jaraknya <b>1 mm</b>. Jadi <b>1 cm = 10 mm</b>. Contoh: 3 cm = 30 mm.'}],
 [{e:'📋',h:'Contoh laporan',p:'<b>Permainan:</b> Engklek<br><b>Pemain:</b> 2-5 orang<br><b>Alat:</b> kapur dan batu tipis<br><b>Cara bermain:</b> lempar batu, lompat satu kaki, kembali.<br><b>Aturan:</b> tidak boleh menginjak garis.'}]];
MORE.forEach((x,i)=>{const k=MISI[i].s.findIndex(y=>y.ruler||y.q);MISI[i].s.splice(k,0,...x);});


/* ===== ILUSTRASI SVG (kunci = emoji yang dipakai di data) ===== */
const KULIT='#ffd7b0',INK='#1d2b53';
const LAT=`<defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fc3ff"/><stop offset="1" stop-color="#e3f6ff"/></linearGradient></defs><rect width="200" height="200" fill="url(#lg)"/><circle cx="165" cy="34" r="22" fill="#ffd93b" opacity=".35"/><circle cx="165" cy="34" r="16" fill="#ffd93b"/><g fill="#fff"><ellipse cx="45" cy="32" rx="24" ry="9"/><ellipse cx="60" cy="26" rx="15" ry="9"/><ellipse cx="120" cy="54" rx="20" ry="7"/></g><path d="M0 138Q45 112 100 134T200 128V200H0Z" fill="#8bdc5c"/><rect y="152" width="200" height="48" fill="#5cc43f"/><rect x="173" y="108" width="8" height="38" fill="#8b5a2b"/><circle cx="177" cy="98" r="20" fill="#2fa84f" stroke="#1d2b53" stroke-width="3"/><circle cx="12" cy="176" r="3.5" fill="#ff6b9d"/><circle cx="34" cy="188" r="3.5" fill="#ffd93b"/><circle cx="168" cy="182" r="3.5" fill="#ff6b9d"/><circle cx="188" cy="170" r="3.5" fill="#fff"/>`;
const T=(x,y,t,z=16)=>`<text x="${x}" y="${y}" font-size="${z}" font-weight="800" text-anchor="middle" fill="${INK}">${t}</text>`;
function anak(x,y,c,p,s=1,h,e='senyum',u=false,m=false){
  const G=c==='#ff6b6b',K=G?'#efc19a':'#d9a074',R=h||(G?'#2a1a14':'#1c120d'),N='#1d2b53',B=u?'#fff':c,M='#d62839',
  P={diri:[[-15,22,-14,40],[15,22,14,40],[-6,66,-7,88],[6,66,7,88]],jalan:[[-14,22,-18,38],[14,22,17,40],[-8,64,-13,88],[8,64,12,84]],
   lari:[[-20,14,-24,0],[18,24,24,40],[-14,64,-30,76],[7,66,12,88]],lompat:[[-22,-8,-28,-26],[22,-8,28,-26],[-6,66,-5,90],[17,58,10,78]],
   loncat:[[-22,-8,-28,-26],[22,-8,28,-26],[-14,62,-20,82],[14,62,20,82]],lempar:[[-14,22,-10,36],[22,-14,20,-34],[-6,66,-7,88],[8,64,14,88]],
   mikir:[[-12,24,6,22],[10,20,2,-4],[-6,66,-7,88],[6,66,7,88]],lambai:[[-22,-6,-30,-30],[15,22,14,40],[-6,66,-7,88],[6,66,7,88]]}[p];
  const L=(a,b,q,r,t,v,w,c1,c2)=>`<path d="M${a} ${b}L${q} ${r}L${t} ${v}" fill="none" stroke="${N}" stroke-width="${w+2.6}" stroke-linecap="round" stroke-linejoin="round"/><path d="M${a} ${b}L${q} ${r}" stroke="${c1}" stroke-width="${w}" stroke-linecap="round"/><path d="M${q} ${r}L${t} ${v}" stroke="${c2}" stroke-width="${w-1}" stroke-linecap="round"/>`;
  const kaki=(hx,l)=>{const[q,r,t,v]=l,f=u?.3:.55,sx=q+(t-q)*f,sy=r+(v-r)*f;
    return L(hx,44,q,r,t,v,8,K,K)+`<path d="M${sx} ${sy}L${t} ${v}" stroke="#fff" stroke-width="7" stroke-linecap="round"/><ellipse cx="${t+(t<0?-3:3)}" cy="${v+3}" rx="9" ry="4.8" fill="${u?'#2b2b33':'#fff'}" stroke="${N}" stroke-width="2.4"/>`+(u?'':`<path d="M${t-6} ${v+6}h12" stroke="#e63946" stroke-width="2.4" stroke-linecap="round"/>`);};
  const tangan=(sx,l,w)=>L(sx,3,l[0],l[1],l[2],l[3],8,B,K)+`<circle cx="${l[2]}" cy="${l[3]}" r="3.8" fill="${K}" stroke="${N}" stroke-width="2"/>`+(w?['M-3 -3L-4.5 -9','M-1 -4L-1.5 -10.5','M1.5 -4L2 -10','M3.6 -2.5L6 -7'].map(d=>`<path transform="translate(${l[2]} ${l[3]})" d="${d}" stroke="${N}" stroke-width="4" stroke-linecap="round"/><path transform="translate(${l[2]} ${l[3]})" d="${d}" stroke="${K}" stroke-width="2.2" stroke-linecap="round"/>`).join(''):'');
  const mulut={senyum:`<path d="M-4.5 -10.5Q0 -6 4.5 -10.5" fill="none" stroke="${N}" stroke-width="1.6" stroke-linecap="round"/>`,senang:`<path d="M-5 -11Q0 -3.5 5 -11Z" fill="#fff" stroke="${N}" stroke-width="1.5" stroke-linejoin="round"/><path d="M-2.6 -6.6Q0 -5 2.6 -6.6Q0 -8 -2.6 -6.6Z" fill="#ff8fa3"/>`,bingung:`<path d="M-3.5 -8.5Q0 -11 3.5 -8.5" fill="none" stroke="${N}" stroke-width="1.6" stroke-linecap="round"/>`}[e];
  const alis=e==='bingung'?'M-7.8 -20.5L-2 -23.5M7.8 -20.5L2 -23.5':'M-7.8 -21.2Q-4.6 -23.4 -2 -21.8M7.8 -21.2Q4.6 -23.4 2 -21.8';
  const mata=[-4.6,4.6].map(ex=>`<ellipse cx="${ex}" cy="-16.5" rx="2.7" ry="3" fill="#fff"/><circle cx="${ex}" cy="-16.3" r="1.95" fill="#4a2c17"/><circle cx="${ex}" cy="-16.3" r="1" fill="${N}"/><circle cx="${ex+.7}" cy="-17.2" r=".7" fill="#fff"/>`).join('');
  const kepala=`<g transform="rotate(${p==='mikir'?8:0} 0 -8)">${G?`<path d="M-13.5 -20Q-15.5 -4 -10 -2L10 -2Q15.5 -4 13.5 -20Q10 -33.5 0 -33Q-10 -33.5 -13.5 -20Z" fill="${R}" stroke="${N}" stroke-width="2" stroke-linejoin="round"/>`:`<circle cx="-11.3" cy="-16" r="2.7" fill="${K}" stroke="${N}" stroke-width="1.8"/><circle cx="11.3" cy="-16" r="2.7" fill="${K}" stroke="${N}" stroke-width="1.8"/>`}
   <ellipse cy="-17" rx="11" ry="11.8" fill="${K}" stroke="${N}" stroke-width="2.6"/>
   ${G?`<path d="M-11.5 -21Q-5 -31 6 -28Q11 -26 11.8 -19Q4 -23 -2 -20.5Q-7 -19 -11.5 -21Z" fill="${R}" stroke="${N}" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 -30L16 -35L16 -26Z M8 -30L0 -35L0 -26Z" fill="${M}" stroke="${N}" stroke-width="1.4" stroke-linejoin="round"/><circle cx="8" cy="-30" r="2" fill="#a4161a"/><path d="M-7.6 -17.5l-1.5 -1M7.6 -17.5l1.5 -1" stroke="${N}" stroke-width="1.2"/>`
   :`<path d="M-12 -19Q-14 -32 0 -31.5Q14 -32 12 -19Q10 -25 2 -26Q-6 -22 -12 -19Z" fill="${R}" stroke="${N}" stroke-width="2" stroke-linejoin="round"/><path d="M-2 -31.5Q1 -37 6 -33" fill="none" stroke="${R}" stroke-width="3" stroke-linecap="round"/>`}
   ${mata}<path d="${alis}" stroke="${R}" stroke-width="1.7" fill="none" stroke-linecap="round"/><path d="M0 -15Q2 -12.4 -.5 -12.1" stroke="#b9825a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
   <circle cx="-7.6" cy="-11.5" r="2.3" fill="#ff8f8f" opacity=".45"/><circle cx="7.6" cy="-11.5" r="2.3" fill="#ff8f8f" opacity=".45"/>${mulut}</g>`;
  const tas=u?`<rect x="-17" y="0" width="34" height="39" rx="10" fill="${G?'#4caf50':'#3b6fb6'}" stroke="${N}" stroke-width="2.6"/><rect x="-10" y="24" width="20" height="11" rx="4" fill="#000" opacity=".14"/>`:'';
  const tali=u?`<path d="M-8 3L-9 30M8 3L9 30" stroke="${G?'#2e7d32':'#274c80'}" stroke-width="3.4" stroke-linecap="round"/>`:'';
  const bawah=u&&G?`<path d="M-10 38L10 38L17 63L-17 63Z" fill="${M}" stroke="${N}" stroke-width="2.6" stroke-linejoin="round"/><path d="M-4 41L-6 62M0 41L0 63M4 41L6 62" stroke="#a4161a" stroke-width="1.3"/>`
   :`<path d="M-10 38L10 38L12 56L2 56L0 47L-2 56L-12 56Z" fill="${u?M:'#2b4a9e'}" stroke="${N}" stroke-width="2.6" stroke-linejoin="round"/>`;
  return `<g transform="translate(${x} ${y}) scale(${(m?-1:1)*s*.88} ${s*.88})"><ellipse cx="0" cy="92" rx="22" ry="3.5" fill="${N}" opacity=".18"/>${kaki(-5,P[2])}${kaki(5,P[3])}${tas}
  <path d="M-12 3Q0 -3 12 3L10 42Q0 46 -10 42Z" fill="${B}" stroke="${N}" stroke-width="2.6" stroke-linejoin="round"/>${u?'':`<path d="M-11 18H11" stroke="#fff" stroke-width="2.4" opacity=".7"/>`}
  ${bawah}${tali}<rect x="-4" y="-8" width="8" height="11" fill="${K}"/><path d="M-6.5 2.5L0 11L6.5 2.5L9.5 5L0 15L-9.5 5Z" fill="#fff" stroke="${N}" stroke-width="1.6" stroke-linejoin="round"/>${kepala}${tangan(-11,P[0],p==='lambai')}${tangan(11,P[1])}</g>`;}
const bag=(x,y,c)=>`<path d="M${x} ${y}Q${x+20} ${y-20} ${x+35} ${y+2}Q${x+20} ${y+22} ${x} ${y+16}Z" fill="${c}" stroke="${INK}" stroke-width="3"/>`;
const kertas=x=>`<rect width="200" height="200" fill="#fff3c4"/><rect x="50" y="25" width="100" height="150" rx="8" fill="#fff" stroke="${INK}" stroke-width="4"/>${[60,85,110,135].map(y=>`<line x1="65" x2="135" y1="${y}" y2="${y}" stroke="#8fd3ff" stroke-width="4"/>`).join('')}${x}`;
const ART={
 '🏠':()=>LAT+`<rect x="45" y="85" width="110" height="68" fill="#ffc93c" stroke="${INK}" stroke-width="4"/><path d="M33 90L100 35L167 90Z" fill="#ff6b6b" stroke="${INK}" stroke-width="4"/><rect x="88" y="110" width="26" height="43" fill="#3ec9a7" stroke="${INK}" stroke-width="3"/><rect x="55" y="100" width="22" height="22" fill="#fff" stroke="${INK}" stroke-width="3"/><rect x="125" y="100" width="22" height="22" fill="#fff" stroke="${INK}" stroke-width="3"/>`,
 '📦':()=>`<rect width="200" height="200" fill="#fff3c4"/><text x="100" y="105" font-size="56" text-anchor="middle">🍎</text><rect x="55" y="100" width="90" height="62" fill="#d9a066" stroke="${INK}" stroke-width="4"/><rect x="55" y="100" width="90" height="14" fill="#c48a4e" stroke="${INK}" stroke-width="3"/>${T(100,142,'AMAN',18)}`,
 '🏃':()=>LAT+anak(60,62,'#ff6b6b','lari',1.2)+anak(135,62,'#3ec9a7','lari',1.2),
 '🛍️':()=>LAT+anak(45,62,'#ff6b6b','lempar',1.2)+anak(155,62,'#3ec9a7','diri',1.2)+bag(70,35,'#ffc93c')+bag(100,25,'#3ec9a7')+'<path d="M45 168H155" stroke="#1d2b53" stroke-width="3" stroke-dasharray="6 5"/>'+T(100,192,'3 meter'),
 '💪':()=>LAT+anak(100,62,'#ffc93c','diri',1.3)+'<text x="150" y="55" font-size="40">❤️</text><text x="30" y="55" font-size="36">💧</text>',
 '🦘':()=>LAT+anak(55,60,'#ff6b6b','lompat',1.2)+anak(145,50,'#3ec9a7','loncat',1.2)+T(55,184,'1 kaki')+T(145,184,'2 kaki'),
 '🪢':()=>LAT+anak(100,48,'#ff6b6b','loncat',1.3)+`<path d="M58 100Q100 215 142 100" fill="none" stroke="#8b5a2b" stroke-width="5"/><circle cx="58" cy="100" r="7" fill="#ffc93c" stroke="${INK}" stroke-width="3"/><circle cx="142" cy="100" r="7" fill="#ffc93c" stroke="${INK}" stroke-width="3"/>`,
 '🏅':()=>LAT+`<line x1="100" y1="0" x2="100" y2="22" stroke="${INK}" stroke-width="3"/><circle cx="100" cy="30" r="14" fill="#ff6b6b" stroke="${INK}" stroke-width="3"/>`+anak(100,78,'#3ec9a7','lompat',1.2),
 '🇮🇩':()=>`<rect width="200" height="100" fill="#e03c3c"/><rect y="100" width="200" height="100" fill="#fff"/><rect x="8" width="8" height="200" fill="${INK}"/><text x="105" y="70" font-size="42" text-anchor="middle">🎯</text><text x="105" y="160" font-size="42" text-anchor="middle">🪁</text>`,
 '🟦':()=>`<rect width="200" height="200" fill="#e8d7b9"/>`+[[1,[86]],[2,[86]],[3,[58,114]],[4,[86]],[5,[58,114]],[6,[86]]].map(([r,xs],i)=>xs.map((x,j)=>`<rect x="${x}" y="${168-i*30}" width="28" height="28" fill="#fff8e6" stroke="#fff" stroke-width="3"/>${T(x+14,188-i*30,(i<2?i:i==2?2+j:i==3?4:i==4?5+j:7)+1)}`).join('')).join('')+'<circle cx="100" cy="182" r="8" fill="#ff6b6b" stroke="#1d2b53" stroke-width="2"/>',
 '📝':()=>kertas('<polygon points="140,150 175,115 185,125 150,160" fill="#ffc93c" stroke="#1d2b53" stroke-width="3"/>'),
 '📋':()=>kertas(`<path d="M62 62l6 6 10-12M62 87l6 6 10-12M62 112l6 6 10-12" stroke="#3ec9a7" stroke-width="4" fill="none"/><rect x="80" y="18" width="40" height="16" rx="5" fill="#ffc93c" stroke="${INK}" stroke-width="3"/>`),
 '🥇':()=>LAT+`<rect x="60" y="120" width="80" height="35" fill="#ffc93c" stroke="${INK}" stroke-width="4"/>${T(100,146,'1',22)}`+anak(100,38,'#ff6b6b','lompat',1)+'<text x="150" y="60" font-size="38">🥇</text>',
 '👨‍👩‍👧':()=>LAT+anak(52,58,'#ff6b6b','diri',1.3)+anak(100,58,'#3ec9a7','diri',1.3)+anak(150,82,'#ffc93c','lompat',0.9),
 '📏':()=>`<rect width="200" height="200" fill="#fff3c4"/><rect x="15" y="70" width="170" height="60" rx="6" fill="#ffc93c" stroke="${INK}" stroke-width="4"/>`+Array.from({length:13},(_,i)=>`<line x1="${25+i*12.5}" x2="${25+i*12.5}" y1="70" y2="${i%2?88:100}" stroke="${INK}" stroke-width="3"/>`).join('')
};


const lengan=x=>`<path d="M45 72L105 122L160 66" fill="none" stroke="${INK}" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 72L105 122L160 66" fill="none" stroke="${KULIT}" stroke-width="23" stroke-linecap="round" stroke-linejoin="round"/>${x}`;
const kartu=(x,y,e,t)=>`<rect x="${x}" y="${y}" width="85" height="85" rx="14" fill="#fff" stroke="${INK}" stroke-width="3"/><text x="${x+42}" y="${y+50}" font-size="38" text-anchor="middle">${e}</text>${T(x+42,y+74,t,12)}`;
Object.assign(ART,{
 sendi:()=>`<rect width="200" height="200" fill="#e6f7ff"/>`+lengan(`<path d="M45 72L105 122L160 66" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="105" cy="122" r="15" fill="#ffd93b" stroke="${INK}" stroke-width="3.5"/>`)+T(100,172,'Sendi siku',17)+T(100,190,'(sendi engsel)',12),
 otot:()=>`<rect width="200" height="200" fill="#e6f7ff"/>`+lengan(`<ellipse cx="74" cy="88" rx="23" ry="11" transform="rotate(40 74 88)" fill="#ff6b6b" stroke="${INK}" stroke-width="3.5"/>`)+T(100,172,'Otot mengerut',17)+T(100,190,'tulang tertarik',12),
 fungsi:()=>`<rect width="200" height="200" fill="#fff3c4"/>`+kartu(10,8,'🧍','Penopang')+kartu(105,8,'🛡️','Pelindung')+kartu(10,105,'💪','Tempat otot')+kartu(105,105,'🏃','Gerak'),
 tinggi:()=>LAT+anak(75,66,'#3ec9a7','diri',1.25)+`<rect x="140" y="18" width="26" height="134" fill="#ffd93b" stroke="${INK}" stroke-width="3"/>`+Array.from({length:12},(_,i)=>`<line x1="140" x2="${i%2?150:157}" y1="${30+i*10}" y2="${30+i*10}" stroke="${INK}" stroke-width="2"/>`).join('')+T(100,188,'Tinggi badan',16),
 jalan:()=>LAT+anak(55,62,'#3ec9a7','jalan',1.2)+anak(140,62,'#ff6b6b','lari',1.2)+T(55,184,'Jalan')+T(140,184,'Lari'),
 lempar:()=>LAT+anak(50,62,'#ff6b6b','lempar',1.3)+`<path d="M72 22Q120 -10 165 80" fill="none" stroke="${INK}" stroke-width="3" stroke-dasharray="6 5"/><circle cx="125" cy="12" r="10" fill="#ffd93b" stroke="${INK}" stroke-width="3"/><circle cx="168" cy="90" r="12" fill="none" stroke="#ff6b6b" stroke-width="4"/>`,
 aman:()=>LAT+anak(100,58,'#ffc93c','loncat',1.3)+'<text x="35" y="80" font-size="30">💧</text><text x="150" y="150" font-size="30">👟</text>'+T(100,190,'Pemanasan dulu!',15),
 langkah:()=>ART['🟦']()+anak(168,95,'#ff6b6b','lompat',.7),
 main:()=>`<rect width="200" height="200" fill="#ffe8a3"/>`+[[50,70,'#ff6b6b'],[98,52,'#3ec9a7'],[145,75,'#8fd3ff'],[70,125,'#ffc93c'],[122,128,'#b86bff']].map(([a,b,c])=>`<circle cx="${a}" cy="${b}" r="18" fill="${c}" stroke="${INK}" stroke-width="3"/><circle cx="${a-6}" cy="${b-6}" r="5" fill="#fff" opacity=".8"/>`).join('')+T(100,184,'Permainan seru!',16)
});

/* ===== KARAKTER PENDAMPING SAAT MENGERJAKAN SOAL ===== */
const qScene=(w,p,e,ok)=>LAT+anak(100,56,w,p,1.1,undefined,e)+(p==='mikir'?`<circle cx="152" cy="40" r="17" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="138" cy="62" r="4" fill="#fff" stroke="${INK}" stroke-width="2"/><text x="152" y="49" font-size="24" font-weight="800" text-anchor="middle" fill="${INK}">?</text>`:T(100,192,ok?'Hebat! ⭐':'Semangat, ayo lagi!',16));
/* ===== UTIL ===== */
const $=s=>document.querySelector(s), app=$('#app');
const esc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const user={nama:''};let bintang={};
const KUNCI='sg_data',KGURU='sg_guru';
const muatG=()=>{try{return JSON.parse(localStorage.getItem(KGURU))||{}}catch(e){return{}}};
const muat=()=>{try{return JSON.parse(localStorage.getItem(KUNCI))||{}}catch(e){return{}}};
const tulis=d=>{try{localStorage.setItem(KUNCI,JSON.stringify(d))}catch(e){}};
const semua=()=>MISI.every((_,i)=>bintang[i]);
function masuk(nama){user.nama=nama;const u=muat()[nama.toLowerCase()];bintang={};
  if(u)Object.entries(u.m).forEach(([i,x])=>bintang[i]=x.b);}
function simpan(i,skor,tot,b){const d=muat(),id=user.nama.toLowerCase(),u=d[id]||(d[id]={n:user.nama,m:{}}),l=u.m[i];
  if(!l||skor>=l.s)u.m[i]={s:skor,t:tot,b:Math.max(b,l?l.b:0)};
  u.w=new Date().toLocaleString('id-ID');tulis(d);}
function konfeti(){const w=document.createElement('div');w.setAttribute('aria-hidden','true');
  for(let k=0;k<60;k++){const c=document.createElement('i');c.className='konfeti';c.style.left=Math.random()*100+'%';
    c.style.background=['#ff6b6b','#ffc93c','#3ec9a7','#8fd3ff'][k%4];c.style.animationDuration=2.5+Math.random()*3+'s';
    c.style.animationDelay=Math.random()*1.5+'s';w.appendChild(c);}
  document.body.appendChild(w);setTimeout(()=>w.remove(),7000);}
function show(html){app.innerHTML=html;app.firstElementChild.classList.add('pop');if(window.K3D&&K3D.ok)K3D.mount(app);}
function wipe(emoji,fn){const c=$('#curtain');c.textContent=emoji;c.className='up';
  setTimeout(()=>{fn();scrollTo(0,0);c.className='away';setTimeout(()=>c.className='',520);},520);}

/* ===== LATAR & MUSIK ===== */
['☁️','⭐','🎈','🦋','🌈','🏃','🦴'].forEach((e,i)=>{for(let k=0;k<2;k++){const s=document.createElement('span');
  s.textContent=e;s.style.left=Math.random()*95+'%';s.style.animationDuration=16+Math.random()*16+'s';
  s.style.animationDelay=-Math.random()*24+'s';$('#bg').appendChild(s);}});
let ac,playing=false,lagu;
const f=n=>261.63*2**(n/12);
function nada(fr,t,d,v,ty='triangle'){const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.value=fr;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+d);
  o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+d);}
function sfx(ok){if(!ac||!playing)return;const t=ac.currentTime;(ok?[12,16,19,24]:[3,-2]).forEach((n,i)=>nada(f(n),t+i*.09,.3,.12,'square'));}
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),8000);}
function musik(){if(ac)return;ac=new(window.AudioContext||window.webkitAudioContext)();playing=true;
  lagu=new Audio('audio/musik.mp3');lagu.loop=true;lagu.volume=.35;   /* ganti nama file lagu di sini */
  const gagal=()=>toast('Lagu belum bisa dimuat. Pastikan file audio/musik.mp3 ada di folder proyek.');
  lagu.addEventListener('error',gagal);lagu.play().catch(()=>{if(lagu.error)gagal();});
  $('#mus').hidden=false;
  if('mediaSession' in navigator&&window.MediaMetadata){try{navigator.mediaSession.metadata=new MediaMetadata({title:'Petualangan Sistem Gerak',artist:'Musik latar'});
    navigator.mediaSession.setActionHandler('play',()=>{playing=true;$('#mus').textContent='🔊';lagu.play().catch(()=>{});});
    navigator.mediaSession.setActionHandler('pause',()=>{playing=false;$('#mus').textContent='🔇';lagu.pause();});}catch(e){}}}
$('#mus').onclick=()=>{playing=!playing;$('#mus').textContent=playing?'🔊':'🔇';
  if(lagu)playing?lagu.play().catch(()=>{}):lagu.pause();};
/* musik TETAP berputar saat pindah tab / jendela di-minimize. Saat kembali, lanjutkan jika sempat dihentikan sistem (HP) */
document.addEventListener('visibilitychange',()=>{if(lagu&&playing&&!document.hidden&&lagu.paused)lagu.play().catch(()=>{});});

/* ===== MASKOT "ULI SI ULAT" & KARAKTER ===== */
const FAKTA=['Tahukah kamu? Tubuh orang dewasa punya 206 tulang!','Tulang paha adalah tulang terpanjang dan terkuat di tubuhmu.','Tulang terkecil ada di dalam telingamu, lho!','Tulang rusukmu ada 12 pasang untuk melindungi jantung dan paru-paru.','Bayi punya lebih banyak tulang, lalu sebagian menyatu saat ia tumbuh besar.','Ulat tidak punya tulang, geraknya pakai otot. Kamu punya tulang dan otot, jadi bisa lari dan melompat!','Bergerak setiap hari membuat tulang dan ototmu kuat!'];
function maskot(){const O='#1d2b53',KN='#ffd400',GL='#e3a900';
  const tg=`stroke="${O}" stroke-width="4" stroke-linejoin="round"`;
  return `<svg class="maskot" viewBox="0 0 160 200" role="img" aria-label="Uli si Ulat, maskot yang ramah">
  <ellipse cx="80" cy="193" rx="44" ry="6" fill="${O}" opacity=".15"/>
  <g class="antena" style="transform-origin:68px 52px"><path d="M68 52Q58 34 52 24" stroke="${O}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="51" cy="21" r="7" fill="#ff6b6b" ${tg}/></g>
  <g class="antena balik" style="transform-origin:92px 52px"><path d="M92 52Q102 34 108 24" stroke="${O}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="109" cy="21" r="7" fill="#ff6b6b" ${tg}/></g>
  <ellipse cx="62" cy="186" rx="15" ry="7" fill="#ff6b6b" stroke="${O}" stroke-width="3.5"/><ellipse cx="98" cy="186" rx="15" ry="7" fill="#ff6b6b" stroke="${O}" stroke-width="3.5"/>
  <rect x="34" y="44" width="92" height="140" rx="46" fill="${KN}" ${tg}/>
  <path d="M36 150Q80 164 124 150M38 166Q80 178 122 166" stroke="${GL}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="52" cy="112" rx="8" ry="26" fill="#fff" opacity=".35"/>
  <path d="M35 66Q80 50 125 66L124 77Q80 62 36 77Z" fill="#ff6b6b" stroke="${O}" stroke-width="3.5" stroke-linejoin="round"/>
  <g class="mata"><ellipse cx="62" cy="92" rx="15" ry="18" fill="#fff" stroke="${O}" stroke-width="3.5"/><ellipse cx="98" cy="92" rx="15" ry="18" fill="#fff" stroke="${O}" stroke-width="3.5"/>
   <ellipse cx="64" cy="95" rx="7.5" ry="10" fill="${O}"/><ellipse cx="96" cy="95" rx="7.5" ry="10" fill="${O}"/><circle cx="66.5" cy="91" r="3" fill="#fff"/><circle cx="98.5" cy="91" r="3" fill="#fff"/></g>
  <circle cx="44" cy="118" r="7" fill="#ff9aa2" opacity=".8"/><circle cx="116" cy="118" r="7" fill="#ff9aa2" opacity=".8"/>
  <path d="M62 118Q80 142 98 118Z" fill="#c2334d" stroke="${O}" stroke-width="3.2" stroke-linejoin="round"/><ellipse cx="80" cy="130" rx="8" ry="4.5" fill="#ff8fa3"/></svg>`;}
const KIDS=(w,mir)=>`<svg class="anakhero" viewBox="-44 -58 88 158" aria-hidden="true">${anak(0,0,w,'lambai',1.15,undefined,'senang',true,mir)}</svg>`;
const K3=()=>window.K3D&&K3D.ok;
const THM=['🏠','🏃','🦘','🟦','📝','📋'];
const maskotEl=()=>K3()?'<canvas class="k3d mini" data-k3d="mascot" role="img" aria-label="Uli si Ulat, maskot yang ramah"></canvas>':maskot();
const adegan=teks=>K3()?`<div class="adegan k3"><div class="gelembung">${teks}</div><canvas class="k3d hero" data-k3d="hero" role="img" aria-label="Uli si Ulat bersama dua anak sekolah yang melambai"></canvas></div>`:`<div class="adegan">${KIDS('#ff6b6b',false)}<div class="tengah"><div class="gelembung">${teks}</div>${maskot()}</div>${KIDS('#3ec9a7',true)}</div>`;
function ajakBicara(){const g=$('.gelembung'),cv=$('canvas[data-k3d="hero"],canvas[data-k3d="mascot"]');
  if(cv&&g){cv.addEventListener('k3dtap',e=>{if(e.detail==='m')g.textContent='💡 '+FAKTA[Math.floor(Math.random()*FAKTA.length)];sfx(1);});return;}
  const m=$('.maskot');if(!m||!g)return;m.style.cursor='pointer';
  m.onclick=()=>{g.textContent='💡 '+FAKTA[Math.floor(Math.random()*FAKTA.length)];m.classList.remove('hop');void m.getBoundingClientRect();
    m.classList.add('hop');m.addEventListener('animationend',()=>m.classList.remove('hop'),{once:true});sfx(1);};}

/* ===== LAYAR SAMBUTAN ===== */
function sambutan(){
  show(`<section class="card welcome hero">${adegan('Halo! Aku <b>Uli</b> si Ulat, temanmu belajar! 🎉')}<h2>Siapa namamu?</h2>
   <input id="nm" maxlength="20" autocomplete="off" aria-label="Nama kamu" placeholder="Tulis namamu di sini">
   <p class="fb" id="er" role="status"></p><button class="btn" id="go">Lanjut</button>
   <p><button class="link" id="guru">Mode Guru</button></p></section>`);
  ajakBicara();
  $('#nm').onkeydown=e=>{if(e.key==='Enter')$('#go').click();};
  $('#guru').onclick=loginGuru;
  $('#go').onclick=()=>{const n=$('#nm').value.trim();
    if(!n)return $('#er').textContent='Tulis namamu dulu, ya!';
    masuk(esc(n));
    show(`<section class="card welcome hero">${adegan('Hai, '+user.nama+'! Yuk bertualang bersamaku!')}<h2>Siap menjelajahi tubuhmu?</h2>
      <button class="btn big" id="siap">Sudah siap belajar?</button>
      <p><button class="link" id="ganti">Bukan aku, ganti nama</button></p></section>`);
    ajakBicara();
    $('#ganti').onclick=sambutan;
    $('#siap').onclick=()=>{musik();wipe('🚀',menu);};};
}

/* ===== MODE GURU (akun: username + PIN, disimpan di browser) ===== */
function formGuru(judul,isi,tombol){
  show(`<section class="card welcome"><div class="mascot">👩‍🏫</div><h2>${judul}</h2>${isi}
   <p class="fb" id="er" role="status"></p><button class="btn" id="ok">${tombol}</button> <button class="btn" id="bt">Batal</button></section>`);
}
/* Guru Utama (admin): akun guru pertama. Hanya dia yang boleh menambah, menghapus, dan memindahkan peran. */
const KADM='sg_admin';
const simpanG=d=>{try{localStorage.setItem(KGURU,JSON.stringify(d));}catch(e){}};
function adminNama(){const d=muatG(),k=Object.keys(d);let a='';try{a=localStorage.getItem(KADM)||'';}catch(e){}
  if(!d[a]){a=k[0]||'';try{a?localStorage.setItem(KADM,a):localStorage.removeItem(KADM);}catch(e){}}   /* akun lama otomatis: yang tertua jadi Guru Utama */
  return a;}
function loginGuru(){
  if(!Object.keys(muatG()).length)return daftarGuru();   /* belum ada akun: buat dulu */
  formGuru('Masuk Mode Guru','<label for="gu">Username</label><input id="gu" autocomplete="off"><label for="pin">PIN</label><input id="pin" type="password">','Masuk');
  $('#pin').onkeydown=e=>{if(e.key==='Enter')$('#ok').click();};
  $('#bt').onclick=sambutan;
  $('#ok').onclick=()=>{const u=esc($('#gu').value.trim().toLowerCase());
    muatG()[u]===$('#pin').value&&u?dasbor(u):$('#er').textContent='Username atau PIN salah.';};
}
function daftarGuru(dari){
  formGuru(dari?'Tambah Akun Guru':'Buat Akun Guru Utama',(dari?'':'<p>Akun pertama ini menjadi <b>Guru Utama</b>: hanya akun ini yang bisa menambah dan menghapus akun guru lain.</p>')+'<label for="gu">Username</label><input id="gu" maxlength="20" autocomplete="off"><label for="p1">PIN (minimal 4 karakter)</label><input id="p1" type="password"><label for="p2">Ulangi PIN</label><input id="p2" type="password">','Simpan');
  $('#bt').onclick=()=>dari?dasbor(dari):sambutan();
  $('#ok').onclick=()=>{const u=esc($('#gu').value.trim().toLowerCase()),p=$('#p1').value,er=$('#er'),d=muatG();
    if(dari&&adminNama()!==dari)return er.textContent='Hanya Guru Utama yang boleh menambah akun.';
    if(u.length<3)return er.textContent='Username minimal 3 huruf.';
    if(p.length<4)return er.textContent='PIN minimal 4 karakter.';
    if(p!==$('#p2').value)return er.textContent='PIN dan ulangannya belum sama.';
    if(d[u])return er.textContent='Username sudah dipakai.';
    const pertama=!Object.keys(d).length;d[u]=p;simpanG(d);
    if(pertama){try{localStorage.setItem(KADM,u);}catch(e){}}
    dasbor(dari||u);};
}
function dasbor(guru){
  const adm=adminNama()===guru;
  const ent=Object.entries(muat()).sort((x,y)=>x[1].n.localeCompare(y[1].n)),rows=ent.map(e=>e[1]);
  const sel=(u,i)=>u.m[i]?`${u.m[i].s}/${u.m[i].t}<br>${'⭐'.repeat(u.m[i].b)}`:'-';
  const jml=u=>Object.values(u.m).reduce((t,x)=>t+x.b,0);
  const gk=Object.keys(muatG()),adn=adminNama();
  const kelola=adm?`<div class="tabel"><table><tr><th>Username</th><th>Peran</th><th>Aksi</th></tr>${gk.map((k,i)=>`<tr><td>${k}</td><td>${k===adn?'👑 Guru Utama':'Guru'}</td>
      <td>${k===adn?'-':`<button class="btn kecil" data-jd="${i}">Jadikan Guru Utama</button> <button class="btn kecil" data-hg="${i}" aria-label="Hapus akun ${k}">🗑️ Hapus</button>`}</td></tr>`).join('')}</table></div>
      <div class="bar"><button class="btn" id="tg">➕ Tambah akun guru</button></div>
      <p class="kecilp">Akun Guru Utama tidak bisa dihapus. Untuk menghapusnya, pindahkan dulu peran Guru Utama ke guru lain.</p>`
    :`<p>Kamu masuk sebagai guru biasa. Penambahan dan penghapusan akun guru dikelola oleh Guru Utama (<b>${adn}</b>).</p><div class="bar"><button class="btn" id="hakun">🗑️ Hapus akunku</button></div>`;
  show(`<section class="card"><h2>Nilai Siswa Kelas 4</h2><p>Masuk sebagai guru: <b>${guru}</b> ${adm?'👑 (Guru Utama)':''}</p><p>Nilai ditampilkan sebagai jawaban benar/jumlah soal. Data tersimpan di browser komputer ini.</p>
   <div class="tabel"><table><tr><th>Nama</th>${MISI.map((_,i)=>`<th>Misi ${i+1}</th>`).join('')}<th>Bintang</th><th>Status</th><th>Terakhir</th><th>Aksi</th></tr>
   ${rows.length?rows.map((u,i)=>`<tr><td>${u.n}</td>${MISI.map((_,k)=>`<td>${sel(u,k)}</td>`).join('')}<td>${jml(u)}/18</td>
   <td>${Object.keys(u.m).length==MISI.length?'✅ Selesai':'Belum selesai'}</td><td>${u.w||''}</td><td><button class="btn kecil" data-hs="${i}" aria-label="Hapus data ${u.n}">🗑️</button></td></tr>`).join(''):`<tr><td colspan="${MISI.length+5}">Belum ada data siswa.</td></tr>`}</table></div>
   <div class="bar"><button class="btn" id="csv">Unduh CSV</button><button class="btn" id="hps">Hapus semua data</button><button class="btn" id="kel">Keluar</button></div></section>
   <section class="card"><h2>Akun Guru</h2>${kelola}</section>`);
  $('#kel').onclick=sambutan;
  if($('#tg'))$('#tg').onclick=()=>daftarGuru(guru);
  $('#hps').onclick=()=>{if(confirm('Hapus semua data nilai siswa?')){tulis({});dasbor(guru);}};
  document.querySelectorAll('[data-hs]').forEach(b=>b.onclick=()=>{const [k,u]=ent[+b.dataset.hs];
    if(confirm('Hapus data siswa "'+u.n.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"')+'"? Nilainya ikut terhapus dan tidak bisa dikembalikan.')){const d=muat();delete d[k];tulis(d);dasbor(guru);}});
  document.querySelectorAll('[data-hg]').forEach(b=>b.onclick=()=>{const k=gk[+b.dataset.hg];if(!adm||k===adn)return;
    if(confirm('Hapus akun guru "'+k+'"?')){const d=muatG();delete d[k];simpanG(d);dasbor(guru);}});
  document.querySelectorAll('[data-jd]').forEach(b=>b.onclick=()=>{const k=gk[+b.dataset.jd];if(!adm||!k)return;
    if(confirm('Jadikan "'+k+'" sebagai Guru Utama? Kamu akan menjadi guru biasa.')){try{localStorage.setItem(KADM,k);}catch(e){}dasbor(guru);}});
  if($('#hakun'))$('#hakun').onclick=()=>{const p=prompt('Masukkan PIN untuk menghapus akunmu:');if(p===null)return;
    if(muatG()[guru]!==p)return alert('PIN salah. Akun tidak dihapus.');
    if(confirm('Yakin hapus akunmu? Ini tidak bisa dibatalkan.')){const d=muatG();delete d[guru];simpanG(d);sambutan();}};
  $('#csv').onclick=()=>{const c=[['Nama',...MISI.map((_,i)=>'Misi '+(i+1)),'Total bintang','Terakhir']].concat(rows.map(u=>
    [u.n,...MISI.map((_,i)=>u.m[i]?u.m[i].s+'/'+u.m[i].t:''),jml(u),u.w||''])).map(r=>r.map(v=>'"'+v+'"').join(',')).join('\n');
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+c],{type:'text/csv'}));a.download='nilai-siswa.csv';a.click();};
}

/* ===== MENU MISI ===== */
function menu(){
  const tot=Object.values(bintang).reduce((a,b)=>a+b,0),mx=MISI.length*3,
    WN=['#ff6b6b','#3ec9a7','#ffc93c','#8fd3ff','#b86bff','#ff9f43'];
  show(`<section><div class="card sapaan"><div class="tengah kecil"><div class="gelembung">${semua()?'Wow, semua misi selesai! Kamu hebat!':'Halo '+user.nama+'! Pilih misi, lalu kita bertualang!'}</div>${maskotEl()}</div>
   <div class="isi"><button class="btn kecil" id="home">⬅️ Halaman awal</button><h2>Pilih misimu, ${user.nama}!</h2>
   <div class="prog" role="progressbar" aria-valuenow="${tot}" aria-valuemin="0" aria-valuemax="${mx}"><i style="width:${Math.round(tot/mx*100)}%"></i></div>
   <p>⭐ ${tot} dari ${mx} bintang · ${Object.keys(bintang).length}/${MISI.length} misi selesai</p>
   ${semua()?'<button class="btn big" id="cert" style="font-size:1.2rem">🏆 Lihat Sertifikatku</button>':''}</div></div>
   <div class="menu">${MISI.map((m,i)=>`<button class="misi" data-i="${i}" style="--c:${WN[i]}"><span class="no">${i+1}</span>
   <div class="thumb">${K3()?`<canvas class="k3d" data-k3d="q${i}" aria-hidden="true"></canvas>`:`<svg viewBox="0 8 200 184" aria-hidden="true">${ART[THM[i]]()}</svg>`}</div><b>${m.j}</b>
   <span class="bt">${bintang[i]?'⭐'.repeat(bintang[i])+' Selesai':'Belum dicoba'}</span></button>`).join('')}</div></section>`);
  ajakBicara();
  $('#home').onclick=sambutan;
  if(semua())$('#cert').onclick=()=>wipe('🏆',sertifikat);
  document.querySelectorAll('.misi').forEach(b=>b.onclick=()=>wipe(MISI[b.dataset.i].e,()=>belajar(+b.dataset.i)));
}

/* ===== SERTIFIKAT & APRESIASI ===== */
function sertifikat(){
  const tot=Object.values(bintang).reduce((a,b)=>a+b,0);
  show(`<section class="card cert"><div class="mascot">🏆</div><h2>SERTIFIKAT</h2><p>Diberikan kepada</p>
   <div class="nm">${user.nama}</div><p>Siswa Kelas 4 yang hebat, karena telah menyelesaikan<br><b>semua misi Petualangan Sistem Gerak</b></p>
   <p style="font-size:1.6rem">⭐ ${tot} dari ${MISI.length*3} bintang ⭐</p>
   <p>Tubuhmu keren! Terus bergerak, jaga rangkamu, dan jangan lupa bermain permainan tradisional ya. 🎉</p>
   <p class="nocetak"><button class="btn" id="cp">🖨️ Cetak</button> <button class="btn" id="cm">Kembali ke menu</button></p></section>`);
  konfeti();$('#cp').onclick=()=>print();$('#cm').onclick=()=>wipe('🗺️',menu);
}

/* ===== MODUL ===== */
function belajar(i){
  const m=MISI[i],tot=m.s.filter(x=>x.q).length;let n=0,skor=0;
  const akhir=()=>{const b=tot?Math.max(1,Math.round(skor/tot*3)):3;const tadi=semua();bintang[i]=Math.max(bintang[i]||0,b);simpan(i,skor,tot,b);
    show(`<section class="card welcome"><div class="mascot">🏆</div><h2>Hebat, ${user.nama}!</h2>
    <p>Kamu menjawab benar ${skor} dari ${tot} soal.</p><p style="font-size:2.5rem">${'⭐'.repeat(b)}</p>
    <button class="btn" id="bk">Kembali ke menu</button></section>`);const sel=!tadi&&semua();if(sel)konfeti();$('#bk').onclick=()=>wipe(sel?'🏆':'🗺️',sel?sertifikat:menu);};
  const slide=()=>{
    if(n>=m.s.length)return akhir();
    const s=m.s[n];
    const wk=n%2?'#ff6b6b':'#3ec9a7',k0=s.e||m.e,ak=s.ruler?'📏':k0,
      pic=s.q?(K3()&&K3D.has('kuis')?`<div class="pic art k3" id="kq" aria-hidden="true"><canvas class="k3d" data-k3d="kuis" data-warna="${n%2?'g':'b'}"></canvas></div>`:`<div class="pic art" id="kq" aria-hidden="true"><svg viewBox="0 0 200 200">${qScene(wk,'mikir','senyum')}</svg></div>`)
      :s.skel?skeleton():ART[ak]?(K3()&&K3D.has(ak)?`<div class="pic art k3" aria-hidden="true"><canvas class="k3d" data-k3d="s:${ak}"></canvas></div>`:`<div class="pic art" aria-hidden="true"><svg viewBox="0 0 200 200">${ART[ak]()}</svg></div>`):`<div class="pic" aria-hidden="true">${k0}</div>`;
    let isi=s.q?`<h2>${s.q}</h2><div class="opts">${s.o.map((o,k)=>k).sort(()=>Math.random()-.5).map(k=>`<button class="opt" data-k="${k}">${s.o[k]}</button>`).join('')}</div><div class="fb" role="status"></div>`
      :s.ruler?`<h2>${s.h}</h2><div id="rl"></div>`:`<h2>${s.h}</h2><p>${s.p}</p>${s.skel?'<div class="info" id="info" aria-live="polite"><h3>Pilih bagian rangka</h3></div>':''}`;
    app.innerHTML=`<section class="card"><button class="btn kecil" id="mh">🏠 Menu</button><div class="slide geser">${pic}<div>${isi}</div></div>
      <div class="bar"><button class="btn" id="mb" ${n?'':'disabled'}>Kembali</button>
      <div class="dots">${m.s.map((_,k)=>`<i class="${k==n?'on':''}"></i>`).join('')}</div>
      <button class="btn" id="mn" ${s.q?'hidden':''}>Lanjut</button></div></section>`;
    $('#mb').onclick=()=>{n--;slide();};$('#mh').onclick=()=>wipe('🗺️',menu);$('#mn').onclick=()=>{n++;slide();};
    if(s.skel){if(window.THREE)try{rangka3D($('.skelwrap'));}catch(e){pasangRangka();}else pasangRangka();}
    if(s.ruler)mistar();hidup();if(K3())K3D.mount(app);
    if(s.q)document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const ok=+b.dataset.k===s.a;if(ok)skor++;
      document.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(+x.dataset.k===s.a)x.classList.add('ok');});sfx(ok);{const kc=$('#kq canvas');if(kc)K3D.set(kc,ok?'ok':'no');else $('#kq svg').innerHTML=qScene(wk,ok?'loncat':'diri',ok?'senang':'bingung',ok);}
      if(!ok)b.classList.add('no');$('.fb').textContent=ok?'Benar! 🎉':'Belum tepat, ayo semangat!';
      setTimeout(()=>{n++;slide();},1200);});
  };
  slide();
}

/* ===== GAMBAR RANGKA (SVG) ===== */
function skeleton(){
  const O=(d,w)=>`<path d="${d}" class="ol" style="stroke-width:${w}"/><path d="${d}" class="w" style="stroke-width:${w-7}"/>`;
  const g=(k,x)=>`<g class="part" data-k="${k}" tabindex="0" role="button" aria-label="${PARTS[k][0]}">${x}</g>`;
  const rib=(a,b)=>O(`M100 ${a}Q${100-b[0]} ${a-2} ${100-b[1]} ${b[2]}`,11)+O(`M100 ${a}Q${100+b[0]} ${a-2} ${100+b[1]} ${b[2]}`,11);
  return `<div class="skelwrap"><svg viewBox="0 0 200 325" role="group" aria-label="Gambar rangka manusia yang ramah">
   ${O('M62 102Q40 122 36 160L32 205M138 102Q160 122 164 160L168 205M84 228L78 270L76 312M116 228L122 270L124 312M100 80V205',13)}
   <circle class="f" cx="36" cy="160" r="8"/><circle class="f" cx="164" cy="160" r="8"/><circle class="f" cx="78" cy="270" r="9"/><circle class="f" cx="122" cy="270" r="9"/>
   ${g('dada',`<rect x="45" y="85" width="110" height="90" fill="transparent"/>${rib(98,[42,44,130])}${rib(118,[36,36,148])}${rib(138,[28,28,166])}${O('M100 90V165',11)}`)}
   <g style="pointer-events:none">${O('M66 94Q100 84 134 94',9)}${[78,172,186,200].map(y=>`<ellipse class="f" style="stroke-width:3" cx="100" cy="${y}" rx="7" ry="5"/>`).join('')}<ellipse class="f" cx="32" cy="210" rx="8" ry="11"/><ellipse class="f" cx="168" cy="210" rx="8" ry="11"/><ellipse class="f" cx="70" cy="316" rx="14" ry="6"/><ellipse class="f" cx="130" cy="316" rx="14" ry="6"/></g>${g('pinggul','<path class="f" d="M62 196Q100 178 138 196Q142 228 118 240L100 224L82 240Q58 228 62 196Z"/>')}
   ${g('kepala','<ellipse class="f" cx="100" cy="42" rx="34" ry="36"/><ellipse cx="86" cy="40" rx="8" ry="10" fill="#1d2b53"/><ellipse cx="114" cy="40" rx="8" ry="10" fill="#1d2b53"/><path d="M100 54l-5 8h10z" fill="#1d2b53"/><path d="M80 66Q100 80 120 66M90 70v7M100 72v7M110 70v7" stroke="#1d2b53" stroke-width="3" fill="none" stroke-linecap="round"/>')}
  </svg></div>`;
}
function pasangRangka(){
  document.querySelectorAll('.part').forEach(p=>{const pilih=()=>{
    document.querySelectorAll('.part').forEach(x=>x.classList.remove('on'));p.classList.add('on');
    $('#info').innerHTML=`<h3>${PARTS[p.dataset.k][0]}</h3><p>${PARTS[p.dataset.k][1]}</p>`;};
    p.onclick=pilih;p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pilih();}};});
}


/* ===== EFEK INTERAKTIF GAMBAR: miring 3D saat disentuh, loncat + bintang saat diklik ===== */
function hidup(){document.querySelectorAll('.pic').forEach(p=>{
  p.onclick=()=>{p.classList.remove('lompat');void p.offsetWidth;p.classList.add('lompat');sfx(1);
    const b=p.getBoundingClientRect();['⭐','✨','🌟','⭐','✨','💫'].forEach((e,i)=>{const t=document.createElement('span'),a=i/6*6.283;
      t.className='bintik';t.textContent=e;t.style.left=b.left+b.width/2+'px';t.style.top=b.top+b.height/2+'px';
      t.style.setProperty('--dx',Math.cos(a)*90+'px');t.style.setProperty('--dy',Math.sin(a)*90+'px');document.body.appendChild(t);setTimeout(()=>t.remove(),1000);});};});}

/* ===== RANGKA 3D: geser untuk memutar, sentuh bagian untuk melihat tugasnya ===== */
function rangka3D(box){
  const W=Math.min(box.clientWidth||230,240),H=Math.round(W*1.3),V=(...a)=>new THREE.Vector3(...a),TULANG=0xf3e5c0,PI=Math.PI;
  const Cc=h=>new THREE.Color(h).convertSRGBToLinear();
  box.innerHTML='';
  const r=new THREE.WebGLRenderer({antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio,(window.K3D&&K3D.dpr)||2));r.setSize(W,H);r.outputEncoding=THREE.sRGBEncoding;
  const el=r.domElement;el.style.cssText=`width:${W}px;height:${H}px;max-width:100%;display:block;touch-action:pan-y;cursor:grab;border-radius:20px;border:3px solid #1d2b53;background:radial-gradient(circle at 50% 35%,#fff7c2,#8fd3ff)`;
  box.appendChild(el);
  const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(35,W/H,.1,100),root=new THREE.Group();
  cam.position.set(0,0,17.5);root.position.y=.6;sc.add(root);
  sc.add(new THREE.HemisphereLight(0xffffff,Cc(0xa9c9e8),.72));
  const dl=new THREE.DirectionalLight(0xfff0d6,.8);dl.position.set(4,6,8);sc.add(dl);
  const rim=new THREE.DirectionalLight(Cc(0x9fd8ff),.35);rim.position.set(-5,3,-6);sc.add(rim);
  const SPH=new THREE.SphereGeometry(1,24,18),CYL=new THREE.CylinderGeometry(1,1,1,14),BOX=new THREE.BoxGeometry(1,1,1);
  const add=(m,k,c=TULANG)=>{m.material=new THREE.MeshStandardMaterial({color:Cc(c),roughness:.48});m.userData={k,dark:c!==TULANG};root.add(m);return m;};
  const bola=(rx,ry,rz,x,y,z,k,c)=>{const m=new THREE.Mesh(SPH);m.scale.set(rx,ry,rz);m.position.set(x,y,z);return add(m,k,c);};
  const tulang=(a,b,rad,k,knob)=>{const A=V(...a),B=V(...b),d=B.clone().sub(A),L=d.length(),m=new THREE.Mesh(CYL);
    m.scale.set(rad*.82,L,rad*.82);m.position.copy(A.clone().add(B).multiplyScalar(.5));m.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());add(m,k);
    if(knob!==0)[a,b].forEach(p=>bola(rad*1.45,rad*1.45,rad*1.45,...p,k));return m;};
  /* kepala: tempurung, tonjolan alis, tulang pipi, rahang, gigi, rongga mata dan hidung */
  bola(.82,.92,.86,0,3.55,0,'kepala');bola(.7,.12,.3,0,3.93,.66,'kepala');
  [-1,1].forEach(s=>bola(.2,.15,.22,s*.5,3.1,.52,'kepala'));
  bola(.58,.34,.55,0,2.95,.28,'kepala');bola(.5,.3,.52,0,2.7,.3,'kepala');
  [-1,1].forEach(s=>{bola(.2,.24,.12,s*.3,3.6,.72,'kepala',0x1d2b53);bola(.065,.065,.05,s*.3+.04,3.65,.82,'kepala',0xffffff);});
  bola(.08,.13,.06,0,3.27,.82,'kepala',0x1d2b53);
  for(let i=0;i<8;i++){const x=(i-3.5)*.085;
    [[3.0,.28,.55,.58],[2.84,.3,.52,.5]].forEach(q=>{const m=new THREE.Mesh(BOX);m.scale.set(.075,.1,.05);m.position.set(x,q[0],q[1]+q[2]*Math.sqrt(Math.max(0,1-(x/q[3])**2-.04))-.015);add(m,'kepala',0xffffff);});}
  /* tulang belakang: ruas-ruas dengan tonjolan di belakang */
  const zs=i=>-.3+.09*Math.sin(i*.55);
  tulang([0,2.6,zs(0)],[0,-.95,zs(11)],.1,null,0);
  for(let i=0;i<12;i++){const y=2.55-i*.3,sz=1+i*.025,m=new THREE.Mesh(CYL);m.scale.set(.19*sz,.2,.19*sz);m.position.set(0,y,zs(i));add(m,null);bola(.07,.06,.1,0,y+.02,zs(i)-.22,null);}
  /* dada: 8 pasang tulang rusuk, tulang dada, tulang selangka */
  [.62,.78,.9,.96,.96,.92,.86,.78].forEach((R,i)=>{const y=2.15-i*.29;
    [1,-1].forEach(s=>{const g=new THREE.TorusGeometry(R,.062,8,34,PI);g.rotateZ(-PI/2);
      const m=new THREE.Mesh(g);m.rotation.x=PI/2+.4;m.scale.set(s,.75,1);m.position.set(0,y,-.3+.75*R);add(m,'dada');});});
  tulang([0,2.1,.63],[0,.45,1.05],.1,'dada');
  [-1,1].forEach(s=>{tulang([s*.12,2.1,.64],[s*1.2,2.2,.15],.075,'dada');bola(.2,.2,.2,s*1.25,2.2,.1,null);});
  /* panggul: sayap panggul, tulang kelangkang, busur kemaluan, mangkuk sendi */
  [-1,1].forEach(s=>{const m=bola(.62,.52,.22,s*.62,-.55,-.05,'pinggul');m.rotation.z=-s*.35;bola(.27,.27,.27,s*.6,-1.4,.12,'pinggul');});
  const sa=new THREE.Mesh(new THREE.ConeGeometry(.4,.95,14));sa.rotation.x=PI;sa.position.set(0,-1.15,-.3);add(sa,'pinggul');
  const pb=new THREE.Mesh(new THREE.TorusGeometry(.48,.09,8,24,PI));pb.rotation.x=PI/2;pb.scale.set(1.15,.8,1);pb.position.set(0,-1.45,0);add(pb,'pinggul');
  /* tangan (lengan atas, dua tulang lengan bawah, telapak, 5 jari) dan kaki (paha, tempurung lutut, tulang kering, betis, telapak, jari kaki) */
  [-1,1].forEach(s=>{
    tulang([s*1.25,2.2,.1],[s*1.5,.75,.1],.12);tulang([s*1.5,.75,.1],[s*1.68,-.75,.22],.07);tulang([s*1.45,.75,.2],[s*1.62,-.75,.3],.06);
    bola(.2,.26,.07,s*1.72,-.98,.25,null);
    for(let j=-2;j<=2;j++){tulang([s*(1.72+j*.07),-1.15,.25],[s*(1.72+j*.1),-1.7+Math.abs(j)*.1,.25],.035,null,0);bola(.045,.045,.045,s*(1.72+j*.1),-1.7+Math.abs(j)*.1,.25,null);}
    tulang([s*.6,-1.45,.12],[s*.52,-3.25,.22],.16);bola(.2,.24,.1,s*.52,-3.28,.46,null);
    tulang([s*.52,-3.3,.2],[s*.5,-5.0,.1],.13);tulang([s*.66,-3.4,.12],[s*.62,-4.95,.05],.06);
    bola(.3,.12,.58,s*.5,-5.15,.4,null);for(let j=-1;j<=1;j++)bola(.1,.08,.14,s*.5+j*.18,-5.15,.95,null);});
  const pd=new THREE.Mesh(new THREE.CylinderGeometry(2.3,2.5,.2,40));pd.position.y=-5.45;add(pd,null,0x18a89a);
  /* pilih bagian */
  const WARNA={kepala:0xff4d6d,dada:0x1fa24a,pinggul:0x7c3aed};   /* merah, hijau, ungu */
  const sorot=k=>{root.children.forEach(m=>{if(m.userData.dark)return;const on=m.userData.k===k;m.material.color.copy(Cc(on?WARNA[k]:TULANG));m.material.emissive.copy(on?Cc(WARNA[k]):new THREE.Color(0));m.material.emissiveIntensity=on?.22:0;});
    $('#info').innerHTML=`<h3 style="color:#${WARNA[k].toString(16).padStart(6,'0')}">${PARTS[k][0]}</h3><p>${PARTS[k][1]}</p>`;sfx(1);};
  const ray=new THREE.Raycaster(),pt=new THREE.Vector2();
  const pilih=e=>{const b=el.getBoundingClientRect();pt.set((e.clientX-b.left)/b.width*2-1,-((e.clientY-b.top)/b.height)*2+1);ray.setFromCamera(pt,cam);
    const h=ray.intersectObjects(root.children).find(x=>x.object.userData.k);if(h)sorot(h.object.userData.k);};
  let x0=0,gerak=0,seret=false;
  el.onpointerdown=e=>{x0=e.clientX;gerak=0;seret=true;el.setPointerCapture(e.pointerId);el.style.cursor='grabbing';};
  el.onpointermove=e=>{if(!seret)return;const dx=e.clientX-x0;x0=e.clientX;gerak+=Math.abs(dx);root.rotation.y+=dx*.012;};
  el.onpointerup=e=>{seret=false;el.style.cursor='grab';if(gerak<5)pilih(e);};
  const bt=document.createElement('div');bt.className='opts';bt.style.cssText='grid-template-columns:repeat(3,1fr);margin-top:8px;gap:6px';
  Object.keys(PARTS).forEach(k=>{const b=document.createElement('button');b.className='opt';b.style.cssText='font-size:.8rem;padding:8px 4px;text-align:center';
    b.textContent=PARTS[k][0].replace('Rangka ','');b.onclick=()=>sorot(k);bt.appendChild(b);});
  box.appendChild(bt);
  const diam=matchMedia('(prefers-reduced-motion:reduce)').matches;
  (function loop(){if(!box.isConnected){root.traverse(o=>{if(o.material)o.material.dispose();});[SPH,CYL,BOX].forEach(g=>g.dispose());r.dispose();return;}
    if(!seret&&!diam)root.rotation.y+=.006;r.render(sc,cam);requestAnimationFrame(loop);})();
}

/* ===== MISTAR ===== */
function mistar(){
  const L=3+Math.floor(Math.random()*9),W=25;let t='';
  for(let m=0;m<=120;m++){const x=10+m*W/10,h=m%10==0?22:m%5==0?16:9;
    t+=`<line x1="${x}" x2="${x}" y1="40" y2="${40+h}" stroke="#1d2b53" stroke-width="1.5"/>`;
    if(m%10==0)t+=`<text x="${x}" y="82" font-size="12" text-anchor="middle" fill="#1d2b53">${m/10}</text>`;}
  const op=[...new Set([L,L+1,L-1,L+2])].sort(()=>Math.random()-.5);
  $('#rl').innerHTML=`<svg class="ruler" viewBox="0 0 320 95" role="img" aria-label="Pita dari 0 sampai ${L} cm">
   <rect x="10" y="8" width="${L*W}" height="22" rx="5" fill="#3ec9a7" stroke="#1d2b53" stroke-width="3"/>
   <rect x="2" y="36" width="312" height="52" rx="6" fill="#ffc93c" fill-opacity=".35" stroke="#1d2b53" stroke-width="2"/>${t}</svg>
   <p>Berapa panjang pita hijau?</p><div class="opts" id="uo"></div><div class="fb" id="ufb" role="status"></div>`;
  op.forEach(v=>{const b=document.createElement('button');b.className='opt';b.textContent=v+' cm';
    b.onclick=()=>{if(v===L){sfx(1);b.classList.add('ok');$('#ufb').innerHTML=`Benar! ${L} cm = <b>${L*10} mm</b> (1 cm = 10 mm). <button class="btn" id="lg">Soal baru</button>`;$('#lg').onclick=mistar;}
      else{sfx(0);b.classList.add('no');$('#ufb').textContent='Lihat angka di ujung pita lagi, ya.';}};$('#uo').appendChild(b);});
}

/* jika adegan 3D gagal dibuat, kembali ke gambar SVG */
if(window.K3D)K3D.fail=cv=>{const n=cv.dataset.k3d;
  if(n==='hero'){const p=cv.parentElement,t=p.querySelector('.gelembung').innerHTML;p.className='adegan';
    p.innerHTML=`${KIDS('#ff6b6b',false)}<div class="tengah"><div class="gelembung">${t}</div>${maskot()}</div>${KIDS('#3ec9a7',true)}`;ajakBicara();}
  else if(n==='mascot')cv.outerHTML=maskot();
  else if(n.slice(0,2)==='s:'&&ART[n.slice(2)])cv.outerHTML=`<svg viewBox="0 0 200 200">${ART[n.slice(2)]()}</svg>`;
  else if(n==='kuis')cv.outerHTML=`<svg viewBox="0 0 200 200">${qScene(cv.dataset.warna==='g'?'#ff6b6b':'#3ec9a7','mikir','senyum')}</svg>`;
  else if(/^q\d$/.test(n))cv.outerHTML=`<svg viewBox="0 8 200 184" aria-hidden="true">${ART[THM[+n[1]]]()}</svg>`;};

/* ===== Pasang sebagai aplikasi (Android/Chrome) & petunjuk iPhone ===== */
(function(){
  const std=matchMedia('(display-mode: standalone)').matches||navigator.standalone;if(std)return;
  const pb=document.createElement('button');pb.id='pasang';pb.className='btn kecil';pb.hidden=true;pb.textContent='📲 Pasang aplikasi';document.body.appendChild(pb);
  let dp=null;
  addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;pb.hidden=false;});
  pb.onclick=async()=>{if(!dp)return;dp.prompt();try{await dp.userChoice;}catch(e){}dp=null;pb.hidden=true;};
  addEventListener('appinstalled',()=>{pb.hidden=true;});
  if(/iphone|ipad|ipod/i.test(navigator.userAgent)){const f=document.querySelector('footer');if(f){const p=document.createElement('div');p.className='ios';p.textContent='Di iPhone/iPad: ketuk tombol Bagikan, lalu pilih "Tambah ke Layar Utama" agar bisa dipakai seperti aplikasi.';f.appendChild(p);}}
})();

sambutan();
