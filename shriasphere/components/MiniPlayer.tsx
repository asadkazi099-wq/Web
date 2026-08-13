"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play, Volume2, X } from "lucide-react";
import { usePlayer } from "@/lib/player-context";
import { useEffect, useState } from "react";

export default function MiniPlayer() {
  const { current, isPlaying, toggle, close } = usePlayer();
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!isPlaying || !current) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.5));
    }, 600);
    return () => clearInterval(id);
  }, [isPlaying, current]);

  if (!current) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-ink-950/95 backdrop-blur-md animate-fadeUp">
      <div className="h-0.5 w-full bg-white/5">
        <div className="h-full bg-crimson transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="container-edge flex items-center gap-3 py-2.5 sm:gap-4 sm:py-3">
        <Link href={`/episodes/${current.slug}`} className="focus-ring flex min-w-0 flex-1 items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg sm:h-12 sm:w-12">
            <Image src={current.artwork} alt={current.title} fill className="object-cover" sizes="48px" />
          </div>
          <div className="min-w-0">
            <p className="font-bn truncate text-sm font-semibold text-paper-100">{current.title}</p>
            <p className="font-bnBody truncate text-xs text-paper-500">{current.guest}</p>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            aria-label={isPlaying ? "পজ করুন" : "প্লে করুন"}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-crimson text-white transition-transform hover:scale-105"
          >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>
          <span className="hidden items-center gap-1.5 text-paper-500 sm:flex">
            <Volume2 size={16} />
          </span>
          <button
            onClick={close}
            aria-label="প্লেয়ার বন্ধ করুন"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-paper-500 transition-colors hover:text-paper-100"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
