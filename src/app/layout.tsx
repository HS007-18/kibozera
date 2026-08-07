import type { Metadata } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kibozera.com"),
  title: {
    default: "Kibozera | AI Automation Company India — Intelligent Business Automation",
    template: "%s | Kibozera AI Automation",
  },
  description:
    "Kibozera is India's leading AI automation company. We build AI agents, workflow automation, RPA, and custom AI solutions that reduce manual work and help businesses scale faster. Based in Tamil Nadu — serving clients worldwide.",
  keywords: [
    // Brand
    "Kibozera",
    "Kibozera AI",
    "Kibozera automation",
    "Kibozera services",
    // Core service keywords
    "AI automation company India",
    "AI automation startup India",
    "workflow automation India",
    "business process automation India",
    "AI agents India",
    "RPA automation India",
    "intelligent automation India",
    "enterprise AI solutions India",
    // Long-tail
    "AI automation company Tamil Nadu",
    "AI automation Tiruppur",
    "custom AI solutions India",
    "AI integration services India",
    "machine learning solutions India",
    "AI chatbot development India",
    "computer vision solutions India",
    "cloud AI infrastructure India",
    "AI marketing automation India",
    // Generic high-value
    "AI automation",
    "workflow automation",
    "business automation",
    "AI agents",
    "machine learning solutions",
    "enterprise AI",
    "operations optimization AI",
    "data intelligence platform",
  ],
  authors: [{ name: "Kibozera Team", url: "https://www.kibozera.com/about" }],
  creator: "Kibozera",
  publisher: "Kibozera",
  category: "Technology",
  classification: "AI Automation Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://www.kibozera.com",
    title: "Kibozera | AI Automation Company India — Intelligent Business Automation",
    description:
      "Kibozera builds AI-powered automation systems — AI agents, workflow automation, RPA, and custom AI solutions that reduce manual work and help businesses scale. Based in Tamil Nadu, India.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "Kibozera — AI Automation Company India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kibozera",
    creator: "@kibozera",
    title: "Kibozera | AI Automation Company India",
    description:
      "AI agents, workflow automation, RPA, and custom AI solutions. Kibozera helps businesses eliminate manual work and scale with precision AI engineering.",
    images: ["/kz.png"],
  },
  alternates: {
    canonical: "https://www.kibozera.com",
    languages: {
      "x-default": "https://www.kibozera.com",
      "en": "https://www.kibozera.com",
      "en-IN": "https://www.kibozera.com",
    },
  },
  verification: {
    google: "google2237a5bb1077df81",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tiruppur, Tamil Nadu",
    "geo.position": "11.1085;77.3411",
    ICBM: "11.1085, 77.3411",
    "theme-color": "#b8c3ff",
    "msapplication-TileColor": "#050608",
    "application-name": "Kibozera",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geist.variable} dark h-full antialiased`}
    >
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Material Symbols font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Preload hero image for LCP */}
        <link rel="preload" as="image" href="/kz.png" fetchPriority="high" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#b8c3ff" />
        <meta name="msapplication-navbutton-color" content="#050608" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-body-md scrollbar-custom bg-[#050608] text-[#e2e2e8]">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
