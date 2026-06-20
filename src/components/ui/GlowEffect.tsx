"use client";

import { useEffect, useRef } from "react";

export default function GlowEffect() {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (glow1Ref.current) {
        glow1Ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
      if (glow2Ref.current) {
        glow2Ref.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={glow1Ref} className="ai-glow top-1/4 -left-20" />
      <div ref={glow2Ref} className="ai-glow bottom-1/4 -right-20" />
    </>
  );
}
