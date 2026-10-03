import type { Service } from "./types";
import { softwareEngineering } from "./software-engineering";
import { aiAutomation } from "./ai-automation";
import { digitalTransformation } from "./digital-transformation";
import { cloudDevOps } from "./cloud-devops";
import { enterpriseApplications } from "./enterprise-applications";
import { dataAnalytics } from "./data-analytics";
import { digitalExperience } from "./digital-experience";

export type { Service } from "./types";
export type {
  Challenge,
  ApproachStep,
  Capability,
  UseCase,
  Perspective,
  TechnologyCategory,
  BusinessOutcome,
  EngagementModel,
  FAQ,
  ServiceHero,
} from "./types";

export const services: Service[] = [
  softwareEngineering,
  aiAutomation,
  digitalTransformation,
  cloudDevOps,
  enterpriseApplications,
  dataAnalytics,
  digitalExperience,
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(
  service: Service
): Service[] {
  return service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}
