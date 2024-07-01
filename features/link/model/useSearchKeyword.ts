import { useKeywordState } from "@/shared/store/useSearchState";
import { Link } from "@/types/link";
import * as Hangul from "hangul-js";

const useSearchKeyword = (linkList: Link[] | undefined) => {
  const { keyword } = useKeywordState();
  if (!linkList) return;
  if (!keyword) return linkList;

  const keywordArray = Hangul.disassemble(keyword);
  const keywordString = keywordArray.join("");

  const koreanRegex = /[\u3131-\uD79D]/;
  const englishRegex = /[a-zA-Z]/;

  const filteredData = linkList.filter((link) => {
    if (koreanRegex.test(keywordString)) {
      const descriptionArray = Hangul.disassemble(link.description || "");
      const descriptionString = descriptionArray.join("");
      return descriptionString.includes(keywordString);
    } else if (englishRegex.test(keywordString)) {
      return link.description?.toLowerCase().includes(keyword.toLowerCase());
    }
  });

  return filteredData;
};

export default useSearchKeyword;
