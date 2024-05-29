import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { changeDate, calculateDate } from '../../util/util';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';
import { LinkData } from '../../hooks/useGetFolder';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';

function Card({
  item,
  setUrl,
  onSelect,
  setLinkId,
}: {
  item: LinkData;
  setUrl?: Dispatch<SetStateAction<string>>;
  onSelect?: {
    id: string;
    name: string;
  };
  setLinkId?: Dispatch<SetStateAction<number>>;
}) {
  const [createdAt, setCreatedAt] = useState({ time: 0, result: '' });
  const [fullDate, setFullDate] = useState('');
  const [kebabView, setKebabView] = useState(false);
  const [like, setLike] = useState(false);
  const { url, description, id, image_source, title } = item;
  const [imageUrl, setImageUrl] = useState(image_source);

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  const handleKebab = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setKebabView(!kebabView);
    if (setLinkId) {
      setLinkId(id);
    }
    e.preventDefault();
  };

  useEffect(() => {
    const nowDate = new Date();
    const createDate = new Date(item.created_at);
    const date = (Number(nowDate) - Number(createDate)) / 1000;
    setCreatedAt(calculateDate(date));
    setFullDate(changeDate(createDate));
  }, [item]);

  return (
    <>
      <Link href={url} target="_blank" rel="noreferrer">
        <S.ItemCard>
          <S.StarIcon
            onClick={(e) => {
              setLike(!like);
              e.preventDefault();
            }}
          >
            <Image
              src={like ? '/full_star.svg' : '/star.svg'}
              alt="별 이미지"
              fill
            />
          </S.StarIcon>
          <S.ImageArea>
            {imageUrl ? (
              <S.ItemImg>
                <Image
                  src={imageUrl}
                  alt="카드 이미지"
                  fill
                  onError={() => setImageUrl('')}
                />
              </S.ItemImg>
            ) : (
              <S.EmptyImg>
                <Image src={logo} alt="빈 이미지" width={133} height={24} />
              </S.EmptyImg>
            )}
          </S.ImageArea>
          <S.ItemInfo>
            {onSelect && onSelect.name && (
              <S.KebabIcon
                src="/kebab.svg"
                alt="kebabIcon"
                onClick={handleKebab}
              />
            )}
            <S.ItemDate>{createdText}</S.ItemDate>
            <S.ItemDescription>{title ? title : description}</S.ItemDescription>
            <S.ItemFullDate>{fullDate}</S.ItemFullDate>
          </S.ItemInfo>
          {kebabView && (
            <KebabMenu
              url={url}
              setUrl={setUrl}
              id={id}
              setKebabView={setKebabView}
              kebabView={kebabView}
            />
          )}
        </S.ItemCard>
      </Link>
    </>
  );
}

export default Card;
