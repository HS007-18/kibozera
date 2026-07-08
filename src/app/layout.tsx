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
    default: "Kibozera | Transform Your Business With Intelligent AI Automation",
    template: "%s | Kibozera",
  },
  description:
    "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering. Based in Tamil Nadu, India.",
  keywords: [
    "AI Automation",
    "Workflow Automation",
    "Enterprise AI",
    "Machine Learning Solutions",
    "Kibozera",
    "Operations Optimization",
    "AI Agents",
    "Business Intelligence",
    "AI automation company India",
    "business process automation startup",
    "custom AI solutions India",
    "AI agents for business",
    "RPA automation",
    "AI integration services",
  ],
  authors: [{ name: "Kibozera Team" }],
  creator: "Kibozera",
  publisher: "Kibozera",
  category: "Technology",
  classification: "AI Automation Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kibozera.com",
    title: "Kibozera | Transform Your Business With Intelligent AI Automation",
    description:
      "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kz.png",
        width: 1200,
        height: 630,
        alt: "Kibozera AI Automation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kibozera | Transform Your Business With Intelligent AI Automation",
    description:
      "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
    images: ["/kz.png"],
  },
  alternates: {
    canonical: "https://www.kibozera.com",
    languages: {
      "en-IN": "https://www.kibozera.com",
    },
  },
  verification: {
    google: "google2237a5bb1077df81",
  },
  robots: {
    index: true,
    follow: true,
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-body-md scrollbar-custom bg-[#050608] text-[#e2e2e8]">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
