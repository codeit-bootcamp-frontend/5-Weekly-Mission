import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Icon({ image, alt }: { image: string; alt: string }) {
  const snsUrl = `https://www.${alt}.com/`;

  return (
    <Link href={snsUrl} target="_blank" rel="noreferrer">
      <Image src={image} alt={`${alt} icon`} width={20} height={20} />
    </Link>
  );
}

function Footer() {
  return (
    <div className="mx-auto my-0 w-full bg-[--Footer-black] px-[10.4rem] pb-[6.4rem] pt-[3.2rem] text-[1.6rem] text-[#cfcfcf]">
      <div className="relative mb-[4.4rem] flex items-center justify-between">
        <div className="m-0 text-[1.6rem] text-[--Description]">
          ©codeit - 2023
        </div>
        <div className="flex items-start gap-[3rem]">
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className="flex items-center gap-[1.2rem]">
          <Icon image="/akar-icons_facebook-fill.png" alt="facebook" />
          <Icon image="/akar-icons_twitter-fill.png" alt="twitter" />
          <Icon image="/akar-icons_youtube-fill.png" alt="youtube" />
          <Icon image="/ant-design_instagram-filled.png" alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
