import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfilePage = () => {
  const { user } = useAuth();

  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              {user?.photoURL ? (
                <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />
              ) : (
                <AvatarFallback className="text-2xl">
                  {getInitials(user?.displayName || null)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <CardTitle>{user?.displayName || 'User'}</CardTitle>
              <CardDescription>{user?.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Account Information</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                <dd>{user?.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Display Name</dt>
                <dd>{user?.displayName || 'Not set'}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Email Verified</dt>
                <dd>{user?.emailVerified ? 'Yes' : 'No'}</dd>
              </div>
            </dl>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
