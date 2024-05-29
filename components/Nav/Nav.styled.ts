import styled from 'styled-components';

export const NavModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

export const UserProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileBody = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const UserPicture = styled.div`
  position: relative;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 1.4rem;
  overflow: hidden;
`;

export const NavBar = styled.div`
  position: sticky;
  padding: 2rem 20rem;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: var(--Background);
  font-size: 1.6rem;

  @media (max-width: 1199px) {
    padding: 2rem 3.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ToggleMenu = styled.div`
  padding: 1rem;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  position: absolute;
  top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 1.2rem;

  p {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  p:hover {
    background-color: var(--Gray-cta);
  }
`;
