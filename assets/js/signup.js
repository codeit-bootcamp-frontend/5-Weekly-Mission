import { togglePassword, confirmEyeToggle } from "./commons/utils.js";
import { textCheck, textCheckPw, textCheckPwConfirm } from "./signupCheck.js";
import {
  $form,
  reset,
  inputEmail,
  inputPassword,
  inputPasswordConfirm,
  emailErrorMessage,
  pwErrorMessage,
  pwConfirmErrorMessage,
  passwordPattern,
  eyeButton,
  confirmEyeButton,
} from "./commons/reset.js";
import { checkEmailRequest, signupRequest } from "./api/api.js";

function validate({ email, password, passwordConfirm }) {
  const passwordCheck = password === passwordConfirm;
  const emailLength = email.length === 0;
  const isPasswordValid = passwordPattern.test(password);
  reset();

  checkEmailRequest(email);

  if (emailLength) {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = "이메일을 입력해 주세요.";
    return;
  }

  if (!passwordCheck) {
    inputPassword.classList.add("error-border");
    inputPasswordConfirm.classList.add("error-border");
    pwConfirmErrorMessage.innerHTML = "비밀번호가 일치하지 않아요.";
    return;
  }

  if (!isPasswordValid) {
    inputPassword.classList.add("error-border");
    inputPasswordConfirm.classList.add("error-border");
    pwErrorMessage.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return;
  }

  // 모든 조건에 적합한 경우
  signupRequest(email, password, passwordConfirm);
}

//form에서 로그인 클릭했을 때
function handleSubmit(event) {
  // form의 submit 이벤트의 기본 동작을 취소
  event.preventDefault();

  const $email = event.target.email;
  const $password = event.target.password;
  const $passwordConfirm = event.target.passwordConfirm;

  const email = $email.value;
  const password = $password.value;
  const passwordConfirm = $passwordConfirm.value;

  validate({ email, password, passwordConfirm });
}

$form.addEventListener("submit", handleSubmit);

eyeButton.addEventListener("click", togglePassword);
confirmEyeButton.addEventListener("click", confirmEyeToggle);

// 이메일, 비밀번호 형식 확인
inputEmail.addEventListener("blur", textCheck);
inputPassword.addEventListener("blur", textCheckPw);
inputPasswordConfirm.addEventListener("blur", textCheckPwConfirm);
