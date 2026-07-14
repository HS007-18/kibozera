import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return {};

  return {
    title: sol.metaTitle,
    description: sol.metaDescription,
    alternates: {
      canonical: `https://www.kibozera.com/solutions/${sol.slug}`,
    },
    openGraph: {
      title: sol.metaTitle,
      description: sol.metaDescription,
      url: `https://www.kibozera.com/solutions/${sol.slug}`,
      type: "website",
      siteName: "Kibozera",
    },
    twitter: {
      card: "summary_large_image",
      title: sol.metaTitle,
      description: sol.metaDescription,
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.kibozera.com/services" },
        { "@type": "ListItem", position: 3, name: sol.title, item: `https://www.kibozera.com/solutions/${sol.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://www.kibozera.com/solutions/${sol.slug}#webpage`,
      "url": `https://www.kibozera.com/solutions/${sol.slug}`,
      "name": sol.h1,
      "description": sol.description
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
              {sol.badge}
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              {sol.h1}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              {sol.tagline}
            </p>
          </Reveal>
          <Reveal direction="up" delay={450}>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-6 py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer text-sm">
                  Get Solution Estimate
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Pain Points vs Benefits */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-primary pl-3 mb-2">
                  Solution Overview
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                  {sol.description}
                </p>
                <p className="text-on-surface-variant text-xs md:text-sm italic leading-relaxed mb-4">
                  {sol.solutionOverview}
                </p>
              </Reveal>

              {/* Pain points */}
              <Reveal delay={150}>
                <h3 className="text-lg font-bold text-white mb-4">Common Friction Points</h3>
                <div className="grid grid-cols-1 gap-3">
                  {sol.painPoints.map((pp, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <span className="material-symbols-outlined text-[#ffb59b] text-xl mt-0.5">warning</span>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{pp}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Side column: Benefits */}
            <div className="lg:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <Reveal>
                <h3 className="text-base font-bold text-white mb-4">Core Benefits</h3>
                <ul className="space-y-3">
                  {sol.benefits.map((b, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-on-surface-variant/80">
                      <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="h-px bg-white/5" />

              <Reveal delay={150}>
                <h3 className="text-base font-bold text-white mb-3">Recommended Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {sol.recommendedTech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 border border-primary/20 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Key System Features</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sol.features.map((feat, idx) => (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 h-full relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">star</span>
                    <h4 className="font-bold text-sm text-white">Feature 0{idx + 1}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{feat}</p>
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
              <p className="text-on-surface-variant text-sm">Answers to common solution queries</p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {sol.faqs.map((faq, idx) => (
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
