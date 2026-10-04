import type { Industry, ValidServiceSlug } from "./types";
import { healthcare } from "./healthcare";
import { education } from "./education";
import { financialServices } from "./financial-services";
import { retailEcommerce } from "./retail-ecommerce";
import { publishing } from "./publishing";
import { manufacturing } from "./manufacturing";
import { realEstate } from "./real-estate";
import { professionalServices } from "./professional-services";
import { agriculture } from "./agriculture";
import { startupsSmes } from "./startups-smes";
import { enterpriseOrganizations } from "./enterprise-organizations";

export type {
  Industry,
  IndustryStat,
  IndustryTheme,
  IndustryHero,
  IndustryChallenge,
  ApproachStep,
  IndustryProduct,
  IndustryUseCase,
  TechnologyCategory,
  IndustryOutcome,
  EngagementModel,
  FAQ,
  ValidServiceSlug,
} from "./types";

export const industries: Industry[] = [
  healthcare,
  education,
  financialServices,
  retailEcommerce,
  publishing,
  manufacturing,
  realEstate,
  professionalServices,
  agriculture,
  startupsSmes,
  enterpriseOrganizations,
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getRelatedIndustries(industry: Industry): Industry[] {
  return industry.relatedIndustries
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is Industry => Boolean(i));
}

/** Every industry slug that links to a given service slug — used by service pages. */
export function getIndustriesForService(serviceSlug: string): Industry[] {
  return industries.filter((industry) =>
    (industry.services as ValidServiceSlug[]).includes(serviceSlug as ValidServiceSlug)
  );
}