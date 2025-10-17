# Product Requirements Document: Multi-Page Interactive Website

**Feature:** feature-2
**Version:** 1.0
**Created:** 2025-10-16
**Status:** Draft
**Owner:** Andres Gonzales
**Contact:** andrisgonzalis@gmail.com

---

## Quick Summary

**What:** Transform the basic landing page into a fully interactive, multi-page website with:
- ✅ Professional navigation header on all pages
- ✅ 16+ functional pages (services, info, legal, 404)
- ✅ Clickable service cards, CTAs, and navigation links
- ✅ Contact form with frontend validation
- ✅ Updated footer with correct links
- ✅ Full mobile responsiveness

**Why:** Current site lacks interactivity - buttons don't work, services aren't clickable, no header navigation. This feature makes it feel like a real, professional SaaS platform.

**Testing:** Comprehensive browser testing with Playwright MCP required before deployment.

**Deployment:** Git-based Vercel deployment with production verification.

---

## 1. Overview

### 1.1. Objective
Transform the static landing page into a fully interactive, multi-page website with proper navigation, individual service pages, informational pages, and functional CTAs throughout the site.

### 1.2. Background
Feature-1 established the project foundation with a landing page. However, the website currently lacks interactivity - buttons don't navigate anywhere, services aren't clickable, and there's no header navigation. This feature will create a complete website experience with multiple pages, making it feel like a real, professional SaaS platform ready for future backend integration.

### 1.3. Target Audience
- Potential customers exploring AI services
- Users wanting detailed information about specific AI tools
- Visitors seeking company information, support, or legal documentation
- Business decision-makers evaluating the platform

### 1.4. In Scope
- ✅ Navigation header with logo, menu items, and CTAs
- ✅ Individual pages for each AI service (6 services):
  - AI Content Generation
  - Image and Video AI Tools
  - AI-Powered Analytics
  - Custom AI Solutions
  - AI Integration Services
  - AI Consultation
- ✅ Informational pages:
  - About Us
  - Contact
  - Help Center
  - Community
  - Status
- ✅ Legal pages:
  - Privacy Policy
  - Terms of Service
- ✅ Features page (overview of all services)
- ✅ Pricing page (detailed pricing)
- ✅ Functional navigation between all pages
- ✅ Updated footer with correct links (remove blog, careers, API docs, documentation)
- ✅ Clickable social media icons
- ✅ All CTA buttons navigate to appropriate pages
- ✅ Responsive design for all new pages
- ✅ Consistent header/footer across all pages

### 1.5. Out of Scope
- ❌ Backend integration (Firebase)
- ❌ User authentication
- ❌ Actual AI functionality
- ❌ Payment processing
- ❌ Contact forms with backend submission (can be placeholders)
- ❌ User dashboard
- ❌ Blog functionality
- ❌ API documentation

---

## 2. User Stories

### 2.1. User Story 1
As a **potential customer**, I want to **click on AI service cards** so that **I can learn detailed information about each specific service**.

### 2.2. User Story 2
As a **visitor**, I want to **see a navigation header on every page** so that **I can easily navigate between different sections of the website**.

### 2.3. User Story 3
As a **business owner**, I want to **click "Get Started" buttons** so that **I can navigate to relevant pages like pricing or signup**.

### 2.4. User Story 4
As a **user**, I want to **access company information, contact, and legal pages** so that **I can learn about the company and understand policies**.

### 2.5. User Story 5
As a **developer**, I want to **explore the help center and community pages** so that **I can find support resources**.

### 2.6. User Story 6
As a **visitor**, I want to **click social media icons** so that **I can follow the company on different platforms**.

### 2.7. User Story 7
As a **user on any page**, I want to **use the footer links** so that **I can quickly navigate to key pages**.

---

## 3. Functional Requirements

### 3.1. Navigation Header
- Display on all pages (consistent across site)
- Components:
  - Logo/brand name (clickable, navigates to home)
  - Navigation menu items:
    - Home
    - Features
    - Pricing
    - About
    - Contact
  - CTA button: "Get Started" (navigates to pricing or signup placeholder)
