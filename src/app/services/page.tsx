import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BLACK VAVE CORPORATION's enterprise capabilities: software engineering, AI & automation, digital transformation, cloud & DevOps, enterprise applications, data & analytics and digital experience.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities Built for Serious Organizations"
        description="From software engineering to AI-powered automation, we deliver the technology capabilities enterprises need to build, modernize and scale."
      />

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  tagline={service.tagline}
                  icon={service.icon}
                  technologies={service.technologies}
                >
                  {service.description}
                </ServiceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        description="Discuss your project with our team. We'll help you identify the right capabilities for your specific business challenge."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Explore Our Solutions"
      />
    </>
  );
}
