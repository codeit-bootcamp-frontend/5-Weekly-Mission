import styled from "styled-components";
import MainContent from "../MainContent";
import SearchBar from "../SearchBar";
import FolderBar from "./FolderBar";
import CardList, { LinkItem } from "../CardList";
import { FolderType } from "../../pages/folder/[[...folderid]]";
import { MouseEvent, useRef, useState } from "react";

interface Props {
  selectFolder: (e: MouseEvent<any, MouseEvent>) => void;
  folderInfo: any;
  linkData: any;
  selectedFolder?: FolderType;
}

function Folder({ selectFolder, folderInfo, linkData, selectedFolder }: Props) {
  const search = useRef<HTMLInputElement>(null);
  const [searching, setSearching] = useState<string>("");
  const items = linkData?.data;

  const searchedItems = items?.filter((item: LinkItem) => {
    if (!searching) return true;
    return (
      item.url?.indexOf(searching) >= 0 ||
      item.title?.indexOf(searching) >= 0 ||
      item.description?.indexOf(searching) >= 0
    );
  });

  return (
    <>
      <MainContent>
        <SearchBar
          search={search}
          searching={searching}
          setSearching={setSearching}
        />
        <Frame>
          <FolderBar
            folderInfo={folderInfo}
            onClick={selectFolder}
            selectedFolder={selectedFolder}
          />
          {items?.length ? (
            <CardList
              items={searchedItems}
              folder={folderInfo}
              folderPage={true}
            />
          ) : (
            <NoLink>저장된 링크가 없습니다.</NoLink>
          )}
        </Frame>
      </MainContent>
    </>
  );
}

export default Folder;

const NoLink = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: normal;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
