import {
  setErrMsg,
  isEmailValid,
  removeErrMsg,
  togglePassword,
  errMsg,
} from "../js/common-validation.js";
import { isLogIn } from "./validation.js";
// import checkAccessToken from "../js/accessToken.js";

const emailInputEl = document.querySelector(".input-email");
const emailErrMsgEl = document.querySelector(".err-email");
emailInputEl.addEventListener("blur", validateEmail);
emailInputEl.addEventListener("keyup", clickEnter);

const passwordInputEl = document.querySelector(".input-password");
const passwodrErrorMessageEl = document.querySelector(".err-password");
passwordInputEl.addEventListener("blur", validatePassword);

// checkAccessToken("../folder/index.html");

// 1. 이메일이 비었는가
// 2. 유효한 이메일인가
// 3. 유효하다면 p태그 비워주기
function validateEmail() {
  const email = emailInputEl.value;
  if (email === "") {
    setErrMsg(emailErrMsgEl, errMsg.NO_EMAIL);
    return;
  }
  if (!isEmailValid(email)) {
    setErrMsg(emailErrMsgEl, errMsg.NOT_EMAIL);
    return;
  }
  removeErrMsg(emailErrMsgEl, errMsg.REMOVE_MSG);
}

function validatePassword() {
  const password = passwordInputEl.value;
  if (password === "") {
    setErrMsg(passwodrErrorMessageEl, errMsg.NO_PWD);
    return;
  }
  removeErrMsg(passwodrErrorMessageEl, errMsg.REMOVE_MSG);
}

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInputEl, passwordToggleButton)
);

const loginForm = document.querySelector("#form");
loginForm.addEventListener("submit", submitButton);
async function submitButton(e) {
  e.preventDefault();

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputEl.value,
        password: passwordInputEl.value,
      }),
    });

    if (!response.ok) {
      throw Error();
    }

    // const { data } = await response.json();
    // const accessToken = data?.accessToken;
    // if (!accessToken) {
    //   alert("토큰이 없습니다.");
    //   return;
    // }
    // localStorage.setItem("accessToken", accessToken);
    location.href = "../folder/index.html";
  } catch {
    setErrMsg(emailErrMsgEl, errMsg.CHECK);
    setErrMsg(passwodrErrorMessageEl, errMsg.CHECK);
  }
}

// function clickLoginBtn(e) {
//   const inputEmail = emailInputEl.value;
//   const inputPassword = passwordInputEl.value;
//   e.preventDefault();

//   if (isLogIn(inputEmail, inputPassword)) {
//     location.href = "../folder/index.html";
//     return;
//   }
//   setErrMsg(emailErrMsgEl, errMsg.CHECK);
//   setErrMsg(passwodrErrorMessageEl, errMsg.CHECK);
// }
