import Image from "next/image";
import * as S from "./BookMark.styled";

interface Props {
  ownerInfo: {
    name: string;
    image_source: string;
  } | null;
  folderName: string | null;
}

const BookMark = ({ ownerInfo, folderName }: Props) => {
  if (!ownerInfo || !folderName) {
    return;
  }
  const { name, image_source } = ownerInfo;

  return (
    <div>
      <S.OwnerInfoWrap>
        <Image
          width={50}
          height={50}
          src={image_source ? image_source : ""}
          alt="소유자 프로필"
        />
        <span>{name}</span>
      </S.OwnerInfoWrap>

      <S.OwnerShared>{folderName}</S.OwnerShared>
    </div>
  );
};

export default BookMark;
