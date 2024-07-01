// 'https://bootcamp-api.codeit.kr/api/users/1/links

export async function getUserLinks() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/links",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const resData = {
    httpCode: response.status,
    userProfile: await response.json(),
  };
  return resData;
}