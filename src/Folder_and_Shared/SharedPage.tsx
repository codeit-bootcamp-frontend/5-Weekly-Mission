import Layout from "Layout";
import { useGetFolder } from "./data-access/useGetFolder";
import { SharedPageLayout } from "./page-frame";
import { CardList } from "./ui/CardList";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { ReadOnlyCard } from "./ui/ReadOnlyCard";
import { useSearchLink } from "./util/useSearchLink";

export function SharedPage() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout position={"static"}>
      <SharedPageLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
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
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}
