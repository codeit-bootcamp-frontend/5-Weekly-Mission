import { Header } from "@/entities/folder";
import { FixedAddFolderBtn, FolderData } from "@/features/folder";
import { AddLink, SearchBar } from "@/features/link";
import { FolderList, PaddingPage } from "@/widgets/folder";
import { Footer } from "@/widgets/home";

const Home = () => {
  return (
    <>
      <Header />
      <AddLink />
      <SearchBar />
      <PaddingPage>
        <FolderList />
        <FolderData />
      </PaddingPage>
      <Footer />
      <FixedAddFolderBtn />
    </>
  );
};

export default Home;
