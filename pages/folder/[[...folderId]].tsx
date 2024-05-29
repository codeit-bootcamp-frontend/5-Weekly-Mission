import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/folder.styled';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContentsContainer from '../../components/ContentsContainer';
import Card from '../../components/Card/Card';
import useGetFolder from '../../hooks/useGetFolder';
import useGetFolderList from '../../hooks/useGetFolderList';
import FolderButtonContainer from '../../components/FolderButtonContainer/FolderButtonContainer';
import { useModal } from '../../contexts/ModalContext';
import AddModal from '../../components/Modal/AddModal/AddModal';
import ModalPortal from '../../Portal';
import { UserContext } from '@/contexts/UserContext';
import FolderModals from '@/components/FolderModalContainer/FolderModals';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NotFound from '@/components/NotFound/NotFound';
import DeleteLinkModal from '@/components/Modal/DeleteLinkModal/DeleteLinkModal';
import Loading from '@/components/Loading/Loading';

function Folder() {
  const id = useContext(UserContext);
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
  const folderId = router.query.folderId as string;
  const { linkList, loading } = useGetFolder(id, searchKeyword, folderId);
  const { link, linkLoading } = useGetFolderList(id, folderId);
  const { modalState, openModal } = useModal();
  const obsRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    const access = localStorage.getItem('token');
    if (!access) {
      router.replace('/');
      return;
    }
    const observer = new IntersectionObserver(handleObserver);
    if (!loading && obsRef.current) {
      observer.observe(obsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [loading, folderId, router]);

  useEffect(() => {
    for (let i = 0; i < link.length; i++) {
      setWrongFolder(true);
      if (link[i].id == folderId) {
        setOnSelect({ id: folderId, name: link[i].name });
        setWrongFolder(false);
        break;
      }
    }
  }, [link, folderId]);

  return (
    <>
      {linkLoading || loading ? <Loading /> : null}
      <div ref={obsRef}></div>
      <S.HeaderBody>
        <S.Header $view={toggleInput}>
          <S.HeaderModal>
            <S.LinkIcon>
              <Image src="/link.svg" alt="링크 아이콘" width={20} height={20} />
            </S.LinkIcon>
            <S.AddLinkInput placeholder="링크를 추가해보세요." ref={inputRef} />
            <S.AddButton
              size="sm"
              onClick={() => {
                openModal('add');
                if (inputRef.current) {
                  setUrl(inputRef.current.value);
                }
              }}
            >
              추가하기
            </S.AddButton>
          </S.HeaderModal>
        </S.Header>
      </S.HeaderBody>
      <S.FolderContents>
        <SearchBar setSearchKeyWord={setSearchKeyWord} />
        {searchKeyword && (
          <S.SearchResult>
            <p>{searchKeyword}</p>로 검색한 결과입니다.
          </S.SearchResult>
        )}
        <FolderButtonContainer link={link} setOnSelect={setOnSelect} />
        {folderId && wrongFolder ? (
          <NotFound />
        ) : (
          <>
            <S.FolderModalContainer>
              <p>{folderId ? onSelect.name : '전체'}</p>
              {folderId && (
                <FolderModals
                  id={onSelect.id}
                  name={onSelect.name}
                  setOnSelect={setOnSelect}
                />
              )}
            </S.FolderModalContainer>
            <ContentsContainer content={linkList.length}>
              {linkList.length > 0 ? (
                linkList.map((item) => (
                  <Card
                    item={item}
                    key={item.id}
                    setUrl={setUrl}
                    onSelect={onSelect}
                    setLinkId={setLinkId}
                  />
                ))
              ) : (
                <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
              )}
            </ContentsContainer>
          </>
        )}
        {modalState.add && inputRef.current && (
          <ModalPortal>
            <AddModal link={link} url={url} />
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
