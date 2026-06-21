"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function PromoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const dismissed = localStorage.getItem("kibozera_promo_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    localStorage.setItem("kibozera_promo_dismissed", "true");
  };

  const handleCTA = () => {
    handleClose();
    router.push("/contact");
  };

  // Fallback for light-dismiss (clicking outside the dialog closes it)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      
      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInside) {
        handleClose();
      }
    };

    dialog.addEventListener("click", handleClickOutside);
    return () => {
      dialog.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby="promo-title"
      className="fixed inset-0 z-50 m-auto max-w-lg w-[92%] bg-[#0c0e12]/95 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(45,91,255,0.25)] backdrop:bg-[#050608]/90 backdrop:backdrop-blur-xl outline-none text-[#e2e2e8] overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        
        {/* Animated Badge Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 border border-white/15 text-4xl shadow-lg relative animate-bounce" style={{ animationDuration: "3s" }}>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
            </span>
            🎁
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold uppercase tracking-widest animate-pulse">
            🔥 Limited Time Offer
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 id="promo-title" className="font-display-lg text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-[#dde1ff] to-primary bg-clip-text text-transparent uppercase tracking-tight leading-tight">
            Launch Promotion! 🎉
          </h3>
          <p className="text-sm text-on-surface-variant/80 font-medium">
            Accelerating your workflow at zero cost 🚀
          </p>
        </div>

        {/* Offer details & highlight grid */}
        <div className="w-full space-y-4 my-2">
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-md mx-auto">
            To celebrate our brand launch, Kibozera is currently offering our elite services <strong className="text-cyan-400 font-bold">100% Free of Charge</strong>! No credit card, no subscription, no catches.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full mt-4">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-all">
              <span className="text-2xl select-none">🤖</span>
              <div>
                <h4 className="text-white text-xs font-bold uppercase">AI Automation</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Custom bots & agents</p>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-all">
              <span className="text-2xl select-none">🎨</span>
              <div>
                <h4 className="text-white text-xs font-bold uppercase">UI/UX & Web Design</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Stunning, modern web apps</p>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-all">
              <span className="text-2xl select-none">⚙️</span>
              <div>
                <h4 className="text-white text-xs font-bold uppercase">Workflow Integration</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Optimizing old systems</p>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-all">
              <span className="text-2xl select-none">🧠</span>
              <div>
                <h4 className="text-white text-xs font-bold uppercase">AI Consultations</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Architecture & strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full mt-4">
          <button
            onClick={handleCTA}
            className="flex-grow px-6 py-4 bg-gradient-to-r from-primary-container to-[#4d73ff] hover:from-[#4d73ff] hover:to-primary-container text-white font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(45,91,255,0.4)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base"
          >
            Claim Free Session Now 🚀
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-4 border border-white/10 hover:border-white/20 rounded-xl font-bold transition-all bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer text-on-surface-variant hover:text-white text-sm md:text-base flex items-center justify-center gap-1"
          >
            Maybe Later ⏳
          </button>
        </div>
      </div>
    </dialog>
  );
}
