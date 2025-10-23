# Product Requirements Document: Firebase Authentication & Backend Integration

**Feature:** feature-3
**Version:** 1.0
**Created:** 2025-10-23
**Status:** Draft
**Owner:** Andres Gonzales
**Contact:** andrisgonzalis@gmail.com

---

## Quick Summary

**What:** Implement complete Firebase authentication system with user management, protected routes, and Firestore backend integration.

**Why:** Current website is frontend-only. This feature adds user accounts, authentication, and a database backend to enable personalized experiences and usage tracking.

**Core Features:**
- ✅ Firebase project setup ("Akua AI Services")
- ✅ User authentication (email/password, Google OAuth)
- ✅ Signup, login, logout, password reset flows
- ✅ Protected routes and authentication guards
- ✅ User dashboard with profile management
- ✅ Firestore collections (users, profiles, usage)
- ✅ Auth context provider with React hooks
- ✅ Loading states and error handling

**Testing:** Comprehensive browser testing with Playwright MCP + Firestore emulator testing.

---

## 1. Overview

### 1.1. Objective
Implement a complete Firebase authentication and backend system that enables user account management, protected routes, personalized dashboards, and usage tracking through Firestore database integration.

### 1.2. Background
Feature-1 and Feature-2 established the frontend foundation with 17 pages and modern UI. However, the platform currently lacks user accounts, authentication, and any backend functionality. This feature will transform Akua from a static website into a functional SaaS platform with user management, enabling future features like API access, billing, and AI service usage tracking.

### 1.3. Target Audience
- New users wanting to create accounts and access AI services
- Returning users needing to log in and manage their profiles
- Authenticated users accessing personalized dashboards
- Administrators needing user management capabilities (future)

### 1.4. In Scope
- ✅ **Firebase Setup:**
  - Create Firebase project ("Akua AI Services")
  - Configure Firebase Authentication
  - Set up Cloud Firestore database
  - Configure security rules
  - Add Firebase SDK to React app

- ✅ **Authentication Features:**
  - Email/password signup with validation
  - Email/password login
  - Google OAuth social login
  - Logout functionality
  - Password reset via email
  - Email verification (optional but recommended)
  - Persistent authentication state (localStorage)

- ✅ **User Interface:**
  - Signup page with form validation
  - Login page with "Remember me" option
  - Password reset page
  - User dashboard page (protected route)
  - User profile page with editable fields
  - Auth state UI (logged in/logged out header)

- ✅ **Protected Routes:**
  - Route guards for authenticated-only pages
  - Redirect to login for unauthenticated users
  - Redirect to dashboard after successful login
  - Preserve redirect path (return to intended page after login)

- ✅ **Firestore Database:**
  - Users collection (auth metadata)
  - Profiles collection (user profile data)
  - Usage collection (track AI service usage)
  - Security rules for data access control
  - Real-time listeners for profile updates

- ✅ **State Management:**
  - AuthContext provider with React Context
  - useAuth custom hook
  - Loading states during auth operations
  - Error handling and user feedback
  - Token refresh handling

- ✅ **User Profile Management:**
  - View profile information
  - Edit profile (name, bio, company, role)
  - Upload profile picture (Firebase Storage)
  - Account settings page
  - View usage statistics

### 1.5. Out of Scope
- ❌ Payment processing (Stripe integration - future feature)
- ❌ Admin dashboard
- ❌ Multi-factor authentication (MFA)
- ❌ Social login beyond Google (Twitter, GitHub, etc.)
- ❌ Team/organization accounts
- ❌ Role-based access control (RBAC) - beyond basic user/guest
- ❌ AI service functionality (will use auth in future features)
- ❌ Email notifications beyond Firebase Auth emails
- ❌ Advanced analytics dashboard

---

## 2. User Stories

### 2.1. User Story 1: New User Signup
As a **new visitor**, I want to **create an account with my email and password** so that **I can access AI services and save my work**.

### 2.2. User Story 2: Returning User Login
As a **returning user**, I want to **log in with my credentials** so that **I can access my personalized dashboard and continue using services**.

### 2.3. User Story 3: Social Authentication
As a **user**, I want to **sign up or log in with my Google account** so that **I don't have to remember another password**.

### 2.4. User Story 4: Password Recovery
As a **user who forgot their password**, I want to **reset my password via email** so that **I can regain access to my account**.

### 2.5. User Story 5: Profile Management
As an **authenticated user**, I want to **view and edit my profile information** so that **I can keep my account details up to date**.

### 2.6. User Story 6: Protected Content Access
As a **user**, I want to **access my personalized dashboard only when logged in** so that **my data remains secure and private**.

