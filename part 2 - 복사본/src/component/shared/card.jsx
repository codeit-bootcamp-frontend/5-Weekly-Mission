import "../card.css";
import noImg from "../../img/이미지 없을 때 배경.svg";

const Card = ({ date, title, url, img }) => {
  function displayedAt(date) {
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
  }

  return (
    <>
      <a href={url} className="card" target="_blank" rel="noopener noreferrer">
        <img className="cardImg" alt="cardImg" src={img ?? noImg} />
        <div className={"cardText"}>
          <p>{displayedAt(date)}</p>
          <div className="font4">{title}</div>
          <div className="font6">{date?.slice(0, 10).replace(/-/g, ".")}</div>
        </div>
      </a>
    </>
  );
};

export default Card;
