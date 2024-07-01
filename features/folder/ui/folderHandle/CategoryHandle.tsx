import Image, { StaticImageData } from "next/image";
import React from "react";

interface FolderHandleProps {
  src: StaticImageData;
  text: string;
  onClick: () => void;
}

export const FolderHandle = ({ src, text, onClick }: FolderHandleProps) => {
  return (
    <button onClick={onClick}>
      <Image src={src} alt={`${text} icon`} width={15} height={15} />
      <p>{text}</p>
    </button>
  );
};
