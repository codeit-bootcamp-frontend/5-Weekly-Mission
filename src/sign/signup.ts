const TEST_USER = {
    email: "test@codeit.com",
    password: "codeit101",
};

const EMAIL_VALIDATE = /\S+@\S+\.\S+/;
const PW_VALIDATE = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

// 이메일 검사
function validateEmail(email) {
    return EMAIL_VALIDATE.test(email);
}

// 이메일 및 비밀번호 검사 함수
function hasInput(inputValue, errorElement, errorMessage) {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
        errorElement.textContent = errorMessage;
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

// 이메일 검사
document.getElementById('email').addEventListener('focusout', function() {
    const email = this.value.trim();
    const email_error = document.getElementById('email_error');

    if (!hasInput(email, email_error, '이메일을 입력해 주세요.')) {        
        return;
    }
    
    if (!validateEmail(email)) {
        email_error.textContent = '올바른 이메일 주소가 아닙니다.';
        return;
    }
});

// 비밀번호 검사
function validatePassword(password){
    return PW_VALIDATE.test(password);
}

// 비밀번호 검사
document.getElementById('password').addEventListener('focusout', function() {
    const password = this.value.trim();
    const password_error = document.getElementById('password_error');

    if(!hasInput(password, password_error, '비밀번호를 입력해 주세요.')) {
        return;
    }

    if(!validatePassword(password)) {
        password_error.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        return;
    }
});

// 비밀번호 확인 검사
document.getElementById('passwordCheck').addEventListener('focusout', function() {
    const passwordCheck = this.value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordCheck_error = document.getElementById('passwordCheck_error');
    
    if(!hasInput(passwordCheck, passwordCheck_error, '비밀번호를 확인해 주세요.')){
        return;
    }

    if(passwordCheck !== password) {
        passwordCheck_error.textContent = '비밀번호가 다릅니다.';
        return;
    }
});

// eye_toggle 버튼에 대한 이벤트 리스너 추가
document.getElementById('eye_toggle').addEventListener('click', function() {
    const password_input = document.getElementById('password');
    const type = password_input.getAttribute('type') === 'password' ? 'text' : 'password';
    password_input.setAttribute('type', type);

    if (type === 'text') {
        this.classList.add('on');
    } else {
        this.classList.remove('on');
    }
});

// eye_toggle2 버튼에 대한 이벤트 리스너 추가
document.getElementById('eye_toggle2').addEventListener('click', function() {
    const passwordCheck_input = document.getElementById('passwordCheck');
    const type = passwordCheck_input.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordCheck_input.setAttribute('type', type);

    if (type === 'text') {
        this.classList.add('on');
    } else {
        this.classList.remove('on');
    }
});

// submit
function submitUser() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordCheck = document.getElementById('passwordCheck').value.trim();

    const email_error = document.getElementById('email_error');
    const password_error = document.getElementById('password_error');
    const passwordCheck_error = document.getElementById('passwordCheck_error');

    if (!validateEmail(email)) {
        email_error.textContent = '올바른 이메일 주소가 아닙니다.';
        return; 
    } 
    
    if (email === TEST_USER.email) {
        email_error.textContent = '이미 사용 중인 이메일입니다.';
        return;
    } 
    
    if (!validatePassword(password)) {
        password_error.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        return;
    }

    if (!validatePassword(passwordCheck)) {
        passwordCheck_error.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        return;
    }
    
    if (passwordCheck !== password) {
        passwordCheck_error.textContent = '비밀번호가 다릅니다.';
        return; 
    }
    
    window.location.href = '/folder'; // 회원가입 성공 시 이동    
}

document.querySelector('.submit_btn').addEventListener('click', submitUser);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitUser();
    }
});