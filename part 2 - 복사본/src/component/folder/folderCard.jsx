import "../card.css";
import starIcon from "../../icon/star.svg";
import kebab from "../../icon/kebab.svg";
import noImg from "../../img/이미지 없을 때 배경.svg";
import Modal from "./modal/modal";
import { useState } from "react";

const FolderCard = ({ date, title, url, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelLinkModalOpen, setIsDelLinkModalOpen] = useState(false);

  const displayedAt = (date) => {
    const milliSeconds = new Date() - new Date(date);
    const seconds = milliSeconds / 1000;

    switch (true) {
      case seconds < 120:
        return `1 minute ago`;
      case seconds < 60 * 60:
        const minutes = seconds / 60;
        return `${Math.floor(minutes)} minutes ago`;
      case seconds < 60 * 60 * 24:
        const hours = seconds / (60 * 60);
        return `${Math.floor(hours)} hours ago`;
      case seconds < 60 * 60 * 24 * 30:
        const days = seconds / (60 * 60 * 24);
        return `${Math.floor(days)} days ago`;
      case seconds < 60 * 60 * 24 * 30 * 12:
        const months = seconds / (60 * 60 * 24 * 30);
        return `${Math.floor(months)} months ago`;
      default:
        const years = seconds / (60 * 60 * 24 * 365);
        return `${Math.floor(years)} years ago`;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showModalDelLink = () => {
    setIsDelLinkModalOpen(true);
  };

  return (
    <article className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="cardImg" alt="cardImg" src={img ?? noImg} />
        <img className="starIcon" alt="starIcon" src={starIcon} />
      </a>
      <div className={"cardText"}>
        <p>{displayedAt(date)}</p>
        <div className="dropdown">
          <div>
            <button className="dropdownBtn" onClick={toggleMenu}>
              <img className="kebab" alt="kebab" src={kebab} />
            </button>
          </div>
          {isOpen && (
            <ul className="dropdownContent">
              <li onClick={showModalDelLink}>
                삭제하기
              </li>
              {isDelLinkModalOpen && (
                <Modal
                  setModal={setIsDelLinkModalOpen}
                  title={"링크 삭제"}
                  content={<div className="modaltext">httpw://www.abc.com</div>}
                  btnname={"삭제하기"}
                  btnColor={"modalBtnDel"}
                />
              )}
              <li>폴더에 추가</li>
            </ul>
          )}
        </div>
        <div className="font4">{title}</div>
        <div className="font6">{date?.slice(0, 10).replace(/-/g, ".")}</div>
      </div>
    </article>
  );
};

export default FolderCard;
