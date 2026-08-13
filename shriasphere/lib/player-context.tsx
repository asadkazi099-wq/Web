"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { Episode } from "@/data/episodes";

interface PlayerState {
  current: Episode | null;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  toggle: () => void;
  close: () => void;
}

const PlayerContext = createContext<PlayerState | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const value = useMemo(
    () => ({
      current,
      isPlaying,
      play: (episode: Episode) => {
        setCurrent(episode);
        setIsPlaying(true);
      },
      toggle: () => setIsPlaying((p) => !p),
      close: () => {
        setCurrent(null);
        setIsPlaying(false);
      },
    }),
    [current, isPlaying]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
