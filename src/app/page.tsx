import Hero from "@/components/sections/Hero";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreCapabilities limit={3} />
      <CTA />
    </>
  );
}
