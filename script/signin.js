import {
  $emailInput,
  $pwInput,
  $form,
  $eyes,
  $pwAlertDiv,
  $emailAlertDiv,
  validateEmailValue,
  validatePwValue,
  handlePwSight,
  drawAlert,
  message,
  eraseAlert,
  url,
} from './utils/auth.js';
import { signInAccess } from './utils/api.js';

if (localStorage.getItem('signInAccessToken')) location.href = url.folderPage;

const submitEvent = async (event) => {
  const { value: emailValue } = $emailInput;
  const { value: pwValue } = $pwInput;
  event.preventDefault();

  let result;
  try {
    result = await signInAccess(emailValue, pwValue);
  } catch (error) {
    drawAlert($pwAlertDiv, $pwInput, message.wrongAccout);
    drawAlert($emailAlertDiv, $emailInput, message.wrongAccout);
    console.error(error);
    return;
  }

  if (result.data) {
    const { accessToken, refreshToken } = result.data;
    localStorage.setItem('signInAccessToken', accessToken);
    location.href = url.folderPage;
  }
};

$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePwValue);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePwSight);
