# Task: Firebase Storage Integration for Profile Pictures

**1. Description**

Implement Firebase Storage integration for uploading and managing user profile pictures. Includes image upload, compression, URL generation, and proper security rules to ensure users can only access their own images.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Storage service file created with upload functions
* Profile picture upload to Firebase Storage
* Image compression before upload (reduce file size)
* Unique file paths per user (profile-pictures/{userId}/)
* Download URL generation after upload
* Profile picture URL saved to user profile
* Error handling for upload failures
* Storage security rules deployed to Firebase
* File type and size validation

**4. Files to be Modified/Created**

* `src/services/storageService.ts` (CREATE)
* `src/contexts/AuthContext.tsx` (MODIFY - add uploadProfilePicture method)
* `src/components/profile/AvatarUpload.tsx` (MODIFY - integrate upload functionality)
* `src/config/firebase.ts` (READ-ONLY - from Task 1)
* `storage.rules` (CREATE - security rules file)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext (for uploadProfilePicture method)
* Task 8: Profile Page (for AvatarUpload component)
* Task 11: Firestore Integration (to update photoURL)

**6. Low-Level Steps (Ordered, information-dense)**

1. Install image compression library
   - File(s) involved: `package.json`
   - Command: `npm install browser-image-compression`
   - For client-side image compression before upload

2. Create Storage service functions
   - File(s) involved: `src/services/storageService.ts`
   - Import Storage modules:
     ```typescript
     import {
       ref,
       uploadBytes,
       getDownloadURL,
       deleteObject,
     } from 'firebase/storage';
     import { storage } from '../config/firebase';
     import imageCompression from 'browser-image-compression';
     ```

3. Implement image compression function
   - File(s) involved: `src/services/storageService.ts`
   - Compression function:
     ```typescript
     const compressImage = async (file: File): Promise<File> => {
       const options = {
         maxSizeMB: 1,
         maxWidthOrHeight: 800,
         useWebWorker: true,
       };
       try {
         const compressedFile = await imageCompression(file, options);
         return compressedFile;
       } catch (error) {
         console.error('Image compression failed:', error);
         return file; // Return original if compression fails
       }
     };
     ```

4. Implement profile picture upload function
   - File(s) involved: `src/services/storageService.ts`
   - Upload function:
     ```typescript
     export const uploadProfilePicture = async (
       userId: string,
       file: File
     ): Promise<string> => {
       // Validate file type
       const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
       if (!validTypes.includes(file.type)) {
         throw new Error('Invalid file type. Only JPG and PNG are allowed.');
       }

       // Validate file size (before compression)
       const maxSize = 5 * 1024 * 1024; // 5MB
       if (file.size > maxSize) {
         throw new Error('File size exceeds 5MB limit.');
       }

       // Compress image
       const compressedFile = await compressImage(file);

       // Create storage reference
       const fileName = `profile-pictures/${userId}/avatar_${Date.now()}.${file.type.split('/')[1]}`;
       const storageRef = ref(storage, fileName);

       // Upload file
       await uploadBytes(storageRef, compressedFile);

       // Get download URL
       const downloadURL = await getDownloadURL(storageRef);

       return downloadURL;
     };
     ```

5. Implement delete profile picture function
   - File(s) involved: `src/services/storageService.ts`
   - Delete function (for cleanup when changing photos):
     ```typescript
     export const deleteProfilePicture = async (photoURL: string): Promise<void> => {
       try {
         const storageRef = ref(storage, photoURL);
         await deleteObject(storageRef);
       } catch (error) {
         // Photo might not exist or already deleted
         console.warn('Failed to delete old profile picture:', error);
       }
     };
     ```

6. Update AuthContext with uploadProfilePicture method
   - File(s) involved: `src/contexts/AuthContext.tsx`
   - Add method to AuthContext:
     ```typescript
     const uploadProfilePicture = async (file: File): Promise<string> => {
       if (!user) throw new Error('No user logged in');

       try {
         // Delete old photo if exists
         if (user.photoURL) {
           await deleteProfilePicture(user.photoURL);
         }

         // Upload new photo
         const photoURL = await uploadProfilePicture(user.uid, file);

         // Update Firebase Auth profile
         await updateProfile(auth.currentUser, { photoURL });

         // Update Firestore user document
         await updateUserDocument(user.uid, { photoURL });

         // Update local state
         setUser({ ...user, photoURL });

         return photoURL;
       } catch (error) {
         throw new Error('Failed to upload profile picture');
       }
     };
     ```

7. Integrate upload in AvatarUpload component
   - File(s) involved: `src/components/profile/AvatarUpload.tsx`
   - File input change handler:
     ```typescript
     const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
       const file = e.target.files?.[0];
       if (!file) return;

       try {
         setIsUploading(true);
         setError('');

         // Show preview
         const reader = new FileReader();
         reader.onloadend = () => {
           setPreviewURL(reader.result as string);
         };
         reader.readAsDataURL(file);

         // Upload to Firebase Storage
         const photoURL = await uploadProfilePicture(file);

         toast({ title: 'Profile picture updated successfully' });
       } catch (error) {
         setError(error.message);
         toast({ title: 'Failed to upload profile picture', variant: 'destructive' });
       } finally {
         setIsUploading(false);
       }
     };
     ```

8. Create and deploy Storage security rules
   - File(s) involved: `storage.rules` (project root)
   - Define security rules from PRD:
     ```
     rules_version = '2';
     service firebase.storage {
       match /b/{bucket}/o {
         match /profile-pictures/{userId}/{allPaths=**} {
           allow read: if request.auth != null && request.auth.uid == userId;
           allow write: if request.auth != null && request.auth.uid == userId
                        && request.resource.size < 5 * 1024 * 1024
                        && request.resource.contentType.matches('image/.*');
         }
       }
     }
     ```
   - Deploy rules: `firebase deploy --only storage`

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test file type validation rejects invalid types
    * Test file size validation rejects large files
    * Mock Storage operations
    * Tools: Vitest

* **7.2. Component Tests:**
    * Test AvatarUpload triggers file picker on click
    * Test file validation before upload
    * Test upload progress indicators
    * Mock uploadProfilePicture function
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test profile picture uploads to Firebase Storage (emulator)
    * Test download URL is generated correctly
    * Test photoURL is updated in Firestore and Auth profile
    * Test security rules enforce user-specific access
    * Test old photo is deleted when uploading new one
    * Expected outcome: Profile pictures are uploaded and accessible

* **7.4. Manual Testing:**
    * Navigate to profile page
    * Click avatar to upload picture
    * Select valid image file (JPG/PNG)
    * Verify upload progress indicator
    * Verify success message after upload
    * Check Firebase Console Storage for uploaded image
    * Verify avatar updates immediately
    * Test with invalid file type (show error)
    * Test with file > 5MB (show error)
    * Verify image compression reduces file size
    * Test uploading new photo (old one should be deleted)
    * Verify security rules prevent unauthorized access
