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
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <FeatureCard
              key={service.id}
              name={service.name}
              description={service.description}
              icon={iconMap[service.icon]}
              serviceId={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
