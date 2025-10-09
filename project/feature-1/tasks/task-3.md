# Task: Features Section Component

**1. Description**

Create a Features section that showcases Akua's AI services in an organized, visually appealing grid layout. This section will display 3-6 service offerings, each with an icon, title, and description. The component should be modular, with individual feature cards that can be reused and easily customized.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Features section displays 3-6 AI service offerings in a responsive grid
*   Each feature card includes an icon, title, and description
*   FeatureCard component is reusable and accepts props
*   Grid layout adapts to different screen sizes (1 column mobile, 2 tablet, 3 desktop)
*   Uses Shadcn Card component for consistent styling
*   Icons from Lucide React are properly integrated
*   Section has a clear heading and optional subheading
*   All tests pass with >80% code coverage

**4. Files to be Modified/Created**

*   `src/components/features/Features.tsx` - Main Features section component
*   `src/components/features/FeatureCard.tsx` - Individual feature card component
*   `src/components/features/Features.test.tsx` - Features section tests
*   `src/components/features/FeatureCard.test.tsx` - Feature card tests
*   `src/types/landing.ts` - TypeScript interfaces (AIService, FeatureCardProps)
*   `src/data/landing-data.ts` - Static feature data

**5. Dependencies**

*   Task 1: Project setup must be completed

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript interfaces**
    - File(s) involved: `src/types/landing.ts`
    - React specifics:
        - Define `AIService` interface:
            ```typescript
            export interface AIService {
              id: string
              name: string
              description: string
              icon: string // Lucide icon name
            }
            ```
        - Define `FeatureCardProps` interface:
            ```typescript
            import { LucideIcon } from 'lucide-react'

            export interface FeatureCardProps {
              name: string
              description: string
              icon: LucideIcon
            }
            ```
        - Define `FeaturesProps` interface:
            ```typescript
            export interface FeaturesProps {
              services: AIService[]
            }
            ```

2.  **Create feature data**
    - File(s) involved: `src/data/landing-data.ts`
    - React specifics:
        - Export array of AI services
        - Include 6 services covering different AI capabilities
    - Algorithm:
        - Define services array:
            ```typescript
            import { AIService } from '@/types/landing'

            export const aiServices: AIService[] = [
              {
                id: 'content-generation',
                name: 'AI Content Generation',
                description: 'Create high-quality written content, from blog posts to marketing copy, powered by advanced language models.',
                icon: 'FileText'
              },
              {
                id: 'image-ai',
                name: 'Image & Video AI',
                description: 'Generate, edit, and enhance images and videos using cutting-edge AI technology.',
                icon: 'Image'
              },
              {
                id: 'analytics',
                name: 'AI-Powered Analytics',
                description: 'Extract insights from your data with intelligent analysis and predictive modeling.',
                icon: 'BarChart3'
              },
              {
                id: 'custom-solutions',
                name: 'Custom AI Solutions',
                description: 'Tailored AI implementations designed specifically for your unique business needs.',
                icon: 'Cpu'
              },
              {
                id: 'integration',
                name: 'AI Integration Services',
                description: 'Seamlessly integrate AI capabilities into your existing workflows and applications.',
                icon: 'Workflow'
              },
              {
                id: 'consultation',
                name: 'AI Consultation',
                description: 'Expert guidance on AI strategy, implementation, and optimization for your organization.',
                icon: 'MessageSquare'
              }
            ]
            ```

3.  **Create FeatureCard component**
    - File(s) involved: `src/components/features/FeatureCard.tsx`
    - React specifics:
        - Functional component with TypeScript
        - Import Shadcn Card components
        - Component signature: `export const FeatureCard: React.FC<FeatureCardProps>`
    - Styling:
        - Use Shadcn Card, CardHeader, CardTitle, CardDescription
        - Icon container: `mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10`
        - Icon: `h-6 w-6 text-primary`
        - Card: `hover:shadow-lg transition-shadow duration-300`
    - Algorithm:
        - Accept props: name, description, icon (as LucideIcon component)
        - Render icon in styled container
        - Display name as CardTitle
        - Display description as CardDescription

