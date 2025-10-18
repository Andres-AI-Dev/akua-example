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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={`group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30 transition-shadow duration-500 ${serviceId ? 'cursor-pointer' : ''} border-2 hover:border-indigo-300 dark:border-gray-700 dark:hover:border-indigo-500 h-full`}
        onClick={handleClick}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <CardHeader className="relative">
          <motion.div
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 group-hover:from-indigo-200 group-hover:to-purple-200 dark:group-hover:from-indigo-800 dark:group-hover:to-purple-800 transition-all duration-300"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </motion.div>
          </motion.div>
          <CardTitle className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {name}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </CardDescription>
          {serviceId && (
            <motion.div
              className="mt-4 text-indigo-600 font-semibold inline-flex items-center"
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
