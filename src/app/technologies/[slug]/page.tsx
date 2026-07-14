import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { technologies } from "@/data/technologies";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return technologies.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = technologies.find((t) => t.slug === slug);
  if (!tech) return {};

  return {
    title: tech.metaTitle,
    description: tech.metaDescription,
    alternates: {
      canonical: `https://www.kibozera.com/technologies/${tech.slug}`,
    },
    openGraph: {
      title: tech.metaTitle,
      description: tech.metaDescription,
      url: `https://www.kibozera.com/technologies/${tech.slug}`,
      type: "website",
      siteName: "Kibozera",
    },
    twitter: {
      card: "summary_large_image",
      title: tech.metaTitle,
      description: tech.metaDescription,
    },
  };
}

export default async function TechnologyPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = technologies.find((t) => t.slug === slug);
  if (!tech) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Technologies", item: "https://www.kibozera.com/services" },
        { "@type": "ListItem", position: 3, name: tech.title, item: `https://www.kibozera.com/technologies/${tech.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://www.kibozera.com/technologies/${tech.slug}#webpage`,
      "url": `https://www.kibozera.com/technologies/${tech.slug}`,
      "name": tech.h1,
      "description": tech.description
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

        {/* Hero Banner */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 pt-8 md:pt-12 mb-16 text-center">
          <Reveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {tech.badge}
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              {tech.h1}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              {tech.tagline}
            </p>
          </Reveal>
          <Reveal direction="up" delay={450}>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-6 py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer text-sm">
                  Consult a Tech Architect
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Details & Capabilities */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-primary pl-3 mb-2">
                  Technical Overview
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                  {tech.description}
                </p>
              </Reveal>

              {/* Capabilities */}
              <Reveal delay={150}>
                <h3 className="text-lg font-bold text-white mb-4">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tech.capabilities.map((c, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">code</span>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{c}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Side column: Benefits */}
            <div className="lg:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <Reveal>
                <h3 className="text-base font-bold text-white mb-3">Key Benefits</h3>
                <ul className="space-y-3">
                  {tech.benefits.map((b, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-on-surface-variant/80">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 bg-primary flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Integration Pipeline */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-headline-md text-headline-md text-white mb-2">Integration Blueprint</h2>
              <p className="text-on-surface-variant text-sm">Our structured methodology to wire and launch technology stacks.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {tech.integrationWorkflow.map((step, idx) => {
              const [title, desc] = step.split(":");
              return (
                <Reveal key={idx} delay={idx * 150} direction="up">
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.01] border border-white/5 relative h-full">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      Step {idx + 1}
                    </div>
                    <h3 className="font-bold text-sm text-white">{title.trim()}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{desc?.trim()}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Example Implementations</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tech.useCases.map((uc, idx) => (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">construction</span>
                    <h4 className="font-bold text-sm text-white">Use Case 0{idx + 1}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{uc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-16">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-headline-md text-headline-md text-white mb-2">FAQs</h2>
              <p className="text-on-surface-variant text-sm">Technical answers and support details</p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {tech.faqs.map((faq, idx) => (
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
