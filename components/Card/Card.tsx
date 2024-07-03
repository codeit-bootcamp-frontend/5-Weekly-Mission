import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { changeDate, calculateDate } from "../../util/util";
import * as S from "./Card.styled";
import KebabMenu from "../KebabMenu/KebabMenu";
import { LinkData } from "../../hooks/useGetFolder";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putLinkLike } from "@/service/api";

function Card({
  item,
  isActive,
  index,
  favoriteFolder,
  setUrl,
  setLinkId,
}: {
  item: LinkData;
  isActive: boolean;
  index: number;
  favoriteFolder?: string;
  setUrl?: Dispatch<SetStateAction<string>>;
  setLinkId?: Dispatch<SetStateAction<number>>;
}) {
  const [createdAt, setCreatedAt] = useState({ time: 0, result: "" });
  const [fullDate, setFullDate] = useState("");
  const [kebabView, setKebabView] = useState(false);
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const { url, description, id, image_source, title } = item;
  const [imageUrl, setImageUrl] = useState(image_source);
  const kebabIconRef = useRef<HTMLImageElement>(null);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (data: { linkId: string; favorite: boolean }) => {
      if (data.favorite) {
        await putLinkLike(data.linkId, false);
      } else {
        await putLinkLike(data.linkId, true);
      }
    },
    onMutate: async (data: { linkId: string; favorite: boolean }) => {
      if (folderId) {
        const result = queryClient.getQueryData<any>(["links", folderId]);
        const refetchLink = { ...result.data[index], favorite: !data.favorite };
        let refetchLinkArr = [...result.data];
        refetchLinkArr[index] = refetchLink;
        queryClient.setQueryData(["links", folderId], (prev: any) => {
          return {
            ...prev,
            data: refetchLinkArr,
          };
        });
      } else {
        const result = queryClient.getQueryData<any>(["links"]);
        const refetchLink = { ...result.data[index], favorite: !data.favorite };
        let refetchLinkArr = [...result.data];
        refetchLinkArr[index] = refetchLink;
        queryClient.setQueryData(["links"], (prev: any) => {
          return {
            ...prev,
            data: refetchLinkArr,
          };
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["links", folderId],
      });
      queryClient.invalidateQueries({
        queryKey: ["links"],
      });
      queryClient.invalidateQueries({
        queryKey: ["links", favoriteFolder],
      });
    },
  });

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  const handleKebab = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    if (!kebabView) {
      setKebabView(true);
      setLinkId && setLinkId(id);
    } else {
      setKebabView(false);
    }
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
          {isActive && (
            <S.StarIcon
              onClick={(e) => {
                e.preventDefault();
                mutate({ linkId: String(item.id), favorite: item.favorite });
              }}
            >
              <Image
                src={item.favorite ? "/full_star.svg" : "/star.svg"}
                alt="별 이미지"
                fill
              />
            </S.StarIcon>
          )}
          <S.ImageArea>
            {imageUrl ? (
              <S.ItemImg>
                <Image
                  src={imageUrl}
                  alt="카드 이미지"
                  fill
                  onError={() => setImageUrl("")}
                />
              </S.ItemImg>
            ) : (
              <S.EmptyImg>
                <Image src={logo} alt="빈 이미지" width={133} height={24} />
              </S.EmptyImg>
            )}
          </S.ImageArea>
          <S.ItemInfo>
            {folderId && isActive && (
              <S.KebabIcon
                src="/kebab.svg"
                alt="kebabIcon"
                onClick={handleKebab}
                ref={kebabIconRef}
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
              kebabIconRef={kebabIconRef}
            />
          )}
        </S.ItemCard>
      </Link>
    </>
  );
}

export default Card;
