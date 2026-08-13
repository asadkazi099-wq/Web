import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, Mic2 } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import ShareButtons from "@/components/ShareButtons";
import EpisodeGrid from "@/components/EpisodeGrid";
import SectionHeader from "@/components/SectionHeader";
import { episodes, getEpisodeBySlug, getRelatedEpisodes } from "@/data/episodes";

export function generateStaticParams() {
  return episodes.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) return {};
  return {
    title: episode.title,
    description: episode.description,
    alternates: { canonical: `/episodes/${episode.slug}` },
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: [episode.artwork],
      type: "article",
    },
  };
}

export default function EpisodeDetailsPage({ params }: { params: { slug: string } }) {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) notFound();

  const related = getRelatedEpisodes(episode);
  const url = `https://shriasphere.com/episodes/${episode.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    datePublished: episode.date,
    duration: episode.duration,
    associatedMedia: { "@type": "MediaObject", contentUrl: episode.audioUrl },
    partOfSeries: { "@type": "PodcastSeries", name: "দ্য শ্রিয়াস্ফিয়ার পডকাস্ট" },
  };

  return (
    <div className="container-edge py-12 md:py-16">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="font-bnBody mb-8 flex items-center gap-2 text-sm text-paper-500">
        <Link href="/episodes" className="focus-ring hover:text-paper-100">এপিসোড</Link>
        <span>/</span>
        <span className="text-paper-300">EP {episode.number}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-[380px_1fr] md:gap-14">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <Image src={episode.artwork} alt={episode.title} fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover" priority />
          </div>
          <div className="mt-6">
            <AudioPlayer episode={episode} />
          </div>
        </div>

        <div>
          <span className="font-en text-xs uppercase tracking-[0.2em] text-crimson-400">
            {episode.category} · EPISODE {episode.number}
          </span>
          <h1 className="font-bn text-balance mt-3 text-3xl font-extrabold leading-tight text-paper-100 sm:text-4xl">
            {episode.title}
          </h1>

          <div className="font-bnBody mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper-500">
            <span className="flex items-center gap-1.5"><Mic2 size={14} /> {episode.guest} · {episode.host}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {episode.date}</span>
            <span className="flex items-center gap-1.5"><Clock3 size={14} /> {episode.duration}</span>
          </div>

          <p className="font-bnBody mt-6 leading-relaxed text-paper-300">{episode.description}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-ink-800/40 p-6">
            <h2 className="font-bn text-lg font-bold text-paper-100">অতিথি সম্পর্কে</h2>
            <p className="font-bnBody mt-2 text-sm text-paper-500">{episode.guest} — {episode.guestRole}</p>
          </div>

          <div className="mt-8">
            <h2 className="font-bn text-lg font-bold text-paper-100">শো নোটস</h2>
            <ul className="font-bnBody mt-4 space-y-2.5 text-paper-300">
              {episode.showNotes.map((note, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-bn text-lg font-bold text-paper-100">মূল বিষয়সমূহ</h2>
            <ul className="font-bnBody mt-4 space-y-2.5 text-paper-300">
              {episode.keyTakeaways.map((note, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-en mt-0.5 text-xs font-bold text-crimson-400">{String(i + 1).padStart(2, "0")}</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-bn text-lg font-bold text-paper-100">চ্যাপ্টারস</h2>
            <ul className="mt-4 divide-y divide-white/5 rounded-2xl border border-white/10">
              {episode.chapters.map((c, i) => (
                <li key={i} className="font-bnBody flex items-center justify-between px-5 py-3.5 text-sm">
                  <span className="text-paper-100">{c.title}</span>
                  <span className="font-en text-paper-500">{c.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-bn mb-3 text-lg font-bold text-paper-100">শেয়ার করুন</h2>
            <ShareButtons title={episode.title} url={url} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <SectionHeader eyebrow="More" title="সম্পর্কিত এপিসোড" />
          <EpisodeGrid episodes={related} />
        </section>
      )}
    </div>
  );
}
