import React from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Index = () => {
    return (
        <>
            <Header />
            <div id='root' className={styles.index_container}>
                <p className={styles.title}>
                    <span className={styles.title_gra}>세상의 모든 정보</span>를 <br />
                    쉽게 저장하고 관리해 보세요
                </p>
                <Link href='/signup'>
                    <button className={`${styles.button} button`}>링크 추가하기</button>
                </Link>
                <Image
                    src='/assets/landing.svg'
                    width={1200}
                    height={590}
                    alt='landing Image'
                    layout='responsive'
                />
            </div>
            <Footer />
        </>
    );
};

export default Index;
