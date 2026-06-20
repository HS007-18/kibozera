import CoreCapabilities from "@/components/sections/CoreCapabilities";
import CTA from "@/components/sections/CTA";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export default function ServicesPage() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden py-16">
      <GlowEffect />
      
      {/* Header Banner */}
      <div className="max-w-container-max mx-auto px-margin-desktop text-center mt-12 mb-16 relative z-10">
        <Reveal direction="up" delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-stack-md">
            ENTERPRISE AUTOMATION
          </div>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-stack-md leading-tight text-white">
            Capabilities & Solutions
          </h1>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We engineer robust, intelligent software ecosystems tailored to automate complex operations and scale your productivity.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10">
        <CoreCapabilities showTitle={false} />
      </div>

      <CTA />
    </div>
  );
}
