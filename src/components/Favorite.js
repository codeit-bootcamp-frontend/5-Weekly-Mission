import styled from 'styled-components';
import searchIcon from '../asset/Search.svg';
import CardList from './CardList';

const SEARCH_LINK = '링크를 검색해보세요';

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 16px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 0px;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 16px;
`;

function Favorite({ items }) {
  return (
    <Main>
      <Content>
        <SearchBar>
          <SearchIcon src={searchIcon} />
          <SearchInput placeholder={SEARCH_LINK} />
        </SearchBar>
        <CardList items={items} />
      </Content>
    </Main>
  );
}

export default Favorite;
