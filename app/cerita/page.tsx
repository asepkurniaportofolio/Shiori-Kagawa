import Link from "next/link";

const chapters = [
  {
    number: "01",
    title: "Bangku kuliah",
    japanese: "学びの時間",
    text: "Shiori dan Asep menjalani masa S1 dengan harapan yang sederhana: terus belajar, tumbuh, dan menemukan jalan menuju masa depan yang mereka impikan.",
  },
  {
    number: "02",
    title: "Langkah berikutnya",
    japanese: "次の一歩",
    text: "Di antara tugas, percakapan, dan rencana yang belum selesai, jenjang S2 mulai terlihat sebagai langkah berikutnya yang ingin mereka tempuh.",
  },
  {
    number: "03",
    title: "Takdir yang berbeda",
    japanese: "別れの運命",
    text: "Perjalanan Shiori tiba-tiba berhenti ketika takdir memanggilnya. Mimpi itu tidak dilupakan; ia dirawat melalui kenangan dan karya ini.",
  },
  {
    number: "04",
    title: "Yang tetap tinggal",
    japanese: "残るもの",
    text: "Hiyori, sebagai adik Shiori, menjadi bagian dari keluarga dan ingatan yang menjaga kehadiran Shiori tetap dekat di hati.",
  },
];

export default function CeritaPage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-[#f2f4f6]">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-12">
        <Link href="/" className="text-xs tracking-[0.28em] text-white/80 transition hover:text-white">
          永遠にあなたのもの
        </Link>
        <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Story / 01</span>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-28 pt-24 sm:px-12 sm:pt-36">
        <div className="absolute -right-20 top-16 select-none text-[15rem] font-light leading-none text-white/[0.025] sm:text-[22rem]">
          物
        </div>
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#b14b57]">物語 / The story</p>
          <h1 className="max-w-4xl text-5xl font-light leading-[1.08] tracking-[0.04em] text-white sm:text-8xl">
            Sebuah perjalanan
            <br />
            yang belum selesai.
          </h1>
          <p className="mt-10 max-w-xl text-base leading-8 text-zinc-400">
            Ini adalah halaman khusus untuk kisah di balik film: tentang pendidikan,
            mimpi, takdir, dan orang-orang yang tetap tinggal dalam ingatan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-12 sm:py-32">
        <div className="mb-20 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Back story</p>
            <p className="mt-5 text-3xl font-light leading-tight text-white sm:text-4xl">
              Bukan hanya tentang akhir.
            </p>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400">
            Shiori adalah mahasiswa S1 yang sedang menuju S2. Asep juga berada di
            perjalanan yang sama. Mereka membawa mimpi tentang langkah berikutnya,
            tetapi takdir mengubah arah perjalanan itu. Film ini hadir sebagai
            persembahan untuk Shiori, bukan untuk mengulang kesedihan, melainkan
            untuk menjaga arti dari hidup dan mimpi yang pernah ada.
          </p>
        </div>

        <div className="relative border-l border-[#8a2934]/50 pl-8 sm:pl-16">
          <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#b14b57] shadow-[0_0_18px_rgba(177,75,87,0.7)]" />
          {chapters.map((chapter, index) => (
            <article key={chapter.number} className={`relative pb-20 ${index === chapters.length - 1 ? "pb-4" : ""}`}>
              {index < chapters.length - 1 ? (
                <div className="absolute -left-[37px] top-11 h-full w-px bg-white/[0.04]" />
              ) : null}
              <p className="text-[10px] tracking-[0.3em] text-[#b14b57]">{chapter.number}</p>
              <p className="mt-5 text-xs tracking-[0.25em] text-zinc-600">{chapter.japanese}</p>
              <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">{chapter.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-400">{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#11151b] px-6 py-24 text-center sm:px-12 sm:py-32">
        <p className="text-2xl font-light leading-relaxed text-zinc-200 sm:text-4xl">
          失われた時間の中にも、愛は残る。
        </p>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500">
          Di dalam waktu yang hilang pun, cinta tetap tinggal.
        </p>
        <p className="mt-10 text-[10px] uppercase tracking-[0.32em] text-zinc-600">
          Dedicated to Shiori Kagawa
        </p>
      </section>

      <footer className="flex flex-col gap-4 px-6 py-10 text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <Link href="/" className="transition hover:text-white">Kembali ke film</Link>
        <Link href="/surat" className="transition hover:text-white">Baca surat untuk Shiori →</Link>
      </footer>
    </main>
  );
}
