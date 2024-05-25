import { instance } from '@/lib/axios';

const FOLDERS = '/users/1/folders';
const LINKS = '/users/1/links';

// folder name
export async function getFolderProps() {
  try {
    const res = await instance.get(FOLDERS);
    const { data } = res.data;
    return data;
  } catch (error) {
    console.log('ERROR IN SERVER FETCHING DATA: ', error);
    return;
  }
}
export async function getFolderDetailProps(id: string) {
  try {
    const res = await instance.get(`${FOLDERS}/${id}`);
    const { data } = res.data;
    return data;
  } catch (error) {
    console.log('ERROR IN SERVER FETCHING DATA: ', error);
    return;
  }
}

// folder content list
export async function getLinkProps(id?: string) {
  try {
    let endPoint = id ? `${LINKS}?folderId=${id}` : LINKS;
    const res = await instance.get(endPoint);
    const { data } = res.data;
    return data;
  } catch (error) {
    console.log('ERROR IN SERVER FETCHING DATA: ', error);
    return;
  }
}
