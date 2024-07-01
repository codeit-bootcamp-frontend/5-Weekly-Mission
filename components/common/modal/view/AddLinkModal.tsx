import { useState } from 'react';
import check from '@/public/images/icons/check.png';
import Image from 'next/image';
import { FolderData } from '@/api/folder';

interface AddLinkModalProps {
  url?: string;
  folderData?: FolderData[];
}

export default function AddLinkModal({ url, folderData }: AddLinkModalProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <div className='flex justify-center w-full h-5 my-2 text-sm leading-6 text-gray-500 break-all overflow-hidden'>
        {url}
      </div>
      <div className='flex flex-col w-70 gap-2'>
        {folderData?.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedId(item.id);
            }}
            className={`box-border flex justify-between w-full h-10 p-2 ${
              selectedId === null ? idx === 0 : selectedId === item.id ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <div className='flex gap-2'>
              <div className='flex items-center text-lg leading-6 text-gray-800'>{item.name}</div>
            </div>
            <div className='flex justify-end items-center'>
              {(selectedId === null ? idx === 0 : selectedId === item.id) && (
                <Image src={check} alt='check' width={14} height={14} />
              )}
            </div>
          </div>
        ))}
      </div>
      <button className='w-full h-12 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-cyan-400 border-none text-lg font-semibold mt-6'>
        추가하기
      </button>
    </>
  );
}
