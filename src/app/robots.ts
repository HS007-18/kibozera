import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All bots: index everything except API routes
        userAgent: "*",
        allow: ["/", "/about", "/services", "/team", "/contact"],
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Googlebot: allow all, explicitly disallow API
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/api/",
      },
      {
        // Bingbot
        userAgent: "Bingbot",
        allow: "/",
        disallow: "/api/",
      },
      {
        // Block AI training scrapers that don't respect content rights
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
    ],
    sitemap: "https://www.kibozera.com/sitemap.xml",
    host: "https://www.kibozera.com",
  };
}
