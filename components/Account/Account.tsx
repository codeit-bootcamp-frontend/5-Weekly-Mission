import styles from './Account.module.scss';

interface AccountProps {
  profileImgSource?: string;
  userEmail: string;
}

export default function Account({ profileImgSource, userEmail }: AccountProps) {
  return (
    <div className={styles.account}>
      <img
        src={profileImgSource}
        alt='User Profile'
        className={styles.userProfileImg}
      />
      <span className={styles.userEmail}>{userEmail}</span>
    </div>
  );
}
