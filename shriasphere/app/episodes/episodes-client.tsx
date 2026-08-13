"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowDownUp } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import EpisodeGrid from "@/components/EpisodeGrid";
import { categories, episodes } from "@/data/episodes";

const PAGE_SIZE = 6;

export default function EpisodesClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "সব";

  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"new" | "old">("new");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let list = episodes.slice();
    if (category !== "সব") list = list.filter((e) => e.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.guest.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
      );
    }
    list.sort((a, b) => (sort === "new" ? b.number - a.number : a.number - b.number));
    return list;
  }, [category, query, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="container-edge py-14 md:py-20">
      <SectionHeader eyebrow="Library" title="সব এপিসোড" description="আপনার পছন্দের বিষয়, অতিথি বা কিওয়ার্ড দিয়ে খুঁজুন।" />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full max-w-md">
          <SearchBar
            defaultValue={query}
            onChangeLive={(v) => {
              setQuery(v);
              setVisible(PAGE_SIZE);
            }}
          />
        </div>
        <button
          onClick={() => setSort((s) => (s === "new" ? "old" : "new"))}
          className="focus-ring font-bn flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2.5 text-sm text-paper-300 hover:text-paper-100 md:self-auto"
        >
          <ArrowDownUp size={14} />
          {sort === "new" ? "নতুন আগে" : "পুরোনো আগে"}
        </button>
      </div>

      <div className="mb-10">
        <CategoryFilter
          categories={categories}
          active={category}
          onChange={(c) => {
            setCategory(c);
            setVisible(PAGE_SIZE);
          }}
        />
      </div>

      <p className="font-bnBody mb-6 text-sm text-paper-500">{filtered.length}টি এপিসোড পাওয়া গেছে</p>

      <EpisodeGrid episodes={shown} />

      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="focus-ring font-bn rounded-full border border-white/15 px-8 py-3.5 text-sm font-bold text-paper-100 transition-colors hover:border-crimson/50 hover:bg-crimson/10"
          >
            আরও দেখুন
          </button>
        </div>
      )}
    </div>
  );
}
