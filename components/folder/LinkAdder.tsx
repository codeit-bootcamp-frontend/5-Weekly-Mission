import linkIcon from '@/public/images/icons/link.png';
import { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import { FolderData } from '@/api/folder';
import useModal from '@/hooks/useModal';
import Modal from '../common/modal/Modal';
import AddLinkModal from '../common/modal/view/AddLinkModal';

interface LinkAppenderProps {
  folderData?: FolderData[];
}

function LinkAppender({ folderData }: LinkAppenderProps) {
  const { modalRef, handleOpenModal } = useModal();
  const [url, setUrl] = useState('');

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setUrl(target.value);
  };

  return (
    <div className='relative w-full'>
      <input
        value={url}
        onChange={handleChange}
        placeholder='링크를 추가해 보세요'
        className='box-border w-full h-[69px] leading-[69px] text-[16px] pl-[50px] border border-[#6d6afe] outline-none rounded-[15px]'
      />
      <Image
        src={linkIcon}
        width={20}
        height={21}
        alt='SearchBarLinkIcon'
        className='absolute top-[25px] left-[20px]'
      />
      <button
        onClick={handleOpenModal}
        className='inline-block w-[80px] h-[37px] rounded-[8px] bg-gradient-to-r from-[#6d6afe] to-[#6ae3fe] text-white text-center text-[14px] font-[600] no-underline border-none absolute top-[16px] right-[20px] cursor-pointer'
      >
        추가하기
      </button>
      <Modal ref={modalRef} title='폴더에 추가' width='360px' height='auto' padding='32px 40px'>
        <AddLinkModal url={url} folderData={folderData} />
      </Modal>
    </div>
  );
}

export default LinkAppender;
