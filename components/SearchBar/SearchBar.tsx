import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './SearchBar.styled';

interface PropsType {
  setSearchKeyWord: Dispatch<SetStateAction<string>>;
  searchKeyword: string;
}

function SearchModal({ setSearchKeyWord, searchKeyword }: PropsType) {
  const cancelSearch = () => {
    setSearchKeyWord('');
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.target.value);
  };

  return (
    <S.SearchBarModal>
      <S.SearchForm onSubmit={(e) => e.preventDefault()}>
        <S.SearchBarInput
          placeholder="링크를 검색해 보세요"
          onChange={handleChangeInput}
          id="word"
          value={searchKeyword}
          maxLength={30}
        />
        <S.SearchIcon
          src={searchKeyword ? '/SearchPurple.svg' : '/Search.svg'}
          alt="돋보기 아이콘"
        />
        {searchKeyword && (
          <S.CloseIcon
            src="/close.svg"
            alt="닫기 아이콘"
            onClick={cancelSearch}
          />
        )}
      </S.SearchForm>
    </S.SearchBarModal>
  );
}

export default SearchModal;
