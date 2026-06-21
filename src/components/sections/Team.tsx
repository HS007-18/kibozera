"use client";

import { useEffect, useRef, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  photo?: string;
  initials: string;
  accentColor: string;
  glowColor: string;
  layout: "left" | "right"; // photo side
}

const teamMembers: TeamMember[] = [
  {
    name: "Hari Siddesh",
    role: "CEO & Chief AI/Automation Officer",
    description:
      "Responsible for company vision, AI strategy, automation architecture, technology direction, and building intelligent solutions that solve real business problems.",
    skills: ["AI Systems", "Automation Architecture", "Business Strategy", "AI Agents", "Workflow Automation"],
    photo: "/hari_siddesh.jpeg",
    initials: "HS",
    accentColor: "#b8c3ff",
    glowColor: "rgba(184,195,255,0.25)",
    layout: "left",
  },
  {
    name: "Dharanidharan",
    role: "CPO & Operations Lead",
    description:
      "Responsible for product development, solution planning, project execution, and managing daily company operations to ensure smooth delivery of automation projects.",
    skills: ["Product Strategy", "Project Management", "Business Process Design", "Operations Management"],
    photo: "/dharanidharan.png",
    initials: "DD",
    accentColor: "#d0bcff",
    glowColor: "rgba(208,188,255,0.25)",
    layout: "right",
  },
  {
    name: "Varun Prasath",
    role: "CMO & Client Success Lead",
    description:
      "Responsible for brand growth, client relationships, marketing strategy, customer communication, and building strong partnerships with businesses.",
    skills: ["Marketing", "Client Success", "Business Development", "Customer Relations"],
    photo: "/varun_prasath.png",
    initials: "VP",
    accentColor: "#ffb59b",
    glowColor: "rgba(255,181,155,0.25)",
    layout: "left",
  },
];

function useInView(threshold = 0.25) {
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
  const { ref, inView } = useInView(0.2);
  const isPhotoLeft = member.layout === "left";

  const imageSlide = isPhotoLeft ? "-translate-x-20" : "translate-x-20";
  const textSlide = isPhotoLeft ? "translate-x-20" : "-translate-x-20";

  return (
    <div
      ref={ref}
      className="relative min-h-[80vh] flex items-center py-20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000"
        style={{
          background: member.glowColor,
          width: "500px",
          height: "500px",
          top: "50%",
          left: isPhotoLeft ? "10%" : "60%",
          transform: "translate(-50%, -50%)",
          opacity: inView ? 1 : 0,
        }}
      />

      {/* Subtle grid */}
      <NetworkBackground color={member.accentColor} />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
        <div className={`flex flex-col ${isPhotoLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-20`}>

          {/* Photo / Initials Side */}
          <div
            className={`flex-shrink-0 w-full md:w-2/5 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${imageSlide}`}`}
          >
            <div className="relative group flex justify-center">
              {/* Outer decorative ring */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: `linear-gradient(135deg, ${member.accentColor}, transparent)` }}
              />

              {/* Photo or initials block */}
              {member.photo ? (
                <div className="relative w-72 md:w-80 h-[420px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
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
                  className="relative w-72 md:w-80 h-[420px] rounded-2xl border border-white/10 group-hover:border-white/25 transition-all duration-500 flex items-center justify-center shadow-2xl overflow-hidden"
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
                className="absolute -bottom-4 -right-4 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black border shadow-lg"
                style={{ background: "#050608", borderColor: `${member.accentColor}50`, color: member.accentColor }}
              >
                0{index + 1}
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div
            className={`flex-1 transition-all duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-x-0" : `opacity-0 ${textSlide}`}`}
          >
            {/* Glassmorphism info panel */}
            <div className="relative rounded-2xl p-8 md:p-10 border border-white/8 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)" }}>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-br-[80px] opacity-10"
                style={{ background: `radial-gradient(circle at top left, ${member.accentColor}, transparent)` }} />
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-[60px] opacity-8"
                style={{ background: `radial-gradient(circle at bottom right, ${member.accentColor}, transparent)` }} />

              <div className="relative z-10">
                {/* Role badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border"
                  style={{ background: `${member.accentColor}12`, borderColor: `${member.accentColor}30`, color: member.accentColor }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: member.accentColor }} />
                  {member.role}
                </div>

                {/* Name */}
                <h2
                  className="font-display-lg text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight"
                  style={{ color: "#fff" }}
                >
                  {member.name}
                  <span className="block w-16 h-1 rounded-full mt-3" style={{ background: member.accentColor }} />
                </h2>

                {/* Description */}
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  {member.description}
                </p>

                {/* Skills */}
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-4 font-label-sm">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300 hover:scale-105 cursor-default"
                        style={{
                          background: `${member.accentColor}08`,
                          borderColor: `${member.accentColor}25`,
                          color: member.accentColor,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
    <section className="relative bg-[#050608] overflow-hidden py-16">
      {/* Section header */}
      <div className="max-w-container-max mx-auto px-margin-desktop text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          THE PEOPLE BEHIND KIBOZERA
        </div>
        <h2 className="font-display-lg text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Our Founding Team
        </h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
        <p className="text-on-surface-variant max-w-2xl mx-auto text-base leading-relaxed">
          A team of visionary engineers, product strategists, and business leaders driving the future of enterprise AI automation.
        </p>
      </div>

      {/* Connecting line between sections */}
      <div className="absolute left-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent pointer-events-none" />

      {/* Founder sections */}
      {teamMembers.map((member, i) => (
        <FounderSection key={member.name} member={member} index={i} />
      ))}
    </section>
  );
}
