import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/page-hero";

interface LegalPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function LegalPage({ title, description, children }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main max-w-3xl">
          <div className="prose prose-invert prose-headings:text-text prose-p:text-text-muted prose-p:leading-relaxed max-w-none">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
