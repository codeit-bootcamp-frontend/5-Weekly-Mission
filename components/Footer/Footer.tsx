import Link from 'next/link';
import Image from 'next/image';
import facebookLogo from '@/public/assets/images/facebook_logo.svg';
import twitterLogo from '@/public/assets/images/twitter_logo.svg';
import youtubeLogo from '@/public/assets/images/youtube_logo.svg';
import instagramLogo from '@/public/assets/images/instagram_logo.svg';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerBar}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.policyBar}>
          <Link href='/' className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href='/' className={styles.footerLink}>
            FAQ
          </Link>
        </div>
        <ul className={styles.infoLinkList}>
          <li>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className={styles.infoLinkLogo}>
                <Image src={facebookLogo} alt='Facebook link logo' fill />
              </div>
            </Link>
          </li>
          <li>
            <Link
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className={styles.infoLinkLogo}>
                <Image src={twitterLogo} alt='Twitter link logo' fill />
              </div>
            </Link>
          </li>
          <li>
            <Link
              href='https://www.youtube.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className={styles.infoLinkLogo}>
                <Image src={youtubeLogo} alt='Youtube link logo' fill />
              </div>
            </Link>
          </li>
          <li>
            <Link
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className={styles.infoLinkLogo}>
                <Image src={instagramLogo} alt='Instagram link logo' fill />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
