import type { MetadataRoute } from "next";
import { episodes } from "@/data/episodes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shriasphere.com";
  const staticRoutes = ["", "/episodes", "/hosts", "/about", "/contact", "/search"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const episodeRoutes = episodes.map((e) => ({
    url: `${base}/episodes/${e.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...episodeRoutes];
}
