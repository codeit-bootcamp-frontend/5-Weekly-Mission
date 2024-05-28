import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Article from "../Article/Article";
import styles from "./FolderMain.module.css";
import { useUserData, useFolderDataAll, useFolderData, useUserFolders } from "../../api/parseData";
import Modal from "../Modal/Modal";
import Image from "next/image";
import useModalScrollLock from "../../hooks/useModalScrollLock";
import { Card } from "@/types/interface";
import { useRouter } from "next/router";

const ALL_FOLDERS = "전체";
const MODAL_TYPES = {
    ADD_FOLDER: "ADD_FOLDER",
    SHARE: "SHARE",
    EDIT: "EDIT",
    DELETE_FOLDER: "DELETE_FOLDER",
} as const;

type ModalType = keyof typeof MODAL_TYPES | null;

interface Props {
    folderId?: string | null;
}

function FolderMain({ folderId }: Props) {
    const [activeButton, setActiveButton] = useState<string>(ALL_FOLDERS);
    const [activeButtonId, setActiveButtonId] = useState<string | null>(folderId || null);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalType, setModalType] = useState<ModalType>(null);

    const userData = useUserData();
    const userId = userData?.id;
    const router = useRouter();

    useEffect(() => {
        if (folderId) {
            setActiveButtonId(folderId);
            setActiveButton("");
        } else {
            setActiveButtonId(null);
            setActiveButton(ALL_FOLDERS);
        }
    }, [folderId]);

    const folders = useUserFolders(userId);
    const allFolderData = useFolderDataAll(userId);
    const folderData = useFolderData(userId, activeButtonId);
    const handleFolderClick = (folderId: string, folderName: string) => {
        setActiveButton(folderName);
        setActiveButtonId(folderId);

        if (folderId) {
            router.push(`/folder/${folderId}`);
        } else {
            router.push("/folder");
        }
    };

    const openModal = (type: ModalType) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    const handleSubmit = () => {
        closeModal();
    };

    useModalScrollLock(modalType);

    const filteredCards: Card[] = activeButtonId ? folderData : allFolderData;

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    const filteredCardsBySearchTerm: Card[] = searchTerm
        ? filteredCards.filter((card) => {
              const { url, title, description } = card;
              return (
                  url.includes(searchTerm) ||
                  title!.includes(searchTerm) ||
                  description!.includes(searchTerm)
              );
          })
        : filteredCards;

    return (
        <main className={styles.main}>
            <Article />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <Image src='/assets/Search.svg' width={15} height={15} alt='search_icon' />
                    <input
                        className={`${styles.search_input} input`}
                        placeholder='링크를 검색해보세요'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <Image
                            src='/assets/_close.png'
                            className={styles.close_btn}
                            width={24}
                            height={24}
                            alt='close'
                            onClick={handleClearSearch}
                            tabIndex={0}
                        />
                    )}
                </div>
                {searchTerm && (
                    <div className={styles.search_result}>
                        <span className={styles.search_result_keyword}>{`${searchTerm}`}</span>
                        <span className={styles.search_result_txt}>으로 검색한 결과입니다.</span>
                    </div>
                )}

                <div className={styles.main_btn_div}>
                    <ul className={`${styles.folder_name_list} ul`}>
                        <li>
                            <button
                                className={`${styles.folder_btn_lg} ${
                                    activeButton === ALL_FOLDERS && styles.active
                                } button`}
                                onClick={() => handleFolderClick("", ALL_FOLDERS)}
                                id='all'
                            >
                                {ALL_FOLDERS}
                            </button>
                        </li>
                        {folders &&
                            folders.map((folder: any) => (
                                <li key={folder.id}>
                                    <button
                                        className={`${styles.folder_btn_lg} ${
                                            activeButton === folder.name && styles.active
                                        } button`}
                                        onClick={() => handleFolderClick(folder.id, folder.name)}
                                        id={folder.id}
                                    >
                                        {folder.name}
                                    </button>
                                </li>
                            ))}
                    </ul>
                    <button
                        className={`${styles.add_folder_btn} button`}
                        id='addFolderBtn'
                        onClick={() => openModal("ADD_FOLDER")}
                    >
                        폴더 추가+
                    </button>
                    {modalType === "ADD_FOLDER" && (
                        <Modal
                            title='폴더 추가'
                            input
                            placeholder='내용 입력'
                            btnText='추가하기'
                            btnColor='submit'
                            onClose={closeModal}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
                <div className={styles.main_sub_nav}>
                    <p className={styles.active_button}>{activeButton}</p>
                    {activeButton !== "전체" && (
                        <div className={styles.main_sub_nav_side}>
                            <button
                                className={`${styles.main_sub_nav_side_items} button`}
                                id='shareFolderBtn'
                                onClick={() => openModal("SHARE")}
                            >
                                <Image
                                    src='/assets/share.svg'
                                    width={18}
                                    height={18}
                                    alt='폴더 공유'
                                    className={styles.icons}
                                />
                                <span className={styles.icon_text}>공유</span>
                            </button>
                            {modalType === "SHARE" && (
                                <Modal
                                    title='폴더 공유'
                                    subtitle={activeButton}
                                    onClose={closeModal}
                                    share
                                    folderId={activeButtonId}
                                />
                            )}
                            <button
                                className={`${styles.main_sub_nav_side_items} button`}
                                onClick={() => openModal("EDIT")}
                            >
                                <Image
                                    src='/assets/pen.svg'
                                    width={18}
                                    height={18}
                                    alt='폴더 이름 변경'
                                    className={styles.icons}
                                />
                                <span className={styles.icon_text}>이름 변경</span>
                            </button>
                            {modalType === "EDIT" && (
                                <Modal
                                    title='폴더 이름 변경'
                                    input
                                    placeholder={activeButton}
                                    btnColor='submit'
                                    btnText='변경하기'
                                    onClose={closeModal}
                                    onSubmit={handleSubmit}
                                />
                            )}
                            <button
                                className={`${styles.main_sub_nav_side_items} button`}
                                onClick={() => openModal("DELETE_FOLDER")}
                            >
                                <Image
                                    src='/assets/deleteIcon.svg'
                                    width={18}
                                    height={18}
                                    alt='폴더 삭제'
                                />
                                <span className={styles.icon_text}>삭제</span>
                            </button>
                            {modalType === "DELETE_FOLDER" && (
                                <Modal
                                    title='폴더 삭제'
                                    subtitle={activeButton}
                                    btnColor='delete'
                                    btnText='삭제하기'
                                    onClose={closeModal}
                                    onSubmit={handleSubmit}
                                />
                            )}
                        </div>
                    )}
                </div>
                <Cards items={filteredCardsBySearchTerm} />
            </section>
        </main>
    );
}

export default FolderMain;
