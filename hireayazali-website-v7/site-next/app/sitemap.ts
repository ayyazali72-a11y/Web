import type { MetadataRoute } from "next";
import { site, cases } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/portfolio", "/services", "/testimonials", "/contact", ...cases.map((c) => `/case-studies/${c.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
