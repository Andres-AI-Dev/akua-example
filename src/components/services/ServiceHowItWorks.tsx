import * as Icons from 'lucide-react';
import { HowItWorksStep } from '@/types/services';

interface ServiceHowItWorksProps {
  steps: HowItWorksStep[];
}

export function ServiceHowItWorks({ steps }: ServiceHowItWorksProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How It Works
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, index) => {
          const Icon = Icons[step.icon as keyof typeof Icons] as any;
          const isLast = index === steps.length - 1;
          return (
            <div key={step.step} className="flex items-start space-x-6 relative">
              {!isLast && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
              )}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl z-10">
                {step.step}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center space-x-3 mb-2">
                  {Icon && <Icon className="w-5 h-5 text-primary" />}
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
