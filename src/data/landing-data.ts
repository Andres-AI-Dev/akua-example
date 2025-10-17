import { AIService, PricingTier } from '@/types/landing'

export const heroData = {
  headline: 'Transform Your Business with AI-Powered Services',
  subheadline:
    'Unlock the power of artificial intelligence with our comprehensive suite of AI tools and services designed for modern businesses.',
  ctaText: 'Get Started Free',
}

export const aiServices: AIService[] = [
  {
    id: 'content-generation',
    name: 'AI Content Generation',
    description:
      'Create high-quality written content, from blog posts to marketing copy, powered by advanced language models.',
    icon: 'FileText',
  },
  {
    id: 'image-video-ai',
    name: 'Image & Video AI',
    description:
      'Generate, edit, and enhance images and videos using cutting-edge AI technology.',
    icon: 'Image',
  },
  {
    id: 'analytics',
    name: 'AI-Powered Analytics',
    description:
      'Extract insights from your data with intelligent analysis and predictive modeling.',
    icon: 'BarChart3',
  },
  {
    id: 'custom-solutions',
    name: 'Custom AI Solutions',
    description:
      'Tailored AI implementations designed specifically for your unique business needs.',
    icon: 'Cpu',
  },
  {
    id: 'integration',
    name: 'AI Integration Services',
    description:
      'Seamlessly integrate AI capabilities into your existing workflows and applications.',
    icon: 'Workflow',
  },
  {
    id: 'consultation',
    name: 'AI Consultation',
    description:
      'Expert guidance on AI strategy, implementation, and optimization for your organization.',
    icon: 'MessageSquare',
  },
]

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and small projects',
    features: [
      '10,000 AI tokens per month',
      'Basic AI models',
      'Email support',
      'API access',
      'Standard processing speed',
    ],
    highlighted: false,
    ctaText: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses and teams',
    features: [
      '100,000 AI tokens per month',
      'Advanced AI models',
      'Priority support',
      'Advanced API access',
      'Fast processing speed',
      'Custom integrations',
      'Team collaboration',
    ],
    highlighted: true,
    ctaText: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited AI tokens',
      'Premium AI models',
      'Dedicated support',
      'Custom API endpoints',
      'Fastest processing',
      'White-label options',
      'SLA guarantees',
      'Custom training',
    ],
    highlighted: false,
    ctaText: 'Contact Sales',
  },
]
