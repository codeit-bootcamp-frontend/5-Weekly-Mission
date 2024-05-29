import FolderPlusLink from "@/src/components/FolderPage/folderpluslink";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import FolderMain from "@/src/components/FolderPage/foldermain";
import styles from '@/styles/folder.module.css';

function Folder() {
  return (
    <div>
      <Header />
      <FolderPlusLink />
      <div className={styles.FolderMain}>
        <FolderMain />
        <Footer />
      </div>
    </div>
  );
}

export default Folder;
