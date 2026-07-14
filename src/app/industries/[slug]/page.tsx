import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/data/industries";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};

  return {
    title: ind.metaTitle,
    description: ind.metaDescription,
    alternates: {
      canonical: `https://www.kibozera.com/industries/${ind.slug}`,
    },
    openGraph: {
      title: ind.metaTitle,
      description: ind.metaDescription,
      url: `https://www.kibozera.com/industries/${ind.slug}`,
      type: "website",
      siteName: "Kibozera",
    },
    twitter: {
      card: "summary_large_image",
      title: ind.metaTitle,
      description: ind.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.kibozera.com/about#industries" },
        { "@type": "ListItem", position: 3, name: ind.title, item: `https://www.kibozera.com/industries/${ind.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://www.kibozera.com/industries/${ind.slug}#webpage`,
      "url": `https://www.kibozera.com/industries/${ind.slug}`,
      "name": ind.h1,
      "description": ind.description
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
              {ind.badge}
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              {ind.h1}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              {ind.tagline}
            </p>
          </Reveal>
          <Reveal direction="up" delay={450}>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-6 py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer text-sm">
                  Get Industry Feasibility Report
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Overview & Core Challenges */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-primary pl-3 mb-2">
                  Operational Context
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                  {ind.description}
                </p>
              </Reveal>

              {/* Challenges */}
              <Reveal delay={150}>
                <h3 className="text-lg font-bold text-white mb-4">Core Industry Pain Points</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ind.challenges.map((c, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <span className="material-symbols-outlined text-[#ffb59b] text-xl mt-0.5">report_problem</span>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{c}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Side matrix */}
            <div className="lg:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <Reveal>
                <h3 className="text-base font-bold text-white mb-3">Expected ROI</h3>
                <p className="text-sm text-white/80 mb-6">{ind.roi}</p>
              </Reveal>

              <div className="h-px bg-white/5" />

              <Reveal delay={150}>
                <h3 className="text-base font-bold text-white mb-3">Recommended Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {ind.recommendedTech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/5 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <div className="h-px bg-white/5" />

              <Reveal delay={300}>
                <h3 className="text-base font-bold text-white mb-3">Local Hub focus</h3>
                <div className="flex flex-wrap gap-2">
                  {ind.localIndustries.map((sec) => (
                    <span key={sec} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 border border-primary/20 text-primary">
                      {sec}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Workflow Comparison */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="left">
              <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 h-full">
                <h3 className="text-lg font-bold text-[#ffb59b] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">block</span>
                  Before Automation (Manual Flow)
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant/80 leading-relaxed">
                  {ind.existingWorkflow}
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">auto_awesome</span>
                  After Automation (AI Opportunity)
                </h3>
                <ul className="space-y-3">
                  {ind.aiOpportunities.map((op, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 bg-primary flex-shrink-0" />
                      <span>{op}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Roadmap */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-24">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-headline-md text-headline-md text-white mb-3">Automation Roadmap</h2>
              <p className="text-on-surface-variant text-sm max-w-md mx-auto">
                Our step-by-step pipeline to deploy vertical-specific solutions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ind.automationRoadmap.map((step, idx) => {
              const [title, desc] = step.split(":");
              return (
                <Reveal key={idx} delay={idx * 150} direction="up">
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.01] border border-white/5 relative h-full">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      Phase {idx + 1}
                    </div>
                    <h3 className="font-bold text-sm text-white">{title.trim()}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{desc?.trim()}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-16">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-headline-md text-headline-md text-white mb-2">FAQs</h2>
              <p className="text-on-surface-variant text-sm">Answers to common industry queries</p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {ind.faqs.map((faq, idx) => (
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
