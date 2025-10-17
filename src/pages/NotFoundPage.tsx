import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
            <Search className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
        </div>

        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/features" className="text-primary hover:underline">Features</Link>
            <Link to="/pricing" className="text-primary hover:underline">Pricing</Link>
            <Link to="/about" className="text-primary hover:underline">About</Link>
            <Link to="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
