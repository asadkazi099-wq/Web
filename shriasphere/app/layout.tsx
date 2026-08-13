import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Sans_Bengali, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MiniPlayer from "@/components/MiniPlayer";
import { PlayerProvider } from "@/lib/player-context";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const noto = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
  variable: "--font-noto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shriasphere.com"),
  title: {
    default: "দ্য শ্রিয়াস্ফিয়ার পডকাস্ট | The Shriasphere Podcast",
    template: "%s | দ্য শ্রিয়াস্ফিয়ার পডকাস্ট",
  },
  description:
    "উদ্যোক্তা, প্রযুক্তি, ক্যারিয়ার আর জীবনের গল্প নিয়ে বাংলাদেশি তরুণদের জন্য প্রতি সপ্তাহে নতুন পর্ব — দ্য শ্রিয়াস্ফিয়ার পডকাস্ট।",
  openGraph: {
    title: "দ্য শ্রিয়াস্ফিয়ার পডকাস্ট",
    description: "যে কথোপকথনগুলো সত্যিই ভাবতে বাধ্য করে।",
    url: "https://shriasphere.com",
    siteName: "দ্য শ্রিয়াস্ফিয়ার পডকাস্ট",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "দ্য শ্রিয়াস্ফিয়ার পডকাস্ট",
    description: "যে কথোপকথনগুলো সত্যিই ভাবতে বাধ্য করে।",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${hind.variable} ${noto.variable} ${inter.variable}`}>
      <body className="font-bnBody bg-ink-950 text-paper-100 antialiased">
        <PlayerProvider>
          <Navbar />
          <main className="min-h-screen pb-20">{children}</main>
          <Footer />
          <MiniPlayer />
        </PlayerProvider>
      </body>
    </html>
  );
}
