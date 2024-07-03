import { changeDate, calculateDate } from "@/util/util";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { LinkData } from "@/hooks/useGetFolder";

export default async function SharedLinkItem({ item }: { item: LinkData }) {
  const { url, description, image_source, title } = item;
  const nowDate = new Date();
  const createDate = changeDate(new Date(item.created_at));
  const date = calculateDate(
    (Number(nowDate) - Number(new Date(item.created_at))) / 1000,
  );

  return (
    <Link href={url} target="_blank" rel="noreferrer">
      <div className="relative flex w-[34rem] flex-col items-center rounded-[1.5rem] text-[1.6rem] no-underline shadow-[0_5px_25px_0px_rgba(0,0,0,0.3)]">
        <div className="flex h-[23.5rem] w-full flex-col items-center overflow-hidden rounded-[1.5rem_1.5rem_0_0]">
          {image_source ? (
            <div className="relative h-full w-full transition ease-in hover:scale-[170%]">
              <Image
                src={image_source}
                alt="카드 이미지"
                fill
                objectFit="cover"
              />
            </div>
          ) : (
            <div>
              <Image src={logo} alt="빈 이미지" width={133} height={24} />
            </div>
          )}
        </div>
        <div className="relative flex w-full flex-col gap-[1rem] rounded-b-[1.5rem] bg-[--Section-white] px-[2rem] py-[1.5rem]">
          <p className="text-[1.3rem] text-[--Description]">
            {date.time} {date.result} ago
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.4rem]">
            {title ? title : description}
          </p>
          <p className="h-[2.4rem] text-[1.4rem]">{createDate}</p>
        </div>
      </div>
    </Link>
  );
}
