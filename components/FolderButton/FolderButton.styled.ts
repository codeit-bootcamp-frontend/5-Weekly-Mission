import styled from 'styled-components';

export const FolderName = styled.span<{ $select: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Primary);
  background-color: ${(props) => (props.$select ? 'var(--Primary)' : '#fff')};
  cursor: pointer;
  height: 3.5rem;
  font-size: 1.6rem;
  white-space: nowrap;
  color: ${(props) => (props.$select ? '#fff' : '#000')};

  &:hover {
    background-color: var(--Primary);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
