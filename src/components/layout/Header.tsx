import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '@/components/theme-toggle';
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
          Akua
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

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
      </div>
    </header>
  );
}
