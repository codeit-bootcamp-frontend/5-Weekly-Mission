import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal, { IModalInfo } from '../modal/Modal';
import { BookMarkBtn, CardMenu, CardWrap } from './PostCardStyle';
import { DFlaxAlignCenterBtw, EllipsisLine } from '@/styles/commonStyle';
import { calculateTimeAgo } from '@/src/utils/calcTilmAgo';
import { IModal } from '@/src/constant/modal';
import { instance } from '@/lib/axios';
import { IFolderContent } from './interface';

const EMPTY_IMAGE = '/assets/logo/logo.svg';

type SelectedModalInfo = { $type: string } & Partial<Pick<IModalInfo, '$card_Id' | '$folder_Id' | '$descText'>>;

export default function PostCard({ id, folder_id, image_source, description, created_at, url }: IFolderContent) {
  const [isBookMark, setIsBookMark] = useState(false);
  const [isCardMenu, setIsCardMenu] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalType, setModalType] = useState<SelectedModalInfo>({
    $card_Id: '',
    $type: '',
  });
  const [modalData, setModalData] = useState<IModal<any>>();
  const handelerBookMarkActive = () => setIsBookMark((prev) => !prev);
  const handelerCardDropdown = () => setIsCardMenu((prev) => !prev);

  const handleModalOpen = (type: string) => {
    // 미트볼메뉴-삭제하기
    if (type === 'linkDelete') {
      setModalType({
        $type: type,
        $card_Id: `${id}`,
        $descText: url,
      });
    }
    // 미트볼메뉴-폴더에추가
    if (type === 'folderInAdd') {
      setModalType({
        $type: type,
      });
    }
    setIsModalShow(true);
  };

  const handleModalClose = () => {
    setIsModalShow(false);
  };

  const handleModalProps = async () => {
    // 클릭한 link의 폴더명
    const resMenu = await instance.get(`/users/1/folders`);
    const folderName = resMenu.data.data;
    if (folderName) setModalData(folderName);
  };

  useEffect(() => {
    handleModalProps();
  }, []);

  return (
    <>
      <CardWrap>
        <BookMarkBtn
          className={isBookMark ? 'active' : ''}
          onClick={handelerBookMarkActive}>
          북마크버튼
        </BookMarkBtn>
        <Link
          href={url}
          target='_blank'
          className='card__link'>
          <figure>
            <div className='card__image'>
              {image_source ? (
                <Image
                  fill
                  src={image_source}
                  alt={image_source}
                  sizes='(max-width: 23.4375rem) 300px, 500px'
                  priority
                />
              ) : (
                <Image
                  className='empty'
                  src={EMPTY_IMAGE}
                  alt='로고'
                  width={133}
                  height={25}
                />
              )}
            </div>
            <figcaption className='card__info'>
              <DFlaxAlignCenterBtw className='card__time-ago'>{calculateTimeAgo(`${created_at}`)}</DFlaxAlignCenterBtw>
              <EllipsisLine
                $tline={2}
                className='card__content'>
                {description}
              </EllipsisLine>
              <p className='card__date'>{new Date(`${created_at}`).toLocaleString()}</p>
            </figcaption>
          </figure>
        </Link>
        <CardMenu>
          <button
            className='card__dropdown-contant'
            onClick={handelerCardDropdown}>
            <Image
              src='/assets/icon/icon_dotte.svg'
              alt='메뉴'
              width={21}
              height={17}
            />
          </button>
          {isCardMenu && (
            <div className='card__dropdown-menu'>
              <button
                className='card__menu-btn'
                onClick={() => handleModalOpen('linkDelete')}>
                삭제하기
              </button>
              <button
                className='card__menu-btn'
                onClick={() => handleModalOpen('folderInAdd')}>
                폴더에 추가
              </button>
            </div>
          )}
        </CardMenu>
      </CardWrap>
      <Modal
        onOpen={isModalShow}
        onClose={handleModalClose}
        $type={modalType.$type}
        $card_Id={`${id}`}
        $modalData={modalData}
      />
    </>
  );
}
