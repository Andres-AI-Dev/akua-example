import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { pricingTiers } from '@/data/landing-data'

describe('Pricing Component', () => {
  it('renders section heading', () => {
    render(<Pricing tiers={pricingTiers} />)

    expect(screen.getByText('Simple, Transparent Pricing')).toBeInTheDocument()
  })

  it('renders all pricing tiers', () => {
    render(<Pricing tiers={pricingTiers} />)

    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('highlights the correct tier', () => {
    render(<Pricing tiers={pricingTiers} />)

    // Professional tier should be highlighted (most popular)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders correct number of tiers', () => {
    const testTiers = pricingTiers.slice(0, 2)
    render(<Pricing tiers={testTiers} />)

    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.queryByText('Enterprise')).not.toBeInTheDocument()
  })
})
