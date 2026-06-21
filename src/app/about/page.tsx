import Workflow from "@/components/sections/Workflow";
import TechShowcase from "@/components/sections/TechShowcase";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import GlowEffect from "@/components/ui/GlowEffect";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden py-16">
      <GlowEffect />
      
      {/* Header Banner */}
      <div className="max-w-container-max mx-auto px-margin-desktop text-center mt-12 mb-16 relative z-10">
        <Reveal direction="up" delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-stack-md">
            ABOUT KIBOZERA
          </div>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h1 className="font-display-lg text-display-lg-mobile md:text-5xl font-bold mb-stack-md leading-tight text-white">
            Pioneering Business Intelligence
          </h1>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We combine advanced machine learning, robust software architecture, and a client-first listening model to deploy state-of-the-art enterprise automation.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 space-y-16">
        <Workflow />
        <TechShowcase />
        <Industries />
      </div>

      <CTA />
    </div>
  );
}
