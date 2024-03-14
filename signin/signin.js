/*에러메세지가 떠 있는 경우 다시 focus했을 때 에러메세지 제거*/
function removeErrorMessage() {
  const emailErrorMessageEl = document.querySelector('.error-message-email');
  const passwordErrorMessageEl = document.querySelector('.error-message-password');

  emailErrorMessageEl.textContent = '';
  passwordErrorMessageEl.textContent = '';
}

/*email 유효성 검증*/

function validateEmail(event) {

  const emailInputEl = event.target;
  const emailValue = emailInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-email');

  if(emailValue === '') {
    errorMessageEl.textContent = "이메일을 입력해주세요";
    emailInputEl.classList.add('wrongsign');

  } else if(!emailValue.includes("@")) {
    errorMessageEl.textContent = "올바른 이메일 주소가 아닙니다";
    emailInputEl.classList.add('wrongsign');
  }

  emailInputEl.classList.remove('wrongsign');
}

const emailInputEl = document.querySelector('.email-input');
emailInputEl.addEventListener('focusout', validateEmail);
emailInputEl.addEventListener('focus', removeErrorMessage);


/*password 유효성 검증*/

function validatePassword(event) {
  const passwordInputEl = event.target;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password');

  if(passwordValue === '') {
    errorMessageEl.textContent = "비밀번호를 입력해주세요";
    passwordInputEl.classList.add('wrongsign');
  }

    passwordInputEl.classList.remove('wrongsign');

}

const passwordInputEl = document.querySelector('.password-input');
passwordInputEl.addEventListener('focusout', validatePassword);
passwordInputEl.addEventListener('focus', removeErrorMessage);

/*이메일: test@codeit.com 비밀번호: codeit101의 사용자 등록*/
  const users = [
    {email: "test@codeit.com", password: "codeit101"}
  ];


/*이메일: test@codeit.com 비밀번호: codeit101로 로그인 시, /folder 페이지로 이동
이외의 로그인 시도의 경우, 에러 메세지 출력*/

function handleFormSubmit(event) {
  event.preventDefault();

  const emailValue = emailInputEl.value;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl_email = document.querySelector('.error-message-email');
  const errorMessageEl_password = document.querySelector('.error-message-password');

  const useremail = users.find(user => user.email === emailValue);
  const userpassword = users.find(user => user.password === passwordValue);
  
  if(!useremail) {
    errorMessageEl_email.textContent = "이메일을 확인해주세요";
  } else {
    errorMessageEl_email.textContent = "";
  }
  
  if(!userpassword) {
    errorMessageEl_password.textContent = "비밀번호를 확인해주세요";
  } else {
    errorMessageEl_password.textContent = "";
  }

  if(useremail && userpassword) {
    location.href = "./folder.html";
  }
}

const signform = document.querySelector('.sign-form');
signform.addEventListener('submit', handleFormSubmit);

/*Enter키를 눌러도 로그인이 되도록 추가*/

signform.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    handleFormSubmit.submit();
  }
});

/*눈 모양 아이콘*/

function togglePasswordVisibility() {
  const passwordInputEl = document.querySelector('.password-input');
  const eyeButtonEl = document.querySelector('.eye-button');
  
  if (passwordInputEl.type === "password") {
    passwordInputEl.type = "text";
    eyeButtonEl.innerHTML = '<img src="../image/eye-on.jpg" />';
  } else {
    passwordInputEl.type = "password";
    eyeButtonEl.innerHTML = '<img src="../image/eye-off.jpg" />';
  }
}

const eyeButtonEl = document.querySelector('.eye-button');
eyeButtonEl.addEventListener('click', togglePasswordVisibility);
