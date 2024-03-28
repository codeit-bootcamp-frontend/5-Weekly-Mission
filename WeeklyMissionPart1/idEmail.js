export const emailInput = document.querySelector('#email');
export const emailErrorMessage = document.querySelector('.emailErrorMessage');

const EMAIL_ENTER_ERROR = '이메일을 입력해 주세요.';
const EMAIL_FORMAT_ERROR = '올바른 이메일 주소가 아닙니다.';

function resetLoginEmailError() {
  emailErrorMessage.classList.add('hidden');
  emailInput.classList.remove('inputError');
} /* 로그인 - 이메일 오류 메시지를 초기화 하는 함수  */

function isThisEmail(email) {
  const emailChecker = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return emailChecker.test(email);
} /* 이메일 형식이면 true를 뱉는 함수*/

export const checkEmail = function (e) {
  resetLoginEmailError();
  if (emailInput.value === '') {
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = EMAIL_ENTER_ERROR;
    emailInput.classList.add('inputError');
    return false;
  } else if (isThisEmail(emailInput.value) === false) {
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = EMAIL_FORMAT_ERROR;
    emailInput.classList.add('inputError');
    return false;
  }
  return true;
}; /* 이메일을 입력하지 않거나 이메일 주소로 입력하지 않을 때 반응하는 함수 */
