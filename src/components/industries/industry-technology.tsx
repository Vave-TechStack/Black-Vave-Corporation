import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { Industry } from "@/data/industries";

interface IndustryTechnologyProps {
  industry: Industry;
}

export function IndustryTechnology({ industry }: IndustryTechnologyProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow="Technology & Standards"
          title={`Technology Stack for ${industry.title}`}
          description="Proven, current technologies chosen for this sector's specific requirements rather than general-purpose defaults."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.technologyCategories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.05}>
              <div className="h-full p-7 border border-border bg-primary rounded-sm">
                <h3 className="text-base font-heading font-semibold text-text mb-4">
                  {category.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 text-xs text-text-muted border border-border rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {industry.compliance.length > 0 && (
            <Reveal delay={industry.technologyCategories.length * 0.05}>
              <div className="h-full p-7 border border-accent/30 bg-accent/5 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="text-base font-heading font-semibold text-text">
                    Compliance & Regulatory Alignment
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {industry.compliance.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-text-muted"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}