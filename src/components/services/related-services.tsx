import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Service } from "@/data/services";

interface RelatedServicesProps {
  current: Service;
  related: Service[];
}

export function RelatedServices({ current, related }: RelatedServicesProps) {
  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Related Services"
          title="Complementary Capabilities"
          description={`Services that pair with ${current.title} for end-to-end delivery.`}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.07}>
              <Link
                href={`/services/${service.slug}`}
                className="group h-full flex flex-col p-8 border border-border bg-primary rounded-sm hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon
                      name={service.icon}
                      className="w-6 h-6 text-accent"
                    />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent font-semibold">
                  Explore This Service
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
