import type { Metadata } from "next";
import Workflow from "@/components/sections/Workflow";
import TechShowcase from "@/components/sections/TechShowcase";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Kibozera | AI Automation Startup — Founded in Tamil Nadu, India",
  description:
    "Learn about Kibozera — an AI automation startup founded by engineers from KIT Tiruppur. We build custom AI agents, workflow automation, and intelligent systems for enterprises worldwide. Discover our mission, tech stack, and the industries we serve.",
  keywords: [
    "about Kibozera",
    "Kibozera founders",
    "Kibozera company",
    "AI automation startup India",
    "AI company Tamil Nadu",
    "AI startup Tiruppur",
    "KIT Tiruppur AI startup",
    "AI automation pioneers India",
    "enterprise AI India",
  ],
  alternates: {
    canonical: "https://www.kibozera.com/about",
    languages: {
      "x-default": "https://www.kibozera.com/about",
      "en": "https://www.kibozera.com/about",
      "en-IN": "https://www.kibozera.com/about",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kibozera.com/about",
    title: "About Kibozera | AI Automation Startup Founded in Tamil Nadu",
    description:
      "Kibozera is an AI automation startup from KIT Tiruppur, Tamil Nadu. We build custom AI agents, workflow automation, and intelligent enterprise systems for businesses worldwide.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "About Kibozera — AI Automation Startup India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kibozera",
    title: "About Kibozera | AI Automation Startup — Tamil Nadu, India",
    description:
      "Kibozera builds custom AI agents, workflow automation, and intelligent enterprise systems. Founded by engineers from KIT Tiruppur, serving clients worldwide.",
    images: ["/kz.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kibozera — AI Automation Company",
    url: "https://www.kibozera.com/about",
    description:
      "Kibozera is an AI automation startup founded by three engineers from KIT Tiruppur, Tamil Nadu, India. We build intelligent automation systems, AI agents, and custom AI solutions for enterprises worldwide.",
    keywords: "Kibozera, AI automation India, AI startup Tamil Nadu, workflow automation, AI agents",
    mainEntity: {
      "@type": "Organization",
      name: "Kibozera",
      url: "https://www.kibozera.com",
      logo: "https://www.kibozera.com/kz.png",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "Tiruppur, Tamil Nadu, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tiruppur",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      description:
        "Kibozera builds AI-powered automation systems — AI agents, RPA, custom AI models, and data intelligence platforms — that reduce manual work and help businesses scale through precision engineering.",
      slogan: "We Listen Before We Automate",
      areaServed: "Worldwide",
      serviceType: [
        "AI Automation",
        "Workflow Automation",
        "AI Agents",
        "Business Process Automation",
        "Custom AI Solutions",
        "Data Intelligence",
        "Computer Vision",
        "AI Chatbots",
      ],
      employee: [
        {
          "@type": "Person",
          name: "Hari Siddesh M",
          jobTitle: "CEO & Chief AI/Automation Officer",
          sameAs: "https://www.linkedin.com/in/hari-siddesh-m",
          alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
        },
        {
          "@type": "Person",
          name: "Varun Prasath D",
          jobTitle: "CMO & Client Success Lead",
          sameAs: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
          alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
        },
        {
          "@type": "Person",
          name: "Dharanidharan V",
          jobTitle: "CPO & Operations Lead",
          sameAs: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
          alumniOf: { "@type": "EducationalOrganization", name: "KIT Tiruppur" },
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/kibozera/",
        "https://www.instagram.com/kibo_zera",
      ],
    },
  };

  const breadcrumbJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "About Kibozera", item: "https://www.kibozera.com/about" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.kibozera.com/about#webpage",
      url: "https://www.kibozera.com/about",
      name: "About Kibozera — AI Automation Startup Tamil Nadu India",
      description: "Kibozera is an AI automation startup from KIT Tiruppur. We build AI agents, workflow automation, and custom AI solutions.",
      isPartOf: { "@id": "https://www.kibozera.com/#website" },
      about: { "@id": "https://www.kibozera.com/#organization" },
      inLanguage: "en-IN",
      dateModified: "2026-07-14T20:00:00Z",
    },
    jsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="relative min-h-[90vh] overflow-hidden py-16">
        <GlowEffect />

        {/* Header Banner */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop text-center mt-8 md:mt-12 mb-10 md:mb-16 relative z-10">
          <Reveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-stack-md">
              ABOUT KIBOZERA
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-stack-md leading-tight text-white">
              About Kibozera — Pioneering Business Intelligence
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Kibozera is an AI automation startup founded by engineers from KIT Tiruppur, Tamil Nadu.
              We combine advanced machine learning, robust software architecture, and a client-first listening model
              to deploy state-of-the-art enterprise automation — serving clients worldwide.
            </p>
          </Reveal>
        </div>

        <div className="relative z-10 space-y-0">
          <Workflow />
          <TechShowcase />
          <Industries />
        </div>

        <CTA />
      </div>
    </>
  );
}
