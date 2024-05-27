import * as S from "./ShareModalContent.styled";
import { useEffect } from "react";
import icon_share_kakao from "@/public/image/icon/icon_share_kakao.svg";
import icon_share_facebook from "@/public/image/icon/icon_share_facebook.svg";
import icon_share_link from "@/public/image/icon/icon_share_link.svg";
import Image from "next/image";
import { urlCopy } from "@/utills/copy";

const SHARE_OPTION = [
  {
    keyId: "kakaotalk",
    img: icon_share_kakao,
    imgAlt: "카카오톡 아이콘",
    buttonName: "카카오톡",
  },
  {
    keyId: "facebook",
    img: icon_share_facebook,
    imgAlt: "페이스북 아이콘",
    buttonName: "페이스북",
  },
  {
    keyId: "copy",
    img: icon_share_link,
    imgAlt: "링크복사 아이콘",
    buttonName: "링크 복사",
  },
];

const ShareModalContent = () => {
  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init("cae1ba4eba9abe8224f3933654a8ff05");
  }, []);

  const handleShareIcon = (shareOptionBtn: string) => {
    switch (shareOptionBtn) {
      case "kakaotalk":
        shareKakao();
        break;
      case "facebook":
        break;
      case "copy":
        urlCopy();
        break;
      default:
        break;
    }
  };

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "폴더 공유",
        description: "폴더 공유",
        imageUrl:
          "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          webUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "http://localhost:3000",
            //webUrl: 'http://localhost:3000',
          },
        },
      ],
    });
  };

  return (
    <>
      {SHARE_OPTION.map((item) => {
        return (
          <>
            <S.ShareContent
              key={item.keyId}
              onClick={() => handleShareIcon(item.keyId)}
            >
              <Image src={item.img} alt={item.imgAlt} />
              <span>{item.buttonName}</span>
            </S.ShareContent>
          </>
        );
      })}
    </>
  );
};

export default ShareModalContent;
