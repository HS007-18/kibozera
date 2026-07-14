"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import GlowEffect from "../ui/GlowEffect";
import ParticleGrid from "../ui/ParticleGrid";
import Reveal from "../ui/Reveal";

const FULL_HEADLINE = "We Listen Before We Automate";

export default function Hero() {
  const [displayed, setDisplayed] = useState(FULL_HEADLINE);
  const [isTyping, setIsTyping] = useState(false);
  const [done, setDone] = useState(true);

  useEffect(() => {
    // Start typewriter after hydration — re-animate from empty to full
    setDisplayed("");
    setDone(false);
    setIsTyping(true);

    const startTimeout = setTimeout(() => {
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setDisplayed(FULL_HEADLINE.slice(0, idx));
        if (idx >= FULL_HEADLINE.length) {
          clearInterval(interval);
          setDone(true);
          setIsTyping(false);
        }
      }, 65);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden py-16 md:py-24 bg-[#050608]"
      aria-label="Kibozera — AI Automation Company India"
    >
      {/* Cover image background — decorative, preloaded via layout <link rel="preload"> */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/kz.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-[#050608]/60 to-[#050608]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/70 via-transparent to-[#050608]/70" />
      </div>

      <GlowEffect />
      <ParticleGrid />

      <div className="max-w-4xl mx-auto px-5 md:px-margin-desktop flex flex-col items-center justify-center gap-4 md:gap-6 w-full relative z-10 text-center">

        <Reveal delay={0} direction="up" className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            KIBOZERA AI &amp; AUTOMATION
          </div>
        </Reveal>

        {/* H1 — SSR-safe: full text is always in the DOM for Google crawling.
            Typewriter runs client-side, never hides branded server content. */}
        <div className="min-h-[100px] sm:min-h-[130px] md:min-h-[150px] flex items-center justify-center w-full my-4 md:my-6">
          <h1 className="font-display-lg text-3xl sm:text-5xl md:text-[62px] font-bold leading-[1.15] text-white uppercase">
            {/* Semantic text for crawlers and screen readers */}
            <span className="sr-only">Kibozera — Enterprise AI &amp; Workflow Automation Company India</span>
            
            {/* Visual typewriter for human visitors */}
            <span aria-hidden="true">
              {displayed || FULL_HEADLINE}
              {!done && isTyping && (
                <span className="inline-block animate-blink border-r-4 border-cyan-400 ml-0.5 h-[0.85em] align-middle" />
              )}
            </span>
          </h1>
        </div>

        <Reveal delay={200} direction="up" className="w-full flex justify-center">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-2 sm:mt-4 text-base md:text-lg">
            Kibozera is an AI automation company that engineers AI agents, workflow automation,
            RPA, and custom AI systems — eliminating operational friction and scaling business
            intelligence with precision architecture.
          </p>
        </Reveal>

        <Reveal delay={350} direction="up" className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-2 w-full px-4 sm:px-0">
            <Link href="/contact">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer text-sm md:text-base">
                Request Free AI Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/10 hover:border-white/30 rounded-xl font-bold transition-all bg-white/5 backdrop-blur-sm hover:scale-105 active:scale-95 cursor-pointer text-sm md:text-base">
                View AI Automation Services
              </button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={500} direction="up" className="w-full flex justify-center">
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs tracking-wider uppercase text-on-surface-variant/60 font-label-sm w-full">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-cyan-400" aria-hidden="true">lock</span>
              Enterprise-grade AI automation
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-cyan-400" aria-hidden="true">psychology</span>
              Human-first AI engineering
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-cyan-400" aria-hidden="true">token</span>
              Secure, scalable, modular AI
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
