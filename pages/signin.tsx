import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/public/assets/icon.png';
import googleIcon from '@/public/assets/google.png';
import kakaoIcon from '@/public/assets/kakaotalk.svg';
import styles from '@/styles/signin.module.css'; // 모듈 CSS 파일 가져오기

const Signin: React.FC = () => {
  return (
    <div className={styles.signin_body}>
      <div className={styles.login_main}>
        <form className={styles.signin_form} action="./folder.html" method="post">
          <Link href="/" className={styles.to_home}>
            <Image src={Icon} alt="Linkbrary 아이콘" />
          </Link>

          <div className={styles.ask_signup}>
            <span className={styles.to_signup}>회원이 아니신가요? </span>
            <Link href="/signup"> 회원 가입하기</Link>
          </div>

          <div className={styles.inputforms}>
            <div className={styles.loginform}>
              <label className={styles.label_email}>이메일</label>
              <input name="email" type="email" autoComplete="off" className={styles.email} required />
              <div className={styles.Emailerrormessage}></div>
            </div>

            <div className={styles.passwordform}>
              <label className={styles.label_password}>비밀번호</label>
              <div className={styles.main}>
                <input name="password" type="password" className={styles.password} required />
                <i className="fa fa-eye fa-lg"></i>
              </div>
              <div className={styles.PWerrormessage}></div>
            </div>
          </div>

          <button className={styles.login_button} type="submit"> 로그인 </button>
        </form>

        <div className={styles.sns_login}>
          <p>소셜 로그인</p>
          <div className={styles.SNS}>
            <a href="https://www.google.com">
              <Image src={googleIcon} alt="google 로그인" className={styles.google} />
            </a>
            <a href="https://www.kakaotalk.com">
              <Image src={kakaoIcon} alt="kakaotalk 로그인" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
