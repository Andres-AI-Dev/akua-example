# Task 2: Service Pages (All 6 AI Services)

**1. Description**

Create 6 individual service detail pages, each showcasing a specific AI service with comprehensive information including hero section, key features, use cases, how it works, pricing preview, and CTAs. Each service page will follow a consistent structure while presenting unique content for: AI Content Generation, Image and Video AI Tools, AI-Powered Analytics, Custom AI Solutions, AI Integration Services, and AI Consultation.

**2. Parent Feature**

*   [../PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   All 6 service pages are accessible via their respective routes (/services/content-generation, /services/image-video-ai, /services/analytics, /services/custom-solutions, /services/integration, /services/consultation)
*   Each service page includes: hero section, features list (4-5 items), use cases (3-4 items), how it works (3-4 steps), pricing preview, and CTA button
*   Service pages are responsive across all breakpoints
*   Clicking "Get Started" or "Try Now" buttons navigates to /pricing
*   Service cards on landing page Features section navigate to correct service pages
*   All service data is defined in reusable TypeScript interfaces and data files
*   Service page components are DRY (Don't Repeat Yourself) using shared sub-components
*   All tests pass (unit and component tests)

**4. Files to be Modified/Created**

*   `src/types/services.ts` (NEW)
*   `src/data/services-detail.ts` (NEW)
*   `src/components/services/ServiceHero.tsx` (NEW)
*   `src/components/services/ServiceFeatures.tsx` (NEW)
*   `src/components/services/ServiceUseCases.tsx` (NEW)
*   `src/components/services/ServiceHowItWorks.tsx` (NEW)
*   `src/components/services/ServicePricing.tsx` (NEW)
*   `src/components/services/ServiceCTA.tsx` (NEW)
*   `src/pages/services/ContentGenerationPage.tsx` (NEW)
*   `src/pages/services/ImageVideoAIPage.tsx` (NEW)
*   `src/pages/services/AnalyticsPage.tsx` (NEW)
*   `src/pages/services/CustomSolutionsPage.tsx` (NEW)
*   `src/pages/services/IntegrationPage.tsx` (NEW)
*   `src/pages/services/ConsultationPage.tsx` (NEW)
*   `src/App.tsx` (MODIFIED - add service routes)
*   `src/components/features/FeatureCard.tsx` (MODIFIED - add click handler for navigation)
*   `src/components/services/ServiceHero.test.tsx` (NEW)
*   `src/components/services/ServiceFeatures.test.tsx` (NEW)
*   `src/pages/services/ContentGenerationPage.test.tsx` (NEW)

**5. Dependencies**

*   Task 1 (Header and Layout must be complete)

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript interfaces for service data**
    - File(s) involved: `src/types/services.ts`
    - Algorithm:
        ```typescript
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
          pricingTier: string; // Which tier includes this
          pricingNote: string;
        }
        ```

2.  **Create comprehensive service data file**
    - File(s) involved: `src/data/services-detail.ts`
    - Algorithm:
        ```typescript
        import { ServiceDetail } from '@/types/services';

        export const servicesDetail: Record<string, ServiceDetail> = {
          'content-generation': {
            id: 'content-generation',
            name: 'AI Content Generation',
            tagline: 'Create compelling content at scale',
            description: 'Transform your content creation process with advanced AI...',
            features: [
              {
                icon: 'FileText',
                title: 'Multi-format Content',
                description: 'Generate blog posts, articles, social media content, and more'
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
            description: 'Create professional images and videos using cutting-edge AI technology...',
            // ... similar structure for remaining data
          },
          // ... define all 6 services similarly
        };
        ```

3.  **Create ServiceHero component**
    - File(s) involved: `src/components/services/ServiceHero.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface ServiceHeroProps {
              name: string;
              tagline: string;
              description: string;
            }
            ```
    - Styling:
        - Container: `bg-gradient-to-br from-primary/10 via-background to-accent/10`
        - Inner: `container mx-auto px-4 py-20 md:py-28`
        - Heading: `text-4xl md:text-5xl lg:text-6xl font-bold mb-4`
        - Tagline: `text-xl md:text-2xl text-muted-foreground mb-6`
        - Description: `text-lg text-muted-foreground max-w-3xl`
    - Algorithm:
        ```typescript
        interface ServiceHeroProps {
          name: string;
          tagline: string;
          description: string;
        }

        export function ServiceHero({ name, tagline, description }: ServiceHeroProps) {
          return (
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
              <div className="container mx-auto px-4 py-20 md:py-28">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {name}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                    {tagline}
                  </p>
                  <p className="text-lg text-muted-foreground max-w-3xl">
                    {description}
                  </p>
                </div>
              </div>
            </section>
          );
        }
        ```

4.  **Create ServiceFeatures component**
    - File(s) involved: `src/components/services/ServiceFeatures.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface ServiceFeaturesProps {
              features: ServiceFeature[];
            }
            ```
        - Import Icon from lucide-react dynamically
        - Use Card component for feature items
    - Styling:
        - Container: `container mx-auto px-4 py-16`
        - Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
        - Card: `p-6 hover:shadow-lg transition-shadow`
    - Algorithm:
        ```typescript
        import { Card } from '@/components/ui/card';
        import * as Icons from 'lucide-react';
        import { ServiceFeature } from '@/types/services';

        interface ServiceFeaturesProps {
          features: ServiceFeature[];
        }

        export function ServiceFeatures({ features }: ServiceFeaturesProps) {
          return (
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = Icons[feature.icon as keyof typeof Icons] as any;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            {Icon && <Icon className="w-6 h-6 text-primary" />}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </section>
          );
        }
        ```

5.  **Create ServiceUseCases component**
    - File(s) involved: `src/components/services/ServiceUseCases.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface ServiceUseCasesProps {
              useCases: UseCase[];
            }
            ```
        - Use Card component
    - Styling:
        - Container: `bg-muted/50 py-16`
        - Grid: `grid grid-cols-1 md:grid-cols-3 gap-6`
    - Algorithm: Similar to ServiceFeatures with 3-column grid

6.  **Create ServiceHowItWorks component**
    - File(s) involved: `src/components/services/ServiceHowItWorks.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface ServiceHowItWorksProps {
              steps: HowItWorksStep[];
            }
            ```
        - Display steps in numbered sequence
    - Styling:
        - Container: `container mx-auto px-4 py-16`
        - Steps: Vertical layout with connecting lines
        - Step numbers: Large, prominent circles
    - Algorithm:
        ```typescript
        export function ServiceHowItWorks({ steps }: ServiceHowItWorksProps) {
          return (
            <section className="container mx-auto px-4 py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="max-w-3xl mx-auto space-y-8">
                {steps.map((step, index) => {
                  const Icon = Icons[step.icon as keyof typeof Icons] as any;
                  const isLast = index === steps.length - 1;
                  return (
                    <div key={step.step} className="flex items-start space-x-6 relative">
                      {!isLast && (
                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                      )}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl z-10">
                        {step.step}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {Icon && <Icon className="w-5 h-5 text-primary" />}
                          <h3 className="font-semibold text-xl">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        }
        ```

7.  **Create ServicePricing component**
    - File(s) involved: `src/components/services/ServicePricing.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface ServicePricingProps {
              pricingTier: string;
              pricingNote: string;
            }
            ```
        - Use Card and Badge components
    - Styling: Simple card showing which tier includes the service

8.  **Create ServiceCTA component**
    - File(s) involved: `src/components/services/ServiceCTA.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface ServiceCTAProps {
              serviceName: string;
            }
            ```
        - Import Button and Link
    - Styling:
        - Container: `bg-primary/5 py-16`
        - Button: Large, prominent "Get Started" button
    - Algorithm:
        ```typescript
        import { Button } from '@/components/ui/button';
        import { Link } from 'react-router-dom';

        interface ServiceCTAProps {
          serviceName: string;
        }

        export function ServiceCTA({ serviceName }: ServiceCTAProps) {
          return (
            <section className="bg-primary/5 py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started with {serviceName}?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of users already leveraging AI to transform their workflow
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </section>
          );
        }
        ```

9.  **Create all 6 service page components**
    - File(s) involved: All 6 files in `src/pages/services/`
    - React specifics:
        - Each page imports the service data by ID
        - Renders all sub-components in order
        - Uses React.useMemo to get service data
    - Algorithm (same structure for all 6 pages):
        ```typescript
        import { ServiceHero } from '@/components/services/ServiceHero';
        import { ServiceFeatures } from '@/components/services/ServiceFeatures';
        import { ServiceUseCases } from '@/components/services/ServiceUseCases';
        import { ServiceHowItWorks } from '@/components/services/ServiceHowItWorks';
        import { ServicePricing } from '@/components/services/ServicePricing';
        import { ServiceCTA } from '@/components/services/ServiceCTA';
        import { servicesDetail } from '@/data/services-detail';

        export function ContentGenerationPage() {
          const service = servicesDetail['content-generation'];

          return (
            <div>
              <ServiceHero
                name={service.name}
                tagline={service.tagline}
                description={service.description}
              />
              <ServiceFeatures features={service.features} />
              <ServiceUseCases useCases={service.useCases} />
              <ServiceHowItWorks steps={service.howItWorks} />
              <ServicePricing
                pricingTier={service.pricingTier}
                pricingNote={service.pricingNote}
              />
              <ServiceCTA serviceName={service.name} />
            </div>
          );
        }
        ```

10. **Add service routes to App.tsx**
    - File(s) involved: `src/App.tsx`
    - Algorithm:
        ```typescript
        import { ContentGenerationPage } from './pages/services/ContentGenerationPage';
        import { ImageVideoAIPage } from './pages/services/ImageVideoAIPage';
        import { AnalyticsPage } from './pages/services/AnalyticsPage';
        import { CustomSolutionsPage } from './pages/services/CustomSolutionsPage';
        import { IntegrationPage } from './pages/services/IntegrationPage';
        import { ConsultationPage } from './pages/services/ConsultationPage';

        // Inside Routes:
        <Route path="/services/content-generation" element={<ContentGenerationPage />} />
        <Route path="/services/image-video-ai" element={<ImageVideoAIPage />} />
        <Route path="/services/analytics" element={<AnalyticsPage />} />
        <Route path="/services/custom-solutions" element={<CustomSolutionsPage />} />
        <Route path="/services/integration" element={<IntegrationPage />} />
        <Route path="/services/consultation" element={<ConsultationPage />} />
        ```

11. **Update FeatureCard to navigate on click**
    - File(s) involved: `src/components/features/FeatureCard.tsx`
    - React specifics:
        - Add `onClick` or wrap in Link component
        - Map service titles to route slugs
        - Use `useNavigate` or Link
    - Algorithm:
        ```typescript
        // Add serviceId prop to FeatureCard
        interface FeatureCardProps {
          // ... existing props
          serviceId?: string; // URL slug
        }

        // In component:
        const navigate = useNavigate();

        const handleClick = () => {
          if (serviceId) {
            navigate(`/services/${serviceId}`);
          }
        };

        // Make card clickable with hover cursor
        <Card
          className="cursor-pointer hover:shadow-xl transition-shadow"
          onClick={handleClick}
        >
          {/* existing card content */}
        </Card>
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test servicesDetail object contains all 6 services
    *   Test each service has required fields (name, tagline, features, etc.)
    *   Test features array has at least 4 items for each service
    *   Test howItWorks steps are numbered sequentially (1, 2, 3...)
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   **ServiceHero.test.tsx:**
        *   Test renders service name as h1
        *   Test renders tagline
        *   Test renders description
    *   **ServiceFeatures.test.tsx:**
        *   Test renders correct number of feature cards
        *   Test renders feature icons, titles, and descriptions
        *   Test grid layout is responsive
    *   **ServiceHowItWorks.test.tsx:**
        *   Test renders all steps
        *   Test steps show correct numbers
        *   Test connecting lines appear between steps (except last)
    *   **ContentGenerationPage.test.tsx:**
        *   Test page renders all sub-components
        *   Test correct service data is passed to components
        *   Test CTA buttons link to correct routes
    *   Tools: Vitest + React Testing Library

*   **7.3. Integration Tests:**
    *   Test navigation to all 6 service pages via direct URL
    *   Test clicking service cards on landing page navigates to correct service page
    *   Test "Get Started" button on each service page navigates to /pricing
    *   Test "Contact Sales" button navigates to /contact
    *   Test browser back/forward navigation works correctly

*   **7.4. Visual Regression Tests:**
    *   Test each service page renders correctly on mobile (375px)
    *   Test each service page renders correctly on tablet (768px)
    *   Test each service page renders correctly on desktop (1440px)
    *   Test feature card grid is responsive
    *   Test how-it-works steps display correctly

*   **7.5. Manual Testing:**
    *   Verify all 6 service pages are accessible and load without errors
    *   Test scrolling through each service page is smooth
    *   Verify all icons render correctly (no missing icons)
    *   Test hover effects on feature cards
    *   Test CTAs are clearly visible and clickable
    *   Verify content is readable and well-formatted
    *   Test keyboard navigation through service pages
    *   Browser compatibility (Chrome, Firefox, Safari, Edge)
