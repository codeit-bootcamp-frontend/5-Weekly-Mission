import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";

export default function SharedFolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="sticky top-0 z-10 w-full bg-[--Background] px-[3.2rem] py-[2rem] lg:px-[20rem]">
        <div className="flex w-fit flex-col items-start justify-center">
          <Link href="/folder">
            <Image src={Logo} alt="메인 로고" width={133} height={24} />
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
