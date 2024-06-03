import Image from "next/image";
import styles from "./Sns.module.scss";
import classNames from "classnames/bind";
import { google, kakao } from "@/src/components-common/util";

const cx = classNames.bind(styles);

export const Sns = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("text")}>다른 방식으로 가입하기</span>
      <div className={cx("icon-box")}>
        <a href={google.url}>
          <div className={cx("google")}>
            <Image
              width={22}
              height={22}
              src={google.src}
              alt={google.alt}
              style={{ objectFit: "contain" }}
            />
          </div>
        </a>
        <a href={kakao.url}>
          <div className={cx("kakao")}>
            <Image
              width={22}
              height={22}
              src={kakao.src}
              alt={kakao.alt}
              style={{ objectFit: "contain" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};
