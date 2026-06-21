"use client";

import { useRef, MouseEvent } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";

interface Capability {
  icon: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: "rocket_launch",
    title: "AI Automation",
    description: "Streamline complex workflows with adaptive AI that learns and improves over time.",
  },
  {
    icon: "support_agent",
    title: "AI Agents",
    description: "Deploy autonomous digital workers capable of handling customer service and operations 24/7.",
  },
  {
    icon: "settings_suggest",
    title: "Business Process Automation",
    description: "Eliminate bottlenecks with intelligent RPA and integrated software workflows.",
  },
  {
    icon: "architecture",
    title: "Custom AI Solutions",
    description: "Bespoke model training and deployment tailored to your unique enterprise requirements.",
  },
  {
    icon: "database",
    title: "Data Intelligence",
    description: "Uncover hidden opportunities through advanced machine learning and data visualization.",
  },
  {
    icon: "join_inner",
    title: "AI Integration",
    description: "Seamlessly connect your legacy systems with the latest AI frameworks and APIs.",
  },
  {
    icon: "palette",
    title: "UI/UX & Web Design",
    description: "Crafting modern, intuitive, and responsive interfaces that captivate users and elevate brand identity.",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotate max 10 degrees on mouse movement
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-stack-lg rounded-2xl flex flex-col items-start gap-4 transition-all duration-300 ease-out cursor-default select-none h-full"
    >
      <div className="card-spotlight" />
      <div className="relative z-10 w-full h-full flex flex-col items-start gap-4">
        {children}
      </div>
    </div>
  );
}

interface CoreCapabilitiesProps {
  limit?: number;
  showTitle?: boolean;
}

export default function CoreCapabilities({ limit, showTitle = true }: CoreCapabilitiesProps) {
  const displayedCapabilities = limit ? capabilities.slice(0, limit) : capabilities;

  return (
    <section className="py-stack-lg relative z-10">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {showTitle && (
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md mb-stack-sm">Core Capabilities</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
          </Reveal>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {displayedCapabilities.map((cap, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <TiltCard>
                <span className="material-symbols-outlined text-4xl text-primary">{cap.icon}</span>
                <h3 className="font-headline-md text-xl font-bold text-white">{cap.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{cap.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        {limit && limit < capabilities.length && (
          <Reveal delay={400} direction="up" className="text-center mt-12">
            <Link href="/services">
              <button className="px-6 py-3 border border-primary/30 hover:border-primary text-primary hover:bg-primary/5 rounded-xl font-bold transition-all cursor-pointer">
                Explore All Services
              </button>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
