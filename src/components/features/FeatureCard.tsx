import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  serviceId,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (serviceId) {
      navigate(`/services/${serviceId}`)
    }
  }

  return (
    <Card
      className={`group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-500 ${serviceId ? 'cursor-pointer' : ''} border-2 hover:border-indigo-300`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
          <Icon className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{name}</CardTitle>
        <CardDescription className="text-lg text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
        {serviceId && (
          <div className="mt-4 text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn more →
          </div>
        )}
      </CardHeader>
    </Card>
  )
}
