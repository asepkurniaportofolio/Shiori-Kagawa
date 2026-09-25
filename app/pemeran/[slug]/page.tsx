import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const profiles = {
  "shiori-kagawa": {
    name: "Shiori Kagawa",
    japaneseName: "香川しおり",
    role: "Dedikasi utama",
    image: "/cast/shiori-kagawa.webp",
    intro: "Seorang mahasiswa S1 yang sedang menapaki perjalanan menuju jenjang S2.",
    story:
      "Shiori Kagawa sedang menuju langkah berikutnya dalam pendidikannya ketika perjalanan itu tiba-tiba terhenti. Film ini dipersembahkan untuk mengenang mimpi, kasih, dan arti kehadirannya.",
    note: "あなたの物語は、これからも続いていく。",
  },
  "asep-kurnia": {
    name: "Asep Kurnia",
    japaneseName: "アセップ・クルニア",
    role: "Pemeran",
    image: null,
    intro: "Seorang mahasiswa S1 yang menyiapkan langkah menuju jenjang S2 bersama Shiori.",
    story:
      "Asep Kurnia dan Shiori Kagawa sama-sama sedang menapaki perjalanan dari S1 menuju S2. Namun takdir berkehendak lain, dan kisah ini lahir sebagai persembahan untuk perjalanan serta mimpi yang pernah mereka bawa bersama.",
    note: "物語をつなぐ人。",
  },
  "hiyori-kagawa": {
    name: "Hiyori Kagawa",
    japaneseName: "香川ひより",
    role: "Pemeran",
    image: "/cast/hiyori-kagawa.webp",
    intro: "Adik Shiori Kagawa dan bagian penting dari cerita keluarga ini.",
    story:
      "Sebagai adik Shiori, Hiyori Kagawa membawa kedekatan keluarga ke dalam film yang dirancang sebagai persembahan dengan penuh kasih.",
    note: "大切な記憶を、ともに。",
  },
} as const;

type ProfileSlug = keyof typeof profiles;

export function generateStaticParams() {
  return Object.keys(profiles).map((slug) => ({ slug }));
}

export default async function PemeranPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = profiles[slug as ProfileSlug];

  if (!profile) notFound();

  return (
    <main className="min-h-screen bg-[#0a0e14] text-[#f2f4f6]">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-12">
        <Link
          href="/"
          className="text-xs tracking-[0.28em] text-white/80 transition hover:text-white"
        >
          永遠にあなたのもの
        </Link>
        <Link
          href="/#pemeran"
          className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 transition hover:text-white"
        >
          ← Semua pemeran
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-20 sm:px-12 sm:pt-28 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden border border-white/15 bg-[#171b22]">
          {profile.image ? (
            <Image
              src={profile.image}
              alt={`Foto ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-8 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              Foto pemeran segera ditambahkan
            </div>
          )}
          <span className="absolute bottom-5 left-5 border border-white/25 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            {profile.role}
          </span>
        </div>

        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            出演者プロフィール / Profil Pemeran
          </p>
          <p className="text-sm tracking-[0.22em] text-zinc-600">
            {profile.japaneseName}
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-[0.06em] text-white sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
            {profile.intro}
          </p>
          <div className="mt-12 max-w-xl border-l border-red-800/60 pl-6">
            <p className="text-2xl font-light leading-relaxed text-zinc-200">
              {profile.note}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-20 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Tentang peran
            </p>
            <h2 className="mt-4 text-3xl font-light text-white">Di balik cerita</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400">
            {profile.story}
          </p>
        </div>
      </section>

      <footer className="px-6 py-10 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>永遠にあなたのもの · LIAS STUDIO</span>
          <Link href="/surat" className="transition hover:text-white">
            Baca surat dedikasi →
          </Link>
        </div>
      </footer>
    </main>
  );
}
