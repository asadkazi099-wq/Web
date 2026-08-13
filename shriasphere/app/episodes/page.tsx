import type { Metadata } from "next";
import EpisodesClient from "./episodes-client";

export const metadata: Metadata = {
  title: "সব এপিসোড",
  description: "দ্য শ্রিয়াস্ফিয়ার পডকাস্টের সব পর্ব খুঁজুন, ফিল্টার করুন এবং শুনুন।",
  alternates: { canonical: "/episodes" },
};

export default function EpisodesPage() {
  return <EpisodesClient />;
}
