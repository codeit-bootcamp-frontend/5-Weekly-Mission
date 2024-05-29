import Header from "@/src/components/header/header";
import FolderTitle from "@/src/components/SharedPage/foldertitle";
import MainSection from "@/src/components/SharedPage/mainsection";
import Footer from "@/src/components/footer/footer";
import styles from "@/styles/shared.module.css";

function Shared() {
  return (
    <>
      <Header/>
      <div className={styles.PageMain}>
        <FolderTitle />
        <MainSection />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
