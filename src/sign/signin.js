const TEST_USER = {
    email: "test@codeit.com",
    password: "codeit101",
};

// 이메일 검사
function validateEmail(email) {
    const validate = /\S+@\S+\.\S+/;
    return validate.test(email);
}

// 이메일 및 비밀번호 검사 함수
function validateInput(inputValue, errorElement, errorMessage) {
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
    const emailError = document.getElementById('email_error');
    if (!validateInput(email, emailError, '이메일을 입력해 주세요.')) {
        return;
    }
    
    if (!validateEmail(email)) {
        emailError.textContent = '올바른 이메일 주소가 아닙니다.';
        return;
    }
});

// 비밀번호 검사
document.getElementById('password').addEventListener('focusout', function() {
    const password = this.value.trim();
    const passwordError = document.getElementById('password_error');
    validateInput(password, passwordError, '비밀번호를 입력해 주세요.');
});

// submit
document.querySelector('.submit_btn').addEventListener('click', submitUser);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitUser();
    }
});

function submitUser() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // 이메일 및 비밀번호 유효성 검사
    if (email === TEST_USER.email && password === TEST_USER.password) {
        window.location.href = '/folder'; // 로그인 성공 시 이동
    } else {
        // 로그인 실패 시 에러 메시지 표시
        const emailError = document.getElementById('email_error');
        const passwordError = document.getElementById('password_error');

        emailError.textContent = '이메일을 확인해 주세요.';
        passwordError.textContent = '비밀번호를 확인해 주세요.';
    }
}

// password eye toggle
const eyeToggle = document.getElementById('eye_toggle');
const passwordInput = document.getElementById('password');

eyeToggle.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'text') {
        eyeToggle.classList.add('on');
    } else {
        eyeToggle.classList.remove('on');
    }
});