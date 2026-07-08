import Reveal from "../ui/Reveal";

interface Step {
  num: number;
  icon: string;
  tag: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: 1,
    icon: "hearing",
    tag: "DISCOVERY",
    title: "Listen & Analyze",
    description:
      "We begin by deeply understanding your operations — mapping every process, identifying pain points, and uncovering the highest-impact automation opportunities before writing a single line of code.",
  },
  {
    num: 2,
    icon: "architecture",
    tag: "ARCHITECTURE",
    title: "Design",
    description:
      "Our engineers architect a bespoke AI system blueprint — selecting the right models, frameworks, and integration patterns that fit your existing tech stack and scale with your growth.",
  },
  {
    num: 3,
    icon: "code",
    tag: "ENGINEERING",
    title: "Develop",
    description:
      "Agile, iterative engineering of AI agents, automation pipelines, and intelligent workflows. You receive progress updates at every sprint with working prototypes for validation.",
  },
  {
    num: 4,
    icon: "rocket_launch",
    tag: "DEPLOYMENT",
    title: "Deploy & Monitor",
    description:
      "Secure production deployment with zero-downtime rollouts. Continuous performance monitoring, model drift detection, and proactive maintenance ensure peak efficiency long-term.",
  },
];

export default function Workflow() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
              OUR PROCESS
            </div>
            <h2 className="font-headline-md text-headline-md text-white mb-4">The Path To Intelligence</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
            <p className="text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
              A structured, transparent approach that takes you from problem to production-ready AI system.
            </p>
          </div>
        </Reveal>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connecting dashed line — desktop only */}
          <div className="hidden md:flex absolute top-9 left-0 w-full items-center pointer-events-none z-0 px-[calc(12.5%+22px)]">
            <div className="flex-1 border-t-2 border-dashed border-primary/20" />
          </div>

          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 150} direction="up">
              <div className="relative z-10 flex flex-col items-start md:items-center gap-4 group">
                {/* Number circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-[44px] h-[44px] rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300">
                    <span className="material-symbols-outlined text-xl text-primary">{step.icon}</span>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-on-primary">
                    {step.num}
                  </div>
                </div>

                {/* Content card */}
                <div className="w-full glass-card rounded-2xl p-5 md:p-6 flex flex-col gap-2 group-hover:border-primary/25 transition-colors duration-300">
                  {/* Tag */}
                  <span className="text-[9px] font-bold tracking-[0.2em] text-primary/60 uppercase">{step.tag}</span>
                  {/* Title */}
                  <h4 className="font-bold text-base md:text-lg text-white leading-tight">{step.title}</h4>
                  {/* Description */}
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                </div>

                {/* Mobile connector */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden w-px h-6 border-l-2 border-dashed border-primary/20 ml-5" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