### 2.7. User Story 7: Persistent Sessions
As a **user**, I want to **remain logged in when I return to the site** so that **I don't have to log in every time**.

### 2.8. User Story 8: Logout
As an **authenticated user**, I want to **log out of my account** so that **I can secure my account on shared devices**.

### 2.9. User Story 9: Usage Tracking
As a **user**, I want to **see my AI service usage statistics** so that **I know how much I've used and what's remaining**.

---

## 3. Functional Requirements

### 3.1. Firebase Project Setup
- Create new Firebase project named "Akua AI Services"
- Enable Firebase Authentication
- Enable Cloud Firestore database
- Enable Firebase Storage (for profile pictures)
- Configure Firebase SDK in React app
- Set up environment variables for Firebase config
- Configure security rules for Firestore and Storage

### 3.2. Authentication - Signup Flow
**Email/Password Signup:**
- Form fields: Email, Password, Confirm Password, Full Name
- Client-side validation:
  - Email format validation
  - Password strength requirements (min 8 chars, 1 uppercase, 1 number, 1 special char)
  - Password confirmation match
  - Full name required
- Firebase Auth integration:
  - Create user with `createUserWithEmailAndPassword()`
  - Update user profile with display name
  - Send email verification (optional)
- On success:
  - Create user document in Firestore
  - Create profile document in Firestore
  - Redirect to dashboard
  - Show success toast notification
- Error handling:
  - Email already in use
  - Weak password
  - Network errors
  - Display user-friendly error messages

**Google OAuth Signup:**
- "Sign up with Google" button
- Firebase Auth Google provider integration
- Popup or redirect flow
- On success:
  - Create user document if first time
  - Redirect to dashboard
  - Show welcome message
- Handle canceled auth flow gracefully

### 3.3. Authentication - Login Flow
**Email/Password Login:**
- Form fields: Email, Password
- "Remember me" checkbox
- "Forgot password?" link
- Firebase Auth integration:
  - Sign in with `signInWithEmailAndPassword()`
  - Store auth token
  - Set persistence based on "Remember me"
- On success:
  - Redirect to dashboard or intended page
  - Show welcome back message
- Error handling:
  - Invalid email/password
  - User not found
  - Too many attempts
  - Display clear error messages

**Google OAuth Login:**
- "Sign in with Google" button
- Same flow as Google signup
- Automatically differentiate new vs returning users

### 3.4. Authentication - Logout Flow
- "Logout" button in header dropdown menu
- Firebase Auth integration:
  - Call `signOut()`
  - Clear local auth state
  - Clear cached user data
- Redirect to homepage
- Show logout confirmation message

### 3.5. Authentication - Password Reset Flow
- Dedicated password reset page (`/reset-password`)
- Form field: Email address
- Firebase Auth integration:
  - Send password reset email with `sendPasswordResetEmail()`
  - Firebase handles email with reset link
- Success state:
  - Show "Check your email" message
  - Provide link back to login
- Error handling:
  - Email not found
  - Too many requests
  - Display helpful messages

### 3.6. Protected Routes Implementation
- Create `PrivateRoute` component wrapper
- Check authentication state before rendering
- Redirect to `/login` if not authenticated
- Store intended destination for post-login redirect
- Show loading spinner during auth state check
- Apply to routes:
  - `/dashboard` - User dashboard
  - `/profile` - User profile
  - `/settings` - Account settings
  - Future protected routes

### 3.7. User Dashboard Page
**Components:**
- Welcome header with user's name
- Quick stats cards:
  - Account created date
  - Last login time
  - Total AI requests made
  - Current plan tier
- Recent activity section
- Quick actions:
  - View profile
  - Manage settings
  - Explore services
- Navigation to protected features

**Data Source:**
- User profile from Firestore
- Usage statistics from usage collection
- Real-time updates via Firestore listeners

### 3.8. User Profile Page
**View Mode:**
- Display user information:
  - Profile picture (avatar)
  - Full name
  - Email address (read-only)
  - Bio/description
  - Company name
  - Role/title
  - Account creation date
  - Last updated timestamp
- "Edit Profile" button

**Edit Mode:**
- Editable fields:
  - Full name (text input)
  - Bio (textarea, max 500 chars)
  - Company (text input)
  - Role (text input)
- Profile picture upload:
  - Click to upload
  - Image preview before save
  - Upload to Firebase Storage
  - Update URL in Firestore
  - File size limit: 5MB
  - Supported formats: JPG, PNG, WebP
