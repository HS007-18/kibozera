import Hero from "@/components/sections/Hero";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kibozera | #1 AI Automation Company India — AI Agents, RPA & Workflow Automation",
  description:
    "Kibozera is India's top AI automation company. We build AI agents, workflow automation, RPA, custom AI models, AI chatbots, and data intelligence systems. Tamil Nadu startup serving businesses worldwide. Free consultation.",
  keywords: [
    "Kibozera",
    "Kibozera AI",
    "Kibozera automation",
    "Kibozera AI automation",
    "Kibozera services",
    "Kibozera company",
    "AI automation company India",
    "AI automation India",
    "workflow automation India",
    "AI agents India",
    "business process automation India",
    "RPA company India",
    "AI startup India",
    "AI company Tamil Nadu",
    "AI automation Tamil Nadu",
  ],
  alternates: {
    canonical: "https://www.kibozera.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kibozera.com",
    title: "Kibozera | India's #1 AI Automation Company — AI Agents, RPA & Workflow Automation",
    description:
      "Kibozera builds AI agents, workflow automation, RPA, custom AI models, and data intelligence systems. Tamil Nadu's leading AI automation startup serving clients worldwide.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "Kibozera — AI Automation Company India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kibozera",
    creator: "@kibozera",
    title: "Kibozera | India's AI Automation Company — AI Agents & Workflow Automation",
    description:
      "Kibozera builds AI agents, workflow automation, RPA & custom AI systems. Tamil Nadu startup. Free AI consultation. Serving worldwide.",
    images: ["/kz.png"],
  },
};

