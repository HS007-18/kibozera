import type { Metadata } from "next";
import Workflow from "@/components/sections/Workflow";
import TechShowcase from "@/components/sections/TechShowcase";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Kibozera | AI Automation Pioneers",
  description:
    "Discover Kibozera's mission, advanced tech stack, and how we engineer tailor-made AI automation systems and intelligent workflows for enterprises worldwide.",
  alternates: {
    canonical: "https://www.kibozera.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kibozera",
    url: "https://www.kibozera.com/about",
    description:
      "Kibozera is an AI automation company founded by three engineers from KIT, Tiruppur. We build intelligent automation systems for enterprises worldwide.",
    mainEntity: {
      "@type": "Organization",
      name: "Kibozera",
      url: "https://www.kibozera.com",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "Tiruppur, Tamil Nadu, India",
      },
      description:
        "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
      employee: [
        {
          "@type": "Person",
          name: "Hari Siddesh M",
          jobTitle: "CEO & Chief AI/Automation Officer",
          sameAs: "https://www.linkedin.com/in/hari-siddesh-m",
        },
        {
          "@type": "Person",
          name: "Varun Prasath D",
          jobTitle: "CMO & Client Success Lead",
          sameAs: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
        },
        {
          "@type": "Person",
          name: "Dharanidharan V",
          jobTitle: "CPO & Operations Lead",
          sameAs: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              Pioneering Business Intelligence
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              We combine advanced machine learning, robust software architecture, and a client-first listening model to deploy state-of-the-art enterprise automation.
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
