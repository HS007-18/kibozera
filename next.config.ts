import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Performance ────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,         // Remove X-Powered-By: Next.js (minor security + no leaking)
  generateEtags: true,             // Enable ETags for efficient cache revalidation

  // ── Image Optimization ────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],     // AVIF first (smaller), WebP fallback
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,        // 24h minimum cache for optimized images
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── HTTP Headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        // Security + SEO headers for all pages
        source: "/(.*)",
        headers: [
          // ── SEO ──
          { key: "X-Robots-Tag", value: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },

          // ── Security (also signals trust to Google) ──
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
      {
        // Long-lived immutable cache for hashed static assets
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public images for 7 days with stale-while-revalidate
        source: "/(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|gif))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Cache fonts aggressively
        source: "/(.*\\.(?:woff|woff2|ttf|otf|eot))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // sitemap and robots — short cache so updates propagate quickly
        source: "/(sitemap.xml|robots.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // ── Redirects (www enforcement) ────────────────────────────────────────
  async redirects() {
    return [
      // Redirect non-www to www (canonical authority)
      {
        source: "/(.*)",
        has: [{ type: "host", value: "kibozera.com" }],
        destination: "https://www.kibozera.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
