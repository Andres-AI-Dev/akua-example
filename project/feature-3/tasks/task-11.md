# Task: Firestore Integration and Service Functions

**1. Description**

Create Firestore service layer with functions for managing user data, profiles, and usage tracking. Implements CRUD operations for the three main collections (users, profiles, usage) with proper TypeScript types and error handling.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Firestore service file created with typed functions
* User collection operations (create, read, update)
* Profile collection operations (create, read, update)
* Usage collection operations (create, read, increment)
* TypeScript interfaces for all Firestore documents
* Error handling for all operations
* Real-time listeners for profile updates
* Security rules deployed to Firebase

**4. Files to be Modified/Created**

* `src/services/firestoreService.ts` (CREATE)
* `src/types/firestore.ts` (CREATE)
* `src/contexts/AuthContext.tsx` (MODIFY - integrate Firestore calls on signup)
* `src/config/firebase.ts` (READ-ONLY - from Task 1)
* `firestore.rules` (CREATE - security rules file)

**5. Dependencies**

* Task 1: Firebase SDK Setup

**6. Low-Level Steps (Ordered, information-dense)**

1. Create Firestore TypeScript interfaces
   - File(s) involved: `src/types/firestore.ts`
   - Define document interfaces:
     ```typescript
     export interface UserDocument {
       uid: string;
       email: string;
       displayName: string;
       photoURL: string | null;
       createdAt: Timestamp;
       lastLoginAt: Timestamp;
       authProvider: 'email' | 'google';
       emailVerified: boolean;
     }

     export interface ProfileDocument {
       userId: string;
       bio: string;
       company: string;
       role: string;
       website: string;
       location: string;
       plan: 'free' | 'starter' | 'professional' | 'enterprise';
       updatedAt: Timestamp;
     }

     export interface UsageDocument {
       userId: string;
       totalRequests: number;
       requestsByService: Record<string, number>;
       lastRequestAt: Timestamp;
       monthlyUsage: Record<string, number>;
       createdAt: Timestamp;
       updatedAt: Timestamp;
     }
     ```

2. Create Firestore service functions
   - File(s) involved: `src/services/firestoreService.ts`
   - Import Firestore modules:
     ```typescript
     import {
       doc,
       getDoc,
       setDoc,
       updateDoc,
       deleteDoc,
       collection,
       query,
       where,
       onSnapshot,
       Timestamp,
       serverTimestamp,
     } from 'firebase/firestore';
     import { db } from '../config/firebase';
     ```

3. Implement user collection functions
   - File(s) involved: `src/services/firestoreService.ts`
   - createUserDocument:
     ```typescript
     export const createUserDocument = async (
       uid: string,
       email: string,
       displayName: string,
       photoURL: string | null,
       authProvider: 'email' | 'google'
     ): Promise<void> => {
       const userRef = doc(db, 'users', uid);
       const userData: UserDocument = {
         uid,
         email,
         displayName,
         photoURL,
         createdAt: Timestamp.now(),
         lastLoginAt: Timestamp.now(),
         authProvider,
         emailVerified: false,
       };
       await setDoc(userRef, userData);
     };
     ```
   - getUserDocument
   - updateUserDocument
   - updateLastLogin

4. Implement profile collection functions
   - File(s) involved: `src/services/firestoreService.ts`
   - createProfileDocument:
     ```typescript
     export const createProfileDocument = async (userId: string): Promise<void> => {
       const profileRef = doc(db, 'profiles', userId);
       const profileData: ProfileDocument = {
         userId,
         bio: '',
         company: '',
         role: '',
         website: '',
         location: '',
         plan: 'free',
         updatedAt: Timestamp.now(),
       };
       await setDoc(profileRef, profileData);
     };
     ```
   - getProfileDocument
   - updateProfileDocument
   - subscribeToProfile (real-time listener)

5. Implement usage collection functions
   - File(s) involved: `src/services/firestoreService.ts`
   - createUsageDocument:
     ```typescript
     export const createUsageDocument = async (userId: string): Promise<void> => {
       const usageRef = doc(db, 'usage', userId);
       const usageData: UsageDocument = {
         userId,
         totalRequests: 0,
         requestsByService: {},
         lastRequestAt: Timestamp.now(),
         monthlyUsage: {},
         createdAt: Timestamp.now(),
         updatedAt: Timestamp.now(),
       };
       await setDoc(usageRef, usageData);
     };
     ```
   - getUsageDocument
   - incrementUsage (for tracking API calls)

6. Update AuthContext to create Firestore documents on signup
   - File(s) involved: `src/contexts/AuthContext.tsx`
   - In signup method, after creating Firebase auth user:
     ```typescript
     const signup = async (email, password, name) => {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       await updateProfile(userCredential.user, { displayName: name });

       // Create Firestore documents
       await createUserDocument(
         userCredential.user.uid,
         email,
         name,
         null,
         'email'
       );
       await createProfileDocument(userCredential.user.uid);
       await createUsageDocument(userCredential.user.uid);
     };
     ```
   - In loginWithGoogle method, check if documents exist, create if not

7. Create and deploy Firestore security rules
   - File(s) involved: `firestore.rules` (project root)
   - Define security rules from PRD:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         function isAuthenticated() {
           return request.auth != null;
         }
         function isOwner(userId) {
           return isAuthenticated() && request.auth.uid == userId;
         }

         match /users/{userId} {
           allow read: if isOwner(userId);
           allow create: if isOwner(userId);
           allow update: if isOwner(userId);
           allow delete: if false;
         }

         match /profiles/{userId} {
           allow read: if isOwner(userId);
           allow write: if isOwner(userId);
         }

         match /usage/{userId} {
           allow read: if isOwner(userId);
           allow create: if isOwner(userId);
           allow update: if false;
           allow delete: if false;
         }
       }
     }
     ```
   - Deploy rules: `firebase deploy --only firestore:rules`

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test Firestore document interfaces are properly typed
    * Test service functions handle errors correctly
    * Mock Firestore operations
    * Tools: Vitest

* **7.2. Integration Tests:**
    * Test createUserDocument creates document in Firestore (emulator)
    * Test getUserDocument retrieves correct data
    * Test updateProfileDocument updates fields
    * Test security rules enforce authentication
    * Test security rules prevent unauthorized access
    * Expected outcome: All CRUD operations work with proper security

* **7.3. Manual Testing:**
    * Sign up new user and verify documents in Firebase Console
    * Check users, profiles, and usage collections
    * Update profile and verify changes in Firestore
    * Test security rules by attempting unauthorized access
    * Verify real-time listeners update UI
