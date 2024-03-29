import { Link } from "react-router-dom";
import facebookImg from "../images/facebook.svg";
import twitterImg from "../images/twitter.svg";
import instagramImg from "../images/instagram.svg";
import youtubeImg from "../images/youtube.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__section">
          <div className="footer__year">©codeit - 2023</div>
          <div className="footer__link">
            <Link to="privacy.html">Privacy Policy</Link>
            <Link to="faq.html">FAQ</Link>
          </div>
          <div className="footer__social">
            <Link to="https://www.facebook.com/">
              <img src={facebookImg} alt="Facebook" />
            </Link>
            <Link to="https://twitter.com/">
              <img src={twitterImg} alt="Twitter" />
            </Link>
            <Link to="https://youtube.com">
              <img src={youtubeImg} alt="Youtube" />
            </Link>
            <Link to="https://instagram.com">
              <img src={instagramImg} alt="Instagram" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
