---
description: Complete autonomous workflow for feature-2 (Multi-Page Interactive Website)
---

You are running the **FULLY AUTONOMOUS FEATURE-2 IMPLEMENTATION WORKFLOW**.

**IMPORTANT: You will execute ALL phases without stopping for approval. Complete the entire feature from start to finish.**

Feature-2: Multi-Page Interactive Website for Akua AI Services Platform

## Context Files to Read:
1. `project/PAD.md` - Project architecture and tech stack
2. `project/feature-2/PRD.md` - Feature-2 PRD (already completed)
3. `project/templates/task_template.md` - Task template
4. `project/commands/plan.md` - Planning instructions
5. `project/commands/implement.md` - Implementation instructions
6. `project/commands/validate.md` - Validation instructions

## What This Command Does:

This command will **AUTONOMOUSLY** complete the entire feature-2 implementation:
- Plan all tasks
- Implement ALL code and tests for 16+ pages
- Validate quality
- Test with Playwright MCP browser testing
- Deploy to Vercel
- Report final status

**You have full authority to make all technical decisions and proceed through all phases.**

## Workflow Steps:

### PHASE 1: PLAN 📋 (Execute Automatically)
1. Read `project/feature-2/PRD.md` thoroughly
2. Follow instructions from `project/commands/plan.md`
3. Break down the PRD into specific tasks
4. Create task files in `project/feature-2/tasks/`:
   - `task-1.md` - Navigation header and layout structure
   - `task-2.md` - Service pages (all 6 services)
   - `task-3.md` - Features and Pricing pages
   - `task-4.md` - About, Contact, Help Center pages
   - `task-5.md` - Community and Status pages
   - `task-6.md` - Legal pages (Privacy Policy, Terms of Service)
   - `task-7.md` - Footer updates and social links
   - `task-8.md` - 404 page and final integration
   - `task-9.md` - Mobile responsiveness and testing
   - `task-10.md` - Content population and polish
5. For each task, use the `project/templates/task_template.md` structure
6. Include React-specific details:
   - Components to create with TypeScript interfaces
   - Hooks needed (useState, useEffect, useNavigate, custom hooks)
   - Shadcn components to use (NavigationMenu, Sheet, Accordion, etc.)
   - Tailwind styling approach
   - React Router routes
   - Test plans (Vitest + React Testing Library)
7. **Immediately proceed to implementation phase (no approval needed)**

### PHASE 2: IMPLEMENT 💻 (Execute Automatically)
8. For each task (in order of dependencies):
   - Read `project/commands/implement.md` for detailed instructions
   - **TDD Approach:**
     - Create tests FIRST based on the task's test plan
     - Tests should initially fail
   - **Write ALL the code:**
     - Create Header component with navigation menu
     - Create Layout wrapper component
     - Create MobileMenu component with Shadcn Sheet
     - Update Footer component (remove blog, careers, API docs, documentation)
     - Create ALL 16+ page components:
       - 6 service detail pages
       - FeaturesPage, PricingPage
       - AboutPage (include Andres Gonzales as founder)
       - ContactPage (include contact form + andrisgonzalis@gmail.com)
       - HelpCenterPage, CommunityPage, StatusPage
       - PrivacyPolicyPage, TermsOfServicePage (include contact info)
       - NotFoundPage (404)
     - Update App.tsx with all routes
     - Create all TypeScript interfaces and types
     - Create data files (navigation, services-detail, faqs, social-links)
     - Implement navigation logic (Link, useNavigate)
     - Add active state highlighting
     - Implement contact form with validation
     - Make all CTAs functional
     - Make all service cards clickable
     - Update all footer links
     - Add social media links (open in new tab)
     - Follow React + TypeScript best practices from PAD.md
     - Use functional components with hooks
     - Leverage Shadcn UI components
     - Keep components small and focused
     - Implement code splitting with React.lazy()
   - **Run tests and validate:**
     - Ensure all tests pass
     - Check TypeScript compilation
     - Run the dev server to verify it works
     - Test navigation between pages
   - **Continue to next task automatically**

