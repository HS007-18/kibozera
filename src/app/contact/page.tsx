import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Kibozera | Get a Free AI Automation Consultation — India",
  description:
    "Contact Kibozera's AI automation engineers for a free consultation. Submit your workflow brief or request a custom AI feasibility assessment. We respond within 24 hours. Serving businesses across India and worldwide.",
  keywords: [
    "contact Kibozera",
    "Kibozera consultation",
    "free AI automation consultation India",
    "hire AI automation company India",
    "AI automation quote India",
    "AI project consultation Tamil Nadu",
    "Kibozera email",
    "kibozera.services@gmail.com",
  ],
  alternates: {
    canonical: "https://www.kibozera.com/contact",
    languages: {
      "x-default": "https://www.kibozera.com/contact",
      "en": "https://www.kibozera.com/contact",
      "en-IN": "https://www.kibozera.com/contact",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kibozera.com/contact",
    title: "Contact Kibozera | Free AI Automation Consultation",
    description:
      "Get in touch with Kibozera's AI automation engineers. Free consultation and feasibility assessment for your workflows. 24-hour response guaranteed.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "Contact Kibozera — AI Automation Experts India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kibozera",
    title: "Contact Kibozera | Free AI Automation Consultation",
    description:
      "Get a free AI feasibility assessment from Kibozera. We build AI agents, workflow automation, and custom AI solutions. Response within 24 hours.",
    images: ["/kz.png"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kibozera — AI Automation Consultation",
    url: "https://www.kibozera.com/contact",
    description:
      "Contact Kibozera for a free AI automation consultation. Our engineering team responds to all workflow briefs and AI feasibility assessments within 24 hours.",
    mainEntity: {
      "@type": "Organization",
      name: "Kibozera",
      email: "kibozera.services@gmail.com",
      url: "https://www.kibozera.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tiruppur",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "kibozera.services@gmail.com",
          contactType: "customer service",
          availableLanguage: ["English"],
          areaServed: "Worldwide",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+919361724730",
          contactType: "sales",
          availableLanguage: ["English"],
          areaServed: "IN",
        },
      ],
    },
  };

  const allJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Contact Kibozera", item: "https://www.kibozera.com/contact" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.kibozera.com/contact#webpage",
      url: "https://www.kibozera.com/contact",
      name: "Contact Kibozera — Free AI Automation Consultation India",
      description: "Contact Kibozera for a free AI automation consultation. We respond within 24 hours. Tiruppur, Tamil Nadu, India.",
      isPartOf: { "@id": "https://www.kibozera.com/#website" },
      about: { "@id": "https://www.kibozera.com/#organization" },
      inLanguage: "en-IN",
      dateModified: new Date().toISOString(),
    },
    jsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }}
      />

      <div className="relative min-h-[90vh] overflow-hidden py-16">
        <GlowEffect />

        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12 mb-10 md:mb-16 relative z-10">
          {/* Info Column */}
          <div className="lg:col-span-1 flex flex-col justify-center gap-6 pb-4 lg:pb-0">
            <Reveal direction="up" delay={0}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-stack-md">
                  GET IN TOUCH
                </div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-stack-md leading-tight text-white">
                  Start Your AI Transformation
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Ready to automate manual tasks and scale your business with Kibozera&apos;s AI automation?
                  Send a message to our AI engineers for a free consultation.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <Reveal direction="up" delay={150}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">24-Hour Response Guarantee</h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Our engineering team reviews and replies to all automation briefs within 24 hours.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Tiruppur, Tamil Nadu — Serving Worldwide</h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Headquartered in Tiruppur, Tamil Nadu, India — serving clients across India and internationally.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">shield</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Enterprise Data Security</h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      All shared workflow details and data specifications are treated with absolute enterprise confidentiality under strict NDAs.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 flex items-start justify-center">
            <Reveal direction="left" delay={200} className="w-full">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
