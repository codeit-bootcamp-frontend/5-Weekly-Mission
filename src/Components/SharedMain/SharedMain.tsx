import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import styles from "./SharedMain.module.css";
import FolderInfo from "../FolderInfo/FolderInfo";
import Image from "next/image";
import { SharedMainProps } from "@/types/interface";
import { useSharedData } from "@/api/parseData";
import { useFetch } from "@/hooks/useFetch";
import { BASE_URL } from "@/constants/baseURL";

const SharedMain: React.FC<SharedMainProps> = ({ folderId }) => {
    const [userId, setUserId] = useState<number | null>(null);
    const folderData = useFetch(`${BASE_URL}folders/${folderId}`);

    useEffect(() => {
        if (folderData && folderData.data && folderData.data.length > 0) {
            setUserId(folderData.data[0].user_id);
        }
    }, [folderData]);

    // folderId가 undefined인 경우
    const sharedData = useSharedData(userId, folderId ?? "");

    return (
        <main className={styles.main}>
            <FolderInfo folderId={folderId ?? ""} />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <Image src='/assets/Search.svg' width={15} height={15} alt='search_icon' />
                    <input
                        className={`${styles.search_input} input`}
                        placeholder='링크를 검색해보세요'
                    />
                </div>
                <Cards items={sharedData} />
            </section>
        </main>
    );
};

export default SharedMain;
