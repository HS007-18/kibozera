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
  { name: "AWS / GCP",    icon: "cloud",           desc: "Cloud",         category: "Infrastructure" },
  { name: "Docker",       icon: "deployed_code",   desc: "Containers",    category: "Infrastructure" },
];

const categories = [
  {
    label: "Foundation Models",
    icon: "neurology",
    gradient: "from-[#b8c3ff]/20 to-[#b8c3ff]/0",
    glow: "rgba(184,195,255,0.15)",
    accent: "#b8c3ff",
    border: "rgba(184,195,255,0.18)",
    tag: "rgba(184,195,255,0.08)",
  },
  {
    label: "Automation Stack",
    icon: "settings_suggest",
    gradient: "from-[#d0bcff]/20 to-[#d0bcff]/0",
    glow: "rgba(208,188,255,0.15)",
    accent: "#d0bcff",
    border: "rgba(208,188,255,0.18)",
    tag: "rgba(208,188,255,0.08)",
  },
  {
    label: "Infrastructure",
    icon: "dns",
    gradient: "from-[#ffb59b]/20 to-[#ffb59b]/0",
    glow: "rgba(255,181,155,0.15)",
    accent: "#ffb59b",
    border: "rgba(255,181,155,0.18)",
    tag: "rgba(255,181,155,0.08)",
  },
] as const;

function TechCard({ item, accent, border }: { item: TechItem; accent: string; border: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group overflow-hidden"
      style={{
        background: hovered ? `${accent}10` : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? accent + "50" : border}`,
        transform: hovered ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 12px 32px -8px ${accent}30, 0 0 0 1px ${accent}20` : "none",
      }}
    >
      {/* Glow behind icon */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
        style={{ background: accent, opacity: hovered ? 0.15 : 0 }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: hovered ? `${accent}20` : `${accent}0c`,
          border: `1px solid ${hovered ? accent + "40" : accent + "20"}`,
          boxShadow: hovered ? `0 0 16px ${accent}30` : "none",
        }}
      >
        <span
          className="material-symbols-outlined text-2xl transition-all duration-300"
          style={{ color: accent, opacity: hovered ? 1 : 0.7 }}
        >
          {item.icon}
        </span>
      </div>

      {/* Name */}
      <div className="text-center">
        <p className="text-white font-bold text-sm leading-tight">{item.name}</p>
        <p className="text-[11px] mt-0.5 font-medium" style={{ color: `${accent}aa` }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function TechShowcase() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #b8c3ff, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #d0bcff, transparent)" }} />

      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop relative z-10">

        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
              TECH STACK
            </div>
            <h2 className="font-headline-md text-headline-md text-white mb-3">Built With The Best</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
            <p className="text-on-surface-variant text-sm max-w-lg mx-auto leading-relaxed">
              State-of-the-art tools and frameworks we use to engineer world-class AI systems.
            </p>
          </div>
        </Reveal>

        {/* Category blocks */}
        <div className="flex flex-col gap-10">
          {categories.map((cat, catIdx) => {
            const items = techItems.filter((t) => t.category === cat.label);
            return (
              <Reveal key={cat.label} delay={catIdx * 120}>
                <div
                  className="relative rounded-3xl p-6 md:p-8 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${cat.tag}, rgba(255,255,255,0.01))`,
                    border: `1px solid ${cat.border}`,
                  }}
                >
                  {/* Subtle top glow bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}40, transparent)` }}
                  />

                  {/* Inner corner glow */}
                  <div
                    className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                    style={{ background: cat.accent, opacity: 0.06 }}
                  />

                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
                    >
                      <span className="material-symbols-outlined text-lg" style={{ color: cat.accent }}>
                        {cat.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white tracking-wide">{cat.label}</h3>
                      <p className="text-[11px] text-on-surface-variant/50 mt-0.5">
                        {catIdx === 0 && "Large language model capabilities"}
                        {catIdx === 1 && "Workflow & application layer"}
                        {catIdx === 2 && "Data, cloud & deployment"}
                      </p>
                    </div>

                    {/* Right: item count pill */}
                    <div className="ml-auto">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                        style={{ color: cat.accent, borderColor: `${cat.accent}30`, background: `${cat.accent}08` }}
                      >
                        {items.length} tools
                      </span>
                    </div>
                  </div>

                  {/* Tech cards grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {items.map((item, idx) => (
                      <Reveal key={item.name} delay={catIdx * 100 + idx * 60} direction="up">
                        <TechCard item={item} accent={cat.accent} border={cat.border} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
