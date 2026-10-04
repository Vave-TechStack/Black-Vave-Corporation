export interface IndustryStat {
  value: string;
  label: string;
}

/**
 * Per-industry colour theme. These override the global --color-accent tokens
 * for the industry page, so every accent utility on the page (text-accent,
 * bg-accent, border-accent/30, the gradient text, focus rings) re-themes
 * automatically without duplicating any component code.
 */
export interface IndustryTheme {
  /** Main accent, used for text, borders, icon fills and solid buttons. */
  accent: string;
  /** Lighter accent used in gradients and hover states. */
  accentLight: string;
  /** Darker accent for pressed states and depth. */
  accentDark: string;
  /** Very low-alpha wash used for tinted panel backgrounds. */
  tint: string;
}

export interface IndustryHero {
  headline: string;
  subheadline: string;
}

export interface IndustryChallenge {
  icon: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  title: string;
  description: string;
}

/** A concrete product / platform BLACK VAVE delivers for this industry. */
export interface IndustryProduct {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface IndustryUseCase {
  icon: string;
  title: string;
  description: string;
}

export interface TechnologyCategory {
  category: string;
  items: string[];
}

export interface IndustryOutcome {
  icon: string;
  title: string;
  description: string;
}

export interface EngagementModel {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Industry {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  metaDescription: string;
  icon: string;
  theme: IndustryTheme;
  hero: IndustryHero;
  stats: IndustryStat[];
  challenges: IndustryChallenge[];
  approach: ApproachStep[];
  /** Products and platforms we build for this industry. */
  products: IndustryProduct[];
  /** Slugs from /data/services that apply to this industry. */
  services: string[];
  useCases: IndustryUseCase[];
  compliance: string[];
  technologyCategories: TechnologyCategory[];
  outcomes: IndustryOutcome[];
  engagementModels: EngagementModel[];
  faqs: FAQ[];
  relatedIndustries: string[];
}

export type ValidServiceSlug =
  | "software-engineering"
  | "ai-automation"
  | "digital-transformation"
  | "cloud-devops"
  | "enterprise-applications"
  | "data-analytics"
  | "digital-experience";