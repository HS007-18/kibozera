"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#111317]/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/kz.png"
              alt="Kibozera Logo"
              className="h-9 w-9 object-contain rounded-md border border-white/10 group-hover:border-primary/50 transition-colors"
            />
            <span className="text-xl font-bold font-headline-md text-primary tracking-wide group-hover:text-white transition-colors">
              Kibozera
            </span>
          </Link>
        </div>
        
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
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-stack-md">
          <Link href="/contact">
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold hover:scale-105 active:scale-95 transition-transform cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
