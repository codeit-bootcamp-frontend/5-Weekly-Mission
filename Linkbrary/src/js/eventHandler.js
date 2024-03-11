import { removeErrorMessage } from "./errorMessage";
import { focusOutFunctions, submitFunctions } from "./constants";

function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target.parentElement);
}

function handleFocusOut(event) {
  const focusOutFunction = focusOutFunctions[event.target.id];
  if (focusOutFunction) {
    focusOutFunction(event.target);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const activeElement = document.activeElement;
  if (activeElement) {
    activeElement.blur();
  }
  const submitFunction = submitFunctions[event.target.id];
  submitFunction();
}

function handlePasswordToggleClick(event) {
  event.preventDefault();
  const passwordInput = event.currentTarget.previousElementSibling;
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  const imgs = event.currentTarget.querySelectorAll("img");
  imgs.forEach((img) => {
    img.classList.toggle("hidden");
    img.style.opacity = img.classList.contains("hidden") ? 0 : 1;
  });
  console.log(imgs);
}

function setFocusInOutListenerById(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    target.addEventListener("focus", handleFocusIn);
    target.addEventListener("focusout", handleFocusOut);
  }
}

export {
  handleFocusIn,
  handleFocusOut,
  handleSubmit,
  handlePasswordToggleClick,
  setFocusInOutListenerById,
};
