import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ $empty: number }>`
  gap: 2rem;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$empty > 0 ? 'repeat(3, 1fr)' : 'none'};
  margin: 0 auto;
  position: relative;
  margin-bottom: 10rem;

  @media (max-width: 1199px) {
    grid-template-columns: ${(props) => (props.$empty > 0 ? '1fr 1fr' : '1fr')};
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function ContentsContainer({
  children,
  content,
}: {
  children: ReactNode;
  content: number;
}) {
  return <Container $empty={content}>{children}</Container>;
}

export default ContentsContainer;
