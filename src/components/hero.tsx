"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CanvasWave } from "@/components/canvas-wave";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(200,160,96,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(200,160,96,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden="true" />

      <CanvasWave />

      <div className="relative container-main pt-28 md:pt-32 pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium">
              BLACK VAVE CORPORATION
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </p>
          </motion.div>

          <motion.h1
            className="mt-8 text-[43px] sm:text-[55px] md:text-[67px] lg:text-[67px] xl:text-[79px] font-bold text-text leading-[1.05] tracking-tight text-balance"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineering{" "}
            <span className="gold-gradient">Intelligent</span> Digital
            Solutions for a{" "}
            <span className="text-white underline decoration-accent/50 decoration-2 underline-offset-8">
              Changing World.
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-[13px] md:text-[15px] text-text-muted leading-relaxed max-w-2xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            BLACK VAVE CORPORATION helps organizations build, modernize,
            automate, and scale digital businesses through software engineering,
            AI, automation, cloud technologies, and strategic technology
            solutions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold text-base rounded-sm hover:bg-accent-light transition-colors duration-300 group"
            >
              Talk to Our Experts
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold text-base rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Explore Capabilities
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-3"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["Software Engineering", "AI & Automation", "Cloud & DevOps", "Digital Transformation"].map(
              (item) => (
                <span key={item} className="text-xs md:text-sm text-text-dim font-medium tracking-wide">
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          background-image:
            linear-gradient(rgba(201, 168, 76, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.06) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 70%);
        }
      `}</style>
    </section>
  );
}
