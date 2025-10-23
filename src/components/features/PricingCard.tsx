import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { PricingCardProps } from '@/types/landing'

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  onCtaClick,
}) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick(tier.id)
    }
  }

  const cardClasses = tier.highlighted
    ? 'border-primary border-2 shadow-xl relative md:scale-105'
    : 'border-gray-200 hover:shadow-lg transition-all duration-300'

  return (
    <Card className={cardClasses}>
      {tier.highlighted && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
          {tier.description}
        </CardDescription>
        <div className="mt-4">
          {typeof tier.price === 'number' ? (
            <>
              <span className="text-5xl font-bold text-gray-900 dark:text-white">
                ${tier.price}
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
            </>
          ) : (
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {tier.price}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-700 dark:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={tier.highlighted ? 'default' : 'outline'}
          size="lg"
          onClick={handleClick}
        >
          {tier.ctaText}
        </Button>
      </CardFooter>
    </Card>
  )
}
