"use client";

import { X } from "lucide-react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "/", label: "হোম" },
  { href: "/episodes", label: "এপিসোড" },
  { href: "/hosts", label: "হোস্ট" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[70] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 flex w-[82%] max-w-xs flex-col bg-ink-900 border-l border-white/10 px-6 py-6 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-bn text-lg font-bold text-paper-100">মেনু</span>
          <button
            onClick={onClose}
            aria-label="মেনু বন্ধ করুন"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper-300"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="focus-ring font-bn rounded-lg px-3 py-3.5 text-lg text-paper-100 transition-colors hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/episodes"
          onClick={onClose}
          className="focus-ring font-bn mt-6 rounded-full bg-crimson px-5 py-3 text-center text-sm font-bold text-white"
        >
          সর্বশেষ এপিসোড
        </Link>
        <div className="mt-auto pt-8">
          <SocialLinks
            links={[
              { platform: "youtube", url: "https://youtube.com/@shriasphere" },
              { platform: "instagram", url: "https://instagram.com/shriasphere" },
              { platform: "facebook", url: "https://facebook.com/shriasphere" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
