import { emailInput, emailError, emailCheck } from "./email.js";
import { passwordInput, passwordError } from "./password.js";
import {
  isValidPassword,
  pwConfirmInput,
  pwConfirmError,
} from "./signup-password.js";
const btn = document.querySelector(".signup");

async function checkEmailDuplicate(email) {
  const url = "https://bootcamp-api.codeit.kr/api/check-email";
  const data = {
    email: email,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 409) {
      emailError.classList.remove("error");
      emailError.textContent = "이미 사용중인 이메일입니다.";
      emailInput.classList.add("error-input");
    } else {
      emailError.classList.add("error");
      emailInput.classList.remove("error-input");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

emailInput.addEventListener("focusout", checkEmailDuplicate);

async function signUp(e) {
  e.preventDefault();

  const emailChecked = emailCheck(emailInput.value);
  const validPassword = isValidPassword(passwordInput.value);
  const passwordMatch = passwordInput.value === pwConfirmInput.value;

  if (emailChecked && validPassword && passwordMatch) {
    const isDuplicate = await checkEmailDuplicate(emailInput.value);
    if (!isDuplicate) {
      return;
    }

    const signUpUrl = "https://bootcamp-api.codeit.kr/api/sign-up";
    const signUpData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    const signUpOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    };

    try {
      const response = await fetch(signUpUrl, signUpOptions);
      if (response.ok) {
        window.location.href = "/folder";
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  } else {
    if (!emailChecked) {
      emailError.classList.remove("error");
      emailError.textContent = "이메일을 확인해주세요";
      emailInput.classList.add("error-input");
    }
    if (!validPassword) {
      passwordError.classList.remove("error");
      passwordError.textContent = "비밀번호를 확인해주세요";
      passwordInput.classList.add("error-input");
    }
    if (!passwordMatch) {
      pwConfirmError.classList.remove("error");
      pwConfirmError.textContent = "비밀번호가 다릅니다.";
      pwConfirmInput.classList.add("error-input");
    }
  }
}

btn.addEventListener("click", signUp);
