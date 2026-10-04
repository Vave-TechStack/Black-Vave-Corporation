import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface IndustryUseCasesProps {
  industry: Industry;
}

export function IndustryUseCases({ industry }: IndustryUseCasesProps) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="Use Cases"
          title={`Where We Apply ${industry.title} Technology`}
          description="Real problems our products and services solve for organizations operating in this sector."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 0.04}>
              <article className="group h-full flex flex-col p-7 border-l-2 border-border hover:border-accent bg-secondary transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <ServiceIcon
                    name={useCase.icon}
                    className="w-5 h-5 text-accent shrink-0"
                  />
                  <h3 className="text-base font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {useCase.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}