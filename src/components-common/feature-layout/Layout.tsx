import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { Footer } from "@/src/components-common/ui-footer";
import { NavigationBar } from "@/src/components-common/ui-navigation-bar";
import React from "react";

const cx = classNames.bind(styles);

type LayoutProps = React.PropsWithChildren<{
  isSticky: boolean;
  showUserProfile: boolean;
}>;

export const Layout: React.FC<LayoutProps> = ({
  children,
  isSticky = true,
  showUserProfile,
}) => {
  return (
    <div>
      <NavigationBar isSticky={isSticky} showUserProfile={showUserProfile} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
