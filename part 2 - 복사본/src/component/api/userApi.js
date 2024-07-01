export async function getUserData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user",
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
