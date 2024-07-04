import { useGetFolder, useGetUser, useGetSharedLinks } from "@/src/data-access";
import {
  CardList,
  Layout,
  ReadOnlyCard,
  SearchBar,
  FolderInfo,
} from "@/src/ui";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { useSearchLink } from "@/src/util";
import { useRouter } from "next/router";

const SharedPage = () => {
  const router = useRouter();
  const { folderId } = router.query;
  const { data: folder } = useGetFolder(folderId as string);
  const { data: owner } = useGetUser(folder.userId);
  const { data: links } = useGetSharedLinks(folder.userId, folderId as string);

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={owner.imageSource}
            ownerName={owner.name}
            folderName={folder.name}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={
          <CardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
