export interface Host {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string[];
  photo: string;
  social: { platform: "facebook" | "instagram" | "linkedin" | "youtube"; url: string }[];
}

export const hosts: Host[] = [
  {
    id: "1",
    slug: "shria-rahman",
    name: "শ্রিয়া রহমান",
    role: "প্রতিষ্ঠাতা ও প্রধান উপস্থাপক",
    bio: "সাংবাদিকতা থেকে উঠে আসা শ্রিয়া বিশ্বাস করেন, প্রতিটি মানুষের জীবনে একটা শেখার মতো গল্প আছে।",
    longBio: [
      "শ্রিয়া রহমান একজন সাংবাদিক ও কনটেন্ট নির্মাতা, যিনি ৮ বছর ধরে মানুষের গল্প বলার কাজ করছেন। দ্য শ্রিয়াস্ফিয়ার পডকাস্ট শুরু করার আগে তিনি একটি জাতীয় দৈনিকে ফিচার সাংবাদিক হিসেবে কাজ করেছেন।",
      "তাঁর লক্ষ্য একটাই — এমন কথোপকথন তৈরি করা যা মানুষকে সত্যিকারের কিছু ভাবতে বাধ্য করে। প্রযুক্তি, উদ্যোক্তা জীবন থেকে শুরু করে ব্যক্তিগত সংগ্রাম পর্যন্ত, প্রতিটি বিষয়ে তিনি গভীরভাবে প্রশ্ন করেন।",
    ],
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    social: [
      { platform: "instagram", url: "https://instagram.com/shriarahman" },
      { platform: "linkedin", url: "https://linkedin.com/in/shriarahman" },
      { platform: "facebook", url: "https://facebook.com/shriarahman" },
    ],
  },
  {
    id: "2",
    slug: "adib-hossain",
    name: "আদিব হোসাইন",
    role: "সহ-উপস্থাপক ও প্রযোজক",
    bio: "প্রযুক্তি ও ব্যবসা নিয়ে আগ্রহী আদিব প্রতিটি পর্বের গবেষণা ও প্রোডাকশনের নেতৃত্ব দেন।",
    longBio: [
      "আদিব হোসাইন একজন প্রোডাক্ট ম্যানেজার এবং পডকাস্ট প্রযোজক। তিনি দ্য শ্রিয়াস্ফিয়ার-এর প্রতিটি পর্বের গবেষণা, অতিথি নির্বাচন এবং প্রোডাকশন সমন্বয়ের দায়িত্বে আছেন।",
      "তাঁর বিশ্বাস, ভালো প্রশ্ন করাই একটা ভালো কথোপকথনের মূল চাবিকাঠি। প্রযুক্তি ও উদ্যোক্তা বিষয়ক পর্বগুলোতে তিনি নিয়মিত সহ-উপস্থাপনা করেন।",
    ],
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    social: [
      { platform: "linkedin", url: "https://linkedin.com/in/adibhossain" },
      { platform: "youtube", url: "https://youtube.com/@shriasphere" },
    ],
  },
];

export function getHostBySlug(slug: string) {
  return hosts.find((h) => h.slug === slug);
}
