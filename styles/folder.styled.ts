import styled from 'styled-components';
import { Cta } from '../components/Button/Button.styled';
import { FolderName } from '../components/FolderButton/FolderButton.styled';

export const AddButton = styled(Cta)`
  position: absolute;
  padding: 1rem 1.6rem;
  font-size: 1.6rem;
  right: 2rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const EmptyFolder = styled.div`
  height: 50vh;
  font-size: 1.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
`;

export const AddLinkInput = styled.input`
  width: 100%;
  height: 6.9rem;
  padding: 1.6rem 4.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--Primary);
  background: #ffffff;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const LinkIcon = styled.div`
  position: absolute;
  left: 2rem;
  @media (max-width: 768px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;
`;

export const Header = styled.div<{ $view: boolean }>`
  background-color: var(--Background);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: ${(props) => props.$view && 'fixed'};
  bottom: ${(props) => props.$view && '0'};
  z-index: 10;
  @media (max-width: 1199px) {
    padding: 0 3.2rem;
  }
`;

export const HeaderBody = styled.div`
  width: 100%;
  height: 12rem;
  background-color: var(--Background);
`;

export const FolderContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 106rem;

  @media (max-width: 1199px) {
    padding: 0 3.2rem;
  }
`;

export const FolderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

export const TotalFolderButton = styled(FolderName)``;

export const FolderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FolderModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2.4rem auto;

  p {
    font-family: Pretendard;
    font-weight: 600;
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
  }
`;

export const FolderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const FolderModalIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--Linkbrary-gray60);
  font-size: 1.4rem;
`;

export const SearchResult = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 4rem;
  color: var(--Linkbrary-gray60);
  font-family: Pretendard;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;

  p {
    color: var(--Linkbrary-gray100);
  }
`;
