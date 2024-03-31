import styled from "styled-components";
import searchIcon from "../images/SearchIcon.svg";
import Card from "./Card.js";

const MainContainer = styled.main`
  width: 100%;
  heidght: auto;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.div`
  position: relative;
  width: 1060px;
  margin: 0 auto;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 10px;
  padding: 15px 24px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 35%;
  left: 6px;
  width: 16px;
  height: 16px;
`;

const SearchBarSection = () => {
  return (
    <SearchBar>
      <SearchIcon src={searchIcon} alt="검색 돋보기 아이콘" />
      <SearchInput type="search" placeholder="링크를 검색해 보세요." />
    </SearchBar>
  );
};

function Main() {
  return (
    <>
      <MainContainer>
        <SearchBarSection />
        <Card />
      </MainContainer>
    </>
  );
}

export default Main;
