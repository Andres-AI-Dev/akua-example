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
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-pulse" style={{ animationDuration: '8s' }}></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1]">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
          {subheadline}
        </p>
        <Button
          size="lg"
          className="px-10 py-7 text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
          onClick={onCtaClick}
        >
          {ctaText} →
        </Button>
      </div>
    </section>
  )
}
