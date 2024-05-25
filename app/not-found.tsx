'use client';
import Link from 'next/link';
import { NotFoundWrap } from '../styles/errorStyle';
import { TitleMs } from '@/styles/commonStyle';

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