- "Save Changes" button
- "Cancel" button
- Client-side validation
- Save to Firestore on submit
- Show success/error feedback

### 3.9. Firestore Database Structure

**Collection: `users/{userId}`**
```typescript
{
  uid: string;              // Firebase Auth UID
  email: string;            // User email
  displayName: string;      // User's full name
  photoURL: string | null;  // Profile picture URL
  createdAt: Timestamp;     // Account creation date
  lastLoginAt: Timestamp;   // Last login timestamp
  authProvider: 'email' | 'google';  // Auth method used
  emailVerified: boolean;   // Email verification status
}
```

**Collection: `profiles/{userId}`**
```typescript
{
  userId: string;           // Reference to users collection
  bio: string;              // User biography
  company: string;          // Company name
  role: string;             // Job title/role
  website: string;          // Personal website
  location: string;         // City/country
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  updatedAt: Timestamp;     // Last profile update
}
```

**Collection: `usage/{userId}`**
```typescript
{
  userId: string;           // Reference to users collection
  totalRequests: number;    // Total API requests made
  requestsByService: {      // Breakdown by service
    'content-generation': number;
    'image-video-ai': number;
    'analytics': number;
    // ... other services
  };
  lastRequestAt: Timestamp; // Last API usage
  monthlyUsage: {           // Usage per month
    '2025-10': number;
    '2025-11': number;
    // ...
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Firestore Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - users can only read/write their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if false; // Prevent deletion
    }

    // Profiles collection - users can only read/write their own profile
    match /profiles/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Usage collection - users can only read their own usage
    match /usage/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if false; // Only server-side writes
    }
  }
}
```

### 3.10. Authentication State Management
**AuthContext Provider:**
- Create React Context for auth state
- Provider wraps entire app in `App.tsx`
- Manages:
  - Current user object
  - Loading state
  - Authentication status (boolean)
  - Error state
- Methods exposed:
  - `signup(email, password, name)`
  - `login(email, password)`
  - `loginWithGoogle()`
  - `logout()`
  - `resetPassword(email)`
  - `updateUserProfile(data)`

**useAuth Custom Hook:**
- Export `useAuth()` hook for consuming auth context
- Provides access to:
  - `user` - current user object
  - `loading` - auth loading state
  - `isAuthenticated` - boolean
  - All auth methods
- Throws error if used outside AuthProvider

**Firebase Auth State Listener:**
- Set up `onAuthStateChanged` listener in AuthProvider
- Update context state when auth state changes
- Persist auth state across page refreshes
- Handle token refresh automatically

### 3.11. Header Updates for Auth State
**Logged Out State:**
- Show "Login" button
- Show "Sign Up" button
- Both navigate to respective pages

**Logged In State:**
- Show user avatar/profile picture
- Show user dropdown menu:
  - Dashboard
  - Profile
  - Settings
  - Divider
  - Logout
- Dropdown opens on click
- Use Shadcn `DropdownMenu` component

### 3.12. Settings Page (Account Settings)
- Account information section (read-only display)
- Security section:
  - Change password button (trigger email)
  - Email verification status
  - Connected accounts (Google)
- Preferences section:
  - Email notifications toggle (placeholder)
  - Dark mode preference (already implemented)
- Danger zone:
  - Delete account button (requires confirmation, not implemented yet)

---

## 4. Non-Functional Requirements

### 4.1. Performance
- Authentication operations complete within 2 seconds
- Firestore reads complete within 500ms
- Profile picture uploads complete within 5 seconds
- Real-time listeners update UI within 1 second
- Lazy load dashboard data to improve initial load time

### 4.2. Security
- Firebase Authentication handles password security
- Firestore security rules prevent unauthorized access
- No sensitive data stored in client-side code
- Environment variables for Firebase config keys
- HTTPS only (enforced by Vercel)
- XSS protection with React's built-in escaping
- CSRF protection via Firebase Auth tokens

### 4.3. Usability
- Clear form validation messages
- Loading states during async operations
- Helpful error messages (no technical jargon)
- Smooth transitions between auth states
- Accessible forms (ARIA labels, keyboard navigation)
- Mobile-friendly auth forms
- Password visibility toggle on forms

### 4.4. Reliability
- Handle network failures gracefully
- Retry failed requests automatically
- Offline state detection and messaging
- Fallback UI for missing data
- Error boundaries for React components
- Comprehensive error logging (console in dev)

### 4.5. Scalability
- Firebase Auth scales automatically
- Firestore scales with usage
- Efficient Firestore queries (indexed fields)
- Pagination for large datasets (future)
- Optimistic UI updates for better UX

---

