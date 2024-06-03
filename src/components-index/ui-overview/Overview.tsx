import styles from "./Overview.module.scss";
import classNames from "classnames/bind";
import { contents } from "./constant";
import React from "react";
import { OverviewContent } from "../ui-contents/Contents";

const cx = classNames.bind(styles);

export const Overview: React.FC<{}> = () => {
  return (
    <div className={cx("container")}>
      {contents.map((content) => (
        <OverviewContent key={content.title1} content={content} />
      ))}
    </div>
  );
};
