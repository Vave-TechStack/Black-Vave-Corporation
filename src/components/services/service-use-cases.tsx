import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Service } from "@/data/services";

interface ServiceUseCasesProps {
  service: Service;
}

export function ServiceUseCases({ service }: ServiceUseCasesProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Solutions & Use Cases"
          title="Where This Service Creates Value"
          description="Practical applications of this capability — the engagements we most often deliver for organizations like yours."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 0.06}>
              <article className="group relative h-full flex gap-6 p-8 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300 overflow-hidden">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div className="shrink-0 w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                  <ServiceIcon
                    name={useCase.icon}
                    className="w-6 h-6 text-accent"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
            >
              Discuss a Use Case for Your Organization
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
