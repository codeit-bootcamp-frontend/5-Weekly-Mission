import Link from 'next/link';
import Image from 'next/image';
import styles from './AuthHeader.module.css';
import AuthHeaderLink from './AuthHeaderLink';
import AuthHeaderDescription from './AuthHeaderDescription';
interface AuthHeaderProps {
  children: React.ReactNode;
}

export default function AuthHeader({ children }: AuthHeaderProps) {
  return (
    <div className={styles.authPageHeader}>
      <Link href='/' className={styles.logo}>
        <Image src={'/assets/images/logo.svg'} fill alt='Linkbrary' />
      </Link>

      <div className={styles.membershipPromptBar}>{children}</div>
    </div>
  );
}

AuthHeader.Description = AuthHeaderDescription;
AuthHeader.Link = AuthHeaderLink;
