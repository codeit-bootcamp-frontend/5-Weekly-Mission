'use client';
import { createContext } from 'react';
import AuthProvider from './auto.provider';
import { Wrap } from '@/styles/mainStyle';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value='dark'>
      <AuthProvider>
        <Wrap>
          <Header />
          {children}
          <Footer />
        </Wrap>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}
