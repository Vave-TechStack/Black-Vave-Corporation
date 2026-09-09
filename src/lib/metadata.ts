import type { Metadata } from "next";

const SITE_NAME = "BLACK VAVE CORPORATION PRIVATE LIMITED";
const SITE_URL = "https://www.blackvave.com";

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Engineering Intelligent Digital Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "BLACK VAVE CORPORATION helps organizations build, modernize, automate, and scale digital businesses through software engineering, AI, automation, cloud technologies, and strategic technology solutions.",
  keywords: [
    "digital transformation",
    "software engineering",
    "AI solutions",
    "enterprise applications",
    "cloud infrastructure",
    "automation",
    "business technology",
    "BLACK VAVE",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Engineering Intelligent Digital Solutions`,
    description:
      "BLACK VAVE CORPORATION helps organizations build, modernize, automate, and scale digital businesses through software engineering, AI, automation, cloud technologies, and strategic technology solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Engineering Intelligent Digital Solutions`,
    description:
      "BLACK VAVE CORPORATION helps organizations build, modernize, automate, and scale digital businesses.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: SITE_URL,
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/BVC Logo.png`,
  description:
    "BLACK VAVE CORPORATION is a modern technology and business solutions company building intelligent digital products, software, AI-powered solutions, automation, digital transformation, and specialized technology services for businesses.",
  sameAs: [] as string[],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/insights?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
