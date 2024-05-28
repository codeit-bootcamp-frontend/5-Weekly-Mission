import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../constants/baseURL";
import { FolderInfo } from "@/types/interface";
import { useRouter } from "next/router";

export interface Card {
    id: string;
    created_at: string;
    url: string;
    title?: string;
    description?: string;
    image_source?: string;
    imageSource?: string;
    showDot?: boolean;
    showStar?: boolean;
}

export interface Folder extends Card {
    favorite: boolean;
    link: {
        count: number;
    };
}

export function useFolderInfo(folderId: string) {
    const [data, setData] = useState<FolderInfo[]>([]);

    const folderData = useFetch(`${BASE_URL}folders/${folderId}`);

    useEffect(() => {
        if (folderData && folderData.folder) {
            const parsedData = folderData.data[0].links.map((link: FolderInfo) => ({
                id: link.id,
                created_at: link.created_at,
                name: link.name,
                user_id: link.user_id,
                favorite: link.favorite,
            }));
            setData(parsedData);
        }
    }, [folderData]);

    return data;
}
export function useSharedData(userId: number | null, folderId: string) {
    const [data, setData] = useState<Card[]>([]);

    const folderData = useFetch(
        userId ? `${BASE_URL}users/${userId}/links?folderId=${folderId}` : ""
    );

    useEffect(() => {
        if (folderData && folderData.data) {
            const parsedData = folderData.data.map((link: any) => ({
                id: link.id,
                created_at: link.created_at,
                url: link.url,
                title: link.title || "",
                description: link.description || "",
                image_source: link.image_source || "",
                showDot: false,
                showStar: false,
            }));
            setData(parsedData);
        }
    }, [folderData]);

    return data;
}

export function useUserData() {
    const [userData, setUserData] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            router.push("/signin");
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}users`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const userData = await response.json();
                setUserData(userData.data[0]);
            } catch (error) {
                console.error("Fetch user data error:", error);
            }
        };

        fetchUserData();
    }, [router]);

    return userData;
}

// 폴더 전체
export function useFolderDataAll(userId: string | null) {
    const [data, setData] = useState<Card[]>([]);

    useEffect(() => {
        if (!userId) return;

        const fetchLinkData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                if (!accessToken) return;

                const response = await fetch(`${BASE_URL}links`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user links");
                }

                const linksData = await response.json();

                const parsedData =
                    linksData.data.folder?.map((link: any) => ({
                        id: link.id,
                        created_at: link.created_at,
                        url: link.url,
                        title: link.title || "",
                        description: link.description || "",
                        image_source: link.image_source || "",
                        showDot: true,
                        showStar: true,
                    })) || [];
                setData(parsedData);
            } catch (error) {
                console.error("Fetch user links error:", error);
            }
        };

        fetchLinkData();
    }, [userId]);

    return data;
}

export function useFolderData(userId: string | null, folderId: string | null) {
    const [data, setData] = useState<Card[]>([]);

    useEffect(() => {
        if (!userId || !folderId) return;

        const fetchFolderData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                if (!accessToken) return;

                const response = await fetch(`${BASE_URL}links?folderId=${folderId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch folder data");
                }

                const linksData = await response.json();

                const parsedData =
                    linksData.data.folder?.map((link: any) => ({
                        id: link.id,
                        created_at: link.created_at,
                        url: link.url,
                        title: link.title || "",
                        description: link.description || "",
                        image_source: link.image_source || "",
                        showDot: true,
                        showStar: true,
                    })) || [];
                setData(parsedData);
            } catch (error) {
                console.error("Fetch folder data error:", error);
            }
        };

        fetchFolderData();
    }, [userId, folderId]);

    return data;
}

export function useUserFolders(userId: string | null) {
    const [folders, setFolders] = useState<any[]>([]);

    useEffect(() => {
        if (!userId) return;

        const fetchUserFolders = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                if (!accessToken) return;

                const response = await fetch(`${BASE_URL}folders`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user folders");
                }

                const foldersData = await response.json();
                setFolders(foldersData.data.folder);
            } catch (error) {
                console.error("Fetch user folders error:", error);
            }
        };

        fetchUserFolders();
    }, [userId]);

    return folders;
}
