import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/cta-section";
import { Globe, Users, Database, Cloud, Cpu, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore the BLACK VAVE technology ecosystem — frontend, backend, databases, cloud, AI and DevOps treated as an integrated stack, not a logo wall.",
  alternates: { canonical: "/technology" },
};

const categories = [
  {
    title: "Frontend",
    icon: Globe,
    description: "Interfaces engineered for clarity, speed and outstanding user experience across every device.",
    technologies: [
      { name: "React", note: "Component-based UI at scale" },
      { name: "Next.js", note: "Production-grade React framework" },
      { name: "Angular", note: "Structured enterprise interfaces" },
      { name: "HTML / CSS", note: "Semantic, accessible foundations" },
      { name: "JavaScript / TypeScript", note: "Type-safe modern engineering" },
    ],
  },
  {
    title: "Backend",
    icon: Users,
    description: "Reliable services, business logic and integration points that power your systems.",
    technologies: [
      { name: "Node.js", note: "Efficient server-side JavaScript" },
      { name: "Express", note: "Flexible API framework" },
      { name: "Python", note: "Versatile for logic and AI" },
      { name: "REST APIs", note: "Clean interfaces between systems" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Robust, scalable data storage engineered for performance, integrity and growth.",
    technologies: [
      { name: "PostgreSQL", note: "Reliable relational database" },
      { name: "MySQL", note: "Battle-tested storage" },
      { name: "MongoDB", note: "Flexible document database" },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    description: "Cloud platforms deployed with discipline for reliability, security and cost efficiency.",
    technologies: [
      { name: "AWS", note: "Comprehensive cloud services" },
      { name: "Microsoft Azure", note: "Enterprise-grade cloud" },
      { name: "Google Cloud", note: "Data & AI focused cloud" },
    ],
  },
  {
    title: "AI & Intelligence",
    icon: Cpu,
    description: "Intelligence systems that make businesses smarter through automation and analysis.",
    technologies: [
      { name: "Generative AI", note: "Content & insight generation" },
      { name: "LLM Integration", note: "Large language model systems" },
      { name: "AI Agents", note: "Autonomous task execution" },
      { name: "Document Intelligence", note: "Document understanding & extraction" },
      { name: "Workflow Automation", note: "Intelligent process automation" },
    ],
  },
  {
    title: "DevOps",
    icon: Rocket,
    description: "The practices and tooling that keep systems fast, reliable and continuously improving.",
    technologies: [
      { name: "Git / GitHub", note: "Version control & collaboration" },
      { name: "CI/CD", note: "Automated delivery pipelines" },
      { name: "Docker", note: "Container-based deployment" },
      { name: "Cloud Infrastructure", note: "Scalable, managed environments" },
      { name: "Monitoring", note: "Observability & reliability" },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="An Ecosystem, Not a Logo Wall"
        description="We treat technology as an integrated ecosystem — choosing and combining the right tools at each layer to build cohesive, maintainable systems."
      />

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.06}>
                <div className="h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-text">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <ul className="mt-auto space-y-3">
                    {category.technologies.map((tech) => (
                      <li
                        key={tech.name}
                        className="flex items-center justify-between gap-3 py-2 border-b border-border last:border-0"
                      >
                        <span className="text-sm font-medium text-text">{tech.name}</span>
                        <span className="text-xs text-text-dim text-right">{tech.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Technology Question?"
        description="Talk to our engineering team about the right technology choices for your project and organization."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Explore Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