### PHASE 3: VALIDATE ✅
9. After all tasks are implemented:
   - Read `project/commands/validate.md` for detailed instructions
   - **Run automated checks:**
     - Execute all unit tests
     - Execute all component tests
     - Execute all integration tests (navigation, routing)
     - Run TypeScript type checking (`tsc --noEmit`)
     - Check for linting errors
     - Run the dev server and verify it starts
     - Test that all routes work
   - **Code quality assessment:**
     - Evaluate modularity (1-5 score)
     - Evaluate testability (1-5 score)
     - Check React best practices adherence
     - Verify Tailwind/Shadcn usage
     - Assess TypeScript coverage
     - Check for code duplication
   - **Generate human testing script:**
     - Based on acceptance criteria from PRD
     - Step-by-step manual testing instructions
     - Navigation testing (header, footer, service cards)
     - Form testing (contact form)
     - Visual checks (responsive design, UI polish)
     - Browser compatibility checks
   - **Compile evaluation report:**
     - Test results summary
     - Code quality scores
     - Human testing script
     - Recommendations for browser testing

### PHASE 4: BROWSER TESTING WITH PLAYWRIGHT MCP 🌐 (Execute Automatically)
10. After validation passes, test in real browser:
    - **Start dev server in background:**
      - Use Bash tool with `run_in_background: true`
      - Run `npm run dev` in the project directory
      - Wait 5-10 seconds for server to start
      - Verify server is running at `http://localhost:5173`

    - **Open Playwright MCP and navigate to homepage:**
      - Use `mcp__playwright__browser_navigate` to `http://localhost:5173`
      - Use `mcp__playwright__browser_snapshot` to capture page state
      - Verify Header is visible with navigation menu
      - Verify Hero, Features, Pricing, Footer sections visible
      - Use `mcp__playwright__browser_console_messages` with `onlyErrors: true`
      - Verify NO console errors

    - **Test Navigation Header:**
      - Click on "Features" nav link using `mcp__playwright__browser_click`
      - Verify navigation to `/features` page
      - Take snapshot of Features page
      - Click on "Pricing" nav link
      - Verify navigation to `/pricing` page
      - Take snapshot of Pricing page
      - Click on "About" nav link
      - Verify navigation to `/about` page
      - Click on "Contact" nav link
      - Verify navigation to `/contact` page
      - Click on logo/home link
      - Verify back to homepage
      - Check for console errors after each navigation

    - **Test Service Pages (All 6):**
      - Navigate back to homepage
      - Scroll to Features section (use `mcp__playwright__browser_evaluate` if needed)
      - Click on "AI Content Generation" service card
      - Verify navigation to `/services/content-generation`
      - Take snapshot
      - Use browser back button: `mcp__playwright__browser_navigate_back`
      - Click on "Image and Video AI Tools" card
      - Verify navigation to `/services/image-video-ai`
      - Take snapshot
      - Repeat for remaining 4 services:
        - AI-Powered Analytics (`/services/analytics`)
        - Custom AI Solutions (`/services/custom-solutions`)
        - AI Integration Services (`/services/integration`)
        - AI Consultation (`/services/consultation`)
      - On each service page, verify CTA button works
      - Check for console errors

    - **Test Footer Links:**
      - Navigate to homepage
      - Scroll to footer
      - Click on "Features" footer link
      - Verify navigation works
      - Click on "Pricing" footer link
      - Click on "About Us" footer link
      - Click on "Contact" footer link
      - Click on "Help Center" footer link
      - Verify navigation to `/help`
      - Click on "Community" footer link
      - Verify navigation to `/community`
      - Click on "Status" footer link
      - Verify navigation to `/status`
      - Click on "Privacy Policy" footer link
      - Verify navigation to `/privacy`
      - Take snapshot of Privacy Policy page
      - Click on "Terms of Service" footer link
      - Verify navigation to `/terms`
      - Take snapshot of Terms page
      - Verify all footer links work correctly

    - **Test Contact Form:**
      - Navigate to `/contact` page
      - Use `mcp__playwright__browser_snapshot` to see form
      - Fill out form using `mcp__playwright__browser_fill_form`:
        - Name: "Test User"
        - Email: "test@example.com"
        - Subject: "Test Subject"
        - Message: "Test message"
      - Click submit button using `mcp__playwright__browser_click`
      - Verify success message appears
      - Take snapshot of success state
      - Verify form cleared after submission (if applicable)
      - Test form validation: submit empty form
      - Verify validation errors appear

    - **Test Pricing CTAs:**
      - Navigate to `/pricing` page
      - Click on "Get Started" button for Starter tier
      - Verify navigation to contact page
      - Navigate back to pricing
      - Click on Professional tier CTA
      - Verify navigation to contact page
      - Navigate back to pricing
      - Click on Enterprise tier CTA
      - Verify navigation to contact page

    - **Test 404 Page:**
      - Navigate to invalid route: `http://localhost:5173/invalid-page-123`
      - Verify 404 page displays
      - Take snapshot of 404 page
      - Click "Back to Home" or "Go Home" link
      - Verify navigation back to homepage

    - **Test Responsive Design:**
      - Navigate to homepage
      - Use `mcp__playwright__browser_resize` to mobile: 375x667px
      - Take screenshot using `mcp__playwright__browser_take_screenshot` with filename "mobile-home.png"
      - Verify hamburger menu is visible
      - Click hamburger menu (if it's a button/icon)
      - Verify mobile menu opens (Sheet/drawer)
      - Take screenshot of mobile menu open
      - Close mobile menu
      - Navigate to a service page at mobile size
      - Take screenshot "mobile-service.png"
      - Check for horizontal scrolling (should be none)
      - Resize to tablet: 768x1024px
      - Take screenshot "tablet-home.png"
      - Navigate to pricing page
      - Take screenshot "tablet-pricing.png"
      - Resize to desktop: 1440x900px
      - Take screenshot "desktop-home.png"
      - Navigate through several pages at desktop size
      - Take screenshots: "desktop-features.png", "desktop-contact.png"
      - Verify layout looks good at all sizes
      - Check for any layout breaks or overflow issues

    - **Final Console Error Check:**
      - Use `mcp__playwright__browser_console_messages` with `onlyErrors: true`
      - Review ALL console messages collected during testing
      - Verify ZERO JavaScript errors throughout entire test session
      - If ANY errors found, note them and fix before proceeding

    - **Test All Pages Systematically:**
      - Go through each of the 16+ pages one by one
      - For each page:
        - Navigate to the page
        - Take a snapshot
        - Check console for errors
        - Verify content renders correctly
        - Test any interactive elements
      - Pages to verify:
        - `/` (homepage)
        - `/features`
        - `/pricing`
        - `/services/content-generation`
        - `/services/image-video-ai`
        - `/services/analytics`
        - `/services/custom-solutions`
        - `/services/integration`
        - `/services/consultation`
        - `/about`
        - `/contact`
        - `/help`
        - `/community`
        - `/status`
        - `/privacy`
        - `/terms`

    - **Close browser and stop dev server:**
      - Use `mcp__playwright__browser_close`
      - Kill the background dev server process using appropriate bash command
      - Clean up any resources

    - **Generate Browser Testing Report:**
      - Compile all findings from browser testing
      - List all pages tested
      - Note any issues found
      - Confirm zero console errors
      - Include screenshot paths
      - Provide pass/fail status for each test section

    - **Only proceed to deployment if ALL browser tests pass with ZERO errors**

### PHASE 5: DEPLOYMENT 🚀 (Execute Automatically)
11. After browser testing passes with zero errors:
    - **Run production build:**
      - Execute `npm run build`
      - Verify build completes successfully
      - Check for any build warnings or errors
      - Confirm `dist/` directory created

    - **Test production build locally:**
      - Run `npm run preview`
      - Verify preview server starts
      - Open in Playwright browser if needed
      - Test a few critical pages
      - Stop preview server

    - **Prepare for deployment:**
      - Verify all changes are committed
      - Create comprehensive commit message
      - Ensure on `feature-2` branch

    - **Generate deployment instructions:**
      - Provide step-by-step Vercel deployment guide
      - Include git commands for pushing to remote
      - Include PR creation steps
      - Include merge and deployment verification steps

    - **Provide post-deployment checklist:**
      - Test production URL
      - Verify all pages work in production
      - Check Lighthouse scores
      - Monitor Vercel logs
      - Test from different devices/browsers

## Important Notes:

- **AUTONOMOUS EXECUTION:** Execute all phases without stopping for approval
- **Use TodoWrite** to track progress through all tasks
- **Don't skip TDD** - tests must be written first for each component
- **Follow PAD.md** for all technical decisions
- **Refer to feature-2/PRD.md** for acceptance criteria
- **Complete ALL tasks** - write all code, all tests, all configuration
- **Make decisions independently** - you have full authority to implement best practices
- **Browser testing is CRITICAL** - do not skip or rush this phase
- **Zero console errors required** - fix any errors found during browser testing
- **Only report to user when FULLY COMPLETE or if critical blockers occur**

## Feature-2 Scope Reminder:

**In Scope:**
- Navigation header (desktop + mobile hamburger menu)
- Layout wrapper component
- 6 service detail pages (clickable from landing page)
- Dedicated Features and Pricing pages
- About page (with Andres Gonzales as founder)
- Contact page (with form and andrisgonzalis@gmail.com)
- Help Center, Community, Status pages
- Privacy Policy and Terms of Service pages (with contact info)
- 404 Not Found page
- Updated footer (removed blog, careers, API docs, documentation)
- All navigation functional (header, footer, service cards, CTAs)
- Social media icons (open in new tab)
- Fully responsive design
- Complete routing with React Router

**Out of Scope:**
- Backend integration (Firebase)
- Authentication
- Actual AI functionality
- Payment processing
- Contact form backend submission
- User dashboard
- Search functionality
- Blog or API documentation

## Tech Stack:
- **Frontend:** React 18+ with TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v3
- **Components:** Shadcn UI (NavigationMenu, Sheet, Accordion, Input, Textarea, Card, Badge)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library
- **Browser Testing:** Playwright MCP
- **Deployment:** Vercel

## Success Criteria:

By the end of this workflow, you should have:
- ✅ Complete task breakdown in `project/feature-2/tasks/`
- ✅ All components implemented with TypeScript
- ✅ Comprehensive tests (all passing)
- ✅ 16+ fully responsive, functional pages
- ✅ Complete navigation system (header + footer)
- ✅ All interactive elements working
- ✅ Contact form with validation (frontend only)
- ✅ Updated footer with correct links
- ✅ Social media links functional
- ✅ 404 page with back-to-home link
- ✅ Browser tested with Playwright MCP (comprehensive)
- ✅ Zero console errors
- ✅ Screenshots at mobile, tablet, desktop sizes
- ✅ All pages tested and verified
- ✅ Production build successful
- ✅ Ready for Vercel deployment
- ✅ Validation report with quality scores
- ✅ Human testing script for manual QA
- ✅ Browser testing report with all findings

---

## Execution Instructions:

**YOU MUST:**
1. Create all 10 task files in `project/feature-2/tasks/`
2. Implement ALL components, pages, hooks, types, utilities, and data files
3. Write comprehensive tests for everything
4. Update App.tsx with all routes
5. Update Footer component to remove unwanted links
6. Create Header component with mobile menu
7. Create Layout wrapper component
8. Implement all 16+ pages with proper content
9. Ensure all navigation works (header, footer, service cards, CTAs)
10. Include owner information (Andres Gonzales, andrisgonzalis@gmail.com) in appropriate pages
11. Make contact form functional (frontend validation)
12. Configure React Router properly
13. Ensure everything builds and runs successfully
14. Generate validation report
15. **Run dev server in background and test EXTENSIVELY with Playwright MCP**
16. **Test ALL pages, navigation, forms, responsive design**
17. **Verify ZERO console errors**
18. **Take screenshots at multiple breakpoints**
19. Only proceed to deployment after browser testing passes completely
20. Generate final deployment instructions

**DO NOT:**
- Ask for approval between phases
- Stop and wait for user input (except if critical errors occur)
- Skip any tasks or components
- Leave placeholders or TODOs
- Skip browser testing or rush through it
- Deploy with console errors
- Skip any pages or navigation testing

**COMPLETE EVERYTHING, THEN REPORT FINAL STATUS.**

---

## Owner Information to Include:

- **Owner:** Andres Gonzales
- **Email:** andrisgonzalis@gmail.com

Include this information in:
- About page (as founder/owner)
- Contact page (contact information section)
- Privacy Policy page (contact section)
- Terms of Service page (contact section)
- Footer email link (mailto:andrisgonzalis@gmail.com)

---

**Executing feature-2 autonomous workflow now...**
