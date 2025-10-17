import React from 'react'
import { PricingCard } from './PricingCard'
import { PricingProps } from '@/types/landing'

export const Pricing: React.FC<PricingProps> = ({ tiers, onCtaClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-sm mx-auto md:max-w-none">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} onCtaClick={onCtaClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
