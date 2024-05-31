import Search from '@/components/common/Search';
import styled from 'styled-components';
import { FetchData, LinkData } from '@/common/api';
import { useEffect, useState } from 'react';
import { SIZE } from '@/constants/size';
import Items from '../folder/Items';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  box-sizing: border-box;
  padding: 0px 32px 0px 32px;
`;

const StyledDiv = styled.div`
  max-width: 1060px;
  margin-top: 40px;
`;

const GridDiv = styled.div`
  margin-top: 40px;
  display: grid;
  width: 100%;
  gap: 20px;

  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 100px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
`;

interface ContentProps {
  linkData: { data: LinkData[] | null; loading: boolean; error: Error | null };
}

function Content({ linkData }: ContentProps) {
  const [searchValue, setSearchValue] = useState('');

  const [itemData, setItemData] = useState<FetchData<LinkData[]>>(linkData);

  useEffect(() => {
    setItemData({
      data: linkData.data
        ? [
            ...linkData.data.filter((item) => {
              return (
                item.url?.includes(searchValue) ||
                item.title?.includes(searchValue) ||
                item.description?.includes(searchValue)
              );
            }),
          ]
        : null,
      loading: linkData.loading,
      error: linkData.error,
    });
  }, [linkData, searchValue]);

  return (
    <StyledMain>
      <StyledDiv>
        <Search placeholder={'링크를 검색해 보세요.'} searchState={searchValue} onInputChange={setSearchValue}></Search>
        <GridDiv>
          <Items shareLinkData={itemData} />
        </GridDiv>
      </StyledDiv>
    </StyledMain>
  );
}

export default Content;
