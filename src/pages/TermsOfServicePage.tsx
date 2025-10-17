export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: October 16, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of Akua AI Services ("Service") provided by Andres Gonzales ("we", "our", or "us").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By creating an account or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update these Terms at any time. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Akua AI Services provides access to various artificial intelligence tools and services, including but not limited to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>AI Content Generation</li>
              <li>Image and Video AI Tools</li>
              <li>AI-Powered Analytics</li>
              <li>Custom AI Solutions</li>
              <li>AI Integration Services</li>
              <li>AI Consultation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The Service is provided on an "as is" and "as available" basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information when creating an account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the Service in compliance with all applicable laws and regulations</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Not attempt to gain unauthorized access to any part of the Service</li>
              <li>Not transmit any malicious code, viruses, or harmful content</li>
              <li>Not use the Service to infringe on intellectual property rights</li>
              <li>Not resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by Andres Gonzales and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of any content you submit to the Service. By submitting content, you grant us a license to use, modify, and display that content as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the maximum extent permitted by law, Andres Gonzales shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability shall not exceed the amount you paid us in the 12 months prior to the event giving rise to liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="font-semibold">Andres Gonzales</p>
              <p className="text-muted-foreground">Email: <a href="mailto:andrisgonzalis@gmail.com" className="text-primary hover:underline">andrisgonzalis@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
