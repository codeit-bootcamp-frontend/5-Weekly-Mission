import React, { useState } from "react";
import styles from "./Modal.module.css";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL, DEPLOY_URL } from "../../constants/baseURL";
import Image from "next/image";
import { Link } from "../../types/interface";

interface ModalProps {
    title: string;
    subtitle?: string;
    input?: boolean;
    placeholder?: string;
    list?: boolean;
    btnText?: string;
    btnColor?: "submit" | "delete";
    share?: boolean;
    folderId?: string | null;
    onClose: () => void;
    onSubmit?: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({
    title,
    subtitle,
    input,
    placeholder,
    list,
    btnText,
    btnColor,
    share,
    folderId,
    onClose,
    onSubmit,
}: ModalProps) => {
    const [inputValue, setInputValue] = useState("");
    const folderList = useFetch(`${BASE_URL}users/1/folders`);
    const [isError, setIsError] = useState(false);
    const url = `${DEPLOY_URL}shared/${folderId}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        if (inputValue.trim() !== "") {
            setIsError(false);
        } else {
            setIsError(true);
        }
    };

    const handleSubmit = () => {
        if (inputValue.trim() === "") {
            setIsError(true);
        } else {
            setIsError(false);
            if (onSubmit) {
                onSubmit(inputValue);
                setInputValue("");
            }
        }
    };

    const handleCopyUrl = () => {
        navigator.clipboard
            .writeText(url)
            .then(() => {
                alert("클립보드에 복사하였습니다.");
            })
            .catch((error) => {
                alert("복사를 실패하였습니다.");
            });
    };

    const initKakaoSDK = () => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init("bab4fbe2388df19be8aee73ca45a5cef");
        }
    };

    const shareKakaoLink = (url: string) => {
        initKakaoSDK();

        window.Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "Linkbrary",
                description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요.",
                imageUrl: "https://ibb.co/cgDjBG1",
                link: {
                    mobileWebUrl: url,
                    webUrl: url,
                },
            },
            buttons: [
                {
                    title: "보러가기",
                    link: {
                        mobileWebUrl: url,
                        webUrl: url,
                    },
                },
            ],
        });
    };

    const shareFacebook = (url: string) => {
        let title = "Linkbrary";
        window.open(
            `http://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}&t=${title}`,
            "Linkbrary",
            "width=400, height=400"
        );
    };

    const [selectedFolderIds, setSelectedFolderIds] = useState<string[]>([]);

    const handleFolderClick = (folderId: string) => {
        if (selectedFolderIds.includes(folderId)) {
            setSelectedFolderIds(selectedFolderIds.filter((id) => id !== folderId));
        } else {
            setSelectedFolderIds([...selectedFolderIds, folderId]);
        }
    };

    return (
        <div className={styles.modal_background} onClick={onClose}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_container}>
                    <h2 className={`${styles.title} h2`}>{title}</h2>
                    <span className={`${styles.subtitle} span`}>{subtitle}</span>
                </div>
                <div className={styles.submit_container}>
                    {input && (
                        <input
                            className={`${styles.input} ${isError ? styles.error : ""} input`}
                            type='text'
                            placeholder={placeholder}
                            value={inputValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    {list && (
                        <ul className={`${styles.list} ul`}>
                            {folderList &&
                                folderList.data.map((folder: Link) => (
                                    <li
                                        key={folder.id}
                                        className={`${styles.list_content} ${
                                            selectedFolderIds.includes(folder.id) && styles.selected
                                        }`}
                                        onClick={() => handleFolderClick(folder.id)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                handleFolderClick(folder.id);
                                            }
                                        }}
                                    >
                                        <div className={styles.list_item}>
                                            <div className={styles.list_name}>{folder.name}</div>
                                        </div>
                                        <div className={styles.list_count}>
                                            {folder.link.count}개 링크
                                        </div>
                                        {selectedFolderIds.includes(folder.id) && (
                                            <Image
                                                src='/assets/check.png'
                                                width={14}
                                                height={14}
                                                alt='check'
                                                className={styles.check_icon}
                                            />
                                        )}
                                    </li>
                                ))}
                        </ul>
                    )}
                    {btnColor === "submit" && (
                        <button
                            className={`${styles.submit_button} ${
                                isError ? styles.disabled : ""
                            } button
                            `}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleSubmit();
                                }
                            }}
                        >
                            {btnText}
                        </button>
                    )}
                    {btnColor === "delete" && (
                        <button
                            className={`${styles.delete_button} button`}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleSubmit();
                                }
                            }}
                        >
                            {btnText}
                        </button>
                    )}
                    {share && folderList && (
                        <div className={styles.sns_container}>
                            <div className={styles.sns}>
                                <Image
                                    className={styles.sns_image}
                                    src='/assets/kakaotalk.png'
                                    width={42}
                                    height={42}
                                    alt='kakaotalk'
                                    tabIndex={0}
                                    onClick={() => shareKakaoLink(url)}
                                />
                                <span className={styles.sns_text}>카카오톡</span>
                            </div>
                            <div className={styles.sns}>
                                <Image
                                    className={styles.sns_image}
                                    src='/assets/facebook.png'
                                    width={42}
                                    height={42}
                                    alt='facebook'
                                    tabIndex={0}
                                    onClick={() => shareFacebook(url)}
                                />
                                <span className={styles.sns_text}>페이스북</span>
                            </div>
                            <div className={styles.sns}>
                                <Image
                                    className={styles.sns_image}
                                    src='/assets/link.png'
                                    width={42}
                                    height={42}
                                    alt='link'
                                    tabIndex={0}
                                    onClick={handleCopyUrl}
                                />
                                <span className={styles.sns_text}>링크 복사</span>
                            </div>
                        </div>
                    )}
                </div>
                <Image
                    src='/assets/close.svg'
                    width={24}
                    height={24}
                    className={styles.close_btn}
                    onClick={onClose}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            onClose();
                        }
                    }}
                    tabIndex={0}
                    alt='close'
                />
            </div>
        </div>
    );
};

export default Modal;
