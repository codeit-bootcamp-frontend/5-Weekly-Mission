import React, { ReactNode } from "react";
import styles from "./SignLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SignLayoutProps {
  [props: string]: ReactNode;
}

export const SignLayout: React.FC<SignLayoutProps> = ({
  header,
  form,
  sns,
}) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {header}
        {form}
        {sns}
      </div>
    </div>
  );
};
