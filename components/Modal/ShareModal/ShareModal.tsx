import React, { useContext, useState } from 'react';
import * as S from './ShareModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Image from 'next/image';
import Toast from '@/components/Toast/Toast';
import { UserContext } from '@/contexts/UserContext';

function ShareModal({
  folderName,
  folderId,
}: {
  folderName: string;
  folderId: string;
}) {
  const id = useContext(UserContext);
  const [toast, setToast] = useState(false);

  const shareLink = async () => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_BASE_URL}/shared/${folderId}`
    );
    setToast(true);
  };

  const shareKakao = () => {
    const { Kakao } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: '나만의 폴더를 만들고 링크를 저장해보세요!',
        imageUrl: '',
        link: {
          mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/shared/${folderId}?userId=${id}`,
        },
      },
      buttons: [
        {
          title: '링크 추가하러 가기',
          link: {
            mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/shared/${folderId}?userId=${id}`,
          },
        },
      ],
    });
  };

  const shareFacebook = () => {
    const title = '페이스북 공유하기';
    window.open(
      `https://www.facebook.com/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}/shared/${folderId}?userId=${id}`,
      title,
      'toolbar=0,status=0,width=655,height=520'
    );
  };

  return (
    <BaseModal state={'share'}>
      <S.Header>
        <p>폴더 공유</p>
        <span>{folderName}</span>
      </S.Header>
      <S.ButtonContainer>
        <S.ShareButtonBody $color="#FEE500" onClick={shareKakao}>
          <span>
            <Image
              src="/Kakao.svg"
              alt="카카오톡 아이콘"
              width={18}
              height={18}
            />
          </span>
          <p>카카오톡</p>
        </S.ShareButtonBody>
        <S.ShareButtonBody $color="#1877F2" onClick={shareFacebook}>
          <span>
            <Image
              src="/Facebook.svg"
              alt="페이스북 아이콘"
              width={18}
              height={18}
            />
          </span>
          <p>페이스북</p>
        </S.ShareButtonBody>
        <S.ShareButtonBody
          $color="rgba(157, 157, 157, 0.04)"
          onClick={shareLink}
        >
          <span>
            <Image src="/link.svg" alt="링크 아이콘" width={18} height={18} />
          </span>
          <p>링크 복사</p>
        </S.ShareButtonBody>
      </S.ButtonContainer>
      {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
    </BaseModal>
  );
}

export default ShareModal;
