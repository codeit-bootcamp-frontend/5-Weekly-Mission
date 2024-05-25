'use client';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Wrap } from '@/styles/mainStyle';
import { createContext } from 'react';
import AuthProvider from './auto.provider';

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
