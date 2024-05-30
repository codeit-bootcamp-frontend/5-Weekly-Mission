import React, { forwardRef } from 'react';
import Button from '@/components/Button/Button';
import linkIcon from '@/public/assets/images/link.svg';
import styles from './AddLinkBar.module.scss';
import Image from 'next/image';

export default function AddLinkBar() {
  return (
    <div className={styles.addLinkBarContainer}>
      <div className={styles.addLinkBar}>
        <div className={styles.inputBox}>
          <Image
            className={styles.linkIcon}
            src={linkIcon}
            alt='링크 추가하기'
            width={20}
            height={20}
          />
          <input
            className={styles.linkInput}
            placeholder='링크를 추가해 보세요'
          />
        </div>
        <Button>추가하기</Button>
      </div>
    </div>
  );
}
