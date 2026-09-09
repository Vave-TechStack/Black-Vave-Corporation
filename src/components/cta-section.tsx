import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Let's Build Something Meaningful.",
  description = "Discuss your project with our team and discover how BLACK VAVE can help you engineer intelligent digital solutions.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Solutions",
  secondaryHref = "/solutions",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-24 bg-secondary border-t border-border">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-border p-10 md:p-16 lg:p-20 bg-primary">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(200,160,96,0.08) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Start the Conversation
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text max-w-2xl text-balance">
                {title}
              </h2>
              <p className="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed">
                {description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300 group"
                >
                  {primaryLabel}
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
