import { Pricing } from '@/components/features/Pricing';
import { pricingTiers } from '@/data/landing-data';
import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-white dark:bg-gray-900">
        <div className="relative container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-medium">
            Choose the perfect plan for your needs. All plans include access to our core AI services.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Can I change plans later?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What payment methods do you accept?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Is there a free trial?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Yes, Professional plan includes a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
