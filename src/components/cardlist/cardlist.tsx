import styles from "./cardlist.module.css";
import { useFetch } from "../../usefetch";
import DefaultImage from "@/public/assets/NoImage.svg";
import Link from "next/link";
import Image from "next/image";
import StarImg from "@/public/assets/star.svg";
import KebabImg from "@/public/assets/kebab.svg";
import { useState } from "react";
import CardKebab from "../FolderPage/CardKebab";

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

export const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

export const getElapsedTime = (createdAt: number) => {
  const now: number = Date.now();
  const createdAtDate: number = new Date(createdAt).getTime();
  const elapsedTime = now - createdAtDate;
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }
  if (year <= elapsedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }
  if (month <= elapsedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (day <= elapsedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};

function CardListItem({ item }: any) {
  const [showKebab, setShowkebab] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.imageSource || item.image_source || DefaultImage);

  const creatTime = item.createdAt ? item.createdAt : item.created_at;
  const creatDate = new Date(creatTime);
  const year = creatDate.getFullYear();
  const month = creatDate.getMonth() + 1;
  const day = creatDate.getDate();

  //const thumbnail = item.imageSource || item.image_source;

  const handleImgError = () => {
    setImgSrc(DefaultImage);
  };

  const closeKebab = () => {
    setShowkebab(false);
  };

  return (
    <div className={styles.CardListItem}>
      <div className={styles.CardListItem__imgs}>
        <Image
          src={imgSrc}
          alt={item.title}
          width={340}
          height={200}
          className={styles.CardListItem__img}
          onError={handleImgError}
        />
      </div>
      <Link href={item.url || "/"} target="_blank" className={styles.CardLink}>
        <div className={styles.CardInfo}>
          <p className={styles.CardInfo__time}>{getElapsedTime(creatTime)}</p>
          <p className={styles.CardInfo__title}>
            {item.description || item.title}
          </p>
          <p className={styles.CardInfo__date}>
            {year}. {month}. {day}
          </p>
          <Image
            src={KebabImg}
            alt="카드 케밥 버튼 이미지"
            className={styles.KebabImg}
            onClick={(e) => {
              e.stopPropagation(); // 상위 링크 클릭 방지
              e.preventDefault(); // 기본 링크 이벤트 방지
              setShowkebab(!showKebab);
            }}
          />
          {showKebab && <CardKebab closeKebab={closeKebab} />}
        </div>
      </Link>
      <Image
        src={StarImg}
        alt="즐겨찾기 버튼 이미지"
        className={styles.StarImg}
      />
    </div>
  );
}

interface CardListProps {
  url: string;
  searchValue: string;
  folder?: boolean;
}

function CardList({ url, searchValue, folder = false }: CardListProps) {
  const cardListItems = useFetch(url);

  const lowerSearchValue = searchValue.toLowerCase();

  //folder 페이지
  const filteredItems = cardListItems?.data?.filter((item: any) => {
    const title = item.title?.toLowerCase() || "";
    const url = item.url?.toLowerCase() || "";
    const description = item.description?.toLowerCase() || "";
    return (
      title.includes(lowerSearchValue) ||
      url.includes(lowerSearchValue) ||
      description.includes(lowerSearchValue)
    );
  });

  //shared 페이지
  const filteredFolderItems = cardListItems?.folder?.links?.filter(
    (item: any) => {
      const title = item.title?.toLowerCase() || "";
      const url = item.url?.toLowerCase() || "";
      const description = item.description?.toLowerCase() || "";
      return (
        title.includes(lowerSearchValue) ||
        url.includes(lowerSearchValue) ||
        description.includes(lowerSearchValue)
      );
    }
  );

  return (
    <div className={styles.cardList}>
      {filteredFolderItems?.map((link: any) => (
        <CardListItem key={link.id} item={link} />
      ))}
      {filteredItems?.length > 0
        ? filteredItems.map((link: any) => (
            <CardListItem key={link.id} item={link} />
          ))
        : folder && (
            <div className={styles.NoDataList}>저장된 링크가 없습니다.</div>
          )}
    </div>
  );
}

export default CardList;
