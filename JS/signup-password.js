import { passwordInput, passwordError } from "./password.js";
export const pwConfirmInput = document.querySelector("#password-confirm");
export const pwConfirmError = document.querySelector(
  "#password-confirm-errorText"
);

export function isValidPassword(password) {
  const passwordForm = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordForm.test(password);
}

function validatePassword() {
  const validPassword = isValidPassword(passwordInput.value);
  if (validPassword) {
    passwordError.classList.add("error");
    passwordInput.classList.remove("error-input");
  } else {
    if (validPassword !== "") {
      passwordError.classList.remove("error");
      passwordError.textContent =
        "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
      passwordInput.classList.add("error-input");
    }
  }
}
passwordInput.addEventListener("focusout", validatePassword);

function checkPassword() {
  const password = passwordInput.value;
  const confirmPassword = pwConfirmInput.value;

  if (password == confirmPassword) {
    pwConfirmError.classList.add("error");
    pwConfirmInput.classList.remove("error-input");
  } else {
    pwConfirmError.classList.remove("error");
    pwConfirmError.textContent = "비밀번호가 일치하지 않아요.";
    pwConfirmInput.classList.add("error-input");
  }
}
pwConfirmInput.addEventListener("focusout", checkPassword);
