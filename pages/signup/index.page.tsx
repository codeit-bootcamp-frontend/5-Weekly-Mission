import React from "react";
import SocialAuthBox from "@/components/SocialAuthBox";
import AuthHeader from "@/components/Auth/Header";
import SignupForm from "@/components/Auth/SignupForm";
import styles from "@/styles/Auth.module.css";

function Signup() {
  return (
    <div className={styles.container}>
      <AuthHeader purpose="signup" />
      <main className={styles.main}>
        <SignupForm />
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signup;
