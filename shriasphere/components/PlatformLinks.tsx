import { Youtube, Music2, Headphones, Facebook } from "lucide-react";

const platforms = [
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@shriasphere" },
  { name: "Spotify", icon: Music2, url: "https://open.spotify.com" },
  { name: "Apple Podcasts", icon: Headphones, url: "https://podcasts.apple.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/shriasphere" },
];

export default function PlatformLinks({ variant = "grid" }: { variant?: "grid" | "row" }) {
  return (
    <div
      className={
        variant === "grid"
          ? "grid grid-cols-2 gap-3 sm:grid-cols-4"
          : "flex flex-wrap items-center gap-3"
      }
    >
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/60 px-4 py-3.5 transition-all hover:border-crimson/50 hover:bg-ink-700/60"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-paper-300 transition-colors group-hover:bg-crimson group-hover:text-white">
            <p.icon size={17} strokeWidth={1.75} />
          </span>
          <span className="font-en text-sm text-paper-100">{p.name}</span>
        </a>
      ))}
    </div>
  );
}
