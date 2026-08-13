import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import SocialLinks from "@/components/SocialLinks";
import EpisodeGrid from "@/components/EpisodeGrid";
import { hosts } from "@/data/hosts";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "হোস্টরা",
  description: "দ্য শ্রিয়াস্ফিয়ার পডকাস্টের হোস্টদের সাথে পরিচিত হন।",
  alternates: { canonical: "/hosts" },
};

export default function HostsPage() {
  return (
    <div className="container-edge py-14 md:py-20">
      <SectionHeader eyebrow="Team" title="যাদের কণ্ঠে পডকাস্ট" description="দুজন মানুষ, একটাই লক্ষ্য — সত্যিকারের কথোপকথন তৈরি করা।" />

      <div className="space-y-20">
        {hosts.map((host, idx) => {
          const featured = episodes.slice(idx, idx + 3);
          return (
            <div key={host.id} id={host.slug} className="scroll-mt-24">
              <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-14">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src={host.photo} alt={host.name} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" />
                </div>
                <div>
                  <h2 className="font-bn text-3xl font-bold text-paper-100">{host.name}</h2>
                  <p className="font-en mt-1 text-xs uppercase tracking-[0.2em] text-crimson-400">{host.role}</p>
                  <div className="mt-5 space-y-4">
                    {host.longBio.map((p, i) => (
                      <p key={i} className="font-bnBody leading-relaxed text-paper-300">{p}</p>
                    ))}
                  </div>
                  <SocialLinks className="mt-6" links={host.social} />
                </div>
              </div>

              {featured.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-bn mb-5 text-lg font-bold text-paper-100">নির্বাচিত এপিসোড</h3>
                  <EpisodeGrid episodes={featured} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
