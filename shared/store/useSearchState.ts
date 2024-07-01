import { create } from "zustand";

interface keywordState {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const useKeywordState = create<keywordState>((set) => ({
  keyword: "",
  setKeyword: (keyword: string) => set({ keyword: keyword }),
}));