## 5. User Interface and User Experience (UI/UX)

### 5.1. User Flow: New User Signup

1. User lands on homepage
2. Clicks "Sign Up" in header
3. Navigates to `/signup` page
4. Sees signup form with:
   - Full Name field
   - Email field
   - Password field (with visibility toggle)
   - Confirm Password field
   - Terms acceptance checkbox
   - "Sign Up" button
   - Divider
   - "Sign Up with Google" button
   - "Already have an account? Log in" link
5. User enters information:
   - Real-time validation feedback
   - Password strength indicator
   - Form errors displayed inline
6. User clicks "Sign Up":
   - Button shows loading spinner
   - On success: Redirect to dashboard with welcome message
   - On error: Display error message above form
7. Alternative: User clicks "Sign Up with Google":
   - Google OAuth popup opens
   - User authenticates with Google
   - On success: Redirect to dashboard
   - New user profile created automatically

### 5.2. User Flow: Returning User Login

1. User clicks "Login" in header
2. Navigates to `/login` page
3. Sees login form with:
   - Email field
   - Password field (with visibility toggle)
   - "Remember me" checkbox
   - "Forgot password?" link
   - "Log In" button
   - Divider
   - "Sign in with Google" button
   - "Don't have an account? Sign up" link
4. User enters credentials:
   - Form validation on blur
5. User clicks "Log In":
   - Button shows loading spinner
   - On success: Redirect to dashboard or intended page
   - On error: Display error message
6. Alternative: User clicks "Sign in with Google":
   - Google OAuth flow
   - On success: Redirect to dashboard

### 5.3. User Flow: Password Reset

1. User on login page clicks "Forgot password?"
2. Navigates to `/reset-password` page
3. Sees form with:
   - Email field
   - "Send Reset Link" button
   - "Back to login" link
4. User enters email address
5. User clicks "Send Reset Link":
   - Button shows loading spinner
   - Firebase sends password reset email
   - On success: Show success message with next steps
   - On error: Display error message
6. User receives email and clicks reset link:
   - Opens Firebase-hosted password reset page
   - User enters new password
   - On success: Firebase confirms, user can log in

### 5.4. User Flow: Dashboard Access

1. Authenticated user clicks "Dashboard" in header dropdown
2. Navigates to `/dashboard`
3. Sees loading state (if data fetching)
4. Dashboard loads with:
   - Welcome message: "Welcome back, [Name]!"
   - Stats cards with animations
   - Recent activity feed
   - Quick action buttons
5. User can navigate to:
   - Profile page
   - Settings page
   - Service pages (already built)

### 5.5. User Flow: Profile Management

1. User clicks "Profile" in header dropdown or dashboard
2. Navigates to `/profile`
3. Sees profile in view mode:
   - Profile picture
   - User information
   - "Edit Profile" button
4. User clicks "Edit Profile":
   - Form fields become editable
   - Profile picture shows "Upload new" option
   - Save/Cancel buttons appear
5. User makes changes:
   - Real-time character count for bio
   - Form validation
6. User clicks "Save Changes":
   - Button shows loading spinner
   - Data saved to Firestore
   - On success: Show success toast, return to view mode
   - On error: Display error message
7. Alternative: User uploads profile picture:
   - File picker opens
   - Image preview shown
   - On save: Upload to Firebase Storage
   - Update profile with new URL

### 5.6. Design Principles
- **Consistency:** Auth pages match existing site design
- **Clarity:** Clear labels and error messages
- **Trust:** Professional, secure-looking forms
- **Simplicity:** Minimal friction in auth flows
- **Feedback:** Immediate response to user actions
- **Accessibility:** WCAG AA compliant forms

---

## 6. Metrics of Success

### 6.1. Metric 1: Authentication Implementation
Successfully implement all auth flows with zero console errors and proper Firebase integration.

### 6.2. Metric 2: User Registration
Users can successfully create accounts via email/password and Google OAuth.

### 6.3. Metric 3: Protected Routes
Dashboard and profile pages are only accessible to authenticated users with proper redirects.

### 6.4. Metric 4: Data Persistence
User data properly stored in Firestore with correct security rules preventing unauthorized access.

### 6.5. Metric 5: User Experience
Smooth transitions between auth states with loading indicators and helpful error messages.

### 6.6. Metric 6: Testing Coverage
All auth components have comprehensive tests passing with 80%+ code coverage.

---

## 7. Acceptance Criteria

### 7.1. Firebase Setup
**Given** a new Firebase project is needed,
**When** Firebase is configured,
**Then** the app should have Firebase Auth, Firestore, and Storage enabled with correct security rules.

