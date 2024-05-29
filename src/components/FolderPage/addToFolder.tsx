import { useEffect, useState } from "react";
import styles from "./addToFolder.module.css";
import Portal from "./Portal";
import { useFetch } from "../../usefetch";
import CheckImg from "@/public/assets/check.svg";
import CloseImg from "@/public/assets/_close.svg";

interface LinkProps {
  name : string;
  counts : number;
  id : number;
  onClick : any;
  isSelected : boolean;
}

interface FolderPlusModalProps {
  onClick : () => void;
  link : string;
}

function Link({ name, counts, id, onClick, isSelected } : LinkProps) {
  return (
    <div className={`${isSelected ? styles.selectedFolder : styles.folder}`} onClick={() => onClick(id)}>
      <span className={styles.folderName}>{name}</span>
      <span className={styles.folderCounts}>{counts}개 링크</span>
      {isSelected && <img src={CheckImg} alt="체크 표시 이미지" className={styles.CheckImg}></img>}
    </div>
  );
}

function FolderPlusModal({ onClick, link }: FolderPlusModalProps) {
  const Folders = "https://bootcamp-api.codeit.kr/api/users/1/folders";
  const FoldersData = useFetch(Folders);
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);

  const handleFolder = (id: number) => {
    setSelectedFolder(id);
  }

  useEffect(() => {
    // 모달이 열렸을 때 스크롤 방지
    document.body.style.overflow = "hidden";

    // 컴포넌트가 unmount되거나 업데이트 될 때 스크롤 방지 해제
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []); // 한 번만 실행되도록 []를 dependency로 넘김

  return (
    <Portal elementId="modal-root">
      <div className={styles.ModalContainer}>
        <div className={styles.ModalBackground}></div>{" "}
        {/* 추가: 배경을 담당하는 요소 */}
        <div className={styles.ModalContent}>
          <span className={styles.text}>폴더에 추가</span>
          <span className={styles.Linkurl}>{link}</span>
          <div>
            {FoldersData?.data?.slice(1).map((folder : any) => (
              <Link key={folder?.id}name={folder?.name} counts={folder?.link?.count}id={folder?.id} onClick={handleFolder} isSelected={selectedFolder === folder?.id}></Link>
            ))}
          </div>
          <button onClick={onClick} className={styles.Okbtn}>
            추가하기
          </button>
          <img src={CloseImg} alt="닫기 버튼 이미지" className={styles.CloseImg} onClick={onClick}></img>
        </div>
      </div>
    </Portal>
  );
}

export default FolderPlusModal;
