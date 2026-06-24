"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import GlowEffect from "../ui/GlowEffect";
import ParticleGrid from "../ui/ParticleGrid";
import Reveal from "../ui/Reveal";

export default function Hero() {
  const [headlineText, setHeadlineText] = useState("");
  const fullHeadline = "We Listen Before We Automate It";

  // Typing effect for the main headline
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHeadlineText(fullHeadline.slice(0, index + 1));
      index++;
      if (index >= fullHeadline.length) {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden py-24 bg-[#050608]">
      {/* Cover image background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kz.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-5"
        />
        {/* Dark gradient overlays to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-[#050608]/60 to-[#050608]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/70 via-transparent to-[#050608]/70" />
      </div>

      {/* Dynamic Background Grids and glows */}
      <GlowEffect />
      <ParticleGrid />
      
      <div className="max-w-4xl mx-auto px-margin-desktop flex flex-col items-center justify-center gap-6 w-full relative z-10 text-center">
        
        <Reveal delay={0} direction="up" className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ENTERPRISE AI ORCHESTRATION
          </div>
        </Reveal>
        
        {/* Main Large-scale Typewritten Headline */}
        <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center w-full my-4 md:my-6">
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-[62px] font-bold leading-[1.15] text-white uppercase word-spacing-wide">
            {headlineText}
            {headlineText.length < fullHeadline.length && (
              <span className="animate-blink border-r-4 border-cyan-400 ml-1">&nbsp;</span>
            )}
          </h1>
        </div>

        {/* Minimal 2-Line Subtext */}
        <Reveal delay={200} direction="up" className="w-full flex justify-center">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-6 sm:mt-8 md:mt-10">
            Kibozera engineers AI-driven automation systems that eliminate operational friction, streamline workflows, and scale business intelligence with precision architecture.
          </p>
        </Reveal>

        {/* Premium Conversion-Focused CTA Buttons */}
        <Reveal delay={350} direction="up" className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer">
                Request Architecture Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border border-white/10 hover:border-white/30 rounded-xl font-bold transition-all bg-white/5 backdrop-blur-sm hover:scale-105 active:scale-95 cursor-pointer">
                View Automation Systems
              </button>
            </Link>
          </div>
        </Reveal>

        {/* Trust Badges */}
        <Reveal delay={500} direction="up" className="w-full flex justify-center">
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs tracking-wider uppercase text-on-surface-variant/60 font-label-sm w-full">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-cyan-400">lock</span>
              Enterprise-grade automation systems
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-cyan-400">psychology</span>
              Human-first AI engineering
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-cyan-400">token</span>
              Secure, scalable, modular architecture
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
