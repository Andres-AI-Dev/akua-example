import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero Component', () => {
  const mockProps = {
    headline: 'Test Headline',
    subheadline: 'Test Subheadline',
    ctaText: 'Click Me',
  }

  it('renders with provided props', () => {
    render(<Hero {...mockProps} />)

    expect(screen.getByRole('heading', { name: 'Test Headline' })).toBeInTheDocument()
    expect(screen.getByText('Test Subheadline')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('calls onCtaClick when button is clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Hero {...mockProps} onCtaClick={handleClick} />)

    const button = screen.getByRole('button', { name: 'Click Me' })
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders without onCtaClick callback', () => {
    render(<Hero {...mockProps} />)

    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeInTheDocument()
  })

  it('has correct CSS classes for styling', () => {
    const { container } = render(<Hero {...mockProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-screen')
    expect(section).toHaveClass('bg-gradient-to-br')
  })
})
