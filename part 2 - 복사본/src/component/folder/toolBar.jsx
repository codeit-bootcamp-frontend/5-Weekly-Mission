import "./toolBar.css";
import deleteIcon from "../../icon/delete.svg";
import penIcon from "../../icon/pen.svg";
import shareIcon from "../../icon/share.svg";
import Modal from "./modal/modal";
import { useState } from "react";

const ToolBar = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);

  const showModalEdit = () => {
    setIsEditModalOpen(true);
  };

  const showModalDel = () => {
    setIsDelModalOpen(true);
  };

  return (
    <section className="folderTitle">
      <div className="folderArticleTitle">유용한 글</div>
      <div className="itemManager">
        <button className="ToolBtn">
          <img src={shareIcon} alt="shareIcon" />
          공유
        </button>
        <button onClick={showModalEdit} className="ToolBtn">
          <img src={penIcon} alt="penIcon" />
          이름 변경
        </button>
        {isEditModalOpen && (
          <Modal
            setModal={setIsEditModalOpen}
            title={"폴더 이름 변경"}
            content={
              <input
                className="modalInput"
                type="text"
                placeholder={"유용한 팁"}
              ></input>
            }
            btnname={"변경하기"}
            btnColor={"modalBtn"}
          />
        )}
        <button onClick={showModalDel} className="ToolBtn">
          <img src={deleteIcon} alt="deleteIcon" />
          삭제
        </button>
        {isDelModalOpen && (
          <Modal
            setModal={setIsDelModalOpen}
            title={"폴더 삭제"}
            content={<div className="modaltext">폴더명</div>}
            btnname={"삭제하기"}
            btnColor={"modalBtnDel"}
          />
        )}
      </div>
    </section>
  );
};

export default ToolBar;
