"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("done");
  }

  return (
    <section className="border-y border-white/10 bg-ink-900/60">
      <div className="container-edge flex flex-col items-center gap-6 py-16 text-center md:py-20">
        <h3 className="font-bn text-balance text-2xl font-bold text-paper-100 sm:text-3xl">
          নতুন এপিসোড মিস করতে চান না?
        </h3>
        <p className="font-bnBody max-w-md text-paper-500">
          প্রতি সপ্তাহে নতুন পর্ব সরাসরি আপনার ইনবক্সে পেতে সাবস্ক্রাইব করুন।
        </p>
        {status === "idle" ? (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="আপনার ইমেইল ঠিকানা"
              aria-label="ইমেইল"
              className="font-en focus-ring w-full rounded-full border border-white/15 bg-ink-800/70 px-5 py-3.5 text-sm text-paper-100 placeholder:text-paper-500 outline-none focus:border-crimson/50"
            />
            <button
              type="submit"
              className="focus-ring font-bn flex shrink-0 items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] hover:bg-crimson-600"
            >
              সাবস্ক্রাইব করুন <Send size={15} />
            </button>
          </form>
        ) : (
          <p className="font-bn rounded-full border border-crimson/40 bg-crimson/10 px-5 py-2.5 text-sm text-paper-100">
            ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।
          </p>
        )}
      </div>
    </section>
  );
}
