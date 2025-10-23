import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '@/components/features/Hero'
import { Features } from '@/components/features/Features'
import { HowItWorks } from '@/components/features/HowItWorks'
import { StatsSection } from '@/components/features/StatsSection'
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

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero
        headline={heroData.headline}
        subheadline={heroData.subheadline}
        ctaText={heroData.ctaText}
        onCtaClick={handleHeroClick}
      />

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionHeaderVariants}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
              AI-Powered Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
          </motion.div>
          <Features services={aiServices} />
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Stats/Analytics Section */}
      <StatsSection />

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionHeaderVariants}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include access to our core AI services.
            </p>
          </motion.div>
          <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
        </div>
      </section>
    </div>
  )
}
