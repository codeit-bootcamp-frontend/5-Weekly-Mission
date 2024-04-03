import api from '@/lib/api'

export interface UserData {
  data: {
    id: number
    created_at: string
    name: string
    image_source: string
    email: string
    auth_id: string
  }[]
}

export const getUserData = async (): Promise<UserData> => {
  const response = await api.get<UserData>('/users/1')
  return response.data
}

interface Category {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {
    count: number
  }
}

export interface Categories {
  data: Category[]
}

export const getUserCategories = async (): Promise<Categories> => {
  const response = await api.get('/users/1/folders')
  return response.data
}

interface UserLink {
  id: number
  created_at: string
  updated_at?: string
  url: string
  title?: string
  description?: string
  image_source?: string
  folder_id?: number
}

export interface UserLinks {
  data: UserLink[]
}

export const getUserLinks = async (): Promise<UserLinks> => {
  const response = await api.get('/users/1/links')
  return response.data
}
