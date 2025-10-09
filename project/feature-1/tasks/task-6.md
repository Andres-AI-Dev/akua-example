# Task: Landing Page Composition & Routing

**1. Description**

Compose the complete landing page by integrating all section components (Hero, Features, Pricing, Footer) into a cohesive page layout. Set up React Router to handle the landing page route and prepare the routing structure for future pages. Integrate the static data from landing-data.ts and ensure all components work together seamlessly.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   LandingPage component integrates Hero, Features, Pricing, and Footer
*   React Router is configured with the landing page as the home route (/)
*   Static data from landing-data.ts is properly passed to components
*   Page flows naturally from section to section
*   Smooth scrolling is enabled for anchor links (optional enhancement)
*   All sections are properly spaced and visually cohesive
*   CTA buttons have placeholder handlers
*   All tests pass with >80% code coverage

**4. Files to be Modified/Created**

*   `src/pages/LandingPage.tsx` - Main landing page component
*   `src/pages/LandingPage.test.tsx` - Landing page tests
*   `src/App.tsx` - Router configuration (modify)
*   `src/data/landing-data.ts` - Export all static data (modify/verify)

**5. Dependencies**

*   Task 1: Project setup must be completed
*   Task 2: Hero component must be implemented
*   Task 3: Features component must be implemented
*   Task 4: Pricing component must be implemented
*   Task 5: Footer component must be implemented

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Verify and complete landing data file**
    - File(s) involved: `src/data/landing-data.ts`
    - React specifics:
        - Ensure aiServices array is exported
        - Ensure pricingTiers array is exported
        - Add hero data object
    - Algorithm:
        - Define hero data:
            ```typescript
            export const heroData = {
              headline: 'Transform Your Business with AI-Powered Services',
              subheadline: 'Unlock the power of artificial intelligence with our comprehensive suite of AI tools and services designed for modern businesses.',
              ctaText: 'Get Started Free'
            }
            ```
        - Verify all exports:
            ```typescript
            export { heroData, aiServices, pricingTiers }
            ```

2.  **Create LandingPage component structure**
    - File(s) involved: `src/pages/LandingPage.tsx`
    - React specifics:
        - Functional component with TypeScript
        - Import all section components
        - Import data from landing-data.ts
        - Component signature: `export default function LandingPage()`
        - Use default export for page components (per PAD.md)
    - Styling:
        - Container: `min-h-screen bg-white`
        - Use semantic HTML: `<main>` wrapper
        - No additional spacing needed (sections handle their own)

3.  **Implement component handlers**
    - File(s) involved: `src/pages/LandingPage.tsx`
    - React specifics:
        - Create handler functions for CTA clicks
        - Use console.log for placeholders (will be replaced in future)
    - Algorithm:
        - Hero CTA handler:
            ```typescript
            const handleHeroClick = () => {
              console.log('Hero CTA clicked - will navigate to signup')
              // Future: navigate to signup page
            }
            ```
        - Pricing CTA handler:
            ```typescript
            const handlePricingClick = (tierId: string) => {
              console.log(`Pricing CTA clicked for tier: ${tierId}`)
              // Future: navigate to checkout or signup with tier preselected
            }
            ```

4.  **Compose LandingPage with all sections**
    - File(s) involved: `src/pages/LandingPage.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { Hero } from '@/components/features/Hero'
        import { Features } from '@/components/features/Features'
        import { Pricing } from '@/components/features/Pricing'
        import { Footer } from '@/components/layout/Footer'
        import { heroData, aiServices, pricingTiers } from '@/data/landing-data'

        export default function LandingPage() {
          const handleHeroClick = () => {
            console.log('Hero CTA clicked')
            // Future: navigate('/signup')
          }

          const handlePricingClick = (tierId: string) => {
            console.log(`Pricing tier selected: ${tierId}`)
            // Future: navigate('/signup', { state: { tier: tierId } })
          }

          return (
            <main className="min-h-screen bg-white">
              <Hero
                headline={heroData.headline}
                subheadline={heroData.subheadline}
                ctaText={heroData.ctaText}
                onCtaClick={handleHeroClick}
              />
              <Features services={aiServices} />
              <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
              <Footer />
            </main>
          )
        }
        ```

5.  **Configure React Router in App.tsx**
    - File(s) involved: `src/App.tsx`
    - React specifics:
        - Import necessary Router components
        - Set up Routes and Route
        - Configure landing page as home route
        - Prepare structure for future routes
    - Algorithm:
        - Complete App.tsx structure:
            ```tsx
            import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
            import LandingPage from '@/pages/LandingPage'

            function App() {
              return (
                <Router>
                  <div className="min-h-screen bg-background">
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      {/* Future routes:
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                      */}
                    </Routes>
                  </div>
                </Router>
              )
            }

            export default App
            ```

6.  **Add smooth scrolling (optional enhancement)**
    - File(s) involved: `src/index.css`
    - Styling:
        - Add to global CSS:
            ```css
            html {
              scroll-behavior: smooth;
            }
            ```
        - This enables smooth scrolling for anchor links

7.  **Update document metadata**
    - File(s) involved: `index.html`
    - React specifics:
        - Update page title
        - Add meta description
    - Algorithm:
        - Update `<title>`:
            ```html
            <title>Akua - AI-Powered Services for Modern Businesses</title>
            ```
        - Add meta tags:
            ```html
            <meta name="description" content="Transform your business with comprehensive AI services including content generation, image AI, analytics, and custom solutions.">
            ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   File: `src/pages/LandingPage.test.tsx`
    *   Tools: Vitest + React Testing Library

*   **7.2. Component Tests:**
    *   Test case 1: LandingPage renders all major sections
        - Render LandingPage component
        - Assert Hero section exists (check for headline)
        - Assert Features section exists (check for section heading)
        - Assert Pricing section exists (check for pricing heading)
        - Assert Footer exists (check for copyright text)
    *   Test case 2: Hero receives correct props
        - Render LandingPage
        - Assert Hero displays the correct headline from heroData
        - Assert Hero displays the correct subheadline
        - Assert Hero displays the correct CTA text
    *   Test case 3: Features receives correct data
        - Render LandingPage
        - Assert correct number of feature cards (6) are rendered
        - Verify aiServices data is passed correctly
    *   Test case 4: Pricing receives correct data
        - Render LandingPage
        - Assert 3 pricing cards are rendered
        - Verify pricingTiers data is passed correctly
    *   Test case 5: Hero CTA click is handled
        - Render LandingPage
        - Mock console.log
        - Click Hero CTA button
        - Assert console.log was called with expected message
    *   Test case 6: Pricing CTA click is handled
        - Render LandingPage
        - Mock console.log
        - Click a pricing tier CTA button
        - Assert console.log was called with tier ID

*   **7.3. Integration Tests:**
    *   Test case 1: Full page rendering in Router context
        - Render App component (includes Router)
        - Assert LandingPage is displayed at "/" route
        - Verify all sections render correctly within Router
    *   Test case 2: Data flow from landing-data to components
        - Import actual landing data
        - Render LandingPage
        - Verify all data is correctly displayed in respective sections

*   **7.4. Manual Testing:**
    *   Visual flow: Scroll through entire page, verify smooth transitions between sections
    *   Data accuracy: Check that all text content matches landing-data.ts
    *   Responsive layout: Test at mobile, tablet, desktop sizes
    *   CTA interactions: Click all CTA buttons, verify console logs
    *   Routing: Navigate to "/" and verify landing page loads
    *   Browser tab: Verify page title and meta description are correct
