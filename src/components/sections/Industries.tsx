import Reveal from "../ui/Reveal";

interface Industry {
  icon: string;
  title: string;
  description: string;
  stat: string;
  accentColor: string;
}

const industries: Industry[] = [
  {
    icon: "medical_services",
    title: "Healthcare",
    description: "Automated patient data management, appointment scheduling, and diagnosis assistance workflows.",
    stat: "↓ 70% admin overhead",
    accentColor: "#b8c3ff",
  },
  {
    icon: "school",
    title: "Education",
    description: "Personalized learning paths, automated grading, and intelligent administrative automation.",
    stat: "↑ 3× student engagement",
    accentColor: "#d0bcff",
  },
  {
    icon: "account_balance",
    title: "Finance",
    description: "Fraud detection systems, real-time risk assessment, and automated compliance reporting.",
    stat: "↓ 85% fraud loss",
    accentColor: "#ffb59b",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    description: "Predictive maintenance, defect detection, and end-to-end supply chain optimization.",
    stat: "↓ 40% downtime",
    accentColor: "#b8c3ff",
  },
  {
    icon: "shopping_cart",
    title: "Retail",
    description: "Hyper-personalized marketing, inventory forecasting, and customer behaviour analysis.",
    stat: "↑ 55% conversion",
    accentColor: "#d0bcff",
  },
  {
    icon: "lan",
    title: "Enterprise",
    description: "Full-scale operational AI, intelligent document processing, and strategic decision support.",
    stat: "↑ 60% team capacity",
    accentColor: "#ffb59b",
  },
];

export default function Industries() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
              INDUSTRIES
            </div>
            <h2 className="font-headline-md text-headline-md text-white mb-4">Tailored For Every Sector</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
            <p className="text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
              Kibozera's AI systems are deployed across six major verticals — each solution engineered for that industry's unique constraints.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, idx) => (
            <Reveal key={ind.title} delay={idx * 100} direction="up">
              <div
                className="group relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1 cursor-default h-full"
              >
                {/* Bg icon watermark */}
                <div className="absolute -right-3 -top-3 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                  <span className="material-symbols-outlined text-[96px]" style={{ color: ind.accentColor }}>
                    {ind.icon}
                  </span>
                </div>

                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${ind.accentColor}50, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${ind.accentColor}12`, border: `1px solid ${ind.accentColor}25` }}
                >
                  <span className="material-symbols-outlined text-2xl" style={{ color: ind.accentColor }}>
                    {ind.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h4 className="font-bold text-lg text-white">{ind.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{ind.description}</p>
                </div>

                {/* Stat badge */}
                <div
                  className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-bold border"
                  style={{
                    color: ind.accentColor,
                    borderColor: `${ind.accentColor}30`,
                    background: `${ind.accentColor}08`,
                  }}
                >
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  {ind.stat}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
