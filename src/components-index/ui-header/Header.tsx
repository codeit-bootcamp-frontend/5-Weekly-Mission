import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { Cta } from "@/src/components-common/ui-cta";
import { text } from "@/src/components-common/util";

const cx = classNames.bind(styles);

export const Header: React.FC<{}> = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("text")}>
          <span className={cx("gradient")}>세상의 모든 정보</span>를
          <br />
          쉽게 저장하고&nbsp;
          <br className={cx("line-break")} />
          관리해 보세요
        </div>
        {/* TODO: 일단 Ui 만 구현. 추후 링크 추가하기 기능 추가 */}
        <Cta>
          <span className={cx("add-link")}>{text.addLink}</span>
        </Cta>
        <img
          src={"/images/header.png"}
          alt="서비스 소개 이미지"
          className={cx("image")}
        />
      </div>
    </header>
  );
};
