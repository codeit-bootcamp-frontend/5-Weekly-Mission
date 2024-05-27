import { BASE_URL } from "@/constants/url";

const POST_HEADER = {
  "Content-Type": "application/json",
};

interface SignUserData {
  email: string;
  password: string;
}

export const getSignInProfile = async (userToken: string) => {
  let result = null;

  try {
    const response = await fetch(`${BASE_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
  }

  return result;
};

export const getUserInfo = async (userId: string) => {
  let result = null;

  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
  }

  return result;
};

export const postSign = async (apiUrl: string, userData: SignUserData) => {
  let result = null;

  try {
    const response = await fetch(`${BASE_URL}/api/${apiUrl}`, {
      method: "POST",
      headers: POST_HEADER,
      body: JSON.stringify(userData),
    });
    if (!response.ok && response.status !== 400) {
      throw new Error(`${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
  }

  return result;
};

export const postCheckEmail = async (email: string) => {
  let result = null;

  try {
    const response = await fetch(`${BASE_URL}/api/check-email`, {
      method: "POST",
      headers: POST_HEADER,
      body: JSON.stringify({ email: email }),
    });
    if (!response.ok && response.status !== 409) {
      throw new Error(`${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
  }

  return result;
};
