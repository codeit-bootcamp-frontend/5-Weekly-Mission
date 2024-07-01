import "../cardList.css";
import FolderCard from "./folderCard";
import { useContext } from "react";
import { folderContext } from "./folderMain";

const CardList = () => {
  const data = useContext(folderContext);

  const Cards = Object.entries(data).map(([key, value]) => (
    <FolderCard
      key={key}
      date={value.created_at}
      title={value.description}
      url={value.url}
      img={value.image_source}
      className="folderCard"
    ></FolderCard>
  ));

  return <section className="cardList">{Cards}</section>;
};

export default CardList;
