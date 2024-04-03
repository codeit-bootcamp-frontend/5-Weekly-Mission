import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'lucide-react'

export const LinkSearchBar = () => {
  return (
    <div className='w-full px-10 lg:px-0 flex justify-center'>
      <div className='relative my-10 w-full lg:w-[768px] lg:px-0'>
        <Link className='absolute top-1/2 transform -translate-y-1/2 left-5 text-blue-500 h-5 w-5' />
        <Input
          placeholder='링크를 추가해 보세요'
          className='border-blue-500 py-8 pl-12 pr-28 rounded-xl'
        />
        <Button
          className='absolute top-1/2 transform -translate-y-1/2 right-5'
          variant='primary'
          size='sm'
        >
          추가하기
        </Button>
      </div>
    </div>
  )
}
