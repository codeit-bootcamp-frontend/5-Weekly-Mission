import React from "react";
import styles from "./Contents.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface OverviewContentProps {
  content: Record<string, string>;
}

export const OverviewContent: React.FC<OverviewContentProps> = ({
  content,
}) => {
  const {
    title1,
    title2,
    title3,
    description1,
    description2,
    description3,
    src,
    alt,
    gradient,
  } = content;

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>
        {title1}
        <br /> <span className={cx(gradient)}>{title2}</span>
        {title3}
      </h2>
      <p className={cx("description")}>
        {description1}
        <br />
        {description2}
        <br />
        {description3}
      </p>
      <img className={cx("image")} src={src} alt={alt} />
    </div>
  );
};
