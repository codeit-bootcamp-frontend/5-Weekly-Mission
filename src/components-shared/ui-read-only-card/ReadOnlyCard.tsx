import React, { useState } from "react";
import { Card } from "@/src/components-common/ui-card";
import { CardContent } from "@/src/components-common/ui-card-content";
import { CardImage } from "@/src/components-common/ui-card-image";
import type { SampleLink } from "../../../types/data-access-types";

interface ReadOnlyCardProps
  extends Omit<SampleLink, "title" | "createdAt" | "id"> {
  createdAt: string;
  alt: string;
  elapsedTime: string;
}

export const ReadOnlyCard: React.FC<ReadOnlyCardProps> = ({
  createdAt,
  url,
  description,
  imageSource,
  alt,
  elapsedTime,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
      </Card>
    </a>
  );
};
