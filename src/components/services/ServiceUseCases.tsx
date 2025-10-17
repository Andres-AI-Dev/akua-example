import { Card } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import { UseCase } from '@/types/services';

interface ServiceUseCasesProps {
  useCases: UseCase[];
}

export function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = Icons[useCase.icon as keyof typeof Icons] as any;
            return (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
