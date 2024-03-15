import validatePassword from '../utils/validate-password.js'

export default function displayPasswordError() {
  const password = document.getElementById('signup-password')
  const error = document.getElementById('signup-passwordError')

  const { success, message } = validatePassword(password.value)

  if (!success) {
    password.classList.add('input-error')
    error.textContent = message
    return true
  }

  password.classList.remove('input-error')
  error.textContent = message
}
