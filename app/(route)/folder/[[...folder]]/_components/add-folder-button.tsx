import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export const AddFolderButton = () => {
  return (
    <Button
      className='sm:flex hidden items-center text-indigo-500 hover:text-indigo-500'
      variant='ghost'
    >
      폴더 추가 <Plus className='ml-1 h-4 w-4' />
    </Button>
  )
}
