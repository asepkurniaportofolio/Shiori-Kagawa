import Image from "next/image";
import Link from "next/link";

const films = [
  {
    title: "永遠にあなたのもの",
    localTitle: "Selamanya Milikmu",
    year: "2026",
    status: "献呈 / Dedicated to Shiori",
    description:
      "Sebuah kisah tentang dua orang yang memilih saling mencintai, meski dunia meminta mereka berjalan ke arah yang berbeda.",
    image: "/poster.jpg",
    featured: true,
  },
  {
    title: "夜の手紙",
    localTitle: "Surat-Surat Malam",
    year: "Dalam pengembangan",
    status: "Arsip kenangan",
    description:
      "Potongan kenangan, kota yang belum tidur, dan satu surat yang terlambat sampai.",
    image: "/poster.jpg",
    featured: false,
  },
];

export default function KoleksiPage() {
  return (
    <main className="min-h-screen bg-[#0a0e14] text-[#f2f4f6]">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-12">
        <Link
          href="/"
          className="text-xs tracking-[0.28em] text-white/80 transition hover:text-white"
        >
          永遠にあなたのもの
        </Link>
        <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
          献呈 / Dedicated to Shiori
        </span>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-12 sm:pt-28">
        <div className="mb-16 max-w-2xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            Film persembahan
          </p>
          <h1 className="text-4xl font-light leading-tight tracking-[0.04em] text-white sm:text-6xl">
            Cerita yang tinggal
            <br />
            lebih lama dari waktu.
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
            Sebuah ruang untuk menyimpan karya yang dipersembahkan kepada
            Shiori Kagawa, bersama cerita dan orang-orang yang berarti baginya.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          {films.map((film) => (
            <article
              key={film.title}
              className={`group border border-white/10 bg-[#10151d] ${
                film.featured ? "lg:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#161d27] lg:aspect-auto lg:h-[32rem]">
                <Image
                  src={film.image}
                  alt={`Poster ${film.localTitle}`}
                  fill
                  className="object-cover object-center opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-black/10" />
                <span className="absolute left-5 top-5 border border-white/20 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                  {film.status}
                </span>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-zinc-300">
                    {film.year}
                  </p>
                  <h2 className="text-2xl font-light tracking-[0.08em] text-white sm:text-3xl">
                    {film.localTitle}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <p className="max-w-xl text-sm leading-7 text-zinc-400">
                  {film.description}
                </p>
                {film.featured ? (
                  <Link
                    href="/"
                    className="w-fit border-b border-white/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-white transition hover:border-white"
                  >
                    Lihat halaman penghormatan
                  </Link>
                ) : (
                  <span className="w-fit border-b border-white/20 pb-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Bagian dari arsip
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Film persembahan untuk Shiori Kagawa</span>
          <Link href="/" className="transition hover:text-white">
            Kembali ke halaman utama
          </Link>
        </div>
      </footer>
    </main>
  );
}