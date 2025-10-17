# Task 3: Features and Pricing Pages

**1. Description**

Create two dedicated pages: a Features page that provides an overview of all AI services in one place (similar to the Features section on the landing page but as a full page), and a Pricing page with detailed pricing comparison, feature tables, FAQs, and CTAs for each pricing tier. Both pages should be fully responsive and interactive.

**2. Parent Feature**

*   [../PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Features page is accessible at /features route
*   Features page displays all 6 AI services in a grid layout
*   Each service card on Features page is clickable and navigates to service detail page
*   Pricing page is accessible at /pricing route
*   Pricing page displays all 3 tiers (Starter, Professional, Enterprise) with detailed features
*   Pricing page includes a feature comparison table
*   Pricing page includes pricing FAQs section
*   All CTA buttons on pricing tiers navigate to /contact
*   Both pages are fully responsive across all breakpoints
*   All tests pass (unit and component tests)

**4. Files to be Modified/Created**

*   `src/pages/FeaturesPage.tsx` (NEW)
*   `src/pages/PricingPage.tsx` (NEW)
*   `src/components/pricing/PricingCard.tsx` (NEW)
*   `src/components/pricing/PricingComparisonTable.tsx` (NEW)
*   `src/components/pricing/PricingFAQ.tsx` (NEW)
*   `src/types/pricing.ts` (NEW)
*   `src/types/faq.ts` (NEW)
*   `src/data/pricing.ts` (NEW)
*   `src/data/pricing-faqs.ts` (NEW)
*   `src/App.tsx` (MODIFIED - add routes)
*   `src/pages/FeaturesPage.test.tsx` (NEW)
*   `src/pages/PricingPage.test.tsx` (NEW)
*   `src/components/pricing/PricingCard.test.tsx` (NEW)

**5. Dependencies**

*   Task 1 (Header and Layout)
*   Task 2 (Service data structures)

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create pricing TypeScript interfaces**
    - File(s) involved: `src/types/pricing.ts`
    - Algorithm:
        ```typescript
        export interface PricingFeature {
          text: string;
          included: boolean;
        }

        export interface PricingTier {
          id: string;
          name: string;
          price: number;
          period: string; // 'month' | 'year'
          description: string;
          features: string[];
          highlighted?: boolean; // Most popular
          ctaText: string;
        }

        export interface ComparisonFeature {
          category: string;
          features: {
            name: string;
            starter: boolean | string;
            professional: boolean | string;
            enterprise: boolean | string;
          }[];
        }
        ```

2.  **Create FAQ TypeScript interface**
    - File(s) involved: `src/types/faq.ts`
    - Algorithm:
        ```typescript
        export interface FAQ {
          id: string;
          question: string;
          answer: string;
          category?: string;
        }
        ```

3.  **Create pricing data file**
    - File(s) involved: `src/data/pricing.ts`
    - Algorithm:
        ```typescript
        import { PricingTier, ComparisonFeature } from '@/types/pricing';

        export const pricingTiers: PricingTier[] = [
          {
            id: 'starter',
            name: 'Starter',
            price: 29,
            period: 'month',
            description: 'Perfect for individuals and small projects',
            features: [
              '10,000 AI requests/month',
              'Basic AI content generation',
              'Email support',
              'API access',
              '5 team members'
            ],
            ctaText: 'Start Free Trial'
          },
          {
            id: 'professional',
            name: 'Professional',
            price: 99,
            period: 'month',
            description: 'For growing teams and businesses',
            features: [
              '100,000 AI requests/month',
              'All AI services included',
              'Priority support',
              'Advanced API access',
              'Unlimited team members',
              'Custom integrations',
              'Advanced analytics'
            ],
            highlighted: true,
            ctaText: 'Get Started'
          },
          {
            id: 'enterprise',
            name: 'Enterprise',
            price: 0, // Custom pricing
            period: 'custom',
            description: 'For large organizations with custom needs',
            features: [
              'Unlimited AI requests',
              'Dedicated account manager',
              '24/7 phone support',
              'Custom AI model training',
              'On-premise deployment option',
              'SLA guarantees',
              'Advanced security features'
            ],
            ctaText: 'Contact Sales'
          }
        ];

        export const comparisonFeatures: ComparisonFeature[] = [
          {
            category: 'AI Services',
            features: [
              { name: 'Content Generation', starter: true, professional: true, enterprise: true },
              { name: 'Image & Video AI', starter: false, professional: true, enterprise: true },
              { name: 'AI Analytics', starter: false, professional: true, enterprise: true },
              { name: 'Custom Solutions', starter: false, professional: false, enterprise: true },
              { name: 'Integration Services', starter: false, professional: true, enterprise: true },
              { name: 'AI Consultation', starter: false, professional: false, enterprise: true }
            ]
          },
          {
            category: 'Support',
            features: [
              { name: 'Email Support', starter: true, professional: true, enterprise: true },
              { name: 'Priority Support', starter: false, professional: true, enterprise: true },
              { name: '24/7 Phone Support', starter: false, professional: false, enterprise: true },
              { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true }
            ]
          },
          {
            category: 'Features',
            features: [
              { name: 'API Access', starter: 'Basic', professional: 'Advanced', enterprise: 'Enterprise' },
              { name: 'Team Members', starter: '5', professional: 'Unlimited', enterprise: 'Unlimited' },
              { name: 'Monthly Requests', starter: '10,000', professional: '100,000', enterprise: 'Unlimited' }
            ]
          }
        ];
        ```

4.  **Create pricing FAQs data file**
    - File(s) involved: `src/data/pricing-faqs.ts`
    - Algorithm:
        ```typescript
        import { FAQ } from '@/types/faq';

        export const pricingFAQs: FAQ[] = [
          {
            id: '1',
            question: 'Can I change my plan later?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any charges.'
          },
          {
            id: '2',
            question: 'What happens if I exceed my monthly request limit?',
            answer: 'If you exceed your monthly limit, your requests will be temporarily paused. You can either wait until next month or upgrade to a higher tier for more capacity.'
          },
          {
            id: '3',
            question: 'Is there a free trial available?',
            answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.'
          },
          {
            id: '4',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via invoice.'
          },
          {
            id: '5',
            question: 'Can I cancel my subscription anytime?',
            answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
          },
          {
            id: '6',
            question: 'Do you offer discounts for annual billing?',
            answer: 'Yes! Save 20% when you choose annual billing instead of monthly. Contact our sales team for details.'
          }
        ];
        ```

5.  **Create FeaturesPage component**
    - File(s) involved: `src/pages/FeaturesPage.tsx`
    - React specifics:
        - Import servicesDetail from task 2
        - Use Card components for service items
        - Use useNavigate for click handlers
    - Styling:
        - Hero section: `bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20`
        - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
        - Cards: `cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1`
    - Algorithm:
        ```typescript
        import { Card } from '@/components/ui/card';
        import { Button } from '@/components/ui/button';
        import { useNavigate } from 'react-router-dom';
        import { servicesDetail } from '@/data/services-detail';
        import * as Icons from 'lucide-react';

        export function FeaturesPage() {
          const navigate = useNavigate();
          const services = Object.values(servicesDetail);

          return (
            <div>
              {/* Hero Section */}
              <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Powerful AI Services
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Explore our comprehensive suite of AI-powered tools designed to transform your business operations
                  </p>
                  <Button asChild size="lg">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </section>

              {/* Services Grid */}
              <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => {
                    // Get first feature icon as card icon
                    const IconName = service.features[0]?.icon || 'Sparkles';
                    const Icon = Icons[IconName as keyof typeof Icons] as any;

                    return (
                      <Card
                        key={service.id}
                        className="p-6 cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            {Icon && <Icon className="w-6 h-6 text-primary" />}
                          </div>
                          <h3 className="font-bold text-xl">{service.name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{service.tagline}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              {feature.title}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </div>
          );
        }
        ```

6.  **Create PricingCard component**
    - File(s) involved: `src/components/pricing/PricingCard.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface PricingCardProps {
              tier: PricingTier;
            }
            ```
        - Use Card, Badge, Button components
    - Styling:
        - Highlighted card: `border-primary border-2 shadow-xl`
        - Regular card: `border`
        - Badge: `absolute -top-3 left-1/2 -translate-x-1/2` for "Most Popular"
    - Algorithm:
        ```typescript
        import { Card } from '@/components/ui/card';
        import { Button } from '@/components/ui/button';
        import { Badge } from '@/components/ui/badge';
        import { Link } from 'react-router-dom';
        import { PricingTier } from '@/types/pricing';
        import { Check } from 'lucide-react';

        interface PricingCardProps {
          tier: PricingTier;
        }

        export function PricingCard({ tier }: PricingCardProps) {
          const isCustom = tier.period === 'custom';

          return (
            <Card className={`relative p-8 ${tier.highlighted ? 'border-primary border-2 shadow-xl' : ''}`}>
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="mb-4">
                  {isCustom ? (
                    <div className="text-3xl font-bold">Custom</div>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground">/{tier.period}</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full"
                variant={tier.highlighted ? 'default' : 'outline'}
              >
                <Link to="/contact">{tier.ctaText}</Link>
              </Button>
            </Card>
          );
        }
        ```

7.  **Create PricingComparisonTable component**
    - File(s) involved: `src/components/pricing/PricingComparisonTable.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface PricingComparisonTableProps {
              features: ComparisonFeature[];
            }
            ```
        - Use Table components (if available) or custom table
    - Styling:
        - Responsive: Horizontal scroll on mobile
        - Sticky header row
        - Alternating row backgrounds
    - Algorithm:
        ```typescript
        import { ComparisonFeature } from '@/types/pricing';
        import { Check, X } from 'lucide-react';

        interface PricingComparisonTableProps {
          features: ComparisonFeature[];
        }

        export function PricingComparisonTable({ features }: PricingComparisonTableProps) {
          const renderValue = (value: boolean | string) => {
            if (typeof value === 'boolean') {
              return value ? (
                <Check className="w-5 h-5 text-primary mx-auto" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground mx-auto" />
              );
            }
            return <span className="text-sm">{value}</span>;
          };

          return (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold">Professional</th>
                    <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category) => (
                    <React.Fragment key={category.category}>
                      <tr className="bg-muted/50">
                        <td colSpan={4} className="py-3 px-4 font-semibold">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, idx) => (
                        <tr key={idx} className="border-b hover:bg-muted/30">
                          <td className="py-3 px-4">{feature.name}</td>
                          <td className="py-3 px-4 text-center">
                            {renderValue(feature.starter)}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {renderValue(feature.professional)}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {renderValue(feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        ```

8.  **Create PricingFAQ component**
    - File(s) involved: `src/components/pricing/PricingFAQ.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface PricingFAQProps {
              faqs: FAQ[];
            }
            ```
        - Use Accordion component from Shadcn
    - Styling:
        - Accordion items with smooth expand/collapse
    - Algorithm:
        ```typescript
        import {
          Accordion,
          AccordionContent,
          AccordionItem,
          AccordionTrigger,
        } from '@/components/ui/accordion';
        import { FAQ } from '@/types/faq';

        interface PricingFAQProps {
          faqs: FAQ[];
        }

        export function PricingFAQ({ faqs }: PricingFAQProps) {
          return (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          );
        }
        ```

9.  **Create PricingPage component**
    - File(s) involved: `src/pages/PricingPage.tsx`
    - React specifics:
        - Import all pricing data and components
        - Structured layout with sections
    - Algorithm:
        ```typescript
        import { PricingCard } from '@/components/pricing/PricingCard';
        import { PricingComparisonTable } from '@/components/pricing/PricingComparisonTable';
        import { PricingFAQ } from '@/components/pricing/PricingFAQ';
        import { pricingTiers, comparisonFeatures } from '@/data/pricing';
        import { pricingFAQs } from '@/data/pricing-faqs';

        export function PricingPage() {
          return (
            <div>
              {/* Hero Section */}
              <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Simple, Transparent Pricing
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Choose the perfect plan for your needs. All plans include a 14-day free trial.
                  </p>
                </div>
              </section>

              {/* Pricing Cards */}
              <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {pricingTiers.map((tier) => (
                    <PricingCard key={tier.id} tier={tier} />
                  ))}
                </div>
              </section>

              {/* Comparison Table */}
              <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Compare Plans
                  </h2>
                  <div className="max-w-5xl mx-auto">
                    <PricingComparisonTable features={comparisonFeatures} />
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto">
                  <PricingFAQ faqs={pricingFAQs} />
                </div>
              </section>
            </div>
          );
        }
        ```

10. **Add routes to App.tsx**
    - File(s) involved: `src/App.tsx`
    - Algorithm:
        ```typescript
        import { FeaturesPage } from './pages/FeaturesPage';
        import { PricingPage } from './pages/PricingPage';

        // Inside Routes:
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test pricingTiers array contains exactly 3 tiers
    *   Test each tier has required fields (id, name, price, features)
    *   Test comparisonFeatures has correct structure
    *   Test pricingFAQs contains at least 5 FAQs
    *   Test feature comparison logic for boolean and string values
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   **PricingCard.test.tsx:**
        *   Test renders tier name and description
        *   Test renders price correctly (including "Custom" for enterprise)
        *   Test renders all features with checkmarks
        *   Test highlighted card has border styling
        *   Test "Most Popular" badge appears only on highlighted tier
        *   Test CTA button links to /contact
    *   **PricingComparisonTable.test.tsx:**
        *   Test table renders correct number of rows
        *   Test boolean values render as check/x icons
        *   Test string values render as text
        *   Test category headers are bold
    *   **PricingFAQ.test.tsx:**
        *   Test accordion renders all FAQ items
        *   Test accordion items can be expanded
        *   Test only one item can be open at a time
    *   **FeaturesPage.test.tsx:**
        *   Test page renders hero section
        *   Test page renders all 6 service cards
        *   Test clicking service card navigates to correct service page
    *   **PricingPage.test.tsx:**
        *   Test page renders all 3 pricing cards
        *   Test page renders comparison table
        *   Test page renders FAQ section
    *   Tools: Vitest + React Testing Library

*   **7.3. Integration Tests:**
    *   Test navigation to /features from header
    *   Test navigation to /pricing from header and various CTAs
    *   Test clicking service card on Features page navigates correctly
    *   Test CTA buttons on pricing tiers navigate to /contact
    *   Test accordion interactions on Pricing page

*   **7.4. Visual Regression Tests:**
    *   Test FeaturesPage responsive layout (mobile, tablet, desktop)
    *   Test PricingPage pricing cards layout (stacked on mobile, grid on desktop)
    *   Test comparison table horizontal scroll on mobile
    *   Test highlighted pricing card stands out visually
    *   Test accordion expand/collapse animation

*   **7.5. Manual Testing:**
    *   Verify Features page loads and displays all services correctly
    *   Test hover effects on service cards
    *   Verify Pricing page displays all tiers clearly
    *   Test comparison table scrolling on mobile devices
    *   Verify FAQ accordion works smoothly
    *   Test all CTAs navigate to correct destinations
    *   Verify pricing information is accurate and clear
    *   Test accessibility (keyboard navigation, screen readers)
    *   Browser compatibility (Chrome, Firefox, Safari, Edge)
