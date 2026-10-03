import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import type { Service } from "@/data/services";

interface ServiceCTAProps {
  service: Service;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,160,96,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <Container>
        <Reveal>
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-5">
              {service.title}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text text-balance">
              Let&apos;s Build What&apos;s Next.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re developing a new digital product, modernizing
              existing systems, or exploring intelligent automation, Black Vave
              Corporation can help turn your technology goals into practical
              solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light hover:shadow-[0_8px_30px_rgba(200,160,96,0.25)] transition-all duration-300 group w-full sm:w-auto"
              >
                Start a Conversation
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold rounded-sm hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
