import Link from "next/link";
import { ArrowUpRight, ArrowRight, Heart, GraduationCap, DollarSign, ShoppingBag, BookOpen, Factory, Building, Briefcase, Leaf, Rocket, Globe, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/data/industries";

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

export function IndustriesPreview() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Industries
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                Deep Expertise Across Sectors
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                We apply disciplined technology thinking to the specific challenges
                of each industry we serve.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group shrink-0"
            >
              All Industries
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? Globe;
            return (
              <Reveal key={industry.slug} delay={index * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col items-center justify-center text-center gap-4 p-4 sm:p-6 lg:p-8 bg-primary hover:bg-surface transition-colors duration-300 min-h-[160px]"
                >
                  <Icon className="w-8 h-8 text-accent transition-transform group-hover:scale-110 duration-300" />
                  <span className="text-sm font-medium text-text group-hover:text-accent transition-colors duration-300 break-words hyphens-auto">
                    {industry.title}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
