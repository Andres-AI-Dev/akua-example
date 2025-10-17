import { useNavigate } from 'react-router-dom'
import { Hero } from '@/components/features/Hero'
import { Features } from '@/components/features/Features'
import { Pricing } from '@/components/features/Pricing'
import { heroData, aiServices, pricingTiers } from '@/data/landing-data'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleHeroClick = () => {
    navigate('/pricing')
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
      <Features services={aiServices} />
      <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
    </div>
  )
}
