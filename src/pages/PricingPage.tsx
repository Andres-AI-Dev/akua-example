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
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to our core AI services.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing tiers={pricingTiers} onCtaClick={handlePricingClick} />

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-muted-foreground">
              Yes, Professional plan includes a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
