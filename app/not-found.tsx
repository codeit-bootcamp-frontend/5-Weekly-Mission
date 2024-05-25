'use client';
import { TitleMs } from '@/styles/commonStyle';
import Link from 'next/link';
import { NotFoundWrap } from '../styles/errorStyle';

export default function NotFound() {
  return (
    <NotFoundWrap>
      <TitleMs>페이지 작업 중 입니다.</TitleMs>
      <div>
        <Link href='/folder'>페이지 이동</Link>
      </div>
    </NotFoundWrap>
  );
}
