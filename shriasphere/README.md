# দ্য শ্রিয়াস্ফিয়ার পডকাস্ট — Website

A premium, dark-first Next.js + TypeScript + Tailwind website for **The ShriaSphere Podcast**, built around the logo's black / white / crimson-red identity.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## What's included

- **Pages**: Home, Episodes (search/filter/sort/load-more), Episode Details, Hosts, About, Contact, Search, custom 404, plus `/privacy` and `/terms` stubs so footer links resolve.
- **Components**: Navbar (sticky + search + mobile drawer), Hero, FeaturedEpisode, EpisodeCard/EpisodeGrid, CategoryFilter, SearchBar, AudioPlayer (full player: play/pause, scrub, skip, speed, mute), MiniPlayer (persistent bottom player via React Context), HostCard, Newsletter, PlatformLinks, SocialLinks, ShareButtons, SectionHeader, EmptyState/LoadingState, Footer.
- **Data layer**: `data/episodes.ts` and `data/hosts.ts` — typed, structured, and ready for you to add 50+ real episodes without touching any UI code.
- **Design tokens**: see `tailwind.config.ts` — `ink` (backgrounds), `paper` (text), `crimson` (brand accent, matched to the logo's red).
- **Fonts**: Hind Siliguri (headlines) + Noto Sans Bengali (body) + Inter (UI/numerals), loaded via `next/font/google`.
- **SEO**: per-page metadata, Open Graph/Twitter cards, canonical URLs, `sitemap.ts`, `robots.ts`, and JSON-LD structured data on episode pages.

## Notes on placeholder content

- Episode/host artwork uses Unsplash URLs as stand-ins — swap these for your real photography/artwork (drop files in `/public` and update the paths in `data/`).
- `audioUrl` fields point to `/audio/episode-XX.mp3` placeholders — add real audio files to `/public/audio/` or point to your hosting/CDN URLs.
- The audio player's progress/duration is simulated (no real audio file is wired up yet) — once you add real `<audio>` sources, swap the interval-based progress in `AudioPlayer.tsx` / `MiniPlayer.tsx` for real `timeupdate`/`loadedmetadata` events.
- Contact form and Newsletter form are UI-only (no backend wired) — connect to your email/CRM provider of choice.

## Adding a new episode

Add an object to the `episodes` array in `data/episodes.ts` — every page (home, library, search, details, related) picks it up automatically.
