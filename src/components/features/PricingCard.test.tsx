import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PricingCard } from './PricingCard'

describe('PricingCard Component', () => {
  const mockTierNumeric = {
    id: 'starter',
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    highlighted: false,
    ctaText: 'Get Started',
  }

  const mockTierString = {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions',
    features: ['Feature 1', 'Feature 2'],
    highlighted: false,
    ctaText: 'Contact Sales',
  }

  it('renders with numeric price', () => {
    render(<PricingCard tier={mockTierNumeric} />)

    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('/month')).toBeInTheDocument()
    expect(screen.getByText('Perfect for individuals')).toBeInTheDocument()
  })

  it('renders with string price', () => {
    render(<PricingCard tier={mockTierString} />)

    expect(screen.getByText('Enterprise')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('shows "Most Popular" badge when highlighted', () => {
    const highlightedTier = { ...mockTierNumeric, highlighted: true }
    render(<PricingCard tier={highlightedTier} />)

    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('does not show badge when not highlighted', () => {
    render(<PricingCard tier={mockTierNumeric} />)

    expect(screen.queryByText('Most Popular')).not.toBeInTheDocument()
  })

  it('displays all features', () => {
    render(<PricingCard tier={mockTierNumeric} />)

    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
    expect(screen.getByText('Feature 3')).toBeInTheDocument()
  })

  it('calls onCtaClick with tier ID when button clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<PricingCard tier={mockTierNumeric} onCtaClick={handleClick} />)

    const button = screen.getByRole('button', { name: 'Get Started' })
    await user.click(button)

    expect(handleClick).toHaveBeenCalledWith('starter')
  })
})
