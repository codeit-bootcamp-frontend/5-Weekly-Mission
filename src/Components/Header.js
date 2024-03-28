import logo from "../images/Linkbrary.svg";
import { Link } from "react-router-dom";
import "../index.style.css";
function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Linkbrary 로고" />
      </Link>
      <button className="header__login__btn">로그인</button>
      <div className="user">사용자</div>
    </header>
  );
}

export default Header;
