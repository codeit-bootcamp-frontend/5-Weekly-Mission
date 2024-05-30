import AddLinkBar from '@/components/AddLinkBar/AddLinkBar';
import FolderPageContent from '@/components/FolderPageContent/FolderPageContent';
import FolderToolBar from '@/components/FolderToolBar/FolderToolBar';
import LinkCardList from '@/components/LinkCardList/LinkCardList';
import SearchBar from '@/components/SearchBar/SearchBar';
import Script from 'next/script';

export default function Folder() {
  return (
    <>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
        integrity='sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01'
        crossOrigin='anonymous'
      />
      <AddLinkBar />
      <FolderPageContent>
        <SearchBar />
        <FolderToolBar />
        <LinkCardList />
      </FolderPageContent>
    </>
  );
}
