import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Boxes, TrendingUp, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { CTASection } from "@/components/cta-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.tagline}
      />

      <div className="container-main pb-4">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: service.title }]}
        />
      </div>

      <section className="py-10 md:py-14 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-balance">
                  Overview
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h3 className="text-xl font-semibold text-text mb-4">The Problem</h3>
                <p className="text-base text-text-muted leading-relaxed mb-8">
                  {service.problem}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="text-xl font-semibold text-text mb-4">Our Approach</h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {service.solution}
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={0.1}>
                <div className="p-8 border border-border bg-secondary rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Boxes className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-heading font-semibold text-text">
                      Capabilities
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 gap-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-text-muted">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-8 border border-border bg-secondary rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-heading font-semibold text-text">
                      Business Outcome
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.outcome}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="p-8 border border-border bg-secondary rounded-sm">
                  <h3 className="text-xl font-heading font-semibold text-text mb-5">
                    Technology
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs text-text-muted border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="container-main">
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
              >
                Discuss This Service
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={`Discuss Your ${service.title} Project`}
        description="Talk to our experts about how this capability could apply to your organization's specific challenges."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
