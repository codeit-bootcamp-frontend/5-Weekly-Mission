import { formatDate, getTimeDifference } from '@/lib/date'
import { Skeleton } from '@/components/ui/skeleton'
import { Ellipsis, ImageOff, PlusIcon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  content?: string
  url?: string
  createdAt: string
}

export const FolderCard = ({ id, url, content, createdAt }: Props) => {
  const timeDifference = getTimeDifference(createdAt)
  const date = formatDate(createdAt)

  const onStarClick = (event: React.MouseEvent) => {
    event.preventDefault()
  }

  const onKebabClick = (event: React.MouseEvent) => {
    event.preventDefault()
  }

  return (
    <Link to={`/links/${id}`}>
      <article className='relative group transition flex flex-col rounded-xl shadow-lg cursor-pointer'>
        <button className='md:hidden absolute left-1/2 transform -translate-x-1/2 flex items-center gap-x-1 z-20 bg-violet-500 text-white px-4 py-2 rounded-full bottom-10'>
          폴더 추가 <PlusIcon className='h-6 w-6' />
        </button>
        <div className='relative overflow-hidden aspect-video rounded-t-xl flex items-center justify-center'>
          {url ? (
            <img
              src={url}
              className='w-full h-full object-cover object-center group-hover:scale-125 transition duration-300'
            />
          ) : (
            <ImageOff className='h-16 w-16 text-gray-700' />
          )}

          <Star
            type='button'
            onClick={onStarClick}
            className='absolute top-4 right-3 text-gray-500 hover:text-gray-700'
          />
        </div>
        <div className='p-5 space-y-3'>
          <div className='flex justify-between'>
            <div className='text-sm text-muted-foreground'>
              {timeDifference}
            </div>
            <Ellipsis
              onClick={onKebabClick}
              className='h-5 w-5 text-gray-500 hover:text-gray-800'
            />
          </div>
          <p className='line-clamp-2 font-semibold min-h-[3rem]'>{content}</p>
          <div className='text-sm'>{date}</div>
        </div>
      </article>
    </Link>
  )
}

export default FolderCard

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='aspect-video' />
      <div className='space-y-4'>
        <Skeleton className='h-6' />
        <Skeleton className='h-6' />
        <Skeleton className='h-6' />
      </div>
    </div>
  )
}
