import { SearchX } from "lucide-react";

export function EmptyState({
  title = "কোনো এপিসোড পাওয়া যায়নি।",
  description = "অন্য কিওয়ার্ড দিয়ে খুঁজে দেখুন অথবা ফিল্টার পরিবর্তন করুন।",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/10 px-6 py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-paper-500">
        <SearchX size={22} strokeWidth={1.5} />
      </span>
      <p className="font-bn text-lg font-semibold text-paper-100">{title}</p>
      <p className="font-bnBody max-w-sm text-sm text-paper-500">{description}</p>
    </div>
  );
}

export function LoadingState({ rows = 6 }: { rows?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50"
        >
          <div className="aspect-square w-full bg-ink-700/70" />
          <div className="space-y-3 p-5">
            <div className="h-3 w-1/3 rounded bg-ink-700/70" />
            <div className="h-4 w-4/5 rounded bg-ink-700/70" />
            <div className="h-4 w-3/5 rounded bg-ink-700/70" />
          </div>
        </div>
      ))}
    </div>
  );
}
