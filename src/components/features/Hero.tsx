import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { HeroProps } from '@/types/landing'

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 animate-pulse" style={{ animationDuration: '8s' }}></div>

      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="px-10 py-7 text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            onClick={onCtaClick}
          >
            {ctaText} →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
