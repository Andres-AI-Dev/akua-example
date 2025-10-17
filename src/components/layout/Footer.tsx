import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { FooterProps, FooterSection } from '@/types/landing'

const footerSections: FooterSection[] = [
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
]

const socialLinks = [
  { icon: Mail, href: 'mailto:andrisgonzalis@gmail.com', label: 'Email', external: false },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', external: true },
  { icon: Github, href: 'https://github.com', label: 'GitHub', external: true },
]

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Akua',
  tagline = 'AI-Powered Services for Modern Businesses',
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              {companyName}
            </h3>
            <p className="text-gray-400 mb-6">{tagline}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="hover:text-primary transition-colors"
                  >
                    <Icon className="h-6 w-6 sm:h-5 sm:w-5" />
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
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors py-1 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>© {currentYear} {companyName}. All rights reserved.</p>
            <p className="mt-1">Built by Andres Gonzales</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
