const elementComponents = {
    userEmailInput : document.querySelector("#user-email"),
    userPasswordInput : document.querySelector("#user-password"),
    idValidationDiv : document.querySelector("#id-validation-msg"),
    passwordValidationDiv : document.querySelector("#pwd-validation-msg"),
    passwordToggleButton : document.querySelector("#view-password")
}

if(window.location.pathname.includes('/signup')){
    elementComponents.userPasswordVerifyInput = document.querySelector("#verify-password");
    elementComponents.passwordVerifyValidationDiv = document.querySelector("#verify-pwd-validation-msg");
    elementComponents.passwordVerifyToggleButton = document.querySelector("#view-verify-password");
}

const textMsgComponents = {
    checkEmail : "이메일을 확인해 주세요.",
    checkInputEmail : "이메일을 입력해 주세요.",
    checkValidationEmail : "올바른 이메일 주소가 아닙니다.",
    checkPassword : "비밀번호를 확인해 주세요.",
    checkInputPassword : "비밀번호를 입력해 주세요.",
    checkValidationPassword : "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    findDuplicateEmail : "이미 사용 중인 이메일입니다.",
    checkPasswordMatch : "비밀번호가 일치하지 않아요."
}

export { elementComponents, textMsgComponents };
