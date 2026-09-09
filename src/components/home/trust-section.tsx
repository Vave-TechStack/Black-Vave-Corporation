import { Reveal } from "@/components/ui/reveal";
import { ShieldCheck, Target, Cpu, Users } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description:
      "Technology decisions grounded in business context, outcomes and long-term objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Excellence",
    description:
      "Disciplined engineering practices, quality systems and reliability at every layer.",
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "Purposeful automation and AI that remove friction and amplify human capability.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "Relationships built on trust, transparency and shared responsibility for outcomes.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary border-b border-border">
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              The BLACK VAVE Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text text-balance">
              Technology Built Around Business Outcomes
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              We design and engineer digital systems to the standards enterprises
              demand — combining strategy, engineering discipline and intelligent
              automation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="group h-full p-6 border border-border bg-primary rounded-sm hover:border-accent/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
