import SearchBar from "./searchbar";
import CardList from "@/src/components/cardlist/cardlist";
import styles from "./mainsection.module.css";
import { useState, ChangeEvent } from "react";

function MainSection() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.mainSection}>
      <SearchBar handleInput={handleInputValue} />
      <CardList
        url="https://bootcamp-api.codeit.kr/api/sample/folder"
        searchValue={inputValue}
      />
    </div>
  );
}

export default MainSection;
