import React, { useState } from "react";
import styles from "./folderList.module.css";
import bluePlusIcon from "@/public/img/folder/bluePlus.svg";
import Image from "next/image";
import Modal from "@//shared/ui/modal/linkModal/LinkModal";
import { useFolderState } from "@/shared/store/useFolderState";

import { useRouter } from "next/router";
import { FolderBtn } from "@/entities/folder";
import { AddFolderModal } from "@/features/folder";
import { useGetFolderList } from "@/queries/folder/useGetFolderList";
import { useQuery } from "@tanstack/react-query";

export const FolderList = () => {
  const { data: folderListData } = useQuery(useGetFolderList.queryOptions());
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setFolderName } = useFolderState();
  const router = useRouter();
  const folderList = folderListData?.data.data;

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <FolderBtn
          onClick={() => {
            router.push("/folder");
            setFolderName("전체");
          }}
          folder={{ name: "전체", id: 0 }}
        />
        {folderList?.map((folder) => {
          return (
            <FolderBtn
              onClick={() => {
                router.push(`/folder/${folder.id}`);
                setFolderName(folder.name);
              }}
              key={folder.id}
              folder={folder}
            />
          );
        })}
      </div>
      <button
        onClick={() => setIsOpenModal(true)}
        className={styles.addFolderBtn}
      >
        <p>폴더추가</p>
        <Image src={bluePlusIcon} alt="bluePlusIcon" width={16} height={16} />
      </button>
      {isOpenModal && (
        <Modal onClickCloseModal={() => setIsOpenModal(false)}>
          <AddFolderModal />
        </Modal>
      )}
    </div>
  );
};
