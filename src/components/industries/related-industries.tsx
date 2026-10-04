import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface RelatedIndustriesProps {
  related: Industry[];
}

export function RelatedIndustries({ related }: RelatedIndustriesProps) {
  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Related Industries"
          title="Explore Other Sectors We Serve"
          description="Our engineering standards stay the same across sectors. What changes is the domain context we bring to each one."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 0.06}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group h-full flex flex-col p-7 border border-border bg-primary rounded-sm hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon name={industry.icon} className="w-5.5 h-5.5 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300 shrink-0" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {industry.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border-light text-text font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
            >
              All Industries
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}