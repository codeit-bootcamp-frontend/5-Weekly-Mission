'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Props = {
  id: number
  href: string
  name: string
}

export const CategoryButton = ({ id, name, href }: Props) => {
  const params = useParams()

  const isSelected = params.folder && params.folder[0] === id.toString()

  return (
    <Link href={href}>
      <Button
        variant='outline'
        className={cn(
          'border-indigo-500',
          isSelected &&
            'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-500/80 hover:text-white',
        )}
      >
        {name}
      </Button>
    </Link>
  )
}
