import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface IndustryProductsProps {
  industry: Industry;
}

export function IndustryProducts({ industry }: IndustryProductsProps) {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary border-y border-border scroll-mt-24">
      <div className="container-main">
        <SectionHeader
          eyebrow="Products & Platforms"
          title={`${industry.title} Products We Build`}
          description="Complete, production-ready products engineered for this sector — each one scoped, built, integrated and supported end-to-end."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.products.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.04}>
              <article className="group h-full flex flex-col p-7 sm:p-8 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                    <ServiceIcon name={product.icon} className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="mt-auto space-y-2.5 pt-5 border-t border-border">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{feature}</span>
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