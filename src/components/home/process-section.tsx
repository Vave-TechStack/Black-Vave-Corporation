"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Compass, PenTool, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We begin by understanding your business, challenges, objectives and the context in which technology operates.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description:
      "We translate business goals into a clear technology strategy, architecture direction and delivery roadmap.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "We design the user experience, system architecture and technical approach with precision and clarity.",
  },
  {
    number: "04",
    icon: Code,
    title: "Engineer",
    description:
      "Our engineers build reliable, secure and scalable systems using disciplined engineering practices.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deploy",
    description:
      "We handle deployment, integration and migration with careful planning and minimal disruption.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Optimize",
    description:
      "We monitor outcomes, refine performance and continuously improve systems to deliver lasting value.",
  },
];

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
            A Disciplined Journey from Idea to Outcome
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Our six-stage process ensures every engagement is structured,
            transparent and focused on delivering measurable business value.
          </p>
        </div>

        <div className="relative">
          {!prefersReducedMotion && (
            <div
              className="absolute top-8 left-0 right-0 hidden lg:block h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(200,160,96,0.4) 10%, rgba(200,160,96,0.4) 90%, transparent)",
              }}
              aria-hidden="true"
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 flex flex-col items-start lg:items-center text-left lg:text-center">
                  <div className="w-16 h-16 rounded-full border border-accent/30 bg-primary flex items-center justify-center mb-5">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-xs font-mono text-accent tracking-widest mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
