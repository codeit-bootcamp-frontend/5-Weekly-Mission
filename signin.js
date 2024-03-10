const emailInput= document.querySelector('.email-input');
const pwdInput=document.querySelector('.pwd-input');
const loginButton=document.querySelector('.button-sign');
const checkEmail= document.querySelector('.check-email');
const checkPwd= document.querySelector('.check-pwd');

function emailCheck(email_address){		
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test(email_address)){ 
        return false; 
    } else{
        return true;
    }
}

function loginCheck() {
    if ((emailInput.value==='test@codeit.com')&&pwdInput.value==='codeit101') {
        location.href='folder.html';
    } else {
        checkEmail.classList.remove('hide');
        emailInput.classList.add('error-border');
        checkPwd.classList.remove('hide');
        pwdInput.classList.add('error-border');
    }
}

function errorBorder() {
    this.classList.toggle('error-border');
}

emailInput.addEventListener('focusout',(e)=>{
    const blankError=document.querySelector('.email-blank-error');
    const typeError=document.querySelector('.email-type-error');
    if (emailInput.value !== '') {
        blankError.classList.add('hide');
        if(!emailCheck(emailInput.value)) {
            typeError.classList.remove('hide');
        } else {
            typeError.classList.add('hide');
        }
    } else {
        blankError.classList.remove('hide');
        typeError.classList.add('hide');
    } 

    if (blankError.classList.contains('hide') && typeError.classList.contains('hide')) {
        emailInput.classList.remove('error-border');
    } else {
        emailInput.classList.add('error-border');
    }
});

emailInput.addEventListener('focusin',(e)=>{
    checkEmail.classList.add('hide');
    checkPwd.classList.add('hide');
});

pwdInput.addEventListener('focusout',(e)=>{
    const blankError=document.querySelector('.pwd-blank-error');
    console.log(pwdInput.value);
    if (pwdInput.value !== '') {
        blankError.classList.add('hide'); 
        pwdInput.classList.remove('error-border');
    }
    else {
        blankError.classList.remove('hide'); 
        pwdInput.classList.add('error-border');
    }
});

pwdInput.addEventListener('focusin',(e)=>{
    checkEmail.classList.add('hide');
    checkPwd.classList.add('hide');
});

emailInput.addEventListener('keyup',(e)=>{
    if (e.keyCode===13) {
        loginCheck();
    }
 });

pwdInput.addEventListener('keyup',(e)=>{
    if (e.keyCode===13) {
        loginCheck();
    }
});
