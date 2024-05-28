
import React, { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { BASE_URL } from "@/constants/baseURL";
import styles from "./FolderInfo.module.css";
import Image from "next/image";

interface FolderInfoProps {
    folderId: string;
}

const FolderInfo: React.FC<FolderInfoProps> = ({ folderId }) => {
    const folderData = useFetch(`${BASE_URL}folders/${folderId}`);
    const [userId, setUserId] = useState<number | null>(null);
    const userData = useFetch(userId ? `${BASE_URL}users/${userId}` : "");

    useEffect(() => {
        if (folderData && folderData.data && folderData.data.length > 0) {
            setUserId(folderData.data[0].user_id);
        }
    }, [folderData]);

    return (
        <div className={styles.folder_info_container}>
            <div className={styles.folder_info}>
                {userData && userData.data && (
                    <>
                        <Image
                            src={userData.data[0].image_source}
                            alt='프로필'
                            width={60}
                            height={60}
                        />
                        <span className={`${styles.owner_name} span`}>{userData.data[0].name}</span>
                    </>
                )}
                {folderData && folderData.data && (
                    <h2 className={`${styles.folder_name} h2`}>{folderData.data[0].name}</h2>
                )}
            </div>
        </div>
    );
};

export default FolderInfo;
