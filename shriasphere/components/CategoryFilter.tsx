"use client";

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {["সব", ...categories].map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`focus-ring font-bn shrink-0 rounded-full border px-4 py-2 text-sm transition-all ${
              isActive
                ? "border-crimson bg-crimson text-white"
                : "border-white/10 bg-ink-800/60 text-paper-300 hover:border-white/25 hover:text-paper-100"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
