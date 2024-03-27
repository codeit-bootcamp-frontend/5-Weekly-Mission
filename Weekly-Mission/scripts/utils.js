const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

/* 요소에 입력 오류 설정, 오류 메시지 표시 */
export function setInputError(elements, errorMessage) {
  elements.input.classList.add(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.add(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = errorMessage;
}

/* 요소에서 입력 오류 제거, 오류 메시지 숨기기 */
export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

/* 이메일 유효성 확인 */
export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

/* 비밀번호 유효성 확인 */
export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter = password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

/* 엑세스 토큰이 로컬 스토리지에 저장되어 있는 지 확인 */
export function redirectToIfAccessTokenExists(destination) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    location.replace(destination);
  }
}
