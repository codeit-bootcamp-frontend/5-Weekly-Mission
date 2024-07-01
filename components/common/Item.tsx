import { calcDateDiff, dateToString } from '@/common/date';
import Link from 'next/link';
import Image from 'next/image';
import noImage from '@/public/images/noImage.jpg';
import star from '@/public/images/star.png';
import kebbab from '@/public/images/kebab.png';
import { useEffect, useRef, useState } from 'react';
import KebbabPopover from '@/components/folder/KebbabPopover';
import { FolderData } from '@/api/folder';
import useModal from '@/hooks/useModal';
import Modal from './modal/Modal';
import DeleteModal from './modal/view/DeleteModal';
import AddLinkModal from './modal/view/AddLinkModal';

interface ItemProps {
  createdAt: string;
  url: string;
  title: string;
  description?: string;
  imageSource?: string;
  folderData?: FolderData[];
  editable?: boolean;
}

function Item({ createdAt, url, title, description, imageSource, folderData, editable }: ItemProps) {
  const [openPopover, setOpenPopover] = useState(false);
  const { modalRef: deleteModalRef, handleOpenModal: handleOpenDeleteModal } = useModal();
  const { modalRef: linkModalRef, handleOpenModal: handleOpenLinkModal } = useModal();
  const [hasImgError, setHasImgError] = useState(false);
  const kebbabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (kebbabRef.current && !kebbabRef.current.contains(e.target as Node)) {
        setOpenPopover(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <article className='relative flex flex-col rounded-[10px] shadow-md border border-transparent hover:border-[#6d6afe] transition-all box-border'>
      {editable && (
        <Image src={star} alt='Favorite toggle' className='absolute w-[34px] h-[34px] top-[15px] right-[15px] z-[99]' />
      )}
      <Link href={url} target='_blank'>
        <div className='w-full h-[200px] overflow-hidden rounded-t-[10px]'>
          <Image
            src={!hasImgError ? imageSource || noImage : noImage}
            width={340}
            height={200}
            priority
            alt={title || 'Empty title'}
            className='w-full h-full object-cover transition-transform duration-300 hover:scale-[1.3]'
            onError={() => {
              setHasImgError(true);
            }}
          />
        </div>
      </Link>
      <div className='box-border h-[135px] p-[15px_20px] flex flex-col gap-[10px]'>
        <div className='flex justify-between w-full h-[17px]'>
          <span className='text-[13px] text-[#666666]'>{calcDateDiff(new Date(), new Date(createdAt))}</span>
          {editable ? (
            <button
              className='relative border-none bg-none cursor-pointer'
              onClick={() => {
                setOpenPopover(true);
              }}
            >
              <Image src={kebbab} alt='kebbab' />
              <div ref={kebbabRef}>
                {openPopover && <KebbabPopover handleDelete={handleOpenDeleteModal} handleAdd={handleOpenLinkModal} />}
              </div>
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <span className='h-[49px] overflow-hidden text-ellipsis block text-[16px] leading-[24px] text-black'>
          {description}
        </span>
        <span className='h-[19px] text-[14px] text-[#333333]'>{dateToString(new Date(createdAt))}</span>
      </div>
      <Modal ref={deleteModalRef} title='링크 삭제' width='360px' height='193px' padding='32px 40px'>
        <DeleteModal subtitle={url} />
      </Modal>
      <Modal ref={linkModalRef} title='폴더에 추가' width='360px' height='auto' padding='32px 40px'>
        <AddLinkModal url={url} folderData={folderData} />
      </Modal>
    </article>
  );
}

export default Item;
