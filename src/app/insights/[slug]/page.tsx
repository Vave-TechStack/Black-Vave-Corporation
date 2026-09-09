import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { insights } from "@/data/insights";
import { formatDate } from "@/lib/utils";
import { CTASection } from "@/components/cta-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article) notFound();

  const related = insights
    .filter((i) => i.slug !== article.slug && i.category === article.category)
    .concat(insights.filter((i) => i.slug !== article.slug && i.category !== article.category))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "BLACK VAVE CORPORATION PRIVATE LIMITED",
    },
    publisher: {
      "@type": "Organization",
      name: "BLACK VAVE CORPORATION PRIVATE LIMITED",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-28 md:pt-36 pb-10 bg-primary">
        <div className="container-main">
          <Breadcrumbs
            items={[{ label: "Insights", href: "/insights" }, { label: article.category }]}
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold text-accent border border-accent/30 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-text-dim">{article.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight text-balance">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-text-dim">
              <span>BLACK VAVE CORPORATION</span>
              <span className="w-1 h-1 rounded-full bg-text-dim" />
              <span>{formatDate(article.date)}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 md:py-14 bg-primary">
        <div className="container-main">
          <div className="max-w-3xl">
            <div
              className="prose prose-invert max-w-none prose-headings:text-text prose-p:text-text-muted prose-p:leading-relaxed prose-pre:bg-secondary prose-pre:border prose-pre:border-border"
              dangerouslySetInnerHTML={{ __html: renderContent(article.content) }}
            />
          </div>
        </div>
      </article>

      <section className="py-12 bg-secondary border-t border-border">
        <div className="container-main">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Insights
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-text mb-10">
            Related Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="group block">
                <article className="h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold text-accent border border-accent/30 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-text-dim">{item.readTime}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function renderContent(markdown: string): string {
  const lines = markdown.trim().split("\n");
  let html = "";
  let inList = false;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h2 class="text-2xl font-bold text-text mt-10 mb-4">${line.slice(3)}</h2>`;
    } else if (line.startsWith("### ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h3 class="text-xl font-semibold text-text mt-8 mb-3">${line.slice(4)}</h3>`;
    } else if (line.startsWith("- ")) {
      if (!inList) {
        html += '<ul class="space-y-2 my-5 list-disc pl-6 text-text-muted">';
        inList = true;
      }
      html += `<li>${line.slice(2)}</li>`;
    } else if (line.startsWith("**") && line.endsWith("**")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<p class="my-4 text-text font-semibold">${line.slice(2, -2)}</p>`;
    } else if (line.trim() === "") {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<p class="my-4 text-base text-text-muted leading-relaxed">${line}</p>`;
    }
  }
  if (inList) html += "</ul>";
  return html;
}
