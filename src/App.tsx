import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

// Lazy load all page components for code splitting
const LandingPage = lazy(() => import('@/pages/LandingPage'))
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'))
const PricingPage = lazy(() => import('@/pages/PricingPage'))

// Service pages
const ContentGenerationPage = lazy(() => import('@/pages/services/ContentGenerationPage'))
const ImageVideoAIPage = lazy(() => import('@/pages/services/ImageVideoAIPage'))
const AnalyticsPage = lazy(() => import('@/pages/services/AnalyticsPage'))
const CustomSolutionsPage = lazy(() => import('@/pages/services/CustomSolutionsPage'))
const IntegrationPage = lazy(() => import('@/pages/services/IntegrationPage'))
const ConsultationPage = lazy(() => import('@/pages/services/ConsultationPage'))

// Info pages
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const HelpCenterPage = lazy(() => import('@/pages/HelpCenterPage'))
const CommunityPage = lazy(() => import('@/pages/CommunityPage'))
const StatusPage = lazy(() => import('@/pages/StatusPage'))

// Legal pages
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'))
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'))

// 404 page
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  )
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
  )
}

export default App
