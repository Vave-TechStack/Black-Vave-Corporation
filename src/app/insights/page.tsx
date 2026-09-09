"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { insights, insightCategories } from "@/data/insights";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    let result = insights;
    if (category !== "All") {
      result = result.filter((i) => i.category === category);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.excerpt.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [query, category]);

  const featured = insights.find((i) => i.featured);
  const latest = filtered.filter((i) => i.slug !== featured?.slug || category !== "All");

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking on Technology & Business"
        description="Perspective, analysis and practical guidance from our team on AI, software engineering, digital transformation, cloud and automation."
      />

      <section className="py-12 md:py-16 bg-primary">
        <div className="container-main">
          {/* Search */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search insights..."
                aria-label="Search insights"
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-sm text-text placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {insightCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200",
                    category === cat
                      ? "border-accent bg-accent text-primary"
                      : "border-border text-text-muted hover:border-accent hover:text-accent"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-sm">
              <p className="text-text-muted">No insights found matching your search.</p>
            </div>
          )}

          {category === "All" && !query && featured && (
            <div className="mb-14">
              <div className="border border-accent/30 bg-secondary rounded-sm overflow-hidden">
                <Link href={`/insights/${featured.slug}`} className="group block p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold text-primary bg-accent rounded-full">
                      Featured
                    </span>
                    <span className="text-xs font-semibold text-accent border border-accent/30 rounded-full px-3 py-1">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-text group-hover:text-accent transition-colors duration-300 text-balance max-w-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg text-text-muted max-w-2xl leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-text-dim">
                    <span>{formatDate(featured.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span>{featured.readTime}</span>
                  </div>
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((article, index) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group block">
                <article className="h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
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
                  <div className="text-xs text-text-dim">{formatDate(article.date)}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
