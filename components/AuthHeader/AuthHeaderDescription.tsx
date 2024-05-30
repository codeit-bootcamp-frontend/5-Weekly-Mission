import styles from './AuthHeader.module.css';

interface AuthHeaderDescriptionProps {
  children: React.ReactNode;
}

export default function AuthHeaderDescription({
  children,
}: AuthHeaderDescriptionProps) {
  return <span className={styles.membershipPromptText}>{children}</span>;
}
