'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo_big.png';
import kakaoButton from '@/public/images/buttons/kakao.png';
import googleButton from '@/public/images/buttons/google.png';
import eyeOn from '@/public/images/eye-on.png';
import eyeOff from '@/public/images/eye-off.png';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/api/auth';
import { checkEmail } from '@/api/user';
import { AxiosError } from 'axios';

interface signUpForm {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<signUpForm>({ mode: 'onBlur' });
  const [pwType, setPwType] = useState<string>('password');
  const [pwCheckType, setPwCheckType] = useState<string>('password');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.accessToken) router.push('folder');
  }, []);

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      localStorage.accessToken = data.accessToken;
      router.push('folder');
    },
  });

  const checkDuplicate = useMutation({
    mutationFn: checkEmail,
    onSuccess: () => {
      setError('email', {});
    },
    onError: (error: AxiosError) => {
      setError('email', { message: error.message });
    },
  });

  const handleSignUp = (data: signUpForm) => {
    mutation.mutate({ email: data.email, password: data.password });
  };

  return (
    <div className='w-full h-screen bg-[#f0f6ff] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='w-full max-w-[520px] flex flex-col justify-center items-center px-10 sm:px-0'
      >
        <Image src={logo} width={210} height={38} alt='Logo' />
        <div className='mt-4 mb-8'>
          회원이 아니신가요?
          <Link href={'signin'} className='text-blue-600 hover:underline'>
            로그인 하기
          </Link>
        </div>
        <label className='w-full text-sm mb-3'>이메일</label>
        <div className='relative w-full mb-6'>
          <input
            className={`w-full h-[60px] rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-[#ccd5e3]'
            } text-base px-4 focus:outline-none focus:border-[#6d6afe] hover:border-[#6d6afe]`}
            placeholder='이메일을 입력해 주세요.'
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '올바른 이메일 주소가 아닙니다.',
              },
              validate: async (value) => {
                try {
                  await checkDuplicate.mutateAsync({ email: value });
                } catch (error) {
                  if (error instanceof AxiosError) {
                    return error.message;
                  }
                  return '알 수 없는 에러';
                }
                return true;
              },
            })}
          />
          {errors.email && (
            <span className='absolute bottom-[-20px] left-0 text-red-500 text-sm'>{errors.email.message}</span>
          )}
        </div>
        <label className='w-full text-sm mb-3'>비밀번호</label>
        <div className='relative w-full mb-6'>
          <input
            className={`w-full h-[60px] rounded-lg border ${
              errors.password ? 'border-red-500' : 'border-[#ccd5e3]'
            } text-base px-4 focus:outline-none focus:border-[#6d6afe] hover:border-[#6d6afe]`}
            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
              },
            })}
            type={pwType}
          />
          <Image
            src={pwType === 'password' ? eyeOff : eyeOn}
            width={16}
            height={16}
            alt=''
            className='absolute top-[22px] right-4 cursor-pointer'
            onClick={() => setPwType(pwType === 'password' ? 'text' : 'password')}
          />
          {errors.password && (
            <span className='absolute bottom-[-20px] left-0 text-red-500 text-sm'>{errors.password.message}</span>
          )}
        </div>
        <label className='w-full text-sm mb-3'>비밀번호 확인</label>
        <div className='relative w-full mb-8'>
          <input
            className={`w-full h-[60px] rounded-lg border ${
              errors.passwordCheck ? 'border-red-500' : 'border-[#ccd5e3]'
            } text-base px-4 focus:outline-none focus:border-[#6d6afe] hover:border-[#6d6afe]`}
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
            type={pwCheckType}
            {...register('passwordCheck', {
              validate: () => {
                if (watch('password') !== watch('passwordCheck')) {
                  return '비밀번호가 일치하지 않습니다';
                }
                return true;
              },
            })}
          />
          <Image
            src={pwCheckType === 'password' ? eyeOff : eyeOn}
            width={16}
            height={16}
            alt=''
            className='absolute top-[22px] right-4 cursor-pointer'
            onClick={() => setPwCheckType(pwCheckType === 'password' ? 'text' : 'password')}
          />
          {errors.passwordCheck && (
            <span className='absolute bottom-[-20px] left-0 text-red-500 text-sm'>{errors.passwordCheck.message}</span>
          )}
        </div>
        <button
          type='submit'
          className='w-full h-[53px] rounded-lg bg-gradient-to-r from-[#6d6afe] to-[#6ae3fe] text-white text-center leading-[53px] text-lg font-bold cursor-pointer mb-8'
        >
          회원가입
        </button>
        <div className='w-full h-[66px] p-3 rounded-lg flex justify-between items-center text-sm bg-[#e7effb] border border-[#ccd5e3]'>
          <div>다른 방식으로 가입하기</div>
          <div className='flex gap-4'>
            <Link href='https://www.google.com'>
              <Image src={googleButton} width={42} height={42} alt='google button' />
            </Link>
            <Link href='https://www.kakaocorp.com/page'>
              <Image src={kakaoButton} width={42} height={42} alt='kakao button' />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
