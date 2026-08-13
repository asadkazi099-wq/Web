import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "শর্তাবলী" };

export default function TermsPage() {
  return (
    <div className="container-edge max-w-3xl py-14 md:py-20">
      <SectionHeader eyebrow="Legal" title="শর্তাবলী" />
      <div className="font-bnBody space-y-5 leading-relaxed text-paper-300">
        <p>এই ওয়েবসাইট ব্যবহার করে আপনি দ্য শ্রিয়াস্ফিয়ার পডকাস্টের ব্যবহারের শর্তাবলীতে সম্মত হচ্ছেন। এখানে প্রকাশিত সকল কনটেন্ট (অডিও, লেখা, ছবি) কপিরাইট আইনে সুরক্ষিত।</p>
        <p className="text-paper-500">এই একটি নমুনা পেজ — আপনার প্রকৃত শর্তাবলী এখানে যুক্ত করুন।</p>
      </div>
    </div>
  );
}
