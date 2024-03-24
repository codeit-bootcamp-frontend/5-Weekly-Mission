import {
  inputError,
  removeInputError,
  emailPattern,
  togglePw,
  USER_INFO,
} from "./module.js";

const emailInput = document.querySelector("#email");
const emailErrorMsg = document.querySelector("#email-error");
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
  removeInputError({ input: emailInput, errorMsg: emailErrorMsg });
}
emailInput.addEventListener("focusout", (e) => validateEmail(e.target.value));

const pwInput = document.querySelector("#password");
const pwErrorMsg = document.querySelector("#pw-error");
function validatePw(password) {
  if (password === "") {
    inputError(
      { input: pwInput, errorMsg: pwErrorMsg },
      "비밀번호를 입력해주세요"
    );
    return;
  }
  removeInputError({ input: pwInput, errorMsg: pwErrorMsg });
}
pwInput.addEventListener("focusout", (event) => validatePw(event.target.value));

const pwToggleBtn = document.querySelector("#pw-toggle");
pwToggleBtn.addEventListener("click", () => togglePw(pwInput, pwToggleBtn));

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
async function submitForm(e) {
  e.preventDefault();

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailInput.value,
        password: pwInput.value,
      }),
    });
    const { data } = await response.json();
    if (response.ok) {
      localStorage.setItem("accessToken", data.accessToken);
      location.href = "/folder.html";
      return;
    } else {
      inputError(
        { input: emailInput, errorMsg: emailErrorMsg },
        "이메일을 확인해주세요."
      );
      inputError(
        { input: pwInput, errorMsg: pwErrorMsg },
        "비밀번호를 확인해주세요."
      );
    }
  } catch (error) {
    console.log(error);
  }
}
