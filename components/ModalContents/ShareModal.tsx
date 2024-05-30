import facebook from '@/public/assets/images/facebook.svg';
import share from '@/public/assets/images/link.svg';
import kakao from '@/public/assets/images/kakao.svg';
import styles from './ModalContents.module.scss';
import { facebookShare } from '@/utils/shareFunctions/facebooShare';
import { kakaoShare } from '@/utils/shareFunctions/kakaoshare';
import { useState } from 'react';
import { ModalContentProps } from '@/utils/interfaces';
import Image from 'next/image';

interface ShareButtonProps {
  text: string;
  icon: string;
  onClick: () => void;
  id: number;
}

function noop() {}

const SHARE_BUTTONS_INFO: { [key: string]: ShareButtonProps } = {
  kakao: { text: '카카오톡', icon: kakao, onClick: noop, id: 0 },
  facebook: {
    text: '페이스북',
    icon: facebook,
    onClick: noop,
    id: 1,
  },
  copyLink: { text: '링크 복사', icon: share, onClick: noop, id: 2 },
};

export default function ShareModal({
  headerText,
  subHeaderText,
  folderNum,
}: ModalContentProps) {
  const [showToast, setShowToast] = useState(false);

  const SHARE_URL = `https://5-weekly-mission-eta-two.vercel.app/shared/${folderNum}`;

  const handleCopyLinkClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  SHARE_BUTTONS_INFO.kakao.onClick = () => kakaoShare(SHARE_URL);
  SHARE_BUTTONS_INFO.facebook.onClick = () => facebookShare(SHARE_URL);
  SHARE_BUTTONS_INFO.copyLink.onClick = handleCopyLinkClipBoard;

  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>{headerText}</span>
        <span className={styles.modalSubHeader}>{subHeaderText}</span>
      </div>
      <ul className={styles.shareButtonBar}>
        {Object.entries(SHARE_BUTTONS_INFO).map(([key, item]) => (
          <li key={item.id}>
            <div className={styles.shareButtonWrapper}>
              <button className={styles.shareButton} onClick={item.onClick}>
                <Image src={item.icon} alt={item.text} fill />
              </button>
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={`${styles.toast} ${showToast ? styles.show : ''}`}>
        URL이 복사되었습니다
      </div>
    </div>
  );
}
