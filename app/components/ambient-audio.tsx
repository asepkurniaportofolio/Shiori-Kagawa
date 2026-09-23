"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleAudio = async () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }

      return;
    }

    const audio = new Audio("/music/backsound.mp3");
    audio.loop = true;
    audio.volume = 0.25;
    await audio.play();
    audioRef.current = audio;
    setIsPlaying(true);
  };

  return (
    <button
      type="button"
      onClick={toggleAudio}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Matikan backsound" : "Nyalakan backsound"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 border border-white/20 bg-[#0a0e14]/75 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md transition hover:border-white/50 hover:text-white"
    >
      <span className="flex h-3 items-end gap-0.5" aria-hidden="true">
        <span className={`w-px bg-current ${isPlaying ? "h-2" : "h-1"}`} />
        <span className={`w-px bg-current ${isPlaying ? "h-3" : "h-2"}`} />
        <span className={`w-px bg-current ${isPlaying ? "h-1.5" : "h-1"}`} />
      </span>
      {isPlaying ? "Suara: nyala" : "Suara: mati"}
    </button>
  );
}
