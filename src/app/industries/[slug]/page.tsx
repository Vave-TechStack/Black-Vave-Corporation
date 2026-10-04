import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustry, getRelatedIndustries, industries } from "@/data/industries";
import { IndustryHero } from "@/components/industries/industry-hero";
import { IndustryChallenges } from "@/components/industries/industry-challenges";
import { IndustryProducts } from "@/components/industries/industry-products";
import { IndustryServices } from "@/components/industries/industry-services";
import { IndustryApproach } from "@/components/industries/industry-approach";
import { IndustryUseCases } from "@/components/industries/industry-use-cases";
import { IndustryTechnology } from "@/components/industries/industry-technology";
import { IndustryOutcomes } from "@/components/industries/industry-outcomes";
import { IndustryEngagement } from "@/components/industries/industry-engagement";
import { IndustryFAQ } from "@/components/industries/industry-faq";
import { RelatedIndustries } from "@/components/industries/related-industries";
import { IndustryCTA } from "@/components/industries/industry-cta";
import { IndustryTheme } from "@/components/industries/industry-theme";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  const canonical = `/industries/${industry.slug}`;
  const title = `${industry.title} Technology Solutions`;

  return {
    title,
    description: industry.metaDescription,
    alternates: { canonical },
    openGraph: {
      title,
      description: industry.metaDescription,
      type: "website",
      url: canonical,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${industry.title} — BLACK VAVE CORPORATION`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: industry.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

function buildFaqSchema(industry: NonNullable<ReturnType<typeof getIndustry>>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function buildBreadcrumbSchema(industry: NonNullable<ReturnType<typeof getIndustry>>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blackvave.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${siteUrl}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.title,
        item: `${siteUrl}/industries/${industry.slug}`,
      },
    ],
  };
}

function buildServiceSchema(industry: NonNullable<ReturnType<typeof getIndustry>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.title} Technology Solutions`,
    description: industry.metaDescription,
    provider: {
      "@type": "Organization",
      name: "BLACK VAVE CORPORATION PRIVATE LIMITED",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.blackvave.com",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${industry.title} Products`,
      itemListElement: industry.products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: product.title,
          description: product.description,
        },
      })),
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = getRelatedIndustries(industry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(industry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(industry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(industry)) }}
      />

      <IndustryTheme industry={industry}>
        <IndustryHero industry={industry} />
        <IndustryChallenges industry={industry} />
        <IndustryProducts industry={industry} />
        <IndustryServices industry={industry} />
        <IndustryApproach industry={industry} />
        <IndustryUseCases industry={industry} />
        <IndustryTechnology industry={industry} />
        <IndustryOutcomes industry={industry} />
        <IndustryEngagement industry={industry} />
        <IndustryFAQ faqs={industry.faqs} industryTitle={industry.title} />
        <RelatedIndustries related={related} />
        <IndustryCTA industry={industry} />
      </IndustryTheme>
    </>
  );
}