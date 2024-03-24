import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
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
  // if (email === TEST_USER.email) {
  //   setInputError(
  //     { input: emailInput, errorMessage: emailErrorMessage },
  //     "이미 사용 중인 이메일입니다."
  //   );
  //   return false;
  // }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  return true;
}

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

function validatePasswordInput(password) {
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

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordErrorMessage = document.querySelector("#confirm-password-error-message");
confirmPasswordInput.addEventListener("focusout", (event) =>
  validateConfirmPasswordInput(event.target.value)
);
function validateConfirmPasswordInput(confirmPassword) {
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
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeInputError({ input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage });
  return true;
}

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const confirmPasswordToggleButton = document.querySelector("#confirm-password-toggle");
confirmPasswordToggleButton.addEventListener("click", () =>
  togglePassword(confirmPasswordInput, confirmPasswordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
async function submitForm(event) {
  event.preventDefault();

  const isEmailInputValid = validateEmailInput(emailInput.value);
  const isPasswordInputValid = validatePasswordInput(passwordInput.value);
  const isConfirmPasswordInputValid = validateConfirmPasswordInput(confirmPasswordInput.value);
  if (!(isEmailInputValid && isPasswordInputValid && isConfirmPasswordInputValid)) {
    console.log("회원가입 형식 오류")
    return
  }

  try{
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
    else{
      const { data } = await response.json();
      const accessToken = data?.accessToken;
      if (!accessToken) {
        throw Error("토큰 에러");   
      }
      
      localStorage.setItem("accessToken", accessToken);
      location.href = "/folder.html";
    }
  } catch {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
    setInputError({ input: passwordInput, errorMessage: passwordErrorMessage }, "비밀번호를 확인해주세요." );
  }
}
