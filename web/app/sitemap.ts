import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/events",
  "/training",
  "/community",
  "/gallery",
  "/testimonials",
  "/media-press",
  "/meet-the-founder",
  "/partners",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
