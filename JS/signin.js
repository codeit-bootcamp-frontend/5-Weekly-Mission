import { emailInput, emailError } from "./email.js";
import { passwordInput, passwordError } from "./password.js";

const btn = document.querySelector("#btn");

function signIn(e) {
  const checkedEmail = emailInput.value === "test@codeit.kr";
  const checkedPassword = passwordInput.value === "codeit101";
  e.preventDefault();
  if (checkedEmail && checkedPassword) {
    window.location.href = "folder.html";
  }
  if (!checkedEmail) {
    emailError.classList.remove("error");
    passwordInput.classList.add("error-input");
    emailError.textContent = "이메일을 확인해주세요.";
  }
  if (!checkedPassword) {
    passwordError.classList.remove("error");
    passwordInput.classList.add("error-input");
    passwordError.textContent = "비밀번호를 확인해주세요.";
  }
}
btn.addEventListener("click", signIn);

const signInData = {
  email: "test@codeit.com",
  password: "sprint101",
};
async function post() {
  const data = {
    email,
    password,
  }

  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInData),
  })
  await then(())
}
