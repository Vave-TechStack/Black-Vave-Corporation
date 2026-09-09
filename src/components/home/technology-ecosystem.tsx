import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const layers = [
  {
    title: "Frontend",
    slug: "frontend",
    description: "Interfaces engineered for clarity, speed and exceptional user experience.",
    technologies: ["React", "Next.js", "Angular", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend & APIs",
    slug: "backend",
    description: "Reliable services, data models and integration points that power your systems.",
    technologies: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    title: "Data & Infrastructure",
    slug: "data",
    description: "Robust databases, cloud platforms and DevOps practices that keep you operational.",
    technologies: ["PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    title: "Intelligence",
    slug: "intelligence",
    description: "Generative AI, automation and decision systems that make businesses smarter.",
    technologies: ["Generative AI", "LLM Integration", "AI Agents", "Document Intelligence", "Automation"],
  },
];

export function TechnologyEcosystem() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Technology
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                An Ecosystem, Not a Logo Wall
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                We treat technology as an integrated ecosystem — choosing and
                combining the right tools for each layer of your digital stack.
              </p>
            </div>
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group shrink-0"
            >
              Explore Our Stack
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((layer, index) => (
            <Reveal key={layer.slug} delay={index * 0.08}>
              <div className="h-full p-8 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold text-text">
                    {layer.title}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {layer.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {layer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-text-dim border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
