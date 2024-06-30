import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";
import AuthHeader from "@/components/Auth/Header";
import SigninForm from "@/components/Auth/SigninForm";

function Signin() {
  return (
    <div className={styles.container}>
      <AuthHeader purpose="signin" />
      <main className={styles.main}>
        <SigninForm />
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signin;
