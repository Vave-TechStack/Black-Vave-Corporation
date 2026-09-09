import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import {
  Code2,
  Brain,
  RefreshCw,
  Cloud,
  Building2,
  BarChart3,
  Monitor,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  RefreshCw,
  Cloud,
  Building2,
  BarChart3,
  Monitor,
};

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Core Services
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                Capabilities Built for Serious Organizations
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group shrink-0"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full p-8 bg-primary hover:bg-surface transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-text-dim border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
