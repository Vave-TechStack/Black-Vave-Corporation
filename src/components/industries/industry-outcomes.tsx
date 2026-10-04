import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface IndustryOutcomesProps {
  industry: Industry;
}

export function IndustryOutcomes({ industry }: IndustryOutcomesProps) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="Business Outcomes"
          title={`What You Can Expect From ${industry.title} Projects`}
          description="The results we work toward with every engagement in this sector — stated plainly, without invented statistics."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.outcomes.map((outcome, index) => (
            <Reveal key={outcome.title} delay={index * 0.05}>
              <article className="group h-full flex flex-col p-7 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon name={outcome.icon} className="w-5.5 h-5.5 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {outcome.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {outcome.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}