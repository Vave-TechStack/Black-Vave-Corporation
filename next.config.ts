import type { NextConfig } from "next";

/**
 * Content-Security-Policy notes (verified requirements):
 * - 'unsafe-inline' for script-src: Next.js App Router hydration relies on
 *   inline scripts (self.__next_f payload) in the default `next start`
 *   hosting model. A nonce-based policy requires an edge/proxy layer that
 *   injects per-request nonces; that is documented as a deployment
 *   hardening step.
 * - 'unsafe-inline' for style-src: Framer Motion applies inline styles
 *   (transform/opacity) to animated elements.
 * - googletagmanager.com / google-analytics.com are allowed only so the
 *   optional GA4/GTM integration (inert until env vars are configured)
 *   works when enabled.
 * - No 'unsafe-eval' anywhere.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
  "frame-src https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()",
          },
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-DNS-Prefetch-Control", value: "off" },
        ],
      },
    ];
  },
};

export default nextConfig;
