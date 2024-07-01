'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import noImage from '@/public/images/noImage.jpg';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/api/user';

interface NavProps {
  userData?: User;
}

function Nav({ userData }: NavProps) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      router.push('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className='box-border w-full flex justify-center items-center bg-[#f0f6ff]'>
      <div className='flex justify-between items-center h-full w-[100%] px-8 tablet:w-[700px] pc:w-[1060px]'>
        <Link href='/'>
          <Image
            src={logo}
            width={133}
            height={25}
            priority
            alt='LogoImage'
            fetchPriority='high'
            className='w-[89px] h-[16px] tablet:w-[133px] tablet:h-[25px]'
          />
        </Link>
        {userData ? (
          <div className='flex'>
            <Image
              src={userData.image_source || noImage}
              width={28}
              height={28}
              fetchPriority='high'
              alt='프로필'
              className='h-[28px] rounded-full'
            />
            <span className='line-height-[28px] ml-2 hidden mobile:inline'>{userData.email}</span>
          </div>
        ) : (
          <Link href='/signin'>
            <button className='inline-block w-[128px] h-[53px] rounded-[8px] bg-gradient-to-r from-[#6d6afe] to-[#6ae3fe] text-white text-center leading-[53px] text-[18px] font-[600] no-underline border-none cursor-pointer mobile:w-[80px] mobile:h-[36px] mobile:leading-[36px] mobile:text-[14px]'>
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
