# Task: Footer Updates and Social Links

**1. Description**

Update the existing Footer component to remove unwanted links (blog, careers, API documentation, documentation under Resources) and add functional social media icons that open in new tabs. Reorganize footer structure to match the PRD requirements and add email link for Andres Gonzales (andrisgonzalis@gmail.com).

**2. Parent Feature**

*   [project/feature-2/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Footer removes: Blog, Careers, API Documentation, Documentation (under Resources)
*   Footer keeps and makes functional: Features, Pricing, AI Services (Product); About Us, Contact (Company); Help Center, Community, Status (Support); Privacy Policy, Terms of Service (Legal)
*   Social media icons (Email, LinkedIn, Twitter, GitHub) are present and functional
*   Email icon opens mailto:andrisgonzalis@gmail.com
*   LinkedIn, Twitter, GitHub icons open in new tabs
*   All footer links use React Router Link (internal) or <a> tags (external/social)
*   Footer is responsive and well-organized
*   Footer appears consistently on all pages via Layout component

**4. Files to be Modified/Created**

*   `src/components/layout/Footer.tsx` - MODIFIED: Update links and add social icons
*   `src/components/layout/Footer.test.tsx` - MODIFIED: Update tests for new footer
*   `src/data/social-links.ts` - NEW: Social media links data
*   `src/data/footer-navigation.ts` - NEW: Footer navigation structure

**5. Dependencies**

*   Task 1: Navigation header and layout structure (Layout component must exist)
*   Tasks 2-6: All pages must exist for footer links to work

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create social links data**
    - File(s) involved: `src/data/social-links.ts`
    - Algorithm:
        ```typescript
        import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

        export interface SocialLink {
          name: string;
          url: string;
          icon: any; // Lucide icon component
          ariaLabel: string;
        }

        export const socialLinks: SocialLink[] = [
          {
            name: 'Email',
            url: 'mailto:andrisgonzalis@gmail.com',
            icon: Mail,
            ariaLabel: 'Email Andres Gonzales',
          },
          {
            name: 'LinkedIn',
            url: 'https://linkedin.com', // Placeholder
            icon: Linkedin,
            ariaLabel: 'Follow us on LinkedIn',
          },
          {
            name: 'Twitter',
            url: 'https://twitter.com', // Placeholder
            icon: Twitter,
            ariaLabel: 'Follow us on Twitter',
          },
          {
            name: 'GitHub',
            url: 'https://github.com', // Placeholder
            icon: Github,
            ariaLabel: 'View our GitHub',
          },
        ];
        ```

2.  **Create footer navigation data**
    - File(s) involved: `src/data/footer-navigation.ts`
    - Algorithm:
        ```typescript
        import { NavItem } from '@/types/navigation';

        export interface FooterColumn {
          title: string;
          links: NavItem[];
        }

        export const footerNavigation: FooterColumn[] = [
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'AI Services', href: '/features' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ],
          },
          {
            title: 'Support',
            links: [
              { label: 'Help Center', href: '/help' },
              { label: 'Community', href: '/community' },
              { label: 'Status', href: '/status' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ],
          },
        ];
        ```

3.  **Update Footer component**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - React specifics:
        - Import: Link from react-router-dom
        - Import: footerNavigation, socialLinks
        - Import: Social icons from lucide-react
    - Styling:
        - Container: `bg-gray-900 text-white`
        - Grid layout: `grid grid-cols-2 md:grid-cols-4 gap-8`
        - Social icons: `flex space-x-4`
    - Algorithm:
        ```typescript
        import { Link } from 'react-router-dom';
        import { footerNavigation } from '@/data/footer-navigation';
        import { socialLinks } from '@/data/social-links';

        export function Footer() {
          const currentYear = new Date().getFullYear();

          return (
            <footer className="bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  {footerNavigation.map((column) => (
                    <div key={column.title}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                        {column.title}
                      </h3>
                      <ul className="space-y-3">
                        {column.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                      <p>© {currentYear} Akua AI Services. All rights reserved.</p>
                      <p className="mt-1">Built by Andres Gonzales</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        const isExternal = social.url.startsWith('http') && !social.url.startsWith('mailto');
                        
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            aria-label={social.ariaLabel}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Icon className="h-6 w-6" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          );
        }
        ```

4.  **Update Footer tests**
    - File(s) involved: `src/components/layout/Footer.test.tsx`
    - Algorithm:
        - Test footer renders all 4 column headings (Product, Company, Support, Legal)
        - Test footer includes correct links (Features, Pricing, About, Contact, Help, Community, Status, Privacy, Terms)
        - Test footer does NOT include removed links (Blog, Careers, API Documentation, Documentation)
        - Test social icons render (Email, LinkedIn, Twitter, GitHub)
        - Test email link has mailto: href
        - Test external social links have target="_blank" and rel="noopener noreferrer"
        - Test copyright notice includes current year
        - Test "Built by Andres Gonzales" text appears

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test socialLinks array has 4 items
    *   Test footerNavigation has 4 columns
    *   Test email link has correct mailto URL
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   Test Footer renders all column headings
    *   Test Footer includes only correct links (no blog, careers, API docs, documentation)
    *   Test Features link points to /features
    *   Test Pricing link points to /pricing
    *   Test About Us link points to /about
    *   Test Contact link points to /contact
    *   Test Help Center link points to /help
    *   Test Community link points to /community
    *   Test Status link points to /status
    *   Test Privacy Policy link points to /privacy
    *   Test Terms of Service link points to /terms
    *   Test 4 social icons render (Email, LinkedIn, Twitter, GitHub)
    *   Test email icon has mailto:andrisgonzalis@gmail.com
    *   Test external social links have target="_blank"
    *   Test copyright includes current year
    *   Test "Built by Andres Gonzales" text present
    *   Tools: Vitest + React Testing Library

*   **7.3. Integration Tests:**
    *   Test clicking footer links navigates correctly
    *   Test footer appears on all pages via Layout
    *   Expected outcome: Consistent footer across site

*   **7.4. Visual Tests:**
    *   Test footer is responsive at 375px, 768px, 1440px
    *   Test footer columns stack properly on mobile
    *   Test social icons are properly spaced
    *   Test hover states work on links and icons

*   **7.5. Manual Testing:**
    *   Click each footer link, verify navigation works
    *   Click email icon, verify mailto opens
    *   Click LinkedIn icon, verify opens in new tab
    *   Click Twitter icon, verify opens in new tab
    *   Click GitHub icon, verify opens in new tab
    *   Verify removed links (blog, careers, etc.) are NOT present
    *   Test on mobile device
