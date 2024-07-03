import { Links } from '@/hooks/useGetFolder';
import axios from '../instance/instance';

interface Link {
  imageSource?: string;
  image_source: string;
  createdAt?: string;
  created_at: string;
}

export async function getSampleFolder() {
  try {
    const { data } = await axios.get('/sample/folder');
    if (data && data.folder && data.folder.links) {
      data.folder.links.forEach((link: Link) => {
        if (link.imageSource) {
          link.image_source = link.imageSource;
          delete link.imageSource;
        }
        if (link.createdAt) {
          link.created_at = link.createdAt;
          delete link.createdAt;
        }
      });
    }
    return data;
  } catch (error) {
    console.error('Error fetching sample folder:', error);
    throw error;
  }
}

export async function getFolder() {
  try {
    const data = await axios.get(`/folders`);
    return data;
  } catch (error) {
    console.error('Error fetching folder:', error);
    throw error;
  }
}

export async function getFolderData(folderId: string) {
  try {
    const data = await axios.get(`/folders/${folderId}`);
    return data;
  } catch (error) {
    console.error('Error fetching folder:', error);
    throw error;
  }
}

export async function getFolderList(folderId: string) {
  let query;
  if (folderId) {
    query = `/folders/${folderId}/links`;
  } else {
    query = '/links';
  }
  const result = await axios.get(`${query}`);
  return result;
}

export async function getUser() {
  const { data } = await axios.get('/users');
  return data;
}

export async function getUserData(id: string) {
  try {
    const data = await axios.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function postSignIn(id: string, password: string) {
  const data = await axios.post(
    '/auth/sign-in',
    {
      email: id,
      password: password,
    },
    {
      headers: { 'exclude-access-token': true },
    }
  );
  return data;
}

export async function postCheckEmail(email: string) {
  const { data } = await axios.post('/users/check-email', {
    email: email,
  });
  return data;
}

export async function postSignUp(id: string, password: string) {
  const result = await axios.post('/auth/sign-up', {
    email: id,
    password: password,
  });
  return result;
}

export async function postFolder(name: string) {
  try {
    const { data } = await axios.post('/folders', {
      name: name,
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching post folder:', error);
  }
}

export async function deleteFolder(folderId: string) {
  try {
    const { data } = await axios.delete(`/folders/${folderId}`);
    return data;
  } catch (error) {
    console.error('Error fetching post folder:', error);
  }
}

export async function postLink(folderId: string, url: string) {
  try {
    const data = await axios.post('/links', {
      url: url,
      folderId: folderId,
    });
    return data;
  } catch (error) {
    alert('url과 폴더를 지정해주세요!');
    console.error('Error fetching post folder:', error);
  }
}

export async function deleteLink(linkId: number) {
  try {
    const { data } = await axios.delete(`/links/${linkId}`);
    return data;
  } catch (error) {
    console.error('Error fetching post folder:', error);
  }
}

export async function putFolder(folderId: string, name: string) {
  try {
    const { data } = await axios.put(`/folders/${folderId}`, {
      name: name,
    });
    return data;
  } catch (error) {
    alert('이름 수정에 실패했습니다!');
    console.error('Error fetching put folder:', error);
  }
}

export async function putLinkLike(linkId: string, favorite: boolean) {
  const data = await axios.put(`/links/${linkId}`, {
    favorite: favorite,
  });
  return data;
}