### 7.2. User Signup
**Given** a new user on the signup page,
**When** they submit valid credentials,
**Then** a new account should be created, user document stored in Firestore, and user redirected to dashboard.

### 7.3. User Login
**Given** an existing user on the login page,
**When** they submit correct credentials,
**Then** they should be authenticated and redirected to their dashboard.

### 7.4. Google OAuth
**Given** a user clicks "Sign in with Google",
**When** they complete Google authentication,
**Then** they should be logged in and redirected to dashboard.

### 7.5. Password Reset
**Given** a user on the password reset page,
**When** they submit their email,
**Then** they should receive a password reset email from Firebase.

### 7.6. Protected Routes
**Given** an unauthenticated user tries to access `/dashboard`,
**When** the page loads,
**Then** they should be redirected to `/login` with the intended destination stored.

### 7.7. Logout
**Given** an authenticated user clicks "Logout",
**When** the logout completes,
**Then** they should be logged out, redirected to homepage, and unable to access protected routes.

### 7.8. Profile Management
**Given** an authenticated user on their profile page,
**When** they edit and save their profile,
**Then** changes should be saved to Firestore and reflected in the UI.

### 7.9. Persistent Auth State
**Given** an authenticated user closes and reopens the browser,
**When** they return to the site,
**Then** they should still be logged in and see their authenticated state.

---

## 8. Technical Decisions

### 8.1. Architecture
- **Pattern:** Context API for global auth state management
- **Auth Provider:** Firebase Authentication
- **Database:** Cloud Firestore with security rules
- **Storage:** Firebase Storage for profile pictures
- **Protected Routes:** Higher-order component wrapper pattern
- **State Management:** AuthContext with useAuth hook

### 8.2. Technologies

**Firebase Services:**
- Firebase Authentication (email/password, Google OAuth)
- Cloud Firestore (NoSQL database)
- Firebase Storage (file uploads)
- Firebase JS SDK v9+ (modular SDK)

**React Components:**
- `AuthProvider` (context provider)
- `PrivateRoute` (route guard component)
- `SignupPage` (signup form)
- `LoginPage` (login form)
- `ResetPasswordPage` (password reset)
- `DashboardPage` (user dashboard)
- `ProfilePage` (user profile)
- `SettingsPage` (account settings)

**Shadcn UI Components to Use:**
- `Form` (form wrapper)
- `Input` (text inputs)
- `Button` (buttons with loading states)
- `Card` (dashboard cards)
- `Avatar` (user profile picture)
- `DropdownMenu` (header user menu)
- `Tabs` (settings page sections)
- `Toast` (notifications)
- `Alert` (error/success messages)
- `Dialog` (confirmations)

**New Dependencies:**
- `firebase` (^10.x) - Firebase JS SDK
- `react-hook-form` (^7.x) - Form handling
- `zod` (^3.x) - Form validation schemas

### 8.3. Data Model

**TypeScript Interfaces:**

```typescript
// types/auth.ts

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  emailVerified: boolean;
  createdAt: Date;
  lastLoginAt: Date;
  authProvider: 'email' | 'google';
}

export interface UserProfile {
  userId: string;
  bio: string;
  company: string;
  role: string;
  website: string;
  location: string;
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  updatedAt: Date;
}

export interface UserUsage {
  userId: string;
  totalRequests: number;
  requestsByService: Record<string, number>;
  lastRequestAt: Date;
  monthlyUsage: Record<string, number>;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  uploadProfilePicture: (file: File) => Promise<string>;
}

export interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}
```

