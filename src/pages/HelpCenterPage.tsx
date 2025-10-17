import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I get started with Akua AI Services?',
        a: 'Getting started is easy! Simply sign up for an account, choose your service plan, and you\'ll have immediate access to our AI tools. We offer a free trial so you can explore our services before committing to a paid plan.'
      },
      {
        q: 'Do I need technical knowledge to use Akua?',
        a: 'No technical knowledge is required! Our platform is designed to be user-friendly and intuitive. Simply describe what you need, and our AI handles the complex technical work behind the scenes.'
      }
    ]
  },
  {
    category: 'Account & Billing',
    questions: [
      {
        q: 'Can I cancel my subscription at any time?',
        a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won\'t be charged again.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.'
      }
    ]
  },
  {
    category: 'Technical Support',
    questions: [
      {
        q: 'How do I report a technical issue?',
        a: 'You can report technical issues through our contact page or by emailing andrisgonzalis@gmail.com. We aim to respond within 24 hours.'
      },
      {
        q: 'Is there API documentation available?',
        a: 'Yes, comprehensive API documentation is available to all subscribers. You can access it from your account dashboard.'
      }
    ]
  },
  {
    category: 'AI Services',
    questions: [
      {
        q: 'How accurate is the AI-generated content?',
        a: 'Our AI models are trained on vast amounts of data and produce highly accurate, human-quality content. However, we always recommend reviewing and editing the output to ensure it meets your specific needs and standards.'
      },
      {
        q: 'Can I use the AI-generated content commercially?',
        a: 'Yes, you have full commercial rights to use any content generated through our platform.'
      }
    ]
  }
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions and get the help you need
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help..."
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 mr-3 text-primary" />
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => (
                  <Card key={qIdx} className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
