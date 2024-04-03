import api from '@/lib/api'

export interface Link {
  id: number
  createdAt: string
  url: string
  title: string
  description: string
  imageSource?: string
}

interface Owner {
  id: number
  name: string
  profileImageSource: string
}

export interface Folder {
  folder: {
    id: number
    name: string
    owner: Owner
    links: Link[]
    count: number
  }
}

export const getFolderData = async (): Promise<Folder> => {
  const response = await api.get<Folder>('/sample/folder')
  return response.data
}
