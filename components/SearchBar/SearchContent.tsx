import { Dispatch, SetStateAction } from 'react';
import * as S from './SearchContent.styled';
import SearchModal from './SearchBar';

interface SearchContentProps {
  setSearchKeyWord: Dispatch<SetStateAction<string>>;
  searchKeyword: string;
}
function SearchContent({
  setSearchKeyWord,
  searchKeyword,
}: SearchContentProps) {
  return (
    <>
      <SearchModal
        setSearchKeyWord={setSearchKeyWord}
        searchKeyword={searchKeyword}
      />
      {searchKeyword && (
        <S.SearchResult>
          <p>{searchKeyword}</p>로 검색한 결과입니다.
        </S.SearchResult>
      )}
    </>
  );
}

export default SearchContent;
