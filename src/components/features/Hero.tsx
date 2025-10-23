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
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-white dark:bg-gray-900">
      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          {headline}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          {subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="px-10 py-7 text-xl font-semibold bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300"
            onClick={onCtaClick}
          >
            {ctaText} →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
