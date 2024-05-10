import "./InputAddLink.css";
import { LINK_ICON } from "./LinkIcon";
import React from "react";

function InputAddLink() {
  return (
    <form className="InputAddLink-form">
      <div className="InputAddLink-form-container">
        <img src={LINK_ICON} alt="링크 아이콘" className="LinkIcon" />
        <input
          className="InputAddLink-input"
          placeholder="링크를 추가해 보세요."
        ></input>
        <button className="btn InputAddLink-btnAdd">추가하기</button>
      </div>
    </form>
  );
}

export default InputAddLink;
