import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import * as S from './SearchBar.styled';

interface PropsType {
  setSearchKeyWord: Dispatch<SetStateAction<string>>;
}

function SearchModal({ setSearchKeyWord }: PropsType) {
  const [text, setText] = useState('');

  const searchLink = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length >= 30) {
      alert('30자 이하로 검색가능합니다!');
      return;
    }
    setSearchKeyWord(text);
  };

  const cancelSearch = () => {
    setText('');
    setSearchKeyWord('');
  };

  return (
    <S.SearchBarModal>
      <S.SearchForm onSubmit={searchLink}>
        <S.SearchBarInput
          placeholder="링크를 검색해 보세요"
          onChange={(e) => setText(e.target.value)}
          id="word"
          value={text}
        />
        <S.SearchIcon
          src={text ? '/SearchPurple.svg' : '/Search.svg'}
          alt="돋보기 아이콘"
        />
        {text && (
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
