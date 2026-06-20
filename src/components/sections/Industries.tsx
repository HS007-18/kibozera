import Reveal from "../ui/Reveal";

interface Industry {
  icon: string;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: "medical_services",
    title: "Healthcare",
    description: "Automated patient data management and diagnosis assistance.",
  },
  {
    icon: "school",
    title: "Education",
    description: "Personalized learning paths and administrative automation.",
  },
  {
    icon: "account_balance",
    title: "Finance",
    description: "Fraud detection systems and real-time risk assessment.",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    description: "Predictive maintenance and supply chain optimization.",
  },
  {
    icon: "shopping_cart",
    title: "Retail",
    description: "Hyper-personalized marketing and inventory forecasting.",
  },
  {
    icon: "lan",
    title: "Enterprise",
    description: "Full-scale operational AI and strategic decision support.",
  },
];

export default function Industries() {
  return (
    <section className="py-stack-lg bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal>
          <h2 className="font-headline-md text-headline-md mb-stack-lg text-center text-white">
            Tailored For Every Sector
          </h2>
        </Reveal>
        
        <div className="flex flex-wrap justify-center gap-gutter">
          {industries.map((ind, idx) => (
            <Reveal key={idx} delay={idx * 100} direction="up">
              <div className="w-full sm:w-64 glass-card p-6 rounded-2xl relative overflow-hidden group h-full">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[80px]">{ind.icon}</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">{ind.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{ind.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
