'use client';
import React, { createContext, useEffect, useState } from 'react';

type login = boolean | undefined;

interface layoutContextType {
  isLoggedIn: login;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<layoutContextType>({
  isLoggedIn: undefined,
  handleLogin: (token: string) => {},
  handleLogout: () => {},
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<login>();

  const handleLogin = (token: string) => {
    document.cookie = `accessToken=${token}`;
    setIsLoggedIn(Boolean(document.cookie));
  };
  const handleLogout = () => {
    document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(document.cookie));
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
}
