---
description: Complete autonomous workflow for feature-3 (Firebase Authentication & Backend Integration)
---

You are running the **FULLY AUTONOMOUS FEATURE-3 IMPLEMENTATION WORKFLOW**.

**IMPORTANT: You will execute ALL phases without stopping for approval. Complete the entire feature from start to finish.**

Feature-3: Firebase Authentication & Backend Integration for Akua AI Services Platform

## Context Files to Read:
1. `project/PAD.md` - Project architecture and tech stack
2. `project/feature-3/PRD.md` - Feature-3 PRD (already completed)
3. `project/templates/task_template.md` - Task template
4. `project/commands/plan.md` - Planning instructions
5. `project/commands/implement.md` - Implementation instructions
6. `project/commands/validate.md` - Validation instructions

## What This Command Does:

This command will **AUTONOMOUSLY** complete the entire feature-3 implementation:
- Plan all tasks
- Create Firebase project "Akua AI Services" via Playwright MCP
- Implement Firebase authentication system
- Implement Firestore database integration
- Create protected routes and user dashboard
- Validate quality
- Test with Playwright MCP browser testing
- Deploy with Firebase integration
- Report final status

**You have full authority to make all technical decisions and proceed through all phases.**

## Workflow Steps:

### PHASE 0: FIREBASE PROJECT SETUP 🔥 (Execute FIRST)

**CRITICAL: Must create Firebase project before any code implementation**

1. **Open Playwright MCP Browser:**
   - Use `mcp__playwright__browser_navigate` to open `https://console.firebase.google.com/`
   - User will log in to their Google account
   - Wait for Firebase Console to load

2. **Create New Firebase Project:**
   - Take snapshot of console with `mcp__playwright__browser_snapshot`
   - Look for "Add project" or "Create a project" button
   - Click the button using `mcp__playwright__browser_click`
   - Enter project name: "Akua AI Services"
   - Enter project ID (auto-generated or custom)
   - Disable Google Analytics if prompted (uncheck box)
   - Click "Create project" button
   - Wait for project creation (show loading screen)
   - Click "Continue" when project is ready
   - Take snapshot of project dashboard

3. **Enable Firebase Authentication:**
   - Click on "Authentication" in left sidebar (under "Build" section)
   - Click "Get started" button
   - Enable Email/Password provider:
     - Click on "Email/Password" in sign-in methods list
     - Toggle "Enable" switch
     - Click "Save"
   - Enable Google provider:
     - Click on "Google" in sign-in methods list
     - Toggle "Enable" switch
     - Enter support email if required
     - Click "Save"
   - Take snapshot showing enabled auth providers

4. **Create Firestore Database:**
   - Click on "Firestore Database" in left sidebar
   - Click "Create database" button
   - Choose "Start in test mode" (radio button)
   - Click "Next"
   - Select location/region (e.g., us-central1 or closest to target users)
   - Click "Enable"
   - Wait for database creation (may take 30-60 seconds)
   - Verify database is created (shows empty collections view)
   - Take snapshot of Firestore console

5. **Enable Firebase Storage:**
   - Click on "Storage" in left sidebar
   - Click "Get started" button
   - Choose "Start in test mode" (for now, will update rules later)
   - Click "Next"
   - Storage location should match Firestore location
   - Click "Done"
   - Verify storage bucket is created
   - Take snapshot

6. **Get Firebase Configuration Credentials:**
   - Click on gear icon (Project settings) in top-left sidebar
   - Navigate to "Project settings"
   - Scroll to "Your apps" section
   - Click web icon (</> symbol) to add web app
   - Enter app nickname: "Akua Web App"
   - Optional: Check "Also set up Firebase Hosting" checkbox
   - Click "Register app"
   - Copy the Firebase configuration object that appears
   - Configuration will look like:
     ```javascript
     const firebaseConfig = {
       apiKey: "...",
       authDomain: "...",
       projectId: "...",
       storageBucket: "...",
       messagingSenderId: "...",
       appId: "..."
     };
     ```
   - Take screenshot of configuration screen
   - **SAVE THESE VALUES - You will need them in .env file**
   - Click "Continue to console"

