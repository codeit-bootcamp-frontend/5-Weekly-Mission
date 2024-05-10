import { format } from "date-fns/format";
import { getElapsedTime } from "../util/getClapsedTime";
import { useState } from "react";
import React from "react";

interface ItemProps {
  item: {
    createdAt: string;
    imageSource?: string;
    url: string;
    description: string;
  };
}

function FolderItem({ item }: ItemProps) {
  const createdAd = getElapsedTime(item.createdAt);
  const DEFAULT_IMAGE = "../assets/card-default.png";
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
      <div className="CardList-item">
        <div
          className={"CardList-item-img" + (isHovered ? " hoverd" : "")}
          style={{
            backgroundImage: `url(${item.imageSource ?? DEFAULT_IMAGE})`,
          }}
        ></div>
        <div className="CardList-contents">
          <span className="CardList-item-createdAt">{createdAd}</span>
          <p className="CardList-item-description">{item.description}</p>
          <span className="CardList-item-date">
            {format(new Date(item.createdAt), "yyyy. MM. dd")}
          </span>
        </div>
      </div>
    </a>
  );
}
export default FolderItem;
