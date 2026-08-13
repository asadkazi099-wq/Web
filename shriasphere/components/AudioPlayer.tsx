"use client";

import { Pause, Play, RotateCcw, RotateCw, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import type { Episode } from "@/data/episodes";
import { usePlayer } from "@/lib/player-context";

const SPEEDS = [1, 1.25, 1.5, 1.75, 2, 0.75];

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ episode }: { episode: Episode }) {
  const { current, isPlaying, play, toggle } = usePlayer();
  const isThis = current?.id === episode.id;
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);
  const totalSeconds = 34 * 60 + 12; // demo total duration reference

  useEffect(() => {
    if (!isThis || !isPlaying) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.3 * speed));
    }, 500);
    return () => clearInterval(id);
  }, [isThis, isPlaying, speed]);

  function handlePlayPause() {
    if (!isThis) play(episode);
    else toggle();
  }

  function skip(deltaPercent: number) {
    setProgress((p) => Math.min(100, Math.max(0, p + deltaPercent)));
  }

  const currentSeconds = (progress / 100) * totalSeconds;
  const playing = isThis && isPlaying;

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          aria-label={playing ? "পজ করুন" : "প্লে করুন"}
          className="focus-ring flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-crimson text-white shadow-glow transition-transform hover:scale-105"
        >
          {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={isThis ? progress : 0}
            onChange={(e) => {
              if (!isThis) play(episode);
              setProgress(Number(e.target.value));
            }}
            aria-label="প্রগ্রেস বার"
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-crimson"
          />
          <div className="font-en flex justify-between text-xs text-paper-500">
            <span>{formatTime(isThis ? currentSeconds : 0)}</span>
            <span>{formatTime(totalSeconds)}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => skip(-5)}
            aria-label="১৫ সেকেন্ড পেছনে"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper-300 hover:text-paper-100"
          >
            <RotateCcw size={15} />
          </button>
          <button
            onClick={() => skip(5)}
            aria-label="১৫ সেকেন্ড সামনে"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper-300 hover:text-paper-100"
          >
            <RotateCw size={15} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "আনমিউট" : "মিউট"}
            className="focus-ring text-paper-300 hover:text-paper-100"
          >
            {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>
          <label className="sr-only" htmlFor="speed">প্লেব্যাক গতি</label>
          <select
            id="speed"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="font-en focus-ring rounded-full border border-white/10 bg-ink-700/70 px-3 py-1.5 text-xs text-paper-100 outline-none"
          >
            {SPEEDS.map((s) => (
              <option key={s} value={s}>{s}x</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
