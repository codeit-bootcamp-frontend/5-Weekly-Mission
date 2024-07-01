import axios from 'axios';
import { cookies } from 'next/headers';
import instance from './instance';

export interface FolderData {
  id: number;
  created_at: string;
  favorite: string;
  name: string;
  link_count: number;
}

export async function getFolder(): Promise<FolderData[]> {
  try {
    const response = await instance.get('/folders');

    return response.data as FolderData[];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'An unexpected error occurred while fetching folder data');
    } else {
      throw new Error('An unexpected error occurred while fetching folder data');
    }
  }
}

export async function getFolderById({ folderId }: { folderId: number }) {
  try {
    return (await instance.get(`/folders/${folderId}`)).data as FolderData[];
  } catch (error) {
    throw error;
  }
}