7. **Create .env File with Firebase Credentials:**
   - Create `.env` file in project root
   - Add Firebase configuration as environment variables:
     ```
     VITE_FIREBASE_API_KEY=value_from_firebase
     VITE_FIREBASE_AUTH_DOMAIN=value_from_firebase
     VITE_FIREBASE_PROJECT_ID=value_from_firebase
     VITE_FIREBASE_STORAGE_BUCKET=value_from_firebase
     VITE_FIREBASE_MESSAGING_SENDER_ID=value_from_firebase
     VITE_FIREBASE_APP_ID=value_from_firebase
     ```
   - Create `.env.example` file with placeholders for documentation
   - Add `.env` to `.gitignore` if not already there

8. **Deploy Firestore Security Rules (Later in implementation):**
   - Navigate to Firestore Database → Rules tab
   - Replace default rules with production rules from PRD
   - Click "Publish"
   - Rules will be deployed to Firebase

9. **Deploy Storage Security Rules (Later in implementation):**
   - Navigate to Storage → Rules tab
   - Replace default rules with production rules from PRD
   - Click "Publish"

10. **Close Browser After Setup:**
    - Use `mcp__playwright__browser_close`
    - Firebase project is now ready for integration

**DO NOT PROCEED TO PHASE 1 UNTIL FIREBASE PROJECT IS FULLY CREATED AND .env FILE IS CONFIGURED**

### PHASE 1: PLAN 📋 (Execute Automatically)

1. Read `project/feature-3/PRD.md` thoroughly
2. Follow instructions from `project/commands/plan.md`
3. Break down the PRD into specific tasks
4. Create task files in `project/feature-3/tasks/`:
   - `task-1.md` - Firebase SDK setup and configuration
   - `task-2.md` - AuthContext and useAuth hook
   - `task-3.md` - Signup page with email/password and Google OAuth
   - `task-4.md` - Login page with email/password and Google OAuth
   - `task-5.md` - Password reset page
   - `task-6.md` - Protected routes and PrivateRoute component
   - `task-7.md` - User dashboard page
   - `task-8.md` - User profile page with edit functionality
   - `task-9.md` - Account settings page
   - `task-10.md` - Header updates for auth state (user dropdown)
   - `task-11.md` - Firestore integration and service functions
   - `task-12.md` - Firebase Storage integration for profile pictures
5. For each task, use the `project/templates/task_template.md` structure
6. Include React-specific details:
   - Components to create with TypeScript interfaces
   - Hooks needed (useState, useEffect, useContext, custom hooks)
   - Shadcn components to use (Form, Input, Button, Avatar, DropdownMenu, etc.)
   - Firebase SDK methods
   - Firestore queries and mutations
   - Test plans (Vitest + React Testing Library + Firebase emulator)
7. **Immediately proceed to implementation phase (no approval needed)**

### PHASE 2: IMPLEMENT 💻 (Execute Automatically)

