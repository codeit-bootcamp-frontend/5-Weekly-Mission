'use client'

import { formatDate, getTimeDifference } from '@/lib/utils'
import { ImageOff, PlusIcon, Star } from 'lucide-react'
import ActionableDropdownMenu from './actionable-dropdown-menu'
import Link from 'next/link'

type Props = {
  id: number
  imgUrl: string | null
  createdAt: string
  content: string
  title: string
}

export const FolderCard = ({
  id,
  imgUrl,
  createdAt,
  content,
  title,
}: Props) => {
  const timeDifference = getTimeDifference(createdAt)
  const date = formatDate(createdAt)

  const addFavorites = (event: React.MouseEvent) => {
    event.preventDefault()
  }

  return (
    <ul>
      <article className='relative group transition flex flex-col rounded-xl shadow-lg cursor-pointer'>
        <div className='md:hidden absolute left-1/2 transform -translate-x-1/2 flex items-center gap-x-1 z-20 bg-violet-500 text-white px-4 py-2 rounded-full bottom-10'>
          폴더 추가 <PlusIcon className='h-6 w-6' />
        </div>
        <div className='relative overflow-hidden aspect-video rounded-t-xl flex items-center justify-center'>
          {imgUrl ? (
            <img
              src={imgUrl}
              className='w-full h-full object-cover object-center group-hover:scale-125 transition duration-300'
            />
          ) : (
            <ImageOff className='h-16 w-16 text-gray-700' />
          )}

          <Star
            type='button'
            onClick={addFavorites}
            className='absolute top-4 right-3 text-gray-500 hover:text-gray-700'
          />
        </div>
        <div className='p-5 space-y-3'>
          <div className='flex justify-between'>
            <div className='text-sm text-muted-foreground'>
              {timeDifference}
            </div>
            <ActionableDropdownMenu title={title} />
          </div>
          <p className='line-clamp-2 font-semibold min-h-[3rem]'>{content}</p>
          <div className='text-sm'>{date}</div>
        </div>
      </article>
    </ul>
  )
}
