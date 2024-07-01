'use client';

import { useParams } from 'next/navigation';
import Search from '@/components/common/Search';
import Items from './Items';
import FolderList from './FolderList';
import { useEffect, useState } from 'react';
import { FolderData } from '@/api/folder';
import { Link, getLink, getLinkById } from '@/api/link';
import { User } from '@/api/user';
import { useQueries } from '@tanstack/react-query';

interface ContentProps {
  userData?: User;
  folderData?: FolderData[];
}

function Content({ userData, folderData }: ContentProps) {
  const params = useParams();
  const { folderId } = params;
  const folderIdNumber = isNaN(Number(folderId)) ? 0 : Number(folderId);

  const [selectedId, setSelectedId] = useState(folderIdNumber);
  const [searchValue, setSearchValue] = useState('');

  const [
    { data: allLinksData, isSuccess: allLinksSuccess },
    { data: selectedFolderLinksData, isSuccess: selectedFolderLinksSuccess },
  ] = useQueries({
    queries: [
      {
        queryKey: ['allLinks'],
        queryFn: getLink,
        staleTime: 1000 * 60 * 60,
        enabled: selectedId === 0,
      },
      {
        queryKey: ['folderLinks', selectedId],
        queryFn: () => getLinkById({ folderId: selectedId }),
        staleTime: 1000 * 60 * 60,
        enabled: selectedId !== 0,
      },
    ],
  });

  const linkData = selectedId === 0 ? allLinksData : selectedFolderLinksData;
  const isSuccess = selectedId === 0 ? allLinksSuccess : selectedFolderLinksSuccess;

  const [item, setItem] = useState<Link[] | null>(null);

  useEffect(() => {
    if (isSuccess) {
      setItem(
        searchValue
          ? linkData
            ? linkData.filter((item) => {
                return (
                  item.url?.includes(searchValue) ||
                  item.title?.includes(searchValue) ||
                  item.description?.includes(searchValue)
                );
              })
            : null
          : linkData ?? null
      );
    }
  }, [isSuccess, linkData, searchValue]);

  return (
    <main className='flex justify-center pb-[100px] box-border px-[32px]'>
      <div className='max-w-[1060px] mt-[40px]'>
        <Search placeholder={'링크를 검색해 보세요.'} searchState={searchValue} onInputChange={setSearchValue} />
        <FolderList folderData={folderData} selectedId={selectedId} setSelectedId={setSelectedId} />
        <div className='mt-[40px] grid w-full gap-[20px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[60px] sm:mb-[100px] md:mb-[100px]'>
          <Items folderData={folderData} linkData={item} />
        </div>
      </div>
    </main>
  );
}

export default Content;
