import Hero from "@/components/sections/Hero";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Kibozera",
      url: "https://www.kibozera.com",
      logo: "https://www.kibozera.com/kz.png",
      description:
        "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tiruppur",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "kibozera.services@gmail.com",
        contactType: "customer service",
        availableLanguage: "English",
      },
      areaServed: "Worldwide",
      serviceType: "AI Automation",
      founder: [
        { "@type": "Person", name: "Hari Siddesh M", url: "https://www.linkedin.com/in/hari-siddesh-m" },
        { "@type": "Person", name: "Varun Prasath D", url: "https://www.linkedin.com/in/varun-prasath-d-2a5236328" },
        { "@type": "Person", name: "Dharanidharan V", url: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/kibozera/",
        "https://www.instagram.com/kibo_zera",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kibozera",
      url: "https://www.kibozera.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.kibozera.com/services?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
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
          name: "Can you integrate AI with our existing software and tools?",
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
          name: "How much does a custom AI solution cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing is project-based. We offer a free initial consultation and feasibility assessment. After discovery, you receive a transparent, itemized proposal with no hidden fees.",
          },
        },
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
