import { create } from "zustand";

interface FolderState {
  folderId: number;
  folderName: string;
  setFolderId: (folderId: number | null) => void;
  setFolderName: (folderName: string) => void;
}

export const useFolderState = create<FolderState>((set) => ({
  folderId: 0,
  folderName: "전체",
  setFolderId: (folderId: number | null) => {
    set({ folderId: folderId ?? 0 });
  },
  setFolderName: (folderName: string) => {
    set({ folderName });
  },
}));
