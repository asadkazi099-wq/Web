import type { Episode } from "@/data/episodes";
import EpisodeCard from "./EpisodeCard";
import { EmptyState } from "./EmptyState";

export default function EpisodeGrid({ episodes }: { episodes: Episode[] }) {
  if (episodes.length === 0) return <EmptyState />;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {episodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  );
}
