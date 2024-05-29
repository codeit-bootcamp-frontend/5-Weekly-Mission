import styles from "./folderpluslink.module.css";
import linkImg from "@/public/assets/link.svg";
import { useState } from "react";
import FolderPlusModal from "./addToFolder";
import Image from "next/image";

function FolderPlusLink() {
  const [showModal, setShowModal] = useState(false);
  const [inputLink, setInputLink] = useState('');

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLink(e.target.value);
  };

  // 입력값이 비어있는지 확인하여 버튼 활성화/비활성화
  const isInputEmpty = inputLink.trim() === '';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputBar}>
          <input
            className={styles.container__input}
            placeholder="링크를 추가해 보세요."
            value={inputLink}
            onChange={handleInputChange}
          />
          <Image src={linkImg} alt="Link 이미지" className={styles.linkImg} />
          <button
            className={styles.addLinkButton}
            onClick={openModal}
            disabled={isInputEmpty} // 입력값이 비어있으면 버튼 비활성화
          >
            추가하기
          </button>
        </div>
      </div>
      {showModal && (
        <FolderPlusModal
          onClick={closeModal}
          link={inputLink}
        />
      )}
    </>
  );
}

export default FolderPlusLink;
