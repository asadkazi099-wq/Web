import Link from "next/link";
import BrandMark from "./BrandMark";
import SocialLinks from "./SocialLinks";
import PlatformLinks from "./PlatformLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="focus-ring flex items-center gap-2.5">
            <BrandMark size={28} />
            <span className="font-bn text-lg font-bold text-paper-100">দ্য শ্রিয়াস্ফিয়ার</span>
          </Link>
          <p className="font-bnBody mt-4 max-w-sm text-sm leading-relaxed text-paper-500">
            মানুষের গল্প, চিন্তা আর অভিজ্ঞতা নিয়ে বাংলাদেশি তরুণদের জন্য এক খোলামেলা কথোপকথনের জায়গা।
          </p>
          <SocialLinks
            className="mt-6"
            links={[
              { platform: "youtube", url: "https://youtube.com/@shriasphere" },
              { platform: "instagram", url: "https://instagram.com/shriasphere" },
              { platform: "facebook", url: "https://facebook.com/shriasphere" },
              { platform: "linkedin", url: "https://linkedin.com/company/shriasphere" },
            ]}
          />
        </div>

        <div>
          <h4 className="font-en mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper-500">
            নেভিগেশন
          </h4>
          <ul className="font-bn space-y-3 text-sm text-paper-300">
            <li><Link href="/" className="focus-ring hover:text-paper-100">হোম</Link></li>
            <li><Link href="/episodes" className="focus-ring hover:text-paper-100">এপিসোড</Link></li>
            <li><Link href="/hosts" className="focus-ring hover:text-paper-100">হোস্ট</Link></li>
            <li><Link href="/about" className="focus-ring hover:text-paper-100">আমাদের সম্পর্কে</Link></li>
            <li><Link href="/contact" className="focus-ring hover:text-paper-100">যোগাযোগ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-en mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper-500">
            যেখানে শুনবেন
          </h4>
          <PlatformLinks variant="row" />
        </div>
      </div>

      <div className="container-edge flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-paper-500 sm:flex-row">
        <p className="font-bnBody">© {new Date().getFullYear()} দ্য শ্রিয়াস্ফিয়ার পডকাস্ট। সর্বস্বত্ব সংরক্ষিত।</p>
        <div className="font-bn flex gap-5">
          <Link href="/privacy" className="focus-ring hover:text-paper-100">প্রাইভেসি পলিসি</Link>
          <Link href="/terms" className="focus-ring hover:text-paper-100">শর্তাবলী</Link>
        </div>
      </div>
    </footer>
  );
}
