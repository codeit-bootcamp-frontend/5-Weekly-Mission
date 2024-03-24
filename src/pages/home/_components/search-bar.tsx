import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const SearchBar = () => {
  return (
    <div className='relative'>
      <Search className='absolute h-6 w-6 top-2 left-2 text-gray-500' />
      <Input
        className='border-none bg-gray-100 pl-10'
        placeholder='링크를 검색하세요.'
      />
    </div>
  )
}
