// Footer.js
import { Link } from 'react-router-dom';
import '../style.css';
import facebook from '../public/facebook.svg';
import twitter from '../public/twitter.svg';
import youtube from '../public/youtube.svg';
import instagram from '../public/instagram.svg';

function Footer() {
    return (
        <footer>
            <span className="footer_codeit">©codeit - 2024</span>
            <div className="footer_center_div">
                <Link to="/privacy" className="footer_txt">
                    Privacy Policy
                </Link>
                <Link to="/faq" className="footer_txt">
                    FAQ
                </Link>
            </div>
            <div className="footer_icon_div">
                <Link target="_blank" to="https://www.facebook.com/">
                    <img src={facebook} width="20" height="20" alt="facebook" />
                </Link>
                <Link target="_blank" to="https://www.twitter.com/">
                    <img src={twitter} width="20" height="20" alt="twitter" />
                </Link>
                <Link target="_blank" to="https://www.youtube.com/">
                    <img src={youtube} width="20" height="20" alt="youtube" />
                </Link>
                <Link target="_blank" to="https://www.instagram.com/">
                    <img src={instagram} width="20" height="20" alt="instagram" />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
