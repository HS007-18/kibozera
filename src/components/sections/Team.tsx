"use client";

import Reveal from "../ui/Reveal";

interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  initials: string;
  gradient: string;
  photo?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hari Siddesh M",
    role: "Founder & AI Solutions Architect",
    linkedin: "https://www.linkedin.com/in/hari-siddesh-m",
    initials: "HS",
    gradient: "from-primary/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30",
    photo: undefined,
  },
  {
    name: "Dharanidharan",
    role: "Co-Founder & Lead Systems Engineer",
    linkedin: "https://www.linkedin.com/in/dharanidharan-v-796b0b32b/",
    initials: "DD",
    gradient: "from-secondary/20 to-purple-500/20 text-purple-300 border-purple-500/30",
    photo: "/dharanidharan.png",
  },
  {
    name: "Varun Prasath D",
    role: "Founding Engineer & UI/UX Specialist",
    linkedin: "https://www.linkedin.com/in/varun-prasath-d-2a5236328",
    initials: "VP",
    gradient: "from-tertiary/20 to-orange-500/20 text-orange-300 border-orange-500/30",
    photo: "/varun_prasath.png",
  },
];

export default function Team() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md mb-stack-sm text-white">Our Team</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-on-surface-variant text-sm max-w-md mx-auto">
              Meet the forward-thinking minds building the future of automated enterprise solutions.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-5 hover:scale-105 transition-all duration-300 group">
                <div className="card-spotlight" />
                
                {/* Visual Avatar with initials/photo & glowing border */}
                <div className="relative z-10 w-24 h-24 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all flex items-center justify-center shadow-inner">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-tr ${member.gradient} flex items-center justify-center font-display-lg text-2xl font-bold tracking-wider`}>
                      {member.initials}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="relative z-10 space-y-1">
                  <h3 className="font-headline-md text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                {/* LinkedIn link button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
                  title={`Connect with ${member.name} on LinkedIn`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
