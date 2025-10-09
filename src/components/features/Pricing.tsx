import React from 'react'
import { PricingCard } from './PricingCard'
import { PricingProps } from '@/types/landing'

export const Pricing: React.FC<PricingProps> = ({ tiers, onCtaClick }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Choose the perfect plan for your needs. All plans include access to
          our core AI services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-sm mx-auto md:max-w-none">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} onCtaClick={onCtaClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
