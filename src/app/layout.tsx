import type { Metadata } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kibozera.vercel.app"),
  title: {
    default: "Kibozera | Transform Your Business With Intelligent AI Automation",
    template: "%s | Kibozera",
  },
  description: "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
  keywords: ["AI Automation", "Workflow Automation", "Enterprise AI", "Machine Learning Solutions", "Kibozera", "Operations Optimization", "AI Agents", "Business Intelligence"],
  authors: [{ name: "Kibozera Team" }],
  creator: "Kibozera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kibozera.vercel.app",
    title: "Kibozera | Transform Your Business With Intelligent AI Automation",
    description: "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
    siteName: "Kibozera",
    images: [
      {
        url: "/kibo.png",
        width: 1200,
        height: 630,
        alt: "Kibozera AI Automation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kibozera | Transform Your Business With Intelligent AI Automation",
    description: "Kibozera builds AI-powered automation systems that reduce manual work, optimize operations, and help businesses scale faster through precision engineering.",
    images: ["/kibo.png"],
  },
  alternates: {
    canonical: "https://kibozera.vercel.app",
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
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
