import Search from '@/components/common/Search';
import { useEffect, useState } from 'react';
import Items from '../folder/Items';
import { Link } from '@/api/link';

interface ContentProps {
  linkData?: Link[];
}

function Content({ linkData }: ContentProps) {
  const [searchValue, setSearchValue] = useState('');
  const [itemData, setItemData] = useState<Link[] | null | undefined>(linkData);

  useEffect(() => {
    setItemData(
      linkData
        ? [
            ...linkData.filter((item) => {
              return (
                item.url?.includes(searchValue) ||
                item.title?.includes(searchValue) ||
                item.description?.includes(searchValue)
              );
            }),
          ]
        : null
    );
  }, [linkData, searchValue]);

  return (
    <main className='flex justify-center pb-[100px] box-border px-8'>
      <div className='max-w-[1060px] mt-10'>
        <Search placeholder={'링크를 검색해 보세요.'} searchState={searchValue} onInputChange={setSearchValue} />
        <div className='mt-10 grid w-full gap-5 mobile:grid-cols-1 mobile:mb-[60px] tablet:grid-cols-2 tablet:mb-[100px] pc:grid-cols-3 pc:mb-[100px]'>
          <Items shareLinkData={itemData} />
        </div>
      </div>
    </main>
  );
}

export default Content;
