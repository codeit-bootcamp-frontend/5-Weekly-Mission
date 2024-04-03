import { Button } from '@/components/ui/button'
import { UserIcon } from '@/components/user-icon'
import { SearchBar } from '../../components/search-bar'
import { useEffect, useState } from 'react'
import { SkeletonCard } from '@/pages/shared/_components/shard-card'
import { Skeleton } from '@/components/ui/skeleton'
import { Folder, getFolderData } from '@/data/folders'
import { toast } from 'sonner'
import { LinkCardList } from './_components/link-card-list'
import { FeedWrapper } from '@/components/feed-wrapper'
import { HeroWrapper } from '@/components/hero-warpper'
import { CardWrapper } from '@/components/card-wrapper'

const SharedPage = () => {
  const [folderData, setFolderData] = useState<Folder>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const folder = await getFolderData()
        setFolderData(folder)
      } catch (error) {
        console.error('요청 실패:', error)
        toast.error('데이터 요청에 실패하였습니다.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchFolder()
  }, [])

  return (
    <main className='py-20'>
      <HeroWrapper>
        {isLoading ? (
          <div className='flex flex-col space-y-3'>
            <Skeleton className='h-14 w-14 rounded-full' />
            <div className='space-y-4'>
              <Skeleton className='h-4' />
              <Skeleton className='h-12' />
            </div>
          </div>
        ) : folderData ? (
          <>
            <UserIcon
              url={folderData.folder.owner.profileImageSource}
              size='xl'
            />
            <p className='mt-2 text-sm text-gray-700'>
              @{folderData.folder.owner.name}
            </p>
            <div className='mt-4 text-4xl font-bold'>
              {folderData.folder.name}
            </div>
          </>
        ) : (
          <Button variant='primary' className='rounded-md '>
            로그인
          </Button>
        )}
      </HeroWrapper>
      <FeedWrapper>
        <SearchBar />
        <CardWrapper>
          {isLoading ? (
            Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : folderData ? (
            <LinkCardList links={folderData.folder.links} />
          ) : (
            <div className='flex justify-center text-5xl font-bold col-span-3'>
              콘탠츠가 존재하지 않습니다.
            </div>
          )}
        </CardWrapper>
      </FeedWrapper>
    </main>
  )
}

export default SharedPage
