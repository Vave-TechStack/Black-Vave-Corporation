export interface Challenge {
  icon: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  title: string;
  description: string;
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
  technologies?: string[];
}

export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

export interface Perspective {
  icon: string;
  title: string;
  description: string;
  traits: string[];
}

export interface TechnologyCategory {
  category: string;
  items: string[];
}

export interface BusinessOutcome {
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

export interface ServiceHero {
  headline: string;
  subheadline: string;
  highlights: string[];
}

export interface Service {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  metaDescription: string;
  icon: string;
  hero: ServiceHero;
  challenges: Challenge[];
  approach: ApproachStep[];
  capabilities: Capability[];
  useCases: UseCase[];
  perspectives?: Perspective[];
  technologyCategories: TechnologyCategory[];
  outcomes: BusinessOutcome[];
  engagementModels: EngagementModel[];
  faqs: FAQ[];
  relatedServices: string[];
  technologies: string[];
}
