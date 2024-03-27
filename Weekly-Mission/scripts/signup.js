import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  TEST_USER,
  redirectToIfAccessTokenExists,
} from "./utils.js";

// 엑세스 토큰이 존재하는 경우 바로 리디렉션 처리
redirectToIfAccessTokenExists("/folder");

// 이메일 입력 필드와 에러 메시지 요소 선택
const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");

// 이메일 입력 필드에서 포커스를 잃었을 때 유효성 검사 수행
emailInput.addEventListener("focusout", (event) => validateEmail(event.target.value));

// 이메일 유효성 검사 함수
function validateEmail(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
    return false;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return false;
  }
  if (email === TEST_USER.email) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이미 사용 중인 이메일입니다."
    );
    return false;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  return true;
}

// 비밀번호 입력 필드와 에러 메시지 요소 선택
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

// 비밀번호 입력 필드에서 포커스를 잃었을 때 유효성 검사 수행
passwordInput.addEventListener("focusout", (event) => validatePassword(event.target.value));

// 비밀번호 유효성 검사 함수
function validatePassword(password) {
  if (password === "" || !isPasswordValid(password)) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
  return true;
}

// 비밀번호 확인 입력 필드와 에러 메시지 요소 선택
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordErrorMessage = document.querySelector("#confirm-password-error-message");

// 비밀번호 확인 입력 필드에서 포커스를 잃었을 때 유효성 검사 수행
confirmPasswordInput.addEventListener("focusout", (event) => validateConfirmPassword(event.target.value));

// 비밀번호 확인 유효성 검사 함수
function validateConfirmPassword(confirmPassword) {
  if (confirmPassword === "" || !isPasswordValid(confirmPassword)) {
    setInputError(
      { input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  if (passwordInput.value !== confirmPassword) {
    setInputError(
      { input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage },
      "비밀번호가 일치하지 않습니다."
    );
    return false;
  }
  removeInputError({ input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage });
  return true;
}

// 회원가입 양식 제출 시 수행되는 함수
const signUpForm = document.querySelector("#form");
signUpForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);
  const isConfirmPasswordValid = validateConfirmPassword(confirmPasswordInput.value);

  if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    location.href = "/folder";
  }
}
