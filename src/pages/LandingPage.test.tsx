import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LandingPage from './LandingPage'

describe('LandingPage', () => {
  it('renders all major sections', () => {
    render(<LandingPage />)

    // Hero section
    expect(screen.getByText('Transform Your Business with AI-Powered Services')).toBeInTheDocument()

    // Features section
    expect(screen.getByText('AI-Powered Services')).toBeInTheDocument()

    // Pricing section
    expect(screen.getByText('Simple, Transparent Pricing')).toBeInTheDocument()

    // Footer
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
  })

  it('displays correct hero data', () => {
    render(<LandingPage />)

    expect(screen.getByText('Transform Your Business with AI-Powered Services')).toBeInTheDocument()
    expect(screen.getByText(/Unlock the power of artificial intelligence/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started Free' })).toBeInTheDocument()
  })

  it('displays all feature cards', () => {
    render(<LandingPage />)

    expect(screen.getByText('AI Content Generation')).toBeInTheDocument()
    expect(screen.getByText('Image & Video AI')).toBeInTheDocument()
    expect(screen.getByText('AI-Powered Analytics')).toBeInTheDocument()
    expect(screen.getByText('Custom AI Solutions')).toBeInTheDocument()
    expect(screen.getByText('AI Integration Services')).toBeInTheDocument()
    expect(screen.getByText('AI Consultation')).toBeInTheDocument()
  })

  it('displays all pricing tiers', () => {
    render(<LandingPage />)

    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('handles hero CTA click', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const user = userEvent.setup()

    render(<LandingPage />)

    const heroButton = screen.getByRole('button', { name: 'Get Started Free' })
    await user.click(heroButton)

    expect(consoleSpy).toHaveBeenCalledWith('Hero CTA clicked')
  })

  it('handles pricing CTA click', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const user = userEvent.setup()

    render(<LandingPage />)

    const starterButton = screen.getByRole('button', { name: 'Get Started' })
    await user.click(starterButton)

    expect(consoleSpy).toHaveBeenCalledWith('Pricing tier selected: starter')
  })
})
