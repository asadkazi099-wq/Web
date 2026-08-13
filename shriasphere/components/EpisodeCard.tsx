"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { Episode } from "@/data/episodes";
import { usePlayer } from "@/lib/player-context";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  const { play } = usePlayer();

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-card">
      <Link href={`/episodes/${episode.slug}`} className="focus-ring block">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={episode.artwork}
            alt={episode.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
          <span className="font-en absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-paper-100 backdrop-blur-sm">
            EP {episode.number}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <p className="font-en text-[11px] uppercase tracking-[0.15em] text-crimson-400">
          {episode.category}
        </p>
        <Link href={`/episodes/${episode.slug}`} className="focus-ring">
          <h3 className="font-bn mt-2 line-clamp-2 text-lg font-bold leading-snug text-paper-100 transition-colors group-hover:text-white">
            {episode.title}
          </h3>
        </Link>
        <p className="font-bnBody mt-2 line-clamp-2 text-sm text-paper-500">
          {episode.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bnBody text-xs text-paper-500">
            {episode.guest} · {episode.duration}
          </span>
          <button
            onClick={() => play(episode)}
            aria-label={`${episode.title} শুনুন`}
            className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-paper-100 transition-colors group-hover:bg-crimson group-hover:text-white"
          >
            <Play size={14} fill="currentColor" />
          </button>
        </div>
      </div>
    </article>
  );
}
