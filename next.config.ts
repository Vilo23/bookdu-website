import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // CSP starts in Report-Only — observe violations in browser console / network for ~1 week,
    // then promote to enforcing. Allow inline scripts for JSON-LD + PostHog SDK; allow inline
    // styles for framer-motion / Next.js style injection.
    const cspReportOnly = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://us.i.posthog.com https://us-assets.i.posthog.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://us.i.posthog.com https://us-assets.i.posthog.com",
      "connect-src 'self' https://us.i.posthog.com https://us-assets.i.posthog.com",
      "font-src 'self' data:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          // 1 year + includeSubDomains; intentionally NO preload (preload is hard to unwind
          // and locks every future subdomain into HTTPS).
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bookdu.co" }],
        destination: "https://bookdu.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
