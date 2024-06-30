import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export type TProps = "signin" | "signup";
interface AuthHeaderProps {
  purpose: TProps;
}

function AuthHeader({ purpose }: AuthHeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.homeLink} href="/">
        <Image
          fill
          src="/images/Linkbrary.png"
          alt="logo"
          style={{ objectFit: "contain" }}
          priority
        />
      </Link>
      <div className={styles.headerSecondLine}>
        {(purpose === "signin" && (
          <>
            <span>회원이 아니신가요?</span>
            <Link className={styles.toSignupLink} href="/signup">
              회원 가입하기
            </Link>
          </>
        )) ||
          (purpose === "signup" && (
            <>
              <span>이미 회원이신가요?</span>
              <Link className={styles.toSignupLink} href="/signin">
                로그인 하기
              </Link>
            </>
          ))}
      </div>
    </header>
  );
}

export default AuthHeader;
