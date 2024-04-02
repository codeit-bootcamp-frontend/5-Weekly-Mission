import api from '@/lib/api'

export interface UserData {
  name: string
  email: string
  profileImageSource: string
}

export const getUserData = async (): Promise<UserData> => {
  const response = await api.get<UserData>('/sample/user')
  return response.data
}
