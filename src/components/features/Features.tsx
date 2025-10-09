import React from 'react'
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

export const Features: React.FC<FeaturesProps> = ({ services }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          AI-Powered Services
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive AI solutions designed to transform your business
          operations and drive innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <FeatureCard
              key={service.id}
              name={service.name}
              description={service.description}
              icon={iconMap[service.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
