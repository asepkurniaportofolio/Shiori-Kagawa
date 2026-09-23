"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const languages = {
  id: {
    label: "Indonesia",
    kicker: "手紙 / Surat",
    title: ["Untuk Shiori,", "yang selalu tinggal."],
    intro: "Halaman ini menyimpan alasan mengapa film ini dibuat dan untuk siapa setiap adegannya dipersembahkan.",
    dedicated: "Dipersembahkan untuk",
    greeting: "Untuk Shiori,",
    paragraphs: [
      "Shiori adalah seorang mahasiswa S1 yang sedang menuju jenjang S2. Ia menapaki perjalanan pendidikan dan mimpi-mimpinya dengan penuh harapan, sampai takdir memanggilnya lebih dahulu.",
      "Film ini dipersembahkan khusus untukmu, untuk merawat kasih, tawa, dan jejak kecil yang membuat kehadiranmu begitu berarti.",
    ],
    closing: "Semoga karya ini menjadi surat kecil untukmu.",
    withLove: "Dengan cinta,",
    dedication: "Dedikasi",
    production: "Produksi",
    back: "Kembali ke film",
    collection: "Lihat koleksi",
  },
  ja: {
    label: "日本語",
    kicker: "手紙 / Letter",
    title: ["しおりへ、", "いつまでも心に。"],
    intro: "このページには、この作品が生まれた理由と、誰に捧げられた物語なのかを記しています。",
    dedicated: "献呈",
    greeting: "しおりへ、",
    paragraphs: [
      "しおりは、大学から大学院へ進もうとしていた学生でした。希望を抱いて歩んでいましたが、運命は別の道を選びました。",
      "この作品を、しおりへ捧げます。愛と笑顔、そしてあなたが残した小さな足跡を、いつまでも大切にできますように。",
    ],
    closing: "この作品が、あなたへの小さな手紙になりますように。",
    withLove: "愛を込めて、",
    dedication: "献呈",
    production: "制作",
    back: "作品へ戻る",
    collection: "コレクションを見る",
  },
  en: {
    label: "English",
    kicker: "手紙 / Letter",
    title: ["For Shiori,", "who remains with us."],
    intro: "This page holds the reason this film was made, and the person to whom every scene is dedicated.",
    dedicated: "Dedicated to",
    greeting: "Dear Shiori,",
    paragraphs: [
      "Shiori was an undergraduate student preparing to continue into graduate school. She walked toward that dream with hope, until fate called her to another path.",
      "This film is dedicated to you alone, holding on to the love, laughter, and small traces that made your presence so meaningful.",
    ],
    closing: "May this work become a small letter to you.",
    withLove: "With love,",
    dedication: "Dedication",
    production: "Production",
    back: "Back to the film",
    collection: "View collection",
  },
} as const;

type Language = keyof typeof languages;

export default function SuratPage() {
  const [language, setLanguage] = useState<Language>("id");
  const [hasOpened, setHasOpened] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const copy = languages[language];

  const openLetter = () => {
    if (isLaunching) return;

    setIsLaunching(true);
    window.setTimeout(() => setHasOpened(true), 1700);
  };

  return (
    <main className="japanese-letter-page min-h-screen bg-[#0a0e14] text-[#f2f4f6]">
      {!hasOpened ? (
        <section className={`flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center ${isLaunching ? "letter-launching" : ""}`}>
          <div className={`paper-plane mb-12 ${isLaunching ? "plane-launching" : ""}`} aria-hidden="true">
            <span />
          </div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            恋文 / A love letter for Shiori
          </p>
          <h1 className="text-3xl font-light tracking-[0.12em] text-white sm:text-5xl">
            Sebuah surat kecil
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
            Ada pesan yang ingin disampaikan dengan tenang. Buka surat ini
            untuk membacanya.
          </p>
          <button
            type="button"
            onClick={openLetter}
            disabled={isLaunching}
            className="mt-10 border border-white/30 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-black"
          >
            {isLaunching ? "Mengirim surat" : "Buka surat"}
          </button>
        </section>
      ) : null}

      <div className={hasOpened ? "letter-content letter-reveal" : "hidden"}>
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-12">
        <Link href="/" className="text-xs tracking-[0.28em] text-white/80 transition hover:text-white">
          永遠にあなたのもの
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Letter / 01</span>
          <div className="flex border border-white/15" aria-label="Pilih bahasa">
            {(Object.keys(languages) as Language[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`px-3 py-2 text-[10px] uppercase tracking-[0.16em] transition ${language === item ? "bg-white text-black" : "text-zinc-500 hover:text-white"}`}
                aria-pressed={language === item}
              >
                {languages[item].label}
              </button>
            ))}
          </div>
        </div>
        </header>

        <section className="japanese-letter-sheet mx-auto max-w-4xl px-6 pb-24 pt-24 sm:px-12 sm:pt-32">
        <div className="letter-seal-mark" aria-hidden="true">印</div>
        <p className="letter-vertical-quote" aria-hidden="true">いつまでも、心の中に</p>
        <div className="pointer-events-none absolute right-8 top-16 hidden opacity-25 lg:block" aria-hidden="true">
          <Image
            src="/cast/shiori-kagawa.webp"
            alt="Foto Shiori Kagawa"
            width={220}
            height={290}
            className="object-cover opacity-75 grayscale"
          />
        </div>
        <div className="mb-20 border-b border-black/10 pb-12">
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-stone-500">{copy.kicker}</p>
          <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-[0.08em] text-[#27231f] sm:text-7xl">
            {copy.title[0]}
            <br />
            {copy.title[1]}
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-8 text-stone-600">{copy.intro}</p>
        </div>

        <article className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
            <p>{copy.dedicated}</p>
            <p className="mt-3 text-stone-700">Shiori Kagawa</p>
          </div>
          <div className="space-y-8 text-base leading-9 text-stone-700 sm:text-lg">
            <p>{copy.greeting}</p>
            {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>{copy.closing}</p>
            <p className="border-l border-red-800/40 pl-5 pt-6 text-stone-500">{copy.withLove}</p>
            <p className="font-light tracking-[0.15em] text-[#27231f]">LIAS STUDIO</p>
          </div>
        </article>

        <div className="mt-24 grid gap-8 border-t border-black/10 pt-8 text-xs text-stone-600 sm:grid-cols-3">
          <div><p className="mb-2 uppercase tracking-[0.22em] text-stone-400">Film</p><p>永遠にあなたのもの</p></div>
          <div><p className="mb-2 uppercase tracking-[0.22em] text-stone-400">{copy.dedication}</p><p>Shiori Kagawa</p></div>
          <div><p className="mb-2 uppercase tracking-[0.22em] text-stone-400">{copy.production}</p><p>LIAS STUDIO</p></div>
        </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-8 sm:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="transition hover:text-white">{copy.back}</Link>
          <Link href="/koleksi" className="transition hover:text-white">{copy.collection}</Link>
        </div>
        </footer>
      </div>
    </main>
  );
}
