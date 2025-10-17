export interface ServiceFeature {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetail {
  id: string; // URL slug
  name: string;
  tagline: string;
  description: string;
  heroImage?: string;
  features: ServiceFeature[];
  useCases: UseCase[];
  howItWorks: HowItWorksStep[];
  pricingTier: string;
  pricingNote: string;
}
