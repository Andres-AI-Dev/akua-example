import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCTAProps {
  serviceName: string;
}

export function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started with {serviceName}?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of users already leveraging AI to transform their workflow
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/pricing">View Pricing</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
