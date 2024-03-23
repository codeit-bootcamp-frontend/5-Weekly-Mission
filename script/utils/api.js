const CODEIT_URL = `https://bootcamp-api.codeit.kr/api`;

export const signInAccess = async (email, password) => {
  const response = await fetch(`${CODEIT_URL}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (!response.ok) {
    throw new Error('로그인에 실패했습니다.');
  }
  const body = await response.json();
  return body;
};

export const checkEmailAccess = async (email) => {
  const response = await fetch(`${CODEIT_URL}/check-email`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  if (!response.ok) {
    throw new Error('이메일이 이미 존재합니다.');
  }
  const body = await response.json();
  return body;
};

export const signUpAccess = async (email, password) => {
  const response = await fetch(`${CODEIT_URL}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }
  const body = await response.json();
  return body;
};