8. For each task (in order of dependencies):
   - Read `project/commands/implement.md` for detailed instructions
   - **TDD Approach:**
     - Create tests FIRST based on the task's test plan
     - Use Firebase emulator for testing Firestore/Auth
     - Tests should initially fail
   - **Write ALL the code:**
     - Install Firebase SDK: `npm install firebase`
     - Install form libraries: `npm install react-hook-form zod @hookform/resolvers`
     - Create `src/config/firebase.ts` with Firebase initialization
     - Create AuthContext (`src/contexts/AuthContext.tsx`)
     - Create useAuth hook (`src/hooks/useAuth.ts`)
     - Create auth service functions (`src/services/authService.ts`)
     - Create Firestore service functions (`src/services/firestoreService.ts`)
     - Create Storage service functions (`src/services/storageService.ts`)
     - Create all auth page components:
       - SignupPage with form validation (Zod schema)
       - LoginPage with email/password and Google OAuth
       - ResetPasswordPage
     - Create dashboard and profile pages:
       - DashboardPage with stats cards
       - ProfilePage with view/edit modes
       - SettingsPage with account options
     - Create auth form components:
       - SignupForm with validation
       - LoginForm with validation
       - PasswordResetForm
       - GoogleAuthButton
     - Create profile components:
       - ProfileHeader with avatar
       - ProfileForm (editable fields)
       - AvatarUpload with file picker
     - Create dashboard components:
       - StatsCard
       - RecentActivity
       - QuickActions
     - Create PrivateRoute component for protected routes
     - Update Header component:
       - Add user dropdown menu (Shadcn DropdownMenu)
       - Show login/signup buttons when logged out
       - Show avatar and menu when logged in
     - Update App.tsx:
       - Wrap with AuthProvider
       - Add auth routes (/signup, /login, /reset-password)
       - Add protected routes (/dashboard, /profile, /settings)
     - Create TypeScript interfaces in `src/types/auth.ts`
     - Create form validation schemas with Zod
     - Implement error handling utilities
     - Follow React + TypeScript + Firebase best practices from PAD.md
     - Use functional components with hooks
     - Leverage Shadcn UI components
     - Keep components small and focused
   - **Firestore Integration:**
     - Create users collection on signup
     - Create profiles collection on signup
     - Create usage collection on signup
     - Implement real-time listeners for profile updates
     - Handle Firestore errors gracefully
   - **Firebase Storage Integration:**
     - Implement profile picture upload
     - Resize/compress images before upload
     - Update user photoURL in Firestore
     - Handle upload errors
   - **Deploy Security Rules:**
     - Copy Firestore rules from PRD
     - Deploy to Firebase Console (Rules tab)
     - Copy Storage rules from PRD
     - Deploy to Firebase Console (Storage Rules tab)
   - **Run tests and validate:**
     - Ensure all tests pass
     - Test with Firebase emulator
     - Check TypeScript compilation
     - Run the dev server to verify it works
     - Test auth flows manually
   - **Continue to next task automatically**

### PHASE 3: VALIDATE ✅

9. After all tasks are implemented:
   - Read `project/commands/validate.md` for detailed instructions
   - **Run automated checks:**
     - Execute all unit tests
     - Execute all component tests
     - Execute Firebase emulator tests
     - Run TypeScript type checking (`tsc --noEmit`)
     - Check for linting errors
     - Run the dev server and verify it starts
     - Test auth flows manually
   - **Code quality assessment:**
     - Evaluate modularity (1-5 score)
     - Evaluate testability (1-5 score)
     - Check React best practices adherence
     - Verify Tailwind/Shadcn usage
     - Assess TypeScript coverage
     - Check Firebase best practices (security rules, efficient queries)
   - **Generate human testing script:**
     - Based on acceptance criteria from PRD
     - Step-by-step manual testing instructions
     - Auth flow testing (signup, login, logout, reset)
     - Protected route testing
     - Profile management testing
     - Visual checks (responsive design, UI polish)
     - Browser compatibility checks
   - **Compile evaluation report:**
     - Test results summary
     - Code quality scores
     - Human testing script
     - Recommendations for browser testing

### PHASE 4: BROWSER TESTING WITH PLAYWRIGHT MCP 🌐 (Execute Automatically)

