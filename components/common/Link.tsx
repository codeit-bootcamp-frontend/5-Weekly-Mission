import { formatDate, getTimeAgo } from "@/utills/time";
import noImg from "@/public/image/no-img.png";
import kebab from "@/public/image/icon/kebab.svg";
import bookmarkStar from "@/public/image/icon/bookmark-star.svg";
import * as S from "./Link.styled";
import { useState } from "react";
import KebabList from "./KebabList";
import { LinkItemParam } from "@/types/Link";
import Image from "next/image";
import LinkTag from "next/link";

const Link = ({ linkInfo, isSetting }: LinkItemParam) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  const handleKebabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsKebabOpen(!isKebabOpen);
  };

  return (
    <S.LinkItem>
      <LinkTag href={linkInfo.url} target="_blank" rel="noreferrer">
        <S.ImgBox>
          <Image
            width={400}
            height={400}
            src={linkInfo.image_source ? linkInfo.image_source : noImg}
            alt="링크 이미지"
          />
        </S.ImgBox>
        {isSetting && (
          <button>
            <Image
              width={30}
              height={30}
              src={bookmarkStar}
              alt="즐겨찾기 아이콘"
            />
          </button>
        )}
        <S.ContentBox className="content-box">
          <S.AgoBox>
            {getTimeAgo(linkInfo.created_at)}
            {isSetting && (
              <button onClick={handleKebabClick}>
                <Image width={20} height={20} src={kebab} alt="케밥 아이콘" />
              </button>
            )}
            {isKebabOpen && (
              <KebabList
                linkId={linkInfo.id}
                linkUrl={linkInfo.url}
                setKebabOpen={setIsKebabOpen}
              />
            )}
          </S.AgoBox>
          <S.ContentParagraph>{linkInfo.description}</S.ContentParagraph>
          <S.CreateParagraph>
            {formatDate(linkInfo.created_at)}
          </S.CreateParagraph>
        </S.ContentBox>
      </LinkTag>
    </S.LinkItem>
  );
};

export default Link;
