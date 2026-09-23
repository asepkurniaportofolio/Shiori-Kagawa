import Image from "next/image";
import Link from "next/link";

const details = [
  { label: "Genre", value: "Drama / Romance" },
  { label: "Bahasa", value: "日本語 / Indonesia" },
  { label: "Durasi", value: "10–15 menit" },
  { label: "Produksi", value: "LIAS STUDIO" },
];

const pillars = [
  {
    title: "Kenangan yang hidup",
    text: "Film ini menempatkan ingatan sebagai elemen utama—bukan sebagai masa lalu yang berhenti, melainkan ruang yang terus berjalan di dalam hati.",
  },
  {
    title: "Cinta yang tak sempurna",
    text: "Kisahnya tidak dibangun di atas idealisme, melainkan di atas jarak, kehilangan, dan keputusan yang tak bisa dibatalkan.",
  },
  {
    title: "Perpisahan yang masih bicara",
    text: "Setiap adegan berusaha menangkap rasa yang sulit diucapkan: hati yang tetap hadir meski orangnya sudah pergi.",
  },
];

export default function KoleksiPage() {
  return (
    <main className="min-h-screen bg-[#0a0e14] text-[#f2f4f6]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0e14]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-12">
          <Link
            href="/"
            className="text-xs tracking-[0.28em] text-white/80 transition hover:text-white"
          >
            永遠にあなたのもの
          </Link>
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
          >
            Kembali
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_38%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div className="relative z-10">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              Film persembahan / About the film
            </p>
            <h1 className="max-w-xl text-4xl font-light leading-[1.08] tracking-[0.04em] text-white sm:text-6xl">
              Suatu kisah yang
              <span className="block text-rose-200/90">tetap hidup dalam ingatan.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              『永遠にあなたのもの』 adalah sebuah film drama romantis yang lahir dari rasa syukur, kenangan, dan kehilangan yang belum selesai. Film ini dipersembahkan untuk Shiori Kagawa, dengan segala ruang pada karya ini dibuat untuk menjaga jejak cintanya tetap hadir.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cerita"
                className="border border-white/20 bg-white/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-black"
              >
                Baca cerita
              </Link>
              <Link
                href="/surat"
                className="border border-rose-200/30 bg-rose-200/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-rose-100 transition hover:bg-rose-200 hover:text-black"
              >
                Surat dedikasi
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#10151d] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/poster.jpg"
                  alt="Poster film 永遠にあなたのもの"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-black/20" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-300">
                    2026 / Dedicated to Shiori
                  </p>
                  <h2 className="mt-3 text-2xl font-light tracking-[0.08em] text-white">
                    永遠にあなたのもの
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-4 border-b border-white/10 pb-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              Overview
            </p>
            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-zinc-600 sm:block">
              A film dedicated to Shiori Kagawa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                  {detail.label}
                </p>
                <p className="mt-4 text-base text-white">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0d141b] px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Sinopsis / Synopsis
              </p>
              <h2 className="mt-6 text-3xl font-light leading-tight text-white sm:text-5xl">
                Di antara waktu yang hilang,
                <span className="block">cinta masih memilih untuk hadir.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                Dalam dunia yang terus bergerak, dua orang pernah memiliki arah yang sama: belajar, menyiapkan masa depan, dan melangkah menuju jenjang berikutnya. Namun takdir tidak selalu mengikuti rencana yang mereka buat.
              </p>
              <p>
                『永遠にあなたのもの』 mengisahkan tentang kehilangan yang tidak selalu tampak jelas di permukaan, serta cinta yang tetap hidup dalam bentuk kenangan, ruang hening, dan janji yang tak sempat diucapkan.
              </p>
              <p className="border-l border-rose-200/40 pl-5 text-base font-light text-zinc-200">
                すべての別れには、まだ語られていない物語がある。
                <br />
                Setiap perpisahan menyimpan cerita yang belum selesai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            Creative pillars
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                    0{index + 1}
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r from-rose-200/60 to-transparent" />
                </div>
                <h3 className="text-xl font-light text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#10151d] px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Produksi / Crew
              </p>
              <h2 className="mt-6 text-3xl font-light text-white sm:text-5xl">
                Dibuat dengan rasa yang tenang,
                <span className="block">dan penuh perhatian.</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">Studio</p>
                <p className="mt-4 text-lg text-white">LIAS STUDIO</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">Tema</p>
                <p className="mt-4 text-lg text-white">Cinta, kenangan, perpisahan</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">Tone</p>
                <p className="mt-4 text-lg text-white">Intim, elegan, emosional</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">Dedikasi</p>
                <p className="mt-4 text-lg text-white">Untuk Shiori Kagawa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 text-center sm:px-12">
        <div className="mx-auto max-w-xl space-y-3 text-[10px] uppercase tracking-[0.24em] text-zinc-500">
          <p>Dipersembahkan untuk — Shiori Kagawa</p>
          <p>LIAS STUDIO</p>
        </div>
      </footer>
    </main>
  );
}