- Responsive: Hamburger menu on mobile
- Sticky header (optional but recommended)
- Active state highlighting for current page

### 3.2. AI Service Pages (6 pages)
Each service page should include:
- Service name and tagline
- Hero section with service description
- Key features/capabilities (3-5 bullet points with icons)
- Use cases or benefits section
- How it works section (3-4 steps)
- Pricing preview specific to this service
- CTA button: "Get Started" or "Try Now"
- Testimonial or example section (can be placeholder content)

**Services:**
1. AI Content Generation (`/services/content-generation`)
2. Image and Video AI Tools (`/services/image-video-ai`)
3. AI-Powered Analytics (`/services/analytics`)
4. Custom AI Solutions (`/services/custom-solutions`)
5. AI Integration Services (`/services/integration`)
6. AI Consultation (`/services/consultation`)

### 3.3. Features Page
- Overview of all AI services in one place
- Grid layout with cards for each service
- Clickable cards that navigate to individual service pages
- Similar to the Features section on landing page but as a dedicated page

### 3.4. Pricing Page
- Full-page detailed pricing comparison
- All three tiers: Starter, Professional, Enterprise
- Detailed feature comparison table
- FAQs about pricing
- CTA buttons for each tier (navigate to signup placeholder)

### 3.5. About Us Page
- Company mission and vision
- Our story section
- **Founder:** Andres Gonzales
- Team section (placeholder for now)
- Company values or principles
- CTA to contact or get started

### 3.6. Contact Page
- Contact form (frontend only for now):
  - Name
  - Email
  - Subject
  - Message
  - Submit button (shows success message without backend)
- Contact information:
  - **Company Owner:** Andres Gonzales
  - **Email address:** andrisgonzalis@gmail.com
  - Social media links
- Optional: Office location or map placeholder

### 3.7. Help Center Page
- FAQs organized by category
- Search bar (visual only, no functionality yet)
- Categories:
  - Getting Started
  - Account & Billing
  - Technical Support
  - AI Services
- Links to documentation (placeholder pages)

### 3.8. Community Page
- Introduction to the community
- Community guidelines
- Links to social platforms
- Community resources
- Join community CTA

### 3.9. Status Page
- System status indicators
- Service uptime display (placeholder data)
- Past incidents section (placeholder)
- Subscribe to updates (placeholder form)

### 3.10. Privacy Policy Page
- Standard privacy policy sections:
  - Information collection
  - Use of information
  - Data protection
  - Cookies
  - Third-party services
  - User rights
  - Contact information
- Use template content appropriate for SaaS platform

### 3.11. Terms of Service Page
- Standard ToS sections:
  - Acceptance of terms
  - Services description
  - User responsibilities
  - Payment terms (placeholder)
  - Intellectual property
  - Limitation of liability
  - Termination
  - Contact information
- Use template content appropriate for SaaS platform

### 3.12. Footer Updates
**Remove:**
- Careers
- Blog
- API Documentation
- Documentation (under Resources)

**Keep and make functional:**
- Product: Features, Pricing, AI Services
- Company: About Us, Contact
- Support: Help Center, Community, Status
- Legal: Privacy Policy, Terms of Service
- Social Icons: Email, LinkedIn, Twitter, GitHub

### 3.13. Call-to-Action Buttons
- Hero "Get Started" → Navigate to `/pricing`
- Pricing tier buttons → Navigate to `/contact` (placeholder for signup)
- Service cards → Navigate to respective service pages
- Footer "Get Started" → Navigate to `/pricing`

---

## 4. Non-Functional Requirements

### 4.1. Performance
- All pages load in under 2 seconds
- Smooth transitions between pages
- Optimized images and assets
- Code splitting per route

### 4.2. Responsiveness
- All new pages fully responsive (mobile, tablet, desktop)
- Hamburger menu for mobile navigation
- Touch-friendly interactive elements
- No horizontal scrolling on any page

### 4.3. Usability
- Consistent navigation across all pages
- Clear visual hierarchy on all pages
- Breadcrumbs on service pages (optional)
- Loading states for page transitions
- 404 page for invalid routes

