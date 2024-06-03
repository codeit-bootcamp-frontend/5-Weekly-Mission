import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { defaultImage } from "./constant";
import Image from "next/image";

const cx = classNames.bind(styles);

interface CardImageProps {
  imageSource: string;
  alt: string;
  isZoomedIn: boolean;
}

export const CardImage: React.FC<CardImageProps> = ({
  imageSource,
  alt,
  isZoomedIn,
}) => {
  return (
    <div className={cx("container")}>
      <Image
        fill
        alt={alt}
        src={imageSource ?? defaultImage}
        className={cx("image", { zoomin: isZoomedIn })}
      />
    </div>
  );
};
