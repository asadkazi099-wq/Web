import Image from "next/image";
import Link from "next/link";
import { Play, ListMusic } from "lucide-react";
import BrandMark from "./BrandMark";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #E2242C 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-edge grid items-center gap-14 pb-20 pt-14 md:grid-cols-2 md:pb-28 md:pt-20">
        <div className="animate-fadeUp">
          <div className="mb-6 flex items-center gap-2">
            <BrandMark size={26} />
            <span className="font-en text-xs uppercase tracking-[0.25em] text-paper-500">
              THE SHRIASPHERE PODCAST
            </span>
          </div>
          <h1 className="font-bn text-balance text-4xl font-extrabold leading-[1.15] text-paper-100 sm:text-5xl lg:text-[3.4rem]">
            যে কথোপকথনগুলো <span className="text-crimson">সত্যিই ভাবতে</span> বাধ্য করে
          </h1>
          <p className="font-bnBody mt-6 max-w-lg text-base leading-relaxed text-paper-500 sm:text-lg">
            উদ্যোক্তা, প্রযুক্তি, ক্যারিয়ার আর জীবনের গল্প নিয়ে প্রতি সপ্তাহে নতুন পর্ব — বাংলাদেশের তরুণদের জন্য, তরুণদের দ্বারা।
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/episodes"
              className="focus-ring font-bn flex items-center gap-2.5 rounded-full bg-crimson px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03] hover:bg-crimson-600"
            >
              <Play size={15} fill="currentColor" /> এপিসোড শুনুন
            </Link>
            <Link
              href="/episodes"
              className="focus-ring font-bn flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-paper-100 transition-colors hover:border-white/40"
            >
              <ListMusic size={15} /> সব এপিসোড দেখুন
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-en text-xs uppercase tracking-[0.2em] text-paper-500">Follow</span>
            <SocialLinks
              links={[
                { platform: "youtube", url: "https://youtube.com/@shriasphere" },
                { platform: "instagram", url: "https://instagram.com/shriasphere" },
                { platform: "facebook", url: "https://facebook.com/shriasphere" },
              ]}
            />
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:150ms]">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop"
              alt="দ্য শ্রিয়াস্ফিয়ার পডকাস্ট রেকর্ডিং স্টুডিও"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex w-[85%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 p-3.5 backdrop-blur-md sm:-bottom-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
              <span className="h-2 w-2 animate-pulse rounded-full bg-crimson" />
            </span>
            <p className="font-bnBody text-xs text-paper-300 sm:text-sm">
              প্রতি বৃহস্পতিবার নতুন পর্ব প্রকাশিত হয়
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
