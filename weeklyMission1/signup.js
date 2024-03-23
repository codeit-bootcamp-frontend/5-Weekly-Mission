import {
    signUpEmailInput, signUpEmailErrorMsg, signUpPasswordInput, signUpPasswordCheckInput, signUpPasswordErrorMsg,
    passwordCheckErrorMsg, passwordImg, passwordImgCheck, signUpBtn
} from "./tags.js";
import { emailRegex, passwordRegex } from "./regex.js";

// accessToken makes move to '/folder'
if (localStorage.getItem('accessToken')) {
    location.href = '/folder';
}

function signUpCheckEmailBlank() {
    const signUpEmailInputValue = signUpEmailInput.value;

    if (!signUpEmailInputValue) {
        signUpEmailErrorMsg.textContent = "이메일을 입력해주세요.";
        signUpEmailInput.style.border = "1px solid red";
    } else {
        signUpEmailInput.style.border = "1px solid #9fa6b2";
    }
}

function signUpCheckEmail(emailInput) {
    if (!emailRegex.test(emailInput)) {
        return false;
    } else {
        return true;
    }
}

function signUpCheckEmailValid() {
    const signUpEmailInputValue = signUpEmailInput.value;

    if (!signUpCheckEmail(signUpEmailInputValue)) {
        signUpEmailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
        signUpEmailInput.style.border = "1px solid red";
    } else {
        signUpEmailErrorMsg.textContent = "";
        signUpEmailInput.style.border = "1px solid #9fa6b2";
    }

}

async function signUpcheckEmailDuplicate() {
    const signUpEmailInputValue = signUpEmailInput.value;

    // check duplicate email using fetch
    const userEmail = {
        email: signUpEmailInputValue,
    };

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userEmail),
    }

    fetch('https://bootcamp-api.codeit.kr/api/check-email', options)
        .then((r) => {
            if (r.status === 409) {
                r.json().then((r) => {
                    signUpEmailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
                    signUpEmailInput.style.border = "1px solid red";
                })
            } else {
                
            }
        }).catch(error => console.error(error));
}

function signUpCheckPasswordBlank() {
    const signUpPasswordInputValue = signUpPasswordInput.value;

    if (!signUpPasswordInputValue) {
        signUpPasswordErrorMsg.textContent = "비밀번호를 입력해주세요.";
        signUpPasswordInput.style.border = "1px solid red";
    } else {
        signUpPasswordErrorMsg.textContent = "";
        signUpPasswordInput.style.border = "1px solid #9fa6b2";
    }
}

function checkPassword(passwordInput) {
    if (!passwordRegex.test(passwordInput)) {
        return false;
    } else {
        return true;
    }
}

function checkPasswordValid() {
    const signUpPasswordInputValue = signUpPasswordInput.value;

    if (!checkPassword(signUpPasswordInputValue)) {
        signUpPasswordErrorMsg.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        signUpPasswordInput.style.border = "1px solid red";
    } else {
        signUpPasswordErrorMsg.textContent = "";
        signUpPasswordInput.style.border = "1px solid #9fa6b2";
    }
}

function checkPasswordDuplicate() {
    const signUpPasswordInputValue = signUpPasswordInput.value;
    const signUpPasswordCheckInputValue = signUpPasswordCheckInput.value;

    if (signUpPasswordInputValue !== signUpPasswordCheckInputValue) {
        passwordCheckErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
        signUpPasswordCheckInput.style.border = "1px solid red";
    } else {
        passwordCheckErrorMsg.textContent = "";
        signUpPasswordCheckInput.style.border = "1px solid #9fa6b2";
    }

}

function passwordToggle() {
    if (passwordImg.getAttribute('alt') === "closed-eye") {
        passwordImg.setAttribute('alt', "opened-eye");
        passwordImg.setAttribute('src', "./img/unhidden.svg");
        signUpPasswordInput.setAttribute('type', 'text');
    } else if (passwordImg.getAttribute('alt') === "opened-eye") {
        passwordImg.setAttribute('alt', "closed-eye");
        passwordImg.setAttribute('src', "./img/hidden.svg");
        signUpPasswordInput.setAttribute('type', 'password');
    }
}

function passwordToggleCheck() {
    if (passwordImgCheck.getAttribute('alt') === "opened-eye-second") {
        passwordImgCheck.setAttribute('alt', "closed-eye-second");
        passwordImgCheck.setAttribute('src', "./img/hidden.svg");
        signUpPasswordCheckInput.setAttribute('type', 'password');
    } else if (passwordImgCheck.getAttribute('alt') === "closed-eye-second") {
        passwordImgCheck.setAttribute('alt', "opened-eye-second");
        passwordImgCheck.setAttribute('src', "./img/unhidden.svg");
        signUpPasswordCheckInput.setAttribute('type', 'text');
    }
}

function checkMemberValid() {
    const user = {
        email: signUpEmailInput.value,
        password: signUpPasswordInput.value,
      };
    
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    
      fetch('https://bootcamp-api.codeit.kr/api/sign-up', options)
        .then((r) => {
          if (r.status === 200) {
            r.json().then((r) => {
              localStorage.setItem('accessToken', r.data.accessToken);
              location.href = "/folder";
            })
          } else {
            return false;
          }
        }).catch(error => console.error(error));

}

function pressEnterToSignUp(e) {
    if (e.key === 'Enter') {
        checkMemberValid();
    }
}

signUpEmailInput.addEventListener('focusout', signUpCheckEmailValid);
signUpEmailInput.addEventListener('focusout', signUpCheckEmailBlank);
signUpEmailInput.addEventListener('keydown', pressEnterToSignUp);
signUpPasswordInput.addEventListener('focusout', signUpCheckPasswordBlank);
signUpPasswordInput.addEventListener('keydown', pressEnterToSignUp);
signUpEmailInput.addEventListener('focusout', signUpcheckEmailDuplicate);
signUpPasswordInput.addEventListener('focusout', checkPasswordValid);
signUpPasswordCheckInput.addEventListener('focusout', checkPasswordDuplicate);
signUpPasswordCheckInput.addEventListener('keydown', pressEnterToSignUp);
signUpBtn.addEventListener('click', checkMemberValid);
passwordImg.addEventListener('click', passwordToggle);
passwordImgCheck.addEventListener('click', passwordToggleCheck);