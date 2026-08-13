import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import FeaturedEpisode from "@/components/FeaturedEpisode";
import EpisodeGrid from "@/components/EpisodeGrid";
import SectionHeader from "@/components/SectionHeader";
import PlatformLinks from "@/components/PlatformLinks";
import Newsletter from "@/components/Newsletter";
import HostCard from "@/components/HostCard";
import { categories, episodes, getFeaturedEpisode } from "@/data/episodes";
import { hosts } from "@/data/hosts";

export default function HomePage() {
  const featured = getFeaturedEpisode();
  const latest = episodes.filter((e) => e.id !== featured.id).slice(0, 6);

  return (
    <>
      <Hero />
      <FeaturedEpisode episode={featured} />

      <section className="container-edge py-16 md:py-24">
        <div className="flex items-end justify-between">
          <SectionHeader eyebrow="Archive" title="সাম্প্রতিক এপিসোডসমূহ" />
          <Link
            href="/episodes"
            className="focus-ring font-bn mb-14 hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-paper-100 hover:text-crimson sm:flex"
          >
            সব দেখুন <ArrowUpRight size={15} />
          </Link>
        </div>
        <EpisodeGrid episodes={latest} />
      </section>

      <section className="border-y border-white/10 bg-ink-900/40">
        <div className="container-edge py-16 md:py-20">
          <SectionHeader eyebrow="Explore" title="বিষয় অনুযায়ী খুঁজুন" />
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c}
                href={`/episodes?category=${encodeURIComponent(c)}`}
                className="focus-ring font-bn rounded-full border border-white/10 bg-ink-800/60 px-5 py-2.5 text-sm text-paper-300 transition-all hover:border-crimson/50 hover:bg-crimson/10 hover:text-paper-100"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-edge grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
            alt="দ্য শ্রিয়াস্ফিয়ার পডকাস্ট রেকর্ডিং"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="আমাদের সম্পর্কে"
            title="প্রতিটি কথোপকথনে একটা সত্যিকারের গল্প থাকে"
            description="দ্য শ্রিয়াস্ফিয়ার শুরু হয়েছিল একটা সাধারণ বিশ্বাস থেকে — সত্যিকারের, খোলামেলা কথোপকথনের এখনও অভাব আছে। আমরা উদ্যোক্তা, শিল্পী, গবেষক আর সাধারণ মানুষদের সাথে বসি, যাতে শ্রোতারা এমন কিছু শিখতে পারেন যা সহজে কোথাও পাওয়া যায় না।"
          />
          <Link
            href="/about"
            className="focus-ring font-bn inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] hover:bg-crimson-600"
          >
            আমাদের গল্প জানুন <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <SectionHeader eyebrow="Voices" title="যাদের কণ্ঠে পডকাস্ট" align="center" />
        <div className="grid gap-6 sm:grid-cols-2">
          {hosts.map((h) => (
            <HostCard key={h.id} host={h} />
          ))}
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <SectionHeader
          title="যেখানেই শুনতে ভালোবাসেন, সেখানেই আমরা আছি।"
          align="center"
        />
        <div className="mx-auto max-w-2xl">
          <PlatformLinks />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
