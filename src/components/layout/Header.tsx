"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-[#111317]/80 backdrop-blur-xl border-b border-white/10 shadow-sm"
      aria-label="Kibozera main navigation"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-5 md:px-margin-desktop h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)} aria-label="Kibozera — AI Automation Company Home">
            <Image
              src="/kz.png"
              alt="Kibozera Logo — AI Automation Company India"
              width={36}
              height={36}
              className="h-8 w-8 md:h-9 md:w-9 object-contain rounded-md border border-white/10 group-hover:border-primary/50 transition-colors"
              priority
            />
            <span className="text-lg md:text-xl font-bold font-headline-md text-primary tracking-wide group-hover:text-white transition-colors">
              Kibozera
            </span>
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-stack-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body-md text-body-md transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:block">
            <button className="bg-primary-container text-on-primary-container px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-bold hover:scale-105 active:scale-95 transition-transform cursor-pointer text-sm md:text-base">
              Get Started
            </button>
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111317]/95 backdrop-blur-xl border-t border-white/8 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10 font-bold"
                    : "text-on-surface-variant hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-2 pt-3 border-t border-white/8">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold transition-transform cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
