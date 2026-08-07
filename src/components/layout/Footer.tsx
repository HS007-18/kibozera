import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navGroups = [
    {
      label: "Services",
      links: [
        { name: "AI Automation", href: "/services#ai-automation" },
        { name: "AI Agents", href: "/services#ai-agents" },
        { name: "Business Process Automation", href: "/services#business-process-automation" },
        { name: "Custom AI Solutions", href: "/services#custom-ai-solutions" },
        { name: "UI/UX & Web Design", href: "/services#uiux-web-design" },
      ],
    },
    {
      label: "Company",
      links: [
        { name: "About Kibozera", href: "/about" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  const socials = [
    {
      label: "Kibozera on LinkedIn",
      href: "https://www.linkedin.com/company/kibozera/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "Kibozera on Instagram",
      href: "https://www.instagram.com/kibo_zera?igsh=MTFqY3l0MnZoNHQ2eg==",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "Email Kibozera",
      href: "mailto:kibozera.services@gmail.com",
      icon: <span className="material-symbols-outlined text-base" aria-hidden="true">mail</span>,
    },
  ];

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/5 mt-auto" aria-label="Kibozera site footer">
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/kz.png"
                alt="Kibozera Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain rounded-md border border-white/10"
              />
              <span className="text-headline-md font-headline-md font-bold text-primary">Kibozera</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-3 max-w-xs leading-relaxed">
              Kibozera — India&apos;s AI automation company. We engineer intelligent AI agents, workflow automation, RPA, and custom AI solutions that help businesses scale faster.
            </p>
            <p className="text-on-surface-variant/50 text-xs mb-6">
              📍 Tiruppur, Tamil Nadu, India &nbsp;|&nbsp; Serving clients worldwide
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-bold mb-5 text-white text-sm tracking-wide">{group.label}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-on-surface-variant text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-on-surface-variant text-xs opacity-50 text-center sm:text-left">
            © {currentYear} Kibozera AI Automation. Tiruppur, Tamil Nadu, India. All rights reserved.
          </p>
          <p className="text-on-surface-variant text-xs opacity-40">
            AI Automation · AI Agents · RPA · Custom AI Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
