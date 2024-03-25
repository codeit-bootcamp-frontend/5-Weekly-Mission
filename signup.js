const emailInput = document.querySelector("#email-input");
const emailErrorMessage = document.querySelector(".emailerrormessage");
const passwordInput = document.querySelector("#password-input");
const passwordErrorMessage = document.querySelector(".passworderrormessage");
const signButton = document.querySelector(".button");
const passwordConfirmInput = document.querySelector("#password-confirm-input");
const passwordConfirmErrorMessage = document.querySelector(
  ".passwordconfirmerrormessage"
);
const passwordEyeButton = document.querySelector("#password-eye-button");
const passwordConfirmEyeButton = document.querySelector(
  "#password-confirm-eye-button"
);

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
  if (email === "test@codeit.com") {
    addInputError(emailInput, emailErrorMessage, "이미 사용중인 이메일입니다.");
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
  if (
    password.length < 8 ||
    (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) === false
  ) {
    addInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
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

passwordConfirmInput.addEventListener("focusout", confirmPasswordInput);

function changePasswordEyeButton(event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeButton.querySelector("img").src = "imgfolder/eye-on.svg";
  } else {
    passwordInput.type = "password";
    passwordEyeButton.querySelector("img").src = "imgfolder/eye-off.svg";
  }
}

passwordEyeButton.addEventListener("click", changePasswordEyeButton);

function changePasswordConfirmEyeButton(event) {
  if (passwordConfirmInput.type === "password") {
    passwordConfirmInput.type = "text";
    passwordConfirmEyeButton.querySelector("img").src = "imgfolder/eye-on.svg";
  } else {
    passwordConfirmInput.type = "password";
    passwordConfirmEyeButton.querySelector("img").src = "imgfolder/eye-off.svg";
  }
}

passwordConfirmEyeButton.addEventListener(
  "click",
  changePasswordConfirmEyeButton
);

function signupUser() {
  const inputErrorElement = document.querySelector(".sign-input-error");
  if (inputErrorElement) {
    return;
  }

  window.location.href = "folder.html";
}

function Obj() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  console.log({ ...obj1, ...obj2 });
}
