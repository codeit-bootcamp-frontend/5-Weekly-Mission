import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "../Input/Input";
import { useCheckEmail, useSignUp } from "../../hooks/useUser";
import { validateEmail, validatePassword } from "../../utils/validate";
import { useRouter } from "next/router";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");

    const [emailStatus] = useCheckEmail({ email });
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            router.push("/folder");
        }
    }, [router]);

    const handleEmailBlur = () => {
        setEmailError(emailStatus || "");
    };

    const handleSubmit = async () => {
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError("올바른 이메일 주소가 아닙니다.");
            valid = false;
        } else if (emailStatus) {
            setEmailError(emailStatus);
            valid = false;
        } else {
            setEmailError("");
        }

        if (!validatePassword(password)) {
            setPasswordError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (password !== passwordCheck) {
            setPasswordCheckError("비밀번호가 일치하지 않아요.");
            valid = false;
        } else {
            setPasswordCheckError("");
        }

        if (valid) {
            try {
                await useSignUp(email, password);
                const accessToken = localStorage.getItem("accessToken");
                if (accessToken) {
                    router.push("/folder");
                } else {
                    console.error("No access token found");
                }
            } catch (error) {
                console.error("sign-up error: ", error);
                setEmailError("이메일을 확인해 주세요.");
                setPasswordError("비밀번호를 확인해 주세요.");
                setPasswordCheckError("비밀번호를 확인해 주세요.");
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
                        이미 회원이신가요?{" "}
                        <Link href='/signin'>
                            <span>로그인 하기</span>
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
                            onBlur={handleEmailBlur}
                        />
                    </div>
                    <div className={styles.input_item}>
                        <label htmlFor='password'>비밀번호</label>
                        <Input
                            id='password'
                            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            errorMessage={passwordError}
                            onBlur={() => {
                                if (!validatePassword(password)) {
                                    setPasswordError(
                                        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
                                    );
                                } else {
                                    setPasswordError("");
                                }
                            }}
                        />
                    </div>
                    <div className={styles.input_item}>
                        <label htmlFor='password_check'>비밀번호 확인</label>
                        <Input
                            id='password_check'
                            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
                            type='password'
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            errorMessage={passwordCheckError}
                            onBlur={() => {
                                if (password !== passwordCheck) {
                                    setPasswordCheckError("비밀번호가 일치하지 않아요.");
                                } else {
                                    setPasswordCheckError("");
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
                    회원가입
                </button>
                <div className={styles.other_div}>
                    <p>다른 방식으로 가입하기</p>
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
                                src='/assets/kakaologin.svg'
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

export default SignUp;
