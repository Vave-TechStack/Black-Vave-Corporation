import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService, getRelatedServices } from "@/data/services";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceChallenges } from "@/components/services/service-challenges";
import { ServiceApproach } from "@/components/services/service-approach";
import { ServiceDetailVisual } from "@/components/services/service-detail-visuals";
import { ServiceCapabilities } from "@/components/services/service-capabilities";
import { ServiceUseCases } from "@/components/services/service-use-cases";
import { ServicePerspectives } from "@/components/services/service-perspectives";
import { ServiceTechnologyStack } from "@/components/services/service-technology-stack";
import { ServiceOutcomes } from "@/components/services/service-outcomes";
import { ServiceEngagementModels } from "@/components/services/service-engagement-models";
import { ServiceFAQ } from "@/components/services/service-faq";
import { RelatedServices } from "@/components/services/related-services";
import { ServiceCTA } from "@/components/services/service-cta";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const canonical = `/services/${service.slug}`;

  return {
    title: `${service.title} Services`,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} Services`,
      description: service.metaDescription,
      type: "website",
      url: canonical,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} — BLACK VAVE CORPORATION`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services`,
      description: service.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

function buildFaqSchema(service: NonNullable<ReturnType<typeof getService>>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(
  service: NonNullable<ReturnType<typeof getService>>
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blackvave.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const faqSchema = buildFaqSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceHero service={service} />
      <ServiceChallenges service={service} />
      <ServiceApproach service={service} />
      <ServiceDetailVisual slug={service.slug} />
      <ServiceCapabilities service={service} />
      <ServiceUseCases service={service} />
      {service.perspectives && service.perspectives.length > 0 && (
        <ServicePerspectives perspectives={service.perspectives} />
      )}
      <ServiceTechnologyStack service={service} />
      <ServiceOutcomes service={service} />
      <ServiceEngagementModels service={service} />
      <ServiceFAQ faqs={service.faqs} serviceTitle={service.title} />
      <RelatedServices current={service} related={related} />
      <ServiceCTA service={service} />
    </>
  );
}
