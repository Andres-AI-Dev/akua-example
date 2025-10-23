import { doc, setDoc, getDoc, updateDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

// Collection names
const USERS_COLLECTION = 'users';
const PROFILES_COLLECTION = 'profiles';
const USAGE_COLLECTION = 'usage';

// User document structure
export interface UserDocument {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  authProvider: 'email' | 'google';
  emailVerified: boolean;
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
  updatedAt: Timestamp;
}

// Profile document structure
export interface ProfileDocument {
  uid: string;
  bio: string;
  company: string;
  location: string;
  website: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Usage document structure
export interface UsageDocument {
  uid: string;
  apiCalls: number;
  storageUsed: number;
  lastApiCall: Timestamp | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Create a user document in Firestore
 */
export const createUserDocument = async (
  uid: string,
  email: string,
  displayName: string,
  photoURL: string | null,
  authProvider: 'email' | 'google',
  emailVerified: boolean = false
): Promise<void> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  const userData: Omit<UserDocument, 'createdAt' | 'lastLoginAt' | 'updatedAt'> & {
    createdAt: any;
    lastLoginAt: any;
    updatedAt: any;
  } = {
    uid,
    email,
    displayName,
    photoURL,
    authProvider,
    emailVerified,
    createdAt: serverTimestamp(),
    lastLoginAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(userRef, userData);
};

/**
 * Get a user document from Firestore
 */
export const getUserDocument = async (uid: string): Promise<UserDocument | null> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data() as UserDocument;
  }
  return null;
};

/**
 * Update a user document in Firestore
 */
export const updateUserDocument = async (
  uid: string,
  data: Partial<Omit<UserDocument, 'uid' | 'createdAt'>>
): Promise<void> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  await updateDoc(userRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

/**
 * Update last login timestamp
 */
export const updateLastLogin = async (uid: string): Promise<void> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  await updateDoc(userRef, {
    lastLoginAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

/**
 * Create a profile document in Firestore
 */
export const createProfileDocument = async (uid: string): Promise<void> => {
  const profileRef = doc(db, PROFILES_COLLECTION, uid);
  const profileData: Omit<ProfileDocument, 'createdAt' | 'updatedAt'> & {
    createdAt: any;
    updatedAt: any;
  } = {
    uid,
    bio: '',
    company: '',
    location: '',
    website: '',
    socialLinks: {
      twitter: '',
      linkedin: '',
      github: '',
    },
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(profileRef, profileData);
};

/**
 * Get a profile document from Firestore
 */
export const getProfileDocument = async (uid: string): Promise<ProfileDocument | null> => {
  const profileRef = doc(db, PROFILES_COLLECTION, uid);
  const profileSnap = await getDoc(profileRef);

  if (profileSnap.exists()) {
    return profileSnap.data() as ProfileDocument;
  }
  return null;
};

/**
 * Update a profile document in Firestore
 */
export const updateProfileDocument = async (
  uid: string,
  data: Partial<Omit<ProfileDocument, 'uid' | 'createdAt'>>
): Promise<void> => {
  const profileRef = doc(db, PROFILES_COLLECTION, uid);
  await updateDoc(profileRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

/**
 * Create a usage document in Firestore
 */
export const createUsageDocument = async (uid: string): Promise<void> => {
  const usageRef = doc(db, USAGE_COLLECTION, uid);
  const usageData: Omit<UsageDocument, 'createdAt' | 'updatedAt'> & {
    createdAt: any;
    updatedAt: any;
  } = {
    uid,
    apiCalls: 0,
    storageUsed: 0,
    lastApiCall: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(usageRef, usageData);
};

/**
 * Get a usage document from Firestore
 */
export const getUsageDocument = async (uid: string): Promise<UsageDocument | null> => {
  const usageRef = doc(db, USAGE_COLLECTION, uid);
  const usageSnap = await getDoc(usageRef);

  if (usageSnap.exists()) {
    return usageSnap.data() as UsageDocument;
  }
  return null;
};

/**
 * Update a usage document in Firestore
 */
export const updateUsageDocument = async (
  uid: string,
  data: Partial<Omit<UsageDocument, 'uid' | 'createdAt'>>
): Promise<void> => {
  const usageRef = doc(db, USAGE_COLLECTION, uid);
  await updateDoc(usageRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};
