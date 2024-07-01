import { useEffect, useState } from 'react';
import FolderBox from './FolderBox';
import shareButtonImg from '@/public/images/buttons/share.png';
import nameChangeButtonImg from '@/public/images/buttons/changeName.png';
import deleteButtonImg from '@/public/images/buttons/delete.png';
import { useScript } from '@/hooks/useScript';
import Image from 'next/image';
import { FolderData } from '@/api/folder';
import AddModal from '../common/modal/view/AddModal';
import ShareModal from '../common/modal/view/ShareModal';
import DeleteModal from '../common/modal/view/DeleteModal';
import ChangeModal from '../common/modal/view/ChangeModal';
import useModal from '@/hooks/useModal';
import Modal from '../common/modal/Modal';

declare global {
  interface Window {
    // eslint-disable-next-line
    Kakao: any;
  }
}

interface FolderListProps {
  folderData?: FolderData[];
  selectedId: number;
  setSelectedId: (id: number) => void;
}

function FolderList({ folderData, selectedId, setSelectedId }: FolderListProps) {
  const [folderName, setFolderName] = useState('전체');

  const { modalRef: addModalRef, handleOpenModal: handleOpenAddModal } = useModal();
  const { modalRef: shareModalRef, handleOpenModal: handleOpenShareModal } = useModal();
  const { modalRef: changeModalRef, handleOpenModal: handleOpenChangeModal } = useModal();
  const { modalRef: deleteModalRef, handleOpenModal: handleOpenDeleteModal } = useModal();

  const [scriptLoading, scriptError] = useScript('https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js');

  useEffect(() => {
    if (!scriptLoading && scriptError === null) {
      if (window.Kakao?.isInitialized()) return;
      window.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }
  }, [scriptLoading, scriptError]);

  const shareKakao = () => {
    const url = 'https://' + window.location.host + '/shared/' + selectedId;

    window.Kakao?.Share?.sendDefault({
      objectType: 'text',
      text: url,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    });
  };

  function shareFacebook() {
    const url = 'https://' + window.location.host + '/shared/' + selectedId;
    window.open('https://www.facebook.com/sharer.php?u=' + url, 'facebook', 'toolbar=0,status=0,width=655,height=520');
  }

  return (
    <>
      <div className='flex justify-between mt-10 w-full max-w-[687px] md:max-w-[700px] lg:max-w-[1060px]'>
        <div>
          <FolderBox
            key={0}
            id={0}
            name={'전체'}
            selected={selectedId === 0}
            setSelectedId={setSelectedId}
            setFolderName={setFolderName}
          />
          {folderData &&
            folderData.map((item) => (
              <FolderBox
                key={item.id}
                id={item.id}
                name={item.name}
                selected={selectedId === item.id}
                setSelectedId={setSelectedId}
                setFolderName={setFolderName}
              />
            ))}
        </div>
        <span
          className='inline-block h-[35px] cursor-pointer text-[16px] leading-[35px] md:border-radius-[5px] md:px-[5px] md:text-[#6d6afe] fixed left-1/2 transform -translate-x-1/2 bottom-[101px] z-[9999] md:relative md:left-auto md:transform-none md:bottom-auto md:bg-transparent md:w-auto md:text-center bg-[#6d6afe] text-white rounded-[20px] w-[127px] text-center'
          onClick={handleOpenAddModal}
        >
          폴더 추가 +
        </span>
      </div>
      <div className='flex justify-between mt-1 mb-[-25px]'>
        <h2>{folderName}</h2>
        <div className='flex flex-col justify-center'>
          {folderName === '전체' ? null : (
            <div>
              <button onClick={handleOpenShareModal} className='border-none bg-white cursor-pointer'>
                <Image src={shareButtonImg} width={47} height={19} alt='Share Button' />
              </button>
              <button onClick={handleOpenChangeModal} className='border-none bg-white cursor-pointer'>
                <Image src={nameChangeButtonImg} width={74} height={19} alt='Name Change Button' />
              </button>
              <button onClick={handleOpenDeleteModal} className='border-none bg-white cursor-pointer'>
                <Image src={deleteButtonImg} width={47} height={19} alt='Delete Button' />
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal ref={addModalRef} title='폴더 추가' width='360px' height='239px' padding='32px 40px'>
        <AddModal />
      </Modal>
      <Modal ref={shareModalRef} title='폴더 공유' width='360px' height='209px' padding='32px 40px'>
        <ShareModal subtitle={folderName} shareKakao={shareKakao} shareFacebook={shareFacebook} folderId={selectedId} />
      </Modal>
      <Modal ref={changeModalRef} title='폴더 이름 변경' width='360px' height='239px' padding='32px 40px'>
        <ChangeModal />
      </Modal>
      <Modal ref={deleteModalRef} title='폴더 삭제' width='360px' height='193px' padding='32px 40px'>
        <DeleteModal subtitle={folderName} />
      </Modal>
    </>
  );
}

export default FolderList;
