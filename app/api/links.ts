import { instance } from '@/lib/utils'

export interface Link {
  created_at: string
  description: string | null
  folder_id: number | null
  id: number
  image_source: string | null
  title: string | null
  updated_at: string | null
  url: string
}

export const getLinksData = async (id?: string) => {
  let data
  if (id) {
    data = await instance.get<{ data: { folder: Link[] } }>(
      `/links?folderId=${id}`,
    )
  } else {
    data = await instance.get<{ data: { folder: Link[] } }>('/links')
  }

  return data.data.data.folder
}

interface LinkCategory {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {
    count: number
  }
}

export const getLinkCategories = async () => {
  const data = await instance.get<{ data: { folder: LinkCategory[] } }>(
    '/folders',
  )

  return data.data.data.folder
}
