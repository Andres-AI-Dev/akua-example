# Task: User Profile Page with Edit Functionality

**1. Description**

Create a user profile page where users can view and edit their profile information, including display name, bio, company, role, and website. Integrates with Firestore to persist profile data.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Profile page accessible at `/profile` route (protected)
* View mode displays all profile information
* Edit mode allows updating profile fields
* Profile picture upload functionality
* Form validation using React Hook Form + Zod
* Changes are saved to Firestore
* Loading states during save operations
* Success/error feedback to user
* Cancel button reverts changes

**4. Files to be Modified/Created**

* `src/pages/ProfilePage.tsx` (CREATE)
* `src/components/profile/ProfileHeader.tsx` (CREATE)
* `src/components/profile/ProfileForm.tsx` (CREATE)
* `src/components/profile/AvatarUpload.tsx` (CREATE)
* `src/App.tsx` (MODIFY - add profile route wrapped with PrivateRoute)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)
* `src/services/firestoreService.ts` (READ-ONLY - from Task 11)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook
* Task 6: Protected Routes
* Task 11: Firestore Integration (profile data persistence)
* Task 12: Firebase Storage Integration (profile picture upload)

**6. Low-Level Steps (Ordered, information-dense)**

1. Create Zod validation schema
   - File(s) involved: `src/components/profile/ProfileForm.tsx`
   - Define schema:
     ```typescript
     const profileSchema = z.object({
       displayName: z.string().min(2, 'Name must be at least 2 characters'),
       bio: z.string().max(500, 'Bio must be 500 characters or less').optional(),
       company: z.string().optional(),
       role: z.string().optional(),
       website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
       location: z.string().optional(),
     });
     ```

2. Create AvatarUpload component
   - File(s) involved: `src/components/profile/AvatarUpload.tsx`
   - React specifics:
     - Use useState for preview image
     - Use useRef for file input
     - Accept onChange callback prop
   - Shadcn components: Avatar, Button, Dialog
   - Features:
     - Click avatar to open file picker
     - Image preview before upload
     - File type validation (jpg, png only)
     - File size validation (max 5MB)
     - Crop/resize UI (future enhancement)
   - Upload handler calls uploadProfilePicture from useAuth hook

3. Create ProfileHeader component
   - File(s) involved: `src/components/profile/ProfileHeader.tsx`
   - Display user avatar, name, email, plan badge
   - Include AvatarUpload component
   - Show "Edit Profile" button
   - Styling: Gradient background, centered layout

4. Create ProfileForm component
   - File(s) involved: `src/components/profile/ProfileForm.tsx`
   - React specifics:
     - Use useForm from react-hook-form with zodResolver
     - Use useState for edit mode, loading, error states
     - Use useAuth hook for user data and updateUserProfile method
   - Shadcn components: Form, Input, Textarea, Button, Alert, Label
   - Form fields:
     - Display Name (required)
     - Bio (textarea, optional)
     - Company (optional)
     - Role (optional)
     - Website (URL validation, optional)
     - Location (optional)
   - Two modes:
     - View mode: Display values as read-only text
     - Edit mode: Show editable input fields
   - Event handlers:
     ```typescript
     const onSubmit = async (data) => {
       try {
         setIsLoading(true);
         await updateUserProfile(data);
         setIsEditMode(false);
         toast({ title: 'Profile updated successfully' });
       } catch (error) {
         setError('Failed to update profile');
       } finally {
         setIsLoading(false);
       }
     };
     ```
   - Cancel button resets form to original values

5. Create ProfilePage component
   - File(s) involved: `src/pages/ProfilePage.tsx`
   - Layout:
     ```tsx
     <div className="container mx-auto max-w-4xl p-6">
       <ProfileHeader />
       <Tabs defaultValue="profile" className="mt-8">
         <TabsList>
           <TabsTrigger value="profile">Profile</TabsTrigger>
           <TabsTrigger value="account">Account</TabsTrigger>
         </TabsList>
         <TabsContent value="profile">
           <ProfileForm />
         </TabsContent>
         <TabsContent value="account">
           {/* Account settings - basic info */}
         </TabsContent>
       </Tabs>
     </div>
     ```
   - Use Shadcn Tabs component for organization

6. Add profile route to App
   - File(s) involved: `src/App.tsx`
   - Add protected route:
     ```typescript
     <Route path="/profile" element={
       <PrivateRoute>
         <ProfilePage />
       </PrivateRoute>
     } />
     ```

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test Zod schema validates profile fields
    * Test URL validation for website field
    * Test bio character limit
    * Tools: Vitest

* **7.2. Component Tests:**
    * Test ProfileForm toggles between view and edit modes
    * Test form submission calls updateUserProfile
    * Test cancel button reverts changes
    * Test AvatarUpload validates file types and sizes
    * Mock useAuth hook with test profile data
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test profile updates are saved to Firestore
    * Test profile picture upload to Firebase Storage
    * Test profile data loads from Firestore
    * Expected outcome: Profile changes persist across sessions

* **7.4. Manual Testing:**
    * Navigate to /profile
    * Test view mode displays all profile information
    * Click "Edit Profile" and update fields
    * Test form validation with invalid data
    * Save changes and verify success message
    * Refresh page and verify changes persisted
    * Test avatar upload with valid/invalid files
    * Test cancel button discards changes
    * Test responsive design on mobile/tablet
