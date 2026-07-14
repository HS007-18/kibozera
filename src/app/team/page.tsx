import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Kibozera Founders — AI & Automation Engineers from Tamil Nadu",
  description:
    "Meet the founding team behind Kibozera: Hari Siddesh M (CEO & AI/Automation Architect), Varun Prasath D (CMO & Client Success Lead), and Dharanidharan V (CPO & Operations Lead) — engineers from KIT Tiruppur driving AI automation innovation.",
  keywords: [
    "Kibozera team",
    "Kibozera founders",
    "Hari Siddesh M CEO AI automation",
    "Varun Prasath D CMO Kibozera",
    "Dharanidharan V CPO Kibozera",
    "AI engineers India",
    "AI startup founders Tamil Nadu",
    "KIT Tiruppur AI startup",
    "Kibozera leadership",
  ],
  alternates: {
    canonical: "https://www.kibozera.com/team",
    languages: {
      "x-default": "https://www.kibozera.com/team",
      "en": "https://www.kibozera.com/team",
      "en-IN": "https://www.kibozera.com/team",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kibozera.com/team",
    title: "Kibozera Team | AI Automation Engineers & Founders from Tamil Nadu",
    description:
      "Meet Hari Siddesh M (CEO), Varun Prasath D (CMO), and Dharanidharan V (CPO) — the engineers and strategists behind Kibozera's AI automation solutions.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "Kibozera Founding Team — AI Automation Engineers",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kibozera",
    title: "Kibozera Founders | AI Engineers from Tamil Nadu, India",
    description:
      "Meet the team behind Kibozera — Hari Siddesh (CEO), Varun Prasath (CMO), Dharanidharan (CPO). Engineers building the future of AI automation.",
    images: ["/kz.png"],
  },
};

export default function TeamPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hari Siddesh M",
      jobTitle: "CEO & Chief AI/Automation Officer",
      description:
        "Hari Siddesh M is the CEO and Chief AI/Automation Officer of Kibozera. Responsible for company vision, AI strategy, automation architecture, technology direction, and building intelligent solutions that solve real business problems.",
      worksFor: { "@type": "Organization", name: "Kibozera", url: "https://www.kibozera.com" },
      sameAs: "https://www.linkedin.com/in/hari-siddesh-m",
      image: "https://www.kibozera.com/hari_siddesh.jpeg",
      alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
      knowsAbout: ["AI Systems", "Automation Architecture", "AI Agents", "Workflow Automation", "Machine Learning"],
      url: "https://www.kibozera.com/team",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Varun Prasath D",
      jobTitle: "CMO & Client Success Lead",
      description:
        "Varun Prasath D is the CMO and Client Success Lead at Kibozera. Responsible for brand growth, client relationships, marketing strategy, customer communication, and building strong partnerships.",
      worksFor: { "@type": "Organization", name: "Kibozera", url: "https://www.kibozera.com" },
      sameAs: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
      image: "https://www.kibozera.com/varun_prasath.png",
      alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
      knowsAbout: ["Marketing", "Client Success", "Business Development", "UI/UX Design"],
      url: "https://www.kibozera.com/team",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dharanidharan V",
      jobTitle: "CPO & Operations Lead",
      description:
        "Dharanidharan V is the CPO and Operations Lead at Kibozera. Responsible for product development, solution planning, project execution, and managing daily company operations.",
      worksFor: { "@type": "Organization", name: "Kibozera", url: "https://www.kibozera.com" },
      sameAs: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
      image: "https://www.kibozera.com/dharanidharan.png",
      alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
      knowsAbout: ["Product Strategy", "Project Management", "Business Process Design", "Operations Management"],
      url: "https://www.kibozera.com/team",
    },
  ];

  const allJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.kibozera.com/team" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.kibozera.com/team#webpage",
      url: "https://www.kibozera.com/team",
      name: "Kibozera Team — AI Automation Founders from Tamil Nadu, India",
      description: "Meet the founding team behind Kibozera: Hari Siddesh M (CEO), Varun Prasath D (CMO), and Dharanidharan V (CPO) — AI engineers from KIT Tiruppur.",
      isPartOf: { "@id": "https://www.kibozera.com/#website" },
      about: { "@id": "https://www.kibozera.com/#organization" },
      inLanguage: "en-IN",
      dateModified: new Date().toISOString(),
    },
    ...jsonLd,
  ];

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }}
      />
      <Team />
      <CTA />
    </div>
  );
}
