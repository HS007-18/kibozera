"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Kibozera?",
    answer:
      "Kibozera is an AI automation company based in Tiruppur, Tamil Nadu, India. We build AI agents, workflow automation systems, robotic process automation (RPA), custom AI models, AI chatbots, data intelligence platforms, and cloud AI infrastructure — helping businesses in India and worldwide reduce manual work, cut operational costs, and scale faster.",
  },
  {
    question: "What services does Kibozera offer?",
    answer:
      "Kibozera offers 11 AI automation services: (1) AI Automation, (2) AI Agents, (3) Business Process Automation / RPA, (4) Custom AI Solutions, (5) Data Intelligence, (6) AI Integration, (7) UI/UX & Web Design, (8) AI Chatbots & Virtual Assistants, (9) AI-Powered Marketing Automation, (10) Computer Vision Solutions, and (11) Cloud AI Infrastructure on AWS, GCP, or Azure.",
  },
  {
    question: "What is AI automation and how does it help my business?",
    answer:
      "AI automation uses artificial intelligence to handle repetitive, rule-based, and complex tasks that previously required human effort — from data entry and document processing to customer service and decision-making. For your business, this means reduced operational costs, faster execution times, fewer errors, and the ability to scale without proportionally increasing headcount.",
  },
  {
    question: "How long does a typical automation project take?",
    answer:
      "Project timelines vary based on complexity. A focused workflow automation (e.g., automating a single data pipeline or customer onboarding flow) typically takes 2–4 weeks. A full-scale custom AI agent system or enterprise integration can range from 6–12 weeks. We provide a detailed timeline after our initial discovery session.",
  },
  {
    question: "Can you integrate AI with our existing software and tools?",
    answer:
      "Yes — integration is a core part of what we do. We connect AI systems to virtually any platform, including CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), communication tools (Slack, Teams), databases, and custom internal software via REST APIs, webhooks, or direct database connections. We never force you to replace what already works.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Absolutely. While we are based in Tamil Nadu, India, we work with clients globally. All collaboration is conducted remotely through structured discovery calls, async updates, and shared project dashboards. Time zone differences have never been a blocker for our international clients.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deployed AI systems across healthcare, education, finance, manufacturing, retail, and enterprise operations. Our approach is industry-agnostic — we study your specific workflows, constraints, and data before recommending any solution, ensuring the AI fits your sector's unique requirements.",
  },
  {
    question: "Is our data safe when working with Kibozera?",
    answer:
      "Data security is treated as a first-class requirement. All client data, workflow specifications, and proprietary information shared with us is governed by strict NDAs. For production systems, we deploy with enterprise-grade encryption, role-based access control, and audit logging. We never use client data to train models without explicit consent.",
  },
  {
    question: "How much does a custom AI solution cost?",
    answer:
      "Pricing is project-based and depends on scope, complexity, and integrations required. We offer a free initial consultation and feasibility assessment to understand your needs before any cost commitment. After discovery, you receive a transparent, itemized proposal with no hidden fees.",
  },
  {
    question: "What happens after deployment — do you offer ongoing support?",
    answer:
      "Yes. Deployment is just the beginning. We provide post-launch monitoring, performance tuning, model updates, and technical support. For ongoing retainers, we offer continuous optimization — adjusting automation rules, retraining models with new data, and scaling infrastructure as your business grows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 md:px-margin-desktop relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
              FREQUENTLY ASKED
            </div>
            <h2 className="font-headline-md text-headline-md text-white mb-4">Common Questions</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
            <p className="text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
              Everything you need to know about working with Kibozera. Can&apos;t find your answer?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Ask us directly.
              </a>
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 60} direction="up">
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === idx
                    ? "border-primary/30 bg-primary/5"
                    : "border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.03]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-semibold text-sm md:text-base text-white leading-snug pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "text-primary rotate-180" : "text-on-surface-variant/50"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-on-surface-variant leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