10. After validation passes, test in real browser with Firebase:
    - **Start dev server in background:**
      - Use Bash tool with `run_in_background: true`
      - Run `npm run dev` in the project directory
      - Wait 5-10 seconds for server to start
      - Verify server is running at `http://localhost:5173`

    - **Open Playwright MCP and navigate to site:**
      - Use `mcp__playwright__browser_navigate` to `http://localhost:5173`
      - Use `mcp__playwright__browser_snapshot` to capture homepage
      - Verify Header shows "Login" and "Sign Up" buttons
      - Use `mcp__playwright__browser_console_messages` with `onlyErrors: true`
      - Verify NO console errors

    - **Test Signup Flow (Email/Password):**
      - Navigate to `/signup` page
      - Take snapshot of signup form
      - Fill out form using `mcp__playwright__browser_fill_form`:
        - Full Name: "Test User"
        - Email: "testuser@example.com" (use unique email)
        - Password: "TestPassword123!"
        - Confirm Password: "TestPassword123!"
      - Check "Accept Terms" checkbox (if present)
      - Click "Sign Up" button using `mcp__playwright__browser_click`
      - Wait for Firebase authentication (3-5 seconds)
      - Verify redirect to dashboard (`/dashboard`)
      - Take snapshot of dashboard
      - Verify user's name appears in welcome message
      - Check console for errors (should be ZERO)
      - Verify user is created in Firebase Console (check Authentication tab)
      - Verify user document created in Firestore (check users collection)

    - **Test Logout Flow:**
      - While on dashboard, click user avatar/dropdown in header
      - Click "Logout" option in dropdown menu
      - Verify redirect to homepage
      - Verify header now shows "Login" and "Sign Up" buttons
      - Try to navigate to `/dashboard` directly
      - Verify redirect to `/login` (protected route working)
      - Take snapshot

    - **Test Login Flow (Email/Password):**
      - Navigate to `/login` page
      - Take snapshot of login form
      - Fill out form:
        - Email: "testuser@example.com" (same user from signup)
        - Password: "TestPassword123!"
      - Check "Remember me" checkbox
      - Click "Log In" button
      - Wait for authentication
      - Verify redirect to dashboard
      - Take snapshot
      - Verify user data loads correctly
      - Check console for errors

    - **Test Google OAuth Signup (if possible in test environment):**
      - Logout first
      - Navigate to `/signup`
      - Click "Sign up with Google" button
      - **Note:** Google OAuth may require actual Google account
      - If popup blocker prevents OAuth, note this as expected
      - If testing is possible:
        - Complete Google OAuth flow
        - Verify redirect to dashboard
        - Check Firestore for user document
        - Take screenshots of flow

    - **Test Password Reset Flow:**
      - Logout if logged in
      - Navigate to `/login`
      - Click "Forgot password?" link
      - Verify navigation to `/reset-password`
      - Take snapshot of password reset form
      - Enter email: "testuser@example.com"
      - Click "Send Reset Link" button
      - Wait for Firebase to send email
      - Verify success message appears
      - Take snapshot
      - **Check Firebase Console:**
        - Navigate to Authentication → Users
        - Verify password reset email was sent
      - **Note:** Actual email testing requires checking real inbox

    - **Test Protected Routes:**
      - Ensure logged out
      - Try to navigate to `/dashboard` directly
      - Verify redirect to `/login`
      - Verify URL includes redirect parameter (e.g., `/login?redirect=/dashboard`)
      - Login with credentials
      - Verify redirect back to dashboard (intended destination)
      - Take snapshot
      - Logout
      - Try to access `/profile` directly
      - Verify redirect to login
      - Login again
      - Verify redirect to profile page

    - **Test Dashboard Page:**
      - While logged in, navigate to `/dashboard`
      - Take snapshot
      - Verify all sections render:
        - Welcome header with user name
        - Stats cards (account created, last login, etc.)
        - Recent activity section (if applicable)
        - Quick actions buttons
      - Click "View Profile" button (if present)
      - Verify navigation to `/profile`
      - Navigate back to dashboard
      - Check console for errors

    - **Test Profile Page:**
      - Navigate to `/profile`
      - Take snapshot of profile in view mode
      - Verify user information displays:
        - Profile picture/avatar
        - Full name
        - Email
        - Bio
        - Company
        - Role
      - Click "Edit Profile" button
      - Verify form fields become editable
      - Take snapshot of edit mode
      - Update profile data:
        - Change bio to "This is a test bio"
        - Change company to "Test Company"
        - Change role to "Test Role"
      - Click "Save Changes" button
      - Wait for Firestore update (1-2 seconds)
      - Verify success message/toast appears
      - Verify form returns to view mode
      - Verify updated data is displayed
      - Check console for errors
      - **Verify in Firebase Console:**
        - Navigate to Firestore Database
        - Check profiles collection
        - Verify user's profile document has updated fields

    - **Test Profile Picture Upload (if implemented):**
      - On profile page, click "Upload Picture" or avatar
      - Use `mcp__playwright__browser_file_upload` to select image
      - Provide a test image path (prepare a test image beforehand)
      - Verify image preview appears
      - Click "Save" or "Upload"
      - Wait for Firebase Storage upload (2-5 seconds)
      - Verify new profile picture displays
      - Check console for errors
      - **Verify in Firebase Console:**
        - Navigate to Storage
        - Check profile-pictures/{userId}/ folder
        - Verify image file was uploaded

    - **Test Settings Page:**
      - Navigate to `/settings`
      - Take snapshot
      - Verify all sections render:
        - Account information
        - Security settings
        - Preferences
      - Test interactive elements (if any)
      - Click any buttons/toggles
      - Verify changes save correctly
      - Check console for errors

    - **Test Header Auth State:**
      - While logged in:
        - Verify header shows user avatar
        - Click avatar to open dropdown
        - Take snapshot of dropdown menu
        - Verify menu items: Dashboard, Profile, Settings, Logout
        - Click each menu item to verify navigation
      - After logout:
        - Verify header shows "Login" and "Sign Up" buttons
        - Click "Sign Up" → verify navigation to `/signup`
        - Click "Login" → verify navigation to `/login`

    - **Test Form Validation:**
      - Navigate to `/signup`
      - Try to submit empty form
      - Verify validation errors appear
      - Take snapshot
      - Enter invalid email (e.g., "notanemail")
      - Verify email validation error
      - Enter weak password (e.g., "123")
      - Verify password strength error
      - Enter mismatched passwords
      - Verify confirmation error
      - Navigate to `/login`
      - Try to submit empty form
      - Verify validation errors
      - Enter invalid credentials
      - Verify Firebase auth error displays correctly

    - **Test Responsive Design:**
      - Use `mcp__playwright__browser_resize` to test:
        - Mobile: 375x667px
          - Test signup form
          - Test login form
          - Test dashboard
          - Test profile page
          - Take screenshots
        - Tablet: 768x1024px
          - Test all auth pages
          - Take screenshots
        - Desktop: 1440x900px
          - Test all pages
          - Take screenshots
      - Verify no horizontal scrolling
      - Verify forms are usable at all sizes
      - Verify dropdown menus work on mobile

    - **Test Error Handling:**
      - Try to sign up with existing email
      - Verify "Email already in use" error displays
      - Try to login with wrong password
      - Verify "Incorrect password" error displays
      - Try to login with non-existent email
      - Verify "User not found" error displays
      - Simulate network error (if possible)
      - Verify error handling is graceful

    - **Test Loading States:**
      - During login, verify loading spinner appears on button
      - During signup, verify loading indicator
      - During profile update, verify loading state
      - Ensure UI is not interactive during loading

    - **Final Console Error Check:**
      - Use `mcp__playwright__browser_console_messages` with `onlyErrors: true`
      - Review ALL console messages collected during testing
      - Verify ZERO JavaScript errors throughout entire test session
      - If ANY errors found, note them and fix before proceeding

    - **Test Firebase Integration:**
      - Open Firebase Console in separate browser tab/window
      - Navigate to Authentication → Users
      - Verify test users are listed
      - Check last sign-in time
      - Navigate to Firestore Database → users collection
      - Verify user documents exist
      - Navigate to Firestore Database → profiles collection
      - Verify profile documents exist with correct data
      - Navigate to Storage → profile-pictures
      - Verify uploaded images (if any)
      - Check that security rules are working (unauthorized access blocked)

    - **Close browser and stop dev server:**
      - Use `mcp__playwright__browser_close`
      - Kill the background dev server process
      - Clean up any test data (optional)

    - **Generate Browser Testing Report:**
      - Compile all findings from browser testing
      - List all auth flows tested
      - List all pages tested
      - Note any issues found
      - Confirm zero console errors
      - Include screenshot paths
      - Provide pass/fail status for each test section
      - Document any edge cases discovered

    - **Only proceed to deployment if ALL browser tests pass with ZERO errors**

