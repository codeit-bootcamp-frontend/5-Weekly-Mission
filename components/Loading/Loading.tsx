import Image from 'next/image';
import * as S from './Loading.styled';

function Loading() {
  return (
    <S.LoadingBody>
      <S.LoadingImage>
        <Image src="/LoadingIcon.svg" alt="로딩 아이콘" fill />
      </S.LoadingImage>
    </S.LoadingBody>
  );
}

export default Loading;
