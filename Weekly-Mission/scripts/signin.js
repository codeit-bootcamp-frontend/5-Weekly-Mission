import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  redirectToIfAccessTokenExists,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const emailErrorMessage = document.getElementById("email-error-message");
  const passwordInput = document.getElementById("password");
  const passwordErrorMessage = document.getElementById("password-error-message");
  const signForm = document.getElementById("form");

  // 엑세스 토큰 확인 후 리다이렉트
  redirectToIfAccessTokenExists("/folder");

  // 이메일 유효성 검사
  emailInput.addEventListener("blur", () => validateInput(emailInput, emailErrorMessage, isEmailValid, "이메일을 입력해주세요.", "올바른 이메일 주소가 아닙니다."));

  // 비밀번호 유효성 검사
  passwordInput.addEventListener("blur", () => validateInput(passwordInput, passwordErrorMessage, isPasswordValid, "비밀번호를 입력해주세요.", "비밀번호는 최소 8자 이상, 숫자와 문자를 포함해야 합니다."));

  // 폼 제출 처리
  signForm.addEventListener("submit", submitForm);
});

// 입력 유효성 검사 및 에러 처리
function validateInput(input, errorMessage, validator, emptyMessage, invalidMessage) {
  const value = input.value.trim();
  if (value === "") {
    setInputError({ input, errorMessage }, emptyMessage);
  } else if (!validator(value)) {
    setInputError({ input, errorMessage }, invalidMessage);
  } else {
    removeInputError({ input, errorMessage });
  }
}

// 폼 제출 처리
async function submitForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailErrorMessage = document.getElementById("email-error-message");
  const passwordErrorMessage = document.getElementById("password-error-message");

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@codeit.com",
        password: "sprint101",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    const { data } = await response.json();
    const accessToken = data?.accessToken;
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    localStorage.setItem("accessToken", accessToken);
    location.href = "/folder";
  } catch (error) {
    console.error("Error:", error);
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일 또는 비밀번호를 확인해주세요.");
    setInputError({ input: passwordInput, errorMessage: passwordErrorMessage }, "이메일 또는 비밀번호를 확인해주세요.");
  }
}
