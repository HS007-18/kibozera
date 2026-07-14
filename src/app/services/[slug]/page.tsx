import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";
import FAQ from "@/components/sections/FAQ";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.kibozera.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.kibozera.com/services/${service.slug}`,
      type: "website",
      siteName: "Kibozera",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.kibozera.com/services" },
        { "@type": "ListItem", position: 3, name: service.title, item: `https://www.kibozera.com/services/${service.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.h1,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "Kibozera",
        "url": "https://www.kibozera.com"
      },
      "areaServed": "Worldwide",
      "serviceType": "AI & Automation"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-[90vh] overflow-hidden py-12 bg-[#050608]">
        <GlowEffect />

        {/* Hero Section */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 pt-8 md:pt-12 mb-16 text-center">
          <Reveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {service.badge}
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              {service.h1}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              {service.tagline}
            </p>
          </Reveal>
          <Reveal direction="up" delay={450}>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-6 py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer text-sm">
                  Request Free AI Consultation
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Detailed Overview */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-primary pl-3 mb-2">
                  Solution Deep Dive
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </Reveal>

              {/* Benefits */}
              <Reveal delay={150}>
                <h3 className="text-lg font-bold text-white mb-4">Core Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Delivery Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <Reveal>
                <h3 className="text-base font-bold text-white mb-3">Key Deliverables</h3>
                <ul className="space-y-2.5 mb-6">
                  {service.deliverables.map((d, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-on-surface-variant/80">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: service.accentColor }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="h-px bg-white/5" />

              <Reveal delay={150}>
                <h3 className="text-base font-bold text-white mb-3">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/5 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <div className="h-px bg-white/5" />

              <Reveal delay={300}>
                <h3 className="text-base font-bold text-white mb-3">Target Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {service.industriesServed.map((ind) => (
                    <span key={ind} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 border border-primary/20 text-primary">
                      {ind}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-24">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-headline-md text-headline-md text-white mb-3">Implementation Roadmap</h2>
              <p className="text-on-surface-variant text-sm max-w-md mx-auto">
                How we go from initial audit to production-grade automation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {service.process.map((step, idx) => {
              const [title, desc] = step.split(":");
              return (
                <Reveal key={idx} delay={idx * 150} direction="up">
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.01] border border-white/5 relative h-full">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-sm text-white">{title.trim()}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{desc?.trim()}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-16">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-headline-md text-headline-md text-white mb-2">FAQs</h2>
              <p className="text-on-surface-variant text-sm">Answers to common service questions</p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {service.faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <details className="group border border-white/5 bg-white/[0.01] rounded-xl p-5 cursor-pointer">
                  <summary className="font-bold text-sm md:text-base text-white list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mt-3 pt-3 border-t border-white/5">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
