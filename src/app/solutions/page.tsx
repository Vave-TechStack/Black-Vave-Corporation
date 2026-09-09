import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { solutions } from "@/data/solutions";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore BLACK VAVE CORPORATION's solution categories: AI business automation, enterprise workflow platforms, custom applications, digital commerce, customer experience, HR, healthcare, education, publishing and data analytics.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions That Solve Real Business Problems"
        description="We build solutions by category — combining the right technology with proven approaches to address specific business challenges across industries."
      />

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 0.05}>
                <div
                  id={solution.slug}
                  className="group h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300 scroll-mt-24"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                      {solution.title}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <p className="text-base text-text-muted leading-relaxed mb-6 flex-grow">
                    {solution.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
                      Key Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs text-text-muted border border-border rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-text-dim mr-1">Built for:</span>
                    {solution.industries.map((industry) => (
                      <span
                        key={industry}
                        className="text-xs text-accent/80 border border-accent/20 rounded-full px-3 py-1"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Specific Challenge in Mind?"
        description="Talk to our team about which solution fits your organization's needs and how we can design a custom approach."
        primaryLabel="Discuss Your Project"
        secondaryLabel="Explore Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
