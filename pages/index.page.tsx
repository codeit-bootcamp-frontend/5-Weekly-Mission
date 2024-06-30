import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>링크브러리</h1>
      <div className={styles.linkWrapper}>
        <Link href="/signin" className={styles.linkButton}>
          로그인
        </Link>
        <Link href="/signup" className={styles.linkButton}>
          회원가입
        </Link>
      </div>
    </main>
  );
}
