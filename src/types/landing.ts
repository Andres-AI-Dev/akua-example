import { LucideIcon } from 'lucide-react'

export interface HeroProps {
  headline: string
  subheadline: string
  ctaText: string
  onCtaClick?: () => void
}

export interface AIService {
  id: string
  name: string
  description: string
  icon: string // Lucide icon name
}

export interface FeatureCardProps {
  name: string
  description: string
  icon: LucideIcon
}

export interface FeaturesProps {
  services: AIService[]
}

export interface PricingTier {
  id: string
  name: string
  price: string | number
  description: string
  features: string[]
  highlighted: boolean
  ctaText: string
}

export interface PricingCardProps {
  tier: PricingTier
  onCtaClick?: (tierId: string) => void
}

export interface PricingProps {
  tiers: PricingTier[]
  onCtaClick?: (tierId: string) => void
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  companyName?: string
  tagline?: string
}
