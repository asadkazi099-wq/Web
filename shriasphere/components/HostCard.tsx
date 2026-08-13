import Image from "next/image";
import Link from "next/link";
import type { Host } from "@/data/hosts";
import SocialLinks from "./SocialLinks";

export default function HostCard({ host }: { host: Host }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50 transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-card">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={host.photo}
          alt={host.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-bn text-xl font-bold text-paper-100">{host.name}</h3>
        <p className="font-en mt-1 text-xs uppercase tracking-[0.15em] text-crimson-400">
          {host.role}
        </p>
        <p className="font-bnBody mt-3 text-sm leading-relaxed text-paper-500">{host.bio}</p>
        <div className="mt-5 flex items-center justify-between">
          <Link
            href={`/hosts#${host.slug}`}
            className="focus-ring font-bn text-sm font-semibold text-paper-100 underline decoration-crimson decoration-2 underline-offset-4"
          >
            প্রোফাইল দেখুন
          </Link>
          <SocialLinks links={host.social} />
        </div>
      </div>
    </article>
  );
}
