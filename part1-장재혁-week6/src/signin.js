import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
function validateEmailInput(email) {
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
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return false;
  }
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);

async function submitForm(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
      }),
    });

    if (!response.ok){
      throw Error("리스폰스 에러");
    }
    
    const { data } = await response.json();
    const accessToken = data?.accessToken;
    if (!accessToken) {
      throw Error("토큰 에러");   
    }
    
    localStorage.setItem("accessToken", accessToken);
    location.href = "/folder.html";
  } catch {
      setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
      setInputError({ input: passwordInput, errorMessage: passwordErrorMessage }, "비밀번호를 확인해주세요." );
  }
}
