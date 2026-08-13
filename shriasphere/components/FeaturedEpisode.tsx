"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { Episode } from "@/data/episodes";
import { usePlayer } from "@/lib/player-context";

export default function FeaturedEpisode({ episode }: { episode: Episode }) {
  const { play } = usePlayer();

  return (
    <section className="container-edge py-16 md:py-24">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson" />
        <span className="font-en text-xs uppercase tracking-[0.2em] text-paper-500">
          সর্বশেষ এপিসোড
        </span>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src={episode.artwork}
            alt={episode.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent md:bg-gradient-to-r" />
          <button
            onClick={() => play(episode)}
            aria-label="প্লে করুন"
            className="focus-ring absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white shadow-glow transition-transform hover:scale-105"
          >
            <Play size={20} fill="currentColor" className="ml-0.5" />
          </button>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10">
          <span className="font-en text-xs text-paper-500">EPISODE {episode.number}</span>
          <h3 className="font-bn text-balance mt-3 text-2xl font-bold leading-snug text-paper-100 sm:text-3xl">
            {episode.title}
          </h3>
          <p className="font-bnBody mt-3 text-sm text-paper-500">
            {episode.guest} · {episode.guestRole}
          </p>
          <p className="font-bnBody mt-5 leading-relaxed text-paper-300">{episode.description}</p>
          <div className="font-bnBody mt-5 flex items-center gap-4 text-sm text-paper-500">
            <span>{episode.date}</span>
            <span className="h-1 w-1 rounded-full bg-paper-500" />
            <span>{episode.duration}</span>
          </div>
          <Link
            href={`/episodes/${episode.slug}`}
            className="focus-ring font-bn mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-bold text-paper-100 transition-colors hover:bg-crimson hover:text-white"
          >
            এপিসোড দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
}
