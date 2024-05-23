import { getElapsedTime } from "@/lib/util/getClapsedTime";
import { format } from "date-fns/format";
import { useState } from "react";
import React from "react";
import styles from "./CardList.module.css";
import DEFAULT_IMAGE from "@/public/assets/card-default.png";

interface ItemProps {
  item: {
    createdAt: string;
    imageSource?: string;
    url: string;
    description: string;
  };
}

const FolderItem: React.FC<ItemProps> = (props) => {
  const { item } = props;
  const createdAd = getElapsedTime(item.createdAt);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      href={item.url}
      target="blank"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.CardList_item}`}>
        <div
          className={
            `${styles.CardList_item_img}` + (isHovered ? " hoverd" : "")
          }
          style={{
            backgroundImage: `url(${item.imageSource ?? DEFAULT_IMAGE})`,
          }}
        ></div>
        <div className={`${styles.CardList_contents}`}>
          <span className="CardList-item-createdAt">{createdAd}</span>
          <p className={`${styles.CardList_item_description}`}>
            {item.description}
          </p>
          <span className="CardList-item-date">
            {format(new Date(item.createdAt), "yyyy. MM. dd")}
          </span>
        </div>
      </div>
    </a>
  );
};
export default FolderItem;
