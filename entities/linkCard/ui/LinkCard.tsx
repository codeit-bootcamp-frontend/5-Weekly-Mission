import { Link } from "@/types/link";
import React from "react";
import styles from "./linkCard.module.css";
import Image from "next/image";
import { formatDate } from "@/shared/model/date/date";
import kebabIcon from "@/public/img/link/kebab.svg";
import useHandleKebab from "@/features/link/model/useHandleKebab";

interface LinkCardProps {
  link?: Link;
  children: React.ReactNode;
}

export const LinkCard = ({ link, children }: LinkCardProps) => {
  const { kebabRef, isOpenKebab, handleIsOpenKebab } = useHandleKebab();

  // TODO: kebab과 관련된 로직을 분리해야 합니다. --> kebab에 관련된 ui와 기능은 features에 있는 것이 맞습니다.
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={
          link?.image_source ||
          "https://ssl.pstatic.net/sstatic/search/common/og_v3.png"
        }
        alt="img"
        width={325}
        height={192}
      />
      <div className={styles.content}>
        <div className={styles.timesWrap}>
          <p className={styles.timesAgo}>10 minutes ago</p>
          <button ref={kebabRef} onClick={handleIsOpenKebab}>
            <Image
              className={styles.kebabIcon}
              src={kebabIcon}
              alt="kebabIcon"
            />
            {isOpenKebab && children}
          </button>
        </div>
        <p className={styles.description}>{link?.description}</p>
        <p className={styles.createdAt}>{formatDate(link?.created_at!)}</p>
      </div>
    </div>
  );
};
