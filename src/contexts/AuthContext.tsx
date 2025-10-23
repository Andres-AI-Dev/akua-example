import { createContext, useEffect, useState, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import type { User, AuthContextType, ProfileData } from '../types/auth';
import {
  createUserDocument,
  getUserDocument,
  updateUserDocument,
  updateLastLogin,
  createProfileDocument,
  updateProfileDocument,
  createUsageDocument,
} from '../services/firestore';

// Create Auth Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Convert Firebase User to our User type
  const convertFirebaseUser = (firebaseUser: FirebaseUser): User => {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      emailVerified: firebaseUser.emailVerified,
    };
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(convertFirebaseUser(firebaseUser));
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Signup with email/password
  const signup = async (email: string, password: string, name: string): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      // Create Firestore documents
      await createUserDocument(
        userCredential.user.uid,
        email,
        name,
        null,
        'email',
        userCredential.user.emailVerified
      );
      await createProfileDocument(userCredential.user.uid);
      await createUsageDocument(userCredential.user.uid);

      // Update local state
      setUser(convertFirebaseUser(userCredential.user));
    } catch (error: any) {
      throw new Error(error.message || 'Failed to create account');
    }
  };

  // Login with email/password
  const login = async (email: string, password: string): Promise<void> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Update last login timestamp
      await updateLastLogin(userCredential.user.uid);
      setUser(convertFirebaseUser(userCredential.user));
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        throw new Error('Incorrect password');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('No account found with this email');
      } else {
        throw new Error(error.message || 'Failed to log in');
      }
    }
  };

  // Login with Google OAuth
  const loginWithGoogle = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      // Check if this is a new user and create Firestore documents
      const userDoc = await getUserDocument(userCredential.user.uid);
      if (!userDoc) {
        // New user - create all Firestore documents
        await createUserDocument(
          userCredential.user.uid,
          userCredential.user.email!,
          userCredential.user.displayName || '',
          userCredential.user.photoURL,
          'google',
          userCredential.user.emailVerified
        );
        await createProfileDocument(userCredential.user.uid);
        await createUsageDocument(userCredential.user.uid);
      } else {
        // Existing user - just update last login
        await updateLastLogin(userCredential.user.uid);
      }

      setUser(convertFirebaseUser(userCredential.user));
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        throw new Error('Sign-in cancelled');
      } else {
        throw new Error(error.message || 'Failed to sign in with Google');
      }
    }
  };

  // Logout
  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to log out');
    }
  };

  // Send password reset email
  const resetPassword = async (email: string): Promise<void> => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        throw new Error('No account found with this email');
      } else {
        throw new Error(error.message || 'Failed to send reset email');
      }
    }
  };

  // Update user profile
  const updateUserProfile = async (data: Partial<ProfileData>): Promise<void> => {
    if (!user || !auth.currentUser) {
      throw new Error('No user logged in');
    }

    try {
      // Update Firebase Auth profile if displayName changed
      if (data.displayName) {
        await updateProfile(auth.currentUser, { displayName: data.displayName });
        await updateUserDocument(user.uid, { displayName: data.displayName });
      }

      // Update Firestore profile document
      await updateProfileDocument(user.uid, data);

      // Update local state
      setUser({
        ...user,
        displayName: data.displayName || user.displayName,
      });
    } catch (error: any) {
      throw new Error(error.message || 'Failed to update profile');
    }
  };

  // Upload profile picture
  const uploadProfilePicture = async (_file: File): Promise<string> => {
    if (!user || !auth.currentUser) {
      throw new Error('No user logged in');
    }

    try {
      // Upload to Firebase Storage (will be implemented in Task 12)
      // const photoURL = await uploadProfilePictureToStorage(user.uid, file);

      // Update Firebase Auth profile
      // await updateProfile(auth.currentUser, { photoURL });

      // Update Firestore user document
      // await updateUserDocument(user.uid, { photoURL });

      // Update local state
      // setUser({ ...user, photoURL });

      // return photoURL;

      // Temporary implementation
      throw new Error('Profile picture upload not yet implemented');
    } catch (error: any) {
      throw new Error(error.message || 'Failed to upload profile picture');
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    uploadProfilePicture,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
