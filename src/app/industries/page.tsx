import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/icon-map";
import { industries } from "@/data/industries";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore how BLACK VAVE CORPORATION applies disciplined technology thinking to the specific challenges of healthcare, education, financial services, retail, publishing, manufacturing and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Deep Expertise Across Sectors"
        description="We apply disciplined technology thinking to the specific challenges each industry faces — combining domain understanding with engineering excellence."
      />

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {industries.map((industry, index) => {
              const { accent, accentLight, accentDark, tint } = industry.theme;
              // Re-points the global accent variables at this industry's own
              // palette, so every accent utility on the card (icon tint, border,
              // hover title colour, arrow) resolves to that sector's colours.
              const cardTheme = {
                "--color-accent": accent,
                "--color-accent-light": accentLight,
                "--color-accent-dark": accentDark,
              } as CSSProperties;

              return (
                <Reveal key={industry.slug} delay={index * 0.04}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    style={cardTheme}
                    className="group relative flex items-start gap-5 p-8 pt-9 bg-primary hover:bg-surface transition-colors duration-300 h-full overflow-hidden"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${accentDark}, ${accent}, ${accentLight})`,
                      }}
                    />
                    <div
                      className="w-12 h-12 rounded-md flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{
                        backgroundColor: tint,
                        border: `1px solid color-mix(in srgb, ${accent} 22%, transparent)`,
                      }}
                    >
                      <ServiceIcon name={industry.icon} className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                          {industry.title}
                        </h2>
                        <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-accent transition-colors duration-300 shrink-0" />
                      </div>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed">
                        {industry.tagline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
