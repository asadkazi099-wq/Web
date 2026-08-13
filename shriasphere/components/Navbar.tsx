"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import BrandMark from "./BrandMark";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const links = [
  { href: "/", label: "হোম" },
  { href: "/episodes", label: "এপিসোড" },
  { href: "/hosts", label: "হোস্ট" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="focus-ring flex items-center gap-2.5">
          <BrandMark size={30} />
          <span className="font-bn text-lg font-bold leading-none text-paper-100">
            দ্য শ্রিয়াস্ফিয়ার
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring font-bn rounded-full px-4 py-2 text-sm text-paper-300 transition-colors hover:text-paper-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setSearchOpen((s) => !s)}
            aria-label="সার্চ খুলুন"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper-300 transition-colors hover:text-paper-100"
          >
            {searchOpen ? <X size={16} /> : <Search size={16} />}
          </button>
          <Link
            href="/episodes"
            className="focus-ring font-bn rounded-full bg-crimson px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03] hover:bg-crimson-600"
          >
            সর্বশেষ এপিসোড
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="মেনু খুলুন"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper-100 md:hidden"
        >
          <Menu size={19} />
        </button>
      </div>

      {searchOpen && (
        <div className="hidden border-t border-white/10 bg-ink-950/95 px-6 py-4 md:block">
          <div className="mx-auto max-w-xl">
            <SearchBar autoFocus />
          </div>
        </div>
      )}

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