**Firebase Configuration:**
```typescript
// config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### 8.4. Component Structure

```
src/
├── config/
│   └── firebase.ts                    # NEW: Firebase initialization
├── contexts/
│   └── AuthContext.tsx                # NEW: Auth state management
├── hooks/
│   └── useAuth.ts                     # NEW: Auth hook
├── components/
│   ├── auth/
│   │   ├── SignupForm.tsx            # NEW: Signup form component
│   │   ├── LoginForm.tsx             # NEW: Login form component
│   │   ├── GoogleAuthButton.tsx      # NEW: Google OAuth button
│   │   └── PasswordResetForm.tsx     # NEW: Password reset form
│   ├── dashboard/
│   │   ├── StatsCard.tsx             # NEW: Dashboard stat card
│   │   ├── RecentActivity.tsx        # NEW: Activity feed
│   │   └── QuickActions.tsx          # NEW: Quick action buttons
│   ├── profile/
│   │   ├── ProfileHeader.tsx         # NEW: Profile header with avatar
│   │   ├── ProfileForm.tsx           # NEW: Editable profile form
│   │   └── AvatarUpload.tsx          # NEW: Avatar upload component
│   └── layout/
│       ├── Header.tsx                 # MODIFIED: Add user dropdown
│       └── PrivateRoute.tsx           # NEW: Protected route wrapper
├── pages/
│   ├── auth/
│   │   ├── SignupPage.tsx            # NEW: Signup page
│   │   ├── LoginPage.tsx             # NEW: Login page
│   │   └── ResetPasswordPage.tsx     # NEW: Password reset page
│   ├── DashboardPage.tsx             # NEW: User dashboard
│   ├── ProfilePage.tsx               # NEW: User profile
│   └── SettingsPage.tsx              # NEW: Account settings
├── services/
│   ├── authService.ts                # NEW: Auth helper functions
│   ├── firestoreService.ts           # NEW: Firestore CRUD operations
│   └── storageService.ts             # NEW: File upload helpers
├── types/
│   └── auth.ts                        # NEW: Auth type definitions
└── utils/
    ├── validators.ts                  # NEW: Form validation helpers
    └── errorHandlers.ts               # NEW: Error message formatting
