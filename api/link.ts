import axios from 'axios';
import instance from './instance';

export interface Link {
  id: number;
  favorite: string;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

export async function getLink() {
  try {
    return (await instance.get('/links')).data as Link[];
  } catch (error) {
    throw error;
  }
}

export async function getLinkById({ folderId }: { folderId: number }) {
  try {
    return (await instance.get(`/folders/${folderId}/links`)).data as Link[];
  } catch (error) {
    throw error;
  }
}
