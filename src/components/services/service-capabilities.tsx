import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Service } from "@/data/services";

interface ServiceCapabilitiesProps {
  service: Service;
}

export function ServiceCapabilities({ service }: ServiceCapabilitiesProps) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="Core Capabilities"
          title={`${service.title} Capabilities`}
          description="Each capability is delivered end-to-end — scoped, engineered, integrated and supported — not handed off as an isolated deliverable."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.04}>
              <article className="group h-full flex flex-col p-7 border border-border bg-secondary rounded-sm hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon
                      name={capability.icon}
                      className="w-5.5 h-5.5 text-accent"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {capability.description}
                </p>
                {capability.technologies && capability.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {capability.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] text-text-dim border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
