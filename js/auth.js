const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailErrorMessage = document.querySelector('.auth-form__wrong-email');
const passwordErrorMessage = document.querySelector('.auth-form__wrong-password');
const authBtn = document.querySelector('.auth-form__auth-btn')

const emailErrorEvent = function(){
  if (!email.value) {
    email.classList.add('auth-form__error-sign');
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
    email.classList.add('auth-form__error-sign');
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  }else{
  email.classList.remove('auth-form__error-sign');
  emailErrorMessage.textContent = "";
  }
};

const passwordErrorEvent = function(){
  if (!password.value) {
    password.classList.add('auth-form__error-sign');
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
  }
};

const loginEvent = function(e){
  e.preventDefault();
  if(email.value === "test@codeit.com" && password.value === "codeit101"){
    window.location.href = "index.html";
  } else{
    emailErrorMessage.textContent = "이메일을 확인해 주세요.";
    passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
  }
}

email.addEventListener('mouseout', emailErrorEvent);

email.addEventListener('keyup', emailErrorEvent);


password.addEventListener('mouseout', passwordErrorEvent);

authBtn.addEventListener('click', loginEvent);

document.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
    loginEvent();
  }
});