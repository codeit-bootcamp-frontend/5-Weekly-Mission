import { useGetFolders } from "@/src/components-folder/data-access-folder";
import { useGetLinks } from "@/src/components-shared/data-access-link";
import { Layout } from "@/src/components-common/feature-layout";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { FolderToolBar } from "@/src/components-folder/feature-folder-tool-bar";
import { SearchBar } from "@/src/components-common/ui-search-bar";
import { useState } from "react";
import { allLinksId } from "@/src/components-shared/data-access-link/constant";
import { LinkForm } from "@/src/components-folder/feature-link-form";
import { CardList } from "@/src/components-common/feature-card-list";

export default function FolderPage() {
  const { folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<string | number>(
    allLinksId
  );
  const { links, loading } = useGetLinks(selectedFolderId);
  const [keyword, setKeyword] = useState<string>("");

  const filteredLinks = links?.filter(({ id, alt, description }) => {
    return [id, alt, description].join("").includes(keyword);
  });

  return (
    <Layout isSticky={false} showUserProfile={true}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar onKeywordSubmit={setKeyword} />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            setSelectedFolderId={setSelectedFolderId}
            setKeyword={setKeyword}
          />
        }
        cardList={loading ? null : <CardList links={filteredLinks} />}
      />
    </Layout>
  );
}
