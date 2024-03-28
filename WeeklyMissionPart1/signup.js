import { emailInput, checkEmail, emailErrorMessage } from './idEmail.js';
import {
  passwordInput,
  passwordCheckInput,
  passEyeButton,
  passCheckEyeButton,
  hideShowpassword,
  resetLoginPassError,
  passwordErrorMessage,
  passwordcheckErrorMessage,
} from './password.js';
import { SIGN_UP_TOKKEN, signUpApi, tryEmailCheck } from './Api.js';

const USED_EMAIL_ERROR = '이미 사용중인 이메일입니다.';
const PASS_FORMAT_ERROR = '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
const PASS_MATCH_ERROR = '비밀번호가 일치하지 않아요.';

const signupButton = document.querySelector('#signupbutton');

const checkSignUpToken = function () {
  const userToken = localStorage.getItem(SIGN_UP_TOKKEN);
  if (userToken) {
    location.href = './folder';
  }
};

const checkSignupEmail = async function () {
  try {
    tryEmailCheck(emailInput);
    return checkEmail();
  } catch (err) {
    emailErrorMessage.classList.remove('hidden');
    emailErrorMessage.textContent = USED_EMAIL_ERROR;
    emailInput.classList.add('inputError');
    return false;
  }
};

const checkSignupPassword = function () {
  resetLoginPassError();
  const englishOnly = /^[a-zA-z]+$/;
  const numberOnly = /^[\d]+$/;
  if (
    passwordInput.value.length < 8 ||
    englishOnly.test(passwordInput.value) ||
    numberOnly.test(passwordInput.value)
  ) {
    passwordErrorMessage.classList.remove('hidden');
    passwordErrorMessage.textContent = PASS_FORMAT_ERROR;
    passwordInput.classList.add('inputError');
    return false;
  }
  return true;
};

const checkPasswordOneMore = function () {
  passwordcheckErrorMessage.classList.add('hidden');
  passwordCheckInput.classList.remove('inputError');
  if (passwordInput.value !== passwordCheckInput.value) {
    passwordcheckErrorMessage.classList.remove('hidden');
    passwordcheckErrorMessage.textContent = PASS_MATCH_ERROR;
    passwordCheckInput.classList.add('inputError');
    return false;
  }
  return true;
};

const checkSignup = async function (e) {
  e.preventDefault();
  if (checkSignupEmail() && checkSignupPassword() && checkPasswordOneMore()) {
    signUpApi(emailInput, passwordInput);
  }
};

checkSignUpToken();
emailInput.addEventListener('focusout', checkSignupEmail);
passwordInput.addEventListener('focusout', checkSignupPassword);
passwordCheckInput.addEventListener('focusout', checkPasswordOneMore);
passEyeButton.addEventListener('click', hideShowpassword);
passCheckEyeButton.addEventListener('click', hideShowpassword);
signupButton.addEventListener('click', checkSignup);
