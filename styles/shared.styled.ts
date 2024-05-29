import styled from 'styled-components';

export const OwnerProfile = styled.div`
  background-color: var(--Background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 6rem 0;
`;

export const OwnerName = styled.p`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  margin-top: 1.2rem;
  height: 2.4rem;
`;

export const FolderName = styled.p`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2rem;
  height: 5.5rem;
`;

export const SharedContent = styled.div`
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

export const Container = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  position: relative;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
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
