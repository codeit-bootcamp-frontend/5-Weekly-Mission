import { SEARCH_ICON } from "./SearchIcon";
import styles from "./SearchBar.module.css";
import React, { useState } from "react";

function SearchBar({ onSearch }: any) {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    onSearch(inputValue); // 입력값을 상위 컴포넌트로 전달
  };

  return (
    <div className={`${styles.SearchBar}`}>
      <img
        src={SEARCH_ICON}
        className={`${styles.SearchBar_InputSearch_icon}`}
      ></img>
      <input
        className={`${styles.SearchBar_InputSearch}`}
        onChange={handleChange}
        value={input}
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}

export default SearchBar;
