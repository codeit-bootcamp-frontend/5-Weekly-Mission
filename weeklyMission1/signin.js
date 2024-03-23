import { signInEmailInput, signInPasswordInput, emailErrorMsg, passwordErrorMsg, signInLogin, passwordImg } from "./tags.js";
import { emailRegex } from "./regex.js";

// accessToken makes move to '/folder'
if (localStorage.getItem('accessToken')) {
    location.href = '/folder';
}

function checkEmailBlank() {
    const signInEmailInputValue = signInEmailInput.value;

    if (!signInEmailInputValue) {
        emailErrorMsg.textContent = "이메일을 입력해주세요.";
        signInEmailInput.style.border = "1px solid red";
    }
}

function checkEmail(emailInput) {
    if (!emailRegex.test(emailInput)) {
        return false;
    } else {
        return true;
    }
}

function checkEmailValid() {
    const signInEmailInputValue = signInEmailInput.value;

    if (!checkEmail(signInEmailInputValue)) {
        emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
        signInEmailInput.style.border = "1px solid red";
    } else {
        emailErrorMsg.textContent = "";
        signInEmailInput.style.border = "1px solid #9fa6b2";
    }
}

function checkPasswordBlank() {
    const signInPasswordInputValue = signInPasswordInput.value;

    if (!signInPasswordInputValue) {
        passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
        signInPasswordInput.style.border = "1px solid red";
    } else {
        passwordErrorMsg.textContent = "";
        signInPasswordInput.style.border = "1px solid #9fa6b2";
    }
}

function checkMember() {    
    const isTestUser = {
        email: signInEmailInput.value,
        password: signInPasswordInput.value
    };

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(isTestUser),
    }

    // check member using fetch
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', options)
        .then((r) => {
            if (r.status === 200) {
                r.json().then((r) => {
                    // console.log(r.data.accessToken);
                    localStorage.setItem('accessToken', r.data.accessToken);
                    location.href = "/folder";
                })
            } else {
                emailErrorMsg.textContent = "이메일을 확인해주세요.";
                signInEmailInput.style.border = "1px solid red";
                passwordErrorMsg.textContent = "비밀번호를 확인해주세요.";
                signInPasswordInput.style.border = "1px solid red";
            }
        }).catch((error) => {
            console.error(error);
        });
}

function passwordToggle() {
    if (passwordImg.getAttribute('alt') === "closed-eye") {
        passwordImg.setAttribute('alt', "opened-eye");
        passwordImg.setAttribute('src', "./img/unhidden.svg");
        signInPasswordInput.setAttribute('type', 'text');
    } else if (passwordImg.getAttribute('alt') === "opened-eye") {
        passwordImg.setAttribute('alt', "closed-eye");
        passwordImg.setAttribute('src', "./img/hidden.svg");
        signInPasswordInput.setAttribute('type', 'password');
    }
}

function pressEnterToLogin(e) {
    if (e.key === 'Enter') {
        checkMember();
    }
}

signInEmailInput.addEventListener('focusout', checkEmailValid);
signInEmailInput.addEventListener('focusout', checkEmailBlank);
signInEmailInput.addEventListener('keydown', pressEnterToLogin);
signInPasswordInput.addEventListener('focusout', checkPasswordBlank);
signInPasswordInput.addEventListener('keydown', pressEnterToLogin);
signInLogin.addEventListener('click', checkMember);
passwordImg.addEventListener('click', passwordToggle);
