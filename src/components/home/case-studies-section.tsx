import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

export function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Case Studies
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                Outcomes We Deliver
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Real engagements, real results — documented with the discipline
                our clients expect.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="group h-full flex flex-col p-8 border border-dashed border-border bg-primary rounded-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Lock className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  Coming Soon
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  We are documenting a portfolio of real client outcomes.
                  Case studies will be published here as they become available,
                  with full detail on challenge, solution, architecture and
                  measured results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 text-accent text-sm font-semibold hover:gap-3 transition-all"
                >
                  Discuss Your Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
