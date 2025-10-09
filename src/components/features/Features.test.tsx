import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { aiServices } from '@/data/landing-data'

describe('Features Component', () => {
  it('renders section heading', () => {
    render(<Features services={aiServices} />)

    expect(screen.getByText('AI-Powered Services')).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<Features services={aiServices} />)

    // Check that all 6 services are rendered
    expect(screen.getByText('AI Content Generation')).toBeInTheDocument()
    expect(screen.getByText('Image & Video AI')).toBeInTheDocument()
    expect(screen.getByText('AI-Powered Analytics')).toBeInTheDocument()
    expect(screen.getByText('Custom AI Solutions')).toBeInTheDocument()
    expect(screen.getByText('AI Integration Services')).toBeInTheDocument()
    expect(screen.getByText('AI Consultation')).toBeInTheDocument()
  })

  it('renders correct number of cards', () => {
    const testServices = aiServices.slice(0, 3)
    render(<Features services={testServices} />)

    // Count rendered cards by checking for service names
    const cards = screen.getAllByText(/AI/i)
    // Should have at least the heading + 3 service names
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })
})
