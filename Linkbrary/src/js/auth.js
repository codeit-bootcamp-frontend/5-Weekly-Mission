import {
  handleFocusIn,
  handleFocusOut,
  handleSubmit,
  handlePasswordToggleClick,
} from "./eventHandler";

const passwordToggleButton = document.querySelector(".pw-toggle-btn");

passwordToggleButton.addEventListener("click", handlePasswordToggleClick);
document.addEventListener("focus", handleFocusIn, true);
document.addEventListener("focusout", handleFocusOut);
document.addEventListener("submit", handleSubmit);
