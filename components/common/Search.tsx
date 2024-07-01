import searchIcon from '@/public/images/icons/search.png';
import closeButton from '@/public/images/buttons/close2.png';
import { ChangeEvent } from 'react';
import Image from 'next/image';

interface SearchProps {
  placeholder: string;
  searchState?: string;
  onInputChange?: (param: string) => void;
}

function Search({ placeholder, searchState, onInputChange }: SearchProps) {
  return (
    <div className='relative'>
      <input
        placeholder={placeholder}
        value={searchState}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange?.(e.target.value)}
        className='w-full h-[54px] leading-[54px] bg-[#f5f5f5] rounded-[10px] text-[16px] text-[#666666] pl-[40px] border-none outline-none box-border'
      />
      <Image src={searchIcon} width={15} height={15} alt='SearchIcon' className='absolute left-[15px] top-[19px]' />
      <Image
        src={closeButton}
        width={24}
        height={24}
        alt='ClearButton'
        onClick={() => {
          onInputChange?.('');
        }}
        aria-label='ClearButton'
        className='absolute right-[15px] top-[15px] cursor-pointer'
      />
    </div>
  );
}

export default Search;
