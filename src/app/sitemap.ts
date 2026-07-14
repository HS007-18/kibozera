import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { technologies } from "@/data/technologies";
import { solutions } from "@/data/solutions";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kibozera.com";
  const lastMod = "2026-07-14";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const technologyRoutes = technologies.map((t) => ({
    url: `${baseUrl}/technologies/${t.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const solutionRoutes = solutions.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...technologyRoutes,
    ...solutionRoutes,
    ...locationRoutes,
  ];
}
