import { emailInput, emailError } from "./email.js";
import { passwordInput, passwordError } from "./password.js";

const btn = document.querySelector("#btn");

async function signIn(e) {
  const checkedEmail = emailInput.value === "test@codeit.kr";
  const checkedPassword = passwordInput.value === "codeit101";

  e.preventDefault();
  if (!checkedEmail) {
    emailError.classList.remove("error");
    emailInput.classList.add("error-input");
    emailError.textContent = "이메일을 확인해주세요.";
    return;
  }
  if (!checkedPassword) {
    passwordError.classList.remove("error");
    passwordInput.classList.add("error-input");
    passwordError.textContent = "비밀번호를 확인해주세요.";
    return;
  }
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      window.location.href = "../folder.html";
    } else {
      alert("로그인 실패");
    }
  } catch (error) {
    console.log("Error", error);
  }
}

btn.addEventListener("click", signIn);
