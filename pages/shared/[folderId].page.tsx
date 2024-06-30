import { useRouter } from "next/router";
import { useLink } from "@/hooks/api/useLink";
import LinkListPageLayout from "@/components/LinkListPageLayout";
import UserProfileAndTitle from "@/components/UserProfileAndTitle";
import SearchBar from "@/common/SearchBar";
import LinkCards from "@/components/LinkCards";
import EmptyLinkCards from "@/components/EmptyLinkCards";
import styles from "@/styles/LinkListPage.module.css";

function SharedFolder() {
  const { query } = useRouter();
  const localAccessToken =
    typeof window !== "undefined" && localStorage.getItem("accessToken");
  const { folderId } = query;
  const id = Number(folderId);
  const { links } = useLink({
    folderId: id,
    localAccessToken,
  });

  return (
    <LinkListPageLayout>
      <UserProfileAndTitle />
      <section className={styles.mainContainer}>
        <SearchBar />
        {links && links.length > 0 ? (
          <LinkCards links={links} />
        ) : (
          <EmptyLinkCards />
        )}
      </section>
    </LinkListPageLayout>
  );
}

export default SharedFolder;
