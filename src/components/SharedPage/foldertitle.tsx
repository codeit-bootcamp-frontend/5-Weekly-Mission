import { useFetch } from "@/src/usefetch";
import styles from "./foldertitle.module.css";
function FolderTitle() {
  const folderData = useFetch(
    `https://bootcamp-api.codeit.kr/api/sample/folder`
  );

  return (
    <div className={styles.folderTitle}>
      <div className={styles.folderTitle__container}>
        <img
          className={styles.folder__img}
          src={folderData?.folder?.owner?.profileImageSource}
          alt="프로필 이미지"
        />
        <h2 className={styles.folder__tagName}>{folderData?.folder?.owner?.name}</h2>
        <h1 className={styles.folder__name}>{folderData?.folder?.name}</h1>
      </div>
    </div>
  );
}

export default FolderTitle;
