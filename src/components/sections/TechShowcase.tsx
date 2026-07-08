"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

interface TechItem {
  name: string;
  icon: string;
  desc: string;
  category: "Foundation Models" | "Automation Stack" | "Infrastructure";
}

const techItems: TechItem[] = [
  // Foundation Models
  { name: "GPT-4o",       icon: "smart_toy",      desc: "OpenAI",       category: "Foundation Models" },
  { name: "Claude 3.5",   icon: "psychology",      desc: "Anthropic",    category: "Foundation Models" },
  { name: "Gemini",       icon: "blur_on",         desc: "Google AI",    category: "Foundation Models" },
  { name: "LangChain",    icon: "link",            desc: "Orchestration",category: "Foundation Models" },
  // Automation Stack
  { name: "n8n",          icon: "account_tree",    desc: "Workflows",    category: "Automation Stack" },
  { name: "Python",       icon: "code",            desc: "Core Language",category: "Automation Stack" },
  { name: "FastAPI",      icon: "electric_bolt",   desc: "Backend APIs", category: "Automation Stack" },
  { name: "Next.js",      icon: "web",             desc: "Frontend",     category: "Automation Stack" },
  // Infrastructure
  { name: "PostgreSQL",   icon: "database",        desc: "Relational DB",category: "Infrastructure" },
  { name: "Pinecone",     icon: "grain",           desc: "Vector Store",  category: "Infrastructure" },
  { name: "AWS / GCP",    icon: "cloud",           desc: "Cloud Hosting", category: "Infrastructure" },
  { name: "Docker",       icon: "deployed_code",   desc: "Containers",    category: "Infrastructure" },
];

const categories = [
  {
    label: "Foundation Models",
    icon: "neurology",
    accent: "#b8c3ff",
    border: "rgba(184,195,255,0.2)",
    bg: "rgba(184,195,255,0.03)",
  },
  {
    label: "Automation Stack",
    icon: "settings_suggest",
    accent: "#d0bcff",
    border: "rgba(208,188,255,0.2)",
    bg: "rgba(208,188,255,0.03)",
  },
  {
    label: "Infrastructure",
    icon: "dns",
    accent: "#ffb59b",
    border: "rgba(255,181,155,0.2)",
    bg: "rgba(255,181,155,0.03)",
  },
] as const;

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState<typeof categories[number]["label"]>("Foundation Models");

  const currentCategory = categories.find((c) => c.label === activeTab)!;
  const filteredItems = techItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle backglow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-full blur-[120px] pointer-events-none opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${currentCategory.accent}, transparent)`,
        }}
      />

      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
              TECH STACK
            </div>
            <h2 className="font-headline-md text-headline-md text-white mb-3">Our Technology Stack</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
            <p className="text-on-surface-variant text-sm max-w-md mx-auto leading-relaxed">
              We build systems using industry-leading AI models, automation workflows, and cloud infrastructure.
            </p>
          </div>
        </Reveal>

        {/* Tab Selectors */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {categories.map((cat) => {
              const isActive = cat.label === activeTab;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(cat.label)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all duration-300 cursor-pointer"
                  style={{
                    color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                    borderColor: isActive ? cat.accent : "rgba(255, 255, 255, 0.08)",
                    background: isActive ? `${cat.accent}15` : "rgba(255, 255, 255, 0.02)",
                    boxShadow: isActive ? `0 0 20px -5px ${cat.accent}30` : "none",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-base transition-colors duration-300"
                    style={{ color: isActive ? cat.accent : "rgba(255, 255, 255, 0.4)" }}
                  >
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid of Tools (Animated dynamically on tab change) */}
        <div className="min-h-[120px] transition-all duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, idx) => (
              <div
                key={item.name}
                className="group relative rounded-2xl p-4 flex items-center gap-4 border transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03] cursor-default"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.06)",
                }}
              >
                {/* Accent glow line inside left edge */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ background: currentCategory.accent }}
                />

                {/* Icon wrapper */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: `${currentCategory.accent}0c`,
                    border: `1px solid ${currentCategory.accent}15`,
                  }}
                >
                  <span
                    className="material-symbols-outlined text-xl transition-transform duration-500 group-hover:scale-110"
                    style={{ color: currentCategory.accent }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Info Text */}
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold tracking-wide leading-tight">{item.name}</span>
                  <span className="text-[11px] text-on-surface-variant/60 mt-0.5">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
