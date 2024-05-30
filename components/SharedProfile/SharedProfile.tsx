import { UserInfoObj } from '@/utils/interfaces';
import styles from './SharedProfile.module.scss';
import Image from 'next/image';

interface SharedProfileProps {
  userInfo: UserInfoObj;
  folderName: string;
}

export default function SharedProfile({
  userInfo,
  folderName,
}: SharedProfileProps) {
  return (
    <div className={styles.folderInfo}>
      <div className={styles.profileWrapper}>
        <Image
          src={userInfo.image_source}
          width={60}
          height={60}
          className={styles.profileImage}
          alt={userInfo.name}
        />
        <span>@{userInfo.name}</span>
      </div>
      <span className={styles.folderName}>{folderName}</span>
    </div>
  );
}
