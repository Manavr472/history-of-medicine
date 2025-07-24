'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

interface User {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  isLoading: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') {
      setIsLoading(true);
      return;
    }

    // If we have a NextAuth session (Google login)
    if (session?.user) {
      const sessionUser: User = {
        id: (session.user as any).id || session.user.email || '',
        name: session.user.name || '',
        email: session.user.email || '',
        verified: true, // NextAuth sessions are considered verified
        role: (session.user as any).role || 'VIEWER'
      };
      setUser(sessionUser);
      setIsLoading(false);
      return;
    }

    // If no NextAuth session, check for localStorage token (email/password login)
    const token = localStorage.getItem('token');
    if (token) {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    
    setIsLoading(false);
  }, [session, status]);

  const login = (token: string, userData: User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = async () => {
    // Clear localStorage (for email/password sessions)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Sign out from NextAuth (for Google sessions)
    if (session) {
      await signOut({ redirect: false });
    }
    
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
