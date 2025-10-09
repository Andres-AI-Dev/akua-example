import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('renders with default props', () => {
    render(<Footer />)

    expect(screen.getByText('Akua')).toBeInTheDocument()
    expect(screen.getByText('AI-Powered Services for Modern Businesses')).toBeInTheDocument()
  })

  it('renders with custom props', () => {
    render(<Footer companyName="Custom Co" tagline="Custom Tagline" />)

    expect(screen.getByText('Custom Co')).toBeInTheDocument()
    expect(screen.getByText('Custom Tagline')).toBeInTheDocument()
  })

  it('displays current year in copyright', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
  })

  it('renders navigation sections', () => {
    render(<Footer />)

    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })

  it('renders social media links with aria-labels', () => {
    render(<Footer />)

    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)

    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })
})
