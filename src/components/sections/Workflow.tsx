import Reveal from "../ui/Reveal";

interface Step {
  num: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: 1,
    title: "Listen & Analyze",
    description: "Deep analysis of current operations to identify high-impact automation targets.",
  },
  {
    num: 2,
    title: "Design",
    description: "Architecting bespoke AI systems that integrate with existing technical stacks.",
  },
  {
    num: 3,
    title: "Develop",
    description: "Agile engineering of AI agents and custom automation pipelines.",
  },
  {
    num: 4,
    title: "Deploy",
    description: "Secure integration and continuous monitoring for maximum performance.",
  },
];

export default function Workflow() {
  return (
    <section className="py-stack-lg bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal>
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-md text-headline-md">The Path To Intelligence</h2>
              <p className="text-on-surface-variant mt-2 text-sm">A structured approach to digital transformation.</p>
            </div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5 -translate-y-1/2 opacity-50"></div>
          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 150} direction="up" className="h-full">
              <div className="relative z-10 p-6 glass-card rounded-2xl flex flex-col items-start h-full">
                <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/30">
                  {step.num}
                </div>
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