### PHASE 5: DEPLOYMENT 🚀 (Execute Automatically)

11. After browser testing passes with zero errors:
    - **Run production build:**
      - Execute `npm run build`
      - Verify build completes successfully
      - Check for any build warnings or errors
      - Confirm `dist/` directory created

    - **Test production build locally:**
      - Run `npm run preview`
      - Verify preview server starts
      - Test auth flows in preview build
      - Verify Firebase integration works in production mode
      - Stop preview server

    - **Prepare environment variables for Vercel:**
      - Verify all Firebase env vars are documented
      - Create list of required env vars:
        - VITE_FIREBASE_API_KEY
        - VITE_FIREBASE_AUTH_DOMAIN
        - VITE_FIREBASE_PROJECT_ID
        - VITE_FIREBASE_STORAGE_BUCKET
        - VITE_FIREBASE_MESSAGING_SENDER_ID
        - VITE_FIREBASE_APP_ID

    - **Commit all changes:**
      - Ensure on `feature-3` branch
      - Add all new files
      - Create comprehensive commit message
      - Include Firebase project setup notes
      - Push to remote repository

    - **Generate deployment instructions:**
      - Provide step-by-step Vercel deployment guide
      - Include git commands for pushing to remote
      - Include instructions for adding env vars to Vercel
      - Include PR creation steps (if needed)
      - Include merge and deployment verification steps

    - **Provide post-deployment checklist:**
      - Add Firebase env vars to Vercel dashboard
      - Deploy to Vercel (auto-deploy on push)
      - Test production URL
      - Verify Firebase Authentication works in production
      - Verify Firestore database access in production
      - Verify Firebase Storage works in production
      - Test all auth flows in production
      - Check for console errors in production
      - Verify security rules are enforced in production
      - Monitor Firebase usage dashboard
      - Check Vercel logs for errors
      - Run Lighthouse audit (Performance, Accessibility, Best Practices > 85)

