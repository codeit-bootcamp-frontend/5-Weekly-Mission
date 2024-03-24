import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/user-button'
import { SearchBar } from './_components/search-bar'
import { useEffect, useState } from 'react'
import { Card, SkeletonCard } from '@/components/card'
import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'

interface Link {
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
  links: Link[]
  count: number
}

const HomePage = () => {
  const [folderData, setFolderData] = useState<Folder>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100))
        const response = await axios.get<{ folder: Folder }>(
          `${import.meta.env.VITE_BASE_URL}/sample/folder`,
        )
        const folder = response.data.folder
        setFolderData(folder)
      } catch (error) {
        console.error('요청 실패:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFolder()
  }, [])

  return (
    <main className='py-20'>
      <section className='bg-slate-100 flex flex-col items-center py-10'>
        {isLoading && (
          <div className='flex flex-col space-y-3'>
            <Skeleton className='h-14 w-14 rounded-full' />
            <div className='space-y-4'>
              <Skeleton className='h-4' />
              <Skeleton className='h-12' />
            </div>
          </div>
        )}
        {!isLoading && folderData && (
          <>
            <UserButton url={folderData.owner.profileImageSource} size='xl' />
            <p className='mt-2 text-sm text-gray-700'>
              @{folderData.owner.name}
            </p>
            <div className='mt-4 text-4xl font-bold'>{folderData.name}</div>
          </>
        )}
        {!isLoading && !folderData && (
          <Button variant={'primary'} className='rounded-md '>
            로그인
          </Button>
        )}
      </section>
      <section className='lg:w-[1024px] lg:px-0 md:px-14 px-10 w-full mt-10 mx-auto'>
        <SearchBar />
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
          {isLoading &&
            Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          {!isLoading &&
            (folderData ? (
              folderData.links.map((link) => (
                <Card
                  key={link.id}
                  id={link.id}
                  content={link.description}
                  url={link.imageSource!}
                  createdAt={link.createdAt}
                />
              ))
            ) : (
              <div className='flex justify-center text-5xl font-bold col-span-3'>
                콘탠츠가 존재하지 않습니다.
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
