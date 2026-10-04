import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { insights } from "@/data/insights";
import { formatDate } from "@/lib/utils";

export function InsightsPreview() {
  const latest = insights.slice(0, 3);
  const featured = insights.find((i) => i.featured) ?? latest[0];

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Insights
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
                Thinking on Technology & Business
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Perspective, analysis and practical guidance from our team.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group shrink-0"
            >
              All Insights
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.08}>
              <Link href={`/insights/${article.slug}`} className="group block h-full">
                <article className="h-full flex flex-col p-6 sm:p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold text-accent border border-accent/30 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-text-dim">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-grow mb-6">
                    {article.excerpt}
                  </p>
                  <div className="text-xs text-text-dim">
                    {formatDate(article.date)}
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
