import FolderList from "./folderlist";
import SearchBar from "@/src/components/searchbar/searchbar";
import styles from "./foldermain.module.css";
import { useState , ChangeEvent} from "react";

function FolderMain() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.folderMain}>
      <SearchBar handleInput={handleInputValue}/>
      <FolderList searchValue={inputValue}/>
    </div>
  );
}

export default FolderMain;
