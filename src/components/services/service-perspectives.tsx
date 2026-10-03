import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Perspective } from "@/data/services";

interface ServicePerspectivesProps {
  perspectives: Perspective[];
}

export function ServicePerspectives({
  perspectives,
}: ServicePerspectivesProps) {
  if (!perspectives || perspectives.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="Understanding the Landscape"
          title="Choosing the Right Level of Intelligence"
          description="Not every process needs the same level of automation. Understanding the spectrum helps you invest where the return is real."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perspectives.map((perspective, index) => (
            <Reveal key={perspective.title} delay={index * 0.08}>
              <article className="group h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  <ServiceIcon
                    name={perspective.icon}
                    className="w-6 h-6 text-accent"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {perspective.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                  {perspective.description}
                </p>
                <ul className="space-y-2.5">
                  {perspective.traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-center gap-2.5 text-xs text-text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
