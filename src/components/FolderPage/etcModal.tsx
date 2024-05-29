import Portal from "./Portal";
import styles from "./etcModal.module.css";
import { useEffect } from "react";
import CloseImg from "@/public/assets//_close.svg";

interface ModalAbout {
  about: string;
  btn: string;
  isDelete: boolean;
  folderName: string;
}

interface EtcModalProps {
  modalAbout: ModalAbout;
  onClick: () => void;
}

function EtcModal({ modalAbout, onClick } : EtcModalProps) {
  const { about, btn, isDelete, folderName } = modalAbout;

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
        <div className={styles.ModalBackground}></div>
        <div className={styles.ModalContent}>
          <span className={styles.text}>{about}</span>
          <span className={styles.folderName}> {folderName} </span>
          {!isDelete &&
          <input
            type="text"
            placeholder="내용 입력"
            className={styles.input}
          ></input>}
          {!isDelete ? (
            <button className={styles.Okbtn} onClick={onClick}>
              {btn}
            </button>
          ) : (
            <button className={styles.Deletebtn} onClick={onClick}>
              삭제하기
            </button>
          )}

          <img
            src={CloseImg}
            alt="닫기 버튼 이미지"
            className={styles.CloseImg}
            onClick={onClick}
          ></img>
        </div>
      </div>
    </Portal>
  );
}

export default EtcModal;
