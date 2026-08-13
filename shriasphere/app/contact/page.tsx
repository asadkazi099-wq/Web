import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import PlatformLinks from "@/components/PlatformLinks";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "./contact-form";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "দ্য শ্রিয়াস্ফিয়ার পডকাস্ট টিমের সাথে যোগাযোগ করুন।",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container-edge py-14 md:py-20">
      <SectionHeader eyebrow="যোগাযোগ" title="আমাদের সাথে কথা বলুন" description="প্রশ্ন, অতিথির প্রস্তাব বা সহযোগিতার আগ্রহ থাকলে নিচের ফর্মটি পূরণ করুন।" />

      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-crimson">
                <Mail size={16} />
              </span>
              <div>
                <p className="font-bn font-semibold text-paper-100">ইমেইল</p>
                <p className="font-en text-sm text-paper-500">hello@shriasphere.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-crimson">
                <MapPin size={16} />
              </span>
              <div>
                <p className="font-bn font-semibold text-paper-100">স্টুডিও</p>
                <p className="font-bnBody text-sm text-paper-500">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="font-en mb-3 text-xs uppercase tracking-[0.2em] text-paper-500">সোশ্যাল</p>
            <SocialLinks
              links={[
                { platform: "youtube", url: "https://youtube.com/@shriasphere" },
                { platform: "instagram", url: "https://instagram.com/shriasphere" },
                { platform: "facebook", url: "https://facebook.com/shriasphere" },
              ]}
            />
          </div>

          <div className="mt-10">
            <p className="font-en mb-3 text-xs uppercase tracking-[0.2em] text-paper-500">শুনুন</p>
            <PlatformLinks />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
