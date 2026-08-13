"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function SearchBar({
  autoFocus = false,
  defaultValue = "",
  onChangeLive,
  large = false,
}: {
  autoFocus?: boolean;
  defaultValue?: string;
  onChangeLive?: (value: string) => void;
  large?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim()) router.push(`/search?q=${encodeURIComponent(value.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="relative w-full">
      <Search
        size={large ? 20 : 16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-paper-500"
      />
      <input
        type="search"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => {
          setValue(e.target.value);
          onChangeLive?.(e.target.value);
        }}
        placeholder="এপিসোড, অতিথি বা বিষয় খুঁজুন..."
        aria-label="সার্চ করুন"
        className={`font-bnBody focus-ring w-full rounded-full border border-white/10 bg-ink-800/70 text-paper-100 placeholder:text-paper-500 outline-none transition-colors focus:border-crimson/50 ${
          large ? "py-4 pl-12 pr-5 text-base" : "py-2.5 pl-10 pr-4 text-sm"
        }`}
      />
    </form>
  );
}
