import React, { createContext, useState, useEffect } from 'react';

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import type { User } from '../types/User';

type AuthContextType = {
  user: User | undefined;
  isAuthenticated: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutFromGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { displayName, email, photoURL, uid } = authUser;

        if (!displayName || !email || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          email,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, email, photoURL, uid } = result.user;

      if (!displayName || !email || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        email,
        avatar: photoURL,
      });
    }
  };

  const signOutFromGoogle = async () => {
    const auth = getAuth();

    await signOut(auth);

    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signInWithGoogle, signOutFromGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
