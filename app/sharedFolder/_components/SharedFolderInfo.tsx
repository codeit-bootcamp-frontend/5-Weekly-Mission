import { User } from "@/contexts/UserContext";
import Image from "next/image";

interface FolderInfoType {
  id: number;
  created_at: Date;
  favorite: boolean;
  name: string;
  user_id: number;
}

export default function SharedFolderInfo({
  owner,
  folderInfo,
}: {
  owner: User;
  folderInfo: FolderInfoType;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[--Background] pb-[6rem] pt-[2rem]">
      <Image
        src={owner?.image_source}
        alt="owner 이미지"
        width={60}
        height={60}
      />
      <p className="mt-[1.2rem] h-[2.4rem] text-[1.6rem] font-[400] leading-[2.4rem]">
        {owner?.name}
      </p>
      <p className="mt-[2rem] h-[5.5rem] text-[4rem] font-[600] leading-normal">
        {folderInfo?.name}
      </p>
    </div>
  );
}
