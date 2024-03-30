import searchIcon from "../images/SearchIcon.svg";
import styled from "styled-components";
// import CardList from "./CardList.js";
const searchPlaceHolder = "링크를 검색해 보세요.";

const MainContainer = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  padding: 40px 32px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SeachBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 15px 16px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const SearchIcon = styled.img`
  width: 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 0px;
  outline: none;
`;

function Main(items) {
  return (
    <MainContainer>
      <Content>
        <SeachBar>
          <SearchIcon src={searchIcon} />
          <SearchInput type="text" placeholder={searchPlaceHolder} />
        </SeachBar>
        {/* <CardList items={items} /> */}
      </Content>
    </MainContainer>
  );
}

export default Main;
