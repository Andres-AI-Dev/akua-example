# Task: Protected Routes and PrivateRoute Component

**1. Description**

Create a PrivateRoute wrapper component that protects routes requiring authentication. Redirects unauthenticated users to login page while preserving the intended destination for post-login redirect.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* PrivateRoute component created and functional
* Unauthenticated users are redirected to `/login`
* Redirect preserves intended destination in URL parameter
* Authenticated users can access protected routes
* Loading state shown while auth status is being determined
* Component works with React Router v6

**4. Files to be Modified/Created**

* `src/components/layout/PrivateRoute.tsx` (CREATE)
* `src/App.tsx` (MODIFY - wrap protected routes with PrivateRoute)
* `src/contexts/AuthContext.tsx` (READ-ONLY - from Task 2)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook

**6. Low-Level Steps (Ordered, information-dense)**

1. Create PrivateRoute component
   - File(s) involved: `src/components/layout/PrivateRoute.tsx`
   - React specifics:
     - Accept `children` prop (ReactNode)
     - Use useAuth hook to get auth state
     - Use Navigate from react-router-dom for redirects
     - Use useLocation to get current path
   - Algorithm:
     ```typescript
     const PrivateRoute = ({ children }: { children: ReactNode }) => {
       const { user, loading } = useAuth();
       const location = useLocation();

       if (loading) {
         return (
           <div className="flex items-center justify-center min-h-screen">
             <Loader2 className="h-8 w-8 animate-spin" />
           </div>
         );
       }

       if (!user) {
         return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
       }

       return <>{children}</>;
     };
     ```
   - Styling: Loading spinner centered on screen using Tailwind

2. Update App.tsx with protected routes
   - File(s) involved: `src/App.tsx`
   - Wrap protected routes with PrivateRoute:
     ```typescript
     <Route path="/dashboard" element={
       <PrivateRoute>
         <DashboardPage />
       </PrivateRoute>
     } />
     <Route path="/profile" element={
       <PrivateRoute>
         <ProfilePage />
       </PrivateRoute>
     } />
     <Route path="/settings" element={
       <PrivateRoute>
         <SettingsPage />
       </PrivateRoute>
     } />
     ```
   - Public routes (login, signup, reset-password) remain unwrapped

3. Handle post-login redirect
   - File(s) involved: `src/components/auth/LoginForm.tsx` (from Task 4)
   - After successful login, check for redirect parameter
   - Navigate to redirect URL or default to dashboard
   - Already implemented in Task 4, verify it works with PrivateRoute

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test PrivateRoute renders children when authenticated
    * Test PrivateRoute redirects when not authenticated
    * Test loading state displays spinner
    * Tools: Vitest + React Testing Library

* **7.2. Component Tests:**
    * Test redirect includes current path in redirect parameter
    * Test authenticated user sees protected content
    * Mock useAuth hook with different states
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test unauthenticated access to /dashboard redirects to /login?redirect=/dashboard
    * Test authenticated user can access /dashboard
    * Test login from redirect returns to intended destination
    * Expected outcome: Protected routes are inaccessible without authentication

* **7.4. Manual Testing:**
    * While logged out, try to access /dashboard directly
    * Verify redirect to /login with redirect parameter
    * Log in and verify redirect back to /dashboard
    * While logged in, access protected routes directly
    * Verify no redirect occurs when authenticated
    * Test loading state shows briefly on page load
