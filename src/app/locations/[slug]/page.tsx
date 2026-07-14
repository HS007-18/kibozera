import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/data/locations";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `https://www.kibozera.com/locations/${loc.slug}`,
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.kibozera.com/locations/${loc.slug}`,
      type: "website",
      siteName: "Kibozera",
    },
    twitter: {
      card: "summary_large_image",
      title: loc.metaTitle,
      description: loc.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kibozera.com" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.kibozera.com/contact" },
        { "@type": "ListItem", position: 3, name: loc.title, item: `https://www.kibozera.com/locations/${loc.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Kibozera — AI & Automation Services in ${loc.h1.split("in")[1]?.trim() || "India"}`,
      "description": loc.description,
      "url": `https://www.kibozera.com/locations/${loc.slug}`,
      "telephone": "+91-9943920677",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": loc.address.split(",")[0] || "",
        "addressLocality": loc.h1.split("in")[1]?.trim() || "",
        "addressRegion": loc.address.includes("Tamil Nadu") ? "Tamil Nadu" : "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": loc.geo.latitude,
        "longitude": loc.geo.longitude
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": loc.h1.split("in")[1]?.trim() || ""
      }
    }
  ];

  // Map embed URL
  const mapEmbedUrl = `https://maps.google.com/maps?q=${loc.geo.latitude},${loc.geo.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

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
              {loc.badge}
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              {loc.h1}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              {loc.tagline}
            </p>
          </Reveal>
          <Reveal direction="up" delay={450}>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-6 py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer text-sm">
                  Schedule Free On-Site Consultation
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* City Info & Map */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center gap-6">
              <Reveal>
                <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-primary pl-3 mb-2">
                  Local Market Opportunity
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-4">
                  {loc.cityIntroduction}
                </p>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  {loc.description}
                </p>
              </Reveal>

              {/* Target sectors */}
              <Reveal delay={150}>
                <h3 className="text-lg font-bold text-white mb-3">Key Target Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.localIndustries.map((ind, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/80">
                      {ind}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-5 h-[300px] lg:h-auto min-h-[300px] rounded-2xl overflow-hidden border border-white/10 relative">
              <iframe
                title={`Kibozera ${loc.slug} Map`}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Services & Testimonials */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="left">
              <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 h-full">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  Services Offered Locally
                </h3>
                <ul className="space-y-3">
                  {loc.servicesOffered.map((serv, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-on-surface-variant/80">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 bg-primary flex-shrink-0" />
                      <span>{serv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 h-full relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">format_quote</span>
                    Local Impact
                  </h3>
                  {loc.testimonials.map((t, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <p className="text-xs md:text-sm italic text-on-surface-variant/90 leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="mt-4">
                        <p className="font-bold text-xs text-white">{t.author}</p>
                        <p className="text-[10px] text-on-surface-variant/60">{t.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10 mb-16">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-headline-md text-headline-md text-white mb-2">FAQs</h2>
              <p className="text-on-surface-variant text-sm">Local business questions & answers</p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {loc.faqs.map((faq, idx) => (
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
