import React, { useEffect, useState } from "react";
import styles from "./SignIn.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "../Input/Input";
import { useSignIn } from "../../hooks/useUser";
import { validateEmail } from "../../utils/validate";
import { useRouter } from "next/router";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            router.push("/folder");
        }
    }, [router]);

    const handleSubmit = async () => {
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError("올바른 이메일 주소가 아닙니다.");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("비밀번호를 확인해 주세요.");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (valid) {
            try {
                await useSignIn(email, password);
                const accessToken = localStorage.getItem("accessToken");
                if (accessToken) {
                    router.push("/folder");
                } else {
                    console.error("No access token found");
                }
            } catch (error) {
                console.error("sign-in error: ", error);
                setEmailError("이메일을 확인해 주세요.");
                setPasswordError("비밀번호를 확인해 주세요.");
                valid = false;
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <main className={styles.body}>
            <div className={styles.sign_container}>
                <div className={styles.logo_container}>
                    <Link href='/' className={styles.logo}>
                        <Image src='/assets/logo.svg' width={210} height={38} alt='logo' />
                    </Link>
                    <p className={`${styles.question_p} p`}>
                        회원이 아니신가요?　
                        <Link href='/signup'>
                            <span>회원 가입하기</span>
                        </Link>
                    </p>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.input_item}>
                        <label htmlFor='email'>이메일</label>
                        <Input
                            id='email'
                            placeholder='이메일을 입력해 주세요'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            errorMessage={emailError}
                            onBlur={() => {
                                if (!validateEmail(email)) {
                                    setEmailError("올바른 이메일 주소가 아닙니다.");
                                } else {
                                    setEmailError("");
                                }
                            }}
                        />
                    </div>
                    <div className={styles.input_item}>
                        <label htmlFor='password'>비밀번호</label>
                        <Input
                            id='password'
                            placeholder='비밀번호를 입력해 주세요.'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            errorMessage={passwordError}
                            onBlur={() => {
                                if (!password) {
                                    setPasswordError("비밀번호를 확인해 주세요.");
                                } else {
                                    setPasswordError("");
                                }
                            }}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
                <button
                    className={`${styles.submit_btn} button`}
                    onClick={handleSubmit}
                    onKeyDown={handleKeyDown}
                >
                    로그인
                </button>
                <div className={styles.other_div}>
                    <p>소셜 로그인</p>
                    <div className={styles.other_icons}>
                        <Link href='https://www.google.com/'>
                            <Image
                                src='/assets/google.svg'
                                width={42}
                                height={42}
                                alt='google_icon'
                            />
                        </Link>
                        <Link href='https://www.kakaocorp.com/page/'>
                            <Image
                                src='/assets/kakaoLogin.svg'
                                width={42}
                                height={42}
                                alt='kakao_login_icon'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignIn;
