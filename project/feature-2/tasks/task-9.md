# Task: Mobile Responsiveness and Testing

**1. Description**

Ensure all 16+ pages are fully responsive across mobile (375px), tablet (768px), and desktop (1440px) breakpoints. Test and fix any layout issues, ensure mobile hamburger menu works correctly, verify touch-friendly interactions, and ensure no horizontal scrolling on any device. Add responsive utilities and components where needed.

**2. Parent Feature**

*   [project/feature-2/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   All pages render correctly at mobile (375px), tablet (768px), and desktop (1440px)
*   No horizontal scrolling on any page at any breakpoint
*   Mobile hamburger menu opens and closes correctly
*   Mobile menu closes after navigation
*   All interactive elements are touch-friendly (min 44x44px)
*   Text is readable at all sizes (min 16px body text on mobile)
*   Images and cards stack appropriately on mobile
*   Forms are usable on mobile (Contact page)
*   Footer columns stack correctly on mobile
*   Service cards are tappable and well-spaced on mobile
*   All CTAs are easily accessible on mobile
*   Responsive typography scales appropriately

**4. Files to be Modified/Created**

*   All page components - REVIEW & FIX: Ensure responsive classes
*   `src/components/layout/Header.tsx` - REVIEW: Mobile menu functionality
*   `src/components/layout/MobileMenu.tsx` - REVIEW: Sheet behavior on mobile
*   `src/components/layout/Footer.tsx` - REVIEW: Mobile footer layout
*   All service pages - REVIEW: Content stacking on mobile
*   `src/pages/ContactPage.tsx` - REVIEW: Form usability on mobile
*   Component tests - ADD: Responsive design tests

**5. Dependencies**

*   Tasks 1-8: All components and pages must exist before responsive testing

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Review and test Header component responsive behavior**
    - File(s) involved: `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`
    - Verify:
        - Desktop: Full navigation menu visible
        - Mobile: Hamburger icon visible, desktop nav hidden
        - Hamburger click opens Sheet from right
        - Sheet contains all nav items
        - Clicking nav item in Sheet closes menu and navigates
        - Header height consistent across breakpoints
    - Tailwind classes to check:
        - `md:hidden` on hamburger
        - `hidden md:flex` on desktop nav
        - Sheet component responsive behavior

2.  **Review and test Footer responsive behavior**
    - File(s) involved: `src/components/layout/Footer.tsx`
    - Verify:
        - Mobile: 2 columns (`grid-cols-2`)
        - Tablet/Desktop: 4 columns (`md:grid-cols-4`)
        - Copyright and social links stack on mobile (`flex-col md:flex-row`)
        - Social icons properly spaced
    - Fix if needed:
        - Ensure proper grid breakpoints
        - Check spacing and padding on mobile
        - Verify social icons size on mobile (touch-friendly)

3.  **Review all page layouts for mobile responsiveness**
    - Files involved: All page components
    - For each page, verify:
        - Container has proper padding: `px-4 sm:px-6 lg:px-8`
        - Max-width constraints: `max-w-7xl mx-auto`
        - Content sections have proper spacing: `py-12 md:py-16`
        - Headings scale: `text-3xl md:text-4xl lg:text-5xl`
        - Grid layouts collapse: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
        - Flex layouts wrap: `flex-wrap`
    - Common responsive patterns:
        ```typescript
        // Hero sections
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h1>
          </div>
        </section>

        // Grid layouts
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => <Card key={item.id}>...</Card>)}
        </div>

        // Flex layouts
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div>...</div>
          <div>...</div>
        </div>
        ```

4.  **Review service cards for mobile touch-friendliness**
    - Files involved: Service page components, Features page
    - Verify:
        - Cards have minimum touch target size (min-h-20 or larger)
        - Cards have adequate spacing on mobile (gap-4 or gap-6)
        - Card content doesn't overflow
        - Card hover states work on touch (consider active states)
        - Images scale properly
    - Tailwind classes to add if missing:
        - `min-h-[200px]` for adequate card size
        - `gap-6` for proper spacing between cards
        - `active:scale-95` for touch feedback

5.  **Review Contact form for mobile usability**
    - File involved: `src/pages/ContactPage.tsx`
    - Verify:
        - Form inputs are full-width on mobile: `w-full`
        - Input fields have min height: `min-h-[44px]`
        - Labels are clearly visible and readable
        - Submit button is full-width on mobile: `w-full md:w-auto`
        - Form validation messages are visible
        - Keyboard input works correctly
    - Example mobile-friendly form:
        ```typescript
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              type="text"
              className="w-full min-h-[44px]"
            />
          </div>
          <Button type="submit" className="w-full md:w-auto">
            Submit
          </Button>
        </form>
        ```

6.  **Test all pages at different breakpoints**
    - Tools: Browser DevTools responsive mode
    - For each page, test at:
        - Mobile: 375px x 667px (iPhone SE)
        - Mobile: 390px x 844px (iPhone 14)
        - Tablet: 768px x 1024px (iPad)
        - Desktop: 1440px x 900px
        - Large Desktop: 1920px x 1080px
    - Check for:
        - No horizontal scrolling
        - Content is readable
        - Images don't overflow
        - Buttons are tappable
        - Navigation works
        - Forms are usable
        - Footer is properly formatted

7.  **Add responsive design tests**
    - Files involved: Component test files
    - Add tests using `window.matchMedia` mock or viewport sizing
    - Example test:
        ```typescript
        import { render, screen } from '@testing-library/react';
        import { BrowserRouter } from 'react-router-dom';
        import Header from './Header';

        describe('Header Responsive Tests', () => {
          test('shows hamburger menu on mobile', () => {
            global.innerWidth = 375;
            global.dispatchEvent(new Event('resize'));
            
            render(
              <BrowserRouter>
                <Header />
              </BrowserRouter>
            );

            // Hamburger should be visible
            const hamburger = screen.getByRole('button', { name: /menu/i });
            expect(hamburger).toBeInTheDocument();
          });

          test('shows desktop nav on desktop', () => {
            global.innerWidth = 1440;
            global.dispatchEvent(new Event('resize'));
            
            render(
              <BrowserRouter>
                <Header />
              </BrowserRouter>
            );

            // Desktop nav items should be visible
            expect(screen.getByText('Features')).toBeInTheDocument();
            expect(screen.getByText('Pricing')).toBeInTheDocument();
          });
        });
        ```

8.  **Fix common responsive issues**
    - Common issues and fixes:
        - **Horizontal scroll:** Check for fixed widths, use `max-w-full` on images
        - **Text overflow:** Add `break-words` or `truncate` classes
        - **Tiny text on mobile:** Use responsive font sizes
        - **Crowded mobile layout:** Increase padding/margin on mobile
        - **Unclickable buttons:** Ensure min-h-[44px] and adequate padding
        - **Overlapping elements:** Check z-index, positioning, and spacing
        - **Modal/Sheet issues:** Ensure Sheet component handles mobile properly

9.  **Document responsive breakpoints**
    - Create or update documentation about breakpoints used:
        - Mobile: < 640px (sm)
        - Tablet: 640px - 1024px (md, lg)
        - Desktop: > 1024px (lg, xl)
    - Tailwind breakpoints reference:
        - sm: 640px
        - md: 768px
        - lg: 1024px
        - xl: 1280px
        - 2xl: 1536px

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test responsive utility functions if any
    *   Test breakpoint detection if implemented
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   Test Header shows hamburger on mobile viewport
    *   Test Header shows desktop nav on desktop viewport
    *   Test Footer columns adjust based on viewport
    *   Test mobile menu Sheet opens and closes
    *   Test form inputs are properly sized on mobile
    *   Tools: Vitest + React Testing Library

*   **7.3. Visual Regression Tests:**
    *   Take screenshots at 375px, 768px, 1440px for key pages
    *   Compare before/after for any visual regressions
    *   Verify no horizontal scroll at any size
    *   Tools: Browser DevTools, Playwright MCP (Phase 4)

*   **7.4. Manual Testing (Browser DevTools):**
    *   Test each page at 375px, 768px, 1440px
    *   Test hamburger menu functionality
    *   Test form usability on mobile
    *   Test all interactive elements on touch
    *   Verify no layout breaks
    *   Check for horizontal scroll
    *   Test on different mobile browsers (Chrome, Safari, Firefox)

*   **7.5. Real Device Testing:**
    *   Test on actual mobile devices if available
    *   Test on iPhone and Android
    *   Test touch interactions
    *   Test keyboard input on forms
    *   Test landscape and portrait modes
    *   Verify performance on mobile networks

**8. Responsive Checklist (Per Page)**

For each page, verify:
- [ ] No horizontal scrolling at 375px, 768px, 1440px
- [ ] Header displays correctly (hamburger on mobile, full nav on desktop)
- [ ] Footer displays correctly (stacked columns on mobile, grid on desktop)
- [ ] Typography is readable (min 16px body text)
- [ ] Images scale properly and don't overflow
- [ ] Cards/grids stack appropriately on mobile
- [ ] Buttons and links are touch-friendly (min 44x44px)
- [ ] Forms are usable on mobile
- [ ] Spacing and padding are adequate on mobile
- [ ] CTAs are easily accessible
- [ ] Navigation works on mobile
- [ ] Content is readable without zooming
- [ ] Modals/Sheets work correctly on mobile
