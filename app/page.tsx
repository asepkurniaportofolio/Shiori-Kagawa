import Image from "next/image";
import Link from "next/link";
import AmbientAudio from "./components/ambient-audio";
import FloatingPetals from "./components/floating-petals";
import TrailerEmbed from "./components/trailer-embed";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-[#F2F4F6] font-sans">
      <AmbientAudio />
      <FloatingPetals />
      {/* Minimal floating header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/10 bg-transparent backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
        <span className="text-sm tracking-[0.28em] font-light text-white/90">
          永遠にあなたのもの
        </span>
        <Link
          href="/koleksi"
          className="text-xs tracking-[0.2em] border border-white/30 bg-black/10 px-4 py-2 text-white/90 hover:bg-white hover:text-black transition-colors duration-200"
        >
          Tentang Film
        </Link>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0b1220]">
        <Image
          src="/poster.jpg"
          alt="Poster film Eien ni Anata no Mono"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlays for legibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05070b]/85 via-[#0b0d12]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-black/15 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070b]/60 via-transparent to-transparent" />

        {/* Vertical JP title, echoing the poster's own typesetting */}
        <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 hidden sm:block">
          <h1
            className="text-[clamp(2.2rem,2.7vw,4rem)] font-light tracking-[0.2em] leading-[1.2] text-white/95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            style={{ writingMode: "vertical-rl" }}
          >
            永遠に
            <span className="block mt-4">あなたのもの</span>
          </h1>
        </div>

        {/* Mobile title, horizontal */}
        <div className="absolute left-6 right-6 top-24 sm:hidden">
          <h1 className="text-[2.1rem] font-light tracking-[0.18em] leading-[1.2] text-white/95 drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
            永遠に
            <br />
            あなたのもの
          </h1>
        </div>

        {/* Bottom content block */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 pb-12 sm:pb-16">
          <p className="max-w-md text-sm sm:text-base text-zinc-200/90 leading-relaxed mb-6">
            君は世界の半分を逃れて去ったが、すべての愛を残してくれた
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs tracking-[0.3em] uppercase text-zinc-300">
              献呈 / Dedicated to
            </span>
            <span className="w-8 h-px bg-white/30" />
            <span className="text-xs tracking-widest text-zinc-400">
              Film ini dipersembahkan untuk Shiori Kagawa
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 right-6 sm:right-12 text-[10px] tracking-widest text-zinc-400 [writing-mode:vertical-rl] hidden sm:block">
          SCROLL
        </div>
      </section>

      {/* Synopsis */}
      <section className="px-6 sm:px-12 py-24 sm:py-32 max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8">
          作品紹介 / Sinopsis
        </p>
        <p className="text-xl sm:text-2xl font-light leading-relaxed text-zinc-200">
          失われた時間の中で、ふたりはもう一度、愛することを選ぶ。
          <br />
          Dalam waktu yang telah hilang, mereka memilih untuk mencintai sekali
          lagi.
        </p>
      </section>

      {/* Japanese film backstory */}
      <section className="border-t border-white/10 px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
              献辞 / Dedikasi
            </p>
            <h2 className="max-w-sm text-3xl font-light leading-tight tracking-[0.08em] text-white sm:text-5xl">
              Untuk Shiori
              <br />
              dengan penuh cinta.
            </h2>
            <p className="mt-6 text-xs tracking-[0.18em] text-zinc-600">
              A FILM DEDICATED TO SHIORI KAGAWA
            </p>
          </div>

          <div className="max-w-2xl space-y-8 text-sm leading-8 text-zinc-400">
            <p>
              ひとつの町、ふたつの記憶。そして、言葉にできなかった約束。
              <br />
              Di antara bangku kuliah dan mimpi menuju jenjang S2, dua perjalanan
              berjalan beriringan dengan janji yang belum sempat dituntaskan.
            </p>
            <p>
              『永遠にあなたのもの』は、離れてしまった人が残した気配を
              たどりながら、愛のかたちを静かに見つめる物語です。
              <br />
              Film ini mengikuti perjalanan Shiori dan Asep, dua mahasiswa S1
              yang sedang bersiap menuju S2, sebelum takdir membawa mereka ke
              arah yang berbeda. Hiyori, adik Shiori, menjadi bagian penting
              dari lingkar keluarga dan kenangan yang ditinggalkan.
            </p>
            <p className="border-l border-white/30 pl-6 text-base font-light leading-8 text-zinc-200">
              すべての別れには、まだ語られていない物語がある。
              <br />
              Setiap perpisahan menyimpan cerita yang belum selesai.
            </p>
            <Link
              href="/cerita"
              className="inline-flex border-b border-white/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-white transition hover:border-white"
            >
              Baca kisah lengkap →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-zinc-500">
              制作ノート / Catatan Produksi
            </p>
            <p className="max-w-2xl text-2xl font-light leading-relaxed text-zinc-200 sm:text-3xl">
              静けさの中にある感情を、ひとつひとつの光で描く。
            </p>
            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-500">
              Setiap cahaya, ruang kosong, dan jeda dalam film ini dirancang
              untuk memberi tempat bagi perasaan yang sulit diucapkan.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-6 text-xs">
            <div>
              <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">
                ジャンル
              </dt>
              <dd className="text-zinc-300">Drama / Romance</dd>
            </div>
            <div>
              <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">
                記録
              </dt>
              <dd className="text-zinc-300">Dedicated work</dd>
            </div>
            <div>
              <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">
                言語
              </dt>
              <dd className="text-zinc-300">日本語 / Bahasa Indonesia</dd>
            </div>
            <div>
              <dt className="mb-2 uppercase tracking-[0.25em] text-zinc-600">
                制作
              </dt>
              <dd className="text-zinc-300">LIAS STUDIO</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Cast */}
      <section id="pemeran" className="px-6 sm:px-12 py-20 border-t border-white/10">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-zinc-500 mb-14">
          出演者プロフィール / Profil Pemeran
        </p>
        <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
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
              profile: "Adik Shiori dan bagian penting dari cerita keluarga ini.",
            },
          ].map((item) => (
            <Link
              key={item.name}
              href={`/pemeran/${item.slug}`}
              className="group border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/40 hover:bg-white/[0.05]"
            >
              <div className="relative mb-5 aspect-[3/4] overflow-hidden border border-white/10 bg-zinc-900">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`Foto ${item.name}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 240px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                    Foto segera ditambahkan
                  </div>
                )}
              </div>
              <p className="text-[10px] tracking-[0.22em] text-zinc-600">{item.japaneseName}</p>
              <p className="mt-2 text-base font-light text-white">{item.name}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500">{item.role}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-zinc-500">{item.profile}</p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-zinc-400 transition group-hover:text-white">
                Lihat profil →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Credits block, echoing the dense credit typesetting on the poster */}
      <section className="px-6 sm:px-12 py-20 border-t border-white/10 text-center">
        <div className="max-w-xl mx-auto space-y-2 text-xs tracking-wide text-zinc-500 leading-relaxed">
          <p>Dipersembahkan untuk — Shiori Kagawa</p>
          <p>Pemeran — Asep Kurnia / Hiyori Kagawa</p>
          <p>Produksi — LIAS STUDIO</p>
        </div>
      </section>

      {/* Trailer */}
      <section className="px-6 sm:px-12 py-20 border-t border-white/10">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-zinc-500 mb-10">
          Trailer
        </p>
        <div className="mx-auto aspect-video max-w-3xl overflow-hidden border border-white/10 bg-zinc-900">
          <TrailerEmbed />
        </div>
        <p className="text-center text-xs text-zinc-600 mt-4">
          Trailer film 永遠にあなたのもの
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-12 py-14 border-t border-white/10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
          永遠にあなたのもの
        </p>
        <div className="flex justify-center gap-6 text-xs tracking-widest text-zinc-500 mb-6">
          <Link href="/surat" className="hover:text-white transition">Surat</Link>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">YouTube</a>
          <a href="#" className="hover:text-white transition">TikTok</a>
        </div>
        <p className="text-[10px] tracking-widest text-zinc-700">
          A film dedicated to Shiori Kagawa · LIAS STUDIO
        </p>
      </footer>
    </div>
  );
}