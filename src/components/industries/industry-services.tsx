import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import { services } from "@/data/services";
import type { Industry, ValidServiceSlug } from "@/data/industries";

interface IndustryServicesProps {
  industry: Industry;
}

export function IndustryServices({ industry }: IndustryServicesProps) {
  const related = (industry.services as ValidServiceSlug[])
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="How We Deliver"
          title="Services Applied to This Industry"
          description={`These are the BLACK VAVE service lines we most often combine on ${industry.title.toLowerCase()} engagements.`}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group h-full flex flex-col p-7 border border-border bg-secondary rounded-sm hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon name={service.icon} className="w-5.5 h-5.5 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300 shrink-0" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {service.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}