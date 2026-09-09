import { organizationSchema, websiteSchema } from "@/lib/metadata";
import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/home/trust-section";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { SolutionsPreview } from "@/components/home/solutions-preview";
import { IndustriesPreview } from "@/components/home/industries-preview";
import { ProcessSection } from "@/components/home/process-section";
import { TechnologyEcosystem } from "@/components/home/technology-ecosystem";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { InsightsPreview } from "@/components/home/insights-preview";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ServicesPreview />
      <SolutionsPreview />
      <IndustriesPreview />
      <TechnologyEcosystem />
      <ProcessSection />
      <CaseStudiesSection />
      <InsightsPreview />
      <CTASection />
    </>
  );
}
