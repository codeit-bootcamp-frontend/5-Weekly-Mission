import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useFetchUser } from "@/hooks/useUser";

const Header = () => {
    const { data, loading, error } = useFetchUser();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        window.location.reload();
    };

    return (
        <header className={styles.navbar}>
            <Link href='/' className={styles.logo} tabIndex={0}>
                <Image src='/assets/logo.svg' width={133} height={24} alt='Linkbrary' />
            </Link>
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <div className={styles.profile}>
                    <Image
                        src={data.image_source}
                        width={28}
                        height={28}
                        alt='profile'
                        className={styles.profile_img}
                    />
                    <span className={styles.email}>{data.email}</span>
                    <button onClick={handleLogout} className={styles.login_button}>
                        로그아웃
                    </button>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Link href='/signin' className={styles.login_button}>
                    로그인
                </Link>
            )}
        </header>
    );
};

export default Header;