```

### 8.5. Routing

**New Routes:**
```typescript
/signup → SignupPage (public)
/login → LoginPage (public, redirect if authenticated)
/reset-password → ResetPasswordPage (public)
/dashboard → DashboardPage (protected)
/profile → ProfilePage (protected)
/settings → SettingsPage (protected)
```

**Updated Routes:**
- All existing routes remain public
- Homepage `/` - Show different CTA based on auth state
- Pricing `/pricing` - Update CTA to "Get Started" (signup) or "Upgrade" (if logged in)

**Route Guards:**
```typescript
// Protected routes wrapped with PrivateRoute
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  }
/>
```

### 8.6. Firebase Security Rules

**Firestore Rules:**
```javascript
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
      allow update: if false; // Only via Cloud Functions
      allow delete: if false;
    }
  }
}
```

**Storage Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /profile-pictures/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
                   && request.auth.uid == userId
                   && request.resource.size < 5 * 1024 * 1024  // 5MB limit
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

### 8.7. Error Handling Strategy

**Firebase Auth Error Codes:**
- `auth/email-already-in-use` → "This email is already registered"
- `auth/invalid-email` → "Please enter a valid email address"
- `auth/weak-password` → "Password must be at least 8 characters"
- `auth/user-not-found` → "No account found with this email"
- `auth/wrong-password` → "Incorrect password"
- `auth/too-many-requests` → "Too many attempts. Please try again later"
- `auth/network-request-failed` → "Network error. Please check your connection"

**Error Display:**
- Form-level errors: Alert component above form
- Field-level errors: Inline below input fields
- Toast notifications: For success messages
- Console logging: In development mode only

---

## 9. Dependencies

**New NPM Packages:**
```json
{
  "firebase": "^10.13.0",
  "react-hook-form": "^7.52.0",
  "zod": "^3.23.0"
}
```

**Existing Dependencies:**
- React Router DOM (routing with auth guards)
- Shadcn UI (form components, dropdowns, etc.)
- Tailwind CSS (styling)
- Lucide React (icons)

---

## 10. Risks & Mitigation

**Risk:** Firebase configuration exposed in client-side code
**Mitigation:** Use environment variables, Firebase keys are safe for client-side use, rely on security rules for protection

**Risk:** Security rules too permissive or too restrictive
**Mitigation:** Test rules thoroughly, use Firestore emulator for testing, follow principle of least privilege

**Risk:** User data loss during profile updates
**Mitigation:** Implement optimistic updates with rollback, show loading states, confirm before destructive actions

**Risk:** OAuth popup blocked by browser
**Mitigation:** Provide fallback to redirect flow, clear instructions for enabling popups

**Risk:** Slow Firestore queries affecting UX
**Mitigation:** Implement loading skeletons, use real-time listeners sparingly, cache data in React state

**Risk:** Profile picture uploads failing
**Mitigation:** Validate file size/type before upload, show progress indicator, handle errors gracefully

---

## 11. Future Considerations

- Add email verification requirement before full access
- Implement multi-factor authentication (MFA)
- Add social login providers (GitHub, Twitter)
- Create admin dashboard for user management
- Implement role-based access control (RBAC)
- Add team/organization accounts
- Create audit logs for security tracking
- Implement rate limiting for auth attempts
- Add CAPTCHA for signup/login forms
- Create password strength meter with suggestions
- Implement account deletion flow with confirmation
- Add export user data feature (GDPR compliance)
- Create Firebase Cloud Functions for:
  - Welcome emails
  - Usage tracking automation
  - Profile picture processing (resize, optimize)
- Integrate with customer support system

---

## 12. Implementation Workflow

This feature follows the structured workflow from previous features:

### Phase 1: Planning 📋
1. Break down PRD into detailed tasks
2. Create task files in `project/feature-3/tasks/`
3. Define dependencies between tasks
4. Specify components, types, tests for each task

### Phase 2: Firebase Setup 🔥
1. **Create Firebase project via Playwright MCP:**
   - Navigate to Firebase Console
   - Create new project "Akua AI Services"
   - Enable Firebase Authentication
   - Enable Cloud Firestore
   - Enable Firebase Storage
   - Configure security rules
   - Get Firebase config credentials
2. **Add Firebase to React app:**
   - Install Firebase SDK
   - Create Firebase config file
   - Initialize Firebase services
   - Set up environment variables

### Phase 3: Implementation 💻
1. **TDD Approach:** Write tests FIRST for each component
2. **Build authentication system:**
   - AuthContext and useAuth hook
   - Signup/Login/Reset pages
   - Form validation with Zod
   - Firebase Auth integration
   - Error handling
3. **Build protected routes:**
   - PrivateRoute component
   - Redirect logic
   - Loading states
4. **Build dashboard and profile:**
   - Dashboard with stats
   - Profile page with edit functionality
   - Settings page
   - Firestore integration
5. **Update existing components:**
   - Header with user dropdown
   - Homepage CTAs based on auth state
   - Navigation links
6. **Ensure all tests pass**

### Phase 4: Validation ✅
1. Run all automated tests
2. TypeScript type checking
3. Linting and code quality checks
4. Firebase emulator testing
5. Generate human testing script

### Phase 5: Browser Testing with Playwright MCP 🌐
**CRITICAL PHASE - DO NOT SKIP**

1. Start dev server in background
2. Test signup flow:
   - Email/password signup
   - Google OAuth signup
   - Form validation
   - Success redirect
3. Test login flow:
   - Email/password login
   - Google OAuth login
   - Error handling
   - Remember me functionality
4. Test logout flow:
   - Logout from header dropdown
   - Verify redirect
   - Verify cannot access protected routes
5. Test password reset:
   - Submit email
   - Verify email sent (check Firebase Console)
6. Test protected routes:
   - Try accessing /dashboard without auth
   - Verify redirect to login
   - Verify return to intended page after login
7. Test dashboard:
   - Verify data displays correctly
   - Test navigation links
8. Test profile management:
   - View profile
   - Edit profile
   - Save changes
   - Verify Firestore update
   - Upload profile picture
9. Test responsive design at all breakpoints
10. Check for ZERO console errors
11. Take screenshots of all auth flows

### Phase 6: Deployment 🚀
1. Run production build
2. Test with Firebase production project
3. Verify environment variables in Vercel
4. Deploy to Vercel
5. Test live production authentication
6. Verify Firestore and Storage access
7. Monitor Firebase usage and errors

### Success Criteria:
By completion, feature-3 will have:
- ✅ Firebase project "Akua AI Services" created and configured
- ✅ Complete authentication system (signup, login, logout, reset)
- ✅ Google OAuth integration working
- ✅ Protected routes with proper redirects
- ✅ User dashboard and profile pages
- ✅ Firestore database with security rules
- ✅ Profile picture uploads to Firebase Storage
- ✅ AuthContext and useAuth hook
- ✅ All forms with validation and error handling
- ✅ Zero console errors
- ✅ All tests passing (80%+ coverage)
- ✅ Browser tested with Playwright MCP
- ✅ Successfully deployed with Firebase integration

---

## 13. Testing Requirements

### 13.1. Unit Tests
- Auth helper functions (signup, login, logout)
- Form validation functions
- Error message formatters
- Firestore service functions
- Storage service functions

### 13.2. Component Tests
- SignupForm (validation, submission)
- LoginForm (validation, submission)
- PasswordResetForm
- ProfileForm (edit mode, validation)
- AvatarUpload (file selection, preview)
- PrivateRoute (auth redirect logic)
- User dropdown menu

### 13.3. Integration Tests
- Full signup flow (form → Firebase → Firestore → redirect)
- Full login flow
- Protected route access
- Profile update flow (form → Firestore → UI update)
- Logout and state clearing

### 13.4. Firebase Emulator Tests
- Use Firebase emulator suite
- Test Firestore security rules
- Test Storage security rules
- Verify unauthorized access blocked
- Test concurrent user operations

### 13.5. Browser Testing with Playwright MCP
**Comprehensive testing of all auth flows:**
- User signup (email/password and Google)
- User login (email/password and Google)
- Password reset flow
- Profile management
- Protected route access
- Logout and session clearing
- Responsive design
- Error state handling
- Loading states
- ZERO console errors required

---

## 14. Definition of Done

**Implementation Complete:**
- [ ] Firebase project created and configured
- [ ] Firebase SDK integrated into React app
- [ ] AuthContext and useAuth hook implemented
- [ ] Signup page with email/password and Google OAuth
- [ ] Login page with email/password and Google OAuth
- [ ] Password reset page functional
- [ ] Dashboard page with user stats
- [ ] Profile page with edit functionality
- [ ] Settings page created
- [ ] Protected routes with authentication guards
- [ ] Header updated with user dropdown menu
- [ ] Firestore collections created (users, profiles, usage)
- [ ] Firestore security rules deployed
- [ ] Firebase Storage rules deployed
- [ ] Profile picture upload working
- [ ] Form validation with Zod schemas
- [ ] Error handling for all auth operations
- [ ] Loading states during async operations
- [ ] Toast notifications for success/error

**Testing Complete:**
- [ ] All unit tests passing
- [ ] All component tests passing
- [ ] Integration tests passing
- [ ] Firebase emulator tests passing
- [ ] TypeScript compilation successful
- [ ] No linting errors
- [ ] Browser testing with Playwright MCP completed:
  - [ ] Signup flow tested (email/password + Google)
  - [ ] Login flow tested (email/password + Google)
  - [ ] Logout tested
  - [ ] Password reset tested
  - [ ] Protected routes tested
  - [ ] Dashboard tested
  - [ ] Profile management tested
  - [ ] Settings page tested
  - [ ] Responsive design verified
  - [ ] Zero console errors
  - [ ] Screenshots captured

**Deployment Complete:**
- [ ] Environment variables configured in Vercel
- [ ] Firebase config added to production
- [ ] Production build successful
- [ ] Deployed to Vercel
- [ ] Firebase Authentication working in production
- [ ] Firestore database accessible in production
- [ ] Firebase Storage working in production
- [ ] All auth flows tested in production
- [ ] Security rules verified in production
- [ ] Lighthouse performance scores > 85

**Documentation Complete:**
- [ ] Firebase setup instructions documented
- [ ] Environment variables documented
- [ ] Security rules documented
- [ ] Known issues/limitations documented
- [ ] Testing procedures documented

---

## 15. Firebase Setup Instructions (for Implementation)

### 15.1. Create Firebase Project Using Playwright MCP

**Step 1: Navigate to Firebase Console**
```typescript
// Use Playwright MCP to navigate
mcp__playwright__browser_navigate("https://console.firebase.google.com/")
// Log in with your Google account
```

**Step 2: Create New Project**
- Click "Add project" or "Create a project"
- Enter project name: "Akua AI Services"
- Project ID: auto-generated or custom (e.g., `akua-ai-services`)
- Disable Google Analytics (optional for now)
- Click "Create project"
- Wait for project creation to complete

**Step 3: Enable Authentication**
- Navigate to "Authentication" from sidebar
- Click "Get started"
- Enable sign-in methods:
  - Email/Password → Enable
  - Google → Enable (configure OAuth consent)
- Copy configuration details

**Step 4: Create Firestore Database**
- Navigate to "Firestore Database" from sidebar
- Click "Create database"
- Choose "Start in test mode" (will update rules later)
- Select region: Choose closest to users (e.g., us-central1)
- Click "Enable"
- Database created

**Step 5: Enable Firebase Storage**
- Navigate to "Storage" from sidebar
- Click "Get started"
- Choose "Start in test mode" (will update rules later)
- Click "Done"

**Step 6: Get Firebase Configuration**
- Go to Project Settings (gear icon)
- Scroll to "Your apps" section
- Click "Web" icon (</>) to add web app
- Register app name: "Akua Web App"
- Check "Firebase Hosting" (optional)
- Click "Register app"
- Copy the Firebase configuration object:
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
- Save these values as environment variables

**Step 7: Deploy Security Rules**
- After implementing Firestore rules, deploy via Firebase CLI or console
- Copy rules from PRD section 8.6
- Paste in Firestore Rules tab
- Publish rules

### 15.2. Environment Variables

Create `.env` file in project root:
```bash
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

Add to Vercel environment variables for production deployment.

---

**Feature 3 PRD Complete. Ready for task breakdown and implementation.**
