'use client';

import React, { createContext, useState, useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { SignInFormFields } from '@/app/lib/definitions';
import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/hooks/useUserInfo';

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: Props) => {
  const { user, setUserInfo } = useUserInfo();

  const router = useRouter();

  const checkEmailDuplication = async (email: string) => {
    const response = await axiosInstance.post('/check-email', {
      email: email,
    });

    if (response.status >= 400) {
      throw new Error('이메일 중복');
    }
  };

  const submitSignIn: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      const response = await axiosInstance.post('/sign-in', data);
      if (response.status >= 200 && response.status < 300) {
        const accessToken = response.data.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        router.push('/folder');
      }
    } catch (error) {
      throw new Error('로그인 실패');
    }
  };

  const submitSignUp = async (email: string, password: string) => {
    const response = await axiosInstance.post('/sign-up', {
      email,
      password,
    });
    if (response.status < 400) {
      const accessToken = response.data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      router.push('/folder');
    }
  };

  const getUserInfo = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const response = await axiosInstance.get('/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserInfo(response.data.data[0]);
    }
  };

  const signOut = () => {
    localStorage.removeItem('accessToken');
    router.push('/signin');
  };

  return (
    <AuthContext.Provider
      value={{
        setUserInfo,
        submitSignIn,
        signOut,
        getUserInfo,
        checkEmailDuplication,
        submitSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
