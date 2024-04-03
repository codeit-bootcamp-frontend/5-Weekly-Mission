import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const SearchBar = () => {
  return (
    <div className='relative'>
      <Search className='absolute h-4 w-4 top-1/2 transform -translate-y-1/2 left-3 text-gray-500' />
      <Input
        className='border-none bg-gray-100 pl-10 py-6'
        placeholder='링크를 검색하세요.'
      />
    </div>
  )
}
