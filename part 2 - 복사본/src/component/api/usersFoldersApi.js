//'https://bootcamp-api.codeit.kr/api/users/1/folders'

export async function getUserFolders() {
  const BASEURL = "https://bootcamp-api"
  const response = await fetch(
    `${BASEURL}.codeit.kr/api/users/1/folders`,
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