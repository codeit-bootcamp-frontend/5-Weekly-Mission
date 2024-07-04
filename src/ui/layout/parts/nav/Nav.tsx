import styles from "./Nav.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/util";
import { Cta } from "@/src/ui";
import { Profile } from "../profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import Link from "next/link";

const cx = classNames.bind(styles);

type NavigationBarProps = {
  profile: {
    imageSource: string;
    email: string;
  } | null;
  isSticky: boolean;  
};

/**
 * Nav 컴포넌트는 애플리케이션의 상단 네비게이션 바를 렌더링합니다.
 *
 * @component
 * @example
 * const profile = { imageSource: "profile.jpg", email: "user@example.com" };
 * 
 * return (
 *   <Nav profile={profile} isSticky={true} />
 * );
 *
 * @param {Object} props - 컴포넌트의 props 입니다.
 * @param {Object|null} props.profile - 사용자의 프로필 정보입니다.
 * @param {string} props.profile.imageSource - 프로필 이미지의 소스 URL입니다.
 * @param {string} props.profile.email - 사용자의 이메일 주소입니다.
 * @param {boolean} props.isSticky - 네비게이션 바가 고정(sticky)되는지 여부를 나타냅니다.
 * 
 * @returns {JSX.Element} 애플리케이션 상단에 표시되는 네비게이션 바 컴포넌트입니다.
 */

export const Nav = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <Link href={ROUTE.랜딩}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
