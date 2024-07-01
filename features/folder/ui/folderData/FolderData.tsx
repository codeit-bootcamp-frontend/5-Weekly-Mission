import React, { useState } from "react";
import styles from "./folderData.module.css";
import Modal from "../../../../shared/ui/modal/linkModal/LinkModal";
import useSearchKeyword from "@/features/link/model/useSearchKeyword";
import { useRouter } from "next/router";
import { EditModal, DeleteModal, ShareModal } from "@/features/folder";
import { LinkCard } from "@/entities/linkCard";
import { FolderOption } from "@/widgets/folder";
import { LinkKebab } from "@/features/link";
import { useQuery } from "@tanstack/react-query";
import { useGetLinklist } from "@/queries/link/useGetLinklist";

interface ModalType {
  [key: string]: JSX.Element;
}

export const FolderData = () => {
  const { folderId } = useRouter().query;

  const { data: linkDataListData } = useQuery(
    useGetLinklist.queryOptions(folderId),
  );

  const linkDataList = linkDataListData?.data.data;

  const filteredList = useSearchKeyword(linkDataList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("edit");

  const modalTypeConfig = {
    edit: (
      <Modal onClickCloseModal={() => setIsModalOpen(false)}>
        <EditModal />
      </Modal>
    ),
    delete: (
      <Modal onClickCloseModal={() => setIsModalOpen(false)}>
        <DeleteModal />
      </Modal>
    ),
    share: (
      <Modal onClickCloseModal={() => setIsModalOpen(false)}>
        <ShareModal />
      </Modal>
    ),
  } as ModalType;

  return (
    <section className={styles.container}>
      <p className={styles.folderName}>유용한 글</p>
      <FolderOption
        setIsModalOpen={setIsModalOpen}
        setModalType={setModalType}
      />
      {filteredList?.length ? (
        <div className={styles.linkList}>
          {filteredList.map((link) => {
            return (
              <LinkCard key={link.id} link={link}>
                <LinkKebab />
              </LinkCard>
            );
          })}
        </div>
      ) : (
        <div>
          <p className={styles.notFoundLink}>저장된 링크가 없습니다</p>
        </div>
      )}
      {isModalOpen && modalTypeConfig[modalType]}
    </section>
  );
};
