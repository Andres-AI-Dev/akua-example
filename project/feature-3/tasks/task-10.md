# Task: Header Updates for Auth State (User Dropdown)

**1. Description**

Update the existing Header component to display authentication state. Show login/signup buttons for unauthenticated users and a user dropdown menu with avatar for authenticated users. The dropdown includes navigation links and logout functionality.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Header displays login/signup buttons when user is logged out
* Header displays user avatar and dropdown when user is logged in
* Dropdown menu includes: Dashboard, Profile, Settings, and Logout
* Smooth transitions between auth states
* Avatar shows user's profile picture or initials
* Dropdown closes on navigation or outside click
* Mobile-responsive design

**4. Files to be Modified/Created**

* `src/components/layout/Header.tsx` (MODIFY - add auth UI)
* `src/components/layout/UserDropdown.tsx` (CREATE)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook

**6. Low-Level Steps (Ordered, information-dense)**

1. Create UserDropdown component
   - File(s) involved: `src/components/layout/UserDropdown.tsx`
   - React specifics:
     - Use useAuth hook for user data and logout method
     - Use useNavigate for navigation
     - Use Shadcn DropdownMenu component
   - Props interface:
     ```typescript
     interface UserDropdownProps {
       user: {
         displayName: string | null;
         email: string | null;
         photoURL: string | null;
       };
     }
     ```
   - Shadcn components: DropdownMenu, Avatar, Separator
   - Dropdown structure:
     ```tsx
     <DropdownMenu>
       <DropdownMenuTrigger>
         <Avatar>
           {user.photoURL ? (
             <AvatarImage src={user.photoURL} alt={user.displayName} />
           ) : (
             <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
           )}
         </Avatar>
       </DropdownMenuTrigger>
       <DropdownMenuContent align="end">
         <DropdownMenuLabel>
           <div>{user.displayName}</div>
           <div className="text-sm text-muted-foreground">{user.email}</div>
         </DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuItem onClick={() => navigate('/dashboard')}>
           <LayoutDashboard className="mr-2 h-4 w-4" />
           Dashboard
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => navigate('/profile')}>
           <User className="mr-2 h-4 w-4" />
           Profile
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => navigate('/settings')}>
           <Settings className="mr-2 h-4 w-4" />
           Settings
         </DropdownMenuItem>
         <DropdownMenuSeparator />
         <DropdownMenuItem onClick={handleLogout}>
           <LogOut className="mr-2 h-4 w-4" />
           Logout
         </DropdownMenuItem>
       </DropdownMenuContent>
     </DropdownMenu>
     ```
   - Logout handler:
     ```typescript
     const handleLogout = async () => {
       try {
         await logout();
         navigate('/');
         toast({ title: 'Logged out successfully' });
       } catch (error) {
         toast({ title: 'Failed to logout', variant: 'destructive' });
       }
     };
     ```
   - Helper function for initials:
     ```typescript
     const getInitials = (name: string | null) => {
       if (!name) return 'U';
       return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
     };
     ```

2. Update Header component
   - File(s) involved: `src/components/layout/Header.tsx`
   - React specifics:
     - Import useAuth hook
     - Conditionally render based on auth state
   - Structure update:
     ```tsx
     const Header = () => {
       const { user, loading } = useAuth();

       return (
         <header className="border-b">
           <div className="container mx-auto flex items-center justify-between p-4">
             {/* Logo - existing */}
             <Link to="/">
               <Logo />
             </Link>

             {/* Navigation - existing */}
             <nav className="hidden md:flex items-center gap-6">
               {/* Existing navigation links */}
             </nav>

             {/* Auth Section - NEW */}
             <div className="flex items-center gap-4">
               {loading ? (
                 <Loader2 className="h-6 w-6 animate-spin" />
               ) : user ? (
                 <UserDropdown user={user} />
               ) : (
                 <>
                   <Button variant="ghost" asChild>
                     <Link to="/login">Log In</Link>
                   </Button>
                   <Button asChild>
                     <Link to="/signup">Sign Up</Link>
                   </Button>
                 </>
               )}
             </div>
           </div>
         </header>
       );
     };
     ```
   - Styling: Maintain existing Header styles, add auth section to right side

3. Handle mobile responsive design
   - For mobile, move auth buttons/dropdown to mobile menu
   - Use existing mobile menu structure from Feature 2
   - Ensure dropdown works correctly on mobile devices

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test getInitials function returns correct initials
    * Test UserDropdown renders with user data
    * Tools: Vitest + React Testing Library

* **7.2. Component Tests:**
    * Test Header shows login/signup buttons when not authenticated
    * Test Header shows UserDropdown when authenticated
    * Test dropdown menu items navigate correctly
    * Test logout button calls logout method
    * Mock useAuth hook with different states
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test clicking logout clears auth state
    * Test header updates after login
    * Test header updates after logout
    * Expected outcome: Header reflects auth state accurately

* **7.4. Manual Testing:**
    * While logged out, verify login/signup buttons appear
    * Click login button, log in, verify dropdown appears
    * Click avatar, verify dropdown menu opens
    * Test all dropdown navigation links
    * Click logout, verify redirect to homepage
    * Test on mobile devices (responsive design)
    * Verify avatar shows profile picture or initials
    * Test dropdown closes on outside click
