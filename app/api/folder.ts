import { instance } from '@/lib/utils'

interface FolderLink {
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

interface Folder {
  id: number
  name: string
  owner: Owner
  links: FolderLink[]
  count: number
}

export const getFolderData = async () => {
  const data = await instance.get<{ folder: Folder }>('/folders')

  return data.data.folder
}
