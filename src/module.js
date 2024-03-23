const INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MASSAGE_CLASSNAME = "error-message-on";
const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function inputError(el, msg) {
  el.input.className += ` ${INPUT_ERROR_CLASSNAME}`;
  el.errorMsg.className += ` ${ERROR_MASSAGE_CLASSNAME}`;
  el.errorMsg.textContent = msg;
}

export function removeInputError(el) {
  el.input.classList.remove(INPUT_ERROR_CLASSNAME);
  el.errorMsg.classList.remove(ERROR_MASSAGE_CLASSNAME);
  el.errorMsg.textContent = "";
}

export function emailPattern(email) {
  return new RegExp(EMAIL_PATTERN).test(email);
}

export function pwPattern(pw) {
  const pwEightLetterOrMore = pw.length >= 8;
  const pwNumAndChar = pw.match(/[0-9]/g) && pw.match(/[a-zA-Z]/gi);
  return pwEightLetterOrMore && pwNumAndChar;
}

export function togglePw(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./images/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./images/eye-off.svg");
}

export const USER_INFO = {
  email: "test@codeit.com",
  password: "codeit101",
};
