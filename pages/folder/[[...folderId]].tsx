import { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/folder.styled';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import useGetFolder, { LinkData } from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useModal } from '../../contexts/ModalContext';
import AddModal from '../../components/Modal/AddModal/AddModal';
import ModalPortal from '../../Portal';
import FolderModals from '@/components/FolderModalContainer/FolderModals';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NotFound from '@/components/NotFound/NotFound';
import DeleteLinkModal from '@/components/Modal/DeleteLinkModal/DeleteLinkModal';
import Loading from '@/components/Loading/Loading';
import SearchContent from '@/components/SearchBar/SearchContent';
import useDebounce from '@/hooks/useDebounce';
import { urlCheck } from '@/util/util';

function Folder() {
  const [onSelect, setOnSelect] = useState({
    id: '',
    name: '',
  });
  const [searchKeyword, setSearchKeyWord] = useState('');
  const [url, setUrl] = useState('');
  const [toggleInput, setToggleInput] = useState(true);
  const [wrongFolder, setWrongFolder] = useState(false);
  const [linkId, setLinkId] = useState(0);
  const router = useRouter();
  const { deBounceValue } = useDebounce(searchKeyword, 500);
  const folderId = router.query.folderId as string;
  const { linkList, linkLoading } = useGetFolder(deBounceValue, folderId);
  const {
    folderList,
    isPending: folderLoading,
    favoriteFolder,
  } = useGetFolderList();
  const { modalState, openModal } = useModal();
  const obsRef = useRef(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setToggleInput(false);
        return;
      } else {
        setToggleInput(true);
        return;
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (!linkLoading && obsRef.current) {
      observer.observe(obsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [linkLoading, folderId]);

  useEffect(() => {
    for (let i = 0; i < folderList.length; i++) {
      setWrongFolder(true);
      if (folderList[i].id == folderId) {
        setOnSelect({ id: folderId, name: folderList[i].name });
        setWrongFolder(false);
        break;
      }
    }
  }, [folderList, folderId]);

  return (
    <>
      {(linkLoading || folderLoading) && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div ref={obsRef}></div>
      <S.HeaderBody>
        <S.Header $view={toggleInput}>
          <S.HeaderModal>
            <S.LinkIcon>
              <Image src="/link.svg" alt="링크 아이콘" width={20} height={20} />
            </S.LinkIcon>
            <S.AddLinkInput
              placeholder="링크를 추가해보세요 (https://example/com)"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              value={url}
            />
            <S.AddButton
              size="sm"
              onClick={() => {
                if (url) {
                  const result = urlCheck(url);
                  if (result) {
                    openModal('add');
                  } else {
                    alert('올바른 url이 아닙니다!');
                  }
                }
              }}
              disabled={url ? false : true}
            >
              추가하기
            </S.AddButton>
          </S.HeaderModal>
        </S.Header>
      </S.HeaderBody>
      <S.FolderContents>
        <SearchContent
          searchKeyword={searchKeyword}
          setSearchKeyWord={setSearchKeyWord}
        />
        <FolderButtonContainer link={folderList} />
        {folderId && wrongFolder ? (
          <NotFound />
        ) : (
          <>
            <S.FolderModalContainer>
              <p>{folderId ? onSelect.name : '전체'}</p>
              {folderId != favoriteFolder && folderId && (
                <FolderModals id={onSelect.id} name={onSelect.name} />
              )}
            </S.FolderModalContainer>
            <ContentsContainer content={linkList.length}>
              {linkList[0] ? (
                linkList.map((item: LinkData, index) => (
                  <Card
                    item={item}
                    key={item.id}
                    setUrl={setUrl}
                    setLinkId={setLinkId}
                    isActive={true}
                    index={index}
                    favoriteFolder={favoriteFolder}
                  />
                ))
              ) : (
                <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
              )}
            </ContentsContainer>
          </>
        )}
        {modalState.add && (
          <ModalPortal>
            <AddModal link={folderList} url={url} setUrl={setUrl} />
          </ModalPortal>
        )}
        {modalState.deleteLink && (
          <ModalPortal>
            <DeleteLinkModal id={linkId} />
          </ModalPortal>
        )}
      </S.FolderContents>
    </>
  );
}

export default Folder;
