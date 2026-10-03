import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Service } from "@/data/services";

interface ServiceChallengesProps {
  service: Service;
}

export function ServiceChallenges({ service }: ServiceChallengesProps) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="The Challenge"
          title="Business Challenges We Solve"
          description={`Organizations approaching ${service.title.toLowerCase()} face a predictable set of obstacles. Here is what we hear from decision-makers — and what each one costs when left unaddressed.`}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.challenges.map((challenge, index) => (
            <Reveal key={challenge.title} delay={index * 0.06}>
              <article className="group h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon
                      name={challenge.icon}
                      className="w-6 h-6 text-accent"
                    />
                  </div>
                  <span className="text-xs font-mono text-text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
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
