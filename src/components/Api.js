const BASE_URL = `https://bootcamp-api.codeit.kr/api`;
const BASE_ERROR_MESSAGE =
  '불러오기 에러이빈다. 일부러 오타낸거이빈다. 감샇바니다.';

export async function getUserData() {
  const response = await fetch(`${BASE_URL}/sample/user`, {
    method: 'GET',
    headers: { accept: `*/*` },
  });
  if (!response.ok) throw new Error(`유저데이터 ${BASE_ERROR_MESSAGE}`);
  const { name, id, email, profileImageSource } = await response.json();

  return { name, id, email, profileImageSource };
}

export async function getFolderData() {
  const response = await fetch(`${BASE_URL}/sample/folder`, {
    method: 'GET',
    headers: { accept: `*/*` },
  });
  if (!response.ok) throw new Error(`폴더데이터 ${BASE_ERROR_MESSAGE}`);
  const result = await response.json();

  return result;
}
