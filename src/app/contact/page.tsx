import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | Start Your AI Transformation",
  description:
    "Get in touch with Kibozera's automation engineers. Submit your operations brief or request a custom AI feasibility assessment for your workflows.",
  alternates: {
    canonical: "https://www.kibozera.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kibozera",
    url: "https://www.kibozera.com/contact",
    description: "Contact Kibozera's AI automation engineers to start your transformation.",
    mainEntity: {
      "@type": "Organization",
      name: "Kibozera",
      email: "kibozera.services@gmail.com",
      url: "https://www.kibozera.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "kibozera.services@gmail.com",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                  Ready to automate manual tasks and scale your business operations? Send a message to our automation experts.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <Reveal direction="up" delay={150}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Response Time</h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Our engineering team typically reviews and replies to all automation briefs within 24 hours.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Based In India, Working Globally</h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Headquartered in Tiruppur, Tamil Nadu — serving clients across India and worldwide.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">shield</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Data Security</h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      All shared workflow details and data specifications are treated with absolute enterprise confidentiality.
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
