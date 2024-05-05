import { useGetFolders, useGetLinks } from "./data-access";
import Layout from "Layout";
import { FolderPageLayout } from "./page-frame";
import { FolderToolBar } from "./feature";
import { useState } from "react";
import { SelectedFolderId } from "./folderType.ts";
import { SearchBar, LinkForm } from "./ui";

import { CardList } from "./feature/CardList";

const ALL_LINKS_ID = "all";

export const FolderPage = function () {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);

  return (
    <Layout position={"static"}>
      <FolderPageLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
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
