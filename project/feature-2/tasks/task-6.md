# Task: Legal Pages (Privacy Policy and Terms of Service)

**1. Description**

Create Privacy Policy and Terms of Service pages with standard legal content adapted for an AI SaaS platform. These pages must include proper contact information (Andres Gonzales, andrisgonzalis@gmail.com) and cover essential legal sections. Content should be comprehensive but use placeholder/template language where specific legal review is needed.

**2. Parent Feature**

*   [project/feature-2/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Privacy Policy page (`/privacy`) renders with all standard sections
*   Terms of Service page (`/terms`) renders with all standard sections
*   Both pages include owner contact information (Andres Gonzales, andrisgonzalis@gmail.com)
*   Privacy Policy covers: data collection, usage, protection, cookies, third-party services, user rights
*   Terms of Service covers: acceptance, services description, user responsibilities, payment terms, IP, liability, termination
*   Both pages are fully responsive
*   Both pages use Layout wrapper (Header + Footer)
*   Content is well-formatted with headings, sections, and lists
*   Last updated dates are displayed

**4. Files to be Modified/Created**

*   `src/pages/PrivacyPolicyPage.tsx` - NEW: Privacy Policy page
*   `src/pages/TermsOfServicePage.tsx` - NEW: Terms of Service page
*   `src/pages/PrivacyPolicyPage.test.tsx` - NEW: Privacy Policy tests
*   `src/pages/TermsOfServicePage.test.tsx` - NEW: Terms of Service tests
*   `src/data/legal-content.ts` - NEW: Legal page content data
*   `src/App.tsx` - MODIFIED: Add routes for `/privacy` and `/terms`

**5. Dependencies**

*   Task 1: Navigation header and layout structure (Layout component must exist)
*   Task 7: Footer updates (for footer links to legal pages)

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create legal content data file**
    - File(s) involved: `src/data/legal-content.ts`
    - Algorithm:
        ```typescript
        export const privacyPolicyContent = {
          lastUpdated: '2025-10-16',
          contactName: 'Andres Gonzales',
          contactEmail: 'andrisgonzalis@gmail.com',
          sections: [
            {
              title: 'Introduction',
              content: [
                'Akua AI Services ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI services platform.',
                'Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.',
              ],
            },
            {
              title: '1. Information We Collect',
              content: [
                'We may collect information about you in a variety of ways. The information we may collect includes:',
              ],
              subsections: [
                {
                  title: 'Personal Data',
                  content: 'Personally identifiable information, such as your name, email address, and contact information that you voluntarily give to us when you register or use our services.',
                },
                {
                  title: 'Usage Data',
                  content: 'Information about your activity on our platform, including AI requests, service usage, and interaction patterns.',
                },
                {
                  title: 'Device Data',
                  content: 'Information about your device, including IP address, browser type, operating system, and device identifiers.',
                },
              ],
            },
            {
              title: '2. Use of Your Information',
              content: [
                'We use the information we collect in the following ways:',
                '• To provide, operate, and maintain our AI services',
                '• To improve and personalize your experience',
                '• To process your transactions and manage your account',
                '• To send you updates, security alerts, and support messages',
                '• To protect against fraudulent or illegal activity',
                '• To comply with legal obligations',
              ],
            },
            {
              title: '3. Data Protection and Security',
              content: [
                'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
                'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.',
              ],
            },
            {
              title: '4. Cookies and Tracking Technologies',
              content: [
                'We may use cookies, web beacons, and other tracking technologies to collect information about your browsing activities. You can set your browser to refuse cookies, but some features of our site may not function properly.',
              ],
            },
            {
              title: '5. Third-Party Services',
              content: [
                'Our platform may integrate with third-party AI services (such as OpenAI). These third parties have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third parties.',
              ],
            },
            {
              title: '6. Your Privacy Rights',
              content: [
                'Depending on your location, you may have certain rights regarding your personal information:',
                '• The right to access your personal data',
                '• The right to rectify inaccurate data',
                '• The right to erase your data',
                '• The right to restrict processing',
                '• The right to data portability',
                '• The right to object to processing',
                '• The right to withdraw consent',
              ],
            },
            {
              title: '7. Children\'s Privacy',
              content: [
                'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.',
              ],
            },
            {
              title: '8. Changes to This Privacy Policy',
              content: [
                'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
              ],
            },
            {
              title: '9. Contact Us',
              content: [
                'If you have questions or comments about this Privacy Policy, please contact us at:',
                `Name: Andres Gonzales`,
                `Email: andrisgonzalis@gmail.com`,
              ],
            },
          ],
        };

        export const termsOfServiceContent = {
          lastUpdated: '2025-10-16',
          contactName: 'Andres Gonzales',
          contactEmail: 'andrisgonzalis@gmail.com',
          sections: [
            {
              title: 'Introduction',
              content: [
                'These Terms of Service ("Terms") govern your use of Akua AI Services ("Service") provided by Andres Gonzales ("we", "our", or "us").',
                'By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.',
              ],
            },
            {
              title: '1. Acceptance of Terms',
              content: [
                'By creating an account or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.',
                'We reserve the right to update these Terms at any time. Your continued use of the Service after changes constitutes acceptance of the modified Terms.',
              ],
            },
            {
              title: '2. Description of Service',
              content: [
                'Akua AI Services provides access to various artificial intelligence tools and services, including but not limited to:',
                '• AI Content Generation',
                '• Image and Video AI Tools',
                '• AI-Powered Analytics',
                '• Custom AI Solutions',
                '• AI Integration Services',
                '• AI Consultation',
                'The Service is provided on an "as is" and "as available" basis.',
              ],
            },
            {
              title: '3. User Responsibilities',
              content: [
                'You agree to:',
                '• Provide accurate and complete information when creating an account',
                '• Maintain the security of your account credentials',
                '• Use the Service in compliance with all applicable laws and regulations',
                '• Not use the Service for any illegal or unauthorized purpose',
                '• Not attempt to gain unauthorized access to any part of the Service',
                '• Not transmit any malicious code, viruses, or harmful content',
                '• Not use the Service to infringe on intellectual property rights',
                '• Not resell or redistribute the Service without authorization',
              ],
            },
            {
              title: '4. Payment Terms',
              content: [
                'Certain features of the Service may require payment. By providing payment information, you agree to pay all fees associated with your selected subscription plan.',
                'All fees are non-refundable except as required by law or as explicitly stated in our refund policy.',
                'We reserve the right to change our pricing with notice to existing subscribers.',
              ],
            },
            {
              title: '5. Intellectual Property',
              content: [
                'The Service and its original content, features, and functionality are owned by Andres Gonzales and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
                'You retain ownership of any content you submit to the Service. By submitting content, you grant us a license to use, modify, and display that content as necessary to provide the Service.',
                'Content generated by AI through the Service may be subject to the terms of the underlying AI provider (e.g., OpenAI).',
              ],
            },
            {
              title: '6. Limitation of Liability',
              content: [
                'To the maximum extent permitted by law, Andres Gonzales shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.',
                'Our total liability shall not exceed the amount you paid us in the 12 months prior to the event giving rise to liability.',
              ],
            },
            {
              title: '7. Disclaimers',
              content: [
                'The Service is provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
                'We do not guarantee that the Service will be uninterrupted, secure, or error-free. We do not guarantee the accuracy or reliability of AI-generated content.',
              ],
            },
            {
              title: '8. Termination',
              content: [
                'We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.',
                'Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may do so by contacting us.',
              ],
            },
            {
              title: '9. Governing Law',
              content: [
                'These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.',
              ],
            },
            {
              title: '10. Contact Information',
              content: [
                'If you have any questions about these Terms, please contact us at:',
                `Name: Andres Gonzales`,
                `Email: andrisgonzalis@gmail.com`,
              ],
            },
          ],
        };
        ```

2.  **Create PrivacyPolicyPage component**
    - File(s) involved: `src/pages/PrivacyPolicyPage.tsx`
    - React specifics:
        - Import: privacyPolicyContent
    - Styling:
        - Container: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16`
        - Typography: proper heading hierarchy (h1, h2, h3)
        - Spacing: generous between sections
    - Algorithm:
        ```typescript
        import { privacyPolicyContent } from '@/data/legal-content';

        export default function PrivacyPolicyPage() {
          return (
            <div className="min-h-screen bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                  <p className="text-gray-600">
                    Last Updated: {privacyPolicyContent.lastUpdated}
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {privacyPolicyContent.sections.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      {section.subsections && (
                        <div className="ml-6 mt-4 space-y-4">
                          {section.subsections.map((subsection, sIndex) => (
                            <div key={sIndex}>
                              <h3 className="text-xl font-semibold mb-2">
                                {subsection.title}
                              </h3>
                              <p className="text-gray-700 leading-relaxed">
                                {subsection.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer contact */}
                <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Have Questions?</h3>
                  <p className="text-gray-700">
                    Contact us at{' '}
                    <a
                      href={`mailto:${privacyPolicyContent.contactEmail}`}
                      className="text-primary hover:underline"
                    >
                      {privacyPolicyContent.contactEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        }
        ```

3.  **Create TermsOfServicePage component**
    - File(s) involved: `src/pages/TermsOfServicePage.tsx`
    - React specifics:
        - Import: termsOfServiceContent
        - Similar structure to Privacy Policy
    - Styling:
        - Same styling approach as Privacy Policy
        - Proper typography and spacing
    - Algorithm:
        ```typescript
        import { termsOfServiceContent } from '@/data/legal-content';

        export default function TermsOfServicePage() {
          return (
            <div className="min-h-screen bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                  <p className="text-gray-600">
                    Last Updated: {termsOfServiceContent.lastUpdated}
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {termsOfServiceContent.sections.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Footer contact */}
                <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Questions About These Terms?</h3>
                  <p className="text-gray-700">
                    Contact us at{' '}
                    <a
                      href={`mailto:${termsOfServiceContent.contactEmail}`}
                      className="text-primary hover:underline"
                    >
                      {termsOfServiceContent.contactEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        }
        ```

4.  **Add routes to App.tsx**
    - File(s) involved: `src/App.tsx`
    - Algorithm:
        ```typescript
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test privacyPolicyContent has all required sections
    *   Test termsOfServiceContent has all required sections
    *   Test contact information is present in data
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   Test PrivacyPolicyPage renders title and last updated date
    *   Test all privacy policy sections render
    *   Test contact email link is present and correct
    *   Test TermsOfServicePage renders title and last updated date
    *   Test all ToS sections render
    *   Test contact email link is present and correct
    *   Tools: Vitest + React Testing Library

*   **7.3. Integration Tests:**
    *   Test navigation to `/privacy` works
    *   Test navigation to `/terms` works
    *   Test Layout (Header + Footer) appears on both pages
    *   Test email links open mailto
    *   Expected outcome: Pages accessible and functional

*   **7.4. Visual Tests:**
    *   Test responsive design at 375px, 768px, 1440px
    *   Test typography hierarchy is clear
    *   Test content is readable with proper spacing
    *   Test on mobile device for readability

*   **7.5. Manual Testing:**
    *   Navigate to `/privacy`, verify all sections display
    *   Verify last updated date is visible
    *   Verify contact information (Andres Gonzales, andrisgonzalis@gmail.com) appears
    *   Click email link, verify mailto opens
    *   Navigate to `/terms`, verify all sections display
    *   Verify content is comprehensive and well-formatted
    *   Test reading experience on mobile
