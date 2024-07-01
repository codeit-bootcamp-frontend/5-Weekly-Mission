import "./title.css";
import { useContext } from "react";
import { folderContext } from "./sharedMain";

const Title = () => {
  const data = useContext(folderContext);

  const name = data.title?.name;
  const profileImage = data.title?.profileImageSource;
  const folderName = data.folderName;

  return (
    <section className="my-bookmark">
      <div className="my-bookmark-title">
        <img className="profileImage" src={profileImage}></img>
        <div className="titleName font6">{name}</div>
        <div className="folderName">{folderName}</div>
      </div>
    </section>
  );
};

export default Title;