### 4.4. SEO Readiness
- Proper meta tags for each page
- Semantic HTML structure
- Descriptive page titles
- Alt text for all images

### 4.5. Accessibility
- WCAG AA compliance maintained
- Keyboard navigation support
- ARIA labels where needed
- Focus states for all interactive elements

---

## 5. User Interface and User Experience (UI/UX)

### 5.1. Navigation Pattern
```
Header (all pages)
├── Logo (left)
├── Nav Menu (center): Home, Features, Pricing, About, Contact
└── CTA Button (right): "Get Started"
```

### 5.2. User Flow Examples

**Flow 1: Exploring a specific service**
1. User lands on homepage
2. Scrolls to Features section
3. Clicks on "AI Content Generation" card
4. Views detailed service page
5. Clicks "Get Started" → Goes to Pricing
6. Selects pricing tier → Goes to Contact

**Flow 2: Learning about company**
1. User clicks "About" in header
2. Reads about company
3. Clicks "Contact Us" CTA
4. Fills out contact form
5. Receives confirmation message

**Flow 3: Footer navigation**
1. User scrolls to footer
2. Clicks "Privacy Policy"
3. Reads policy
4. Clicks "Terms of Service" from footer
5. Returns home via logo click

### 5.3. Design Principles
- **Consistency:** Same header/footer on all pages
- **Clarity:** Clear navigation and page hierarchy
- **Professional:** Polished, production-ready appearance
- **Responsive:** Seamless experience across devices
- **Accessibility:** Inclusive design for all users

---

## 6. Metrics of Success

### 6.1. Metric 1: Page Completion
All 16+ pages created and accessible via navigation.

### 6.2. Metric 2: Navigation Functionality
100% of links and buttons navigate to correct destinations.

### 6.3. Metric 3: Responsive Design
All pages render correctly on mobile (375px), tablet (768px), desktop (1440px).

### 6.4. Metric 4: Performance
All pages maintain Lighthouse performance score > 90.

---

## 7. Acceptance Criteria

### 7.1. Header Navigation
**Given** a user is on any page,
**When** they view the header,
**Then** they should see the logo, nav menu, and Get Started button, all functional.

### 7.2. Service Page Navigation
**Given** a user clicks on an AI service card,
**When** the navigation completes,
**Then** they should land on the detailed service page with comprehensive information.

### 7.3. Footer Links
**Given** a user scrolls to the footer,
**When** they click any link,
**Then** they should navigate to the correct page without broken links.

### 7.4. Pricing CTAs
**Given** a user views a pricing tier,
**When** they click the CTA button,
**Then** they should navigate to the contact page.

### 7.5. Social Media Icons
**Given** a user clicks a social media icon,
**When** the click occurs,
**Then** it should open the appropriate social platform in a new tab.

### 7.6. Mobile Navigation
**Given** a user accesses the site on mobile,
**When** they view the header,
**Then** they should see a hamburger menu that expands to show nav items.

### 7.7. 404 Handling
**Given** a user navigates to an invalid URL,
**When** the page loads,
**Then** they should see a 404 page with a link back to home.

### 7.8. Page Consistency
**Given** a user navigates between any pages,
**When** they view different pages,
**Then** the header and footer should remain consistent.

---

## 8. Technical Decisions

### 8.1. Architecture
- **Pattern:** Multi-page application using React Router
- **Layout:** Shared layout component with header and footer
- **Navigation:** React Router's Link and useNavigate
- **State Management:** URL-based navigation state
- **Code Splitting:** Lazy loading for route components

### 8.2. Technologies

**React Components:**
- `Header` (navigation header)
- `Layout` (wrapper with header/footer)
- Service pages (6 components)
- Info pages (5 components)
- Legal pages (2 components)
- `FeaturesPage` (dedicated features page)
- `PricingPage` (dedicated pricing page)
- `NotFound` (404 page)

