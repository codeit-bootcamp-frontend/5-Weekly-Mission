'use client';

import facebook from '@/public/images/footer/facebook.png';
import twitter from '@/public/images/footer/twitter.png';
import youtube from '@/public/images/footer/youtube.png';
import instagram from '@/public/images/footer/instagram.png';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className='relative z-[999] box-border h-[160px] bg-[#111322] text-[#676767] lg:flex lg:justify-between lg:pt-[35px] lg:px-[104px] lg:pb-0 grid grid-areas-footer pt-[32px] px-[32px] pb-0'>
      <span className='lg:flex lg:flex-col lg:justify-end lg:pb-[32px] grid-area-f1'>©codeit - 2023</span>
      <div className='flex gap-[30px] grid-area-f2'>
        <Link href='privacy' target='_blank' className='text-[#676767] no-underline'>
          Privacy Policy
        </Link>
        <Link href='faq' target='_blank' className='text-[#676767] no-underline'>
          FAQ
        </Link>
      </div>
      <div className='flex gap-[10px] grid-area-f3'>
        <Link href='https://www.facebook.com/' target='_blank'>
          <Image src={facebook} width={20} height={20} alt='facebookIcon' />
        </Link>
        <Link href='https://twitter.com/' target='_blank'>
          <Image src={twitter} width={20} height={20} alt='twitterIcon' />
        </Link>
        <Link href='https://www.youtube.com/' target='_blank'>
          <Image src={youtube} width={20} height={20} alt='youtubeIcon' />
        </Link>
        <Link href='https://www.instagram.com/' target='_blank'>
          <Image src={instagram} width={20} height={20} alt='instagramIcon' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
