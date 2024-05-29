import styled from 'styled-components';

export const ItemCard = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  text-decoration: none;
  color: #000;
  position: relative;
  font-size: 1.6rem;

  &:hover {
    background-color: var(--Background);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const StarIcon = styled.div`
  width: 3.4rem;
  height: 3rem;
  flex-shrink: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1;
`;

export const EmptyImg = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--EmptyArea);
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    opacity: 0.2;
  }
`;

export const ItemImg = styled.div`
  position: relative;
  transition: 0.3s ease;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
  }

  &:hover {
    width: 170%;
  }
`;

export const ImageArea = styled.div`
  border-radius: 1.5rem 1.5rem 0 0;
  height: 23.5rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  width: 100%;
  height: 10.5rem;
  gap: 1rem;
  position: relative;
`;

export const KebabIcon = styled.img`
  cursor: pointer;
  width: 2.1rem;
  height: 1.7rem;
  flex-shrink: 0;
  position: absolute;
  right: 2rem;
  top: 1.5rem;
`;

export const ItemDate = styled.p`
  color: var(--Description);
  font-size: 1.3rem;
`;

export const ItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 0.2rem;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ItemFullDate = styled.p`
  font-size: 1.4rem;
`;
