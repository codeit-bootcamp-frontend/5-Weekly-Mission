import styles from "./profile.module.css";

interface Props {
  email : string;
  img : string;
}

function Profile({ email, img }: Props) {
  return (
    <div className={styles.profile}>
      <img src={img} className={styles.profileImg} alt="프로필 이미지" />
      <p className={styles.profileEmail}>{email}</p>
    </div>
  );
}

export default Profile;
