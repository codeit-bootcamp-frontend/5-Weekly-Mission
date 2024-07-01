import "./search.css";
import searchIcon from "../icon/Search.svg"

const Search = () => {
  return (
    <section className="search">
      <img className="seach-icon" src={searchIcon} />
      <input
        className="search-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      ></input>
    </section>
  );
};

export default Search;
