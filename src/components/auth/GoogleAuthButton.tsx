import { Button } from '@/components/ui/button';
import { Chrome } from 'lucide-react';

interface GoogleAuthButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const GoogleAuthButton = ({ onClick, isLoading = false }: GoogleAuthButtonProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={onClick}
      disabled={isLoading}
    >
      <Chrome className="mr-2 h-4 w-4" />
      Continue with Google
    </Button>
  );
};
