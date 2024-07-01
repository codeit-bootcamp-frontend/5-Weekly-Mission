import "./linkAddInput.css";
import linkIcon from "../../icon/link.svg";

const LinkAddInput = () => {
  return (
    <section className="linkAdd">
      <img className="linkIcon" src={linkIcon} />
      <input
        className="linkInput"
        type="text"
        placeholder="링크를 추가해 보세요."
      />
      <button className="header-btn">추가하기</button>
    </section>
  );
};

export default LinkAddInput;
