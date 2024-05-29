import { instance } from '@/lib/utils'

interface UserData {
  id: number
  created_at: string
  name: string
  image_source: string
  email: string
  auth_id: string
}

export const getUserData = async () => {
  const data = await instance.get<{ data: UserData[] }>('/users')
  return data.data.data[0]
}
