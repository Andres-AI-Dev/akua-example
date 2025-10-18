import React from 'react'
import { motion } from 'framer-motion'
import { PricingCard } from './PricingCard'
import { PricingProps } from '@/types/landing'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const Pricing: React.FC<PricingProps> = ({ tiers, onCtaClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-sm mx-auto md:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiers.map((tier) => (
            <motion.div key={tier.id} variants={itemVariants}>
              <PricingCard tier={tier} onCtaClick={onCtaClick} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
