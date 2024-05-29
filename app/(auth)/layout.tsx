'use client';
import Loading from '@/components/loading/Loading';
import { ACCESS_TOKEN_KEY } from '@/lib/axios';
import { JoinBody, JoinWrap } from '@/styles/loginStyle';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (const cookie of cookies) {
    const [cookieName] = cookie.split('=');
    if (cookieName === name) {
      return true;
    }
  }
  return false;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (getCookie(ACCESS_TOKEN_KEY)) {
      router.push('/folder');
      return;
    }
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <JoinWrap className='no-header--container signup__wrap'>
      <JoinBody>{children}</JoinBody>
    </JoinWrap>
  );
}
