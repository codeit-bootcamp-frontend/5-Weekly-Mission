'use client';

import { useRouter } from 'next/navigation';

import styles from '@/styles/AuthPage.module.css';
import AuthHeader from '@/components/AuthHeader/AuthHeader';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import SocialAuth from '@/components/SocialAuth/SocialAuth';
import { useUserInfo } from '@/hooks/useUserInfo';

export default function SignUp() {
  const router = useRouter();
  const { user } = useUserInfo();

  if (user) {
    router.push('/folder');
    return null;
  }

  return (
    <>
      <div className={styles.authPage}>
        <div className={styles.authPageContainer}>
          <AuthHeader>
            <AuthHeader.Description>이미 회원이신가요??</AuthHeader.Description>
            <AuthHeader.Link href={'/signin'}>로그인하기</AuthHeader.Link>
          </AuthHeader>
          <SignUpForm />
          <SocialAuth text='다른 방식으로 가입하기' />
        </div>
      </div>
    </>
  );
}
