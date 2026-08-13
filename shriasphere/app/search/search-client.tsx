"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import EpisodeGrid from "@/components/EpisodeGrid";
import HostCard from "@/components/HostCard";
import SectionHeader from "@/components/SectionHeader";
import { episodes } from "@/data/episodes";
import { hosts } from "@/data/hosts";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const q = query.trim().toLowerCase();

  const episodeResults = useMemo(() => {
    if (!q) return [];
    return episodes.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.guest.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
    );
  }, [q]);

  const hostResults = useMemo(() => {
    if (!q) return [];
    return hosts.filter((h) => h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q));
  }, [q]);

  const hasResults = episodeResults.length > 0 || hostResults.length > 0;

  return (
    <div className="container-edge py-14 md:py-20">
      <SectionHeader eyebrow="Search" title="যা খুঁজছেন খুঁজে নিন" />
      <div className="mb-12 max-w-xl">
        <SearchBar large autoFocus defaultValue={query} onChangeLive={setQuery} />
      </div>

      {!q && (
        <p className="font-bnBody text-paper-500">এপিসোড, অতিথি, হোস্ট বা বিষয় দিয়ে সার্চ শুরু করুন।</p>
      )}

      {q && !hasResults && (
        <p className="font-bnBody rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center text-paper-500">
          &quot;{query}&quot;-এর জন্য কোনো ফলাফল পাওয়া যায়নি।
        </p>
      )}

      {episodeResults.length > 0 && (
        <div className="mb-14">
          <h2 className="font-bn mb-6 text-xl font-bold text-paper-100">এপিসোড ({episodeResults.length})</h2>
          <EpisodeGrid episodes={episodeResults} />
        </div>
      )}

      {hostResults.length > 0 && (
        <div>
          <h2 className="font-bn mb-6 text-xl font-bold text-paper-100">হোস্ট ({hostResults.length})</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {hostResults.map((h) => (
              <HostCard key={h.id} host={h} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
