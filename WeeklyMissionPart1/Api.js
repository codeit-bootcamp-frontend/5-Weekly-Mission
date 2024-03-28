const BASE_AUTH_URL = `https://bootcamp-api.codeit.kr/api`;
const LOGIN_TOKEN = 'loginToken';
const SIGN_UP_TOKKEN = 'signUpToken';

export async function signUpApi(emailInput, passwordInput) {
  try {
    const response = await fetch(`${BASE_AUTH_URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (!response.ok) {
      throw new Error('회원가입 에러입니다.');
    }
    const result = await response.json();
    const signUpToken = result.data.accessToken;
    localStorage.setItem(SIGN_UP_TOKKEN, signUpToken);
    location.href = './folder';
  } catch (err) {
    alert(err);
  }
}

export async function tryUserCheck(emailInput, passwordInput) {
  const response = await fetch(`${BASE_AUTH_URL}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  });

  if (!response.ok) {
    throw new Error('로그인 에러입니다.');
  }
  const {
    data: { accessToken },
  } = await response.json();
  localStorage.setItem(LOGIN_TOKEN, accessToken);
  location.href = './folder';
}

export async function tryEmailCheck(emailInput) {
  const response = await fetch(`${BASE_AUTH_URL}/check-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
    }),
  });

  if (!response.ok) {
    throw new Error('오류가 발생했습니다. 아쉽게되었네요');
  }
}
