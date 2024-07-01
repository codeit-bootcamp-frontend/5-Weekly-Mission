// https://bootcamp-api.codeit.kr/api/sample/folder

export async function getFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const resData = {
    httpCode: response.status,
    folders: await response.json(),
  };
  return resData;
}

