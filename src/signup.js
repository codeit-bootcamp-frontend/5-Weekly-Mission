import {
  inputError,
  removeInputError,
  emailPattern,
  pwPattern,
  togglePw,
  USER_INFO,
} from "./module.js";

const emailInput = document.querySelector("#email");
const emailErrorMsg = document.querySelector("#email-error");
emailInput.addEventListener("focusout", (e) => validateEmail(e.target.value));
function validateEmail(email) {
  if (email === "") {
    inputError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "이메일을 입력해주세요"
    );
    return;
  }
  if (!emailPattern(email)) {
    inputError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "올바른 이메일 주소가 아닙니다"
    );
    return;
  }
  if (emailInput.value === USER_INFO.email) {
    inputError(
      { input: emailInput, errorMsg: emailErrorMsg },
      "이미 사용 중인 이메일입니다"
    );
    return;
  }
  removeInputError({ input: emailInput, errorMsg: emailErrorMsg });
  return;
}

const pwInput = document.querySelector("#password");
const pwErrorMsg = document.querySelector("#pw-error");
function pwRule(password) {
  if (password === "" || !pwPattern(password)) {
    inputError(
      { input: pwInput, errorMsg: pwErrorMsg },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요"
    );
    return;
  }
  removeInputError({ input: pwInput, errorMsg: pwErrorMsg });
  return;
}
pwInput.addEventListener("focusout", (e) => pwRule(e.target.value));

const confirmPwInput = document.querySelector("#confirm-password");
const confirmPwErrorMsg = document.querySelector("#confirm-pw-error");
function valdateConfirmPw(confirmPw) {
  if (confirmPw === "" || !pwPattern(confirmPw)) {
    inputError(
      { input: confirmPwInput, errorMsg: confirmPwErrorMsg },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요"
    );
    return;
  }
  if (pwInput.value !== confirmPw) {
    inputError(
      { input: confirmPwInput, errorMsg: confirmPwErrorMsg },
      "비밀번호가 일치하지 않아요"
    );
    return;
  }
  removeInputError({ input: confirmPwInput, errorMsg: confirmPwErrorMsg });
  return;
}
confirmPwInput.addEventListener("focusout", (e) =>
  valdateConfirmPw(e.target.value)
);

const pwToggleBtn = document.querySelector("#pw-toggle");
pwToggleBtn.addEventListener("click", () => togglePw(pwInput, pwToggleBtn));

const confirmPwToggleBtn = document.querySelector("#confirm-pw-toggle");
confirmPwToggleBtn.addEventListener("click", () =>
  togglePw(confirmPwInput, confirmPwToggleBtn)
);

const signUpForm = document.querySelector("#form");
function submitForm(e) {
  e.preventDefault();

  const emailInputCorrect = validateEmail(emailInput.value);
  const pwInputCorrect = pwRule(pwInput.value);
  const confirmPwCorrect = valdateConfirmPw(confirmPwInput.value);

  if (emailInputCorrect && pwInputCorrect && confirmPwCorrect) {
    location.href = "/folder";
  }
}
signUpForm.addEventListener("submit", submitForm);
