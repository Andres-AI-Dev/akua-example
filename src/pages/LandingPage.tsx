import { Hero } from '@/components/features/Hero'
import { Features } from '@/components/features/Features'
import { Pricing } from '@/components/features/Pricing'
import { Testimonials } from '@/components/features/Testimonials'
import { FAQ } from '@/components/features/FAQ'
import { ContactForm } from '@/components/features/ContactForm'
import { Footer } from '@/components/layout/Footer'
import { heroData, aiServices, pricingTiers, testimonials, faqItems } from '@/data/landing-data'

export default function LandingPage() {
  const handleHeroClick = () => {
    console.log('Hero CTA clicked')
    // Scroll to contact form
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Future: navigate('/signup')
  }

  const handlePricingClick = (tierId: string) => {
    console.log(`Pricing tier selected: ${tierId}`)
    // Future: navigate('/signup', { state: { tier: tierId } })
  }

  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data)
    // Future: Send to backend API or email service
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
      <Testimonials testimonials={testimonials} />
      <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
      <FAQ items={faqItems} />
      <ContactForm onSubmit={handleContactSubmit} />
      <Footer />
    </main>
  )
}
