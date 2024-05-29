import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { ModalProvider } from '@/contexts/ModalContext';
import { UserContext } from '@/contexts/UserContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getUser } from '../api/api';
import { User } from '@/hooks/useGetUser';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    id: '',
    created_at: new Date(),
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });

  useEffect(() => {
    const userAccess = localStorage.getItem('token');
    if (userAccess) {
      const loadUser = async () => {
        const response = await getUser(userAccess);
        setUser(response[0]);
      };
      loadUser();
    }
  }, []);

  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  }, []);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <UserContext.Provider value={user.id}>
        <Nav user={user} />
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </UserContext.Provider>
      <Footer />
    </>
  );
}
