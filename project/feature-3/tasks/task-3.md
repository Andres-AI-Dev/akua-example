# Task: Signup Page with Email/Password and Google OAuth

**1. Description**

Create a complete signup page with email/password registration and Google OAuth sign-in. Includes form validation using React Hook Form + Zod, error handling, loading states, and redirect to dashboard after successful signup.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Signup page accessible at `/signup` route
* Email/password signup form with validation
* Google OAuth "Sign up with Google" button
* Form validation using React Hook Form + Zod
* Password strength requirements enforced
* Loading states during signup
* Error messages displayed for failed signups
* Successful signup redirects to dashboard
* Link to login page for existing users

**4. Files to be Modified/Created**

* `src/pages/auth/SignupPage.tsx` (CREATE)
* `src/components/auth/SignupForm.tsx` (CREATE)
* `src/components/auth/GoogleAuthButton.tsx` (CREATE)
* `src/App.tsx` (MODIFY - add signup route)
* `src/contexts/AuthContext.tsx` (READ-ONLY - from Task 2)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook

**6. Low-Level Steps (Ordered, information-dense)**

1. Install form dependencies
   - File(s) involved: `package.json`
   - Command: `npm install react-hook-form zod @hookform/resolvers`
   - Verify installation

2. Create Zod validation schema
   - File(s) involved: `src/components/auth/SignupForm.tsx`
   - Define schema:
     ```typescript
     const signupSchema = z.object({
       name: z.string().min(2, 'Name must be at least 2 characters'),
       email: z.string().email('Invalid email address'),
       password: z.string()
         .min(8, 'Password must be at least 8 characters')
         .regex(/[A-Z]/, 'Password must contain uppercase letter')
         .regex(/[a-z]/, 'Password must contain lowercase letter')
         .regex(/[0-9]/, 'Password must contain a number'),
       confirmPassword: z.string(),
     }).refine((data) => data.password === data.confirmPassword, {
       message: "Passwords don't match",
       path: ["confirmPassword"],
     });
     ```

3. Create SignupForm component
   - File(s) involved: `src/components/auth/SignupForm.tsx`
   - React specifics:
     - Use useForm from react-hook-form with zodResolver
     - Use useState for submission loading state
     - Use useNavigate for post-signup redirect
     - Use useAuth hook for signup method
   - Shadcn components: Form, Input, Button, Alert
   - Form fields: Full Name, Email, Password, Confirm Password
   - Event handlers:
     ```typescript
     const onSubmit = async (data) => {
       try {
         setIsLoading(true);
         await signup(data.email, data.password, data.name);
         navigate('/dashboard');
       } catch (error) {
         setError(error.message);
       } finally {
         setIsLoading(false);
       }
     };
     ```

4. Create GoogleAuthButton component
   - File(s) involved: `src/components/auth/GoogleAuthButton.tsx`
   - React specifics:
     - Accept onClick prop for custom handling
     - Use useState for loading state
     - Use useAuth hook for loginWithGoogle method
   - Styling: Tailwind + Google brand colors
   - Google icon using Lucide React or custom SVG
   - Button text: "Continue with Google"

5. Create SignupPage component
   - File(s) involved: `src/pages/auth/SignupPage.tsx`
   - Layout: Centered card with logo, SignupForm, GoogleAuthButton, and link to login
   - Styling: Responsive with Tailwind, max-w-md container
   - Include "Already have an account? Log in" link

6. Add signup route to App
   - File(s) involved: `src/App.tsx`
   - Add route: `<Route path="/signup" element={<SignupPage />} />`
   - Ensure route is public (not protected)

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test Zod schema validates correctly
    * Test password strength requirements
    * Test email validation
    * Tools: Vitest

* **7.2. Component Tests:**
    * Test SignupForm renders all fields
    * Test form validation errors display
    * Test form submission calls signup method
    * Test Google button calls loginWithGoogle
    * Test loading state disables form during submission
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test successful email/password signup creates Firebase user
    * Test successful Google OAuth creates Firebase user
    * Test duplicate email shows error
    * Test weak password is rejected
    * Expected outcome: User is created and redirected to dashboard

* **7.4. Manual Testing:**
    * Navigate to /signup
    * Test form validation with invalid inputs
    * Test successful signup with valid data
    * Test Google OAuth flow
    * Verify redirect to dashboard after signup
    * Test responsive design on mobile/tablet
    * Check accessibility (keyboard navigation, screen readers)
