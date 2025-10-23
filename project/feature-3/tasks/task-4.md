# Task: Login Page with Email/Password and Google OAuth

**1. Description**

Create a complete login page with email/password authentication and Google OAuth sign-in. Includes form validation, "Remember me" checkbox, password reset link, error handling, loading states, and redirect to dashboard or intended destination after successful login.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Login page accessible at `/login` route
* Email/password login form with validation
* "Remember me" checkbox (persistent sessions)
* "Forgot password?" link to reset page
* Google OAuth "Sign in with Google" button
* Form validation using React Hook Form + Zod
* Loading states during login
* Error messages for failed login attempts
* Successful login redirects to dashboard or redirect parameter
* Link to signup page for new users

**4. Files to be Modified/Created**

* `src/pages/auth/LoginPage.tsx` (CREATE)
* `src/components/auth/LoginForm.tsx` (CREATE)
* `src/components/auth/GoogleAuthButton.tsx` (READ-ONLY - from Task 3)
* `src/App.tsx` (MODIFY - add login route)
* `src/contexts/AuthContext.tsx` (READ-ONLY - from Task 2)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook
* Task 3: Signup Page (reuses GoogleAuthButton)

**6. Low-Level Steps (Ordered, information-dense)**

1. Create Zod validation schema for login
   - File(s) involved: `src/components/auth/LoginForm.tsx`
   - Define schema:
     ```typescript
     const loginSchema = z.object({
       email: z.string().email('Invalid email address'),
       password: z.string().min(1, 'Password is required'),
       rememberMe: z.boolean().optional(),
     });
     ```

2. Create LoginForm component
   - File(s) involved: `src/components/auth/LoginForm.tsx`
   - React specifics:
     - Use useForm from react-hook-form with zodResolver
     - Use useState for loading, error states
     - Use useNavigate and useSearchParams for redirect handling
     - Use useAuth hook for login method
   - Shadcn components: Form, Input, Button, Checkbox, Alert
   - Form fields: Email, Password, Remember Me checkbox
   - Event handlers:
     ```typescript
     const onSubmit = async (data) => {
       try {
         setIsLoading(true);
         setError('');
         await login(data.email, data.password);
         const redirect = searchParams.get('redirect') || '/dashboard';
         navigate(redirect);
       } catch (error) {
         if (error.code === 'auth/wrong-password') {
           setError('Incorrect password');
         } else if (error.code === 'auth/user-not-found') {
           setError('No account found with this email');
         } else {
           setError('Failed to log in. Please try again.');
         }
       } finally {
         setIsLoading(false);
       }
     };
     ```
   - Include "Forgot password?" link to `/reset-password`

3. Create LoginPage component
   - File(s) involved: `src/pages/auth/LoginPage.tsx`
   - Layout: Centered card with logo, LoginForm, GoogleAuthButton, link to signup
   - Styling: Responsive with Tailwind, max-w-md container
   - Include "Don't have an account? Sign up" link
   - Display any authentication errors from URL params (e.g., session expired)

4. Add login route to App
   - File(s) involved: `src/App.tsx`
   - Add route: `<Route path="/login" element={<LoginPage />} />`
   - Ensure route is public (not protected)

5. Implement redirect preservation
   - When user tries to access protected route while unauthenticated
   - Redirect to `/login?redirect=/protected-route`
   - After successful login, redirect to original destination

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test Zod schema validates email format
    * Test error messages for empty fields
    * Tools: Vitest

* **7.2. Component Tests:**
    * Test LoginForm renders all fields
    * Test form validation errors display
    * Test form submission calls login method
    * Test Google button calls loginWithGoogle
    * Test "Forgot password?" link navigates correctly
    * Test loading state disables form during submission
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test successful email/password login authenticates user
    * Test successful Google OAuth authenticates user
    * Test wrong password shows appropriate error
    * Test non-existent user shows appropriate error
    * Test redirect parameter preserves intended destination
    * Expected outcome: User is authenticated and redirected correctly

* **7.4. Manual Testing:**
    * Navigate to /login
    * Test form validation with invalid inputs
    * Test successful login with valid credentials
    * Test incorrect password error message
    * Test Google OAuth flow
    * Test "Remember me" functionality (session persistence)
    * Test redirect from protected route works
    * Verify redirect to dashboard after login
    * Test responsive design on mobile/tablet
    * Check accessibility
