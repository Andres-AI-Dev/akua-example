import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
          <SheetDescription className="text-left">
            Navigate to different sections of the website
          </SheetDescription>
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

          <Button asChild className="mt-6 w-full">
            <Link to="/pricing" onClick={handleLinkClick}>Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
