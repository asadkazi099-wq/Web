import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "প্রাইভেসি পলিসি" };

export default function PrivacyPage() {
  return (
    <div className="container-edge max-w-3xl py-14 md:py-20">
      <SectionHeader eyebrow="Legal" title="প্রাইভেসি পলিসি" />
      <div className="font-bnBody space-y-5 leading-relaxed text-paper-300">
        <p>দ্য শ্রিয়াস্ফিয়ার পডকাস্ট আপনার ব্যক্তিগত তথ্যের গোপনীয়তাকে গুরুত্বের সাথে দেখে। এই পেজে আমরা কী তথ্য সংগ্রহ করি এবং কীভাবে ব্যবহার করি তা বিস্তারিতভাবে ব্যাখ্যা করা হবে।</p>
        <p>নিউজলেটার সাবস্ক্রিপশনের মাধ্যমে সংগৃহীত ইমেইল ঠিকানা শুধুমাত্র নতুন এপিসোডের আপডেট পাঠানোর জন্য ব্যবহৃত হয়, এবং কোনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।</p>
        <p className="text-paper-500">এই একটি নমুনা পেজ — আপনার প্রকৃত প্রাইভেসি পলিসি এখানে যুক্ত করুন।</p>
      </div>
    </div>
  );
}
