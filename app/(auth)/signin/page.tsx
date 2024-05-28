'use client';
import AuthLink from '@/components/Auth/AuthLink';
import AuthLogo from '@/components/Auth/AuthLogo';
import AuthRegister from '@/components/Auth/AuthRegister';
import Button from '@/components/common/atoms/Button';
import { ErrorText, FormRowBox, FormWrap } from '@/components/join/formStyle';
import { loginForm } from '@/components/join/interface';
import { AuthContext } from '@/lib/auto.provider';
import { instance } from '@/lib/axios';
import { Relative } from '@/styles/commonStyle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const router = useRouter();
  const { handleLogin } = useContext(AuthContext);
  const [IsVisibility, setIsVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<loginForm>({ mode: 'onBlur' });

  const handleLoginCheck = async (email: loginForm['email'], password: loginForm['password']) => {
    try {
      const res = await instance.post('/sign-in', { email, password });
      const { data } = res;
      if (data) {
        handleLogin(data.data.accessToken);
        router.push('/folder');
      }
    } catch {
      setError('email', { message: '이메일을 확인해 주세요.' });
      setError('password', { message: '비밀번호를 확인해 주세요.' });
      return;
    }
  };

  const handleValid = (data: loginForm) => {
    const { email, password } = data;
    handleLoginCheck(email, password);
  };

  return (
    <>
      <AuthLogo />
      <AuthLink
        desc={'회원이 아니신가요?'}
        href={`/signup`}
        btnText={'회원 가입하기'}
      />
      <FormWrap>
        <form onSubmit={handleSubmit(handleValid)}>
          <FormRowBox className='input__id'>
            <label
              htmlFor='input__id-element'
              className='input__id-label'>
              이메일
            </label>
            <input
              {...register('email', {
                required: '이메일을 입력해 주세요.',
                pattern: {
                  value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
                  message: '올바른 이메일 주소가 아닙니다',
                },
              })}
              type='email'
              name='email'
              id='input__id-element'
              className={errors.email ? 'error' : ''}
            />
            <ErrorText className='error__text'>{errors.email?.message}</ErrorText>
          </FormRowBox>
          <FormRowBox className='input__password'>
            <label
              htmlFor='input__password-element'
              className='input__password-label'>
              비밀번호
            </label>
            <Relative>
              <input
                {...register('password', {
                  required: '비밀번호를 입력해 주세요',
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                  },
                })}
                type={IsVisibility ? 'text' : 'password'}
                name='password'
                id='input__password-element'
                className={errors.password ? 'error' : ''}
              />
              <Button
                btnClass={'button--input-password'}
                onclick={() => setIsVisibility((prev) => !prev)}>
                <Image
                  src={`/assets/icon/icon-eye-${IsVisibility ? 'on' : 'off'}.svg`}
                  alt='비밀번호 보기'
                  width={16}
                  height={16}
                />
              </Button>
            </Relative>
            <ErrorText className='error__text'>{errors.password?.message}</ErrorText>
          </FormRowBox>
          <Button
            type='submit'
            btnClass={`button--gradient large btn_login`}>
            로그인
          </Button>
        </form>
      </FormWrap>
      <AuthRegister title='소셜 로그인' />
    </>
  );
}
