import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface IndustryChallengesProps {
  industry: Industry;
}

export function IndustryChallenges({ industry }: IndustryChallengesProps) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="Industry Challenges"
          title={`What Makes ${industry.title} Hard`}
          description={industry.description}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.challenges.map((challenge, index) => (
            <Reveal key={challenge.title} delay={index * 0.04}>
              <article className="group h-full flex flex-col p-7 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                  <ServiceIcon name={challenge.icon} className="w-5.5 h-5.5 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {challenge.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}