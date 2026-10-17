# Panduan Versi Mobile — Petualangan Sistem Gerak

Aplikasi ini adalah **PWA** (aplikasi web yang bisa dipasang). Satu kode yang sama jalan di laptop, HP Android, dan iPhone.

## 1. Taruh di internet (gratis, wajib untuk bisa dipasang di HP)
PWA butuh alamat **https**. Pilih salah satu:
- **Netlify Drop** (paling mudah): buka app.netlify.com/drop, seret seluruh folder proyek ke halaman itu. Anda langsung dapat alamat `https://nama-acak.netlify.app`.
- **GitHub Pages**: unggah folder ke repository, lalu Settings → Pages → pilih branch `main`.

Pastikan folder `audio/musik.mp3` ikut terunggah.

## 2. Pasang di HP
- **Android (Chrome):** buka alamatnya. Muncul tombol **📲 Pasang aplikasi** di pojok kiri bawah (atau menu ⋮ → *Instal aplikasi*).
- **iPhone/iPad (Safari):** ketuk tombol Bagikan → **Tambah ke Layar Utama**.

Setelah terpasang, aplikasi terbuka layar penuh dengan ikon Uli, dan bisa dipakai tanpa internet.

## 3. Agar benar-benar offline sejak kunjungan pertama
Simpan Three.js ke folder `lib/` (lihat `lib/BACA_INI.txt`). Tanpa itu, kunjungan pertama butuh internet sekali, lalu otomatis tersimpan.

## 4. Jadikan file APK (Android)
1. Buka **pwabuilder.com**, tempel alamat https dari langkah 1, klik *Start*.
2. Pilih **Package for stores → Android → Generate**.
3. Unduh paketnya. Di dalamnya ada file `.apk` yang bisa dikirim lewat WhatsApp atau flashdisk dan dipasang langsung (aktifkan "Izinkan dari sumber ini" di HP).
Untuk Play Store, gunakan file `.aab` dan akun developer berbayar (tidak perlu untuk tugas kuliah).

## 5. Catatan
- **Performa:** HP dengan RAM ≤ 4 GB otomatis memakai mode hemat (resolusi dan fps lebih rendah). Gerak berhenti saat tab/aplikasi tidak terlihat.
- **Musik:** sistem Android/iOS kadang menghentikan audio saat layar mati, di luar kendali kode.
- **Data guru dan siswa** tersimpan di browser tiap perangkat. Data di laptop tidak otomatis muncul di HP.
- Ubah angka versi di `sw.js` (`sg-v5` → `sg-v6`, dst.) setiap kali file aplikasi diperbarui, supaya HP mengambil versi baru.
