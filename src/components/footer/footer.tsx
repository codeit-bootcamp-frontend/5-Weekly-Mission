import styles from "./footer.module.css";
import FacebookImg from "@/public/assets/facebook.svg";
import InstagramImg from "@/public/assets/instagram.svg";
import TwitterImg from "@/public/assets/twitter.svg";
import YoutubeImg from "@/public/assets/youtube.svg";
import Link from 'next/link';
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__rights}>
          <p>©codeit - 2024</p>
        </div>
        <div className={styles.footer__links}>
          <Link href="privacy.html" className={styles.link_to_privacy}>
            Privacy Policy
          </Link>
          <Link href="faq.html" className={styles.link_to_faq}>
            FAQ
          </Link>
        </div>
        <div className={styles.footer_sns_link}>
          <Link target="_blank" href="https://www.facebook.com/">
            <Image src={FacebookImg} alt="페이스북 연결 페이지" />
          </Link>
          <Link href="https://www.twitter.com">
            <Image src={TwitterImg} alt="트위터(X) 연결페이지" />
          </Link>
          <Link href="https://www.youtube.com">
            <Image src={YoutubeImg} alt="유튜브 연결 페이지" />
          </Link>
          <Link href="https://www.instagram.com">
            <Image src={InstagramImg} alt="인스타그램 연결 페이지" />
          </Link>
        </div>
      </div>
      <div className={styles.footer__rights__mobile}>
        <p>©codeit - 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
