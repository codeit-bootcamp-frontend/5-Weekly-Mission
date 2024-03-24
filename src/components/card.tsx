import { formatDate, getTimeDifference } from '@/lib/date'
import { Skeleton } from '@/components/ui/skeleton'
import { ImageOff } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  content: string
  url: string
  createdAt: string
}

export const Card = ({ id, content, url, createdAt }: Props) => {
  return (
    <Link to={`/link/${id}`}>
      <article className='hover:scale-110 transition flex flex-col rounded-xl shadow-lg cursor-pointer'>
        {url ? (
          <img
            src={url}
            className='aspect-video rounded-t-xl object-cover object-center'
          />
        ) : (
          <div className='aspect-video rounded-t-xl flex justify-center items-center bg-gray-100'>
            <ImageOff className='h-16 w-16 text-gray-700' />
          </div>
        )}
        <div className='p-5 space-y-3'>
          <div className='text-sm text-muted-foreground'>
            {getTimeDifference(createdAt)}
          </div>
          <p className='line-clamp-2 font-semibold'>{content}</p>
          <div className='text-sm'>{formatDate(createdAt)}</div>
        </div>
      </article>
    </Link>
  )
}

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
