import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Kibozera AI Automation",
  description: "The page you are looking for doesn't exist. Return to Kibozera's homepage to explore our AI automation services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-5 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
          404 — PAGE NOT FOUND
        </div>
        <h1 className="font-display-lg text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
          Head back to Kibozera&apos;s AI automation platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-bold hover:scale-105 transition-all cursor-pointer">
              Back to Home
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-4 border border-white/10 hover:border-white/30 rounded-xl font-bold transition-all bg-white/5 hover:scale-105 cursor-pointer">
              View AI Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-4 border border-primary/30 hover:border-primary text-primary hover:bg-primary/5 rounded-xl font-bold transition-all cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
