const emailInput = document.querySelector("#email-input");
const emailErrorMessage = document.querySelector(".emailerrormessage");
const passwordInput = document.querySelector("#password-input");
const passwordErrorMessage = document.querySelector(".passworderrormessage");
const loginButton = document.querySelector(".button");
const passwordConfirmInput = document.querySelector("#passwordconfirm-input");
const passwordConfirmErrorMessage = document.querySelector(
  ".passwordconfirmerrormessage"
);
const passwordEyeButton = document.querySelector("#password-eye-button");

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function addInputError(inp, inpErr, errMsg) {
  inp.classList.add("sign-input-error");
  inpErr.classList.add("error-message-on");
  inpErr.textContent = errMsg;
}

function removeInputError(inp, inpErr) {
  inp.classList.remove("sign-input-error");
  inpErr.classList.remove("error-message-on");
  inpErr.textContent = "";
}

function validateEmailInput(event) {
  const email = emailInput.value;

  if (email === "") {
    addInputError(emailInput, emailErrorMessage, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    addInputError(
      emailInput,
      emailErrorMessage,
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }

  removeInputError(emailInput, emailErrorMessage);
}

function validatePasswordInput(event) {
  const password = passwordInput.value;

  if (password === "") {
    addInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    return;
  }

  removeInputError(passwordInput, passwordErrorMessage);
}

function confirmPasswordInput(event) {
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  if (password !== passwordConfirm) {
    addInputError(
      passwordConfirmInput,
      passwordConfirmErrorMessage,
      "비밀번호가 일치하지 않아요."
    );
    return;
  }

  removeInputError(passwordConfirmInput, passwordConfirmErrorMessage);
}

emailInput.addEventListener("focusout", validateEmailInput);

passwordInput.addEventListener("focusout", validatePasswordInput);

function changeEyeButton(event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeButton.querySelector("img").src = "imgfolder/eye-on.svg";
  } else {
    passwordInput.type = "password";
    passwordEyeButton.querySelector("img").src = "imgfolder/eye-off.svg";
  }
}

passwordEyeButton.addEventListener("click", changeEyeButton);

function loginUser() {
  const email = emailInput.value;
  const password = passwordInput.value;

  const validEmail = "test@codeit.com";
  const validPassword = "codeit101";

  if (email === validEmail && password === validPassword) {
    window.location.href = "folder.html";
    return;
  } else {
    addInputError(emailInput, emailErrorMessage, "이메일을 확인해주세요.");

    addInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 확인해주세요."
    );
    return;
  }
}

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
async function submitForm(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });
    //아이디와 비밀번호를 요청해서 응답을 받는 법 모르겠어요
  } catch {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 확인해주세요."
    );
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 확인해주세요."
    );
  }
}
