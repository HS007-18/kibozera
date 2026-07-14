"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  photo?: string;
  initials: string;
  accentColor: string;
  glowColor: string;
  layout: "left" | "right";
  linkedin?: string;
  phone?: string;
  education?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hari Siddesh M",
    role: "CEO & Chief AI/Automation Officer",
    description:
      "Responsible for company vision, AI strategy, automation architecture, technology direction, and building intelligent solutions that solve real business problems.",
    skills: ["AI Systems", "Automation Architecture", "Business Strategy", "AI Agents", "Workflow Automation"],
    photo: "/hari_siddesh.jpeg",
    initials: "M",
    accentColor: "#b8c3ff",
    glowColor: "rgba(184,195,255,0.25)",
    layout: "left",
    education: "3rd Year B.E / CSE (AI & ML) — KIT, Tiruppur",
    linkedin: "https://www.linkedin.com/in/hari-siddesh-m",
    phone: "9361724730",
  },
  {
    name: "Varun Prasath D",
    role: "CMO & Client Success Lead",
    description:
      "Responsible for brand growth, client relationships, marketing strategy, customer communication, and building strong partnerships with businesses.",
    skills: ["Marketing", "Client Success", "Business Development", "Customer Relations", "UI & UX", "Web Design"],
    photo: "/varun_prasath.png",
    initials: "D",
    accentColor: "#ffb59b",
    glowColor: "rgba(255,181,155,0.25)",
    layout: "right",
    education: "3rd Year B.E / CSE (AI & ML) — KIT, Tiruppur",
    linkedin: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
    phone: "9487848316",
  },
  {
    name: "Dharanidharan V",
    role: "CPO & Operations Lead",
    description:
      "Responsible for product development, solution planning, project execution, and managing daily company operations to ensure smooth delivery of automation projects.",
    skills: ["Product Strategy", "Project Management", "Business Process Design", "Operations Management"],
    photo: "/dharanidharan.png",
    initials: "V",
    accentColor: "#d0bcff",
    glowColor: "rgba(208,188,255,0.25)",
    layout: "left",
    education: "3rd Year B.E / CSE (AI & ML) — KIT, Tiruppur",
    linkedin: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b",
    phone: "6383764299",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// Animated network background
function NetworkBackground({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-10" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {/* Network nodes */}
        {[
          [100, 150], [250, 80], [400, 200], [600, 100], [700, 250],
          [550, 350], [350, 420], [150, 380], [480, 480], [680, 480],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={color} className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
        {/* Network lines */}
        {[
          [100, 150, 250, 80], [250, 80, 400, 200], [400, 200, 600, 100],
          [600, 100, 700, 250], [700, 250, 550, 350], [550, 350, 350, 420],
          [350, 420, 150, 380], [400, 200, 550, 350], [250, 80, 150, 380],
          [480, 480, 350, 420], [680, 480, 700, 250],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" strokeDasharray="4 8" />
        ))}
      </svg>
    </div>
  );
}

// Individual founder section
function FounderSection({ member, index }: { member: TeamMember; index: number }) {
  const { ref, inView } = useInView(0.1);
  const isPhotoLeft = member.layout === "left";

  // On mobile: slide from below. On desktop: slide from sides.
  const imageSlide = isPhotoLeft
    ? "translate-y-8 md:translate-y-0 md:-translate-x-20"
    : "translate-y-8 md:translate-y-0 md:translate-x-20";
  const textSlide = isPhotoLeft
    ? "translate-y-8 md:translate-y-0 md:translate-x-20"
    : "translate-y-8 md:translate-y-0 md:-translate-x-20";

  return (
    <div
      ref={ref}
      className="relative py-10 md:py-20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute rounded-full blur-[80px] md:blur-[120px] pointer-events-none transition-opacity duration-1000"
        style={{
          background: member.glowColor,
          width: "300px",
          height: "300px",
          top: "50%",
          left: isPhotoLeft ? "10%" : "60%",
          transform: "translate(-50%, -50%)",
          opacity: inView ? 0.6 : 0,
        }}
      />

      {/* Subtle grid */}
      <NetworkBackground color={member.accentColor} />

      <div className="relative z-10 max-w-container-max mx-auto px-5 md:px-margin-desktop w-full">
        <div className={`flex flex-col ${isPhotoLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-16 items-center`}>

          {/* Photo / Initials Side */}
          <div
            className={`flex-shrink-0 w-full md:w-2/5 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${imageSlide}`}`}
          >
            <div className="relative group flex justify-center">
              {/* Outer decorative ring */}
              <div
                className="absolute -inset-3 md:-inset-4 rounded-2xl opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: `linear-gradient(135deg, ${member.accentColor}, transparent)` }}
              />

              {/* Photo or initials block */}
              {member.photo ? (
                <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:w-72 h-[280px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${member.role} at Kibozera`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 288px"
                    loading="lazy"
                  />
                  {/* Photo overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/70 via-transparent to-transparent" />
                  {/* Scan line effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(180deg, transparent 40%, ${member.accentColor}15 50%, transparent 60%)`,
                    }}
                  />
                </div>
              ) : (
                <div
                  className="relative w-full max-w-[220px] sm:max-w-[260px] md:w-72 h-[280px] sm:h-[320px] md:h-[420px] rounded-2xl border border-white/10 group-hover:border-white/25 transition-all duration-500 flex items-center justify-center shadow-2xl overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${member.accentColor}10, #111317)` }}
                >
                  {/* Decorative lines inside blank card */}
                  <div className="absolute inset-0">
                    {[20, 40, 60, 80].map((pct) => (
                      <div key={pct} className="absolute w-full h-px opacity-5" style={{ top: `${pct}%`, background: member.accentColor }} />
                    ))}
                    {[20, 40, 60, 80].map((pct) => (
                      <div key={pct} className="absolute h-full w-px opacity-5" style={{ left: `${pct}%`, background: member.accentColor }} />
                    ))}
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div
                      className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-black tracking-widest border"
                      style={{ background: `${member.accentColor}15`, borderColor: `${member.accentColor}40`, color: member.accentColor }}
                    >
                      {member.initials}
                    </div>
                    <span className="text-xs tracking-[0.3em] uppercase opacity-40" style={{ color: member.accentColor }}>
                      Photo Coming Soon
                    </span>
                  </div>
                </div>
              )}

              {/* Index label */}
              <div
                className="absolute -bottom-4 -right-2 md:-right-4 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl font-black border shadow-lg"
                style={{ background: "#050608", borderColor: `${member.accentColor}50`, color: member.accentColor }}
              >
                0{index + 1}
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div
            className={`flex-1 w-full transition-all duration-700 ease-out delay-150 ${inView ? "opacity-100 translate-x-0" : "opacity-0 " + textSlide}`}
          >
            {/* Glassmorphism info panel */}
            <div className="relative rounded-2xl p-5 md:p-8 border border-white/8 overflow-hidden min-h-[320px] md:min-h-[420px] h-auto"
              style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)" }}>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-br-[80px] opacity-10"
                style={{ background: `radial-gradient(circle at top left, ${member.accentColor}, transparent)` }} />
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-[60px] opacity-8"
                style={{ background: `radial-gradient(circle at bottom right, ${member.accentColor}, transparent)` }} />

              <div className="relative z-10 h-full flex flex-col justify-between gap-4">
                <div>
                  {/* Role badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border max-w-full"
                    style={{ background: `${member.accentColor}12`, borderColor: `${member.accentColor}30`, color: member.accentColor }}
                  >
                    <span className="w-1 h-1 rounded-full animate-pulse flex-shrink-0" style={{ background: member.accentColor }} />
                    <span className="truncate">{member.role}</span>
                  </div>

                  {/* Name */}
                  <h2
                    className="font-display-lg text-2xl md:text-3xl font-black mb-2 leading-tight"
                    style={{ color: "#fff" }}
                  >
                    {member.name}
                  </h2>

                  {/* Education */}
                  {member.education && (
                    <div className="inline-flex items-center gap-1.5 mb-3 text-[10px] text-on-surface-variant/75">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                      {member.education}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-3 max-w-xl">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div>
                    <p className="text-[9px] uppercase tracking-widest opacity-40 mb-1 font-label-sm">Focus Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-[9px] font-semibold border transition-all duration-300 hover:scale-102 cursor-default text-center"
                          style={{
                            background: `${member.accentColor}08`,
                            borderColor: `${member.accentColor}25`,
                            color: member.accentColor,
                          }}
                          title={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact buttons */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/8">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: `${member.accentColor}12`,
                        borderColor: `${member.accentColor}35`,
                        color: member.accentColor,
                      }}
                    >
                      {/* LinkedIn icon */}
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:+91${member.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border border-white/10 text-on-surface-variant transition-all duration-300 hover:scale-105 hover:border-white/25 hover:text-white"
                    >
                      {/* Phone icon */}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75z"/>
                      </svg>
                      +91 {member.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative bg-[#050608] overflow-hidden py-10 md:py-16">
      {/* Section header */}
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop text-center mb-10 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          THE PEOPLE BEHIND KIBOZERA
        </div>
        <h1 className="font-display-lg text-3xl md:text-5xl font-black text-white mb-4">
          Our Founding Team
        </h1>
        <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
        <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          A team of visionary engineers, product strategists, and business leaders driving the future of enterprise AI automation.
        </p>
      </div>

      {/* Connecting line — hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent pointer-events-none" />

      {/* Founder sections */}
      {teamMembers.map((member, i) => (
        <FounderSection key={member.name} member={member} index={i} />
      ))}
    </section>
  );
}
