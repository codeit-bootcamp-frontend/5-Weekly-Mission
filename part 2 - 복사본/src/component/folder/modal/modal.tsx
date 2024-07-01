import React from "react";
import "./modal.css"
import closeIcon from "../../../icon/_close.svg";

interface ModalProps {
  setModal: (value: boolean) => void;
  title: string;
  content?: React.ReactNode;
  btnname: string;
  btnColor: string;
}


const Modal = ({ setModal, title, content, btnname, btnColor  }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="modalBack"onClick={closeModal}>
      <div className="modal">
        <div className="modalTitle">{title}</div>
        {content}
        <button className={btnColor}>{btnname}</button>
        <button className="modalClose" onClick={closeModal}>
          <img src={closeIcon} alt="closeIcon" />
        </button>
      </div>
    </section>
  );
};

export default Modal;