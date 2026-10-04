import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface IndustryEngagementProps {
  industry: Industry;
}

export function IndustryEngagement({ industry }: IndustryEngagementProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Engagement Models"
          title="How We Work With You"
          description="Three ways to start. The right choice depends on how much is already defined and how quickly you need to see results."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.engagementModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.06}>
              <article className="group h-full flex flex-col p-7 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                  <ServiceIcon name={model.icon} className="w-5.5 h-5.5 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {model.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {model.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300 group"
            >
              Discuss Your {industry.title} Project
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}