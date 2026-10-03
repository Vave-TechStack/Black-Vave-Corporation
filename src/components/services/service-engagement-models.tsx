import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Service } from "@/data/services";

interface ServiceEngagementModelsProps {
  service: Service;
}

export function ServiceEngagementModels({
  service,
}: ServiceEngagementModelsProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Engagement Models"
          title="Ways to Work With Us"
          description="Every engagement is shaped around your goals, timeline and internal capacity. Choose the model that fits — or start with advisory and decide as you go."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.engagementModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.06}>
              <article className="group h-full flex gap-6 p-8 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="shrink-0 w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                  <ServiceIcon
                    name={model.icon}
                    className="w-6 h-6 text-accent"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2.5 group-hover:text-accent transition-colors duration-300">
                    {model.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {model.description}
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300 group"
            >
              Discuss Your Requirements
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
