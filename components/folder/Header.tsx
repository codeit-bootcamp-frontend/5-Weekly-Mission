import LinkAppender from './LinkAdder';
import { css, styled } from 'styled-components';
import { FetchData, FoldersData } from '@/common/api';
import { useEffect, useRef, useState } from 'react';
import { SIZE } from '@/constants/size';

const StyledHeader = styled.header`
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
`;

interface PositionedDivProps {
  $isView?: boolean;
}

const PositionedDiv = styled.div<PositionedDivProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  ${(props) => {
    if (!props.$isView) {
      return css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: #f0f6ff;
        padding: 24px 0;
      `;
    }
  }};
`;

const StyledDiv = styled.div`
  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    width: 800px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    width: 700px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    box-sizing: border-box;
    margin: 0px 32px;
    width: 100%;
  }
`;

interface HeaderProps {
  folderData: FetchData<FoldersData>;
}

function Header({ folderData }: HeaderProps) {
  const [isView, setIsView] = useState<boolean>(true);
  const DivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsView(true);
          } else {
            setIsView(false);
          }
        });
      },
      { threshold: 0.9 }
    );

    if (DivRef.current) {
      observer.observe(DivRef.current);
    }

    return () => {
      if (DivRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(DivRef.current);
      }
    };
  }, []);

  return (
    <>
      <StyledHeader ref={DivRef}>
        <PositionedDiv $isView={isView}>
          <StyledDiv>
            <LinkAppender folderData={folderData} />
          </StyledDiv>
        </PositionedDiv>
      </StyledHeader>
    </>
  );
}

export default Header;
