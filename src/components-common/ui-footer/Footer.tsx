import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import {
  facebook,
  instagram,
  route,
  twitter,
  youtube,
} from "@/src/components-common/util";
import { footerText } from "./constant";
import React from "react";
import Image from "next/image";

const cx = classNames.bind(styles);

type FooterProps = React.PropsWithChildren<{}>;

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>{footerText.codeit}</span>
        <div className={cx("links")}>
          <a className={cx("link")} href={route.개인정보처리방침}>
            {footerText.privacyPolicy}
          </a>
          <a className={cx("link")} href={route.FAQ}>
            {footerText.faq}
          </a>
        </div>
        <div className={cx("sns")}>
          <a href={facebook.url} target="_blank" rel="noopener noreferrer">
            <Image
              fill
              src={facebook.src}
              alt={facebook.alt}
              style={{ objectFit: "contain" }}
            />
          </a>
          <a href={twitter.url} target="_blank" rel="noopener noreferrer">
            <Image
              fill
              src={twitter.src}
              alt={twitter.alt}
              style={{ objectFit: "contain" }}
            />
          </a>
          <a href={youtube.url} target="_blank" rel="noopener noreferrer">
            <Image
              fill
              src={youtube.src}
              alt={youtube.alt}
              style={{ objectFit: "contain" }}
            />
          </a>
          <a href={instagram.url} target="_blank" rel="noopener noreferrer">
            <Image
              fill
              src={instagram.src}
              alt={instagram.alt}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
