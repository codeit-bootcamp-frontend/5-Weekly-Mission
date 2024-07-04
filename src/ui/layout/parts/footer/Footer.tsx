import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/util";
import { TEXT } from "./constant";
import { forwardRef } from "react";

const cx = classNames.bind(styles);

/**
 * Footer 컴포넌트는 애플리케이션의 하단에 표시되는 footer를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <Footer ref={footerRef} />
 * );
 *
 * @param {React.Ref<HTMLElement>} ref - 푸터 요소에 전달할 ref입니다.
 *
 * @returns {JSX.Element} 애플리케이션 하단에 표시되는 푸터 컴포넌트입니다.
 */

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>{TEXT.codeit}</span>
        <div className={cx("links")}>
          <a className={cx("link")} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className={cx("link")} href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className={cx("sns")}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
});
