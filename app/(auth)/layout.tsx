'use client';
import Loading from '@/components/loading/Loading';
import { ACCESS_TOKEN_KEY } from '@/lib/axios';
import { JoinBody, JoinWrap } from '@/styles/loginStyle';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (const cookie of cookies) {
    const [cookieName] = cookie.split('=');
    if (cookieName === name) {
      redirect('/folder');
    }
  }
  return false;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  getCookie(ACCESS_TOKEN_KEY);

  useEffect(() => {
    setIsLoading(true);
  }, [isLoading]);

  if (!isLoading) return <Loading />;

  return (
    <JoinWrap className='no-header--container signup__wrap'>
      <JoinBody>{children}</JoinBody>
    </JoinWrap>
  );
}
