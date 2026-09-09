import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { AboutPage as ApproachSection } from "@/components/about/approach";
import { MissionVision } from "@/components/about/mission-vision";
import { LeadershipSection } from "@/components/about/leadership";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BLACK VAVE CORPORATION is a modern technology and business solutions company engineering intelligent digital products, software and automation for organizations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BLACK VAVE"
        title="Technology With Purpose. Built for Scale."
        description="BLACK VAVE CORPORATION is a technology organization dedicated to helping businesses transform ideas into reliable digital products and systems — combining engineering discipline, strategic thinking and intelligent automation."
      />
      <ApproachSection />
      <MissionVision />
      <LeadershipSection />
      <CTASection
        title="Work With a Technology Partner."
        description="Let's discuss how BLACK VAVE can help your organization build, modernize and scale its digital systems."
        primaryLabel="Talk to Our Experts"
      />
    </>
  );
}