4.  **Implement FeatureCard component**
    - File(s) involved: `src/components/features/FeatureCard.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
        import { FeatureCardProps } from '@/types/landing'

        export const FeatureCard: React.FC<FeatureCardProps> = ({
          name,
          description,
          icon: Icon
        }) => {
          return (
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
                <CardDescription className="text-gray-600">{description}</CardDescription>
              </CardHeader>
            </Card>
          )
        }
        ```

5.  **Create Features section component structure**
    - File(s) involved: `src/components/features/Features.tsx`
    - React specifics:
        - Functional component with TypeScript
        - Import FeatureCard, icons from lucide-react
        - Component signature: `export const Features: React.FC<FeaturesProps>`
        - Use dynamic icon mapping from string to component
    - Styling:
        - Section container: `py-20 px-4 bg-white`
        - Content wrapper: `max-w-7xl mx-auto`
        - Heading: `text-4xl md:text-5xl font-bold text-center mb-4`
        - Subheading: `text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto`
        - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

6.  **Implement icon mapping utility**
    - File(s) involved: `src/components/features/Features.tsx`
    - Algorithm:
        - Import all required icons from lucide-react
        - Create icon map:
            ```typescript
            import { FileText, Image, BarChart3, Cpu, Workflow, MessageSquare, LucideIcon } from 'lucide-react'

            const iconMap: Record<string, LucideIcon> = {
              FileText,
              Image,
              BarChart3,
              Cpu,
              Workflow,
              MessageSquare
            }
            ```
        - Map service.icon string to actual component

7.  **Implement Features component**
    - File(s) involved: `src/components/features/Features.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { FileText, Image, BarChart3, Cpu, Workflow, MessageSquare, LucideIcon } from 'lucide-react'
        import { FeatureCard } from './FeatureCard'
        import { FeaturesProps } from '@/types/landing'

        const iconMap: Record<string, LucideIcon> = {
          FileText,
          Image,
          BarChart3,
          Cpu,
          Workflow,
          MessageSquare
        }

        export const Features: React.FC<FeaturesProps> = ({ services }) => {
          return (
            <section className="py-20 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                  AI-Powered Services
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to transform your business operations and drive innovation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <FeatureCard
                      key={service.id}
                      name={service.name}
                      description={service.description}
                      icon={iconMap[service.icon]}
                    />
                  ))}
                </div>
              </div>
            </section>
          )
        }
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   File: `src/components/features/FeatureCard.test.tsx`
    *   Tools: Vitest + React Testing Library

*   **7.2. Component Tests - FeatureCard:**
    *   Test case 1: FeatureCard renders with provided props
        - Render FeatureCard with test props (including mock icon)
        - Assert name and description are displayed
        - Use `screen.getByText()` for text content
    *   Test case 2: Icon is rendered correctly
        - Render FeatureCard with a specific Lucide icon
        - Assert icon element exists in the DOM
    *   Test case 3: Card has proper styling classes
        - Render FeatureCard
        - Assert Card component has hover effect classes

*   **7.3. Component Tests - Features:**
    *   File: `src/components/features/Features.test.tsx`
    *   Test case 1: Features section renders all service cards
        - Render Features with test services array (3 items)
        - Assert 3 FeatureCard components are rendered
        - Use `screen.getAllByRole()` or test the card count
    *   Test case 2: Section heading is displayed
        - Render Features component
        - Assert section heading "AI-Powered Services" exists
    *   Test case 3: Grid layout has correct number of columns
        - Render Features component
        - Assert grid container has proper responsive classes
    *   Test case 4: Icon mapping works correctly
        - Render Features with services containing different icon names
        - Assert each card displays the correct icon

*   **7.4. Integration Tests:**
    *   Test case 1: Features component with actual landing data
        - Import `aiServices` from `src/data/landing-data.ts`
        - Render Features with real data
        - Assert 6 service cards are rendered
        - Assert all service names are present

*   **7.5. Manual Testing:**
    *   Responsive grid: Verify layout changes at mobile, tablet, desktop breakpoints
    *   Visual design: Check card styling, spacing, and hover effects
    *   Icon rendering: Ensure all icons display correctly
    *   Typography: Verify text hierarchy and readability
    *   Accessibility: Check keyboard navigation and screen reader compatibility
