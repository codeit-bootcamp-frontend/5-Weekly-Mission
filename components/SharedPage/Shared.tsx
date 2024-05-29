import CardList from "../CardList";
import SearchBar from "../SearchBar";
import MainContent from "../MainContent";
import { LinkItem } from "../CardList";
import { useRef, useState } from "react";

const SEARCH_LINK = "링크를 검색해보세요";

function Shared({ items }: { items: LinkItem[] }) {
  const search = useRef<HTMLInputElement>(null);
  const [searching, setSearching] = useState<string>("");

  const searchedItems = items?.filter((item: LinkItem) => {
    if (!searching || searching.trim() === "") return true;
    return (
      item.url?.indexOf(searching) >= 0 ||
      item.title?.indexOf(searching) >= 0 ||
      item.description?.indexOf(searching) >= 0
    );
  });

  return (
    <MainContent>
      <SearchBar
        placeholder={SEARCH_LINK}
        search={search}
        searching={searching}
        setSearching={setSearching}
      />
      <CardList items={searchedItems} />
    </MainContent>
  );
}

export default Shared;
