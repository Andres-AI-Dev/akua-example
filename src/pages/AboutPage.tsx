import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Akua AI Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering businesses with cutting-edge AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Akua AI Services, our mission is to democratize access to advanced artificial intelligence tools. We believe that every business, regardless of size, should have the power to leverage AI to improve efficiency, creativity, and decision-making.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where AI seamlessly integrates into everyday business operations, empowering teams to focus on what they do best while AI handles the repetitive and complex tasks. We're building the bridge between cutting-edge AI research and practical business applications.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Founder</h2>
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Andres Gonzales</h3>
                <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Andres Gonzales founded Akua AI Services with a passion for making artificial intelligence accessible to everyone. With a background in software engineering and machine learning, Andres saw an opportunity to bridge the gap between cutting-edge AI research and practical business applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His vision is to empower businesses of all sizes to leverage the transformative power of AI, making advanced technology simple and accessible for everyone.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible with AI
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We make powerful AI tools available to businesses of all sizes
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We deliver high-quality, reliable AI solutions you can trust
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Support</h3>
              <p className="text-muted-foreground">
                We provide exceptional support to help you succeed with AI
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in shaping the future of AI-powered business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/pricing">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
