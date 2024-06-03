import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { route } from "@/src/components-common/util";
import { Cta } from "@/src/components-common/ui-cta";
import { Profile } from "@/src/components-user/ui-profile";
import { logoImage, text } from "@/src/components-common/util/constant";
import Image from "next/image";

const cx = classNames.bind(styles);

export interface NavigationBarProps {
  isSticky: boolean;
  showUserProfile: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  isSticky,
  showUserProfile,
}) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
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
        {showUserProfile ? (
          <Profile />
        ) : (
          <a href={route.로그인}>
            <Cta>
              <span className={cx("signin")}>{text.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
