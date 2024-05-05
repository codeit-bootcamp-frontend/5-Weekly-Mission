import SEARCH_IMAGE from "./imgSrc/search.svg";
import { SearchBarTemplate, Input, Img } from "./design";
import { ChangeEventHandler, MouseEventHandler } from "react";

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchBar = ({
  value,
  onChange,
  onCloseClick,
}: SearchBarProps) => {
  return (
    <SearchBarTemplate>
      <Input
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <Img src={SEARCH_IMAGE} alt="검색창인 것을 알려주는 돋보기 아이콘" />
    </SearchBarTemplate>
  );
};
