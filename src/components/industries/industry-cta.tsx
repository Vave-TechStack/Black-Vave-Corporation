import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/data/industries";

interface IndustryCTAProps {
  industry: Industry;
}

export function IndustryCTA({ industry }: IndustryCTAProps) {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-sm border border-accent/30 bg-accent/5 p-8 sm:p-12 md:p-16">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(200,160,96,0.10) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-5 text-balance">
              Let&apos;s Build Your {industry.title} Technology Roadmap
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Tell us where {industry.title.toLowerCase()} technology is holding your
              organization back. We&apos;ll assess the landscape, identify the highest-impact
              opportunities and outline a practical path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold text-base rounded-sm hover:bg-accent-light transition-colors duration-300 group"
              >
                Talk to Our {industry.title} Team
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold text-base rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}