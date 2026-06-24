import Reveal from "../ui/Reveal";

interface TechItem {
  title: string;
  category: string;
}

const techItems: TechItem[] = [
  { title: "LLMs", category: "Foundation" },
  { title: "Agents", category: "Autonomy" },
  { title: "ML", category: "Learning" },
  { title: "NLP", category: "Communication" },
  { title: "Automation", category: "Execution" },
  { title: "Cloud AI", category: "Scale" },
];

export default function TechShowcase() {
  return (
    <section className="py-stack-lg">
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md mb-stack-sm">Our Technical Ecosystem</h2>
            <p className="text-on-surface-variant text-sm max-w-xl mx-auto">
              Leveraging state-of-the-art frameworks and systems to construct robust enterprise intelligence.
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-stack-md text-center">
          {techItems.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100} direction="up">
              <div className="p-6 glass-card rounded-xl grayscale hover:grayscale-0 transition-all cursor-default">
                <div className="text-primary font-bold text-xl mb-1">{item.title}</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-tighter">
                  {item.category}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
