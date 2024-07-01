'use client';

import LinkAppender from './LinkAdder';
import { useEffect, useRef, useState } from 'react';
import { FolderData } from '@/api/folder';

interface HeaderProps {
  folderData?: FolderData[];
}

interface PositionedDivProps {
  isView: boolean;
  children: React.ReactNode;
}

function PositionedDiv({ isView, children }: PositionedDivProps) {
  return (
    <div
      className={`flex justify-center w-full ${
        !isView ? 'fixed bottom-0 left-0 right-0 z-100 bg-[#f0f6ff] py-6 z-[999]' : ''
      }`}
    >
      {children}
    </div>
  );
}

function Header({ folderData }: HeaderProps) {
  const [isView, setIsView] = useState<boolean>(true);
  const divRef = useRef<HTMLDivElement>(null);

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

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <>
      <header ref={divRef} className='w-full h-[220px] flex justify-center items-center bg-[#f0f6ff]'>
        <PositionedDiv isView={isView}>
          <div className='w-full box-border px-8 sm:w-[700px] lg:w-[800px]'>
            <LinkAppender folderData={folderData} />
          </div>
        </PositionedDiv>
      </header>
    </>
  );
}

export default Header;
