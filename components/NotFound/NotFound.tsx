import { Button } from '@/components/Button/Button';
import * as S from './NotFound.styled';
import Link from 'next/link';

function NotFound() {
  return (
    <S.Body>
      <p>존재하지 않는 폴더입니다!</p>
      <p>다른 폴더를 선택해주세요!</p>
    </S.Body>
  );
}

export default NotFound;
