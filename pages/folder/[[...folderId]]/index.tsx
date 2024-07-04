import { CardList, FolderToolBar, LinkForm } from "@/src/feature";
import { Layout, SearchBar } from "@/src/ui";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import {
  useIntersectionObserver,
  useSearchLink,
  ALL_LINKS_ID,
} from "@/src/util";
import { useGetLinks, useGetFolders } from "@/src/data-access";
import { ROUTE } from "@/src/util";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

const FolderPage = () => {
  const router = useRouter();
  const { folderId } = router.query;
  const currentFolderId = useMemo(() => {
    if (router.isReady) {
      return folderId?.[0] ? parseInt(folderId?.[0]) : ALL_LINKS_ID;
    }
    return undefined;
  }, [router.isReady, folderId]);
  const { data: folders } = useGetFolders();
  const { data: links, loading } = useGetLinks(currentFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.replace(ROUTE.로그인);
    }
  }, [router]);

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={
          <LinkForm
            hideFixedLinkForm={isIntersecting}
            currentFolderId={currentFolderId}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar folders={folders} selectedFolderId={currentFolderId} />
        }
        cardList={
          loading ? null : (
            <CardList links={result} currentFolderId={currentFolderId} />
          )
        }
      />
    </Layout>
  );
};

export default FolderPage;
