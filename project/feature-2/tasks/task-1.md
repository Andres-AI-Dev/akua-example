# Task 1: Navigation Header and Layout Structure

**1. Description**

Create a professional navigation header component that appears on all pages with a mobile-responsive hamburger menu, and establish a shared Layout component wrapper that includes the header. The header will include logo/branding, navigation menu items (Home, Features, Pricing, About, Contact), and a "Get Started" CTA button. On mobile devices, navigation will transform into a hamburger menu with a slide-out drawer using Shadcn's Sheet component.

**2. Parent Feature**

*   [../PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Header component renders on all pages with consistent styling
*   Logo is clickable and navigates to homepage (/)
*   Navigation menu displays all 5 menu items (Home, Features, Pricing, About, Contact)
*   "Get Started" button navigates to /pricing page
*   Active state highlighting works for current page
*   Mobile hamburger menu appears at breakpoint < 768px
*   Mobile menu opens/closes smoothly using Sheet component
*   Layout component wraps all pages with header and footer
*   TypeScript interfaces defined for all component props
*   All tests pass (unit and component tests)

**4. Files to be Modified/Created**

*   `src/components/layout/Header.tsx` (NEW)
*   `src/components/layout/MobileMenu.tsx` (NEW)
*   `src/components/layout/Layout.tsx` (NEW)
*   `src/types/navigation.ts` (NEW)
*   `src/data/navigation.ts` (NEW)
*   `src/App.tsx` (MODIFIED - add Layout wrapper)
*   `src/pages/LandingPage.tsx` (MODIFIED - remove inline header if exists)
*   `src/components/layout/Header.test.tsx` (NEW)
*   `src/components/layout/MobileMenu.test.tsx` (NEW)
*   `src/components/layout/Layout.test.tsx` (NEW)

**5. Dependencies**

*   None (this is the first task)

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript type definitions for navigation**
    - File(s) involved: `src/types/navigation.ts`
    - Algorithm:
        ```typescript
        // Define interface for navigation items
        export interface NavItem {
          label: string;
          href: string;
        }

        // Define interface for social links (used later)
        export interface SocialLink {
          platform: string;
          url: string;
          icon: string;
        }
        ```

2.  **Create navigation data file**
    - File(s) involved: `src/data/navigation.ts`
    - Algorithm:
        ```typescript
        import { NavItem } from '@/types/navigation';

        export const mainNavItems: NavItem[] = [
          { label: 'Home', href: '/' },
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ];
        ```

3.  **Create Header component with desktop navigation**
    - File(s) involved: `src/components/layout/Header.tsx`
    - React specifics:
        - Import necessary components: `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuLink`, `Button`
        - Import hooks: `useLocation` from react-router-dom
        - Import Link from react-router-dom
        - State: No local state needed
        - Props: None (stateless component)
    - Styling:
        - Container: `w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50`
        - Inner wrapper: `container mx-auto flex h-16 items-center justify-between px-4`
        - Logo: `text-2xl font-bold text-primary hover:text-primary/80 transition-colors`
        - Nav menu: `hidden md:flex items-center space-x-6`
        - Active link: `text-primary font-semibold`
        - Inactive link: `text-muted-foreground hover:text-foreground transition-colors`
        - Mobile menu button: `md:hidden` (hamburger icon)
        - CTA button: `ml-4`
    - Algorithm:
        ```typescript
        import { Link, useLocation } from 'react-router-dom';
        import { Button } from '@/components/ui/button';
        import { Menu } from 'lucide-react';
        import { mainNavItems } from '@/data/navigation';
        import { MobileMenu } from './MobileMenu';
        import { useState } from 'react';

        export function Header() {
          const location = useLocation();
          const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

          const isActive = (href: string) => {
            if (href === '/') return location.pathname === '/';
            return location.pathname.startsWith(href);
          };

          return (
            <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
              <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                  Akua AI
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={isActive(item.href)
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground transition-colors'}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center">
                  <Button asChild>
                    <Link to="/pricing">Get Started</Link>
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-foreground"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>

                {/* Mobile Menu */}
                <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
              </div>
            </header>
          );
        }
        ```

4.  **Create MobileMenu component using Sheet**
    - File(s) involved: `src/components/layout/MobileMenu.tsx`
    - React specifics:
        - Components: `Sheet`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetClose`, `Button`
        - Hooks: `useLocation`, `useNavigate`
        - Props interface:
            ```typescript
            interface MobileMenuProps {
              open: boolean;
              onOpenChange: (open: boolean) => void;
            }
            ```
    - Styling:
        - Sheet content: Side="right", full height
        - Menu items: `flex flex-col space-y-4 mt-8`
        - Active link: `text-primary font-semibold text-lg`
        - Inactive link: `text-muted-foreground hover:text-foreground text-lg transition-colors`
        - CTA button: `mt-6 w-full`
    - Algorithm:
        ```typescript
        import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
        import { Link, useLocation } from 'react-router-dom';
        import { Button } from '@/components/ui/button';
        import { X } from 'lucide-react';
        import { mainNavItems } from '@/data/navigation';

        interface MobileMenuProps {
          open: boolean;
          onOpenChange: (open: boolean) => void;
        }

        export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
          const location = useLocation();

          const isActive = (href: string) => {
            if (href === '/') return location.pathname === '/';
            return location.pathname.startsWith(href);
          };

          const handleLinkClick = () => {
            onOpenChange(false);
          };

          return (
            <Sheet open={open} onOpenChange={onOpenChange}>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <SheetClose className="absolute right-4 top-4" />
                </SheetHeader>

                <nav className="flex flex-col space-y-4 mt-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={handleLinkClick}
                      className={isActive(item.href)
                        ? 'text-primary font-semibold text-lg'
                        : 'text-muted-foreground hover:text-foreground text-lg transition-colors'}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Button asChild className="mt-6 w-full" onClick={handleLinkClick}>
                    <Link to="/pricing">Get Started</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          );
        }
        ```

5.  **Create Layout wrapper component**
    - File(s) involved: `src/components/layout/Layout.tsx`
    - React specifics:
        - Props interface:
            ```typescript
            interface LayoutProps {
              children: React.ReactNode;
            }
            ```
        - Import Header and Footer components
    - Styling:
        - Wrapper: `min-h-screen flex flex-col`
        - Main content: `flex-1`
    - Algorithm:
        ```typescript
        import { Header } from './Header';
        import { Footer } from './Footer';

        interface LayoutProps {
          children: React.ReactNode;
        }

        export function Layout({ children }: LayoutProps) {
          return (
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          );
        }
        ```

6.  **Update App.tsx to use Layout wrapper**
    - File(s) involved: `src/App.tsx`
    - React specifics:
        - Wrap all Route components with Layout
        - Import Layout component
    - Algorithm:
        ```typescript
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
        import { Layout } from './components/layout/Layout';
        import { LandingPage } from './pages/LandingPage';

        function App() {
          return (
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  {/* More routes will be added in subsequent tasks */}
                </Routes>
              </Layout>
            </Router>
          );
        }

        export default App;
        ```

7.  **Update LandingPage to remove any inline header**
    - File(s) involved: `src/pages/LandingPage.tsx`
    - React specifics:
        - Remove any existing header/nav components from the page
        - Ensure page content starts directly with hero section
    - Algorithm:
        - Review existing LandingPage component
        - Remove any navigation elements
        - Keep only content sections (Hero, Features, Pricing, Footer content)

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test `isActive` function returns true when pathname matches href
    *   Test `isActive` function handles root path ('/') correctly
    *   Test navigation data exports correct number of items (5)
    *   Test MobileMenu close handler is called when link is clicked
    *   Tools: Vitest + React Testing Library

*   **7.2. Component Tests:**
    *   **Header.test.tsx:**
        *   Test Header renders logo with correct link to '/'
        *   Test Header renders all 5 navigation items
        *   Test Header renders "Get Started" button linking to /pricing
        *   Test active navigation item has correct styling when on that route
        *   Test mobile menu button is hidden on desktop (md breakpoint)
        *   Test mobile menu button is visible on mobile
        *   Test clicking mobile menu button opens MobileMenu
    *   **MobileMenu.test.tsx:**
        *   Test MobileMenu renders when open prop is true
        *   Test MobileMenu does not render when open prop is false
        *   Test MobileMenu contains all 5 navigation items
        *   Test MobileMenu close button calls onOpenChange(false)
        *   Test clicking navigation link calls onOpenChange(false)
        *   Test active link has correct styling in mobile menu
    *   **Layout.test.tsx:**
        *   Test Layout renders Header component
        *   Test Layout renders Footer component
        *   Test Layout renders children content
        *   Test Layout has correct flex container structure

*   **7.3. Integration Tests:**
    *   Test navigation from home to all pages via header links
    *   Test logo click from any page navigates to home
    *   Test "Get Started" button navigates to pricing page
    *   Test mobile menu navigation works and closes after link click
    *   Test active state updates when navigating between pages

*   **7.4. Visual Regression Tests:**
    *   Test Header renders correctly on desktop (1440px)
    *   Test Header renders correctly on tablet (768px)
    *   Test Header renders correctly on mobile (375px)
    *   Test mobile menu opens with correct animation
    *   Test sticky header remains at top on scroll

*   **7.5. Manual Testing:**
    *   Verify header appears consistently across all pages
    *   Test mobile menu opens/closes smoothly
    *   Test touch interactions on mobile devices
    *   Verify active state highlighting is accurate
    *   Test keyboard navigation (Tab, Enter)
    *   Verify focus states are visible
    *   Test header backdrop blur effect on scroll
    *   Browser compatibility (Chrome, Firefox, Safari, Edge)
