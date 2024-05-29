const BASE_URL = `https://bootcamp-api.codeit.kr/api`;
const BASE_ERROR_MESSAGE =
  "불러오기 에러이빈다. 일부러 오타낸거이빈다. 감샇바니다.";
export const SIGN_UP_TOKKEN = "signUpToken";
export const LOGIN_TOKEN = "loginToken";

export interface AuthProps {
  Id: string;
  password: string;
}

export async function getUserData(userToken: string) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: { accept: `*/*`, Authorization: userToken },
  });
  if (!response.ok) throw new Error(`유저데이터 ${BASE_ERROR_MESSAGE}`);
  return response.json();
}

export async function getFolderData(folderId?: string | number) {
  const response = await fetch(`${BASE_URL}/folders/${folderId}`, {
    method: "GET",
    headers: { accept: `*/*` },
  });
  if (!response.ok) throw new Error(`폴더데이터 ${BASE_ERROR_MESSAGE}`);
  return response.json();
}

export async function getUsersData(userId?: string | number) {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "GET",
    headers: { accept: `*/*` },
  });
  if (!response.ok) throw new Error(`유저들데이터 ${BASE_ERROR_MESSAGE}`);
  return response.json();
}

export async function getFoldersData(userId: string | number = 1) {
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`, {
    method: "GET",
    headers: { accept: `*/*` },
  });
  if (!response.ok) throw new Error(`폴더들 ${BASE_ERROR_MESSAGE}`);
  return response.json();
}

export async function getFolderDataByToken(userToken: string) {
  const response = await fetch(`${BASE_URL}/folders`, {
    method: "GET",
    headers: { accept: `*/*`, Authorization: userToken },
  });
  if (!response.ok) throw new Error(`폴더들 ${BASE_ERROR_MESSAGE}`);
  return response.json();
}

export async function getLinksData(
  folderId?: string | number,
  userId: string | number = 1
) {
  const response = await fetch(
    `${BASE_URL}/users/${userId}/links?folderId=${folderId}`,
    {
      method: "GET",
      headers: { accept: `*/*` },
    }
  );
  if (!response.ok) throw new Error(`폴더데이터 ${BASE_ERROR_MESSAGE}`);
  return response.json();
}

export async function signUpApi({ Id, password }: AuthProps) {
  try {
    const response = await fetch(`${BASE_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Id,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("회원가입 에러입니다.");
    }
    const result = await response.json();
    const signUpToken = result.data.accessToken;
    localStorage.setItem(SIGN_UP_TOKKEN, signUpToken);
    location.href = "./folder";
  } catch (err) {
    alert(err);
  }
}

export async function tryUserCheck({ Id, password }: AuthProps) {
  const response = await fetch(`${BASE_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: Id,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("로그인 에러입니다.");
  }
  const {
    data: { accessToken },
  } = await response.json();
  localStorage.setItem(LOGIN_TOKEN, accessToken);
  location.href = "./folder";
}

export async function tryEmailCheck(Id: string) {
  const response = await fetch(`${BASE_URL}/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: Id,
    }),
  });

  if (!response.ok) {
    throw new Error("오류가 발생했습니다. 아쉽게되었네요");
  }
}
