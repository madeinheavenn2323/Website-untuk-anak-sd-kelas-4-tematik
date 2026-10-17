/* Service worker: membuat aplikasi bisa dibuka tanpa internet. Naikkan angka V jika file aplikasi diperbarui. */
const V='sg-v5',INTI=['./','index.html','style.css','script.js','karakter3d.js','materi3d.js','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-192.png','icon-maskable-512.png','apple-touch-icon.png','lib/three.min.js','audio/musik.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(INTI.map(u=>c.add(u)))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  e.respondWith((async()=>{
    const c=await caches.open(V),hit=await c.match(r.url);
    if(r.url.endsWith('.mp3')&&hit){                       /* lagu: dari cache, dukung permintaan Range */
      const b=await hit.arrayBuffer(),m=/bytes=(\d+)-(\d*)/.exec(r.headers.get('range')||'');
      if(!m)return new Response(b,{headers:{'Content-Type':'audio/mpeg','Accept-Ranges':'bytes'}});
      const s=+m[1],en=m[2]?+m[2]:b.byteLength-1;
      return new Response(b.slice(s,en+1),{status:206,headers:{'Content-Type':'audio/mpeg','Accept-Ranges':'bytes','Content-Range':`bytes ${s}-${en}/${b.byteLength}`}});
    }
    try{const n=await fetch(r);if(n.status===200||n.type==='opaque')c.put(r.url,n.clone());return n;}   /* lainnya: internet dulu, cache jika offline */
    catch(x){return hit||Response.error();}
  })());
});
