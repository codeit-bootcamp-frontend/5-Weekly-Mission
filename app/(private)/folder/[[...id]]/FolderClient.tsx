'use client';
import Button from '@/components/common/atoms/Button';
import FolderButtonList from '@/components/folder/FolderButtonList';
import FolderContentControl from '@/components/folder/FolderContentControl';
import LinkAddHeader from '@/components/folder/LinkAddHeader';
import PostCardList from '@/components/folder/PostCardList';
import SearchInputBox from '@/components/folder/SearchInputBox';
import { IFolderContent, IFolderMenuButton } from '@/components/folder/interface';
import Loading from '@/components/loading/Loading';
import Modal from '@/components/modal/Modal';
import { ContainBody, Container } from '@/styles/commonStyle';
import { BodyInner, BookmarkBox, FolderContainHead } from '@/styles/folderStyle';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ADD_IMAGE = '/assets/icon/icon_primary_add.svg';
const SEARCH_IMAGE = '/assets/icon/icon_search.svg';
const LINK_IMAGE = '/assets/icon/icon_primaty_link.svg';

export interface IFolderClientProps {
  menuData: IFolderMenuButton[];
  contentData: IFolderContent[];
  pageId?: string;
}
export default function FolderClient({ menuData, contentData, pageId }: IFolderClientProps) {
  const [menu, setMenu] = useState(menuData);
  const [content, setContent] = useState(contentData);
  const router = useRouter();
  const [tabTitle, setTabTitle] = useState<string | undefined>('전체');
  const [activeBtn, setActiveBtn] = useState<string>('전체');
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalType, setModalType] = useState<string>('');
  const [searchContatn, setSearchContent] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  // 폴더리스트버튼
  const handleClick = (id: string) => {
    if (!id) return;
    let title = menu.find((data) => {
      return `${data.id}` === `${id}` && data;
    });
    const result = title ? title.name : '전체';

    setTabTitle(result);
    setActiveBtn(id);
  };
  // modal open
  const handleModalOpen = (type: string) => {
    setIsModalShow(true);
    setModalType(type);
  };

  // modal close
  const handleModalClose = () => {
    setIsModalShow(false);
  };

  // // Search
  const handelSearch = (value: string) => {
    let filter;
    if (value) {
      filter = content?.filter((con) => {
        if (!con) return;
        return con.description?.includes(value) || con.title?.includes(value) || con.url?.includes(value);
      });
      setSearchContent(filter);
      return;
    }
    setSearchContent(content);
  };

  // // search
  const contentSearch = searchContatn ?? content;

  useEffect(() => {
    let idExists;
    if (!pageId) {
      router.push(`/folder`);
    } else {
      idExists = menu.some((item: any) => `${item.id}` === `${pageId}`);
    }

    if (idExists === false) {
      // folder가 없을때
      alert('페이지가 없습니다.');
      router.push(`/folder`);
    }

    setIsLoading(true);
  }, [menu, router, pageId]);

  if (!isLoading) return <Loading />;

  return (
    <Container>
      <FolderContainHead className='folder--header'>
        <LinkAddHeader $inputIconImg={LINK_IMAGE} />
      </FolderContainHead>

      <ContainBody className='folder__dody'>
        <BodyInner>
          {/* 검색창 */}
          <SearchInputBox
            $inputIconImg={SEARCH_IMAGE}
            onchange={handelSearch}
          />
          {/* 폴더 리스트 버튼 */}
          <BookmarkBox>
            <FolderButtonList
              $menu={menuData}
              $activeBtnId={activeBtn}
              onClick={handleClick}
            />
            <Button
              btnClass={'button--icon-after button--folder-add'}
              $afterIcon={ADD_IMAGE}
              onclick={() => handleModalOpen('folderAdd')}>
              폴더추가
            </Button>
          </BookmarkBox>
          {/* 탭 타이틀, 설정 버튼 */}
          <FolderContentControl
            id={activeBtn}
            $title={tabTitle}
            onclick={handleModalOpen}
          />
          {/* 컨텐츠 리스트 */}
          <PostCardList $content={contentSearch} />
        </BodyInner>
      </ContainBody>

      <Modal
        onOpen={isModalShow}
        onClose={handleModalClose}
        type={modalType}
        $descText={modalType === 'folderDelete' ? tabTitle : ''}
      />
    </Container>
  );
}
