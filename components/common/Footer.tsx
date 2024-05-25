'use client';
import { useEffect, useState } from 'react';
import { FootInner, FootNav, FootSign, FootSocial, FootWrap } from './footerStyle';
import LinkButton from './atoms/LinkButton';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const snsIconSrc = [
  {
    id: 'Facebook',
    src: '/assets/icon/icons_face.svg',
    link: 'https://www.facebook.com/?locale=ko_KR',
  },
  {
    id: 'Twitter',
    src: '/assets/icon/icons_twt.svg',
    link: 'https://twitter.com/?lang=ko',
  },
  {
    id: 'YouTube',
    src: '/assets/icon/icons_you.svg',
    link: 'https://www.youtube.com/',
  },
  {
    id: 'Instagram',
    src: '/assets/icon/icons_ins.svg',
    link: 'https://www.instagram.com/',
  },
];

const hidePages = ['/signin', '/signup'];

function Footer() {
  const pathName = usePathname();
  const [isHideFooter, setIsHideFooter] = useState(true);

  useEffect(() => {
    setIsHideFooter(hidePages.includes(pathName));
  }, [pathName]);

  if (isHideFooter) return null;

  return (
    <FootWrap className='foot__main'>
      <FootInner className='foot__inner'>
        <FootSign className='foot__sign'>
          <Link
            href='https://www.codeit.kr/'
            target='_blank'>
            ©codeit - 2024
          </Link>
        </FootSign>

        <FootNav className='d__flex foot__nav'>
          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/faq'>FAQ</Link>
        </FootNav>

        <FootSocial className='d__flex foot__btn__sns'>
          {snsIconSrc.map((sns) => (
            <LinkButton
              key={sns.id}
              $link={sns.link}
              $linkClass={`link--social-emoji`}>
              <Image
                src={sns.src}
                alt={sns.id}
                width={20}
                height={20}
              />
            </LinkButton>
          ))}
        </FootSocial>
      </FootInner>
    </FootWrap>
  );
}
export default Footer;
