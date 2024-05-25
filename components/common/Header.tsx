'use client';
import { Profile } from '@/styles/commonStyle';
import { useContext, useEffect, useState } from 'react';
import { Email, HeaderControl, HeaderInner, HeaderLogo, HeaderWrap } from './headerStyle';

import { AuthContext } from '@/lib/auto.provider';
import { instance } from '@/lib/axios';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './atoms/Button';
import LinkButton from './atoms/LinkButton';

const LOGO_IMAGE = '/assets/logo/logo.svg';

export interface IHeaderUser {
  id: number;
  email: string;
  name?: string;
  image_source?: string;
  created_at?: string;
  auth_id: string;
}

const hidePages = ['/signin', '/signup'];
const noHeaderFixed = ['/folder'];

function Header() {
  const pathName = usePathname();
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  const [isfixed, setIsFixed] = useState(true);
  const [isHideHeader, setIsHideHeader] = useState(true);
  const [userInfo, setUserInfo] = useState<IHeaderUser | null>();

  const handleUserInfo = async () => {
    const res = await instance.get(`/users/1/sample/user`);
    setUserInfo(JSON.parse(JSON.stringify(res.data)));
  };

  useEffect(() => {
    handleUserInfo();
    setIsHideHeader(hidePages.includes(pathName));
    setIsFixed(noHeaderFixed.includes(pathName));
  }, [pathName]);

  if (isHideHeader) return null;

  return (
    <HeaderWrap
      className='head__wrap'
      $position={isfixed}>
      <HeaderInner>
        <HeaderLogo className='head__logo'>
          <Link href='/'>
            <Image
              src={LOGO_IMAGE}
              alt='linkbrary'
              width={133}
              height={25}
            />
          </Link>
        </HeaderLogo>
        <HeaderControl className='head__login__box'>
          {isLoggedIn ? (
            <Button onclick={handleLogout}>
              <Profile></Profile>
              <Email>{userInfo?.email}</Email>
            </Button>
          ) : (
            <LinkButton
              href={'/login'}
              linkClass={'link--gradient link--login large'}>
              로그인
            </LinkButton>
          )}
        </HeaderControl>
      </HeaderInner>
    </HeaderWrap>
  );
}
export default Header;
