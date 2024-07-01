import "../cardList.css";
import Card from "./card";
import { useContext } from "react";
import { folderContext } from "./sharedMain";

const CardList = () => {
  const data = useContext(folderContext);
  const links = data?.links;

  const Cards =
    links &&
    links.map((link) => (
      <Card
        key={link.id}
        date={link.createdAt}
        title={link.description}
        url={link.url}
        img={link.imageSource}
      />
    ));

  return <section className="cardList">{Cards}</section>;
};

export default CardList;
