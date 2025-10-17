import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServicePricingProps {
  pricingTier: string;
  pricingNote: string;
}

export function ServicePricing({ pricingTier, pricingNote }: ServicePricingProps) {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Pricing
          </h2>
          <Card className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Service Availability</h3>
              <Badge variant="secondary" className="text-sm">
                {pricingTier}
              </Badge>
            </div>
            <p className="text-muted-foreground text-lg">
              {pricingNote}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
