import { ServiceDetail } from '@/types/services';

export const servicesDetail: Record<string, ServiceDetail> = {
  'content-generation': {
    id: 'content-generation',
    name: 'AI Content Generation',
    tagline: 'Create compelling content at scale',
    description: 'Transform your content creation process with advanced AI that generates high-quality blog posts, articles, social media content, and marketing copy in seconds. Save time while maintaining your brand voice and engaging your audience effectively.',
    features: [
      {
        icon: 'FileText',
        title: 'Multi-format Content',
        description: 'Generate blog posts, articles, social media content, emails, and more'
      },
      {
        icon: 'Sparkles',
        title: 'SEO Optimization',
        description: 'Built-in SEO best practices for better search rankings'
      },
      {
        icon: 'Languages',
        title: 'Multi-language Support',
        description: 'Create content in 50+ languages with native fluency'
      },
      {
        icon: 'Zap',
        title: 'Instant Generation',
        description: 'Get high-quality content in seconds, not hours'
      }
    ],
    useCases: [
      {
        icon: 'TrendingUp',
        title: 'Marketing Teams',
        description: 'Scale content production for blogs, emails, and social media campaigns'
      },
      {
        icon: 'ShoppingBag',
        title: 'E-commerce',
        description: 'Generate product descriptions and category pages automatically'
      },
      {
        icon: 'Users',
        title: 'Agencies',
        description: 'Deliver more client projects with faster turnaround times'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Input Your Requirements',
        description: 'Describe your content needs, target audience, and key points',
        icon: 'Edit'
      },
      {
        step: 2,
        title: 'AI Processing',
        description: 'Our advanced AI analyzes and generates optimized content',
        icon: 'Cpu'
      },
      {
        step: 3,
        title: 'Review & Refine',
        description: 'Edit, customize, and perfect your generated content',
        icon: 'Check'
      }
    ],
    pricingTier: 'Professional',
    pricingNote: 'Included in Professional and Enterprise plans'
  },
  'image-video-ai': {
    id: 'image-video-ai',
    name: 'Image and Video AI Tools',
    tagline: 'Generate stunning visuals with AI',
    description: 'Create professional-quality images and videos using cutting-edge AI technology. From product photography to marketing videos, our AI tools help you produce visual content that captivates your audience without expensive equipment or lengthy production times.',
    features: [
      {
        icon: 'Image',
        title: 'AI Image Generation',
        description: 'Create unique images from text descriptions in any style'
      },
      {
        icon: 'Video',
        title: 'Video Creation',
        description: 'Generate marketing videos and animations automatically'
      },
      {
        icon: 'Wand2',
        title: 'Image Enhancement',
        description: 'Upscale, restore, and improve existing images with AI'
      },
      {
        icon: 'Palette',
        title: 'Style Transfer',
        description: 'Apply artistic styles and effects to your visuals'
      }
    ],
    useCases: [
      {
        icon: 'Store',
        title: 'Product Marketing',
        description: 'Create stunning product visuals for e-commerce and advertising'
      },
      {
        icon: 'Camera',
        title: 'Content Creators',
        description: 'Generate thumbnails, graphics, and video content effortlessly'
      },
      {
        icon: 'Briefcase',
        title: 'Corporate Communications',
        description: 'Produce professional visuals for presentations and reports'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Describe Your Vision',
        description: 'Tell us what visual content you need or upload reference images',
        icon: 'MessageSquare'
      },
      {
        step: 2,
        title: 'AI Generation',
        description: 'Our AI creates high-quality visuals based on your input',
        icon: 'Sparkles'
      },
      {
        step: 3,
        title: 'Download & Use',
        description: 'Get your visuals in the format you need, ready to use',
        icon: 'Download'
      }
    ],
    pricingTier: 'Professional',
    pricingNote: 'Included in Professional and Enterprise plans'
  },
  'analytics': {
    id: 'analytics',
    name: 'AI-Powered Analytics',
    tagline: 'Unlock insights from your data',
    description: 'Transform raw data into actionable insights with AI-powered analytics. Our advanced algorithms analyze complex datasets, identify patterns, predict trends, and provide clear recommendations to drive better business decisions.',
    features: [
      {
        icon: 'BarChart3',
        title: 'Predictive Analytics',
        description: 'Forecast trends and outcomes with machine learning models'
      },
      {
        icon: 'Brain',
        title: 'Pattern Recognition',
        description: 'Automatically discover hidden patterns and correlations'
      },
      {
        icon: 'Target',
        title: 'Customer Insights',
        description: 'Understand customer behavior and preferences deeply'
      },
      {
        icon: 'LineChart',
        title: 'Real-time Reporting',
        description: 'Get instant insights with automated dashboards'
      }
    ],
    useCases: [
      {
        icon: 'ShoppingCart',
        title: 'E-commerce Optimization',
        description: 'Optimize pricing, inventory, and customer experience'
      },
      {
        icon: 'TrendingUp',
        title: 'Sales Forecasting',
        description: 'Predict sales trends and optimize resource allocation'
      },
      {
        icon: 'Users',
        title: 'Customer Segmentation',
        description: 'Identify and target high-value customer segments'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Connect Your Data',
        description: 'Integrate your data sources securely with our platform',
        icon: 'Database'
      },
      {
        step: 2,
        title: 'AI Analysis',
        description: 'Our AI processes and analyzes your data automatically',
        icon: 'Brain'
      },
      {
        step: 3,
        title: 'Get Insights',
        description: 'Receive clear, actionable insights and recommendations',
        icon: 'Lightbulb'
      }
    ],
    pricingTier: 'Enterprise',
    pricingNote: 'Available in Enterprise plans'
  },
  'custom-solutions': {
    id: 'custom-solutions',
    name: 'Custom AI Solutions',
    tagline: 'Tailored AI for your unique needs',
    description: 'Get bespoke AI solutions designed specifically for your business challenges. Our team of AI experts works with you to develop, train, and deploy custom models that perfectly fit your requirements and integrate seamlessly with your existing systems.',
    features: [
      {
        icon: 'Settings2',
        title: 'Custom Model Development',
        description: 'Build AI models tailored to your specific use cases'
      },
      {
        icon: 'Code2',
        title: 'API Integration',
        description: 'Seamless integration with your existing tech stack'
      },
      {
        icon: 'Shield',
        title: 'Data Privacy',
        description: 'Keep your data secure with on-premise or private cloud options'
      },
      {
        icon: 'Wrench',
        title: 'Ongoing Support',
        description: 'Continuous optimization and maintenance of your AI systems'
      }
    ],
    useCases: [
      {
        icon: 'Building2',
        title: 'Enterprise Automation',
        description: 'Automate complex business processes unique to your organization'
      },
      {
        icon: 'Hospital',
        title: 'Industry-Specific Solutions',
        description: 'Custom AI for healthcare, finance, manufacturing, and more'
      },
      {
        icon: 'Rocket',
        title: 'Innovation Projects',
        description: 'Bring cutting-edge AI capabilities to your products'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'We analyze your needs and design the perfect solution',
        icon: 'Search'
      },
      {
        step: 2,
        title: 'Development & Training',
        description: 'Our team builds and trains custom AI models for you',
        icon: 'Code'
      },
      {
        step: 3,
        title: 'Deployment & Support',
        description: 'We deploy the solution and provide ongoing support',
        icon: 'Rocket'
      }
    ],
    pricingTier: 'Enterprise',
    pricingNote: 'Custom pricing based on project scope'
  },
  'integration': {
    id: 'integration',
    name: 'AI Integration Services',
    tagline: 'Connect AI to your workflow',
    description: 'Seamlessly integrate AI capabilities into your existing applications and workflows. Our integration services help you leverage the power of AI without disrupting your current operations, ensuring smooth adoption and maximum ROI.',
    features: [
      {
        icon: 'Plug',
        title: 'API Connectors',
        description: 'Pre-built connectors for popular platforms and services'
      },
      {
        icon: 'Workflow',
        title: 'Workflow Automation',
        description: 'Automate repetitive tasks with AI-powered workflows'
      },
      {
        icon: 'RefreshCw',
        title: 'Real-time Sync',
        description: 'Keep data synchronized across all your systems'
      },
      {
        icon: 'Lock',
        title: 'Secure Integration',
        description: 'Enterprise-grade security for all integrations'
      }
    ],
    useCases: [
      {
        icon: 'Mail',
        title: 'CRM Integration',
        description: 'Enhance your CRM with AI-powered insights and automation'
      },
      {
        icon: 'FolderOpen',
        title: 'Document Processing',
        description: 'Automate document analysis and data extraction'
      },
      {
        icon: 'MessageCircle',
        title: 'Customer Support',
        description: 'Integrate AI chatbots with your support systems'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Choose Integration',
        description: 'Select the systems and workflows you want to connect',
        icon: 'Link'
      },
      {
        step: 2,
        title: 'Configure & Test',
        description: 'Set up integration parameters and test thoroughly',
        icon: 'Settings'
      },
      {
        step: 3,
        title: 'Go Live',
        description: 'Deploy the integration and monitor performance',
        icon: 'CheckCircle'
      }
    ],
    pricingTier: 'Professional',
    pricingNote: 'Included in Professional and Enterprise plans'
  },
  'consultation': {
    id: 'consultation',
    name: 'AI Consultation',
    tagline: 'Expert guidance for your AI journey',
    description: 'Navigate the complex world of AI with expert consultation from our team of AI specialists. We help you identify opportunities, develop strategies, and implement AI solutions that drive real business value and competitive advantage.',
    features: [
      {
        icon: 'Lightbulb',
        title: 'Strategy Development',
        description: 'Create a comprehensive AI strategy aligned with your goals'
      },
      {
        icon: 'Users2',
        title: 'Team Training',
        description: 'Upskill your team on AI best practices and tools'
      },
      {
        icon: 'MapPin',
        title: 'Roadmap Planning',
        description: 'Design a clear path from concept to implementation'
      },
      {
        icon: 'Award',
        title: 'Best Practices',
        description: 'Learn from industry experts and proven methodologies'
      }
    ],
    useCases: [
      {
        icon: 'Building',
        title: 'Digital Transformation',
        description: 'Plan and execute AI-driven transformation initiatives'
      },
      {
        icon: 'Compass',
        title: 'AI Readiness Assessment',
        description: 'Evaluate your organization\'s readiness for AI adoption'
      },
      {
        icon: 'BookOpen',
        title: 'Technology Selection',
        description: 'Choose the right AI tools and platforms for your needs'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We evaluate your current state and objectives',
        icon: 'Clipboard'
      },
      {
        step: 2,
        title: 'Strategy Sessions',
        description: 'Collaborative workshops to define your AI strategy',
        icon: 'Users'
      },
      {
        step: 3,
        title: 'Implementation Support',
        description: 'Ongoing guidance as you execute your AI initiatives',
        icon: 'HeartHandshake'
      }
    ],
    pricingTier: 'All Plans',
    pricingNote: 'Available across all subscription tiers'
  }
};
