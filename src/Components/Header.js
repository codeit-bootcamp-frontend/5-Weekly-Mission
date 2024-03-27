// Header.js
import { useFetch } from './hooks/useFetch';
import { Link } from 'react-router-dom';
import logo from '../public/logo.svg';
import '../style.css';

function Header() {
    const profileData = useFetch('https://bootcamp-api.codeit.kr/api/sample/user');

    return (
        <header className="navbar">
            <Link to="/" className="logo">
                <img src={logo} width="133" height="24" alt="logo" />
            </Link>
            {profileData ? (
                <div className="profile">
                    <img
                        src={profileData.profileImageSource}
                        alt="profile"
                        className="profile_img"
                    />
                    <span>{profileData.email}</span>
                </div>
            ) : (
                <Link to="../sign/signin.html" className="login_button">
                    로그인
                </Link>
            )}
        </header>
    );
}

export default Header;
