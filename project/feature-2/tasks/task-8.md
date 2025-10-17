# Task: 404 Page and Final Route Integration

**1. Description**

Create a 404 Not Found page for invalid routes and ensure all routes are properly configured in App.tsx with code splitting using React.lazy(). Add a catch-all route for 404 handling. The 404 page should be user-friendly with a link back to the homepage.

**2. Parent Feature**

*   [project/feature-2/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   404 Not Found page component created
*   404 page includes friendly message, illustration/icon, and "Go Home" button
*   Navigating to invalid routes (e.g., `/invalid-page-123`) shows 404 page
*   404 page uses Layout wrapper (Header + Footer present)
*   All routes in App.tsx are properly configured
*   Code splitting implemented using React.lazy() for all page components
*   Catch-all route (`path="*"`) added to App.tsx for 404 handling
*   All 16+ routes are functional and tested
*   404 page is responsive

**4. Files to be Modified/Created**

*   `src/pages/NotFoundPage.tsx` - NEW: 404 page component
*   `src/pages/NotFoundPage.test.tsx` - NEW: 404 page tests
*   `src/App.tsx` - MODIFIED: Add all routes, implement lazy loading, add 404 route

**5. Dependencies**

*   Tasks 1-7: All pages must exist before routes can be configured
*   Task 1: Layout component must exist

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create NotFoundPage component**
    - File(s) involved: `src/pages/NotFoundPage.tsx`
    - React specifics:
        - Import: Link, useNavigate from react-router-dom
        - Import: Button from @/components/ui/button
        - Import: Home, Search icons from lucide-react
    - Styling:
        - Container: `min-h-screen flex items-center justify-center`
        - Center content with icon, message, and button
        - Responsive design
    - Algorithm:
        ```typescript
        import { Link, useNavigate } from 'react-router-dom';
        import { Button } from '@/components/ui/button';
        import { Home, Search } from 'lucide-react';

        export default function NotFoundPage() {
          const navigate = useNavigate();

          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="max-w-md w-full text-center px-4">
                {/* 404 Icon/Illustration */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
                    <Search className="h-12 w-12 text-primary" />
                  </div>
                  <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
                  <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
                </div>

                {/* Message */}
                <p className="text-gray-600 mb-8">
                  Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/">
                      <Home className="h-5 w-5 mr-2" />
                      Go to Homepage
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </Button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12">
                  <p className="text-sm text-gray-500 mb-4">Or try one of these pages:</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link to="/features" className="text-primary hover:underline">
                      Features
                    </Link>
                    <Link to="/pricing" className="text-primary hover:underline">
                      Pricing
                    </Link>
                    <Link to="/about" className="text-primary hover:underline">
                      About
                    </Link>
                    <Link to="/contact" className="text-primary hover:underline">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        ```

2.  **Update App.tsx with all routes and code splitting**
    - File(s) involved: `src/App.tsx`
    - React specifics:
        - Import: lazy, Suspense from 'react'
        - Use React.lazy() for code splitting
        - Wrap Routes in Suspense with fallback
        - Add all 16+ routes
        - Add catch-all route for 404
    - Algorithm:
        ```typescript
        import { lazy, Suspense } from 'react';
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
        import { Layout } from '@/components/layout/Layout';

        // Lazy load all page components for code splitting
        const LandingPage = lazy(() => import('@/pages/LandingPage'));
        const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
        const PricingPage = lazy(() => import('@/pages/PricingPage'));
        
        // Service pages
        const ContentGenerationPage = lazy(() => import('@/pages/services/ContentGenerationPage'));
        const ImageVideoAIPage = lazy(() => import('@/pages/services/ImageVideoAIPage'));
        const AnalyticsPage = lazy(() => import('@/pages/services/AnalyticsPage'));
        const CustomSolutionsPage = lazy(() => import('@/pages/services/CustomSolutionsPage'));
        const IntegrationPage = lazy(() => import('@/pages/services/IntegrationPage'));
        const ConsultationPage = lazy(() => import('@/pages/services/ConsultationPage'));

        // Info pages
        const AboutPage = lazy(() => import('@/pages/AboutPage'));
        const ContactPage = lazy(() => import('@/pages/ContactPage'));
        const HelpCenterPage = lazy(() => import('@/pages/HelpCenterPage'));
        const CommunityPage = lazy(() => import('@/pages/CommunityPage'));
        const StatusPage = lazy(() => import('@/pages/StatusPage'));

        // Legal pages
        const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
        const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));

        // 404 page
        const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

        // Loading fallback component
        function LoadingFallback() {
          return (
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          );
        }

        function App() {
          return (
            <Router>
              <Layout>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    {/* Main pages */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />

                    {/* Service pages */}
                    <Route path="/services/content-generation" element={<ContentGenerationPage />} />
                    <Route path="/services/image-video-ai" element={<ImageVideoAIPage />} />
                    <Route path="/services/analytics" element={<AnalyticsPage />} />
                    <Route path="/services/custom-solutions" element={<CustomSolutionsPage />} />
                    <Route path="/services/integration" element={<IntegrationPage />} />
                    <Route path="/services/consultation" element={<ConsultationPage />} />

                    {/* Info pages */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/help" element={<HelpCenterPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/status" element={<StatusPage />} />

                    {/* Legal pages */}
                    <Route path="/privacy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms" element={<TermsOfServicePage />} />

                    {/* 404 catch-all */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </Layout>
            </Router>
          );
        }

        export default App;
        ```

3.  **Create comprehensive route tests**
    - File(s) involved: `src/App.test.tsx`
    - Algorithm:
        - Test each route renders correct page
        - Test invalid route renders 404 page
        - Test lazy loading works
        - Test Suspense fallback appears during loading

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test NotFoundPage renders without errors
    *   Test "Go Home" button has correct link
    *   Test "Go Back" button calls navigate(-1)
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   Test NotFoundPage renders 404 heading
    *   Test NotFoundPage renders "Page Not Found" message
    *   Test NotFoundPage renders "Go to Homepage" button
    *   Test NotFoundPage renders helpful links (Features, Pricing, About, Contact)
    *   Test clicking "Go to Homepage" navigates to /
    *   Test clicking "Go Back" calls navigate function
    *   Tools: Vitest + React Testing Library

*   **7.3. Route Tests:**
    *   Test route `/` renders LandingPage
    *   Test route `/features` renders FeaturesPage
    *   Test route `/pricing` renders PricingPage
    *   Test route `/services/content-generation` renders ContentGenerationPage
    *   Test route `/services/image-video-ai` renders ImageVideoAIPage
    *   Test route `/services/analytics` renders AnalyticsPage
    *   Test route `/services/custom-solutions` renders CustomSolutionsPage
    *   Test route `/services/integration` renders IntegrationPage
    *   Test route `/services/consultation` renders ConsultationPage
    *   Test route `/about` renders AboutPage
    *   Test route `/contact` renders ContactPage
    *   Test route `/help` renders HelpCenterPage
    *   Test route `/community` renders CommunityPage
    *   Test route `/status` renders StatusPage
    *   Test route `/privacy` renders PrivacyPolicyPage
    *   Test route `/terms` renders TermsOfServicePage
    *   Test invalid route `/invalid-page` renders NotFoundPage
    *   Test catch-all route renders NotFoundPage
    *   Expected outcome: All routes functional

*   **7.4. Code Splitting Tests:**
    *   Test React.lazy() is used for all page components
    *   Test Suspense fallback renders during lazy load
    *   Test pages load after lazy loading completes
    *   Expected outcome: Code splitting works correctly

*   **7.5. Manual Testing:**
    *   Navigate to each route manually, verify correct page loads
    *   Navigate to `/invalid-test-page`, verify 404 page shows
    *   On 404 page, click "Go to Homepage", verify navigation to /
    *   On 404 page, click "Go Back", verify browser back button behavior
    *   Click helpful links on 404 page, verify navigation works
    *   Test 404 page is responsive on mobile
    *   Test Layout (Header + Footer) appears on 404 page
