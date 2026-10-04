import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ServiceIcon } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";
import { IndustryArtwork } from "@/components/industries/industry-artwork";
import type { Industry } from "@/data/industries";

interface IndustryHeroProps {
  industry: Industry;
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  const { accent } = industry.theme;

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 bg-primary overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 70% 10%, color-mix(in srgb, ${accent} 12%, transparent) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(color-mix(in srgb, ${accent} 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, ${accent} 8%, transparent) 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 0%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 30%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-main">
        <div className="mb-8">
          <Breadcrumbs
            items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center xl:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <ServiceIcon name={industry.icon} className="w-7 h-7 text-accent" />
              </div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                {industry.title}
              </p>
            </div>

            <h1 className="text-[31px] md:text-[43px] lg:text-[55px] font-bold text-text max-w-4xl leading-tight text-balance">
              {industry.hero.headline}
            </h1>

            <p className="mt-6 text-[13px] md:text-[15px] text-text-muted max-w-3xl leading-relaxed">
              {industry.hero.subheadline}
            </p>
          </div>

          <div className="hidden lg:block" aria-hidden="true">
            <IndustryArtwork
              industry={industry}
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>

        {industry.stats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {industry.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.05}>
                <div className="h-full flex flex-col justify-center gap-1 p-5 sm:p-6 bg-primary">
                  <p className="text-xl sm:text-2xl font-heading font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted leading-snug">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold text-base rounded-sm hover:bg-accent-light transition-colors duration-300 group"
          >
            Talk to Our {industry.title} Team
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold text-base rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}