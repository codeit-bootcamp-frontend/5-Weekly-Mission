import { useState } from 'react';
import * as S from '../../styles/shared.styled';
import { getFolderData, getUserData } from '../../service/api';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useGetFolder from '@/hooks/useGetFolder';
import ContentsContainer from '@/components/ContentsContainer';
import Loading from '@/components/Loading/Loading';
import useDebounce from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';

function Shared() {
  const [searchKeyword, setSearchKeyWord] = useState('');
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const { deBounceValue } = useDebounce(searchKeyword, 500);
  const { linkList, linkLoading } = useGetFolder(deBounceValue, folderId);
  const { data: folderInfo } = useQuery({
    queryKey: ['sharedFolder'],
    queryFn: () => getFolderData(folderId),
    enabled: !!folderId,
    staleTime: 60 * 1000 * 60,
  });

  const { data: owner } = useQuery({
    queryKey: ['sharedOwner'],
    queryFn: () => getUserData(folderInfo?.data[0].user_id),
    enabled: !!folderInfo,
    staleTime: 60 * 1000 * 60,
  });

  return (
    <>
      {linkLoading && <Loading />}
      <S.OwnerProfile>
        <Image
          src={owner?.data[0].image_source}
          alt="owner 이미지"
          width={60}
          height={60}
        />
        <S.OwnerName>{owner?.data[0].name}</S.OwnerName>
        <S.FolderName>{folderInfo?.data[0].name}</S.FolderName>
      </S.OwnerProfile>
      <S.SharedContent>
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyWord={setSearchKeyWord}
        />
        {searchKeyword && (
          <S.SearchResult>
            <p>{searchKeyword}</p>로 검색한 결과입니다.
          </S.SearchResult>
        )}
        <ContentsContainer content={linkList.length}>
          {linkList.length > 0 ? (
            linkList.map((item, index) => (
              <Card item={item} key={item.id} isActive={false} index={index} />
            ))
          ) : (
            <S.EmptyFolder>저장된 링크가 없습니다.</S.EmptyFolder>
          )}
        </ContentsContainer>
      </S.SharedContent>
    </>
  );
}

export default Shared;
