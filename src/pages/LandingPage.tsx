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
