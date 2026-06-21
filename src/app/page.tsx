import Hero from "@/components/sections/Hero";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import CTA from "@/components/sections/CTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kibozera",
    "url": "https://kibozera.vercel.app",
    "logo": "https://kibozera.vercel.app/kibo.png",
    "description": "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
    "founder": [
      {
        "@type": "Person",
        "name": "Hari Siddesh M"
      },
      {
        "@type": "Person",
        "name": "Varun Prasath D"
      },
      {
        "@type": "Person",
        "name": "Dharanidharan V"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/kibozera/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CoreCapabilities limit={3} />
      <CTA />
    </>
  );
}
