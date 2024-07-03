import * as S from "../styles/index.styled";
import MainSectionCard from "../components/MainSectionCard/MainSectionCard";
import { sectionDescription } from "../util/sectionDescription";
import { Button } from "../components/Button/Button";
import Link from "next/link";
import Image from "next/image";

function Main() {
  return (
    <S.Main>
      <S.Main__Header>
        <S.Header__contents>
          <S.Slogan>
            <S.Slogan_gradient>세상의 모든 정보</S.Slogan_gradient>를<br />
            쉽게 저장하고 관리해 보세요
          </S.Slogan>
          <Link href="/folder" style={{ textDecoration: "none" }}>
            <Button size={"lg"} isActive={false}>
              링크 추가하기
            </Button>
          </Link>
          <S.Header__image>
            <S.HeaderImage>
              <Image src="/image25.png" alt="헤더 이미지" fill />
            </S.HeaderImage>
          </S.Header__image>
        </S.Header__contents>
      </S.Main__Header>
      <S.Main__contents>
        {sectionDescription.map((item) => (
          <MainSectionCard item={item} key={item.id} />
        ))}
      </S.Main__contents>
    </S.Main>
  );
}

export default Main;
