import { useEffect } from "react";
import { useStoreState } from "@/hooks/state";
import { useUser } from "@/hooks/api/useUser";
import { useFolder } from "@/hooks/api/useFolder";
import { useLink } from "@/hooks/api/useLink";
import LinkListPageLayout from "@/components/LinkListPageLayout";
import LinkCards from "@/components/LinkCards";
import LinkAddForm from "@/components/LinkAddForm";
import SearchBar from "@/common/SearchBar";
import FoldersList from "@/components/FoldersList";
import EmptyLinkCards from "@/components/EmptyLinkCards";
import styles from "@/styles/LinkListPage.module.css";

function FolderPage() {
  const localAccessToken =
    typeof window !== "undefined" && localStorage.getItem("accessToken");
  const { setUser, setFolders, setIsLoadingWindow, isLoadingWindow } =
    useStoreState();
  const { user, isLoadingUser, isErrorUser } = useUser({
    localAccessToken,
  });
  const { folders, isLoadingFolders, isErrorFolders } = useFolder({
    localAccessToken,
  });
  const { links } = useLink({
    localAccessToken,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoadingWindow(false);

      if (user) {
        setUser(user);
      }
      if (folders) {
        setFolders(folders);
      }
    }
  }, [user, folders, setUser, setFolders, setIsLoadingWindow]);

  if (isLoadingWindow || isLoadingUser || isLoadingFolders) {
    return <div>Loading...</div>;
  }

  if (isErrorUser || isErrorFolders) {
    return <div>Error!!</div>;
  }

  return (
    <LinkListPageLayout>
      <LinkAddForm />
      <section className={styles.mainContainer}>
        <SearchBar />
        <FoldersList />
        {links && links.length > 0 ? (
          <LinkCards links={links} />
        ) : (
          <EmptyLinkCards />
        )}
      </section>
    </LinkListPageLayout>
  );
}

export default FolderPage;
