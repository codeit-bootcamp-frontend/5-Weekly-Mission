import { signSection } from "./signModule.js";
import { isLogin } from "../utils/webStorage.js";
import { signinHandler } from "./signApi.js";

isLogin() ? document.location.href = '/pages/mylink/folder.html' : undefined;

const elements = signSection.elementComponents;
const inputBoxArray = document.querySelectorAll('input');

const excuteEmailLogic = (element) => {
    return signSection.emailLogic.emailValidation(element);
}

const excutePasswordLogic = (element) => {
    return signSection.passwordLogic.passwordInsertCheck(element);
}

const signinValidation = () => {
    if(!excuteEmailLogic(elements.userEmailInput)){ return false; }
    if(!excutePasswordLogic(elements.userPasswordInput)){ return false; }

    signinHandler();
}

// 로그인 정보 입력 이벤트
inputBoxArray.forEach(function(inputBox) {
    inputBox.addEventListener('focusout',function() {
        if(this.id === 'user-email'){
            excuteEmailLogic(this);
        }else if(this.id === 'user-password'){
            excutePasswordLogic(this);
        }
    });
});

// 로그인 정보 Submit
document.querySelector("#frm-linkbrary-login").addEventListener('submit',(e) => {
    e.preventDefault();
    signinValidation();
});

// 패스워드 보이기
elements.passwordToggleButton.addEventListener('click', function() {
    signSection.passwordLogic.passwordViewToggle(this);
});
