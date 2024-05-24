import { useGetFolder } from "@/src/components-folder/data-access-folder";
import { Layout } from "@/src/components-common/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/components-common/feature-card-list";
import { FolderInfo } from "@/src/components-shared/ui-folder-info";
import { ReadOnlyCard } from "@/src/components-shared/ui-read-only-card";
import { SearchBar } from "@/src/components-common/ui-search-bar";
import { useMemo, useState } from "react";
import { defaultImage } from "@/src/components-common/ui-card-image/constant";

export default function SharedPage() {
  const { folder } = useGetFolder();

  const profile = useMemo(() => {
    if (!folder) return null;
    const { profileImage, ownerName, folderName, links } = folder;
    return { profileImage, ownerName, folderName, links };
  }, [folder]);

  const [keyword, setKeyword] = useState<string>("");

  return (
    <Layout isSticky={true} showUserProfile={true}>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profile?.profileImage ?? defaultImage}
            ownerName={profile?.ownerName ?? ""}
            folderName={profile?.folderName ?? ""}
          />
        }
        searchBar={<SearchBar onKeywordSubmit={setKeyword} />}
        cardList={
          <CardList links={profile?.links}>
            {profile?.links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}
