import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Kibozera Founders",
  description:
    "Meet the founding team behind Kibozera: Hari Siddesh M (CEO), Varun Prasath D (CMO), and Dharanidharan V (CPO) — engineers and strategists driving AI automation innovation.",
  alternates: {
    canonical: "https://www.kibozera.com/team",
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
        "Responsible for company vision, AI strategy, automation architecture, technology direction, and building intelligent solutions that solve real business problems.",
      worksFor: { "@type": "Organization", name: "Kibozera", url: "https://www.kibozera.com" },
      sameAs: "https://www.linkedin.com/in/hari-siddesh-m",
      image: "https://www.kibozera.com/hari_siddesh.jpeg",
      alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Varun Prasath D",
      jobTitle: "CMO & Client Success Lead",
      description:
        "Responsible for brand growth, client relationships, marketing strategy, customer communication, and building strong partnerships with businesses.",
      worksFor: { "@type": "Organization", name: "Kibozera", url: "https://www.kibozera.com" },
      sameAs: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
      image: "https://www.kibozera.com/varun_prasath.png",
      alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dharanidharan V",
      jobTitle: "CPO & Operations Lead",
      description:
        "Responsible for product development, solution planning, project execution, and managing daily company operations.",
      worksFor: { "@type": "Organization", name: "Kibozera", url: "https://www.kibozera.com" },
      sameAs: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
      image: "https://www.kibozera.com/dharanidharan.png",
      alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Team />
      <CTA />
    </div>
  );
}
