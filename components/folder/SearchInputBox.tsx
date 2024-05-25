import { BoxLinkSearch, SearchResults } from '@/styles/folderStyle';
import Image from 'next/image';
import { memo, useState } from 'react';
import Input from '../common/atoms/Input';

interface ISearch {
  $inputIconImg: string;
  onchange: (value: string) => void;
}

function SearchInputBox({ $inputIconImg, onchange }: ISearch) {
  const [value, setValue] = useState('');
  const handleSearchResult = (value: string) => {
    onchange(value);
    setValue(value);
  };

  return (
    <BoxLinkSearch>
      <Input
        inputClass={'input__link--search'}
        placeholder={'링크를 검색해 보세요.'}
        beforeIcon={$inputIconImg}
        btnShow={true}
        btnClass={'button--modal-close'}
        clickEventType={'reset'}
        onchange={handleSearchResult}>
        <Image
          src='/assets/icon/icon_close.svg'
          alt='닫기'
          width={24}
          height={24}
        />
      </Input>
      {value && (
        <SearchResults>
          <span>{value}</span> 으로 검색한 결과입니다.
        </SearchResults>
      )}
    </BoxLinkSearch>
  );
}

export default memo(SearchInputBox);
