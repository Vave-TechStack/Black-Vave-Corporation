# BLACK VAVE CORPORATION

> Engineering Intelligent Digital Solutions for a Changing World.

**BLACK VAVE CORPORATION PRIVATE LIMITED** is a modern technology and business solutions company building intelligent digital products, software, AI-powered solutions, automation, digital transformation, and specialized technology services for businesses.

This repository contains the production-ready corporate website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **React Hook Form**.

---

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Framework | Next.js 15 (App Router, SSG/SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Fonts | Manrope (headings) / Inter (body) — self-hosted via `next/font` |

---

## Features

### Pages
- **Home** — animated hero with canvas wave ribbons, trust pillars, services, solutions, industries, technology ecosystem, process, insights
- **About** — vision, mission, values, engineering mindset, lifecycle timeline, leadership (placeholder)
- **Services** — 7 enterprise capabilities with individual detail pages
- **Solutions** — 10 solution categories
- **Industries** — 11 industry detail pages
- **Technology** — ecosystem-based stack categorization
- **Insights** — SEO-friendly knowledge hub with search, categories, articles & related content
- **Careers** — positions, culture, learning, internships
- **Contact** — validated enquiry form + contact information
- **Legal** — Privacy, Terms, Cookies, Accessibility statement
- **404** — custom not-found page

### Brand & Design
- Existing **BLACK VAVE logo** used as the visual anchor (not redesigned)
- Gold accent (`#C8A060`) **extracted directly from the logo asset**
- Black + Graphite + White + Metallic Gold visual system
- Mobile-first responsive (320px → ultrawide), accessible (WCAG 2.2 AA), reduced-motion aware

### Engineering
- 100% statically generated routes (`generateStaticParams`) for fast core-web-vitals performance
- Per-page SEO: unique titles, meta descriptions, canonical URLs, Open Graph / Twitter
- Structured data: Organization + WebSite (homepage), Article (insights), Breadcrumb schema
- `sitemap.xml` + `robots.txt`
- WebP/AVIF image formats, lazy loading (via `next/image`)
- GA4 / Google Tag Manager analytics wired to environment variables (inert until configured)
- Favicon + branded Open Graph image generated from the logo

---

## Getting Started

### Prerequisites
- Node.js 18.18+ / 20+
- npm

### Installation

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

---

## Environment Configuration

Copy `.env.example` to `.env.local` and fill in real values.

```bash
NEXT_PUBLIC_SITE_URL=https://www.blackvave.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=      # Google Analytics 4 (optional)
NEXT_PUBLIC_GTM_ID=                 # Google Tag Manager (optional)
CONTACT_API_URL=                    # Backend contact endpoint (when provisioned)
CONTACT_RECIPIENT_EMAIL=            # Contact form recipient
FORM_SECRET=                        # Server-side secret for form signing
```

> **Note:** Analytics scripts are only injected when IDs are set. No secrets are exposed to the frontend.

---

## Site Configuration

The default site URL used for canonical URLs, sitemaps and structured data is `https://www.blackvave.com`. Override it with `NEXT_PUBLIC_SITE_URL`.

Content is driven by data modules in `src/data/`:

| Module | Purpose |
| ------ | ------- |
| `services.ts` | Core service definitions |
| `solutions.ts` | Solution categories |
| `industries.ts` | Industry definitions |
| `insights.ts` | Blog / knowledge articles |
| `careers.ts` | Open positions |
| `footer.ts` | Footer navigation |
| `navigation.ts` | Primary navigation |

Reusable components live in `src/components/` and are prop-driven so future admins (via a headless CMS) can drive content without code changes.

---

## Contact

- **Corporate Email:** contact@blackvave.com
- **Phone:** (placeholder)
- **Office:** India (Headquarters)

---

## License

© BLACK VAVE CORPORATION PRIVATE LIMITED. All rights reserved.