**Shadcn UI Components to Use:**
- `NavigationMenu` (header nav)
- `Sheet` (mobile menu)
- `Button` (CTAs)
- `Card` (service pages, features)
- `Badge` (labels, tags)
- `Tabs` (potential use in help center)
- `Accordion` (FAQs)
- `Input` (contact form)
- `Textarea` (contact form)

**New Dependencies:**
- None required (all can be achieved with existing stack)

### 8.3. Data Model

**TypeScript Interfaces:**

```typescript
// types/navigation.ts
export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// types/services.ts
export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  howItWorks: Step[];
  pricing: string;
}

export interface Step {
  title: string;
  description: string;
  icon: string;
}

// types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// types/faq.ts
export interface FAQ {
  question: string;
  answer: string;
  category: string;
}
```

**Data Files:**
- `data/navigation.ts` - Nav items, footer links
- `data/services-detail.ts` - Detailed service information
- `data/faqs.ts` - FAQ data
- `data/social-links.ts` - Social media links

### 8.4. Component Structure

```
src/
├── components/
│   ├── ui/                        # Shadcn components (existing)
│   ├── layout/
│   │   ├── Header.tsx             # NEW: Navigation header
│   │   ├── Footer.tsx             # UPDATED: Remove unwanted links
│   │   ├── Layout.tsx             # NEW: Wrapper with header/footer
│   │   └── MobileMenu.tsx         # NEW: Mobile navigation
│   ├── features/                  # Existing landing components
│   ├── services/
│   │   ├── ServiceHero.tsx        # NEW: Service page hero
│   │   ├── ServiceFeatures.tsx    # NEW: Service features section
│   │   └── ServiceCTA.tsx         # NEW: Service CTA section
│   ├── contact/
│   │   ├── ContactForm.tsx        # NEW: Contact form
│   │   └── ContactInfo.tsx        # NEW: Contact information
│   └── help/
│       ├── FAQSection.tsx         # NEW: FAQ component
│       └── FAQItem.tsx            # NEW: Individual FAQ
├── pages/
│   ├── LandingPage.tsx            # UPDATED: Add header
│   ├── FeaturesPage.tsx           # NEW: Features overview
│   ├── PricingPage.tsx            # NEW: Detailed pricing
│   ├── services/
│   │   ├── ContentGenerationPage.tsx    # NEW
│   │   ├── ImageVideoAIPage.tsx         # NEW
│   │   ├── AnalyticsPage.tsx            # NEW
│   │   ├── CustomSolutionsPage.tsx      # NEW
│   │   ├── IntegrationPage.tsx          # NEW
│   │   └── ConsultationPage.tsx         # NEW
│   ├── AboutPage.tsx              # NEW
│   ├── ContactPage.tsx            # NEW
│   ├── HelpCenterPage.tsx         # NEW
│   ├── CommunityPage.tsx          # NEW
│   ├── StatusPage.tsx             # NEW
│   ├── PrivacyPolicyPage.tsx      # NEW
│   ├── TermsOfServicePage.tsx     # NEW
│   └── NotFoundPage.tsx           # NEW
├── types/                         # NEW types
│   ├── navigation.ts
│   ├── services.ts
│   ├── contact.ts
│   └── faq.ts
└── data/                          # NEW data files
    ├── navigation.ts
    ├── services-detail.ts
    ├── faqs.ts
    └── social-links.ts
```

### 8.5. Routing

**Routes:**
```typescript
/ → LandingPage
/features → FeaturesPage
/pricing → PricingPage
/services/content-generation → ContentGenerationPage
/services/image-video-ai → ImageVideoAIPage
/services/analytics → AnalyticsPage
/services/custom-solutions → CustomSolutionsPage
/services/integration → IntegrationPage
/services/consultation → ConsultationPage
/about → AboutPage
/contact → ContactPage
/help → HelpCenterPage
/community → CommunityPage
/status → StatusPage
/privacy → PrivacyPolicyPage
/terms → TermsOfServicePage
* → NotFoundPage (404)
```

### 8.6. Layout Strategy

**Shared Layout Wrapper:**
```tsx
<Layout>
  <Header />
  <main>
    {/* Page content */}
  </main>
  <Footer />
</Layout>
```

