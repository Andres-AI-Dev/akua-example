# Task: Firebase SDK Setup and Configuration

**1. Description**

Set up Firebase project configuration and initialize the Firebase SDK in the React application. This includes installing Firebase packages, creating configuration file, and ensuring proper environment variable handling.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Firebase SDK (v9+ modular) is installed via npm
* Firebase configuration file exists at `src/config/firebase.ts`
* Configuration reads from environment variables (.env file)
* Firebase app initializes without errors
* TypeScript types are properly configured
* All Firebase credentials are securely stored in .env (not committed)

**4. Files to be Modified/Created**

* `src/config/firebase.ts` (CREATE)
* `package.json` (MODIFY - add firebase dependency)
* `.env` (ALREADY EXISTS - created in Phase 0)
* `.env.example` (ALREADY EXISTS)
* `.gitignore` (VERIFY - ensure .env is ignored)

**5. Dependencies**

* None - This is the first task

**6. Low-Level Steps (Ordered, information-dense)**

1. Install Firebase SDK
   - File(s) involved: `package.json`
   - Command: `npm install firebase`
   - Version: Latest v9+ modular SDK
   - Verify installation completes successfully

2. Create Firebase configuration file
   - File(s) involved: `src/config/firebase.ts`
   - Import Firebase modules:
     ```typescript
     import { initializeApp } from 'firebase/app';
     import { getAuth } from 'firebase/auth';
     import { getFirestore } from 'firebase/firestore';
     import { getStorage } from 'firebase/storage';
     ```
   - Define firebaseConfig object reading from environment variables:
     ```typescript
     const firebaseConfig = {
       apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
       authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
       projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
       storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
       messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
       appId: import.meta.env.VITE_FIREBASE_APP_ID,
     };
     ```
   - Initialize Firebase app: `const app = initializeApp(firebaseConfig);`
   - Export auth, db, storage instances:
     ```typescript
     export const auth = getAuth(app);
     export const db = getFirestore(app);
     export const storage = getStorage(app);
     export default app;
     ```

3. Verify .env file configuration
   - File(s) involved: `.env`, `.gitignore`
   - Confirm .env contains all 6 Firebase credentials (already created in Phase 0)
   - Verify .env is listed in .gitignore to prevent committing secrets
   - Ensure .env.example exists with placeholder values

4. Test Firebase initialization
   - Start dev server: `npm run dev`
   - Verify no console errors related to Firebase
   - Check that Firebase app initializes properly
   - Confirm environment variables are being read correctly

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test that firebase config exports are defined (auth, db, storage)
    * Test that firebaseConfig object has all required properties
    * Tools: Vitest

* **7.2. Integration Tests:**
    * Test Firebase app initialization with emulator
    * Verify Auth, Firestore, and Storage instances are created
    * Expected outcome: No initialization errors

* **7.3. Manual Testing:**
    * Run dev server and check browser console for Firebase errors
    * Verify Firebase is imported successfully in other modules
    * Test with missing environment variables to ensure proper error handling
