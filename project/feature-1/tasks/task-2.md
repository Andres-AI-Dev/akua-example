# Task: Hero Section Component

**1. Description**

Create a professional, visually striking Hero section component that serves as the landing page's primary attention-grabber. This section will communicate Akua's core value proposition with a compelling headline, descriptive subheadline, and prominent call-to-action button. The design should be modern, responsive, and immediately engaging to visitors.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Hero component renders with headline, subheadline, and CTA button
*   Component is fully responsive (mobile, tablet, desktop)
*   CTA button uses Shadcn Button component with proper styling
*   Background has an attractive gradient or visual treatment
*   Text is readable with proper contrast ratios (WCAG AA)
*   Component accepts props for customization (headline, subheadline, ctaText)
*   All tests pass with >80% code coverage

**4. Files to be Modified/Created**

*   `src/components/features/Hero.tsx` - Main Hero component
*   `src/components/features/Hero.test.tsx` - Component tests
*   `src/types/landing.ts` - TypeScript interfaces (HeroProps)

**5. Dependencies**

*   Task 1: Project setup must be completed

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript interfaces**
    - File(s) involved: `src/types/landing.ts`
    - React specifics:
        - Define `HeroProps` interface:
            ```typescript
            export interface HeroProps {
              headline: string
              subheadline: string
              ctaText: string
              onCtaClick?: () => void
            }
            ```

2.  **Create Hero component structure**
    - File(s) involved: `src/components/features/Hero.tsx`
    - React specifics:
        - Create functional component with TypeScript
        - Import necessary dependencies: React, Button from Shadcn, HeroProps
        - Component signature: `export const Hero: React.FC<HeroProps>`
    - Styling:
        - Container: `min-h-screen flex items-center justify-center px-4`
        - Background gradient: `bg-gradient-to-br from-blue-50 to-purple-50`
        - Responsive padding and spacing using Tailwind
    - Algorithm:
        - Accept props: headline, subheadline, ctaText, onCtaClick
        - Render centered content container
        - Handle CTA click with optional callback

3.  **Implement headline section**
    - File(s) involved: `src/components/features/Hero.tsx`
    - React specifics:
        - Use `<h1>` element for semantic HTML
        - Apply typography hierarchy
    - Styling:
        - Desktop: `text-5xl md:text-6xl lg:text-7xl font-bold`
        - Color: `text-gray-900`
        - Spacing: `mb-6`
        - Text alignment: `text-center`
        - Gradient text effect (optional): `bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`

4.  **Implement subheadline section**
    - File(s) involved: `src/components/features/Hero.tsx`
    - React specifics:
        - Use `<p>` element with proper spacing
    - Styling:
        - Typography: `text-lg md:text-xl lg:text-2xl`
        - Color: `text-gray-600`
        - Spacing: `mb-8 max-w-2xl mx-auto`
        - Text alignment: `text-center`

5.  **Implement CTA button**
    - File(s) involved: `src/components/features/Hero.tsx`
    - React specifics:
        - Use Shadcn `<Button>` component
        - Add onClick handler that calls `onCtaClick` if provided
    - Styling:
        - Shadcn variant: `default` or `primary`
        - Size: `lg` for prominence
        - Additional classes: `px-8 py-6 text-lg`
    - Algorithm:
        - Handle click event:
            ```typescript
            const handleCtaClick = () => {
              if (onCtaClick) {
                onCtaClick()
              }
            }
            ```

6.  **Add responsive layout**
    - File(s) involved: `src/components/features/Hero.tsx`
    - Styling:
        - Mobile (< 640px): Single column, smaller text, compact spacing
        - Tablet (640px-1024px): Medium text, balanced spacing
        - Desktop (> 1024px): Large text, generous spacing
        - Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

7.  **Full component implementation**
    - File(s) involved: `src/components/features/Hero.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { Button } from '@/components/ui/button'
        import { HeroProps } from '@/types/landing'

        export const Hero: React.FC<HeroProps> = ({
          headline,
          subheadline,
          ctaText,
          onCtaClick
        }) => {
          return (
            <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {headline}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  {subheadline}
                </p>
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg"
                  onClick={onCtaClick}
                >
                  {ctaText}
                </Button>
              </div>
            </section>
          )
        }
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   File: `src/components/features/Hero.test.tsx`
    *   Tools: Vitest + React Testing Library

*   **7.2. Component Tests:**
    *   Test case 1: Component renders with provided props
        - Render Hero with test props
        - Assert headline, subheadline, and CTA text are displayed
        - Use `screen.getByRole('heading')` and `screen.getByRole('button')`
    *   Test case 2: CTA button click triggers callback
        - Render Hero with mock `onCtaClick` function
        - Simulate button click using `userEvent.click()`
        - Assert callback was called once
    *   Test case 3: Component renders without onCtaClick callback
        - Render Hero without `onCtaClick` prop
        - Simulate button click
        - Assert no errors occur
    *   Test case 4: Component applies correct CSS classes
        - Render Hero component
        - Assert container has gradient background classes
        - Assert text elements have proper styling classes

*   **7.3. Accessibility Tests:**
    *   Test case 1: Proper heading hierarchy
        - Assert `<h1>` element exists
        - Check that it's the main heading
    *   Test case 2: Button has accessible role
        - Assert button is keyboard accessible
        - Check that it has proper ARIA attributes

*   **7.4. Manual Testing:**
    *   Visual regression: Verify design matches expectations at different viewport sizes
    *   Responsive design: Test on mobile (375px), tablet (768px), desktop (1440px)
    *   Typography: Ensure text is readable and hierarchy is clear
    *   Color contrast: Verify WCAG AA compliance using browser tools
    *   Button states: Check hover, focus, and active states