All pages will use this layout for consistency.

### 8.7. Navigation Implementation

**Header Navigation:**
- Desktop: Horizontal nav menu
- Mobile: Hamburger menu with slide-out drawer
- Active state: Highlight current page
- Smooth scrolling for same-page anchors

**Footer Navigation:**
- Organized in columns by category
- All links use React Router Link component
- Social icons open in new tab
- Email icon opens mailto link

---

## 9. Dependencies

**Existing (no new dependencies needed):**
- React Router DOM v6 (already installed)
- Lucide React (icons, already installed)
- Shadcn UI components (already configured)

**Optional (if needed):**
- React Hook Form (for contact form validation)
- Zod (for form schema validation)

---

## 10. Risks & Mitigation

**Risk:** Creating 16+ pages may lead to code duplication
**Mitigation:** Create reusable components, shared layouts, and data-driven pages

**Risk:** Navigation complexity on mobile
**Mitigation:** Use Shadcn Sheet component for mobile menu, test extensively

**Risk:** Content generation for all pages
**Mitigation:** Use placeholder content, focus on structure and interactivity

**Risk:** Performance degradation with many routes
**Mitigation:** Implement code splitting with React.lazy()

**Risk:** Maintaining consistency across all pages
**Mitigation:** Use shared Layout component and design system

---

## 11. Future Considerations

- Add page transitions/animations (Framer Motion)
- Implement search functionality for help center
- Add breadcrumbs for deep pages
- Create sitemap.xml for SEO
- Add meta tags for social sharing (Open Graph)
- Implement actual contact form backend (feature-3 with Firebase)
- Add loading states between page transitions
- Create custom 404 and error pages with more personality

---

## 12. Content Strategy

### 12.1. Service Pages Content
Each service page will need:
- Compelling description (2-3 paragraphs)
- 4-5 key features
- 3-4 use cases or benefits
- 3-step "How it works" process
- Pricing preview
- CTA messaging

### 12.2. Legal Pages Content
- Use standard legal templates adapted for AI SaaS
- Include company contact information:
  - **Company Owner:** Andres Gonzales
  - **Contact Email:** andrisgonzalis@gmail.com
- Ensure compliance considerations are noted

### 12.3. Help Center Content
- 10-15 FAQs covering common topics
- Organized by category
- Clear, concise answers

### 12.4. About Page Content
- Company mission and vision
- Brief history or founding story
- Core values (3-5 key principles)
- Team section (placeholder images)

---

## 13. Implementation Workflow

This feature follows a structured workflow similar to feature-1:

### Phase 1: Planning 📋
1. Break down PRD into detailed, actionable tasks
2. Create task files in `project/feature-2/tasks/`
3. Define dependencies between tasks
4. Specify components, types, tests for each task
5. Use task_template.md structure

### Phase 2: Implementation 💻
1. **TDD Approach:** Write tests FIRST for each component
2. **Build all components:**
   - Navigation header with mobile menu
   - Layout wrapper component
   - All 16+ page components
   - Reusable sub-components (service cards, forms, FAQs)
   - Update existing components (Footer)
3. **Create all routes** in React Router
4. **Implement navigation logic**
5. **Add responsive styling** with Tailwind
6. **Ensure all tests pass**

### Phase 3: Validation ✅
1. Run all automated tests (unit, component, integration)
2. TypeScript type checking
3. Linting and code quality checks
4. Code quality assessment (modularity, testability)
5. Generate human testing script

### Phase 4: Browser Testing with Playwright MCP 🌐
**CRITICAL PHASE - DO NOT SKIP**

1. Start dev server in background (`npm run dev`)
2. Open browser with Playwright MCP
3. Test ALL pages systematically:
   - Homepage with header/footer
   - All 6 service pages
   - Features, Pricing pages
   - About, Contact pages
   - Help Center, Community, Status pages
   - Privacy Policy, Terms of Service pages
   - 404 page
