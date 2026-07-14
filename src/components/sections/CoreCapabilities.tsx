"use client";

import { useRef, MouseEvent } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";

interface Capability {
  id: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  accentColor: string;
}

const capabilities: Capability[] = [
  {
    id: "ai-automation",
    icon: "rocket_launch",
    category: "INTELLIGENCE",
    title: "AI Automation",
    description: "Streamline complex workflows with adaptive AI systems that learn from your data and continuously improve over time.",
    deliverables: [
      "Workflow mapping & bottleneck analysis",
      "Trigger-based automation pipelines",
      "Adaptive learning & self-optimization",
      "Real-time monitoring dashboards",
    ],
    accentColor: "#b8c3ff",
  },
  {
    id: "ai-agents",
    icon: "support_agent",
    category: "AUTONOMY",
    title: "AI Agents",
    description: "Deploy autonomous digital workers capable of handling customer service, data ops, and complex multi-step reasoning 24/7.",
    deliverables: [
      "24/7 autonomous task execution",
      "Multi-step reasoning & decision making",
      "CRM & support system integration",
      "Escalation handling & human handoff",
    ],
    accentColor: "#d0bcff",
  },
  {
    id: "business-process-automation",
    icon: "settings_suggest",
    category: "AUTOMATION",
    title: "Business Process Automation",
    description: "Eliminate bottlenecks and manual overhead with intelligent RPA, document automation, and integrated software workflows.",
    deliverables: [
      "Robotic Process Automation (RPA)",
      "Document parsing & data extraction",
      "Approval workflow orchestration",
      "Cross-system data synchronization",
    ],
    accentColor: "#ffb59b",
  },
  {
    id: "custom-ai-solutions",
    icon: "architecture",
    category: "ENGINEERING",
    title: "Custom AI Solutions",
    description: "Bespoke model training, RAG systems, and deployment pipelines tailored precisely to your unique enterprise requirements.",
    deliverables: [
      "LLM fine-tuning on proprietary data",
      "Retrieval-Augmented Generation (RAG)",
      "Custom training pipelines",
      "Model evaluation & deployment",
    ],
    accentColor: "#b8c3ff",
  },
  {
    id: "data-intelligence",
    icon: "database",
    category: "ANALYTICS",
    title: "Data Intelligence",
    description: "Uncover hidden opportunities through advanced machine learning, predictive analytics, and interactive business dashboards.",
    deliverables: [
      "ML-powered forecasting models",
      "Interactive analytics dashboards",
      "Anomaly detection & alerting",
      "Data pipeline architecture",
    ],
    accentColor: "#d0bcff",
  },
  {
    id: "ai-integration",
    icon: "join_inner",
    category: "CONNECTIVITY",
    title: "AI Integration",
    description: "Seamlessly connect legacy systems with the latest AI frameworks, APIs, and cloud platforms with zero disruption.",
    deliverables: [
      "Legacy system modernization",
      "REST / GraphQL API mesh",
      "Real-time data sync & webhooks",
      "Third-party AI platform connectors",
    ],
    accentColor: "#ffb59b",
  },
  {
    id: "uiux-web-design",
    icon: "palette",
    category: "DESIGN",
    title: "UI/UX & Web Design",
    description: "Crafting modern, intuitive, and responsive interfaces that captivate users, elevate brand identity, and drive conversions.",
    deliverables: [
      "Design systems & component libraries",
      "Responsive web application builds",
      "Conversion rate optimization (CRO)",
      "Brand identity & motion design",
    ],
    accentColor: "#b8c3ff",
  },
  {
    id: "ai-chatbots",
    icon: "chat",
    category: "COMMUNICATION",
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational agents that handle customer queries, lead qualification, and internal helpdesks — trained on your business knowledge.",
    deliverables: [
      "Custom-trained chatbot on your data",
      "Multi-channel deployment (web, WhatsApp, Slack)",
      "Lead capture & qualification flows",
      "Seamless live agent handoff",
    ],
    accentColor: "#d0bcff",
  },
  {
    id: "ai-marketing-automation",
    icon: "trending_up",
    category: "GROWTH",
    title: "AI-Powered Marketing Automation",
    description: "Leverage AI to personalise campaigns at scale, automate email sequences, and make data-driven decisions that maximise ROI.",
    deliverables: [
      "Hyper-personalised email & SMS campaigns",
      "AI-driven content generation pipelines",
      "Audience segmentation & targeting",
      "Campaign performance analytics",
    ],
    accentColor: "#ffb59b",
  },
  {
    id: "computer-vision",
    icon: "visibility",
    category: "VISION",
    title: "Computer Vision Solutions",
    description: "Automate visual inspection, object detection, and image analysis tasks using deep learning models trained for your use case.",
    deliverables: [
      "Defect & anomaly detection systems",
      "Real-time object & face recognition",
      "Document & receipt OCR pipelines",
      "Video analytics & surveillance AI",
    ],
    accentColor: "#b8c3ff",
  },
  {
    id: "cloud-ai-infrastructure",
    icon: "cloud_sync",
    category: "INFRASTRUCTURE",
    title: "Cloud AI Infrastructure",
    description: "Design, deploy, and manage scalable AI infrastructure on AWS, GCP, or Azure — so your models run fast, reliably, and cost-efficiently.",
    deliverables: [
      "Cloud architecture design & setup",
      "Model serving & API deployment",
      "Auto-scaling & cost optimisation",
      "CI/CD pipelines for AI models",
    ],
    accentColor: "#d0bcff",
  },
];

