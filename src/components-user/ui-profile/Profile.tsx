import React, { useMemo } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "../data-access-user";
import Image from "next/image";
import { defaultImage } from "@/src/components-common/ui-card-image/constant";

const cx = classNames.bind(styles);

export type profileType = { email: string; profileImageSource: string } | null;

export const Profile: React.FC<{}> = () => {
  const { user } = useGetUser();
  const profile: profileType = useMemo(() => {
    /* NOTE: profile 이 null 값일 때는 연산낭비이므로 굳이 구조분해를 할 필요가 없었다. */
    if (!user) return null;
    const { email, profileImageSource, ...rest } = user;
    return { email, profileImageSource };
  }, [user]);

  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <Image
          fill
          src={profile?.profileImageSource ?? defaultImage}
          alt="프로필 이미지"
          style={{ objectFit: "contain" }}
        />
      </div>
      <span className={cx("email")}>{profile?.email}</span>
    </div>
  );
};
