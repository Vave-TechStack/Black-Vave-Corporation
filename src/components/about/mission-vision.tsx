import { Reveal } from "@/components/ui/reveal";
import { Eye, Target, Compass, Users, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a trusted global technology partner helping organizations build intelligent, reliable digital systems that create lasting business value.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To engineer digital solutions and intelligent automation that simplify operations, modernize business processes and help organizations scale with confidence.",
  },
  {
    icon: Compass,
    title: "Engineering Mindset",
    description:
      "We believe great technology comes from careful thinking, disciplined engineering and continuous improvement. We measure our work by the outcomes it creates.",
  },
  {
    icon: Users,
    title: "Leadership Philosophy",
    description:
      "We lead through clarity, accountability and partnership. We invest in people who take ownership, think rigorously and care about the quality of their work.",
  },
];

const values = [
  "Integrity",
  "Engineering Excellence",
  "Client Partnership",
  "Intelligent Innovation",
  "Long-Term Thinking",
  "Continuous Learning",
];

export function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full p-8 border border-border bg-primary rounded-sm">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-sm border border-border bg-primary p-10">
            <h3 className="text-2xl font-heading font-bold text-text mb-8 text-center">
              The Values We Work By
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-text font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
