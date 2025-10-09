import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { FeatureCardProps } from '@/types/landing'

export const FeatureCard: React.FC<FeatureCardProps> = ({
  name,
  description,
  icon: Icon,
}) => {
  return (
    <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
