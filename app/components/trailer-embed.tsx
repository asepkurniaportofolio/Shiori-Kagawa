"use client";

import { useState } from "react";

const trailerUrl = "https://www.youtube.com/embed/YiNQZ1ZSrjc";

export default function TrailerEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        className="h-full w-full"
        src={trailerUrl}
        title="Trailer 永遠にあなたのもの"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      aria-label="Putar trailer 永遠にあなたのもの"
      className="group flex h-full w-full flex-col items-center justify-center gap-4 bg-[#111820] text-zinc-400 transition-colors hover:bg-[#18232d] hover:text-white"
    >
      <span
        aria-hidden="true"
        className="grid h-16 w-16 place-items-center border border-white/30 text-white transition-transform group-hover:scale-110"
      >
        <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white" />
      </span>
      <span className="text-[10px] uppercase tracking-[0.25em]">
        Putar trailer
      </span>
    </button>
  );
}
