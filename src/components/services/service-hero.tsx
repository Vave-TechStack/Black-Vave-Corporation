"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ServiceIcon } from "@/components/ui/icon-map";
import type { Service } from "@/data/services";
import { ServiceHeroVisual } from "./service-visuals";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 bg-primary overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(200,160,96,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,160,96,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,160,96,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 30%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-main">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <Breadcrumbs
            items={[{ label: "Services", href: "/services" }, { label: service.title }]}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-5"
            >
              <ServiceIcon name={service.icon} className="w-4 h-4" />
              Our Services
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-text leading-[1.08] text-balance"
            >
              {service.hero.headline}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl"
            >
              {service.hero.subheadline}
            </motion.p>

            <motion.ul
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl"
            >
              {service.hero.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2.5 text-sm text-text-muted"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light hover:shadow-[0_8px_30px_rgba(200,160,96,0.25)] transition-all duration-300 group"
              >
                Discuss Your Project
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                Explore Our Capabilities
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="p-6 md:p-8 border border-border bg-secondary/60 rounded-sm">
              <ServiceHeroVisual slug={service.slug} />
            </div>
            <div
              className="absolute -inset-px rounded-sm pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,160,96,0.15) 0%, transparent 40%, transparent 60%, rgba(200,160,96,0.08) 100%)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
