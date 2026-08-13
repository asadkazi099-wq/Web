export interface Chapter {
  time: string;
  title: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  slug: string;
  guest: string;
  guestRole: string;
  host: string;
  date: string;
  duration: string;
  category: string;
  artwork: string;
  description: string;
  showNotes: string[];
  keyTakeaways: string[];
  chapters: Chapter[];
  audioUrl: string;
  featured?: boolean;
}

export const categories = [
  "সাক্ষাৎকার",
  "উদ্যোক্তা",
  "প্রযুক্তি",
  "ক্যারিয়ার",
  "শিক্ষা",
  "গল্প",
  "সমাজ",
  "সংস্কৃতি",
];

export const episodes: Episode[] = [
  {
    id: "1",
    number: 42,
    title: "শূন্য থেকে স্টার্টআপ: ব্যর্থতার গল্প যা কেউ বলে না",
    slug: "episode-42-shunno-theke-startup",
    guest: "রাফসান আহমেদ",
    guestRole: "প্রতিষ্ঠাতা, Kajkarbo",
    host: "শ্রিয়া রহমান",
    date: "১০ আগস্ট, ২০২৬",
    duration: "৫৮ মিনিট",
    category: "উদ্যোক্তা",
    artwork: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    description:
      "তিনবার ব্যবসা বন্ধ হওয়ার পর কীভাবে রাফসান আবার দাঁড়ালেন, আর আজকের Kajkarbo কীভাবে হাজারো ফ্রিল্যান্সারের কাজের প্ল্যাটফর্ম হয়ে উঠল — এই পর্বে খোলামেলা সেই যাত্রার গল্প।",
    showNotes: [
      "রাফসানের প্রথম ব্যবসা বন্ধ হওয়ার আসল কারণ",
      "বিনিয়োগকারী খোঁজার সময় করা সবচেয়ে বড় ভুল",
      "টিম গঠনে কেন 'বন্ধু নিয়োগ' বিপজ্জনক হতে পারে",
    ],
    keyTakeaways: [
      "ব্যর্থতা লুকানোর দরকার নেই, এটাই সবচেয়ে বড় শিক্ষক",
      "প্রোডাক্ট-মার্কেট ফিট না পাওয়া পর্যন্ত স্কেল করবেন না",
      "নিজের সীমা বোঝা একটা স্কিল",
    ],
    chapters: [
      { time: "00:00", title: "শুরুর কথা" },
      { time: "04:20", title: "প্রথম ব্যবসা এবং প্রথম পতন" },
      { time: "18:45", title: "দ্বিতীয় সুযোগ" },
      { time: "34:10", title: "Kajkarbo-র জন্ম" },
      { time: "49:00", title: "আজকের শিক্ষা" },
    ],
    audioUrl: "/audio/episode-42.mp3",
    featured: true,
  },
  {
    id: "2",
    number: 41,
    title: "AI যুগে বাংলাদেশি ডেভেলপারদের ভবিষ্যৎ কী?",
    slug: "episode-41-ai-jug-e-developer",
    guest: "নাফিসা ইসলাম",
    guestRole: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
    host: "শ্রিয়া রহমান",
    date: "৩ আগস্ট, ২০২৬",
    duration: "৪৭ মিনিট",
    category: "প্রযুক্তি",
    artwork: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    description:
      "কোড লেখা থেকে শুরু করে সিস্টেম ডিজাইন পর্যন্ত AI কতটা বদলে দিচ্ছে ডেভেলপারদের কাজ, আর নতুনদের এখন কী শেখা উচিত — নাফিসার সাথে এক খোলামেলা আলোচনা।",
    showNotes: [
      "AI টুল ব্যবহার করেও কেন ফান্ডামেন্টাল শেখা জরুরি",
      "জুনিয়র ডেভেলপারদের জন্য বাস্তব ক্যারিয়ার পরামর্শ",
      "বাংলাদেশের টেক ইন্ডাস্ট্রির পরবর্তী ৫ বছর",
    ],
    keyTakeaways: [
      "AI প্রতিস্থাপন নয়, একটা নতুন টুল মাত্র",
      "সিস্টেম থিংকিং এখনো সবচেয়ে মূল্যবান স্কিল",
      "ইংরেজি ও কমিউনিকেশন স্কিলে বিনিয়োগ করুন",
    ],
    chapters: [
      { time: "00:00", title: "পরিচিতি" },
      { time: "06:30", title: "AI টুলের বাস্তব ব্যবহার" },
      { time: "22:15", title: "নতুনদের জন্য পরামর্শ" },
      { time: "38:00", title: "ভবিষ্যতের পূর্বাভাস" },
    ],
    audioUrl: "/audio/episode-41.mp3",
  },
  {
    id: "3",
    number: 40,
    title: "বিশ্ববিদ্যালয় জীবনের সবচেয়ে বড় ভুল যা এড়ানো যায়",
    slug: "episode-40-university-life-vul",
    guest: "তানভীর হাসান",
    guestRole: "লেখক ও শিক্ষা পরামর্শক",
    host: "শ্রিয়া রহমান",
    date: "২৭ জুলাই, ২০২৬",
    duration: "৫২ মিনিট",
    category: "শিক্ষা",
    artwork: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    description:
      "শুধু ভালো রেজাল্ট যথেষ্ট নয় — বিশ্ববিদ্যালয় জীবনে কী কী দক্ষতা গড়ে তোলা উচিত, আর কোন ভুলগুলো পরে আফসোসের কারণ হয়, তানভীরের অভিজ্ঞতা থেকে।",
    showNotes: [
      "নেটওয়ার্কিং কেন গ্রেডের চেয়ে গুরুত্বপূর্ণ হতে পারে",
      "এক্সট্রা-কারিকুলার কার্যক্রম বেছে নেওয়ার সঠিক উপায়",
      "সময় ব্যবস্থাপনার একটি বাস্তব ফ্রেমওয়ার্ক",
    ],
    keyTakeaways: [
      "শুধু বই নয়, মানুষের সাথে কাজ করার অভিজ্ঞতা নিন",
      "ব্যর্থতাকে সিভি-তে লেখা যায় এমন গল্পে বদলান",
      "প্রতিটি সেমিস্টারে অন্তত একটা নতুন স্কিল",
    ],
    chapters: [
      { time: "00:00", title: "শুরু" },
      { time: "05:10", title: "সবচেয়ে সাধারণ ভুলগুলো" },
      { time: "24:00", title: "নেটওয়ার্কিং-এর গুরুত্ব" },
      { time: "40:20", title: "শেষ কথা" },
    ],
    audioUrl: "/audio/episode-40.mp3",
  },
  {
    id: "4",
    number: 39,
    title: "গ্রামের মেয়ে থেকে জাতীয় ক্রিকেট দল পর্যন্ত",
    slug: "episode-39-gram-theke-jatiyo-dol",
    guest: "সুমাইয়া আক্তার",
    guestRole: "জাতীয় দলের সাবেক ক্রিকেটার",
    host: "শ্রিয়া রহমান",
    date: "২০ জুলাই, ২০২৬",
    duration: "৪৪ মিনিট",
    category: "গল্প",
    artwork: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?q=80&w=1200&auto=format&fit=crop",
    description:
      "পরিবারের অমতে ক্রিকেট খেলা শুরু করে জাতীয় দল পর্যন্ত পৌঁছানোর অসাধারণ যাত্রা, সংগ্রাম আর আত্মবিশ্বাসের এক সত্যি গল্প।",
    showNotes: [
      "প্রথম যেদিন ব্যাট হাতে নেন",
      "পরিবারকে রাজি করানোর গল্প",
      "জাতীয় দলে প্রথম দিনের অনুভূতি",
    ],
    keyTakeaways: [
      "স্বপ্নের পথে বাধা থাকবেই, থামলে চলবে না",
      "নারীদের খেলাধুলায় সমর্থন এখনো বাড়ানো দরকার",
      "নিজের গল্প অন্যদের অনুপ্রাণিত করতে পারে",
    ],
    chapters: [
      { time: "00:00", title: "শৈশবের গল্প" },
      { time: "12:00", title: "প্রথম বাধা" },
      { time: "28:30", title: "জাতীয় দলে যাত্রা" },
    ],
    audioUrl: "/audio/episode-39.mp3",
  },
  {
    id: "5",
    number: 38,
    title: "সোশ্যাল মিডিয়া কি আমাদের একা করে দিচ্ছে?",
    slug: "episode-38-social-media-ekakitto",
    guest: "ড. ফারহানা করিম",
    guestRole: "মনোবিজ্ঞানী",
    host: "শ্রিয়া রহমান",
    date: "১৩ জুলাই, ২০২৬",
    duration: "৫০ মিনিট",
    category: "সমাজ",
    artwork: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    description:
      "হাজারো ফলোয়ার থাকা সত্ত্বেও কেন অনেকে একাকীত্বে ভোগেন? মনোবিজ্ঞানী ফারহানার সাথে সোশ্যাল মিডিয়া ও মানসিক স্বাস্থ্যের সম্পর্ক নিয়ে গভীর আলোচনা।",
    showNotes: [
      "ডিজিটাল তুলনার মানসিক প্রভাব",
      "সুস্থ সোশ্যাল মিডিয়া অভ্যাস গড়ার উপায়",
      "সন্তানদের জন্য অভিভাবকদের করণীয়",
    ],
    keyTakeaways: [
      "অনলাইন সংযোগ বাস্তব সংযোগের বিকল্প নয়",
      "স্ক্রিন টাইমের চেয়ে স্ক্রিন কনটেন্ট বেশি গুরুত্বপূর্ণ",
      "সপ্তাহে একটা 'ডিজিটাল ডিটক্স' দিন রাখুন",
    ],
    chapters: [
      { time: "00:00", title: "সমস্যার সূত্রপাত" },
      { time: "15:40", title: "গবেষণার ফলাফল" },
      { time: "35:00", title: "সমাধানের পথ" },
    ],
    audioUrl: "/audio/episode-38.mp3",
  },
  {
    id: "6",
    number: 37,
    title: "লোকজ সংস্কৃতি হারিয়ে যাচ্ছে, নাকি রূপ বদলাচ্ছে?",
    slug: "episode-37-lokoj-sanskriti",
    guest: "ইমরান খান",
    guestRole: "লোকসংগীত গবেষক",
    host: "শ্রিয়া রহমান",
    date: "৬ জুলাই, ২০২৬",
    duration: "৪৯ মিনিট",
    category: "সংস্কৃতি",
    artwork: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1200&auto=format&fit=crop",
    description:
      "বাউল, ভাটিয়ালি থেকে শুরু করে আজকের ফিউশন মিউজিক — বাংলার লোকজ সংস্কৃতি কীভাবে সময়ের সাথে বদলাচ্ছে, ইমরানের গবেষণা থেকে উঠে আসা দিকগুলো।",
    showNotes: [
      "বাউল গানের ঐতিহ্য কীভাবে টিকে আছে",
      "নতুন প্রজন্মের কাছে লোকসংগীত পৌঁছানোর উপায়",
      "ডিজিটাল প্ল্যাটফর্মে লোকসংস্কৃতির নতুন জীবন",
    ],
    keyTakeaways: [
      "সংস্কৃতি স্থবির নয়, এটা প্রবহমান",
      "প্রযুক্তি সংরক্ষণেরও একটা শক্তিশালী হাতিয়ার",
      "স্থানীয় শিল্পীদের সমর্থন করা জরুরি",
    ],
    chapters: [
      { time: "00:00", title: "শুরু" },
      { time: "10:20", title: "বাউল ঐতিহ্য" },
      { time: "30:00", title: "আধুনিক ফিউশন" },
    ],
    audioUrl: "/audio/episode-37.mp3",
  },
];

export function getEpisodeBySlug(slug: string) {
  return episodes.find((e) => e.slug === slug);
}

export function getFeaturedEpisode() {
  return episodes.find((e) => e.featured) ?? episodes[0];
}

export function getRelatedEpisodes(current: Episode, count = 3) {
  return episodes
    .filter((e) => e.id !== current.id && e.category === current.category)
    .concat(episodes.filter((e) => e.id !== current.id && e.category !== current.category))
    .slice(0, count);
}
