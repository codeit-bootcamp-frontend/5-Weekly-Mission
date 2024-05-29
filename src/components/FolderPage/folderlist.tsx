import { useFetch } from "../../usefetch";
import styles from "./folderlist.module.css";
import addImg from "@/public/assets//add.svg";
import { ReactNode, useState } from "react";
import EtcIcon from "./etcicon";
import CardList from "../cardlist/cardlist";
import EtcModal from "./etcModal";
import Image from "next/image";

interface ItemProps {
  children?: ReactNode;
  value?: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface Modalprops {
  about: string;
  btn: string;
  isDelete: boolean;
  folderName?: string;
}

function FolderListItem({ children, value, onClick, isActive }: ItemProps) {
  return (
    <button
      className={
        isActive
          ? `${styles.folderItem} ${styles.folderItem__active}`
          : styles.folderItem
      }
      onClick={onClick}
    >
      {children ? children : value}
    </button>
  );
}


interface FolderListProps {
  searchValue: string;
}

function FolderList({searchValue} : FolderListProps) {
  const [title, setTitle] = useState("전체");
  const [selectedId, setSelectedId] = useState<number | null>(null); // 새로운 상태 변수 추가
  const [showModal, setShowModal] = useState(false); //모달 on/off
  const [modalAbout, setModalAbout] = useState({
    about: "",
    btn: "",
    isDelete: false,
    folderName: "",
  }); //모달 about

  const other_folders_url =
    "https://bootcamp-api.codeit.kr/api/users/1/folders";
  const total_folders_url = "https://bootcamp-api.codeit.kr/api/users/1/links";
  const other_folders_links = `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${selectedId}`;
  const folderData = useFetch(other_folders_url);

  const handleTitle = (itemName: string, itemId: number) => {
    setTitle(itemName);
    setSelectedId(itemId); // 선택된 아이템의 ID를 설정
  };

  const handleAll = () => {
    setTitle("전체");
    setSelectedId(null); // 전체 버튼을 클릭할 때 선택된 아이템 ID를 null로 설정
  };

  const openModal = (
    about: string,
    btn: string,
    isDelete: boolean,
    folderName: string = '',
  ) => {
    setShowModal(true);
    setModalAbout((prev) => ({
      ...prev,
      about: about,
      btn: btn,
      isDelete: isDelete,
      folderName: folderName,
    }));
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // const handleModalAbout = (about) => {
  //   setModalAbout(about);
  // }

  return (
    <>
      <div className={styles.folderLists}>
        <div className={styles.folderList__Container}>
          <div className={styles.folderList}>
            <FolderListItem onClick={handleAll} isActive={selectedId === null}>
              전체
            </FolderListItem>{" "}
            {/* 전체 버튼 */}
            {folderData?.data?.map((item: any) => {
              return (
                <FolderListItem
                  key={item.id}
                  value={item.name}
                  onClick={() => handleTitle(item.name, item.id)}
                  isActive={selectedId === item.id}
                />
              );
            })}
          </div>
          <button
            className={styles.folderList__plus}
            onClick={() => openModal("폴더 추가", "추가하기", false)}
          >
            <div className={styles.folderList__plus__text}>폴더추가</div>
            <Image src={addImg} alt="십자가 모양 이미지" />
          </button>
        </div>

        <div className={styles.title__container}>
          <div className={styles.title}>{title}</div>
          {title !== "전체" ? (
            <EtcIcon
              openModal={openModal}
              folderName={title}
              currentFolderId={selectedId}
            />
          ) : (
            <div></div>
          )}
        </div>
        {title === "전체" ? (
          <CardList url={total_folders_url} searchValue={searchValue} folder={true} />
        ) : (
          <CardList url={other_folders_links} searchValue={searchValue} folder={true} />
        )}
      </div>
      {showModal && (
        <EtcModal modalAbout={modalAbout} onClick={closeModal}></EtcModal>
      )}
    </>
  );
}
export default FolderList;
