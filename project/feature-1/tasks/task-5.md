# Task: Footer Component

**1. Description**

Create a professional Footer component that serves as the bottom section of the landing page. The footer should include company information, navigation links (placeholders for future pages), social media links, and a copyright notice. This component should be reusable across the entire application and maintain a clean, organized layout.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Footer displays company name and tagline
*   Navigation links are organized in logical groups
*   Social media icons are displayed with proper styling
*   Copyright notice includes current year (dynamic)
*   Footer is fully responsive (mobile stacks vertically, desktop uses columns)
*   Links use proper semantic HTML and are keyboard accessible
*   Optional: Newsletter signup placeholder (non-functional)
*   All tests pass with >80% code coverage

**4. Files to be Modified/Created**

*   `src/components/layout/Footer.tsx` - Footer component
*   `src/components/layout/Footer.test.tsx` - Footer tests
*   `src/types/landing.ts` - TypeScript interfaces (FooterLink, FooterSection)

**5. Dependencies**

*   Task 1: Project setup must be completed

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript interfaces**
    - File(s) involved: `src/types/landing.ts`
    - React specifics:
        - Define `FooterLink` interface:
            ```typescript
            export interface FooterLink {
              label: string
              href: string
            }
            ```
        - Define `FooterSection` interface:
            ```typescript
            export interface FooterSection {
              title: string
              links: FooterLink[]
            }
            ```
        - Define `FooterProps` interface (optional for now):
            ```typescript
            export interface FooterProps {
              companyName?: string
              tagline?: string
            }
            ```

2.  **Create Footer component structure**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - React specifics:
        - Functional component with TypeScript
        - Import icons from lucide-react (Github, Twitter, Linkedin, Mail)
        - Use useState for current year (or calculate inline)
        - Component signature: `export const Footer: React.FC<FooterProps>`
    - Styling:
        - Container: `bg-gray-900 text-gray-300 py-12 px-4`
        - Content wrapper: `max-w-7xl mx-auto`
        - Grid layout: `grid grid-cols-1 md:grid-cols-4 gap-8`
        - Links: `hover:text-white transition-colors duration-200`

3.  **Define footer navigation data**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - Algorithm:
        - Create footer sections array:
            ```typescript
            const footerSections: FooterSection[] = [
              {
                title: 'Product',
                links: [
                  { label: 'Features', href: '#features' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'AI Services', href: '#services' },
                  { label: 'API Documentation', href: '#' }
                ]
              },
              {
                title: 'Company',
                links: [
                  { label: 'About Us', href: '#' },
                  { label: 'Blog', href: '#' },
                  { label: 'Careers', href: '#' },
                  { label: 'Contact', href: '#' }
                ]
              },
              {
                title: 'Resources',
                links: [
                  { label: 'Documentation', href: '#' },
                  { label: 'Help Center', href: '#' },
                  { label: 'Community', href: '#' },
                  { label: 'Status', href: '#' }
                ]
              }
            ]
            ```
        - Define social links:
            ```typescript
            const socialLinks = [
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ]
            ```

4.  **Implement company info section**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - React specifics:
        - First column of grid
        - Display logo/company name prominently
        - Show tagline/description
        - Include social media icons
    - Styling:
        - Company name: `text-2xl font-bold text-white mb-4`
        - Tagline: `text-gray-400 mb-6`
        - Social icons container: `flex gap-4`
        - Icon buttons: `hover:text-primary transition-colors`

5.  **Implement navigation sections**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - React specifics:
        - Map through footerSections array
        - Render each section as a column
        - Use semantic HTML (nav, ul, li, a)
    - Styling:
        - Section title: `text-white font-semibold mb-4`
        - Links: `text-gray-400 hover:text-white transition-colors block mb-2`

6.  **Implement bottom section with copyright**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - React specifics:
        - Separate div below main grid
        - Calculate current year dynamically
        - Include legal links (Terms, Privacy)
    - Styling:
        - Container: `border-t border-gray-800 mt-12 pt-8`
        - Layout: `flex flex-col md:flex-row justify-between items-center`
        - Text: `text-gray-500 text-sm`
    - Algorithm:
        - Get current year: `new Date().getFullYear()`

7.  **Complete Footer implementation**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - Complete code structure:
        ```tsx
        import React from 'react'
        import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
        import { FooterProps, FooterSection } from '@/types/landing'

        const footerSections: FooterSection[] = [
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'AI Services', href: '#services' },
              { label: 'API Documentation', href: '#' }
            ]
          },
          {
            title: 'Company',
            links: [
              { label: 'About Us', href: '#' },
              { label: 'Blog', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: '#' }
            ]
          },
          {
            title: 'Resources',
            links: [
              { label: 'Documentation', href: '#' },
              { label: 'Help Center', href: '#' },
              { label: 'Community', href: '#' },
              { label: 'Status', href: '#' }
            ]
          }
        ]

        const socialLinks = [
          { icon: Github, href: '#', label: 'GitHub' },
          { icon: Twitter, href: '#', label: 'Twitter' },
          { icon: Linkedin, href: '#', label: 'LinkedIn' },
          { icon: Mail, href: '#', label: 'Email' }
        ]

        export const Footer: React.FC<FooterProps> = ({
          companyName = 'Akua',
          tagline = 'AI-Powered Services for Modern Businesses'
        }) => {
          const currentYear = new Date().getFullYear()

          return (
            <footer className="bg-gray-900 text-gray-300 py-12 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  {/* Company Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{companyName}</h3>
                    <p className="text-gray-400 mb-6">{tagline}</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="hover:text-primary transition-colors"
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  {/* Navigation Sections */}
                  {footerSections.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                      <nav>
                        <ul className="space-y-2">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-500 text-sm">
                    © {currentYear} {companyName}. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-sm">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          )
        }
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   File: `src/components/layout/Footer.test.tsx`
    *   Tools: Vitest + React Testing Library

*   **7.2. Component Tests:**
    *   Test case 1: Footer renders with default props
        - Render Footer without props
        - Assert "Akua" company name is displayed
        - Assert default tagline is displayed
    *   Test case 2: Footer renders with custom props
        - Render Footer with custom companyName and tagline
        - Assert custom values are displayed
    *   Test case 3: All navigation sections are rendered
        - Render Footer component
        - Assert all 3 navigation section titles exist (Product, Company, Resources)
        - Count navigation links (should be 12 total)
    *   Test case 4: Social media links are present
        - Render Footer component
        - Assert 4 social media links exist
        - Check aria-labels are correct
    *   Test case 5: Current year is displayed correctly
        - Render Footer component
        - Assert copyright text includes current year
        - Use `new Date().getFullYear()` to verify
    *   Test case 6: Legal links are present
        - Render Footer component
        - Assert "Privacy Policy" link exists
        - Assert "Terms of Service" link exists
    *   Test case 7: Links are keyboard accessible
        - Render Footer component
        - Assert all links have proper href attributes
        - Check that links can receive focus

*   **7.3. Accessibility Tests:**
    *   Test case 1: Footer uses semantic HTML
        - Assert `<footer>` element is used
        - Assert `<nav>` elements exist for navigation
    *   Test case 2: Social icons have accessible labels
        - Check all social links have aria-label attributes

*   **7.4. Manual Testing:**
    *   Responsive layout: Verify footer stacks on mobile, uses grid on desktop
    *   Link hover states: Check all links have proper hover effects
    *   Color contrast: Verify text is readable against dark background
    *   Social icons: Ensure icons display correctly and are clickable
    *   Year calculation: Verify current year displays correctly
