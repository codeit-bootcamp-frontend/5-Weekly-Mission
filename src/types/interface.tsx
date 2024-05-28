export interface Link {
    id: string;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
    link: {
        count: number;
    };
}

export interface Card {
    id: string;
    url: string;
    showStar?: boolean;
    image_source?: string;
    title?: string;
    description?: string;
    created_at: string;
}

export interface SharedMainProps {
    folderId?: string;
    userId?: number;
}

export interface FolderInfo {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
}

export interface User {
    id: number;
    created_at: string;
    name: string;
    image_source: string;
    email: string;
    auth_id: string;
}