import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { InsightsBrowser } from "@/components/insights-browser";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspective, analysis and practical guidance from the BLACK VAVE team on AI, software engineering, digital transformation, cloud and automation.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking on Technology & Business"
        description="Perspective, analysis and practical guidance from our team on AI, software engineering, digital transformation, cloud and automation."
      />
      <InsightsBrowser />
    </>
  );
}
