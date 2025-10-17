import { Card } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import { ServiceFeature } from '@/types/services';

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = Icons[feature.icon as keyof typeof Icons] as any;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
