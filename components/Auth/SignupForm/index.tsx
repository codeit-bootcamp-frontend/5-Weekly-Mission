import classNames from "classnames";
import useSignup from "@/hooks/auth/useSignup";
import { useStoreState } from "@/hooks/state";
import { EMAIL_PATTERN, PW_PATTERN } from "@/constants";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../Form.module.css";

function SignupForm() {
  const {
    handleEmailCheck,
    handleSignup,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    emailCheckMutation,
  } = useSignup();
  const password = watch("password");
  const { currentType, toggleType } = useStoreState();

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit(handleSignup)}
    >
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          type="text"
          placeholder="이메일을 입력해 주세요"
          className={classNames(styles.inputWrapper, {
            [styles.errorBorder]: errors.email,
          })}
          {...register("email", {
            required: "이메일을 입력해 주세요",
            pattern: {
              value: EMAIL_PATTERN,
              message: "올바른 형식의 이메일을 입력해 주세요",
            },
            onBlur: (e) => handleEmailCheck(e),
          })}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="password">
          비밀번호
        </label>
        <input
          id="password"
          type={currentType}
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
          className={classNames(styles.inputWrapper, {
            [styles.errorBorder]: errors.password,
          })}
          {...register("password", {
            required: "비밀번호를 입력해 주세요",
            pattern: {
              value: PW_PATTERN,
              message: "영문, 숫자를 조합해 8자 이상 입력해 주세요",
            },
          })}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}
        <button className={styles.eyeIcon} type="button" onClick={toggleType}>
          {currentType === "password" ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="password-confirm">
          비밀번호 확인
        </label>
        <input
          id="password-confirm"
          type={currentType}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          className={classNames(styles.inputWrapper, {
            [styles.errorBorder]: errors.passwordConfirm,
          })}
          {...register("passwordConfirm", {
            required: "비밀번호와 일치하는 값을 입력해 주세요",
            validate: (value) =>
              value === password || "비밀번호와 일치하지 않습니다",
          })}
        />
        {errors.passwordConfirm && (
          <p className={styles.errorMessage}>
            {errors.passwordConfirm.message}
          </p>
        )}
        <button className={styles.eyeIcon} type="button" onClick={toggleType}>
          {currentType === "password" ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <button className={styles.submitButton}>회원가입</button>
    </form>
  );
}

export default SignupForm;
