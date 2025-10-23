# Task: Account Settings Page

**1. Description**

Create an account settings page where users can manage account-level settings including email, password, and account deletion. Integrates with Firebase Authentication for security-related updates.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Settings page accessible at `/settings` route (protected)
* Email change functionality with verification
* Password change functionality with current password confirmation
* Account deletion with confirmation dialog
* Session management (view active sessions)
* Security settings section
* All operations require proper authentication
* Success/error feedback for all operations

**4. Files to be Modified/Created**

* `src/pages/SettingsPage.tsx` (CREATE)
* `src/components/settings/SecuritySettings.tsx` (CREATE)
* `src/components/settings/DeleteAccount.tsx` (CREATE)
* `src/App.tsx` (MODIFY - add settings route wrapped with PrivateRoute)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook
* Task 6: Protected Routes

**6. Low-Level Steps (Ordered, information-dense)**

1. Create SecuritySettings component
   - File(s) involved: `src/components/settings/SecuritySettings.tsx`
   - React specifics:
     - Use useState for password change form, loading states
     - Use useForm from react-hook-form
     - Use useAuth hook
   - Shadcn components: Card, Input, Button, Alert, Dialog
   - Features:
     - Change password section:
       - Current password (required for verification)
       - New password (validation)
       - Confirm new password
     - Email verification status display
     - Resend verification email button
   - Password change handler:
     ```typescript
     const changePassword = async (currentPassword, newPassword) => {
       // Re-authenticate user
       const credential = EmailAuthProvider.credential(user.email, currentPassword);
       await reauthenticateWithCredential(auth.currentUser, credential);
       // Update password
       await updatePassword(auth.currentUser, newPassword);
     };
     ```

2. Create DeleteAccount component
   - File(s) involved: `src/components/settings/DeleteAccount.tsx`
   - React specifics:
     - Use useState for confirmation dialog, loading
     - Use useAuth hook for logout
     - Use useNavigate for redirect after deletion
   - Shadcn components: Dialog, Button, Alert, Input
   - Features:
     - "Delete Account" button (danger styled)
     - Confirmation dialog with warning message
     - Requires typing "DELETE" to confirm
     - Password confirmation for security
   - Deletion handler:
     ```typescript
     const deleteAccount = async (password) => {
       // Re-authenticate
       const credential = EmailAuthProvider.credential(user.email, password);
       await reauthenticateWithCredential(auth.currentUser, credential);
       // Delete Firestore data first
       await deleteUserData(user.uid);
       // Delete auth account
       await deleteUser(auth.currentUser);
       // Logout and redirect
       navigate('/');
     };
     ```

3. Create SettingsPage component
   - File(s) involved: `src/pages/SettingsPage.tsx`
   - Layout with sections:
     ```tsx
     <div className="container mx-auto max-w-4xl p-6">
       <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

       <div className="space-y-6">
         {/* Account Information Section */}
         <Card>
           <CardHeader>
             <CardTitle>Account Information</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div>
                 <Label>Email</Label>
                 <p>{user.email}</p>
                 <Button variant="outline" size="sm" onClick={changeEmail}>
                   Change Email
                 </Button>
               </div>
               <div>
                 <Label>Email Verification</Label>
                 <p>{user.emailVerified ? 'Verified' : 'Not verified'}</p>
                 {!user.emailVerified && (
                   <Button variant="outline" size="sm">
                     Send Verification Email
                   </Button>
                 )}
               </div>
             </div>
           </CardContent>
         </Card>

         {/* Security Section */}
         <SecuritySettings />

         {/* Danger Zone Section */}
         <Card className="border-destructive">
           <CardHeader>
             <CardTitle className="text-destructive">Danger Zone</CardTitle>
           </CardHeader>
           <CardContent>
             <DeleteAccount />
           </CardContent>
         </Card>
       </div>
     </div>
     ```

4. Add settings route to App
   - File(s) involved: `src/App.tsx`
   - Add protected route:
     ```typescript
     <Route path="/settings" element={
       <PrivateRoute>
         <SettingsPage />
       </PrivateRoute>
     } />
     ```

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test password validation logic
    * Test confirmation input matching
    * Tools: Vitest

* **7.2. Component Tests:**
    * Test SecuritySettings renders password change form
    * Test DeleteAccount dialog opens/closes correctly
    * Test confirmation input must match "DELETE"
    * Mock Firebase auth methods
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test password change with valid current password (with emulator)
    * Test password change fails with wrong current password
    * Test account deletion removes Firestore data
    * Test account deletion removes auth account
    * Expected outcome: All security operations work correctly

* **7.4. Manual Testing:**
    * Navigate to /settings
    * Test changing password with current password
    * Test changing password with wrong current password
    * Test email verification status display
    * Test sending verification email
    * Test account deletion flow (use test account)
    * Verify all confirmation dialogs work
    * Test responsive design
