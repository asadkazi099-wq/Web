"use client";

import { Facebook, MessageCircle, Link2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = [
    { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "Messenger", icon: MessageCircle, href: `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=0` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
    { label: "X", icon: MessageCircle, href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {targets.map((t) => (
        <a
          key={t.label}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.label}-এ শেয়ার করুন`}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper-300 transition-colors hover:border-crimson/50 hover:text-white"
        >
          <t.icon size={16} />
        </a>
      ))}
      <button
        onClick={copyLink}
        className="focus-ring font-bn flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-paper-300 transition-colors hover:border-crimson/50 hover:text-white"
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
        {copied ? "লিংক কপি হয়েছে" : "লিংক কপি করুন"}
      </button>
    </div>
  );
}
