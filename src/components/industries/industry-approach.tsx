import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { Industry } from "@/data/industries";

interface IndustryApproachProps {
  industry: Industry;
}

export function IndustryApproach({ industry }: IndustryApproachProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Our Approach"
          title={`How BLACK VAVE Approaches ${industry.title}`}
          description="A disciplined, repeatable engagement method — the same engineering standard in every sector, adapted to how your organisation actually works."
          className="mb-14"
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {industry.approach.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <li className="h-full flex flex-col p-7 sm:p-8 bg-secondary">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-xs text-accent tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-text">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}