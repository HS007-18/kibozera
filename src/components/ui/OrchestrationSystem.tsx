"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function OrchestrationSystem() {
  const [telemetry, setTelemetry] = useState({
    latency: 42,
    activeAgents: 12,
    tokensSec: 840,
    memoryUsage: 94.2,
  });

  // Fluctuate stats to look alive and interactive
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        latency: Math.floor(Math.random() * 5) + 40, // 40-44ms
        activeAgents: prev.activeAgents,
        tokensSec: Math.floor(Math.random() * 40) + 820, // 820-860
        memoryUsage: Number((94.2 + (Math.random() - 0.5) * 0.4).toFixed(1)),
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal direction="left" delay={300} className="w-full h-full relative">
      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flow-line-1 {
          stroke-dasharray: 4, 8;
          animation: flow 1.2s linear infinite;
        }
        .flow-line-2 {
          stroke-dasharray: 4, 8;
          animation: flow 0.8s linear infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.15; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .animate-ring {
          transform-origin: center;
          animation: pulse-ring 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main Glass Dashboard */}
      <div className="w-full h-[400px] md:h-[460px] glass-card rounded-2xl border border-white/10 relative overflow-hidden coordinate-grid flex flex-col shadow-2xl">
        
        {/* Soft Background Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Dashboard Header Bar */}
        <div className="w-full h-12 border-b border-white/10 bg-white/2 flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-label-sm uppercase tracking-wider text-on-surface-variant">System Monitor : Active</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>

        {/* SVG Pipeline Graph */}
        <div className="flex-grow w-full relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300" fill="none">
            {/* Connecting Flow Paths */}
            {/* Ingest to Core */}
            <path
              d="M 100,150 L 250,150"
              stroke="rgba(184, 195, 255, 0.15)"
              strokeWidth="2"
            />
            <path
              d="M 100,150 L 250,150"
              stroke="#2d5bff"
              strokeWidth="2"
              className="flow-line-1"
            />

            {/* Core to Router */}
            <path
              d="M 250,150 L 400,150"
              stroke="rgba(184, 195, 255, 0.15)"
              strokeWidth="2"
            />
            <path
              d="M 250,150 L 400,150"
              stroke="#b8c3ff"
              strokeWidth="2"
              className="flow-line-2"
            />

            {/* Lower Ingest-to-Core Curved Path */}
            <path
              d="M 100,150 Q 175,220 250,150"
              stroke="rgba(184, 195, 255, 0.08)"
              strokeWidth="1.5"
            />
            <path
              d="M 100,150 Q 175,220 250,150"
              stroke="#00ffff"
              strokeWidth="1.5"
              className="flow-line-1"
            />

            {/* Upper Core-to-Router Curved Path */}
            <path
              d="M 250,150 Q 325,80 400,150"
              stroke="rgba(184, 195, 255, 0.08)"
              strokeWidth="1.5"
            />
            <path
              d="M 250,150 Q 325,80 400,150"
              stroke="#d0bcff"
              strokeWidth="1.5"
              className="flow-line-2"
            />

            {/* Left Node: Data Intake */}
            <g transform="translate(100, 150)">
              <circle r="14" className="fill-[#111317] stroke-white/20" strokeWidth="1.5" />
              <circle r="4" className="fill-[#2d5bff]" />
            </g>

            {/* Central Node: Sylvie Cognitive Core */}
            <g transform="translate(250, 150)">
              <circle r="32" className="fill-[#111317]/90 stroke-[#2d5bff]/40" strokeWidth="1.5" />
              <circle r="40" fill="none" stroke="rgba(45, 91, 255, 0.15)" strokeWidth="0.8" className="animate-ring" />
              <circle r="8" className="fill-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            </g>

            {/* Right Node: Router */}
            <g transform="translate(400, 150)">
              <circle r="14" className="fill-[#111317] stroke-white/20" strokeWidth="1.5" />
              <circle r="4" className="fill-[#d0bcff]" />
            </g>
          </svg>

          {/* Node Labels */}
          <div className="absolute top-[170px] left-[65px] text-[10px] font-label-sm uppercase tracking-wider text-on-surface-variant opacity-60">
            Ingest & Parse
          </div>
          
          <div className="absolute top-[200px] left-[180px] text-center w-[140px] text-[11px] font-headline-md uppercase tracking-widest text-primary">
            Sylvie Cognitive Core
          </div>

          <div className="absolute top-[170px] left-[365px] text-[10px] font-label-sm uppercase tracking-wider text-on-surface-variant opacity-60">
            Action Router
          </div>

          {/* Telemetry Stats Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl border border-white/5 bg-[#111317]/50 backdrop-blur-md flex items-center justify-between text-[11px] font-label-sm z-10">
            <div className="flex flex-col">
              <span className="text-on-surface-variant/50 uppercase tracking-tighter">System Latency</span>
              <span className="font-bold text-white text-xs mt-0.5">{telemetry.latency} ms</span>
            </div>
            
            <div className="w-[1px] h-6 bg-white/10" />

            <div className="flex flex-col">
              <span className="text-on-surface-variant/50 uppercase tracking-tighter">Token Efficiency</span>
              <span className="font-bold text-cyan-400 text-xs mt-0.5">{(telemetry.tokensSec / 10).toFixed(1)} t/s</span>
            </div>

            <div className="w-[1px] h-6 bg-white/10" />

            <div className="flex flex-col">
              <span className="text-on-surface-variant/50 uppercase tracking-tighter">Active Pipelines</span>
              <span className="font-bold text-white text-xs mt-0.5">{telemetry.activeAgents} units</span>
            </div>

            <div className="w-[1px] h-6 bg-white/10" />

            <div className="flex flex-col">
              <span className="text-on-surface-variant/50 uppercase tracking-tighter">Memory load</span>
              <span className="font-bold text-white text-xs mt-0.5">{telemetry.memoryUsage}%</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
