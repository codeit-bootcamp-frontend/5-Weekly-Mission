import Link, { LinkProps } from 'next/link';
import styles from './AuthHeader.module.css';

interface AuthHeaderLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function AuthHeaderLink({
  href,
  children,
}: AuthHeaderLinkProps) {
  return (
    <Link href={href} className={styles.membershipPromptLink}>
      {children}
    </Link>
  );
}