4. Test navigation (header menu, footer links, service cards)
5. Test contact form submission
6. Test responsive design (375px, 768px, 1440px)
7. Check for console errors (must be ZERO)
8. Take screenshots at each breakpoint
9. Close browser and stop dev server
10. **Fix any issues found before proceeding**

### Phase 5: Deployment 🚀
1. Run production build (`npm run build`)
2. Test preview locally (`npm run preview`)
3. Commit changes to `feature-2` branch
4. Push to remote repository
5. Create pull request to `master`
6. Review and merge (triggers Vercel deployment)
7. Verify production deployment
8. Test live production URL
9. Run Lighthouse performance audit

### Success Criteria:
By completion, feature-2 will have:
- ✅ 16+ fully functional, responsive pages
- ✅ Complete navigation system (header + footer)
- ✅ All interactive elements working
- ✅ Zero console errors
- ✅ All tests passing
- ✅ Browser tested with Playwright MCP
- ✅ Successfully deployed to Vercel
- ✅ Production verified and performing well

---

## 14. Task Breakdown

This feature will be broken down into tasks:

1. **Task 1:** Navigation header and layout structure
2. **Task 2:** Service pages (all 6 services)
3. **Task 3:** Features and Pricing pages
4. **Task 4:** About, Contact, Help Center pages
5. **Task 5:** Community and Status pages
6. **Task 6:** Legal pages (Privacy Policy, Terms of Service)
7. **Task 7:** Footer updates and social links
8. **Task 8:** 404 page and final integration
9. **Task 9:** Mobile responsiveness and testing
10. **Task 10:** Content population and polish

---

## 15. Testing Requirements

### 15.1. Navigation Testing
- All header links navigate correctly
- All footer links navigate correctly
- Active states work properly
- Mobile menu functions correctly

### 15.2. Page Rendering
- All pages render without errors
- All pages are responsive
- All CTAs function as expected

### 15.3. Form Testing
- Contact form validates input
- Form shows success message
- Form clears after submission

### 15.4. Integration Testing
- Navigation flow between pages works
- Back/forward browser buttons work
- Direct URL access works for all routes
- 404 page shows for invalid routes

### 15.5. Browser Testing with Playwright MCP
**CRITICAL: Must complete comprehensive browser testing before deployment**

After all implementation and unit tests pass:

1. **Start Development Server:**
   - Run `npm run dev` in background
   - Wait for server to be ready at `http://localhost:5173`

2. **Navigate and Test Homepage:**
   - Use `mcp__playwright__browser_navigate` to open localhost
   - Use `mcp__playwright__browser_snapshot` to capture page state
   - Verify Hero, Features, Pricing, Footer sections visible
   - Check for console errors using `mcp__playwright__browser_console_messages`

3. **Test Navigation Header:**
   - Click on each nav menu item (Home, Features, Pricing, About, Contact)
   - Verify each page loads correctly
   - Check active state highlighting
   - Verify "Get Started" button navigates to pricing

4. **Test Service Pages:**
   - Navigate to landing page Features section
   - Click on each of the 6 service cards
   - Verify navigation to correct service detail pages
   - Check that all service pages render properly
   - Test CTAs on service pages navigate correctly

5. **Test Footer Links:**
   - Scroll to footer on any page
   - Click and verify all footer links:
     - Product: Features, Pricing, AI Services
     - Company: About Us, Contact
     - Support: Help Center, Community, Status
     - Legal: Privacy Policy, Terms of Service
   - Verify social media icons open in new tabs

6. **Test Contact Form:**
   - Navigate to `/contact`
   - Fill out contact form using `mcp__playwright__browser_fill_form`
   - Submit form and verify success message
   - Check for validation errors with empty fields

7. **Test Responsive Design:**
   - Use `mcp__playwright__browser_resize` to test:
     - Mobile: 375x667px
     - Tablet: 768x1024px
     - Desktop: 1440x900px
   - Take screenshots at each size using `mcp__playwright__browser_take_screenshot`
   - Verify mobile hamburger menu works
   - Check for layout breaks or horizontal scrolling

8. **Test 404 Page:**
   - Navigate to invalid route (e.g., `/invalid-page`)
   - Verify 404 page displays
   - Check "Back to Home" link works

