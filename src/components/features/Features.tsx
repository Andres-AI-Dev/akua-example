import React from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Image,
  BarChart3,
  Cpu,
  Workflow,
  MessageSquare,
  LucideIcon,
} from 'lucide-react'
import { FeatureCard } from './FeatureCard'
import { FeaturesProps } from '@/types/landing'

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Image,
  BarChart3,
  Cpu,
  Workflow,
  MessageSquare,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const Features: React.FC<FeaturesProps> = ({ services }) => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <FeatureCard
                name={service.name}
                description={service.description}
                icon={iconMap[service.icon]}
                serviceId={service.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
