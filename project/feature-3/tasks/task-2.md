# Task: AuthContext and useAuth Hook

**1. Description**

Create React Context for authentication state management and a custom useAuth hook. This provides global authentication state across the application and exposes auth methods (signup, login, logout, etc.) to all components.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* AuthContext is created with TypeScript interface
* AuthProvider component wraps the app and manages auth state
* useAuth hook provides access to auth state and methods
* Firebase onAuthStateChanged listener tracks auth state changes
* Loading state is properly managed during auth operations
* All auth methods return proper error handling

**4. Files to be Modified/Created**

* `src/contexts/AuthContext.tsx` (CREATE)
* `src/hooks/useAuth.ts` (CREATE)
* `src/types/auth.ts` (CREATE)
* `src/config/firebase.ts` (READ-ONLY - from Task 1)

**5. Dependencies**

* Task 1: Firebase SDK Setup (must be completed first)

**6. Low-Level Steps (Ordered, information-dense)**

1. Create TypeScript types for authentication
   - File(s) involved: `src/types/auth.ts`
   - Define User interface:
     ```typescript
     export interface User {
       uid: string;
       email: string | null;
       displayName: string | null;
       photoURL: string | null;
       emailVerified: boolean;
     }
     ```
   - Define AuthContextType interface with methods:
     - user: User | null
     - loading: boolean
     - isAuthenticated: boolean
     - signup, login, loginWithGoogle, logout, resetPassword, updateUserProfile, uploadProfilePicture methods

2. Create AuthContext with Provider
   - File(s) involved: `src/contexts/AuthContext.tsx`
   - React specifics:
     - Use `createContext<AuthContextType | undefined>(undefined)`
     - Create AuthProvider component with children prop
     - Use useState for user, loading, and error states
     - Use useEffect for Firebase auth state listener
   - Algorithm:
     ```typescript
     const AuthProvider = ({ children }) => {
       const [user, setUser] = useState<User | null>(null);
       const [loading, setLoading] = useState(true);

       useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
           if (firebaseUser) {
             setUser({
               uid: firebaseUser.uid,
               email: firebaseUser.email,
               displayName: firebaseUser.displayName,
               photoURL: firebaseUser.photoURL,
               emailVerified: firebaseUser.emailVerified,
             });
           } else {
             setUser(null);
           }
           setLoading(false);
         });
         return unsubscribe;
       }, []);

       // Implement auth methods...
     };
     ```

3. Implement authentication methods
   - File(s) involved: `src/contexts/AuthContext.tsx`
   - signup method:
     ```typescript
     const signup = async (email: string, password: string, name: string) => {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       await updateProfile(userCredential.user, { displayName: name });
       // Create user document in Firestore (Task 11)
     };
     ```
   - login method using signInWithEmailAndPassword
   - loginWithGoogle method using GoogleAuthProvider and signInWithPopup
   - logout method using signOut
   - resetPassword method using sendPasswordResetEmail
   - Error handling with try-catch and proper Firebase error codes

4. Create useAuth custom hook
   - File(s) involved: `src/hooks/useAuth.ts`
   - Use useContext to access AuthContext
   - Throw error if used outside AuthProvider
   - Return context value with proper TypeScript types

5. Export context and provider
   - Export AuthContext (for testing)
   - Export AuthProvider (default export)
   - Export useAuth hook from hooks directory

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test AuthContext initialization
    * Test useAuth hook throws error outside provider
    * Tools: Vitest + React Testing Library

* **7.2. Component Tests:**
    * Test AuthProvider renders children
    * Test loading state is true initially
    * Test auth state updates on Firebase auth change
    * Mock Firebase auth for testing

* **7.3. Integration Tests:**
    * Test signup creates user in Firebase (with emulator)
    * Test login authenticates user
    * Test logout clears user state
    * Test Google OAuth flow (mock)
    * Test password reset sends email
    * Expected outcome: Auth state reflects Firebase auth state

* **7.4. Manual Testing:**
    * Wrap app with AuthProvider
    * Use React DevTools to inspect auth context
    * Verify auth state persists across page reloads
    * Test error messages for failed auth operations
