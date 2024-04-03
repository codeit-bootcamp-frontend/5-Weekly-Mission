import { Button } from '@/components/ui/button'
import { Share, Pencil, Trash } from 'lucide-react'

const ActionButtonGroup = () => {
  return (
    <div className='space-x-2 text-xs text-gray-400'>
      <Button variant='ghost' size='sm' className='px-0'>
        <Share className='inline h-5 w-5' />
        <span className='ml-1'>공유</span>
      </Button>
      <Button variant='ghost' size='sm' className='px-0'>
        <Pencil className='inline h-5 w-5' />
        <span className='ml-1'>이름 변경</span>
      </Button>
      <Button variant='ghost' size='sm' className='px-0'>
        <Trash className='inline h-5 w-5' />
        <span className='ml-1'>삭제</span>
      </Button>
    </div>
  )
}

export default ActionButtonGroup
