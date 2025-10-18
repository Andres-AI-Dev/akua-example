export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="text-muted-foreground dark:text-gray-400">Last Updated: October 16, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Akua AI Services ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI services platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Information We Collect</h2>
            <p className="text-muted-foreground dark:text-gray-400 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <div className="ml-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Personal Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Personally identifiable information, such as your name, email address, and contact information that you voluntarily give to us when you register or use our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Information about your activity on our platform, including AI requests, service usage, and interaction patterns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Device Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Information about your device, including IP address, browser type, operating system, and device identifiers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Use of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>To provide, operate, and maintain our AI services</li>
              <li>To improve and personalize your experience</li>
              <li>To process your transactions and manage your account</li>
              <li>To send you updates, security alerts, and support messages</li>
              <li>To protect against fraudulent or illegal activity</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Data Protection and Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate data</li>
              <li>The right to erase your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Contact Us</h2>
            <p className="text-muted-foreground dark:text-gray-400 leading-relaxed mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-muted/50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Andres Gonzales</p>
              <p className="text-muted-foreground dark:text-gray-400">Email: <a href="mailto:andrisgonzalis@gmail.com" className="text-primary hover:underline">andrisgonzalis@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
