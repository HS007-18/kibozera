import type { Metadata } from "next";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import CTA from "@/components/sections/CTA";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Automation Services | Kibozera — AI Agents, RPA, Custom AI Solutions India",
  description:
    "Kibozera offers AI automation, AI agents, business process automation, RPA, custom AI model training, data intelligence, AI chatbots, computer vision, and cloud AI infrastructure. Expert AI services across India and worldwide.",
  keywords: [
    "Kibozera services",
    "Kibozera AI automation",
    "AI automation services India",
    "AI agents development India",
    "business process automation India",
    "RPA India",
    "custom AI solutions India",
    "AI chatbot development India",
    "computer vision India",
    "cloud AI infrastructure India",
    "AI marketing automation India",
    "workflow automation services",
    "LLM fine-tuning India",
    "RAG system development India",
    "AI integration services",
    "data intelligence platform India",
  ],
  alternates: {
    canonical: "https://www.kibozera.com/services",
    languages: {
      "x-default": "https://www.kibozera.com/services",
      "en": "https://www.kibozera.com/services",
      "en-IN": "https://www.kibozera.com/services",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kibozera.com/services",
    title: "AI Automation Services | Kibozera — AI Agents, RPA & Custom AI Solutions",
    description:
      "Kibozera delivers AI automation, AI agents, RPA, custom AI model training, data intelligence, AI chatbots, computer vision, and cloud AI infrastructure for businesses in India and worldwide.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "Kibozera AI Automation Services — AI Agents, RPA, Custom AI",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kibozera",
    title: "Kibozera AI Services — AI Agents, RPA, Custom AI Solutions India",
    description:
      "11 AI services: automation, AI agents, RPA, custom AI models, data intelligence, chatbots, computer vision, and more. Kibozera — India's AI automation experts.",
    images: ["/kz.png"],
  },
};

export default function ServicesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Automation Services by Kibozera",
      provider: {
        "@type": "Organization",
        name: "Kibozera",
        url: "https://www.kibozera.com",
        areaServed: "Worldwide",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tiruppur",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      description:
        "Kibozera provides end-to-end AI automation services including AI agents, workflow automation, RPA, custom AI model training, data intelligence, AI chatbots, computer vision, and cloud AI infrastructure.",
      areaServed: "Worldwide",
      serviceType: "AI Automation",
      url: "https://www.kibozera.com/services",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Kibozera AI Services",
      url: "https://www.kibozera.com/services",
      description: "Complete list of AI automation services offered by Kibozera",
      numberOfItems: 11,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AI Automation",
          description: "Streamline complex workflows with adaptive AI systems that learn from your data and continuously improve over time.",
          url: "https://www.kibozera.com/services#ai-automation",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Agents",
          description: "Deploy autonomous digital workers capable of handling customer service, data ops, and complex multi-step reasoning 24/7.",
          url: "https://www.kibozera.com/services#ai-agents",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Business Process Automation (RPA)",
          description: "Eliminate bottlenecks and manual overhead with intelligent RPA, document automation, and integrated software workflows.",
          url: "https://www.kibozera.com/services#business-process-automation",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Custom AI Solutions",
          description: "Bespoke model training, RAG systems, and deployment pipelines tailored to your enterprise requirements.",
          url: "https://www.kibozera.com/services#custom-ai-solutions",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Data Intelligence",
          description: "Uncover hidden opportunities through advanced machine learning, predictive analytics, and interactive dashboards.",
          url: "https://www.kibozera.com/services#data-intelligence",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "AI Integration",
          description: "Seamlessly connect legacy systems with the latest AI frameworks, APIs, and cloud platforms.",
          url: "https://www.kibozera.com/services#ai-integration",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "UI/UX & Web Design",
          description: "Modern, conversion-driven interfaces that captivate users and elevate brand identity.",
          url: "https://www.kibozera.com/services#uiux-web-design",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "AI Chatbots & Virtual Assistants",
          description: "Custom-trained conversational agents across all channels — web, WhatsApp, Slack, and more.",
          url: "https://www.kibozera.com/services#ai-chatbots",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "AI-Powered Marketing Automation",
          description: "Personalise campaigns at scale, automate email sequences, and make data-driven decisions.",
          url: "https://www.kibozera.com/services#ai-marketing-automation",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Computer Vision Solutions",
          description: "Automate visual inspection, object detection, and image analysis with deep learning models.",
          url: "https://www.kibozera.com/services#computer-vision",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Cloud AI Infrastructure",
          description: "Design, deploy, and manage scalable AI infrastructure on AWS, GCP, or Azure.",
          url: "https://www.kibozera.com/services#cloud-ai-infrastructure",
        },
      ],
    },
  ];

  const allJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "AI Services", item: "https://www.kibozera.com/services" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.kibozera.com/services#webpage",
      url: "https://www.kibozera.com/services",
      name: "Kibozera AI Services — AI Agents, RPA, Custom AI Solutions India",
      description: "Kibozera offers 11 AI automation services including AI agents, workflow automation, RPA, custom AI models, data intelligence, and cloud AI infrastructure.",
      isPartOf: { "@id": "https://www.kibozera.com/#website" },
      about: { "@id": "https://www.kibozera.com/#organization" },
      inLanguage: "en-IN",
      dateModified: "2026-07-14T20:00:00Z",
    },
    ...jsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }}
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
              Kibozera AI Services & Solutions
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From AI automation and intelligent agents to RPA, custom AI model training,
              and cloud AI infrastructure — Kibozera engineers robust AI ecosystems that
              automate complex operations and scale your business productivity.
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
