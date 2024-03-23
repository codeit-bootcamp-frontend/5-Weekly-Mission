import { checkEmailAccess, signUpAccess } from './utils/api.js';
import {
  $emailInput,
  $pwInput,
  $pwVerifyInput,
  $emailAlertDiv,
  $pwAlertDiv,
  $pwVerifyAlertDiv,
  $form,
  $eyes,
  message,
  drawAlert,
  eraseAlert,
  handlePwSight,
  validateEmailValue,
  validatePwValue,
  signupPageStatus,
  url,
} from './utils/auth.js';
import { numberPattern as numPattern, englishPattern as engPattern } from './utils/regx.js';
let { duplicateAccountState, pwFormState, comparePwState } = signupPageStatus;

if (localStorage.getItem('signUpAccessToken')) location.href = url.folderPage;

const checkDuplicateAccount = async () => {
  const { value: emailValue } = $emailInput;
  if (!validateEmailValue()) {
    return;
  }
  try {
    await checkEmailAccess(emailValue);
  } catch (error) {
    if (!emailValue) {
      drawAlert($emailAlertDiv, $emailInput, message.wrongEmail);
      return;
    }
    drawAlert($emailAlertDiv, $emailInput, message.duplicateEmail);
    duplicateAccountState = false;
    console.error(error);
    return;
  }
  duplicateAccountState = true;
};

const checkPwForm = () => {
  const { value: pwValue } = $pwInput;
  const validateResult = engPattern.test(pwValue) && numPattern.test(pwValue) && pwValue.length >= 8;
  validateResult === false
    ? (drawAlert($pwAlertDiv, $pwInput, message.wrongPwForm), (pwFormState = false))
    : (eraseAlert($pwAlertDiv, $pwInput), (pwFormState = true));
};

const comparePw = () => {
  if (!$pwVerifyInput.value) {
    drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.wrongPw);
  } else {
    const validateResult = $pwInput.value === $pwVerifyInput.value;
    validateResult === false
      ? (drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.diffrentPw), (comparePwState = false))
      : (eraseAlert($pwVerifyAlertDiv, $pwVerifyInput), (comparePwState = true));
  }
};

const submitEvent = async (e) => {
  e.preventDefault();
  comparePw();
  checkPwForm();
  checkDuplicateAccount();

  if (duplicateAccountState && pwFormState && comparePwState) {
    let result;
    try {
      result = await signUpAccess($emailInput.value, $pwInput.value);
    } catch (error) {
      console.error(error);
      return;
    }

    if (result.data) {
      const { accessToken, refreshToken } = result.data;
      localStorage.setItem('signUpAccessToken', accessToken);
      location.href = url.folderPage;
    }
  }
};

$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePwValue);
$emailInput.addEventListener('focusout', checkDuplicateAccount);
$pwInput.addEventListener('focusout', checkPwForm);
$pwVerifyInput.addEventListener('focusout', comparePw);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePwSight);
