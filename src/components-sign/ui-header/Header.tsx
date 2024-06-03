import { logoImage, route } from "@/src/components-common/util";
import Image from "next/image";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Header = () => {
  return (
    <header className={cx("container")}>
      <a href={route.랜딩}>
        <div className={cx("logo")}>
          <Image
            fill
            src={logoImage}
            alt="Linkbrary 서비스 로고"
            style={{ objectFit: "contain" }}
          />
        </div>
      </a>
      <div className={cx("box")}>
        <span className={cx("text")}>이미 회원이신가요?</span>
        <a href={route.로그인}>
          <span className={cx("link")}>로그인 하기</span>
        </a>
      </div>
    </header>
  );
};