## Important Notes:

- **AUTONOMOUS EXECUTION:** Execute all phases without stopping for approval
- **FIREBASE SETUP IS CRITICAL:** Must create Firebase project BEFORE coding
- **Use Playwright MCP to create Firebase project via web console**
- **Save Firebase credentials immediately in .env file**
- **Use TodoWrite** to track progress through all tasks
- **Don't skip TDD** - tests must be written first for each component
- **Use Firebase emulator for testing** - don't rely only on production Firebase
- **Follow PAD.md** for all technical decisions
- **Refer to feature-3/PRD.md** for acceptance criteria
- **Complete ALL tasks** - write all code, all tests, all configuration
- **Make decisions independently** - you have full authority to implement best practices
- **Browser testing is CRITICAL** - test all auth flows thoroughly
- **Zero console errors required** - fix any errors found during browser testing
- **Only report to user when FULLY COMPLETE or if critical blockers occur**

## Feature-3 Scope Reminder:

**In Scope:**
- Firebase project setup ("Akua AI Services")
- Firebase Authentication (email/password, Google OAuth)
- Signup, login, logout, password reset
- Protected routes with authentication guards
- User dashboard with stats
- User profile with edit functionality
- Account settings page
- Firestore collections (users, profiles, usage)
- Firebase Storage for profile pictures
- AuthContext and useAuth hook
- Header updates with user dropdown
- Form validation with Zod
- Error handling and loading states
- Responsive design

**Out of Scope:**
- Stripe payment integration
- Admin dashboard
- Multi-factor authentication
- Social login beyond Google
- Team/organization accounts
- Advanced analytics
- AI service functionality (future feature)

## Tech Stack:

- **Frontend:** React 18+ with TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v3
- **Components:** Shadcn UI (Form, Input, Button, Avatar, DropdownMenu, Toast, Alert)
- **Routing:** React Router v6 with protected routes
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library + Firebase Emulator
- **Browser Testing:** Playwright MCP
- **Deployment:** Vercel with Firebase integration