9. **Console Error Check:**
   - Use `mcp__playwright__browser_console_messages` with `onlyErrors: true`
   - Verify ZERO JavaScript errors throughout testing
   - If errors found, fix before proceeding to deployment

10. **Close Browser:**
    - Use `mcp__playwright__browser_close`
    - Stop the development server

**DO NOT PROCEED TO DEPLOYMENT IF ANY BROWSER TESTS FAIL**

---

## 16. Deployment Strategy

### 16.1. Pre-Deployment Checklist
- [ ] All unit tests passing (`npm run test`)
- [ ] TypeScript compilation successful (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] Browser testing with Playwright MCP completed successfully
- [ ] All pages manually verified
- [ ] All links and navigation tested
- [ ] No console errors in browser
- [ ] Responsive design verified at all breakpoints

### 16.2. Build Verification
1. Run production build: `npm run build`
2. Verify `dist/` directory created successfully
3. Check build output for any warnings or errors
4. Test production build locally: `npm run preview`

### 16.3. Vercel Deployment
**Method: Git Integration (Recommended)**

1. Ensure all changes committed to `feature-2` branch
2. Push branch to remote repository
3. Create pull request to `master` branch
4. Review changes in PR
5. Merge to master (triggers automatic Vercel deployment)
6. Monitor Vercel deployment logs
7. Verify deployment succeeds
8. Test live production URL

**Vercel Configuration (auto-detected):**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 16.4. Post-Deployment Verification
1. **Open Production URL**
2. **Test Critical Paths:**
   - Navigate through all pages
   - Click all service cards
   - Test footer links
   - Submit contact form
   - Verify mobile responsiveness
3. **Check Performance:**
   - Run Lighthouse audit
   - Verify Performance, Accessibility, Best Practices scores > 90
4. **Monitor for Issues:**
   - Check Vercel logs for errors
   - Monitor analytics (if configured)
   - Test from different devices/browsers

### 16.5. Rollback Plan
If critical issues found in production:
1. Revert git commit
2. Vercel will automatically redeploy previous version
3. Fix issues in development
4. Re-test with Playwright MCP
5. Redeploy when ready

---

## 17. Definition of Done

**Implementation Complete:**
- [ ] All 16+ pages created and accessible
- [ ] Header navigation present on all pages
- [ ] Footer updated with correct links (removed blog, careers, API docs, documentation)
- [ ] All CTAs functional and navigate correctly
- [ ] All service cards clickable and navigate to detail pages
- [ ] Mobile responsive design for all pages
- [ ] Contact form functional (frontend only)
- [ ] Social media icons functional (open in new tabs)
- [ ] 404 page implemented with back-to-home link
- [ ] Owner information (Andres Gonzales, andrisgonzalis@gmail.com) in Contact and About pages
- [ ] Legal pages include proper contact information

**Testing Complete:**
- [ ] All unit tests passing (`npm run test`)
- [ ] All component tests passing
- [ ] TypeScript compilation successful (`tsc --noEmit`)
- [ ] No linting errors (`npm run lint`)
- [ ] **Browser testing with Playwright MCP completed:**
  - [ ] All pages tested and render correctly
  - [ ] Navigation tested (header, footer, service cards)
  - [ ] Contact form tested
  - [ ] Mobile responsiveness verified (375px, 768px, 1440px)
  - [ ] Zero console errors
  - [ ] Screenshots captured at all breakpoints
  - [ ] 404 page tested
- [ ] Manual QA completed on all pages

**Deployment Complete:**
- [ ] Production build successful (`npm run build`)
- [ ] Code committed to `feature-2` branch
- [ ] Pull request created and reviewed
- [ ] Merged to `master` branch
- [ ] Vercel deployment successful
- [ ] Production URL tested and verified
- [ ] Lighthouse performance scores > 90
- [ ] All critical paths tested in production

**Documentation Complete:**
- [ ] Implementation notes documented
- [ ] Any known issues or limitations documented
- [ ] Deployment verification completed
