import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Github, MessageCircle, Linkedin, Twitter } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join the Akua Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with other AI enthusiasts, developers, and businesses leveraging Akua AI Services
          </p>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Community Guidelines</h2>
        <Card className="p-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-muted-foreground">Be respectful and inclusive to all community members</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-muted-foreground">Share knowledge and help others learn</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-muted-foreground">Provide constructive feedback and suggestions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-muted-foreground">Report bugs and issues responsibly</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-muted-foreground">No spam or self-promotion without permission</span>
            </li>
          </ul>
        </Card>
      </section>

      {/* Platforms */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MessageCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discord</h3>
              <p className="text-muted-foreground text-sm mb-4">Real-time chat and support</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Join</a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Github className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm mb-4">Open source contributions</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Visit</a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Twitter className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Twitter</h3>
              <p className="text-muted-foreground text-sm mb-4">Updates and announcements</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Follow</a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Linkedin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm mb-4">Professional networking</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Connect</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sign up today and become part of our growing community
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}
