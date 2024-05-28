import Link from "next/link";
import styles from "../styles/notFound.module.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className={styles.not_found}>
                <Image
                    src='https://cdn-icons-png.flaticon.com/128/1466/1466643.png'
                    alt='notFound'
                    width={100}
                    height={100}
                />
                <div className={styles.content}>찾을 수 없는 페이지입니다.</div>
                <Link href='/'>
                    <button className={`${styles.button} button`}>홈으로 이동</button>
                </Link>
            </div>
            <Footer />
        </>
    );
}
