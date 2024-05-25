'use client';
import PostCardList from '@/components/folder/PostCardList';
import SearchInputBox from '@/components/folder/SearchInputBox';
import { IFolderContent, IFolderMenuButton } from '@/components/folder/interface';
import { ContainBody, ContainHead, Container, TitleMs } from '@/styles/commonStyle';
import { BodyInner, ShareHeadInner } from '@/styles/folderStyle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LOGO_IMAGE = '/assets/logo/logo_codeit.svg';
const SEARCH_IMAGE = '/assets/icon/icon_search.svg';

export interface IShareTitle {
  data: Omit<IFolderMenuButton[], 'link'>;
}

export default function SharedClient({ menuData, contentData, pageId }: { menuData: IFolderMenuButton[]; contentData: IFolderContent[]; pageId: string }) {
  const router = useRouter();
  const [searchContatn, setSearchContent] = useState<any>();
  console.log('menuData', menuData);
  // Search
  const handelSearch = (value: string) => {
    let filter;
    if (value) {
      filter = contentData.filter((con: IFolderContent) => {
        if (!con) return;
        return con.description?.includes(value) || con.title?.includes(value) || con.url?.includes(value);
      });
      setSearchContent(filter);
      return;
    }
    setSearchContent(contentData);
  };

  // search
  const contentSearch = searchContatn ?? contentData;

  return (
    <Container>
      <ContainHead>
        <ShareHeadInner>
          <Image
            src={LOGO_IMAGE}
            alt='@코드잇'
            width={60}
            height={60}
          />
          <p>@코드잇</p>
          {menuData[0]?.name && <TitleMs>{menuData[0]?.name}</TitleMs>}
        </ShareHeadInner>
      </ContainHead>
      <ContainBody>
        <BodyInner>
          {/* 검색창 */}
          <SearchInputBox
            $inputIconImg={SEARCH_IMAGE}
            onchange={handelSearch}
          />

          <PostCardList $content={contentSearch} />
        </BodyInner>
      </ContainBody>
    </Container>
  );
}
