"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-crimson/30 bg-crimson/5 px-6 py-16 text-center">
        <CheckCircle2 size={32} className="text-crimson" />
        <p className="font-bn text-lg font-bold text-paper-100">মেসেজ পাঠানো হয়েছে!</p>
        <p className="font-bnBody text-sm text-paper-500">আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-ink-800/40 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="font-bn mb-2 block text-sm text-paper-300">নাম</label>
        <input
          id="name"
          required
          className="font-bnBody focus-ring w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-paper-100 outline-none focus:border-crimson/50"
          placeholder="আপনার পূর্ণ নাম"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-bn mb-2 block text-sm text-paper-300">ইমেইল</label>
        <input
          id="email"
          type="email"
          required
          className="font-en focus-ring w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-paper-100 outline-none focus:border-crimson/50"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="font-bn mb-2 block text-sm text-paper-300">বিষয়</label>
        <input
          id="subject"
          required
          className="font-bnBody focus-ring w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-paper-100 outline-none focus:border-crimson/50"
          placeholder="কী বিষয়ে যোগাযোগ করছেন?"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-bn mb-2 block text-sm text-paper-300">মেসেজ</label>
        <textarea
          id="message"
          required
          rows={5}
          className="font-bnBody focus-ring w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-paper-100 outline-none focus:border-crimson/50"
          placeholder="আপনার মেসেজ লিখুন..."
        />
      </div>
      <button
        type="submit"
        className="focus-ring font-bn flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.01] hover:bg-crimson-600 sm:w-auto"
      >
        মেসেজ পাঠান <Send size={15} />
      </button>
    </form>
  );
}
