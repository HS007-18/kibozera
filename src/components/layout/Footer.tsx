import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-white/5 mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter max-w-container-max mx-auto px-margin-desktop">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            {/* Logo Placeholder */}
            <div className="h-6 w-24 bg-white/5 border border-dashed border-white/20 rounded flex items-center justify-center">
              <span className="text-[9px] uppercase tracking-wider text-on-surface-variant font-label-sm">Logo Space</span>
            </div>
            <span className="text-headline-md font-headline-md font-bold text-primary">Sylvie</span>
          </div>
          <p className="text-on-surface-variant text-sm mb-6 max-w-xs leading-relaxed">
            Pioneering the next era of business intelligence through sophisticated AI automation and precise engineering.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-primary">Product</h5>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="/services" className="hover:text-primary transition-colors">Automation</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Security</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">API</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-primary">Company</h5>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Privacy</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 mt-8 md:mt-0">
          <h5 className="font-bold mb-6 text-primary">Terms</h5>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Legal Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-on-surface-variant text-xs opacity-50">© {new Date().getFullYear()} Sylvie AI. Precision. Intelligence. Power.</p>
      </div>
    </footer>
  );
}
