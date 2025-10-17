# Task 4: About, Contact, and Help Center Pages

**1. Description**

Create three informational pages: About Us (company mission, founder Andres Gonzales, team section), Contact (contact form with frontend validation, contact information including andrisgonzalis@gmail.com), and Help Center (FAQ organized by category with search bar placeholder). These pages provide essential company information and support resources.

**2. Parent Feature**

*   [../PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   About Us page is accessible at /about route and displays company information and founder details
*   Contact page is accessible at /contact route with a functional contact form
*   Contact form validates all fields (name, email, subject, message) on the frontend
*   Contact form displays success message after submission (no backend integration)
*   Contact page displays owner information: Andres Gonzales, andrisgonzalis@gmail.com
*   Help Center page is accessible at /help route
*   Help Center displays FAQs organized by 4 categories: Getting Started, Account & Billing, Technical Support, AI Services
*   Help Center includes visual search bar (non-functional placeholder)
*   All three pages are fully responsive across all breakpoints
*   All tests pass (unit and component tests)

**4. Files to be Modified/Created**

*   `src/pages/AboutPage.tsx` (NEW)
*   `src/pages/ContactPage.tsx` (NEW)
*   `src/pages/HelpCenterPage.tsx` (NEW)
*   `src/components/contact/ContactForm.tsx` (NEW)
*   `src/components/contact/ContactInfo.tsx` (NEW)
*   `src/components/help/FAQSection.tsx` (NEW)
*   `src/components/help/FAQItem.tsx` (NEW)
*   `src/components/help/SearchBar.tsx` (NEW)
*   `src/types/contact.ts` (NEW)
*   `src/data/help-faqs.ts` (NEW)
*   `src/lib/validation.ts` (NEW - form validation utilities)
*   `src/App.tsx` (MODIFIED - add routes)
*   `src/pages/AboutPage.test.tsx` (NEW)
*   `src/pages/ContactPage.test.tsx` (NEW)
*   `src/components/contact/ContactForm.test.tsx` (NEW)
*   `src/components/help/FAQSection.test.tsx` (NEW)

**5. Dependencies**

*   Task 1 (Header and Layout)
*   Task 3 (FAQ type definition can be reused)

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create contact form TypeScript interfaces**
    - File(s) involved: `src/types/contact.ts`
    - Algorithm:
        ```typescript
        export interface ContactFormData {
          name: string;
          email: string;
          subject: string;
          message: string;
        }

        export interface ContactFormErrors {
          name?: string;
          email?: string;
          subject?: string;
          message?: string;
        }

        export interface ContactInfo {
          name: string;
          email: string;
          role: string;
        }
        ```

2.  **Create validation utilities**
    - File(s) involved: `src/lib/validation.ts`
    - Algorithm:
        ```typescript
        import { ContactFormData, ContactFormErrors } from '@/types/contact';

        export function validateEmail(email: string): boolean {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }

        export function validateContactForm(data: ContactFormData): ContactFormErrors {
          const errors: ContactFormErrors = {};

          if (!data.name.trim()) {
            errors.name = 'Name is required';
          } else if (data.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
          }

          if (!data.email.trim()) {
            errors.email = 'Email is required';
          } else if (!validateEmail(data.email)) {
            errors.email = 'Please enter a valid email address';
          }

          if (!data.subject.trim()) {
            errors.subject = 'Subject is required';
          } else if (data.subject.trim().length < 5) {
            errors.subject = 'Subject must be at least 5 characters';
          }

          if (!data.message.trim()) {
            errors.message = 'Message is required';
          } else if (data.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
          }

          return errors;
        }
        ```

3.  **Create Help Center FAQs data file**
    - File(s) involved: `src/data/help-faqs.ts`
    - Algorithm:
        ```typescript
        import { FAQ } from '@/types/faq';

        export const helpFAQs: FAQ[] = [
          // Getting Started
          {
            id: 'gs-1',
            question: 'How do I get started with Akua AI?',
            answer: 'Getting started is easy! Sign up for a free trial, choose your plan, and start using our AI services immediately. No credit card required for the trial.',
            category: 'Getting Started'
          },
          {
            id: 'gs-2',
            question: 'What AI services do you offer?',
            answer: 'We offer AI Content Generation, Image & Video AI Tools, AI-Powered Analytics, Custom AI Solutions, Integration Services, and AI Consultation.',
            category: 'Getting Started'
          },
          {
            id: 'gs-3',
            question: 'Do I need technical knowledge to use Akua AI?',
            answer: 'Not at all! Our platform is designed to be user-friendly for both technical and non-technical users. However, we also offer advanced API access for developers.',
            category: 'Getting Started'
          },

          // Account & Billing
          {
            id: 'ab-1',
            question: 'How do I upgrade my plan?',
            answer: 'You can upgrade your plan anytime from your account settings. Go to Billing > Change Plan and select your desired tier.',
            category: 'Account & Billing'
          },
          {
            id: 'ab-2',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal. Enterprise customers can also pay via invoice.',
            category: 'Account & Billing'
          },
          {
            id: 'ab-3',
            question: 'Can I get a refund?',
            answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied, contact our support team for a full refund.',
            category: 'Account & Billing'
          },
          {
            id: 'ab-4',
            question: 'How do I cancel my subscription?',
            answer: 'You can cancel anytime from your account settings. Your access will continue until the end of your billing period.',
            category: 'Account & Billing'
          },

          // Technical Support
          {
            id: 'ts-1',
            question: 'What are the API rate limits?',
            answer: 'Rate limits vary by plan: Starter (100 requests/min), Professional (500 requests/min), Enterprise (custom limits). Contact support for higher limits.',
            category: 'Technical Support'
          },
          {
            id: 'ts-2',
            question: 'How do I integrate Akua AI with my application?',
            answer: 'We provide comprehensive API documentation and SDKs for popular languages. Visit our developer portal or contact our integration support team.',
            category: 'Technical Support'
          },
          {
            id: 'ts-3',
            question: 'What happens if the service is down?',
            answer: 'We maintain 99.9% uptime. Check our status page for real-time updates. Enterprise customers have SLA guarantees with compensation for downtime.',
            category: 'Technical Support'
          },

          // AI Services
          {
            id: 'as-1',
            question: 'How accurate is the AI content generation?',
            answer: 'Our AI models are trained on vast datasets and provide highly accurate, contextually relevant content. However, we always recommend human review for critical content.',
            category: 'AI Services'
          },
          {
            id: 'as-2',
            question: 'Can I train custom AI models?',
            answer: 'Yes! Custom AI model training is available on our Enterprise plan. Contact our sales team to discuss your specific requirements.',
            category: 'AI Services'
          },
          {
            id: 'as-3',
            question: 'What data do you use to train your AI models?',
            answer: 'We use publicly available datasets and licensed data sources. Your private data is never used to train our models unless you explicitly opt-in for custom training.',
            category: 'AI Services'
          }
        ];

        export const faqCategories = [
          'Getting Started',
          'Account & Billing',
          'Technical Support',
          'AI Services'
        ];
        ```

4.  **Create ContactForm component**
    - File(s) involved: `src/components/contact/ContactForm.tsx`
    - React specifics:
        - Hooks: useState for form state and errors, useState for submission status
        - Components: Input, Textarea, Button, Label
        - Event handlers: handleChange, handleSubmit
    - Styling:
        - Form: `space-y-6`
        - Input error state: `border-destructive`
        - Success message: `bg-green-50 text-green-800 p-4 rounded-md`
    - Algorithm:
        ```typescript
        import { useState } from 'react';
        import { Input } from '@/components/ui/input';
        import { Textarea } from '@/components/ui/textarea';
        import { Button } from '@/components/ui/button';
        import { Label } from '@/components/ui/label';
        import { ContactFormData, ContactFormErrors } from '@/types/contact';
        import { validateContactForm } from '@/lib/validation';
        import { CheckCircle } from 'lucide-react';

        export function ContactForm() {
          const [formData, setFormData] = useState<ContactFormData>({
            name: '',
            email: '',
            subject: '',
            message: ''
          });

          const [errors, setErrors] = useState<ContactFormErrors>({});
          const [isSubmitting, setIsSubmitting] = useState(false);
          const [isSubmitted, setIsSubmitted] = useState(false);

          const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
            // Clear error for this field when user starts typing
            if (errors[name as keyof ContactFormErrors]) {
              setErrors(prev => ({ ...prev, [name]: undefined }));
            }
          };

          const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            // Validate form
            const validationErrors = validateContactForm(formData);
            if (Object.keys(validationErrors).length > 0) {
              setErrors(validationErrors);
              return;
            }

            // Simulate form submission
            setIsSubmitting(true);

            // Simulate API call delay
            setTimeout(() => {
              setIsSubmitting(false);
              setIsSubmitted(true);
              // Reset form
              setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
              });

              // Hide success message after 5 seconds
              setTimeout(() => {
                setIsSubmitted(false);
              }, 5000);
            }, 1000);
          };

          if (isSubmitted) {
            return (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-md flex items-center space-x-3">
                <CheckCircle className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Message Sent Successfully!</h3>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              </div>
            );
          }

          return (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'border-destructive' : ''}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          );
        }
        ```

5.  **Create ContactInfo component**
    - File(s) involved: `src/components/contact/ContactInfo.tsx`
    - React specifics:
        - Import social links (will use data from task 7)
        - Display owner information
    - Styling:
        - Card layout with icon sections
    - Algorithm:
        ```typescript
        import { Card } from '@/components/ui/card';
        import { Mail, User, MapPin } from 'lucide-react';

        export function ContactInfo() {
          return (
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Company Owner</h3>
                    <p className="text-muted-foreground">Andres Gonzales</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:andrisgonzalis@gmail.com"
                      className="text-primary hover:underline"
                    >
                      andrisgonzalis@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        }
        ```

6.  **Create SearchBar component for Help Center**
    - File(s) involved: `src/components/help/SearchBar.tsx`
    - React specifics:
        - Visual placeholder only (no functionality)
        - Components: Input with search icon
    - Algorithm:
        ```typescript
        import { Input } from '@/components/ui/input';
        import { Search } from 'lucide-react';

        export function SearchBar() {
          return (
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                className="pl-12 py-6 text-lg"
                disabled
              />
            </div>
          );
        }
        ```

7.  **Create FAQSection component**
    - File(s) involved: `src/components/help/FAQSection.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface FAQSectionProps {
              category: string;
              faqs: FAQ[];
            }
            ```
        - Use Accordion for FAQ items
    - Algorithm:
        ```typescript
        import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
        import { FAQ } from '@/types/faq';

        interface FAQSectionProps {
          category: string;
          faqs: FAQ[];
        }

        export function FAQSection({ category, faqs }: FAQSectionProps) {
          return (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category}</h2>
              <Accordion type="single" collapsible>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          );
        }
        ```

8.  **Create AboutPage**
    - File(s) involved: `src/pages/AboutPage.tsx`
    - React specifics:
        - Sections: Hero, Mission, Founder, Values, CTA
    - Styling:
        - Hero: Gradient background similar to other pages
        - Content: Max-width centered containers
    - Algorithm:
        ```typescript
        import { Button } from '@/components/ui/button';
        import { Link } from 'react-router-dom';
        import { Target, Users, Lightbulb, Shield } from 'lucide-react';

        export function AboutPage() {
          const values = [
            {
              icon: Target,
              title: 'Innovation',
              description: 'Pushing the boundaries of what AI can do for businesses'
            },
            {
              icon: Users,
              title: 'Customer First',
              description: 'Your success is our success. We are here to help you thrive'
            },
            {
              icon: Lightbulb,
              title: 'Transparency',
              description: 'Clear pricing, honest communication, no hidden fees'
            },
            {
              icon: Shield,
              title: 'Security',
              description: 'Your data is protected with enterprise-grade security'
            }
          ];

          return (
            <div>
              {/* Hero Section */}
              <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    About Akua AI
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Empowering businesses with cutting-edge AI solutions
                  </p>
                </div>
              </section>

              {/* Mission Section */}
              <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    At Akua AI, we believe that artificial intelligence should be accessible to everyone.
                    Our mission is to democratize AI technology, making it easy for businesses of all sizes
                    to leverage the power of machine learning and advanced algorithms.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We are committed to building tools that are not only powerful but also intuitive,
                    ethical, and designed with your success in mind.
                  </p>
                </div>
              </section>

              {/* Founder Section */}
              <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Founder</h2>
                    <div className="bg-background rounded-lg p-8 shadow-md">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Andres Gonzales</h3>
                      <p className="text-muted-foreground mb-4">Founder & CEO</p>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Andres founded Akua AI with a vision to make AI technology accessible and practical
                        for businesses worldwide. With a background in machine learning and software engineering,
                        he leads our team in building innovative solutions that solve real-world problems.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Values Section */}
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-primary/5 py-16">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join thousands of businesses already using Akua AI
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/pricing">View Pricing</Link>
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
        ```

9.  **Create ContactPage**
    - File(s) involved: `src/pages/ContactPage.tsx`
    - React specifics:
        - Import ContactForm and ContactInfo components
        - Two-column layout (form on left, info on right)
    - Algorithm:
        ```typescript
        import { ContactForm } from '@/components/contact/ContactForm';
        import { ContactInfo } from '@/components/contact/ContactInfo';

        export function ContactPage() {
          return (
            <div>
              {/* Hero Section */}
              <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Get in Touch
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <ContactForm />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <ContactInfo />
                  </div>
                </div>
              </section>
            </div>
          );
        }
        ```

10. **Create HelpCenterPage**
    - File(s) involved: `src/pages/HelpCenterPage.tsx`
    - React specifics:
        - Import SearchBar, FAQSection components
        - Group FAQs by category
        - Use useMemo to filter FAQs by category
    - Algorithm:
        ```typescript
        import { useMemo } from 'react';
        import { SearchBar } from '@/components/help/SearchBar';
        import { FAQSection } from '@/components/help/FAQSection';
        import { helpFAQs, faqCategories } from '@/data/help-faqs';

        export function HelpCenterPage() {
          const faqsByCategory = useMemo(() => {
            return faqCategories.map(category => ({
              category,
              faqs: helpFAQs.filter(faq => faq.category === category)
            }));
          }, []);

          return (
            <div>
              {/* Hero Section */}
              <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Help Center
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Find answers to common questions and learn how to get the most out of Akua AI
                  </p>
                  <SearchBar />
                </div>
              </section>

              {/* FAQ Sections */}
              <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                  {faqsByCategory.map(({ category, faqs }) => (
                    <FAQSection key={category} category={category} faqs={faqs} />
                  ))}
                </div>
              </section>

              {/* Contact CTA */}
              <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                  <p className="text-muted-foreground mb-6">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </div>
              </section>
            </div>
          );
        }
        ```

11. **Add routes to App.tsx**
    - File(s) involved: `src/App.tsx`
    - Algorithm:
        ```typescript
        import { AboutPage } from './pages/AboutPage';
        import { ContactPage } from './pages/ContactPage';
        import { HelpCenterPage } from './pages/HelpCenterPage';

        // Inside Routes:
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test validateEmail function with valid and invalid emails
    *   Test validateContactForm returns errors for empty fields
    *   Test validateContactForm returns errors for invalid email format
    *   Test validateContactForm passes with valid data
    *   Test helpFAQs contains FAQs for all 4 categories
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   **ContactForm.test.tsx:**
        *   Test form renders all fields (name, email, subject, message)
        *   Test form shows validation errors when submitting empty form
        *   Test form clears field error when user starts typing
        *   Test form shows success message after submission
        *   Test form resets after successful submission
        *   Test submit button is disabled while submitting
    *   **ContactInfo.test.tsx:**
        *   Test renders company owner name (Andres Gonzales)
        *   Test renders email address (andrisgonzalis@gmail.com)
        *   Test email is clickable mailto link
    *   **FAQSection.test.tsx:**
        *   Test renders category heading
        *   Test renders all FAQ items for category
        *   Test accordion can expand/collapse items
    *   **AboutPage.test.tsx:**
        *   Test renders hero section with page title
        *   Test renders mission section
        *   Test renders founder information (Andres Gonzales)
        *   Test renders all 4 company values
    *   **ContactPage.test.tsx:**
        *   Test renders ContactForm component
        *   Test renders ContactInfo component
    *   **HelpCenterPage.test.tsx:**
        *   Test renders search bar
        *   Test renders all 4 FAQ categories
        *   Test contact CTA button links to /contact
    *   Tools: Vitest + React Testing Library

*   **7.3. Integration Tests:**
    *   Test navigation to /about, /contact, /help from header
    *   Test contact form submission flow (fill, validate, submit, success)
    *   Test FAQ accordion expand/collapse functionality
    *   Test email link opens mailto
    *   Test CTA buttons navigate to correct pages

*   **7.4. Visual Regression Tests:**
    *   Test AboutPage responsive layout (mobile, tablet, desktop)
    *   Test ContactPage two-column layout (stacked on mobile, side-by-side on desktop)
    *   Test HelpCenterPage accordion interactions
    *   Test contact form validation error states
    *   Test contact form success message display

*   **7.5. Manual Testing:**
    *   Verify About page displays all content correctly
    *   Test contact form with various input combinations
    *   Verify validation messages appear correctly
    *   Test contact form success message and reset
    *   Verify Help Center FAQs are organized by category
    *   Test accordion expand/collapse on all FAQ items
    *   Verify search bar is visible but non-functional (placeholder)
    *   Test all email links open mail client
    *   Test keyboard navigation through forms and accordions
    *   Verify focus states are visible
    *   Browser compatibility (Chrome, Firefox, Safari, Edge)
