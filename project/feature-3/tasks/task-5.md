# Task: Password Reset Page

**1. Description**

Create a password reset page that allows users to request a password reset email. Uses Firebase's sendPasswordResetEmail functionality with form validation and user feedback.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Password reset page accessible at `/reset-password` route
* Email input form with validation
* Form validation using React Hook Form + Zod
* Success message after email is sent
* Error handling for invalid emails or Firebase errors
* Loading state during email sending
* Link back to login page
* Instructions for checking email

**4. Files to be Modified/Created**

* `src/pages/auth/ResetPasswordPage.tsx` (CREATE)
* `src/components/auth/PasswordResetForm.tsx` (CREATE)
* `src/App.tsx` (MODIFY - add reset-password route)
* `src/contexts/AuthContext.tsx` (READ-ONLY - from Task 2)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook

**6. Low-Level Steps (Ordered, information-dense)**

1. Create Zod validation schema
   - File(s) involved: `src/components/auth/PasswordResetForm.tsx`
   - Define schema:
     ```typescript
     const resetSchema = z.object({
       email: z.string().email('Please enter a valid email address'),
     });
     ```

2. Create PasswordResetForm component
   - File(s) involved: `src/components/auth/PasswordResetForm.tsx`
   - React specifics:
     - Use useForm from react-hook-form with zodResolver
     - Use useState for loading, success, error states
     - Use useAuth hook for resetPassword method
   - Shadcn components: Form, Input, Button, Alert
   - Form field: Email
   - Event handlers:
     ```typescript
     const onSubmit = async (data) => {
       try {
         setIsLoading(true);
         setError('');
         await resetPassword(data.email);
         setSuccess(true);
       } catch (error) {
         if (error.code === 'auth/user-not-found') {
           setError('No account found with this email');
         } else {
           setError('Failed to send reset email. Please try again.');
         }
       } finally {
         setIsLoading(false);
       }
     };
     ```
   - Show success message after email sent
   - Disable form after successful submission

3. Create ResetPasswordPage component
   - File(s) involved: `src/pages/auth/ResetPasswordPage.tsx`
   - Layout: Centered card with logo, instructions, PasswordResetForm
   - Instructions text: "Enter your email address and we'll send you instructions to reset your password."
   - Success state shows: "Check your email for password reset instructions"
   - Include "Back to Login" link
   - Styling: Responsive with Tailwind, max-w-md container

4. Add reset-password route to App
   - File(s) involved: `src/App.tsx`
   - Add route: `<Route path="/reset-password" element={<ResetPasswordPage />} />`
   - Ensure route is public (not protected)

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test Zod schema validates email format
    * Test empty email shows error
    * Tools: Vitest

* **7.2. Component Tests:**
    * Test PasswordResetForm renders email field
    * Test form validation displays errors
    * Test form submission calls resetPassword method
    * Test success message displays after submission
    * Test loading state disables form
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test password reset email is sent via Firebase (with emulator)
    * Test non-existent email shows appropriate error
    * Expected outcome: Password reset email is sent to valid emails

* **7.4. Manual Testing:**
    * Navigate to /reset-password
    * Test with invalid email format
    * Test with valid email (check email inbox)
    * Test with non-existent email
    * Verify success message displays
    * Test "Back to Login" link
    * Test responsive design
    * Check accessibility
