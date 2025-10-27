import { AIService, PricingTier } from '@/types/landing'

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

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
    id: 'image-ai',
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

export const faqItems: FAQItem[] = [
  {
    question: 'What AI services do you offer?',
    answer: 'We offer a comprehensive suite of AI services including content generation, image and video AI, analytics, custom AI solutions, integration services, and expert consultation. Our services are designed to help businesses of all sizes leverage AI technology effectively.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'You can start using our AI services immediately after signing up. Our Starter plan provides instant access to basic AI models and API endpoints. For enterprise solutions, we typically complete onboarding within 1-2 weeks depending on complexity.',
  },
  {
    question: 'Do you offer custom AI solutions?',
    answer: 'Yes! We specialize in creating custom AI solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop AI systems that integrate seamlessly with your existing workflows.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Support varies by plan. Starter plans include email support with 48-hour response time. Professional plans get priority support with 24-hour response. Enterprise customers receive dedicated support with SLA guarantees and a dedicated account manager.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any billing adjustments on your next invoice.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Data security is our top priority. We use industry-standard encryption, secure data centers, and comply with GDPR, CCPA, and SOC 2 requirements. Enterprise plans include additional security features like custom data retention policies and white-label options.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    content: 'Akua transformed our content creation process. We now produce high-quality marketing materials 10x faster than before. The ROI has been incredible.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Solutions',
    content: 'The custom AI integration was seamless. Their team understood our needs perfectly and delivered a solution that exceeded expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'We have been using Akua for 6 months now, and the AI analytics have provided insights we never knew existed. It is like having a data scientist on demand.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Product Manager',
    company: 'InnovateLabs',
    content: 'The AI consultation helped us avoid costly mistakes in our AI strategy. Their expertise saved us months of trial and error.',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'Operations Manager',
    company: 'Efficiency Plus',
    content: 'Customer support is outstanding. They respond quickly and always provide helpful solutions. The platform is intuitive and powerful.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Founder',
    company: 'StartupHub',
    content: 'As a startup, we needed affordable AI tools that could scale with us. Akua delivered exactly that. The pricing is fair and the features are enterprise-grade.',
    rating: 5,
  },
]
