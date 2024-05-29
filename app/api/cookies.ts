'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function createAccessToken(data: string) {
  cookies().set('accessToken', data)
}

export async function getAccessToken() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')
  if (!accessToken) return redirect('/sign-in')

  return accessToken.value
}
