import React from 'react'
import { motion } from 'framer-motion'
import { Link2, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Link2,
    title: 'Choose Integration',
    description: 'Select the systems and workflows you want to connect'
  },
  {
    number: '2',
    icon: Settings,
    title: 'Configure & Test',
    description: 'Set up integration parameters and test thoroughly'
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Go Live',
    description: 'Deploy the integration and monitor performance'
  }
]

export const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900 dark:text-white">
              How It Works
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="max-w-5xl mx-auto space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Number Badge */}
              <motion.div
                className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {step.number}
              </motion.div>

              {/* Icon and Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                    <step.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
