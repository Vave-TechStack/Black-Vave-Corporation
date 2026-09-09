import { Reveal } from "@/components/ui/reveal";

export function AboutPage() {
  const stages = [
    { number: "01", title: "Vision", description: "We clarify what the organization is building toward and the outcomes that matter." },
    { number: "02", title: "Strategy", description: "We define the path, architecture and priorities required to realize the vision." },
    { number: "03", title: "Design", description: "We design the experience, systems and technology with precision and purpose." },
    { number: "04", title: "Engineering", description: "We build reliable, secure and scalable systems with disciplined craft." },
    { number: "05", title: "Deployment", description: "We launch with careful planning, integration and minimal disruption." },
    { number: "06", title: "Growth", description: "We optimize, iterate and evolve systems as the business grows." },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
              From Vision to Growth — A Structured Lifecycle
            </h2>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Every engagement follows a disciplined lifecycle that moves from
              strategic clarity to delivered, evolving systems. It is the
              framework we use to turn ideas into reliable, scalable technology.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {stages.map((stage, index) => (
            <Reveal key={stage.number} delay={index * 0.05}>
              <div className="h-full p-8 bg-primary hover:bg-surface transition-colors duration-300">
                <div className="font-mono text-xs text-accent tracking-widest mb-4">
                  Stage {stage.number}
                </div>
                <h3 className="text-xl font-heading font-semibold text-text mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
