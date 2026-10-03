import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { Service } from "@/data/services";

interface ServiceApproachProps {
  service: Service;
}

export function ServiceApproach({ service }: ServiceApproachProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Our Approach"
          title="A Methodology Tailored to This Service"
          description={`Our ${service.title} engagement follows a disciplined, six-stage methodology — adapted to the specific demands of this discipline rather than a generic process.`}
          className="mb-16"
        />

        <ol className="relative space-y-12 before:absolute before:left-[27px] before:top-8 before:bottom-8 before:w-px before:bg-border">
          {service.approach.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <li className="relative flex gap-6 md:gap-8">
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-primary border border-accent/40 flex items-center justify-center">
                  <span className="font-mono text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pt-1.5 max-w-2xl">
                  <p className="text-xs font-mono text-accent/70 uppercase tracking-[0.15em] mb-1.5">
                    Stage {index + 1} of {service.approach.length}
                  </p>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
