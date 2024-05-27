import * as S from "./Footer.styled";
import icon_facebook from "@/public/image/icon/icon_facebook.png";
import icon_twitter from "@/public/image/icon/icon_twitter.png";
import icon_youtube from "@/public/image/icon/icon_youtube.png";
import icon_instagram from "@/public/image/icon/icon_instagram.png";
import SnsLink from "@/components/layout/footer/SnsLink";
import { aTagPreventDefault } from "@/utills/temp";
import Link from "next/link";

const snsInfo = [
  {
    url: "https://www.facebook.com/",
    img: icon_facebook,
    imgAlt: "페이스북 아이콘",
  },
  {
    url: "https://twitter.com/",
    img: icon_twitter,
    imgAlt: "트위터 아이콘",
  },
  {
    url: "https://www.youtube.com/",
    img: icon_youtube,
    imgAlt: "유튜브 아이콘",
  },
  {
    url: "https://www.instagram.com/",
    img: icon_instagram,
    imgAlt: "인스타그램 아이콘",
  },
];

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.FooterContentWrap>
          <S.CompanyWrap>
            <span>©codeit - 2023</span>
          </S.CompanyWrap>
          <div>
            <S.ServiceWrap>
              <li>
                <Link href="#!" onClick={aTagPreventDefault}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#!" onClick={aTagPreventDefault}>
                  FAQ
                </Link>
              </li>
            </S.ServiceWrap>
          </div>
          <div>
            <S.SnsWrap>
              {snsInfo.map((item) => {
                return (
                  <SnsLink
                    key={item.url}
                    url={item.url}
                    img={item.img}
                    imgAlt={item.imgAlt}
                  />
                );
              })}
            </S.SnsWrap>
          </div>
        </S.FooterContentWrap>
      </div>
    </S.Footer>
  );
};

export default Footer;
