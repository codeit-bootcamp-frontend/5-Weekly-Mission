import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from "@/public/assets/icon.png";
import googleIcon from '@/public/assets/google.png';
import kakaoIcon from '@/public/assets/kakaotalk.svg';
import styles from '@/styles/signup.module.css'; // 모듈 CSS 파일 가져오기

const Signup: React.FC = () => {
  return (
    <div className={styles.signup_body}>
      <div className={styles.signup_main}>
        <form className={styles.signup_form}>
          <div className={styles.siginup_form__container}>
            <div>
              <Link href="/" className={styles.to_home}>
                <Image src={Icon} alt="Linkbrary 아이콘" />
              </Link>
              <div className={styles.ask_signin}>
                <span className={styles.to_signin}>이미 회원이신가요? </span>
                <Link href="/signin"> 로그인 하기</Link>
              </div>
            </div>
            <div className={styles.inputforms}>
              <div>
                <div className={styles.loginform}>
                  <label className={styles.label}>이메일</label>
                  <input name="email" type="email" autoComplete="off" className={styles.email} required />
                  <div className={styles.Emailerrormessage}></div>
                </div>
                <div className={styles.passwordform}>
                  <label className={styles.label}>비밀번호</label>
                  <div className={styles.main}>
                    <input name="password" type="password" className={styles.password} required />
                    <i className="fa fa-eye fa-lg"></i>
                  </div>
                  <div className={styles.PWerrormesage}></div>
                </div>
                <div className={styles.check_passwordform}>
                  <label className={styles.label}>비밀번호 확인</label>
                  <div className={styles.main}>
                    <input name="password" type="password" className={styles.checkPassword} required />
                    <i className="fa fa-eye fa-lg"></i>
                  </div>
                  <div className={styles.PWerrormesage}></div>
                </div>
              </div>
              <button className={styles.signup_button}> 회원가입 </button>
            </div>
          </div>
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
      <script src="js/sign.js"></script>
      <script src="js/signup_auth.js"></script>
    </div>
  );
}

export default Signup;
//test
