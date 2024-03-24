import { elementComponents, textMsgComponents } from "./signComponentsModule.js";
import { emailCheck, passwordCheck } from "../utils/validation.js";
import { commonFncInsertTextContent } from "../utils/common.js";

export const signSection = {

    elementComponents : elementComponents,
    textMsgComponents : textMsgComponents,

    emailLogic : {
        emailValidation : function(inputElement) {
            const emailValidationMsgElement = signSection.elementComponents.idValidationDiv;
            let returnBooleanData = false;

            if(inputElement.value === ''){
                commonFncInsertTextContent(emailValidationMsgElement, textMsgComponents.checkInputEmail);
            }else{
                returnBooleanData = emailCheck(inputElement.value);
                commonFncInsertTextContent(emailValidationMsgElement, textMsgComponents.checkValidationEmail, '', !returnBooleanData);
            }

            updateInputStyleByMsg();
            return returnBooleanData;
        }
    },

    passwordLogic : {
        passwordInsertCheck : function(inputElement) {
            let passwordValidationMsgElement = '';
            if(inputElement.id === 'user-password'){
                passwordValidationMsgElement = signSection.elementComponents.passwordValidationDiv;
            }else if(inputElement.id === 'verify-password'){
                passwordValidationMsgElement = signSection.elementComponents.passwordVerifyValidationDiv;
            }
            commonFncInsertTextContent(passwordValidationMsgElement, textMsgComponents.checkInputPassword, '', inputElement.value === '');
            updateInputStyleByMsg();

            return inputElement.value !== '';
        },

        passwordValidation : function(inputElement) {
            let passwordRegexCheck = passwordCheck(inputElement.value);
            commonFncInsertTextContent(signSection.elementComponents.passwordValidationDiv, textMsgComponents.checkValidationPassword, '', !passwordRegexCheck);
            updateInputStyleByMsg();

            return passwordRegexCheck;
        },

        passwordViewToggle : function(inputElement) {
            let passwordInputBoxElement = '';
            if(inputElement.id === 'view-password'){
                passwordInputBoxElement = signSection.elementComponents.userPasswordInput;
            }else if(inputElement.id === 'view-verify-password'){
                passwordInputBoxElement = signSection.elementComponents.userPasswordVerifyInput;
            }

            passwordInputBoxElement.getAttribute('type') === 'password' ? 
                passwordInputBoxElement.type = 'text' : passwordInputBoxElement.type = 'password';
            
            inputElement.classList.toggle('pwd-eye-on');
        }
    }
}

export const updateInputStyleByMsg = function(){
    const arrayDivEl = [elementComponents.idValidationDiv, 
                        elementComponents.passwordValidationDiv];

    const arrayInputBoxEl = [elementComponents.userEmailInput,
                             elementComponents.userPasswordInput];
    
    if(elementComponents.passwordVerifyValidationDiv !== undefined){
        arrayDivEl.push(elementComponents.passwordVerifyValidationDiv);
        arrayInputBoxEl.push(elementComponents.userPasswordVerifyInput);
    }
    
    arrayDivEl.forEach((divEl, i) => {
        if(divEl.textContent.length > 0){
            arrayInputBoxEl[i].classList.add('err-box');
        }else{
            arrayInputBoxEl[i].classList.contains('err-box') ? 
                arrayInputBoxEl[i].classList.remove('err-box') : undefined ;
        }
    });

}