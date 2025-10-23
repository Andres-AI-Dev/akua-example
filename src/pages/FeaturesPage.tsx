import { Features } from '@/components/features/Features';
import { aiServices } from '@/data/landing-data';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-white dark:bg-gray-900">
        <div className="relative container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] text-gray-900 dark:text-white">
            AI-Powered Services
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12 font-medium">
            Explore our comprehensive suite of AI services designed to transform your business operations and drive innovation.
          </p>
          <Button asChild size="lg" className="px-10 py-7 text-xl font-semibold bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300">
            <Link to="/pricing">View Pricing →</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Features services={aiServices} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-medium">
            Choose a plan that fits your needs and start leveraging AI today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="px-10 py-7 text-xl font-semibold bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300">
              <Link to="/pricing">View Pricing →</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 py-7 text-xl font-semibold border-2 dark:border-gray-600 transition-all duration-300">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
