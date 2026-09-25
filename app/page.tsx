import Image from "next/image";
import Link from "next/link";
import AmbientAudio from "./components/ambient-audio";
import FloatingPetals from "./components/floating-petals";
import TrailerEmbed from "./components/trailer-embed";

const storyHighlights = [
  {
    title: "Kenangan yang tinggal",
    text: "Setiap ruang, senyuman, dan jarak dalam film ini diciptakan untuk menampung luka yang belum sempat terucap.",
  },
  {
    title: "Cinta yang tidak mengikat",
    text: "Cerita ini menelusuri bagaimana dua orang bisa saling menyayangi tanpa pernah benar-benar memegang satu sama lain.",
  },
  {
    title: "Perpisahan yang membentuk",
    text: "Tidak semua rasa berakhir saat seseorang pergi—kadang ia berubah menjadi cahaya yang tetap hidup dalam ingatan.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#071018] text-[#f6f2ee]">
      <AmbientAudio />
      <FloatingPetals />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071018]/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <span className="text-[10px] font-medium tracking-[0.35em] text-white/80 uppercase sm:text-xs">
            永遠にあなたのもの
          </span>

          <nav className="hidden items-center gap-6 text-[10px] tracking-[0.22em] text-zinc-200/80 sm:flex">
            <Link href="#sinopsis" className="transition hover:text-white">
              Sinopsis
            </Link>
            <Link href="#cerita" className="transition hover:text-white">
              Cerita
            </Link>
            <Link href="#pemeran" className="transition hover:text-white">
              Pemeran
            </Link>
          </nav>

          <Link
            href="/koleksi"
            className="inline-flex items-center rounded-full border border-rose-200/40 bg-white/5 px-4 py-2 text-[10px] tracking-[0.24em] text-white transition hover:border-white/60 hover:bg-white hover:text-[#071018]"
          >
            Tentang Film
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-[#0b1220]">
          <Image
            src="/poster.jpg"
            alt="Poster film Eien ni Anata no Mono"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_38%),linear-gradient(90deg,rgba(5,7,11,0.8),rgba(5,7,11,0.18),rgba(5,7,11,0.7))]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#071018] via-[#071018]/65 to-transparent" />

          <div className="hero-copy absolute left-6 right-6 top-24 flex w-fit flex-col items-center sm:left-12 sm:right-auto sm:top-1/2 sm:-translate-y-1/2">
            <h1 className="hero-title-vertical fade-up text-[clamp(2rem,6svh,4.5rem)] font-light leading-[1.05] tracking-[0.2em] text-white/95 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              永遠に
              <span>あなたのもの</span>
            </h1>
            <div className="fade-up mt-4 inline-block rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[9px] tracking-[0.32em] text-rose-100/90 uppercase backdrop-blur-sm">
              Shiori Kagawa
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:px-12 sm:pb-16">
            <div className="mx-auto max-w-6xl">
              <p className="max-w-md text-sm leading-relaxed text-zinc-200/90 sm:text-base">
                君は世界の半分を逃れて去ったが、すべての愛を残してくれた
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs tracking-[0.22em] text-zinc-300">
                <span className="uppercase">献呈 / Dedicated to</span>
                <span className="h-px w-10 bg-white/40" />
                <span className="text-zinc-400">Film ini dipersembahkan untuk Shiori Kagawa</span>
              </div>
            </div>
          </div>

          <div className="hero-scroll absolute bottom-8 right-6 text-[9px] tracking-[0.5em] text-zinc-300 sm:right-12 sm:text-[10px]">
            SCROLL
          </div>
        </section>

        <section id="sinopsis" className="px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500">
              作品紹介 / Sinopsis
            </p>
            <p className="mt-8 text-xl font-light leading-relaxed text-zinc-200 sm:text-3xl">
              失われた時間の中で、ふたりはもう一度、愛することを選ぶ。
              <br />
              Dalam waktu yang telah hilang, mereka memilih untuk mencintai sekali lagi.
            </p>
          </div>
        </section>

        <section id="cerita" className="border-t border-white/10 px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500">
                  献辞 / Dedikasi
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[0.08em] text-white sm:text-5xl">
                  Untuk Shiori
                  <span className="block sm:inline"> dengan penuh cinta.</span>
                </h2>
              </div>
              <p className="hidden text-[10px] tracking-[0.25em] text-zinc-600 sm:block">
                A FILM DEDICATED TO SHIORI KAGAWA
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
                <p className="text-sm leading-8 text-zinc-300">
                  ひとつの町、ふたつの記憶。そして、言葉にできなかった約束。
                  <br />
                  Di antara bangku kuliah dan mimpi menuju jenjang S2, dua perjalanan berjalan beriringan dengan janji yang belum sempat dituntaskan.
                </p>
                <p className="border-l border-rose-200/40 pl-5 text-base font-light leading-8 text-zinc-200">
                  すべての別れには、まだ語られていない物語がある。
                  <br />
                  Setiap perpisahan menyimpan cerita yang belum selesai.
                </p>
                <Link
                  href="/cerita"
                  className="inline-flex items-center gap-2 border-b border-white/40 pb-2 text-[10px] uppercase tracking-[0.28em] text-white transition hover:border-white hover:text-rose-100"
                >
                  Baca kisah lengkap <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {storyHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-rose-200/30"
                  >
                    <div className="mb-5 h-px w-10 bg-gradient-to-r from-rose-200 to-transparent" />
                    <h3 className="text-lg font-light text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500">
                制作ノート / Catatan Produksi
              </p>
              <p className="mt-7 max-w-2xl text-2xl font-light leading-relaxed text-zinc-200 sm:text-3xl">
                静けさの中にある感情を、ひとつひとつの光で描く。
              </p>
              <p className="mt-5 max-w-xl text-sm leading-8 text-zinc-500">
                Setiap cahaya, ruang kosong, dan jeda dalam film ini dirancang untuk memberi tempat bagi perasaan yang sulit diucapkan.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 text-xs sm:p-8">
              <div>
                <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">ジャンル</dt>
                <dd className="text-zinc-300">Drama / Romance</dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">記録</dt>
                <dd className="text-zinc-300">Dedicated work</dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">言語</dt>
                <dd className="text-zinc-300">日本語 / Bahasa Indonesia</dd>
              </div>
              <div>
                <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">制作</dt>
                <dd className="text-zinc-300">LIAS STUDIO</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500">
                  Trailer / Preview
                </p>
                <h2 className="mt-4 text-3xl font-light tracking-[0.06em] text-white sm:text-5xl">
                  Sebuah jeda untuk merasa.
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-[10px] uppercase leading-6 tracking-[0.22em] text-zinc-600 sm:block">
                A FILM DEDICATED TO SHIORI KAGAWA
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820] shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                <div className="aspect-video">
                  <TrailerEmbed />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:px-7">
                  <span>永遠にあなたのもの</span>
                  <span>Trailer 01</span>
                </div>
              </div>

              <div className="flex flex-col rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500">
                  Suasana yang tertahan
                </p>
                <p className="mt-6 text-sm leading-8 text-zinc-300">
                  Sebuah sekilas visual dari momen-momen yang paling menyakitkan dan paling indah dalam perjalanan Shiori dan orang yang ia cintai.
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                    Di dalam koleksi
                  </p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                      Poster dan visual utama film.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                      Surat dan catatan yang belum selesai.
                    </li>
                  </ul>
                </div>
                <div className="mt-auto flex flex-wrap gap-4 pt-8">
                <Link
                  href="/koleksi"
                  className="inline-flex items-center justify-center rounded-full border border-rose-200/40 bg-rose-100/10 px-5 py-3 text-[10px] uppercase tracking-[0.24em] text-white transition hover:border-white/60 hover:bg-white hover:text-[#071018]"
                >
                  Koleksi Film
                </Link>
                <Link
                  href="/cerita"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-[10px] uppercase tracking-[0.24em] text-zinc-200 transition hover:border-white/40 hover:text-white"
                >
                  Baca Cerita
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pemeran" className="border-t border-white/10 px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[10px] tracking-[0.35em] uppercase text-zinc-500">
              出演者プロフィール / Profil Pemeran
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  slug: "shiori-kagawa",
                  role: "Dedikasi utama",
                  name: "Shiori Kagawa",
                  japaneseName: "香川しおり",
                  image: "/cast/shiori-kagawa.webp",
                  profile: "Mahasiswa S1 yang sedang menuju jenjang S2; film ini dipersembahkan untuknya.",
                },
                {
                  slug: "asep-kurnia",
                  role: "Pemeran",
                  name: "Asep Kurnia",
                  japaneseName: "アセップ・クルニア",
                  image: undefined,
                  profile: "Mahasiswa S1 yang menapaki perjalanan menuju S2 bersama Shiori.",
                },
                {
                  slug: "hiyori-kagawa",
                  role: "Pemeran",
                  name: "Hiyori Kagawa",
                  japaneseName: "香川ひより",
                  image: "/cast/hiyori-kagawa.webp",
                  profile: "Hiyori Kagawa, adik Shiori, menjadi bagian penting dari cerita dan kenangan yang menjaga kehadiran Shiori tetap dekat.",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={`/pemeran/${item.slug}`}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.04]"
                >
                  <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-[1.2rem] border border-white/10 bg-zinc-900">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`Foto ${item.name}`}
                        fill
                        sizes="(max-width: 640px) 45vw, 240px"
                        className={`${item.slug === "hiyori-kagawa" ? "object-cover object-top" : "object-contain"} transition duration-500 group-hover:scale-105`}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                        Foto segera ditambahkan
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] tracking-[0.22em] text-zinc-600">{item.japaneseName}</p>
                  <p className="mt-2 text-xl font-light text-white">{item.name}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500">{item.role}</p>
                  <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-zinc-500">{item.profile}</p>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-zinc-400 transition group-hover:text-white">
                    Lihat profil →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-10 sm:px-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Shiori Kagawa</p>
              <p className="mt-3 text-sm text-zinc-400">永遠にあなたのもの — sebuah kisah yang tetap hidup dalam ingatan.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-5 text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:justify-end">
              <Link href="#sinopsis" className="transition hover:text-white">Sinopsis</Link>
              <Link href="#cerita" className="transition hover:text-white">Cerita</Link>
              <Link href="#pemeran" className="transition hover:text-white">Pemeran</Link>
              <Link href="/koleksi" className="transition hover:text-white">Koleksi</Link>
            </nav>
          </div>
        </footer>

        <section className="border-t border-white/10 px-6 py-20 text-center sm:px-12">
          <div className="mx-auto max-w-xl space-y-2 text-xs tracking-[0.2em] text-zinc-500 leading-relaxed">
            <p>Dipersembahkan untuk — Shiori Kagawa</p>
            <p>Pemeran — Shiori Kagawa / Asep Kurnia / Hiyori Kagawa</p>
            <p>Produksi — LIAS STUDIO</p>
          </div>
        </section>
      </main>
    </div>
  );
}

