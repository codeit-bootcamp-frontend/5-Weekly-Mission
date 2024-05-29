import { instance } from '@/lib/axios';

export interface IModal<T> {
  title: string;
  titleDescText?: string | null;
  bodyType?: string | null;
  buttonStyle?: string | null;
  buttonText?: string | null;
  modalData?: T;
}

interface IModalItem<T> {
  [key: string]: IModal<T>;
}

// 폴더에 추가의 폴더메뉴 리스트
export async function fetchFolderInAddData() {
  try {
    const resMenu = await instance.get(`/users/1/folders`);
    return resMenu.data;
  } catch (error) {
    console.error('Error fetching folder data:', error);
  }
}

export const modalOrder: IModalItem<Promise<any>> = {
  folderChangeName: {
    title: '폴더 이름 변경',
    bodyType: 'input',
    buttonStyle: 'button--gradient large full',
    buttonText: '변경하기',
  },

  folderAdd: {
    title: '폴더 추가',
    bodyType: 'input',
    buttonStyle: 'button--gradient large full',
    buttonText: '추가하기',
  },

  folderShare: {
    title: '폴더 공유',
    bodyType: 'sns',
  },

  folderDelete: {
    title: '폴더 삭제',
    buttonStyle: 'button--red large full',
    buttonText: '삭제하기',
  },

  linkDelete: {
    title: '링크 삭제',
    buttonStyle: 'button--red large full',
    buttonText: '삭제하기',
  },

  folderInAdd: {
    title: '폴더에 추가',
    bodyType: 'checkbox',
    buttonStyle: 'button--gradient large full',
    buttonText: '추가하기',
    modalData: fetchFolderInAddData(),
  },
};
