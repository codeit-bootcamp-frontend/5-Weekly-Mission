import Image from "next/image";
import React from "react";
import facebook_icon from "@/public/img/home/facebook.svg";
import instagram_icon from "@/public/img/home/instagram.svg";
import twitter_icon from "@/public/img/home/twitter.svg";
import youtube_icon from "@/public/img/home/youtube.svg";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <p className={styles.tabletWebCorp}>©codeit - 2023</p>
        <div className={styles.policyFaqWrap}>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className={styles.socialIconContainer}>
          <Image
            src={facebook_icon}
            alt="face book icon"
            width={20}
            height={20}
          />
          <Image src={twitter_icon} alt="twitter icon" width={20} height={20} />
          <Image src={youtube_icon} alt="youtube icon" width={20} height={20} />
          <Image
            src={instagram_icon}
            alt="instagram icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className={styles.mobileCorp}>©codeit - 2023</p>
    </footer>
  );
};
