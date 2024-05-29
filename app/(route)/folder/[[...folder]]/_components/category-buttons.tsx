import { getLinkCategories } from '@/app/api/links'
import { Button } from '@/components/ui/button'
import { CategoryButton } from './category-button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const CategoryButtons = async ({ folderId }: { folderId: string }) => {
  const isSelected = !folderId
  const linkCategories = await getLinkCategories()
  return (
    <div className='flex flex-row flex-wrap gap-y-3 gap-x-3'>
      <Link href={'/folder'}>
        <Button
          variant='outline'
          className={cn(
            'border-indigo-500',
            isSelected &&
              'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-500/80 hover:text-white',
          )}
        >
          전채
        </Button>
      </Link>
      {linkCategories.map((category) => (
        <CategoryButton
          key={category.id}
          href={`/folder/${category.id}`}
          id={category.id}
          name={category.name}
        />
      ))}
    </div>
  )
}
