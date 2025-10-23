import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    <motion.div
      className="h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={`group relative overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${serviceId ? 'cursor-pointer' : ''} border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 h-full flex flex-col`}
        onClick={handleClick}
      >
        <CardHeader className="relative flex-1 flex flex-col">
          <motion.div
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-all duration-300"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            </motion.div>
          </motion.div>
          <CardTitle className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
            {name}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
            {description}
          </CardDescription>
          {serviceId && (
            <motion.div
              className="mt-4 text-gray-900 dark:text-white font-semibold inline-flex items-center"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn more →
            </motion.div>
          )}
        </CardHeader>
      </Card>
    </motion.div>
  )
}
