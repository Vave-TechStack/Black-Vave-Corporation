import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Boxes, TrendingUp, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/data/industries";
import { CTASection } from "@/components/cta-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} Solutions`,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={industry.description}
      />

      <div className="container-main pb-4">
        <Breadcrumbs
          items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
        />
      </div>

      <section className="py-10 md:py-14 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <Reveal>
                <div>
                  <h2 className="text-2xl font-bold text-text mb-4">
                    The Industry Challenge
                  </h2>
                  <p className="text-base text-text-muted leading-relaxed">
                    {industry.challenge}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-text mb-4">
                    The BLACK VAVE Approach
                  </h2>
                  <p className="text-base text-text-muted leading-relaxed">
                    {industry.approach}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-8 border border-border bg-secondary rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-heading font-semibold text-text">
                      Expected Outcomes
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 gap-3">
                    {industry.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-text-muted">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={0.1}>
                <div className="p-8 border border-border bg-secondary rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Boxes className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-heading font-semibold text-text">
                      Relevant Technology
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech) => (
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

              <Reveal delay={0.2}>
                <div className="p-8 border border-border bg-secondary rounded-sm">
                  <h3 className="text-xl font-heading font-semibold text-text mb-4">
                    Explore Related Solutions
                  </h3>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
                  >
                    View Our Solutions
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <Link
                  href="/contact"
                  className="group flex flex-col p-8 border border-accent/30 bg-accent/5 rounded-sm hover:bg-accent/10 transition-colors duration-300"
                >
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">
                    Talk to Our {industry.title} Team
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    Discuss how we can help your organization address its specific
                    challenges with the right technology.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Start a Conversation
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="mt-12">
            <Reveal>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Industries
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title={`Transforming the ${industry.title} Sector`}
        description="Talk to our team about how technology can help your organization modernize operations and achieve better outcomes."
        primaryLabel="Talk to an Expert"
      />
    </>
  );
}
