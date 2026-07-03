/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "260426";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Pyraa";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Untuk Perempuan Yang Sedang Di Pelukan",             // ← GANTI JUDUL LAGU
    artist: "Payung Teduh",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"happy sweet seventeen special person in ma life sayanggkuu. gimanaa kabarnya harii inii? baik? sangat baik? atau malah bad? but it’s okeii, jangan sedii' di hari ulang tahun kamu okeii?? harus senyum terus sepanjang harii karna banya banget orang yang nungguin senyum kamu hari inii. semogaa apapun yang kamu inginkan terkabul satu persatu yya!! semoga menjadi pribadi yang lebii baik lagi dari sebelumnya dan selaluu bareng-bareng sama aku terus hehe :>",
"aku uda lama nungguin hari inii karna aku uda nyiapin banya banget tentang hari ulang tahun kamu. aku harap kamu suka dengan apa yang aku kasii ke kamu :'. banya banget hal-hal yang uda kita lewatin bersama, semoga kamu tetap bertahan sama aku yya? makasi uda mau nerima aku di hidup yang cuma sekali inii, i’m so lucky. makasii juga karena uda jadi bagian paling indah di hidup aku, semoga kita masih bisa ngelewatin banyak ulang tahun kamu yang berikutnya bareng-bareng.",
"maaf ya, aku gabisa nemenin kamu di hari ulang tahun kamu yang sangat bahagia inii, tapi aku uda nyiapin semuanya ko dari lama supaya ketika hari inii tiba kamu tida kesepian dan bisa melihat apa aja pemberian aku ke kamu. semoga di usia kamu yang cukup dibilang dewasa inii, apapun yang kamu lalui semoga itu menjadi perjalanan kecil untuk memulai hidup ke depannya yang lebii serius lagi nantinya dan pelan-pelan mimpi kamu terwujud. jangan lupa perhatiin diri kamu sendirii sebelum mikirin orang lain ya? terkadang kita tu terlalu mentingin orang lain sehingga kita lupa mementingkan diri kita sendirii. terimakasi juga kepada diri kamu sendirii karna uda ngelewatin banya hal sampai detik ini.",
"aku beruntung bangett punya kamu dan semoga akan selalu begitu. jangan perna ninggalin aku untuk kedua kalinya yya? aku takut hal kemarin terjadi lagii ke aku, cape. tapi apa pun yang terjadi nanti, aku gabakal ninggalin kamu. jaga egonya yya, kita sama-sama belajar jadi lebih baik. aku akan selalu dukung semua mimpi kamu, selalu bangga sama setiap pencapaian kamu, dan selalu ada di setiap proses kamu. aku selalu sayang sama kamu, love u more than life. 🤍"

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  " ",
    title: "— ur mom to me",
    text:  "Tante sih gak masalah kalau positif² saja (penyemangat utk belajar),tante pernah tanya Cia , dia cuma senyum² saja, Cia tu orgnya tertutup dg ortu, pdhal temen² Cia pd seneng kalau ktmu Tante. Hanya saja ad ap² selalu nama Azka yg keluar dr mulutnya. Tlg ya kalau pacaran jangan sampai kayak anak zaman sekarang yg terlalu bebas. Tante percayakan ke Azka ank yg baik. Dan sekali² main krmh, Jd bapaknya tau. Gak usah malu.",
  },
  {
    depth: "8m",
    year:  "",
    title: "— ur mom",
    text:  "literally cuma kamu, aku, and those lil simple moments yang ternyata ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  " ",
    title: "— ur friend, rani",
    text:  "happy sweet seventeen, bubbeey! semoga di usia yang baru, dimanapun km berpijak, hal hal baik selalu beriringan antah berantah. life is what happens to u while you're busy making other plans, ra. dunia memang ga selalu ramah, tapi semoga Tuhan selalu menjaga langkah km, dipertemukan dengan orang orang yang tulus, dijauhkan dari kecewa yang terlalu dalam dan diberi lebih banyak hari untuk merasa cukup dan dicintai. karna beberapa orang hadir bukan hanya untuk singgah, tapi untuk membuat dunia terasa sedikit lebih hangat. dan semoga, km selalu menjadi salah satunya. serta mulia, pira 💞",
  },
  {
    depth: "24m",
    year:  " ",
    title: "— ur friend, azel",
    text:  "Hi love.. how's u're day?i js want to say happy birthday to the special person in ma life🤍✨️, thank you for being the best part of my life, thank you for growing well, thank you for always making me laugh, and thank you for everything you've done.I hope on that on this day and beyond u were serounded by happiness, filled with joy and bless with love. I will always be here for u no matter what, u will never lose ma love bc u are amazing and whort a lot on this earth🌍.Maybe I don't  have enough word to describe how happy i  am to having u in ma life, I'm so grateful for u, u always be there for me in ways no one else has, please stay healthy and always be happy, because i love u more than yesterday and will always love u until tomorrow comes.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this year return all the love n warmth you’ve always given to others. semoga hati kamu yang penuh dengan compassion selalu nemuin kebahagiaan, dan hidup kamu dikelilingi kedamaian yang tulus." },
  { icon: "shell",   text: "i hope ur life is always full of sparks n magic. semoga tahun ini bisa bikin kamu makin bersinar, langkah kamu selalu dituntun ke hal-hal baik, dan hati kamu selalu penuh sama kebahagiaan yang gabakal pudar." },
  { icon: "star",    text: " just like the star above, i hope all ur biggest dreams n hidden wishes pelan’ bisa ke checklist satu per satu. semoga semesta selalu kasi jalan terbaik dan waktu yang tepat buat semua perjuangan kamu." },
  { icon: "compass", text: "wherever ur journey takes u this year, jangan perna merasa sendirian ya? i hope u always remember that no matter how far u go, ada aku dan orang’ tulus yang bakal selalu jadi safe place buat kamu pulang." },
  { icon: "anchor",  text: "semoga langkah kamu selalu kokoh dan penuh keyakinan. tetap jadi versi terbaik dari diri kamu yang selalu bikin orang’ di sekitar kamu merasa nyaman. u are amazing just the way u are." },
  { icon: "heart",   text: "happy birthday to my favorite human! i hope this new year brings u so much love and endless happy moments. semoga tiap hari yang kamu lewatin selalu dipenuhi kenangan manis yang bikin kamu senyum terus." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6283821359978";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);