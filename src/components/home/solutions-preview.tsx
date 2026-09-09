import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { solutions } from "@/data/solutions";

export function SolutionsPreview() {
  const preview = solutions.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-secondary border-b border-border">
      <div className="container-main">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Solutions
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                Solutions That Solve Real Business Problems
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group shrink-0"
            >
              Explore All Solutions
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map((solution, index) => (
            <Reveal key={solution.slug} delay={index * 0.06}>
              <Link
                href={`/solutions#${solution.slug}`}
                className="group flex flex-col h-full p-8 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300" />
                </div>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {solution.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs text-text-dim border border-border rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
