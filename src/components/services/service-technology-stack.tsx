import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { Service } from "@/data/services";

interface ServiceTechnologyStackProps {
  service: Service;
}

export function ServiceTechnologyStack({
  service,
}: ServiceTechnologyStackProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Technology, Chosen Deliberately"
          description="We select technologies per engagement based on your team, scale requirements and long-term maintainability — not from a fixed menu. The categories below reflect how we typically compose this discipline."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.technologyCategories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.05}>
              <div className="h-full p-7 border border-border bg-primary rounded-sm hover:border-accent/30 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-[0.15em] mb-5">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-2 text-sm text-text-muted border border-border rounded-full bg-secondary hover:text-accent hover:border-accent/40 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-sm text-text-dim leading-relaxed max-w-3xl">
            Technology partnerships are evaluated independently for each
            engagement. BLACK VAVE does not hold official vendor partnerships,
            certifications or endorsements with the platforms listed — they are
            tools we use to deliver engineering outcomes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
