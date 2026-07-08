import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kibozera — AI Automation Systems",
    short_name: "Kibozera",
    description:
      "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster.",
    start_url: "/",
    display: "standalone",
    background_color: "#050608",
    theme_color: "#b8c3ff",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-IN",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/kz.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/kz.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
