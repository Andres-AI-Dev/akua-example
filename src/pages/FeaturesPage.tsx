import { Features } from '@/components/features/Features';
import { aiServices } from '@/data/landing-data';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-Powered Services
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-12 font-medium">
            Explore our comprehensive suite of AI services designed to transform your business operations and drive innovation.
          </p>
          <Button asChild size="lg" className="px-10 py-7 text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to="/pricing">View Pricing →</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Features services={aiServices} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
            Choose a plan that fits your needs and start leveraging AI today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="px-10 py-7 text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link to="/pricing">View Pricing →</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 py-7 text-xl font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
