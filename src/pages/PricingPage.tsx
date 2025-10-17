import { Pricing } from '@/components/features/Pricing';
import { pricingTiers } from '@/data/landing-data';
import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium">
            Choose the perfect plan for your needs. All plans include access to our core AI services.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Can I change plans later?</h3>
              <p className="text-lg text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What payment methods do you accept?</h3>
              <p className="text-lg text-gray-600">
                We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Is there a free trial?</h3>
              <p className="text-lg text-gray-600">
                Yes, Professional plan includes a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
