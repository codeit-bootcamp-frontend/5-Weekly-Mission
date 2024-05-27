import * as S from "@/styles/pages/Main.styled";
import Image from "next/image";
import mainLinkDownload from "@/public/image/main_link-download.png";
import mainLinkName from "@/public/image/main_link-name.png";
import mainLinkShare from "@/public/image/main_link-share.png";
import mainLinkSearch from "@/public/image/main_link-search.png";
import mainLinkList from "@/public/image/main_link-list.png";
import Link from "next/link";

export default function Home() {
  //배포 테스트를위한 주석
  return (
    <>
      <main>
        <S.HeaderSection>
          <div>
            <h2>
              <span>세상의 모든 정보</span>를<br />
              쉽게 저장하고 관리해 보세요
            </h2>
          </div>
          <div>
            <S.AddLinkPage href="/folder">링크 추가하기</S.AddLinkPage>
          </div>
          <S.LinkAddImgWrap>
            <Image src={mainLinkList} alt="링크 리스트" />
          </S.LinkAddImgWrap>
        </S.HeaderSection>

        <S.ContentSection>
          <ul>
            <li>
              <S.ContentSectionWrap>
                <S.ContentItem>
                  <h2>
                    <S.ContentGradient order="1">원하는 링크</S.ContentGradient>
                    를<br /> 저장하세요
                  </h2>
                  {/* <S.ShowOnMobile>
                    <Image src={mainLinkDownload} alt="링크 저장" />
                  </S.ShowOnMobile> */}
                  <span>
                    나중에 읽고 싶은 글, 다시 보고 싶은 영상,
                    <br />
                    사고 싶은 옷, 기억하고 싶은 모든 것을
                    <br />한 공간에 저장하세요.
                  </span>
                </S.ContentItem>

                <S.ShowOnPc>
                  <Image src={mainLinkDownload} alt="링크 저장" />
                </S.ShowOnPc>
              </S.ContentSectionWrap>
            </li>
            <li>
              <S.ReverseContentSectionWrap>
                <S.ContentItem>
                  <h2>
                    링크를 폴더로{" "}
                    <S.ContentGradient order="2">관리</S.ContentGradient>하세요
                  </h2>
                  {/* <S.ShowOnMobile>
                    <Image src={mainLinkName} alt="링크 폴더" />
                  </S.ShowOnMobile> */}
                  <span>
                    나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
                  </span>
                </S.ContentItem>
                <S.ShowOnPc>
                  <Image src={mainLinkName} alt="링크 폴더" />
                </S.ShowOnPc>
              </S.ReverseContentSectionWrap>
            </li>
            <li>
              <S.ContentSectionWrap>
                <S.ContentItem>
                  <h2>
                    저장한 링크를{" "}
                    <S.ContentGradient order="3">공유</S.ContentGradient>해
                    보세요
                  </h2>
                  {/* <S.ShowOnMobile>
                    <Image src={mainLinkShare} alt="링크 공유" />
                  </S.ShowOnMobile> */}
                  <span>
                    여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                    동료들에게 쉽고 빠르게 링크를 공유해 보세요.
                  </span>
                </S.ContentItem>
                <S.ShowOnPc>
                  <Image src={mainLinkShare} alt="링크 공유" />
                </S.ShowOnPc>
              </S.ContentSectionWrap>
            </li>
            <li>
              <S.ReverseContentSectionWrap>
                <S.ContentItem>
                  <h2>
                    저장한 링크를{" "}
                    <S.ContentGradient order="4">검색</S.ContentGradient>해
                    보세요
                  </h2>
                  {/* <S.ShowOnMobile>
                    <Image src={mainLinkSearch} alt="링크 검색" />
                  </S.ShowOnMobile> */}
                  <span>중요한 정보들을 검색으로 쉽게 찾아보세요.</span>
                </S.ContentItem>
                <S.ShowOnPc>
                  <Image src={mainLinkSearch} alt="링크 검색" />
                </S.ShowOnPc>
              </S.ReverseContentSectionWrap>
            </li>
          </ul>
        </S.ContentSection>
      </main>
    </>
  );
}
