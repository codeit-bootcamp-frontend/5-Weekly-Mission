import Image from "next/image";
import styles from "./Sns.module.scss";
import classNames from "classnames/bind";
import { google, kakao } from "@/src/components-common/util";

const cx = classNames.bind(styles);

export const Sns = () => {
  return (
    <div>
      <div>
        <span>다른 방식으로 가입하기</span>
      </div>
      {/* <a href={kakao.url}>
        <div className={cx("icon")}>
          <Image
            fill
            src={kakao.src}
            alt={kakao.alt}
            style={{ objectFit: "contain" }}
          />
        </div>
      </a>
      <a href={google.url}>
        <div className={cx("icon")}>
          <Image
            fill
            src={google.src}
            alt={google.alt}
            style={{ objectFit: "contain" }}
          />
        </div>
      </a> */}
    </div>
  );
};