function ServiceCard({ cap, idx }: { cap: Capability; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((cy - y) / cy) * 10;
    const rotY = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <Reveal delay={idx * 80} direction="up" className="h-full">
      <div
        id={cap.id}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card group relative rounded-2xl p-6 flex flex-col gap-3 cursor-default select-none"
      >
        {/* Mouse-following spotlight glow */}
        <div className="card-spotlight" />

        {/* Top accent line — fades in on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${cap.accentColor}60, transparent)` }}
        />

        {/* Category badge */}
        <div className="relative z-10">
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest border"
            style={{
              color: cap.accentColor,
              borderColor: `${cap.accentColor}30`,
              background: `${cap.accentColor}10`,
            }}
          >
            {cap.category}
          </span>
        </div>

        {/* Icon + Title */}
        <div className="relative z-10 flex items-start gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: `${cap.accentColor}12`, border: `1px solid ${cap.accentColor}25` }}
          >
            <span className="material-symbols-outlined text-2xl" style={{ color: cap.accentColor }}>
              {cap.icon}
            </span>
          </div>
          <h3 className="font-headline-md text-lg font-bold text-white leading-tight mt-1">{cap.title}</h3>
        </div>

        {/* Description — always visible */}
        <p className="relative z-10 text-on-surface-variant text-sm leading-relaxed">
          {cap.description}
        </p>

        {/* Deliverables — smoothly expand on hover using CSS grid trick */}
        <div className="relative z-10 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
          <div className="overflow-hidden">
            <div className="h-px bg-white/5 mt-1 mb-3" />
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-label-sm mb-2">
              What you get
            </p>
            <ul className="space-y-1.5 pb-1">
              {cap.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-on-surface-variant/80">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: cap.accentColor }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

interface CoreCapabilitiesProps {
  limit?: number;
  showTitle?: boolean;
}

export default function CoreCapabilities({ limit, showTitle = true }: CoreCapabilitiesProps) {
  const displayed = limit ? capabilities.slice(0, limit) : capabilities;

  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
        {showTitle && (
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
                WHAT WE BUILD
              </div>
              <h2 className="font-headline-md text-headline-md mb-4 text-white">Core Capabilities</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
              <p className="text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
                Eleven specialised disciplines. One mission: transform how your business operates.
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((cap, idx) => (
            <ServiceCard key={cap.title} cap={cap} idx={idx} />
          ))}
        </div>

        {limit && limit < capabilities.length && (
          <Reveal delay={400} direction="up" className="text-center mt-12">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary/30 hover:border-primary text-primary hover:bg-primary/5 rounded-xl font-bold transition-all cursor-pointer text-sm">
                <span>Explore All Services</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
