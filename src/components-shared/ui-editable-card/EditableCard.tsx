import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import React, { useCallback, useRef, useState } from "react";
import { Card } from "@/src/components-common/ui-card";
import { CardContent } from "@/src/components-common/ui-card-content";
import { CardImage } from "@/src/components-common/ui-card-image";
import { Popover } from "@/src/components-common/ui-popover/Popover";
import type { EditedSampleLink } from "../../../types/data-access-types";
import Image from "next/image";

const cx = classNames.bind(styles);

interface EditableCardProps extends EditedSampleLink {
  popoverPosition: Record<string, number | undefined>;
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
}

interface handlerType {
  (event: React.MouseEvent<HTMLElement>): void;
}

export const EditableCard: React.FC<EditableCardProps> = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const kebabButtonRef = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKebabClick: handlerType = (event) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick: handlerType = (event) => {
    event.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick: handlerType = (event) => {
    event.preventDefault();
    onAddToFolderClick();
    setIsPopoverOpen(false);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <Image
            width={34}
            height={34}
            src="images/star.svg"
            alt="즐겨찾기를 나타내는 별"
          />
        </button>
        <button
          ref={kebabButtonRef}
          className={cx("kebab")}
          onClick={handleKebabClick}
        >
          <Image
            width={21}
            height={17}
            src="images/kebab.svg"
            alt="더보기를 나타내는 점 3개"
          />
        </button>
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={kebabButtonRef}
          anchorPosition={popoverPosition}
          onBackgroundClick={handleBackgroundClick}
        >
          <ul className={cx("popover-list")}>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddToFolderClick}>폴더에 추가</li>
          </ul>
        </Popover>
      </Card>
    </a>
  );
};
