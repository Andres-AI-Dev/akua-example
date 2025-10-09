# Task: Pricing Section Component

**1. Description**

Create a Pricing section that displays three pricing tiers (Starter, Professional, Enterprise) in a clear, comparative layout. Each tier should show the price, key features, and a call-to-action button. The "Professional" tier should be highlighted as the recommended option. The design should make it easy for users to compare offerings and make a decision.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Pricing section displays 3 pricing tiers in a responsive grid
*   Each tier includes: name, price, feature list, and CTA button
*   Professional tier is visually highlighted as "Most Popular"
*   Uses Shadcn Card and Badge components
*   Responsive layout: 1 column mobile, 3 columns desktop
*   Feature lists are clearly formatted with check icons
*   CTA buttons have appropriate text per tier
*   All tests pass with >80% code coverage

**4. Files to be Modified/Created**

*   `src/components/features/Pricing.tsx` - Main Pricing section component
*   `src/components/features/PricingCard.tsx` - Individual pricing tier card component
*   `src/components/features/Pricing.test.tsx` - Pricing section tests
*   `src/components/features/PricingCard.test.tsx` - Pricing card tests
*   `src/types/landing.ts` - TypeScript interfaces (PricingTier, PricingCardProps)
*   `src/data/landing-data.ts` - Static pricing data

**5. Dependencies**

*   Task 1: Project setup must be completed

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript interfaces**
    - File(s) involved: `src/types/landing.ts`
    - React specifics:
        - Define `PricingTier` interface:
            ```typescript
            export interface PricingTier {
              id: string
              name: string
              price: string | number // Allow "Contact Us" for Enterprise
              description: string
              features: string[]
              highlighted: boolean
              ctaText: string
            }
            ```
        - Define `PricingCardProps` interface:
            ```typescript
            export interface PricingCardProps {
              tier: PricingTier
              onCtaClick?: (tierId: string) => void
            }
            ```
        - Define `PricingProps` interface:
            ```typescript
            export interface PricingProps {
              tiers: PricingTier[]
              onCtaClick?: (tierId: string) => void
            }
            ```

2.  **Create pricing data**
    - File(s) involved: `src/data/landing-data.ts`
    - React specifics:
        - Export array of pricing tiers
        - Include 3 tiers with realistic features
    - Algorithm:
        - Define tiers array:
            ```typescript
            import { PricingTier } from '@/types/landing'

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
                  'Standard processing speed'
                ],
                highlighted: false,
                ctaText: 'Get Started'
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
                  'Team collaboration'
                ],
                highlighted: true,
                ctaText: 'Start Free Trial'
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
                  'Custom training'
                ],
                highlighted: false,
                ctaText: 'Contact Sales'
              }
            ]
            ```

3.  **Create PricingCard component**
    - File(s) involved: `src/components/features/PricingCard.tsx`
    - React specifics:
        - Functional component with TypeScript
        - Import Shadcn Card, Badge, Button components
        - Import Check icon from lucide-react
        - Component signature: `export const PricingCard: React.FC<PricingCardProps>`
    - Styling:
        - Card: Base classes + conditional highlighting
        - Highlighted card: `border-primary border-2 shadow-xl scale-105 relative`
        - Regular card: `border-gray-200 hover:shadow-lg transition-all duration-300`
        - Badge: Position `absolute -top-4 left-1/2 -translate-x-1/2`
    - Algorithm:
        - Accept props: tier, onCtaClick
        - Conditionally render "Most Popular" badge if highlighted
        - Format price display (handle string vs number)
        - Map features array to list items with check icons
        - Handle CTA button click

