import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart, GraduationCap, DollarSign, ShoppingBag, BookOpen, Factory, Building, Briefcase, Leaf, Rocket, Globe, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/data/industries";
import { CTASection } from "@/components/cta-section";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  GraduationCap,
  DollarSign,
  ShoppingBag,
  BookOpen,
  Factory,
  Building,
  Briefcase,
  Leaf,
  Rocket,
  Globe,
};

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
              const Icon = iconMap[industry.icon] ?? Globe;
              return (
                <Reveal key={industry.slug} delay={index * 0.04}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex items-start gap-5 p-8 bg-primary hover:bg-surface transition-colors duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                          {industry.title}
                        </h2>
                        <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-accent transition-colors duration-300 shrink-0" />
                      </div>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed">
                        {industry.description}
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
