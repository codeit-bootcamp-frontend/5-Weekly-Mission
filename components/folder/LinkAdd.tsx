import * as S from "./LinkAdd.styled";
import useModal from "@/hooks/useModal";
import linkAdd from "@/public/image/icon/link-add.svg";
import Button from "@/components/common/Button";
import Image from "next/image";
import LinkAddContent from "../common/modal/modalContent/LinkAddContent";
import { useState } from "react";

const LinkAdd = () => {
  const { openModal } = useModal();
  const [linkText, setLinkText] = useState("");

  const handleButtonClick = () => {
    openModal({
      props: { title: "폴더에 추가", subTitle: linkText },
      component: <LinkAddContent linkUrl={linkText} />,
    });
  };

  const changeLinkText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkText(e.target.value);
  };

  return (
    <S.LinkAddForm>
      <div>
        <S.LinkAddIconWrap>
          <Image src={linkAdd} alt="링크 추가 아이콘" />
        </S.LinkAddIconWrap>
        <S.LinkAddInput
          type="text"
          value={linkText}
          placeholder="링크를 추가해 보세요"
          onChange={changeLinkText}
        />
        <Button type="linkAdd" handleButtonClick={handleButtonClick}>
          추가하기
        </Button>
      </div>
    </S.LinkAddForm>
  );
};

export default LinkAdd;
