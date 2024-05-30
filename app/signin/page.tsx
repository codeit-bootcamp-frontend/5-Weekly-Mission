'use client';

import { useRouter } from 'next/navigation';

import styles from '@/styles/AuthPage.module.css';
import AuthHeader from '@/components/AuthHeader/AuthHeader';
import SignInForm from '@/components/SignInForm/SignInForm';
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
            <AuthHeader.Description>회원이 아니신가요?</AuthHeader.Description>
            <AuthHeader.Link href={'/signup'}>회원 가입하기</AuthHeader.Link>
          </AuthHeader>
          <SignInForm />
          <SocialAuth text='소셜 로그인' />
        </div>
      </div>
    </>
  );
}
