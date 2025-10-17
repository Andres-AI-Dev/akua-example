import { Features } from '@/components/features/Features';
import { aiServices } from '@/data/landing-data';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI-Powered Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive suite of AI services designed to transform your business operations and drive innovation.
          </p>
          <Button asChild size="lg">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <Features services={aiServices} />

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose a plan that fits your needs and start leveraging AI today
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
    </div>
  );
}