4.  **Implement PricingCard component**
    - File(s) involved: `src/components/features/PricingCard.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
        import { Button } from '@/components/ui/button'
        import { Badge } from '@/components/ui/badge'
        import { Check } from 'lucide-react'
        import { PricingCardProps } from '@/types/landing'

        export const PricingCard: React.FC<PricingCardProps> = ({ tier, onCtaClick }) => {
          const handleClick = () => {
            if (onCtaClick) {
              onCtaClick(tier.id)
            }
          }

          const cardClasses = tier.highlighted
            ? 'border-primary border-2 shadow-xl relative'
            : 'border-gray-200 hover:shadow-lg transition-all duration-300'

          return (
            <Card className={cardClasses}>
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{tier.description}</CardDescription>
                <div className="mt-4">
                  {typeof tier.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">${tier.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? 'default' : 'outline'}
                  size="lg"
                  onClick={handleClick}
                >
                  {tier.ctaText}
                </Button>
              </CardFooter>
            </Card>
          )
        }
        ```

5.  **Create Pricing section component structure**
    - File(s) involved: `src/components/features/Pricing.tsx`
    - React specifics:
        - Functional component with TypeScript
        - Import PricingCard component
        - Component signature: `export const Pricing: React.FC<PricingProps>`
    - Styling:
        - Section container: `py-20 px-4 bg-gray-50`
        - Content wrapper: `max-w-7xl mx-auto`
        - Heading: `text-4xl md:text-5xl font-bold text-center mb-4`
        - Subheading: `text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto`
        - Grid: `grid grid-cols-1 md:grid-cols-3 gap-8 items-start`

6.  **Implement Pricing component**
    - File(s) involved: `src/components/features/Pricing.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { PricingCard } from './PricingCard'
        import { PricingProps } from '@/types/landing'

        export const Pricing: React.FC<PricingProps> = ({ tiers, onCtaClick }) => {
          return (
            <section className="py-20 px-4 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                  Choose the perfect plan for your needs. All plans include access to our core AI services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {tiers.map((tier) => (
                    <PricingCard key={tier.id} tier={tier} onCtaClick={onCtaClick} />
                  ))}
                </div>
              </div>
            </section>
          )
        }
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   File: `src/components/features/PricingCard.test.tsx`
    *   Tools: Vitest + React Testing Library

*   **7.2. Component Tests - PricingCard:**
    *   Test case 1: PricingCard renders with numeric price
        - Render PricingCard with tier containing price: 99
        - Assert price "$99" and "/month" are displayed
    *   Test case 2: PricingCard renders with string price
        - Render PricingCard with tier containing price: "Contact Us"
        - Assert "Contact Us" is displayed
    *   Test case 3: Highlighted card shows "Most Popular" badge
        - Render PricingCard with highlighted: true
        - Assert Badge with "Most Popular" text exists
    *   Test case 4: Non-highlighted card has no badge
        - Render PricingCard with highlighted: false
        - Assert no Badge is present
    *   Test case 5: All features are displayed
        - Render PricingCard with 5 features
        - Assert all 5 feature items are in the list
        - Assert each has a check icon
    *   Test case 6: CTA button click triggers callback
        - Render PricingCard with mock onCtaClick
        - Click the CTA button
        - Assert callback was called with correct tier ID

*   **7.3. Component Tests - Pricing:**
    *   File: `src/components/features/Pricing.test.tsx`
    *   Test case 1: Pricing section renders all tier cards
        - Render Pricing with 3 tiers
        - Assert 3 PricingCard components are rendered
    *   Test case 2: Section heading is displayed
        - Render Pricing component
        - Assert heading "Simple, Transparent Pricing" exists
    *   Test case 3: Highlighted tier is correctly identified
        - Render Pricing with tiers (middle one highlighted)
        - Assert only one tier has the "Most Popular" badge

*   **7.4. Integration Tests:**
    *   Test case 1: Pricing component with actual landing data
        - Import `pricingTiers` from `src/data/landing-data.ts`
        - Render Pricing with real data
        - Assert all 3 tiers are displayed with correct information

*   **7.5. Manual Testing:**
    *   Responsive layout: Verify cards stack on mobile, display in grid on desktop
    *   Visual hierarchy: Check that highlighted card stands out
    *   Feature lists: Ensure all features are readable with proper spacing
    *   Button states: Test hover, focus, and active states
    *   Price formatting: Verify both numeric and string prices display correctly