export default function Home() {
  const jsonLd = [
    // ── 1. Organization ──────────────────────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.kibozera.com/#organization",
      name: "Kibozera",
      alternateName: ["Kibozera AI", "Kibozera Automation"],
      url: "https://www.kibozera.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.kibozera.com/kz.png",
        width: 512,
        height: 512,
      },
      image: "https://www.kibozera.com/kz.png",
      description:
        "Kibozera is India's leading AI automation company. We build AI agents, workflow automation, robotic process automation (RPA), custom AI models, AI chatbots, data intelligence platforms, and cloud AI infrastructure for businesses worldwide.",
      slogan: "We Listen Before We Automate",
      foundingDate: "2024",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 3 },
      address: {
        "@type": "PostalAddress",
        streetAddress: "KIT Campus",
        addressLocality: "Tiruppur",
        addressRegion: "Tamil Nadu",
        postalCode: "641402",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.1085",
        longitude: "77.3411",
      },
      email: "kibozera.services@gmail.com",
      telephone: "+919361724730",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      serviceType: [
        "AI Automation",
        "Workflow Automation",
        "AI Agents",
        "Business Process Automation",
        "Robotic Process Automation",
        "Custom AI Solutions",
        "Data Intelligence",
        "AI Chatbots",
        "Computer Vision",
        "AI Marketing Automation",
        "Cloud AI Infrastructure",
        "UI/UX Design",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Workflow Automation",
        "Robotic Process Automation",
        "Large Language Models",
        "AI Agents",
        "Business Intelligence",
        "Data Analytics",
        "Natural Language Processing",
        "Computer Vision",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Hari Siddesh M",
          jobTitle: "CEO & Chief AI/Automation Officer",
          url: "https://www.linkedin.com/in/hari-siddesh-m",
          sameAs: "https://www.linkedin.com/in/hari-siddesh-m",
        },
        {
          "@type": "Person",
          name: "Varun Prasath D",
          jobTitle: "CMO & Client Success Lead",
          url: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
          sameAs: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
        },
        {
          "@type": "Person",
          name: "Dharanidharan V",
          jobTitle: "CPO & Operations Lead",
          url: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
          sameAs: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/kibozera/",
        "https://www.instagram.com/kibo_zera",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "kibozera.services@gmail.com",
        telephone: "+919361724730",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
        contactOption: "TollFree",
      },
    },

    // ── 2. LocalBusiness (critical for branded + local searches) ─────────
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService", "TechCompany"],
      "@id": "https://www.kibozera.com/#localbusiness",
      name: "Kibozera",
      alternateName: "Kibozera AI Automation",
      description:
        "Kibozera is an AI automation company based in Tiruppur, Tamil Nadu. We build AI agents, workflow automation, RPA, and custom AI solutions for businesses in India and worldwide.",
      url: "https://www.kibozera.com",
      telephone: "+919361724730",
      email: "kibozera.services@gmail.com",
      image: "https://www.kibozera.com/kz.png",
      logo: "https://www.kibozera.com/kz.png",
      priceRange: "$$",
      currenciesAccepted: "INR, USD",
      paymentAccepted: "Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "KIT Campus",
        addressLocality: "Tiruppur",
        addressRegion: "Tamil Nadu",
        postalCode: "641402",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.1085",
        longitude: "77.3411",
      },
      hasMap: "https://maps.google.com/?q=Tiruppur,Tamil+Nadu,India",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      areaServed: "Worldwide",
      serviceArea: {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
      sameAs: [
        "https://www.linkedin.com/company/kibozera/",
        "https://www.instagram.com/kibo_zera",
      ],
    },

    // ── 3. WebSite with SearchAction ─────────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.kibozera.com/#website",
      name: "Kibozera",
      alternateName: "Kibozera AI Automation",
      url: "https://www.kibozera.com",
      description: "India's leading AI automation company — AI agents, workflow automation, RPA, and custom AI solutions.",
      publisher: { "@id": "https://www.kibozera.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.kibozera.com/services?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── 4. WebPage for Home ──────────────────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.kibozera.com/#webpage",
      url: "https://www.kibozera.com",
      name: "Kibozera | AI Automation Company India — AI Agents, RPA & Workflow Automation",
      description:
        "Kibozera is India's leading AI automation company building AI agents, workflow automation, RPA, and custom AI solutions for businesses worldwide.",
      isPartOf: { "@id": "https://www.kibozera.com/#website" },
      about: { "@id": "https://www.kibozera.com/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.kibozera.com",
          },
        ],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.kibozera.com/kz.png",
        width: 1200,
        height: 630,
      },
      inLanguage: "en-IN",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString(),
    },

    // ── 5. FAQPage (rich result in SERP) ─────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kibozera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kibozera is an AI automation company based in Tiruppur, Tamil Nadu, India. We build AI agents, workflow automation systems, robotic process automation (RPA), custom AI models, AI chatbots, and data intelligence platforms for businesses in India and worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Kibozera offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kibozera offers: AI Automation, AI Agents, Business Process Automation (RPA), Custom AI Solutions, Data Intelligence, AI Integration, UI/UX & Web Design, AI Chatbots & Virtual Assistants, AI-Powered Marketing Automation, Computer Vision Solutions, and Cloud AI Infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "What is AI automation and how does it help my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI automation uses artificial intelligence to handle repetitive, rule-based, and complex tasks that previously required human effort — from data entry and document processing to customer service and decision-making. For your business, this means reduced operational costs, faster execution times, fewer errors, and the ability to scale without proportionally increasing headcount.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical automation project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A focused workflow automation typically takes 2–4 weeks. A full-scale custom AI agent system or enterprise integration can range from 6–12 weeks. We provide a detailed timeline after our initial discovery session.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kibozera integrate AI with our existing software and tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — integration is a core part of what we do. We connect AI systems to virtually any platform, including CRMs, ERPs, communication tools, databases, and custom internal software via REST APIs, webhooks, or direct database connections.",
          },
        },
        {
          "@type": "Question",
          name: "Is our data safe when working with Kibozera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data security is treated as a first-class requirement. All client data is governed by strict NDAs. For production systems, we deploy with enterprise-grade encryption, role-based access control, and audit logging.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a custom AI solution from Kibozera cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing is project-based. We offer a free initial consultation and feasibility assessment. After discovery, you receive a transparent, itemized proposal with no hidden fees.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kibozera work with businesses outside India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. While Kibozera is based in Tamil Nadu, India, we work with clients globally. All collaboration is conducted remotely through structured discovery calls, async updates, and shared project dashboards.",
          },
        },
      ],
    },

    // ── 6. ItemList of Services ──────────────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Kibozera AI Automation Services",
      description: "Complete list of AI automation services offered by Kibozera",
      url: "https://www.kibozera.com/services",
      numberOfItems: 11,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Automation", url: "https://www.kibozera.com/services#ai-automation" },
        { "@type": "ListItem", position: 2, name: "AI Agents", url: "https://www.kibozera.com/services#ai-agents" },
        { "@type": "ListItem", position: 3, name: "Business Process Automation", url: "https://www.kibozera.com/services#business-process-automation" },
        { "@type": "ListItem", position: 4, name: "Custom AI Solutions", url: "https://www.kibozera.com/services#custom-ai-solutions" },
        { "@type": "ListItem", position: 5, name: "Data Intelligence", url: "https://www.kibozera.com/services#data-intelligence" },
        { "@type": "ListItem", position: 6, name: "AI Integration", url: "https://www.kibozera.com/services#ai-integration" },
        { "@type": "ListItem", position: 7, name: "UI/UX & Web Design", url: "https://www.kibozera.com/services#uiux-web-design" },
        { "@type": "ListItem", position: 8, name: "AI Chatbots & Virtual Assistants", url: "https://www.kibozera.com/services#ai-chatbots" },
        { "@type": "ListItem", position: 9, name: "AI-Powered Marketing Automation", url: "https://www.kibozera.com/services#ai-marketing-automation" },
        { "@type": "ListItem", position: 10, name: "Computer Vision Solutions", url: "https://www.kibozera.com/services#computer-vision" },
        { "@type": "ListItem", position: 11, name: "Cloud AI Infrastructure", url: "https://www.kibozera.com/services#cloud-ai-infrastructure" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CoreCapabilities limit={3} />
      <FAQ />
      <CTA />
    </>
  );
}
