import { signSection, updateInputStyleByMsg } from "./signModule.js";
import { commonFncInsertTextContent } from "../utils/common.js";
import { deleteAccessToken } from "../utils/webStorage.js";

const elements = signSection.elementComponents;

const postRequestOption = (data) => {
    const option = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    };

    return option;
}

export const signinHandler = async () => {
    const authInfo = {
        email: elements.userEmailInput.value,
        password: elements.userPasswordInput.value
    }

    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',postRequestOption(authInfo));

        if(!response.ok && response.status !== 400) throw new Error(`${response.status} Error..`);
        const result = await response.json();

        if(result.hasOwnProperty('error')){
            if(result.error.name === 'AuthApiError'){
                commonFncInsertTextContent(elements.idValidationDiv, signSection.textMsgComponents.checkEmail);
                commonFncInsertTextContent(elements.passwordValidationDiv, signSection.textMsgComponents.checkPassword);
                updateInputStyleByMsg();
                return false;
            }
        }
        localStorage.setItem('access-token',result.data.accessToken);
        document.querySelector("#frm-linkbrary-login").submit();
    }catch(e){
        deleteAccessToken();
        alert(e.message);
    }
}

export const signupHandler = async () => {
    const authInfo = {
        email: elements.userEmailInput.value,
        password: elements.userPasswordInput.value
    }
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up',postRequestOption(authInfo));

        if(!response.ok) throw new Error(`${response.status} Error..`);
        const result = await response.json();

        localStorage.setItem('access-token',result.data.accessToken);
        document.querySelector("#frm-linkbrary-signup").submit();
    }catch(e){
        deleteAccessToken();
        alert(e.message);
    }
}

export const checkDuplicateEmail = async (inputElement) => {
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email',postRequestOption({email: inputElement.value}));

        if(!response.ok && response.status !== 409) throw new Error(`${response.status} Error..`);
        const result = await response.json();

        if(result.hasOwnProperty('error')){
            commonFncInsertTextContent(elements.idValidationDiv, signSection.textMsgComponents.findDuplicateEmail);
            updateInputStyleByMsg();
            return false;
        }
    }catch(e){
        alert(e.message);
    }
    return true;
}