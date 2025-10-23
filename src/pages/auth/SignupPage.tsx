import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignupForm } from '@/components/auth/SignupForm';
import { GoogleAuthButton } from '@/components/auth/GoogleAuthButton';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SignupPage = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState('');

  const handleGoogleSignup = async () => {
    try {
      setIsGoogleLoading(true);
      setGoogleError('');
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err: any) {
      setGoogleError(err.message || 'Failed to sign up with Google');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Enter your information to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignupForm />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {googleError && (
            <Alert variant="destructive">
              <AlertDescription>{googleError}</AlertDescription>
            </Alert>
          )}

          <GoogleAuthButton onClick={handleGoogleSignup} isLoading={isGoogleLoading} />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
