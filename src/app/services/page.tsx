import type { Metadata } from "next";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import CTA from "@/components/sections/CTA";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Services | Intelligent AI Automation Solutions",
  description:
    "Explore Kibozera's capabilities: AI automation, autonomous AI agents, business process automation, custom AI models, data intelligence, system integration, and UI/UX design.",
  alternates: {
    canonical: "https://www.kibozera.com/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kibozera AI Services",
    url: "https://www.kibozera.com/services",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "AI Automation", description: "Streamline complex workflows with adaptive AI systems." },
      { "@type": "ListItem", position: 2, name: "AI Agents", description: "Deploy autonomous digital workers 24/7." },
      { "@type": "ListItem", position: 3, name: "Business Process Automation", description: "Eliminate bottlenecks with intelligent RPA." },
      { "@type": "ListItem", position: 4, name: "Custom AI Solutions", description: "Bespoke model training and deployment." },
      { "@type": "ListItem", position: 5, name: "Data Intelligence", description: "ML-powered analytics and forecasting." },
      { "@type": "ListItem", position: 6, name: "AI Integration", description: "Connect legacy systems with AI frameworks." },
      { "@type": "ListItem", position: 7, name: "UI/UX & Web Design", description: "Modern, conversion-driven interfaces." },
      { "@type": "ListItem", position: 8, name: "AI Chatbots & Virtual Assistants", description: "Custom-trained conversational agents across all channels." },
      { "@type": "ListItem", position: 9, name: "AI-Powered Marketing Automation", description: "Personalise campaigns at scale with AI." },
      { "@type": "ListItem", position: 10, name: "Computer Vision Solutions", description: "Visual inspection, OCR, and object detection AI." },
      { "@type": "ListItem", position: 11, name: "Cloud AI Infrastructure", description: "Scalable model deployment on AWS, GCP, or Azure." },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-[90vh] overflow-hidden py-16">
        <GlowEffect />

        {/* Page Header */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop text-center mt-8 md:mt-12 mb-4 md:mb-8 relative z-10">
          <Reveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-stack-md">
              ENTERPRISE AUTOMATION
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-stack-md leading-tight text-white">
              Capabilities &amp; Solutions
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              We engineer robust, intelligent software ecosystems tailored to automate complex operations and scale your productivity.
            </p>
          </Reveal>
        </div>

        <div className="relative z-10">
          <CoreCapabilities showTitle={false} />
        </div>

        <CTA />
      </div>
    </>
  );
}
