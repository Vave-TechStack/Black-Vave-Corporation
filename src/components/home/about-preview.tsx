import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const timeline = [
  "Vision",
  "Strategy",
  "Design",
  "Engineering",
  "Deployment",
  "Growth",
];

const values = [
  {
    title: "Integrity",
    description: "Honesty and transparency in every engagement, decision and outcome.",
  },
  {
    title: "Excellence",
    description: "A relentless standard of quality in engineering, design and delivery.",
  },
  {
    title: "Impact",
    description: "Technology measured by the value it creates for businesses and people.",
  },
  {
    title: "Partnership",
    description: "Long-term relationships built on mutual success and shared accountability.",
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                About BLACK VAVE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                Technology With Purpose. Built for Scale.
              </h2>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                BLACK VAVE CORPORATION is a technology organization dedicated to
                helping businesses transform ideas into reliable digital products
                and systems. We combine engineering discipline, strategic thinking
                and intelligent automation to build technology that delivers
                measurable business outcomes.
              </p>
              <p className="mt-4 text-base text-text-muted leading-relaxed">
                From enterprise applications to AI-powered automation, we work as a
                trusted technology partner committed to the long-term success of
                the organizations we serve.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:gap-3 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-6">
                  The Lifecycle of Every Engagement
                </h3>
                <ol className="space-y-0">
                  {timeline.map((phase, index) => (
                    <li
                      key={phase}
                      className="flex items-center gap-4 py-3 border-b border-border last:border-0"
                    >
                      <span className="font-mono text-xs text-accent w-6">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-text font-medium">{phase}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="p-6 border border-border bg-secondary rounded-sm">
                <h4 className="text-lg font-semibold text-text mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
