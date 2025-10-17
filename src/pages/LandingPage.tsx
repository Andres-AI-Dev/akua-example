import { useNavigate } from 'react-router-dom'
import { Hero } from '@/components/features/Hero'
import { Features } from '@/components/features/Features'
import { Pricing } from '@/components/features/Pricing'
import { heroData, aiServices, pricingTiers } from '@/data/landing-data'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleHeroClick = () => {
    navigate('/contact')
  }

  const handlePricingClick = (tierId: string) => {
    console.log(`Pricing tier selected: ${tierId}`)
    // Navigate to contact page for now
    navigate('/contact')
  }

  return (
    <div className="bg-white">
      <Hero
        headline={heroData.headline}
        subheadline={heroData.subheadline}
        ctaText={heroData.ctaText}
        onCtaClick={handleHeroClick}
      />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
          </div>
          <Features services={aiServices} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include access to our core AI services.
            </p>
          </div>
          <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
        </div>
      </section>
    </div>
  )
}
