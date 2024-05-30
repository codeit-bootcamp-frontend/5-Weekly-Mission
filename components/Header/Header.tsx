'use client';

import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import Account from '@/components/Account/Account';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useUserInfo } from '@/hooks/useUserInfo';
export default function Header() {
  const { getUserInfo, signOut } = useAuth();
  const { user } = useUserInfo();
  const loadUser = async () => {
    await getUserInfo();
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBar}>
        <Link className={styles.logoImageContainer} href={`/`}>
          <Image src='/assets/images/logo.svg' alt='Logo' fill />
        </Link>

        {user ? (
          <>
            <Account
              profileImgSource={user.image_source}
              userEmail={user.email}
            />
            <Button onClick={signOut}>로그아웃</Button>
          </>
        ) : (
          <Link href={'/signin'}>
            <Button className={styles.signInButton}>로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
