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
 * - No 'unsafe-eval' in production. `next dev` DOES require it: the dev
 *   runtime evaluates source strings for React Fast Refresh and Framer
 *   Motion. Without it the dev runtime throws EvalError, Framer Motion
 *   never initialises, every <Reveal> stays at opacity 0 and the whole
 *   site renders blank. It is therefore allowed only when NODE_ENV is
 *   development, so the shipped build keeps the strict policy.
 */
const isDev = process.env.NODE_ENV === "development";

const SCRIPT_SRC = [
  "'self'",
  "'unsafe-inline'",
  ...(isDev ? ["'unsafe-eval'"] : []),
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
].join(" ");

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src ${SCRIPT_SRC}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com",
  "font-src 'self'",
  // dev additionally needs the HMR websocket and on-demand recompile endpoint
  `connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com${
    isDev ? " ws: wss:" : ""
  }`,
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
