import "./cardListSearch.css";
import Search from "../search";
import CardList from "./cardList";

const CardListSearch = () => {
  return (
    <section className="cardListSearch">
      <Search />
      <CardList />
    </section>
  );
};

export default CardListSearch;
