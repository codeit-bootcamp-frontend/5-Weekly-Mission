import Header from './Header';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import { useEffect, useState } from 'react';
import { getUserData, getFolderData } from './Api';
import Top from './Top';
import styled from 'styled-components';
import Favorite from './Favorite';
import { useData } from '../Hooks/useData';

const TopMargin = styled.div`
  margin-top: 93px;
`;

const FooterMargin = styled.div`
  margin-top: 60px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

function App() {
  const [user, getUser] = useData(getUserData);
  const [folder, getFolder] = useData(getFolderData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = async () => {
    await getUser();
    await getFolder();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header
        isLogIn={isLogIn}
        email={user?.email}
        img={user?.profileImageSource}
      />
      <TopMargin></TopMargin>
      {isLogIn ? (
        <Top
          ownerName={folder?.folder?.owner?.name}
          profileImg={folder?.folder?.owner?.profileImageSource}
          folderName={folder?.folder?.name}
        />
      ) : (
        <div>대충 로그인 해달라고 하는 내용, 따로 과제에 없어서 구현 X</div>
      )}
      <Favorite items={folder?.folder?.links} />
      <FooterMargin></FooterMargin>
      <Footer />
    </>
  );
}

export default App;
