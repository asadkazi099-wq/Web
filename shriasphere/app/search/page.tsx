import type { Metadata } from "next";
import SearchClient from "./search-client";

export const metadata: Metadata = {
  title: "সার্চ",
  description: "এপিসোড, অতিথি, হোস্ট বা বিষয় খুঁজুন।",
};

export default function SearchPage() {
  return <SearchClient />;
}
