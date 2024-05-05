import { useGetFolders, useGetLinks } from "./data-access";
import Layout from "Layout";
import { FolderPageLayout } from "./page-frame";
import { FolderToolBar } from "./feature";
import { useState } from "react";
import { SearchBar, LinkForm } from "./ui";
import { useIntersectionObserver } from "./util/useIntersectionObserver.ts";
import { useSearchLink } from "./util/useSearchLink.ts";
import { CardList } from "./feature/CardList";

const ALL_LINKS_ID = "all";

type SelectedFolderId = number | "all";

export const FolderPage = function () {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] =
    useState < SelectedFolderId > (ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } =
    useIntersectionObserver < HTMLDivElement > false;

  return (
    <Layout position={"static"}>
      <FolderPageLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={links} />}
      />
    </Layout>
  );
};
