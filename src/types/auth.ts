// Authentication Types

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
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
  updateUserProfile: (data: Partial<ProfileData>) => Promise<void>;
  uploadProfilePicture: (file: File) => Promise<string>;
}

export interface ProfileData {
  displayName: string;
  bio: string;
  company: string;
  role: string;
  website: string;
  location: string;
}
