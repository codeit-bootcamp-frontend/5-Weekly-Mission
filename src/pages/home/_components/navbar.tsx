import axios from 'axios'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/user-button'

interface UserData {
  name: string
  email: string
  profileImageSource: string
}

export const Navbar = () => {
  const [userData, setUserData] = useState<UserData>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 100))
        const response = await axios.get<UserData>(
          `${import.meta.env.VITE_BASE_URL}/sample/user`,
        )
        const user = response.data
        setUserData(user)
      } catch (error) {
        console.error('요청 실패:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [])

  return (
    <nav className='z-10 h-20 fixed w-full bg-slate-100 flex items-center justify-between lg:px-36 md:px-20 px-10'>
      <img src='/logo.png' alt='logo' />
      <div className='flex items-center'>
        {isLoading && <Loader className='animate-spin' />}
        {!isLoading &&
          (userData ? (
            <>
              <UserButton url={userData.profileImageSource} />
              <p className='ml-3'>{userData.email}</p>
            </>
          ) : (
            <Button variant={'primary'} className='rounded-md '>
              로그인
            </Button>
          ))}
      </div>
    </nav>
  )
}
