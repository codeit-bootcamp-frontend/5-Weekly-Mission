import {
  removeErrorMessage, 
  validateEmail, 
  users, 
  togglePasswordVisibility
} from '../common.js';

/*email 유효성 검증*/

const emailInputEl = document.querySelector('.email-input');
emailInputEl.addEventListener('focusout', (event) =>{
  validateEmail(event);

  const errorMessageEl = document.querySelector('.error-message-email');
  const emailValue = emailInputEl.value;
  const useremail = users.find(user => user.email === emailValue);
  if(useremail) {
    errorMessageEl.textContent = "이미 사용중인 이메일입니다.";
    emailInputEl.classList.add('wrongsign');
  }
});

emailInputEl.addEventListener('focus', removeErrorMessage);

/*password 유효성 검증*/

function validatePassword(event) {
  const passwordInputEl = event.target;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password');

  if(!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(passwordValue)) {
    errorMessageEl.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInputEl.classList.add('wrongsign');
  }

    passwordInputEl.classList.remove('wrongsign');

}

const passwordInputEl = document.querySelector('.password-input');
passwordInputEl.addEventListener('focusout', validatePassword);
passwordInputEl.addEventListener('focus', removeErrorMessage);

/*비밀번호 input과 비밀번호 확인 input 값이 다를 때 에러메시지*/

function validatePasswordConfirmation(event) {
  const passwordInputEl = document.querySelector('.password-input');
  const passwordValue = passwordInputEl.value;

  const confirmPasswordInputEl = event.target;
  const confirmPasswordValue = confirmPasswordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password-confirm');

  if(confirmPasswordValue !== passwordValue) {
    errorMessageEl.textContent = "비밀번호가 일치하지 않아요.";
    confirmPasswordInputEl.classList.add('wrongsign');
  }

  confirmPasswordInputEl.classList.remove('wrongsign');
}

const confirmPasswordInputEl = document.querySelector('.confirm-password-input');
confirmPasswordInputEl.addEventListener('keyup', validatePasswordConfirmation);



/*Enter키를 눌러도 로그인이 되도록 추가

signform.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    handleFormSubmit.submit();
  }
});*/

/*눈 모양 아이콘*/

const eyeButtonEl = document.querySelector('.eye-button');
eyeButtonEl.addEventListener('click', togglePasswordVisibility);