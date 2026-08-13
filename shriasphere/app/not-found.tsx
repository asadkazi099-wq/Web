import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function NotFound() {
  return (
    <div className="container-edge flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <BrandMark size={44} />
      <p className="font-en mt-8 text-sm uppercase tracking-[0.3em] text-paper-500">404</p>
      <h1 className="font-bn text-balance mt-3 text-3xl font-extrabold text-paper-100 sm:text-4xl">
        এই পেজটি খুঁজে পাওয়া যায়নি
      </h1>
      <p className="font-bnBody mt-4 max-w-md text-paper-500">
        সম্ভবত লিংকটি ভুল অথবা পেজটি সরিয়ে ফেলা হয়েছে। চিন্তা নেই, নিচের বাটন থেকে হোমপেজে ফিরে যান।
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="focus-ring font-bn rounded-full bg-crimson px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03] hover:bg-crimson-600"
        >
          হোমে ফিরুন
        </Link>
        <Link
          href="/episodes"
          className="focus-ring font-bn rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-paper-100 transition-colors hover:border-white/40"
        >
          এপিসোড দেখুন
        </Link>
      </div>
    </div>
  );
}
