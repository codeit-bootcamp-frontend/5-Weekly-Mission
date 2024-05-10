import { format } from "date-fns/format";
import { getElapsedTime } from "../util/getClapsedTime";
import { useState } from "react";
import KebabButton from "./KebabButton";
import React from "react";

interface ItemProps {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}

interface ItemResponse {
  item: ItemProps;
}

function FolderCardListItem({ item }: ItemResponse) {
  const DEFAULT_IMAGE = "../assets/card-default.png";
  const createdAd = getElapsedTime(item.created_at);
  const [isHovered, setIsHovered] = useState(false);
  const linkUrl = item.url;
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleDelete = () => {};

  const handleAddToFolder = () => {};

  return (
    <a
      // href={item.url}
      target="blank"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CardList-item">
        <div
          className={"CardList-item-img" + (isHovered ? " hoverd" : "")}
          style={{
            backgroundImage: `url(${item.image_source ?? DEFAULT_IMAGE})`,
          }}
        ></div>
        <div className="CardList-contents">
          <KebabButton onAddToFolder={handleAddToFolder} linkUrl={linkUrl} />
          <span className="CardList-item-createdAt">{createdAd}</span>
          <p className="CardList-item-description">{item.description}</p>
          <span className="CardList-item-date">
            {format(new Date(item.created_at), "yyyy. MM. dd")}
          </span>
        </div>
      </div>
    </a>
  );
}

export default FolderCardListItem;
