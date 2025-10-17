import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceFeatures } from '@/components/services/ServiceFeatures';
import { ServiceUseCases } from '@/components/services/ServiceUseCases';
import { ServiceHowItWorks } from '@/components/services/ServiceHowItWorks';
import { ServicePricing } from '@/components/services/ServicePricing';
import { ServiceCTA } from '@/components/services/ServiceCTA';
import { servicesDetail } from '@/data/services-detail';

export default function IntegrationPage() {
  const service = servicesDetail['integration'];

  return (
    <div>
      <ServiceHero
        name={service.name}
        tagline={service.tagline}
        description={service.description}
      />
      <ServiceFeatures features={service.features} />
      <ServiceUseCases useCases={service.useCases} />
      <ServiceHowItWorks steps={service.howItWorks} />
      <ServicePricing
        pricingTier={service.pricingTier}
        pricingNote={service.pricingNote}
      />
      <ServiceCTA serviceName={service.name} />
    </div>
  );
}
