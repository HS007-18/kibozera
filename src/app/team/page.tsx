import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Our Team | AI Automation Startup",
  description:
    "Meet the founding team behind Kibozera: visionary engineers, product strategists, and business leaders driving AI automation innovation.",
};

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden">
      <Team />
      <CTA />
    </div>
  );
}
