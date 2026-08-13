import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে",
  description: "দ্য শ্রিয়াস্ফিয়ার পডকাস্টের গল্প, লক্ষ্য এবং শ্রোতাদের প্রতি আমাদের প্রতিশ্রুতি।",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="container-edge py-14 md:py-20">
        <SectionHeader eyebrow="আমাদের গল্প" title="একটা ছোট আড্ডা থেকে যেভাবে শুরু" />
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="font-bnBody leading-relaxed text-paper-300">
              ২০২৪ সালে একটা ছোট ঘরের কোণে, দুইজন বন্ধু মিলে ঠিক করেছিলেন — বাংলাদেশে এমন একটা পডকাস্ট দরকার যেখানে মানুষ সত্যি কথা বলতে পারবে। এডিট করা, সাজানো উত্তর নয়, বরং আসল সংগ্রাম, আসল প্রশ্ন আর আসল উত্তর।
            </p>
            <p className="font-bnBody leading-relaxed text-paper-300">
              দ্য শ্রিয়াস্ফিয়ার আজ ৪০+ পর্ব পার করেছে, শতাধিক অতিথির গল্প শুনিয়েছে, আর ধীরে ধীরে হয়ে উঠেছে তরুণদের জন্য এক বিশ্বাসযোগ্য জায়গা — যেখানে তারা নিজের প্রশ্নের উত্তর খুঁজে পায়।
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop"
              alt="স্টুডিওতে পডকাস্ট রেকর্ডিং"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-ink-900/40">
        <div className="container-edge grid gap-10 py-16 md:grid-cols-3 md:py-20">
          <div>
            <h3 className="font-bn text-xl font-bold text-paper-100">কেন এই পডকাস্ট</h3>
            <p className="font-bnBody mt-3 text-sm leading-relaxed text-paper-500">
              বাংলাদেশের তরুণদের কাছে গল্প পৌঁছানোর মাধ্যম অনেক থাকলেও, গভীর ও সৎ কথোপকথনের জায়গা ছিল সীমিত। আমরা সেই ফাঁকটা পূরণ করতে চেয়েছি।
            </p>
          </div>
          <div>
            <h3 className="font-bn text-xl font-bold text-paper-100">আমাদের লক্ষ্য</h3>
            <p className="font-bnBody mt-3 text-sm leading-relaxed text-paper-500">
              প্রতিটি পর্বে অন্তত একটা এমন উপলব্ধি তৈরি করা, যা শ্রোতা তার নিজের জীবনে প্রয়োগ করতে পারে — সে ক্যারিয়ার হোক, ব্যবসা হোক, বা ব্যক্তিগত জীবন।
            </p>
          </div>
          <div>
            <h3 className="font-bn text-xl font-bold text-paper-100">আমরা কী নিয়ে কথা বলি</h3>
            <p className="font-bnBody mt-3 text-sm leading-relaxed text-paper-500">
              উদ্যোক্তা জীবন, প্রযুক্তি, ক্যারিয়ার, শিক্ষা, সমাজ, সংস্কৃতি — যেকোনো বিষয় যা তরুণদের বাস্তব জীবনের সাথে সরাসরি সম্পর্কিত।
            </p>
          </div>
        </div>
      </div>

      <div className="container-edge py-16 md:py-24">
        <SectionHeader
          eyebrow="প্রতিশ্রুতি"
          title="শ্রোতাদের জন্য আমাদের প্রতিশ্রুতি"
          description="আমরা কথা দিই — প্রতিটি পর্ব হবে সৎ, ভালোভাবে গবেষণা করা, আর সময়ের যোগ্য। কোনো স্পন্সরড মতামত অতিথির মুখে বসানো হবে না, এবং কঠিন প্রশ্ন এড়িয়ে যাওয়া হবে না।"
        />
        <Link
          href="/episodes"
          className="focus-ring font-bn inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] hover:bg-crimson-600"
        >
          এপিসোড শুনুন <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
