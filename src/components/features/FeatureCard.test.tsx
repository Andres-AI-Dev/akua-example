import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FileText } from 'lucide-react'
import { FeatureCard } from './FeatureCard'

describe('FeatureCard Component', () => {
  const mockProps = {
    name: 'Test Feature',
    description: 'This is a test feature description',
    icon: FileText,
  }

  it('renders with provided props', () => {
    render(<FeatureCard {...mockProps} />)

    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    const { container } = render(<FeatureCard {...mockProps} />)

    // Check that an icon is rendered (it will be an SVG)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('has hover effect classes', () => {
    const { container } = render(<FeatureCard {...mockProps} />)

    const card = container.querySelector('.hover\\:shadow-lg')
    expect(card).toBeInTheDocument()
  })
})
