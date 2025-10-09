import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroProps } from '@/types/landing'

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto px-4 sm:px-6">
          {subheadline}
        </p>
        <Button
          size="lg"
          className="px-8 py-6 text-lg min-h-[44px]"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
