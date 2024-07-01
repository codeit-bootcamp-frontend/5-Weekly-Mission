'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo_big.png';
import kakaoButton from '@/public/images/buttons/kakao.png';
import googleButton from '@/public/images/buttons/google.png';
import eyeOn from '@/public/images/eye-on.png';
import eyeOff from '@/public/images/eye-off.png';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signin, authRequest } from '@/api/auth';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<authRequest>({ mode: 'onBlur' });
  const [pwType, setPwType] = useState<string>('password');
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      localStorage.accessToken = data.accessToken;
      router.push('folder');
    },
    onError: () => {
      setError('email', { message: '이메일을 확인해 주세요.' });
      setError('password', { message: '비밀번호를 확인해 주세요.' });
    },
  });

  useEffect(() => {
    if (localStorage.accessToken) router.push('folder');
  }, []);

  const handleEyeClick = () => {
    setPwType(pwType === 'password' ? 'text' : 'password');
  };

  const handleSignIn = (data: authRequest) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className='w-full h-screen bg-[#f0f6ff] flex justify-center items-center'
    >
      <div className='w-full max-w-[520px] flex flex-col justify-center items-center px-10 sm:px-0'>
        <Image src={logo} width={210} height={38} alt='Logo' />
        <div className='mt-4 mb-8'>
          회원이 아니신가요?
          <Link href={'signup'} className='text-blue-600 hover:underline'>
            회원 가입하기
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
            })}
          />
          {errors.email && (
            <span className='absolute bottom-[-20px] left-0 text-red-500 text-sm'>{errors.email.message}</span>
          )}
        </div>
        <label className='w-full text-sm mb-3'>비밀번호</label>
        <div className='relative w-full mb-8'>
          <input
            className={`w-full h-[60px] rounded-lg border ${
              errors.password ? 'border-red-500' : 'border-[#ccd5e3]'
            } text-base px-4 focus:outline-none focus:border-[#6d6afe] hover:border-[#6d6afe]`}
            placeholder='비밀번호를 입력해 주세요.'
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
            })}
            type={pwType}
          />
          <Image
            src={pwType === 'password' ? eyeOff : eyeOn}
            width={16}
            height={16}
            alt=''
            className='absolute top-[22px] right-4 cursor-pointer'
            onClick={handleEyeClick}
          />
          {errors.password && (
            <span className='absolute bottom-[-20px] left-0 text-red-500 text-sm'>{errors.password.message}</span>
          )}
        </div>
        <button
          type='submit'
          className='w-full h-[53px] rounded-lg bg-gradient-to-r from-[#6d6afe] to-[#6ae3fe] text-white text-center leading-[53px] text-lg font-bold cursor-pointer mb-8'
        >
          로그인
        </button>
        <div className='w-full h-[66px] p-3 rounded-lg flex justify-between items-center text-sm bg-[#e7effb] border border-[#ccd5e3]'>
          <div>소셜 로그인</div>
          <div className='flex gap-4'>
            <Link href='https://www.google.com'>
              <Image src={googleButton} width={42} height={42} alt='google button' />
            </Link>
            <Link href='https://www.kakaocorp.com/page'>
              <Image src={kakaoButton} width={42} height={42} alt='kakao button' />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