## Success Criteria:

By the end of this workflow, you should have:
- ✅ Firebase project "Akua AI Services" created and configured
- ✅ Complete task breakdown in `project/feature-3/tasks/`
- ✅ Firebase SDK installed and configured
- ✅ .env file with Firebase credentials
- ✅ All auth components implemented with TypeScript
- ✅ AuthContext and useAuth hook working
- ✅ Signup page (email/password + Google OAuth)
- ✅ Login page (email/password + Google OAuth)
- ✅ Password reset page functional
- ✅ Dashboard page with user stats
- ✅ Profile page with edit functionality
- ✅ Settings page
- ✅ Protected routes working correctly
- ✅ Header with user dropdown menu
- ✅ Firestore collections created with security rules
- ✅ Firebase Storage configured for profile pictures
- ✅ Comprehensive tests (all passing, 80%+ coverage)
- ✅ Firebase emulator tests passing
- ✅ Browser tested with Playwright MCP extensively
- ✅ All auth flows tested (signup, login, logout, reset)
- ✅ Protected routes tested
- ✅ Profile management tested
- ✅ Zero console errors
- ✅ Screenshots at mobile, tablet, desktop sizes
- ✅ Production build successful
- ✅ Deployed to Vercel with Firebase integration
- ✅ Firebase working in production
- ✅ Validation report with quality scores
- ✅ Human testing script for manual QA
- ✅ Browser testing report with all findings

---

## Execution Instructions:

**YOU MUST:**
1. **START WITH FIREBASE SETUP:**
   - Open Playwright MCP browser
   - Navigate to Firebase Console
   - Create "Akua AI Services" project
   - Enable Auth, Firestore, Storage
   - Get Firebase credentials
   - Create .env file with credentials
   - Close browser
2. Create all 12 task files in `project/feature-3/tasks/`
3. Install Firebase SDK and form libraries
4. Create Firebase config file with environment variables
5. Implement AuthContext and useAuth hook
6. Create all auth pages (signup, login, reset)
7. Create all auth forms with validation (Zod schemas)
8. Implement Firebase Auth integration (email/password, Google OAuth)
9. Create PrivateRoute component for protected routes
10. Create dashboard, profile, and settings pages
11. Implement Firestore integration (users, profiles, usage collections)
12. Implement Firebase Storage integration (profile pictures)
13. Update Header with user dropdown menu
14. Deploy Firestore and Storage security rules
15. Write comprehensive tests for everything
16. Test with Firebase emulator
17. Ensure everything builds and runs successfully
18. Generate validation report
19. **Run dev server in background and test EXTENSIVELY with Playwright MCP**
20. **Test ALL auth flows, protected routes, forms, profile management**
21. **Verify ZERO console errors**
22. **Verify Firebase integration working correctly**
23. **Take screenshots at multiple breakpoints**
24. Only proceed to deployment after browser testing passes completely
25. Generate final deployment instructions with environment variable setup

**DO NOT:**
- Ask for approval between phases
- Stop and wait for user input (except if critical errors occur)
- Skip Firebase project setup
- Skip any tasks or components
- Leave placeholders or TODOs
- Skip browser testing or rush through it
- Deploy with console errors
- Skip any auth flows or tests
- Forget to deploy security rules
- Forget to create .env file

**COMPLETE EVERYTHING, THEN REPORT FINAL STATUS.**

---

## Firebase Credentials Handling:

**During Firebase Setup:**
1. Create `.env` file in project root
2. Add all Firebase credentials as environment variables
3. Create `.env.example` with placeholder values
4. Add `.env` to `.gitignore`
5. Document required env vars in README

**For Deployment:**
1. Add all env vars to Vercel dashboard
2. Verify env vars are loaded in production
3. Test Firebase connection in production
4. Monitor Firebase Console for auth activity

---

**Executing feature-3 autonomous workflow now...**

**PHASE 0 STARTS IMMEDIATELY: Opening Playwright MCP to create Firebase project...**
